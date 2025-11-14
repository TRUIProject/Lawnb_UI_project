var UserID = "";
function InitTimer() {
    sendNonBlockingAjaxJsonRequest("/Login/SessionPlus/", "", InitTimerAjaxReturn);
}

function InitTimerAjaxReturn(result) {
    var time = Date.now();
    time = time + 3600000; //Min + 60
    //time = time + 360000; //Min + 6

    if (result == "0") {
        localStorage.setItem("LawnbTime", time);
        localStorage.removeItem("SessionContinueKey");
        setTimeout(function () { TimeOutCheck(); }, 3300000); //1000 = 1sec, 3300000 = 55min
        //setTimeout(function () { TimeOutCheck(); }, 60000); //1000 = 1sec, 60000 = 1min
    } else {
        localStorage.removeItem("LawnbTime");
        localStorage.removeItem("SessionContinueKey");
    }

    if (result == "-1" || result == "-2") {
        location.href = "/Login/Index/";
    }
}

function TimeOutCheck() {
    var CheckTime = localStorage.getItem("LawnbTime");
    var time = Date.now();
    if (CheckTime == null) {
        $("#bg_screen").html("");
        $("#bg_screen").hide();
        location.href = "/Login/Index/";
    }
    if (CheckTime == "End") { // Expired Another Window
        clearInterval(FiveMinCheck);
        $("#bg_screen").html("");
        $("#bg_screen").hide();
        ExpireSession();
    }

    if ((parseInt(CheckTime) - time) >= 300000) { //5 min over than Runtimer
        clearInterval(FiveMinCheck);
        $("#bg_screen").html("");
        $("#bg_screen").hide();
        FiveMinCheck = null;
        setTimeout(function () { TimeOutCheck(); }, parseInt(CheckTime - time - 300000));
    } else if ((parseInt(CheckTime) - time) <= 0) { //timeout than ExpireSession
        clearInterval(FiveMinCheck);
        FiveMinCheck = null;
        ExpireSession();
    } else { // 0 ~ 5 min between time than FiveMinute
        if (FiveMinCheck == null) {
            FiveMinute();
        }
        var remaintime = (parseInt(CheckTime) - time) / 1000;
        var min = parseInt(remaintime / 60);
        var sec = parseInt(remaintime % 60);

        $("#FiveMinTime").html(min + "분" + " " + sec + "초 후 자동 종료");
        //console.log(min + ":" + sec + " remain");
    }
}

var FiveMinCheck;
function FiveMinute() {
    FiveMinLayerCreate();
    $("#session_alert").show();
    $("#session_first").show();
    $("#bg_screen").show();
    FiveMinCheck = setInterval(function () {
        TimeOutCheck();
    }, 1000);
}

function FiveMinLayerCreate() {
    var Contents = "";
    Contents += "<div id=\"session_alert\">";
    Contents += "<div class=\"session_first\" id=\"session_first\">";
    Contents += "<div class=\"sesscion_tit\">55분 동안 로앤비 이용내역이 없어 세션이 종료될 예정입니다.<br>만약 현재의 세션과 로그인을 유지하시려면 “세션연장\" 버튼을 클릭하세요.</div>";
    Contents += "<div class=\"mgt20 mgb20 timer_txt\" id=\"FiveMinTime\"></div>";
    Contents += "<div class=\"btn_area_normal mgt10\"><span class=\"btn\" onclick=\"javascript:FiveMinInitTimer(); return false;\">세션연장</span><span class=\"btn _cancel\" onclick=\"javascript:FiveMinLogout(); return false;\">로그아웃</span></div>";
    Contents += "</div>";
    Contents += "</div>";
    $("#bg_screen").html(Contents);
}

function FiveMinInitTimer() {
    sendNonBlockingAjaxJsonRequest("/Login/SessionPlus/", "", InitTimerAjaxReturn);
    $("#bg_screen").html("");
    $("#bg_screen").hide();
}

function FiveMinLogout() {
    localStorage.removeItem("LawnbTime");
    localStorage.removeItem('mySearchOnOff');
    location.href = "/Login/Logout/";
}

function ExpireSession() {
    var CheckTime = localStorage.getItem("LawnbTime");
    var time = Date.now();
    //$("#ExpireLayer").show();

    if (CheckTime == "End" || CheckTime == null) { // Expired Another Window
        ExpireLayerCreate();
        $("#session_alert").show();
        $("#session_second").show();
        $("#bg_screen").show();
    }

    try {
        if (LoginID != "" && LoginID != undefined) {
            UserID = LoginID;
            if ((parseInt(CheckTime) - time) <= 0) {
                sendNonBlockingTextToJsonRequest("/Login/SessionExpire/", "", ExpireSessionAjaxReturn); //text to json
            } else {
                TimeOutCheck();
            }
        } else {
            sendNonBlockingTextToJsonRequest("/Login/GetID/", "", function (result) {//text to json
                UserID = result;
                //console.log("Expire Session");

                if ((parseInt(CheckTime) - time) <= 0) {
                    sendNonBlockingTextToJsonRequest("/Login/SessionExpire/", "", ExpireSessionAjaxReturn); //text to json
                } else {
                    TimeOutCheck();
                }
            });
        }
    } catch (e) {
        sendNonBlockingTextToJsonRequest("/Login/GetID/", "", function (result) {//text to json
            UserID = result;
            //console.log("Expire Session");

            if ((parseInt(CheckTime) - time) <= 0) {
                sendNonBlockingTextToJsonRequest("/Login/SessionExpire/", "", ExpireSessionAjaxReturn); //text to json
            } else {
                TimeOutCheck();
            }
        });
    }
}
function ExpireSessionAjaxReturn(result) {
    if (result != "") {
        localStorage.setItem("SessionContinueKey", result);
        localStorage.setItem("LawnbTime", "End");
    }
    ExpireLayerCreate();
    $("#session_alert").show();
    $("#session_second").show();
    $("#bg_screen").show();
}

function SessionContinue() {
    var key = localStorage.getItem("SessionContinueKey");
    var PCAuth = localStorage.getItem("LawnbPCAuth_" + UserID);
    var CheckTime = localStorage.getItem("LawnbTime");
    if (!key || key == null) {
        if (CheckTime != "End" && CheckTime != null) {
            alert("다른페이지에서 재로그인 하였습니다.");
            $("#bg_screen").html("");
            $("#bg_screen").hide();
        }
        return;
    }
    var params = { "EncKey": key, "PCAuth": PCAuth }
    sendNonBlockingAjaxJsonRequest("/Login/SessionExpireLogin/", params, SessionContinueAjaxReturn);
}

function SessionContinueAjaxReturn(result) {
    if (result == "0") {
        alert("세션이 연장되었습니다.");
        localStorage.removeItem("SessionContinueKey");
        $("#bg_screen").html("");
        $("#bg_screen").hide();
        InitTimer();
        //if (result.indexOf("lawnb.com") > 0) {
            location.reload();
        //}
    } else {
        location.href = "/";
    }
}

function ExpireLayerCreate() {
    var Contents = "";
    Contents += "<div id=\"session_alert\">";
    Contents += "<div class=\"session_second\" id=\"session_second\">";
    Contents += "<div class=\"sesscion_tit\">세션이 만료되었습니다.<br>기존 아이디로 재로그인하시겠습니까?";
    Contents += "<div class=\"close_btn\" onclick=\"javascript:ExpireLayerClose(); return false;\"><i class=\"icon-\" data-icon=\"\"><span class=\"blind\">닫기</span></i></div></div>";
    Contents += "<div class=\"btn-group\"><span class=\"btn btn-default bt-login\" onclick=\"javascript:SessionContinue(); return false;\">재로그인</span></div>";
    Contents += "</div></div>";
    $("#bg_screen").html(Contents);
}

//ExpiredIPMemberLogin
function IPMemberLogin() {
    sendNonBlockingAjaxJsonRequest("/Login/ExpiredIPMemberLogin/", "", IPMemberLoginAjaxReturn);
}

function IPMemberLoginAjaxReturn(result) {
    if (result == "0") {
        alert("자동 로그인 되었습니다.");
        //location.href = "/";
        location.reload();
    } else {
        alert("서브도메인을 통해 로그인하시기 바랍니다.");
    }
}

//세션연장취소
function ExpireLayerClose() {
    //    var key = localStorage.getItem("SessionContinueKey");
    //    if (!key || key == null) {
    //        alert("다른페이지에서 이미 기존 세션을 변경하였습니다.");
    //        $("#bg_screen").html("");
    //        $("#bg_screen").hide();
    //        return;
    //    }
    //    localStorage.removeItem("LawnbTime");
    $("#bg_screen").html("");
    $("#bg_screen").hide();
    //location.reload();
    //location.href = "/Login/Index/";
}
InitTimer();