function Confirm() {
    if (!$("#ConfirmCheckbox").is(":checked")) {
        alert("개인정보 수집 및 이용에 대한 안내에 동의 후 확인해주세요");
        return;
    }
    var isReqCase = 0;
    if ($("#Title").length > 0) { isReqCase = 1; }

    var UserName = $("#UserName").val();
    var UserEmail = $("#UserEmail").val();
    var UserHP = $("#UserHP").val();
    var BBSQuestion = DefineData("BBSQuestion");
    var CaseNumber = DefineData("CaseNumber");
    var CourtName = DefineData("CourtName");
    var LinkURL = DefineData("LinkURL");
    var Title = (isReqCase == 0)? "" : $("#Title").val() ;
    var Contents = DefineData("Contents");

    if (UserName.trim() == "") {
        alert("이름을 입력해주세요");
        return;
    }

    if (isReqCase == 1) {
        if (UserEmail.trim() == "") {
            alert("이메일을 입력해주세요");
            return;
        }
    } else {
        if (UserHP.trim() == "") {
            alert("휴대폰번호를 입력해주세요");
            return;
        }
    }
  
    if (isReqCase == 1) {
        if (Title.trim() == "") {
            alert("제목을 입력해주세요");
            return
        }
    }
    

    if (BBS == "B01") {
        if (BBSQuestion == "") {
            alert("문의분야를 선택해주세요");
            return
        }
        if (Contents.trim() == "") {
            alert("내용을 입력해주세요");
            return
        }
    } else if (BBS == "B00") {//Beta
        if (Contents.trim() == "") {
            alert("문의내용을 입력해주세요");
            return
        }
    } else {
        if (LinkURL == "" && Contents.trim() == "" && CaseNumber == "") {
            alert("사건번호, 참조기사, 부가설명 중 어느 하나의 항목이라도 내용을 입력하여야 접수가 가능합니다.");
            return;
        }
    }

    var FileName = "";
    var fileData = new FormData();

    if (!checkMobile())
    {
        if (BBS != "B00") {//Beta
            if (isReqCase == 1) {
                var files = $("#sFileName").get(0).files;
                for (var i = 0; i < files.length; i++) {
                    if (files[i].size > 5000000) {
                        alert("첨부파일의 용량이 5MB를 초과하였습니다.");
                        return;
                    }
                    fileData.append(files[i].name, files[i]);
                    FileName = files[i].name;
                }
            }
        }
    }    

    var params = { "UserID": LoginID,
        "UserName": UserName,
        "UserEmail": UserEmail,
        "UserHp": UserHP,
        "BBS": BBS,
        "BBSQuestion": BBSQuestion,
        "QType": QType,
        "ParentsNo": ParentsNo,
        "CaseNumber": CaseNumber,
        "CourtName": CourtName,
        "LinkURL": LinkURL,
        "Title": Title,
        "Contents": JSON.stringify(Contents),
        "sFileName": FileName
    }

    sendNonBlockingAjaxJsonRequest("/Questions/SetOnoToOneContactUs/", params, function (result) {
        var ResultCode = result[0]["ResultCode"];
        var ResultMsg = result[0]["ResultMsg"];
        fileData.append("FilePath", result[0]["FilePath"]);
        fileData.append("RealFileName", result[0]["RealFileName"]);

        if (result[0]["ResultCode"] == "0" && FileName != "")
        {
            $("#bg_screen").show();
            $.ajax({
                type: "POST",
                url: "/Questions/OneToOneFileUpload/",
                data: fileData,
                //cache: false,
                contentType: false,
                processData: false,
                success: function (result) {
                    if (ResultCode == "0") {
                        if (BBS == "B00") {
                            alert("고객님의 피드백이 접수되었습니다. \r\n감사합니다.");
                        } else if (BBS == "B01") {
                            alert("고객님의 문의사항이 접수되었습니다. \r\n평일 근무시간 기준(오전 9시~ 오후 6시) 으로 24시간이내에 답변 드리겠습니다. \r\n감사합니다.");
                        } else if (BBS == "B02") {
                            //alert("판결문 등재 신청이 접수 되었습니다. \r\n신청하신 판결문은 약 2주 이내에 반영이 되지만, 신청법원의 업무처리 속도에 따라 반영에 시간이 조금 더 걸릴 수 있는 점 양해부탁드립니다. \r\n반영이 완료될 경우, 로앤비 페이지에서 알림이 표시되며 기재하신 메일 주소로 안내 메일을 발송해 드립니다.\r\n사건번호불일치 기타 조정사건 등은 반영되지 않을 수 있으며, 등록불가에 대한 안내메일을 보내드립니다.");
                            if (isReqCase == 0){
                                alert("전문 등재 신청이 완료되었습니다. \r\n등재 완료 후 입력하신 휴대폰 번호로 알림을 보내드릴 예정입니다.");
                                window.opener.location.reload();
                            }
                            else {
                                alert("판결문 등재 신청이 접수되었습니다. \r\n반영 완료 후 사이트 상단 알림 페이지 및 기재하신 메일로 안내가 발송됩니다. \r\n※ 사건번호불일치, 기타 법원공개 불가사유로 등재가 불가할 수 있습니다.");
                            }
                            
                        }

                        if ($('.mobile').length > 0)
                        {
                            $('.container_onetoone_popup').empty();
                            $('.container_onetoone_popup').hide();
                        }
                        else {
                            //window.opener.location.reload();
                            window.close();
                        }                        
                    } else {
                        alert("데이터 연결에 실패했습니다. 잠시후 다시 시도해주세요");
                    }
                },
                error: function (e) {
                    alert("데이터 연결에 실패했습니다. 잠시후 다시 시도해주세요");
                    $("#bg_screen").hide();
                },
                complete: function () {
                    $("#bg_screen").hide();
                }
            });
        } else
        {
            if (ResultCode == "0")
            {
                if (BBS == "B00") {
                    alert("고객님의 피드백이 접수되었습니다. \r\n감사합니다.");
                } else if (BBS == "B01") {
                    alert("고객님의 문의사항이 접수되었습니다. \r\n평일 근무시간 기준(오전 9시~ 오후 6시) 으로 24시간이내에 답변 드리겠습니다. \r\n감사합니다.");
                } else if (BBS == "B02") {
                    //alert("판결문 등재 신청이 접수 되었습니다. \r\n신청하신 판결문은 약 2주 이내에 반영이 되지만, 신청법원의 업무처리 속도에 따라 반영에 시간이 조금 더 걸릴 수 있는 점 양해부탁드립니다. \r\n반영이 완료될 경우, 로앤비 페이지에서 알림이 표시되며 기재하신 메일 주소로 안내 메일을 발송해 드립니다.\r\n사건번호불일치 기타 조정사건 등은 반영되지 않을 수 있으며, 등록불가에 대한 안내메일을 보내드립니다.");
                    if (isReqCase == 0) {
                        alert("전문 등재 신청이 완료되었습니다. \r\n등재 완료 후 입력하신 휴대폰 번호로 알림을 보내드릴 예정입니다.");
                    }
                    else
                    {
                        alert("판결문 등재 신청이 접수되었습니다. \r\n반영 완료 후 사이트 상단 알림 페이지 및 기재하신 메일로 안내가 발송됩니다. \r\n※ 사건번호불일치, 기타 법원공개 불가사유로 등재가 불가할 수 있습니다.");
                    }
                }

                if ($('.mobile').length > 0) {
                    $('.container_onetoone_popup').empty();
                    $('.container_onetoone_popup').hide();
                    if (BBS == "B02" && isReqCase == 0) { window.location.reload(); }
                }
                else {
                    //window.opener.location.reload();
                    if (BBS == "B02" && isReqCase == 0) { window.opener.location.reload(); }
                    window.close();
                }                
            } else {
                alert("데이터 연결에 실패했습니다. 잠시후 다시 시도해주세요");
            }
        }
    });
}

function checkMobileForCaseRegistApply() {

}

function FileCheck() {
    var files = $("#sFileName").get(0).files;
    var FileNameLayerContents = "";
    for (var i = 0; i < files.length; i++) {
        FileNameLayerContents += files[i].name;
        FileNameLayerContents += " [<a href=\"#\" onclick=\"javascript:FileDelete();return false;\">삭제</a>]";
    }
    $("#FilenameLayer").show();
    $("#FilenameLayer").html(FileNameLayerContents);
    //fileData
}
function FileDelete() {
    $("#sFileName").val("");
    $("#FilenameLayer").html("");
    $("#FilenameLayer").hide();
}

function DefineData(id) {
    try {
        var retval = "";
        if ($("#" + id)) {
            if ($("#" + id).val()) {
                retval = $("#" + id).val();
            }
        }
        return retval;
    } catch (e) {
        return "";
    }
}