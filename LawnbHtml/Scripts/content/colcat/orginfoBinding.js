
var orgInfoParams = null;
var orgInfo = new function () {

    this.init = function (data) {
        orgInfoParams = data;
        this.initData(orgInfoParams);

        $(".orginfomenu").removeClass('this-page');
        $(".orginfomenu").eq(0).addClass('this-page');

        setHeight_under();
    };

    this.initData = function (data) {
        this.getSubMenu(data);
    }

    // 통합검색, 다이렉트 검색시 필요sOrgTypeCode
    // 지역(sOrgArea), 대분류(sOrgTypeCode), 소분류(sOrgId)
    this.totalOrgInfoBinding = function (sOrgArea, sOrgTypeCode, sOrgId) {
        var data = {
            "orgInfoUrl": "/AjaxInfo/ContentOrgInfo",
            "sOrgTypeCode": sOrgTypeCode,
            "sOrgId": sOrgId,
            "sOrgArea": sOrgArea
        };
        var index = $("li.orginfomenu[data-id='" + sOrgTypeCode + "']").index();

        orgInfoParams = data;
        orgInfo.getSubMenu(orgInfoParams);

        $(".orginfomenu").removeClass('this-page');
        $(".orginfomenu").eq(index).addClass('this-page');

        setHeight_under();
    };

    this.getSubMenu = function (data) {

        var url = data.orgInfoUrl;
        var dataParams = { "sOrgArea": orgInfoParams.sOrgArea, "sOrgType": "MENU", "sOrgTypeCode": orgInfoParams.sOrgTypeCode, "sOrgId": orgInfoParams.sOrgId };

        sendNonBlockingTextToJsonRequest(url, dataParams, orgInfo.setOrgInfoMenuCallback);
    };

    this.getDetailView = function (data) {

        var url = data.orgInfoUrl;
        orgInfoParams.sOrgId = (orgInfoParams.sOrgId == "") ? "0" : orgInfoParams.sOrgId;
        var dataParams = { "sOrgArea": orgInfoParams.sOrgArea, "sOrgType": "VIEW", "sOrgTypeCode": orgInfoParams.sOrgTypeCode, "sOrgId": orgInfoParams.sOrgId };

        sendNonBlockingAjaxRequest(url, dataParams, orgInfo.setOrgInfoViewCallback);
    };

    this.setOrgInfoMenuCallback = function (data) {

        if (data != null) {
            var req = eval('(' + data + ')');
            var htmldata = req.data2;
            orgInfoParams.sOrgId = (orgInfoParams.sOrgId != "") ? orgInfoParams.sOrgId : req.data1;

            $('#divOrgInfoMenu').html("");
            $('#divOrgInfoMenu').html(htmldata);
            setHeight_under();
            setTreeBinding();

            $(".center_index").height($(".main_container").height());

            $(".tree ol ol ").hide();

            $('#loadingMsg').hide();
        }
        // Detail VIEW
        orgInfo.getDetailView(orgInfoParams);
    };

    this.setOrgInfoViewCallback = function (data) {
        if (data != null) {
            $('#divOrgInfoView').html("");
            $('#divOrgInfoView').html(data);
            setHeight_under();

            $(".s_unit ul li").each(function (index) {
                //$(this).find('span').height($(this).height());
            });

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

    $(document).on('change', '#sType5', function () {

        var url = orgInfoParams.orgInfoUrl;
        orgInfoParams.sOrgArea = $("#sType5 option:selected").val();

        var dataParams = { "sOrgArea": orgInfoParams.sOrgArea, "sOrgType": "MENU", "sOrgTypeCode": orgInfoParams.sOrgTypeCode, "sOrgId": "0" };

        sendNonBlockingTextToJsonRequest(url, dataParams, orgInfo.setOrgInfoMenuCallback);
    });

    $(document).on('click', '.orginfomenu', function () {

        // 법원-대법원(1000-100156)
        // 법원-서울고등법원(1000-100157)
        // 검찰청-대검찰청(1001-100233)
        // 헌법재판소-(1032)
        // 법무부-(1033)
        // 법률구조공단-(1003)
        // 경찰서-(1004)
        // 등기소-(1005)
        // 변호사회-(1002)                
        var index = $(this).index();
        $('li.orginfomenu').removeClass('this-page');
        $('li.orginfomenu').eq(index).addClass('this-page');

        if ($('#co_mainContainer').hasClass('mobile') && document.body.clientWidth < 480) {
            $('.left_container').css({ 'transform': 'translateX(-100%)', 'height': '0', 'min-height': '0' });
            $('.main_container').show();
        }

        var dataId = $('li.orginfomenu').eq(index).attr("data-id");
        orgInfoParams.sOrgTypeCode = dataId;
        /*
        switch (index) {
            case 0:
                orgInfoParams.sOrgTypeCode = 1000;
                break;
            case 1:
                orgInfoParams.sOrgTypeCode = 1001;
                break;
            case 2:
                orgInfoParams.sOrgTypeCode = 1032;
                break;
            case 3:
                orgInfoParams.sOrgTypeCode = 1033;
                break;
            case 4:
                orgInfoParams.sOrgTypeCode = 1003;
                break;
            case 5:
                orgInfoParams.sOrgTypeCode = 1004;
                break;
            case 6:
                orgInfoParams.sOrgTypeCode = 1005;
                break;
            case 7:
                orgInfoParams.sOrgTypeCode = 1002;
                break;
        };
        */
        orgInfoParams.sOrgId = "0"; // 대분류에서 선택시 최상위 top1 소분류메뉴 선택되게 함.

        var url = orgInfoParams.orgInfoUrl;
        var dataParams = { "sOrgArea": "", "sOrgType": "MENU", "sOrgTypeCode": orgInfoParams.sOrgTypeCode, "sOrgId": "0" };
        sendNonBlockingTextToJsonRequest(url, dataParams, orgInfo.setOrgInfoMenuCallback);
    });

    $(document).on('click', '.orginfoview', function () {

        var index = $('.orginfoview').index($(this));
        var url = orgInfoParams.orgInfoUrl;
        orgInfoParams.sOrgId = $('.orginfoview').eq(index).attr("data-id");

        $('li.orginfoview').removeClass('_this');
        $('li.orginfoview').removeClass('open');
        $('li.orginfoview').eq(index).addClass('_this');
        $('li.orginfoview').eq(index).addClass('open');

        var _mobileYN = $("#lbMobileYN").val();
        var _tabletYN = $("#lbTabletYN").val();
        if (_mobileYN == "Y" && _tabletYN != "Y") {
            showOriginalView("/Info/ContentOrgInfo?sOrgArea=" + orgInfoParams.sOrgArea + "&sOrgType=VIEW&sOrgTypeCode=" + orgInfoParams.sOrgTypeCode + "&sOrgId=" + orgInfoParams.sOrgId);
        }
        else {
            if (_tabletYN == "Y") {
                $('#bg_screen').show();
                $('.loading_img').show();
            }
            var dataParams = { "sOrgArea": orgInfoParams.sOrgArea, "sOrgType": "VIEW", "sOrgTypeCode": orgInfoParams.sOrgTypeCode, "sOrgId": orgInfoParams.sOrgId };
            sendNonBlockingAjaxRequest(url, dataParams, orgInfo.setOrgInfoViewCallback);
        }
    });

    $(document).on('click', 'h3 > .btn_more.open', function () {

        if ($('.lawyer_info.tel').is(':hidden')) {
            $(".lawyer_info.tel").slideDown('10');
            $(this).html('닫기');
            $(this).addClass('_ic');
        } else {
            $('.lawyer_info.tel').slideUp();
            $(this).html('열기');
            $(this).removeClass('_ic');
        }
    });
});