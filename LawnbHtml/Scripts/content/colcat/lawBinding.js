

var expanded = false;

$(document).ready(function () {
    if (isFromOnju()) {
        $('#pring_set').hide();
        $('#save_set').hide();
        $('#cont_share').hide();
    } 
    if (WebInMobile()) {
        $('span').removeClass('miju_num addition_num');
        $("span").removeAttr("onclick");
    }
});

function isFromOnju() {
    var address = unescape(location.href);
    if (address.indexOf("tab=onju", 0) != -1) {
        return true;
    } else {
        return false;
    }
}

function showCheckboxes() {
    if (!expanded) {
        $("#checkboxes").show();
        expanded = true;
    } else {
        $("#checkboxes").hide();
        expanded = false;
    }
}

this.setSubViewCallback = function (result) {
    if (result != null) {
            
        if (sParams == "R7") {
            view.elc_pdf_view('전자관보');
            pdfOpen('pdf_view_other');
            if ($('#view_sub_content').length > 0) {
                $('#view_sub_content').hide();
            }
        }
        else {
            var tmpParam = sParams;
            $('.main_container_view .btn_close').trigger('click');
            sParams = tmpParam;
            if ($('#view_sub_content').length > 0) {
                $('#view_content').hide();
                $('#view_sub_content').empty();
                $('#view_sub_content').html(result);
                $('#view_sub_content').show();
            } else {
                $('#view_content').empty();
                $('#view_content').html(result);
                if ($("#lbTid").length > 0) {
                    setTimeout(function () { law.initLawRefJoList($("#lbLid").val(), $("#lbDid").val() + '|' + $("#lbTid").val().split('|')[1]); }, 100);
                }
            }
            if ($('#pdf_view_ahnex').length > 0) {
                $("#pdf_view_ahnex").height($('.main_container').outerHeight() - 110);
                pdfOpen('pdf_view_ahnex');
            }

            if (sParams == "R9") {
                $("#txtInPrint").text("** 해당 페이지에서 보여지는 본문 그대로 인쇄물에 반영됩니다. [영문] 또는 [영문/한글] 중 원하는 페이지 상에서 인쇄해주세요.");
            }
            else {
                $("#txtInPrint").text("해당 본문 페이지에서 하이라이트의 제공 여부가 인쇄물에 그대로 반영됩니다. 인쇄물에 하이라이트를 표시하지 않으려면 아래와 같이 하이라이트를 제거 후 인쇄해주세요.​ <br /> 1) 검색어 하이라이트 = 본문 상단 “검색어“ 체크 해제 처리 < br /> 2) 본문 하이라이트 = 본문 상단 “하이라이트 & 메모“ 내 숨김 처리");
            }

            setHeight();
        }
        if (sParams != null) {
            hidePrintLayer("open");
        }        

        drawLiBylaw();
    }
};

// li 다시 그리기
this.drawLiBylaw = function () {
    var lbListType = 0;
    if (sParams == "R0") {
        lbListType = 3;
    } else if (sParams == "R2") {
        lbListType = 5;
    } else if (sParams == "R3") {
        lbListType = 6;
    } else if (sParams == "R7") {
        lbListType = 7;
    } else if (sParams == "R8") {
        lbListType = 4;
    } else if (sParams == "R11") {
        lbListType = 8;
    } else {
        lbListType = 99;
    }
    $('.btn_group>a>span').each(function (index) {
        if (lbListType == index) {
            $(this).addClass('_this');
        } else {
            $(this).removeClass('_this');
        }
    });
};

$(function () {
    $('.favi_add').click(function () {
        //$(this).children('i').toggleClass('starfull');
        $('.base_popup').hide();
        $('#popup_favilaw').show();
    });

    var i = 0;
    $(document).on('click', '.relative_law .detail_area .but', function (event) {
        var x_object = $(this).parent().parent().find('.relative_law_view');
        if (i == "0") {
            $(x_object).show();
            $(this).children('i').removeClass('icon_open').addClass('icon_close');
            $(this).parent().css('margin-bottom', '30px');
            i = 1;
        } else {
            $(x_object).hide();
            $(this).children('i').addClass('icon_open').removeClass('icon_close');
            $(this).parent().css('margin-bottom', '0');
            i = 0;
        }
        setHeight();
    });

    $(document).on('click', 'p>span.btn_close', function (event) {
        sParams = 99; //버튼초기화
        drawLiBylaw();
        $('#view_content').show();
        $('#view_sub_content').hide();
    });


    $("#checkboxes").bind("mouseleave", function () {
        $("#checkboxes").hide();
        expanded = false;
    });

    $(document).on('click', 'input[name=samRd]', function (event) {
        var radioValue = $(this).val();
        law.getLRGSelectList(radioValue);
    });

    $(document).on('change', '#dLRGList', function (event) {
        $('#sId').val($(this).val());
        if (targeType > 1) { targeType = 1; } //law.initLawLRGList(1); }
        law.changeLRGTarget(targeType);

    });

    $(document).on('change', '#dLCompareList', function (event) {
        $('#sId').val($(this).val());
        law.initLawCompareList();
    });

    $(document).on('change', '#dLCompareList1', function (event) {
        $('#sId').val($(this).val() + "|" + $('#sId').val().split('|')[1]);
        law.changeCompareTarget($('#sChk').val());
    });

    $(document).on('change', '#dLCompareList2', function (event) {
        $('#sId').val($('#sId').val().split('|')[0] + "|" + $(this).val());
        law.changeCompareTarget($('#sChk').val());
    });

    //20200312 법원선택 셀렉트박스 추가로 적용버튼 이벤트로 변경
    /*
    // 법령 히스토리 판례 대상 변경
    $(document).on('change', '#sListLawHis', function () {
        view.showAdditionList($("#lbTid").val() + '|' + $(this).children('option:selected').val(), '2', $("#lbCol").val(), '1', $('#sList').val());
    });
    */

    $('.title_area .btn_option span:first-child').click(function () {
        $('.main_container table tr td:last-of-type').hide();
        $('.main_container table tr th:last-of-type').hide();
        $('.main_container table tr td').width('100%');
        $(this).removeClass('disable');
        $('.title_area .btn_option span:last-child').addClass('disable');
        reSettingHeight();
    });

    $('.title_area .btn_option span:last-child').click(function () {
        $('.main_container table tr td:last-of-type').show();
        $('.main_container table tr th:last-of-type').show();
        $('.main_container table tr td').width('50%');
        $(this).removeClass('disable');
        $('.title_area .btn_option span:first-child').addClass('disable');
        reSettingHeight();
    });

    $(".btn_close_pop").click(function () {
        $('#bg_screen').hide();
        $("html").css('overflow', 'auto');
        $('.compare_container').hide();
    });

    if ($(".icon_fixed").length > 0) { $('.popup_law .new_normal').css('padding-left', '48px') }

});

var isJoView = 'N', targeType = "1";
var isSel = 0;
var law = new function () {
    this.goTarget = function (m) {
        sParams = 99; //버튼초기화
        drawLiBylaw();
        $('.main_container_view_inner .result_tab .btn_option_outer .btn_close').trigger('click');
        $('#view_content').show();
        $('#view_sub_content').hide();
        if ($("#co_popupContainer").has('mobile') && document.body.clientWidth < 500) {
            $('.left_container').removeClass('slide_mov ').removeClass('add_border ');
            $('#bg_screen').hide();
            $("html").css("overflow-y", "auto");
            $('.main_container').height($(".main_container_view_inner").height());
        } else {
            $('.main_container').css('overflow', 'auto');
        }
        $("#lbTid").val($("#lbLid").val() + "|" + m);

        hidePrintLayer("open");
    };

    this.goView = function (n) {
        $(location).attr('href', '/Info/ContentView?sid=' + $("#lbDid").val() + '_' + n);
        if ($("#co_popupContainer").has('mobile') && document.body.clientWidth < 500) {
            $('.left_container').removeClass('slide_mov ').removeClass('add_border ');
            $('#bg_screen').hide();
            $("html").css("overflow-y", "auto");
        }
    };

    this.goToRefView = function (j) {

        if (j.indexOf('_U') > 0 || j.indexOf('|U') > 0) {
            j = j.replace('_', '|');
            if (j.split('|')[0].length < 16) {
                j = $("#lbDid").val() + '_' + j.split('|')[1] + '_U';
            }
        } else if (j.indexOf('_L') > 0 || j.indexOf('|L') > 0) {
            j = j.replace('_', '|');

            if ($("#lbCode").val() == "J001") {
                j = j;
            }
            else if (j.split('|')[0].length < 16) {
                j = $("#lbDid").val() + '_' + j.split('|')[1] + '_L';
            }
        }
        showOriginalView('/Info/ContentView?sid=' + j);
    };

    this.goToMapView = function () {
        law.goToRefView($('#lbDid').val() + '_0_R6');
    };
    
    // 20200422 법령체계도 개선
    this.goToMapViewAll = function (j) {
        var j = $('#lbDid').val() + "_0_R6_" + $('#lbLid').val() + "_" + $('#lbDidMap').val();
        //var j = $('#lbDid').val() + "_0_R6_" + $('#lbLid').val();
        showOriginalView('/Info/ContentView?sid=' + j);
    };

    // 20200422 법령체계도 개선
    this.mapViewHtml = function () {
        var lid = $("#selMapView option:selected").val();
        if (lid != null && lid != 'undefined') {            
            var lawMapDid = "L000" + lid + "|R6";
            // 법령체계도 전체보기 lid 값 변경
            $('#lbDidMap').val(lid);

            var params = { "lid": lawMapDid }
            sendNonBlockingTextToJsonRequest("/AjaxInfo/GetLawMapViewHtml", params, function (result) {
                if (result != null) {
                    $(".law_level").html("");
                    $(".law_level").html(result);

                    setTreeBinding();
                }
            });
        }
    };

    // 20200422 법령체계도 개선(법령 + 행정규칙)
    this.mapViewHtmlPopup = function () {
        var selLid = $("#selMapView option:selected").val();
        var lbDid = $("#lbDid").val();
        var lbLid = $("#lbLid").val();

        var lbId = lbDid.substring(0, 4) == "L000" ? lbLid : lbDid.substring(0, 4) == "L006" ? "L006" + lbLid : "L008" + lbLid;
        var lbDate = $("#lbDate").val();        
        
        view.showMapView(lbId + "|R6|" + lbDate + "|" + selLid);

        /*
        if (lbDid.substring(0, 4) == "L000") {
            view.showPreview(lbId + "|0"); 
        }
        else {
            view.showPreview(lbDid + "|0"); 
        }*/       
    };
    
    this.changeLRGTarget = function (t) {
        targeType = t;
        showloading();
        if (!isFromOnju()) { $("#save_set").show(); }
        if (t == '1') {
            $("#content_1").show();
            $("#content_2").hide();
            $(".crit").show();
            law.initLawLRGList(1);
        }
        if (t == '2') {
            $("#content_2").show();
            $("#content_1").hide();
            $(".crit").show();
            law.getLRGSummList();
        }
        if (t == '3') {
            $("#content_1").show();
            $("#content_2").hide();
            $(".crit").hide();
            $("#save_set").hide();
            law.getLRGAllList();
        }
        law.setLrgTopInit(t);
    };

    this.initLawRefList = function (sId, dId) {
        law.chkeckRefInfoByMobile();
        view.showRefData(sId, dId);
        if ($("#lbType").val() == "C") {
            setTimeout(function () { view.showMapView(sId + '|R6'); }, 100);
        }
        setTimeout(function () { law.showMakeView(sId + '|R9'); }, 100);
        // 영문법령
        setTimeout(function () { law.showLawEngView(dId + '|R10'); }, 100);
    };

    this.initLawRefJoList = function (sId, dId) {
        view.showRefData(sId, dId);
    };

    this.initLawLRGList = function (c) {
        isSel = c;
        showloading();
        var s = 'L000' + $('#sId').val() + '|0|L|1';
        law.showLRGData(s, "0");
    };

    this.showMakeView = function (s) {
        s += "|" + $('#lbDate').val() + "|" + $('#lbType').val();
        getContentMakeView(view.getTargetUrl(), 'L000' + s);

    };

    // 영문법령
    this.showLawEngView = function (did) {
        getLawEngView(view.getTargetUrl(), did);
    };

    this.showLRGData = function (s, t) {
        if (t == "0") {
            law.getContentLRGTitleView(view.getTargetUrl(), s);
        }
        else if (t == "3" || t == "4" || t == "5") {
            law.getJoListView(view.getTargetUrl(), s, t);
        }
        else if (t == "6") {
            law.getLRGSelectView(view.getTargetUrl(), s);
        }
        else {
            law.getContentLRGView(view.getTargetUrl(), s);
        }

    };

    this.getLRGSummList = function () {
        s = 'L000' + $('#sId').val() + '|0|L|2';
        law.showLRGData(s, "1");
    };

    this.getLRGAllList = function () {
        s = 'L000' + $('#sId').val() + '|0|L|3';
        law.showAllContview(s);
    };

    this.getLRGSelectList = function (t) {
        if ($('#sChk').val() != t) {
            var idArr = $('#sLRGId').val().split(',');
            var d = (t == "L") ? idArr[0] : (t == "R") ? idArr[1] : idArr[2];
            var s = 'L000' + d + '|0|L|0';
            law.showLRGData(s, "6");
            var m = (t == "L") ? idArr[3] : (t == "R") ? idArr[4] : idArr[5];
            $('#sId').val(m);
            $('#sChk').val(t);
            if (targeType == "1") {
                law.initLawLRGList(1);
            } else if (targeType == "2") {
                law.setLrgTitleInit(t);
                law.changeLRGTarget("2");
            } else if (targeType == "3") {
                law.setLrgTitleInit(t);
            }
        }
        else {
            if (targeType == "1") {
                s = 'L000' + $('#sId').val() + '|' + n + '|L|1';
                law.showLRGData(s, "1");
            }
        }
    }

    this.getContentLRGTitleView = function (url, sId) {
        var data = { "sId": sId };
        sendNonBlockingAjaxRequest(url, data, law.setLRGTitleViewCallback);
    };

    this.setLRGTitleViewCallback = function (result) {
        if (result != null) {
            if (isSel == 1) {
                $('#sLawId').val($(result).filter('#sLawId').val());
                $('#sId').val($(result).filter('#sId').val());
                $('#sChk').val($(result).filter('#sChk').val());
            }
            $('#sLRGId').val($(result).filter('#sLRGId').val());
            $("#tit_area").empty();
            $("#tit_area").html($(result).filter('#titleList').html());
            if (targeType == "1") {
                var idArr = $('#sLRGId').val().split(',');
                $("#samList1").html('&nbsp;'); $("#samList2").html('&nbsp;'); $("#samList3").html('&nbsp;');
                if (idArr[0] != "") {
                    s = 'L000' + idArr[0] + '|R4';

                    law.showLRGData(s, "3");
                }
                if (idArr[1] != "") {
                    s = 'L000' + idArr[1] + '|R4';
                    law.showLRGData(s, "4");
                }
                if (idArr[2] != "") {
                    s = 'L000' + idArr[2] + '|R4';
                    law.showLRGData(s, "5");
                }
                s = 'L000' + $('#sId').val(); // +'|1|L|1';
                if ($('#sJo').val() == "0" || $('#sJo').val() == "") {
                    s = s + '|1|L|1';
                }
                else {
                    s = s + "|" + $('#sJo').val() + '|L|1';
                }

                law.showLRGData(s, "1");
            } else if (targeType == "2") {
                law.setLrgTitleInit($('#sChk').val());
                law.changeLRGTarget("2");
            } else if (targeType == "3") {
                law.setLrgTitleInit("3");
            }
        }
    };

    this.getJoListView = function (url, sId, type) {
        var data = { "sId": sId };
        if (type == "3") {
            sendNonBlockingAjaxRequest(url, data, law.setJoListViewCallback1);
        } else if (type == "4") {
            sendNonBlockingAjaxRequest(url, data, law.setJoListViewCallback2);
        } else if (type == "5") {
            sendNonBlockingAjaxRequest(url, data, law.setJoListViewCallback3);
        }
    };

    this.setJoListViewCallback1 = function (result) {
        if (result != null) {
            result = "<div class=\"newold_jo tree\">" + result + "</div>";
            result = replaceChars(result, "view.goView(", "law.lrgContView('L',");
            $("#samList1").html(result);
            law.setJoListFiltering("#samList1");
            setTreeBinding();
            setHeight_samdan(1);
        }
    };

    this.setJoListViewCallback2 = function (result) {
        if (result != null) {
            result = "<div class=\"newold_jo tree\">" + result + "</div>";
            result = replaceChars(result, "view.goView(", "law.lrgContView('R',");
            $("#samList2").html(result);
            law.setJoListFiltering("#samList2");
            setTreeBinding();
            setHeight_samdan(1);
        }
    };

    this.setJoListViewCallback3 = function (result) {
        if (result != null) {
            result = "<div class=\"newold_jo tree\">" + result + "</div>";
            result = replaceChars(result, "view.goView(", "law.lrgContView('G',");
            $("#samList3").html(result);
            law.setJoListFiltering("#samList3");
            setTreeBinding();
            setHeight_samdan(1);
        }
    };

    this.setJoListFiltering = function (sl) {
        $(sl).find('span.mi').each(function (index) {
              $(this).parent().hide();
        });
    };


    this.lrgContView = function (l, n) {
        var idArr = $('#sLRGId').val().split(',');
        if (l == "L") {
            s = 'L000' + idArr[3] + '|' + n + '|L|1';
        } else if (l == "R") {
            s = 'L000' + idArr[4] + '|' + n + '|L|1';
        } else if (l == "G") {
            s = 'L000' + idArr[5] + '|' + n + '|L|1';
        }
        law.showLRGData(s, "1");
    };

    this.getLRGSelectView = function (url, sId) {
        var data = { "sId": sId };
        sendNonBlockingAjaxRequest(url, data, law.setLRGSelectViewCallback);
    };

    this.setLRGSelectViewCallback = function (result) {
        if (result != null) {
            $("#dLRGList").empty();
            $("#dLRGList").html(result);
        }
    };

    this.getContentLRGView = function (url, sId) {
        var data = { "sId": sId };
        sendSequenceAjaxRequest(url, data, law.setLRGViewCallback);
    };

    this.setLRGViewCallback = function (result) {
        if (result != null) {
            if (targeType == "1") {
                $("#law_area_cont").empty();
                $("#law_area_cont").html(result);
                $("#content_1").show();
                $("#content_2").hide();
                setHeight_samdan(1);
            }
            else if (targeType == "2") {
                $("#samList1").empty();
                $("#samList2").empty();
                $("#samList3").empty();
                $("#total_group").empty();
                $("#total_group").html(result);
                $("#content_2").show();
                $("#content_1").hide();
                setHeight_samdan_no(1);
            }
        }
        hideloading();
    };


    this.showAllContview = function (dId) {
        law.getLRGAllContView(view.getTargetUrl(), dId);
    };

    this.getLRGAllContView = function (url, sId) {
        var data = { "sId": $.trim(sId) };
        sendNonBlockingAjaxRequest(url, data, law.setLRGAllContViewCallback);
    };

    this.setLRGAllContViewCallback = function (result) {
        if (result != null) {
            $("#samList1").empty();
            $("#samList2").empty();
            $("#samList3").empty();
            $("#law_area_cont").empty();
            $("#total_group").empty();
            $("#law_area_cont").html(result);
            $("#content_1").show();
            $("#content_2").hide();
            setHeight_samdan(0);
            hideloading();
        }
    };

    this.setChkRefIcon = function (jid, r) {
        try {
            var jrr = (jid.indexOf('$') > 0) ? jid.split('$')[0] : jid;
            var gi = law.getIconList(jrr, r);
            if (gi != "") {
                $('#' + jrr).show();
                $('#' + jrr).html(gi);
            }
            if (r[10] == 1) {
                if (jid.indexOf('$') > 0) {
                    var irr = jid.split('$');
                    $('#' + irr[0].replace("R_", "I_")).show();
                    $('#' + irr[0].replace("R_", "I_")).html("<div id='J" + irr[0].replace("R_", "") + "_view' class='relative_law_view rules'>_</div><div class='detail_area'> <div class='but'onclick=\"view.addBottomList('L000" + $("#lbLid").val() + '|' + irr[0].replace("R_", "") + "', 'L006','J" + irr[0].replace("R_", "") + "_view')\">관련 행정규칙 <i class='icon_open'> </i></div></div>");
                    $('#I_' + irr[1]).show();
                    $('#I_' + irr[1]).html("<div id='J" + irr[0].replace("R_", "") + "_view' class='relative_law_view rules'>_</div><div class='detail_area'> <div class='but'onclick=\"view.addBottomList('L000" + $("#lbLid").val() + '|' + irr[1].replace("R_", "") + "', 'L006','J" + irr[1].replace("R_", "") + "_view')\">관련 행정규칙 <i class='icon_open'> </i></div></div>");
                } else {
                    $('#' + jid.replace("R_", "I_")).show();
                    $('#' + jid.replace("R_", "I_")).html("<div id='J" + jid.replace("R_", "") + "_view' class='relative_law_view rules'>_</div><div class='detail_area'> <div class='but'onclick=\"view.addBottomList('L000" + $("#lbLid").val() + '|' + jid.replace("R_", "") + "', 'L006','J" + jid.replace("R_", "") + "_view')\">관련 행정규칙 <i class='icon_open'> </i></div></div>");
                }
            }
        } catch (e) {

        }
       
    };

    /*
    this.getIconList = function (jid, r) {
        var ilist = "";
        if (r[0] == 1) {
            ilist += " <button type=\"button\" class=\"btn btn-square\" onclick=\"view.addInfoLawList('L000" + $('#lbLid').val() + "|" + jid.replace("R_", "") + "', 'C000')\">판례</button>";
        }
        if (r[1] == 1) {
            ilist += " <button type=\"button\" class=\"btn btn-square\" onclick=\"view.addInfoLawList('L000" + $('#lbLid').val() + "|" + jid.replace("R_", "") + "','C000')\">위헌</button>";
        }
        if (r[2] == 1) {
            ilist += " <button type=\"button\" class=\"btn btn-square\" onclick=\"view.addInfoLawList('L000" + $('#lbLid').val() + "|" + jid.replace("R_", "") + "','C000')\">헌법불합치</button>";
        }
        if (r[3] == 1) {
            ilist += " <button type=\"button\" class=\"btn btn-square\" onclick=\"view.addInfoLawList('L000" + $('#lbLid').val() + "|" + jid.replace("R_", "") + "','C000')\">한정위헌</button>";
        }

        if ($("#hdnFreeVer").val() != "Y") {
            if (r[4] == 1) {
                ilist += " <button type=\"button\" class=\"btn btn-square\" onclick=\"view.addInfoLawList('L000" + $('#lbLid').val() + "|" + jid.replace("R_", "") + "','D000')\">문헌</button>";
            }
            if (r[5] == 1) {
                ilist += " <button type=\"button\" class=\"btn btn-square\" onclick=\"view.addInfoLawList('L000" + $('#lbLid').val() + "|" + jid.replace("R_", "") + "','D021')\">주석</button>";
            }
            if (r[6] == 1) {
                ilist += " <button type=\"button\" class=\"btn btn-square\">신/구</button>";
            }

            if (r[7] == 1) {
                ilist += " <button type=\"button\" class=\"btn btn-square\" onclick=\"law.goToRefView('" + $('#lbDid').val() + "_" + jid.replace("R_", "") + "_E')\">벌칙</button>";
            }
            if (r[8] == 1) {
                ilist += " <button type=\"button\" class=\"btn btn-square\" onclick=\"law.goToRefView('" + $('#lbDid').val() + "_" + jid.replace("R_", "") + "_F')\">과태료</button>";
            }
            if (r[9] == 1) {
                ilist += " <button type=\"button\" class=\"btn btn-square\" onclick=\"law.goToRefView('" + $('#lbDid').val() + "_" + jid.replace("R_", "") + "_M')\">과징금</button>";
            }
        }
        return ilist;
    };
    */
    
    // 20201215 헌재 수정 주석처리
    this.getIconList = function (jid, r) {
        var ilist = "";
        if (r[0] == 1) {
            ilist += " <button type=\"button\" class=\"btn btn-square\" onclick=\"law.changeRefIconType(''); view.addInfoLawList('L000" + $('#lbLid').val() + "|" + jid.replace("R_", "") + "', 'C000')\">판례</button>";
        }
        if (r[1] == 1) {
            ilist += " <button type=\"button\" class=\"btn btn-square\" onclick=\"law.changeRefIconType('헌재'); view.addInfoLawList('L000" + $('#lbLid').val() + "|" + jid.replace("R_", "") + "','C000')\">위헌</button>";
        }
        if (r[2] == 1) {
            ilist += " <button type=\"button\" class=\"btn btn-square\" onclick=\"law.changeRefIconType('헌재'); view.addInfoLawList('L000" + $('#lbLid').val() + "|" + jid.replace("R_", "") + "','C000')\">헌법불합치</button>";
        }
        if (r[3] == 1) {
            ilist += " <button type=\"button\" class=\"btn btn-square\" onclick=\"law.changeRefIconType('헌재'); view.addInfoLawList('L000" + $('#lbLid').val() + "|" + jid.replace("R_", "") + "','C000')\">한정위헌</button>";
        }

        if ($("#hdnFreeVer").val() != "Y") {
            if (r[4] == 1) {
                ilist += " <button type=\"button\" class=\"btn btn-square\" onclick=\"law.changeRefIconType(''); view.addInfoLawList('L000" + $('#lbLid').val() + "|" + jid.replace("R_", "") + "','D000')\">문헌</button>";
            }
            if (r[5] == 1) {
                ilist += " <button type=\"button\" class=\"btn btn-square\" onclick=\"law.changeRefIconType(''); view.addInfoLawList('L000" + $('#lbLid').val() + "|" + jid.replace("R_", "") + "','D021')\">주석</button>";
            }
            if (r[6] == 1) {
                ilist += " <button type=\"button\" class=\"btn btn-square\">신/구</button>";
            }

            if (r[7] == 1) {
                ilist += " <button type=\"button\" class=\"btn btn-square\" onclick=\"law.goToRefView('" + $('#lbDid').val() + "_" + jid.replace("R_", "") + "_E')\">벌칙</button>";
            }
            if (r[8] == 1) {
                ilist += " <button type=\"button\" class=\"btn btn-square\" onclick=\"law.goToRefView('" + $('#lbDid').val() + "_" + jid.replace("R_", "") + "_F')\">과태료</button>";
            }
            if (r[9] == 1) {
                ilist += " <button type=\"button\" class=\"btn btn-square\" onclick=\"law.goToRefView('" + $('#lbDid').val() + "_" + jid.replace("R_", "") + "_M')\">과징금</button>";
            }
        }
        return ilist;
    };    

    this.changeRefIconType = function (v) {
        if ($("#hdnRefIconType").length > 0) {
            $("#hdnRefIconType").val(v);
        }
        else {
            var input = document.createElement("input");
            input.setAttribute("type", "hidden");
            input.setAttribute("id", "hdnRefIconType");
            input.setAttribute("value", v);
            document.getElementById("container").appendChild(input);
        }
    }

    this.setLrgTopInit = function (c) {
        for (i = 1; i < 4; i++) {
            $("#samTop" + i.toString()).removeClass('on');
            $("#samTop" + i.toString()).addClass('off');
        }
        $("#samTop" + c.toString()).removeClass('off');
        $("#samTop" + c.toString()).addClass('on');
    };

    this.setLrgTitleInit = function (c) {
        for (i = 1; i < 4; i++) {
            $("#samTitle" + i.toString()).removeClass('point');
        }
        if (c == 'L') $("#samTitle1").addClass('point');
        if (c == 'R') $("#samTitle2").addClass('point');
        if (c == 'G') $("#samTitle3").addClass('point');
    };

    this.initLawCompareList = function () {
        var s = $('#sId').val();
        law.showCompareData(s, "0");
    };

    this.showCompareData = function (s, t) {
        s = s + "|U|" + t;
        if (t == '1') {
            if ($('#sJo').val() == "0" || $('#sJo').val() == "") {
                s = s + "|1";
            }
            else {
                s = s + "|" + $('#sJo').val();
            }
        }
        law.getCompareJo(view.getTargetUrl(), s);
    };

    this.changeCompareTarget = function (t) {
        var s = $('#sId').val();
        $('#sChk').val(t);
        law.setCompareTopInit(t);
        showloading();
        law.showCompareData(s, t);
    };

    this.getCompareJo = function (url, sId) {
        var data = { "sId": sId };
        sendNonBlockingAjaxRequest(url, data, law.setCompareJoCallback);
    };

    this.getJoCompareListView = function (url, sId, type) {
        var data = { "sId": sId };
        if (type == "1") {
            sendNonBlockingAjaxRequest(url, data, law.setJoCompareListViewCallback1);
        } else if (type == "2") {
            sendNonBlockingAjaxRequest(url, data, law.setJoCompareListViewCallback2);
        }
    };

    this.setJoCompareListViewCallback1 = function (result) {
        if (result != null) {
            result = replaceChars(result, "view.goView(", "law.compareContTargetJo(");
            $("#left_jo_div").html(result);
            setTreeBinding();
        }
    };

    this.setJoCompareListViewCallback2 = function (result) {
        if (result != null) {
            result = replaceChars(result, "view.goView(", "law.compareContTargetJo(");
            $("#right_jo_div").html(result);
            setTreeBinding();
        }
    };

    this.setCompareJoCallback = function (result) {
        if (result != null) {
            $('.old_new').empty();
            $('.old_new').html(result);
            if ($('#sChk').val() == "1") {
                var idArr = $('#sId').val().split('|');
                s = idArr[0] + '|R4';
                law.getJoCompareListView(view.getTargetUrl(), s, "1");
                s = idArr[1] + '|R4';
                law.getJoCompareListView(view.getTargetUrl(), s, "2");
            }
            setHeight_newold(0);
            hideloading();
        }
    };

    this.compareContTargetJo = function (n) {
        var s = $('#sId').val();
        s = s + "|U|1|" + n + "|1";
        law.getCompareTargetJo(view.getTargetUrl(), s);
    };

    this.getCompareTargetJo = function (url, sId) {
        var data = { "sId": sId };
        sendNonBlockingAjaxRequest(url, data, law.setCompareTargetJoCallback);
    };

    this.setCompareTargetJoCallback = function (result) {
        if (result != null) {
            $('#NewOldContID').empty();
            $('#NewOldContID').html(result);
            setHeight_newold(1);
            hideloading();
        }
    };

    this.compareContQueueJo = function (n, t) {
        var s = ""; var isJob = true;
        if (t == 0) {
            if ($("#dLCompareList1 option").length > 1) {
                s = $("#dLCompareList1 option:eq(1)").val() + "|" + $('#sId').val().split('|')[0];
            }
            else {
                alert("마지막 연혁입니다.");
                isJob = false;
            }
        } else if (t == 1) {
            for (i = 0; i < $("#dLCompareList2 option").length; i++) {
                if ($("#dLCompareList2 option:eq(" + i.toString() + ")").val() == $('#sId').val().split('|')[1]) {
                    if (i == $("#dLCompareList2 option").length - 1) {
                        s = $("#dLCompareList1 option:eq(0)").val() + "|" + $('#sId').val().split('|')[1];
                    } else {
                        s = $("#dLCompareList2 option:eq(" + (i + 1).toString() + ")").val() + "|" + $('#sId').val().split('|')[1];
                    }
                    break;
                }
            }
        }
        s = s + "|U|1|" + n + "|2";
        if (isJob) law.getCompareTargetLayerJo(view.getTargetUrl(), s);
    };

    this.compareContQueueTargetJo = function (d, n, t) {
        var s = ""; var isJob = true;
        if (t == 0) {
            for (i = 0; i < $("#dLCompareList2 option").length; i++) {
                if ($("#dLCompareList2 option:eq(" + i.toString() + ")").val() == d) {
                    if (i == $("#dLCompareList2 option").length - 1) {
                        s = $("#dLCompareList1 option:eq(0)").val() + "|" + d;
                    } else {
                        s = $("#dLCompareList2 option:eq(" + (i + 1).toString() + ")").val() + "|" + d;
                    }
                    break;
                }
            }
            if (s == "") {
                for (i = 0; i < $("#dLCompareList1 option").length; i++) {
                    if ($("#dLCompareList1 option:eq(" + i.toString() + ")").val() == d) {
                        if (i == $("#dLCompareList1 option").length - 1) {
                            alert("마지막 연혁입니다.");
                            isJob = false;
                        } else {
                            s = $("#dLCompareList1 option:eq(" + (i + 1).toString() + ")").val() + "|" + d;
                        }
                        break;
                    }
                }

            }
        } else if (t == 1) {

            for (i = 0; i < $("#dLCompareList2 option").length; i++) {
                if ($("#dLCompareList2 option:eq(" + i.toString() + ")").val() == d) {
                    if (i == 0) {
                        alert("마지막 연혁입니다.");
                        isJob = false;
                    } else {
                        s = d + "|" + $("#dLCompareList2 option:eq(" + (i - 1).toString() + ")").val();
                    }
                    break;
                }
            }
            if (s == "") {
                for (i = 0; i < $("#dLCompareList1 option").length; i++) {
                    if ($("#dLCompareList1 option:eq(" + i.toString() + ")").val() == d) {
                        if (i == 0) {
                            s = d + "|" + $("#dLCompareList2 option:eq(" + ($("#dLCompareList2 option").length - 1).toString() + ")").val();
                        } else {
                            s = d + "|" + $("#dLCompareList1 option:eq(" + (i - 1).toString() + ")").val();
                        }
                        break;
                    }
                }

            }
        }
        s = s + "|U|1|" + n + "|2";
        if (isJob) law.getCompareTargetLayerJo(view.getTargetUrl(), s);
    };

    this.getCompareTargetLayerJo = function (url, sId) {
        var data = { "sId": sId };
        sendNonBlockingAjaxRequest(url, data, law.setCompareTargetLayerJoCallback);
    };

    this.setCompareTargetLayerJoCallback = function (result) {
        if (result != null) {
            $('#NewOldContLayer').empty();
            $('#NewOldContLayer').html(result);
            law.showJoContentDraw();
            setHeight_newold();
            hideloading();
        }
    };

    this.setCompareTopInit = function (c) {
        for (i = 0; i < 3; i++) {
            $("#samTop" + i.toString()).removeClass('on');
            $("#samTop" + i.toString()).addClass('off');
        }
        $("#samTop" + c.toString()).removeClass('off');
        $("#samTop" + c.toString()).addClass('on');
    };

    this.showJoContentDraw = function () {
        $('#bg_screen').show();
        $("html").css('overflow', 'hidden');
        $('.compare_container').show();
        $(".compare_content").height($(".compare_container").height() - $(".top_title").height() - $(".compare_inner .lawtitle_content").height());
    };

    this.setMoveIndex = function (t) {
        if (t.length >= 16) {
            //document.getElementById(t).scrollIntoView({ inline: "center" }); 여기...이상함
        }
    };

    this.setServiceJoList = function () {
        var lArr = [];
        $("a[name=joMoveLink]").each(function (index) {
            var sInfo = new Object();
            sInfo.val = "제" + ($(this).attr("href").indexOf("X") > 0 ? $(this).attr("href").replace("#P", "").replace("X", "조의") : $(this).attr("href").replace("#P", "") + "조");
            sInfo.title = sInfo.val;
            if ($.grep(lArr, function (e) { return e.val === sInfo.val }) == 0) {
                lArr.push(sInfo);
            }
        });
        law.setSelectServiceList(lArr);
    };

    this.setSelectServiceList = function (lArr) {
        var sHtml = "<option value=\"00\">전체</option>";
        for (var i = 0; i < lArr.length; i++) {
            sHtml += "<option value = '" + lArr[i].val + "'>" + lArr[i].title + "</option>";
        }
        $('#iSelType_s').html(sHtml);
        $('#iSelType1_s').html(sHtml);
        $('#iSelType2_s').html(sHtml);
        $('#iSelType_p').html(sHtml);
        $('#iSelType1_p').html(sHtml);
        $('#iSelType2_p').html(sHtml);
    };

    // 모바일 - 연혁 selectbox 작업
    this.lawHistoryChange = function () {
        var _did = $("#selLawHistory option:selected").val();
        location.href = "/Info/ContentView?sid=" + _did;
    };

    this.chkeckRefInfoByMobile = function () {
        if (checkMobile()) {
            if ($("#rSamInfo").attr("href") == "#") {
                $("#refSamInfo").hide();
            } else {
                $("#refSamInfo").show();
            }
            if ($("#rNewOldInfo").attr("href") == "#") {
                $("#refNewOldInfo").hide();
            } else {
                $("#refNewOldInfo").show();
            }
            if ($("#rEngInfo").attr("href") == "#") {
                $("#refEngInfo").hide();
            } else {
                $("#refEngInfo").show();
            }
        }
    };

    this.setAdditionCont = function (ad) {
        var additionStr = "";
        var addate = ad.split('_')[0].replace(/f/g, '.');
        $('.case_info>.normal').each(function (index) {
            if ($(this).attr("id") != null) {
                if ($(this).attr("id").indexOf('A') == 0) {
                    var h = $(this).text().split(']')[0];
                    var regExp = /([0-9]{2,4}\.[0-9]{1,2}\.[0-9]{1,2})/;
                    if (regExp.test(h)) {
                        if (addate == regExp.exec(h)[0]) {
                            additionStr += $(this).html() + "<br>";
                        }
                    }
                }
            }
        });

        if (additionStr != "") {
            $("#" + ad).html("<div class=\"miju_box_line\" onmouseout=\"close_miju('" + ad + "')\">" + additionStr + "</div>");
            //$("#" + ad).html("<div class=\"miju_box_line\">" + additionStr + "</div>");
        }
    };

    this.setChkAvable = function () {
        if (typeof (isable) != 'undefined') {
            if (isable == "00") { $("#rSamInfo").attr("disable", true); $("#rNewOldInfo").attr("disable", true); $("#rSamInfo").removeAttr("href"); $("#rNewOldInfo").removeAttr("href"); }
            else if (isable == "01") { $("#rSamInfo").attr("disable", true); $("#rSamInfo").removeAttr("href"); }
            else if (isable == "10") { $("#rNewOldInfo").attr("disable", true); $("#rNewOldInfo").removeAttr("href"); }
        }
    };

    // 법원선택 필터
    this.scourtFilter = function () {
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

        //alert($("#sListLawHis").children('option:selected').val());

        view.showAdditionList($("#lbTid").val() + '|' + $("#sListLawHis").children('option:selected').val() + '|' + scourtChk, '2', $("#lbCol").val(), '1', $('#sList').val());
    };
};

function lawEngChange(obj) {
    var sId = obj.value;
    location.href = "/Info/ContentView?sid=" + sId
}