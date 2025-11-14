var EditorDate = []
var RegDate = "";
var RecentlyLEM_No = 0;
var mindex = 0;
var maxindex = 0;

function SetTitle() {    
    if (LEM_No != "") {
        GetDefaultData('', LEM_No, '', 'I');
    }
    else if (editorKeyword != "")
    {        
        GetDefaultData('', 0, editorKeyword, 'K')
    }
    else {
        GetDefaultData("", 0, "", "");
    }
}

//Action
function GetDefaultData(RecentlyDate, LEM_No, Keyword, SettingType) {
    var params = { "RecentlyDate": RecentlyDate, "LEM_No": LEM_No, "Keyword": Keyword, "SettingType": SettingType }
    sendNonBlockingAjaxJsonRequest("/Editor/GetEditorMain/", params, SetDateAjaxReturn);
}

function SetDateAjaxReturn(result) {    
    var SettingType = result[0][0]["SettingType"];
    if (SettingType != "K") {
        EditorDate = result[1];
        var DateContents = "";
        for (var i = 0; i < EditorDate.length; i++) {
            if (EditorDate[i]["Recently"] == "1") {
                if (checkMobile() && $("#hdnIsTablet").val() == "N") {
                    DateContents += SetMobileDate( (EditorDate[i]["RegYear"]+EditorDate[i]["RegMonth"]), EditorDate);
                }
                else {
                    DateContents += SetYear(EditorDate[i]["RegYear"], EditorDate);
                    DateContents += SetMonth(EditorDate[i]["RegYear"], EditorDate);
                }                
            }
            RegDate = EditorDate[i]["RegYear"] + "-" + EditorDate[i]["RegMonth"];
        }
        $("#result_tab").html(DateContents);
        SetMainIssue(result[3]);
        SetIssueList(result[4]);
        SetMonthlyIssue(result[5]);
        SetKeywordText(result[6]);
        $("#KeywordTitle").html(result[5][0]["RegYear"] + "년 " + result[5][0]["RegMonth"] + "월의 키워드");
        //SetKeyword(result[6]);
    }
    if (SettingType == "K")
    {
        if (editorKeyword != "") {
            EditorDate = result[1];
            var DateContents = "";
            for (var i = 0; i < EditorDate.length; i++) {
                if (EditorDate[i]["Recently"] == "1") {
                    if (checkMobile() && $("#hdnIsTablet").val() == "N") {
                        DateContents += SetMobileDate((EditorDate[i]["RegYear"] + EditorDate[i]["RegMonth"]), EditorDate);
                    }
                    else {
                        DateContents += SetYear(EditorDate[i]["RegYear"], EditorDate);
                        DateContents += SetMonth(EditorDate[i]["RegYear"], EditorDate);
                    }
                }
                RegDate = EditorDate[i]["RegYear"] + "-" + EditorDate[i]["RegMonth"];
            }
            $("#result_tab").html(DateContents);

            SetMonthlyIssue(result[5]);
            SetKeywordText(result[6]);
            $("#KeywordTitle").html(result[5][0]["RegYear"] + "년 " + result[5][0]["RegMonth"] + "월의 키워드");

            editorKeyword = "";
        }
        SetIssue(result[2]);
        SetMainIssue(result[3]);
        SetIssueList(result[4]);
        SetSelectCancel();
    } else {
        $("#TopIssue").hide();
    }

    $("#datepicker").attr("placeholder", result[5][0]["RegYear"] + "년 " + parseInt(result[5][0]["RegMonth"]).toString() + "월");

    if (checkMobile())
    {
        TabDisplayCheck();
    } 

    //$("#datepicker").attr("placeholder", RegDate.split("-")[0] + "년 " + parseInt(RegDate.split("-")[1]).toString() + "월");
    //datepicker
    $("#datepicker").datepicker({
        language: 'ko',
        view: 'months',
        minView: 'months',
        dateFormat: 'yyyy MM',
        position: 'bottom center',
        isMobile: true,
        autoClose: true,
        minDate: new Date('2018-01'),
        maxDate: new Date(RegDate),
        yearSuffix : "년",
        onSelect: function (date) {
            var arrdate = date.split(" ");
            var year = arrdate[0];
            var month = arrdate[1].substring(0, arrdate[1].length - 1);
            if (month.length < 2) {
                month = "0" + month;
            }
            GetDefaultData(year + month, 0, '', 'D');
        }
    });
    $("#datepicker").val(result[5][0]["RegYear"] + "년 " + parseInt(result[5][0]["RegMonth"]).toString() + "월");

    SetHeight_LawnbEditor();
}

// 모바일 스크립트 추가
function SetMobileDate(yeardate, data)
{
    var datehtml = "";    
    datehtml += "<i class=\"icon-2 movepage\" data-icon=\"&#xe901;\" onclick=\"M_MoveDate(-1)\"><span class=\"blind\">이전달</span></i>";    
    for (var i = 0; i < data.length; i++) {
        if (yeardate == (data[i]["RegYear"] + data[i]["RegMonth"]) )
        {
            mindex = i;            
        }
        datehtml += "<span class=\"selmonth\" onclick=\"javascript:GetDefaultData('" + data[i]["RegYear"] + data[i]["RegMonth"] + "',0,'','D');\" >" + data[i]["RegYear"] +"."+ data[i]["RegMonth"] + "</span>";
    }
    datehtml += "<i class=\"icon-2 movepage\" data-icon=\"&#xe900;\" onclick=\"M_MoveDate(1)\"><span class=\"blind\">다음달</span></i>";

    maxindex = data.length - 1;    
    return datehtml;
}

function TabDisplayCheck()
{
    if ($(".selmonth").length > 0) {
        $(".movepage").show();
        if (mindex < 2) {
            if (mindex == 0) {
                $(".selmonth").hide().removeClass('_view');
                $(".movepage").eq(0).hide().addClass('_view');
                $(".selmonth").eq(0).show().addClass('_view');
                $(".selmonth").eq(1).show().addClass('_view');
            }
            else {
                $(".selmonth").hide().removeClass('_view');
                $(".selmonth").eq(0).show().addClass('_view');
                $(".selmonth").eq(1).show().addClass('_view');
                $(".selmonth").eq(2).show().addClass('_view');
            }
        }
        else {
            $(".selmonth").hide().removeClass('_view');
            $(".selmonth").eq(mindex - 1).show().addClass('_view');
            $(".selmonth").eq(mindex).show().addClass('_view');
            if ((mindex + 1) > maxindex) {
                $(".movepage").eq(1).hide();
            }
            else {
                $(".selmonth").eq(mindex + 1).show().addClass('_view');
            }
        }
    }
}

// 모바일 스크립트 추가
function M_MoveDate(n) {
    mindex = parseInt(mindex) + parseInt(n);

    $(".selmonth").hide().removeClass('_view');
    $(".movepage").show();
    if (mindex < 2) {
        if (mindex == 0) {
            $(".movepage").eq(0).hide();
            $(".selmonth").eq(0).show().addClass('_view');
            $(".selmonth").eq(1).show().addClass('_view');
        }
        else {
            $(".selmonth").eq(0).show().addClass('_view');
            $(".selmonth").eq(1).show().addClass('_view');
            $(".selmonth").eq(2).show().addClass('_view');
        }
    }
    else {
        if (maxindex <= mindex) {
            mindex = maxindex;

            $(".selmonth").eq(maxindex - 1).show().addClass('_view');
            $(".selmonth").eq(maxindex).show().addClass('_view');
            $(".movepage").eq(1).hide();           
        }
        else {
            $(".selmonth").eq(mindex - 1).show().addClass('_view');
            $(".selmonth").eq(mindex).show().addClass('_view');
            $(".selmonth").eq(mindex + 1).show().addClass('_view');            
        }
    }
}


//이전년도/다음년도 Action
function SetDate(Year) {
    var DateContents = "";
    for (var i = 0; i < EditorDate.length; i++) {
        if (EditorDate[i]["RegYear"] == Year && DateContents == "") {
            DateContents += SetYear(EditorDate[i]["RegYear"], EditorDate);
            DateContents += SetMonth(EditorDate[i]["RegYear"], EditorDate);
        }
    }
    $("#result_tab").html(DateContents);
}

//Year Contents
function SetYear(Year, data) {
    var YearContents = "<div>";
    var YearCheck = "N";
    //Past Year
    for (var i = 0; i < data.length; i++) {
        if (parseInt(data[i]["RegYear"]) < parseInt(Year) && YearCheck != "Y") {
            if ( parseInt(data[i]["RegYear"]) + 1 == parseInt(Year) ) {
                YearContents += "<i class=\"icon-2\" data-icon=\"&#xe901;\" onclick=\"SetDate('" + data[i]["RegYear"] + "');\"><span class=\"blind\">이전년도</span></i>";
                YearCheck = "Y";
            }
        }
    }
    if (YearCheck == "N") {
        YearContents += "<i class=\"icon-2 disabled\" data-icon=\"&#xe901;\"><span class=\"blind\">이전년도</span></i>";
    }

    //Now Year
    YearContents += Year;
    YearCheck = "N";

    //Future Year
    for (var i = 0; i < data.length; i++) {
        if (parseInt(data[i]["RegYear"]) > parseInt(Year) && YearCheck != "Y") {
            YearContents += "<i class=\"icon-2\" data-icon=\"&#xe900;\" onclick=\"SetDate('" + data[i]["RegYear"] + "');\"><span class=\"blind\">다음년도</span></i>";
            YearCheck = "Y";
        }
    }
    if (YearCheck == "N") {
        YearContents += "<i class=\"icon-2 disabled\" data-icon=\"&#xe900;\"><span class=\"blind\">다음년도</span></i>";
    }
    YearContents += "</div>";
    return YearContents;
}

//BizLayer
function BizLayer(type) {
    if (type == "S") {
        $("#BizLetterLayer").show();
    } else if (type == "H") {
        $("#BizLetterLayer").hide();
    }
}

function SetSelectCancel() {
    $("#result_tab ul li").removeClass("this-page");
}

//Month Contents
function SetMonth(Year, data) {
    var Contents = "<ul>";
    var ContentsYN = "N";
    for (var i = 1; i <= 12; i++) {
        for (var k = 0; k < data.length; k++) {
            if (data[k]["RegYear"] == Year) {
                if (data[k]["RegMonth"] == i) {
                    if (data[k]["Recently"] == 1) {
                        Contents += "<li class=\"this-page\"><a href=\"#\" onclick=\"javascript:GetDefaultData('" + data[k]["RegYear"] + data[k]["RegMonth"] + "',0,'','D'); return false;\">" + i + "월 <span style=\"display:none\">(" + data[k]["EditorCnt"] + ")</a></span></li>";
                        ContentsYN = "Y";
                    } else {
                        Contents += "<li><a href=\"#\" onclick=\"javascript:GetDefaultData('" + data[k]["RegYear"] + data[k]["RegMonth"] + "',0,'','D'); return false;\">" + i + "월 <span style=\"display:none\">(" + data[k]["EditorCnt"] + ")</span></a></li>";
                        ContentsYN = "Y";
                    }
                }
            }
        }
        if (ContentsYN == "N") {
            Contents += "<li  style=\"color: #ddd;\">" + i + "월 <span  style=\"display:none\">(0)</span></li>";
        }
        ContentsYN = "N";
    }
    Contents += "</ul>";
    return Contents;
}

//Issue Title
function SetIssue(data) {
    var Contents = "";
    var Page = "";
    var RecentlyID = "";
    Contents += "<h2 class=\"dark_line\">" + data[0]["Keyword"] + " 관련 이슈</h2>";
    for (var i = 0; i < data.length; i++) {
        if (i % 5 == 0) {
            Page += "<span id=\"IssuePage_" + i + "\" onclick=\"javascript:SetIssuePage('" + i + "');  return false;\"></span>";
            Contents += "<ul id=\"IssueList_" + i + "\" style=\"display:none;\">";
        }
        if (data[i]["Recently"] == "1") {
            Contents += "<li id=\"EachTitleIssue_" + data[i]["LEM_No"] + "\">" + data[i]["Title"] + "</li>";
            RecentlyID = i;
            RecentlyLEM_No = data[i]["LEM_No"];
        } else {
            Contents += "<li id=\"EachTitleIssue_" + data[i]["LEM_No"] + "\"><a href=\"#\" onclick=\"javascript:GetDefaultData('','" + data[i]["LEM_No"] + "','" + data[i]["Keyword"] + "','K'); return false;\">" + data[i]["Title"] + "</a></li>";
        }
		if (i % 5 == 4) {
		    Contents += "</ul>";
        }
    }
    if (data.length % 5 != 0) {
        Contents += "</ul>";
    }
    Contents += "<div class=\"more_view\">" + Page + "</div>";
    $("#TopIssue").html(Contents);

    if (data.length == 0) {
        $("#TopIssue").hide();
    } else {
        $("#TopIssue").show();
    }

    for (var i = 0; i < 15; i++) {
        if (i % 5 == 0) {
            $("#IssuePage_" + i).removeClass("_this");
        }
    }

    for (var i = 0; i < data.length; i++) {
        $("#EachTitleIssue_" + data[i]["LEM_No"]).removeClass("_this");
    }
    $("#EachTitleIssue_" + RecentlyLEM_No).addClass("_this");
    RecentlyID = RecentlyID - (RecentlyID % 5);
    SetIssuePage(RecentlyID);
}

//Issue Title Paging 처리 
function SetIssuePage(Page) {
    for (var i = 0; i < 15; i++) {
        if (i % 5 == 0) {
            $("#IssueList_" + i).hide();
            $("#IssuePage_" + i).removeClass("_this");
        }
    }
    $("#IssueList_" + Page).show();
    $("#IssuePage_" + Page).addClass("_this");
}

//Issue Contents 
function SetMainIssue(data) {
    $("#TitleIssue").html(data[0]["Title"]);
    var Contents = "";
    if (data[0]["ImageUrl"] != "") {
        Contents += "<img src=\"" + data[0]["ImageUrl"] + "\" class=\"img\">";
    }
    Contents += data[0]["Summary"];
    $("#SummaryIssue").html(Contents);
    $("#RegDateIssue").html("Edit Date : " + data[0]["RegDate"]);
}

//Issue Bottom List
function SetIssueList(data) {
    $("#search_results").html("");
    var Contents = "";
    //var params = {}
    for (var i = 0; i < data.length; i++) {
        if (data[i]["MetaID"] != "") {
            Contents = "<div id=\"" + data[i]["MetaID"] + "\"><span id=\"span_" + data[i]["MetaID"].replace(/#/g, '_')+"\">" + data[i]["MenuCode"] + "</span></div>";
            //Contents = "<div id=\"" + data[i]["MetaID"] + "\"></div>";
            $("#search_results").append(Contents);
            //params = { "sid": data[i]["MetaID"] }
			
            $.ajax({
                type: "POST",
                url: "/Editor/GetSubList/",
                dataType: "JSON",
                data: { "sid": data[i]["MetaID"] },
                success: function (result) {
                    //Contents = "<div>";
               
                    var lbReTitle = result["lbTitle"];
                    if (result["lbDId"].toUpperCase().indexOf('L006') == 0) {
                        lbReTitle = lbReTitle.replace(/제1조/g, '');
                    }
                    Contents = "<br /><a href=\"#\" onclick=\"javascript:PopupIssue('" + result["lbDId"] + "');return false;\">" + lbReTitle + "</a>";
                    if (result["lbDId"].toUpperCase().indexOf('P000') == 0) {
                        if (result["lbSubTitle"] != "") {
                            Contents += "<div> " + result["lbSubTitle"].replace(/null/gi, "") + "</div>";
                        }
                        if (result["lbPubTitle"] != "") {
                            Contents += "<br /><span class=\"text_ex\">소속</span> " + result["lbPubTitle"].replace(/null/gi, "");
                        }

                    } else {
                        if (result["lbSubTitle"] != "") {
                            Contents += "<span class=\"meta\">" + result["lbSubTitle"].replace(/null/gi, "") + "</span>";
                        }
                        Contents += "<div class=\"issue_content\">" + result["lbCont"].replace(/null/gi, "") + "</div>";
                    }
                    //Contents += "</div>";
                    //$("#search_results").append(Contents);

                    // 모바일
                    $("#span_" + result["lbDId"].replace(/#/g, '_')).after(Contents);
                    //// 웹
                    //$("#" + result["lbDId"]).append(Contents);

                    SetHeight_LawnbEditor();
                },
                error: function (e) {
                    console.log("Cannot Load Sub Contents");
                }
            });
        }
    }
}

//Issue Bottom List Link
function PopupIssue(MetaID) {
    EditorPopup(MetaID);
}

//Issue Monthly List 
function SetMonthlyIssue(data) {
    var Contents = "";
    Contents += "<h4>LAWnB Editor</h4>";
    Contents += "<div class=\"mgt10 pr\">"+data[0]["RegYear"]+"년 "+data[0]["RegMonth"]+"월의 다른 이슈 <span>열기</span></div>"
    Contents += "<ul>";
    for (var i = 0; i < data.length; i++) {
        Contents += "<li><a href=\"#\" onclick=\"javascript:GetDefaultData('','" + data[i]["LEM_No"] + "','','I'); return false;\">" + data[i]["Title"] + "</a></li> "
    }
    Contents += "</ul>";

    $("#MonthlyIssue").html(Contents);
}

function SetKeywordText(data) {
    $("#KeywordLayer").html("");
    var Contents = "";
    for (var i = 0; i < data.length; i++) {
        if (data[i]["KeywordLevel"] == "1") {
            Contents += "<span class=\"KeywordLevel1\" onclick=\"javascript:GetDefaultData('', 0, '" + data[i].Keyword + "', 'K'); return false;\">";
        } else {
            Contents += "<span onclick=\"javascript:GetDefaultData('', 0, '" + data[i].Keyword + "', 'K'); return false;\">";
        }
        Contents += data[i]["Keyword"];
        Contents += "</span> ";
    }
    $("#KeywordLayer").html(Contents);
}

$(function () {
    $('#MonthlyIssue').on('click', 'div.pr', function () {
        if ($('#MonthlyIssue ul').is(':visible')) {
            $('#MonthlyIssue ul').hide();
            $("#MonthlyIssue div span").html('열기');
        } else {
            $('#MonthlyIssue ul').show();
            $("#MonthlyIssue div span").html('닫기');
        }
    });
})
