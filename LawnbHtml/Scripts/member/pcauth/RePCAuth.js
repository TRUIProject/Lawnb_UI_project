var STRCERTIFY = "";

$(document).ready(function () {
    //배너
    var params = { "PageType": "PCAuth" }
    sendNonBlockingAjaxJsonRequest("/Login/GetBanner/", params, function (result) {
        var Contents = "";
        for (var i = 0; i < result.length; i++) {
            if (result[i]["UploadMethod"] == "image") {
                Contents += "<div id=\"banner_" + i + "\" style=\"display:none;\">";
                if (result[i]["LinkUrl"] != "") {
                    Contents += "<a href=\"" + result[i]["LinkUrl"] + "\" target=\"_blank\">";
                    Contents += "<img src=\"" + result[i]["FileRoot"] + "\" alt=\"배너\">";
                    Contents += "</a>";
                } else {
                    Contents += "<img src=\"" + result[i]["FileRoot"] + "\" alt=\"배너\">";
                }
                Contents += "</div>";
            } else {
                Contents += result[i]["Contents"];
            }
        }
        $("#banner_list_pcauth").html(Contents);
        Banner_Change(GetIDCnt("banner_", 10));

        //var filename = "";
        //for (var i = 0; i < $("#banner_list_pcauth").children().length; i++) {
        //    if ($("#banner_list_pcauth").children()[i].style.display == "block" || $("#banner_list_pcauth").children()[i].style.display == "") {
        //        var child = $("#banner_list_pcauth").children()[i];
        //        filename = $(child).find("img")[0].src;

        //        filename = filename.split("?")[0].split(location.hostname)[1];
        //        if (filename.indexOf("/lbimg/") >= 0) {
        //            filename = filename.split("/lbimg/")[1];
        //        }
        //        dataLayer.push({ 'banner_image': filename });
        //    }
        //}
        //(function (w, d, s, l, i) {
        //    w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        //    var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true;
        //    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
        //})(window, document, 'script', 'dataLayer', 'GTM-K2BLLP5');
    });
    //$("#banner_list_pcauth").click(function () {
    //    dataLayer.push({ 'event': 'banner_click', 'event_category': 'Auth_Banner', 'event_label': 'Main_Ad', 'event_ad': 'banner_click_ad' });
    //});
});

function GetIDCnt(id, maxcnt) {
    var retval = 0;
    for (var i = 0; i < maxcnt; i++) {
        if ($("#" + id + i).html()) {
            retval++;
        }
    }
    return Math.floor(Math.random() * Math.floor(retval));
}

function Confirm() {
    var CertifyNumber = $("#CertifyNumber").val();
    var AuthName = $("#AuthName").val();
    if (CertifyNumber == "") {
        alert("인증번호를 입력해주세요.");
        $("#CertifyNumber").focus();
        return;
    }
    if (CertifyNumber != STRCERTIFY) {
        alert("SMS로 발송된 인증번호와 입력하신 인증번호가 일치하지 않습니다.");
        $("#CertifyNumber").focus();
        return;
    }
    if (AuthName == "") {
        alert("새 이용장소를 입력해주세요.");
        $("#AuthName").focus();
        return;
    }
    $("#pcauth_confirmlayer").hide();
    $("#bg_screen").show();
    var params = { "AuthType": "Re", "UserID": UserID, "UserPW": UserPW, "AuthName": AuthName }
    sendNonBlockingAjaxJsonRequest("/PCAuth/SetPCAuth/", params, function (result) {
        $("#pcauth_confirmlayer").show();
        $("#bg_screen").hide();
        if (result[0]["ResultCode"] == "0") {
            localStorage.setItem("LawnbPCAuth_" + UserID, result[0]["AuthKey"]);
           // var HttpsUrl = "https://www.lawnb.com/Member/LocalStorage/?UserID=" + encodeURI(UserID) + "&PCAuth=" + encodeURI(result[0]["AuthKey"]);
           // var HttpUrl = "http://www.lawnb.com/Member/LocalStorage/?UserID=" + encodeURI(UserID) + "&PCAuth=" + encodeURI(result[0]["AuthKey"]);

           // $("#banner_list_pcauth").append("<iframe id=\"sslsto\" style=\"display:none;\" src=\"" + HttpsUrl + "\"></iframe>");
            //$("#banner_list_pcauth").append("<iframe id=\"nonsto\" style=\"display:none;\" src=\"" + HttpUrl + "\"></iframe>");
            
            alert("PC인증 이전이 완료되었습니다.");
            if (opener) { //현재창이 팝업이면
                window.close();
                window.opener.location.reload();
            } else {
                location.href = "/";
            }
        } else {
            alert("다시 시도해 주세요.");
        }
    });
}

function AuthSendSMS() {
    var params = { "UserHp": UserHp }
    sendNonBlockingTextToJsonRequest("/PCAuth/SendSMS/", params, function (result) {
        if (result != "") {
            STRCERTIFY = result;
            alert("인증번호가 발송되었습니다.");
            $("#SendSMSButton").html("인증번호 재발송");
        } else {
            alert("발송버튼을 다시 눌러주시거나 핸드폰 번호를 다시 확인하세요.");
        }
    });
}

function Cancel() {
    alert("PC 인증 절차가 취소되었습니다. \r\n로그인 할 수 없습니다.");
    location.href = "/Login/Logout/";
}
