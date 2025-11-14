function GetIDCnt(id, maxcnt) {
    var retval = 0;
    for (var i = 0; i < maxcnt; i++) {
        if ($("#" + id + i).html()) {
            retval++;
        }
    }
    return Math.floor(Math.random() * Math.floor(retval));
}

function LoginPrivacyDetail() {
    $('.cop_member_info').toggle();
}

function LoginCheck() {
    var UserID = $("#UserID").val();
    var UserPW = $("#UserPW").val();
    //var idcheck = /^[0-9a-zA-Z_-]{3,20}$/;
    //var pwcheck = /^[0-9a-zA-Z]{6,20}$/;

    if (UserID == "") {
        alert("ID를 입력해주세요.");
        $("#UserID").focus();
        return;
    } 
//    else if (!idcheck.test(UserID)) {
//        alert("ID형식이 잘못되었습니다.");
//        $("#UserID").focus();
//        return;
//    }
    
    if (UserPW == "") {
        alert("비밀번호를 입력해주세요.");
        $("#UserPW").focus();
        return;
    } 
//    else if (!pwcheck.test(UserPW)) {
//        alert("비밀번호 형식이 잘못되었습니다.");
//        $("#UserPW").focus();
//        return;
//    }

    LoginSubmit(UserID, UserPW);
    //$("#LoginForm").submit();
}

function LoginSubmit(UserID, UserPW) {
    var CheckKey = localStorage.getItem("LawnbPCAuth_" + UserID) == null ? "" : localStorage.getItem("LawnbPCAuth_" + UserID);
    /* 임시 바로 지울거임*/
    if (CheckKey == "") { CheckKey = getLoginIp(UserID);}
    /*******/
    var params = { "UserID": UserID, "UserPW": UserPW, "CheckKey": CheckKey }
    
    $("#UserID").prop("disabled", true);
    $("#UserPW").prop("disabled", true);

    LoginSubmitAjax(UserID, UserPW, params);
}

function getLoginIp(ui) {
    var curIp = ""
    var Now = new Date();
    var ipTime = Now.getMonth() + '-' + Now.getDate() + '-' + Now.getHours() + '-' + Now.getMinutes() + Now.getSeconds();
    if (typeof (ipNum) != 'undefined') curIp = ipNum + '-' + ipTime;
    localStorage.setItem("LawnbPCAuth_" + ui, curIp.replace(/\./gi, '-'));
    return curIp;
}

function LoginSubmitAjax(UserID, UserPW, params) {
    $("#bg_screen").show();
    sendNonBlockingAjaxJsonRequest("/Login/Submit/", params, function (result) {
        if (result[0][0]["ResultCode"] == "0") {
            // Wait for DD_RUM to load
            window.DD_RUM.onReady(function () {
                // Then set the user
                window.DD_RUM.setUser({
                    id: UserID // Use the UserID from the login
                    //name: '',
                    //email: '',
                    //plan: ''
                });
            });

            //if (dataLayer) {
            //    dataLayer.push({ 'userID_ID': UserID, 'userType1_ID': result[0][0]["UserClass"], 'userType2_ID': result[0][0]["Logger_Job"], 'event_name': 'logIn', 'event': 'logIn', 'member_type':result[0][0]["UserType"] });
            //}
            //최근검색어 //개인화로그인
            localStorage.removeItem("sWordDataList");
            localStorage.setItem("sWordDataList", JSON.stringify(result[1]));
            localStorage.setItem("PrivacyUserCode", result[2][0]["PrivacyUserCode"]);
            //ID저장시 쿠키등록
            if ($("#IDSave").prop("checked")) {
                IDSave(true, UserID);
            } else {
                IDSave(false, UserID);
            }

            var eventParams = {
                "IPUserID": $("#hdnIPUserID").val(),
                "IDUserID": UserID
            }

            // IP회원 개인화로그인 이벤트 결과
            if (EventFlag == "Y") {

                sendNonBlockingAjaxJsonRequest("/Event/SetIPMemberEventJoin/", eventParams, function (result) {                   
                    
                    if (result[0]["RESULTCODE"] == "1") {
                        $("#divEventJoinText").text('로앤비 "개인화 로그인" 이벤트에 참여 되었습니다.');

                        $('#bg_screen').show();
                        $('.enjoy_event_popup').show();
                        $('#pPersonalText').text('"개인화 로그인"을 통해 다양한 개인화 기능들을 더 편리하게 사용할 수 있습니다.');
                    }
                    else if (result[0]["RESULTCODE"] == "3") {
                        $("#divEventJoinText").text('로앤비 "개인화 로그인" 이벤트에 이미 참여 되었습니다.');

                        $('#bg_screen').show();
                        $('.enjoy_event_popup').show();
                        $('#pPersonalText').text('');
                    }
                    else {
                        alert(result[0]["RESULTMSG"]);
                        window.opener.location.reload();
                        window.close();
                    }
                });                
            }
            else {

                if (Referer.indexOf("/Login/") > 0 || Referer.indexOf("/PCAuth/") > 0) {
                    Referer = "/";
                }

                if (window.opener != undefined && window.opener != null && jQuery.isEmptyObject(window.opener) != true) { //현재창이 팝업이면
                    if (window.opener.location != undefined && window.opener.location != null) {
                        window.opener.location.reload();

                        window.close();
                        //location.href = Referer;
                    } else {
                        RedirectReferer();
                    }
                } else {
                    RedirectReferer();
                }
            }

        } else if (result[0][0]["ResultCode"] == "-3") {
            //location.href = "/PCAuth/RePCAuth/";
            var obj = [{ "name": "UserID", "value": UserID }, { "name": "UserPW", "value": UserPW },
                { "name": "UserName", "value": result[0][0]["UserName"] }, { "name": "UserHp", "value": result[0][0]["UserHp"] },
                { "name": "PCName", "value": encodeURI(result[0][0]["PCName"]) }, { "name": "Referer", "value": Referer },
                { "name": "CheckKey", "value": params.CheckKey}]
            POSTFORMCall("/PCAuth/RePCAuth/", obj);
        } else if (result[0][0]["ResultCode"] == "-4") {
            //location.href = "/PCAuth/NewPCAuth/";
            var obj = [{ "name": "UserID", "value": UserID }, { "name": "UserPW", "value": UserPW }, { "name": "UserName", "value": result[0][0]["UserName"] },
                { "name": "Referer", "value": Referer }, { "name": "CheckKey", "value": params.CheckKey}]
            POSTFORMCall("/PCAuth/NewPCAuth/", obj);
        } else if (result[0][0]["ResultCode"] == "-5" || result[0][0]["ResultCode"] == "-6") {
            //location.href = "/Member/Modify/";
            var obj = [{ "name": "UserID", "value": UserID }, { "name": "UserPW", "value": UserPW }, { "name": "UserClass", "value": result[0][0]["UserClass"] }, { "name": "Referer", "value": Referer }, { "name": "ResultCode", "value": result[0][0]["ResultCode"]}]
            POSTFORMCall("/Member/Modify/", obj);
        } else {
            $("#LoginFailLayer").show();
        }
    });
    $("#bg_screen").hide();
    $("#UserID").prop("disabled", false);
    $("#UserPW").prop("disabled", false);
}

// 이벤트 완료 시 이동 위치
function eventMove(_type, _target)
{
    window.opener.location.reload();
    window.close();
    if (_type == "Support_center")
    {
        window.open("//www.lawnb.com/Support/SupportManual?sPdf=865&mParam=manual", _target);
    }
    else if (_type == "member_regist")
    {
        window.open("//member.lawnb.com", _target);
    }
}


function RedirectReferer() {
    location.href = "/";
    return;

    //바닥페이지 Post Form
    if (Referer.indexOf("?") > 0) {
        location.href = Referer;
    } else {
        if (RefererParam == "") { location.href = Referer; }
        //console.log(RefererParam.replace(/&quot;/g, '"'));
        var obj = JSON.parse(RefererParam.replace(/&quot;/g, '"'));
        var f = document.createElement("form");
        f.setAttribute("method", "post");
        f.setAttribute("action", Referer);
        var params;
        var keycnt = 0;
        for (var key in obj) {
            if (key != null) {
                params = document.createElement("input");
                params.setAttribute("type", "hidden");
                params.setAttribute("name", key);
                params.setAttribute("value", NullToEmpty(obj[key]));
                f.appendChild(params);
                params = null;
                keycnt++;
            }
        };
        if (keycnt > 0) {
            document.body.appendChild(f);
            f.submit();
            document.body.removeChild(f);
        } else {
            location.href = Referer;
        }
    }
}

function IDSave(check, saveid) {
    var date = new Date();
    if (check) {
        date.setDate(date.getDate() + (10 * 365));
        document.cookie = "LAWNBID=" + saveid + "; expires=" + date.toGMTString() + "; path=/";
    } else {
        date.setDate(date.getDate() - 1);
        document.cookie = "LAWNBID=; expires=" + date.toGMTString() + "; path=/";
    }
}

function NullToEmpty(value) {
    return (value == null) ? "" : value
}