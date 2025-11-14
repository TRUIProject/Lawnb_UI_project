function getLoginIp(ui) {
    var curIp = ""
    var Now = new Date();
    var ipTime = Now.getMonth() + '-' + Now.getDate() + '-' + Now.getHours() + '-' + Now.getMinutes() + Now.getSeconds();
    if (typeof (ipNum) != 'undefined') curIp = ipNum + '-' + ipTime;
    localStorage.setItem("LawnbPCAuth_" + ui, curIp.replace(/\./gi, '-'));
    return curIp;
}

function login(data) {
    //연동된 로앤비 아이디가 없을때 
    if (data["UserID"] == "") {
        document.getElementById("KakaoLayer").style.display = "block";
        document.getElementById("KakaoLoading").style.display = "none";
        return;
    } else {
        var CheckKey = localStorage.getItem("LawnbPCAuth_" + data["UserID"]) == null ? "" : localStorage.getItem("LawnbPCAuth_" + data["UserID"]);
        /* 임시 바로 지울거임*/
        if (CheckKey == "") { CheckKey = getLoginIp(data["UserID"]); }
        /*******/
        var params = { "UserID": data["UserID"], "UserPW": data["UserPW"], "CheckKey": CheckKey }

        sendNonBlockingAjaxJsonRequest("/Login/Submit/", params, function (result) {
            if (result[0][0]["ResultCode"] == "0") {

                //if (dataLayer) {
                //    dataLayer.push({ 'userID_ID': data["UserID"], 'userType1_ID': result[0][0]["UserClass"], 'userType2_ID': result[0][0]["Logger_Job"], 'event_name': 'logIn', 'event': 'logIn', 'member_type': result[0][0]["UserType"] });
                //}
                //최근검색어 //개인화로그인
                localStorage.removeItem("sWordDataList");
                localStorage.setItem("sWordDataList", JSON.stringify(result[1]));
                localStorage.setItem("PrivacyUserCode", result[2][0]["PrivacyUserCode"]);
               
                if (window.opener != undefined && window.opener != null && jQuery.isEmptyObject(window.opener) != true) { //현재창이 팝업이면
                    if (window.opener.location != undefined && window.opener.location != null) {
                        window.opener.location.reload();

                        window.close();
                        //location.href = Referer;
                    } else {
                        location.href = "/";
                    }
                } else {
                    location.href = "/";
                }

            } else if (result[0][0]["ResultCode"] == "-3") {
                //location.href = "/PCAuth/RePCAuth/";
                var obj = [{ "name": "UserID", "value": data["UserID"] }, { "name": "UserPW", "value": data["UserPW"] },
                { "name": "UserName", "value": result[0][0]["UserName"] }, { "name": "UserHp", "value": result[0][0]["UserHp"] },
                { "name": "PCName", "value": encodeURI(result[0][0]["PCName"]) }, { "name": "Referer", "value": "/" },
                { "name": "CheckKey", "value": CheckKey }]
                POSTFORMCall("/PCAuth/RePCAuth/", obj);
            } else if (result[0][0]["ResultCode"] == "-4") {
                //location.href = "/PCAuth/NewPCAuth/";
                var obj = [{ "name": "UserID", "value": data["UserID"] }, { "name": "UserPW", "value": data["UserPW"] }, { "name": "UserName", "value": result[0][0]["UserName"] },
                { "name": "Referer", "value": "/" }, { "name": "CheckKey", "value": CheckKey }]
                POSTFORMCall("/PCAuth/NewPCAuth/", obj);
            } else if (result[0][0]["ResultCode"] == "-5" || result[0][0]["ResultCode"] == "-6") {
                //location.href = "/Member/Modify/";
                var obj = [{ "name": "UserID", "value": data["UserID"] }, { "name": "UserPW", "value": data["UserPW"] }, { "name": "UserClass", "value": result[0][0]["UserClass"] }, { "name": "Referer", "value": "/" }, { "name": "ResultCode", "value": result[0][0]["ResultCode"] }]
                POSTFORMCall("/Member/Modify/", obj);
            } else {
                //$("#LoginFailLayer").show();
                location.href = "/";
            }
        });

    }
}

function check() {
    if ($("#userid").val() == "") {
        alert("ID를 입력해주세요.");
        return;
    }

    if ($("#userpw").val() == "") {
        alert("비밀번호를 입력해주세요.");
        return;
    }

    if (!confirm($("#userid").val() + " ID와 카카오 계정을 연결하시겠습니까?")) {
        return;
    }


    var params = {
        "PlatformType": "Kakao",
        "PlatformKey": JSON.parse(result)[0]["kakaoid"],
        "LawnbNick": $("#userid").val(),
        "LawnbPW": $("#userpw").val(),
        "Channel": "Web_LawnbNext"
    }

    sendNonBlockingAjaxJsonRequest("/Member/PlatformCheck/", params, function (result) {
        if (result[0]["ResultCode"] == "0") {
            //alert("카카오 계정이 정상적으로 연결되었습니다.");
            var data = { "UserID": $("#userid").val(), "UserPW": $("#userpw").val() }
            login(data);
            //location.href = "/Main/Index";
        } else if (result[0]["ResultCode"] == "-1" || result[0]["ResultCode"] == "-2") {
            $("#txtKakaoResult").html("");
            $("#txtKakaoResult").html("연결 오류<br>로앤비에 등록되어 있지 않은 ID 또는 잘못된 비밀번호입니다.<br>다시 입력해 주세요.");
            //alert("로그인 오류\n로앤비에 등록되어 있지 않은 ID 또는 잘못된 비밀번호입니다.\n다시 입력해 주세요.");
            console.log(result[0]["ResultCode"] + " " + result[0]["ResultMsg"]);
        } else if (result[0]["ResultCode"] == "-3") {
            $("#txtKakaoResult").html("");
            $("#txtKakaoResult").html("연결 오류<br>카카오 계정에 " + result[0]["ConnectedID"] + " 아이디가 연결되어있습니다.​<br>" + result[0]["ConnectedID"] + " 아이디의 통합회원 페이지에서 간편 로그인 연결 해제 후 다시 연결해주시기 바랍니다.");
            //alert("해당 아이디에 이미 등록된 간편 로그인 정보가 있습니다.\n간편 로그인 계정 변경을 원하시는 경우, 통합회원 페이지 내 아이디 기본정보에서 기존연결 계정 해제 후 다시 연결해주시기 바랍니다.");
            console.log(result[0]["ResultCode"] + " " + result[0]["ResultMsg"]);
        } else if (result[0]["ResultCode"] == "-4") {
            $("#txtKakaoResult").html("");
            $("#txtKakaoResult").html("연결 오류<br>해당 아이디에 이미 등록된 간편 로그인 정보가 있습니다.<br>간편 로그인 계정 변경을 원하시는 경우, 통합회원 페이지 내 아이디 기본정보에서 기존연결 계정 해제 후 다시 연결해주시기 바랍니다.");
            //alert("해당 아이디에 이미 등록된 간편 로그인 정보가 있습니다.\n간편 로그인 계정 변경을 원하시는 경우, 통합회원 페이지 내 아이디 기본정보에서 기존연결 계정 해제 후 다시 연결해주시기 바랍니다.");
            console.log(result[0]["ResultCode"] + " " + result[0]["ResultMsg"]);
        } else {
            console.log(result[0]["ResultCode"] + " " + result[0]["ResultMsg"]);
        }
    });

}