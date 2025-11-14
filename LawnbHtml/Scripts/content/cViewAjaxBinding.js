var sParams = null, sPreView = 0;

this.getContentSubView = function (url, sId) {
    if (sId.split('|').length > 1) {
        if (sId.split('|').length == 3) {
            sParams = (sId.split('|')[2] == 'Y') ? 'R8' : sId.split('|')[2];
        } else {
            sParams = (sId.indexOf('|') > 0) ? sId.split('|')[1] : sId;
        }
    }
    if (sId.substring(0, 4) == "J001") {
        if (sId.split('|').length == 3) {
            sParams = sId.split('|')[0] + "|" + sId.split('|')[1] + "|0";
        }        
    }
    var data = { "sId": sId };
    if (typeof eKey == 'undefined') {
    } else {
        data = { "sId": sId, "eKey": eKey };
    }

    var sCode = sId.substring(0, 4);
    if (sCode == "J001")
    {
        $("#bg_screen").show();
        $('.loading_img').show();
    }

    sendNonBlockingAjaxRequest(url, data, setSubViewCallback);
};

this.getContentLeftView = function (url, sId) {
    var data = { "sId": sId };
    sendNonBlockingAjaxRequest(url, data, setLeftViewCallback);
};

this.setLeftViewCallback = function (result) {
    if (result != null) {
        $('#joList_').empty();
        $('#joList_').html(result);
        setHeight();
        setTreeBinding();
    }
};

this.getContentLeftHisView = function (url, sId) {
    var data = { "sId": sId };
    sendNonBlockingAjaxRequest(url, data, setLeftHisViewCallback);
};

this.setLeftHisViewCallback = function (result) {
    if (result != null) {
        $('#hisList_').empty();
        $('#hisList_').html(result);
        setHeight();
    }
};

this.getContentLawRefView = function (url, sId, dId) {
    var data = { "sId": sId, "dId": dId };
    if (dId.indexOf('|') > 0) {
        sendNonBlockingAjaxJsonRequest(url, data, setContentLawRefJoViewCallback);
    }
    else {
        sendNonBlockingAjaxJsonRequest(url, data, setContentLawRefViewCallback);
    }
};

this.setContentLawRefViewCallback = function (result) {
    if (result != null) {
        for (var key in result) {
            if (result.hasOwnProperty(key)) {
                var value = result[key];
                law.setChkRefIcon(key, value);
            }
        }
    }
};

this.setContentLawRefJoViewCallback = function (result) {
    if (result != null) {
        for (var key in result) {
            if (result.hasOwnProperty(key)) {
                var val = result[key];

                if (val[0] == 0) { $('#J1_bar').show(); }
                if (val[0] == 1) { $('#J3_bar').show(); }
                if (val[0] == 2) { $('#J2_bar').show(); }
            }
        }
    }
};

this.getContentMapView = function (url, sId) {
    var data = { "sId": sId };
    sendNonBlockingAjaxRequest(url, data, setContentMapViewCallback);
};

this.setContentMapViewCallback = function (result) {
    if (result != null) {
        $('#lawMap').empty();
        $('#lawMap').html(result);
        setHeight();
        setTreeBinding();
        setMobileTopMapLayer();
    }
};

this.getContentMakeView = function (url, sId) {
    var data = { "sId": sId };
    sendNonBlockingAjaxRequest(url, data, setContentMakeViewCallback);
};

this.setContentMakeViewCallback = function (result) {
    var isMakeView = true;
    if ($("#lRev").length > 0) {
        if ($("#lRev").val() == "타법개정" && $("#lbType").val() == "H") {
            isMakeView = false;
        }
    }
    if (isMakeView) {
        if (result != null) {
            $('#lawMake').empty();
            $('#lawMake').html(result);
            setHeight();
            }
    }
};

// 영문법령
this.getLawEngView = function (url, sId) {
    var data = { "sId": sId };
    sendNonBlockingAjaxRequest(url, data, setLawEngViewCallback);
};
// 영문법령
this.setLawEngViewCallback = function (result) {
    if (result != null) {
        $('#lawEng').empty();
        $('#lawEng').html(result);
        setHeight();
    }
};

this.getContentAdditionView = function (url, sId, t, c) {
    var data = { "sId": sId, "sType": t, "targetCol": c };
    if (t == '0') {
        sendNonBlockingAjaxRequest(url, data, setContentAdditionViewCallback);
    } else if(t == '1') {
        sendNonBlockingAjaxRequest(url, data, setContentAdditionDataViewCallback);
    } else if (t == '3') {
        sendNonBlockingAjaxRequest(url, data, setContentAdditionBottomViewCallback);
    }
};

this.setContentAdditionViewCallback = function (result) {
    if (result != null) {
        $('#addInfoDiv').empty();
        $('#addInfoDiv').html(result);

        if ($("#lbType").length > 0) {            
            var _html = $("#addInfoDiv").html();
            $("#addInfoDiv").html(_html.replace("[[CASE_RE_CATEGORY]]", $("#lbType").val()));
        }

        if (typeof (law) != 'undefined') {
            law.setChkAvable();
        }
    }
    setMobileTopLayer();
};

this.setContentAdditionDataViewCallback = function (result) {
    if (result != null) {
        $('#result_sep').empty();
        $('#result_sep').html(result);

        if ($("#lbType").length > 0) {
            var _html = $("#result_sep").html();
            $("#result_sep").html(_html.replace("[[CASE_RE_CATEGORY]]", $("#lbType").val()));
        }
    }
};

this.setContentAdditionBottomViewCallback = function (result) {
    if (result != null) {
        $('#' + jKind).empty();
        $('#' + jKind).html(result);
    }
};

this.getContentAdditionList = function (url, sId, t, c, pg , li) {
    var data = { "sId": sId, "sType": t, "targetCol": c, "page": pg, "sList": li };
    sendNonBlockingAjaxRequest(url, data, setContentAdditionListCallback);
};

this.setContentAdditionListCallback = function (result) {
    if (result != null) {
        var tHtml = $("#result_sep").html();
        $("#result_area").empty();
        $("#result_area").append("<div id=\"result_sep\">" + tHtml + "</div>");
        $('#result_area').append("<div class='list'></div>"); // 도서내검색때문에 Jenna 2020.08.13
        $("#result_area").append(result);
        $("#title_result_tab > div:first-child").text('관련정보 ');
        view.checkToTitle();
        if (checkMobile()) { //모바일면  
            setHeight();
        }
    }
};

this.getViewFileDown = function (url, params) {
    sendFileDownAjaxRequest(url, params);
};

this.getContentBookView = function (url, sId, sWord) {
    var data = { "sId": sId, "sWord": sWord };
    sendAjaxRequest(url, data, setBookViewCallback);
};

// 미리보기
this.getPreView = function (url, sId) {
    var data = { "sId": $.trim(sId) };
    sendAjaxRequest(url, data, setPreViewCallback);
};

this.setPreViewCallback = function (result) {
    if (result != null) {
        if ($(result).filter('.main_container_view_inner').length <= 0) {
            $('.main_container_view_inner').empty();
            $('.main_container_view_inner').html(result);
        } else {
            $('.main_container_view').empty();
            $('.main_container_view').html(result);
        }
        
        if (typeof (caseArr) == 'undefined') { setHeight(); }
        else { setHeight_history(); }
        $(".main_container").scrollTop(0);
    }
};

this.setMobileTopLayer = function () {
    if (checkMobile()) {
        if ($('#addInfoDiv>section>h4').length > 0) {
            $('#refInform').show();
        } else {
            $('#refInform').hide();
        }

        if ($('#refQuickInfo').length > 0) {
            if ($('#addInfoDiv>section>.btn_group>.onlyone').length > 0) {
                $('#refQuickInfo').show();
            } else {
                $('#refQuickInfo').hide();
            }
        }

        if ($('#refHisInfo').length > 0) {
            if ($('#btnHistory').length > 0) {
                $('#refHisInfo').show();
            } else {
                $('#refHisInfo').hide();
            }
        }

        if ($('#refFileInfo').length > 0) {
            if ($('#btnFileDeDown').length > 0) {
                $('#refFileInfo').show();
            } else {
                $('#refFileInfo').hide();
            }

        }

        if ($('#result_tab>ul>li').length > 0) {
            $('#refContent').show();
        } else {
            $('#refContent').hide();
        }

        if ($("#pdf_view").length > 0) {
            $("#pdfDocView").show();
        }
        else {
            $("#pdfDocView").hide();
        }

        /*
        setTimeout(function () {

            if ($("#lbCode").val() == "J001")
            {
                //발간사 체크                
                //var pubExsit = $("#hdnSid").val().split('|').length == 3 ? $("#hdnSid").val().split('|')[1] : "";
                //if (pubExsit == "0")
                if ($('.publisher_0').length > 0 && $('.onju_front_page').length > 0)                
                { 
                    $('#ONJU_tab_writer').show();
                }
                else
                {
                    $('#ONJU_tab_writer').hide();
                }
            }
        
            if ($('.onju_index_popup').length > 0)
            {
                $('#ONJU_index').show();
            }
            else
            {
                $('#ONJU_index').hide(); 
            }
        }, 400);*/
    }
};

this.setMobileTopMapLayer = function () {
    if (checkMobile()) {
        if ($('#lawMap>h4').length > 0) {
            $('#refMapInfo').show();
        } else {
            $('#refMapInfo').hide();
        }
    }
};



