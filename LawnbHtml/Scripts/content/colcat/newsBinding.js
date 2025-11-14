$(document).ready(function () {

    var nIndex = 0;
    changeDivList = function () {
        setInterval(autoSlide, 10000);
    };

    autoSlide = function () {
        var next = (++nIndex % 3);
        $('.news_today_top:eq(' + (next - 1).toString() + ')').hide();
        $('.news_today_top:eq(' + next.toString() + ')').show();
    };

    goSubMainList = function (n) {
        IsGoSubMain = true;
        $('#sSubType').val(n);
        $('#sCat').val('');
        $('#searchForm').attr("action", "/Info/ContentSubMain");
        $('#searchForm').removeAttr('onsubmit').submit();
    };

    goSubMainCatList = function (n, c) {
        IsGoSubMain = true;
        $('#sSubType').val(n);
        if ($('#sCat').length > 0) { $('#sCat').val(''); }
        $('#sCat1').val(c);
        $('#searchForm').attr("action", "/Info/ContentSubMain");
        $('#searchForm').removeAttr('onsubmit').submit();

    };

    goSearchList = function (n) { 
        if ($('#sWordEx').length > 0) {
            $('#sWordEx').val('');
        }

        var chkVal = page.chkSearchWord();
        if (chkVal == 0) {
            alert('검색어를 입력해 주세요.');
            return false;
        }
        else if (chkVal == 2) {
            return false;
        } else if (chkVal == 3) {
            alert('검색어는 두 자 이상이어야 합니다.');
            return false;
        } else {
            page.setWordHighlightData();
            $('#sCat').val('');
            $('#sType').val(n);
            $('#sPage').val("1");
            $('#sList').val("20");
            $('#searchForm').attr("action", "/Info/ContentList");
            $('#searchForm').submit();
        }

    };

    goTabsClicked = function (idx) {
        $('#sSubType').val(idx);
        initSearchObject["sSubType"] = idx;
        page.initSearchList();
    };

    $(".top_title_group").on('click', '.btn_close_pop', function () { // 언론사리스트 
        $('.press_list').hide();
    });

    $('.thumb_s img').each(function (index) {
        console.log(index + ": " + $(this).width());
        if ($(this).width() > $(this).height()) {
            $(this).width('100%');
        } else { $(this).height('100%');  }
    });

    $('.tap_news_title li a').click(function () { // 탭버튼 액션 
        $('.tap_news_title li').siblings().removeClass('active');
        $(this).parent('li').addClass('active');
    });
});

var news = new function () {
    this.press_view = function () {
        $('.press_list').show();
    };

    // 언론사 검색
    this.getMediaList = function () {
        var url = "/AjaxInfo/ContentSearchMediaList";
        sendNonBlockingAjaxRequest(url, null, news.setMediaCallback);
    };

    this.setMediaCallback = function (result) {
        if (result != null) {
            $('.press_list_inner>div.list').empty();
            $('.press_list_inner>div.list').html(result);
        }
    };

    this.goNewsCat = function (c) {
        IsGoSubMain = true;
        $('#sCat').val(c);
        $('#sSubType').val('0');
        $('#searchForm').attr("action", "/Info/ContentSubMain");
        $('#searchForm').removeAttr('onsubmit').submit();
    };

    this.goToSearchList = function (n, c, v) {
        IsGoSubMain = true;
        $('#sType').val("0");
        $('#sViewPage').val(c);
        $('#sCat1').val(c);
        $('#sCat2').val(v);
        $('#sSubType').val("-1");
        //$('#sSubType1').val('');
        $('#sSubType1').val(c);
        $('#sType1').val('11');
        $('#sType4').val(n);
        $('#sCode').val('B002');

        $('#searchForm').attr("action", "/Info/ContentList");
        $('#searchForm').removeAttr('onsubmit').submit();

    };


    this.getReutersNewsList = function () {

        var dataList = "";
        var dataPageNavi = "";
        var rNews = storage.getReuterNews();
        if (rNews != null) {
            dataList = rNews.dList;
            var tmpData = "";
            var lArr = dataList.replace(/<\/li>/g, '^').split('^');
            for (i = 0; i < lArr.length; i++) {
                var gArr = lArr[i].replace(/<\/span>/g, '^').split('^');
                tmpData += gArr[0].replace(/popup_view/g, '') + '</span></li>';
            }
            dataList = tmpData;
        }

        if (dataList != "") {
            $('#latestList').empty();
            $('#latestList').html(dataList);
        }
    };


    this.getReutersNewsMainList = function () {

        var dataList = "";
        var dataPageNavi = "";
        var rNews = storage.getReuterNews();
        if (rNews != null) {
            dataList = rNews.dList;
            dataPageNavi = rNews.dPage;
        }

        if (dataList != "") {
            $('#latestList').empty();
            $('#latestList').html(dataList);

            $(".more_view").empty();
            $(".more_view").html(dataPageNavi);

            $("#latestList li").css("display", "none");
            $("#latestList li").eq(0).css("display", "");

            $(document).on('click', '.more_view span', function () {

                var index = $(this).index();
                $(".more_view span").removeClass("_this");
                $(".more_view span").eq(index).addClass("_this");

                $("#latestList li").css("display", "none");
                $("#latestList li").eq(index).css("display", "");
            });
        }
    };

    this.setColumnMainPage = function (c) {
        $(".more_view span").removeClass("_this");
        $(".more_view span").eq(c).addClass("_this");
        $("#liColumn>.lawyer_area").css("display", "none");
        $("#liColumn>.lawyer_area").each(function (index) {
            if (index >= (c * 10) && index < ((c * 10) + 10)) {
                $("#liColumn>.lawyer_area").eq(index).css("display", "");
            }

        });
    };


};

