$(document).ready(function () {
    
});

var bizinfoParams = null;
var bizinfo = new function () {

    this.init = function (data) {
        bizinfoParams = data;
        //bizinfo.allData();
        bizinfo.loadData();

        if (bizinfoParams.viewGubun == "preview") {
            setHeight_under();
        }
        else {
            setHeight();
        }
    };
    /*
    this.allData = function () {
    var frm = document.createElement("form");
    //$(document.body).append(form);
    frm.method = "POST";
    frm.enctype = "application/x-www-form-urlencoded";
    var input = new Array();
    for (var i = 0; i < 2; i++) {
    input[i] = document.createElement("input");
    $(input[i]).attr("type", "hidden");
    if (i == 0) {
    $(input[i]).attr("id", "companyOutline");
    $(input[i]).attr("name", "companyOutline");
    }
    else if (i == 1) {
    $(input[i]).attr("id", "primaryFinancialItem");
    $(input[i]).attr("name", "primaryFinancialItem");
    }
    frm.appendChild(input[i]);
    }
    document.body.appendChild(frm);

    bizinfo.loadData();
    frm.action = bizinfoParams.viewUrl;
    $('#loadingMsg').show();
    frm.submit();
    }
    */
    this.loadData = function () {

        if (bizinfoParams.viewGubun == "preview") {
            this.loadPreViewData();
        }
        this.loadCompanyOutline();
        this.loadPrimaryFinancialItem();
        this.loadPrimaryStockHolders();
        this.loadRelatedCompany();
        this.loadIndustryOutline();
        this.loadIndustryRate();
        this.loadIndustryProgress();
    };

    // 미리보기 html
    this.loadPreViewData = function () {
        var data = { "sId": bizinfoParams.sCode + "^00^" + bizinfoParams.kisCode };
        //sendNonBlockingAjaxRequest(bizinfoParams.viewUrl, data, bizinfo.preViewCallback);
        setTimeout(function () { sendNonBlockingAjaxRequest(bizinfoParams.viewUrl, data, bizinfo.preViewCallback); }, 100);
    };
    this.preViewCallback = function (callbackdata) {
        $("#showOriginalPopup").html("");
        $("#showOriginalPopup").html(callbackdata);
        if (bizinfoParams.viewGubun == "preview") {
            setHeight_under();
        }
        else {
            setHeight();
        }
        $('#loadingMsg').hide();
    };

    // 기업개요
    this.loadCompanyOutline = function () {
        var data = { "sId": bizinfoParams.sCode + "^1^" + bizinfoParams.kisCode };
        //sendNonBlockingAjaxRequest(bizinfoParams.viewUrl, data, bizinfo.companyOutlineCallback);
        setTimeout(function () { sendNonBlockingAjaxRequest(bizinfoParams.viewUrl, data, bizinfo.companyOutlineCallback); }, 300);
    };
    this.companyOutlineCallback = function (callbackdata) {
        var comData = callbackdata.split('<br/>');

        $("#lbBizno").val(comData[0]);

        $("#companyNM").html("");
        $("#companyNM").html(comData[1]);
        $("#companyOutline").html("");
        $("#companyOutline").html(comData[2]);
        if (bizinfoParams.viewGubun == "preview") {
            setHeight_under();
        }
        else {
            view.setViewtestContent();
            setHeight();
        }
        $('#loadingMsg').hide();
    };

    // 주요 재무상황
    this.loadPrimaryFinancialItem = function () {
        var data = { "sId": bizinfoParams.sCode + "^2^" + bizinfoParams.kisCode };
        //sendNonBlockingAjaxRequest(bizinfoParams.viewUrl, data, bizinfo.PrimaryFinancialItemCallback);
        setTimeout(function () { sendNonBlockingAjaxRequest(bizinfoParams.viewUrl, data, bizinfo.PrimaryFinancialItemCallback); }, 400);
    };
    this.PrimaryFinancialItemCallback = function (callbackdata) {
        $("#primaryFinancialItem").html("");
        $("#primaryFinancialItem").html(callbackdata);
        if (bizinfoParams.viewGubun == "preview") {
            setHeight_under();
        }
        else {
            setHeight();
        }
        $('#loadingMsg').hide();
    };

    // 주요주주 primaryStockholders
    this.loadPrimaryStockHolders = function () {
        var data = { "sId": bizinfoParams.sCode + "^3^" + bizinfoParams.kisCode };
        //sendNonBlockingAjaxRequest(bizinfoParams.viewUrl, data, bizinfo.PrimaryStockHoldersCallback);
        setTimeout(function () { sendNonBlockingAjaxRequest(bizinfoParams.viewUrl, data, bizinfo.PrimaryStockHoldersCallback); }, 500);
    };
    this.PrimaryStockHoldersCallback = function (callbackdata) {
        $("#primaryStockHolders").html("");
        $("#primaryStockHolders").html(callbackdata);
        if (bizinfoParams.viewGubun == "preview") {
            setHeight_under();
        }
        else {
            setHeight();
        }
        $('#loadingMsg').hide();
    };

    // 관계사현황 relatedCompany    
    this.loadRelatedCompany = function () {
        var data = { "sId": bizinfoParams.sCode + "^4^" + bizinfoParams.kisCode };
        //sendNonBlockingAjaxRequest(bizinfoParams.viewUrl, data, bizinfo.RelatedCompanyCallback);
        setTimeout(function () { sendNonBlockingAjaxRequest(bizinfoParams.viewUrl, data, bizinfo.RelatedCompanyCallback); }, 600);
    };
    this.RelatedCompanyCallback = function (callbackdata) {
        $("#relatedCompany").html("");
        $("#relatedCompany").html(callbackdata);
        if (bizinfoParams.viewGubun == "preview") {
            setHeight_under();
        }
        else {
            setHeight();
        }
        $('#loadingMsg').hide();
    };

    // 산업개요
    this.loadIndustryOutline = function () {
        var data = { "sId": bizinfoParams.sCode + "^5^" + bizinfoParams.kisCode };
        //sendNonBlockingAjaxRequest(bizinfoParams.viewUrl, data, bizinfo.IndustryOutlineCallback);
        setTimeout(function () { sendNonBlockingAjaxRequest(bizinfoParams.viewUrl, data, bizinfo.IndustryOutlineCallback); }, 700);
    };
    this.IndustryOutlineCallback = function (callbackdata) {
        $("#industryOutline").html("");
        $("#industryOutline").html(callbackdata);
        if (bizinfoParams.viewGubun == "preview") {
            setHeight_under();
        }
        else {
            setHeight();
        }
        $('#loadingMsg').hide();
    };

    // 산업부도율/ 산업연체율 / 산업휴폐업율
    this.loadIndustryRate = function () {
        var data = { "sId": bizinfoParams.sCode + "^6^" + bizinfoParams.kisCode };
        //sendNonBlockingAjaxRequest(bizinfoParams.viewUrl, data, bizinfo.IndustryRateCallback);
        setTimeout(function () { sendNonBlockingAjaxRequest(bizinfoParams.viewUrl, data, bizinfo.IndustryRateCallback); }, 800);
    };
    this.IndustryRateCallback = function (callbackdata) {
        $("#industryRate").html("");
        $("#industryRate").html(callbackdata);
        if (bizinfoParams.viewGubun == "preview") {
            setHeight_under();
        }
        else {
            setHeight();
        }
        $('#loadingMsg').hide();
    };

    // 산업 내 선도기업
    this.loadIndustryProgress = function () {
        var data = { "sId": bizinfoParams.sCode + "^7^" + bizinfoParams.kisCode };
        //sendNonBlockingAjaxRequest(bizinfoParams.viewUrl, data, bizinfo.IndustryProgressCallback);
        setTimeout(function () { sendNonBlockingAjaxRequest(bizinfoParams.viewUrl, data, bizinfo.IndustryProgressCallback); }, 900);
    };
    this.IndustryProgressCallback = function (callbackdata) {
        $("#industryProgress").html("");
        $("#industryProgress").html(callbackdata);
        if (bizinfoParams.viewGubun == "preview") {
            setHeight_under();
        }
        else {
            setHeight();
        }
        $('#loadingMsg').hide();
    };

    // 본문 - 상세보기
    this.bizInfoDirectView = function () {
        var kisCode = $("#lbkiscode").val();
        //window.open("https://kmtca.kisreport.com/ep/EP0100M001GE.nice", "_blank", "width=1000,height=800,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0");
        //window.open("https://kmtca.kisreport.com/ep/EP0100M003GE.nice?business=1248100998&kiscode=&companyname=&reportRpCheck=N&reportEpCheck=N", "_blank", "width=1000,height=800,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0");
        alert("추가 정보 제공을 위해 제휴사 페이지로 이동합니다.\n이동하는 페이지는 제휴사에서 제공하는 서비스이므로 로앤비의 고객지원 대상이 아닌 점 양해부탁드립니다.");
        window.open("//www.nicebizinfo.com/ep/EP0100M002GE.nice?kiscode=" + kisCode, "_blank", "scrollbars=yes,resizable=yes");
    };
};

