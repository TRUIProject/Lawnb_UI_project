var BBSQuestion = "";
var ParentsNo = 0;
function SetTitle() {
    GetSearchList();
}

function GetSearchList() {
    var params = { "LQM_No": LQM_No }
    sendNonBlockingAjaxJsonRequest("/Questions/GetQuestionsDetail/", params, function (result) {
        SetSearchList(result);
        resizeComment();
    });
}

function SetSearchList(data) {
    var Contents = "";
    $("#Title").html(data[0]["Title"]);
    $("#RegDate").html(data[0]["RegDate"]);

    BBSQuestion = data[0]["BBSQuestion"];
    if ($("#BBSQuestion")) {
        $("#BBSQuestion").html(data[0]["BBSQuestionName"]);
    }
    if ($("#CaseNumber")) { //B02
        $("#CaseNumber").html(data[0]["CaseNumber"]);
        $("#CourtName").html(data[0]["CourtName"]);
        if (data[0]["LinkURL"] != "부분판례" && data[0]["LinkURL"] != "PDF") {
            $("#LinkURL").html(data[0]["LinkURL"]);
        }
    }
    if ($("#LawyerInfo")) { // B04
        $("#LawyerInfo").html(data[0]["CourtName"]);
        $("#CaseInfo").html(data[0]["CaseNumber"]);
        if (data[0]["TodayLawyer"] == "Y") {
            $("#TodayLawyer").html("신청 " + data[0]["TodayLawyerImg"]);
        } else {
            $("#TodayLawyer").html("미신청 " + data[0]["TodayLawyerImg"]);
        }
        $("#sFileName").html(data[0]["AddFiles"]);
        $("#ApplyerInfo").html(data[0]["ApplyerInfo"]);
    }
    if (data[0]["sFileName"] != "") {
        //$("#sFileName").html("<a href=\"" + data[0]["FilePath"].replace(/\\/g, "/") + data[0]["RealFileName"] + "\" download=\"" + data[0]["sFileName"] + "\" target=\"_blank\">" + data[0]["sFileName"] + "</a>");
        $("#sFileName").html(data[0]["sFileName"]);
    }
    $("#Contents").html(data[0]["Contents"].replace(/\n/g, "<br>"));

    if (data[1]) {
        Contents += DepthLayer(data, 1);
        $("#ReplyAnswer").show();
        $("#ReplyAnswer").html(Contents);
    }

    for (var i = 0; i < data.length; i++) {
        if (data[i]["LQM_No"] > ParentsNo)
            ParentsNo = data[i]["LQM_No"];
    }
}

function DepthLayer(data, Depth) {
    var Contents = "";
    for (var i = 0; i < data.length; i++) {
        if (data[i]["Depth"] == Depth) {
            Contents += "<div class=\"lawyer_info mgt20 pr\">";
            if (data[i]["QType"] == "Answer") {
                Contents += "<p>답변내용</p>";
            } else if (data[i]["QType"] == "Reply") {
                Contents += "<p>추가문의</p>";
            }
            Contents += "</div>";
            Contents += "<table class=\"data_view\">";
            Contents += "<colgroup>";
            Contents += "<col width=\"100\"></col>";
            Contents += "<col></col>";
            Contents += "<col width=\"100\"></col>";
            Contents += "<col width=\"\"></col>";
            Contents += "</colgroup>";
            Contents += "<tbody>";
            Contents += "<tr>";
            Contents += "<th><span>제목</span></th>";
            Contents += "<td>" + data[i]["Title"] + "</td>";
            if (data[i]["QType"] == "Answer") {
                Contents += "<th><span>답변일자</span></th>";
            } else if (data[i]["QType"] == "Reply") {
                Contents += "<th><span>문의일자</span></th>";
            }
            Contents += "<td>" + data[i]["RegDate"] + "</td>";
            Contents += "</tr>";
//            Contents += "<tr>";
//            Contents += "<th><span>첨부파일</span></th>";
//            Contents += "<td colspan=\"3\">";
//            if (data[i]["sFileName"] != "") {
//                //Contents += "<a href=\"" + data[i]["FilePath"] + data[i]["RealFileName"] + "\" download=\"" + data[i]["sFileName"] + "\">" + data[i]["sFileName"] + "</a>";
//                Contents += data[i]["sFileName"] + " ";
//            }
//            Contents += "</td>";
//            Contents += "</tr>";
            Contents += "<tr>";
            if (data[i]["QType"] == "Answer") {
                Contents += "<th><span>답변내용</span></th>";
            } else if (data[i]["QType"] == "Reply") {
                Contents += "<th><span>문의내용</span></th>";
            }
            Contents += "<td colspan=\"3\">" + data[i]["Contents"].replace(/\n/g, "<br>") 
            if (data[i]["BBS"] == "B02" && data[i]["LinkURL"] != "") {
                Contents += "<br><button onclick=\"CaseView('" + data[i]["LinkURL"] + "');\">판결문보기</button>";
            }
            Contents += "</td>";
            Contents += "</tr>";
            Contents += "</tbody>";
            Contents += "</table>";

            for (var k = 0; k < data.length; k++) {
                if (data[i]["LQM_No"] == data[k]["ParentsNo"]) {
                    Contents += DepthLayer(data, data[k]["Depth"]);
                }
            }

        }
    }
    return Contents;
}

function AddQuestions(BBS) {
    var obj = [{ "name": "BBS", "value": BBS }, { "name": "BBSQuestion", "value": BBSQuestion }, { "name": "QType", "value": "Reply" }, { "name": "ParentsNo", "value": ParentsNo}]
    GetOnetoOnePopupCall("/Questions/OnetoOneContactUs/", obj, "915", "600", "1");
}

function CaseView(URL) {
    var maxThisX = screen.width * 0.85;
    var maxThisY = screen.height * 0.85;
    window.open(URL, "_blank", "width=" + maxThisX + ",height=" + maxThisY + ",scrollbars=no,toolbar=no, resizable=yes, menubar=no, left=70, top=15");
}