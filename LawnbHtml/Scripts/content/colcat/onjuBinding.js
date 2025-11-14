var writerUserCode = "";
var whiteListExts = ["pdf", "txt", "doc", "docx", "hwp", "jpg", "jpeg", "png", "bmp", "ppt", "pptx", "xlsx", "xls", "zip"];
                    
$(document).ready(function () {

    $(document).on("change", "#sListCheckerOnju", function () {
        $("#sPage").val("1");
        $("#sList").val($(this).children('option:selected').val());
        //$("#sType3").val("0");
        onju.onjuWriterList();
    });

    $(document).on("change", "#sAttachedFile", function () {
        var fileSize = this.files[0].size;
        var fileName = this.files[0].name;
        var ext = fileName.substr(fileName.lastIndexOf('.') + 1);
        if (fileSize * 1 / 1024 / 1024 > 5) {
            alert('첨부파일의 용량이 5MB를 초과하였습니다.');
            //$(this).replaceWith($(this).clone());
            $(this).val("");
            return false;
        }
        var isAllowExtName = false;
        for (var i = 0; i < whiteListExts.length; i++) {
            var extName = whiteListExts[i];
            if (extName == ext.toLowerCase()) {
                isAllowExtName = true;
                break;
            }
        }

        if (!isAllowExtName) {            
            alert('업로드 파일 확장자를 확인해주세요.');
            //$(this).replaceWith($(this).clone());
            $(this).val("");
            return false;
        }
    });

    /*
    $(document).on("click",".onju_preview_law .btn_reduce",function(){ 
        $('.onju_preview_law').toggleClass('div_close');

        setHeight();
    });
    */

    $('.oldjomun').prepend('<div class="oldmiju">해당 주석은 민법 [법률 제9650호 일부개정 2009. 05. 08.]을 기준으로 집필되었으며, 현재 개정 집필 중입니다.</div>');
    $('.oldjomun').prepend('<div class="icon_oldjomun" data-icon="&#xe90d;"></div>');

    $(".icon_oldjomun").mouseover(function () {
        $(this).parent(".oldjomun").addClass('on');
        $(this).parents('li').addClass('over_inherit');
    });

    $(".icon_oldjomun").mouseout(function () {
        $(this).parent(".oldjomun").removeClass('on');
        $(this).parents('li').removeClass('over_inherit');
    });
});

var tempTab = "";

var onju = new function () {

    // 인용주석서 확인 체크
    this.mainQuotationChk = function () {
        var onjuLaw = $.trim($("#onjuLaw").val());
        var onjuJo = $.trim($("#onjuJo").val());
        var onjuDate = $.trim($("#onjuDate").val());
        var reg = /[`~!@#$%^&*()_|+\-=?;:'",<>\{\}\\\/]/gim;
      

        if (onjuLaw == "" || onjuDate == "" || onjuJo == "") {
            alert("검색어를 입력해 주세요.");
            return;
        }
        else if (onjuLaw.length < 2) {
            alert("검색어는 두 자 이상이어야 합니다.");
            return;
        }
        else if (onjuDate.length != 8 || !page.chkDateValidation(onjuDate) || !isNumeric(onjuDate, "")) {
            alert("날짜 형식이 다릅니다. 예) 20161010");
            return;
        }
        else if (!chkSpecialStr(onjuLaw) || !chkSpecialStr(onjuDate) || !chkSpecialStr(onjuJo)) {
            alert("특수문자가 들어 있습니다.");
            return;
        }
        else if (onjuLaw != "" && onjuDate != "" && onjuJo != "") {
            //건축법_제5조_20161101_0
            if (onjuLaw.length > onjuLaw.replace(reg, "").length ||
                onjuJo.length > onjuJo.replace(reg, "").length ||
                onjuDate.length > onjuDate.replace(reg, "").length) {
                alert("특수문자가 들어 있습니다.");
                return;
            }
            else {
                onju.openOnjuView("온주_" + onjuLaw + "_" + onjuJo + "_" + onjuDate + "_0");
            }
        }
        else {
            alert("주석서명, 조문번호, 출판일자를 다시 체크해주세요.");
            return;
        }

    };

    this.subPopupView = function (_href, _w, _h) {
        
        var maxThisX = screen.width * _w;
        var maxThisY = screen.height * _h;
        var isScroll = "no";
        if (_href.indexOf("ContentPrintView") > 0) { isScroll = "yes"; }
        window.open(_href, setLinkTargetName(_href), "width=" + maxThisX + ",height=" + maxThisY + ",scrollbars=" + isScroll + ",toolbar=no, resizable=yes, menubar=no, left=70, top=15");

    }

    // 인용주석서 확인 및 본문
    this.openOnjuView = function (s) {
        // s = 온주_건축법_제5조_20161101_0 
        // s = 온주_개인정보보호법_제13조_20190828_0
        // s = 온주_국세징수법_제19조_20191108_0 -> data =  J001001585_95639
        // s = 온주_개인정보보호법_전주 [제9장] 벌칙_20160704_0 -> data = J001011357_57141
       // s = s.replaceAll("_", "|");
        s = s.replace(/_/g, '|');
        $.ajax({
            type: "GET", url: "/AjaxInfo/GetContentDid?sId=" + encodeURI(s), dataType: "text", success: function (data) {
                if (data == "0") {
                    alert("입력하신 고유번호에 해당하는 주석서가 없습니다. \n​주석서명, 조문번호, 출판일자를 다시 확인하여 입력해주시기 바랍니다.");
                }
                else {
                    s = "/Info/ContentView?sid=" + data;
                    //showOriginalView("/Info/ContentView?sid=" + s); // commonjs.js                    
                    var _w = "0.55"; 
                    var _h = "0.85";
                    if (data.split('_').length == 3) {
                        if (data[2] == "0") {
                            _w = "0.85";
                        }
                    }
                    onju.subPopupView(s, _w, _h);
                }
            }, error: function (e) { }
        });

    };

    // 온주 대표편집위원, 편집위원
    this.mainOnjuWriter = function () {
        $('#sType5').val("MAIN");
        onju.onjuWriterList();
    };

    // 온주집필자 검색
    this.searchOnjuWriter = function () {

        // sType5 - MAIN, SUB
        // sType3 - 법령num        
        $("#sType5").val("SUB");

        if ($.trim($("#sWord").val()) != "" && $.trim($("#sWord").val()).length < 2) {
            alert("검색어는 두 자 이상이어야 합니다.");
            return;
        }
        else {
            $("#sPage").val("1");
            onju.onjuWriterList();
        }
    };

    // 온주집필자 소개 - 페이지 이동
    this.goToPage = function (pageNo) {

        $(".main_container").scrollTop(0);
        //$('body,html').animate({ "scrollTop": "0" }, 100);        
        $("#sPage").val(pageNo);
        onju.onjuWriterList();
    };

    // 온주 집필자 이름 정렬 변경
    this.onjuWriterSorting = function () {

        if ($("#sSubId1").val() == "") {
            $("#sSubId1").val("ASC");
            $("#sSubType3").val("DESC");
        }
        else if ($("#sSubId1").val() == "ASC") {
            $("#sSubId1").val("DESC");
            $("#sSubType3").val("ASC");
        }
        else if ($("#sSubId1").val() == "DESC") {
            $("#sSubId1").val("ASC");
            $("#sSubType3").val("DESC");
        }

        $("#sPage").val("1");
        onju.onjuWriterList();
    };

    this.onjuWriterList = function () {

        //$("#sType3").val("selected 법령 코드");
        //$("#searchForm").submit();        
        var data = $('#searchForm').serialize();
        sendNonBlockingAjaxRequest("/OnjuWriter/GetOnjuWriterList", data, function (result) {
            if (result != null) {
                $("#divWriterHtml").empty();
                $("#divWriterHtml").html(result);

                setHeight();
            }
        });
    };

    // 인용하기, 의견남기기 open
    this.onjuQuotationCommentOpen = function (_t) {
        var hdnUniversityOnju = $("#hdnUniversityOnju").val();
        GAEvent("TransactionLayer", "?did=" + $("#lbDid").val());
        //로그인체크        
        sendNonBlockingAjaxRequest("/OnjuWriter/GetLoginCheck", "", function (result) {    
            if (result == "") {
                if (hdnUniversityOnju == "Y") {
                    onju.showQuAn(_t);
                } else {
                    if (confirm("인용하기, 의견남기기 기능은 로그인 후 이용할 수 있습니다.")) {
                        location.href = "/Login/Index/";
                    }
                }
               
            }                
            else { 
                onju.showQuAn(_t);
            }
        });
    };

    this.showQuAn = function (_t) {
        if (_t == "1") {
            $('#view_quot').show();
            document.getElementById("view_quot").scrollIntoView();
            $('p .btn_close').click(function () {
                $('#view_quot').hide();
            });
        }
        else if (_t == "0") {
            $('#view_comment').show();
            document.getElementById("view_comment").scrollIntoView();
            $('p .btn_close').click(function () {
                $('#view_comment').hide();
            });
        }
    };

    // 인용하기 확인
    this.setOnujuQuotation = function () {
        quoteCopy();
                
        var feedTitle = $("#tempQuotTitle").text();
        var data = {
            "lbFeedCommentID": $("#hdnCommentID").val(),
            "lbFeedDiv": "1",
            "lbFeedLawTitle": $("#hdnMainTitle").val(),
            "lbFeedTitle": feedTitle,
            "lbFeedCont": $("#txtQuotation").val(),
            "lbFeedFileName": "",
            "lbFeedFileCount": 0
        };
                
        sendNonBlockingAjaxRequest("/AjaxInfo/SetOnjuFeed", data, function (result) {
            if (result != null) {
                if (result == "1") {
                    alert("주석서 고유번호가 복사되었습니다.");
                    $("#txtQuotation").val("");
                    $('#view_quot').hide();                 
                }
                else {
                    alert("복사하기 실패하였습니다.");
                }
            }
        });
    };

    // 의견남기기
    this.setOpinion = function () {
        
        if ($("#txtComment").val() == "") {
            alert("의견사항을 입력해주세요.");
            return;
        }
                
        var feedTitle = $("#tempCommentTitle").text();
        var data = {
            "lbFeedCommentID": $("#hdnCommentID").val(),
            "lbFeedDiv": "0",
            "lbFeedLawTitle": $("#hdnMainTitle").val(),
            "lbFeedTitle": feedTitle,
            "lbFeedCont": $("#txtComment").val(),
            //"lbFeedFileName": "",
            "lbFeedFileCount": 0
        };
                
        sendNonBlockingAjaxRequest("/AjaxInfo/SetOnjuFeed", data, function (result) {
            if (result != null) {
                if (result == "1") {
                    alert("주석서에 대한 의견사항이 접수되었습니다.");
                    $("#txtComment").val("");
                    $('#view_comment').hide();
                }
                else {
                    alert("접수에 실패했습니다.");
                }
            }
        });
    };

    // 현행법령, 3단비교 이동
    this.goToRefView = function (_p) {
        showOriginalView("/Info/ContentView?sid=" + _p);
    };

    
    // 온주집필자 메뉴 이동
    this.moveOnjuWriterTab = function (_t) {
        /*
        //$(".onju_writer_menu .tab").removeClass("_this");
        //$(".onju_writer_menu .tab").eq(_t).addClass("_this");
        */
        location.href = "/OnjuWriter/WriterCommonList?tab=" + _t;
    };

    // 온주집필자 메뉴 - 메뉴별 리스트 바인딩
    this.getWriterAjaxList = function (_t) {
        var _url = "";
        switch (_t) {
            case "0":
                _url = "/OnjuWriter/WriterNoticeList"; //담당법령 개정알림 
                break;
            case "1":
                _url = "/OnjuWriter/WriterNoticeWorkList"; //집필원고 관리
                break;
            case "2":
                _url = "/OnjuWriter/WriterCmtHitList"; //주석서 조회 통계
                break;
            case "3":
                _url = "/OnjuWriter/WriterFeedList"; //이용자 의견 조회
                break;
            case "4":
                _url = "/OnjuWriter/WriterCalculationList"; // 인세
                break;
            default:
                _url = "/OnjuWriter/WriterNoticeList";
                break;
        }

        var data = { "sType2" : "LIST", "sType5" : _t, "sList" : "10", "sCat" : "0" };
        sendNonBlockingAjaxRequest(_url, data, function (result) {
            if (result != null) {
                $("#onjuWriterContHtml").empty();
                $("#onjuWriterContHtml").html(result);
            }
        });
    };

    // 온주집필자 메뉴 - 페이지 이동
    this.goToWriterPage = function (pageNo) {
        if ($("#sViewPage").length < 0 && $("#sViewPage").val() != "REQ") {
            $(".main_container").scrollTop(0);
        }
        else {
            $("html, body").scrollTop(0);
        }
        $("#sType2").val("AJAXLIST");
        $("#sPage").val(pageNo);        
        onju.onjuWriterMenuInList();
    };
    // 온주집필자 메뉴 - 담당법령 개정알림 : 리스트 개수 변환
    this.onjuWriterListChange = function () {
        $("#sPage").val("1");
        $("#sType2").val("AJAXLIST");
        $("#sList").val($("#sListChecker").children('option:selected').val());
        onju.onjuWriterMenuInList();
    };

    //  온주집필자 메뉴 - 담당법령 개정알림 : 주석서 변경
    this.selLawNoticeChange = function () {
        $("#sPage").val("1");        
        $("#sCat").val($("#selLaw").children('option:selected').val());
        $("#sType2").val("AJAXLIST");

        //$("#sList").val("10");
        //$("#sListChecker").val("10");
        onju.onjuWriterMenuInList();
    };

    // 온주집필자 메뉴 - ajax리스트
    this.onjuWriterMenuInList = function () {
        var _t = $("#sType5").val();
        var _url = "";
        switch (_t) {
            case "0":
                _url = "/OnjuWriter/WriterNoticeList"; //담당법령 개정알림 
                break;
            case "1":
                _url = "/OnjuWriter/WriterNoticeWorkList"; //집필원고 관리
                break;
            case "2":
                _url = "/OnjuWriter/WriterCmtHitList"; //주석서 조회 통계                
                break;
            case "3":
                _url = "/OnjuWriter/WriterFeedList"; //이용자 의견 조회
                break;
            case "4":
                _url = "/OnjuWriter/WriterCalculationList"; // 인세
                break;
            case "REQ":
                _url = "/OnjuWriter/WriterReqCommentList"; // 집필원고 관리 - 원고접수 내역
                break;
            default:
                _url = "/OnjuWriter/WriterNoticeList";
                break;
        }

        if (_t == "1") {
            $("#chkNoticeWork_all").prop("checked", false);
        }        

        var data = $('#searchForm').serialize();
        sendNonBlockingAjaxRequest(_url, data, function (result) {
            if (result != null) {
                $("#writerInList").empty();
                $("#writerInList").html(result);
            }

            if ($("#hdnCountHtml").val() != null) {
                $("#divListCount").empty();
                $("#divListCount").html($("#hdnCountHtml").val());
            }
        });
    };

    // 온주집필자 메뉴 - 집필원고관리 : 검색
    this.writerNoticeWorkSearch = function () {
        $("#sPage").val("1");        
        $("#sCat").val($("#selLaw").children('option:selected').val());
        $("#sCat1").val($("#selWritingStatus").children('option:selected').val());
        $("#sType2").val("AJAXLIST");

        $("#sList").val("10");
        $("#sListChecker").val("10");
        onju.onjuWriterMenuInList();
    };
    
    // 온주집필자 메뉴 - 집필원고관리 : 원고접수 내역
    this.writerReqCommentOpen = function (_t) {
        var _url = "/OnjuWriter/WriterReqCommentList";
        if (_t == "VIEW") {
            _url = "/OnjuWriter/WriterReqCommentView";
        }        
        window.open(_url, '', 'width=915,height=600,toolbar=0,menubar=0,location=0,status=1,scrollbars=no,resizable=1,left=0,top=0');        
    };

    // 온주집필자 메뉴 - 집필원고관리 : 집필원고관리 리스트의 원고 다운로드 체크
    this.chkNoticeWorkDoc = function (_t) {
        
        if (_t == "all") {
            if ($("#chkNoticeWork_all").prop("checked")) {
                $("input[name='chkNoticeWork']").prop("checked", true);
            } else {
                $("input[name='chkNoticeWork']").prop("checked", false);
            }
        }
        else {
            var isAllchk = true;
            $("input[name='chkNoticeWork']").each(function (e) {
                if (!this.checked) {
                    isAllchk = false;
                }
            });
            $("#chkNoticeWork_all").prop("checked", isAllchk);
        }
    };

    // 온주집필자 메뉴 - 집필원고관리 : 집필원고관리 리스트의 원고 다운로드
    this.getNoticeWorkDocDownload = function () {

        var docType = $("input[name='rdoDocType']:checked").val();        
        var commentInfoList = []
        var chkExist = false;
        $("input[name='chkNoticeWork']").each(function (e) {
            if (this.checked) {
                commentInfoList.push({ "lawnbLawId": $(this).attr("data-lawid"), "commentLawId": $(this).attr("data-commentlawid") });
                chkExist = true;
            }
        });

        if (!chkExist) {
            alert("다운로드할 원고를 선택해주세요.");
            return;
        }
        else {           

            var url = "/OnjuWriter/OnjuWriterDocDownload";
            var frm = document.createElement("form");
            frm.method = "post";
            var input = document.createElement("input");
            $(input).attr("type", "hidden");
            $(input).attr("name", "commentInfoJson");
            $(input).attr("value", JSON.stringify(commentInfoList));
            frm.appendChild(input);

            input = document.createElement("input");
            $(input).attr("type", "hidden");
            $(input).attr("name", "docType");
            $(input).attr("value", docType);
            frm.appendChild(input);

            document.body.appendChild(frm);

            frm.action = url;
            frm.submit();

            document.body.removeChild(frm);
            alert("원고 다운로드 시 약간의 시간 소요가 있을 수 있습니다. \n잠시만 기다려주세요.");
        }
    };    

    // 온주집필자 메뉴 - 집필원고관리 : 원고접수 저장
    this.saveWriterReqComment = function () {
        var FileName = "";
        if ($("#sCat").val() == "") {
            alert("주석서명을 선택해주세요.");
            return;
        }
        else if ($("#sAttachedFile").val() == "") {
            alert("첨부파일을 등록해주세요.");
            return;
        }
        else {
            var fileData = new FormData();
            var files = $("#sAttachedFile").get(0).files;
            
            if (files[0].size > 5000000) {
                alert("첨부파일의 용량이 5MB를 초과하였습니다.");
                return;
            }
            fileData.append(files[0].name, files[0]);
            fileName = files[0].name;            

            //$("#sCat").val($("#selLaw").children('option:selected').val());
            if (confirm("원고를 접수하시겠습니까?"))
            {
                $("#updateform").submit();               
            }
        }
    };

    // 온주집필자 메뉴 - 집필원고관리 : 원고접수내역의 원고 다운로드
    this.writerReqCommentFileDown = function (fName, ext) {
        fName = unescape(fName);
        var params = { "sCode": "J001", "fileName": fName, "ext": ext };
        viewFileDownForm(params);
    };

    // 온주집필자 메뉴 - 주석서조회 통계 : 검색
    this.writerCmtHitSearch = function () {
        $("#sPage").val("1");
        $("#sCat").val($("#selLaw").children('option:selected').val());
        $("#sYearChk").val($("#selYear").children('option:selected').val());
        $("#sType2").val("AJAXLIST");

        $("#sSubId1").val("HIT");
        $("#sSubType1").val("DESC");
        $("#sList").val("10");
        $("#sListChecker").val("10");
        onju.onjuWriterMenuInList();
    };

    // 온주집필자 메뉴 - 주석서조회 통계 : hit, 주석서 정렬
    this.writerCmtHitSorting = function (sortType, _index) {
        $("#sPage").val("1");
        $("#sType2").val("AJAXLIST");        
        $(".btnCmtHitSorting").removeClass("_select");
        $(".btnCmtHitSorting").eq(_index).addClass("_select");

        if ($("#sSubType1").val() == "DESC") {
            //
            //$(".isorting").eq(_index).removeClass("icon-sort-num-down");
            if ($("#sSubId1").val() == sortType) {
                $("#sSubType1").val("ASC");

                if ($(".isorting").eq(_index).hasClass("icon-sort-num-up")) {
                    $(".isorting").eq(_index).addClass("icon-sort-num-down");
                    $(".isorting").eq(_index).removeClass("icon-sort-num-up");
                }
                else {
                    $(".isorting").eq(_index).addClass("icon-sort-num-up");
                    $(".isorting").eq(_index).removeClass("icon-sort-num-down");
                }
            }
            else {
                $(".isorting").eq(_index).removeClass("icon-sort-num-down");
                $(".isorting").eq(_index).addClass("icon-sort-num-up");
            }
        }
        else {
            if ($("#sSubId1").val() == sortType) {
                $("#sSubType1").val("DESC");
                if ($(".isorting").eq(_index).hasClass("icon-sort-num-down")) {
                    $(".isorting").eq(_index).addClass("icon-sort-num-up");
                    $(".isorting").eq(_index).removeClass("icon-sort-num-down");
                }
                else {
                    $(".isorting").eq(_index).addClass("icon-sort-num-down");
                    $(".isorting").eq(_index).removeClass("icon-sort-num-up");
                }
            } 
            else {
                $(".isorting").eq(_index).removeClass("icon-sort-num-down");
                $(".isorting").eq(_index).addClass("icon-sort-num-up");
            }
        }
        $("#sSubId1").val(sortType);

        onju.onjuWriterMenuInList();
    };

    // 온주집필자 메뉴 - 이용자 의견 조회 : 검색
    this.writerFeedSearch = function () {
        $("#sPage").val("1");

        if ($("#selLaw").children('option:selected').val() != "0") {
            $("#sCat").val($("#selLaw").children('option:selected').text());
        }
        else {
            $("#sCat").val("");
        }        
        $("#sCat1").val($("#selFeedType").children('option:selected').val());
        $("#sType2").val("AJAXLIST");

        $("#sList").val("10");
        $("#sListChecker").val("10");
        onju.onjuWriterMenuInList();
    };

    // 온주집필자 메뉴 - 인세 : 검색
    this.writerCalculationSearch = function () {

        if ($("#selCalPeriod").val() == "") {
            alert("계산기간을 선택해주세요.");
            return;
        }
        else {
            $("#sPage").val("1");
            if ($("#selLaw").children('option:selected').val() != "0") {
                $("#sCat").val($("#selLaw").children('option:selected').text());
            }
            else {
                $("#sCat").val("");
            }
            $("#sType").val($("#selCalPeriod").children('option:selected').val());
            $("#sType2").val("AJAXLIST");

            $("#sList").val("10");
            $("#sListChecker").val("10");
            onju.onjuWriterMenuInList();
        }        
    };

    // 온주 본문 우측 데이터 - 목차 변경 시 불러오기
    this.onjuContentViewRightInfo = function (sId) {

        var data = { "sId": sId };
        sendNonBlockingAjaxRequest("/SubInfo/ContentSubView", data, function (result) {
            if (result != null) {
                $("#divOnjuRightInfoHtml").empty();
                $("#divOnjuRightInfoHtml").html(result);
            }
        });        
    };

    //온주 메인 주석서 카테고리 - 모바일용
    this.selCatChange = function () { 
        var _num = $("#selCat option:selected").data("n");

        $('.all_onju dl').hide(); 
        $('.all_onju dl').eq(_num).show();
        setHeight_under();


    };

    //온주 메인 주석서 카테고리 - 새로고침 시 "가"
    $(document).ready(function(){  
        $('#selCat').find('option:first').prop('selected', 'selected');
    }); 
};

// /SubInfo/ContentSubView 온주 본문 가져오기
this.setSubViewCallback = function (result) {
    if (result != null) {
        //$('.main_container_view .btn_close').trigger('click');
        /*if ($('#view_sub_content').length > 0) {
            $('#view_content').hide();
            $('#view_sub_content').empty();
            $('#view_sub_content').html(result);
            $('#view_sub_content').show();
        } else {
            $('#view_content').empty();
            $('#view_content').html(result);
        }*/        
        if ($("#title_result_tab").is(':visible')) {
            if ($('#title_result_tab > div .text_ex').length > 0) {
                $("#title_result_tab .btn_reapprea").show();
                $("#title_result_tab .btn_close").show();
            } else {
                $("#title_result_tab").hide();
            }
            $("#result_area").hide();
        }
        if (checkMobile()) {
            $("#result_area").hide();  
            $(".mview_tab_area span").removeClass('_this');
            $(".mview_tab_area span:nth-of-type(2)").addClass('_this'); 
        }

        $('#view_sub_content').hide();
        $('#view_content').empty();
        //div 위치이동
        $('#view_content').scrollTop();

        $('#view_content').html(result);
        $('#view_content').show();

        //view.viewRefDataConten();

        if (typeof eKey != 'undefined') {
            var preparam = ($("#hdnJoNum").val().indexOf("(전주") > 0 || $("#hdnJoNum").val().indexOf("(후주") > 0) ? true : false;
            if (preparam) {
                $('#precmt').show();
            } else {
                $('#precmt').hide();
            }
        }

        if ($("#hdnPubDate").val() != "") { $("#pubdate_div").html("<h4>출판일</h4><ul class=\"publish_date\"> <li >" + $("#hdnPubDate").val() + "</li></ul>"); } else {
            $("#pubdate_div").html("");
        }

        if ($("#hdnRefDataChk").val() == "" && $("#hdnCommentID").val() == "") {
            $("#reQuto").hide();
            if ($("#hdnAlertYN").val() == "0" || $("#hdnAlertYN").val() == "2" || $("#hdnAlertYN").val() == "") {
                $("#grouplaw").html("<a href=\"#\" disable=\"true\" id=\"rNewOldInfo\"><span>현행법령</span></a><a href=\"#\" disable=\"true\" id=\"rSamInfo\"><span>3단비교</span></a>");
            } else {
                if ($("#lbLawnbLawId").val() == "001583" || $("#lbLawnbLawId").val() == "001624" || $("#lbLawnbLawId").val() == "001236") {
                    $("#grouplaw").html("<a href=\"javascript:onju.goToRefView('L000" + $("#lbLawnbLawId").val() +"');\"  id=\"rNewOldInfo\"><span>현행법령</span></a><a href=\"#\" disable=\"true\" id=\"rSamInfo\"><span>3단비교</span></a>");
                } else {
                    $("#grouplaw").html("<a href=\"javascript:onju.goToRefView('L000" + $("#lbLawnbLawId").val() + "');\" id=\"rNewOldInfo\"><span>현행법령</span></a><a href=\"javascript:onju.goToRefView('L000" + $("#lbLawnbLawId").val() + "_0_L');\" id=\"rSamInfo\"><span>3단비교</span></a>");
                }
            }
        }
        else {
            if ($("#hdnAlertYN").val() == "0" || $("#hdnAlertYN").val() == "2" || $("#hdnAlertYN").val() == "") {
                $("#grouplaw").html("<a href=\"#\" disable=\"true\" id=\"rNewOldInfo\"><span>현행법령</span></a><a href=\"#\" disable=\"true\" id=\"rSamInfo\"><span>3단비교</span></a>");
            } else {
                if ($("#lbUniversity").val() == "Y") { $("#reQuto").hide(); } else { $("#reQuto").show(); }
                var jonum = $.trim($("#hdnJoNum").val());
                jonum = jonum.replace(/제/gi, "").replace(/조의/gi, "X").replace(/조/gi, ""); 
                if ($("#lbLawnbLawId").val() == "001583" || $("#lbLawnbLawId").val() == "001624" || $("#lbLawnbLawId").val() == "001236")  {
                    $("#grouplaw").html("<a href=\"javascript:onju.goToRefView('L000" + $("#lbLawnbLawId").val() + "_" + jonum + "');\"  id=\"rNewOldInfo\"><span>현행법령</span></a><a href=\"#\" disable=\"true\" id=\"rSamInfo\"><span>3단비교</span></a>");
                } else {
                    $("#grouplaw").html("<a href=\"javascript:onju.goToRefView('L000" + $("#lbLawnbLawId").val() + "_" + jonum + "');\"  id=\"rNewOldInfo\"><span>현행법령</span></a><a href=\"javascript:onju.goToRefView('L000" + $("#lbLawnbLawId").val() + "_" + jonum + "_L');\" id=\"rSamInfo\"><span>3단비교</span></a>");
                }
            }
        }


        if ($("#hdnRefDataChk").val() == "Y") {
            $("#reflist").html(" <a href=\"javascript: open_onjuindex(); \" class=\"onlyone \"><span>본문 목차</span></a>");
            $('#reflist').show();
            $('#preface_div').hide();
        } else if ($("#hdnRefDataChk").val() == "N") {
            $("#reflist").html("<a href=\"#\" class=\"onlyone \" disable=\"true\"><span>본문 목차</span></a>");
            $('#reflist').show();
            $('#preface_div').hide();
        }
        else {
            if ($("#hdnCommentID").val() == "0") {
                $("#reflist").html("<a href=\"#\" class=\"onlyone \" disable=\"true\"><span>본문 목차</span></a>");
                $('#reflist').show();
                $('#preface_div').hide();
            } else {
                $("#reflist").html("");
                $('#reflist').hide();
                $('#preface_div').show();
            }
         
        }

        $("#bg_screen").hide();
        $('.loading_img').hide();

        setHeight();

        setTimeout(function () {
            if ($("#lbTid").val().length > 4) {
                if ($("#lbTid").val().substring(0, 4) == 'J001') {
                    if (typeof myhigh.getHightlight == 'function') {
                        myhigh.reviewinit();
                    }
                }
            }
        }, 500);

        setTimeout(function () { setCmtOnjuLog(); }, 5000);

        //$(".main_container_view").scrollTop(0);
        //$(".main_container").scrollTop(0);
    }    
    
    // 표지가 아닐 때 저장
    var _did = $("#lbTid").val();
    //_did = _did.replaceAll('_', '|');
    _did = _did.replace(/_/g, '|');
    if (_did.split('|')[1] != "0") {
        hidePrintLayer("close");
        $("#folder_put").show();
        // 조회 주석서 저장
        view.setViewtestContent();
    }
    else if (_did.split('|')[1] == "0"){
        //본문표지일 때 인쇄기능 제공 안함
        hidePrintLayer("open");
        $("#folder_put").hide();
    }
    //document.getElementById("a_" + _did.split('|')[1]).scrollIntoView({ block: "center", inline: "nearest", behavior: "smooth" }); 
    var element = document.getElementById("a_" + _did.split('|')[1]);
    var absoluteElementTop = element.getBoundingClientRect().top + $('.left_container').scrollTop();
    var middle = absoluteElementTop - ($('.left_container').innerHeight() / 2);

    //IE 에서는 scrollTo가 먹히지 않음
    var agent = navigator.userAgent.toLowerCase();
    if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {} else {
        document.getElementById('left_container').scrollTo({
            top: middle,
            behavior: 'smooth'
        });
    }

    // 목차 변경에 따른 나의 히스토리, 나의폴더 값 변경
    var chgTitle = $("#hdnTitle").val().indexOf("/") > 0 ? $("#hdnTitle").val().replace("/ ", "") : $("#hdnTitle").val();
    //myforderParams.Did = _did.replaceAll('|', '_') + "_0";  
    myforderParams.Did = _did.replace(/_/g, '|') + "_0";
    myforderParams.Did = myforderParams.Did.replace('|', '_');

    myforderParams.sTitle = encodeURIComponent(chgTitle);
    // 알림에서 사용
    $("#hdnStitle").val(chgTitle);

    // 인용하기, 의견남기기 display
    var hdnCommentID = $("#hdnCommentID").val();
    var hdnUniversityOnju = $("#hdnUniversityOnju").val();
    var hdnCoverYNOnju = $("#hdnCoverYNOnju").val();
    
    //if (hdnCommentID != "0" && hdnCommentID != "") {
    //if (hdnCommentID != "0" && hdnCommentID != "" && hdnUniversityOnju != "Y" && hdnCoverYNOnju != "0") {
    if (hdnCommentID != "0" && hdnCommentID != "" && hdnCoverYNOnju != "0") {
        $(".onju_sub_funtion").show();
    }
    else {
        $(".onju_sub_funtion").hide();
    }
    if (checkMobile()) {
        // 모바일 발간사 보이기 숨기기        
        if ($("#lbCode").val() == "J001")
        {
            //발간사 체크                
            //var pubExsit = $("#hdnSid").val().split('|').length == 3 ? $("#hdnSid").val().split('|')[1] : "";
            //if (pubExsit == "0")
            if ($('.publisher_0').length > 0 && $('.onju_front_page').length > 0) {
                $('#ONJU_tab_writer').show();
            }
            else {
                $('#ONJU_tab_writer').hide();
            }
        }

        if ($('.onju_index_popup').length > 0)
        {
            $('#ONJU_index').show();
        }
        else {
            $('#ONJU_index').hide();
        }
        
    }    

    if (_did.split('|')[1] != "0") {
        if (uCode != null && uCode != "") {
            // SetMyHistoryList('J001', _did.replaceAll('|', '_') + "_0", encodeURIComponent(chgTitle));
            SetMyHistoryList('J001', _did.replace(/\|/g, '_') + "_0", encodeURIComponent(chgTitle));
        }
        if (uCode != null && uCode != "") {
            myfolder.myFolderRelateContent(myforderParams.Did);
        }        
    }

};

// 인용하기 확인 시 정보 복사
function quoteCopy() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#tempQuotTitle").text()).select();
    document.execCommand("copy");
    $temp.remove();
}

// 온주집필자 검색
function initOnjuWriterView(targeType) {
    
    if (targeType != null) {
        if (targeType == "MAIN") {
            $('.lawyer_commit').show();
            $('.lawyer_writers').hide();
            $('#tab_area a').addClass('off').removeClass('on');
            $('#tab_area a').eq(0).addClass('on').removeClass('off');
            // MAIN
        }
        else if (targeType == "SUB") {
            $('.lawyer_commit').hide();
            $('.lawyer_writers').show();
            $('#tab_area a').addClass('off').removeClass('on');
            $('#tab_area a').eq(1).addClass('on').removeClass('off');

            $("#sPage").val("1");
            $("#sList").val("20");
            $("#sType3").val("0");
            $("#sWord").val("");
            // SUB
            onju.onjuWriterList();
        }
    }
}
function open_onjuindex() { //온주 본문목차

    GAEvent("TransactionLayer", "?did=" + $("#lbDid").val());

    $('.onju_index_popup').show();
    $('#view_sub_content').hide();
    $('#view_content').show();

    $(".main_container").scrollTop(0);
    $('p .btn_close').click(function () {
        $('.onju_index_popup').hide();
    });

    $('.onju_index_popup .list a').click(function () {
        $('.onju_index_popup').hide();
        $('.main_container_view .btn_close').trigger('click');
        if (checkMobile()) {
            $(".mview_tab_area span").removeClass('_this');
            $(".mview_tab_area span:nth-of-type(2)").addClass('_this');
        }
    });
}

// 주석서 전주 후주 제목 수정
this.setCmtOnjuTitle = function () {

    if ($("#jutitle").val() == "") {
        alert("제목을 입력해주세요.");
        return;
    }

    var data = {
        "cmtid": $("#hdnCommentID").val(),
        "jotitle": $("#jutitle").val()
    };

    sendNonBlockingAjaxRequest("/AjaxInfo/SetOnjuCmtLawTitle", data, function (result) {
        if (result != null) {
            if (result == "1") {
                alert("주석서 전주 후주 제목을 수정하였습니다.");
                location.reload();
            }
            else {
                alert("수정 실패하였습니다.");
            }
        }
    });
};

this.setCmtOnjuDel = function () {

    var data = {
        "cmtid": $("#hdnCommentID").val()
    };

    sendNonBlockingAjaxRequest("/AjaxInfo/SetOnjuCmtLawDel", data, function (result) {
        if (result != null) {
            if (result == "1") {
                alert("삭제 되었습니다.");
                location.reload();
            }
            else {
                alert("삭제가 실패하였습니다.");
            }
        }
    });
};


this.setCmtOnjuLog = function () {
    var cmtid = ($("#hdnCommentID").val() == "" ? "0" : $("#hdnCommentID").val());
    if (cmtid != "0") {
        var data = {
            "cmtid": cmtid
        };

        sendNonBlockingAjaxRequest("/AjaxInfo/SetOnjuHitLog", data, function (result) {
            if (result != null) {
                if (result == "1") {
                }
                else {

                }
            }
        });
    }
   
};

/*
//POST Form Ajax Call
function POSTFormAjaxCall(url, requestParam, callback) {
    //$("#bg_screen").show();
    $.ajax({        
        url: url,
        type: "POST",
        data: requestParam,
        contentType: false,
        processData: false,
        success: function (result) {
            callback(result);
        },
        error: function (e) {
            alert("응용프로그램을 사용하는 중 예기치 않은 오류로 인하여 작동을 하지 않습니다.\n작동을 위해 네트워크를 체크해 주시기 바라며, 필요한 경우 응용프로그램을 다시 시작해 주시기 바랍니다.");
            //$("#bg_screen").hide();
        },
        complete: function () {
            //$("#bg_screen").hide();
            //setHeight_();
        }
    });
}
*/