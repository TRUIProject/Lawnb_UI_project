$(document).ready(function () {

    // 페이지 이동
    goToPage = function (pageNo) {

        //-- mobile view 페이지 이동 시 localstorage 파라미터 저장 --//
        if (checkMobile()) {

            if (localStorage.getItem("sViewMobileList") != null) {
                if (JSON.parse(localStorage.getItem("sViewMobileList")).length > 0) {
                    var currIdx = (localStorage.getItem("currIdx") * 1 == null || localStorage.getItem("currIdx") * 1 == "") ? 0 : localStorage.getItem("currIdx") * 1;
                    var sViewMobileList = JSON.parse(localStorage.getItem("sViewMobileList"));

                    if (typeof (sViewMobileList[currIdx]["addInfoListCheck"]) != "undefined"
                        && typeof (sViewMobileList[currIdx]["addInfoLawListCheck"]) != "undefined") 
                    {

                        if (sViewMobileList[currIdx]["addInfoListCheck"] == "Y") {
                            sViewMobileList[currIdx]["addInfoListPage"] = pageNo;

                            if (parseInt(sViewMobileList[currIdx]["addInfoListPageSize"]) != 10) {
                                $('#sList').val(sViewMobileList[currIdx]["addInfoListPageSize"]);
                            }
                        }
                        else if (sViewMobileList[currIdx]["addInfoLawListCheck"] == "Y") {
                            sViewMobileList[currIdx]["addInfoLawListPage"] = pageNo;

                            if (parseInt(sViewMobileList[currIdx]["addInfoLawListPageSize"]) != 10) {
                                $('#sList').val(sViewMobileList[currIdx]["addInfoLawListPageSize"]);
                            }
                        }

                        localStorage.setItem("sViewMobileList", JSON.stringify(sViewMobileList));
                    }
                }
            }
        }


        if ($("#lbCol").val() == "C000") {
            var scourtChk = "11111111";
            if ($('#selType3').length > 0) {
                scourtChk = "";
                $("input[name=cType3]:checkbox").each(function () {
                    if (this.checked) {
                        scourtChk += "1";
                    }
                    else {
                        scourtChk += "0";
                    }
                });

                if (scourtChk != "") {
                    if (scourtChk.indexOf("1") < 0) {
                        scourtChk = scourtChk.replace(/0/g, '1');
                    }
                }
            }

            var selSListLawHis = $("#sListLawHis").children('option:selected').val();
            if (typeof (selSListLawHis) != 'undefined' && $("#lbTid").val().substring(0, 4) != "P000") {
                view.showAdditionList($("#lbTid").val() + '|' + $("#sListLawHis").children('option:selected').val() + '|' + scourtChk, '2', $("#lbCol").val(), pageNo, $('#sList').val());
            }
            else {
                view.showAdditionList($("#lbTid").val(), '2', $("#lbCol").val(), pageNo, $('#sList').val());
            }            
        }

        else if ($("#lbCode").val() == "D001" || $("#lbCode").val() == "D003")
        {
            if ($("#hdnSword").length > 0) {
                if ($("#hdnSword").val() != "") {
                    doc.getKeyWordList($("#hdnSword").val(), pageNo, $('#sList').val());
                }
                else {
                    view.showAdditionList($("#lbTid").val(), '2', $("#lbCol").val(), pageNo, $('#sList').val());
                }
            }
            else {
                view.showAdditionList($("#lbTid").val(), '2', $("#lbCol").val(), pageNo, $('#sList').val());
            }            
        }
        else {
        //!-- mobile view 페이지 이동 시 localstorage 파라미터 저장 --//
            view.showAdditionList($("#lbTid").val(), '2', $("#lbCol").val(), pageNo, $('#sList').val());
        }

        //위로 보내기        
        //$('.main_container').scrollTop(0);
    };

    // 리스트 제어하기
    $(document).on('change', '#sListChecker', function () {

        //-- mobile view 페이지 이동 시 localstorage 파라미터 저장 --//
        if (checkMobile()) {

            if (localStorage.getItem("sViewMobileList") != null) {
                if (JSON.parse(localStorage.getItem("sViewMobileList")).length > 0) {
                    var currIdx = (localStorage.getItem("currIdx") * 1 == null || localStorage.getItem("currIdx") * 1 == "") ? 0 : localStorage.getItem("currIdx") * 1;
                    var sViewMobileList = JSON.parse(localStorage.getItem("sViewMobileList"));

                    if (typeof (sViewMobileList[currIdx]["addInfoListCheck"]) != "undefined"
                        && typeof (sViewMobileList[currIdx]["addInfoLawListCheck"]) != "undefined") 
                    {
                        if (sViewMobileList[currIdx]["addInfoListCheck"] == "Y") {
                            sViewMobileList[currIdx]["addInfoListPage"] = 1;
                            sViewMobileList[currIdx]["addInfoListPageSize"] = $(this).children('option:selected').val();
                        }
                        else if (sViewMobileList[currIdx]["addInfoLawListCheck"] == "Y") {
                            sViewMobileList[currIdx]["addInfoLawListPage"] = 1;
                            sViewMobileList[currIdx]["addInfoLawListPageSize"] = $(this).children('option:selected').val();
                        }

                        localStorage.setItem("sViewMobileList", JSON.stringify(sViewMobileList));
                    }
                }
            }
        }
        //!-- mobile view 페이지 이동 시 localstorage 파라미터 저장 --//        

        if ($("#divOrgView").length <= 0) {
            $('#sList').val($(this).children('option:selected').val());

            if ($("#lbCol").val() == "C000") {
                if ($("#lbCode").val() == "N000") {
                    view.showAdditionList($("#lbTid").val(), '2', $("#lbCol").val(), '1', $('#sList').val());
                }
                else {
                    var scourtChk = "11111111";
                    if ($('#selType3').length > 0) {
                        scourtChk = "";
                        $("input[name=cType3]:checkbox").each(function () {
                            if (this.checked) {
                                scourtChk += "1";
                            }
                            else {
                                scourtChk += "0";
                            }
                        });

                        if (scourtChk != "") {
                            if (scourtChk.indexOf("1") < 0) {
                                scourtChk = scourtChk.replace(/0/g, '1');
                            }
                        }
                        view.showAdditionList($("#lbTid").val() + '|' + $("#sListLawHis").children('option:selected').val() + '|' + scourtChk, '2', $("#lbCol").val(), '1', $('#sList').val());
                    }
                    else {
                        view.showAdditionList($("#lbTid").val(), '2', $("#lbCol").val(), '1', $('#sList').val());
                    }                    
                }                
            }
            else if ($("#lbCode").val() == "D001" || $("#lbCode").val() == "D003") {                
                if ($("#hdnSword").length > 0) {
                    if ($("#hdnSword").val() != "") {
                        doc.getKeyWordList($("#hdnSword").val(), 1, $('#sList').val());
                    }
                    else {
                        view.showAdditionList($("#lbTid").val(), '2', $("#lbCol").val(), '1', $('#sList').val());
                    }
                }
                else {
                    view.showAdditionList($("#lbTid").val(), '2', $("#lbCol").val(), '1', $('#sList').val());
                }
            }
            else
            {
                view.showAdditionList($("#lbTid").val(), '2', $("#lbCol").val(), '1', $('#sList').val());
            }
        }
    });

    if ($("marks").length > 0) {
        if ($('marks').hasClass('nomark')) { } else {
            $('marks').each(function (index) {
                $(this).attr("id", "mrk" + index.toString());
            });
        }
    }

    $('#view_content').find('.icon-file_hwp').parent('a').hide();

    chkCat_A = function (d) {
        if ($("#cType" + d + "_a").prop("checked")) {
            $("input[name=cType" + d + "]").prop("checked", true);
        } else {
            $("input[name=cType" + d + "]").prop("checked", false);
        }
        if ($('#selType3').length > 0) {
            //$('#selType3').html("<option>법원등급 선택</option>");
            $('#selType3').html("<option>전체</option>");
        }
        if ($('#selType4').length > 0) {
            if ($("#sCode").val() == "I001") {
                $('#selType4').html("<option>전체</option>");
            }
        }

        var colCode = $("#sCode").val();
        if (colCode == "L007") {
            treaty.setCategoryType();
        }
    };

    chkCat = function (d) {
        var isAllchk = true;
        var selName = "";        
        var lbCol = $("#lbCol").val();

        $("input[name=cType" + d + "]:checkbox").each(function () {
            if (!this.checked) { isAllchk = false; }
            if (lbCol == "C000") {
                if ($('#selType3').length > 0 && d == "3") {
                    if (this.checked) { selName += $(this).val() + ", "; }
                }
            } 
        });
        $("#cType" + d + "_a").prop("checked", isAllchk);

        if (lbCol == "C000") {
            if ($('#selType3').length > 0 && d == "3") {                               
                if (isAllchk) {
                    $('#selType3').html("<option>전체</option>");
                }
                else {                    
                    if (selName == "") { $('#selType3').html("<option>전체</option>"); }
                    else { selName = selName.substring(0, selName.length - 2); $('#selType3').html("<option>" + selName + "</option>"); }
                }
            }
        }
    };

    var expanded = false, subexpanded = false;
    showCheckboxesAnother = function (ob) {
        if (ob == "checkboxesAnother") {
            if (!expanded) {
                $("#" + ob).show();
                expanded = true;
            } else {
                $("#" + ob).hide();
                expanded = false;
            }
        } else {
            if (!subexpanded) {
                $("#" + ob).show();
                subexpanded = true;
            } else {
                $("#" + ob).hide();
                subexpanded = false;
            }
        }
    };

});

var view = new function () {
    var viewParams = null;
    this.init = function (data) {
        viewParams = data;
        

        if (typeof (isHighlightMemo_) != "undefined") {
            if (!isHighlightMemo_) {
                contentHighlight('');
            }
        } 

    };

    this.showSubContent = function (s) { 
        getContentSubView(viewParams.viewUrl, s);
        if ($("#co_popupContainer").has('.mobile') && document.body.clientWidth < 500) {
            $('.left_container').removeClass('slide_mov ').removeClass('add_border ');
            $('#bg_screen').hide();
            $("html").css("overflow-y", "auto");
            $('html').scrollTop(0);
        } else {
            $('.main_container').css('overflow', 'auto');
            $('.main_container').scrollTop(0);
        }
    };

    this.showAdditionContent = function (s, t, c) {
        $("#lbTid").val(s);
        getContentAdditionView(viewParams.aUrl, s, t, c);
    };

    this.showAdditionList = function (s, t, c, pg, li) {
        getContentAdditionList(viewParams.aUrl, s, t, c, pg, li);
    };


    // 타겟 URL
    this.getTargetUrl = function () {
        return viewParams.viewUrl;
    };

    // 프리뷰 url
    this.getViewUrl = function () {
        return (viewParams.previewUrl == null) ? "" : viewParams.previewUrl;
    };

    // 도서내검색url
    this.getBookFindUrl = function () {
        return viewParams.bookUrl;
    };

    // 리얼 네임
    this.getFileRealName = function () {
        return (viewParams.realFileName == null) ? "" : viewParams.realFileName;
    };

    this.setFileRealName = function (fn) {
        if (viewParams.realFileName != null) { viewParams.realFileName = fn; }
    };

    this.showLeftList = function (s, n) {
        if (isJoView == 'N') {
            getContentLeftView(viewParams.viewUrl, s);
            isJoView = 'Y';
        }
        if (n == 'H') {
            $('#joList_').hide();
            $('#hisList_').show();
            $('#jo_left_1').addClass('this_page');
            $('#jo_left_2').removeClass('this_page');
        }
        else {
            $('#joList_').show();
            $('#hisList_').hide();
            $('#jo_left_2').addClass('this_page');
            $('#jo_left_1').removeClass('this_page');
        }


        setHeight();
    };

    this.goView = function (n) {
        getContentSubView(viewParams.viewUrl, $("#lbDid").val() + '_' + n + '_' + $("#lbAdate").val());
        setTimeout(function () { view.changeHisList(n); }, 100);
        setTimeout(function () { view.showAdditionContent("L000" + $("#lbLid").val() + '|' + n, '0', ''); }, 100);
    };

    this.changeHisList = function (n) {
        getContentLeftHisView(viewParams.viewUrl, 'L000' + $("#lbLid").val() + '_R5' + '_' + n);
    };

    this.showRefData = function (s, d) {
        getContentLawRefView(viewParams.refUrl, s, d);
    };

    this.showMapView = function (s) {
        getContentMapView(viewParams.viewUrl, ((s.substring(0, 4) == 'L006') ? s : (s.substring(0, 4) == 'L008') ? s : 'L000' + s));
    };

    this.showReContentView = function () {
        if ($('#lbCode').length > 0) {
            if ($('#lbCode').val() == "I002") {
                $('#result_tab>ul>li').each(function (index) {
                    if ($(this).hasClass('this-page')) {
                        $("#pdf_view").show();
                        $('.contentsDiv').hide();
                        $('.contentsDiv').eq(index).show();
                    }
                });
            }
        }
    };

    this.pdfView = function () {

        // 특허심판례, 결정례, 유권해석 pdf 파일
        $(document).on('click', '#result_tab>ul>li', function () {

            if ($(".main_container #pdf_view").length > 0) {
                $('.main_container div embed').removeAttr("id");
            } else {
                $('.main_container div embed').attr("id", "pdf_view");
            }

            $('#result_tab>ul>li').removeClass('this-page');
            $(this).addClass('this-page');
            var idx = $("#result_tab>ul>li").index($(this));
            if (idx == 1) {
                $('.main_container').css('overflow', 'auto');
            } else {
                $('.main_container').css('overflow', 'hidden');
            }
            $('.contentsDiv').hide();
            $('.contentsDiv').eq(idx).show();
            setHeight();
        });
    };

    // 관련정보 PDF
    this.elc_pdf_view = function (n) {
        $("#title_result_tab").show();
        $("#title_result_tab span").text(n);
        $("#title_result_tab .btn_close").show();
        $("#title_result_tab .btn_reapprea").hide();
        $("#result_area").hide();
        $("#pdf_view_etc").show().addClass('slide_mov_bottom');
        $("#view_content").hide();
        $("#pdf_view_other").height($('.main_container').outerHeight() - 65);

        setTimeout(function () {

            $("#result_area").addClass('slide_mov_bottom');
        }, 200);
    };


    this.pdfViewBinding = function (d, s, data) {
        $("#title_result_tab>div.btn_option_outer>div.btn_close").trigger("click");
        var sTitle = $(".tree ol li[id='j" + data + "']").text();

        if (s == "F001") {
            $(".title_area #mainTitle").text(sTitle);
            view.setFileRealName(sTitle);
        }

        if (s != "F001") {
            view.pdfPreNextPage(d, s, data);
        }
        else {
            view.pdfOrginalFileDown(s, data);
            view.showAdditionContent($('#lbDid').val().split('_')[0] + '_' + data, '0', '');
        }
        $('li').removeClass('_this');
        if (s == "D022") {
            var pg = data.split('_')[1].replace(/.pdf/g, '');
            if (pg.length == 1) { pg = "j100" + pg; }
            else if (pg.length == 2) { pg = "j10" + pg; }
            else if (pg.length == 3) { pg = "j1" + pg; }
            if ($("#" + pg).length > 0) {
                $('.tree').find("#" + pg).addClass('_this');
            }

        }
        pdfAjaxOpen(d, s, data);

        if ($("#co_popupContainer").hasClass('mobile') && document.body.clientWidth < 500) {
            $('.left_container').removeClass('slide_mov ').removeClass('add_border ');
            $('#bg_screen').hide();
            $("html").css("overflow-y", "auto");
        }
    };

    this.pdfOrginalFileDown = function (s, data) {

        var fileDownHtml = "";
        //fileDownHtml += "<i class=\"icon-file_hwp\" data-icon=\"&#xe914;\" onclick=\"view.viewFileDown('" + s + "', '" + (s == 'F001' ? $(".title_area #mainTitle").text() : data) + "', 'hwp')\"></i> ";
        fileDownHtml += "<i class=\"icon-file_hwp\" data-icon=\"&#xe914;\" onclick=\"view.viewFileDown('" + s + "', '" + data + "', 'hwp')\"></i> ";
        if (s != "F001" && s != "N005") {
            fileDownHtml += "<i class=\"icon-file_excel\" data-icon=\"&#xeae2;\" onclick=\"view.viewFileDown('" + s + "', '" + data + "', 'doc')\"></i> ";
            fileDownHtml += "<i class=\"icon-file_word\" data-icon=\"&#xeae1;\" onclick=\"view.viewFileDown('" + s + "', '" + data + "', 'xls')\"></i>";
        }
        fileDownHtml += "<i class=\"icon-file_pdf\" data-icon=\"&#xeadf;\" onclick=\"view.viewFileDown('" + s + "', '" + data + "', 'pdf')\"></i>";
        //fileDownHtml += "<i class=\"icon-file_pdf\" data-icon=\"&#xeadf;\" onclick=\"view.viewFileDown('" + s + "', '" + (s == 'F001' ? $(".title_area #mainTitle").text() : data) + "', 'pdf')\"></i>";

        $("#divFileDown").html(fileDownHtml);
    };

    this.pdfPreNextPage = function (d, s, data) {

        // data ex) "12000199/12000199_1.PDF"
        // data에 첫페이지 정보, 마지막페이지정보, 현재페이지정보 3개가 담겨있어야됨.

        var pageHtml = "";
        var prePage = "", nextPage = "";
        var filePath = "", fileExt = "", fileNum, filePageNum;
        var pathIndex, extIndex;
        var totalPage = parseInt(viewParams.totalpage);

        // 이전페이지
        pathIndex = data.indexOf("_");
        extIndex = data.indexOf(".");

        // 페이지 넘버앞에 0이 붙어서 숫자로 인식되어 페이지 정보에서 0이 제외될 때
        var _strNum = data.substring(pathIndex + 1, extIndex);
        var _zeroCnt = 0;
        var _numCnt = 0;
        for (var i = 0; _strNum.length; i++) {
            if (_strNum.charAt(i) == "0")
                _zeroCnt++;
            else
                break;
        }
        _numCnt = _strNum.length - _zeroCnt;
        filePageNum = parseInt(data.substring(pathIndex + 1, extIndex));
        fileNum = (filePageNum > 1) ? filePageNum - 1 : 1;
        if (_zeroCnt > 0) {
            var zeroStr = "";
            var numChg = 0;
            if (_numCnt < fileNum.toString().length)
                numChg = -1;
            else if (_numCnt > fileNum.toString().length)
                numChg = 1;

            for (var m = 0; m < (_zeroCnt + numChg); m++) {
                zeroStr += "0";
            }
            fileNum = zeroStr + fileNum;
        }
        filePath = data.substring(0, pathIndex + 1);
        fileExt = data.substring(extIndex, data.length);
        prePage = filePath + fileNum.toString() + fileExt;

        // 다음페이지
        fileNum = filePageNum + 1;
        fileNum = (fileNum >= totalPage) ? totalPage : fileNum;
        if (_zeroCnt > 0) {
            var zeroStr = "";
            var numChg = 0;
            if (_numCnt < fileNum.toString().length)
                numChg = -1;
            else if (_numCnt > fileNum.toString().length)
                numChg = 1;

            for (var m = 0; m < (_zeroCnt + numChg); m++) {
                zeroStr += "0";
            }
            fileNum = zeroStr + fileNum;
        }
        nextPage = filePath + fileNum.toString() + fileExt;

        pageHtml += "<div class=\"btn_group\" onclick=\"javascript:view.pdfViewBinding('" + d + "','" + s + "','" + prePage + "')\"><span class=\"btn\" ><i class=\"icon-2\" data-icon=\"&#xe901;\"></i>이전페이지</span></div>";
        pageHtml += "<div class=\"btn_group\" onclick=\"javascript:view.pdfViewBinding('" + d + "','" + s + "','" + nextPage + "')\"><span class=\"btn\">다음페이지<i class=\"icon-2\" data-icon=\"&#xe900;\"></i></span></div>";

        $("#div_pageHtml").html(pageHtml);
    };


    this.viewRefDataConten = function () {
        if ($('#right_control').css("display") == "block") {
            $(".right_container").removeClass('add_border');
            $(".right_container").addClass('slide_mov_right');
            $(".right_container").removeClass('slide_mov');
            $('#right_control').removeClass('_up');
        }


        if (!$("#co_popupContainer").hasClass('mobile')) { //모바일아니면              
            $("#title_result_tab .btn_reapprea").hide();
            $("#title_result_tab").show();
        }
        $("#title_result_tab .btn_close").show();

        $("#result_area").show();
        $("#pdf_view").hide();
        $("#view_content").hide();

        var sCode = $("#lbDid").val().substring(0, 4);
        if (sCode == "C000")
        {
            $("#view_sub_content").hide();
        }        
        setTimeout(function () {
            $("#result_area").addClass('slide_mov_bottom');
        }, 200);
    };

    this.viewSearchResBookList = function () {
        $("#title_result_tab .btn_close").show();
        $("#title_result_tab .btn_reapprea").hide();
        $("#title_result_tab").show();
        $("#result_area").show();

        setTimeout(function () {
            $("#result_area").addClass('slide_mov_bottom');
            $("#pdf_view").css('padding-top', '37px');
        }, 200);
    };

    this.viewFileDown = function (s, data, ext) {

        var dataParams = "";
        var url = "/AjaxInfo/ContentFileExist";
        data = unescape(data);
        dataParams = { "sCode": s, "fileName": data, "ext": ext };

        getViewFileDown(url, dataParams);
    };

    this.setViewtestContent = function () {
        if (uCode != "" && uCode != null) {
            var s = $("#lbDid").val();
            var t = $(".title_area>h2").text().replace("[", "【").replace("]", "】");
            var st = $(".title_area>div.meta_area").text();
            if (st == "") { st = $(".title_area>div.list_meta").text(); }
            if (s.substr(0, 4) == 'P000') {
                st = $("#lawyer_info_tit").text();
                if ($(".title_area>h2>.lawyer_name_h2").length) {
                    t = $(".title_area>h2>.lawyer_name_h2").text().replace("[", "【").replace("]", "】");
                }
            } else if (s.substr(0, 4) == 'D021') {
                st = $("#j" + s.split('|')[1] + ">a").text();
            } else if (s.substr(0, 4) == 'I001') {
                st = $(".title_area>div.case_nick").text();
                if (st != "") { st = "<i class='icon-' data-icon='&#xe901;'></i>" + st + "<i class='icon-' data-icon='&#xe900;'></i>"; }
            } else if (s.substr(0, 4) == "J001") {
                t = $("#hdnTitle").val();
                st = $("#hdnSubTitle").val() + " " + $("#hdnPubDate").val();
            }
            else if (s.substr(0, 4) == "C000") {
                if ($(".title_area>div.case_nick>i").length > 0) {
                    st = $(".title_area>div.case_nick").html();                    
                }             
            }

            //console.log(st);
            if (s != "") {
                var sInfo = new Object();
                sInfo.did = s;
                sInfo.title = t;
                sInfo.subtitle = st;
                storage.setViewLatest(sInfo);
            }
        }

        //-- mobile view page에서 추가 실행되야되는 함수 --//
        if (checkMobile()) {
            if (localStorage.getItem("sViewMobileList") != null) {
                if (JSON.parse(localStorage.getItem("sViewMobileList")).length > 0) {
                    var currIdx = (localStorage.getItem("currIdx") * 1 == null || localStorage.getItem("currIdx") * 1 == "") ? 0 : localStorage.getItem("currIdx") * 1;
                    var sViewMobileList = JSON.parse(localStorage.getItem("sViewMobileList"));

                    if (typeof (sViewMobileList[currIdx]["addInfoListCheck"]) != "undefined"
                        && typeof (sViewMobileList[currIdx]["addInfoLawListCheck"]) != "undefined") {

                        if (sViewMobileList[currIdx]["addInfoLawListCheck"] == "Y") {
                            view.addInfoLawList(sViewMobileList[currIdx]["addInfoLawListDid"], sViewMobileList[currIdx]["addInfoLawListCode"]);
                            if (parseInt(sViewMobileList[currIdx]["addInfoLawListPageSize"]) != 10 || parseInt(sViewMobileList[currIdx]["addInfoLawListPage"]) > 1) {
                                goToPage(sViewMobileList[currIdx]["addInfoLawListPage"]);
                            }
                        }

                        if (sViewMobileList[currIdx]["addInfoListCheck"] == "Y") {
                            view.addInfoList(sViewMobileList[currIdx]["addInfoListCode"]);
                            if (parseInt(sViewMobileList[currIdx]["addInfoListPageSize"]) != 10 || parseInt(sViewMobileList[currIdx]["addInfoListPage"]) > 1) {
                                goToPage(sViewMobileList[currIdx]["addInfoListPage"]);
                            }
                        }
                    }
                }
            }
        }
        //!-- mobile view page에서 추가 실행되야되는 함수 --//
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

    // 미리보기
    this.showPreview = function (dId) {
        GAEvent("Preview?sid=" + dId);
        var url = viewParams.previewUrl;
        /*
        if (dId.split('|').length == 4 && (dId.split('|')[0].substring(0, 4) == "L000" || dId.split('|')[0].substring(0, 4) == "L006") )
        {
            $(".comment a").removeClass("_this");           
            $("." + dId.split('|')[0]).addClass("_this");
        }*/
        getPreView(url, dId);
    };

    //추가정보 보기 일반 컨텐츠
    this.addInfoList = function (col) {

        if ($("#lbCode").val() == "J001") {
            GAEvent("TransactionLayer", "?did=" + $("#lbDid").val());
        }

        if ($("#lbCode").val() == "D001" || $("#lbCode").val() == "D003") {
            if ($("#hdnSword").length > 0) {
                $("#hdnSword").val("");
            }            
        }
        if ($("#sList").length > 0) {
            $("#sList").val("10");
        }

        //-- mobile view 페이지 이동 시 localstorage 파라미터 저장 --//
        if (checkMobile()) {
            // view.addInfoList를 제외한 다른 함수 localstorage 파라미터 초기화
            // view.addInfoList의 localstorage 파라미터 재 정의
            if (localStorage.getItem("sViewMobileList") != null) {
                if (JSON.parse(localStorage.getItem("sViewMobileList")).length > 0) {
                    var currIdx = (localStorage.getItem("currIdx") * 1 == null || localStorage.getItem("currIdx") * 1 == "") ? 0 : localStorage.getItem("currIdx") * 1;
                    var sViewMobileList = JSON.parse(localStorage.getItem("sViewMobileList"));

                    //sViewMobileList[currIdx]["addInfoLawListCheck"] = "N";
                    //sViewMobileList[currIdx]["addInfoLawListDid"] = "";
                    //sViewMobileList[currIdx]["addInfoLawListCode"] = "";
                    sViewMobileList[currIdx]["addInfoLawListPage"] = 1;
                    sViewMobileList[currIdx]["addInfoLawListPageSize"] = 10;

                    sViewMobileList[currIdx]["addInfoListCheck"] = "Y";
                    sViewMobileList[currIdx]["addInfoListCode"] = col;
                    //sViewMobileList[currIdx]["addInfoListPage"] = 1;
                    //sViewMobileList[currIdx]["addInfoListPageSize"] = 10;

                    localStorage.setItem("sViewMobileList", JSON.stringify(sViewMobileList));
                }
            }
        }
        //!-- mobile view 페이지 이동 시 localstorage 파라미터 저장 --//

        if (typeof (cInnerHtml) == 'undefined') {

        } else {
            if (cInnerHtml != "") {
                $('#result_area').html(cInnerHtml);
            }
        }
        $("#lbCol").val(col);
        // 관련정보 컨텐츠 카운트
        view.showAdditionContent($("#lbTid").val(), '1', col);

        // 관련정보 리스트
        setTimeout(function () {
            view.showAdditionList($("#lbTid").val(), '2', col, '1', '10');
            view.viewRefDataConten();
        }, 100);

        // 본문PDF 파일 아니고 모바일 때 스크롤 생기게 함.        
        if ($("#co_popupContainer").hasClass('mobile')) { //모바일면  
            setHeight();
        }
        else {
            $('.main_container').css('overflow', 'auto');
        }

        hidePrintLayer("open");
    };

    this.addInfoByMobile = function () {
        var h = "";
        if ($('#addInfoDiv>section>ul>li>a').length > 0) {
            h = $('#addInfoDiv>section>ul>li>a').attr("href");
        } else if ($('#addInfoDiv>section>dl>dd>a').length > 0) {
            h = $('#addInfoDiv>section>dl>dd>a').attr("href");
        }
        if (h != '') {
            var col = h.split('=')[1].substr(0, 4);
            var lbCode = $("#lbCode").val();
            if (lbCode == "D001" || lbCode == "D003" || (lbCode == "D011" && col == "D011")) {
                var cnt = $("#addInfoDiv section").length;
                if (cnt > 1) {
                }
                else {
                    col = col + "_C";
                }
            }

            if (lbCode == "N005" && col == "N005") {
                col = col + "_M";
            }

            if (lbCode == "N006" && col == "N006") {
                col = col + "_W";
            }

            //col = col.indexOf("D0") == 0 ? "D000" : col;
            //col = col.indexOf("D0") == 0 ? "D001_C" : col;
            if (col == "I002" || col == "I003") { col = "I000"; }
            if (col == "J001" || col == "D021" ) {
                $("#addInfoDiv>section").each(function (index, element) {
                    if ($('#addInfoDiv>section:eq(' + index + ')>ul>li>a').length > 0) {
                        h = $('#addInfoDiv>section:eq(' + index + ')>ul>li>a').attr("href");
                        var col1 = h.split('=')[1].substr(0, 4);
                        if (col1.substring(0, 3) == "D00" || col1 == "I002" || col1 == "I003") {
                            if (col1.substring(0, 3) == "D00") { col = "D000"; }
                            else { col = "I000"; }
                            return false;
                        }
                    }
                });
            }
            if (col.length == 4 && (col.substring(0, 3) == "D00" || col == "D011")) {
                col = "D000";
            }
            else if (lbCode == "J001") {
                col = "P000";
            }

            if ((col == "J001" && lbCode == "P000") || col == "J001") {
                col = "D021";
            }

            view.addInfoList(col);
        }
    };

    this.addDirByMobile = function () {
        $('#title_result_tab').show();
        $('#result_area').show();

        setHeight();
    };



    this.addCaseSummByMobile = function () {
    
        $("#result_area").empty();
        $('#result_area').append("<div class='list'></div>"); // 도서내검색때문에 Jenna 2020.08.13
        $("#result_area").append($('.right_container>section').first().html());
        $('#result_area').show();
        
        if (checkMobile()) { //모바일면  
            $('#result_area').removeClass('popup_mov_area');
            $("#result_area").addClass('pdf_index_popup');

            $('.mview_tab_area span').removeClass('_this');
            $('.mview_tab_area span').eq(1).addClass('_this');
        }
        setTimeout(function () { $('#bg_screen').hide(); }, 100);



    };
   

    //추가정보 보기 법단위
    this.addInfoLawList = function (tid, col) {
        //-- mobile view 페이지 이동 시 localstorage 파라미터 저장 --//
        var subCol = '';
        if (col.indexOf('_') > 0) {
            subCol = col.split('_')[1];
            col = col.split('_')[0];
        }

        if (checkMobile()) {
            // view.addInfoLawList를 제외한 다른 함수 localstorage 파라미터 초기화
            // view.addInfoLawList의 localstorage 파라미터 재 정의
            if (localStorage.getItem("sViewMobileList") != null) {
                if (JSON.parse(localStorage.getItem("sViewMobileList")).length > 0) {
                    var currIdx = (localStorage.getItem("currIdx") * 1 == null || localStorage.getItem("currIdx") * 1 == "") ? 0 : localStorage.getItem("currIdx") * 1;
                    var sViewMobileList = JSON.parse(localStorage.getItem("sViewMobileList"));

                    sViewMobileList[currIdx]["addInfoListCheck"] = "N";
                    sViewMobileList[currIdx]["addInfoListCode"] = "";
                    sViewMobileList[currIdx]["addInfoListPage"] = 1;
                    sViewMobileList[currIdx]["addInfoListPageSize"] = 10;

                    sViewMobileList[currIdx]["addInfoLawListCheck"] = "Y";
                    sViewMobileList[currIdx]["addInfoLawListDid"] = tid;
                    sViewMobileList[currIdx]["addInfoLawListCode"] = col;
                    //sViewMobileList[currIdx]["addInfoLawListPage"] = 1;
                    //sViewMobileList[currIdx]["addInfoLawListPageSize"] = 10;

                    localStorage.setItem("sViewMobileList", JSON.stringify(sViewMobileList));
                }
            }
        }
        //!-- mobile view 페이지 이동 시 localstorage 파라미터 저장 --//

        $("div.result_tab").show();
        view.viewRefDataConten();
        $("#lbCol").val(col);
        $("#lbTid").val(tid);

        // 각 컨텐츠 카운트
        view.showAdditionContent(tid, '1', col);

        //// 각 컨텐츠 리스트
        //view.showAdditionList(tid, '2', col, '1', '10');
         
        // 각 컨텐츠 리스트 - 20201215 헌재 수정 주석처리
        if ($("#hdnRefIconType").length > 0) {
            if ($("#hdnRefIconType").val() == "헌재") {
                view.showAdditionList($("#lbTid").val() + '|0|00100000', '2', col, '1', '10');
            }
            else {
                view.showAdditionList(tid, '2', col, '1', '10');
            }
        }
        else {
            view.showAdditionList(tid, '2', col, '1', '10');
        }
        
        //위로 보내기
        //$('html').scrollTop(0);
        $('.main_container').scrollTop(0);
        hidePrintLayer("open");
    };

    var tidBylaw = '';
    this.addBottomList = function (tid, col, layer) {
        jKind = layer;
        if (tid == '') {
            if (tidBylaw != '') { tid = tidBylaw; }
            else if ($("#lbTid").length > 0) { tid = $("#lbTid").val(); }
            tidBylaw = '';
        }
        if (col == "AHNEX" || col == "FINE") {
            tidBylaw = tid;
            tid = $("#lbDid").val() + '|' + tid.split('|')[1];
        }
        view.showAdditionContent(tid, '3', col);
    };

    this.moveToByView = function () {
        if ($('#lbDid').length > 0) {
            if ($('#lbDid').val().length >= 4) {
                if ($('#lbDid').val().substr(0, 4) == 'L000') {
                    if ($("#lbTid").val().indexOf('|') > 0) {
                        setTimeout(function () { view.showMainView("#P" + $("#lbTid").val().split('|')[1]); }, 500);
                    }
                }
            }
        }
    };

    this.checkToTitle = function () {
        if ($('#lbDid').length > 0) {
            if ($('#lbDid').val().length >= 4) {
                if ($('#lbDid').val().substr(0, 4) == 'L000') {
                    if ($("#lbTid").val().indexOf('|') > 0) {
                        var jo_ = $("#lbTid").val().split('|')[1];
                        if (jo_ == "0") {
                            $("#title_result_tab>div:first-child").text(' 관련정보');
                        }
                        else {
                            $("#title_result_tab>div:first-child").text('제' + (jo_.indexOf('X') > 0 ? jo_.replace('X', '조의') : jo_ + '조') + ' 관련정보');
                        }                        
                    }
                }
            }
        }
    };

    //페이지이동
    this.showMainView = function (href) {
        location.href = href;
        //event.preventDefault();
    };

    this.checkToLiViewByMobile = function (c) {
        $(".mview_tab_area span").removeClass('_this');
        $(".mview_tab_area span:eq(" + c + ")").addClass('_this');
        $("#title_result_tab>div.btn_option_outer>div.btn_close").trigger("click");
        if ($("#result_tab>ul>li").length > 0) {
            $("#result_tab>ul>li:eq(" + c + ")").trigger("click");
        }
    };


    this.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    };

    this.setInitLawArr = function () {
        localStorage.removeItem('lawRuleArr');
        localStorage.removeItem('lawRuleArr1');
        localStorage.removeItem('lawRuleArr2');
        localStorage.removeItem('lawRuleArr3');
    };
};

//---------------------------------------------------------------------------------------//
//-------------------------------  본문검색 ---------------------------------------------//
//---------------------------------------------------------------------------------------//

$(document).ready(function () {
    
    $(".btn_languagetype").click(function () {
        
        if ($(this).hasClass("disable")) {
            
            $('.inner_search_div').hide();
            $('#search_word').css('display', 'inline-block');
            $('#inner_search').css('display', 'inline-block');
                        
            setRemoveHighlight("L007");                    

            $(location).attr('href', "#view_content");            
        }
    });
});

// 본문검색 초기화
function initContentViewSearch() {

    wordIndex = 1;
    wordTotalCount = 0;
    contentViewSearchedHtmlAll = "";
    contentViewSearhedWord = "";
}

function isMobileBGScreenHide() {
    if (checkMobile()) {
        $('#bg_screen').hide();
    }
}

// 모바일 본문검색 제목고정 제거
function isMobileRemoveTitleFixed() {
    if (checkMobile()) {
        checkMobileContentSearhed = true;
        $(".title_area").removeClass("topfixed");
    }
}

// 본문검색 컨텐츠 구분
function contentViewSearchType(sCode) {
    if ($("#templeteCont").length > 0) {
        $("#templeteCont").html($("#view_content").html());

        if (typeof (isHigh) != "undefined") {
            isHigh = false;
        } 

    }

    var regExpTxt = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;

    
    var searchWord = $("#txtContendViewSearchWord").val().trim();
    if (searchWord == ""
        || typeof (searchWord) == "undefined"
        || searchWord == null)
    {
        alert("검색어를 입력해 주세요.");
        return;
    }
    else if (searchWord.length < 2) {
        alert("검색어는 두자 이상이어야 합니다.");
        $('.btn_inner_search_get').addClass('_disabled');
        return;
    }
    else if (regExpTxt.test(searchWord))
    {
        alert("특수문자는 포함할 수 없습니다.");        
        return;
    }
    else {
        if (checkMobile()) {
            
        }
        initContentViewSearch();
        if ($("highlight").length > 0) {
            $("highlight").contents().unwrap();
        }

        if (sCode == "L000" || sCode == "L006" || sCode == "L008") {
            setContentViewHighlight_law(searchWord);
        }
        else if (sCode == "L007" || sCode == "R10") {
            setContentViewHighlight_other(searchWord, sCode);
        }
        else {
            setContentViewHighlight_nomal(searchWord, sCode);
        }
    }
}

var markingChecked = true;

var wordIndex = 1;
var wordTotalCount = 0;

var contentViewSearchedHtmlAll = "";
var contentViewSearhedWord = "";

var e_wordIndex = 0;
var k_wordIndex = 0;
var e_wordTotalCount = 0;
var k_wordTotalCount = 0;
var checkMobileContentSearhed = false;

// 일반 컨텐츠
function setContentViewHighlight_nomal(_word, sCode) {
    wordTotalCount = 0;
    contentViewSearhedWord = _word;

    var divText = $("#view_content").text();
    var _regExp = new RegExp(_word, 'gi');
    var wordCount = (divText.match(_regExp) || []).length;

    if (wordCount != null) {
        if (wordCount > 0) {
            wordTotalCount = wordCount;
        }
    }

    if (wordTotalCount == 0) {
        alert("검색 결과가 존재하지 않습니다.");
    }
    else {
        checkContentViewMarking();
       
        var _regExp = new RegExp(_word, 'gi');
        var contHtml = $("#view_content").html();
        //var contHtmlArr = contHtml.split(_regExp);
        //var totalHtml = "";

        //for (var i = 0; i <= wordCount; i++) {
        //    if (i == wordCount) {
        //        totalHtml += contHtmlArr[i];
        //    }
        //    else {
        //        totalHtml += contHtmlArr[i] + "<highlight class='inner_con searchedword'>" + $("#view_content").text().match(_regExp)[i] + "</highlight>";
        //    }
        //}
        //$("#view_content").empty();
        //$("#view_content").html(totalHtml);

        //Text만 highlight 추가 230920
        var element = document.getElementById("view_content");
        replace_text(element, _word, '<highlight class="inner_con searchedword">' + _word + '</highlight>');
        contHtml = $("#view_content").html();
        $("#view_content").html(contHtml.replaceAll("&lt;highlight class=\"inner_con searchedword\"&gt;" + _word + "&lt;/highlight&gt;", "<highlight class=\"inner_con searchedword\">" + _word + "</highlight>"));


        $(".searchedword").get(0).scrollIntoView();

        isMobileBGScreenHide();        
        isMobileRemoveTitleFixed();        
    }            
}

// 법령, 행정규칙
function setContentViewHighlight_law(_word) {
    wordTotalCount = 0;
    contentViewSearhedWord = _word;

    contentViewSearchedHtmlAll = "";
    $("#view_sub_content").html("");
    $("#view_content").show();
    $("#view_sub_content").hide();

    if ($("#view_content #P1").length > 0) {
        var joCount = $("#view_content .normal").length;
        for (var i = 0; i < joCount; i++) {

            var divText = $(".normal").eq(i).text();
            //태그제거 정규식 추가 230920
            divText = divText.replace(/(<([^>]+)>)/ig, "");
            var _regExp = new RegExp(_word, 'gi');
            var wordCount = (divText.match(_regExp) || []).length;

            if (wordCount != null) {
                if (wordCount > 0) {

                    wordTotalCount += wordCount;
                }
            }
        }
    }
    else {
        var divText = $("#view_content").text();
        //태그제거 정규식 추가 230920
        divText = divText.replace(/(<([^>]+)>)/ig, "");
        var _regExp = new RegExp(_word, 'gi');
        var wordCount = (divText.match(_regExp) || []).length;

        if (wordCount != null) {
            if (wordCount > 0) {
                wordTotalCount = wordCount;
            }
        }
    }    

    if ($('#pdf_view_etc').is(':visible')) { //전자관보
        $('#pdf_view_etc').hide();
        $('#title_result_tab').hide();
    }
    if ($('#pdf_view_ahnex').is(':visible')) { //별표서식 있을때 스크롤 생기게 함
        $('.main_container').css('overflow','auto');
    }

    if (wordTotalCount == 0) {
        alert("검색 결과가 존재하지 않습니다.");
        $('.btn_inner_search_get').addClass('_disabled');
    }
    else {        
        checkContentViewMarking();

        var _regExp = new RegExp(_word, 'gi');
        var contHtml = $("#view_content").html();
        //$("#view_content").html(contHtml.replace(_regExp, '<highlight class="inner_con searchedword">' + _word + '</highlight>'));

        //Text만 highlight 추가 230920
        var element = document.getElementById("view_content");
        replace_text(element, _word, '<highlight class="inner_con searchedword">' + _word + '</highlight>');
        contHtml = $("#view_content").html();
        $("#view_content").html(contHtml.replaceAll("&lt;highlight class=\"inner_con searchedword\"&gt;" + _word + "&lt;/highlight&gt;", "<highlight class=\"inner_con searchedword\">" + _word + "</highlight>"));

        $(".searchedword").get(0).scrollIntoView();

        // 모아보기 활성화
        $("#gatheringContentView").removeClass("_disabled");
        isMobileBGScreenHide();
        isMobileRemoveTitleFixed();
    }    
    //console.log(wordTotalCount);
}

//highlight func 추가 230920
function replace_exec(element, search, replace) {
    var children = element.childNodes;
    for (var i = 0, len = children.length; i < len; i++) {
        var node = children[i];
        if (node.nodeType == 1) {
            replace_exec(node, search, replace);
        } else if (node.nodeType == 3) {
            node.nodeValue = node.nodeValue.replace(search, replace);
        }
    }
}

//highlight func 추가 230920
function replace_text(element, search, replace) {
    var search = new RegExp(search, "g");
    replace_exec(element, search, replace);
}

// 법령, 행정규칙 모아보기 전 체크
function setContentViewHighlight_gatheringCheck() {
    if (!$("#gatheringContentView").hasClass("_disabled") && $("highlight").length > 0)
    {    
            setContentViewHighlight_gathering(contentViewSearhedWord); 
    }
    else {
        alert("검색 후 모아보기를 선택해주세요.");
    }
}


// 법령, 행정규칙 모아보기
function setContentViewHighlight_gathering(_word) {

    contentViewSearchedHtmlAll = "";
    $("#view_sub_content").html("");
    var joCount = $(".normal").length / 2;
    
    for (var i = 0; i < joCount; i++) {

        var divText = $(".normal").eq(i).text();
        var _regExp = new RegExp(_word, 'gi');
        var wordCount = (divText.match(_regExp) || []).length;
        var searchedHtmlEach = $(".normal").eq(i).clone().wrapAll("<div />").parent().html();
        if (wordCount != null) {
            if (wordCount > 0) {
                contentViewSearchedHtmlAll += searchedHtmlEach;                
            }
        }
    }

    $('.popup_mov_area').hide(); //관련자료 pdf관련 레이어 안보이게
    $('#title_result_tab').hide();

    var gatheringTitleHtml = "<p id=\"searchedTitle\"> 본문 내 검색결과 " + wordTotalCount + "건 <span class=\"btn_close\"></span></p>";
    contentViewSearchedHtmlAll = gatheringTitleHtml + contentViewSearchedHtmlAll;

    $("#view_sub_content").html(contentViewSearchedHtmlAll);
    $("#view_content").hide();
    setTimeout(function () { //Jenna추가
        $("#view_sub_content").show();
        $('.main_container').scrollTop(0);
    }, 100);

    //$(location).attr('href', "#searchedTitle");

    //console.log(contentViewSearchedHtmlAll);
    //console.log(wordTotalCount);
    $("#view_sub_content .btn-group").hide();
}


// 하이라이트 삭제
function setRemoveHighlight(sCode) {
    if ($("#templeteCont").length > 0) {
        if ($("#templeteCont").html().replace(/ /g, "").length > 10) { $("#view_content").html($("#templeteCont").html()); $("#templeteCont").html('');}
        if (typeof (isHigh) != "undefined") {
            isHigh = true;
            myhigh.setInitHighlight();
            myhigh.reinit();
        }
    } else {
        
        $(".main_container").scrollTop(0);
        if (sCode == "L000" || sCode == "L006") {
            $("#view_sub_content").html("");
            $("#view_sub_content").hide();
            $("#view_content").show();
            $("#gatheringContentView").addClass("_disabled");
        }

        $("highlight").contents().unwrap();
        $("#txtContendViewSearchWord").val("");

        initContentViewSearch();

        if (markingChecked) {
            if ($("markn").length > 0) {
                $("#view_content").html($("#view_content").html().replace(/<markn>/g, "<marks>").replace(/<\/markn>/g, "</marks>"));
                $(".icon-checkbox-unchecked").addClass('_checked');
            }
        }
        if (checkMobile()) {
            $('#bg_screen').show();
            checkMobileContentSearhed = false;
            $(".title_area").addClass("topfixed");
        }
    }
   
}

// 본문 검색어 이동 next
function moveNextWord() {

    if ($('.searchedword').length > 0)
    {        
        if (wordIndex == wordTotalCount) {
            //$(".searchedword").get(0).scrollIntoView();
            //console.log("위" + wordIndex);

            $(".searchedword").get(wordIndex - 1).scrollIntoView();
            wordIndex = 0;
            alert("마지막 검색결과입니다.");
        }
        else {
            //console.log("아래" + wordIndex);
            $(".searchedword").get(wordIndex).scrollIntoView();
            wordIndex += 1;
        }        
    }        
}

// 본문 검색어 이동 previous
function movePreviousWord() {
    if ($('.searchedword').length > 0)
    {        
        // 기본 검색어 이동
        if (wordIndex == 0) {
            wordIndex = 0;
            $(".searchedword").get(0).scrollIntoView();
        }
        else {
            wordIndex -= 1;
            $(".searchedword").get(wordIndex).scrollIntoView();
        }        
    }   
}

// 조약,영문법령
function setContentViewHighlight_other(_word, sCode) {

    wordTotalCount = 0;
    contentViewSearhedWord = _word;
    
    var divText = "";
    var contHtml = "";
    var selectorId = "";
    var langType = "kor";
    if (sCode == "L007") {
        if (checkMobile()) {
            if ($(".mview_tab_area span").eq(0).hasClass("_this")) {
                // 국문            
                selectorId = $("#kor_area");
                langType = "kor";
            }
            else {
                // 영문            
                selectorId = $("#eng_area");
                langType = "eng";
            }
        }
        else {
            if (!$(".btn_both_cont").hasClass("disable")) {
                // 국문/영문            
                selectorId = $("#view_content");
                langType = "mix";
            }
            else if ($(".btn_eng_cont").hasClass("disable")) {
                // 국문            
                selectorId = $("#kor_area");
                langType = "kor";
            }
            else {
                // 영문            
                selectorId = $("#eng_area");
                langType = "eng";
            }
        }        
    }
    else {
        if ($(".title_area .btn_option span").eq(0).hasClass("disable")) {
            // 영문/한글      
            selectorId = $("#view_content");
            langType = "mix";
        }
        else {
            // 영문
            selectorId = $('.main_container table tr td.case_info:even');            
            langType = "eng";
        }        
    }
    
    var _regExp = new RegExp(_word, 'gi');    
    var wordCount = (selectorId.text().match(_regExp) || []).length;

    if (wordCount != null) {
        if (wordCount > 0) {
            wordTotalCount = wordCount;
        }
    }

    if (wordTotalCount == 0) {
        alert("검색 결과가 존재하지 않습니다.");
    }
    else {
        checkContentViewMarking();
        
        var _regExp = new RegExp(_word, 'gi');
        if (sCode == "L007")
        {       
            var contHtml = "";
            var contHtmlArr = null;
            var totalHtml = "";
            if (langType == "kor") {
                // 국문
                contHtml = selectorId.html();
                selectorId.html(contHtml.replace(_regExp, '<highlight class="inner_con searchedword">' + _word + '</highlight>'));
            }
            else {
                // 그외
                contHtml = selectorId.html();
                contHtmlArr = contHtml.replace(/<(\/br|br)([^>]*)>/gi, "<entertag>").split(_regExp);
                totalHtml = "";
                for (var i = 0; i <= wordCount; i++) {
                    if (i == wordCount) {
                        totalHtml += contHtmlArr[i];
                    }
                    else {
                        totalHtml += contHtmlArr[i] + "<highlight class='inner_con searchedword'>" + selectorId.text().match(_regExp)[i] + "</highlight>";
                    }
                }                
                totalHtml = totalHtml.replace(/<(\/entertag|entertag)([^>]*)>/gi, '<br>');
                selectorId.html(totalHtml);
            }            
        }
        else
        {       
            var totalHtml = "";
            var contHtmlArr = null;
            var contHtml = "";
            if (langType == "mix") {
                // 영문/국문
                contHtml = selectorId.html();
                contHtmlArr = contHtml.replace(/<(\/br|br)([^>]*)>/gi, "<entertag>").split(_regExp);                
                for (var i = 0; i <= wordCount; i++) {
                    if (i == wordCount) {
                        totalHtml += contHtmlArr[i];
                    }
                    else {
                        totalHtml += contHtmlArr[i] + "<highlight class='inner_con searchedword'>" + selectorId.text().match(_regExp)[i] + "</highlight>";
                    }
                }
                totalHtml = totalHtml.replace(/<(\/entertag|entertag)([^>]*)>/gi, "<br>");     
                selectorId.html(totalHtml);
            }
            else {
                // 영문 
                var wIndex = 0;                
                for (var i = 0; i < selectorId.length; i++) {
                    // td 안에 정규식을 한번더 돌려서 national이 몇개 있는지 체크해서 위와 같이 하이라이트 추가                    

                    contHtml = selectorId.eq(i).html().replace(/<(\/br|br)([^>]*)>/gi, "<entertag>");
                    if (_regExp.test(selectorId.eq(i).text())) {
                        var wLen = (selectorId.eq(i).text().match(_regExp) || []).length;
                        if (wLen > 1) {
                            totalHtml = "";
                            contHtmlArr = contHtml.split(_regExp);
                            for (var x = 0; x <= wLen; x++) {
                                if (x == wLen) {
                                    totalHtml += contHtmlArr[x];
                                }
                                else {
                                    totalHtml += contHtmlArr[x] + "<highlight class='inner_con searchedword'>" + selectorId.eq(i).text().match(_regExp)[x] + "</highlight>";
                                }
                            }
                            totalHtml = totalHtml.replace(/<(\/entertag|entertag)([^>]*)>/gi, "<br>");
                            selectorId.eq(i).html(totalHtml);
                            wIndex += wLen;
                        }
                        else {
                            contHtml = contHtml.replace(_regExp, "<highlight class='inner_con searchedword'>" + selectorId.text().match(_regExp)[wIndex] + "</highlight>");
                            contHtml = contHtml.replace(/<(\/entertag|entertag)([^>]*)>/gi, "<br>");
                            selectorId.eq(i).html(contHtml);                                                
                            wIndex++;
                        }                        
                    }                    
                } 
            }
        }        
        
        $(".searchedword").get(0).scrollIntoView();
        isMobileBGScreenHide();
        isMobileRemoveTitleFixed();
    }
}

// 통검 하이라이트 제거
function checkContentViewMarking() {
    if ($("marks").length > 0)
    {        
        if ($(".icon-checkbox-unchecked").hasClass('_checked'))
        {
            $("#view_content").html($("#view_content").html().replace(/<marks>/g, "<markn>").replace(/<\/marks>/g, "</markn>"));
            $(".icon-checkbox-unchecked").removeClass('_checked');
        }        
    }
    else {
        markingChecked = false;
    }
}

// 인쇄레이어 숨기기
// open - hide, close - show
function hidePrintLayer(_type) {    
    var sCode = $("#lbDid").val().substring(0, 4);
    if (sParams != null && sParams != 'undefinded') {
        if (
            (sCode == "C000" && sParams == "R1")
            //|| sCode == "C000"
            //|| sCode == "L000"
            || (sCode == "L000" && sParams == "R0")
            || (sCode == "L000" && sParams == "R2")
            || (sCode == "L000" && sParams == "R3")
            || (sCode == "L000" && sParams == "R7")
            || (sCode == "L000" && sParams == "R8")
            || (sCode == "L000" && sParams == "R11")
            || (sCode == "L006" && sParams == "R2")
            || (sCode == "L006" && sParams == "R3")
            || (sCode == "L006" && sParams == "R8")
            || sCode == "I002" || sCode == "I003"
            || sCode == "D009" || sCode == "D007"
            || sCode == "P000" || sCode == "P011"
            || sCode == "N000" || sCode == "N001"
            || sCode == "J001"
        ) {
            if (sCode == "J001")
            {
                var templbDid = sParams.replace("|", "_").replace("|","_"); // gi 안먹힘
                if (templbDid.split('_').length > 1)
                {
                    if (templbDid.split('_')[1] == "0")
                    {
                        $("#pring_set").hide();
                    }
                    else
                    {
                        if (_type == "open") {
                            $("#pring_set").hide();
                        }
                        else {
                            $("#pring_set").show();
                        }
                    }
                }
            }
            else
            {
                if (_type == "open") {
                    $("#pring_set").hide();
                }
                else {
                    $("#pring_set").show();
                }
            }            
        }
        else
        {
            $("#pring_set").show();
        }
    }
    else if (sParams == null)
    {
        if (sCode == "C000"
            || sCode == "L000"
            || sCode == "I002" || sCode == "I003"
            || sCode == "D009" || sCode == "D007"
            || sCode == "P000" || sCode == "P011"
            || sCode == "N000" || sCode == "N001"
            || sCode == "J001" || sCode == "N005")
        {
            if (sCode == "J001")
            {
                var templbDid = $("#lbDid").val().replace("|", "_").replace("|", "_");
                if (templbDid.split('_').length > 1) {
                    if (templbDid.split('_')[1] == "0") {
                        $("#pring_set").hide();
                    }
                    else {
                        if (_type == "open") {
                            $("#pring_set").hide();
                        }
                        else {
                            $("#pring_set").show();
                        }
                    }
                }
            }
            else
            {
                if (_type == "open") {
                    $("#pring_set").hide();
                }
                else {
                    $("#pring_set").show();
                }
            }            
        }
        else {
            $("#pring_set").show();
        }
    }
    else {
        $("#pring_set").show();
    }
}