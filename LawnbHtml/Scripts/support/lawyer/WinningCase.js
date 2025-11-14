var FileList = [];
var LawyerList = [];
function SetTitle() {
    //console.log("승소판결문");
    setHeight_Lregi();
}

function LawyerSearch() {
    var params = { "SearchName": $("#SearchLawyerName").val() }
    sendNonBlockingAjaxJsonRequest("/Lawyer/GetWinningCase/", params, function (result) {
        var Contents = "";
        var lawyer = "";
        if (result.length > 0) {
            for (var i = 0; i < result.length; i++) {
                lawyer = result[i]["lbTitle"] + " " + result[i]["lbSubTitle"].split("|")[0].replace("<span>", "").replace("</span>", "");
                //Contents += "<span>" + lawyer;
                //Contents += " <em class=\"text_ex\" onclick=\"javascript:LawyerAdd('" + lawyer + "','" + result[i]["lbDId"] + "'); return false;\">선택</em></span>";
                Contents += "<div onclick=\"javascript:LawyerAdd('" + lawyer + "','" + result[i]["lbDId"] + "'); return false;\"><strong>" + lawyer + "</strong><span>선택</span></div>";
            }
            //$("#SearchLayer").html(Contents);
            $("#LawyerSearchList").html(Contents);
        } else {
            //$("#SearchLayer").html("<span>[" + $("#SearchLawyerName").val() + "]으로 검색된 법조인이 없습니다. 법조인 정보를 별도로 등록신청해 주십시오.</span>");
            $("#LawyerSearchList").html("<div>[" + $("#SearchLawyerName").val() + "]으로 검색된 법조인이 없습니다. 법조인 정보를 별도로 등록신청해 주십시오.</div>");
        }
        //$("#SearchLayer").show();
        LawyerSearchLayer("S");
    });
}

function LawyerSearchLayer(type) {
    if (type == "S") {
        $("#LawyerSearchLayer").show();
    } else if (type == "C") {
        $("#LawyerSearchLayer").hide();
    }
}

function LawyerAdd(lawyer, Did) {
    for (var i = 0; i < LawyerList.length; i++) {
        if (LawyerList[i]) {
            if (LawyerList[i]["Did"] == Did) {
                alert("이미추가되었습니다.");
                return;
            }
        }
    }
    LawyerList.push({ "Did": Did });
    $("#SelectListLayer").append("<span id=\"LawyerListLayer_" + Did + "\">" + lawyer + " <em class=\"text_ex\" onclick=\"javascript:LawyerDelete('" + Did + "'); return false;\">삭제</em></span>");
    $("#SelectListLayer").show();
    LawyerSearchLayer("C");
}

function LawyerDelete(Did) {
    for (var i = 0; i < LawyerList.length; i++) {
        if (LawyerList[i]) {
            if (LawyerList[i]["Did"] == Did) {
                delete LawyerList[i];
                $("#LawyerListLayer_" + Did).remove();
            }
        }
    }
}

function AddCase() {
    var Contents = "";
    Contents += "<input type=\"text\" name=\"Case[]\" style=\"width:80%\">";
    $("#AddCaseLayer").append(Contents);
}

function FileCheck(type) {
    if (type == "I") {
        var files = $("#sFileName").get(0).files;
        for (var i = 0; i < files.length; i++) {
            FileList.push(files[i]);
        }
    }
    var FileNameLayerContents = "";
    for (var i = 0; i < FileList.length; i++) {
        if (FileList[i]) {
            FileNameLayerContents += "<span>" + FileList[i].name;
            FileNameLayerContents += " <em class=\"text_ex\" onclick=\"javascript:FileDelete('" + i + "');return false;\">삭제</em></span>";
        }
    }
    $("#FileLayer").show();
    $("#FileLayer").html(FileNameLayerContents);
//    var files = $("#sFileName").get(0).files;
//    var FileNameLayerContents = "";
//    for (var i = 0; i < files.length; i++) {
//        FileNameLayerContents += "<span>" + files[i].name;
//        FileNameLayerContents += " <em class=\"text_ex\" onclick=\"javascript:FileDelete('" + i + "');return false;\">삭제</em></span>";
//    }
//    $("#FileLayer").show();
//    $("#FileLayer").html(FileNameLayerContents);
}

function FileDelete(id) {
    delete FileList[id];
    FileCheck();
    return;
    var files = $("#sFileName").get(0).files;
    for (var i = 0; i < files.length; i++) {
        if (id != i) {
            newfiles.push(files[i]);
        }
    }
    FileCheck('D');
}

function ImageCheck() {
    var files = $("#PhotoImage").get(0).files;
    var FileNameLayerContents = "";
    for (var i = 0; i < files.length; i++) {
        FileNameLayerContents += "<span>" + files[i].name;
        FileNameLayerContents += " <em class=\"text_ex\" onclick=\"javascript:ImageDelete();return false;\">삭제</em></span>";
    }
    $("#ImageLayer").show();
    $("#ImageLayer").html(FileNameLayerContents);
}

function ImageDelete() {
    $("#PhotoImage").val("");
    $("#ImageLayer").html("");
    $("#ImageLayer").hide();
}

function Popup_LawyerAgree() {
    window.open("/Lawyer/LawyerAgree/", "_blank", "width=950,height=600,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0");
}
function Popup_LawyerCollection() {
    window.open("/Lawyer/LawyerCollection/", "_blank", "width=950,height=600,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0");
}

function GetSelfInfo() {
    if ($("#chkLawyerUser").is(":checked")) {
        sendNonBlockingTextToJsonRequest("/Lawyer/GetDeleteUserInfo/", "", function (result) {
            var ReturnArr = result.split("//");
            $("#UserName").val(ReturnArr[0]);
            $("#UserEmail").val(ReturnArr[1]);
            $("#UserPhone").val(ReturnArr[2]);
        });
    } else {
        $("#UserName").val("");
        $("#UserEmail").val("");
        $("#UserPhone").val("");
    }
}

function WinningCaseConfirm() {
    if (!$("#WinningCheck1").is(":checked")) {
        alert("[승소판레 등록 신청시 법조인정보 제공 및 이용동의]에 동의하셔야 정보수정이 가능합니다.");
        return;
    }
    if (!$("#WinningCheck2").is(":checked")) {
        alert("[승소판결문 등록신청 시 수집항목의 이용 및 보관 동의] 동의하셔야 정보수정이 가능합니다.");
        return;
    }
    if ($("#UserName").val() == "") {
        alert("신청자 연락처의 이름을 입력해 주세요.");
        return;
    }
    if ($("#UserEmail").val() == "") {
        alert("신청자 연락처의 이메일을 입력해 주세요.");
        return;
    }
    var emailchk = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
    if (!emailchk.test($("#UserEmail").val())) {
        alert("이메일주소를 정확하게 입력해 주세요.");
        return;
    }
    if ($("#UserPhone").val() == "") {
        alert("신청자 연락처의 전화번호를 입력해 주세요.");
        return;
    }

    var LawyerChk = 0;
    var InfoArr = [];
    for (var i = 0; i < LawyerList.length; i++) {
        if (LawyerList[i]) {
            InfoArr.push({ "InfoType": "L", "Did": LawyerList[i]["Did"] });
            LawyerChk++; 
        }
    }
    if (LawyerChk == 0) {
        alert("판결문제공 변호사를 입력해 주세요. (이름 입력 후 검색으로 선택해주세요.)");
        return;
    }

    $("input[name='Case[]']").each(function () {
        if (this.value != "") { InfoArr.push({ "InfoType": "C", "Case_Info": this.value }); }
    });

    var FileName = [];
    var fileSizeChk = 0;
    var fileData = new FormData();
    for (var i = 0; i < FileList.length; i++) {
        if (FileList[i]) {
            fileSizeChk += FileList[i].size;
            if (fileSizeChk > 5000000) {
                alert("첨부파일의 용량이 5MB를 초과하였습니다.");
                return;
            }
            fileData.append(FileList[i].name, FileList[i]);
            FileName.push({ "Name": FileList[i].name, "Value": "N" });
        }
    }
    var PhotoName = "";
    var photos = $("#PhotoImage").get(0).files;
    for (var i = 0; i < photos.length; i++) {
        if (photos[i].size > 5000000) {
            alert("첨부파일의 용량이 5MB를 초과하였습니다.");
            return;
        }
        fileData.append(photos[i].name, photos[i]);
        //PhotoName = photos[i].name;
        FileName.push({ "Name": photos[i].name, "Value": "Y" });
    }

    var params = { "InfoList": InfoArr,
        "FileNameList": FileName,
        "TodayLawyer": $("input[name=TodayLawyer]:checked").val(),
        "Memo": JSON.stringify($("#Memo").val()),
        "UserName": $("#UserName").val(),
        "UserEmail": $("#UserEmail").val(),
        "UserPhone": $("#UserPhone").val(),
        "RegUserCode" : ""
    }

    $.ajax({
        type: "POST",
        url: "/Lawyer/SetWinningCase/",
        contentType: "application/json",
        dataType: "JSON",
        data: JSON.stringify(params),
        success: function (result) {
            if (result[0][0]["ResultCode"] == "0") {
                if (FileName.length > 0) {
                    for (var i = 0; i < result[1].length; i++) {
                        fileData.append("FilePath", result[1][0]["FilesRoot"]);
                        fileData.append("RealFileName_" + i, result[1][i]["RealFileName"]);
                        fileData.append("sFileName_" + i, result[1][i]["sFileName"]);
                    }
                    fileData.append("FileCnt", result[1].length);

                    //FileUpload
                    $("#bg_screen").show();
                    $.ajax({
                        type: "POST",
                        url: "/Lawyer/SetWinningFileUpload/",
                        data: fileData,
                        contentType: false,
                        processData: false,
                        success: function (result) {
                            alert("신청이 완료되었습니다.");
                            window.close();
                        },
                        error: function (e) {
                            alert("파일업로드에 실패하였습니다. 잠시후 다시 시도해주세요");
                            $("#bg_screen").hide();
                        },
                        complete: function () {
                            $("#bg_screen").hide();
                        }
                    });
                } else {
                    alert("신청이 완료되었습니다.");
                    window.close();
                }
            }
        },
        error: function (e) {
            //location.href = "/Payment/OrderFail/";
        },
        complete: function () {
            $("#bg_screen").hide();
        }
    });
}