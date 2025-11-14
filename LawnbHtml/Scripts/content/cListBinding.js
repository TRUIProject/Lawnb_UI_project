$(document).ready(function () {
    $("#searchBtn_ios").click(function (e) {
        e.preventDefault();
        if (page.getSearch()) {
            $('#searchForm')[0].submit();
        }
    });

    // 2022.05 판례 검색 개선 - 상세검색 box open
    detailAreaOpenAfterSearch();
});

var page = new function () {
    var pageParams = null;
    this.init = function () {
        page.bindEvent();
    };

    this.init = function (data) {
        pageParams = data;
        page.bindEvent();
        if (pageParams.subCat1 != "00" && pageParams.subCat1 != "") selectSubCat(pageParams.subCat1, pageParams.subCat2);
    };

    // 카테고리를 반영하지 않는다. 그래서 초기화시 두번째 파라미터를 던진다.
    this.init = function (data, n) {
        pageParams = data;
        page.bindEvent();
    };

    this.getLatestList = function (sCode) {
        if (sCode == "N003") //로이터뉴스(RSS)
            getRightContentLatestList(pageParams.listNewUrl, sCode);
        else {
            getContentLatestList(pageParams.listNewUrl, sCode);
        }
    };

    this.getLatestListByType = function (sCode, sCat) {
        getContentLatestListByType(pageParams.listNewUrl, sCode, sCat);
    };

    this.bindEvent = function () {

        // 리스트 수 변경
        $(document).on('change', '#sListChecker', function () {
            $('#sPage').val("1");
            setSearchObject["sPage"] = "1";
            initSearchObject["sPage"] = "1";
            if ($('#sSubPage').length > 0) { $('#sSubPage').val("1"); }
            $('#sList').val($(this).children('option:selected').val());
            setSearchObject["sList"] = $('#sList').val();
            if (page.getChkLawFirm()) {
                lawfirm.getContentList(page.getTargetUrl());
            }
            else {
                if (setSearchObject != null) {
                    if (setSearchObject["sCode"] == "B002") {
                        getContentList(pageParams.listUrl);
                    }
                    else if ($("#sType5").length > 0) {
                        if ($("#sType5").val().length == 11 || $("#divOrgView").length > 0) {
                            getContentList(pageParams.listLawyerUrl);
                        }
                        else {
                            getFilterContentList(pageParams.listUrl);
                        }
                    }
                    else {
                        getFilterContentList(pageParams.listUrl);
                    }
                }
                else {
                    getContentList(pageParams.listUrl);
                }
            }

        });

        // 결과 정리 날짜 정의 
        $(document).on('change', '#dDate', function () {
            if ($(this).children('option:selected').val() != '00' && $(this).children('option:selected').val() != '0') {
                page.dateInput($(this).children('option:selected').val(), 'dDate');
            } else {
                setSearchObject["sDate1"] = "";
                setSearchObject["sDate2"] = "";
                $('#dDate1').val(""); $('#dDate2').val("");
            }
        });


        $(document).mouseup(function (e) { //검색popup 닫기
            if ($('#checkboxes').has(e.target).length == 0) {
                $("#checkboxes").hide();
                expanded = false;
            }

            if ($('#checkboxes_sub').has(e.target).length == 0) {
                $("#checkboxes_sub").hide();
                expanded = false;
            }
        });

        setStartMyDesk(); // 마이데스크 아이콘 생성

    };

    this.getTargetUrl = function () {
        if (pageParams.listLawyerUrl != null) {
            return pageParams.listLawyerUrl;
        } else { return pageParams.listUrl; }
    };

    this.getChkLawFirm = function () {
        if (pageParams.listLawyerUrl != null) {
            if (lawfirmParams != null) {
                if (lawfirmParams.listUrl != null) {
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                return false;
            }
        }
        else { return false; }
    };

    this.getChkLawyerNavi = function () {
        if (typeof (lawyernavi) == 'undefined') {
            return false
        }
        else { return true; }
    };

    this.getTargetNewUrl = function () {
        return pageParams.listNewUrl;
    };

    this.getTargetCatUrl = function () {
        return pageParams.catSelectUrl;
    };

    // 리얼 파일 네임
    this.getFileRealName = function () {
        return (pageParams.realFileName == null) ? "" : pageParams.realFileName;
    };

    // 검색어 클릭 서치
    this.getSearchWord = function (m, n) {
        var _str = " 계약서";
        if (n == "0")
            m += _str;

        $("#sWord").val(m);
        searchForm.submit();
    };

    // Datadog custom event
    function sendSearch2Datadog(sword, scode) {
        window.DD_RUM.onReady(function () {
            window.DD_RUM.addAction(
                'run_search',
                {
                    'search_term': sword,
                    'page_code': scode
                }
            )
        })
    }

    // 기본 서치
    this.getSearch = function () {
        var sCode = $('#sCode').val();
        if (!IsGoSubMain) {
            if ($('#sWordTwo').length > 0) {
                if ($("#sWordTwo").val() != "") {
                    $("#sWord").val($("#sWordTwo").val());
                    if ($('#sCodeTwo').length > 0) { $("#sCode").val($("#sCodeTwo").val()); }
                }
            }

            var chkVal = page.chkSearchWord();
            if (chkVal == 0) {
                alert('검색어를 입력해 주세요.');
                return false;
            }
            else if (chkVal == 2) {
                return false;
            }
            else if (chkVal == 3) {
                alert('검색어는 두 자 이상이어야 합니다.');
                return false;
            }
            else if (chkVal == 5) {
                alert('제한된 개수 검색어에 특수문자가 들어 있습니다.');
                return false;
            }
            else if (chkVal == 4) {
                alert('검색어 또는 지역선택은 필수 입니다.');
                return false;
            }
            else if (chkVal == 1) {

                sendSearch2Datadog($("#sWord").val(), sCode);

                page.setType();
                page.setWordHighlightData();
                $('#sPage').val("1");

                if (!($('#sType1').val() == "P001")) {
                    if ($('#sViewPage').length > 0) { $('#sViewPage').val("2"); }
                    if ($('#sSubType').length > 0) { $('#sSubType').val("-1"); }
                    if ($('#sSubType1').length > 0) { $('#sSubType1').val(""); }
                    if ($('#sSortChk_1').length > 0) { $('#sSortChk_1').val("0"); }
                    if ($('#sSortChk_2').length > 0) { $('#sSortChk_2').val("0"); }
                    if ($('#sSortChk_3').length > 0) { $('#sSortChk_3').val("0"); }
                }
                $('#sType').val("0");

                if (sCode == "D001" || sCode == "D003" || sCode == "D004" || sCode == "D011"
                    || sCode == "D009" || sCode == "D007" || sCode == "D008"
                    || sCode == "D022") {
                    $('#sSort').val("0");
                }

                if (sCode == "C000") {
                    $('#sType5').val("");
                }
                return true;
            }
        }
    };


    // 결과정리 서치
    this.getSubSearch = function () {
        if (page.getChkLawFirm()) {
            lawfirm.getSubSearch();
        }
        else {
            if (page.setSubType() == 0) {
                setSearchObject["sPage"] = "1";
                initSearchObject["sPage"] = "1";
                getFilterContentList(pageParams.listUrl);
            }
            isFilteringSearch = true;
        }

        if ($("#co_mainContainer").hasClass('mobile') && document.body.clientWidth < 500) { //모바일면
            $('.left_container').removeClass('slide_mov ').removeClass('add_border ');
            $('.search_filter').addClass('orange');
            $("html").css("overflow-y", "auto");
        }
    };

    // 적용취소
    this.getInitSearch = function () {
        if (page.getChkLawFirm()) {
            lawfirm.getInitSearch();
        }
        else {
            if ($('#sSubType').val() != '') {
                initSearchObject["sSubType"] = $('#sSubType').val();
            }
            setSearchObject["sPage"] = "1";
            initSearchObject["sPage"] = "1";

            // 날짜 기간 변경시 날짜 초기화
            if (setSearchObject != null) {
                setSearchObject["sDate1"] = "";
                setSearchObject["sDate2"] = "";
                setSearchObject["sSubType1"] = "";
            }

            getInitContentList(pageParams.listUrl);
            page.setInitSubType();
            isFilteringSearch = false;
        }
        if ($("#co_mainContainer").hasClass('mobile') && document.body.clientWidth < 500) { //모바일면
            $('.left_container').removeClass('slide_mov ').removeClass('add_border ');
            $('.search_filter').removeClass('orange');
            $("html").css("overflow-y", "auto");
        }
    };

    // 서브페이지 이동
    this.goToSubPage = function (pageNo, d) {
        $('#sSubPage').val(pageNo);
        var arr = d.split('_');
        $('#sNum').val(arr[0]);
        $('#sCat1').val(arr[1]);
        $('#sCat2').val(arr[2]);
        $('#sSubList').val("7");
        getContentSubList(pageParams.listSubUrl);
    };

    //리스트 출력
    this.moveSearchList = function (idx) {
        $('#sPage').val("1");
        $('#sSubType').val(idx);
        page.setType();
        if ($("#sCode").val() == "B003") {
            removeNumber("sWord");
            getInitContentList(pageParams.listUrl);
        }
        else {
            getApiContentList(pageParams.listUrl);
        }
    };

    //선택 리스트 출력
    this.changeSearchList = function (idx) {
        var sCode = $('#sCode').val();
        initSearchObject["sSubType"] = idx;
        setSearchObject["sSubType"] = idx;
        setSearchObject["sPage"] = "1";
        initSearchObject["sPage"] = "1";
        $('#sSubType').val(idx);
        if (sCode == "C000" ) {
            if (idx == 1 || idx == 2 || idx == 5) {
                $('#sType5').val('0');
                initSearchObject["sType5"] = '0';
                setSearchObject["sType5"] = '0';
                $('.result_case_tab').hide();
            }
            else { $('.result_case_tab').show();}
        }
        if (sCode == "L008") {
            if (setSearchObject["sSubType1"] != null) { setSearchObject["sSubType1"] = ''; $('#sSubType1').val(''); }
        }

        if (isFilteringSearch) {
            getFilterContentList(pageParams.listUrl);
        } else {
            getInitContentList(pageParams.listUrl);
        }
        if ($("#co_mainContainer").has('mobile') && document.body.clientWidth < 500) { //모바일면 {
            $('.left_container').removeClass('slide_mov ').removeClass('add_border ');
            $("html").css("overflow", "auto");
        }
    };

    //API 리스트 출력
    this.changeApiSearchList = function (idx) {
        $('#sPage').val("1");
        $('#sSubType').val(idx);
        page.setType();
        getApiContentList(pageParams.listUrl);
    };

    //서브 리스트 출력
    this.changeSubSearchList = function () {
        $('#sSubPage').val("1");
        getContentSubList(pageParams.listSubUrl);
    };

    // 정렬
    this.changeSorting = function (s) {
        $('#sPage').val("1");
        if ($('#sSubPage').length > 0) { $('#sSubPage').val("1"); }
        $('#sSort').val(s);
        setSearchObject["sPage"] = "1";
        initSearchObject["sPage"] = "1";
        setSearchObject["sSort"] = s;
        initSearchObject["sSort"] = s;
        if ($('#sSortChk_1').length > 0) {

            switch (s) {
                case 0: if ($('#sSortChk_1').val() == "0") { if (sortYn1 == "N") { $('#sSortChk_1').val("0"); } else { $('#sSortChk_1').val("1"); } }
                    else { if (sortYn1 == "N") { $('#sSortChk_1').val("1"); } else { $('#sSortChk_1').val("0"); } } sortYn1 = "Y"; break;
                case 1: sortYn1 = "N"; break;
                case 2: sortYn1 = "N"; break;
            }
            setSearchObject["sSortChk_1"] = $('#sSortChk_1').val();
            initSearchObject["sSortChk_1"] = $('#sSortChk_1').val();
        }
        if ($('#sSortChk_2').length > 0) {

            switch (s) {
                case 0: sortYn2 = "N"; break;
                case 1: if ($('#sSortChk_2').val() == "0") { if (sortYn2 == "N") { $('#sSortChk_2').val("0"); } else { $('#sSortChk_2').val("1"); } }
                    else { if (sortYn2 == "N") { $('#sSortChk_2').val("1"); } else { $('#sSortChk_2').val("0"); } } sortYn2 = "Y"; break;
                case 2: sortYn2 = "N"; break;
            }
            setSearchObject["sSortChk_2"] = $('#sSortChk_2').val();
            initSearchObject["sSortChk_2"] = $('#sSortChk_2').val();
        }
        if ($('#sSortChk_3').length > 0) {

            switch (s) {
                case 0: sortYn3 = "N"; break;
                case 1: sortYn3 = "N"; break;
                case 2: if ($('#sSortChk_3').val() == "0") { if (sortYn3 == "N") { $('#sSortChk_3').val("0"); } else { $('#sSortChk_3').val("1"); } }
                    else { if (sortYn3 == "N") { $('#sSortChk_3').val("1"); } else { $('#sSortChk_3').val("0"); } } sortYn3 = "Y"; break;
            }
            setSearchObject["sSortChk_3"] = $('#sSortChk_3').val();
            initSearchObject["sSortChk_3"] = $('#sSortChk_3').val();
        }

        var sCodeSplit;
        if ($("#sId").length > 0) {
            sCodeSplit = $("#sId").val().split("_");
        }

        if (page.getChkLawFirm()) {
            lawfirm.getContentList(page.getTargetUrl());
        }
        else if ($("#sId").length > 0) {
            if (sCodeSplit[1] == "R6") {
                lawyernavi.initSearchList(2);
            }
        }
        else if ($("#divOrgView").length > 0) {
            getContentList(pageParams.listLawyerUrl);
        }
        else {
            page.setTheSortChk(s);

            if (setSearchObject != null) {
                getFilterContentList(pageParams.listUrl);
            }
            else {
                getContentList(pageParams.listUrl);
            }
        }
    };

    this.setTheFilterDateChk = function () {
        if ($('#cDate1').val() != '' && $('#cDate2').val() != '') {
            $("#dDate").val("00").prop("selected", true);
            $("#dDate").attr("disabled", "disabled");
            $("#dDate1").val($('#cDate1').val()); $("#dDate2").val($('#cDate2').val());
            //$("#dDate1").attr("disabled", true).attr("readonly", false);
            //$("#dDate2").attr("disabled", true).attr("readonly", false); 
            $("#dDateDiv").show();
        }
    };

    this.setTheSortChk = function (c) {
        var code = $('#sCode').val();
        var sInfo = new Object();
        sInfo.code = code;
        sInfo.chk = c;
        storage.setSortChk(sInfo);
    };

    this.gotoCat = function (s) {
        $('#sCat1').val(s);
        $('#sType').val("1");
        $('#sViewPage').val("1");
        getContentList(pageParams.listUrl);
    };

    // 초기 페이지 검색리스트 호출
    this.initSearchList = function () {
        var sSubType = $('#sSubType').val();
        var lArr = storage.getSortChk();
        var code = $('#sCode').val();
        if (code.substr(0, 2) == 'D0' ||
        code.substr(0, 2) == 'I0' ||
        code == 'L005' ||
        code == 'P013' ||
        code == 'P011' ||
        code == 'B007') {
            if (initSearchObject["sWord"] == "") {
                lArr = null;
                if ($('#sSortChk_2').length > 0 && $('#sSortChk_1').length == 0 && $('#sSortChk_3').length == 0) {
                    sortYn2 = "Y";
                }
            }
        }
        if (lArr != null) {
            for (var i = 0; i < lArr.length; i++) {
                if (lArr[i].code == code) {
                    $('#sSort').val(lArr[i].chk);
                    if (lArr[i].chk == "0") { sortYn1 = "Y" }
                    else if (lArr[i].chk == "1") { sortYn2 = "Y" }
                    else if (lArr[i].chk == "2") { sortYn3 = "Y" }
                    break;
                }
            }
        }
        page.setTheFilterDateChk();
      
        setTimeout(function () { page.moveSearchList(sSubType); }, 50);
    };

    // api 초기 페이지 검색리스트 호출
    this.initApiSearchList = function () {
        var sSubType = $('#sSubType').val();
        setTimeout(function () { page.changeApiSearchList(sSubType); }, 50);
    };

    //서브리스트 호출
    this.selectSubList = function (d) {
        var arr = d.split('_');
        $('#sNum').val(arr[0]);
        $('#sSubId1').val(arr[1]);
        if (arr.length == 3) $('#sSubId2').val(arr[2]);
        var cnt = $("#sub_i_" + arr[0]).val();
        if (cnt == 3) { $('#sSubList').val("7"); $("#sub_i_" + arr[0]).val("7"); }
        else { $('#sSubList').val("3"); $("#sub_i_" + arr[0]).val("3"); }
        setTimeout(function () { page.changeSubSearchList(); }, 100);
    };

    // 카테고리 선택
    this.selectCategory = function (n, n1, s, m) {
        setTimeout(function () { getSelectList(pageParams.catSelectUrl, n, n1, s, m); }, 100);
    };


    // 각 논문평석 학회 선택
    this.initSelectCategory = function (n) {
        setTimeout(function () { page.gotoCat(n); }, 100);
    };

    // 메인페이지 바닥 구성
    this.initMainList = function (n, n1, m) {
        getMainBtList(pageParams.bottomSetUrl, n, n1, m);
    };

    this.setType = function ()
    {
        if ($('#sType1').length > 0) {
            var st1 = ""; var objType = $("input[name=cType1]").attr("type");
            if (objType == "checkbox") {
                $("input[name=cType1]:checkbox").each(function () {
                    if (this.checked) { st1 += "1"; }
                    else { st1 += "0"; }
                });

                if (st1 != "") {
                    if (st1.indexOf("1") < 0) { st1 = st1.replace(/0/g, '1'); }
                    $('#sType1').val(st1);
                }

            } else if (objType == "radio") {
                st1 = $('input:radio[name=cType1]:checked').val();
                $('#sType1').val(st1);
            }


        }
        if ($('#sType2').length > 0) {
            var st2 = ""; var objType = $("input[name=cType2]").attr("type");
            if (objType == "checkbox") {
                $("input[name=cType2]:checkbox").each(function () {
                    if (this.checked) { st2 += "1"; }
                    else { st2 += "0"; }
                });

                if (st2 != "") {
                    if (st2.indexOf("1") < 0) { st2 = st2.replace(/0/g, '1'); }
                    $('#sType2').val(st2);
                }
            } else if (objType == "radio") {
                st2 = $('input:radio[name=cType2]:checked').val();
                $('#sType2').val(st2);
            }

        }
        if ($('#sType3').length > 0) {
            var st3 = ""; var objType = $("input[name=cType3]").attr("type");
            if (objType == "checkbox") {
                $("input[name=cType3]:checkbox").each(function () {
                    if (this.checked) { st3 += "1"; }
                    else { st3 += "0"; }
                });
                if (st3 != "") {
                    if (st3.indexOf("1") < 0) { st3 = st3.replace(/0/g, '1'); }
                    $('#sType3').val(st3);
                }
            } else if (objType == "radio") {
                st3 = $('input:radio[name=cType3]:checked').val();
                $('#sType3').val(st3);
            }

        }
        if ($('#cDate1').length > 0 && $('#cDate2').length > 0) {
            $('#sDate1').val($('#cDate1').val());
            $('#sDate2').val($('#cDate2').val());
        }
        if ($('#sType4').length > 0) {
            var st4 = ""; var objType = $("input[name=cType4]").attr("type");
            if (objType == "checkbox") {
                $("input[name=cType4]:checkbox").each(function () {
                    if (this.checked) { st4 += "1"; }
                    else { st4 += "0"; }
                    //console.log("x");
                    //console.log(st4);
                });
            } else if (objType == "radio") {
                st4 = $('input:radio[name=cType4]:checked').val();
            }
            if (st4 != "") {
                if (st4.indexOf("1") < 0) { st4 = st4.replace(/0/g, '1'); }
                $('#sType4').val(st4);
            }
        }

        //법조인 정보 입력
        if ($('#sCode').val() == "P000") {
            page.setLawyerType();
        }

        //조약 국가 정보 입력  
        if ($('#sCode').val() == "L007") {
            treaty.setNationToCat2();
        }

        // 자치법규 정보 입력
        if ($('#sCode').val() == "L008") {
            locallaw.SetAreaChkToCat2();
        }

        //온주 법령 아이디 저장
        if ($('#sCode').val() == "J001") {

            var chkVal = "";
            if (!$("#cType3_a").is(":checked")) {
                $("input[name=cType3]:checkbox").each(function (i) {
                    if (this.checked) { chkVal += $(this).val() + ":"; }
                });
                chkVal = chkVal.substring(0, chkVal.length - 1);
            }
            else {
                chkVal = "";
            }
            $("#sCat1").val(chkVal);
        }

        // 2022.04 판례 검색 개선
        if ($('#sCode').val() == "C000")
        {
            var sSubWordVals6 = "", sSubWordVals7 = "";
            if ($('#sSubWord6').length > 0)
            {
                $("input[name=sSubWord6]:text").each(function (i) {
                    if ($(this).val().replace(/ /g, '') != "") {
                        sSubWordVals6 += $(this).val() + "^";
                    }                    
                });

                $("input[name=sSubWord7]:text").each(function (i) {
                    if ($(this).val().replace(/ /g, '') != "") {
                        sSubWordVals7 += $(this).val() + "^";
                    }                    
                });

                $("#sSubWordVals6").val(sSubWordVals6.substring(0, sSubWordVals6.length - 1));
                $("#sSubWordVals7").val(sSubWordVals7.substring(0, sSubWordVals7.length - 1));
            }            
        }
    };

    //    this.setInitType = function () {
    //        if ($('#sType1').length > 0) {
    //            $('#sType1').val(initSearchObject["sType1"]);
    //        }
    //        if ($('#sType2').length > 0) {
    //            $('#sType2').val(initSearchObject["sType2"]);
    //        }
    //        if ($('#sType3').length > 0) {
    //            $('#sType3').val(initSearchObject["sType3"]);
    //        }
    //        if ($('#cDate1').length > 0 && $('#cDate2').length > 0) {
    //            $('#sDate1').val(initSearchObject["sDate1"]);
    //            $('#sDate2').val(initSearchObject["sDate2"]);
    //        }
    //        if ($('#sType4').length > 0) {
    //            $('#sType4').val(initSearchObject["sType4"]);
    //        }

    //        //법조인 정보 입력
    //        if ($('#sCode').val() == "P000") {
    //            page.setInitLawyerType();
    //        }

    //        //조약 국가 정보 입력  
    //        if ($('#sCode').val() == "L007") {
    //            treaty.setNationToCat2();
    //        }

    //        $("#searchForm :input[type='text']").each(function () {
    //            $(this).val("");
    //        });

    //    };


    this.setLawyerType = function () {
        if ($('#cTestS').length > 0 && $('#cTestE').length > 0) {
            $('#sTestS').val($('#cTestS').val());
            $('#sTestE').val($('#cTestE').val());
        }
        if ($('#cTrainS').length > 0 && $('#cTrainE').length > 0) {
            $('#sTrainS').val($('#cTrainS').val());
            $('#sTrainE').val($('#cTrainE').val());
        }
        if ($('#cBirthS').length > 0 && $('#cBirthE').length > 0) {
            /*
            if ($('#cBirthS').val() == "" || $('#cBirthS').val() == null) {
            $('#cBirthS').val($('#cBirthS').attr("min"));
            }
            if ($('#cBirthE').val() == "" || $('#cBirthE').val() == null) {
            $('#cBirthE').val($('#cBirthE').attr("max"));
            }
            */
            $('#sBirthS').val($('#cBirthS').val());
            $('#sBirthE').val($('#cBirthE').val());
        }

        if ($('#sJobCode').length > 0) {
            if ($("#cJobCode option:selected").val() != "00") {
                if ($('#sJob').length > 0) {
                    $('#sJob').val($("#cJobCode option:selected").text());
                    $('#sJobCode').val($("#cJobCode option:selected").val());
                }
            } else {
                if ($('#sJob').length > 0) {
                    $('#sJob').val("");
                    $('#sJobCode').val($("#cJobCode option:selected").val());
                }
            }
        }

        if ($('#sTestCode').length > 0) {
            if ($("#cTestCode option:selected").val() != "00") {
                if ($('#sTest').length > 0) {
                    $('#sTest').val($("#cTestCode option:selected").text());
                    $('#sTestCode').val($("#cTestCode option:selected").val());
                }
            } else {
                if ($('#sTest').length > 0) {
                    $('#sTest').val("");
                    $('#sTestCode').val($("#cTestCode option:selected").val());
                }
            }
        }

    };

    this.setSubType = function () {
        var sChk = 0;
        var et = "";
        if ($('#dType1').length > 0) {
            var st1 = "";
            if ($("input:radio[id=dType1_a]:checked").length > 0) {
                st1 = "0000";
            }
            else {
                if ($("input[name=dType1]:checkbox").length > 0) {
                    $("input[name=dType1]:checkbox").each(function () {
                        if (this.checked) { st1 += "1"; }
                        else { st1 += "0"; }
                    });
                    //st1 = st1.substring(1);
                }
                else {
                    $("input[name=dType1]:radio").each(function () {
                        if (this.checked) { st1 += "1"; }
                        else { st1 += "0"; }
                    });
                    st1 = st1.substring(1);
                }
            }
            $("#sType1").val(st1);
            setSearchObject["sType1"] = st1;
        }
        if ($('#dType2').length > 0) {
            var st2 = "";
            $("input[name=dType2]:checkbox").each(function () {
                if (this.checked) { st2 += "1"; }
                else { st2 += "0"; }
            });
            $("#sType2").val(st2);
            setSearchObject["sType2"] = st2;
        }
        if ($('#dType3').length > 0) {
            var st3 = ""; var objType = $("input[name=dType3]").attr("type");
            if (objType == "checkbox") {
                $("input[name=dType3]:checkbox").each(function () {
                    if (this.checked) { st3 += "1"; }
                    else { st3 += "0"; }
                });
            } else if (objType == "radio") {
                st3 = $('input:radio[name=dType3]:checked').val();
            }
            $("#sType3").val(st3);
            setSearchObject["sType3"] = st3;
        }
        if ($('#dType4').length > 0) {
            var st4 = ""; var objType = $("input[name=dType4]").attr("type");
            if (objType == "checkbox") {
                $("input[name=dType4]:checkbox").each(function () {
                    if (this.checked) { st4 += "1"; }
                    else { st4 += "0"; }
                });
            } else if (objType == "radio") {
                st4 = $('input:radio[name=dType3]:checked').val();
            }
            $("#sType4").val(st4);
            setSearchObject["sType4"] = st4;
        }

        if ($("#sCode").val() == "J001" && $("#sType").val() == "2") {
            var _temp = "";
            $("input[name=eType1]:checkbox").each(function () {                
                if (this.checked) {
                    _temp += $(this).val() + ":";
                }                
            });
            et = _temp.substring(0, _temp.length - 1);
        }
        else {
            for (i = 1; i < 51; i++) {
                if ($('#eType' + i.toString() + "_a").length > 0) {
                    var et_ = ""; var ut_ = "0";
                    $("input[name=eType" + i.toString() + "]:checkbox").each(function () {
                        if (this.checked) { et_ += $(this).val() + ","; }
                        else { ut_ = "1"; }

                    });
                    if (et_ != "") {
                        et += "$eType" + i.toString() + ":" + et_;
                        et += ":" + $('#eType' + i.toString() + "_a").val();
                        ut_ = "1";
                        et += ":" + ut_;
                    }
                    else {
                        if ($('#eType' + i.toString() + "_a").attr("type") == "checkbox") {
                            if ($('#eType' + i.toString() + "_a").prop("checked")) {
                                et += "$eType" + i.toString() + ":";
                                if ($("input[name=eType" + i.toString() + "]").length == 0) { et += ":" + $('#eType' + i.toString() + "_a").val() + ":0"; }
                            }
                        }
                    }
                } else if ($('#eType' + i.toString() + "_b").length > 0) {
                    var et_ = ""; var ut_ = "0";
                    $("input[name=eType" + i.toString() + "]:checkbox").each(function () {
                        if (this.checked) { et_ += $(this).val() + ","; }
                        else { ut_ = "1"; }

                    });
                    if (et_ != "") {
                        et += "$eType" + i.toString() + ":" + et_;
                        et += ":" + $('#eType' + i.toString() + "_b").val();
                        ut_ = "1";
                        et += ":" + ut_;
                    }
                    else {
                        if ($('#eType' + i.toString() + "_b").attr("type") == "checkbox") {
                            if ($('#eType' + i.toString() + "_b").prop("checked")) {
                                et += "$eType" + i.toString() + ":";
                                if ($("input[name=eType" + i.toString() + "]").length == 0) { et += ":" + $('#eType' + i.toString() + "_b").val() + ":0"; }
                            }
                        }
                    }
                } 
                else // 전체 값이 없을 때
                {
                    var et_ = ""; var ut_ = "0";
                    $("input[name=eType" + i.toString() + "]:checkbox").each(function () {
                        if (this.checked) { et_ += $(this).val() + ","; }
                        else { ut_ = "1"; }
                    });
                    if (et_ != "") {
                        et += "$eType" + i.toString() + ":" + et_;
                        et += ":" + $('#eType' + i.toString() + "_a").val();
                        if ($('#sCode').val() == "L007") {
                            if ($('#sCat2').val() != "") {
                                ut_ = "1";
                            }
                        }
                        et += ":" + ut_;
                    }
                }
            }
        }
        
        if (et != "") { setSearchObject["sSubType1"] = et; $('#sSubType1').val(et); } else { if (setSearchObject["sSubType1"] != null) { setSearchObject["sSubType1"] = ''; $('#sSubType1').val(''); } };

        if ($('#dDate1').length > 0 && $('#dDate2').length > 0) {
            if ($('#dDate1').val() != "" || $('#dDate2').val() != "") {
                sChk = page.chkDateLenValidation($('#dDate1').val(), $('#dDate2').val());
                if (sChk == 9) {
                    if (initSearchObject["sDate1"] != "" && initSearchObject["sDate2"] != "") {
                        setSearchObject["sDate1"] = $('#dDate1').val();
                        setSearchObject["sDate2"] = $('#dDate2').val();
                        if ((Number($('#dDate1').val()) < Number(initSearchObject["sDate1"])) ||
                        (Number($('#dDate2').val()) > Number(initSearchObject["sDate2"]))
                        ) {
                            sChk = 2;
                            alert('검색 날짜 범위가 아닙니다.');
                        } else {
                            sChk = 0;
                        }
                    } else {
                        if (Number($('#dDate1').val()) > Number($('#dDate2').val())) {
                            sChk = 2;
                            alert('시작 날짜가 끝 날짜보다 큽니다.');
                        } else {
                            setSearchObject["sDate1"] = $('#dDate1').val();
                            setSearchObject["sDate2"] = $('#dDate2').val();
                            sChk = 0;
                        }
                    }
                }
                else {
                    if ($('#dDate1').val().length != 8
                    || $('#dDate2').val().length != 8
                    || !isNumeric($('#dDate1').val(), "")
                    || !isNumeric($('#dDate2').val(), "")
                    ) {
                        if (sChk != 2) {
                            alert('날짜 형식이 다릅니다. 예) 20161010');
                            sChk = 2;
                        }
                    } else {
                        if ($('#dDate1').val() != '' && $('#dDate2').val() != '') {
                            if (initSearchObject["sDate1"] != "" && initSearchObject["sDate2"] != "") {
                                if ((Number($('#dDate1').val()) < Number(initSearchObject["sDate1"])) || (Number($('#dDate2').val()) > Number(initSearchObject["sDate2"]))) {
                                   
                                    if (sChk != 2) {
                                        sChk = 2;
                                        alert('검색 날짜 범위가 아닙니다.');
                                    }
                                } else {
                                    setSearchObject["sDate1"] = $('#dDate1').val();
                                    setSearchObject["sDate2"] = $('#dDate2').val();
                                }
                            }
                            else {
                                if (Number($('#dDate1').val()) > Number($('#dDate2').val())) {
                                   
                                    if (sChk != 2) {
                                        sChk = 2;
                                        alert('시작 날짜가 끝 날짜보다 큽니다.');
                                    }
                                } else {
                                    setSearchObject["sDate1"] = $('#dDate1').val();
                                    setSearchObject["sDate2"] = $('#dDate2').val();
                                }
                            }
                        } else if (!page.chkDateValidation($('#dDate1').val()) || !page.chkDateValidation($('#dDate2').val())) {
                          
                            if (sChk != 2) {
                                alert('날짜 형식이 다릅니다. 예) 20161010');
                                sChk = 2;
                            }
                        } else {
                            setSearchObject["sDate1"] = "";
                            setSearchObject["sDate2"] = "";
                            $('#dDate1').val(""); $('#dDate2').val("");
                        }
                    }
                }
            }
        }

        if ($('#dTestS').length > 0 && $('#dTestE').length > 0) {
            if ($("#dTestCode option:selected").val() != "00") {
                if (($('#dTestS').val() != null && $('#dTestE').val() != null) && ($('#dTestS').val() != '' && $('#dTestE').val() != '')) {
                    setSearchObject["sTestS"] = $('#dTestS').val();
                    setSearchObject["sTestE"] = $('#dTestE').val();
                } else {
                    alert("시험회수를 입력해주세요");
                    sChk = 2;

                    if (($('#dTestS').val() != null && $('#dTestS').val() != '') || ($('#dTestE').val() != null && $('#dTestE').val() != '')) {
                    }
                    else {
                        setSearchObject["sTestS"] = "";
                        setSearchObject["sTestE"] = "";
                    }
                }
            } else {
                if ($('#dTestS').val() != null &&
                    $('#dTestE').val() != null &&
                    $('#dTestS').val() != "0" &&
                    $('#dTestS').val() != "0" &&
                    $('#dTestS').val() != "" &&
                    $('#dTestS').val() != ""
                    ) {
                    sChk = 2;
                    alert('시험종류를 선택하지 않았습니다.');
                }
            }

        }

        if ($('#dTrainS').length > 0 && $('#dTrainE').length > 0) {
            if (($('#dTrainS').val() != null && $('#dTrainE').val() != null) &&
            ($('#dTrainS').val() != '' && $('#dTrainE').val() != '')) {
                setSearchObject["sTrainS"] = $('#dTrainS').val();
                setSearchObject["sTrainE"] = $('#dTrainE').val();
            } else {
                setSearchObject["sTrainS"] = "";
                setSearchObject["sTrainE"] = "";
            }
        }
        if ($('#dBirthS').length > 0 && $('#dBirthE').length > 0) {
            if (($('#dBirthS').val() != null && $('#dBirthE').val() != null) &&
            ($('#dBirthS').val() != '' && $('#dBirthE').val() != '')) {
                setSearchObject["sBirthS"] = $('#dBirthS').val();
                setSearchObject["sBirthE"] = $('#dBirthE').val();
            } else {
                setSearchObject["sBirthS"] = "";
                setSearchObject["sBirthE"] = "";
            }
        }

        if ($('#dJobCode').length > 0) {
            if ($("#dJobCode option:selected").val() != "00") {
                setSearchObject["sJob"] = $("#dJobCode option:selected").text();
                setSearchObject["sJobCode"] = $("#dJobCode option:selected").val();
            }
            else {
                setSearchObject["sJob"] = "";
                setSearchObject["sJobCode"] = "00";
            }
        }

        if ($('#dTestCode').length > 0) {
            if ($("#dTestCode option:selected").val() != "00") {
                setSearchObject["sTest"] = $("#dTestCode option:selected").text();
                setSearchObject["sTestCode"] = $("#dTestCode option:selected").val();
            } else {
                setSearchObject["sTest"] = "";
                setSearchObject["sTestCode"] = "00";
            }
        }


        return sChk;
    };


    this.setInitSubType = function () {
        var i = 0;
        if ($('#dType1').length > 0) {
            var st1 = initSearchObject["sType1"]; //$('#sType1').val();
            if ($("input[name=dType1]:radio").length > 0) {
                $("input[id=dType1_a]:radio").prop("checked", true);
            }
            else {
                $("input[name=dType1]:checkbox").each(function () {
                    if (st1.substr(i, 1) == "1") { this.checked = true; } else { this.checked = false; }
                    i++;
                });
                i = 0;
            }
        }
        if ($('#dType2').length > 0) {
            var st2 = initSearchObject["sType2"]; //$('#sType2').val();
            $("input[name=dType2]:checkbox").each(function () {
                if (st2.substr(i, 1) == "1") { this.checked = true; } else { this.checked = false; }
                i++;
            });
            i = 0;
        }
        if ($('#dType3').length > 0) {
            var st3 = initSearchObject["sType3"]; //$('#sType3').val(); 
            var objType = $("input[name=dType3]").attr("type");
            if (objType == "checkbox") {
                if ($("#dType3_a").length > 0) {
                    $("#dType3_a").prop("checked", true);
                }
                $("input[name=dType3]:checkbox").each(function () {
                    if (st3.substr(i, 1) == "1") { this.checked = true; } else { this.checked = false; }
                    i++;
                });
            } else if (objType == "radio") {
                $('input:radio[name=dType3]:input[value=' + initSearchObject["sType3"] + ']').prop("checked", true);
            }
            i = 0;
        }

        if ($('#dType4').length > 0) {
            var st4 = $('#sType4').val();
            $("input[name=dType4]:checkbox").each(function () {
                if (st4.substr(i, 1) == "1") { this.checked = true; } else { this.checked = false; }
                i++;
            });
            i = 0;
        }

        for (i = 1; i < 51; i++) {
            if ($('#eType' + i.toString() + "_a").length > 0) {
                $('#eType' + i.toString() + "_a").prop("checked", false);
                $("input[name=eType" + i.toString() + "]").prop("checked", false);
            }
            if ($('#eType' + i.toString() + "_b").length > 0) {
                $('#eType' + i.toString() + "_b").prop("checked", false);
                $("input[name=eType" + i.toString() + "]").prop("checked", false);
            }
        }

        if ($('#dDate').length > 0) {
            if (initSearchObject["sDate1"] != "" && initSearchObject["sDate2"] != "") {
                $("#dDate1").val(initSearchObject["sDate1"]); $("#dDate2").val(initSearchObject["sDate2"]);
            }
            else {
                $("#dDate").val("0").prop("selected", true);
                $("#dDate1").val(""); $("#dDate2").val("");

                initSearchObject["sDate1"] = "";
                initSearchObject["sDate2"] = "";

                $("#dDateDiv").hide();
            }
        }

        if ($('#dTestS').length > 0 && $('#dTestE').length > 0) {
            $('#dTestS').val($('#cTestS').val());
            $('#dTestE').val($('#cTestE').val());
        }
        if ($('#dTrainS').length > 0 && $('#dTrainE').length > 0) {
            if ($('#cTrainS').length > 0) {
                $('#dTrainS').val($('#cTrainS').val());
                $('#dTrainE').val($('#cTrainE').val());
            } else {
                $('#dTrainS').val('');
                $('#dTrainE').val('');
            }
        }
        if ($('#dBirthS').length > 0 && $('#dBirthE').length > 0) {
            $('#dBirthS').val($('#cBirthS').val());
            $('#dBirthE').val($('#cBirthE').val());
        }

        if ($('#dJobCode').length > 0) {
            if ($("#cJobCode").length > 0) {
                if ($("#cJobCode option:selected").val() == "00") {
                    $("#dJobCode").val("00").prop("selected", true);
                }
            }
            else {
                $("#dJobCode").val("00").prop("selected", true);
            }
            /*
            if ($("#cJobCode option:selected").val() == "00") {
            $("#dJobCode").val("00").prop("selected", true);
            }
            */
        }

        if ($('#dTestCode').length > 0) {
            if ($("#cTestCode").length > 0) {
                if ($("#cTestCode option:selected").val() == "00") {
                    $("#dTestCode").val("00").prop("selected", true);
                }
            }
            else {
                $("#dTestCode").val("00").prop("selected", true);
            }
        }

      
    };

    //특수문자만 있는경우 체크
    this.chkExCharr = function (d) {
        var dChk = 0;
        if (d.replace(/ /g, '').length > 2) {
            var reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
            var resultData = d.replace(reg, "");
            if (resultData == '') {
                dChk = 5;
            }
        }

        return dChk;
    };

    this.setWordHighlightData = function () {
        var sWord_ = $.trim($('#sWord').val());
        var sWord1_ = "";
        var reg = /[`~!@#$%^*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gim;
        if (sWord_ != '') {
            sWord_ = sWord_.replace(reg, " ");
            sWord_ = sWord_.replace(/ /g, ':');
        } else {
            if ($("#sSubWord1").length > 0) {
                sWord1_ = $.trim($('#sSubWord1').val());
                if (sWord1_ != '') {
                    sWord1_ = sWord1_.replace(reg, " ");
                    sWord1_ = sWord1_.replace(/ /g, ':');
                    if (sWord_ != '') {
                        sWord_ += ':' + sWord1_;
                    } else {
                        sWord_ = sWord1_;
                    }
                }
            } 

            if ($("#sSubWord2").length > 0) {
                sWord1_ = $.trim($('#sSubWord2').val());
                if (sWord1_ != '') {
                    sWord1_ = sWord1_.replace(reg, " ");
                    sWord1_ = sWord1_.replace(/ /g, ':');
                    if (sWord_ != '') {
                        sWord_ += ':' + sWord1_;
                    } else {
                        sWord_ = sWord1_;
                    }
                }
            } 

            if ($("#sSubWord3").length > 0) {
                sWord1_ = $.trim($('#sSubWord3').val());
                if (sWord1_ != '') {
                    sWord1_ = sWord1_.replace(reg, " ");
                    sWord1_ = sWord1_.replace(/ /g, ':');
                    if (sWord_ != '') {
                        sWord_ += ':' + sWord1_;
                    } else {
                        sWord_ = sWord1_;
                    }
                }
            } 

            if ($("#sSubWord4").length > 0) {
                sWord1_ = $.trim($('#sSubWord4').val());
                if (sWord1_ != '') {
                    sWord1_ = sWord1_.replace(reg, " ");
                    sWord1_ = sWord1_.replace(/ /g, ':');
                    if (sWord_ != '') {
                        sWord_ += ':' + sWord1_;
                    } else {
                        sWord_ = sWord1_;
                    }
                }
            } 

            if ($("#sSubWord5").length > 0) {
                sWord1_ = $.trim($('#sSubWord5').val());
                if (sWord1_ != '') {
                    sWord1_ = sWord1_.replace(reg, " ");
                    sWord1_ = sWord1_.replace(/ /g, ':');
                    if (sWord_ != '') {
                        sWord_ += ':' + sWord1_;
                    } else {
                        sWord_ = sWord1_;
                    }
                }
            } 

        }

        if (sWord_ != '') { storage.setSearchWord(sWord_); } else { storage.setSearchWord("");}
    };


    // 메시지 번호 0 : 경고 메시지 호출, 1 : 메시지 호출 안함, 그 외 : 검색 됨 
    // sChk : 2 - false
    this.chkSearchWord = function () {
        var sWordChk = ''; var sChk = 0;
        sWordChk = $.trim($('#sWord').val());
        if (sWordChk.replace(/ /g, '').length == 1) { sChk = 3; }
        if (sWordChk.replace(/ /g, '').length == 2) {
            sWordChk = sWordChk.replace(/ /g, '');
            var s1 = sWordChk.substr(0, 1);
            var s2 = sWordChk.substr(1, 1);
            for (n = 0; n < bExCharr.split(',').length; n++) {
                if (bExCharr.split(',')[n] != "") {
                    if (s1 == bExCharr.split(',')[n]) {
                        sChk = 5;
                        break;
                    }
                    if (s2 == bExCharr.split(',')[n]) {
                        sChk = 5;
                        break;
                    }
                }
            }
        }
        if (sChk == 0) sChk = page.chkExCharr(sWordChk);
        if ($('#sWordEx').length > 0) {
            if ($('#sWordEx').val().length > 0) {
                if ($('#sWordEx').val().replace(/ /g, '').length <= 1) { sChk = 3; }
                if (sChk == 0) sChk = page.chkExCharr($('#sWordEx').val());
            }
           
        }
        if ($('#sSubWord1').length > 0) {
            if ($('#sSubWord1').val().length > 0) {
                if ($('#sSubWord1').val().replace(/ /g, '').length <= 1) { sChk = 3; } else {
                    if (sChk == 0) sChk = page.chkExCharr($('#sSubWord1').val());
                    sWordChk += $.trim($('#sSubWord1').val());
                }
            }
        }
        if ($('#sSubWord2').length > 0) {
            if ($('#sSubWord2').val().length > 0) {
                if ($('#sSubWord2').val().replace(/ /g, '').length <= 1) { sChk = 3; } else {
                    if (sChk == 0) sChk = page.chkExCharr($('#sSubWord2').val());
                    sWordChk += $.trim($('#sSubWord2').val());
                }
            }
        }
        if ($('#sSubWord3').length > 0) {
            if ($('#sSubWord3').val().length > 0) {
                if ($('#sSubWord3').val().replace(/ /g, '').length <= 1) { sChk = 3; } else {
                    if (sChk == 0) sChk = page.chkExCharr($('#sSubWord3').val());
                    sWordChk += $.trim($('#sSubWord3').val());
                }
            }
        }
        if ($('#sSubWord4').length > 0) {
            if ($('#sSubWord4').val().length > 0) {
                if ($('#sSubWord4').val().replace(/ /g, '').length <= 1) { sChk = 3; } else {
                    if (sChk == 0) sChk = page.chkExCharr($('#sSubWord4').val());
                    sWordChk += $.trim($('#sSubWord4').val());
                }
            }
        }
        if ($('#sSubWord5').length > 0) {
            if ($('#sSubWord5').val().length > 0) {
                if ($('#sSubWord5').val().replace(/ /g, '').length <= 1) { sChk = 3; } else {
                    if (sChk == 0) sChk = page.chkExCharr($('#sSubWord5').val());
                    sWordChk += $.trim($('#sSubWord5').val());
                }
            }
        }
        if ($('#sSubWord6').length > 0) {
            if ($('#sSubWord6').val().length > 0) {
                if ($('#sSubWord6').val().replace(/ /g, '').length <= 1) { sChk = 3; } else {
                    if (sChk == 0) sChk = page.chkExCharr($('#sSubWord6').val());
                    sWordChk += $.trim($('#sSubWord6').val());
                }
            }
        }
        if ($('#sSubWord7').length > 0) {
            if ($('#sSubWord7').val().replace(/ /g, '').length > 0) {
                if ($('#sSubWord7').val().replace(/ /g, '').length <= 1) { sChk = 3; } else {
                    if (sChk == 0) sChk = page.chkExCharr($('#sSubWord7').val());
                    sWordChk += $.trim($('#sSubWord7').val());
                }
            }
            /*
            else {
                if ($("#sCode").val() == "C000") {
                    if ($('#sSubWord6').val().replace(/ /g, '').length > 1) {
                        sChk = 2;
                        alert('참조조문은 법령명과 같이 검색해야 합니다. 조문을 입력해주세요.');
                    }
                }
            }
            */
        }
        if ($('#sSubWord8').length > 0) {
            if ($('#sSubWord8').val().length > 0) {
                if ($('#sSubWord8').val().replace(/ /g, '').length <= 1) { sChk = 3; } else {
                    if (sChk == 0) sChk = page.chkExCharr($('#sSubWord8').val());
                    sWordChk += $.trim($('#sSubWord8').val());
                }
            }
        }
        if ($('#cDate1').length > 0) {
            if ($('#cDate1').val() != '' || $('#cDate2').val() != '') {
                sChk = page.chkDateLenValidation($('#cDate1').val(), $('#cDate2').val());
                if (sChk == 9) {
                    if (sWordChk.length > 0) {
                        sWordChk += $('#cDate1').val() + $('#cDate2').val();
                    }
                    sChk = 0;
                }
                else {
                    if ($('#cDate1').val().length != 8
                    || $('#cDate2').val().length != 8
                    || !isNumeric($('#cDate1').val(), "")
                    || !isNumeric($('#cDate2').val(), "")
                    ) {
                       
                        if (sChk != 2) {
                            alert('날짜 형식이 다릅니다. 예) 20161010');
                            sChk = 2;
                        }
                    } else {
                        if (Number($('#cDate1').val()) > Number($('#cDate2').val())) {
                           
                            if (sChk != 2) {
                                sChk = 2;
                                alert('시작 날짜가 끝 날짜보다 큽니다.');
                            }
                        } else if (!page.chkDateValidation($('#cDate1').val()) || !page.chkDateValidation($('#cDate2').val())) {
                           
                            if (sChk != 2) {
                                alert('날짜 형식이 다릅니다. 예) 20161010');
                                sChk = 2;
                            }
                        }
                        else {
                            if (sWordChk.length > 0) {
                                sWordChk += $('#cDate1').val() + $('#cDate2').val();
                            }
                        }
                    }
                }
            }
        }

        if ($('#sSubId1').length > 0 && $('#sSubId2').length > 0) {
            if ($("#sCode").val() == "L005") {
                if (parseInt($("#sSubId1 option:selected").val()) > parseInt($("#sSubId2 option:selected").val())) {
                    alert('시작대수가 종료대수보다 큽니다.'); sChk = 2;
                }
            }
        }

        //법조인 정보 체크
        if ($('#sCode').val() == "P000") {
            sChk = page.chkSearchLawyerWord();
        } else if ($('#sCode').val() == "D013" || $('#sCode').val() == "D014") { //법률사전 체크
            $('#sCat1').val('');
            $('#sCat2').val('');
        }

        //법률사무소- 검색어 or 지역조건 필수
        if ($('#sCode').val() == "P001") {
            if (sWordChk.replace(/ /g, '').length == 0 && $('#sCat1').val() == "00") {
                sChk = 4;
            } // 검색어x, 지역1 선택x,지역2 선택x
            else {
                sChk = 1;
            }
        }

        // 2022.04 판례 검색 개선
        if ($("#sCode").val() == "C000")
        {            
            if ($('#sSubWord6').length > 0)
            {
                var boolReferJo = true;
                $("input[name=sSubWord6]:text").each(function (i) {
                    if ($(this).val().replace(/ /g, '').length == 0 && $("input[name=sSubWord7]:text").eq(i).val().replace(/ /g, '').length == 0) {

                    }
                    else
                    {
                        if ($(this).val() == "" || $("input[name=sSubWord7]:text").eq(i).val() == "")
                        {
                            boolReferJo = false;                            
                        }
                        else
                        {                            
                            if (sChk == 0)
                            {
                                var sSubWord6Chk = page.chkExCharr($(this).val());
                                var sSubWord7Chk = page.chkExCharr($("input[name=sSubWord7]:text").eq(i).val());
                                if (sSubWord6Chk == 5 || sSubWord7Chk == 5)
                                {
                                    sChk = 5;                                    
                                }
                            }                            
                        }
                    }                                      
                });

                if (!boolReferJo) {
                    alert("법령명과 조문번호를 입력해주세요.");
                    sChk = 2;
                }
            } 
        }

        if (sChk == 0 && sWordChk.length > 0) {
            sChk = 1;
        }
        return sChk;
    };

    // 법조인 정보
    this.chkSearchLawyerWord = function () {
        var sWordChk = ''; var sChk = 0;
        insertLawyerCarr();
        if ($('#sName').length > 0) {
            if ($('#sName').val().replace(/ /g, '').length == 1) { sChk = 3; } else {
                sWordChk += $.trim($('#sName').val());
            }
        }
        if ($('#sWork').length > 0) {
            if ($('#sWork').val().replace(/ /g, '').length == 1) { sChk = 3; } else {
                sWordChk += $.trim($('#sWork').val());
            }
        }
        if ($('#sWorkArea').length > 0) {
            if ($('#sWorkArea').val().replace(/ /g, '').length == 1) { sChk = 3; } else {
                sWordChk += $.trim($('#sWorkArea').val());
            }
        }
        if ($('#sJobCode').length > 0) {
            if ($("#cJobCode option:selected").val() != "00") {
                if ($('#sJob').length > 0) {
                    sWordChk += $.trim($("#cJobCode option:selected").val());
                }
            }
        }

        if ($('#sTestCode').length > 0) {
            if ($("#cTestCode option:selected").val() != "00") {
                if ($('#sTest').length > 0) {
                    sWordChk += $.trim($("#cTestCode option:selected").val());
                }
            } else {
                if ($('#cTestS').val() != null &&
                    $('#cTestE').val() != null &&
                    $('#cTestS').val() != "0" &&
                    $('#cTestS').val() != "0" &&
                    $('#cTestS').val() != "" &&
                    $('#cTestS').val() != ""
                    ) {
                    sChk = 2;
                    alert('시험종류를 선택하지 않았습니다.');
                }
            }
        }
        if ($('#sTrainS').length > 0 && $('#sTrainE').length > 0) {
            if ($('#cTrainS').val() != null &&
            $('#cTrainE').val() != null &&
            $('#cTrainS').val() != "0" &&
            $('#cTrainS').val() != "0"
            ) {
                sWordChk += $('#cTrainS').val();
            }
        }
        if ($('#sHigh').length > 0) {
            sWordChk += $.trim($('#sHigh').val());
        }
        if ($('#sUniv').length > 0) {
            sWordChk += $.trim($('#sUniv').val());
        }
        if ($('#sLawSch').length > 0) {
            sWordChk += $.trim($('#sLawSch').val());
        }
        if ($('#sCareerList').length > 0) sWordChk += $.trim($('#sCareerList').val());
        if ($('#cBirthS').length > 0) sWordChk += $.trim($('#cBirthS').val());
        if ($('#sLawSch').length > 0) sWordChk += $.trim($('#sLawSch').val());
        if ($('#sCat').length > 0) sWordChk += $.trim($('#sCat').val());

        if (sChk == 0 && sWordChk.length > 0) {
            sChk = 1;
        }
        return sChk;
    };

    this.dateInput = function (n, ct) {
        $("#" + ct + "1").val("");
        $("#" + ct + "2").val("");

        var today = new Date();
        var start;
        var m = n.charAt(n.length - 1);
        n = n.slice(0, -1);

        if (m == 'd') { start = new Date(today - n * 1000 * 60 * 60 * 24); }
        else if (m == 'm') { start = new Date(); start.setMonth(start.getMonth() - n); }
        else if (m == 'y') { n = n * ((n == 1) ? 364 : 365); start = new Date(today - n * 1000 * 60 * 60 * 24); }


        var yyyy = start.getFullYear();
        var mm = (start.getMonth() + 1).toString();
        var dd = start.getDate();

        var t_yyyy = today.getFullYear();
        var t_mm = (today.getMonth() + 1).toString();
        var t_dd = today.getDate();
        var cat_1 = '';
        if ($("#sCat1").length > 0) { cat_1 = $.trim($("#sCat1").val()); }
        if ($("#sCode").length > 0) {
            if ($("#sCode").val() == 'D000' ||
                (cat_1 == '463558' && $("#sCode").val() == 'D004') ||
                (cat_1 == '463559' && $("#sCode").val() == 'D004')) {
                $("#" + ct + "1").val(yyyy);
                $("#" + ct + "2").val(t_yyyy);
            } else if ($("#sCode").val() == 'D003' || $("#sCode").val() == 'D004'
                || $("#sCode").val() == 'D001' || $("#sCode").val() == 'D008') {
                $("#" + ct + "1").val(yyyy + page.addzero(mm));
                $("#" + ct + "2").val(t_yyyy + page.addzero(t_mm));
            } else {
                $("#" + ct + "1").val(yyyy + page.addzero(mm) + page.addzero(dd));
                $("#" + ct + "2").val(t_yyyy + page.addzero(t_mm) + page.addzero(t_dd));
            }
        } else {
            $("#" + ct + "1").val(yyyy + page.addzero(mm) + page.addzero(dd));
            $("#" + ct + "2").val(t_yyyy + page.addzero(t_mm) + page.addzero(t_dd));
        }
    };

    //결정례,유권해석 메인 selectbox 변경 - 모바일 용도
    this.selCat1Change = function (num) {

        var _n, _m;
        _n = $("#selCat1 option:selected").val();
        _m = $("#selCat1 option:selected").attr("data-n");

        if (_n != "") {
            page.selectTopCategory(_n, _m, num);
        }
        else if (_n == "") {
            if ($('.directory_sub_org').length > 0) {
                $('.directory_sub_org').each(function (index) {
                    $(this).hide();
                });
            }
        }
    };

    //결정례,유권해석 메인 selectbox 변경 - 모바일 용도
    this.selCat2Change = function (sckey) {

        var _n, _t;
        _n = $("#selCat2_" + sckey + " option:selected").val();
        _t = $("#selCat2_" + sckey + " option:selected").attr("data-t");

        if (_n != "") {
            page.goCategorySearchList(_n, _t);
        }
    };

    this.selectTopCategory = function (n, m, p) {
        if ($('.directory_sub_org').length > 0) {
            $('.directory_sub_org').each(function (index) {
                $(this).hide();
            });
        }
        $('#d_sub_' + n).show();

        if ($("#hdnMobileYN").val() != "Y") {
            var span_x = m % p;
            $(".directory_sub_org").eq(m).find('span').css('margin-left', $(".directory_list li").width() * span_x + 45).show();
            if ($('#sCat_T').length > 0) {
                $('#sCat_T').val(n);
                selectCat(n, '0', '');
            }
            setHeight_under();
        }
        else {
            if ($('#sCat_T').length > 0) {
                $('#sCat_T').val(n);
                selectCat(n, '0', '');
            }
            setHeight_under();
        }
    };

    this.goCategorySearchList = function (n, t) {
        $('#sWord').val('');
        $('#sCat1').val($('#sCat_T').val());
        if (t == 1) {
            $('#sCat2').val(n);
        }
        $('#sSort').val('1');
        $('#sSortChk_1').val('1');
        searchForm.submit();
    };

    this.addzero = function (n) {
        return n < 10 ? "0" + n : n;
    };

    // 미리보기 닫기
    this.initCdate = function () {
        $('#cDate1').val('');
        $('#cDate2').val('');

    };

    // NICE 미리보기
    this.niceShowPreview = function (dId) {
        previewYn = "Y";
        niceYn = "Y";
        var url = pageParams.previewUrl;
        getNicPreView(url, dId);
    };

    // 미리보기
    this.showPreview = function (dId) {
        GAEvent("Preview?sid=" + dId);
        previewYn = "Y";

        if ($("#sMatchWord").length > 0) {
            if ($("#sMatchWord").val() != "") { storage.setSearchWord($("#sMatchWord").val()); }
        }
        if ($('#sPreViewId').length > 0) {
            if (dId.indexOf('_') < 0 && dId.indexOf('#') < 0) {
                $('#sPreViewId').val(dId.slice(16));
            }
        }
        if ($("#sCode").val() == "L000" || $("#sCode").val() == "L006") {
            var l_id = (dId.indexOf('_') > 0) ? dId.split("_")[0] : dId.split("|")[0];
            if ($('#subc_' + l_id).length > 0) {
                if (dId.indexOf('#') > 0) {
                    dId = l_id + "|" + $('#subc_' + l_id).val();
                } else {
                    dId += "|" + $('#subc_' + l_id).val();
                }
            }
        }

        setSelectliIndex(dId);
        var url = pageParams.previewUrl;
        getPreView(url, dId);
    };



    // 미리보기 닫기
    this.closePreView = function () {
        previewYn = "N";
        if (typeof (lawfirm) == 'undefined') {
            drawLi();
        } else {
            $("ol.list>li").removeClass('_this');
        }
    };


    // 법조인 네비게이션 미리보기 닫기
    this.closePreView = function (sCode) {
        previewYn = "N";
        if (typeof (lawfirm) == 'undefined') {
            if (sCode == "P000") {
                $('#search_results').css("height", "");
                $("ol.list>li").removeClass('_this');
                setHeight_navi();
            }
            else {
                drawLi();
            }
        } else {
            $("ol.list>li").removeClass('_this');
        }
    };

    this.showMainView = function (href) {

        location.href = href;
        //event.preventDefault();
    };

    this.loadDirectArea = function () {
        setTimeout(function () {

            var sWord = $("#sWord").val().replace(/ /g, '');
            sWord = setFilterByJoFromWord(sWord);
            var param = {
                "sWord": sWord,
                "sId": '',
                "sTarget": $("#sCode").val()
            };
            sendNonBlockingAjaxRequest("/AjaxInfo/ContentDirectView", param, page.directSearchCallback);
        }, 100);
    };

  
    this.directSearchCallback = function (html) {
        if (html.replace(/ /g, '').replace(/\r/g, "").replace(/\n/g, "") != '') {
            targetList = 0;
            $('.direct_s').show();
            $('.direct_s').empty();
            $('.direct_s').html(html);
        }
        setHeight_under();
    };

    this.getViewtestContent = function (c) {
        
        if ($("#hdnUniversityYN").length > 0)
        {            
            if ($("#hdnUniversityYN").val() != "Y")
            {
                page.getLatestSelectView(c);
                setInterval(function () {
                    page.getLatestSelectView(c);
                }, 2000);
            }
        }
        else
        {
            setInterval(function () {
                page.getLatestSelectView(c);
            }, 2000);
        }
        
    };

    this.getLatestSelectView = function (c) {
        //        if (storage.getIsMemberLogin() != "") {
        if (uCode != "" && uCode != null) {
            var lArr = storage.getViewLatest();
            if (lArr != null) {
                var iHtml = "";
                var j = 0;
                for (var i = lArr.length - 1; i >= 0; i--) {
                    if (c == 'T010') {
                        iHtml += page.setMakeliList(lArr[i].did.substring(0, 4), lArr[i].did, lArr[i].title, lArr[i].subtitle);
                        j++;
                    }
                    else if (c == 'B007') {
                        var esgArr = JSON.parse(localStorage.getItem("sEsgDidList"));
                        for (var n = esgArr.length - 1; n >= 0; n--) {
                            if (esgArr[n] == lArr[i].did) {
                                var lTitle = lArr[i].title; var lSubTitle = lArr[i].subtitle;
                                iHtml += page.setMakeliList(lArr[i].did.substring(0, 4), lArr[i].did, lTitle, lSubTitle);
                                j++;
                            }
                        }
                    }
                    else {
                        if (c == 'D000') {
                            if (lArr[i].did.substring(0, 2) == 'D0') {
                                if (lArr[i].did.substring(0, 4) != 'D021') {
                                    var lTitle = lArr[i].title; var lSubTitle = lArr[i].subtitle;
                                    iHtml += page.setMakeliList(lArr[i].did.substring(0, 4), lArr[i].did, lTitle, lSubTitle);
                                    j++;
                                }
                            }
                        }
                        else {
                            if (lArr[i].did.substring(0, 4) == c) {
                                var lTitle = lArr[i].title; var lSubTitle = lArr[i].subtitle;
                                iHtml += page.setMakeliList(lArr[i].did.substring(0, 4), lArr[i].did, lTitle, lSubTitle);
                                j++;
                            }
                        }
                    }
                    if (j > 9) { break; }
                }
                if (iHtml != "") {
                    $('#latestViewData').show();
                    $('#latestViewList').empty();
                    $('#latestViewList').html(iHtml);
                } else {
                    $('#latestViewData').show();
                    $('#latestViewList').empty();
                    $('#latestViewList').html("<li>오늘 해당 페이지에서 조회한 이력이 없습니다. 콘텐츠를 조회하시면 메뉴별로 최근 조회 리스트를 확인할 수 있습니다.</li>");
                }
            } else {
                $('#latestViewData').show();
                $('#latestViewList').empty();
                $('#latestViewList').html("<li>오늘 해당 페이지에서 조회한 이력이 없습니다. 콘텐츠를 조회하시면 메뉴별로 최근 조회 리스트를 확인할 수 있습니다.</li>");
            }
        }
        else {
            $('#latestViewData').show();
            $('#latestViewList').empty();

            $('#latestViewList').html("<li>접속한 아이디에 한하여 오늘 조회한 메뉴별 컨텐츠 리스트를 확인할 수 있습니다. 로그인을 하시고 보다 편리해진 로앤비의 개인화 서비스를 이용해보세요.</li>");
            /*
            if ($("#hdnUniversityYN").length > 0) {
                //alert($("#hdnUniversityYN").val());
                if ($("#hdnUniversityYN").val() != "Y") {
                    $('#latestViewList').html("<li>접속한 아이디에 한하여 오늘 조회한 메뉴별 컨텐츠 리스트를 확인할 수 있습니다. 로그인을 하시고 보다 편리해진 로앤비의 개인화 서비스를 이용해보세요.</li>");
                }
            }
            else {
                $('#latestViewList').html("<li>접속한 아이디에 한하여 오늘 조회한 메뉴별 컨텐츠 리스트를 확인할 수 있습니다. 로그인을 하시고 보다 편리해진 로앤비의 개인화 서비스를 이용해보세요.</li>");
            }
            */            
        }
    };

    this.setMakeliList = function (c, d, t, s) {
        var iHtml = "";
        iHtml = "<li><a href=\"/Info/ContentView?sid=" + d + "\" class=\"popup_view\">";
        t = t.replace(/\r/g, "").replace(/\n/g, "");
        t = $.trim(t);
        if (c == 'C000') {
            t = t.replace(/ 판결 /g, " 판결 <span>").replace(/ 결정 /g, " 결정 <span>") + "</span>";
        }
        if (c == 'L000') {
            if (t.indexOf(":") > 0) {
                t = $.trim(t.split(":")[0].replace(/약칭/g, ""));
            }
        }
        if (c == 'P000') {
            s = (s != "") ? s.replace(/현직 :/g, "<br />현직 : ") : "";
        }
        iHtml += t + "</a>";
        iHtml += (s != "") ? " <span>" + s + "</span>" : "";
        iHtml += "</li>";
        return iHtml;
    };

    this.pdfOrginalFileDown = function (s, data) {

        var fileDownHtml = "";
        fileDownHtml += "<i class=\"icon-file_hwp\" data-icon=\"&#xe914;\" onclick=\"page.viewFileDown('" + s + "', '" + data + "', 'hwp')\"></i> ";
        if (s != "F001") {
            fileDownHtml += "<i class=\"icon-file_excel\" data-icon=\"&#xeae2;\" onclick=\"page.viewFileDown('" + s + "', '" + data + "', 'doc')\"></i> ";
            fileDownHtml += "<i class=\"icon-file_word\" data-icon=\"&#xeae1;\" onclick=\"page.viewFileDown('" + s + "', '" + data + "', 'xls')\"></i>";
        }
        fileDownHtml += "<i class=\"icon-file_pdf\" data-icon=\"&#xeadf;\" onclick=\"page.viewFileDown('" + s + "', '" + data + "', 'pdf')\"></i>";

        $("#divFileDown").html(fileDownHtml);
    };

    this.viewFileDown = function (s, data, ext) {

        var dataParams = "";
        var url = "/AjaxInfo/ContentFileExist";
        data = unescape(data);
        dataParams = { "sCode": s, "fileName": data, "ext": ext };

        getViewFileDown(url, dataParams);
    };

    this.chkDateLenValidation = function (d1, d2) {
        var sChk = 0;
        var cat_1 = '';
        if ($("#sCat1").length > 0) { cat_1 = $("#sCat1").val(); }
        if ($("#sCode").val() == 'D000' ||
            (cat_1 == '463558' && $("#sCode").val() == 'D004') ||
            (cat_1 == '463559' && $("#sCode").val() == 'D004')) {
            sChk = 9;
            if (d1.length != 4
                    || d2.length != 4
                    || !isNumeric(d1, "")
                    || !isNumeric(d2, "")
                    ) {
                alert('년도 형식이 다릅니다. 예) 2016');
                sChk = 2;
            } else {
                if (Number(d1) > Number(d2)) {
                    sChk = 2;
                    alert('시작 년도가 끝 년도보다 큽니다.');
                } else if (!page.chkDateValidation(d1) || !page.chkDateValidation(d2)) {
                    alert('년도 형식이 다릅니다. 예) 2016');
                    sChk = 2;
                }
            }
        } else if ($("#sCode").val() == 'D003' || $("#sCode").val() == 'D004'
            || $("#sCode").val() == 'D001' || $("#sCode").val() == 'D008') {
            sChk = 9;
            if (d1.length != 6
                    || d2.length != 6
                    || !isNumeric(d1, "")
                    || !isNumeric(d2, "")
                    ) {
                alert('년월 형식이 다릅니다. 예) 201612');
                sChk = 2;
            } else {
                if (Number(d1) > Number(d2)) {
                    sChk = 2;
                    alert('시작 년월이 끝 년월보다 큽니다.');
                } else if (!page.chkDateValidation(d1) || !page.chkDateValidation(d2)) {
                    alert('년월 형식이 다릅니다. 예) 201612');
                    sChk = 2;
                }
            }
        }
        return sChk;
    };

    this.chkDateValidation = function (d) {
        var isDate = false;
        if (d.length == 8) {
            var yy = d.substr(0, 4);
            var mm = d.substr(4, 2);
            var dd = d.substr(6, 2);
            isDate = true;
            if (1900 > parseInt(yy) || 2100 < parseInt(yy)) {
                isDate = false;
            }
            if (1 > parseInt(mm) || 12 < parseInt(mm)) {
                isDate = false;
            }
            if (1 > parseInt(dd) || 31 < parseInt(dd)) {
                isDate = false;
            }
        } else if (d.length == 6) {
            var yy = d.substr(0, 4);
            var mm = d.substr(4, 2);
            isDate = true;
            if (1900 > parseInt(yy) || 2100 < parseInt(yy)) {
                isDate = false;
            }
            if (1 > parseInt(mm) || 12 < parseInt(mm)) {
                isDate = false;
            }
        } else if (d.length == 4) {
            var yy = d.substr(0, 4);
            isDate = true;
            if (1900 > parseInt(yy) || 2100 < parseInt(yy)) {
                isDate = false;
            }
        }

        return isDate;
    };

    this.viewFileDownForm = function (params) {

        var url = "/AjaxInfo/ContentFileDown";
        var frm = document.createElement("form");
        frm.method = "post";
        var input = new Array();

        for (var i = 0; i < 4; i++) {
            input[i] = document.createElement("input");
            $(input[i]).attr("type", "hidden");
            if (i == 0) {
                $(input[i]).attr("name", "sCode");
                $(input[i]).attr("value", params.sCode);
            }
            else if (i == 1) {
                $(input[i]).attr("name", "fileName");
                $(input[i]).attr("value", params.fileName);
            }
            else if (i == 2) {
                $(input[i]).attr("name", "ext");
                $(input[i]).attr("value", params.ext);
            }
            else {
                $(input[i]).attr("name", "realFileName");
                $(input[i]).attr("value", viewParams.realFileName);
            }
            frm.appendChild(input[i]);
        }
        document.body.appendChild(frm);

        frm.action = url;
        frm.submit();
    };
    
    // 온주 검색
    this.loadOnjuList = function () {
        /*
        var sWord = $("#sWord").val();
        if (sWord.length > 1) {
            var param = {
                "sWord": sWord
            };
            sendNonBlockingAjaxRequest("/SubInfo/ContentOnjuView", param, page.onjuSearchCallback);
        }
        */
    };
    
    // 온주 검색 영역 callback
    this.onjuSearchCallback = function (html) {
        if (html.replace(/ /g, '').replace(/\r/g, "").replace(/\n/g, "") != '') {
            if ($('#innerOnju').length > 0) {
                $("#innerOnju").html(html);
            } else {
                var oHtml = "<h4>온라인 주석서 </h4>";
                oHtml += "<ul >";
                oHtml += "<li id=\"innerOnju\">";
                oHtml += html;
                oHtml += "<li >";
                oHtml += "</ul>";
                $("#container_inner>.right_container>#qOnju").html(oHtml);
            }
        }
    };

};

function detailAreaOpenAfterSearch() {
    var sCode = $("#sCode").val();
    // 2022.05 판례 검색 개선 - 상세검색 시 box show 공통
    if (window.location.href.indexOf("/Info/ContentList") > 0 && sCode != "P001") {
        var txtVal = "";
        var boolChkbox = false;
        var boolSelbox = false;        
        $(".detail_area_open input[type='text']").each(function (i) {
            txtVal += $(this).val().trim();
        });
        // selectbox
        if ($("#selType3").length > 0) {
            if ($("#selType3 option:selected").text() != "전체") {
                boolSelbox = true;
            }
        }
        //판례 상세검색 체크 추가
        if ($("#selType4").length > 0) {
            if ($("#selType4 option:selected").text() != "전체") {                
                if (sCode == "C000") {
                    if ($("#sSubWord4").val().trim() != "") {
                        boolSelbox = true;
                    }
                    else {
                        $("input:checkbox[name='cType4']").attr("checked", true);
                        $('#cType4_a').attr("checked", true);
                        $('#selType4').html("<option>전체</option>");
                    }                    
                }
                else {
                    boolSelbox = true;
                }                
            }
        }
        if ($("#sCat1").length > 0) {
            if ($("#sCat1 option:selected").val() != "00" && $("#sCat1 option:selected").val() != "0" && typeof ($("#sCat1 option:selected").val()) != 'undefined') {
                boolSelbox = true;
            }
        }
        if ($("#sCat2").length > 0) {
            if ($("#sCat2 option:selected").val() != "00" && $("#sCat2 option:selected").val() != "0" && typeof ($("#sCat2 option:selected").val()) != 'undefined') {
                boolSelbox = true;
            }
        }
        if ($("#sCat3").length > 0) {
            if ($("#sCat3 option:selected").val() != "00" && $("#sCat3 option:selected").val() != "0" && typeof ($("#sCat3 option:selected").val()) != 'undefined') {
                boolSelbox = true;
            }
        }
        //입법동향 상세검색 체크 추가 - 21대 제안대수 변경시 변경해야 됨
        if ($("#sSubId1").length > 0) {
            if ($("#sSubId1 option:selected").val() != "21" && typeof ($("#sSubId1 option:selected").val()) != 'undefined') {
                boolSelbox = true;
            }
        }
        //입법동향 상세검색 체크 추가 - 21대 제안대수 변경시 변경해야 됨
        if ($("#sSubId2").length > 0) {
            if ($("#sSubId2 option:selected").val() != "21" && typeof ($("#sSubId1 option:selected").val()) != 'undefined') {
                boolSelbox = true;
            }
        }

        // checkbox
        if ($("#cType1_a").length > 0) {
            if (!$("#cType1_a").is(":checked")) {
                boolChkbox = true;
            }
        }
        if ($("#cType2_a").length > 0) {
            if (!$("#cType2_a").is(":checked")) {
                boolChkbox = true;
            }
        }
        if ($("#cType3_a").length > 0) {
            if (!$("#cType3_a").is(":checked")) {
                boolChkbox = true;
            }
        }

        if (txtVal != "" || boolSelbox || boolChkbox) {
            $(".detail_area_open").show();
            $(".detail_area .but").addClass("open");
        }
        else {
            $(".detail_area_open").hide();
        }
    }
    // 2022.05 판례 검색 개선 - 상세검색 시 box show 법조인
    if (window.location.href.indexOf("/Info/ContentLawyerList") > 0) {
        var txtVal = "";
        var numberBoxVal = "";
        var boolSelbox = false;        
        $(".detail_area_open_lawyer input[type='text']").each(function (i) {
            txtVal += $(this).val().trim();
        });

        $(".detail_area_open_lawyer input[type='search']").each(function (i) {
            txtVal += $(this).val().trim();
        });

        $(".detail_area_open_lawyer input[type='number']").each(function (i) {
            numberBoxVal += $(this).val().trim();
        });

        // selectbox
        if ($("#cTestCode").length > 0) {
            if ($("#cTestCode option:selected").text() != "전체") {
                boolSelbox = true;
            }
        }

        if (txtVal != "" || boolSelbox || numberBoxVal != "") {
            $(".detail_area_open_lawyer").show();
            $(".detail_area .but").addClass("open");
        }
        else {
            $(".detail_area_open_lawyer").hide();
        }
    }
}