var previewYn = "N", filterYn = "N";
var niceYn = "N";
var sortYn1 = "N", sortYn2 = "N", sortYn3 = "N";
var IsGoSubMain = false, isFilteringSearch = false;
var initSearchObject = null, setSearchObject = null;
var preListIndex = 0, curListIndex = 0;

$(document).ready(function () {

    if ($("#searchForm") != null) {
        initSearchObject = getFormData($("#searchForm"));
        setSearchObject = getFormData($("#searchForm"));
    }


    // 서치폼 초기화
    function getFormData($form) {
        var unindexed_array = $form.serializeArray();
        var indexed_array = {};

        $.map(unindexed_array, function (n, i) {
            indexed_array[n['name']] = n['value'];
        });

        return indexed_array;
    }

    chkCat_A = function (d) {
        if ($("#cType" + d + "_a").prop("checked")) {
            $("input[name=cType" + d + "]").prop("checked", true);
        } else {
            $("input[name=cType" + d + "]").prop("checked", false);
        }
        if ($('#selType3').length > 0) {
            //$('#selType3').html("<option>법원등급 선택</option>");
            if ($("#sCode").val() == "J001") {
                if (d == "3") {
                    $('#selType3').html("<option>전체</option>");                    
                    $('#sSubType3').val("");                    
                }
            }
            else {
                if (d == "3") {
                    $('#selType3').html("<option>전체</option>");
                }                
            }
        }
        if ($('#selType4').length > 0) {            
            if ($("#sCode").val() == "I001") {
                $('#selType4').html("<option>전체</option>");
            }
            if ($("#sCode").val() == "C000") {
                if (d == "4") {
                    $('#selType4').html("<option>전체</option>");
                }                
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
        var colCode = $("#sCode").val();        

        $("input[name=cType" + d + "]:checkbox").each(function (e) {
            
            if (!this.checked) { isAllchk = false; }
            if (colCode == "C000") {
                if ($('#selType3').length > 0 && d == "3") {
                    if (this.checked) { selName += $(this).val() + ", "; }
                }

                if ($('#selType4').length > 0 && d == "4") {
                    if (this.checked) { selName += $(this).val() + ", "; }
                }
            } else if (colCode == "I001") {
                if ($('#selType4').length > 0 && d == "4") {
                    if (this.checked) { selName += $(this).val() + ", "; }
                }
            }
            else if (colCode == "D001") {
                if ($('#selType3').length > 0 && d == "3") {
                    if (this.checked) { selName += $(".divctype3").eq(e).text() + ","; }
                }
            }
            else if (colCode == "J001") {
                if ($('#selType3').length > 0 && d == "3") {
                    if (this.checked) {
                        selName += $(this).attr("data-name") + ", ";
                    }
                }
            }
        });
        $("#cType" + d + "_a").prop("checked", isAllchk);

        if (isAllchk && $("#sCode").val() == "L007") {
            treaty.setCategoryType();
        }
                
        if (colCode == "C000") {
            if ($('#selType3').length > 0 && d == "3") {
                //if (isAllchk) { $('#selType3').html("<option>법원등급 선택</option>"); }                
                if (isAllchk) {
                    $('#selType3').html("<option>전체</option>");
                }
                else {
                    //if (selName == "") { $('#selType3').html("<option>법원등급 선택</option>"); }
                    if (selName == "") { $('#selType3').html("<option>전체</option>"); }
                    else { selName = selName.substring(0, selName.length - 2); $('#selType3').html("<option>" + selName + "</option>"); }
                }
            }

            if ($('#selType4').length > 0 && d == "4")
            {                
                if (isAllchk)
                {
                    $('#selType4').html("<option>전체</option>");
                }
                else {
                    //if (selName == "") { $('#selType3').html("<option>법원등급 선택</option>"); }
                    if (selName == "") { $('#selType4').html("<option>전체</option>"); }
                    else { selName = selName.substring(0, selName.length - 2); $('#selType4').html("<option>" + selName + "</option>"); }
                }
            }
        } else if (colCode == "I001") {
            if ($('#selType4').length > 0 && d == "4") {
                //if (isAllchk) { $('#selType4').html("<option>심판종류 선택</option>"); }
                if (isAllchk) { $('#selType4').html("<option>전체</option>"); }
                else {
                    //if (selName == "") { $('#selType4').html("<option>심판종류 선택</option>"); }
                    if (selName == "") { $('#selType4').html("<option>전체</option>"); }
                    else { selName = selName.substring(0, selName.length - 2); $('#selType4').html("<option>" + selName + "</option>"); }
                }
            }
        } else if (colCode == "L007") {
            treaty.setCategoryType();
        }
        else if (colCode == "D001") {
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
        else if (colCode == "J001") {
            if ($('#selType3').length > 0 && d == "3") {
                if (isAllchk) {
                    $('#selType3').html("<option>전체</option>");
                }
                else {
                    if (selName == "") { $('#selType3').html("<option>전체</option>"); }
                    else { selName = selName.substring(0, selName.length - 2); $('#selType3').html("<option>" + selName + "</option>"); }

                    $("#sSubType3").val(selName);
                }
            }
        }
    };

    chkSubCat_D = function (d) {
        if ($("#dType" + d + "_a").prop("checked")) {
            $("input[name=dType" + d + "]").prop("checked", true);
        } else {
            $("input[name=dType" + d + "]").prop("checked", false);
        }
    };


    chkSubCat_A = function (d) {
        if ($("#eType" + d + "_a").prop("checked")) {
            $("input[name=eType" + d + "]").prop("checked", true);
        } else {
            $("input[name=eType" + d + "]").prop("checked", false);
        }
    };

    chkSubCat = function (d) {
        var isAllchk = false;
        var selName = "";
        $("input[name=eType" + d + "]:checkbox").each(function () {
            if (this.checked) { isAllchk = true; }
        });
        $("#eType" + d + "_a").prop("checked", isAllchk);
    };

    chkSub2Cat = function (d) {
        var isAllchk = true;
        var selName = "";
        $("input[name=eType" + d + "]:checkbox").each(function () {
            if (!this.checked) { isAllchk = false; }
        });
        $("#eType" + d + "_a").prop("checked", isAllchk);
    };


    chkSubCatCls_A = function (d) {
        if ($(".eType" + d + "_a").prop("checked")) {
            $(".eType" + d).prop("checked", true);
        } else {
            $(".eType" + d).prop("checked", false);
        }
    };

    chkSubCatCls_B = function (d, n) {
        var cnt = d + n;
        if ($("#eType" + d.toString() + "_a").prop("checked")) {
            for (var m = d; m < cnt; m++) {
                $("#eType" + m.toString() + "_b").prop("checked", true);
                $("input[name=eType" + m.toString() + "]").prop("checked", true);
            }
        } else {
            for (var m = d; m <= cnt; m++) {
                $("#eType" + m.toString() + "_b").prop("checked", false);
                $("input[name=eType" + m.toString() + "]").prop("checked", false);
            }
        }
    };

    chkSubCatCls_C = function (d, n) {
        if ($("#eType" + n.toString() + "_b").prop("checked")) {
            $("input[name=eType" + n.toString() + "]").prop("checked", true);
        } else {
            $("input[name=eType" + n.toString() + "]").prop("checked", false);
        }
    };

    chkSubCatCls_C2 = function (n) {
        var isAllchk = false;
        var selName = "";
        $("input[name=eType" + n + "]:checkbox").each(function () {
            if (this.checked) { isAllchk = true; }
        });
        $("#eType" + n + "_b").prop("checked", isAllchk);
    };


    chkSubCatCls = function (d) {
        var isAllchk = false;
        var selName = "";
        $(".eType" + d).each(function () {
            if (this.checked) { isAllchk = true; }
        });
        $(".eType" + d + "_a").prop("checked", isAllchk);
    };    

    // 초기화
    $("#resetBtn").click(function () {
        if ($('#selType3').length > 0) {
            //$('#selType3').html("<option>법원등급 선택</option>");
            $('#selType3').html("<option>전체</option>");
        }

        if ($('#selType4').length > 0) {
            //$('#selType3').html("<option>법원등급 선택</option>");
            if ($("#sCode").val() == "I001") {
                $('#selType4').html("<option>전체</option>");
            }
        }

        $("#searchForm :input[type='search']").each(function () {
            $(this).val("");
        });

        $("#searchForm :input[type='text']").each(function () {
            $(this).val("");
        });

        $("#searchForm :input[type='number']").each(function () {
            $(this).val("");
        });

        $("#searchForm :input[type='checkbox']").each(function () {
            $(this).prop("checked", true);
        });

        $("#searchForm select").each(function () {

            if ($("#sCat2").length > 0) {
                $('#sCat2').empty();
                $('#sCat2').html("<option value='00'>전체</option>");
            }
            $(this).find("option:eq(0)").prop("selected", true);
        });

        if ($("#searchForm :input[name=cType1]").attr("type") == "radio") {
            $('#searchForm :input[name=cType1][value=0]').prop('checked', 'checked');
        }

        if ($("#searchForm :input[name=cType2]").attr("type") == "radio") {
            $('#searchForm :input[name=cType2][value=0]').prop('checked', 'checked');
        }

        if ($("#searchForm :input[name=cType3]").attr("type") == "radio") {
            $('#searchForm :input[name=cType3][value=0]').prop('checked', 'checked');
        }

        if ($("#sCode").val() == "L007") {
            treaty.setCategoryType();
        }
        if ($("#sCode").val() == "L008") {
            locallaw.setCategoryType();
        }
    });

    $(document).on('click', '#chk_0', function () {
        if ($("#chk_0").prop("checked")) {
            $("input[name=chk]").prop("checked", true);
        } else {
            $("input[name=chk]").prop("checked", false);
        }
    });

    $(document).on('click', 'input[name=chk]', function () {
        $("#chk_0").prop("checked", false);
    });

    if (storage.getStatusType() == 0) {
        $("#option_a").attr('class', 'option_a_on');
        $("#option_b").attr('class', 'option_b');
        $(".list").addClass('type-a');
        reSettingHeight();
    }
    else {
        $("#option_a").attr('class', 'option_a');
        $("#option_b").attr('class', 'option_b_on');
        $(".list").removeClass('type-a');
        reSettingHeight();
    }

    $(document).on('change', '#sCat1', function () {
        if ($('#sCat2').length > 0) {
            var colCode = $("#sCode").val();
            if (colCode == "I002" ||
                colCode == "I003" ||
                colCode == "D021" ||
                colCode == "P001"
            ) {
                selectCat($('#sCat1 option:selected').val(), '0', '');
            }
            else if (colCode == "B002") {
                tax.setChangeTaxCategory($('#sCat1 option:selected').val());
            } else if (colCode == "L005") {
                if ($('#sCat1 option:selected').val() == "1") {
                    $("select[name=sCat2]").val("00").prop("selected", true);
                    $("select[name=sCat2]").attr("disabled", false);
                }
                else {
                    $("select[name=sCat2]").val("00").prop("selected", true);
                    $("select[name=sCat2]").attr("disabled", "disabled");
                }
            }

        }
    });

    $(document).on('change', '#sCat2', function () {
        var colCode = $("#sCode").val();
        switch (colCode) {
            case "D003":
                if ($(this).children('option:selected').val() == "00") { setChangeAble(false); } else { setChangeAble(true); }
                break;
            case "D004":
                if ($(this).children('option:selected').val() == "00") { setChangeAble(false); } else { setChangeAble(true); }
                break;
        }
    });

    selectCat = function (sC1, sC2, sWord) {
        if (sC1 == "00") {
            $('#sCat2').empty();
            $('#sCat2').html("<option value='00'>전체</option>");
        }
        else {
            page.selectCategory(sC1, sC2, sWord, getColChkValue());
        }
    };

    selectSubCat = function (sC1, sC2) {
        if (sC1 != "00" && sC1 != "") page.selectCategory(sC1, sC2, "", 1);
    };

    setSelectYear = function () {
        var colCode = $("#sCode").val();
        var toDay = new Date();
        var year = toDay.getFullYear();
        var str = "<option value='00' >년도</option>";
        var sYear = ($('#sYearChk').length > 0) ? $('#sYearChk').val() : "0";
        switch (colCode) {
            case "C000":
                for (var i = year; i >= 2001; i--) {
                    str += "<option value='" + i + "' ";
                    str += (sYear == i.toString()) ? "selected" : "";
                    str += ">" + i + "년</option>";
                }
                break;
            default:
                for (var i = year; i >= 1990; i--) {
                    str += "<option value='" + i + "' >" + i + "년</option>";
                }
                break;
        }
        $("#sYear").html(str);
        if ($('#eYear').length > 0) { $("#eYear").html(str); }
    };

    $(document).on('change', '#sYear', function () {
        var colCode = $("#sCode").val();
        switch (colCode) {
            case "C000":
                if ($('#sYearChk').length > 0) {
                    page.selectCategory($(this).children('option:selected').val(), 0, $("#selCourt").children('option:selected').val(), 9);
                }
                else {
                    page.initMainList($(this).children('option:selected').val(), 0, 9);
                }
                break;
            case "D003":
                mCat1 = ''; mCat2 = '';
                if ($('#sYearVal').length > 0) {
                    $('#sYearVal').val($(this).children('option:selected').val());
                }
                if ($(this).children('option:selected').val() == "00") { setChangeAble(false); } else { setChangeAble(true); }
                page.selectCategory($("#sCat1").children('option:selected').val(), 0, $(this).children('option:selected').val(), 1);
                break;
            case "D004":
                mCat1 = ''; mCat2 = '';
                if ($('#sYearVal').length > 0) {
                    $('#sYearVal').val($(this).children('option:selected').val());
                }
                if ($(this).children('option:selected').val() == "00") { setChangeAble(false); } else { setChangeAble(true); }
                page.selectCategory($("#sCat1").children('option:selected').val(), 0, $(this).children('option:selected').val(), 1);
                break;
        }

    });

    $(document).on('change', '#eYear', function () {
        var colCode = $("#sCode").val();
        switch (colCode) {
            case "C000":
                if ($('#sYearChk').length > 0) {
                    caselaw.selectSubCategory($(this).children('option:selected').val(), 0, $("#selCourt").children('option:selected').val(), 9);
                }
                break;
        }

    });


    var expanded = false, subexpanded = false;
    showCheckboxes = function (ob) {
        if (ob == "checkboxes") {
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
    
    setSelectliClass = function () {
        $("ol.list>li").each(function (index) {
            if (preListIndex == curListIndex) {
                if (index == curListIndex) {
                    $(this).addClass('_this');
                }
            }
            else {
                if (index == preListIndex) {
                    $(this).removeClass('_this');
                } else if (index == curListIndex) {
                    $(this).addClass('_this');
                }
            }
        });
        preListIndex = curListIndex;
    };

    setSelectliIndex = function (did) {
        $(".co_searchContent").each(function (index) {
            if (did.substring(0, 4) == 'D021' || did.substring(0, 4) == 'F001') {
                if ($(this).find("h3>a").attr('href').split('=')[1] == did.replace(/_R4/g, '')) {
                    curListIndex = index;
                }
            }
            else {
                if ($(this).find("h3>a").attr('href').split('=')[1].substring(0, 16) == did.substring(0, 16)) {
                    curListIndex = index;
                }
            }
        });
        setSelectliClass();
    };



    getColChkValue = function () {
        var r = 1;
        var colCode = $("#sCode").val();
        switch (colCode) {
            case "D001":
                r = 3;
                break;
            case "P001":
                r = 0;
                break;
            default:
                r = 1;
                break;
        }
        return r;
    };

    setChangeAble = function (t) {
        if (t) {
            $("#cDate1").val("");
            $("#cDate2").val("");
        }
        $("#cDate1").attr("disabled", t);
        $("#cDate2").attr("disabled", t);
        $('.btn-square').attr('disabled', t);
    };

    // 페이지 이동
    goToPage = function (pageNo) {
        $("html").scrollTop(0);
        $('#sPage').val(pageNo);
        if ($('#sSubPage').length > 0) { $('#sSubPage').val("1"); }
        if (page.getChkLawFirm()) {
            lawfirm.getContentList(page.getTargetUrl());
        }
        else if (page.getChkLawyerNavi()) {
            lawyernavi.setJobCodeBinding();
            lawyernavi.setGenderCodeBinding();
            lawyernavi.chkValidation(2);
        }
        else {
            if (filterYn == "Y") {
                setSearchObject["sPage"] = pageNo;
                getFilterContentList(page.getTargetUrl());
            }
            else {
                initSearchObject["sPage"] = pageNo;
                if (initSearchObject["sCode"] == "B003") {
                    removeNumber("sWord");
                }

                if (initSearchObject["sCode"] == "B002") {
                    getContentList(page.getTargetUrl());
                }
                else {
                    getInitContentList(page.getTargetUrl());
                }
            }
            //getContentList(page.getTargetUrl());
        }
    };

    // 날짜에 숫자만 입력되도록 함.
    $(document).on('keyup', '#cDate1', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    $(document).on('keyup', '#cDate2', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    $(document).on('keyup', '#dDate1', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    $(document).on('keyup', '#dDate2', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
});



