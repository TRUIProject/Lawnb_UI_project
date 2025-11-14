
var orgParams = null;
var org = new function () {

    this.init = function (data) {
        orgParams = data;
        this.initData(orgParams);

        $(".orgmenu").removeClass('this-page');
        $(".orgmenu").eq(1).addClass('this-page');

        //setOrgHeight();
        setHeight_under();
    };

    this.initData = function (data) {
        this.getSubMenu(data);
    };

    // 통합검색, 다이렉트 검색시 필요sOrgTypeCode
    // 대분류(sOrgTypeCode), 소분류(sOrgId)
    this.totalOrgBinding = function (sOrgTypeCode, sOrgId) {
        var data = {
            "orgUrl": "/AjaxInfo/ContentOrg",
            "sOrgTypeCode": sOrgTypeCode,
            "sOrgId": sOrgId
        };
        var index = $("li.orgmenu[data-id='" + sOrgTypeCode + "']").index();

        orgParams = data;
        org.getSubMenu(orgParams);

        $(".orgmenu").removeClass('this-page');
        $(".orgmenu").eq(index).addClass('this-page');


        setHeight_under();
    };

    this.getSubMenu = function (data) {

        var url = data.orgUrl;
        var dataParams = { "sOrgType": "MENU", "sOrgTypeCode": orgParams.sOrgTypeCode, "sOrgId": orgParams.sOrgId };

        sendNonBlockingTextToJsonRequest(url, dataParams, org.setOrgMenuCallback);
    };

    this.getDetailView = function (data) {

        var url = data.orgUrl;
        orgParams.sOrgId = (orgParams.sOrgId == "") ? "0" : orgParams.sOrgId;
        var dataParams = { "sOrgType": "VIEW", "sOrgTypeCode": orgParams.sOrgTypeCode, "sOrgId": orgParams.sOrgId };
        sendNonBlockingAjaxRequest(url, dataParams, org.setOrgViewCallback);
    };

    this.setOrgMenuCallback = function (data) {

        if (data != null) {
            var req = eval('(' + data + ')');
            var htmldata = req.data2;
            orgParams.sOrgId = req.data1;
            //orgParams.sOrgId = (orgParams.sOrgId != "") ? orgParams.sOrgId : req.data1;

            $('#divOrgMenu').html("");
            $('#divOrgMenu').html(htmldata);
            setHeight_under();
            setTreeBinding();

            $(".center_index").height($(".main_container").height());

            $(".tree ol ol").hide();
            $(".tree li li").removeClass("open").addClass('close');
            $(".tree li li .tNavToggle").removeClass("minus");
            $(".tree li li .tNavToggle").addClass("plus");
            $(".tree li li .tNavToggle").text("+");

            $('#loadingMsg').hide();
        }

        // Detail VIEW
        org.getDetailView(orgParams);
    };

    this.setOrgViewCallback = function (data) {

        if (data != null) {
            $('#divOrgView').html("");
            $('#divOrgView').html(data);
            setHeight_under();

            $(".s_unit").each(function (index) {
                if ($(this).find("ul li").length < 1) {
                    $(this).find("ul").css("display", "none");
                }
            });

            //del 2020.06 Jenna css로 처리
            //$(".s_unit ul li").each(function (index) {
               // $(this).find('span').height($(this).height());
            //});


            if (orgParams.sOrgTypeCode == "1009" || orgParams.sOrgTypeCode == "1010") {
                if (orgParams.sOrgId == "" && orgParams.sOrgId == "0") {
                    orgParams.sOrgId = orgParams.sOrgTypeCode = "1009" ? "100244" : "100363";
                }

                if (orgParams.sOrgId != "" && orgParams.sOrgId != "0") {
                    var dataParams = { "sCode": "P000", "sType5": orgParams.sOrgId, "sSort": "1", "sType": 1 };
                    sendAjaxRequest("/AjaxInfo/ContentLawyerList", dataParams, function (result) {
                        if (result != null) {
                            $("#divUnvi").after("<div class=\"submain_group title organi\"><h3>구성원정보</h3><div clss=\"lawyer_info\" id=\"search_results_view\" style=\"padding-top:20px;\"></div></div>");
                            $("#search_results_view").empty();
                            $("#search_results_view").html(result);

                            setHeight_under();
                            $('#bg_screen').hide();
                            $('.loading_img').hide();
                        }
                    });
                }
            }

            $('#loadingMsg').hide();                        
        }

        $('#bg_screen').hide();
        $('.loading_img').hide();
    };

    this.orgInfoMapPopup = function () {

        window.open("/AjaxInfo/ContentOrgMap", "_blank", "scrollbars=no,resizable=yes");
        return false;
    };
};

$(document).ready(function () {

    $('.center_index .btn').click(function () {
        var lheight = document.body.clientHeight - $('header').outerHeight() + $('.navi_area').outerHeight() - $('footer').outerHeight() - $('#org_tab').outerHeight() - 80;
        $('.left_container').css({ 'transform': 'translateX(0)', 'height': 'auto', 'min-height': lheight });
        $('.main_container').hide();
    });

    $(document).on('click', '.orgmenu', function () {

        // 법원-대법원(1000-100156)
        // 법원-서울고등법원(1000-100157)
        // 검찰청-대검찰청(1001-100233)
        // 법과전문대학원-강원도/강원대학교(1009-100244)
        // 법과대학-강원도/강릉원주대학교(1010-100363)        
        var index = $(this).index();
        $('li.orgmenu').removeClass('this-page');
        $('li.orgmenu').eq(index).addClass('this-page');

        if ($('#co_mainContainer').hasClass('mobile') && document.body.clientWidth < 480) {
            $('.left_container').css({ 'transform': 'translateX(-100%)', 'height': '0', 'min-height': '0' });
            $('.main_container').show();
        }

        var dataId = $('li.orgmenu').eq(index).attr("data-id");
        orgParams.sOrgTypeCode = dataId;
        /*
        switch (index) {
            case 0:
                orgParams.sOrgTypeCode = 1032;
                break;
            case 1:
                orgParams.sOrgTypeCode = 1000;
                break;
            case 2:
                orgParams.sOrgTypeCode = 1001;
                break;
            case 3:
                orgParams.sOrgTypeCode = 1009;
                break;
            case 4:
                orgParams.sOrgTypeCode = 1010;
                break;
        };
        */
        var url = orgParams.orgUrl;
        var dataParams = { "sOrgType": "MENU", "sOrgTypeCode": orgParams.sOrgTypeCode, "sOrgId": "0" };

        sendNonBlockingTextToJsonRequest(url, dataParams, org.setOrgMenuCallback);
    });

    $(document).on('click', 'h3 > .btn_more.open', function () {

        if ($('.lawyer_info.tel').is(':hidden')) {
            $(".lawyer_info.tel").slideDown('10');
            $(this).html('닫기');
            $(this).addClass('_ic');
            setHeight_under(); // add 202006 Jenna
        } else {
            $('.lawyer_info.tel').slideUp();
            $(this).html('열기');
            $(this).removeClass('_ic');
            setHeight_under(); // add 202006 Jenna
        }
    });

    $(document).on('click', '.orgview', function () {

        var index = $('.orgview').index($(this));
        var orgTypeCode = orgParams.sOrgTypeCode;
        var orgId = $('.orgview').eq(index).attr("data-id");
        var url = orgParams.orgUrl;

        /*
        if (orgTypeCode == 1000) {
        var chg_tag = document.getElementsByClassName('chg_tag');
        for (var i = 0; i < chg_tag.length; i++) {
        var chg_tag_outerHTML = chg_tag[i].outerHTML;
        if (i != index)
        chg_tag_outerHTML = chg_tag_outerHTML.replace(/div/g, 'p');
        else
        chg_tag_outerHTML = chg_tag_outerHTML.replace(/p/g, 'div');
        chg_tag[i].outerHTML = chg_tag_outerHTML;
        }
        }
        else if (orgTypeCode == 1001) {
        var chg_tag = document.getElementsByClassName('chg_tag');
        for (var i = 0; i < chg_tag.length; i++) {
        var chg_tag_outerHTML = chg_tag[i].outerHTML;
        if (i != index)
        chg_tag_outerHTML = chg_tag_outerHTML.replace(/div/g, 'p');
        else
        chg_tag_outerHTML = chg_tag_outerHTML.replace(/p/g, 'div');
        chg_tag[i].outerHTML = chg_tag_outerHTML;
        }
        }
        */
        orgParams.sOrgId = orgId;
        var _mobileYN = $("#lbMobileYN").val();
        var _tabletYN = $("#lbTabletYN").val();
        if (_mobileYN == "Y" && _tabletYN != "Y") {
            showOriginalView("/Info/ContentOrg?sOrgType=VIEW&sOrgTypeCode=" + orgTypeCode + "&sOrgId=" + orgId);
        }
        else {
            if (_tabletYN == "Y") {
                $('#bg_screen').show();
                $('.loading_img').show();
            }
            var dataParams = { "sOrgType": "VIEW", "sOrgTypeCode": orgTypeCode, "sOrgId": orgId };
            sendNonBlockingAjaxRequest(url, dataParams, org.setOrgViewCallback);
        }
    });
});

//function setOrgHeight() {
//    $(".s_unit ul li").each(function (index) {
//        $(this).find('span').height($(this).height());
//    });
//    $(".center_index").height($(".main_container").height());
//    $(".tree ol ol ").hide();
//}
