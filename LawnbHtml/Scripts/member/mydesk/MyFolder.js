
$(function () {    
    var myforderParams = {
        "MyFolderGetUrl": "/MyDesk/MyFolderGet"
    };
    myfolder.init(myforderParams);

});

var relateDid = null;
var myforderParams = null;
var myfolder = new function () {

    this.init = function (data) {
        myforderParams = data;
        myfolder.bindEvent();
    };

    this.bindEvent = function () {

        $('.base_popup').on('click', '#btnCancel', function () { //취소 닫기
            $('#individual_area').hide();
            $('.base_popup').hide();
            $('#bg_screen').hide();            
        });
        /*
        // 나의폴더 메모열기, 접기
        $(document).on('click', '.afolder .btn-right', function () {

        var index = $('.afolder .btn-right').index($(this));
        if ($('.memo_text').eq(index).css("display") == "none") {
        $('.memo_text').hide();
        $('.memo_text').eq(index).show();
        }
        else {
        $('.memo_text').hide();
        }
        });
        */
        /*
        $('.top_container .function_area #folder_put').click(function () {
        var dataParams = { "fType": "VIEW" };
        sendAjaxRequest(myforderParams.MyFolderGetUrl, dataParams, myfolder.myFolderGetCallBack);
        });
        */
        /*
        // 나의폴더 메모열기, 접기
        $(document).on('click', '.afolder .btn-right', function () {

        var index = $('.afolder .btn-right').index($(this));
                        
        $('.memo_text').each( function () {
        var i = $('.memo_text').index($(this));
        if (i == index) {
        if ($('.memo_text').eq(index).css("display") == "none")
        $('.memo_text').eq(i).show();
        else
        $('.memo_text').eq(i).hide();
        }
        else {
        $('.memo_text').eq(i).hide();
        }
        });            
        });
        */
        // 개인화 나의 폴더 본문에서 전체보기
        $(document).on('click', '.memo_btn .memo_all_view', function () {
            if ($('#result_area>div.list').html() == '') {
                $('#title_result_tab').html("<div>담은폴더 전체보기</div><div class='btn_option_outer'><div class='btn_close'>X</div></div><div class='btn_option_outer'></div></div>");
                $("#title_result_tab").show();
            }
            else {
                $("#title_result_tab>div:first-child").text('담은폴더 전체보기');
                $("#title_result_tab .btn_close").show();
                $("#title_result_tab .btn_reapprea").hide();
                $("#title_result_tab").show();
            }
            $(".myfolder_total").show();
            $("#result_area").show();
            $("#pdf_view").hide();
            $("#view_content").hide();
            $(".relate_list").hide();
            $(".myfolder_total").show();
            $(".list_order_pr").hide();
            $("#result_sep").hide();
            $('#result_area>div.list').empty();
            $('#result_area>ol.list').empty();
            $('#result_area>div.navigationLinks').empty();
            setTimeout(function () {
                $("#result_area").addClass("slide_mov_bottom");
            }, 200);
        });

        //나의폴더(메인) 클릭 시 우측 ajax리스트 검색
        $(document).on('click', '.folderlist', function () {
            if ($("input[name='txtNewFolder']").length > 0) {
                alert("추가, 편집 작업을 종류 후 검색해주세요.");
                return false;
            }
            else {
                $(".folderlist").removeClass("this-page");
                $(this).addClass("this-page");
                var folderLev = $(this).attr("data-lev");
                var folderName = $(this).text();

                myfolder.myFolderSearch(folderLev, folderName);
            }
            /*
            // 폴더레벨 파라미터 제외한 초기화
            $(".chkMainCont").prop("checked", false);
            $("#sMemoYN").val("");
            $("#sCode").val("");

            $("#dDate").val("0");
            $("#sDate1").val("");
            $("#sDate2").val("");
            $("#sWord").val("");
            $("#sLevel").val(folderLev);
            $("#sPage").val("1");

            var url = "/MyDesk/MyDeskSelectList";
            var serializeData = $('#searchForm').serialize();
            sendAjaxRequest(url, serializeData, myfolder.myFolderSearchCallBack);
            */
        });

        //나의폴더 삭제버튼 바인딩 
        $(document).on('click', '.folder_setup .folder_del_ac', function () {
            if ($('._modify').hasClass('folder_ac')) {
                $('.folder_ac').remove();
                var folderLev = $(".this-page").attr("data-lev");
                var dataParams = { "folderLev": folderLev, "fType": "LIST" };

                sendNonBlockingAjaxRequest(myforderParams.MyFolderGetUrl, dataParams, myfolder.myFolderGetCallBack);
            }

            if ($('._delete').hasClass('folder_ac')) {
                $('.folder_ac').remove();
            }
            else if ($(".folder_ac").length < 2) {
                $("<div class='folder_ac _delete deleteLev1'><i class='icon- ' data-icon='&#xe9ac;'><span class='blind'>삭제</span></i></div>").appendTo(".folder_lev1");
                $("<div class='folder_ac _delete deleteLev2'><i class='icon- ' data-icon='&#xe9ac;'><span class='blind'>삭제</span></i></div>").appendTo(".folder_lev2");
            }
        });

        //나의폴더 삭제level1
        $(document).on('click', '.deleteLev1', function () {
            var index = $(".deleteLev1").index($(this));
            var folderLev = $(".aLev1").eq(index).attr("data-lev");
            var folderNM = $(".aLev1").eq(index).text();

            myfolder.myFolderDel(folderLev, folderNM);
        });

        //나의폴더 삭제level2
        $(document).on('click', '.deleteLev2', function () {
            var index = $(".deleteLev2").index($(this));
            var folderLev = $(".aLev2").eq(index).attr("data-lev");
            var folderNM = $(".aLev2").eq(index).text();

            myfolder.myFolderDel(folderLev, folderNM);
        });

        // 나의폴더명 수정
        $(document).on('click', '.folder_setup .folder_modi_ac', function () {

            if ($('._delete').hasClass('folder_ac')) {
                $('.folder_ac').remove();
            }

            if ($('._modify').hasClass('folder_ac')) {
                $('.folder_ac').remove();
                var folderLev = $(".this-page").attr("data-lev");
                var dataParams = { "folderLev": folderLev, "fType": "LIST" };
                sendAjaxRequest(myforderParams.MyFolderGetUrl, dataParams, myfolder.myFolderGetCallBack);
            }
            else if ($(".folder_ac").length < 2) {
                $("<div class='folder_ac _modify updateLev1'><i class='icon-' data-icon='&#xe925;'><span class='blind'>수정</span></i></div>").appendTo(".folder_lev1");
                $("<div class='folder_ac _modify updateLev2'><i class='icon-' data-icon='&#xe925;'><span class='blind'>수정</span></i></div>").appendTo(".folder_lev2");

                $(document).on('click', '.updateLev1', function () {

                    if (!$(this).find('.btnConfirmLev1').length > 0) {
                        var index1 = $('.updateLev1').index($(this));
                        var txtLev1 = $(".aLev1").eq(index1).text();
                        var _thisPage = "";
                        if ($(".aLev1").eq(index1).hasClass("this-page")) {
                            _thisPage = "this-page";
                        }
                        var folderLev1 = $(".aLev1").eq(index1).attr("data-lev");
                        var upLev1TxtHtml = "<input type=\"text\" id=\"\" name=\"\" class=\"aLev1 " + _thisPage + "\" value=\"" + txtLev1 + "\" data-lev=\"" + folderLev1 + "\">"

                        $(this).empty();
                        $(this).append("<div class=\"btnConfirmLev1\"><span onclick=\"myfolder.myFolderNameUpdateConfirm('aLev1', " + index1 + ", '" + _thisPage + "')\">확인</span> <span onclick=\"myfolder.myFolderNameUpdateCancel('aLev1', '" + index1 + "', '" + _thisPage + "','" + txtLev1 + "')\">취소</span></div>");

                        if ($(".folder_lev1").eq(index1).find("button").length > 0) {
                            $(".folder_lev1").eq(index1).find("button").next().remove();
                            $(".folder_lev1").eq(index1).find("button").after(upLev1TxtHtml);
                        }
                        else {
                            $(".folder_lev1").eq(index1).find("a").remove();
                            $(".folder_lev1").eq(index1).prepend(upLev1TxtHtml);
                        }
                    }
                    return false;
                });

                $(document).on('click', '.updateLev2', function () {

                    if (!$(this).find('.btnConfirmLev2').length > 0) {
                        var index2 = $('.updateLev2').index($(this));
                        var txtLev2 = $(".aLev2").eq(index2).text();
                        var _thisPage = "";
                        if ($(".aLev2").eq(index2).hasClass("this-page")) {
                            _thisPage = "this-page";
                        }
                        var folderLev2 = $(".aLev2").eq(index2).attr("data-lev");
                        var upLev2TxtHtml = "<input type=\"text\" id=\"\" name=\"\" class=\"aLev2 " + _thisPage + "\" value=\"" + txtLev2 + "\" data-lev=\"" + folderLev2 + "\">"

                        $(this).empty();
                        $(this).append("<div class=\"btnConfirmLev2\"><span onclick=\"myfolder.myFolderNameUpdateConfirm('aLev2', " + index2 + ", '" + _thisPage + "')\">확인</span> <span onclick=\"myfolder.myFolderNameUpdateCancel('aLev2', '" + index2 + "', '" + _thisPage + "','" + txtLev2 + "')\">취소</span></div>");

                        $(".folder_lev2").eq(index2).find("a").remove();
                        $(".folder_lev2").eq(index2).prepend(upLev2TxtHtml);
                    }
                    return false;
                });
            }
        });
        /*
        $(document).on('click', '.folder_cancel', function () {
        var index = $(this).index();
        $(".btnConfirm").eq(index).remove();
        });

        $(document).on('click', '.folder_update', function () {
        //형재 폴더명, level
        var index = $(this).index();
        });
        */
    };

    //-------------------------- 나의폴더(본문) 생성, 담기 -------------------------------//
    this.myFolderGetViewCallBack = function (result) {
        if (result != null) {
            if (result == "-2") {
                loginNeed();
            }
            else {
                $("#folder_results").empty();
                $("#folder_results").html(result);

                $('.base_popup').hide();
                $('#individual_area').show();
                $('#popup_folder').show();

                setTreeBinding();
            }
        }
    }

    // popup폴더담기 클릭 후 나의폴더 가져오기
    this.myFolderGetCallBack = function (result) {

        if (result != null) {
            if (result == "3") {
                alert("초기폴더가 이미존재합니다.");
            }
            else if (result == "2") {
                alert("이름이 중복되었습니다.");
            }
            else if (result == "-1") {
                alert("폴더담기에 실패했습니다.");
            }
            else if (result == "-2") {
                loginNeed();
            }
            else {
                //alert("새폴더가 생성되었습니다");

                $("#folder_results").html(result);

                if ($("#divFolderSave").length > 0) {
                    $("#divFolderSave").show();
                }

                if ($('#popup_folder').length > 0) {
                    $('.base_popup').hide();
                    $('#individual_area').show();
                    $('#popup_folder').show();
                }

                setTreeBinding();
            }
        }
        /*
        if ($('#popup_folder').length > 0) {
        $('.base_popup').hide();
        $('#individual_area').show();
        $('#popup_folder').show();
        }        
        setTreeBinding();
        */
        //setHeight_under();
    };

    // 새폴더 만들기(본문)
    this.myFolderCreation = function () {

        if (!$(".rdoRoot").is(":checked")
                && !$(".rdoLev1").is(":checked")
                && !$(".rdoLev2").is(":checked")) {
            alert("폴더버튼을 선택 후 새폴더를 생성해주세요.");
            return false;
        }

        if ($("#txtNewFolder").length > 0) {
            alert("기존 새폴더 생성을 완료 혹은 취소 후 생성해주세요.");
            $("#txtNewFolder").focus();
            return false;
        }

        var index = 0;
        var newHtml = "";
        var folderLev = "";
        if ($(".rdoRoot").is(":checked")) {

            folderLev = $("input[class=rdoRoot]:checked").val();
            index = $(".folder_lev1").length - 1;

            newHtml += "<li class=\"folder_new\"><input type=\"radio\" class=\"rdoLev1\" name=\"folder\"><input type=\"text\" id=\"txtNewFolder\" value=\"\" maxlength=\"12\">";
            newHtml += "<span onclick=\"myfolder.myFolderNewSave('" + folderLev + "', 'VIEW')\">확인</span><span onclick=\"myfolder.myFolderNewCancel('folder_new')\">취소</span></li>";

            if (index != -1) {
                $(".folder_lev1").eq(index).after(newHtml);
            }
            else {
                $(".tree li ol").append(newHtml);
            }
            $("#divFolderSave").css("display", "none");
        }
        else if ($(".rdoLev1").is(":checked")) {

            folderLev = $("input[class=rdoLev1]:checked").val();
            index = $("input[class=rdoLev1]:checked").index("input[class=rdoLev1]");

            var _len = $(".folder_lev1").eq(index).find(".folder_lev2").length;

            if (_len > 0) {
                newHtml += "<li class=\"folder_new\"><input type=\"radio\" class=\"rdoLev2\" name=\"folder\"><input type=\"text\" id=\"txtNewFolder\" value=\"\" maxlength=\"12\">";
                newHtml += "<span onclick=\"myfolder.myFolderNewSave('" + folderLev + "', 'VIEW')\">확인</span><span onclick=\"myfolder.myFolderNewCancel('folder_new')\">취소</span></li>";

                $(".folder_lev1").eq(index).find(".folder_lev2").eq(_len - 1).after(newHtml);
            }
            else {
                newHtml += "<ol class=\"folder_new\"><li><input type=\"radio\" class=\"rdoLev2\" name=\"folder\"><input type=\"text\" id=\"txtNewFolder\" value=\"\" maxlength=\"12\">";
                newHtml += "<span onclick=\"myfolder.myFolderNewSave('" + folderLev + "', 'VIEW')\">확인</span><span onclick=\"myfolder.myFolderNewCancel('folder_new')\">취소</span></li></ol>";

                $(".folder_lev1").eq(index).append(newHtml);
            }
            $("#divFolderSave").css("display", "none");
        }
        else if ($(".rdoLev2").is(":checked")) {

            alert("폴더는 2단계까지만 생성 가능하므로, 현재 위치에는 하위 폴더를 만들수 없습니다.");
            return false;
        }
    };

    // 새폴더 만들기(메인)
    this.myFolderCreationMain = function () {

        if ($("#txtNewFolder").length > 0) {
            alert("기존 새폴더 생성을 완료 혹은 취소 후 생성해주세요.");
            $("#txtNewFolder").focus();
            return false;
        }

        var index = 0;
        var newHtml = "";
        var folderLev = "";
        if ($(".pRoot").hasClass("this-page")) {

            folderLev = $(".pRoot").attr("data-lev");
            index = $(".folder_lev1").length - 1;

            newHtml += "<li class=\"folder_new\"><input type=\"text\" id=\"txtNewFolder\" name=\"txtNewFolder\" value=\"\" maxlength=\"12\">";
            newHtml += "<div class=\"folder_ac _modify\"><div><span onclick=\"myfolder.myFolderNewSave('" + folderLev + "', 'LIST')\">확인</span><span onclick=\"myfolder.myFolderNewCancel('folder_new')\">취소</span></div></div></li>";

            if (index != -1) {
                $(".folder_lev1").eq(index).after(newHtml);
            }
            else {
                $("#folder_results .tree").append(newHtml);
            }
            $("#txtNewFolder").focus();
        }
        else if ($(".aLev1").hasClass("this-page")) {

            index = $(".aLev1").index($(".this-page"));
            folderLev = $(".aLev1").eq(index).attr("data-lev");
            var _len = $(".folder_lev1").eq(index).find(".folder_lev2").length;

            if (_len > 0) {
                newHtml += "<li class=\"folder_new\"><input type=\"text\" id=\"txtNewFolder\" name=\"txtNewFolder\" value=\"\" maxlength=\"12\">";
                newHtml += "<div class=\"folder_ac _modify\"><div><span onclick=\"myfolder.myFolderNewSave('" + folderLev + "', 'LIST')\">확인</span><span onclick=\"myfolder.myFolderNewCancel('folder_new')\">취소</span></div></div></li>";

                $(".folder_lev1").eq(index).find(".folder_lev2").eq(_len - 1).after(newHtml);
            }
            else {
                newHtml += "<ol class=\"folder_new\"><li><input type=\"text\" id=\"txtNewFolder\" name=\"txtNewFolder\" value=\"\" maxlength=\"12\">";
                newHtml += "<div class=\"folder_ac _modify\"><div><span onclick=\"myfolder.myFolderNewSave('" + folderLev + "', 'LIST')\">확인</span><span onclick=\"myfolder.myFolderNewCancel('folder_new')\">취소</span></div></div></li></ol>";

                $(".folder_lev1").eq(index).append(newHtml);
                $("#txtNewFolder").focus();
            }
        }
        else if ($(".aLev2").hasClass("this-page")) {
            alert("로앤비 폴더는 2단계까지 지원합니다. 새폴더를 추가하시려면 상위의 폴더를 지정하신 뒤 새폴더 추가를 해주시기 바랍니다.");
            return false;
        }
    };

    // 새폴더 저장
    this.myFolderNewSave = function (folderLev, fType) {
        if ($.trim($("#txtNewFolder").val()) == "" || $("#txtNewFolder").val() == null || $("#txtNewFolder") == "undefined") {
            $("#txtNewFolder").focus();
            alert("폴더명을 입력해주세요");
            return false;
        }
        var folderNM = $.trim($("#txtNewFolder").val());
        //var folderLev = $("input[class=" + classNM + "]:checked").val();
        var dataParams = { "folderNM": folderNM, "folderLev": folderLev, "fType": fType };

        sendAjaxRequest(myforderParams.MyFolderGetUrl, dataParams, myfolder.myFolderGetCallBack);
    };

    this.myFolderNewCancel = function (classNM) {
        if ($("." + classNM).length > 0) {
            $("." + classNM).remove();

            $("#divFolderSave").show();
        }
    };

    // 컨탠츠 폴더에 저장
    this.myFolderContentSave = function () {

        var foldIdx = null;
        var classNM = null;

        if ($(".rdoRoot").is(":checked"))
            classNM = "rdoRoot";
        else if ($(".rdoLev1").is(":checked"))
            classNM = "rdoLev1";
        else if ($(".rdoLev2").is(":checked"))
            classNM = "rdoLev2";

        foldIdx = $("input[class=" + classNM + "]:checked").attr("data-idx");

        var dataParams = { "folderIdx": foldIdx, "sCode": myforderParams.sCode, "Did": myforderParams.Did, "sTitle": myforderParams.sTitle };
        sendAjaxRequest(myforderParams.MyFolderContentSetUrl, dataParams, myfolder.myFolderContentSetDataCallBack);
    };

    this.myFolderContentSetDataCallBack = function (result) {

        if (result != null) {
            if (result == "1") {
                alert("해당폴더에 저장되었습니다.");
                //location.reload();
                if (myforderParams.sCode == "J001") {
                    //doc.showTargetContent(myforderParams.Did.split('_')[0] + "|" + myforderParams.Did.split('_')[1] + "|1");                    
                    var chgUrl = "/Info/ContentView?sid=" + myforderParams.Did;
                    chgUrl = chgUrl.replace('|', '_');
                    location.href = chgUrl;
                }
                else {
                    location.reload();
                }
            }
            else if (result == "2") {
                alert("해당폴더에 이미 저장되어있습니다.");

                $('.base_popup').hide();
                $('#individual_area').hide();
                $('#popup_folder').hide();
            }
            else {
                alert("저장 실패했습니다. 다시 시도해주세요.");
            }
        }
    };
    //\----------------------- 나의폴더(본문) 생성, 담기 -------------------------\//


    //----------------- 나의폴더(본문) 가져오기 ----------------------//
    //개인화 컨탠츠와 관련된 나의폴더 가져오기
    this.myFolderRelateContent = function (Did) {
        var url = "/MyDesk/MyFolderRelateContent";
        //getMyFolderRelateContent(url, Did);
        var dataParams = { "Did": Did, "sType": "VIEW" };
        sendNonBlockingAjaxRequest(url, dataParams, myfolder.getMyFolderRelateContentCallBack);
    };
    //\---------------- 나의폴더(본문) 가져오기 ---------------------\//


    //----------------- 나의폴더(본문) 삭제, 메모 수정, 리스트 5개 제한 -------------------//
    this.myFolderDelContentCheck = function () {
        var checkCount = 0;
        var checkedVal = "";
        $(".chkidx").each(function (index) {
            if ($("input[class='chkidx']").eq(index).prop("checked")) {
                checkedVal += $(this).val() + ",";
                checkCount++;
            }
        });

        if (checkCount == 0) {
            alert("삭제하실 목록을 선택해주세요.");
            return;
        }
        else {
            myfolder.myFolderRelateContentDel(checkedVal.substring(0, checkedVal.length - 1));
        }
    };

    // 나의폴더에 해당컨탠츠 삭제
    this.myFolderRelateContentDel = function (idx) {

        var url = "/MyDesk/MyFolderRelateContentDel";
        if (confirm("해당 콘텐츠를 선택하신 폴더에서 삭제하시겠습니까?")) {
            //setMyFolderRelateContentDel(url, idx);
            var data = { "sIdx": idx };
            sendNonBlockingAjaxRequest(url, data, myfolder.setMyFolderRelateContentDelCallBack);
        }
        else {
            return;
        }
    };

    // 해당컨탠츠 메모 저장
    this.myFolderMemoSave = function (index, folderLev, Did) {

        var sCont = $(".txtMemo").eq(index - 1).val();
        /*
        if (sCont == "" || sCont == null) {
        alert("메모를 입력하고 저장해주세요.");
        $(".txtMemo").eq(index).focus();
        return;
        }
        else {
        */
        relateDid = Did;
        var url = "/MyDesk/MyFolderMemoSave";
        //setMyFolderMemoSave(url, folderLev, Did, sCont);
        var data = { "folderLev": folderLev, "Did": Did, "sCont": sCont };
        sendNonBlockingAjaxRequest(url, data, myfolder.setMyFolderMemoSaveCallBack);
        //}
    };

    // 해당컨탠츠 메모 취소
    this.myFolderMemoCancel = function (Did) {
        //$(".memo_text").css("display", "none");
        myfolder.myFolderRelateContent(Did);
    };

    // 리스트 5개 제한
    var targetList = 0;
    this.goUpDownList = function (t) {

        var folderCount = $('.memo_line .afolder').length;
        var fDiff = folderCount - 5;
        if (t == 0) {
            if (targetList < fDiff) {
                targetList = targetList + 1;
                $('.memo_line .afolder').each(function (index) {
                    if (index >= targetList && index < (folderCount - fDiff + targetList)) {
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                });
            }
        }
        else if (t == 1) {
            if (targetList > 0) {
                targetList = targetList - 1;
                $('.memo_line .afolder').each(function (index) {
                    if (index >= targetList && index < (folderCount - fDiff + targetList)) {
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                });
            }
        }
    };

    // 전체 나의폴더 보기
    this.myFolderAllList = function (Did) {
        var url = "/MyDesk/MyFolderRelateContent";
        //getMyFolderAllList(url);
        var dataParams = { "Did": Did, "sType": "MAIN" };
        sendNonBlockingAjaxRequest(url, dataParams, myfolder.getMyFolderAllListCallBack);
    };

    // 나의폴더(본문) 5개 제한
    this.upDownListLimit = function () {
        if ($(".afolder").length > 0) {
            $(".afolder").each(function (index) {
                if (index + 1 > 5) {
                    $(".afolder").eq(index).hide();
                }
            });
        }
    };
    //\----------------- 나의폴더(본문) 삭제, 메모 수정, 리스트 5개 제한 -------------------\//



    //-------------------------- 나의폴더(본문) CallBack ----------------------------//
    //    this.getMyFolderRelateContent = function (url, Did) {
    //        var data = { "Did": Did };
    //        sendNonBlockingAjaxRequest(url, data, getMyFolderRelateContentCallBack);
    //    };

    this.getMyFolderRelateContentCallBack = function (result) {
        if (result != null) {
            //var rihgtHtml = "<section id=\"result_myFolder\"></section>";
            //$(".right_container #myfolder_area").append(rihgtHtml);

            $("#myfolder_area").empty();
            $("#myfolder_area").html(result);
            myfolder.upDownListLimit();
        }
    };

    this.setMyFolderRelateContentDelCallBack = function (result) {
        if (result != null) {
            if (result == "1") {
                if ($("#delContent").length > 0) {
                    alert("삭제되었습니다.");
                    mydesk.initSearchList();
                }
                else {
                    location.reload();
                }
            }
            else {
                alert("삭제에 실패했습니다. 다시 시도해주세요.");
            }
        }
    };

    this.setMyFolderMemoSaveCallBack = function (result) {
        if (result != null) {
            if (result == "1") {
                alert("메모 수정사항이 저장되었습니다");
                //location.reload();
                myfolder.myFolderRelateContent(relateDid);
                service.getMyFolderHtml($("#sFullsId").val(), "MY05");
                storage.setMyDeskChk();
            }
            else {
                alert("수정에 실패했습니다. 다시 시도해주세요.");
            }
        }
    };

    this.getMyFolderAllListCallBack = function (result) {
        if (result != null) {
            $(".myfolder_total").empty();
            $(".myfolder_total").html(result);
        }
    };
    //\-------------------------- 나의폴더(본문) CallBack----------------------------\//

    //------------------------- 나의폴더(메인) 추가,삭제,편집-------------------------//    
    // 나의폴더(메인) 전체
    this.myFolderListGet = function () {
        var dataParams = { "fType": "LIST" };
        sendAjaxRequest(myforderParams.MyFolderGetUrl, dataParams, myfolder.myFolderListGetCallBack);
    };

    // 나의폴더 삭제(선택된 하위폴더, 컨탠츠까지 삭제)
    this.myFolderDel = function (folderLev, folderNM) {
        var url = "/MyDesk/MyFolderDel";
        if (confirm("‘" + folderNM + "’를 삭제하면(포함된 하위폴더도 삭제됨) 안에 들어있는 자료도 함께 삭제됩니다. 정말로 삭제 하시겠습니까?")) {
            myfolder.myFolderNewCancel("folder_new");

            var data = { "folderLev": folderLev };
            sendNonBlockingAjaxJsonRequest(url, data, myfolder.setMyFolderDelCallBack);
        }
        else {
            return;
        }
    };

    // 나의폴더에서 왼쪽 폴더리스트 클릭 시
    this.myFolderSearch = function (folderLev, folderName) {
        // 폴더레벨 파라미터 제외한 초기화        
        $(".chkMainCont").prop("checked", false);
        $("#sMemoYN").val("");
        $("input[class='rdoMemoYN']").eq(0).prop("checked", true);
        $("#sCode").val("");

        $("#dDate").val("0");
        $("#sDate1").val("");
        $("#sDate2").val("");
        $("#sWord").val("");

        $("#sLevel").val(folderLev);
        $("#sName").val(folderName);
        $("#sPage").val("1");

        var url = "/MyDesk/MyDeskSelectList";
        var serializeData = $('#searchForm').serialize();
        sendAjaxRequest(url, serializeData, myfolder.myFolderSearchCallBack);
        mydesk.initSearchList();

        if ($("#co_mainContainer").hasClass('mobile')) { //모바일면
            $('.left_container').removeClass('slide_mov ').removeClass('add_border ');
            $('#bg_screen').hide();
            $("html").css("overflow-y", "auto");
        }
    };

    // 나의폴더명 수정 저장
    this.myFolderNameUpdateConfirm = function (classNM, classIndex, thisPage) {

        var folderName = $("." + classNM).eq(classIndex).val();
        var folderLev = $("." + classNM).eq(classIndex).attr("data-lev");

        var url = "/MyDesk/MyFolderNameUpdate";
        var dataParams = { "folderName": folderName, "folderLev": folderLev };

        myfolder.myFolderTagChange(folderName, folderLev, classNM, classIndex, thisPage);
        sendNonBlockingAjaxRequest(url, dataParams, myfolder.myFolderNameUpdateCallBack);
    };

    // 나의폴더명 수정 취소
    this.myFolderNameUpdateCancel = function (classNM, classIndex, thisPage, folderName) {

        //var folderName = $("." + classNM).eq(classIndex).val();
        var folderLev = $("." + classNM).eq(classIndex).attr("data-lev");

        myfolder.myFolderTagChange(folderName, folderLev, classNM, classIndex, thisPage);
    };

    // 나의폴더명 수정 저장,취소 시 inputbox -> a tag 전환
    this.myFolderTagChange = function (folderName, folderLev, classNM, classIndex, thisPage) {
        var levNum = "1";
        if (classNM == "aLev1") levNum = "1";
        else if (classNM == "aLev2") levNum = "2";

        var upLevAHtml = "<a href=\"#\" class=\"folderlist " + classNM + " " + thisPage + "\" data-lev=\"" + folderLev + "\">" + folderName + "</a>";
        var upLevBefore = "<div class='folder_ac _modify updateLev" + levNum + "'><i class='icon-' data-icon='&#xe925;'><span class='blind'>수정</span></i></div>";
        if (classNM == "aLev1") {

            if ($(".folder_lev1").eq(classIndex).find("button").length > 0) {
                $(".folder_lev1").eq(classIndex).find("button").next().remove();
                $(".folder_lev1").eq(classIndex).find("button").after(upLevAHtml);

                $(".folder_lev1").eq(classIndex).find('.updateLev1').remove();
                $(".folder_lev1").eq(classIndex).append(upLevBefore);
            }
            else {
                $(".folder_lev1").eq(classIndex).find("input").remove();
                $(".folder_lev1").eq(classIndex).prepend(upLevAHtml);

                $(".folder_lev1").eq(classIndex).find('.updateLev1').remove();
                $(".folder_lev1").eq(classIndex).append(upLevBefore);
            }
        }
        else if (classNM == "aLev2") {

            $(".folder_lev2").eq(classIndex).find("input").remove();
            $(".folder_lev2").eq(classIndex).prepend(upLevAHtml);

            $(".folder_lev2").eq(classIndex).find('.updateLev2').remove();
            $(".folder_lev2").eq(classIndex).find("a").append(upLevBefore);
        }
    };
    //\------------------------ 나의폴더(메인) 추가,삭제,편집------------------------\//

    //------------------------- 나의폴더(메인) CallBack-------------------------//
    // 나의폴더명 수정
    this.myFolderNameUpdateCallBack = function (result) {

        if (result != null) {
            if (result == "1") {
                alert("수정되었습니다");
            }
            else {
                alert("수정에 실패했습니다. 다시 시도해주세요.");
            }
        }
    };

    // 나의폴더 및 해당폴더 컨텐츠 삭제
    this.setMyFolderDelCallBack = function (result) {
        if (result != null) {
            if (result[0] == "1") {
                alert("삭제되었습니다.");

                var folderLev = $(".this-page").attr("data-lev");
                if (result[1] == folderLev) {
                    //삭제한 레벨과 this-page가 같은레벨일 때는 루트폴더로 이동
                    //파라미터 값들 유지
                    $("#sLevel").val("");
                    $("#sName").val("0");
                    var data = { "fType": "LIST" };
                    sendNonBlockingAjaxRequest(myforderParams.MyFolderGetUrl, data, myfolder.myFolderGetV2CallBack);
                }
                else {
                    //같은레벨이 아닐 때는 현재 삭제된 폴더 제외 리스트 유지
                    var dataParams = { "folderLev": folderLev, "fType": "LIST" };
                    sendNonBlockingAjaxRequest(myforderParams.MyFolderGetUrl, dataParams, myfolder.myFolderGetV2CallBack);
                }
            }
            else if (result[0] == "2") {
                alert("Root폴더는 삭제가 불가능합니다.");
            }
            else {
                alert("삭제에 실패했습니다. 다시 시도해주세요.");
            }
        }
    };

    // 나의폴더 삭제 후 다시 나의폴더와 컨탠츠 리스트 가져오기
    this.myFolderGetV2CallBack = function (result) {

        if (result != null) {
            $("#folder_results").empty();
            $("#folder_results").html(result);
        }

        setTreeBinding();
        //setHeight_under();
        mydesk.initSearchList();
    };

    // popup폴더담기 클릭 후 나의폴더 가져오기
    this.myFolderListGetCallBack = function (result) {

        if (result != null) {
            $("#folder_results").empty();
            $("#folder_results").html(result);

            setTreeBinding();
            //setHeight();
            //setHeight_under();
        }
    };

    this.myFolderSearchCallBack = function (result) {

        if (result != null) {
            $("#search_results").empty();
            $("#search_results").html(result);

            //setHeight();
            //setHeight_under();
            myfolder.myFolderNewCancel("folder_new");
        }
    };
    //\------------------------ 나의폴더(메인) CallBack------------------------\//

    this.myFolderSearchConfirm = function (folderLev, folderName) {
        if (confirm("선택하신 폴더의 위치로 이동하시면 적용하신 검색어 및 조건이 초기화됩니다")) {
            myfolder.myFolderSearch(folderLev, folderName);
        }
        else {
            return;
        }
    };

    // 모바일 해당 컨텐츠 폴더 보기
    this.mobileMyFolderRelateContentShow = function () {        
        $('.function_area').removeClass('slide_mov_bottom');
        $('#individual_area').show();
        $('#popup_meno').show();
        $('#bg_screen').show();
    };
};

$(document).ready(function () {

    // 나의폴더 메모열기, 접기
    $(document).on('click', '.afolder .btn-right', function () {

        var index = $('.afolder .btn-right').index($(this));
        if ($('.memo_text').eq(index).css("display") == "none") {
            $('.memo_text').hide();
            $('.memo_text').eq(index).show();
        }
        else {
            $('.memo_text').hide();
        }
    });
});