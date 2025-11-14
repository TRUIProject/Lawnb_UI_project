$(document).ready(function () {
    $('#sWord').change(function () { if ($('#sWordTwo').length > 0) { $('#sWordTwo').val(""); } });
    $('#sWordTwo').change(function () { if ($('#sWord').length > 0) { $('#sWord').val(""); } });

    $('.dic_infomation p').click(function () {
        var idx = $('.dic_infomation p').index($(this));
        $('.dic_infomation div').hide();
        $('.dic_infomation div').eq(idx).toggle();
    });
    if ($(".tab_area_dic").length > 0) { //모바일
        $(".tab_area_dic li").click(function (index) {
            var idx = $(".tab_area_dic li").index($(this));
            $(".tab_area_dic li").removeClass('_this');
            $(".tab_area_dic li").eq(idx).addClass('_this');
            $(".submain_group.fl").hide();
            $(".submain_group.fl").eq(idx).toggle();
        });
    }
});

function dicinfo_show() {
    $("#title_result_tab>div.btn_option_outer>div.btn_close").trigger("click");
    $('.dic_info_layer').show();
    $('#view_content').hide();
    $('.mview_tab_area span').removeClass('_this');
    $('.mview_tab_area span:last-child').addClass('_this');
    setHeight();
}

var dic = new function () {

    this.goToSearchList = function (c, v) {
        IsGoSubMain = true;
        $('#sWord').val("");
        $('#sType').val("0");
        $('#sCat1').val(c);
        $('#sCat2').val(v);
        $('#sSort').val(1);
        $('#searchForm').attr("action", "/Info/ContentList");
        $('#searchForm').removeAttr('onsubmit').submit();
    };

    this.goToSearchKorList = function (c, v) {
        IsGoSubMain = true;
        $('#sWord').val("");
        $('#sType').val("0");
        $('#sCat1').val(c);
        $('#sCat2').val(v);
        $('#sCode').val("D014");
        if (c != '') {
            $('#sSort').val(1);
        } else {
            $('#sSort').val(2);
        }
        $('#searchForm').attr("action", "/Info/ContentList");
        $('#searchForm').removeAttr('onsubmit').submit();
    };

    this.goToCatSearchList = function (c, v) {
        $('#sWord').val("");
        $('#sCat1').val(c);
        $('#sCat2').val(v);
        $('#sSubType').val("");
        initSearchObject["sWord"] = "";
        setSearchObject["sWord"] = "";
        initSearchObject["sSubType"] = "";
        setSearchObject["sSubType"] = "";
        initSearchObject["sCat1"] = c;
        setSearchObject["sCat1"] = c;
        initSearchObject["sCat2"] = v;
        setSearchObject["sCat2"] = v;
        if ($('#sCode').val() == "D014") {
            if (c != '') {
                $('#sSort').val(1);
            } else {
                $('#sSort').val(2);
            }
        } else {
            $('#sSort').val(1);
        }

        if (!checkMobile()) {

            if (c == "") {
                this.setChangeString(v);
            } else {
                if (isNaN(v)) {
                    this.setChangeString(c);
                } else {
                    if (v == '') v = c;
                    this.setChangeString(v);
                }
            }
        }
        page.moveSearchList(v);

        if ($("#co_mainContainer").has('mobile')) { //모바일면
            $('.left_container').removeClass('slide_mov ').removeClass('add_border ');
            $('.search_filter').addClass('orange');
        }
    };

    this.setChangeString = function (r) {
        var oValue = $('#searchString').val();
        var sHtml = $('#swStr').html();
        if (!isNaN(oValue)) {
            $('#result_tab ul li a').each(function (index) {
                if (oValue == index) {
                    oValue = $(this).html();
                }
            });
        }

        if (!isNaN(r)) {
            $('#result_tab ul li a').each(function (index) {
                if (r == index) {
                    r = $(this).html();
                }
            });
        }


        if ($('#sWord').val() == "") {
            var dTitle = "법률용어사전";
            if (sHtml.indexOf("법률한영사전") > 0) { dTitle = "법률한영사전"; }
            sHtml = "<i class=\"icon-book\" data-icon=\"&#xe91f;\" ></i><strong>" + dTitle + " > " + r.replace(/ /g, '') + "</strong>의  리스트 입니다. ";
        } else {
            sHtml = sHtml.replace("&gt; " + oValue.replace(/ /g, '') + "</strong>", "&gt; " + r.replace(/ /g, '') + "</strong>");
        }
        $('#searchString').val(r);
        $('#swStr').html(sHtml);
    };

    this.getSameWordList = function (sCode) {
        var data = { "sCode": sCode, "sWord": $('#sWord').val() };
        if (sCode == $('#sCode').val()) {
            sendNonBlockingAjaxJsonRequest("/SubInfo/ContentDicSameWordList", data, dic.setSameDicListCallback);
        }
        else {
            sendNonBlockingAjaxJsonRequest("/SubInfo/ContentDicSameWordList", data, dic.setSameWordListCallback);
        }
    };

    this.setSameWordListCallback = function (result) {
        if (result != null) {
            if ($(result).length > 0) {
                var dataList = ($('#sCode').val() == 'D014') ? "<h4 >법률용어사전</h4> <ul>" : "<h4 >법률한영사전</h4> <ul>";
                $(result).each(function () {
                    dataList += "<li><a href='/Info/ContentView?sid=" + this.lbDId + "' class='popup_view'>" + this.lbTitle + "</a> ";
                    dataList += (this.lbSubTitle != "" && this.lbSubTitle != null) ? this.lbSubTitle : "";
                    dataList += (this.lbCont != "" && this.lbCont != null) ? this.lbCont : "";
                    dataList += (this.lbTxt != "" && this.lbTxt != null) ? "<br/>" + this.lbTxt + "</li> " : "</li> ";
                });
                dataList += "</ul> ";
                $('.dic_other_dicresult').empty();
                $('.dic_other_dicresult').html(dataList);
                if ($(location).attr('pathname').indexOf('/ContentList') > 0) {
                    setHeight_under();
                } else {
                    setHeight();
                }
            }
        }
    };

    this.setSameDicListCallback = function (result) {
        if (result != null) {
            if ($(result).length > 0) {
                var dataList = "<section><h4>관련 법률용어</h4><ul>";
                var i = 0;
                $(result).each(function () {
                    if (this.lbDId != $('#lbDid').val()) {
                        dataList += "<li><a href='/Info/ContentView?sid=" + this.lbDId + "' class='popup_view'>" + this.lbTitle + "</a> ";
                        dataList += (this.lbSubTitle != "") ? this.lbSubTitle : "";
                        dataList += (this.lbCategory != "") ? "<br/><span class=\"list_meta\">" + this.lbCategory + "</span>" : "";
                        dataList += (this.lbCont != "") ? this.lbCont + "</li> " : "</li> ";
                    }
                    i++;
                });
                dataList += "</ul></section> ";
                if (i > 1) {
                    $('#addInfoDiv_lawWord').empty();
                    $('#addInfoDiv_lawWord').html(dataList);
                    setHeight();
                }
            }
        }
    };

    this.lawDicCatChange = function (cate) {
        var _c, _v;
        $('#sCat1').val("");
        $('#sCat2').val("");

        if (cate == 1) {
            _c = $("#selCat1 option:selected").val();
            _v = $("#selCat1 option:selected").attr("data-val");

            $("#selCat1").val(_c);
            $("#selCat2").val("");
        }
        else if (cate == 2) {
            _c = "";
            _v = $("#selCat2 option:selected").val();

            $("#selCat1").val("");
            $("#selCat2").val(_v);
        }

        dic.goToCatSearchList(_c, _v);
    };

    this.korEngDicCatChange = function (cate) {
        var _c, _v;
        $('#sCat1').val("");
        $('#sCat2').val("");

        if (cate == 1) {
            _c = $("#selCat1 option:selected").val();
            _v = "";

            $("#selCat1").val(_c);
            $("#selCat2").val("");
        }
        else if (cate == 2) {
            _c = "";
            _v = $("#selCat2 option:selected").val();

            $("#selCat1").val("");
            $("#selCat2").val(_v);
        }

        dic.goToCatSearchList(_c, _v);
    };
};