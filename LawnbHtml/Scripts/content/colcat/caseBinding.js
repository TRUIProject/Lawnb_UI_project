//var expanded = false;
var expandChk = false;
var cInnerHtml = "";
var caseArr = [];
$(function () {


//    $("#checkboxes").bind("mouseleave", function () {
//        $("#checkboxes").hide();
//        expanded = false;
//    });

//    $("#checkboxes_sub").bind("mouseleave", function () {
//        $("#checkboxes_sub").hide();
//        expanded = false;
//    }); 

    $('.case_follow').on('click', 'div', function () {
        $('.main_container').addClass('_view');
    });     
});

$(document).ready(function () {
    $(document).on('change', '#selCourt', function () {
        var colCode = $("#sCode").val();
        page.selectCategory($("#sYear").children('option:selected').val(), 0, $(this).children('option:selected').val(), 9);
    });

    if ($("#sim_refer").length > 0 ||
        $("#law_refer").length > 0 ||
        $("#refcase_point").length > 0 ||
        $("#case_refer").length > 0) { } else { $(".hr_line").hide(); }

      if ($("#prPansi_t").length > 0 ||
        $("#prSumm_t").length > 0 ||
        $("#prCont_t_0").length > 0 ||
        $("#prCont_t_1").length > 0 ||
        $("#prCont_t_2").length > 0) { $(".hr_line.jmLine").show(); } else { $(".hr_line.jmLine").hide(); }

    $(document).mouseup(function (e) {
        if ($('#selContList').has(e.target).length == 0 && $('#checkboxes2').has(e.target).length == 0) {
            $("#checkboxes2").hide();
            expandChk = false;
        }
    });

});

var caselaw = new function () {
    this.goSubMainList = function (n, obj) {
        IsGoSubMain = true;
        $('#sType').val("0");
        $('#sCat').val(n);
        if ($('#sCat').val() == null) {
            $('#sCat1').val(n);
            $('#sDate1').val($('#eYear').children('option:selected').val());
        } else {
            $('#sDate1').val($('#sYear').children('option:selected').val());
        }
        if ($('#sDate1').val() == "00") {
            $('#sDate1').val($(obj).find("span").text().split('년')[0].replace('[', '').replace(/ /g, ''));
        }
        $('#sSort').val('1');
        $('#searchForm').attr("action", "/Info/ContentSubMain");
        $('#searchForm').removeAttr('onsubmit').submit();

    };

    this.getSourceSearch = function () {
        $('#sType').val("0");
        $('#sViewPage').val("1");
        $('#sDate1').val($('#sYear').children('option:selected').val());
    };

    this.setCaseHistoryInnerHtml = function () {
        var cases = []; var cHtml = "";
        cases = JSON.parse(localStorage.getItem("caseHisList"));

        jQuery.each(cases, function () {
            var hcase = this.split(':');
            cHtml += "<span><a href=\"/Info/ContentView?sid=" + hcase[0] + "|R5\">" + hcase[1] + "</a> <em onclick=\"caselaw.removeCaseHistoryInnerHtml('" + this + "')\">X</em></span>";
        });
        $(".history_hlist").html("히스토리 조회 " + cHtml);
    };

    this.removeCaseHistoryInnerHtml = function (s) {
        var cases = [];
        cases = JSON.parse(localStorage.getItem("caseHisList"));
        cases.splice(cases.indexOf(s), 1);
        localStorage.setItem("caseHisList", JSON.stringify(cases));
        caselaw.setCaseHistoryInnerHtml();
    };

    this.setCasesInnerHtml = function (s) {
        if (s != "") {
            if (caseArr.indexOf(s) < 0) {
                caseArr.push(s);
            }
        }
        var iHtml = "";
        jQuery.each(caseArr, function () {
            var hcase = this.split(':');
            iHtml += "<span><a href=\"javascript:view.showPreview('" + hcase[0] + "')\">" + hcase[1] + "</a> <em onclick=\"caselaw.removeCasesInnerHtml('" + this + "')\">X</em></span>";
        });
        $("#hCasesList").html("본문조회 " + iHtml);
    };

    this.removeCasesInnerHtml = function (s) {
        caseArr.splice(caseArr.indexOf(s), 1);
        caselaw.setCasesInnerHtml('');
    };

    this.goToRefView = function (j) {
        showOriginalView('/Info/ContentView?sid=' + j);
    };

    this.showCaseHis = function (j) {
        if (typeof previewYn !== 'undefined') {
            if (previewYn == "Y") {
                showOriginalView('/Info/ContentView?sid=' + j);
            }
        }
        else {
            $(location).attr('href', '/Info/ContentView?sid=' + j);
        }
    };

    this.goToCaseQuickList = function (result) {
        IsGoSubMain = true;
        $('#sCode').val('C007');
        $('#sType').val("0");
        $('#searchForm').attr("action", "/Info/ContentList");
        $('#searchForm').removeAttr('onsubmit').submit();
    };

    this.selectSubCategory = function (n, n1, s, m) {
        setTimeout(function () {
            var sCode = $('#sCode').val();
            var data = { "sCode": sCode + "_E",
                "sId": n,
                "sSubId": n1,
                "sWord": s,
                "sType": m // 검색후 하위메뉴 값을 다시 설정
            };
            sendNonBlockingAjaxRequest(page.getTargetCatUrl(), data, caselaw.setSubSelectCallback);

        }, 100);
    };

    this.setSubSelectCallback = function (result) {
        if ($('#sYearChk').length > 0) {
            if (result != null) {
                $('#eSourceList').empty();
                $('#eSourceList').html(result);
            } else {
                $('#eSourceList').empty();
            }
        }
        setHeight_under();
    };


    //2021.11 별지 개선
    this.byeoljiPDFOpen = function (did, bIndex) {

        var dataParams = { "dId": did, "bIndex": bIndex };
        sendNonBlockingAjaxRequest("/SubInfo/GetByeoljiData", dataParams, function (result) {
            if (result != null) {
                $('#view_content').hide();
                $("#title_result_tab").hide();
                $("#result_area").hide();

                $('#view_sub_content').empty();
                $('#view_sub_content').html(result);
                $('#view_sub_content').show();

                if ($('#pdf_view_ahnex').length > 0) {
                    //pdf_view_byeolji
                    pdfOpen('pdf_view_ahnex');
                    //pdfAjaxOpen('pdf_view_ahnex', 'C000', '');
                }
                
                setHeight();
            }
        });
    };

    //2021.11 별지 개선
    this.byeoljiPDFClose = function () {

        $("#view_sub_content").hide();
        $("#view_content").show();

        setHeight();
    }; 

    this.changeSummList = function (s) {
        $('.result_case_tab li').removeClass('_this');
        $('.result_case_tab li').eq(s).addClass('_this');
        $('#sType5').val(s);
        initSearchObject["sType5"] = s;
        setSearchObject["sType5"] = s;
        if (s == '0') {
            isSearchOne = true;
            page.initSearchList();
        } else {
            if ($('#sSort').val() == '2') {
                page.changeSorting(0);
            } else {
                page.initSearchList();
            }
        }
       
    };
};

this.setSubViewCallback = function (result) {
    if (result != null) {
        if (cInnerHtml == "") {
            cInnerHtml = $('#result_area').html();
        }
        if (sParams == "R1") {
            $('#result_area').empty();
            $('#result_area').html(result);
            view.viewRefDataConten();
            setHeight();
        }

        hidePrintLayer("open");
    }
};

var referJoNo = 0;
function caseReferJoAdd()
{
    var contHtml = "";
    var referjoCnt = $(".referjo").length;

    if (referjoCnt >= 3) {
        alert("참조조문은 최대 3개까지 가능합니다.");
        return;
    }

    var addNo = referJoNo + 1;

    contHtml += "<li id=\"referJoli_" + addNo + "\" class=\"referjo\">";
    contHtml += "<span>법령명</span> ";
    contHtml += "<input type=\"text\" class=\"w28p\" id=\"sSubWord6\" name=\"sSubWord6\" placeholder=\"예) 형법, 민사소송\" /> ";
    contHtml += "<span>조문번호</span> ";
    contHtml += "<input type=\"text\" id=\"sSubWord7\" name=\"sSubWord7\" class=\"w28p\" placeholder=\"예) 제10조\" /> ";
    contHtml += "<div class=\"btn-group\"><div class=\"btn  btn-default\" onclick=\"delCaseReferJo('" + addNo + "')\">X 삭제</div></div>";
    contHtml += "</li>";

    if (referJoNo != 0 && referjoCnt != 1)
    {
        $(".referjo").eq(referjoCnt - 1).after(contHtml);        
    }
    else
    {
        $("#referJoli_0").after(contHtml);
    }
    referJoNo += 1;
}

function delCaseReferJo(_no)
{
    $("#referJoli_" + _no).remove();
}

function checkboxesDisplay(ob) {
    if (ob == 'checkboxes' || ob == 'checkboxes2') {
        if (!expandChk) {
            $("#" + ob).show();
            expandChk = true;
        } else {
            $("#" + ob).hide();
            expandChk = false;
        }
    }
};