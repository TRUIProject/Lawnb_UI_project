
$(function () {
    
});

$(document).ready(function () {

//    $('.top_container  .function_area').on('click', '#cont_share', function () { // 공유popup

//        $('.base_popup').hide();
//        $('#individual_area').show();
//        $('#popup_share').show();
//    });

    $(document).on('click', '.snslink', function () {
        var _id = $(this).attr("id");
        share.sendSns(_id);
    });
});

var share = new function () {

    var shareParams = null;
    this.init = function (data) {
        shareParams = data;
    };

    this.sendSns = function (_id) {
        var fullUrl = null;
        //var sUrl = encodeURI(encodeURIComponent(shareParams.sUrl));
        //var sTitle = encodeURI(shareParams.sTitle);
        //http://www.lawnb.com/Info/ContentView?sid=L0061CDF622D50F6
        var sUrl = shareParams.sUrl;
        var sTitle = shareParams.sTitle;

        if ($("#lbCode").length > 0) {
            if ($("#lbCode").val() == "J001") {
                sUrl = window.location.href.split('?')[0] + "?sid=" + $("#lbTid").val().replace("|", "_") + "_0";
            }
        }
        sTitle = encodeURIComponent($("#divEmailTitle").text().replace('·', '.'));

        switch (_id) {
            case "facebook":
                fullUrl = "https://www.facebook.com/sharer/sharer.php?u=" + sUrl;                
                break;
            case "twitter":
                fullUrl = "https://twitter.com/intent/tweet?text=" + sTitle + "&url=" + sUrl;                
                break;
            case "googleplus":
                fullUrl = "https://plus.google.com/share?url=" + sUrl + "&t=" + sTitle;                
                break;
            case "naverblog":
                fullUrl = "http://share.naver.com/web/shareView.nhn?url=" + encodeURIComponent(sUrl) + "&title=" + sTitle;                
                break;
            case "kakaostory":
                fullUrl = "https://story.kakao.com/share?url=" + sUrl;
                break;
            case "email":
                fullUrl = "";
                break;
            default:
                alert("지원하지 않는 SNS입니다.");
                return false;
        }

        if (fullUrl != "") {
            // web, mobile(web app) 구분
            if (navigator.userAgent.match(/android/i)) {
                // Android            
                //location.href = fullUrl;
            }
            else if (navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i)) {
                // Apple            
                //location.href = fullUrl;
            }
            else {
                window.open(fullUrl, "", "width=700, height=450");
            }
        }
        else {
            $("#popup_share").hide();
            $("#popup_email").show();
        }
    };

    this.emailSend = function () {

        if (commonValidCheck("email", "txtEmails")) {
            if (commonValidCheck("email", "txtSenderEmail")) {

                var sFullUrl = $("#sFullUrl").val();
                var sTitle = $("#sTitle").val();
                var sReceiver = $("#txtEmails").val();
                var sAddMemo = $("#txtAddMemo").val();
                var sSender = $("#txtSenderEmail").val();
                var sSenderName = $("#txtSender").val();

                var dataParams = { "sFullUrl": sFullUrl, "sTitle": sTitle, "sReceiver": sReceiver, "sAddMemo": sAddMemo, "sSender": sSender, "sSenderName": sSenderName };
                sendAjaxRequest("/ConService/EmailSend", dataParams, share.emailSendCallBack);
            }
        }
    };

    this.emailSendCallBack = function (result) {
        if (result != null) {
            if (result == "1") {
                alert("메일 발송을 완료하였습니다.");
                share.emailCancel();
            }
            else if (result == "-1") {
                alert("메일 발송에 실패했습니다. 주소를 확인해주세요.");
            }
        }
    };

    this.emailCancel = function () {
        $("#popup_email").hide();
    };
};
