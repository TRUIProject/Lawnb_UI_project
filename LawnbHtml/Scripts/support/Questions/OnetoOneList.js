function SetTitle() {
    GetSearchList(1);
}

function GetSearchList(pagenum) {
    var QType = "";
    var SelectDate = $("#SearchDate").val();
    var StartDate = $("#StartDate").val();
    var EndDate = $("#EndDate").val();

    if (($("#QType_Answer").is(":checked") && $("#QType_Question").is(":checked")) || (BBS == "B03")) {
        QType = "";
    } else if ($("#QType_Answer").is(":checked")) {
        QType = "Answer";
    } else if ($("#QType_Question").is(":checked")) {
        QType = "Question";
    } else {
        QType = "NoData";
    }

    var NowDate = new Date();
    var NowYear = NowDate.getFullYear();
    var NowMonth = NowDate.getMonth() + 1;
    var NowDay = NowDate.getDate();

    if (SelectDate == "") {
        StartDate = "";
        EndDate = "";
    } else if (SelectDate == "1w") {
        EndDate = NowYear + "-" + NowMonth + "-" + (NowDay + 1);
        NowDate.setDate(NowDay - 7);
        StartDate = NowDate.getFullYear() + "-" + (NowDate.getMonth() + 1) + "-" + NowDate.getDate();
    } else if (SelectDate == "1m") {
        EndDate = NowYear + "-" + NowMonth + "-" + (NowDay + 1);
        NowDate.setMonth(NowMonth - 1);
        StartDate = NowDate.getFullYear() + "-" + NowDate.getMonth() + "-" + NowDate.getDate();
    }

    var params = { "UserID": LoginID, "BBS": BBS, "BBSQuestion": "", "QType": QType, "StartDate": StartDate, "EndDate": EndDate, "PageNum": pagenum }

    sendNonBlockingAjaxJsonRequest("/Questions/GetOnetoOneList/", params, function (result) {
        SetSearchList(result);
        SetHeight_LawnbEditor();
    });
}

function SetSearchList(data) {
    var Contents = "";
    var Numbering = 0;
    var TotalPage = 0;
    var TotalCnt = 0;
    var NowPageNum = 0;

    if (data.length > 0) {
        TotalPage = data[0]["TotalPage"];
        TotalCnt = data[0]["TotalCnt"];
        NowPageNum = data[0]["NowPageNum"];
    }
    Numbering = 1 + ((NowPageNum - 1) * 10);

    for (var i = 0; i < data.length; i++) {
        if (data[i]["Depth"] == 0) {
            Contents += "<li>";
            Contents += "<span class=\"list_num\">" + Numbering + "</span>";
            Contents += "<div class=\"co_searchContent\">";
            if (BBS == "B03") {
                Contents += "<h3> " + data[i]["Title"] + " <span class=\"list_meta\">" + data[i]["RegDate"] + "</span></h3>";
            } else {
                Contents += "<h3> <a href=\"#\" onclick=\"Detail('" + data[i]["OriginNo"] + "','" + BBS + "'); return false;\">" + data[i]["Title"] + "</a> <span class=\"list_meta\">" + data[i]["RegDate"] + "</span></h3>";
            }
//            if (data[i + 1]) { //다음항목이 존재
//                //if (data[i]["OriginNo"] == data[i + 1]["OriginNo"] && data[i + 1]["Depth"] > 0) {
//                if (data[i]["LQM_No"] == data[i + 1]["ParentsNo"]) {
//                    Contents += "<div class=\"co_searchResults_summary\">";
//                    Contents += DepthLayer(data, data[i + 1]["LQM_No"], data[i + 1]["Depth"]);
//                    Contents += "</div>";
//                }
                for (var k = 0; k < data.length; k++) {
                    if (data[i]["LQM_No"] == data[k]["ParentsNo"]) {
                        Contents += "<div class=\"co_searchResults_summary\">";
                        Contents += DepthLayer(data, data[k]["LQM_No"], data[k]["Depth"]);
                        Contents += "</div>";
                    }
                }
 //           }
            Contents += "</div>";
            Contents += "</li>";
            Numbering = Numbering + 1;
        }
    }

    if (Contents == "") {
        $("#SearchList").hide();
        $("#NoDataLayer").show();
    }

    SetPaging(NowPageNum, TotalPage);
    $("#SearchList").html(Contents);
}

function DepthLayer(data, LQM_No, Depth) {
    var Contents = "";
    for (var i = 0; i < data.length; i++) {
        if (data[i]["LQM_No"] == LQM_No && data[i]["Depth"] == Depth) {
            Contents += "<ul>";
            Contents += "<li>";
            if (data[i]["QType"] == "Answer") {
                if (BBS == "B01" || BBS == "B04") {
                    Contents += "<span class=\"label-icon sky\">답변</span>";
                } 
//                else if (BBS == "B02" && data[i]["Progress"] == "C") {
//                    Contents += "<span class=\"label-icon sky\">등재완료</span>";
//                } else if (BBS == "B02" && data[i]["Progress"] != "C") {
//                    Contents += "<span class=\"label-icon sky\">등재안내</span>";
//                }
                Contents += " <a href=\"#\" onclick=\"javascript:Detail('" + data[i]["OriginNo"] + "','" + BBS + "');return false;\">" + data[i]["Title"] + "</a> <span class=\"list_meta\">" + data[i]["RegDate"] + "</span>";
            } else if (data[i]["QType"] == "Reply") {
                if (BBS == "B01" || BBS == "B04") {
                    Contents += "<span class=\"label-icon default\">추가문의</span>";
                } 
//                else if (BBS == "B02" && data[i]["Progress"] != "C") {
//                    Contents += "<span class=\"label-icon default\">등재안내</span>";
//                } else if (BBS == "B02" && data[i]["Progress"] == "C") {
//                    Contents += "<span class=\"label-icon default\">등재완료</span>";
//                } 
                Contents += " <a href=\"#\" onclick=\"javascript:Detail('" + data[i]["OriginNo"] + "','" + BBS + "');return false;\">" + data[i]["Title"] + "</a> <span class=\"list_meta\">" + data[i]["RegDate"] + "</span>";
            }

            for (var k = 0; k < data.length; k++) {
                if (data[i]["LQM_No"] == data[k]["ParentsNo"]) {
                    Contents += DepthLayer(data, data[k]["LQM_No"], data[k]["Depth"]);
                }
            }

            Contents += "</li>";
            Contents += "</ul>";
        }
    }
    return Contents;
}

function SetPaging(nowpage, totpage) {
    var Contents = "";
    if (totpage > 0) {
        //Prev
        if (nowpage / 10 > 1) {
            Contents += "<a href=\"#\" onclick=\"javascript:GetSearchList( " + (((Math.floor(nowpage / 10) - 1) * 10) + 1) + "); return false;\" class=\"navFirst hiddenLink\"><i class=\"icon-7\" data-icon=\"&#xe911;\"></i></a>";
        }
        if (nowpage > 1) {
            Contents += "<a href=\"#\" onclick=\"javascript:GetSearchList(" + (nowpage - 1) + "); return false;\" class=\"navPrevious hiddenLink\"><i class=\"icon-2\" data-icon=\"&#xe901;\"></i></a>";
        }

        //Main
        if (Math.ceil(totpage / 10) - Math.ceil(nowpage / 10) > 0) {
            var starti = (Math.ceil(nowpage / 10) * 10) + 1 - 10;
            var lasti = starti + 10;
            for (starti; starti < lasti; starti++) {
                if (starti == nowpage) {
                    Contents += "<span class=\"currentPage\">" + starti + "</span>";
                } else {
                    Contents += "<a href=\"#\" onclick=\"javascript:GetSearchList('" + starti + "'); return false;\" class=\"navPages\">" + starti + "</a>";
                }
            }
        } else {
            var starti = (Math.ceil(nowpage / 10) * 10) + 1 - 10;
            for (starti; starti <= totpage; starti++) {
                if (starti == nowpage) {
                    Contents += "<span class=\"currentPage\">" + starti + "</span>";
                } else {
                    Contents += "<a href=\"#\" onclick=\"javascript:GetSearchList('" + starti + "'); return false;\" class=\"navPages\">" + starti + "</a>";
                }
            }
        }

        //Next
        if (totpage > nowpage) {
            Contents += "<a href=\"#\" onclick=\"javascript:GetSearchList('" + (nowpage + 1) + "'); return false;\" class=\"navNext\"><i class=\"icon-1\" data-icon=\"&#xe900;\"></i></a>";
        }
        if (Math.ceil(totpage / 10) - Math.ceil(nowpage / 10) > 0) {
            Contents += "<a href=\"#\" onclick=\"javascript:GetSearchList('" + (((Math.floor(nowpage / 10) + 1) * 10) + 1) + "'); return false;\" class=\"navLast\"><i class=\"icon-8\" data-icon=\"&#xe907;\"></i></a>";
        }
    }

    $("#PagingLayer").html(Contents);
}

function SetReset() {
    $("#StartDate").val("");
    $("#EndDate").val("");
    $("#SearchDate").val("");
    $("#QType_Answer").prop("checked", true);
    $("#QType_Question").prop("checked", true);
    $("#InputDateLayer").hide();
}

function Detail(LQM_No,BBS) {
    var obj = [{ "name": "LQM_No", "value": LQM_No }, { "name": "BBS", "value": BBS}]
    POSTFORMCall("/Questions/Detail/", obj);
}