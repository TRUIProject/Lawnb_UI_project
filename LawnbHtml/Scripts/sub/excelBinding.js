$(function () {

    initPrintHtml = function () {

        var pUrl = parent.document.location.href;
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

        if (pArr.length > 0) {
            switch (pArr) {
                case "L":

                    $('.main_container_view').html($(top.document).find("#view_content").html().replace(/<(\/a|a)([^>]*)>/gi, ""));
                    $('.crit').remove();
                    $('.title_area').remove();
                    $('#tree_area').remove();
                    $('.box_third.joView').height("auto");
                    $('#wrapper_sam_no').height("auto");
                    $('#sam1').html($('#samTitle1').html().replace(/<(\/p)>/gi, "<br>").replace(/<(p)>/gi, ""));
                    $('#sam2').html($('#samTitle2').html().replace(/<(\/p)>/gi, "<br>").replace(/<(p)>/gi, ""));
                    $('#sam3').html($('#samTitle3').html().replace(/<(\/p)>/gi, "<br>").replace(/<(p)>/gi, ""));
                    var isOne = ($(top.document).find('#samTop2').attr('class') == "on") ? true : false;
                    var trHtml = "";
                    $('.jo_group').each(function (index) {
                        trHtml += "<tr>";
                        if (isOne) {
                            if ($(this).parents("div").attr('id') == "total_group") {
                                //trHtml += "<td>" + ($(this).find("#wrapper_sam").length > 0 ? $(this).find("#wrapper_sam").html().replace(/<(\/em|em)>/gi, "") : "").replace(/<(IMG|img)(.*?)>/gi, "") + "</td>";
                                //trHtml += "<td>" + ($(this).find("#wrapper_sam1").length > 0 ? $(this).find("#wrapper_sam1").html().replace(/<(\/em|em)>/gi, "") : "").replace(/<(IMG|img)(.*?)>/gi, "") + "</td>";
                                //trHtml += "<td>" + ($(this).find("#wrapper_sam2").length > 0 ? $(this).find("#wrapper_sam2").html().replace(/<(\/em|em)>/gi, "") : "").replace(/<(IMG|img)(.*?)>/gi, "") + "</td>";
                                trHtml += "<td>" + ($(this).find('.box_third').eq(0).length > 0 ? $(this).find('.box_third').eq(0).html().replace(/<(\/em|em)>/gi, "") : "").replace(/<(IMG|img)(.*?)>/gi, "") + "</td>";
                                trHtml += "<td>" + ($(this).find('.box_third').eq(1).length > 0 ? $(this).find('.box_third').eq(1).html().replace(/<(\/em|em)>/gi, "") : "").replace(/<(IMG|img)(.*?)>/gi, "") + "</td>";
                                trHtml += "<td>" + ($(this).find('.box_third').eq(2).length > 0 ? $(this).find('.box_third').eq(2).html().replace(/<(\/em|em)>/gi, "") : "").replace(/<(IMG|img)(.*?)>/gi, "") + "</td>";
                            }
                        } else {
                            trHtml += "<td>" + ($(this).find("#samC1").length > 0 ? $(this).find("#samC1").html().replace(/<(\/em|em)>/gi, "") : "").replace(/<(IMG|img)(.*?)>/gi, "") + "</td>";
                            trHtml += "<td>" + ($(this).find("#samC2").length > 0 ? $(this).find("#samC2").html().replace(/<(\/em|em)>/gi, "") : "").replace(/<(IMG|img)(.*?)>/gi, "") + "</td>";
                            trHtml += "<td>" + ($(this).find("#samC3").length > 0 ? $(this).find("#samC3").html().replace(/<(\/em|em)>/gi, "") : "").replace(/<(IMG|img)(.*?)>/gi, "") + "</td>";
                        }
                        trHtml += "</tr>";
                    });
                    $('#samcont').html(trHtml);
                    $('.main_container_view').html("");
                    doExport($(top.document).find("#divEmailTitle").html());
                    if (isOne) { setTimeout(function () { parent.law.changeLRGTarget('2'); }, 1200); }
                    break;
                case "U":
                    $('.main_container_view').html($(top.document).find("#view_content").html().replace(/<(\/a|a)([^>]*)>/gi, ""));
                    $("#NewOldContID").height("auto").css('overflow', 'visible');
                    $('.title_area').remove();
                    $('.newold_right').width('50%');
                    $('.newold_left').width('50%');
                    $('#list_Left').remove();
                    $('#list_Right').remove();

                    if ($(top.document).find('#dLCompareList1').length > 0) {
                        $('#s_rev_N').remove();
                        $('#dLCompareList1').remove();
                        $("#n_top_left>div.lawtitle_content").html($("#n_top_left>div.lawtitle_content").html() + "<span id='s_rev_O'>" + $(top.document).find("#dLCompareList1 option:selected").text() + "</span>");
                    }

                    if ($(top.document).find('#dLCompareList2').length > 0) {
                        $('#s_rev_N').remove();
                        $('#dLCompareLis2').remove();
                        $("#n_top_right>div.lawtitle_content").html($("#n_top_right>div.lawtitle_content").html() + "<span id='s_rev_O'>" + $(top.document).find("#dLCompareList2 option:selected").text() + "</span>");

                    } else {
                        $('#s_rev_N').remove();
                        $('#dLCompareList').remove();
                        $("#n_top_right>div.lawtitle_content").html($("#n_top_right>div.lawtitle_content").html() + "<span id='s_rev_O'>" + $(top.document).find("#dLCompareList option:selected").text() + "</span>");
                    }
                    $('#sam1').html("<b>구법</b>");
                    $('#sam2').html("<b>신법</b>");
                    var trHtml = "";
                    trHtml += "<tr>";
                    trHtml += "<td><b>" + $("#n_top_left>.lawtitle_content>div").html() + "</b></td>";
                    trHtml += "<td><b>" + $("#n_top_right>.lawtitle_content>div").html() + "</b></td>";
                    trHtml += "</tr>";
                    trHtml += "<tr>";
                    trHtml += "<td><b>" + $("#n_top_left>.lawtitle_content>span").html() + "</b></td>";
                    trHtml += "<td><b>" + $("#n_top_right>.lawtitle_content>span").html() + "</b></td>";
                    trHtml += "</tr>";
                    trHtml += $("#NewOldContID>.popup_law>tbody").html().replace(/<(\/em|em)>/gi, "");
                    $('#samcont').html(trHtml);
                    $('.main_container_view').html("");
                    $('.new_normal').each(function (index) {
                        var tdVal = "";
                        if (index % 2 == 1) {
                            tdVal = $(this).html().replace(/<(span)>/gi, "<font color='blue'>").replace(/<(\/span)>/gi, "</font>");
                            $(this).html(tdVal);
                        } else {
                            tdVal = $(this).html().replace(/<(span)>/gi, "<font color='red'>").replace(/<(\/span)>/gi, "</font>");
                            $(this).html(tdVal);
                        }
                    });
                    doExport($(top.document).find("#divEmailTitle").html());
                    break;
                default:
                    if ($(top.document).find(".main_container_view_inner").length > 0) {
                        $('.main_container_view').html($(top.document).find(".main_container_view_inner").html().replace(/<marks id=\"mrk[0-9]{1,3}\">/gi, "").replace(/<\/marks>/gi, "").replace(/<(\/a|a)([^>]*)>/gi, ""));
                    }
                    var trHtml = $('#view_content>table>tbody').html();
                    $('#samcont').html(trHtml.replace(/<(\/em|em)>/gi, "").replace(/<\/?div(.*?)>/gi, ""));
                    $('.main_container_view').html("");
                    doExport($(top.document).find("#divEmailTitle").html());
                    break;
            }
        }
        $('#sam1').html("");
        $('#sam2').html("");
        $('#sam3').html("");
        $('#samcont').html("");
    };



    function doExport(f) {
        $('#pvtTable').tableExport({ type: 'excel',
            excelstyles: ['background-color', 'color',
                              'font-family', 'font-size', 'font-weight',
                              'text-align'], fileName: f, htmlContent: true
        });
        $(top.document).find("#exiframe").hide();
    }
});
