$(document).ready(function () {

    $(document).on('click', '.direct_title span', function () {
        $('.direct_area_inner').slideToggle(); 
        $(this).toggleClass('open');
        console.info('open');
    });

    if ($(".related_area").length > 0) {
        //$(".related_area").height($('#direct_area').height()-30);
        $(".direct_main").addClass('_right');
        //alert($('#direct_area').height());
    }

    $(document).on('click', '#result_tab li em', function () { 
        $(this).parent().parent().find('ul').toggle();
        $(this).children('i').toggleClass('icon_close');
    });
	 $(document).on('click', '#result_tab li a.viewUnder', function () { 
        $(this).parent().find('ul').toggle();
        $(this).next('span').find('i').toggleClass('icon_close');
    });

});

var razorParams = null;
var totalSize = 0, totalColCnt = 0, targetList = 0;
var myContentCount = 0;
var total = new function () {



    this.init = function (data) {
        razorParams = data;
        total.loadDirectArea();
        total.bindEvent();
        showloading();
        total.loadHtml();
        //page.loadOnjuList();
        setHeight_under();
        setStartMyDesk(); // 마이데스크 아이콘 생성
    };

    // 다이렉트 검색 영역 load
    this.loadDirectArea = function () {
        var url = razorParams.directUrl;
        var sWord = $("#sWord").val().replace(/ /g, '');
        sWord =  setFilterByJoFromWord(sWord);
        var param = {
            "sWord": sWord
        };
        sendNonBlockingAjaxRequest(razorParams.directUrl, param, total.directSearchCallback);
    };

    // 다이렉트 선택 서치
    this.goDirectSelect = function (sid) {
        var url = razorParams.directUrl;
        var sWord = $("#sWord").val().replace(/ /g, '');
        sWord = setFilterByJoFromWord(sWord);
        var param = {
            "sWord": sWord,
            "sId": sid
        };
        sendNonBlockingAjaxRequest(razorParams.directUrl, param, total.directSearchCallback);
    };


    this.directSearchCallback = function (html) {
        if (html.replace(/ /g, '').replace(/\r/g, "").replace(/\n/g, "") != '') {
            targetList = 0;
            $('#direct_area').show();
            $('#direct_area').empty();
            $('#direct_area').html(html);
            if ($('#tab_area').length > 0) {
                setTimeout(function () {
                    total.showAdditionContent($("#lbTid").val(), '0', '');
                }, 100);
            }
            if ($('#additionInfo').length > 0) {
                setTimeout(function () {
                    total.showSubInfoView($("#lbTid").val());
                }, 100);
            }
            total.showEndTotalList("DIRECT", 1);
        }
        setHeight_under();
    };

    this.showSubInfoView = function (s) {
        if (s.slice(0, 4) == 'L000') {
            if ($('#lbTid').val().split('|')[1] == '0') {
                s = $('#lbTid').val().split('|')[0] + "|R9|" + $('#lbDate').val() + "|C";
                total.getContentMakeView(razorParams.viewUrl, s);
            }
        }
    };

    this.setInitTotalFormValue = function () {
        $('#sPage').val('1');
        $('#sList').val('3');
        $('#sType').val('2');
        $('#sViewPage').val('2');
        $('#sSort').val('0');
    };

    this.setWordinDesk = function () {
        if (uCode != "" && uCode != null) {
            var chkType = storage.getSearchWordType().split('#');
            if (chkType[0] == '0') {
                var sWord = $("#sWord").val();
                if (sWord != "") {
                    var dt = new Date();
                    var tMon = dt.getMonth() + 1;
                    var tDay = dt.getDate();
                    var sInfo = new Object();
                    sInfo.dWord = sWord;
                    sInfo.dDate = tMon + "." + tDay;
                    storage.setWordToDesk(sInfo);

                    // 검색어 DB저장
                    var params = { "userCode": uCode, "searchWord": sInfo.dWord, "searchDate": sInfo.dDate };
                    sendNonBlockingAjaxJsonRequest("/AjaxInfo/SetSearchWord/", params, function (result) { }); ;
                }
            }
        }
    };

    this.getContentMakeView = function (url, sId) {
        var data = { "sId": sId };

        sendNonBlockingAjaxRequest(url, data, total.setContentMakeViewCallback);
    };

    this.setContentMakeViewCallback = function (result) {
        if (result != null) {
            result = result.replace(/\r\n/g, '');
            result = result.replace(/<h4>입법동향(.*)<\/h4>/g, "<p class='hide'>관련자료</p><div class='tabs'><a href='#' class='tab-link direct-doc _this'>입법동향</a></div>");
            // result = replaceChars(result, "<h4>입법동향</h4>", "<p class='hide'>관련자료</p><div class='tabs'><a href='#' class='tab-link direct-doc _this'>입법동향</a></div>");
            result = replaceChars(result, "<ul>", "<ul class='link-black'>");
            $('#additionInfo').empty();
            $('#additionInfo').html(result);

            $('#additionInfo>ul>li').each(function (index) {
                if (index > 2) {
                    $(this).hide();
                }
            });
            setHeight_under();
        }
    };

    this.showAdditionContent = function (s, t, c) {
        total.getContentAdditionView(razorParams.aUrl, s, t, c);
    };

    this.getContentAdditionView = function (url, sId, t, c) {
        var data = { "sId": sId, "sType": t, "targetCol": c, "vType": "1" };
        sendNonBlockingAjaxRequest(url, data, total.setContentAdditionViewCallback);
    };

    this.setContentAdditionViewCallback = function (result) {
        if (result != null) {
            $('.related_tab').show();
            $('.related_tab').empty();
            $('.related_tab').html(result);
            setHeight_under();
        }
    };

    this.goUpDownList = function (t) {
        if (t == 1) { if (targetList > 0) { targetList = targetList - 1; } }
        else if (t == 0) { if (targetList < $('#additionInfo>ul>li').length - 2) { targetList = targetList + 1; } }
        $('#additionInfo>ul>li').each(function (index) {
            if (index == targetList || index == targetList + 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

    };


    this.changeTargetTab = function (c) {
        $('a.tab-link').each(function (index) {
            $(this).removeClass('_this');
        });
        $('.related_tab>div.link-black').hide();
        $('.related_tab>ul.link-black').hide();
        $('#dir_li_' + c).show();
        $('#a_li_' + c).addClass('_this');
        setHeight_under();
    };


    this.loadHtml = function () {
        if (!total.checkWord()) {
            storage.setTotalContentForm($('#searchForm').serializeObject());
            var mySearchOnOff = localStorage.getItem("mySearchOnOff") == null ? "" : localStorage.getItem("mySearchOnOff");
            var mySearchContentList = localStorage.getItem("mySearchContentList") == null ? "" : localStorage.getItem("mySearchContentList");


            if (mySearchOnOff == "Y" && mySearchContentList != "") {
                mySearchContentList = mySearchContentList.replace(/B002\|/g, '');


                total.loadDirectArea(); //다이렉트검색
                if (mySearchContentList.indexOf("C000") > -1) {
                    if ($("#totalArea1").length > 0) { total.loadCaseArea(); } //판례검색
                }
                if (mySearchContentList.indexOf("L000") > -1) {
                    if ($("#totalArea2").length > 0) { total.loadLawArea(); } //법령검색
                }
                if (mySearchContentList.indexOf("L006") > -1) {
                    if ($("#totalArea3").length > 0) { total.loadRuleArea(); } //행정규칙검색
                }
                if (mySearchContentList.indexOf("L005") > -1) {
                    if ($("#totalArea4").length > 0) { total.loadLawMakeArea(); } //입법동향검색
                }
                if (mySearchContentList.indexOf("L007") > -1) {
                    if ($("#totalArea5").length > 0) { total.loadTreatyArea(); } //조약검색
                }
                if (mySearchContentList.indexOf("L008") > -1) {
                    if ($("#totalArea23").length > 0) { total.loadLocalArea(); } //자치법규 검색
                }
                if (mySearchContentList.indexOf("I001") > -1) {
                    if ($("#totalArea6").length > 0) { total.loadPatentArea(); } //특허판례검색
                }
                if (mySearchContentList.indexOf("I002") > -1) {
                    if ($("#totalArea7").length > 0) { total.loadCaseAdminArea(); } //결정례검색
                }
                if (mySearchContentList.indexOf("I003") > -1) {
                    if ($("#totalArea8").length > 0) { total.loadInterpreterArea(); } //유권해석검색
                }
                if (mySearchContentList.indexOf("D000") > -1) {
                    if ($("#totalArea9").length > 0) { total.loadDocArea(); } //문헌검색
                }
                //if (mySearchContentList.indexOf("D021") > -1) {
                //    if ($("#totalArea10").length > 0) { total.loadJusukArea(); } //주석검색
                //}
                if (mySearchContentList.indexOf("D022") > -1) {
                    if ($("#totalArea11").length > 0) { total.loadEbookArea(); } //이북검색
                }
                if (mySearchContentList.indexOf("D013") > -1) {
                    if ($("#totalArea12").length > 0) { total.loadDicArea(); } //법률용어
                }
                if (mySearchContentList.indexOf("P011") > -1) {
                    if ($("#totalArea15").length > 0) { total.loadLawFirmReportArea(); } //로펌리포트
                }
                //if (mySearchContentList.indexOf("B002") > -1) {
                //    if ($("#totalArea16").length > 0) { total.loadTaxArea(); } //세무
                //}
                if (mySearchContentList.indexOf("F001") > -1) {
                    if ($("#totalArea17").length > 0) { total.loadLawFormArea(); } //법률서식
                }
                if (mySearchContentList.indexOf("F002") > -1) {
                    if ($("#totalArea19").length > 0) { total.loadBizFormArea(); } //비즈폼서식       
                }
                if (mySearchContentList.indexOf("N000") > -1) {
                    if ($("#totalArea20").length > 0) { total.loadNewsArea(); } //뉴스
                }
                if (mySearchContentList.indexOf("N001") > -1) {
                    if ($("#totalArea21").length > 0) { total.loadColumnArea(); } //칼럼
                }
                if (mySearchContentList.indexOf("J001") > -1) {
                    if ($("#totalArea22").length > 0) { total.loadOnjuArea(); } //온주
                }
            }
            else {
                //        total.loadDirectArea(); //다이렉트검색
                if (mySearchOnOff == "Y" && mySearchContentList == "") {
                    localStorage.setItem("mySearchOnOff", "N");
                    chgMySearchOnOff("N");
                    $('.indiv_search_option_info').hide();
                }
                if ($("#totalArea1").length > 0) { total.loadCaseArea(); } //판례검색
                if ($("#totalArea2").length > 0) { total.loadLawArea(); } //법령검색
                if ($("#totalArea3").length > 0) { total.loadRuleArea(); } //행정규칙검색
                if ($("#totalArea4").length > 0) { total.loadLawMakeArea(); } //입법동향검색
                if ($("#totalArea5").length > 0) { total.loadTreatyArea(); } //조약검색
                if ($("#totalArea6").length > 0) { total.loadPatentArea(); } //특허판례검색
                if ($("#totalArea7").length > 0) { total.loadCaseAdminArea(); } //결정례검색
                if ($("#totalArea8").length > 0) { total.loadInterpreterArea(); } //해석례검색
                if ($("#totalArea9").length > 0) { total.loadDocArea(); } //문헌검색
                //if ($("#totalArea10").length > 0) { total.loadJusukArea(); } //주석검색
                if ($("#totalArea11").length > 0) { total.loadEbookArea(); } //이북검색
                if ($("#totalArea12").length > 0) { total.loadDicArea(); } //법률용어
                if ($("#totalArea15").length > 0) { total.loadLawFirmReportArea(); } //로펌리포트
                //if ($("#totalArea16").length > 0) { total.loadTaxArea(); } //세무
                if ($("#totalArea17").length > 0) { total.loadLawFormArea(); } //법률서식
                if ($("#totalArea19").length > 0) { total.loadBizFormArea(); } //비즈폼서식
                // if ($("#totalArea13").length > 0) { total.loadLawyerArea(); } //법조인
                if ($("#totalArea20").length > 0) { total.loadNewsArea(); } //뉴스
                if ($("#totalArea21").length > 0) { total.loadColumnArea(); } //칼럼
                if ($("#totalArea22").length > 0) { total.loadOnjuArea(); } //온주
                if ($("#totalArea23").length > 0) { total.loadLocalArea(); } //자치법규 검색
             }
        } else {

            $('.no_search_result').html("검색 결과가 존재하지 않습니다.");
            $('.no_search_result').show();
            hideloading();
            total.setTotalMenuHidden(); 
        }   
    };


    // 판례 검색 영역 load
    this.loadCaseArea = function () {
        $('#sCode').val("C000");
        var data = $('#searchForm').serialize();
        sendNonBlockingAjaxRequest(razorParams.listUrl, data, total.caseSearchCallback);
    };

    // 판례 검색 영역 callback
    this.caseSearchCallback = function (html) {
        var isExist = false; 
        var cCount = $(html).filter('#cCount').html().split(',');
        $('#cSumCnt1').html(cCount[cCount.length - 2] + ' <em><i class="icon_open"></i></em>');
        $('#cCnt1>li>span').each(function (index) {
            $(this).html(cCount[index]);
            if (cCount[index] > 0) {
                isExist = true;
            }
            else {
                $(this).parent().removeAttr("onclick");
                $(this).parent().css("cursor", "default");
            }
        });

        if (cCount[cCount.length - 2] == "0") {
            total.SetInHtml('1', 0, '', '');
            $('.result_case_tab').hide(); 
        } else {
            total.SetInHtml('1', 1, $(html).filter('#cHead').html(), $(html).filter('#cBody').html());
            if ($('#subCount_').length > 0 && !isSearchOne) {
                var sCnt = $('#subCount_').text();
                if (sCnt > 0) {
                    total.selectCaseTypeList(1);
                }
            } else {
                total.settingCaseHeader();
                //if (isTabView) { $('.result_case_tab').show(); }
                //else { $('.result_case_tab').hide();  }
                isSearchOne = true;
            }
        }
        total.showEndTotalList("", cCount[cCount.length - 2]);
        total.setTotalCountMap("C000", cCount[cCount.length - 2]);
        if (isExist) {
            $('#th1').show();
            $('#tu1').show();
            $('#tl1').show();
            if ($('#ta1').length > 0) { $('#ta1').show(); }
        } else { $('#th1').hide(); }
        setHeight_under();
    };

    // 법령 검색 영역 load
    this.loadLawArea = function () {
        $('#sCode').val("L000");
        var data = $('#searchForm').serialize();
        sendNonBlockingAjaxRequest(razorParams.listUrl, data, total.lawSearchCallback);
    };

    // 법령 검색 영역 callback
    this.lawSearchCallback = function (html) {
        var isExist = false;
        var cCount = $(html).filter('#lCount').html().split(',');
        $('#cSumCnt2').html(cCount[cCount.length - 2] + ' <em><i class="icon_open"></i></em>');

        $('#cCnt2>li>span').each(function (index) {
            $(this).html(cCount[index]);
            if (cCount[index] > 0) {
                isExist = true;
            }
            else {
                $(this).parent().removeAttr("onclick");
                $(this).parent().css("cursor", "default");
            }
        });

        if (cCount[cCount.length - 2] == "0") {
            total.SetInHtml('2', 0, '', '');
        } else {
            total.SetInHtml('2', 1, $(html).filter('#lHead').html(), $(html).filter('#lBody').html());
        }
        total.showEndTotalList("", cCount[cCount.length - 2]);
        total.setTotalCountMap("L000", cCount[cCount.length - 2]);
        if (isExist) {
            $('#tl2').show();
            if ($('#ta2').length > 0) { $('#ta2').show(); }
        }
        setHeight_under();


    };


    // 행정규칙 검색 영역 load
    this.loadRuleArea = function () {
        $('#sCode').val("L006");
        var data = $('#searchForm').serialize();
        sendNonBlockingAjaxRequest(razorParams.listUrl, data, total.ruleSearchCallback);
    };

    // 행정규칙 검색 영역 callback
    this.ruleSearchCallback = function (html) {
        var isExist = false;
        var cCount = $(html).filter('#lCount').html().split(',');
        //  autoIncrementVal('#cSumCnt3', cCount[cCount.length - 2], 500, ' <em><i class="icon_open"></i></em>');
        $('#cSumCnt3').html(cCount[cCount.length - 2] + ' <em><i class="icon_open"></i></em>');
        $('#cCnt3>li>span').each(function (index) {
            $(this).html(cCount[index]);
            if (cCount[index] > 0) {
                isExist = true;
            }
            else {
                $(this).parent().removeAttr("onclick");
                $(this).parent().css("cursor", "default");
            }
        });


        if (cCount[cCount.length - 2] == "0") {
            total.SetInHtml('3', 0, '', '');
        } else {
            total.SetInHtml('3', 1, $(html).filter('#lHead').html(), $(html).filter('#lBody').html());
        }
        total.showEndTotalList("", cCount[cCount.length - 2]);
        total.setTotalCountMap("L006", cCount[cCount.length - 2]);
        if (isExist) {
            $('#tl3').show();
            if ($('#ta3').length > 0) { $('#ta3').show(); }
        }
        setHeight_under();
    };


    // 자치법규 검색 영역 load
    this.loadLocalArea = function () {
        $('#sCode').val("L008");
        var data = $('#searchForm').serialize();
        sendNonBlockingAjaxRequest(razorParams.listUrl, data, total.localawSearchCallback);
    };

    // 자치법규 검색 영역 callback
    this.localawSearchCallback = function (html) {
        var isExist = false;
        var cCount = $(html).filter('#lCount').html().split(',');
        $('#cSumCnt23').html(cCount[cCount.length - 2] + ' <em><i class="icon_open"></i></em>');
        $('#cCnt23>li>span').each(function (index) {
            $(this).html(cCount[index]);
            if (cCount[index] > 0) {
                isExist = true;
            }
            else {
                $(this).parent().removeAttr("onclick");
                $(this).parent().css("cursor", "default");
            }
        });


        if (cCount[cCount.length - 2] == "0") {
            total.SetInHtml('23', 0, '', '');
        } else {
            total.SetInHtml('23', 1, $(html).filter('#lHead').html(), $(html).filter('#lBody').html());
        }
        total.showEndTotalList("", cCount[cCount.length - 2]);
        total.setTotalCountMap("L008", cCount[cCount.length - 2]);
        if (isExist) {
            $('#tl23').show();
            if ($('#ta23').length > 0) { $('#ta23').show(); }
        }
        setHeight_under();
    };

    // 입법동향
    this.loadLawMakeArea = function () {
        $('#sCode').val("L005");
        var data = $('#searchForm').serialize();
        sendNonBlockingAjaxRequest(razorParams.listUrl, data, total.lawMakeSearchCallback);
    };

    // 입법동향 검색 영역 callback
    this.lawMakeSearchCallback = function (html) {
        var isExist = false;
        var cCount = $(html).filter('#tCount').html();
        $('#cCnt4').html(cCount);
        if (cCount == "0") {
            total.SetInHtml('4', 0, '', '');
        } else {
            total.SetInHtml('4', 1, $(html).filter('#tHead').html(), $(html).filter('#tBody').html());
            isExist = true;
        }
        total.showEndTotalList("", cCount);
        total.setTotalCountMap("L005", cCount);
        if (isExist) {
            $('#tl4').show();
            if ($('#ta4').length > 0) { $('#ta4').show(); }
        }
        setHeight_under();
    };

    // 조약 검색 영역 load
    this.loadTreatyArea = function () {
        $('#sCode').val("L007");
        var data = $('#searchForm').serialize();
        sendNonBlockingAjaxRequest(razorParams.listUrl, data, total.treatySearchCallback);
    };

    // 조약 검색 영역 callback
    this.treatySearchCallback = function (html) {
        var isExist = false;
        var cCount = $(html).filter('#tCount').html();
        $('#cCnt5').html(cCount);
        if (cCount == "0") {
            total.SetInHtml('5', 0, '', '');
        } else {
            total.SetInHtml('5', 1, $(html).filter('#tHead').html(), $(html).filter('#tBody').html());
            isExist = true;
        }
        total.showEndTotalList("", cCount);
        total.setTotalCountMap("L007", cCount);
        if (isExist) {
            $('#tl5').show();
            if ($('#ta5').length > 0) { $('#ta5').show(); }
        }
        setHeight_under();
    };

    // 특허판례 검색 영역 load
    this.loadPatentArea = function () {
        $('#sCode').val("I001");
        //$('#sSubType').val($('#sPatentType').val());
        var data = $('#searchForm').serialize();
        sendNonBlockingAjaxRequest(razorParams.listUrl, data, total.patentSearchCallback);
    };

    // 특허판례 검색 영역 callback
    this.patentSearchCallback = function (html) {
        var isExist = false;
        var cCount = $(html).filter('#cCount').html().split(',');
        //        autoIncrementVal('#cSumCnt6', cCount[cCount.length - 2], 500, ' <em><i class="icon_open"></i></em>');
        $('#cSumCnt6').html(cCount[cCount.length - 2] + ' <em><i class="icon_open"></i></em>');
        $('#cCnt6>li>span').each(function (index) {
            $(this).html(cCount[index]);
            if (cCount[index] > 0) {
                isExist = true;
            }
            else {
                $(this).parent().removeAttr("onclick");
                $(this).parent().css("cursor", "default");
            }
        });

        if (cCount[cCount.length - 2] == "0") {
            total.SetInHtml('6', 0, '', '');
        } else {
            total.SetInHtml('6', 1, $(html).filter('#cHead').html(), $(html).filter('#cBody').html());
        }
        total.showEndTotalList("", cCount[cCount.length - 2]);
        total.setTotalCountMap("I001", cCount[cCount.length - 2]);
        if (isExist) {
            $('#tl6').show();
            if ($('#ta6').length > 0) { $('#ta6').show(); }
        }
        setHeight_under();
    };

    // 결정례 검색 영역 load
    this.loadCaseAdminArea = function () {
        $('#sCode').val("I002");
        var data = $('#searchForm').serialize();
        sendNonBlockingAjaxRequest(razorParams.listUrl, data, total.caseadminSearchCallback);
    };

    // 결정례 검색 영역 callback
    this.caseadminSearchCallback = function (html) {
        var isExist = false;
        var cCount = $(html).filter('#tCount').html();
        $('#cCnt7').html(cCount);
        if (cCount == "0") {
            total.SetInHtml('7', 0, '', '');
        } else {
            total.SetInHtml('7', 1, $(html).filter('#tHead').html(), $(html).filter('#tBody').html());
            isExist = true;
        }
        total.showEndTotalList("", cCount);
        total.setTotalCountMap("I002", cCount);
        if (isExist) {
            $('#tl7').show();
            if ($('#ta7').length > 0) { $('#ta7').show(); }
        }
        setHeight_under();
    };

    // 해석례 검색 영역 load
    this.loadInterpreterArea = function () {
        $('#sCode').val("I003");
        var data = $('#searchForm').serialize();
        sendNonBlockingAjaxRequest(razorParams.listUrl, data, total.interpreterSearchCallback);
    };

    // 해석례 검색 영역 callback
    this.interpreterSearchCallback = function (html) {
        var isExist = false;
        var cCount = $(html).filter('#tCount').html();
        $('#cCnt8').html(cCount);
        if (cCount == "0") {
            total.SetInHtml('8', 0, '', '');
        } else {
            total.SetInHtml('8', 1, $(html).filter('#tHead').html(), $(html).filter('#tBody').html());
            isExist = true;
        }
        total.showEndTotalList("", cCount);
        total.setTotalCountMap("I003", cCount);
        if (isExist) {
            $('#tl8').show();
            if ($('#ta8').length > 0) { $('#ta8').show(); }
        }
        setHeight_under();
    };

    // 문헌 검색 영역 load
    this.loadDocArea = function () {
        $('#sCode').val("D000");
        var data = $('#searchForm').serialize();
        sendNonBlockingAjaxRequest(razorParams.listUrl, data, total.docSearchCallback);
    };

    // 문헌 검색 영역 callback
    this.docSearchCallback = function (html) {
        var isExist = false;
        var cCount = $(html).filter('#dCount').html();
        $('#cCnt9').html(cCount);
        if (cCount == "0") {
            total.SetInHtml('9', 0, '', '');
        } else {
            total.SetInHtml('9', 1, $(html).filter('#dHead').html(), $(html).filter('#dBody').html());
            isExist = true;
        }
        total.showEndTotalList("", cCount);
        total.setTotalCountMap("D000", cCount);
        if (isExist) {
            $('#tl9').show();
            if ($('#ta9').length > 0) { $('#ta9').show(); }
        }
        setHeight_under();
    };

    // 주석서 검색 영역 load
    this.loadJusukArea = function () {
        $('#sCode').val("D021");
        var data = $('#searchForm').serialize();
        sendNonBlockingAjaxRequest(razorParams.listUrl, data, total.JusukSearchCallback);
    };

    // 주석서 검색 영역 callback
    this.JusukSearchCallback = function (html) {
        var isExist = false;
        var cCount = $(html).filter('#tCount').html();
        $('#cCnt10').html(cCount);
        if (cCount == "0") {
            total.SetInHtml('10', 0, '', '');
        } else {
            total.SetInHtml('10', 1, $(html).filter('#tHead').html(), $(html).filter('#tBody').html());
            isExist = true;
        }
        total.showEndTotalList("", cCount);
        total.setTotalCountMap("D021", cCount);
        if (isExist) {
            $('#tl10').show();
            if ($('#ta10').length > 0) { $('#ta10').show(); }
        }
        setHeight_under();
    };

    // 이북 검색 영역 load
    this.loadEbookArea = function () {
        $('#sCode').val("D022");
        var data = $('#searchForm').serialize();
        sendNonBlockingAjaxRequest(razorParams.listUrl, data, total.ebookSearchCallback);
    };

    // 이북 검색 영역 callback
    this.ebookSearchCallback = function (html) {
        var isExist = false;
        var cCount = $(html).filter('#eCount').html();
        $('#cCnt11').html(cCount);
        if (cCount == "0") {
            total.SetInHtml('11', 0, '', '');
        } else {
            total.SetInHtml('11', 1, $(html).filter('#eHead').html(), $(html).filter('#eBody').html());
            isExist = true;
        }
        total.showEndTotalList("", cCount);
        total.setTotalCountMap("D022", cCount);
        if (isExist) {
            $('#tl11').show();
            if ($('#ta11').length > 0) { $('#ta11').show(); }
        }
        setHeight_under();
    };

    // 법률용어
    this.loadDicArea = function () {
        $('#sCode').val("D013");
        var data = $('#searchForm').serialize();
        sendNonBlockingAjaxRequest(razorParams.listUrl, data, total.dicSearchCallback);
    };

    // 법률용어 검색 영역 callback
    this.dicSearchCallback = function (html) {
        var isExist = false;
        var cCount = $(html).filter('#wCount').html();
        $('#cCnt12').html(cCount);
        if (cCount == "0") {
            total.SetInHtml('12', 0, '', '');
        } else {
            total.SetInHtml('12', 1, $(html).filter('#wHead').html(), $(html).filter('#wBody').html());
            isExist = true;
        }
        total.showEndTotalList("", cCount);
        total.setTotalCountMap("D013", cCount);
        if (isExist) {
            $('#tl12').show();
            if ($('#ta12').length > 0) { $('#ta12').show(); }
        }
        setHeight_under();
    };

    //로펌리포트
    this.loadLawFirmReportArea = function () {
        $('#sCode').val("P011");
        var data = $('#searchForm').serialize();
        sendNonBlockingAjaxRequest(razorParams.listUrl, data, total.lawFirmReportAreaCallback);
    };

    // 로펌리포트 검색 영역 callback
    this.lawFirmReportAreaCallback = function (html) {
        var isExist = false;
        var cCount = $(html).filter('#tCount').html();
        $('#cCnt15').html(cCount);
        if (cCount == "0") {
            total.SetInHtml('15', 0, '', '');
        } else {
            total.SetInHtml('15', 1, $(html).filter('#tHead').html(), $(html).filter('#tBody').html());
            isExist = true;
        }
        total.showEndTotalList("", cCount);
        total.setTotalCountMap("P011", cCount);
        if (isExist) {
            $('#tl13').show();
            if ($('#ta13').length > 0) { $('#ta13').show(); }
        }
        setHeight_under();
    };

    //전문법률서식
    this.loadLawFormArea = function () {
        $('#sCode').val("F001");
        var data = $('#searchForm').serialize();
        sendNonBlockingAjaxRequest(razorParams.listUrl, data, total.lawFormAreaCallback);
    };

    // 전문법률서식 검색 영역 callback
    this.lawFormAreaCallback = function (html) {
        var isExist = false;
        var cCount = $(html).filter('#tCount').html();
        $('#cCnt17').html(cCount);
        if (cCount == "0") {
            total.SetInHtml('17', 0, '', '');
        } else {
            total.SetInHtml('17', 1, $(html).filter('#tHead').html(), $(html).filter('#tBody').html());
            isExist = true;
        }
        total.showEndTotalList("", cCount);
        total.setTotalCountMap("F001", cCount);
        if (isExist) {
            $('#tl15').show();
            if ($('#ta14').length > 0) { $('#ta14').show(); }
        }
        setHeight_under();
    };


    // 법조인
    //    this.loadLawyerArea = function () {
    //        $('#sCode').val("P000");
    //        var data = $('#searchForm').serialize();
    //        sendNonBlockingAjaxRequest(razorParams.listUrl, data, total.lawyerSearchCallback);
    //    };

    //    // 법조인 검색 영역 callback
    //    this.lawyerSearchCallback = function (html) {
    //        var cCount = $(html).filter('#pCount').html();
    //        //autoIncrementVal('#cCnt13', cCount, 500, '');
    //        ('#cSumCnt13').html(cCount);
    //        if (cCount == "0") {
    //            total.SetInHtml('13', 0, '', '');
    //        } else {
    //            total.SetInHtml('13', 1, $(html).filter('#pHead').html(), $(html).filter('#pBody').html());
    //        }
    //    };

    //// 세무
    //this.loadTaxArea = function () {
    //    $('#sSubType').val("1");
    //    $('#sCode').val("B002");
    //    var data = $('#searchForm').serialize();
    //    sendNonBlockingAjaxRequest(razorParams.listUrl, data, total.TaxSearchCallback);
    //    $('#sSubType').val("-1");
    //};

    //// 세무 검색 영역 callback
    //this.TaxSearchCallback = function (html) {
    //    var isExist = false;
    //    var cCount = $(html).filter('#tCount').html();
    //    if (checkMobile()) { cCount = "0"; }
    //    $('#cCnt16').html(cCount);
    //    if (cCount == "0") {
    //        total.SetInHtml('16', 0, '', '');
    //    } else {
    //        total.SetInHtml('16', 1, $(html).filter('#tHead').html(), $(html).filter('#tBody').html());
    //        isExist = true;
    //    }
    //    total.showEndTotalList("", cCount);
    //    total.setTotalCountMap("B002", cCount);
    //    if (isExist) {
    //        $('#tl14').show();
    //    }
    //    setHeight_under();
    //};

    //비즈폼서식
    this.loadBizFormArea = function () {
        $('#sSubType').val("1");
        $('#sCode').val("F002");
        $('#sType1').val('0000');
        var data = $('#searchForm').serialize();
        sendNonBlockingAjaxRequest(razorParams.listUrl, data, total.bizFormAreaCallback);
        $('#sSubType').val("-1");
        $('#sType1').val('0');
    };

    //비즈폼서식 검색 영역 callback
    this.bizFormAreaCallback = function (html) {
        var isExist = false;
        var cCount = $(html).filter('#tCount').html();
        if (checkMobile()) { cCount = "0"; }
        $('#cCnt19').html(cCount);
        if (cCount == "0") {
            total.SetInHtml('19', 0, '', '');
        } else {
            total.SetInHtml('19', 1, $(html).filter('#tHead').html(), $(html).filter('#tBody').html());
            isExist = true;
        }
        total.showEndTotalList("", cCount);
        total.setTotalCountMap("F002", cCount);
        if (isExist) {
            $('#tl16').show();
        }
        setHeight_under();
    };


    // 뉴스
    this.loadNewsArea = function () {
        $('#sCode').val("N000");
        var data = $('#searchForm').serialize();
        sendNonBlockingAjaxRequest(razorParams.listUrl, data, total.newsSearchCallback);
    };

    // 뉴스 검색 영역 callback
    this.newsSearchCallback = function (html) {
        var isExist = false;
        var cCount = $(html).filter('#tCount').html();
        //        autoIncrementVal('#cCnt20', cCount, 500, '');
        $('#cCnt20').html(cCount);
        if (cCount == "0") {
            total.SetInHtml('20', 0, '', '');
        } else {
            total.SetInHtml('20', 1, $(html).filter('#tHead').html(), $(html).filter('#tBody').html());
            isExist = true;
        }
        total.showEndTotalList("", cCount);
        total.setTotalCountMap("N000", cCount);
        if (isExist) {
            $('#tl17').show();
            if ($('#ta16').length > 0) { $('#ta16').show(); }
        }
        setHeight_under();
    };

    // 컬럼
    this.loadColumnArea = function () {
        $('#sCode').val("N001");
        var data = $('#searchForm').serialize();
        sendNonBlockingAjaxRequest(razorParams.listUrl, data, total.columnSearchCallback);
    };

    // 컬럼 검색 영역 callback
    this.columnSearchCallback = function (html) {
        var isExist = false;
        var cCount = $(html).filter('#tCount').html();
        $('#cCnt21').html(cCount);
        if (cCount == "0") {
            total.SetInHtml('21', 0, '', '');
        } else {
            total.SetInHtml('21', 1, $(html).filter('#tHead').html(), $(html).filter('#tBody').html());
            isExist = true;
        }
        total.showEndTotalList("", cCount);
        setTimeout(function () { total.setTotalCountMap("N001", cCount); }, 100);
        if (isExist) {
            $('#tl18').show();
            if ($('#ta17').length > 0) { $('#ta17').show(); }
        }
        setHeight_under();
    };

    // 온주
    this.loadOnjuArea = function () {
        $('#sCode').val("J001");
        var data = $('#searchForm').serialize();
        sendNonBlockingAjaxRequest(razorParams.listUrl, data, total.onjuSearchCallback);
    };

    // 온주 검색 영역 callback
    this.onjuSearchCallback = function (html) {
        var isExist = false;
        var cCount = $(html).filter('#tCount').html();
        $('#cCnt22').html(cCount);
        if (cCount == "0") {
            total.SetInHtml('22', 0, '', '');
        } else {
            total.SetInHtml('22', 1, $(html).filter('#tHead').html(), $(html).filter('#tBody').html());
            isExist = true;
        }
        total.showEndTotalList("", cCount);
        setTimeout(function () { total.setTotalCountMap("J001", cCount); }, 100);
        if (isExist) {
            $('#tl19').show();
            if ($('#ta18').length > 0) { $('#ta18').show(); }
        }
        setHeight_under();
    };

    /*
    // 다이렉트 검색 영역 load
    this.loadDirectArea = function () {
    var url = razorParams.directUrl;
    var sWord = $("#sWord").val().replace(/ /g, '');
    var param = {
    "sWord": sWord
    };
    sendNonBlockingAjaxRequest(razorParams.directUrl, param, total.directSearchCallback);
    };

    // 다이렉트 선택 서치
    this.goDirectSelect = function (sid) {
    var url = razorParams.directUrl;
    var sWord = $("#sWord").val().replace(/ /g, '');
    var param = {
    "sWord": sWord,
    "sId": sid
    };
    sendNonBlockingAjaxRequest(razorParams.directUrl, param, total.directSearchCallback);
    };

    this.directSearchCallback = function (html) {
    if (html.replace(/ /g, '').replace(/\r/g, "").replace(/\n/g, "") != '') {
    targetList = 0;
    $('#direct_area').show();
    $('#direct_area').empty();
    $('#direct_area').html(html);
    if ($('#tab_area').length > 0) {
    setTimeout(function () {
    total.showAdditionContent($("#lbTid").val(), '0', '');
    }, 100);
    }
    if ($('#additionInfo').length > 0) {
    setTimeout(function () {
    total.showSubInfoView($("#lbTid").val());
    }, 100);
    }
    total.showEndTotalList(1);
    }
    setHeight_under();
    };
    */

   
    this.selectContentList = function (t, c) {
        var cnt = '0';
        if (t == '1' || t == '2' || t == '3' || t == '6' || t == '23')
        {
            if (c == 9) {
                $('#cCnt' + t + '>li>span').each(function (index) {
                    if ($(this).html().replace(/ /g, '').replace(/\r/g, "").replace(/\n/g, "") != '0' && c == 9) {
                        c = index;
                        cnt = $(this).html().replace(/ /g, '').replace(/\r/g, "").replace(/\n/g, "");
                    }
                });
            } else {
                var c_temp = "";
                
                // 2022.05 판례 검색 개선 수정
                if (t == "1") {
                    if (c == "3") {
                        c_temp = "4";
                    }
                    else if (c == "4") {
                        c_temp = "3";
                    }


                    if (c == "1" || c == "2" || c == "5") {
                        $('#sType5').val("0");
                    }
                }
                
                $('#cCnt' + t + '>li>span').each(function (index) {                    

                    if (c_temp != "")
                    {
                        if (index == c_temp) {
                            cnt = $(this).html();
                            //$(this).parent().removeAttr("onclick");
                            $(this).parent().css("cursor", "default");
                        }
                        else {
                            $(this).parent().css("cursor", "pointer");
                        }
                    }
                    else {
                        if (index == c) {
                            cnt = $(this).html();
                            //$(this).parent().removeAttr("onclick");
                            $(this).parent().css("cursor", "default");
                        }
                        else {
                            $(this).parent().css("cursor", "pointer");
                        }
                    }                    
                });
            }
        } else {
            cnt = $('#cCnt' + t).html();
        }
        if (cnt != '0') {
            showloading();
            total.setSelectArea(t, c);
        }

        if ($("#co_mainContainer").hasClass('mobile')) {
            $('.left_container').removeClass('slide_mov ').removeClass('add_border ');
            $('#bg_screen').hide();
            $("html").css("overflow-y", "auto");
        }
    };

    this.setSelectArea = function (t, c) {
        for (i = 1; i < 25; i++) {
            if ($("#totalHead" + i.toString()).length > 0) { $("#totalHead" + i.toString()).hide(); }
            if ($("#totalArea" + i.toString()).length > 0) { $("#totalArea" + i.toString()).hide(); }
        }
        $('#sList').val('20');
        if ($("#totalHead" + t).length > 0) { $("#totalHead" + t).show(); }
        if ($("#totalArea" + t).length > 0) { $("#totalArea" + t).show(); }
        $('#totalHead' + t).empty();
        $('#totalArea' + t).empty();
        switch (t) {
            case '1':
                $('#sSubType').val(c);
                total.loadCaseArea();
                break;
            case '2':
                $('#sSubType').val(c);
                total.loadLawArea();
                break;
            case '3':
                $('#sSubType').val(c);
                total.loadRuleArea();
                break;
            case '23':
                $('#sSubType').val(c);
                total.loadLocalArea();
                break;
            case '4':
                total.loadLawMakeArea();
                break;
            case '5':
                total.loadTreatyArea();
                break;
            case '6':
                $('#sSubType').val(c);
                total.loadPatentArea();
                break;
            case '7':
                total.loadCaseAdminArea();
                break;
            case '8':
                total.loadInterpreterArea();
                break;
            case '9':
                total.loadDocArea();
                break;
            //case '10':
            //    total.loadJusukArea();
            //    break;
            case '11':
                total.loadEbookArea();
                break;
            case '12':
                total.loadDicArea();
                break;
            case '15':
                total.loadLawFirmReportArea();
                break;
            //case '16':
            //    total.loadTaxArea();
            //    break;
            case '17':
                total.loadLawFormArea();
                break;
            case '19':
                total.loadBizFormArea();
                break;
            case '20':
                total.loadNewsArea();
                break;
            case '21':
                total.loadColumnArea();
                break;
            case '22':
                total.loadOnjuArea();
                break;
            default:
                break;
        }
        setTimeout(function () { hideloading(); }, 500);
    };

    this.selectCaseTypeList = function (c) {
        $('.result_case_tab li').removeClass('_this');
        $('.result_case_tab li').eq(c).addClass('_this');
        if (c == '0') {
            isSearchOne = true;
        }
        var ssType_ = $('#subType_').text();
        $('#sSubType').val(ssType_);
        $('#sType5').val(c);
        total.loadCaseArea();
    };

    this.settingCaseHeader = function () {
        var t5 = $('#sType5').val();
        $('.result_case_tab li').removeClass('_this');
        $('.result_case_tab li').eq(t5).addClass('_this');
    };




    // 값입력
    this.SetInHtml = function (c, n, oHtml, bHtml) {
        if (n == 0) {
            $('#totalHead' + c).hide();
            $('#totalArea' + c).hide();
        } else {
            $('#totalHead' + c).show();
            $('#totalArea' + c).show();
            $('#totalHead' + c).empty();
            $('#totalHead' + c).append(oHtml);
            $('#totalArea' + c).empty();
            $('#totalArea' + c).append(bHtml);
        }
    };

    this.showEndTotalList = function (sCode, c) {
        var mySearchOnOff = localStorage.getItem("mySearchOnOff") == null ? "" : localStorage.getItem("mySearchOnOff");
        var mySearchContentList = localStorage.getItem("mySearchContentList") == null ? "" : localStorage.getItem("mySearchContentList");

        totalSize += parseInt(c);
        totalColCnt += 1;        
        
        //C000|L000|
        if (mySearchOnOff == "Y") {
            if (sCode != "DIRECT")
            {
                myContentCount += 1;
            }

            if ((mySearchContentList.split('|').length - 1) == myContentCount)
            {
                hideloading();
            }
        }
        else {
            if (totalColCnt >= 9) {
                hideloading();
            }
        }

        if (mySearchOnOff == "Y")
        {
            if ((mySearchContentList.split('|').length - 1) == myContentCount)
            {
                if (parseInt(totalSize) == 0) {
                    $('.no_search_result').html("검색 결과가 존재하지 않습니다.");
                    $('.no_search_result').show();
                }
                else {
                    setTimeout(function () { storage.setMyDeskChk(); }, 200);
                }

                setTimeout(function () { total.setTotalMenuHidden(); }, 200);
            }
        }
        else
        {
            if (totalColCnt >= 18)
            {
                if (parseInt(totalSize) == 0)
                {
                    $('.no_search_result').html("검색 결과가 존재하지 않습니다.");
                    $('.no_search_result').show();
                }
                else {
                    setTimeout(function () { storage.setMyDeskChk(); }, 200);
                }

                setTimeout(function () { total.setTotalMenuHidden(); }, 200);
            }
        }        
    };

    this.selectOnList = function (c) {
        $("#option_a_" + c).attr('class', 'option_a_on');
        $("#option_b_" + c).attr('class', 'option_b');
        var headId = replaceChars($("#option_a_" + c).parents(".s_num_area").attr('id'), 'totalHead', 'totalArea');
        $("#" + headId).addClass('type-a');
        setHeight_under();
    };

    this.selectOffList = function (c) {
        $("#option_a_" + c).attr('class', 'option_a');
        $("#option_b_" + c).attr('class', 'option_b_on');
        var headId = replaceChars($("#option_a_" + c).parents(".s_num_area").attr('id'), 'totalHead', 'totalArea');
        $("#" + headId).removeClass('type-a');
        setHeight_under();
    };


    this.setTotalCountMap = function (d, c) {
        var sInfo = new Object();
        sInfo.did = d;
        sInfo.cnt = c;
        storage.setTotalCnt(sInfo);
    };

    this.setTotalMenuHidden = function () {
        if ($("#tl2").css("display") == "none" &&
        $("#tl3").css("display") == "none" &&
        $("#tl4").css("display") == "none" &&
        $("#tl23").css("display") == "none" &&
        $("#tl5").css("display") == "none") {
            $('#th2').hide(); $('#tu2').hide();
        } else { $('#th2').show(); $('#tu2').show(); }
         
        if ($("#tl6").css("display") == "none" &&
        $("#tl7").css("display") == "none" &&
        $("#tl8").css("display") == "none") {
            $('#th3').hide(); $('#tu3').hide();
        } else { $('#th3').show(); $('#tu3').show(); }

        if ($("#tl9").css("display") == "none" &&
        $("#tl10").css("display") == "none" &&
        $("#tl11").css("display") == "none" &&
        $("#tl12").css("display") == "none") {
            $('#th4').hide(); $('#tu4').hide();
        } else { $('#th4').show(); $('#tu4').show(); }

        //if ($("#tl13").css("display") == "none" &&
        //$("#tl14").css("display") == "none") {
        //    $('#th5').hide(); $('#tu5').hide();
        //} else { $('#th5').show(); $('#tu5').show(); }
        if ($("#tl13").css("display") == "none") {
            $('#th5').hide(); $('#tu5').hide();
        } else { $('#th5').show(); $('#tu5').show(); }

        if ($("#tl15").css("display") == "none" &&
        $("#tl16").css("display") == "none") {
            $('#th6').hide(); $('#tu6').hide();
        } else { $('#th6').show(); $('#tu6').show(); }

        if ($("#tl17").css("display") == "none" &&
            $("#tl18").css("display") == "none")
        {
            $('#th7').hide();
            $('#tu7').hide();
        }
        else
        {
            $('#th7').show();
            $('#tu7').show();
        }

        if ($("#tl19").css("display") == "none")
        {
            $('#th8').hide();
            $('#tu8').hide();
        }
        else
        {
            $('#th8').show();
            $('#tu8').show();
        }
    };

    this.checkWord = function () {
        var sWord_ = $.trim($('#sWord').val());
        var reg = /[`~!@#$%^*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gim;
        if (sWord_ != '') {
            sWord_ = sWord_.replace(reg, '');
            sWord_ = sWord_.replace(/ /g, '');
        } 
        if (sWord_.replace(/ /g, '') == '') {
            return true;
        } else {
            return false;
        }
    };

    this.bindEvent = function () {
    };

    // 통검 후 우측영역 광고 리스트
    this.getSearchRightADList = function () {
                
        sendNonBlockingAjaxRequest("/AjaxInfo/GetSearchedRightADList", "", function (result) {
            if (result != null) {
                $("#sectionADList").empty();
                $("#sectionADList").html(result);
            }
        });
    };
};


