
$(function () {

    initPrintHtml = function () {

        var pUrl = (CheckIeAgent()) ? window.opener.document.URL : document.referrer;
        pUrl = replaceChars(pUrl, "_", "|");
        var pArr_temp, pArr_temp2, pArr;
        if (pUrl.split('|').length == 3) {
            pArr_temp = (pUrl.split('=').length == 2) ? pUrl.split('=') : [];
            pArr_temp2 = (pUrl.split('=').length == 2) ? pArr_temp[1].split('|') : [];
            pArr = (pUrl.split('=').length == 2) ? pArr_temp2[2].substring(0, 1) : [];
        }
        else if (pUrl.split('|').length > 1) {
            pArr = "0";
        }
        else {
            pArr = "";
        }

        //var pArr = (pUrl.split('=').length == 2) ? pArr_temp2[2].split('|') : [];
        if (pArr.length > 0) {
            switch (pArr) {
                case "L":
                    $('.main_container_view').html($(opener.document).find("#view_content").parent().html().replace(/<(\/a|a)([^>]*)>/gi, ""));
                    $('.crit').remove();
                    $('.title_area').remove();
                    $('#tree_area').remove();
                    $('.box_third.joView').height("auto");
                    $('#wrapper_sam_no').height("auto");

                    break;
                case "U":
                    $('.main_container_view').html($(opener.document).find("#view_content").parent().html().replace(/<(\/a|a)([^>]*)>/gi, ""));
                    $("#NewOldContID").height("auto").css('overflow', 'visible');
                    $('.title_area').remove();
                    $('.newold_right').width('50%');
                    $('.newold_left').width('50%');
                    $('#list_Left').remove();
                    $('#list_Right').remove();

                    if ($(opener.document).find('#dLCompareList1').length > 0) {
                        $('#s_rev_N').remove();
                        $('#dLCompareList1').remove();
                        $("#n_top_left>div.lawtitle_content").html($("#n_top_left>div.lawtitle_content").html() + "<span id='s_rev_O'>" + $(opener.document).find("#dLCompareList1 option:selected").text() + "</span>");
                    }

                    if ($(opener.document).find('#dLCompareList2').length > 0) {
                        $('#s_rev_N').remove();
                        $('#dLCompareLis2').remove();
                        $("#n_top_right>div.lawtitle_content").html($("#n_top_right>div.lawtitle_content").html() + "<span id='s_rev_O'>" + $(opener.document).find("#dLCompareList2 option:selected").text() + "</span>");

                    } else {
                        $('#s_rev_N').remove();
                        $('#dLCompareList').remove();
                        $("#n_top_right>div.lawtitle_content").html($("#n_top_right>div.lawtitle_content").html() + "<span id='s_rev_O'>" + $(opener.document).find("#dLCompareList option:selected").text() + "</span>");

                    }

                    break;
                case "A":
                    $('.main_container_view').html($(opener.document).find(".tie_third").html().replace(/<(\/a|a)([^>]*)>/gi, "")); 
                    $('.title_area').remove();
                    $('.main_container').addClass('type_A');
                    $('.main_container').attr('id', 'view_content');
                    $('.region_new_popup').remove();
                    $('.box_third_search').remove();
                    $('.btn_change_search').remove();
                    $('#div_flex2').remove();
                    $('.box_third_history').remove();
                    $('#wrapper_sam_no').height("auto");
                    break;
                case "B":
                    $('.main_container_view').html($(opener.document).find(".old_new").html().replace(/<(\/a|a)([^>]*)>/gi, ""));
                    $('.main_container').addClass('type_B');
                    $('.main_container').attr('id', 'view_content');
                    $('.title_area').remove();
                    $('.region_new_popup').remove();
                    $('.no_search_result').remove();
                    $('.box_third_history').remove();
                    $('.box_third_search').remove();
                    $('#wrapper_sam_no').height("auto");
                    if (!$(opener.document).find('input:checkbox[id="iTypeP1"]').is(":checked")) {
                        $(".flex_1").hide();
                    }
                    if (!$(opener.document).find('input:checkbox[id="iTypeP2"]').is(":checked")) {
                        $(".flex_2").hide();
                    }
                    if (!$(opener.document).find('input:checkbox[id="iTypeP3"]').is(":checked")) {
                        $(".flex_3").hide();
                    }

                    break;
                default:
                    $('.title_area').html($(opener.document).find(".title_area").html());
                    if ($(opener.document).find(".main_container_view_inner").length > 0) {
                        //$('.main_container_view_inner').html($(opener.document).find(".main_container_view_inner").html().replace(/<(\/marks|marks)([^>]*)>/gi, "").replace(/<(\/a|a)([^>]*)>/gi, ""));
                        $('.main_container_view_inner').html($(opener.document).find(".main_container_view_inner").html().replace(/<(\/a|a)([^>]*)>/gi, ""));
                        if ($('#view_content').find('table').length > 0) { $('#container').addClass('onlycon'); }
                    }
                    break;
            }
        }
        else {
            if (pUrl.split('/')[pUrl.split('/').length - 1].replace('#', '').toUpperCase() == 'ORG'
                || pUrl.split('/')[pUrl.split('/').length - 1].replace('#', '').toUpperCase() == 'ORGINFO') {
                $('.title_area').html("<h2>" + $(opener.document).find(".center_view>div>h2").html() + "</h2>");
                $('.title_area>h2 .btn_more').remove();
                // -- 인쇄 조직도 열기 닫기 -- //
                //$(opener.document).find(".tel").css("display", "block");
                $('.title_area>h3 .btn_more').remove();
                $('.main_container').html($(opener.document).find(".center_view>div").html().replace(/<(\/a|a)([^>]*)>/gi, ""));
                $('h2.submain_group.dark_line').remove();
            }
            else if (pUrl.split('/')[pUrl.split('/').length - 1].replace('#', '').toUpperCase() == "CONTENTORGMAP") {
                $('.title_area').html("<h2>" + $(opener.document).find(".main_container_view>h2").html() + "</h2>");
                $('.title_area #sAreaCode').after("<label id='lblPrintTitle'>" + $(opener.document).find("#sAreaCode option:selected").text() + "</label>");
                $('.title_area #sAreaCode').remove();
                $('.title_area>h2 .btn_more').remove();
                $('.main_container').html($(opener.document).find("#map_result").html());
                $('h2.submain_group.dark_line').remove();
            }
            else {
                if (pUrl.split('/')[pUrl.split('/').length - 1].replace('#', '').toUpperCase() == "CASESIGNHELP") {
                    $('.title_area').html($(opener.document).find(".title_area").html());
                    if ($(opener.document).find("#hdnPrintType").val() == "1") {
                        $('#casesignTop2').hide();
                        //$('#view_content').html($(opener.document).find("#view_content").html().replace(/<(\/marks|marks)([^>]*)>/gi, "").replace(/<(\/a|a)([^>]*)>/gi, ""));
                        $('#view_content').html($(opener.document).find("#view_content").html().replace(/<(\/a|a)([^>]*)>/gi, ""));

                        var _idx = $(opener.document).find("#hdnSignTabIndex").val();

                        $('.sign_tab li').hide();
                        $('.sign_tab li').eq(_idx).show();

                        $('.case_sign').hide();
                        $('.case_sign').eq(_idx).show();
                    }
                    else {
                        $('#casesignTop1').hide();
                        //$('#view_content').html($(opener.document).find("#view_content").html().replace(/<(\/marks|marks)([^>]*)>/gi, "").replace(/<(\/a|a)([^>]*)>/gi, ""));
                        $('#view_content').html($(opener.document).find("#view_content").html().replace(/<(\/a|a)([^>]*)>/gi, ""));
                    }
                }
                else {
                    $('.title_area').html($(opener.document).find(".title_area").html());
                    if ($(opener.document).find(".main_container_view_inner").length > 0) {
                        //$('.main_container_view_inner').html($(opener.document).find(".main_container_view_inner").html().replace(/<(\/marks|marks)([^>]*)>/gi, "").replace(/<(\/a|a)([^>]*)>/gi, ""));
                        $('.main_container_view_inner').html($(opener.document).find(".main_container_view_inner").html().replace(/<(\/a|a)([^>]*)>/gi, ""));
                    }     
                }
            }
        }
        setFilteringHtml();
        setFilteringText();

        //setOrgPrint();
    };

    initOnjuPrintHtml = function (_coverYN, _contType) {
        var fullLawName = $(opener.document).find("#hdnTitle").val();
        var lawName = $(opener.document).find("#hdnMainTitle").val();
        var joNo = $(opener.document).find("#hdnJoTitle").val();
        var writerName = $(opener.document).find("#hdnSubTitle").val();
        var pubDate = $(opener.document).find("#hdnPubDate").val();

        //-- 표지포함 --
        if (_coverYN == "Y") {
            var coverAreaHtml = "";
            coverAreaHtml += "<div class=\"onju_front_page\">";
            coverAreaHtml += "<p style=\"height:200px; line-height:200px;\">온주 " + fullLawName.replace("/","") + "</p>";
            coverAreaHtml += "<div><ul>";
            coverAreaHtml += "<li><span>집필위원</span>" + writerName + "</li>";
            coverAreaHtml += "<li><span>출판일</span>" + pubDate + "</li>";
            coverAreaHtml += "</ul></div>"
            coverAreaHtml += "<div class=\"mgt10 ar\"><img src=\"http://www.lawnb.com/images/tr_mail_logo_tr.png\" style=\"width:320px;\"></div>";
            coverAreaHtml += "</div>";

            $('.print_first_page').append(coverAreaHtml);            
            if (typeof ($(opener.document).find(".main_container_view_inner #view_content .onju_index_popup").html()) != 'undefined')
            {
                var onju_index_popup_html = $(opener.document).find(".main_container_view_inner #view_content .onju_index_popup").html().replace(/<(\/a|a)([^>]*)>/gi, "");
                onju_index_popup_html = "<div class=\"case_info onju_index_popup\">" + onju_index_popup_html+ "</div>";
                $('.print_first_page').append(onju_index_popup_html);
            }            
            $('.print_first_page .onju_index_popup').css("page-break-before", "always");
        }
        
        //-- 표지제외 --
        //제목
        $('.title_area').html($(opener.document).find(".title_area").html());
        //본문

        var title_result_tab_html = $(opener.document).find(".main_container_view_inner #title_result_tab").html().replace(/<(\/a|a)([^>]*)>/gi, "");
        title_result_tab_html = "<div id=\"title_result_tab\" class=\"result_tab\">" + title_result_tab_html + "</div>";

        var result_area_html = $(opener.document).find(".main_container_view_inner #result_area").html().replace(/<(\/a|a)([^>]*)>/gi, "");
        result_area_html = "<div id=\"result_area\" class=\"popup_mov_area\">" + result_area_html + "</div>";

        $('.main_container_view_inner').append(title_result_tab_html);
        $('.main_container_view_inner').append(result_area_html);
        
        var titleAreaHtml = "";
        titleAreaHtml += "<div class=\"onju_print_title\">";
        titleAreaHtml += "<div>" + lawName + " " + joNo + " <span>/ 집필위원 : " + writerName + " / 출판일: " + pubDate+"</span></div>"
        titleAreaHtml += "</div>";
        $('.main_container_view_inner').append(titleAreaHtml);

        $('.main_container_view_inner').append("<div id=\"view_content\"></div>");
        if (_contType == "11") {
            var previewLawHtml = $(opener.document).find(".main_container_view_inner #view_content .onju_preview_law").html().replace(/<(\/a|a)([^>]*)>/gi, "");
            previewLawHtml = "<div class=\"onju_preview_law\">" + previewLawHtml + "</div>";

            var previewOnjuHtml = $(opener.document).find(".main_container_view_inner #view_content .onju_preview_onju").html().replace(/<(\/a|a)([^>]*)>/gi, "");
            previewOnjuHtml = "<div class=\"onju_preview_onju\">" + previewOnjuHtml + "</div>";

            $('.main_container_view_inner #view_content').append(previewLawHtml);
            $('.main_container_view_inner #view_content').append(previewOnjuHtml);
        }
        else {            
            var previewOnjuHtml = $(opener.document).find(".main_container_view_inner #view_content .onju_preview_onju").html().replace(/<(\/a|a)([^>]*)>/gi, "");
            previewOnjuHtml = "<div class=\"onju_preview_onju\">" + previewOnjuHtml + "</div>";

            $('.main_container_view_inner #view_content').append(previewOnjuHtml);
        }      

        setFilteringHtml();
    };

    initOnjuQuotePrintHtml = function (_coverYN, _contType) {
        /*
        var fullLawName = $(opener.document).find("#hdnTitle").val();
        var lawName = $(opener.document).find("#hdnMainTitle").val();
        var joNo = $(opener.document).find("#hdnJoTitle").val();
        var writerName = $(opener.document).find("#hdnSubTitle").val();
        var pubDate = $(opener.document).find("#hdnPubDate").val();
        
        //-- 표지포함 --
        if (_coverYN == "Y") {
            var coverAreaHtml = "";
            coverAreaHtml += "<div class=\"onju_front_page\">";
            coverAreaHtml += "<p style=\"height:200px; line-height:200px;\">온주 " + fullLawName.replace("/", "") + "</p>";
            coverAreaHtml += "<div><ul>";
            coverAreaHtml += "<li><span>집필위원</span>" + writerName + "</li>";
            coverAreaHtml += "<li><span>출판일</span>" + pubDate + "</li>";
            coverAreaHtml += "</ul></div>"
            coverAreaHtml += "<div class=\"mgt10 ar\"><img src=\"http://www.lawnb.com/images/tr_mail_logo_tr.png\" style=\"width:320px;\"></div>";
            coverAreaHtml += "</div>";

            $('.print_first_page').append(coverAreaHtml);
            //if (typeof ($(opener.document).find(".main_container_view_inner #view_content .onju_index_popup").wrap("<div/>").parent().html()) != 'undefined') {
            //    $('.print_first_page').append($(opener.document).find(".main_container_view_inner #view_content .onju_index_popup").wrap("<div/>").parent().html().replace(/<(\/a|a)([^>]*)>/gi, ""));
            //}
            $('.print_first_page .onju_index_popup').css("page-break-before", "always");
        }
        */
        //-- 표지제외 --
        //제목
        $('.title_area').html($(opener.document).find(".title_area").html());
        /*
        var titleAreaHtml = "";
        titleAreaHtml += "<div class=\"onju_print_title\">";
        titleAreaHtml += "<div>" + lawName + " " + joNo + " <span>/ 집필위원 : " + writerName + " / 출판일: " + pubDate + "</span></div>"
        titleAreaHtml += "</div>";
        $('.main_container_view_inner').append(titleAreaHtml);
        */
        $('.main_container_view_inner').append("<div id=\"view_content\"></div>");
        if (_contType == "11") {            
            var previewLawHtml = $(opener.document).find(".main_container_view #view_content .onju_preview_law").html().replace(/<(\/a|a)([^>]*)>/gi, "");
            previewLawHtml = "<div class=\"onju_preview_law\">" + previewLawHtml + "</div>";

            var previewOnjuHtml = $(opener.document).find(".main_container_view #view_content .onju_preview_onju").html().replace(/<(\/a|a)([^>]*)>/gi, "");
            previewOnjuHtml = "<div class=\"onju_preview_onju\">" + previewOnjuHtml + "</div>";

            $('.main_container_view_inner #view_content').append(previewLawHtml);
            $('.main_container_view_inner #view_content').append(previewOnjuHtml);
        }
        else {
            var previewOnjuHtml = $(opener.document).find(".main_container_view #view_content .onju_preview_onju").html().replace(/<(\/a|a)([^>]*)>/gi, "");
            previewOnjuHtml = "<div class=\"onju_preview_onju\">" + previewOnjuHtml + "</div>";

            $('.main_container_view_inner #view_content').append(previewOnjuHtml);
        }

        setFilteringHtml();
    };

    setOrgPrint = function(){
        if ($('.lawyer_info.tel').is(':hidden')) {
            $(".lawyer_info.tel").slideDown();
            $(this).html('닫기');
            $(this).addClass('_ic');
        } else {
            $('.lawyer_info.tel').slideUp();
            $(this).html('열기');
            $(this).removeClass('_ic');
        }
    }

    setFilteringHtml = function () {
        $('em').each(function () {
            if ($(this).hasClass('favi_add')) {
                $(this).remove();
            }
        });

        $('div').each(function () {
            if ($(this).hasClass('lawhistory_area')) {
                $(this).remove();
            }
            if ($(this).hasClass('btn-group')) {
                $(this).remove();
            }
            if ($(this).hasClass('relative_law')) {
                $(this).remove();
            }
        });

        if ($('.btn_option').length > 0) {
            $('.btn_option').remove();
        }

        //$('marks').remove();
    };

    setFilteringText = function () {
        var pValue = $(opener.document).find('input:radio[name=iType_p]:checked').val();
        if (pValue != null) {
            if (pValue == '1') {
                var isChkeck = true;
                var sjo = $(opener.document).find("#iSelType_p option:selected").val();
                var ejo = $(opener.document).find("#iSelType1_p option:selected").val();
                if (sjo != '00' || ejo != '00') {
                    if (sjo != '00') { isChkeck = false; }
                    $('#view_content>p.dp1').hide();
                    $('#view_content>div.normal').hide();
                    $('#view_content>div.normal').each(function () {
                        if (sjo == $(this).find("em").html()) { isChkeck = true; }
                        if (isChkeck) {
                            $(this).show();
                        }
                        if (ejo == $(this).find("em").html()) { isChkeck = false; }

                    });
                }
            } else if (pValue == '2') {
                var tjo = $(opener.document).find("#txtSeljo_p").val();
                if (tjo != '') {
                    var tArr = tjo.split(',');
                    $('#view_content>p.dp1').hide();
                    $('#view_content>div.normal').hide();
                    $('#view_content>div.normal').each(function () {
                        for (i = 0; i < tArr.length; i++) {
                            if (tArr[i] == $(this).find("em").html()) {
                                $(this).show();
                            }
                        }
                    });
                }
            }
        }
        if ($(opener.document).find('#iTypeP1_a').length > 0) {
            if (!$("#iTypeP1_a").prop("checked")) {
                $('#view_content>p.c_tit_1').hide();
                $('#view_content>div.c_con').hide();
                $(opener.document).find("input[name=iTypeP1]:checkbox").each(function (index) {
                    if (this.checked) {
                        if (index == 0) {
                            $('#prPansi_t').show();
                            $('#prPansi').show();
                        } else if (index == 1) {
                            $('#prSumm_t').show();
                            $('#prSumm').show();
                        } else if (index == 2) {
                            $('#prCont_t_3').show();
                            $('#prCont_3').show();
                        }
                    }
                });
            }
        }

    };

    inputFolderMemoHtml = function (folderhtml) {
        $("#result_area").before(folderhtml);
    };
});

$(document).ready(function () {


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

    var stepChk = "";
    fnPrint = function () {

        // 온주 대량인쇄 알림 2022.01         
        var colCode = $(opener.document).find("#lbCode").val();            
        if (colCode == "J001")
        {     
            /* 온주 컨텐츠 */
            var lawnbLawId = $(opener.document).find("#lbLawnbLawId").val();
            // 인쇄일자, flag
            var pDateArr = localStorage.getItem("onjuPDateList") == null ? null : JSON.parse(localStorage.getItem("onjuPDateList"));
            if (typeof (pDateArr[lawnbLawId]) != 'undefined')
            {
                var keyId = $(opener.document).find("#lbTid").val().split('|').length > 0 ? $.trim($(opener.document).find("#lbTid").val().split('_')[1]) : $.trim($(opener.document).find("#lbTid").val());
                var mainTitle = $(opener.document).find("#hdnTitle").val().split('/').length > 0 ? $.trim($(opener.document).find("#hdnTitle").val().split('/')[0]) : $.trim($(opener.document).find("#hdnTitle").val());
                var subTitle = $(opener.document).find("#hdnTitle").val().split('/').length > 0 ? $.trim($(opener.document).find("#hdnTitle").val().split('/')[1]) : "";               
                
                var today = new Date();
                var nowDateStr = fnGetDate(today) + ' ' + fnGetTime(today);
                nowDateStr = nowDateStr.replace(/[.-]/gi, "/");

                // 초기값이거나 날이 변경되었으면 새로 리셋
                if (typeof (pDateArr[lawnbLawId].pStartDate) == 'undefined')
                {
                    var addDate = new Date(nowDateStr);
                    addDate = new Date(addDate.setHours(addDate.getHours() + 4));
                    var addDateStr = fnGetDate(addDate) + ' ' + fnGetTime(addDate);

                    pDateArr[lawnbLawId].pStartDate = nowDateStr;
                    pDateArr[lawnbLawId].pEndDate = addDateStr;
                    pDateArr[lawnbLawId].fStopDate = "";
                    pDateArr[lawnbLawId].sStopDate = "";

                    localStorage.setItem("onjuPDateList", JSON.stringify(pDateArr));
                }
                else if (pDateArr[lawnbLawId].pStartDate == ""
                    || pDateArr[lawnbLawId].pStartDate.split(' ')[0] != fnGetDate(today))
                {
                    var addDate = new Date(nowDateStr);
                    addDate = new Date(addDate.setHours(addDate.getHours() + 4));
                    var addDateStr = fnGetDate(addDate) + ' ' + fnGetTime(addDate);

                    pDateArr[lawnbLawId].pStartDate = nowDateStr;
                    pDateArr[lawnbLawId].pEndDate = addDateStr;
                    pDateArr[lawnbLawId].fStopDate = "";
                    pDateArr[lawnbLawId].sStopDate = "";

                    localStorage.setItem("onjuPDateList", JSON.stringify(pDateArr));
                }          

                var chkPass = true;
                var chkStep = "";
                var ipMemberChk = (localStorage.getItem("IpMemberY") == null ? "" : localStorage.getItem("IpMemberY"));
                var pArr = localStorage.getItem("onjuPLawList") == null ? null : JSON.parse(localStorage.getItem("onjuPLawList"));
                if (ipMemberChk == "IPMember")
                {
                    /*
                    *IP회원 - 해당PC : step 업데이트 시 step=""때 pringlog Insert.                    
                    -1step : db N 업데이트
                    -2step : db N 업데이트, 안내메일 보내기
                    */
                    var randomIPCode = localStorage.getItem("RandomIPCode") == null ? "" : localStorage.getItem("RandomIPCode");
                    if (pDateArr[lawnbLawId].allUnlockFlag == "Y") {
                        console.log("allUnlockFlag Y");
                        setTimeout(function () {
                            window.print();
                        }, 300);

                        setPrintLog();
                        return;
                    }
                    
                    // pStartDate - 첫 프린트 시작시간, pEndDate - 첫 프린트 시작시간+4
                    // fStopDate - step1 프린트 중단시간, sStopDate - step2 프린트 중단시간
                    // 현시점 인쇄 중단 체크            
                    if (pDateArr[lawnbLawId].fStopDate != "") {
                        var stopSDate = new Date(pDateArr[lawnbLawId].fStopDate);
                        var stopEDate = new Date(nowDateStr);
                        var diffTime = (stopEDate.getTime() - stopSDate.getTime()) / (1000 * 60);
                        if (pDateArr[lawnbLawId].fStepFlag == "N" && diffTime > 30) {
                            pDateArr[lawnbLawId].fStepFlag = "Y";
                            localStorage.setItem("onjuPDateList", JSON.stringify(pDateArr));
                        }
                        if (pDateArr[lawnbLawId].fStepFlag == "N" && diffTime < 30) {
                            $("#spanRandomIPUserCode").text(randomIPCode);
                            $("#divPrintAlert_IP").show();                            
                            chkPass = false;
                            return;
                        }
                    }

                    if (pDateArr[lawnbLawId].sStopDate != "") {
                        var stopSDate = new Date(pDateArr[lawnbLawId].sStopDate);
                        var stopEDate = new Date(nowDateStr);
                        var diffTime = (stopEDate.getTime() - stopSDate.getTime()) / (1000 * 60);
                        if (pDateArr[lawnbLawId].sStepFlag == "N" && diffTime > 30) {
                            pDateArr[lawnbLawId].sStepFlag = "Y";
                            pDateArr[lawnbLawId].allUnlockFlag = "Y";
                            localStorage.setItem("onjuPDateList", JSON.stringify(pDateArr));
                        }
                        if (pDateArr[lawnbLawId].sStepFlag == "N" && diffTime < 30) {
                            $("#spanRandomIPUserCode").text(randomIPCode);
                            $("#divPrintAlert_IP").show();                            
                            chkPass = false;
                            return;
                        }
                    }
                    
                    /*
                    // -- 2022.01.27 IP회원 시간제한제거
                    // pStartDate - 첫 프린트 시작시간, pEndDate - 첫 프린트 시작시간+4
                    // fStopDate - step1 프린트 중단시간, sStopDate - step2 프린트 중단시간
                    // 현시점 인쇄 중단 체크            
                    if (pDateArr[lawnbLawId].fStopDate != "")
                    {                       
                        if (pDateArr[lawnbLawId].fStepFlag == "N")
                        {
                            pDateArr[lawnbLawId].fStepFlag = "Y";
                            localStorage.setItem("onjuPDateList", JSON.stringify(pDateArr));
                        }                        
                    }

                    if (pDateArr[lawnbLawId].sStopDate != "")
                    {                        
                        if (pDateArr[lawnbLawId].sStepFlag == "N")
                        {
                            pDateArr[lawnbLawId].sStepFlag = "Y";
                            pDateArr[lawnbLawId].allUnlockFlag = "Y";
                            localStorage.setItem("onjuPDateList", JSON.stringify(pDateArr));
                        }                        
                    }
                    */
                    if (chkPass) {
                        //*IP회원 - 해당PC
                        var pEndDate = pDateArr[lawnbLawId].pEndDate;
                        var chgNowDateForm = nowDateStr.replace('/', '').replace('/', '').replace(':', '').replace(' ', '');
                        var chgAddDateForm = pEndDate.replace('/', '').replace('/', '').replace(':', '').replace(' ', '');
                        if ((parseInt(pArr[lawnbLawId].pCnt) + 1) >= parseInt(pArr[lawnbLawId].totalCnt)
                            && pDateArr[lawnbLawId].sStopDate == ""
                            && pDateArr[lawnbLawId].allUnlockFlag == "N")
                        {
                            // 2step : 알림+안내메일
                            chkStep = "step2";
                            pDateArr[lawnbLawId].sStepFlag = "N";
                            pDateArr[lawnbLawId].sStopDate = nowDateStr;
                            localStorage.setItem("onjuPDateList", JSON.stringify(pDateArr));

                            $("#spanRandomIPUserCode").text(randomIPCode);
                            $("#divPrintAlert_IP").show();                            
                        }
                        else if (Math.floor((parseInt(pArr[lawnbLawId].pCnt) + 1) / parseInt(pArr[lawnbLawId].totalCnt) * 100) >= 50
                            && chgNowDateForm < chgAddDateForm
                            && pDateArr[lawnbLawId].fStopDate == ""
                            && pDateArr[lawnbLawId].allUnlockFlag == "N")
                        {
                            // 1step : 알림
                            chkStep = "step1";
                            pDateArr[lawnbLawId].fStepFlag = "N";
                            pDateArr[lawnbLawId].fStopDate = nowDateStr;
                            localStorage.setItem("onjuPDateList", JSON.stringify(pDateArr));

                            $("#spanRandomIPUserCode").text(randomIPCode);
                            $("#divPrintAlert_IP").show();                            
                        }
                        else
                        {
                            // 카운트 추가, 인쇄 가능
                            pArr[lawnbLawId].pCnt = pArr[lawnbLawId].pCnt + 1;
                            localStorage.setItem("onjuPLawList", JSON.stringify(pArr));

                            setTimeout(function () {
                                window.print();
                            }, 300);
                        }

                        var params = {
                            "userCode": randomIPCode,  
                            "keyId": keyId
                            , "mainTitle": mainTitle
                            , "subTitle": subTitle
                            , "lawnbLawId": lawnbLawId
                            , "pStep": chkStep                            
                            //, "pStopDate": localStorage.getItem("onjuPStopDate")
                        };
                        sendNonBlockingAjaxJsonRequest("/ConService/SetIPUserOnjuPrintAlertWithPrintLog", params, function (result) {
                            if (result != null) {
                                if (result.length > 0)
                                {                                    
                                    if (result[0]["resultCode"] == "step2")
                                    {    
                                        console.log(result);
                                        if (result[1]["userName"] != "" && result[1]["mailReceiver"] != "")
                                        {
                                            var jsonData = {};
                                            jsonData = result[1];
                                            jsonData.mainTitle = mainTitle;
                                            jsonData.userCode = localStorage.getItem("RandomIPCode");
                                            //메일 보내기
                                            onjuPrintStopEmailSend(jsonData);
                                        }
                                    }
                                    else
                                    {
                                        console.log(result);
                                    }
                                }
                            }
                        });
                    }
                }
                else {
                    /*
                    *ID회원 - 해당ID(DB체크) : 카운트 체크 시 pringlog Insert.
                    -하루 지날때 마다 Y로 변경되도록 업데이트 DB스케줄 추가
                    -1step : db N 업데이트
                    -2step : db N 업데이트, 안내메일 보내기
                    */
                    //메일 안날라가서 막혀서 스크립트 제어 전환
                    if (stepChk == "step2")
                    {
                        if (pDateArr[lawnbLawId].allUnlockFlag == "Y")
                        {
                            stepChk = "1";
                            console.log("allUnlockFlag Y");
                            setTimeout(function () {
                                window.print();
                            }, 300);

                            setPrintLog();
                            return;
                        }
                        else {
                            var stopSDate = new Date(pDateArr[lawnbLawId].sStopDate);
                            var stopEDate = new Date(nowDateStr);
                            var diffTime = (stopEDate.getTime() - stopSDate.getTime()) / (1000 * 60);

                            if (pDateArr[lawnbLawId].sStepFlag == "N" && diffTime < 30) {
                                $("#divPrintAlert_ID").show();
                                return;
                            }
                            else {
                                stepChk = "1";
                                setTimeout(function () {
                                    window.print();
                                }, 300);
                            }
                        }                        
                    }
                    else
                    {
                        var params = {
                            "keyId": keyId
                            , "mainTitle": mainTitle
                            , "subTitle": subTitle
                            , "lawnbLawId": lawnbLawId
                            //, "pStartDate": pDateArr[lawnbLawId].pStartDate
                            //, "pEndDate": pDateArr[lawnbLawId].pEndDate
                        };
                        sendNonBlockingAjaxJsonRequest("/ConService/ChkIDUserOnjuPrintWithPrintLog", params, function (result) {
                            if (result != null) {
                                if (result.length > 0) {
                                    stepChk = result[0]["resultCode"];
                                    if (result[0]["resultCode"] == "step1") {
                                        pDateArr[lawnbLawId].fStepFlag = "N";
                                        if (pDateArr[lawnbLawId].fStopDate == "") {
                                            pDateArr[lawnbLawId].fStopDate = nowDateStr;
                                        }                                        
                                        localStorage.setItem("onjuPDateList", JSON.stringify(pDateArr));

                                        $("#divPrintAlert_ID").show();
                                    }
                                    else if (result[0]["resultCode"] == "step2") {
                                        pDateArr[lawnbLawId].sStepFlag = "N";
                                        if (pDateArr[lawnbLawId].sStopDate == "") {
                                            pDateArr[lawnbLawId].sStopDate = nowDateStr;
                                        }                                        
                                        localStorage.setItem("onjuPDateList", JSON.stringify(pDateArr));

                                        $("#divPrintAlert_ID").show();
                                        if (result[1]["userName"] != "" && result[1]["mailReceiver"] != "") {
                                            var jsonData = {};
                                            jsonData = result[1];
                                            jsonData.mainTitle = mainTitle;
                                            jsonData.userCode = "";
                                            stepChk = "step2";
                                            //메일 보내기
                                            onjuPrintStopEmailSend(jsonData);
                                        }
                                    }
                                    else {
                                        setTimeout(function () {
                                            window.print();
                                        }, 300);
                                    }
                                }
                            }
                        });
                    }                    
                }                
            }
            else {
                console.log(lawnbLawId + " - undefined");
                /*
                setTimeout(function () {
                    window.print();
                }, 300);
                */
            }
        }
        else
        {
            /* 기타 컨텐츠 */
            setTimeout(function () {
                window.print();
            }, 300);
        }                 
    };

    fnPrintClose = function () {
        window.close();
    };
});

// 메일 보내는 속도가 느려서 따로 뺌
function onjuPrintStopEmailSend(data) {
    var params = data;
    sendNonBlockingAjaxRequest("/ConService/OnjuPrintStopEmailSend", params, function (result) {        
    });
}

// 온주 대량인쇄 알림 2022.01 이후 수정
// 온주 인쇄 로그
function setPrintLog()
{        
    var mainTitle = "", subTitle = "", keyId = "";
    var colCode = $(opener.document).find("#lbCode").val();
    
    switch (colCode) {
        case "J001":
            keyId = $(opener.document).find("#lbTid").val().split('|').length > 0 ? $.trim($(opener.document).find("#lbTid").val().split('_')[1]) : $.trim($(opener.document).find("#lbTid").val());
            mainTitle = $(opener.document).find("#hdnTitle").val().split('/').length > 0 ? $.trim($(opener.document).find("#hdnTitle").val().split('/')[0]) : $.trim($(opener.document).find("#hdnTitle").val());
            subTitle = $(opener.document).find("#hdnTitle").val().split('/').length > 0 ? $.trim($(opener.document).find("#hdnTitle").val().split('/')[1]) : "";
            break;
        default:
            keyId = $(opener.document).find("#lbDid").val().split('|').length > 0 ? $.trim($(opener.document).find("#lbDid").val()) : $.trim($(opener.document).find("#lbTid").val());
    }
    var params =
    {
        "colCode": colCode
        ,"keyId": keyId
        ,"mainTitle": mainTitle
        ,"subTitle": subTitle
    };
    sendNonBlockingAjaxJsonRequest("/ConService/SetPrintLog", params, function (result) {
        if (result != null) {
            if (result == "1") {
                console.log("Log success");
            }
            else {
                console.log("Log fail");
            }
        }
    });
}

function initStorageIP() {
    var lawnbLawId = $(opener.document).find("#lbLawnbLawId").val();
    var onjuPLawList = JSON.parse(localStorage.getItem("onjuPLawList"));
    if (onjuPLawList != null && onjuPLawList != null) {
        onjuPLawList[lawnbLawId].pCnt = 0;
        localStorage.setItem("onjuPLawList", JSON.stringify(onjuPLawList));

        var onjuPLawList = JSON.parse(localStorage.getItem("onjuPDateList"));
        delete onjuPLawList[lawnbLawId];
        localStorage.setItem("onjuPDateList", JSON.stringify(onjuPLawList));

        alert("-ㅅ- 삭제 성공 part");
    }
    else {
        alert("Not exist");
    }    
}

function initAllStorageIP() {
    localStorage.removeItem("chkNowDate");
    localStorage.removeItem("onjuPLawList");
    localStorage.removeItem("onjuPDateList");

    alert("-ㅅ- 삭제 성공 all");
}