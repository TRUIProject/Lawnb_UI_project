$(document).ready(function () {
    var memberType = localStorage.getItem("memberType") * 1;

    if (rCode > 0) {
        localStorage.removeItem("nickCode");
        localStorage.removeItem("autoLogin");
    }

    if (localStorage.getItem("deviceKey") != null) {
        if (localStorage.getItem("deviceKey") == 'a537c6572fd27b275221fc409c83c55a') {
            localStorage.removeItem("deviceKey");
            alert('인증 초기화 성공');
        }
        $('.btn_regist_device').hide();
    }

    if (localStorage.getItem("memberType") != null) {

        if (memberType == 1) { // 개인
            $('.tab_area>li:nth-child(2)').hide();
            $('.tab_area li:first-child').addClass('selected');
        } else { // 단체
            $('.tab_area>li:first-child').hide();
            $('.tab_area li:nth-child(2)').addClass('selected');
            $('#indivisual').hide();
            $('#group-member').show();
            $('.info_txt.indivisual').hide();
            $('.info_txt.group-member').show();
            /*key = OPT 임시 생성 기가내에 내림*/
            if (localStorage.getItem("deviceKey") == null || "" == $.trim(localStorage.getItem("deviceKey"))) {
                var NowKey = randomString();
                localStorage.setItem("deviceKey", NowKey);
            }

            /*/////////////////////////////////////////////////*/
            
        }
    }

    $('input').keypress(function (e) {
        if (e.which == 13) {
            $(this).siblings('.btn_login').trigger('click');
        }
    });

    $('.tab_area li:first-child').click(function () {
        $(this).addClass('selected');
        $('.tab_area li:nth-child(2)').removeClass('selected');
        $('#indivisual').show();
        $('.info_txt.indivisual').show();
        $('.info_txt.group-member').hide();
        $('#group-member').hide();
    });

    $('.tab_area li:nth-child(2)').click(function () {
        $(this).addClass('selected');
        $('.tab_area li:first-child').removeClass('selected');
        $('#indivisual').hide();
        $('#group-member').show();
        $('.info_txt.group-member').show();
        $('.info_txt.indivisual').hide();
    });

    var autoLogin = localStorage.getItem("autoLogin") == null ? "N" : localStorage.getItem("autoLogin");

    if (autoLogin == "Y") {
        if (memberType == 1) {
            $('#indivisualForm input[name="sNick"]').val(localStorage.getItem("nickname"));
            $('#indivisualForm input[name="sPass"]').val('lawnb6936137414');
            $("input[name=autoChk]").prop("checked", true);
        }
        else {
            $('#groupForm input[name="sName"]').val(localStorage.getItem("groupName"));
            $('#groupForm input[name="sNick"]').val(localStorage.getItem("nickname"));
            $("input[name=autoIpChk]").prop("checked", true);
        }
    } else {

        if (memberType == 1) {
            $('#indivisualForm input[name="sNick"]').val("");
            $('#indivisualForm input[name="sPass"]').val("");
            $("input[name=autoChk]").prop("checked", false);
        } else {
            $('#groupForm input[name="sName"]').val("");
            $('#groupForm input[name="sNick"]').val("");
            $("input[name=autoIpChk]").prop("checked", false);
        }
    }

    $('#indiLoginBtn').click(function () {

        if ($.trim($('#indivisualForm input[name="sNick"]').val()) == '') {
            alert("아이디를 입력해 주세요.");
            return false;
        }
        if ($.trim($('#indivisualForm input[name="sPass"]').val()) == '') {
            alert("비밀번호를 입력해 주세요.");
            return false;
        }
       
        if ($.trim($('#indivisualForm input[name="sPass"]').val()) == 'lawnb6936137414') {

            if (autoLogin == "Y") {
                var curNickCode = localStorage.getItem("nickCode");
                if (curNickCode != null) {
                    if ($('#autoChk').is(":checked")) {
                        localStorage.setItem("autoLogin", "Y");
                    } else {
                        localStorage.setItem("autoLogin", "N");
                    }
                    var mUrl = '';
                    var deviceKey = localStorage.getItem("deviceKey");
                    var dKey = localStorage.getItem("deviceTokenKey");
                    var dKind = localStorage.getItem("deviceKind");
                    mUrl = '/LoginMobile/LoginIndivisualAuto?sLoginCode=' + curNickCode + '$' + deviceKey + '$' + dKey + '$' + dKind;
                    $(location).attr('href', mUrl);
                } else {
                    if ($('#autoChk').is(":checked")) {
                        localStorage.setItem("autoLogin", "Y");
                    } else {
                        localStorage.setItem("autoLogin", "N");
                    }
                    setDeviceKey();
                    $('#indivisualForm').submit();
                }
            }
            else {
                if ($('#autoChk').is(":checked")) {
                    localStorage.setItem("autoLogin", "Y");
                } else {
                    localStorage.setItem("autoLogin", "N");
                }
                setDeviceKey();
                $('#indivisualForm').submit();
            }
        } else {
            if ($('#autoChk').is(":checked")) {
                localStorage.setItem("autoLogin", "Y");
            } else {
                localStorage.setItem("autoLogin", "N");
            }
            setDeviceKey();
            $('#indivisualForm').submit();
        }
    });

    $('#groupLoginBtn').click(function () {
        if ($.trim($('#groupForm input[name="sName"]').val()) == '') {
            alert("단체아이디를 입력해 주세요.");
            return false;
        }
        if ($.trim($('#groupForm input[name="sNick"]').val()) == '') {
            alert("닉네임을 입력해 주세요.");
            return false;
        }
        
        if ($.trim($('#groupForm input[name="sNick"]').val()) == 'lawnb6936137414') {
            if (autoLogin == "Y") {
                if ($('#autoIpChk').is(":checked")) {
                    localStorage.setItem("autoLogin", "Y");
                } else {
                    localStorage.setItem("autoLogin", "N");
                }
                var curNickCode = localStorage.getItem("nickCode");
                if (curNickCode != null) {
                    var mUrl = '';
                    var deviceKey = localStorage.getItem("deviceKey");
                    mUrl = '/LoginMobile/LoginGroupAuto?sLoginCode=' + curNickCode + '$' + deviceKey;
                    $(location).attr('href', mUrl);
                }
            }
            else {
                if ($('#autoIpChk').is(":checked")) {
                    localStorage.setItem("autoLogin", "Y");
                } else {
                    localStorage.setItem("autoLogin", "N");
                }
                setDeviceKey();
                var currentStatus = localStorage.getItem("currentStatus");
                if (currentStatus != null && "" != $.trim(currentStatus)) {
                    $('input[name="currentStatus"]').val($.trim(currentStatus));
                }
                $('#groupForm').submit();
            }
        } else {
            if ($('#autoIpChk').is(":checked")) {
                localStorage.setItem("autoLogin", "Y");
            } else {
                localStorage.setItem("autoLogin", "N");
            }
            setDeviceKey();
            var currentStatus = localStorage.getItem("currentStatus");
            if (currentStatus != null && "" != $.trim(currentStatus)) {
                $('input[name="currentStatus"]').val($.trim(currentStatus));
            }
            $('#groupForm').submit();
        }
    });
});

function moveFreeService() {    
    if ($("#hdnTabletYn").val() == "Y") {        
        if (confirm("로앤비 간편서비스는 Tablet 에서는 제공되지 않습니다. Phone전용 앱에서 이용해주세요.") )
        {            
            goApp('free');
        }           
    }
    else {        
        //location.href = "/Main/MobileMain";
        location.href = "https://appfree.lawnb.com/Main/MobileMain?fromPro=Y";
        //location.href = "/Main/MobileMain";
    }
}

this.setDeviceinitPushCount = function (dKey) {
    $.ajax({ type: "GET", url: "../LoginMobile/SetDevicePushInitCount?dKey=" + dKey, dataType: "text", success: function (data) {
    }, error: function (e) { }
    });
};

//<!-- 배너 -->
function mobileMainBanner() {
    
    var datas = { "PageType": "AppLogin" }
    sendNonBlockingAjaxJsonRequest("/Login/GetBanner/", datas, function (result) {
        var Contents = "";
        //console.log(result);
        for (var i = 0; i < result.length; i++) {
            if (result[i]["UploadMethod"] == "image") {
                Contents += "<div id=\"banner_" + i + "\" style=\"display:none;\">";
                if (result[i]["LinkUrl"] != "") {
                    Contents += "<a href=\"" + result[i]["LinkUrl"] + "\" target=\"Support_center\">";
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
        $("#banner_area").html(Contents);
        Banner_Change(GetIDCnt("banner_", 10));


        //var filename = "";
        //for (var i = 0; i < $("#banner_area").children().length; i++) {
        //    if ($("#banner_area").children()[i].style.display == "block" || $("#banner_area").children()[i].style.display == "") {
        //        var child = $("#banner_area").children()[i];
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
}

function GetIDCnt(id, maxcnt) {
    var retval = 0;
    for (var i = 0; i < maxcnt; i++) {
        if ($("#" + id + i).html()) {
            retval++;
        }
    }
    return Math.floor(Math.random() * Math.floor(retval));
}

function Banner_Change(id2) {
    $(".free_banner_area div").hide();
    $("#banner_" + id2).show();
}

function initMobileSetting() {
    if (confirm("모바일 기기등록이 초기화 됩니다. 초기화 하시겠습니까?")) {
        localStorage.clear();
        location.href = "/Main/Landing";
    }
}

/// 조만간 삭제
function randomString() {
    var chars = "0123456789abcdef";
    var string_length = 32;
    var randomstring = '';
    for (var i = 0; i < string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum, rnum + 1);
    }
    return randomstring;
}

// <!-- -배너- --> 