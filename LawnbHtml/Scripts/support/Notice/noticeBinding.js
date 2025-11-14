
var notice = new function () {

    this.ContactNumber = function () {
        sendNonBlockingAjaxRequest("/Support/ContactNumber", "", function (result) {
            if (result != null) {
                $("#customer_center").empty();
                $("#customer_center").html(result);
            }
        });
    };

    // 법조기관 상세 이동
    this.NoticeList = function (nPage, _type, mDiv) {

        var _href = "/Support/SupportNotice/?nPage=" + nPage + "&nType=NOTICELIST&nDiv=" + mDiv;
        if (checkMobile()) {
            _href = _href.indexOf("?") >= 0 ? _href + "&popupYn=Y" : _href + "?popupYn=Y";
        }

        if (_type == 1) {
            var openNewWindow = window.open("about:blank");
            openNewWindow.location.href = _href;
        }
        else if (_type == 2) {
            location.href = _href;
        }
    };

    this.NoticeMainList = function () {

        sendNonBlockingAjaxRequest("/Support/NoticeMainList", "", function (result) {
            if (result != null) {
                $("#notice_result").empty();
                $("#notice_result").html(result);
            }
        });
    };

    this.FaqMainList = function () {

        sendNonBlockingAjaxRequest("/Support/FaqMainList", "", function (result) {
            if (result != null) {
                $(".box_set").empty();
                $(".box_set").html(result);
            }
            setHeight_customer();
        });
    };

    // 페이지 이동
    this.goToPage = function (pageNo) {

        $("#nPage").val(pageNo);
        $("#searchForm").submit();
        //$(location).attr('href', "/Support/SupportNotice/?nPage=" + pageNo);
    };

    this.PolicyView = function (nIdx, nLevel) {

        var dataParams = { "nIdx": nIdx, "nLevel": nLevel };
        sendNonBlockingAjaxRequest("/Support/SuppotPolicyView", dataParams, function (result) {
            if (result != null) {
                $("#view_container").empty();
                $("#view_container").html(result); 
                if (nLevel == "f") { 
                    $('.c_center .policy h3 + span').hide();
                }
                setHeight_customer();
            }
        });
    };

    this.nHistoryChange = function (nLevel) {
        var nIdx = parseInt($("#nHistorySel option:selected").val());
        notice.PolicyView(nIdx, nLevel);
    };

    this.goSearchList = function (_page, _type, _val) {

        $("#nPage").val(_page);
        if (_type == "tag") {
            $("#nTag").val(_val);
            $("#searchForm").submit();
        }
        else if (_type == "msearch")
        {
            $("#nTag").val("");
            $("#nWord").val("");
            $("#nDiv").val(_val);
            $("#searchForm").submit();
        }
        else {
            var nWord = $("#nWord").val();
            if (nWord == "") {
                alert("검색어를 입력해 주세요.");
                return;
            }
            else {
                $("#searchForm").submit();
            }
        }   
    }

    this.viewFileDown = function (s, data, ext) {

        var params = { "sCode": s, "fileName": data, "ext": ext }; 
        var url = "/AjaxInfo/ContentFileExist";
        data = unescape(data);        

        sendFileDownAjaxRequest(url, params);        
    };
};

$(document).ready(function () {
    $(document).on('click', '.faq_title', function (index) {

        $(".faq_explain").slideUp();
        var idx = $(".faq_title").index($(this));
        if ($(".faq_explain").eq(idx).is(':hidden')) {
            $(".faq_explain").eq(idx).show('10');
        }

        setTimeout(function () {
            setHeight_customer();
        }, 300);
    });

    $('.policy_tab>li').click(function () {
        $('.policy_tab>li').removeClass('_select');
        $(this).addClass('_select');
        var nLevel = $(this).attr("data-level");

        notice.PolicyView(0, nLevel);
    });    
});