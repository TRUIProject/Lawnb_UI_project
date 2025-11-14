
var orgmapParams = null;
var orgmap = new function () {

    this.Init = function (data) {
        orgmapParams = data;
        orgmap.OrgmapAreaInfo(orgmapParams.sOrgTypeCode);
        orgmap.OrgmapBind(orgmapParams.sOrgTypeCode, orgmapParams.sAreaCode);
    };

    this.OrgmapAreaInfo = function (sOrgTypeCode) {
        var data = { "sOrgTypeCode": sOrgTypeCode };
        sendNonBlockingAjaxJsonRequest("/AjaxInfo/OrgMapAreaInfo", data, function (result) {
            if (result != null) {
                var selectHtml = "";
                $(result).each(function (index) {
                    selectHtml += "<option value='" + this.AreaCode + "'  " + (this.AreaCode == 10 ? 'selected' : '') + " >" + this.AreaName + "</option>";
                });
                $('#sAreaCode').empty();
                $('#sAreaCode').append(selectHtml);
            }

        });
    };

    this.OrgmapBind = function (sOrgTypeCode, sAreaCode) {

        var dataParams = { "sOrgTypeCode": sOrgTypeCode, "sAreaCode": sAreaCode };
        sendNonBlockingAjaxRequest("/AjaxInfo/OrgMapList", dataParams, function (result) {
            if (result != null) {
                $("#orgprov_result").empty();
                $("#orgprov_result").html(result);
            }
            if ($('#co_mainContainer').length > 0) {
                setTimeout(function () { setHeight_under(); }, 500); 
            }
            else {
                setHeight();
            }
        });
    };
};

$(document).ready(function () {
    $('.btn.orginfomap').click(function () {
        var lheight = document.body.clientHeight - $('header').outerHeight() + $('.navi_area').outerHeight() - $('footer').outerHeight() - $('#org_tab').outerHeight() - 80;
        $('.left_container').css({ 'position':'relative', 'transform': 'translateX(0)', 'height': 'auto', 'min-height': lheight });
        $('.main_container').hide();
    });

    if ($('#co_mainContainer').length > 0) {
        setHeight_under();  
    }
    else {
        setHeight();
    }
    $(document).on('click', '.orgmap', function () { 
        var index = $(this).index();
        $('li.orgmap').removeClass('this-page');
        $('li.orgmap').eq(index).addClass('this-page');

        if ($('#co_mainContainer').hasClass('mobile') && document.body.clientWidth < 480) {
            $('.left_container').css({ 'transform': 'translateX(-100%)', 'position': 'absolute', 'height': '0', 'min-height': '0' });
            $('.main_container').show();
        }

        orgmapParams.sOrgTypeCode = $('li.orgmap').eq(index).attr("data-val");
        orgmapParams.sAreaCode = 10;
        orgmapParams.sIndex = index;

        $("#sAreaCode").val(orgmapParams.sAreaCode).prop("selected", true);

        orgmap.OrgmapAreaInfo(orgmapParams.sOrgTypeCode);
        orgmap.OrgmapBind(orgmapParams.sOrgTypeCode, orgmapParams.sAreaCode);
    });

    $(document).on('change', '#sAreaCode', function () {

        $('li.orgmap').removeClass('this-page');
        $('li.orgmap').eq(orgmapParams.sIndex).addClass('this-page');

        orgmapParams.sAreaCode = $("#sAreaCode option:selected").val();

        orgmap.OrgmapBind(orgmapParams.sOrgTypeCode, orgmapParams.sAreaCode);
    });
}); 