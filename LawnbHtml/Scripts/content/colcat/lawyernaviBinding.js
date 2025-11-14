$(document).ready(function () {

    $("#arrangeBtn").click(function () {
        $('#sPage').val("1");
        lawyernavi.chkValidation(1);
    });

    // 법조인 네비게이션 체크박스
    $("#chkExam_all").click(function () {
        if ($("#chkExam_all").is(":checked"))
            $("input[name=chkExam]").prop("checked", "checked");
        else
            $("input[name=chkExam]").prop("checked", false);
    });
    $(".chkExam").click(function () {
        var chkCnt = 0, chkBoxCnt = 0;
        $(".chkExam").each(function () {
            if ($(this).is(":checked")) {
                chkCnt++;
            }
            chkBoxCnt++;
        });
        if (chkCnt == chkBoxCnt)
            $("#chkExam_all").prop("checked", "checked");
        else
            $("#chkExam_all").prop("checked", false);
    });

    $("#chkSchool_all").click(function () {
        if ($("#chkSchool_all").is(":checked"))
            $("input[name=chkSchool]").prop("checked", "checked");
        else
            $("input[name=chkSchool]").prop("checked", false);
    });
    $(".chkSchool").click(function () {
        var chkCnt = 0, chkBoxCnt = 0;
        $(".chkSchool").each(function () {
            if ($(this).is(":checked")) {
                chkCnt++;
            }
            chkBoxCnt++;
        });
        if (chkCnt == chkBoxCnt)
            $("#chkSchool_all").prop("checked", "checked");
        else
            $("#chkSchool_all").prop("checked", false);
    });

    $("#chkCareer_all").click(function () {
        if ($("#chkCareer_all").is(":checked"))
            $("input[name=chkCareer]").prop("checked", "checked");
        else
            $("input[name=chkCareer]").prop("checked", false);
    });
    $(".chkCareer").click(function () {
        var chkCnt = 0, chkBoxCnt = 0;
        $(".chkCareer").each(function () {
            if ($(this).is(":checked")) {
                chkCnt++;
            }
            chkBoxCnt++;
        });
        if (chkCnt == chkBoxCnt)
            $("#chkCareer_all").prop("checked", "checked");
        else
            $("#chkCareer_all").prop("checked", false);
    });

});

var lawyernavi = new function () {

    var naviParams = null;
    this.init = function (data) {
        naviParams = data;
        lawyernavi.bindEvent();
    };

    this.bindEvent = function () {

        // 현직 변경
        $(document).on('change', '#cJobCode', function () {

            lawyernavi.setJobCodeBinding();
            $('#sPage').val("1");
            lawyernavi.initSearchList(2);
        });

        // 성별 변경
        $(document).on('change', '#cGenderCode', function () {

            lawyernavi.setGenderCodeBinding();
            $('#sPage').val("1");
            lawyernavi.initSearchList(2);
        });

        //        // 우측 name 필터 ajaxsublist
        //        $(document).on('click', '#subSearchButton', function () {
        //            /*
        //            $('#sPage').val("1");
        //            $('#sList').val("4");
        //            $('#sCode').val("P000");
        //            $('#sType').val("2");
        //            */
        //            var sName = $("#sName").val();
        //            if (sName == "" || sName == null) {
        //                alert("법조인 이름을 입력해주세요.");
        //            }
        //            else {
        //                var dataParams = $('#subSearchForm').serialize();
        //                sendAjaxRequest(naviParams.listUrl, dataParams, lawyernavi.setLawyerSubNaviDataCallback);
        //            }
        //        });

        // 우측 list 닫기        
        $(document).on('click', '.search_result h4 .btn-group', function () {
            $('.search_result').hide();
        });
    };


    this.setJobCodeBinding = function () {
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
    };

    this.setGenderCodeBinding = function () {
        if ($('#sGenderCode').length > 0) {

            if ($("#cGenderCode option:selected").val() != "00") {
                if ($('#sGender').length > 0) {
                    $('#sGender').val($("#cGenderCode option:selected").text());
                    $('#sGenderCode').val($("#cGenderCode option:selected").val());
                }
            } else {
                if ($('#sGender').length > 0) {
                    $('#sGender').val("");
                    $('#sGenderCode').val($("#cGenderCode option:selected").val());
                }
            }
        }
    };

    this.subSearchList = function () {

        var sName = $("#sName").val();
        if (sName == "" || sName == null) {
            alert("법조인 이름을 입력해주세요.");
        }
        else {
            $('#subSearchForm').find('#sPage').val("1");
            var dataParams = $('#subSearchForm').serialize();
            sendAjaxRequest(naviParams.listUrl, dataParams, lawyernavi.setLawyerSubNaviDataCallback);
        }
    };

    this.initSearchList = function (n) {

        this.dataSerialize(n);
        var dataParams = $('#searchForm').serialize();
        sendAjaxRequest(naviParams.listUrl, dataParams, lawyernavi.setLawyerNaviDataCallback);

        if (document.body.clientWidth < 480 && $('#co_popupContainer').hasClass('mobile') && $('.left_container').hasClass('add_border')) { 
            $('.left_container').css({ 'position': 'absolute', 'transform': 'translateX(-100%)' }).removeClass('add_border').removeClass('slide_mov');
            $('.submit_area').hide();
            $('.main_container').show();
            $('html').css('overflow-y', 'auto');
        }
    };

    this.setLawyerNaviDataCallback = function (result) {
        if (result != null) {
            $('#search_results').empty();
            $('#search_results').html(result);

            var sort = $.trim($('#sSort').val());
            $('.btn_option>.btn-group>button').each(function (index) {
                if (sort == index) {
                    $(this).attr('class', 'btn btn-default _select');
                } else {
                    $(this).attr('class', 'btn btn-default');
                }
            });

            setHeight_navi();
        }
    };

    this.setLawyerSubNaviDataCallback = function (result) {
        if (result != null) {
            $('.search_result').empty();
            $('.search_result').html(result);

            $('.search_result').show();

            setHeight_navi();
        }
    };

    // 체크값 유효성 확인
    this.chkValidation = function (n) {

        var chkVal = "0";
        $(".chkExam").each(function (index) {

            if ($(".chkExam").eq(index).is(":checked")) {
                var _testDiff = $(".sTestE").eq(index).val() - $(".sTestS").eq(index).val();

                if ($(".sTestS").eq(index).val() == "" || $(".sTestE").eq(index).val() == "") {
                    chkVal = "1";
                    alert("시험/연수원정보를 조건으로 사용하려면 시작횟수(기수)와 종료횟수(기수)를 모두 입력해 주세요.");

                    if ($(".sTestS").eq(index).val() == "")
                        $(".sTestS").eq(index).focus();
                    else
                        $(".sTestE").eq(index).focus();

                    return false;
                }
                else if (_testDiff < 0) {
                    chkVal = "1";
                    alert("시험/연수원정보의 시작횟수(기수)가 종료횟수(기수)보다 큽니다.");
                    $(".sTestS").eq(index).focus();
                    return false;
                }
                else if (_testDiff != 0 && _testDiff > 5) {
                    chkVal = "1";
                    alert("시험/연수원정보의 시작횟수(기수)와 종료횟수(기수)는 5회(기수) 사이로 입력해야 합니다.");
                    $(".sTestS").eq(index).focus();
                    return false;
                }
            }
        });

        // 체크 통과
        if (chkVal == "0") {
            this.initSearchList(n);

            if (document.body.clientWidth < 480 && $('#co_popupContainer').hasClass('mobile')) {
                $('.left_container').css({ 'position': 'absolute', 'transform': 'translateX(-100%)' }).removeClass('add_border').removeClass('slide_mov');
                $('.submit_area').hide();
                $('.main_container').show();
                $('html').css('overflow-y', 'auto');
            }
        }
    };

    // 체크된 데이터 저장
    this.dataSerialize = function (n) {
        // n = 1 : 적용, n = 2 : 다른페이지에서 가져오기, n = 3 : 적용취소
        var sTestStr = "", sSchoolStr = "", sCareerStr = "";

        $("#sTestCol").val("");
        $("#sSchoolCol").val("");
        $("#sCareerCol").val("");

        if (n == 1) // 적용을 누름
        {
            $("#sJob").val("");
            $("#sJobCode").val("00");
            $("#sGender").val("");
            $("#sGenderCode").val("00");
        }

        if (n == 3) // 적용 취소
        {
            var e = 0, s = 0, c = 0;
            $("#chkExam_all").prop("checked", false);
            $("#chkSchool_all").prop("checked", false);
            $("#chkCareer_all").prop("checked", false);

            $(".chkExam").each(function () {
                $(this).prop("checked", false);
                e++;
            });
            $(".chkSchool").each(function () {
                $(this).prop("checked", false);
                s++;
            });
            $(".chkCareer").each(function () {
                $(this).prop("checked", false);
                c++;
            });
            /*
            alert(initSearchObject["sTestS0"]);
            alert(initSearchObject["sTestS0"]);
            
            alert(initSearchObject["sSchoolS0"]);
            alert(initSearchObject["sSchoolE0"]);
            alert(initSearchObject["sSchoolS1"]);
            alert(initSearchObject["sSchoolE1"]);
            alert(initSearchObject["sSchoolS2"]);
            alert(initSearchObject["sSchoolE2"]);
            
            alert(initSearchObject["sCareerS0"]);
            alert(initSearchObject["sCareerE0"]);
            alert(initSearchObject["sCareerS1"]);
            alert(initSearchObject["sCareerE1"]);
            */
            for (var i = 0; i < e; i++) {
                $("input[name=sTestS" + i + "]").val(initSearchObject["sTestS" + i]);
                $("input[name=sTestE" + i + "]").val(initSearchObject["sTestE" + i]);
            }
            for (var i = 0; i < s; i++) {
                $("input[name=sSchoolS" + i + "]").val(initSearchObject["sSchoolS" + i]);
                $("input[name=sSchoolE" + i + "]").val(initSearchObject["sSchoolE" + i]);
            }
            for (var i = 0; i < c; i++) {
                $("input[name=sCareerS" + i + "]").val(initSearchObject["sCareerS" + i]);
                $("input[name=sCareerE" + i + "]").val(initSearchObject["sCareerE" + i]);
            }
        }

        // $('#sPage').val("1");

        $(".chkExam").each(function (index) {

            if ($(this).is(":checked")) {
                sTestStr += $("#chkExam_all").val()
                            + "," + $(this).val()
                            + "," + ($(".sTestS").eq(index).val() == "" ? "1900" : $(".sTestS").eq(index).val())
                            + "," + ($(".sTestE").eq(index).val() == "" ? "2100" : $(".sTestE").eq(index).val())
                            + "_";
            }
        });
        $(".chkSchool").each(function (index) {
            /*
            if ($(this).is(":checked")) {
            sSchoolStr += $(".chkSchool_all").val()
            + "," + $(this).val()
            + "," + ($(".sSchoolS").eq(index).val() == "" ? ($(".sSchoolE").eq(index).val() == "" ? "1900" : $(".sSchoolE").eq(index).val()) : $(".sSchoolS").eq(index).val())
            + "," + ($(".sSchoolE").eq(index).val() == "" ? ($(".sSchoolS").eq(index).val() == "" ? "2100" : $(".sSchoolS").eq(index).val()) : $(".sSchoolE").eq(index).val())
            + "_";
            }
            */
            if ($(this).is(":checked")) {
                sSchoolStr += $("#chkSchool_all").val()
                            + "," + $(this).val()
                            + "," + ($(".sSchoolS").eq(index).val() == "" ? ($(".sSchoolE").eq(index).val() == "" ? "1900" : $(".sSchoolE").eq(index).val()) : $(".sSchoolS").eq(index).val())
                            + "," + ($(".sSchoolE").eq(index).val() == "" ? "2100" : $(".sSchoolE").eq(index).val())
                            + "_";
            }
        });
        $(".chkCareer").each(function (index) {

            if ($(this).is(":checked")) {
                sCareerStr += $("#chkCareer_all").val()
                            + "," + $(this).val()
                            + "," + ($(".sCareerS").eq(index).val() == "" ? "1900" : $(".sCareerS").eq(index).val())
                            + "," + ($(".sCareerE").eq(index).val() == "" ? "2100" : $(".sCareerE").eq(index).val())
                            + "_";
            }
        });
        if (sTestStr != "")
            $("#sTestCol").val(sTestStr.substring(0, sTestStr.length - 1));
        if (sSchoolStr != "")
            $("#sSchoolCol").val(sSchoolStr.substring(0, sSchoolStr.length - 1));
        if (sCareerStr != "")
            $("#sCareerCol").val(sCareerStr.substring(0, sCareerStr.length - 1));
    };

    this.goToPage_small = function (pageNo) {
        /*
        $('#subSearchForm [id="sPage"]').val(pageNo);
        document.subSearchForm.sPage.value = pageNo;
        $('#subSearchForm').find('#sPage').val(pageNo);
        $('#subSearchForm').find('[id="sPage"]').val(pageNo);
        $('#subSearchForm #sPage').val(pageNo);
        */
        $('#subSearchForm').find('#sPage').val(pageNo);
        var dataParams = $('#subSearchForm').serialize();
        sendAjaxRequest(naviParams.listUrl, dataParams, lawyernavi.setLawyerSubNaviDataCallback);
    };

    // 개인화 우측 체크값 저장 리스트(20개까지)
    this.chkTempList = function (s) {
        var sInfo = new Object();
        sInfo.did = s;
        sInfo.tit = $('#chk_' + s + '>h3>a').text();
        sInfo.stit = $('#chk_' + s + '>h3>span').text();
        storage.setNaviLawyerDesk(sInfo);
        lawyernavi.getChkNaviList();
        //개인화 관련  세션id 값 필요. 아직 대기중.
        //ajax 타고 디비에 체크된값 저장하고 return 값 뿌려주기
        //        var dataParams = { "sCode": sCode };
        //        sendAjaxRequest(naviParams.listUrl, dataParams, lawyernavi.setLawyerNaviChkDataCallback);
    };

    // 리스트 뿌리기
    this.getChkNaviList = function () {
        var lArr = storage.getNaviLawyerDesk();
        if (lArr != null) {
            var iHtml = "";
            for (var i = lArr.length - 1; 0 <= i; i--) {
                iHtml += "<li><a href=\"/Info/ContentView?sid=" + lArr[i].did + "\" class=\"popup_view\">";
                iHtml += lArr[i].tit + "</a>";
                iHtml += lArr[i].stit + "<i class=\"icon-x\" data-icon=\"&#xe915;\" onclick=\"lawyernavi.setDelNaviList('" + i + "')\"><span class=\"hide\">닫기</span></i></li>";
            }
            $('#latestViewList').html(iHtml);
        }
    };

    // 삭제
    this.setDelNaviList = function (d) {
        var lArr = storage.getNaviLawyerDesk();
        if (lArr != null) {
            lArr.splice(d, 1);
            //            for (var i = 0; i < lArr.length; i++) {
            //                alert(d);
            //                alert(lArr[i].did);
            //                if (d == lArr[i].did) {
            //                    alert(i);
            //                    lArr.splice(i, 1);
            //                }
            //            }
        }
        storage.setDelNaviLawyerDesk(lArr);
        lawyernavi.getChkNaviList();
    };

};