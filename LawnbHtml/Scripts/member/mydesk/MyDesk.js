
$(function () {


    var mydeskParams = {
        "MyDeskUrl": "/MyDesk/MyDeskSelectList",
        "sTab": "",
        "sOnOff": "",
        "MyHistorySetUrl": "/MyDesk/MyHistorySet",
        "sType": "sel"
    };
    mydesk.init(mydeskParams);

    $(document).on('click', '.onoff_', function () {
        var index = $(this).index();
        var _onoff = "";
        if (index == 0) {
            _onoff = "Y";
        }
        else {
            _onoff = "N";
        }
        mydesk.myHistoryONOFFCheck(_onoff);
    });

    $(document).on('click', '.left_foler_open', function () {
        if ($(".add_border").length > 0) {
            $(".left_container").removeClass('add_border');
            $(".left_container").removeClass('slide_mov');
        }
        else {
            $(".left_container").addClass('slide_mov');
            $(".left_container").addClass('add_border');
            $('#bg_screen').show().css('z-index', '10');
            $("html").css("overflow", "hidden");
            if (document.body.clientWidth < 480) {
                $('.left_container').height(document.body.clientHeight);
            }
        }
        $('#bg_screen').click(function () {
            $(".left_container").removeClass('add_border');
            $(".left_container").removeClass('slide_mov');
            $('#bg_screen').hide().css('z-index', '10000');
            $("html").css("overflow", "auto");
        });
    });

    $(document).on('click', '.noti_txt_set .div_ab .set_close', function () { //header 히스토리
        $('.noti_txt_set').hide();
        $('.noti_txt').show();
    });

    // 결과 정리 날짜 정의 
    $(document).on('change', '#dDate', function () {
        if ($(this).children('option:selected').val() != '00') {
            if ($(this).children('option:selected').val() == '0') {
                $("#dDate").val("0");
                $("#dDate1").val("");
                $("#dDate2").val("");
                $("#sDate1").val("");
                $("#sDate2").val("");
            }
            else {
                page.dateInput($("#dDate option:selected").val(), 'dDate');
            }
        }
    });

    $(document).on('click', '.spanPaging', function () {
        var index = $(".spanPaging").index($(this));
        $(".spanPaging").removeClass("_this");
        $(".spanPaging").eq(index).addClass("_this");

        $(".mybook_list").hide();
        $(".mybook_list").eq(index).show();
    });

    $('#wrap').on('click', '#bg_screen', function () { //개인화popup 닫기
        $('#individual_area').hide();
        $('.base_popup').hide();
        if ($('.popup_kerisalert_area').length > 0) {
            if (!$('.popup_kerisalert_area').is(':visible')) {
                $("#bg_screen").hide();
            }
        } else {
            $("#bg_screen").hide();
        }
        
        if ($('.mobile').length > 0) {
            $("html").css("overflow", "auto");
        }
    });
});

var _tempDid = null;
//--------------My Personalization------------//
// 나의폴더, 히스토리, 알림, 문의 내역        //
var mydesk = new function () {
    this.init = function (data) {
        mydeskParams = data;
    };

    this.myPersonalization = function (tab) {

        var dataParam = { "sTab": tab };
        sendAjaxRequest("/Login/GetLoginChk", dataParam, mydesk.myPersonalizationLoginCheckCallback);
    };

    this.myPersonalizationLoginCheckCallback = function (result) {
        //default hide
        $('#other_function').hide();
        $('#other_function_save').hide();
        $('#popup_share').hide();
        if ($("#divEmailTitle").length > 0) {
            $("#divEmailTitle").text($("#divEmailTitle").text().replace(/<marks>/g, "").replace(/<\/marks>/g, ""));
        }

        if ($("#sTitle").length > 0) {
            $("#sTitle").val($("#sTitle").val().replace(/<marks>/g, "").replace(/<\/marks>/g, ""));
        }
        if (result == "-1")
        {            
            //Real버전             
            if ($("#orgprov_result").length > 0) {
                if (confirm("로그인 후 인쇄가 가능합니다.")) {
                    location.href = "/Login/Index/";
                }
                return;
            }
            else {
                $('.base_popup').hide();
                $("#individual_area").show();
                $("#popup_login_ask").show();
            }
            return;

            /*
            //OnjuBeta버전
            var contentList = localStorage.getItem("mySearchContentList")
            var onOff = localStorage.getItem("mySearchOnOff")
            var dataParams = { "onOff": onOff, "contentList": contentList };
            sendNonBlockingAjaxRequest("/MyDesk/GetMySearchInfo", dataParams, function (result) {
                if (result != null) {
                    $("#divMySearch").empty();
                    $("#divMySearch").html(result);

                    $('.base_popup').hide();
                    $("#individual_area").show();
                    $("#popup_mysearch").show();
                }
            });
            */
        }
        else if (result == "-2")
        {
            //Real버전 
            if ($("#orgprov_result").length > 0) {
                if (confirm("로그인 후 인쇄가 가능합니다.")) {
                    location.href = "/Login/Index/";
                }
                return;
            }
            else {
                $('.base_popup').hide();
                $("#individual_area").show();
                $("#popup_login_ask").show();
                return;
            }
            /*
            //OnjuBeta버전
            var contentList = localStorage.getItem("mySearchContentList")
            var onOff = localStorage.getItem("mySearchOnOff")
            var dataParams = { "onOff": onOff, "contentList": contentList };
            sendNonBlockingAjaxRequest("/MyDesk/GetMySearchInfo", dataParams, function (result) {
                if (result != null) {
                    $("#divMySearch").empty();
                    $("#divMySearch").html(result);

                    $('.base_popup').hide();
                    $("#individual_area").show();
                    $("#popup_mysearch").show();
                }
            });
            */
        }
        else if (result.substring(0, 2) == "MY") {

            if (result == "MYSEARCH") {
                //Real버전
                // 개인화 나의 검색
                var dataParams = { "onOff": "" };
                sendNonBlockingAjaxRequest("/MyDesk/GetMySearchInfo", dataParams, function (result) {
                    if (result != null) {
                        $("#divMySearch").empty();
                        $("#divMySearch").html(result);

                        $('.base_popup').hide();
                        $("#individual_area").show();
                        $("#popup_mysearch").show();

                        // 2022.01 ipuser userid, ipuser privacyid 연결
                        var ipMember = (localStorage.getItem("IpMemberY") == null ? "" : localStorage.getItem("IpMemberY"));
                        if (ipMember == "IPMember") {
                            mydesk.setIPUserIDLinkPrivacyID();
                        } 
                    }
                });

                /* 
                //OnjuBeta버전
                var contentList = localStorage.getItem("mySearchContentList")
                var onOff = localStorage.getItem("mySearchOnOff")
                var dataParams = { "onOff": onOff, "contentList": contentList };
                sendNonBlockingAjaxRequest("/MyDesk/GetMySearchInfo", dataParams, function (result) {
                    if (result != null) {
                        $("#divMySearch").empty();
                        $("#divMySearch").html(result);

                        $('.base_popup').hide();
                        $("#individual_area").show();
                        $("#popup_mysearch").show();
                    }
                });
                */
            }
            else {
                // 개인화 메인페이지 스크립트           
                mydeskParams.sTab = result;
                var sCat;
                if (result == "MY02") { sCat = "ALL"; }
                else { sCat = ""; }

                var dataParams = { "sCatCode": mydeskParams.sTab, "sCat": sCat, "sPageBY": 0 };
                sendNonBlockingAjaxRequest(mydeskParams.MyDeskUrl, dataParams, mydesk.myPersonalizationDataCallback);
            }            
        }
        else {
            // 개인화 본문페이지 스크립트  

            // 나의폴더 binding
            if (result == "VIEWMY01") {
                var dataParam = { "fType": "VIEW" };
                sendNonBlockingAjaxRequest("/MyDesk/MyFolderGet", dataParam, myfolder.myFolderGetViewCallBack);
            }
            else if (result == "VIEWMY03") // 알림
            {
                var sLawId = $("#hdnSlawId").val();
                myalert.ContentTitle = $("#hdnStitle").val();
                myalert.myAlertViewGet(sLawId);
            }
            else if (result == "VIEWMY05") // 인쇄
            {
                //alert($(location).attr('href').toUpperCase());
                if ($(location).attr('href').toUpperCase().indexOf('/ORG') < 0
                    && $(location).attr('href').toUpperCase().indexOf('ORGMAP') < 0
                    && $(location).attr('href').toUpperCase().indexOf('CASESIGNHELP') < 0
                ) {
                    $('.base_popup').hide();
                    $('#individual_area').show();
                    $('#other_function').show();
                }
                else if ($(location).attr('href').toUpperCase().indexOf('CASESIGNHELP') > 0) {
                    $('.base_popup').hide();
                    $('#individual_area').show();
                    $('#other_function').show();
                                        
                    $('#contentInFolderHtml_Print').hide();
                    $('.addtionalFlag').hide();
                    $('.explainFlag').hide();
                }
                else {
                    var Params = "?sId=Org_";
                    if ($(location).attr('href').toUpperCase().indexOf('/ORGMAP') > 0) {
                        Params = "?sId=OrgMap";
                    }
                    showOriginalView("/ConService/ContentPrintView" + Params);
                }

                // 법규본문 비교
                if ($("#iTypeP1").length > 0) {
                    $("input:checkbox[name='iTypeP']").attr("disabled", false);
                    $("input:checkbox[name='iTypeP']").prop("checked", true);
                    if ($('.flex_1').hasClass("flex_hide") ) {
                        $('#iTypeP1').prop("checked", false);
                        $('#iTypeP1').attr("disabled", true);
                    }
                    if ($('.flex_2').hasClass("flex_hide") ) {
                        $('#iTypeP2').prop("checked", false);
                        $('#iTypeP2').attr("disabled", true);
                    }
                    if ($('.flex_3').hasClass("flex_hide") ) {
                        $('#iTypeP3').prop("checked", false);
                        $('#iTypeP3').attr("disabled", true);
                    }
                }

            }
            else if (result == "VIEWMY06") // 파일저장
            {
                $('.base_popup').hide();
                $('#individual_area').show();
                $('#other_function_save').show();
                $("#bg_screen").show();

                if ($(location).attr('href').toUpperCase().indexOf('CASESIGNHELP') > 0) {
                    $('.addtionalFlag').hide();
                    $('.explainFlag').hide();
                }
            }
            else if (result == "VIEWMY07") // 공유하기
            {
                if ($("#lbCode").length > 0) {
                    if ($("#lbCode").val() == "J001") {
                        $("#shareUrl").text(window.location.href.split('?')[0] + "?sid=" + $("#lbTid").val().replace("|", "_") + "_0");
                    }
                }

                $('.base_popup').hide();
                $('#individual_area').show();
                $('#popup_share').show();
            }
            else if (result == "VIEWMY10") // 모바일 - 폴더 메모
            {
                myfolder.mobileMyFolderRelateContentShow();
            }
            else if (result == "VIEWMY08") // 하이라이트
            {
                myhigh.myHighlightViewList();
            }
            else if (result == "VIEWMY09") // pdf 인쇄
            {
                PrintPdf();
            }
            else if (result == "VIEWMY11") // pdf 저장
            {
                var sFileName = document.title;
               
                sFileName = sFileName.split(" -").length > 1 ? sFileName.split(" -")[1].replace(/ /gi, "") : sFileName;
                sFileName = sFileName.length > 45 ? sFileName.substring(0, 44) + "_.pdf" : sFileName + ".pdf";
                pdfCaseSave(sFileName);
            }
        }
        $(".function_area").removeClass('slide_mov_bottom');
    };

    this.myPersonalizationDataCallback = function (result) {

        $(document).on('click', '#bg_screen', function () { //개인화popup 닫기
            $('#individual_area').hide();
            $('.base_popup').hide();
            $("#bg_screen").hide();
            if ($('.mobile').length > 0) {
                $("html").css("overflow", "auto");
            }
        });

        if (result != null) {

            $("#personal_results").empty();
            $("#personal_results").html(result);

            $('.base_popup').hide();
            $('#individual_area').show();
            if (mydeskParams.sTab == "MY02") {
                $('#popup_history').show();
                var resultCode = $("#popup_history").attr("data-onoffResultCode");
                mydeskParams.sOnOff = $("#popup_history").attr("data-onoff");
                mydesk.myHistoryONOFFDisplay();

                if (resultCode == "1") {
                    if (mydeskParams.sType == "up") {
                        alert("저장되었습니다");
                        mydeskParams.sType = "sel";
                    }
                }
                else if (resultCode == "-2") {
                    loginNeed();
                }
                else {
                    alert("히스토리 설정이 실패했습니다.");
                    mydeskParams.sType = "sel";
                }
            }
            else if (mydeskParams.sTab == "MY01") {
                $('#popup_myfolder').show();
            }
            else if (mydeskParams.sTab == "MY03") {
                sendNonBlockingAjaxJsonRequest("/MyDesk/MyAlertCountInit", "", function (result) {
                    if (result != null) {
                        if (result == "1") {
                            $("#alertCount").empty();
                            $("#alertCount").hide();
                            $('#popup_alert').show();
                        }
                        else {
                            alert("알림 읽기 실패");
                        }
                    }
                });
            }
            else if (mydeskParams.sTab == "MYHIGHLIGHT") {
                $('#popup_highlight').show();
            }
        }
    };


    // 나의 검색 초기화
    this.initMySearhInfo = function () {
        $(".chkMySearch").prop("checked", false);
    };

    // 개인화 나의 검색
    this.getMySearhInfo = function (_onOff) {
        //Real버전
        if (_onOff != "") {
            localStorage.setItem("mySearchOnOff", _onOff);
            // 2022.04 UI 개선 수정 작업
            chgMySearchOnOff(_onOff);
        }

        var dataParams = { "onOff": _onOff };
        sendNonBlockingAjaxRequest("/MyDesk/GetMySearchInfo", dataParams, function (result) {
            if (result != null) {
                $("#divMySearch").empty();
                $("#divMySearch").html(result);

                $('.base_popup').hide();
                $("#individual_area").show();
                $("#popup_mysearch").show();               
            }
        });

        /*
        //OnjuBeta버전
        if (_onOff != "") {
            localStorage.setItem("mySearchOnOff", _onOff);
        }
        var contentList = localStorage.getItem("mySearchContentList");
        var dataParams = { "onOff": _onOff, "contentList": contentList };
        sendNonBlockingAjaxRequest("/MyDesk/GetMySearchInfo", dataParams, function (result) {
            if (result != null) {
                $("#divMySearch").empty();
                $("#divMySearch").html(result);

                $('.base_popup').hide();
                $("#individual_area").show();
                $("#popup_mysearch").show();
            }
        });
        */
    };

    // 2022.01 ipuser userid, ipuser privacyid 연결
    this.setIPUserIDLinkPrivacyID = function () {
        var dataParams = { };
        sendNonBlockingAjaxRequest("/MyDesk/SetIPUserIDLinkPrivacyID", dataParams, function (result) {
            if (result != null) {
                if (result == "1") {
                    console.log("link success");
                }
                else if (result == "2")
                {
                    console.log("already exist");
                }
                else {
                    console.log("link error");
                }
            }
        });
    };

    // 개인화 나의 검색 저장
    this.SetMySearhInfo = function () {
        
        //Real버전
        var contentList = "";
        var chkCnt = 0;
        var contentArr = []
        $(".chkMySearch").each(function () {
            if ($(this).is(":checked"))
            {
                contentArr.push({ "contentCode": $(this).val(), "contentOrder": $(this).attr("data-order")});
                chkCnt++;
            }
        });

        contentArr.sort(function (a, b) {
            return a.contentOrder - b.contentOrder;
        });

        for (var i = 0; i < contentArr.length; i++) {
            contentList += contentArr[i].contentCode + "|"
        }

        if (chkCnt > 10) {
            alert("나의 검색은 최대 10개까지 설정 가능합니다.");
            return;
        }
        else if (chkCnt <= 0) {
            alert("최소 1개 이상 설정해주세요.");
            return;
        }

        localStorage.setItem("mySearchContentList", contentList);

        var dataParams = { "contentList": contentList};
        sendNonBlockingAjaxRequest("/MyDesk/SetMySearchInfo", dataParams, function (result) {
            if (result != null) {
                if (result == "1") {
                    // 2022.05 UI 개선 추가
                    localStorage.setItem("mySearchOnOff", "Y");
                    alert("저장되었습니다.");
                }
                else if (result == "10")
                {
                    alert("나의 검색은 최대 10개까지 설정 가능합니다.");
                }
                else {
                    alert("저장에 실패했습니다.");
                }
            }
        });         
        
        /*
        //OnjuBeta버전
        var contentList = "";
        var chkCnt = 0;
        var contentArr = []
        $(".chkMySearch").each(function () {
            if ($(this).is(":checked"))
            {                
                contentArr.push({ "contentCode": $(this).val(), "contentOrder": $(this).attr("data-order")});
                chkCnt++;
            }
        });

        contentArr.sort(function (a, b) {
            return a.contentOrder - b.contentOrder;
        });

        for (var i = 0; i < contentArr.length; i++) {
            contentList += contentArr[i].contentCode + "|"
        }

        if (chkCnt > 10) {
            alert("나의 검색은 최대 10개까지 설정 가능합니다.");
            return;
        }
        else if (chkCnt <= 0) {
            alert("최소 1개 이상 설정해주세요.");
            return;
        }
        else {
            localStorage.setItem("mySearchContentList", contentList);
            alert("저장되었습니다.");
           
            // 검색로그 스크립트
        
            var params =
            {
                "colCode": "Search",
                "keyId": 0,
                "mainTitle": contentList,
                "subTitle": ""
            };
            sendNonBlockingAjaxRequest("/ConService/SetPrintLog", params, function (result) {
                if (result != null) {
                    if (result == "1") {
                        console.log("Log success");
                    }
                    else {
                        console.log("Log fail");
                    }
                }
            });           
        }
        */
    };

    // 원문보기 팝업(메인레이아웃에서 MyDesk.js 통해 사용하기위해 별도 첨부)
    this.showOriginalView = function (href) {
        if (checkMobile()) {
            href = href.indexOf("?") >= 0 ? href + "&popupYn=Y" : href + "?popupYn=Y";
        }
        var maxThisX = screen.width * 0.85;
        var maxThisY = screen.height * 0.85;
        window.open(href, "", "width=" + maxThisX + ",height=" + maxThisY + ",scrollbars=no,toolbar=no, resizable=yes, menubar=no, left=70, top=15");
        event.preventDefault();
    };

    this.myHistoryONOFFCheck = function (_onoff) {
        mydeskParams.sOnOff = _onoff;
        var dataParams = { "sCatCode": mydeskParams.sTab, "sCat": "ALL", "sOnOff": mydeskParams.sOnOff, "sPageBY": 0 };
        sendAjaxRequest(mydeskParams.MyDeskUrl, dataParams, mydesk.myPersonalizationDataCallback);
    };

    this.myHistoryONOFFDisplay = function () {

        if (mydeskParams.sOnOff == "Y") {
            $(".onoff_").eq(0).removeClass("btn-default");
            $(".onoff_").eq(0).addClass("btn_orange");
            $(".onoff_").eq(0).addClass("_select");
            $(".onoff_").eq(1).removeClass("btn_orange");
            $(".onoff_").eq(1).removeClass("_select");
            $(".onoff_").eq(1).addClass("btn-default");

            $("#popup_history .cont_list").eq(0).show();
            $("#popup_history .cont_list").eq(1).hide();
        }
        else {
            $(".onoff_").eq(0).removeClass("btn_orange");
            $(".onoff_").eq(0).removeClass("_select");
            $(".onoff_").eq(0).addClass("btn-default");
            $(".onoff_").eq(1).removeClass("btn-default");
            $(".onoff_").eq(1).addClass("btn_orange");
            $(".onoff_").eq(1).addClass("_select");

            $("#popup_history .cont_list").eq(0).empty();
            $("#popup_history .cont_list").eq(0).hide();
            $("#popup_history .cont_list").eq(1).show();
        }
    };

    // 히스토리 설정
    this.myHistorySet = function (type) {

        mydeskParams.sType = type;
        var chkVals = "";
        if (type == "init") {
            historyContentSet("C0|L0|0|0|0|0|0|0|0|"); // 0| 온주 추가
        }
        else if (type == "up") {
            // 총 8개 cont, check된 count 제외하고 남은 count만큼 0| 추가
            // -> 온주 추가 9개
            var chkCnt = 0;
            $(".chkCont").each(function () {
                if ($(this).is(":checked")) {
                    chkVals += $(this).val() + "|"
                    chkCnt++;
                }
            });

            //for (var i = 0; i < 8 - chkCnt; i++) {
            for (var i = 0; i < 9 - chkCnt; i++) {
                chkVals += "0|";
            }
        }

        if (type != "init") {
            var dataParams = { "sType": type, "sChkVals": chkVals, "sPageBY": 0 };
            sendAjaxRequest("/MyDesk/MyHistorySet", dataParams, mydesk.myHistorySetCallBack);
        }
    };

    this.myHistorySetCallBack = function (result) {

        if (result != null) {

            var resultList = result.split('^');

            mydeskParams.sOnOff = resultList[1];
            // 히스토리 셋팅
            if (resultList[0] != "0") {
                historyYNChange(resultList[1]);
                historyContentSet(resultList[0]);
            }
            else {
                alert("업데이트 오류입니다.다시 시도해주세요.");
                return false;
            }
        }
    };

    //---------------- 히스토리 메인리스트 바인딩 --------------------//
    this.myDeskAll = function (sCatCode) {

        //같은 컨트롤을 사용하기 위해서 POST로 넘겨야 됨.
        var searchForm = $('<form></form>');
        searchForm.attr("method", "post");
        searchForm.attr("action", "/MyDesk/MyDeskSelectList");
        searchForm.appendTo('body');

        var sPageBY = $('<input type="hidden" id="sPageBY" name="sPageBY" value="1" />');
        var sCatCode = $('<input type="hidden" id="sCatCode" name="sCatCode" value="' + sCatCode + '" />');

        searchForm.append(sPageBY).append(sCatCode);
        searchForm.submit();

        setHeight_under();
        /*
        var url = "/MyDesk/MyDeskSelectList";
        var _params = "sPageBY=1";
        _params += "&sCatCode=" + sCatCode;
        location.href = url + "?" + _params;
        */
    };

    // 체크된 컨탠츠 값 string 저장, 메모 여부
    this.getSearch = function (_typeOf, sCatCode) {

        var sCode = "";
        var resultData = mydesk.validationCheck();
        if (resultData == 1) {
            return false;
        }
        else {
            if (_typeOf == "apply") {
                if (sCatCode == "MY03") { //알림

                    if ($("input[class=chkScope]:checked").length > 1) {
                        $("#sCat").val("0");
                        $("#sId").val("0");
                        $("#sScope").val("");
                    }
                    else {
                        $("#sCat").val($("input[class=chkScope]:checked").val());
                        $("#sId").val("0");
                        $("#sScope").val("");
                    }
                } else if (sCatCode == "MYHIGHLIGHT") { //하이라이트
                    var sc = "";
                    $(".chkMainCont").each(function () {

                        if ($(this).is(":checked")) {
                            sc += $(this).val() + "|"
                        }
                    });
                    $("#sCat").val(sc);
                    if ($("#sWord").length > 0) {
                        $("#sWord").val($("#txtSearchTitle").val());
                    }
                }
                else {
                    $(".chkMainCont").each(function () {

                        if ($(this).is(":checked")) {
                            sCode += $(this).val() + "|"
                        }
                    });

                    $("#sMemoYN").val($("input[name='rdoMemoYN']:checked").val()); // 메모 여부 Y,N,ALL
                    $("#sCode").val(sCode); // C0|L0|N0|

                    if ($("#sWord").length > 0) {
                        $("#sWord").val($("#txtSearchTitle").val());
                    }
                }
            }
            else if (_typeOf == "memo") {
                if (sCatCode == "MYHIGHLIGHT") { // highlight
                    if ($("#sOnOff").length > 0) {
                        if ($("#sOnOff").val() == "0") {
                            $("#sOnOff").val("1");
                            $("#onlyMemo").addClass("active");
                        } else {
                            $("#sOnOff").val("0");
                            $("#onlyMemo").removeClass("active");
                        }
                    }
                } else {
                    if ($("#sCat1").length > 0) {
                        if ($("#sCat1").val() == "0") {
                            $("#sCat1").val("1");
                            $("#onlyMemo").addClass("active");
                        } else {
                            $("#sCat1").val("0");
                            $("#onlyMemo").removeClass("active");
                        }
                    }
                }

            }
            else {
                if (sCatCode == "MY03") { //알림
                    $(".chkScope").prop("checked", false);

                    $("#sCat").val("0");
                    $("#sId").val("0");
                    $("#sScope").val("");
                }
                else {
                    $(".chkMainCont").prop("checked", false);
                    $("#sMemoYN").val("");
                    $("#sCode").val("");

                    $(".date_select").change(function () {
                        if ($(this).val() == "00") {
                            $(".detail_date").show();
                        } else {

                            $(".detail_date").hide();
                        }
                    });

                    if ($("#dDate option:selected").val() == "00") {

                        $(".detail_date").hide();
                    }
                    $("#dDate1").val("");
                    $("#dDate2").val("");
                    $("#dDate").val("0");
                    $("#sDate1").val("");
                    $("#sDate2").val("");

                    if ($("#sWord").length > 0) {
                        $("#txtSearchTitle").val("");
                        $("#sWord").val("");
                    }
                    if ($("#sLevel").length > 0) {
                        $("#sLevel").val("");
                    }
                    if ($(".folderlist").length > 0) {
                        $(".folderlist").removeClass("this-page");
                        $(".pRoot").addClass("this-page");
                    }

                    if (sCatCode == "MYHIGHLIGHT") { //하이라이트
                        $("#sCat").val('0');
                    }
                }
            }

            $("#sPage").val("1");
            mydesk.initSearchList();
        }
        if ($("#co_mainContainer").hasClass('mobile')) { //모바일면
            $('.left_container').removeClass('slide_mov ').removeClass('add_border ');
            $('#bg_screen').hide();
            $("html").css("overflow-y", "auto");
        }
    };

    // 페이지 이동
    this.goToPageMyDesk = function (pageNo) {
        $('#sPage').val(pageNo);
        mydesk.initSearchList();
    };

    // 메인리스트
    this.initSearchList = function () {

        var serializeData = $('#searchForm').serialize();
        sendNonBlockingAjaxRequest(mydeskParams.MyDeskUrl, serializeData, mydesk.myDeskDataListCallback);
    };

    this.myDeskDataListCallback = function (result) {

        if (result != null) {
            $('#search_results').empty();
            $('#search_results').html(result);

            setHeight_under();
            myfolder.myFolderNewCancel("folder_new");
        }
    };

    // 히스토리 삭제
    this.myHistoryDel = function (sDid) {

        if (confirm("삭제하시겠습니까?")) {
            var dataParams = { "dId": sDid };
            sendAjaxRequest(mydeskParams.MyDeskHistoryDelUrl, dataParams, mydesk.myHistoryDelCallBack);
        }
        else {
            return;
        }
    };

    this.myHistoryDelCallBack = function (result) {

        if (result != null) {
            if (result == "1") {
                alert("삭제되었습니다.");
                mydesk.initSearchList();
            }
            else if (result == "-1") {
                alert("삭제에 실패했습니다. 재시도 해주세요.");
                return;
            }
            else if (result == "-2") {
                loginNeed();
            }
        }
    };

    this.validationCheck = function () {
        var resultData = 0;
        if ($("#dDate1").length > 0 && $("#dDate2").length > 0) {
            if ($("#dDate1").val() != "" && $("#dDate2").val() != "") {
                if (Number($("#dDate1").val()) > Number($("#dDate2").val())) {

                    alert("시작 날짜가 끝 날짜보다 큽니다.");
                    resultData = 1;
                }
                else {
                    $("#sDate1").val($("#dDate1").val());
                    $("#sDate2").val($("#dDate2").val());
                }
            }
        }
        return resultData;
    };

    // 나의법규집, 나의EBOOK SELECT
    this.getMyLawCollectionList = function (sId, sDivType, sLawType) {
        var dataParams = { "sId": sId, "sDivType": sDivType, "sLawType": sLawType };
        sendNonBlockingAjaxRequest("/MyDesk/MyLawCollectionList", dataParams, mydesk.myLawCollectionListCallBack);
    };

    this.myLawCollectionListCallBack = function (result) {
        if (result != null) {
            $("#div_Collect").empty();
            $("#div_Collect").html(result);

            //            if ($('.mybook_list_outbox').length > 0) {
            //                $('.mybook_list_outbox .mybook_list').css('width', 100 / ($('.mybook_list').length) + '%');
            //                $('.mybook_list_outbox ').css('width', 100 * ($('.mybook_list').length) + '%');
            //            }

            if ($('.mybook_list_outbox').length > 0) {
                $('.mybook_list_outbox .mybook_list').hide();
                $('.mybook_list_outbox .mybook_list').eq(0).show();
            }

            setHeight_under();
        }
    };

    // 나의법규집, 나의EBOOK INSERT, DELETE
    this.setMyLawCollection = function (sId, sSetType) {

        _tempDid = sId;
        var sSetTypeVal = "";
        if (sSetType == "I" || sSetType == "D") {
            sSetTypeVal = $("#sSetType").val();
        }
        else {
            sSetTypeVal = sSetType;
        }

        var dataParams = { "sId": sId, "sSetType": sSetTypeVal };
        sendNonBlockingAjaxRequest("/MyDesk/MyLawCollectionSet", dataParams, mydesk.myLawCollectionSetCallBack);
    };

    this.myLawCollectionSetCallBack = function (result) {
        //alert(result);
        /*
            * 결과타입 정리
            L1, E1, O1 - 비로그인
            LI3 - 법규집 최대 30개 초과
            EI2 - EBOOK 최대 20개 초과
            OI14 - 온주 최대 14개 초과

            LD - 나의 법규집 MAIN 하단 별 변경(삭제)
            EID - 나의 EBOOK MAIN 하단 별 변경
            ED - 나의 EBOOK MAIN 우측 별 변경
            OD - 나의 온주 MAIN 별 변경(삭제)

            I OR D - 본문 별 변경
        */
        if (result != null) {
            if (result == "L1") {
                if (confirm("로그인 후 나의 법규집 기능을 이용하실 수 있습니다.")) {
                    location.href = "/Login/Index/";
                }
                //$(".favi_add").children("i").removeClass('starfull');
            }
            else if (result == "E1") {
                if (confirm("로그인 후 나의 E-Book 기능을 이용하실 수 있습니다.")) {
                    location.href = "/Login/Index/";
                }
                //$(".favi_add").children("i").removeClass('starfull');
            }
            else if (result == "O1") {
                if (confirm("나의 온주 기능은 로그인 후 이용할 수 있습니다.")) {
                    location.href = "/Login/Index/";
                }
            }
            else if (result == "LI3") {
                alert("나의 법규집은 최대 30개까지 추가 가능합니다. 추가 가능수를 초과하여 해당 법규를 나의 법규집에 담을 수 없습니다.");
            }
            else if (result == "EI2") {
                alert("나의 E-Book은 최대 20권까지 추가 가능합니다. 추가 가능 권수를 초과하여 해당 도서를 나의 E-Book에 담을 수 없습니다.");
            }
            else if (result == "OI14")
            {
                alert("나의 온주는 최대 14개까지 추가 가능합니다. 추가 가능 수를 초과하여 해당 주석서를 나의 온주에 담을 수 없습니다.");
            }
            else if (result == "LD") {
                // 나의법규집 삭제
                alert("선택 법규가 나의 법규집에서 삭제되었습니다.");
                mydesk.getMyLawCollectionList('', 'ALL', 'Y');

                //$(opener.document).find(".favi_add").children("i").toggleClass('starfull')
                /*
                if (popupDoc.length > 0)
                {
                $(popupDoc.document).find(".favi_add").children("i").toggleClass('starfull');
                }*/
            }
            else if (result == "-1") {
                alert("수정 실패");
                //$(".favi_add").children("i").toggleClass('starfull');
            }
            else if (result == "I" || result == "D") {

                var sSetType = (result == "I") ? "D" : "I";
                $("#sSetType").val(sSetType);
                $(".favi_add").children("i").toggleClass('starfull');

                if ($("#lbCode").length > 0) {
                    if ($("#lbCode").val() == "D022") {
                        opener.mydesk.getMyLawCollectionList('', 'ALL', 'N'); // 부모창 리스트페이지 우측 - 나의 E-Book 변경되면 수정.

                        if (opener != null) {
                            if ($(opener.document).find('.directory_sub_org>div.directory_list').length > 0) {
                                // 메인에서 하단 리스트 다시불러오기
                                var sCatMain = "2018";
                                if ($("#sCatMain").length > 0) { sCatMain = $("#sCatMain").val(); }
                                else { sCatMain = $(opener.document).find("#sCatMain").val(); }
                                doc.selectEbookList(sCatMain); // E-Book 메인하단 다시 불러오기
                            }
                            else {
                                // 부모리스트에서 자식본문 띄우고 별첨부 클릭시 부모리스트에서 별변경
                                $(opener.document).find(".favi_icon").each(function () {
                                    if ($(this).attr("data-did") == _tempDid) {
                                        $(this).children("i").toggleClass('starfull');
                                    }
                                });
                            }
                        }
                    }
                    else if ($("#lbCode").val() == "J001") {
                        // 본문띄웠을때 메인 페이지면 메인의 나의온주 리프레쉬
                        if ($(opener.document).find('#div_Collect>div.onju_info_popup').length > 0) {
                            opener.mydesk.getMyLawCollectionList('', 'ALL', 'O');
                        }
                    }
                }
                else {
                    if (opener != null) {
                        if ($(opener.document).find("#div_Collect").length > 0) {
                            opener.mydesk.getMyLawCollectionList('', 'ALL', 'Y'); // 부모창 리스트페이지 우측 나의 E-Book 변경되면 수정.
                        }
                    }
                }
            }
            else if (result.substring(0, 3) == "EID") {
                // 나의E-BOOK 삭제

                // 2가지 경우
                // 메인페이지에서 하단 리스트 바인딩할 때(리스트는 1자리수)
                // 리스트페이지에서 ajax리스트 바인딩할 때(리스트수가 20개 이상, 두자리 이상일 수 있음)
                if (result.length == 4) { $(".favi_icon").eq(result.substring(3, 4)).children("i").toggleClass('starfull'); }
                else if (result.length == 5) { $(".favi_icon").eq(result.substring(3, 5)).children("i").toggleClass('starfull'); }

                /*
                var popupDoc = window.open("http://localhost:62486/Info/ContentView?sid=" + _tempDid);
                if ($(popupDoc.document).find(".favi_add").length > 0) {
                alert("Test");
                //$(popupDoc.document).find(".favi_add").children("i").toggleClass('starfull');
                }
                */
                mydesk.getMyLawCollectionList('', 'ALL', 'N');
            }
            else if (result == "ED") {
                mydesk.getMyLawCollectionList('', 'ALL', 'N');  // 우측 나의 E-Book 다시 불러오기

                if ($('.directory_sub_org>div.directory_list').length > 0) {
                    var sCatMain = "2018";
                    if ($("#sCatMain").length > 0) { sCatMain = $("#sCatMain").val(); }
                    else { sCatMain = $(opener.document).find("#sCatMain").val(); }
                    doc.selectEbookList(sCatMain); // E-Book 메인하단 다시 불러오기
                }
            }
            else if (result == "OD") {
                alert("선택 온주 주석서가 나의 온주에서 삭제되었습니다.");
                mydesk.getMyLawCollectionList('', 'ALL', 'O');  // 나의 온주 MAIN 다시 불러오기
            }
        }
    };

    // 학회논문 개선 20200917 - 나의 학회논문 즐겨찾기 추가, 삭제
    this.setMyArticleCollection = function (sCat, sSetType, sPosition) {

        var params = { "sCat": $.trim(sCat), "sSetType": sSetType.toUpperCase() }
        sendNonBlockingAjaxRequest("/MyDesk/SetMyArticleCollection", params, function (result) {
            if (result != null) {
                if (result == "L") {
                    // 로그인 필요
                    alert("로그인 후 나의 학회/간행물 기능을 이용하실 수 있습니다.");
                    /*
                    if (confirm("로그인 후 나의 학회/간행물 기능을 이용하실 수 있습니다.")) {
                        location.href = "/Login/Index/";
                    }
                    */
                }
                else if (result == "I4") {
                    // 학회 + 간행물 = 40개 넘음
                    alert("나의 학회 / 간행물은 최대 40개까지 추가 가능합니다.\n추가 가능수를 초과하여 해당 학회및 간행물을 나의 학회 / 간행물에 담을 수 없습니다.");
                }
                else if (result == "I") {
                    // 추가                                        
                    $(".favi_add").attr("onclick", $(".favi_add").attr("onclick").replace("'I'", "'D'"));
                    $(".starchk").addClass("starfull");                              
                }
                else if (result == "D") {
                    // 삭제
                    if (sPosition == "list") {
                        alert("선택 학회/간행물이 삭제되었습니다.");
                        doc.getMyArticleCollection('myArticleCol');
                    }
                    else {
                        $(".favi_add").attr("onclick", $(".favi_add").attr("onclick").replace("'D'", "'I'"));
                        $(".starchk").removeClass("starfull");
                    }                    
                }
                else {
                    alert("수정 실패 - 관리자에게 문의해주세요.");
                }
            }
        });
    };

    // 학회논문 개선 20200917 - 나의 학회논문 즐겨찾기 가져오기
    this.getMyArticleCollection = function () {
        
        var params = {}
        sendNonBlockingAjaxRequest("/MyDesk/GetMyArticleCollection", params, function (result) {
            
            if (result != null) {                
                $(".before_myarticle").remove();
                $(".my_articles").remove();

                $(".before_search_area").append(result);

                $(".before_search_area").show();
                $(".myarticle").show();
                $(".articlesearchtxt").hide();
                $(".doclist").hide();

                setHeight_under();
            }
        });
    }

    this.myHighlightCheck = function () {
        if (confirm("선택한 콘텐츠 본문에 저장된 모든 하이라이트 및 메모가 삭제됩니다.​\n삭제하시겠습니까 ?")) {
            var checkCount = 0;
            var checkedVal = "";
            $(".chkidx").each(function () {
                if ($(this).is(":checked")) {
                    checkedVal += $(this).val() + ",";
                    checkCount++;
                }
            });


            if (checkCount == 0) {
                alert("삭제하실 목록을 선택해주세요.");
                return;
            }
            else {
                var url = "/MyDesk/SetHighlightView";
                var data = {
                    "sHighId": checkedVal, "userCode": LoginID,
                    "cid": "", "highHtml": "[]", "sword": "", "sType": 2
                };
                sendNonBlockingTextToJsonRequest(url, data, mydesk.setMyHighlightDelCallBack);
            }
        }
    };


    this.setMyHighlightDelCallBack = function (result) {
        if (result != null) {
            if (result == "1") {
                alert("삭제되었습니다.");
                mydesk.initSearchList();
            }
            else {
                alert("저장에 실패했습니다. 다시 시도해주세요.");
            }
        }
    };

};

// 개인화 히스토리 - 컨텐츠 범위 설정
function historyContentSet(result) {
    var chkList;
    var chkListFilter = new Array();
    chkList = result.substring(0, result.length - 1).split('|');

    var chkContCount = $(".chkCont").length;
    $(".chkCont").prop("checked", false);

    for (var i = 0; i < chkList.length; i++) {
        if (chkList[i] != "0") {
            chkListFilter[i] = chkList[i];
        }
        else {
            break;
        }
    }
    for (var m = 0; m < chkListFilter.length; m++) {

        for (var n = 0; n < chkContCount; n++) {
            if ($(".chkCont").eq(n).val() == chkListFilter[m]) {
                $(".chkCont").eq(n).prop("checked", "checked");
                break;
            }
        }
    }
    $('#popup_history .noti_txt').hide();
    $('#popup_history .noti_txt_set').show();

    // 리스트 다시 바인딩
    if (mydeskParams.sType != "sel" && mydeskParams.sType != "init") {

        var dataParams = { "sCatCode": mydeskParams.sTab, "sCat": "ALL", "sOnOff": mydeskParams.sOnOff, "sPageBY": 0 };
        sendNonBlockingAjaxRequest(mydeskParams.MyDeskUrl, dataParams, mydesk.myPersonalizationDataCallback);
    }
}

function historyYNChange(historyYN) {
    if (historyYN == "Y") {
        $(".onoff_").eq(0).removeClass("btn-default");
        $(".onoff_").eq(0).addClass("btn_orange");
        $(".onoff_").eq(0).addClass("_select");
        $(".onoff_").eq(1).removeClass("btn_orange");
        $(".onoff_").eq(1).removeClass("_select");
        $(".onoff_").eq(1).addClass("btn-default");

        $("#popup_history .cont_list").eq(0).show();
        $("#popup_history .cont_list").eq(1).hide();
    }
    else {
        $(".onoff_").eq(0).removeClass("btn_orange");
        $(".onoff_").eq(0).removeClass("_select");
        $(".onoff_").eq(0).addClass("btn-default");
        $(".onoff_").eq(1).removeClass("btn-default");
        $(".onoff_").eq(1).addClass("btn_orange");
        $(".onoff_").eq(1).addClass("_select");

        $("#popup_history .cont_list").eq(0).empty();
        $("#popup_history .cont_list").eq(0).hide();
        $("#popup_history .cont_list").eq(1).show();
    }
}

