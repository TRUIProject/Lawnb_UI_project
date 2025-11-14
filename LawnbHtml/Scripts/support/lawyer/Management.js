function SetTitle() {
    sendNonBlockingAjaxJsonRequest("/Lawyer/GetManagement/", "", function (result) {
        var Image = "";
        var Contents = "";
        var SubContents = "";
        if (result[0]["ResultCode"] == "0") {
            $("#NewLawyerLayer").show();
        } else if (result[0]["ResultCode"] == "1") { //연결된 법조인존재
            Contents += LawyerEachSetting(result[0], "Main");
            SubContents += LawyerMiniSetting(result[0]);
            $("#BtnModify").bind("click", function () { ModifyLayer(result[0]["Did"]); });
            //$("#BtnWin").bind("click", function () { alert("승소판결문하러가기"); });
            $("#BtnWin").bind("click", function () { OnetoOneContactUs('B04'); });
            $("#BtnDisconnect").bind("click", function () { LawyerDisconnect(result[0]["Did"]); });
            $("#BtnDelete").bind("click", function () { LawyerDelete(result[0]["Did"]); });
            $("#ConnectLawyerInfo").html(Contents);
            $("#MyLawyerInfo").html(Contents);
            $("#DisconnectLawyerInfo").html(SubContents);
            $("#ConnLawyerLayer").show();
        } else if (result[0]["ResultCode"] == "2") { //신청중 
            Contents += LawyerMiniSetting(result[0]);
            if (result[0]["Voc_Code_Id"] == "212" || result[0]["Voc_Code_Id"] == "213") {
                $("#VocProcessing").html("내 아이디와 법조인 등록/수정 신청이 [접수]되어 진행되고 있습니다.");
            } else if (result[0]["Voc_Code_Id"] == "215") {
                $("#VocProcessing").html("법조인 삭제신청이 [접수]되어 진행되고 있습니다.");
            } else if (result[0]["Voc_Code_Id"] == "214") {
                $("#VocProcessing").html("내 아이디와 법조인 연계신청이 [접수]되어 진행되고 있습니다.");
            }

            $("#DueLawyerInfo").html(Contents);
            $("#DueLawyerLayer").show();
        }
        setHeight_Lregi();
    });
}
//연결검색
function LawyerSearch() {
    var params = { "Did": "" }
    sendNonBlockingAjaxJsonRequest("/Lawyer/LawyerSearch/", params, function (result) {
        var Contents = "";
        LayerHide();
        if (result == "-1") {
            location.href = "/Login/Index/";
        } else if (result.length == 0) {
            $("#NonLawyerLayer").show();
        } else if (result.length > 0) {
            var Subinfo = "";
            for (var i = 0; i < result.length; i++) {
                Contents += LawyerEachSettiongList(result[i], "Search");
            }
            $("#SearchLawyerResult").html(Contents);
            $("#SearchLawyerLayer").show();
        }
    });
}
//삭제검색
function LawyerDeleteSearch() {
    var params = { "Did": "" }
    sendNonBlockingAjaxJsonRequest("/Lawyer/LawyerSearch/", params, function (result) {
        var Contents = "";
        LayerHide();
        if (result == "-1") {
            location.href = "/Login/Index/";
        } else if (result.length == 0) {
            $("#NonLawyerLayer").show();
        } else if (result.length > 0) {
            var Subinfo = "";
            for (var i = 0; i < result.length; i++) {
                Contents += LawyerEachSettiongList(result[i], "Delete");
            }
            $("#DeleteSearchLawyerResult").html(Contents);
            $("#DeleteSearchLawyerLayer").show();
        }
    });
}
//상세팝업
function LawyerDetail(Did) {
    //var obj = [{ "name": "sid", "value": Did}]
    //GetOnetoOnePopupCall("/Info/ContentView/", obj, "950");
    window.open("/Info/ContentView/?sid=" + Did, "_blank", "width=950,height=600,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0");
}
//신규등록
function NewLawyerRegist() {
    LayerHide();
    $("#ModConnTitleLayer").hide();
    $("#ModConnLawyerLayer").hide();
    $("#ConnectAlertLayer").hide();
    $("#ConnectLawyerLayer").show();
    $("#ConnectNextLayer").html("<span onclick=\"javascript:LawyerConnectConfirm('N','');\">다음단계</span>");
}
//연결확인
function LawyerConnect(Did) {
    var params = { "Did": Did }
    sendNonBlockingAjaxJsonRequest("/Lawyer/LawyerSearch/", params, function (result) {
        LayerHide();
        var Contents = "";
        if (result == "-1") {
            location.href = "/Login/Index/";
        } else if (result.length == 0) {
            $("#NonLawyerLayer").show();
        } else if (result.length > 0) {
            for (var i = 0; i < result.length; i++) {
                Contents += LawyerEachSettiongList(result[i], "Connect");
            }
            $("#ConnectLawyerInfo").html(Contents);
            $("#container").scrollTop();
            $("#ConnectNextLayer").html("<span onclick=\"javascript:LawyerConnectConfirm('C','" + Did + "');\">다음단계</span>");
            $("#ConnectLawyerLayer").show();

            // 정보 제공 동의 값이 존재, 동의 날짜 존재하면 동의 체크 제외
            if (result[0].lbPub == "0" && result[0].lbPubDate != "") {
                $("#DivChkConnect1").hide();
            }
            else {
                $("#DivChkConnect1").show();
            }
        }
    });
}
//삭제확인
function LawyerDelete(Did) {
    var params = { "Did": Did }
    sendNonBlockingAjaxJsonRequest("/Lawyer/LawyerSearch/", params, function (result) {
        LayerHide();
        var Contents = "";
        var Subinfo = "";
        if (result == "-1") {
            location.href = "/Login/Index/";
        } else if (result.length == 0) {
            $("#NonLawyerLayer").show();
        } else if (result.length > 0) {
            if (result[0]["lbSubTitle"] != "") {
                Subinfo = result[0]["lbSubTitle"].split("|");
            }
            Contents = result[0]["lbTitle"] + Subinfo[0];
            $("#DeleteLawyerInfo").html(Contents);
            $("#container").scrollTop();
            $("#DeleteNextLayer").html("<span onclick=\"javascript:LawyerConnectConfirm('D','" + Did + "');\">확인</span>");
            $("#DeleteLawyerLayer").show();
        }
    });
}
//등록/수정/연결/연결해제/삭제 완료
function LawyerConnectConfirm(type, Did) {
    var VocReason = "";
    var VocReasonDetail = "";
    var UserName = "";
    var UserEmail = "";
    var UserPhone = "";
    if (type == "DC") {
        if (!$("input[name=DisconnectReason]").is(":checked")) { alert("연결해제 이유를 선택해주세요"); return; }
        VocReason = $("input[name=DisconnectReason]:checked").val();
        if (!$("#chkDIsconnect1").is(":checked")) {
            alert("[법조인정보 등록/수정 시 수집항목의 이용 및 보관 동의]에 동의하셔야 정보수정 및 신규등록 신청이 가능합니다.");
            return;
        }
    }
    if (type == "D") {
        if (!$("input[name=DeleteReason]").is(":checked")) { alert("삭제 사유를 선택해주세요"); return; }
        if (!$("input[name=DeleteReasonDetail]").is(":checked")) { alert("삭제방안을 선택해주세요"); return; }
        if ($("#DeleteUserName").val() == "") { alert("이름을 입력해주세요"); return; }
        if ($("#DeleteUserEmail").val() == "") { alert("이메일을 입력해주세요"); return; }
        if ($("#DeleteUserPhone").val() == "") { alert("연락처를 입력해주세요"); return; }
        VocReason = $("input[name=DeleteReason]:checked").val();
        VocReasonDetail = $("input[name=DeleteReasonDetail]:checked").val();
        UserName = $("#DeleteUserName").val();
        UserEmail = $("#DeleteUserEmail").val();
        UserPhone = $("#DeleteUserPhone").val();
        if (!$("#chkDelete1").is(":checked")) {
            alert("[법조인정보 등록/수정 시 수집항목의 이용 및 보관 동의]에 동의하셔야 정보수정 및 신규등록 신청이 가능합니다.");
            return;
        }
    }

    //if (type == "N" || type == "M" || type == "C") {
    if (type == "N" || type == "C") {

        if ($("#DivChkConnect1").is(":visible")) {
            if (!$("#chkConnect1").is(":checked")) {
                alert("[법조인정보 제공 및 이용동의]에 동의하셔야 정보수정 및 신규등록신청이 가능합니다.");
                return;
            }
        } 
        if (!$("#chkConnect2").is(":checked")) {
            alert("[법조인정보 신청 시 수집항목의 이용 및 보관 동의] 동의하셔야 정보수정 및 신규등록 신청이 가능합니다.");
            return;
        }
    }

    // N:신규, M:수정
    if (type == "N" || type == "M") {
        var obj = [{ "name": "Did", "value": Did}]        
        if (type == "M") 
        {
            POSTFORMCall("/Lawyer/RegistModify/", obj);
        }
        else if( type == "N")
        {
            POSTFORMCall("/Lawyer/Regist/", obj);
        }
        
    } else if (type == "C" || type == "D" || type == "DC") {
        var VocType = "";
        if (type == "C") { VocType = "214"; }
        else if (type == "D") { VocType = "215"; }
        else if (type == "DC") { VocType = "216"; }

        var params = { "VocType": VocType, "Did": Did, "VocReason": VocReason, "VocReasonDetail": VocReasonDetail, "UserName": UserName, "UserEmail": UserEmail, "UserPhone": UserPhone }
        sendNonBlockingAjaxJsonRequest("/Lawyer/SetLawyerVoc/", params, function (result) {
            if (result[0]["ResultCode"] == "0") {
                LayerHide();
                //신청완료레이어
                if (type == "C") {
                    alert("연결신청이 완료되었습니다. 만약 다른 사람으로 잘못 신청된경우 로앤비 운영자가 연결을 거절할 수 있습니다.");
                    location.href = "/Lawyer/Management/";
                } else if (type == "DC") {
                    $("#DisconnectConfirmLayer").show();
                } else if (type == "D") {
                    $("#DeleteConfirmLayer").show();
                }
            }
        });
    } 
}
//연결해제
function LawyerDisconnect(Did) {
    var params = { "Did": Did }
    sendNonBlockingAjaxJsonRequest("/Lawyer/LawyerSearch/", params, function (result) {
        LayerHide();
        var Contents = "";
        if (result == "-1") {
            location.href = "/Login/Index/";
        } else if (result.length == 0) {
            $("#NonLawyerLayer").show();
        } else if (result.length > 0) {
            $("#container").scrollTop();
            $("#DisconnectNextLayer").html("<span onclick=\"javascript:LawyerConnectConfirm('DC','" + Did + "');\">완료</span>");
            $("#DisconnectLawyerLayer").show();
        }
    });
}
//수정
function ModifyLayer(Did) {
    $("#ConnLawyerLayer").hide();
    $("#ModConnTitleLayer").hide();
    $("#ModConnLawyerLayer").show();
    $("#ConnectAlertLayer").hide();
    $("#ConnectLawyerLayer").show();
    $("#ConnectNextLayer").html("<span onclick=\"javascript:LawyerConnectConfirm('M','" + Did + "');\">다음단계</span>");

    $("#DivChkConnect1").hide();
}
//html생성
function LawyerEachSetting(data, type) {
    var Contents = "";
    var Gender = "";
    var Exam = "";
    var Photo = "";
    if (data["Photo"] != "") { Photo = "/mounts/lbimg/peopdata/" + data["Photo"]; } else { Photo = "/lbimg/peopdata/tr_lawyer_default.png"; }
    if (data["Gender"] == "0") { Gender = " / 남자"; } else { Gender = " / 여자"; }
    if (data["ExamName"] != "") { Exam = " / " + data["ExamName"] + " " + data["ExamNum"] + "회"; } else { Exam = ""; }
    Contents += "<li>";
    Contents += "<div class=\"img\"><img src=\"" + Photo + "\" alt=\"" + data["Name"] + "님의 사진\"></div>";
    Contents += "<div class=\"co_searchContent\">";
    Contents += "<h3> <a href=\"#\" onclick=\"javascript:LawyerDetail('" + data["Did"] + "'); return false;\">" + data["Name"] + " " + data["SubName"] + "</a> ";
    Contents += "<span>" + data["BirthYear"] + "년생" + Gender + Exam + "</span></h3>";
    Contents += "<div class=\"co_searchResults_summary\"><span>";
    if (data["Job"] != "") {
        Contents += "현직 : " + data["Job"];
        if (data["Position"] != "") { Contents += "(" + data["Position"] + ")"; }
        Contents += " / ";
    }
    if (data["WorkName"] != "") { Contents += data["WorkName"] + " / "; }
    if (data["WorkGroup"] != "") { Contents += data["WorkGroup"] + " / "; }
    if (data["WorkDepartment"] != "") { Contents += data["WorkDepartment"] + " / "; }
    Contents = Contents.substring(0, Contents.length - 3);
    Contents += "</span></div></div>";
    if (type == "Search") {
        if (data["Profile_Id"] == "") {
            Contents += "<div class=\"btn_right\" onclick=\"javascript:LawyerConnect('" + data["Did"] + "'); return false;\">연결신청</div>";
        } else {
            Contents += "<div class=\"btn_right _done\">다른 ID와 연결</div>";
        }
    }
    Contents += "</li>";
    return Contents;
}

function LawyerEachSettiongList(data, type) {
    var Contents = "";
    var Subinfo = "";
    Subinfo = data["lbSubTitle"].split("|");
    Contents += "<li>";
    Contents += "<div class=\"img\"><img src=\"" + data["lbPubImg"] + "\" alt=\"" + data["lbTitle"] + "님의 사진\"></div>";
    Contents += "<div class=\"co_searchContent\">";
    Contents += "<h3> <a href=\"#\" onclick=\"javascript:LawyerDetail('" + data["lbDId"] + "'); return false;\">" + data["lbTitle"] + "</a> " + Subinfo[0] + "</h3>";
    Contents += "<div class=\"co_searchResults_summary\">" + Subinfo[1] + "</div>";
    Contents += "</div>";
    if (type == "Search") {
        if (data["lbPubId"] == "" || data["lbPubId"] == null) {
            Contents += "<div class=\"btn_right\" onclick=\"javascript:LawyerConnect('" + data["lbDId"] + "'); return false;\">연결신청</div>";
        } else {
            Contents += "<div class=\"btn_right _done\">다른 ID와 연결</div>";
        }
    } else if (type == "Delete") {
        if (data["lbPubId"] == "" || data["lbPubId"] == null) {
            Contents += "<div class=\"btn_right\" onclick=\"javascript:LawyerDelete('" + data["lbDId"] + "'); return false;\">삭제신청</div>";
        } else {
            Contents += "<div class=\"btn_right _done\">다른 ID와 연결</div>";
        }
    }
    Contents += "</li>";
    return Contents;
}

function LawyerMiniSetting(data) {
    var Contents = "";
    Contents += data["Name"] + " ";
    if (data["Name2"] != "") {
        Contents += "(" + data["Name2"] + ") ";
    }
    if (data["SubName"] != "") {
        Contents += data["SubName"] + " ";
    }
    Contents += "<br>";
    if (data["BirthYear"] != "") {
        Contents += data["BirthYear"] + "년생/ ";
    }
    if (data["Gender"] == "0") {
        Contents += "남자/ ";
    } else {
        Contents += "여자/ ";
    }
    if (data["ExamName"] != "") {
        Contents += "(" + data["ExamName"] + " " + data["ExamNum"] + ")/ ";
    }
    Contents = Contents.substring(0, Contents.length - 2);
    return Contents;
}

function LayerHide() {
    $("#NewLawyerLayer").hide();
    $("#ConnLawyerLayer").hide();
    $("#DueLawyerLayer").hide();
    $("#NonLawyerLayer").hide();
    $("#SearchLawyerLayer").hide();
    $("#ConnectLawyerLayer").hide();
    $("#DisconnectLawyerLayer").hide();
    $("#DisconnectConfirmLayer").hide();
    $("#DeleteSearchLawyerLayer").hide();
    $("#DeleteLawyerLayer").hide();
    $("#DeleteConfirmLayer").hide();
}

function Popup_LawyerAgree() {
    window.open("/Lawyer/LawyerAgree/", "_blank", "width=950,height=600,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0");
}
function Popup_LawyerCollection() {
    window.open("/Lawyer/LawyerCollection/", "_blank", "width=950,height=600,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0");
}

//삭제시 회원정보와 동일
function DeleteLawyerInfoSetting() {
    if ($("#DeleteSameLawyer").is(":checked")) {
        sendNonBlockingTextToJsonRequest("/Lawyer/GetDeleteUserInfo/", "", function (result) {
            var ReturnArr = result.split("//");
            $("#DeleteUserName").val(ReturnArr[0]);
            $("#DeleteUserEmail").val(ReturnArr[1]);
            $("#DeleteUserPhone").val(ReturnArr[2]);
        });
    } else {
        $("#DeleteUserName").val("");
        $("#DeleteUserEmail").val("");
        $("#DeleteUserPhone").val("");
    }
}

//function WinningCase() {
//    window.open("/Lawyer/WinningCase/", "_blank", "width=1120,height=600,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0");
//}