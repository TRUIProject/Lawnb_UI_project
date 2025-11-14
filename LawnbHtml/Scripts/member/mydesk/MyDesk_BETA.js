
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


    $(document).on('click', '.noti_txt_set .div_ab .set_close', function () { //header 히스토리
        $('.noti_txt_set').hide();
        $('.noti_txt').show();
    });

    // 결과 정리 날짜 정의 
    $(document).on('change', '#dDate', function () {
        if ($(this).children('option:selected').val() != '00') {
            if ($(this).children('option:selected').val() == '0') {
                $("#dDate").val("0");
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
});


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

        if (result == "-1") {
            //alert("로그인후 이용해주세요");
            //$('.base_popup').hide();
            $("#individual_area").show();
            $("#popup_login_ask").show();
            return;
        } else if (result == "-2") {
            //alert("개인화 로그인후 이용해주세요");
            //$('.base_popup').hide();
            $("#individual_area").show();
            $("#popup_login_ask").show();
            return;
        }
        else if (result.substring(0, 2) == "MY") {
            // 개인화 메인페이지 스크립트           
            mydeskParams.sTab = result;
            var sCat;
            if (result == "MY02") { sCat = "ALL"; }
            else { sCat = ""; }

            var dataParams = { "sCatCode": mydeskParams.sTab, "sCat": sCat, "sPageBY": 0 };
            sendNonBlockingAjaxRequest(mydeskParams.MyDeskUrl, dataParams, mydesk.myPersonalizationDataCallback);
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
                $('.base_popup').hide();
                $('#individual_area').show();
                $('#other_function').show();
            }
            else if (result == "VIEWMY06") // 파일저장
            {
                $('.base_popup').hide();
                $('#individual_area').show();
                $('#other_function_save').show();
            }
            else if (result == "VIEWMY07") // 공유하기
            {
                $('.base_popup').hide();
                $('#individual_area').show();
                $('#popup_share').show();
            }
        }
    };

    this.myPersonalizationDataCallback = function (result) {

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
                $('#popup_alert').show();
            }
        }
    };

    // 원문보기 팝업(메인레이아웃에서 MyDesk.js 통해 사용하기위해 별도 첨부)
    this.showOriginalView = function (href) {
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
            historyContentSet("C0|L0|0|0|0|0|0|0|");
        }
        else if (type == "up") {
            // 총 8개 cont, check된 count 제외하고 남은 count만큼 0| 추가
            var chkCnt = 0;
            $(".chkCont").each(function () {
                if ($(this).is(":checked")) {
                    chkVals += $(this).val() + "|"
                    chkCnt++;
                }
            });

            for (var i = 0; i < 8 - chkCnt; i++) {
                chkVals += "0|";
            }
        }

        if (type != "init")
        {        
            var dataParams = { "sType": type, "sChkVals": chkVals, "sPageBY": 0 };
            sendAjaxRequest(mydeskParams.MyHistorySetUrl, dataParams, mydesk.myHistorySetCallBack);
        }
    };

    this.myHistorySetCallBack = function (result) {

        if (result != null) {

            // 히스토리 셋팅
            if (result != "0") {
                historyContentSet(result);
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
                }
                else {
                    $(".chkMainCont").each(function () {

                        if ($(this).is(":checked")) {
                            sCode += $(this).val() + "|"
                        }
                    });
                    $("#sMemoYN").val($("input[class=chkMemoYN]:checked").val()); // 메모 여부 Y,N,ALL
                    $("#sCode").val(sCode); // C0|L0|N0|

                    if ($("#sWord").length > 0) {
                        $("#sWord").val($("#txtSearchTitle").val());
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
                }
            }

            $("#sPage").val("1");
            mydesk.initSearchList();
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
            else if (result == "LI3") {
                alert("나의 법규집은 최대 30개까지 추가 가능합니다. 추가 가능수를 초과하여 해당 법규를 나의 법규집에 담을 수 없습니다.");
            }
            else if (result == "EI2") {
                alert("나의 E-Book은 최대 20권까지 추가 가능합니다. 추가 가능 권수를 초과하여 해당 도서를 나의 E-Book에 담을 수 없습니다.");
            }
            else if (result == "LD") {
                alert("선택 법규가 나의 법규집에서 삭제되었습니다.");
                mydesk.getMyLawCollectionList('', 'ALL', 'Y');
            }
            else if (result == "-1") {
                alert("수정 실패");
                //$(".favi_add").children("i").toggleClass('starfull');
            }
            else if (result == "I" || result == "D") {

                var sSetType = (result == "I") ? "D" : "I";
                $("#sSetType").val(sSetType);
                $(".favi_add").children("i").toggleClass('starfull');
                opener.mydesk.getMyLawCollectionList('', 'ALL', 'N'); // 부모창 리스트페이지 우측 나의 E-Book 변경되면 수정.
            }
            else if (result.substring(0, 3) == "EID") {
                $(".favi_icon").eq(result.substring(3, 4)).children("i").toggleClass('starfull');
                mydesk.getMyLawCollectionList('', 'ALL', 'N');
            }
            else if (result == "ED") {
                mydesk.getMyLawCollectionList('', 'ALL', 'N');  // 우측 나의 E-Book 다시 불러오기
                doc.selectEbookList($("#sCatMain").val()); // E-Book 메인하단 다시 불러오기
            }
        }
    };
};

// 개인화 히스토리 - 컨텐츠 범위 설정
function historyContentSet(result)
{
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