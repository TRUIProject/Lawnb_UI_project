$(document).ready(function () {
    if ($("#co_popupContainer").hasClass('mobile')) { //모바일면
        if ( document.body.clientWidth > 500 ){
            $("#result_area").height($('.main_container').height() );
        }
    }
    //else { // 오류제거 Jenna 2020.08.11
    //    $("#result_area").height($('.main_container').height() - 37);
    //}

    $("#sCat1").change(function () {
        var sCode = $("#sCode").val();
        var sCat1 = $(this).val();
        if (sCode == "D003" || sCode == "D004") {
            $('#sYearVal').val("");
            doc.initSelectBox(sCat1);
            if (sCat1 == "" || sCat1 == "00" || sCat1 != "0") {
                     setChangeAble(false);
            }
        }
        var now = new Date();
        var yyyy = now.getFullYear(); 
        var mm = now.getMonth() < 9 ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1);
        var Thismonth = yyyy + '' + mm;
        var Premonth = yyyy - 4 + '' + mm;

        if (sCode == "D004") {
            
           if (sCat1 == "463558" || sCat1 == "463559") { 
                //연도
                $("#dDate1").attr("maxlength", "4");
                $("#dDate2").attr("maxlength", "4");
               $("#dDate1").attr("placeholder", yyyy - 4);
                $("#dDate2").attr("placeholder", yyyy);

                $("#cDate1").attr("maxlength", "4");
                $("#cDate2").attr("maxlength", "4");
               $("#cDate1").attr("placeholder", yyyy - 4);
               $("#cDate2").attr("placeholder", yyyy);

               if ($('#dType_str').length > 0) {
                   $('#dType_str').html("발행연도");
               }
            }
            else {
                //연월일
                $("#dDate1").attr("maxlength", "6");
                $("#dDate2").attr("maxlength", "6");
               $("#dDate1").attr("placeholder", Premonth);
               $("#dDate2").attr("placeholder", Thismonth);

                $("#cDate1").attr("maxlength", "6");
                $("#cDate2").attr("maxlength", "6");
               $("#cDate1").attr("placeholder", Premonth);
               $("#cDate2").attr("placeholder", Thismonth);

               if ($('#dType_str').length > 0) {
                   $('#dType_str').html("발행연월");
               }
            }

        }
    });
    
    $(".check_area li a").click(function () {
        var sCode = $("#sCode").val();
        if (sCode == "D001") {
            if ($(this).attr("id").indexOf("a_") > -1) {
                var sCat = $(this).attr("id").replace("a_", "");
                $("#sCat").val(sCat);
            }            
        }
    });

    $(".check_area li ol li").click(function () {
        var sCode = $("#sCode").val();
        if (sCode == "D001") {
            if ($(this).parent().parent().find("a").attr("id").indexOf("a_") > -1) {
                var sCat = $(this).parent().parent().find("a").attr("id").replace("a_", "");
                $("#sCat").val(sCat);
            }            
        }
    });
     
});

this.setSubViewCallback = function (result) {
    if (result != null) {
        if ($('#lbCode').val() == 'D022') {
            var pdfFIle = $(result).filter('#jFile').html();
            var jIndex = $(result).filter('#jIndex').html();
            view.pdfPreNextPage('pdf_view', $('#lbCode').val(), pdfFIle);
            pdfAjaxOpen('pdf_view', $('#lbCode').val(), pdfFIle);
            doc.setMoveIndex(jIndex);
        }
        else {
            $('#topInfoDiv').empty();
            $('#topInfoDiv').append("<section id=\"jPreNext\"></section><section id=\"jAuthor\"></section>");
            $('.meta_area').html($(result).filter('#jTitle').html());
            $('#jAuthor').html($(result).filter('#jAuthor').html());
            $('#jPreNext').html($(result).filter('#jPreNext').html());
            pdfOpen('pdf_view');
            setTargetDocBinding();
            view.showAdditionContent($('#lbDid').val(), '0', '');
        }
        setHeight();
    }
};


this.setBookViewCallback = function (result) {
    if (result != null) {
        if ($("#lbCode").val() == "J001") {
            $('#view_sub_content').hide();

            $('.main_container_view_inner').show();
            $('#view_content').hide();
            //$('.onju_preview_law').hide();
            //$('.onju_preview_onju').hide();
            //$('.onju_index_popup').hide();
            //$('.onju_front_page').hide();

            $('#result_area>ol.list').empty();
            $('#result_area>#result_sep').empty();
            $('#result_area>.list_order_pr').empty();
            $('#result_area>.navigationLinks').empty();
            $('#title_result_tab').html($(result).filter('#sTitle').html());
            $('#result_area>div.list').html($(result).filter('#sResult').html());

            $("#title_result_tab .btn_close").show();
            $("#title_result_tab .btn_reapprea").hide();
            $("#title_result_tab").show();
            $("#result_area").show();
        }
        else {
            $('.main_container_view_inner').show();
            $('#pdf_view').hide();
            $('#result_area>ol.list').empty();
            $('#result_area>#result_sep').empty();
            $('#result_area>.list_order_pr').empty();
            $('#result_area>.navigationLinks').empty();
            $('#title_result_tab').html($(result).filter('#sTitle').html());
            $('#result_area>div.list').html($(result).filter('#sResult').html());
            view.viewSearchResBookList();
        }        
        setHeight();
    }
};

this.setTargetDocBinding = function () {
    var tNav = $('.tree');
    var t = $('#lbDid').val().split('|')[1];
    if ($("#j" + t).length > 0) {
       // tNav.find("#j" + t).removeClass('close').addClass('open'); 트리 오류수정 open class삭제 - 전 2020.5.21
        tNav.find("#j" + t).removeClass('close');
        tNav.find("#j" + t).parents('ol').show().parents('li').removeClass('close');
        tNav.find("#j" + t + ">ol").show();
        tNav.find('li.open>.tNavToggle').text('-').removeClass('plus').addClass('minus');
        $('li a').removeClass('_this');
        tNav.find("#j" + t).children('a:first-of-type').addClass('_this');
        document.getElementById("j" + t).scrollIntoView({ block: "center", behavior: "smooth" });
    }
};

var doc = new function () {

    this.myarticle_info = function () { //나의 학회논문 안내
        $("#myarticle_info_popup").show();
            $(".base_popup2").show();
         
        $('#myarticle_info_popup').on('click', '.btn_close_pop', function () {
            $("#myarticle_info_popup").hide();
            $(".base_popup2").hide();
        });
    };

    this.initSelectBox = function (c) {
        var sCode = $("#sCode").val();
        if (sCode == "D003") {
            if (c == "12346" || c == "12347") {
                var data = { "sCode": sCode, "sId": c, "sSubId": 0, "sWord": "", "sType": 99 };
                sendNonBlockingAjaxRequest("/AjaxInfo/SelList", data, function (result) {
                    if (result != null) {
                        $('#sYear').empty();
                        $('#sYear').html(result);
                        if ($('#sYearVal').val() != "") {
                            $("#sYear").val($('#sYearVal').val()).prop("selected", true);
                        }
                    } else {
                        setSelectYear();
                    }
                });
            }
            else {
                //20201124 법률잡지 sYear 생성 추가
                setSelectYear();
                if ($('#sYearVal').val() != "") {
                    $("#sYear").val($('#sYearVal').val()).prop("selected", true);
                }
            }
        }else if (sCode == "D004") {
            if (c == "13337" || c == "463558" || c == "463559") {
                var data = { "sCode": sCode, "sId": c, "sSubId": 0, "sWord": "", "sType": 99 };
                sendNonBlockingAjaxRequest("/AjaxInfo/SelList", data, function (result) {
                    if (result != null) {
                        $('#sYear').empty();
                        $('#sYear').html(result);
                        if ($('#sYearVal').val() != "") {
                            $("#sYear").val($('#sYearVal').val()).prop("selected", true);
                        }
                    } else {
                        setSelectYear();
                    }
                });
            }
        }
        else {
            setSelectYear();
        }

        if (sCode == "D003" || sCode == "D004") {
            if (c != "" && c != "00" && c != "0") {
                $("#sYear").attr("disabled", false);
                $("#sCat2").attr("disabled", false);

                $('#sCat2').empty();
                $('#sCat2').html("<option value='00'>전체</option>");


            } else {
                $("#sYear").attr("disabled", true);
                $("#sCat2").attr("disabled", true);
            }
        }
    }

    this.goSubMainList = function (n, c, v) {
        IsGoSubMain = true;
        $('#sType').val("0");
        $('#sViewPage').val(n);
        $('#sCode').val(c);
        $('#sCat1').val(v);
        $('#sCat2').val("0");
        $('#searchForm').attr("action", "/Info/ContentSubMain");
        $('#searchForm').removeAttr('onsubmit').submit();

    };

    this.goSubSearchList = function (a, c, m) {
        IsGoSubMain = true;
        $('#sType').val("0");
        $('#sCat1').val(c);
        $('#sCat2').val(a);
        $('#sSubWord1').val(m);
        $('#sViewPage').val("2");
        $('#sWord').val("");
        $('#searchForm').attr("action", "/Info/ContentList");
        $('#searchForm').removeAttr('onsubmit').submit();
    };


    this.goToSearchList = function (c, v) {
        IsGoSubMain = true;
        $('#sSubType1').val('');
        $('#sType').val("0");
        $('#sCode').val(c);
        $('#sCat1').val(v);
        $('#sCat2').val("0");
        $('#sSort').val('1');
        if ($('#sWord').length > 0) { $('#sWord').val(""); }

        if ($('#sCode').val() == "D003") {
            if ($('#sType1').length > 0) {
                var st = "";
                for (t = 0; t < $('#sType1').val().length; t++) {
                    st += "1";
                }
                $('#sType1').val(st);
            }
        }        
        $('#searchForm').attr("action", "/Info/ContentList");
        $('#searchForm').removeAttr('onsubmit').submit();

    };

    this.goToSubSearchList = function (c, v) {
        IsGoSubMain = true;
        $('#sType').val("0");
        $('#sCode').val(c);
        $('#sCat1').val(v);
        $('#sCat2').val("0");
        $('#searchForm').attr("action", "/Info/ContentSubMain");
        $('#searchForm').removeAttr('onsubmit').submit();

    };


    this.selectSubSearchList = function (c, m) {
        $("select[name=sCat1]").val(c).prop("selected", true);
        $('#sCat1').val(c);
        $('#sSubType').val(m);
        $('#sWord').val("");
        page.initSearchList();
    };

    this.goToMagazineSearchList = function (c, d) {
        IsGoSubMain = true;
        $('#sWord').val("");
        $('#sType').val("0");
        $('#sCode').val("D003");
        $('#sCat1').val(c);
        $('#sCat2').val(d);
        if ($('#sTmpCat').length > 0) {
            $('#sTmpCat').val(d);
        }
        $('#sSort').val('1');
        $('#searchForm').attr("action", "/Info/ContentList");
        $('#searchForm').removeAttr('onsubmit').submit();

    };

    this.setMagazineSelect = function () {
        if (initSearchObject["sWord"] == "") {
            if ((mCat1 != "" && mCat2 != "") && (mCat1 != "00" && mCat2 != "00") && (mCat1 != "0" && mCat2 != "0")) {
              //  if (mCat2 == "465163") { $("#sYear").val('2018').prop("selected", true); } else { $("#sYear").val('2019').prop("selected", true); }
                setChangeAble(false);
                if ($("#sYear").children('option:selected').val() == "00") {

                } else {
                    page.selectCategory($("#sCat1").children('option:selected').val(), 0, $("#sYear").children('option:selected').val(), 1);
                }
                initSearchObject["sCat2"] = mCat2;
                setSearchObject["sCat2"] = mCat2;
            } else {
                page.initSearchList();
            }
        } else {
            if ((mCat1 != "" && mCat2 != "") && (mCat1 != "00" && mCat2 != "00") && (mCat1 != "0" && mCat2 != "0")) {
                $("#sYear").val($('#sYearVal').val()).prop("selected", true);
                setChangeAble(false);
                if ($("#sYear").children('option:selected').val() == "00") {

                } else {
                    page.selectCategory($("#sCat1").children('option:selected').val(), 0, $("#sYear").children('option:selected').val(), 1);
                }
                initSearchObject["sCat2"] = mCat2;
                setSearchObject["sCat2"] = mCat2;
            } else {
                page.initSearchList();
            }
        }
        if (mCat1 == "" || mCat1 == "00" || mCat1 == "0") {
            $("#sYear").attr("disabled", true);
            $("#sCat2").attr("disabled", true);
        }
    };

    this.setMagazineInitSearchList = function () {
        //        if (initSearchObject["sWord"] == "") {
        if ((mCat1 != "" && mCat2 != "") && (mCat1 != "00" && mCat2 != "00") && (mCat1 != "0" && mCat2 != "0")) {
            $("#sCat2").val(mCat2).prop("selected", true);
            if ($('#sYearVal').val() != "") {
                    $("#sYear").val($('#sYearVal').val()).prop("selected", true);
            }
            page.initSearchList();
        }
        //        }
    };

    this.selectEbookList = function (c, m, p) {


        var sCode = "D022";
        if ($("#sCode").length > 0)
            sCode = $('#sCode').val();
        else
            sCode = $(opener.document).find("#sCode").val();

        var data = { "sCode": sCode, "sCat": c };
        $("#sCatMain").val(c); // 나의E-Book 변경 시 메인 하단 리스트 별도 변경.

        //sendNonBlockingAjaxJsonRequest(page.getTargetNewUrl(), data, doc.setEbookCategoryCallback);
        sendNonBlockingAjaxJsonRequest("/SubInfo/ContentLatestList", data, doc.setEbookCategoryCallback);
        var span_x = m % p;
        $(".directory_sub_org").eq(0).find('span').css('margin-left', $(".directory_list li").width() * span_x + 45).show();
    };


    this.setEbookCategoryCallback = function (result) {
        if (result != null) {
            var dataList = "";
            var i = 0;
            var sCode = "";
            if ($('#sCode').length > 0) { sCode = $("#sCode").val(); }
            else { sCode = $(opener.document).find("#sCode").val(); }

            $(result).each(function () {
                if (i == 0) {
                    dataList = "<p class=\"ar\"><a href=\"javascript:doc.goToSubSearchList('" + sCode + "','" + this.lbSubId + "');\">+ " + this.lbPubTitle + " E-book 전체보기</a></p>";
                }
                dataList += "<div class=\"book_group_list\"><div class=\"img\"><img src=\"" + this.lbPubImg + "\">";
                dataList += "<em class=\"favi_icon\" onclick=\"mydesk.setMyLawCollection('" + this.lbDId + "','EID" + i + "')\"><i class=\"icon-star " + (this.lbMychk == "1" ? "starfull" : "") + "\" ></i></em></div>";
                dataList += "<a class=\"popup_view title\" href=\"/Info/ContentView?sid=" + this.lbDId + "\">" + this.lbTitle + "</a><br><span>" + this.lbSubTitle + "</span></div>";
                if ((i + 1) % 3 == 0) {
                    dataList += "<div class=\"cb\"></div>";
                }
                i++;
            });

            if ($('.directory_sub_org>div.directory_list').length > 0) {
                $('.directory_sub_org>div.directory_list').empty();
                $('.directory_sub_org>div.directory_list').html(dataList);
                setHeight_under();
            }
            else {
                if ($("#hdnMobileYN").val() != "Y") {
                    $(opener.document).find('.directory_sub_org>div.directory_list').empty();
                    $(opener.document).find('.directory_sub_org>div.directory_list').html(dataList);
                }
            }
        }
    };

    var selCatVal = "";
    this.goSearchList = function () {        
        $('#searchForm').removeAttr("action");
        var sWord = "";
        selCatVal = "";
        sWord = $.trim($("#sWord").val());

        var chkVal = page.chkSearchWord();
        if (chkVal == 0) {
            alert('검색어를 입력해 주세요.');
            return false;
        }
        else if (sWord.length < 2)
        {
            alert('검색어는 두 자 이상이어야 합니다.');
            return false;            
        }
        else if (!doc.selArticleChk())
        {
            alert('분야를 선택해 주세요.');
            return false;              
        }
        else if (chkVal == 2) {
            return false;
        } else {            
            // 학회논문 개선 20200916
            //doc.hideArticleTree();            
            $("section>ol.check_area>li>ol>li").removeClass('_this');                
            $('section>ol.check_area>li>a').removeClass('_this');                
            tree_down = $('section>ol.check_area>li>.tNavToggle');
            tree_down.text('+').removeClass('minus').addClass('plus');
            tree_down.parent('li').addClass('close');
            tree_down.parent('li').find('>ol').slideUp(100);
            $("#a_articleMainCount").addClass("_this");
            
            $("#divArticleCatTxt").html("학회 및 간행물 선택");
            $('#sCat1').val(selCatVal.substring(0, selCatVal.length-1));

            $(".before_search_area").hide();
            $(".articlesearchtxt").hide();
            $(".myarticle").hide();

            page.gotoCat($('#sCat1').val());
            return false;
        }
    };

    // 학회논문 개선 - 셀렉트박스 체크여부 20200916
    this.selArticleChk = function () {
        var chk = false;
        var selCat = $("input[name=cType3]:checkbox");
        for (var i = 0; i < selCat.length; i++) {
            if (selCat.eq(i).is(":checked")) {
                selCatVal += selCat.eq(i).val() +","
                chk = true;               
            }
        }
        return chk;
    }

    this.goArticleCategory = function (n) {
        $('#sWord').val("");
        if ($('#selType3').length > 0) {
            $('#selType3').html("<option>전체</option>");
        }

        preListIndex = n;
        page.gotoCat(n);
        if ($('#a_' + n).length > 0) {
            doc.setSelectDocTag(n);
        }

        $("section>ol.check_area>li>ol").on('click', 'li', function (e) {
            e.preventDefault();
            $("section>ol.check_area>li>ol>li").removeClass('_this');
            dr = $(this).parent().parent().find('a').attr('id').replace(/a_/g, '');
            //doc.setSelectDocTag(dr);
            $(this).addClass('_this');
            $('section>ol.check_area>li>a').removeClass('_this');
            $('#a_' + dr).addClass('_this');

            tree_down = $(this).parent().parent().siblings('li').find('.tNavToggle');
            tree_down.text('+').removeClass('minus').addClass('plus');
            tree_down.parent('li').addClass('close');
            tree_down.parent('li').find('>ol').slideUp(100);
        });

        // 학회논문 개선 20200916
        $(".before_search_area").hide();
        $(".articlesearchtxt").hide();
        $(".myarticle").hide();
        $(".doclist").show();
        doc.getMainTitleCount(n, "PART");
        doc.getSelArticleUpperCategory();
    };

    this.setSelectDocTag = function (n) {
        $('section>ol.check_area>li>a').removeClass('_this');
        $("section>ol.check_area>li>ol>li").removeClass('_this');
        $('#a_' + n).addClass('_this');

        tori = $('section>ol.check_area>li').find('.tNavToggle');
        tori.text('+').removeClass('minus').addClass('plus');
        tori.parent('li').addClass('close');
        tori.parent('li').find('>ol').slideUp(100);

        if ($('#a_' + n).siblings('ol').length > 0 && $('#a_' + n).siblings('ol').is(':hidden')) { //하단있는 학회논문 트리하위 분야 열기 Jenna 2020.08.20
            ts = $('#a_' + n).siblings('.tNavToggle');
            ts.text('-').removeClass('plus').addClass('minus');
            ts.parent('li').removeClass('open').removeClass('close');
            ts.parent('li').find('>ol').slideDown(100);
        }
    };

    // 도서내 검색 단어 변경 추가
    this.showTargetContentNew = function (s, bookType) {
        if ($('#lbCode').val() != "J001") {
            $("#title_result_tab .btn_close").trigger("click");
        }

        if (s.substr(0, 4) == 'F001') { s = s.replace(/_R1/g, ''); }
        if (s.substr(0, 4) == 'F001') {
            doc.moveToForm(s);
        }
        else if (s.substr(0, 4) == "J001") {
            $('.onju_index a').removeClass("_this");
            if ($("#highView").length > 0) {
                $("#highView").hide();
            }


            // 온주본문 - 온주우측정보
            var sId = s;
            var dId = s;
            if (s.indexOf('_') > 0) {
                sId = s.split('_')[0] + "|" + s.split('_')[1] + "|0";
                dId = s.split('_')[0] + "|" + s.split('_')[1];

                $("#a_" + s.split('_')[1]).addClass("_this");
            }
            else if (s.indexOf('|') > 0) {
                sId = s.split('|')[0] + "|" + s.split('|')[1] + "|0";
                dId = s.split('|')[0] + "|" + s.split('|')[1];

                $("#a_" + s.split('|')[1]).addClass("_this");
            }

            eKey = bookType;
            //eKey = "BookSearchWord";

            // 온주 본문
            getContentSubView(view.getTargetUrl(), s);
            //if (typeof eKey == 'undefined') {
            // 온주 우측정보
            //onju.onjuContentViewRightInfo(sId);
            // 관련자료
            view.showAdditionContent(dId, '0', '');
            //}
        }
        else {
            getContentSubView(view.getTargetUrl(), s);
            $('#lbDid').val(s.replace(/_R1/g, ''));
        }

        if ($("#co_popupContainer").hasClass('mobile')) {
            $('.left_container').removeClass('slide_mov ').removeClass('add_border ');
            $('#bg_screen').hide();
            $("html").css("overflow-y", "auto");
        }
    };

    this.showTargetContent = function (s) {
        //if ($('#lbCode').val() != "J001") {
        //    $("#title_result_tab .btn_close").trigger("click");
        //}
        // 도서내 검색 시 기존검색한 검색어로 변경하도록 로직 추가
        $("#title_result_tab .btn_close").trigger("click");

        if (s.substr(0, 4) == 'F001') { s = s.replace(/_R1/g, ''); }
        if (s.substr(0, 4) == 'F001') {
            doc.moveToForm(s);
        }
        else if (s.substr(0, 4) == "J001") {
            $('.onju_index a').removeClass("_this");            
            if ($("#highView").length > 0) {
                $("#highView").hide();
            }

            // 온주본문 - 온주우측정보
            var sId = s;
            var dId = s;
            if (s.indexOf('_') > 0) {
                sId = s.split('_')[0] + "|" + s.split('_')[1] + "|0";
                dId = s.split('_')[0] + "|" + s.split('_')[1];

                $("#a_" + s.split('_')[1]).addClass("_this");
            }
            else if (s.indexOf('|') > 0) {
                sId = s.split('|')[0] + "|" + s.split('|')[1] + "|0";
                dId = s.split('|')[0] + "|" + s.split('|')[1];

                $("#a_" + s.split('|')[1]).addClass("_this");
            }

            eKey = "";
            // 온주 본문
            getContentSubView(view.getTargetUrl(), s);
            //if (typeof eKey == 'undefined') {
                // 온주 우측정보
                //onju.onjuContentViewRightInfo(sId);
                // 관련자료
                view.showAdditionContent(dId, '0', '');   
            //}
        }        
        else
        {
            getContentSubView(view.getTargetUrl(), s);
            $('#lbDid').val(s.replace(/_R1/g, ''));
        }

        if ($("#co_popupContainer").hasClass('mobile')) {
            $('.left_container').removeClass('slide_mov ').removeClass('add_border ');
            $('#bg_screen').hide();
            $("html").css("overflow-y", "auto");
        }
    };

    this.moveTargetContent = function (s) {
        $("#title_result_tab>div.btn_option_outer>div.btn_close").trigger("click");
        var lp = $('#lbLastIndex').val();
        if (s == '100000') {
            alert("첫 페이지입니다.");
        } else if (s > lp) {
            alert("마지막 페이지입니다.");
        } else {
            var t = $('[name="j' + s + '"]').attr('id').replace(/j/g, '');
            t = $('#lbDid').val().split('|')[0] + '|' + t + '_R1';
            getContentSubView(view.getTargetUrl(), t);
            $('#lbDid').val(t.replace(/_R1/g, ''));
        }
    };


    this.bookSearchList = function () {
        var bWord = $.trim($('#bWord').val());
        if (bWord == "") {
            alert("검색어를 입력해주세요.");
            return false;
        }
        else {
            if (bWord.replace(/ /g, '').length == 1) {
                alert('검색어는 두 자 이상이어야 합니다.');
                return false;
            }
            else {
                getContentBookView(view.getBookFindUrl(), $('#lbDid').val().split('|')[0], $('#bWord').val());
                return false;
            }
        }
    };

    this.moveToForm = function (s) {
        var fRR = s.split('_');
        $(".title_area>h2").html($("#j" + fRR[1]).text());
        view.pdfOrginalFileDown(fRR[0].substr(0, 4), fRR[1]);
        pdfAjaxOpen('pdf_view', fRR[0].substr(0, 4), fRR[1]);
        view.showAdditionContent(s, '0', '');
        doc.setMoveIndex(fRR[1]);
    };

    this.setMoveIndex = function (t) {
        document.getElementById("j" + t).scrollIntoView({ block: "center" });
    };

    // 학회논문, 법률잡지 - 누리미디어, 한국학술정보, 교보스콜라
    this.docFileDownlad = function (sArid, sUserType, sDiv) {
        GAEvent("DocDownload", "?sDiv=" + sDiv);
        if (sDiv == "1000") // 한국학술정보
        {
            doc.downloadforArticle(sArid);
        }
        else if (sDiv == "1001") // 누리미디어
        {
            $.ajax({ type: "GET", url: "../AjaxInfo/GetVerifyKey", dataType: "text", success: function (data) {
                if (data == "0") { alert("등록되지 않은 아이디입니다."); }
                else {
                    if (checkMobile()) {
                        //var url = "http://download.dbpia.co.kr/File/Download/Lawnb";
                        //url += "?arid=" + sArid;
                        //url += "&lid=14";
                        //url += "&oType=2";
                        //url += "&usertype=3";
                        //url += "&docDownload=Y";
                        //alert(url);
                        //location.href = url;

                        location.href = "/AjaxInfo/GoToNuriDown?sArid=" + sArid + "&docDownload=Y";
                        //  alert("/AjaxInfo/GoToNuriDown?sArid=" + sArid);                        
                    }
                    else {
                        //                        var frm = document.createElement("form");
                        //                        frm.method = "post";

                        //                        var input = document.createElement("input");
                        //                        $(input).attr("type", "hidden");
                        //                        $(input).attr("id", "arid");
                        //                        $(input).attr("name", "arid");
                        //                        $(input).attr("value", sArid);
                        //                        frm.appendChild(input);

                        //                        input = document.createElement("input");
                        //                        $(input).attr("type", "hidden");
                        //                        $(input).attr("id", "lid");
                        //                        $(input).attr("name", "lid");
                        //                        $(input).attr("value", "14");
                        //                        frm.appendChild(input);

                        //                        input = document.createElement("input");
                        //                        $(input).attr("type", "hidden");
                        //                        $(input).attr("id", "oType");
                        //                        $(input).attr("name", "oType");
                        //                        $(input).attr("value", "1");
                        //                        frm.appendChild(input);

                        //                        input = document.createElement("input");
                        //                        $(input).attr("type", "hidden");
                        //                        $(input).attr("id", "usertype");
                        //                        $(input).attr("name", "usertype");
                        //                        $(input).attr("value", "3");
                        //                        frm.appendChild(input);
                        //                        document.body.appendChild(frm);
                        //                        frm.action = "//download.dbpia.co.kr/File/Download/Lawnb";
                        //                        frm.submit();
                        //                        document.body.removeChild(frm);
                        if (window.location.href.indexOf("https://") >= 0) {
                            location.href = "https://download.dbpia.co.kr/File/Download/Lawnb?arid=" + sArid + "&lid=14&oType=1&usertype=3";
                        } else {
                            location.href = "http://download.dbpia.co.kr/File/Download/Lawnb?arid=" + sArid + "&lid=14&oType=1&usertype=3";
                        }
                    }
                }
            }, error: function (e) { }
            });
        }
        else if (sDiv == "1002") // 교보스콜라
        {
            doc.dowmloadforScholar(sArid);
        }        
        else if (sDiv == "1003") // EARticle
        {
            doc.dowmloadforEArticle(sArid);
        }
        else
        {
            alert("해당되지 않는 컨탠츠입니다.");
        }
    };

    this.dowmloadforEArticle = function (arid) {
        $.ajax({
            type: "GET", url: "../AjaxInfo/GetVerifyKey", dataType: "text", success: function (data) {
                if (data == "0") { alert("등록되지 않은 아이디입니다."); }
                else {
                    s = data;
                    var ar = arid.split('_');
                    if (checkMobile()) {
                        location.href = downloadParamAdd('//www.earticle.net/Download/GroupAuth?auth=7d1345f5-40bf-41e2-8bff-c361bca3725c&article=' + ar[0] + '&download=' + ar[1]);
                    }
                    else {
                        location.href = '//www.earticle.net/Download/GroupAuth?auth=7d1345f5-40bf-41e2-8bff-c361bca3725c&article=' + ar[0] + '&download=' + ar[1];
                    }
                }
            }, error: function (e) { }
        });
    };

    this.dowmloadforScholar = function (arid) {
        $.ajax({ type: "GET", url: "../AjaxInfo/GetVerifyKey", dataType: "text", success: function (data) {
            if (data == "0") { alert("등록되지 않은 아이디입니다."); }
            else {
                s = data;
                var ar = arid.split('_');
                if (checkMobile()) {
                    location.href = downloadParamAdd('//scholar.kyobobook.co.kr/articleDownload?barcode=' + ar[1] + '&artId=' + ar[0] + '&gb=down&schlrPrdtcpNum=3009&kyobokey=' + s);
                }
                else {
                    location.href = '//scholar.kyobobook.co.kr/articleDownload?barcode=' + ar[1] + '&artId=' + ar[0] + '&gb=down&schlrPrdtcpNum=3009&kyobokey=' + s;
                }
            }
        }, error: function (e) { }
        });
    };

    this.downloadforArticle = function (arid) {

        $.ajax({ type: "GET", url: "../AjaxInfo/GetVerifyTime", dataType: "text", success: function (data) {
            if (data == "0") { alert("등록되지 않은 아이디입니다."); }
            else {
                s = data;
                if (checkMobile()) {
                    var url = "https://LNK.kstudy.com/others/downlawnb.asp";
                    url += "?Lawnb_time=" + s;
                    url += "&Nick=LAWnB";
                    //url += "&isDownload=1";

                    if (navigator.userAgent.match(/iPhone|iPad|iPod/)) {
                        url += "&isDownload=2";
                    }
                    else {
                        url += "&isDownload=1";
                    }

                    url += "&fID=" + arid;
                    url += "&docdownload=Y";

                    location.href = url;
                }
                else {
                    var frm = document.createElement("form");
                    frm.method = "post";

                    var input = document.createElement("input");
                    $(input).attr("type", "hidden");
                    $(input).attr("id", "Lawnb_time");
                    $(input).attr("name", "Lawnb_time");
                    $(input).attr("value", s);
                    frm.appendChild(input);

                    input = document.createElement("input");
                    $(input).attr("type", "hidden");
                    $(input).attr("id", "Nick");
                    $(input).attr("name", "Nick");
                    $(input).attr("value", "LAWnB");
                    frm.appendChild(input);

                    input = document.createElement("input");
                    $(input).attr("type", "hidden");
                    $(input).attr("id", "isDownload");
                    $(input).attr("name", "isDownload");
                    $(input).attr("value", "1");
                    frm.appendChild(input);

                    input = document.createElement("input");
                    $(input).attr("type", "hidden");
                    $(input).attr("id", "fID");
                    $(input).attr("name", "fID");
                    $(input).attr("value", arid);
                    frm.appendChild(input);

                    document.body.appendChild(frm);
                    frm.action = "https://LNK.kstudy.com/others/downlawnb.asp";
                    frm.target = "popup_down";
                    window.open("", "popup_down", "width=300, height=200, scrollbars=no");
                    frm.submit();
                    document.body.removeChild(frm);
                }
            }
        }, error: function (e) { }
        });
    };
    
    // 학회논문 개선 - 타이틀 변경 추가 20200914
    this.getMainTitleCount = function (sCat1, sType) {
        var params = { "sCat1": sCat1, "sType": sType };
        sendNonBlockingAjaxJsonRequest("/AjaxInfo/GetArticleCategoryCount", params, function (result) {
            if (result != null) {
                $("#divArticleCatTxt").html(result[0][0]["CATCOUNT"]);
            }
        });
    };

    // 상위 카테고리 가져오기 20200916
    this.getSelArticleUpperCategory = function () {
        var params = {};
        sendNonBlockingAjaxJsonRequest("/AjaxInfo/GetSelArticleTopCategory", params, function (result) {
            if (result != null) {
                var selText = "<div><input type=\"checkbox\" id=\"cType3_a\" name=\"cType3_a\" checked=\"checked\" onclick=\"chkCat_A('3')\">전체</div>";

                for (var i = 0; i < result.length; i++) {
                    selText += "<div class=\"divctype3\" ><input type=\"checkbox\" name=\"cType3\" checked=\"checked\" onclick=\"chkCat('3')\" value=\"" + result[i]["CAT_IDX"] + "\">" + result[i]["Cat_Name"].split('$')[0] + " </div>";
                }
                $(".selarticletopcat").empty();
                $(".selarticletopcat").html(selText);
            }
        });
    };

    // 학회논문 개선 - 전체 검색 selectbox, div 보이기,숨기기 20200915
    this.goSearchMain = function (n) {
        // 학회논문 전체 검색 제목 20200915
        $("#a_articleMainCount").addClass("_this");
        doc.getMainTitleCount(0, "ALL");

        //doc.hideArticleTree();
        doc.setSelectDocTag(n);

        $("#search_results").empty();
        $(".before_search_area").show();
        $(".articlesearchtxt").show();
        $(".myarticle").hide();
        $(".doclist").show();

        doc.getSelArticleUpperCategory();

        if ($('#selType3').length > 0) {            
            $('#selType3').html("<option>전체</option>");
        }
        $("#sWord").val("");
    };

    // 학회논문 개선 - 트리 숨기기
    this.hideArticleTree = function () {
        $("section>ol.check_area>li").on('click', 'a', function (e) {
            e.preventDefault();
            $("section>ol.check_area>li>ol>li").removeClass('_this');
            $('section>ol.check_area>li>a').removeClass('_this');
            
            $(this).addClass('_this');                   

            tree_down = $('section>ol.check_area>li>.tNavToggle');
            tree_down.text('+').removeClass('minus').addClass('plus');
            tree_down.parent('li').addClass('close');
            tree_down.parent('li').find('>ol').slideUp(100);
        });
    };

    // 학회논문 개선 - 선택된 분야 리스트 보이기 20200916
    this.showSelectedCat = function (id) {

        $(".resutl_tab_area span").removeClass("_this");
        $("#span_"+id).addClass("_this");

        if (id == "0000") {
            $(".article_detail_list").show();
            setHeight_under();
        }
        else {
            $(".article_detail_list").hide();
            $(".dl_" + id).show();
            setHeight_under();
        }        
    };

    // 학회논문 개선 - 나의 학회논문 학회,간행물 즐겨찾기 20200917
    this.getMyArticleCollection = function (n) {
        
        $("#divArticleCatTxt").html("나의 학회 / 간행물");
        $("#search_results").empty();

        //doc.hideArticleTree();       
        doc.setSelectDocTag(n);
        mydesk.getMyArticleCollection();
    };

    // 학회논문 개선 - 리스트에서 나의 학회논문 즐겨찾기로 이동
    this.goMyArticleCollectionList = function () {
        $("#sSubWord7").val("list");
        doc.goSubMainList('1', 'D001', '441408')
    };

    // 학회논문 개선 - 나의 학회논문 즐겨찾기에서 리스트 이동
    this.goSubSearchListInMyArticle = function (sCat2, sCat1, sCat) {
        $("#sCat").val(sCat);
        doc.goSubSearchList(sCat2, sCat1, '');
    };
    
    // 주제어 검색 sCat 값에 해당 문헌 카테고리 코드값을 넣는다. 학회논문 : D001
    this.getKeyWordList = function (sWord, sPage, sList) {

        //-- mobile view 페이지 이동 시 localstorage 파라미터 저장 --//
        if (checkMobile()) {
            // view.addInfoList를 제외한 다른 함수 localstorage 파라미터 초기화
            // view.addInfoList의 localstorage 파라미터 재 정의
            if (localStorage.getItem("sViewMobileList") != null) {
                if (JSON.parse(localStorage.getItem("sViewMobileList")).length > 0) {
                    var currIdx = (localStorage.getItem("currIdx") * 1 == null || localStorage.getItem("currIdx") * 1 == "") ? 0 : localStorage.getItem("currIdx") * 1;
                    var sViewMobileList = JSON.parse(localStorage.getItem("sViewMobileList"));

                    sViewMobileList[currIdx]["addInfoLawListPage"] = 1;
                    sViewMobileList[currIdx]["addInfoLawListPageSize"] = 10;

                    sViewMobileList[currIdx]["addInfoListCheck"] = "Y";
                    sViewMobileList[currIdx]["addInfoListCode"] = $('#lbCode').val();                    

                    localStorage.setItem("sViewMobileList", JSON.stringify(sViewMobileList));
                }
            }
        }
        //!-- mobile view 페이지 이동 시 localstorage 파라미터 저장 --//

        sWord = sWord.replace("<marks>", "").replace("</marks>", "");

        var data = { "sCode": "D000", "sWord": sWord, "sCat": $('#lbCode').val(), "sPage": sPage, "sList": sList };
        //sendNonBlockingAjaxJsonRequest("/SubInfo/ContentDocKeyWordList", data, doc.setKeyWordListCallback);
        sendNonBlockingAjaxRequest("/SubInfo/ContentDocKeyWordList", data, function (result) {
            if (result != null) {
                $("#result_area").empty();
                $("#result_area").append(result);
                /*
                $("#title_result_tab .btn_close").show();
                $("#title_result_tab .btn_reapprea").hide();
                $("#title_result_tab").show();
                $("#result_area").show();
                $("#pdf_view").hide();                
                setTimeout(function () {
                    $("#result_area").addClass('slide_mov_bottom');
                }, 200);
                $("#view_content").hide();
                */
                // 레이어 보이기
                view.viewRefDataConten();

                // 본문PDF 파일 아니고 모바일 때 스크롤 생기게 함.        
                if ($("#co_popupContainer").hasClass('mobile')) { //모바일면  
                    setHeight();
                }
                else {
                    $('.main_container').css('overflow', 'auto');
                }                
            }
        });
    };
    /*
    this.setKeyWordListCallback = function (result) {
        if (result != null) {
            if ($(result).length > 0) {
                var dataList = "<h4 >주제어 검색</h4> <ul>";
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
            else {

            }
        }
    };
    */
    
};
