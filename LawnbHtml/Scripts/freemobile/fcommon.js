$(document).ready(function () {
    $("#searchBtn_ios").click(function (e) {
        e.preventDefault();
        if (fcommon.getSearch()) {
            $('#searchForm')[0].submit();
        }
    });

});

var fcommon = new function () {

    var fParams = null;

    this.init = function (data) {
        fParams = data;
    };

    this.getSearch = function () {
        var sCode = $("#sCode").val();

        if (sCode == "P000") {
            if ($("#sName").val().trim() == "" && $("#sWork").val().trim() == "") {
                alert('검색어를 입력해 주세요.');
                return false;
            }
        }
        else {
            if ($("#sWord").val().trim() == "") {
                alert('검색어를 입력해 주세요.');
                return false;
            }
            else {
                $('#sType').val("0");
                return true;
            }
        }
    };

    this.initSearchList = function (vCode) {
        $('#sPage').val("1");
        fcommon.searchList(vCode);
    };

    this.searchList = function (vCode) {

        fParams.vCode = vCode;
        if ($("#sCode").val() == "P000") {
            $("#sType").val(vCode);
        }
        var data = $('#searchForm').serialize();

        $("#bg_screen").show();
        $('.loading_img').show();

        if (vCode == "99") {
            sendNonBlockingAjaxRequest(fParams.listUrl, data, fcommon.setPopupCallback);
        }
        else {
            sendNonBlockingAjaxRequest(fParams.listUrl, data, fcommon.setListCallback);
        }
    };

    this.setListCallback = function (result) {
        if (result != null) {
            $('#search_results').empty();
            $('#search_results').html(result);
            $('#bg_screen').hide().css('z-index', '10000');
            $('.loading_img').hide();

            if ($("#sCode").val() == "C000") {
                fcommon.drawLi();
            }
        }
    };

    this.setPopupCallback = function (result) {
        if (result != null) {
            $("#free_lawyer_popup").empty();
            $("#free_lawyer_popup").html(result);
        }
    };

    this.goToPage = function (pageNo) {
        $('body,html').animate({ "scrollTop": "0" }, 0);
        $('#sPage').val(pageNo);

        if ($("#sCode").val() == "P000") {
            fcommon.searchList("88");
            fcommon.searchList("99");
        }
        else {
            fcommon.searchList("2");
        }
    };

    this.drawLi = function () {
        var lbListType = $.trim($('#sSubType').val());

        $('#result_tab ul li').each(function (index) {
            if (lbListType == index) {
                $(this).addClass('this-page');
            } else {
                $(this).removeClass('this-page');
            }
        });
    };

    this.setViewMobileHisContent = function (t, st) {
        var s = $(location).attr('href');
        if (s != "") {
            var sInfo = new Object();
            sInfo.url = s;
            sInfo.title = t;
            sInfo.subtitle = st;
            
            sInfo.addInfoLawListCheck = "N";
            sInfo.addInfoLawListDid = "";
            sInfo.addInfoLawListCode = "";
            sInfo.addInfoLawListPage = 1;
            sInfo.addInfoLawListPageSize = 10;

            sInfo.addInfoListCheck = "N";            
            sInfo.addInfoListCode = "";
            sInfo.addInfoListPage = 1;
            sInfo.addInfoListPageSize = 10;

            mstorage.setMobileView(sInfo);
        }
    };
};
/*
$(document).ready(function () {
    $(document).on('click', '.popup_view', function (event) {
        event.preventDefault();
        var _href = $(this).attr('href');

        if (checkMobile()) {
            _href = _href.indexOf("?") >= 0 ? _href + "&popupYn=Y" : _href + "?popupYn=Y";
        }
        location.href = _href;
    });
});
*/