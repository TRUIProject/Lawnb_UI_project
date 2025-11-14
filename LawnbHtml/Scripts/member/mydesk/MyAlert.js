
$(function () {
    var myAlertParams = {
        "MyAlertViewGetUrl": "/MyDesk/MyAlertViewGet",
        "MyAlertViewSaveUrl": "/MyDesk/MyAlertViewSave",
        "MyAlertViewUpdateUrl": "/MyDesk/MyAlertViewUpdate",
        "MyAlertEmailUpdateUrl": "/MyDesk/MyAlertEmailUpdate",
        "MyAlertViewDelUrl": "/MyDesk/MyAlertViewDel",
        "ContentTitle": "",
        "MyAlertMainDetailViewUrl": "/MyDesk/MyDeskView",
        "MyAlertLawSearchUrl": "/MyDesk/MyAlertLawSearch",
        "MyAlertLawDuplicationCheckUrl": "/MyDesk/MyAlertLawDuplicationCheck"
    };
    myalert.init(myAlertParams);
});

//$(document).ready(function () { 
//    
//});

var myalertParams = null;
var myalert = new function () {

    this.init = function (data) {
        myalertParams = data;
        myalert.bindEvent();
    };

    this.bindEvent = function () {

        /*
        // 본문 우측상단 알림 클릭
        $(document).on('click', '.top_container .function_area #alert_set', function () {

        var sLawId = $("#hdnSlawId").val();
        myalert.ContentTitle = $("#hdnStitle").val();
        myalert.myAlertViewGet(sLawId);
        });
        */
        // 기간 자동 설정
        $(document).on('click', '.btnPeriod', function () {

            $('.btnPeriod').removeClass("_select");
            $(this).addClass("_select");

            var periodVal = $(this).val();
            $("#sPeriod").val(periodVal);
            myalert.dateInput(periodVal, 'dDate');
        });

        // 알림(메인) 왼쪽 필터 조건
        $(document).on('click', '.chkScope', function () {

            var chkCount = 0;
            $(".chkScope").each(function (index) {
                if ($("input[class=chkScope]").eq(index).prop("checked")) {
                    chkCount++;
                }
            });
            if (chkCount == 2) {
                if ($(this).val() == "0") {
                    if (!$(this).is(":checked")) {
                        $(".chkScope").prop("checked", false);
                    }
                    else {
                        $(".chkScope").prop("checked", "checked");
                    }
                }
                else {
                    if ($("input[class=chkScope]").eq(1).prop("checked")
                        && $("input[class=chkScope]").eq(2).prop("checked")) {
                        $(".chkScope").prop("checked", "checked");
                    }
                    else if ($("input[class=chkScope]").eq(0).prop("checked")) {
                        $(".chkScope").eq(0).prop("checked", false);
                    }
                }
            }
            else if (chkCount == 1) {
                if ($(this).val() == "0") {
                    if (!$(this).is(":checked")) {
                        $(".chkScope").prop("checked", false);
                    }
                    else {
                        $(".chkScope").prop("checked", "checked");
                    }
                }
            }
        });

        // 추가,수정 시 취소
        $(document).on('click', '.btn_area_normal ._cancel', function () {
            myalert.myAlertViewHide();
        });

        // 법령 검색 박스 hide
        $(document).on('click', '.school_search p span', function () {
            $("#alert_add_keyw .school_search").hide();
        });

        // 법령 추가시 검색
        $(document).on('click', '.school_search div.lawval', function () {

            //기존에 법령 저장된 여부 체크
            var lawVal = $(this).attr("data-val");
            var txtSearch = $(this).attr("data-txt");

            $("#hdnsScope").val(lawVal);
            $("#txtSearch").val(txtSearch);

            var data = { "sLawId": lawVal };
            sendAjaxRequest(myalertParams.MyAlertLawDuplicationCheckUrl, data, myalert.myAlertLawDuplicationCheckCallBack);
        });

        // 키워드 추가,수정 - 컨탠츠 선택 
        $(document).on('click', '.chkScopeMain', function () {
            var _checked = $(this).is(":checked");
            var _thisName = $(this).attr("name");
            if (_checked) {
                $("input:checkbox[name=" + _thisName + "]").prop("checked", true);
            }
            else {
                $("input:checkbox[name=" + _thisName + "]").prop("checked", false);
            }
        });

        // 키워드 추가,수정 - 컨탠츠 선택 
        $(document).on('click', '.chkScopes', function () {
            var _checked = $(this).is(":checked");
            var _thisName = $(this).attr("name");
            var allCount = $("input:checkbox[name=" + _thisName + "]").length;
            var checkedCount = $("input:checkbox[name=" + _thisName + "]:checked").length;

            if (_checked) {
                if (allCount - 1 > checkedCount) {
                    $("input:checkbox[name=" + _thisName + "]").eq(0).prop("checked", false);
                }
                else {
                    $("input:checkbox[name=" + _thisName + "]").prop("checked", true);
                }
            }
            else {
                $("input:checkbox[name=" + _thisName + "]").eq(0).prop("checked", false);
            }
        });

        // 추가된 키워드 삭제
        $(document).on('click', '.delkeyword', function () {
            var index = $(".delkeyword").index($(this));
            $(".addkeyword").eq(index).remove();
        });

        $(document).on('click', '.btnEmailYN', function () {

            $('.btnEmailYN').removeClass("_select");
            $(this).addClass("_select");

            var _thisVal = $(this).val();
            $("#sEmailYN").val(_thisVal);

            if (_thisVal == "N") {
                $("#txtEmail").attr("disabled", "disabled");
                $(".btnEmailUpdate").hide();
            }
            else {
                $("#txtEmail").removeAttr("disabled");
                $(".btnEmailUpdate").show();
            }
        });

        $(document).on('click', '.rdoEmailYN', function () {

            var checkedVal = $(this).val();
            $("#sEmailYN").val(checkedVal);
        });
    };

    // 날짜 변경
    this.dateInput = function (n, ct) {
        $("#" + ct + "1").text("");
        $("#" + ct + "2").text("");

        var today = new Date();
        var endDay = new Date();
        var n_chg;
        var yyyy, mm, dd;
        //today.setMonth(today.getMonth() - 7);
        //endDay.setMonth(endDay.getMonth() - 7);        

        // 1,3,6,12(1년),36(3년)        
        if (n.length > 1) {
            n_chg = n / 12;

            yyyy = endDay.getFullYear() + n_chg;
            mm = (endDay.getMonth() + 1).toString();
            dd = endDay.getDate();
        }
        else {
            //12월(11) + 6
            var monthGap = (endDay.getMonth() + 1) + parseInt(n);
            var todayMonth = endDay.getMonth() + 1;
            if (monthGap > 12) { monthGap -= 12; }

            // 월을 더했을 때 년도가 바뀜.
            if (todayMonth > monthGap) { n_chg = 1; }
            else { n_chg = 0; }

            yyyy = endDay.getFullYear() + n_chg;
            mm = monthGap.toString();
            dd = endDay.getDate();
        }
        var t_yyyy = today.getFullYear();
        var t_mm = (today.getMonth() + 1).toString();
        var t_dd = today.getDate();

        $("#" + ct + "1").text(t_yyyy + "." + myalert.addzero(t_mm) + "." + myalert.addzero(t_dd));
        $("#" + ct + "2").text(yyyy + "." + myalert.addzero(mm) + "." + myalert.addzero(dd));
    };

    this.addzero = function (n) {
        return n < 10 ? "0" + n : n;
    };

    //----------------------- 알림(본문) -------------------------//    
    // 기존 DB email로 복구
    this.myAlertEmailRestore = function (_tempEmail) {
        _tempEmail = _tempEmail.trim();
        $("#txtEmail").val(_tempEmail);
    };

    this.myAlertViewGet = function (sLawId) {
        var data = { "sScope": sLawId };
        sendNonBlockingAjaxRequest(myalertParams.MyAlertViewGetUrl, data, myalert.myAlertViewGetCallBack);
    };

    //알림(본문,메인) 저장
    this.myAlertViewSave = function (type, sScope) {
        var saveText = "법령 업데이트 알림은 현행법령을 기준으로 제공됩니다.\n로앤비 법령 업데이트 알림 서비스의 제공 범위는 아래와 같습니다.";
        saveText += "\n- 법령 개정시\n- 법령 개정발의가 있을 경우";
        var _checkTitle = true;
        myalert.ContentTitle = "";
        if (sScope == "" || sScope == null || sScope == "undefined") {

            if ($(".txt_blue").length > 0) // 키워드
            {
                $('.addkeyword').each(function () {
                    var txtKeyword = $(this).text();
                    myalert.ContentTitle += txtKeyword + " ";
                });
                myalert.ContentTitle = $.trim(myalert.ContentTitle);

                if (myalert.ContentTitle == "") {
                    alert("키워드 설정은 필수 입니다. \n하나 이상의 키워드를 선택해주세요.");
                    $("#txtSearch").focus();
                    _checkTitle = false;
                }
                if (_checkTitle) {
                    $(".chkScopes").each(function (index) {
                        var _thisVal = $(".chkScopes").eq(index).val();
                        if ($(".chkScopes").eq(index).is(":checked"))
                            sScope += _thisVal + "|";
                    });
                }
            }
            else // 법령
            {
                if ($.trim($("#txtSearch").val()) != "" && $.trim($("#txtSearch").val()) != null) {
                    sScope = $("#hdnsScope").val();
                    if (sScope.length == 6) {
                        myalert.ContentTitle = $("#txtSearch").val();
                    }
                    if (myalert.ContentTitle == "") {
                        _checkTitle = false;
                    }
                }
                else {
                    $("#hdnsScope").val("");
                }
            }
        }

        if (_checkTitle) {
            if (sScope == "" || sScope == null || sScope == "undefined") {
                if ($(".txt_blue").length > 0) // 키워드
                {
                    alert("콘텐츠 범위 설정은 필수 입니다.\n하나 이상의 콘텐츠를 선택해주세요.");
                }
                else {
                    alert("법령이 선택되지 않았습니다.");
                    $("#txtSearch").focus();
                }
            }
            else {
                if (type == "MAIN") {
                    if (myalert.myAlertValidCheck(sScope, "")) {

                        var sAlertDiv = $("#sAlertDiv").val();
                        var sInfo = $("#sInfo").val();
                        var sFreDiv = $("#sFreqDiv").val();
                        //var sEmailYN = $("#sEmailYN").val($("input:radio[name='rdoEmailYN']:checked").val());
                        var sEmailYN = $("input:radio[name='rdoEmailYN']:checked").val();
                        //var sPeriod = $("input:radio[name='rdoPeriod']:checked").val();
                        var sPeriod = $("#sPeriod").val();  
                        var sScope = $("#sScope").val();
                        var dataParams = { "sAlertDiv": sAlertDiv, "sInfo": sInfo, "sFreqDiv": sFreDiv, "sEmailYN": sEmailYN, "sPeriod": sPeriod, "sScope": sScope };
                        //var dataParams = $('#submitForm').serialize();
                        ////$('#submitForm').attr("action", myalertParams.MyAlertViewSaveUrl);
                        sendNonBlockingAjaxRequest(myalertParams.MyAlertViewSaveUrl, dataParams, myalert.myAlertViewSaveCallBack);
                    }
                }
                else if (type == "VIEW") {
                    if (confirm(saveText)) {
                        if (myalert.myAlertValidCheck(sScope, "")) {
                            var dataParams = $('#submitForm').serialize();
                            ////$('#submitForm').attr("action", myalertParams.MyAlertViewSaveUrl);
                            sendNonBlockingAjaxRequest(myalertParams.MyAlertViewSaveUrl, dataParams, myalert.myAlertViewSaveCallBack);
                        }
                    }
                }
            }
        }
    };

    //알림(본문,메인) 수정
    this.myAlertViewUpdate = function (type, sScope, sIdx) {
        var saveText = "법령 업데이트 알림은 현행법령을 기준으로 제공됩니다.\n로앤비 법령 업데이트 알림 서비스의 제공 범위는 아래와 같습니다.";
        saveText += "\n- 법령 개정시\n- 법령 개정발의가 있을 경우";
        if (type == "MAIN") {

            if ($(".chkScopes").length > 0) {
                sScope = "";
                $(".chkScopes").each(function (index) {
                    var _thisVal = $(".chkScopes").eq(index).val();
                    if ($(".chkScopes").eq(index).is(":checked"))
                        sScope += _thisVal + "|";
                });

                if (sScope == "" || sScope == null || sScope == "undefined") {
                    alert("콘텐츠 범위 설정은 필수 입니다.\n하나 이상의 콘텐츠를 선택해주세요.");
                }
            }

            if (myalert.myAlertValidCheck(sScope, sIdx)) {

                var sAlertDiv = $("#sAlertDiv").val();
                var sFreDiv = $("#sFreqDiv").val();
                //var sEmailYN = $("#sEmailYN").val();
                var sEmailYN = $("input:radio[name='rdoEmailYN']:checked").val();
                //var sPeriod = $("input:radio[name='rdoPeriod']:checked").val();
                var sPeriod = $("#sPeriod").val();
                var sScope = $("#sScope").val();

                var dataParams = { "sIdx": sIdx, "sAlertDiv": sAlertDiv, "sFreqDiv": sFreDiv, "sEmailYN": sEmailYN, "sPeriod": sPeriod, "sScope": sScope };
                //var dataParams = $('#submitForm').serialize();
                sendNonBlockingAjaxRequest(myalertParams.MyAlertViewUpdateUrl, dataParams, myalert.myAlertViewUpdateCallBack);
            }
        }
        else if (type == "VIEW") {
            if (confirm(saveText)) {
                if (myalert.myAlertValidCheck(sScope, sIdx)) {
                    var dataParams = $('#submitForm').serialize();
                    sendNonBlockingAjaxRequest(myalertParams.MyAlertViewUpdateUrl, dataParams, myalert.myAlertViewUpdateCallBack);
                }
            }
        }
    };

    //알림저장 시 유효성 체크
    this.myAlertValidCheck = function (sScope, sIdx) {
        var chkResult = true;

        if ($("#sEmailYN").val() == "") {
            $("#sEmailYN").val("N");
        }
        if ($("#sPeriod").val() == "") {
            if (sScope.indexOf('|') > 0) {
                $("#sPeriod").val("1");
            }
            else {
                $("#sPeriod").val("12");
            }
        }

        if ($(".btnPeriod").length > 0) {

            if (!$(".btnPeriod").hasClass("_select")) {
                alert("기간을 설정해주세요.");
                chkResult = false;
            }
        }
        if ($(".btnEmailYN").length > 0) {
            if (!$(".btnEmailYN").hasClass("_select")) {
                alert("이메일전송여부를 선택해주세요.");
                chkResult = false;
            }
        }
        if (chkResult) {
            chkResult = commonValidCheck("email", "txtEmail");
        }

        if ($(".rdoFreq").length > 0) {
            var freqVal = $("input[class='rdoFreq']:checked").val();
            if (freqVal == "M" || freqVal == "W") {
                if (freqVal == "M") {
                    var subVal = "1";
                    subVal = $("#selDay option:selected").val();
                }
                else if (freqVal == "W") {
                    var subVal = "MON";
                    subVal = $("#selWeek option:selected").val();
                }
                $("#sFreqDiv").val(freqVal + ":" + subVal);
            }
            else {
                $("#sFreqDiv").val(freqVal);
            }
        }
        if (sScope == "") {
            chkResult = false;
        }

        //결과값이 모두 참
        if (chkResult) {
            if (sScope != "" && sScope != null) {
                if ($("#sFreqDiv").val() == "") { $("#sFreqDiv").val("D"); }
                else { $("#sFreqDiv").val(); }

                $("#sInfo").val(myalert.ContentTitle);
                $("#sScope").val(sScope);
                $("#sIdx").val(sIdx);
            }
        }
        return chkResult;
    };

    //알림(본문,메인)삭제
    this.myAlertViewDel = function (sIdx) {
        var delText = "";
        var chkDel = true;
        if (sIdx != "") {
            delText = "해당 법령에 대한 알림이 삭제됩니다.\n삭제된 알림은 복구가 불가능합니다.\n정말 삭제하시겠습니까?";
        }
        else {
            delText = "선택한 알림을 리스트에서 삭제합니다.";
            if ($(".chkId").length > 0) {
                if ($("input[class='chkId']:checked").length == 0) {
                    alert("삭제할 알림을 선택해주세요");
                    chkDel = false;
                }
                else {
                    var chkIdStr = "";
                    $(".chkId").each(function () {
                        if ($(this).is(":checked")) {
                            chkIdStr += $(this).val() + ",";
                        }
                    });
                    if (chkIdStr.length > 0)
                        sIdx = chkIdStr.substring(0, chkIdStr.length - 1);
                    // 빈스크립트 방지 차원
                    if (chkIdStr == "") chkDel = false;
                }
            }
        }

        if (chkDel) {
            if (confirm(delText)) {
                var data = { "sIdx": sIdx };
                sendAjaxRequest(myalertParams.MyAlertViewDelUrl, data, myalert.myAlertViewDelCallBack);
            }
        }
    };

    //알림(본문)취소
    this.myAlertViewCancel = function () {
        $('#individual_area').hide();
        $('.base_popup').hide();
        $('#bg_screen').hide();
        //myalert.myAlertViewGet(sLawId);
    };

    //알림(본문,메인) 메일 수정
    this.myAlertEmailUpdate = function () {

        if (!commonValidCheck("email", "txtEmail")) {
            //이메일 작성 유효값 체크
        }
        else {
            var sMail = $.trim($("#txtEmail").val());
            var data = { "sEmail": sMail };
            sendAjaxRequest(myalertParams.MyAlertEmailUpdateUrl, data, myalert.myAlertViewEmailUpdateCallBack);
        }
    };

    // 취소 시 hide 처리
    this.myAlertViewHide = function () {

        $('#individual_area').hide();

        $('.alert_area_modi').empty();
        $('.alert_area_modi').hide();
        $('#bg_screen').hide();
        $('#alert_add_keyw').hide();
    };
    //\---------------------- 알림(본문)-------------------------\//
    //----------------------- 알림(본문)CallBack -------------------------//
    this.myAlertViewGetCallBack = function (result) {

        if (result != null) {
            $("#alert_results").empty();
            $("#alert_results").html(result);
        }

        if ($('#popup_alert_set').length > 0) {
            $('.base_popup').hide();
            $('#individual_area').show();
            $('#popup_alert_set').show();
        }
    };

    this.myAlertViewSaveCallBack = function (result) {
        if (result != null) {
            if (result == "11") {
                alert("키워드 알림이 설정되었습니다.\n추후 설정된 수신 빈도에 따라 로앤비 홈페이지 상단에서 확인 가능합니다.");
                mydesk.getSearch("apply", "MY03");
            }
            else if (result == "21") {
                alert("법령 알림이 저장되었습니다.");
                if ($("#search_results").length > 0) {
                    mydesk.getSearch("apply", "MY03");
                }
                else {
                    //$(".base_popup").hide();
                    location.reload();
                }
            }
            else if (result == "2") {
                alert("법위지정 오류");
            }
            else if (result == "3") {
                alert("법령 키워드 구분 오류");
            }
            else if (result == "-1") {
                alert("저장에 실패했습니다. 다시 시도해주세요.");
            }

            if ($('.alert_area_modi').length > 0) {
                $('.alert_area_modi').empty();
                $('.alert_area_modi').hide();
                $('#bg_screen').hide();
                $('#alert_add_keyw').hide();
            }
        }
    };

    this.myAlertViewUpdateCallBack = function (result) {
        if (result != null) {
            if (result == "11") {
                alert("키워드 알림이 수정되었습니다.\n추후 설정된 수신 빈도에 따라 로앤비 홈페이지 상단에서 확인 가능합니다.");
                mydesk.getSearch("apply", "MY03");
            }
            else if (result == "21") {
                alert("법령 알림이 수정되었습니다");
                if ($("#search_results").length > 0) {
                    mydesk.getSearch("apply", "MY03");
                }
                else {
                    //$(".base_popup").hide();
                    location.reload();
                }
            }
            else if (result == "2") {
                alert("법위지정 오류");
            }
            else if (result == "-1") {
                alert("수정에 실패했습니다. 다시 시도해주세요.");
            }

            if ($('.alert_area_modi').length > 0) {
                $('.alert_area_modi').empty();
                $('.alert_area_modi').hide();
                $('#bg_screen').hide();
                $('#alert_add_keyw').hide();
            }
        }
    };

    this.myAlertViewEmailUpdateCallBack = function (result) {
        if (result != null) {
            if (result == "1") {
                alert("이메일이 수정되었습니다");
            }
            else {
                alert("이메일 수정에 실패했습니다. 다시 시도해주세요.");
            }
        }
    };

    this.myAlertViewDelCallBack = function (result) {
        if (result != null) {
            if (result == "1") {
                alert("삭제되었습니다");
                if ($("#search_results").length > 0) {
                    mydesk.getSearch("apply", "MY03");
                }
                else {
                    //$(".base_popup").hide();
                    location.reload();
                }
            }
            else {
                alert("삭제에 실패했습니다. 다시 시도해주세요.");
            }
        }
    };
    //\---------------------- 알림(본문)CallBack ------------------------\//


    //----------------------- 알림(메인) -------------------------//    
    // 알림 법령, 키워드 추가
    this.myAlertMainDetailView = function (sCatCode, sIdx, sType, addType) {

        var alertText = "";
        var valid1 = 0, valid2 = 0;
        sValid1 = $("#sValid").val();
        sValid2 = $("#sValidExpire").val();
        valid1 = parseInt(sValid1); // 유효한 알림
        valid2 = parseInt(sValid2); // 기간만료 알림

        if (valid1 >= 10 && addType != "U") {
            alertText = "알림은 최대 10개까지 설정 가능합니다. 해당 알림을 추가하시려면 기존의 알림 리스트 내역을 삭제 후 이용 부탁드립니다.";
            alert(alertText);
        }
        else if ((valid1 + valid2) >= 10 && addType == "I") {
            alertText = "알림은 최대 10개까지 설정 가능합니다. 해당 알림을 추가하시면 가장 오래된 리스트가 삭제됩니다.";
            if (confirm(alertText)) {

                $('.alert_area_modi').empty();
                $('.alert_area_modi').hide();
                $('#bg_screen').hide();
                $('#alert_add_keyw').hide();

                var dataParams = { "sCatCode": sCatCode, "sIdx": sIdx, "sType": sType };
                sendAjaxBGshowRequest(myalertParams.MyAlertMainDetailViewUrl, dataParams, myalert.myAlertMainDetailViewCallBack);
            }
        }
        else {
            $('.alert_area_modi').empty();
            $('.alert_area_modi').hide();
            $('#bg_screen').hide();
            $('#alert_add_keyw').hide();

            var dataParams = { "sCatCode": sCatCode, "sIdx": sIdx, "sType": sType };
            sendAjaxBGshowRequest(myalertParams.MyAlertMainDetailViewUrl, dataParams, myalert.myAlertMainDetailViewCallBack);
        }
    };

    // 법령알림추가 시 법령검색
    this.myAlertSearch = function (type) {
        var txtSearch = $.trim($("#txtSearch").val());
        var alertTxt = "";
        if (type == "1") {
            alertTxt = "키워드 설정은 필수 입니다.\n 하나 이상의 키워드를 선택해주세요.";
        }
        else if (type = "2") {
            alertTxt = "법령 설정은 필수 입니다.\n 법령명을 검색하여 입력해주세요.";
        }

        if (txtSearch == "" || txtSearch == null) {
            alert(alertTxt);
            $("#txtSearch").focus();
        }
        else if (txtSearch.length < 2) {
            alert("검색어는 두 자 이상이어야 합니다.");
            $("#txtSearch").focus();
        }
        /*
        else if (txtSearch.search(/\s/g) != -1) // txtSearch.match(/\s/g)
        {
        alert("검색어의 띄어쓰기를 제외하고 입력해주세요.");
        $("#txtSearch").focus();
        }
        */
        else {
            if (type == "1") {
                var _checkDupl = true;
                $('.addkeyword').each(function () {
                    var _thisVal = $(this).text();
                    if (_thisVal == txtSearch) {
                        alert("이미 추가된 키워드 입니다.");
                        $("#txtSearch").focus();
                        _checkDupl = false;
                        return false;
                    }
                });
                if (_checkDupl) {
                    $(".txt_blue").append("<span class=\"addkeyword\"><i class=\"icon- delkeyword\"  data-icon=\"&#xe915;\"></i>" + txtSearch + "</span>");
                    $("#txtSearch").val("");
                    $("#txtSearch").focus();
                }
            }
            else if (type == "2") {
                var data = { "searchWord": txtSearch };
                sendAjaxRequest(myalertParams.MyAlertLawSearchUrl, data, myalert.myAlertLawSearchCallBack);
            }
        }
    };
    //\---------------------- 알림(메인)-------------------------\//
    //----------------------- 알림(메인)CallBack -------------------------//
    this.myAlertMainDetailViewCallBack = function (result) {
        if (result != null) {
            $("#alert_add_keyw").empty();
            $("#alert_add_keyw").html(result);

            $("#bg_screen").show();
            //$("#bg_screen").css("display","");
            $("#alert_add_keyw .alert_area_modi").show();
            $("#alert_add_keyw").show();
        }
    };

    this.myAlertLawSearchCallBack = function (result) {
        if (result != null) {
            $(".school_search").empty();
            $(".school_search").html(result);

            $("#alert_add_keyw .school_search").show();
        }
    };

    this.myAlertLawDuplicationCheckCallBack = function (result) {
        if (result != null) {
            if (result == "1") {
                $(".school_search").empty();
                $("#alert_add_keyw .school_search").hide();
            }
            else if (result == "-1") {
                $("#hdnsScope").val("");
                $("#txtSearch").val("");
                alert("이미 알림이 설정되어 있는 법령입니다.\n기존의 알림리스트를 확인하시고, 해당 알림기간이 종료된 경우 재설정 해주세요.");
            }
        }
    };
    //\---------------------- 알림(메인)CallBack ------------------------\//

    //---------------------- (메인)등록된 알림리스트, 공지사항 리스트(상위10개) ------------------------//
    this.myAlertRegList = function () {

        sendNonBlockingAjaxRequest("/MyDesk/MyAlertRegList", "", function (result) {
            if (result != null) {
                $("#myalert_result").empty();
                $("#myalert_result").html(result);
            }
        });
    };

    this.noticeRegList = function () {

        sendNonBlockingAjaxRequest("/MyDesk/NoticeRegList", "", function (result) {
            if (result != null) {
                $("#notice_result").empty();
                $("#notice_result").html(result);
            }
        });
    };
    //\---------------------- (메인)등록된 알림리스트, 공지사항 리스트(상위10개) ------------------------\//

    this.myAlertRegCount = function (userCode) {
        var data = { "userCode": userCode };
        sendNonBlockingAjaxJsonRequest("/MyDesk/MyAlertCount", data, function (result) {
            if (result != null) {
                $("#alertCount").empty();
                $("#alertCount").text(result);
                if (parseInt(result) == 0) {
                    $("#alertCount").hide();
                }
                else {
                    $("#alertCount").text("N");
                    $("#alertCount").show();
                }
            }
        });
    };

    this.myAlertKeywordRegList = function (keyIdx) {
        window.open("/MyDesk/KeywordRegList?keyIdx=" + keyIdx + "&popupYn=Y", "_blank", "top=0,left=0,width=700,height=500,toolbar=0,status=0,scrollbars=1,resizable=0");
    };

    // 모바일 알림 설정 view
    this.mobileMyAlertView = function () {

        var data = { "DeviceYN": localStorage.getItem("deviceNotiConfig") };
        sendAjaxBGshowRequest("/AjaxInfo/MobileMyAlertView", data, function (result) {
            if (result != null) {
                $("#mobile_alert_set").html(result);
            }
            $("#popup_alert").hide();
            $("#mobile_alert_set").show();
            $("#bg_screen").show();
        });
    };

    // 모바일 알림 설정 취소
    this.mobileMyAlertViewCancel = function () {
        $("#popup_alert").show();
        $("#mobile_alert_set").hide();
        $("#bg_screen").hide();
    };

    // 모바일 알림 설정 변경
    this.mobileMYAlertSetting = function (c, v) {

        if (c == "pushall" && v == "0") {
            pushinquiry = v;
            pushlaw = v;
            pushkey = v;
            pushnotice = v;
            pushall = "Y"

            $(".pushinquiry").eq(0).addClass("btn_orange _select");
            $(".pushlaw").eq(0).addClass("btn_orange _select");
            $(".pushkey").eq(0).addClass("btn_orange _select");
            $(".pushnotice").eq(0).addClass("btn_orange _select");

            $(".pushinquiry").eq(1).addClass("btn-default");
            $(".pushlaw").eq(1).addClass("btn-default");
            $(".pushkey").eq(1).addClass("btn-default");
            $(".pushnotice").eq(1).addClass("btn-default");

            $(".pushinquiry").attr("disabled", false);
            $(".pushlaw").attr("disabled", false);
            $(".pushkey").attr("disabled", false);
            $(".pushnotice").attr("disabled", false);
        }
        else if (c == "pushall" && v == "1") {
            pushinquiry = v;
            pushlaw = v;
            pushkey = v;
            pushnotice = v;
            pushall = "N"

            $(".pushinquiry").removeClass("btn-default");
            $(".pushinquiry").removeClass("btn_orange");
            $(".pushinquiry").removeClass("_select");

            $(".pushlaw").removeClass("btn-default");
            $(".pushlaw").removeClass("btn_orange");
            $(".pushlaw").removeClass("_select");

            $(".pushkey").removeClass("btn-default");
            $(".pushkey").removeClass("btn_orange");
            $(".pushkey").removeClass("_select");

            $(".pushnotice").removeClass("btn-default");
            $(".pushnotice").removeClass("btn_orange");
            $(".pushnotice").removeClass("_select");

            $(".pushinquiry").attr("disabled", true);
            $(".pushlaw").attr("disabled", true);
            $(".pushkey").attr("disabled", true);
            $(".pushnotice").attr("disabled", true);
        }
        else {
            if (c == "pushinquiry") pushinquiry = v;
            else if (c == "pushlaw") pushlaw = v;
            else if (c == "pushkey") pushkey = v;
            else if (c == "pushnotice") pushnotice = v;

        }

        $("." + c).eq(v).removeClass("btn-default");
        if (!$("." + c).eq(v).hasClass("btn_orange") && !$("." + c).eq(v).hasClass("_select")) {
            $("." + c).eq(v).addClass("btn_orange _select");
        }

        var t;
        if (v == "0") t = "1";
        else t = "0";
        $("." + c).eq(t).removeClass("btn_orange");
        $("." + c).eq(t).removeClass("_select");
        if (!$("." + c).eq(t).hasClass("btn-default")) {
            $("." + c).eq(t).addClass("btn-default");
        }
    };

    // 모바일 알림 설정 저장
    this.mobileMyAlertViewSet = function () {
        localStorage.setItem("deviceNotiConfig", pushall);
        var pushVal = pushinquiry + "|" + pushlaw + "|" + pushkey + "|" + pushnotice;
        var data = { "pushVal": pushVal };

        sendAjaxRequest("/AjaxInfo/SetMobileMyAlert", data, function (result) {
            if (result != null) {
                if (result == "1") {
                    alert("알림이 설정되었습니다.");
                    $("#popup_alert").show();
                    $("#mobile_alert_set").hide();
                    $("#bg_screen").hide();
                }
                else if (result == "-1") {
                    alert("저장에 실패했습니다. 다시 시도해주세요.");
                }
            }
        });
    };
};

// 1:1문의 알림 연결
function Detail(LQM_No, BBS) {
    var obj = [{ "name": "LQM_No", "value": LQM_No }, { "name": "BBS", "value": BBS}]
    POSTFORMCall("/Questions/Detail/", obj);
}