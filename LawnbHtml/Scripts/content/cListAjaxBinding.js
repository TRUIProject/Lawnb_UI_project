this.getContentList = function (url) {
    var data = $('#searchForm').serialize();
    sendAjaxRequest(url, data, setListCallback);
};

this.getInitContentList = function (url) {
    if (typeof (filterYn) != 'undefined') filterYn = "N";
    var data = initSearchObject;
    sendAjaxRequest(url, data, setListCallback);
};

this.getFilterContentList = function (url) {
    if (typeof (filterYn) != 'undefined') filterYn = "Y";
    var data = setSearchObject;
    sendAjaxRequest(url, data, setListCallback);
};

this.getApiContentList = function (url) {
    var data = $('#searchForm').serialize();
    sendAjaxRequest(url, data, setListCallback);
};

this.setListCallback = function (result) {
    if (result != null) {
        if ($("#search_results_view").length > 0) {
            $("#search_results_view").empty();
            $("#search_results_view").html(result);
            drawLi();
            setHeight_under();
        }
        else {
            $('#search_results').empty();
            $('#search_results').html(result);
            if ($("#sCode").val() == "L008") {
                locallaw.SetAreaFiltering();
            }
            drawLi();
            setTimeout(function () { storage.setMyDeskChk(); }, 200);
        }
    }
};

this.setStartMyDesk = function () {
    setInterval(function () {
        service.checkMyDeskForList();
    }, 1000);
};

this.getRightContentLatestList = function (url, sCode) {
    $(".loading_area").show();
    var data = { "sCode": sCode };
    if (storage.getReuterHour() != null) {
        if (storage.getReuterHour() == storage.getCurHour) {
            news.getReutersNewsMainList();
        } else {
            sendNonBlockingAjaxJsonRequest(url, data, setRightContentLatestListCallback);
        }
    }
    else {
        sendNonBlockingAjaxJsonRequest(url, data, setRightContentLatestListCallback);
    }
};

this.setRightContentLatestListCallback = function (result) {

    var dataList = "";
    var dataPageNavi = "";
    var _thisPage = "";
    if (result != null) {

        //$(result).each(function (index) {
        //    dataList += "<li><a href='/Info/ContentView?sid=" + this.lbDId + "' class='popup_view'>" + this.lbTitle + "</a>";
        //    dataList += "<br/><span>" + this.lbPubDate + " | " + this.lbPubTitle + "</span>";
        //    dataList += "<br/>" + this.lbCont + "</li>";

        //    if (index == 0) _thisPage = "class ='_this'";
        //    else _thisPage = "";

        //    dataPageNavi += "<span " + _thisPage + "></span>";
        //});

        $(result).each(function (index) {
            dataList += "<li><a href='/Info/ContentView?sid=" + this.lbDId + "' class='popup_view'>" + this.lbTitle + "</a>";
            dataList += " <span>" + this.lbPubDate + " | " + this.lbPubTitle + "</span></li>";
        });

        var sInfo = new Object();
        sInfo.dList = dataList;
        sInfo.dPage = dataPageNavi;
        storage.setReuterNews(sInfo);

    } else {
        var rNews = storage.getReuterNews();
        if (rNews != null) {
            dataList = rNews.dList;
            dataPageNavi = rNews.dPage;
        }
    }

    if (dataList != "") {
        $('#latestList').empty();
        $('#latestList').html(dataList);

        $(".more_view").empty();
    }


    //if (dataList != "") {
    //    $('#latestList').empty();
    //    $('#latestList').html(dataList);

    //    $(".more_view").empty();
    //    $(".more_view").html(dataPageNavi);

    //    $("#latestList li").css("display", "none");
    //    $("#latestList li").eq(0).css("display", "");

    //    $(document).on('click', '.more_view span', function () {

    //        var index = $(this).index();
    //        $(".more_view span").removeClass("_this");
    //        $(".more_view span").eq(index).addClass("_this");

    //        $("#latestList li").css("display", "none");
    //        $("#latestList li").eq(index).css("display", "");
    //    });
    //}
    setHeight_under();
    $(".loading_area").hide();
};



this.getContentLatestList = function (url, sCode) {
    var data = { "sCode": sCode };
    sendNonBlockingAjaxJsonRequest(url, data, setLatestListCallback);
};


this.getContentLatestListByType = function (url, sCode, sCat) {
    var data = { "sCode": sCode, "sCat": sCat };
    if (sCode.substr(0,4) == 'P000') {
        sendNonBlockingAjaxJsonRequest(url, data, setTypeLatestLawyerListCallback);
    }
    else {
        sendNonBlockingAjaxJsonRequest(url, data, setTypeLatestListCallback);
    }
};



this.setTypeLatestListCallback = function (result) {
    if (result != null) {
        var dataList = "";
        var i = 0;

        if ($('#liTaxInfo').length > 0) {
            $(result).each(function () {
                if (i < 5) {
                    dataList += "<li><a href='/Info/ContentView?sid=" + this.lbDId + "' class='popup_view'>" + this.lbTitle + "</a> ";
                    dataList += "<span>" + this.lbCont + " <em>" + this.lbPubDate + "</em></span></li>";
                }
                i++;
            });
            $('#liTaxInfo').empty();
            $('#liTaxInfo').html(dataList);
        } else {
            $(result).each(function () {
                dataList += "<li><a href='/Info/ContentView?sid=" + this.lbDId + "' class='popup_view'>" + this.lbTitle + "</a> ";
                dataList += "<span>" + this.lbPubDate + "</span></li>";
            });
            $('#latestList').empty();
            $('#latestList').html(dataList);
            setHeight_under();
        }
    }
};



this.setTypeLatestLawyerListCallback = function (result) {
    if (result != null) {
        var dataList = "<h4>법률사무소 구성원<div class=\"btn-group fr\"><button type=\"button\" onclick=\"lawfirm.goToLawyerAll()\" class=\"btn btn-default\">전체보기</button> </div></h4><dl class=\"lawyer_area\">";
        $(result).each(function (index) {
            dataList += "<dt><img src='" + this.lbPubImg + "' class='img'></dt>";
            dataList += "<dd><a href='/Info/ContentView?sid=" + this.lbDId + "' class='popup_view'>" + this.lbTitle + "</a><div>" + this.lbSubTitle + "</div></dd><dd><ul>";
            if (this.lbPubTitle != "") {
                dataList += "<li>" + this.lbPubTitle + "</li>";
            }
            if (this.lbCont != "") {
                dataList += "<li><span>주요분야</span>" + this.lbCont + "</li>";
            }
            dataList += "</ul>";
//            if (this.lbCategory != "") {
//                dataList += "<div class=\"function_btn\">" + this.lbCategory + "</div>";
//            }
            dataList += "</dd>";

        });
        dataList += "</dl>";
        $('#latestList').empty();
        $('#latestList').html(dataList);
        setHeight_under();
    }
};


this.setLatestListCallback = function (result) {
    if (result != null) {
        var dataList = "";
        if ($("#liLawFirm").length > 0) {
            $(result).each(function (index) {
                setMainSectionLawyer(this.lbDId,
                this.lbTitle,
                this.lbCont,
                this.lbPubImg,
                this.lbSubTitle,
                this.lbCategory,
                this.lbPubTitle);
            });
        } else if ($("#liColumn").length > 0) {
            dataList = "<h4>칼럼</h4> ";
            var cnt = 0;
            $(result).each(function (index) {
                var display_ = 'display:';
                if (index > 9) { display_ = 'display:none'; }
                dataList += "<dl class='lawyer_area' style='" + display_ + "'> ";
                dataList += "<dt><div class='img'><img src='/" + this.lbPubImg + "'></div></dt>";
                dataList += "<dd><a href=\"javascript:goSubMainCatList('1','" + this.lbDId + "');\">" + this.lbTitle + " </a><br>최신등록일  " + this.lbPubDate + "</dd> ";
                dataList += "</dl>";
                cnt = index;
            });
            dataList += "<div class='more_view'>";
            for (m = 0; m < cnt / 10; m++) {
                if (m == 0) {
                    dataList += "<span class='_this' onclick='news.setColumnMainPage(" + m + ")'></span>";
                } else {
                    dataList += "<span onclick='news.setColumnMainPage(" + m + ")'></span>";
                }
            }
            dataList += "</div>";
            $('#liColumn').empty();
            $('#liColumn').html(dataList);
        }
        else if ($("#sCode").val() == "J001" || $("#sCode").val() == "D021") // 온주 메인 하단 - 신간 개정 주석서 추가
        {
            $(result).each(function (index) {                
                // lbCategory = 1 : 출간예정, 2 : 신간, 3 : 개정판 lbTitle lbCategory lbDId
                var chkClass = "default";
                dataList += "<li><div><span class=\"label-icon " + (this.lbCategory == '1' ? chkClass : "") +" \">";
                if (this.lbCategory == "1") {
                    dataList += "출간예정";
                }
                else if (this.lbCategory == "2"){
                    dataList += "신간";
                }
                else if (this.lbCategory == "3") {
                    dataList += "개정판";
                }

                dataList += "</span></div>";
                if (this.lbCategory == "1") {
                    dataList += this.lbTitle;
                }
                else {
                    dataList += "<a href='/Info/ContentView?sid=" + this.lbDId + "' class='popup_view'>" + this.lbTitle + "</a>";                    
                }
                dataList += "</li>";
            });

            $(".noti_onju_list").empty();
            $(".noti_onju_list").html(dataList);
        }
        else {

            if (page.getTargetUrl() != null) {
                if ($("#sCode").val() != "L005" && $("#sCode").val() != "P000" && $("#sCode").val() != "P001" && $("#sCode").val() != "D001") {
                    dataList += "<ul> ";
                }
            }
            /*
            if ($("#sCode").val() == "P001") {
                dataList += "<h4>법률사무소 소식</h4>";
            }
            */
            if ($("#sCode").val() == "P000")
            {
                dataList += "<h4>법률사무소 소식</h4><ul>";
            }

            $(result).each(function () {
                dataList += "<li><a href='/Info/ContentView?sid=" + this.lbDId + "' class='popup_view'>" + this.lbTitle + "</a> ";
                dataList += (this.lbSubTitle != "") ? this.lbSubTitle + "</li> " : "</li> ";
            });

            
            if (page.getTargetUrl() != null) {
                if ($("#sCode").val() != "L005" && $("#sCode").val() != "P000" && $("#sCode").val() != "P001" && $("#sCode").val() != "D001") {
                    dataList += "</ul> ";
                }
            }

            if ($("#sCode").val() == "P000") {
                dataList += "</ul>";
            }

            $('#latestList').empty();
            $('#latestList').html(dataList);
        }
        setHeight_under();
    }
};

this.setMainSectionLawyer = function (d, t, s, m, n, c, p) {
    var iHtml = "";
    if (d.substr(0, 4) == 'P012') {
        iHtml = "<li><a href='/Info/ContentView?sid=" + d + "' class='popup_view'>" + t + "</a><br>";
        iHtml += s + "</li>";
        $("#liLawFirm").html(iHtml);
    } else if (d.substr(0, 4) == 'N000') {
        iHtml = "<li><div class=\"thumb_right\" ><img src='/mounts/lbimg/" + m + "'></div><a href='/Info/ContentView?sid=" + d + "' class='popup_view'>" + t + "</a><br>";
        iHtml += s + "</li>";
        $("#liLawyerNews").html(iHtml);
    } else if (d.substr(0, 4) == 'P000') {
        iHtml = "<dt><img src='" + m + "' class='img'></dt>";
        iHtml += "<dd><a href='/Info/ContentView?sid=" + d + "' class='popup_view'>" + t + "</a> <div>" + n + "</div>";
        if (p != "") {
            iHtml += "<br /><span class='text_ex'>소속</span> " + p + "";
        }
        if (s != "") {
            iHtml += "<br /><span class='text_ex'>주요분야</span> " + s + "";
        }
        iHtml += "";
        if (c != "") {
            iHtml += "<div class=\"function_btn\">" + c + "</div>";
        }
        iHtml += "</dd>";
        $("#liWinLawyer").html(iHtml);
    }
};

this.getContentSubList = function (url) {
    var data = $('#searchForm').serialize();
    sendAjaxRequest(url, data, setSubListCallback);
};

this.setSubListCallback = function (result) {
    if (result != null) {
        var divNum = $('#sNum').val();
        var tmpRev = $('#sub_results_' + divNum + '>p').html();
        if ($('#sSubList').val() == "7") { $('#icon_' + divNum).removeClass('icon_open_').addClass('icon_close'); }
        else { $('#icon_' + divNum).removeClass('icon_close').addClass('icon_open_'); }
        $('#sub_results_' + divNum).empty();
        $('#sub_results_' + divNum).html(result);
        $('#sub_results_' + divNum + '>p').html(tmpRev);
        setHeight_under();
    }
};

this.getSelectList = function (url, sId, sSubId, sWord, sType) {
    var sCode = $('#sCode').val();
    var data = { "sCode": sCode,
        "sId" : sId,
        "sSubId" : sSubId,
        "sWord" : sWord,
        "sType": sType // 검색후 하위메뉴 값을 다시 설정
    };
    sendNonBlockingAjaxRequest(url, data, setSelectCallback);
};

this.setSelectCallback = function (result) {
    if ($('#sYearChk').length > 0) {
        if (result != null) {
            $('#sCat').empty();
            $('#sCat').html(result);
        } else {
            $('#sCat').empty();
            $('#sCat').html("<option value=''  selected=selected>아직 등록되지 않았습니다.</option>");
        }
    }
    else {
        if (result != null) {
            $('#sCat2').empty();
            $('#sCat2').html(result);
            if ($('#sCode').val() == "D003" || $('#sCode').val() == "D004") {
                doc.setMagazineInitSearchList();
            }
        } else {
            $('#sCat2').empty();
        }
    }


};

//마이데스크 아이콘
this.getMyDeskCheckList = function (url, data) {
    sendNonBlockingAjaxJsonRequest(url, data, setMyDeskCheckListCallback);
};

this.setMyDeskCheckListCallback = function (result) {
    if (result != null) {
        service.setDelIconList();
        for (var key in result) {
            if (result.hasOwnProperty(key)) {
                var value = result[key];
                service.setChkRefIcon(key, value);
            }
        }
        storage.setDeleteMyDeskChk();
        setHeight_under();
    }
};



// 기관 검색
this.getOrgList = function (url, sId, sWord, sType) {
   
    var data = {
        "sId": sId,
        "sWord": sWord,
        "sType": sType
    };
    sendAjaxRequest(url, data, setOrgCallback);
};

this.setOrgCallback = function (result) {
    if (result != null) {
        $('#' + schLayer).show();
        $('#' + schLayer).empty();
        $('#' + schLayer).html(result);
    }
};

// 나라 검색
this.getTrNationList = function (url, sWord) {
    var data = {
        "sWord": sWord
    };

    sendNonBlockingAjaxRequest(url, data, setTrNationCallback);
};

this.setTrNationCallback = function (result) {
    if (result != null) {
        $('.cont_list').show();
        $('.cont_list').empty();
        $('.cont_list').html(result);
        treaty.setNationTopCheck();
        treaty.initSetNationText();
    }
};


// 지자체 검색
this.getLoAreaList = function (url, sWord) {
    var data = {
        "sWord": sWord
    };

    sendNonBlockingAjaxRequest(url, data, setLoAreaCallback);
};

this.setLoAreaCallback = function (result) {
    if (result != null) {
        $('.region_list').show();
        $('.region_list').empty();
        $('.region_list').html(result);
        setTreeBinding();
        locallaw.initSetAreaText();
    }
};


// NICE 미리보기
this.getNicPreView = function (url, sId) {
    var sIdsplit = sId.split('^');
    var data = { "sCode": $.trim(sIdsplit[0]), "kisCode": $.trim(sIdsplit[1]), "viewUrl": url, "viewGubun" : "preview" };
    bizinfo.init(data);
    //sendAjaxRequest(url, data, setPreViewCallback);
    event.preventDefault();
};

// 미리보기
this.getPreView = function (url, sId) {
     var data = { "sId": $.trim(sId) };
    // 법조인 네비게이션
    if (sId.substring(sId.length - 2, sId.length) == "R6"
        && sId.substring(sId.length - 2, sId.length - 3) == "_")
        sendAjaxRequest(url, data, setNaviPreViewCallback);
    else
        sendAjaxRequest(url, data, setPreViewCallback);
    event.preventDefault();
};

this.setPreViewCallback = function (result) {
    if (result != null) {
        $('.main_container_view_inner').empty();
        $('.main_container_view_inner').html(result);
        setPreViewFiltering();
        contentHighlight('');
        setHeight_under();
    }
};

this.setPreViewFiltering = function () {
    if (typeof (searchTarget) == 'undefined') { } else {
        if (searchTarget != '') {
            if ($("#view_content").hasClass("lawyer_info")) {
                $(".lawyer_info>.normal").hide();
                if ($('.lawyer_info>a').length > 0) {
                    $('.lawyer_info>a').each(function (index) {
                        if (this.id == searchTarget) {
                            $('.lawyer_info>.normal').each(function (index1) {
                                if (index == index1) {
                                    $(this).show();
                                }
                            });

                        }
                    });
                } else {
                    $('.lawyer_info>.normal').each(function (index) {
                        if (this.id == searchTarget) {
                            $(this).show();
                        }
                    });
                }
            } else {
                $(".case_info>.normal").hide();
                $('.case_info>.normal').each(function (index) {
                    if (this.id == searchTarget) {
                        $(this).show();
                    }
                });
            }
        }
        searchTarget = ''; 
    }
};

// 법조인 네비게이션에서 미리보기(under size 때문에 추가)
this.setNaviPreViewCallback = function (result) {
    if (result != null) {
        $('.main_container_view_inner').empty();
        $('.main_container_view_inner').html(result);
        setHeight_navi();
    }
};


// 메인바닥페이지리스트 구성
this.getMainBtList = function (url, sId, sSubId, sType) {
    var sCode = $('#sCode').val();
    var data = { "sCode": sCode,
        "sId": sId,
        "sSubId": sSubId,
        "sType": sType 
    };
    if (sCode == "D000") { sendNonBlockingAjaxRequest(url, data, setMainBtDocCallback); }
    else { sendNonBlockingAjaxRequest(url, data, setMainBtCallback); }
   
};

this.setMainBtCallback = function (result) {
    if (result != null) {
        $('#main_bt_list').empty();
        $('#main_bt_list').html(result);
    } else {
        $('#main_bt_list').empty();
    }
    setHeight_under();
};

this.setMainBtDocCallback = function (result) {
    if (result != null) {
        $('#main_bt_list1').empty();
        $('#main_bt_list2').empty();
        $(result).find('li').each(function (index, element) {
            if (index < 5) {
                $("#main_bt_list2").append(element);
            } else {
                $("#main_bt_list1").append(element);
            }
        });
    } else {
        $('#main_bt_list1').empty();
        $('#main_bt_list2').empty();
    }
    setHeight_under();
};


// li 다시 그리기
this.drawLi = function () {
    var sort = $.trim($('#sSort').val());
    var lbListType = $.trim($('#sSubType').val());
    var sCode = $('#sCode').val();
    if (sCode == "C000" && lbListType == "3") {
        lbListType = "4";
    }
    else if (sCode == "C000" && lbListType == "4") {
        lbListType = "3";
    }
    $('.btn_option>.btn-group>button').each(function (index) {
        if (sort == index) {
            $(this).attr('class', 'btn btn-default _select');
        } else {
            $(this).attr('class', 'btn btn-default');
        }
    });

    var code = $('#sCode').val();
    if (code.substr(0, 2) == 'D0' ||
        code.substr(0, 2) == 'I0' ||
        code == 'L005' ||
        code == 'P013' ||
        code == 'P011' ||
        code == 'B007') {
        if (initSearchObject["sWord"] == "") {
            if (code == 'P013' || code == 'L005') { $(".btn_option>.btn-group>button").eq(1).hide(); }
            else {
                $(".btn_option>.btn-group>button").eq(0).hide();
                if (code == 'B007') { $(".search_filter").addClass("hide"); }
            }
        } else {
            if (code == 'B007') { $(".search_filter").removeClass("hide"); }
        }
    }

    $('#result_tab ul li').each(function (index) {        
        if (lbListType == index) {
            $(this).addClass('this-page');
        } else {
            $(this).removeClass('this-page');
        }
    });

    if (typeof (previewYn) == 'undefined') {
        detailShowCont();
    } else {
        if (previewYn == 'Y') {
            $("#option_a").attr('class', 'option_a_on');
            $("#option_b").attr('class', 'option_b');
            $(".list").addClass('type-a');
            $(".history_open").hide();
            reSettingHeight();
        } else {
            detailShowCont(); 
            $(".history_open").show();
            $("ol.list>li").removeClass('_this');
        }
    }


};

this.detailShowCont = function () {
    if (storage.getStatusType() == 0) {
        $("#option_a").attr('class', 'option_a_on');
        $("#option_b").attr('class', 'option_b');
        $(".list").addClass('type-a');
        setHeight_under();
    }
    else {
        $("#option_a").attr('class', 'option_a');
        $("#option_b").attr('class', 'option_b_on');
        $(".list").removeClass('type-a');
        setHeight_under();
    }
}

this.getViewFileDown = function (url, params) {
    sendFileDownAjaxRequest(url, params);
};