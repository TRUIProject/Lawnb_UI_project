
var lawfirmParams = null;
var lawfirm = new function () {

    this.init = function (data) {
        lawfirmParams = data;
        this.initData(lawfirmParams);
        this.bindEvent();
    };

    this.initData = function (data) {

        $('li.lawfirmtab').removeClass('this-page');
        $('li.lawfirmtab').eq(data.sTab).addClass('this-page');
        sortYn1 = "Y"; sortYn2 = "Y"; sortYn3 = "Y";
        this.getSubView(data);
    };

    this.bindEvent = function () {

        // 리스트 수 변경
        $(document).on('change', '#sListChecker_v2', function () {
            $('#sPage').val("1");
            $('#sList').val($(this).children('option:selected').val());
            lawfirm.getContentList(lawfirmParams.listUrl);
        });
    };

    this.getSubView = function (data) {

        var url;
        var dataParams;

        if (data.sTab == "0") {
            url = data.previewUrl;
            dataParams = { "sId": data.Did };
        }
        else {
            //            url = data.listUrl;
            //            dataParams = { "sCode": data.sCode, "sType5": data.Did, "sType": 1 };

            url = (data.sCode == "P000") ? data.listLawyerUrl : data.listUrl;
            dataParams = { "sCode": data.sCode, "sType5": data.Did, "sSort": (data.sCode == "P000") ? "1" : "0", "sType": 1 };
        }
        sendAjaxRequest(url, dataParams, lawfirm.setLawFirmDataCallback);
    };

    this.getContentList = function (url) {
        var dataParams = $('#searchForm').serialize();
        sendAjaxRequest(url, dataParams, lawfirm.setLawFirmDataCallback);
    };

    this.setLawFirmDataCallback = function (result) {

        if (result != null) {
            $('#search_results_view').empty();
            $('#search_results_view').html(result);

            lawfirm.drawLi();
            setHeight_under();
        }
        storage.setMyDeskChk();
        setStartMyDesk(); // 마이데스크 아이콘 생성
    };

    // 검색
    this.goSearchList = function () {

        var chkVal = lawfirm.chkSearchWord();
        if (chkVal == 0) {
            alert('검색어를 입력해 주세요.');
            return false;
        }
        else {
            $('#sPage').val("1");
            $('#sSort').val("0");
            lawfirm.getContentList(($('#sCode').val() == "P000") ? lawfirmParams.listLawyerUrl : lawfirmParams.listUrl);
        }
    };

    this.chkSearchWord = function () {
        var sWordChk = ''; var sChk = 0;
        sWordChk = $.trim($('#sWord').val());
        if ($('#sType4').length > 0) sWordChk += $.trim($('#sType4').val());

        if (sChk == 0 && sWordChk.length > 0) {
            sChk = 2;
        }
        return sChk;
    };


    // 정렬
    this.changeSorting = function (s) {

        $('#sPage').val("1");
        $('#sSort').val(s);

        if ($('#sSortChk_1').length > 0) {
            switch (s) {
                case 0: 
                if ($('#sSortChk_1').val() == "0") { if (sortYn1 == "N") { $('#sSortChk_1').val("0"); } else { $('#sSortChk_1').val("1"); } }
                    else { if (sortYn1 == "N") { $('#sSortChk_1').val("1"); } else { $('#sSortChk_1').val("0"); } } sortYn1 = "Y"; break;
                case 1: sortYn1 = "N"; break;
                case 2: sortYn1 = "N"; break;
            }
        }
        if ($('#sSortChk_2').length > 0) {
            switch (s) {
                case 0: sortYn2 = "N"; break;
                case 1: if ($('#sSortChk_2').val() == "0") { if (sortYn2 == "N") { $('#sSortChk_2').val("0"); } else { $('#sSortChk_2').val("1"); } }
                    else { if (sortYn2 == "N") { $('#sSortChk_2').val("1"); } else { $('#sSortChk_2').val("0"); } }; sortYn2 = "Y"; break;
                case 2: sortYn2 = "N"; break;
            }
        }
        if ($('#sSortChk_3').length > 0) {
            switch (s) {
                case 0: sortYn3 = "N"; break;
                case 1: sortYn3 = "N"; break;
                case 2: if ($('#sSortChk_3').val() == "0") { if (sortYn3 == "N") { $('#sSortChk_3').val("0"); } else { $('#sSortChk_3').val("1"); } }
                    else { if (sortYn3 == "N") { $('#sSortChk_3').val("1"); } else { $('#sSortChk_3').val("0"); } } sortYn3 = "Y"; break;
            }
        }
        var url = ($('#sCode').val() == "P000") ? lawfirmParams.listLawyerUrl : lawfirmParams.listUrl;
        lawfirm.getContentList(url);
    };


    this.getSubSearch = function () {

        if (lawfirm.setSubType() == 0) {
            lawfirm.getContentList(($('#sCode').val() == "P000") ? lawfirmParams.listLawyerUrl : lawfirmParams.listUrl);
        }
    };

    this.setSubType = function () {
        var sChk = 0;
        var et = "";

        if ($('#dTestS').length > 0 && $('#dTestE').length > 0) {
            if (($('#dTestS').val() != null && $('#dTestE').val() != null) &&
            ($('#dTestS').val() != '' && $('#dTestE').val() != '')) {
                $('#sTestS').val($('#dTestS').val());
                $('#sTestE').val($('#dTestE').val());
            }
        }
        if ($('#dTrainS').length > 0 && $('#dTrainE').length > 0) {
            if (($('#dTrainS').val() != null && $('#dTrainE').val() != null) &&
            ($('#dTrainS').val() != '' && $('#dTrainE').val() != '')) {
                $('#sTrainS').val($('#dTrainS').val());
                $('#sTrainE').val($('#dTrainE').val());
            }
        }
        if ($('#dBirthS').length > 0 && $('#dBirthE').length > 0) {
            if (($('#dBirthS').val() != null && $('#dBirthE').val() != null) &&
            ($('#dBirthS').val() != '' && $('#dBirthE').val() != '')) {
                $('#sBirthS').val($('#dBirthS').val());
                $('#sBirthE').val($('#dBirthE').val());
            }
        }

        if ($('#dJobCode').length > 0) {
            if ($("#dJobCode option:selected").val() != "00") {
                $('#sJob').val($("#dJobCode option:selected").text());
                $('#sJobCode').val($("#dJobCode option:selected").val());
            }
        }

        if ($('#dTestCode').length > 0) {
            if ($("#dTestCode option:selected").val() != "00") {
                $('#sTest').val($("#dTestCode option:selected").text());
                $('#sTestCode').val($("#dTestCode option:selected").val());
            }
        }


        return sChk;
    };

    this.getInitSearch = function () {
        if ($('#dTestS').length > 0 && $('#dTestE').length > 0) {
            $('#dTestS').val(null);
            $('#dTestE').val(null);
        }
        if ($('#dTrainS').length > 0 && $('#dTrainE').length > 0) {
            $('#dTrainS').val(null);
            $('#dTrainE').val(null);
        }
        if ($('#dBirthS').length > 0 && $('#dBirthE').length > 0) {
            $('#dBirthS').val(null);
            $('#dBirthE').val(null);
        }

        if ($('#dJobCode').length > 0) {
            $("#dJobCode").val("00").prop("selected", true);
        }

        if ($('#dTestCode').length > 0) {
            $("#dTestCode").val("00").prop("selected", true);
        }

        if ($('#sTestS').length > 0 && $('#sTestE').length > 0) {
            $('#sTestS').val('0');
            $('#sTestE').val('0');
        }
        if ($('#sTrainS').length > 0 && $('#sTrainE').length > 0) {
            $('#sTrainS').val('0');
            $('#sTrainE').val('0');
        }
        if ($('#sBirthS').length > 0 && $('#sBirthE').length > 0) {
            $('#sBirthS').val('0');
            $('#sBirthE').val('0');
        }

        $("#sJobCode").val("00");
        $("#sTestCode").val("00");
        lawfirm.getContentList(page.getTargetUrl());
    };

    this.drawLi = function () {

        // 최신일, 정확도 선택
        var sort = $.trim($('#sSort').val());

        if ($('#sWord').val() == "") {
            if ($('#sCode').val() == 'P011' ||
            $('#sCode').val() == 'P012' ||
            $('#sCode').val() == 'P013') {
                $(".btn_option>.btn-group>button").eq(1).hide();
                sort = 0;
                $('#sSort').val('0');
            }
        }

        $('.btn_option>.btn-group>button').each(function (index) {
            if (sort == index) {
                $(this).attr('class', 'btn btn-default _select');
            } else {
                $(this).attr('class', 'btn btn-default');
            }
        });
    };


    // 페이지 이동
    this.goToPage_v2 = function (pageNo) {
        $("html").scrollTop(0);
        $('#sPage').val(pageNo);
        if ($('#sSubPage').length > 0) { $('#sSubPage').val("1"); }

        var url = ($("#sCode").val() == "P000") ? "/AjaxInfo/ContentLawyerList" : lawfirmParams.listUrl;
        lawfirm.getContentList(url);
    };

    this.goToLawyerAll = function () {
        sCode = "P000"; // 구성원정보
        $("#result_filter").show();
        page.getLatestList('P012');
        $("#sCode").val(sCode);
        url = lawfirmParams.listLawyerUrl;
        dataParams = { "sCode": sCode, "sType5": lawfirmParams.Did, "sSort": "1", "sType": 1 };
        sendAjaxRequest(url, dataParams, lawfirm.setLawFirmDataCallback);
        $('li.lawfirmtab').removeClass('this-page');
        $('li.lawfirmtab').eq(1).addClass('this-page');
    };
};

var chkIndexFirm = 0;
$(document).ready(function () {

    $(document).on('click', '.lawfirmtab', function () {

        chkIndexFirm = $(this).index();
        var index = chkIndexFirm;
        $('li.lawfirmtab').removeClass('this-page');
        $('li.lawfirmtab').eq(index).addClass('this-page');

        var url;
        var dataParams;
        if (index == "0") {
            url = lawfirmParams.previewUrl;
            dataParams = { "sId": lawfirmParams.Did };
            page.getLatestListByType('P000_R', lawfirmParams.Did.substr(4, 6));
            $("#result_filter").hide();
        }
        else {
            var sCode = "P001", sSort_ = "0";
            $("#result_filter").hide();
            switch (index) {
                case 1:
                    sCode = "P000"; // 구성원정보
                    $("#result_filter").show();
                    page.getLatestList('P012');
                    break;
                case 2:
                    sCode = "P012"; // 소식
                    page.getLatestListByType('P000_R', lawfirmParams.Did.substr(4, 6));
                    break;
                case 3:
                    sCode = "P013"; // 업무사례
                    page.getLatestListByType('P000_R', lawfirmParams.Did.substr(4, 6));
                    break;
                case 4:
                    sCode = "P011"; // 리포트
                    page.getLatestListByType('P000_R', lawfirmParams.Did.substr(4, 6));
                    break;
            }
            $("#sCode").val(sCode);
            url = (sCode == "P000") ? lawfirmParams.listLawyerUrl : lawfirmParams.listUrl;
            dataParams = { "sCode": sCode, "sType5": lawfirmParams.Did, "sSort": (sCode == "P000") ? "1" : sSort_, "sType": 1 };
        }

        sendAjaxRequest(url, dataParams, lawfirm.setLawFirmDataCallback);
    });
});