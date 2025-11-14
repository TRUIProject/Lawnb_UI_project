var JobLayer = "";
function SetTitle(Did) {
    RegistLevel(1);
    var params = { "Did": Did }
    sendNonBlockingAjaxJsonRequest("/Lawyer/GetLawyerData/", params, function (result) {
        CodeSetting(result[0], result[1], result[2]);

        //수정일시
        if (Did != "") {
            var LawyerData = JSON.parse("[" + result[4][0]["People_Xml"] + "]");
            ModifyData(LawyerData[0]["document"]);
            //console.log(LawyerData[0]["document"]["base_information"]["p_name"]["name_1"]);
            $("#ExamModifyLayer").show();
            $("#SchoolModifyLayer").show();
            $("#CareerModifyLayer").show();
            $("#EtcModifyLayer").show();
        }
    });
}

function CodeSetting(JobCode, TaskCode, TestCode) {
    var JobContents = "<option value=\"\">선택</option>";
    for (var i = 0; i < JobCode.length; i++) {
        JobContents += "<option value=\"" + JobCode[i]["Org_Code_Id"] + "\">" + JobCode[i]["Org_Code_Name"] + "</option>";
    }
    $("#p_job__1").html(JobContents);

    var TaskContents = "";
    for (var i = 0; i < TaskCode.length; i++) {
        TaskContents += "<label><input type=\"checkbox\" name=\"treated__1[]\" value=\"" + TaskCode[i]["Cat_Idx"] + "\" onclick=\"javascript:Checktreated('__1',this);\">" + TaskCode[i]["Cat_Name"] + "</label> ";
    }
    $("#TaskLayer__1").html(TaskContents);

    var TestContents = "<option value=\"\">선택</option>";
    for (var i = 0; i < TestCode.length; i++) {
        TestContents += "<option value=\"" + TestCode[i]["Org_Code_Id"] + "\">" + TestCode[i]["Org_Code_Name"] + "</option>";
    }
    $("#p_exam_name_1").html(TestContents);
    $("#p_exam_name_2").html(TestContents);

    JobLayer = $("#JobLayer").html();
}

//메인 이미지 업로드
function ImgAdd() {
    $("#imagefile").click();
}

//메인 이미지 미리보기
function ImageCheck() {
    var file = $("#imagefile").get(0).files[0];
    var reader = new FileReader();
    reader.onload = function () {
        $("#PreviewImg").prop("src", reader.result);
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {
        $("#PreviewImg").prop("src", "/lbimg/peopdata/tr_lawyer_default.png");
    }
}

//직업변경 
function JobChange(id) {
    var SelectJob = $("#p_job" + id).val();
    if (SelectJob == "1012") { //변호사
        $("#WorkAreaLayer" + id).show();
        $("#ForeignLayer" + id).show();
        $("#ExpertiseLayer" + id).show();
        $("#TreatedLayer" + id).show();
    } else {
        $("#WorkAreaLayer" + id).hide();
        $("#ForeignLayer" + id).hide();
        $("#ExpertiseLayer" + id).hide();
        $("#TreatedLayer" + id).hide();
    }
    if (SelectJob == "1014") { //교수
        $("#SubjectLayer" + id).show();
    } else {
        $("#SubjectLayer" + id).hide();
    }
}

//시험정보변경
function Examchange() {
    if ($("#p_exam_name_1").val() == "1020" || $("#p_exam_name_2").val() == "1020") {
        $("#TrainLayer").show();
    } else {
        $("#TrainLayer").hide();
    }
}

//주요업무분야 체크
function Checktreated(id, obj) {
    /*
    var CheckedList = [];
    var i = 0;
    $("input[name='treated" + id + "[]']:checked").each(function () {
        if (CheckedList.length >= 5) {
            alert("5개이상 체크불가");
            obj.checked = false;
            return;
        }
        CheckedList[i] = this.value;
        i++;
    });
    */
}

//겸직추가
function AddWork() {
    JobLayer = JobLayer.replace(/__1/g, "__2");
    $("#AddJob").html(JobLayer);
    $("#AddJob").show();
    $("#AddWorkBtn").hide();
}

//학교추가
var UniversityID = 0;
var GraduateID = 0;
var LawschoolID = 0;
function AddSchool(Type) {
    var Contents = "";
    if (Type == "U") {
        UniversityID++;
        Contents += $("#SchoolUniversityLayer").html();
        Contents = Contents.split("<!--SInput-->")[1].split("<!--EInput-->")[0];
        Contents = Contents.replace(/\[1\]\[0\]/g, "[1][" + UniversityID + "]");
        $("#SchoolUniversityLayer").append(Contents);
    } else if (Type == "G") {
        GraduateID++;
        Contents += $("#SchoolGraduate").html();
        Contents = Contents.split("<!--SInput-->")[1].split("<!--EInput-->")[0];
        Contents = Contents.replace(/\[2\]\[0\]/g, "[2][" + GraduateID + "]");
        $("#SchoolGraduate").append(Contents);
    } else if (Type == "L") {
        LawschoolID++;
        Contents += $("#SchoolLawschool").html();
        Contents = Contents.split("<!--SInput-->")[1].split("<!--EInput-->")[0];
        Contents = Contents.replace(/\[3\]\[0\]/g, "[3][" + LawschoolID + "]");
        $("#SchoolLawschool").append(Contents);
    }
}

//경력추가
var CareerID = 0;
var SocialID = 0;
function AddCareer(Type) {
    var Contents = "";
    if (Type == "C") {
        CareerID++;
        Contents += $("#CareerLayer").html();
        Contents = Contents.split("<!--SInput-->")[1].split("<!--EInput-->")[0];
        Contents = Contents.replace(/\[0\]/g, "[" + CareerID + "]");
        $("#CareerLayer").append(Contents);
    } else if (Type == "S") {
        SocialID++;
        Contents += $("#SocialLayer").html();
        Contents = Contents.split("<!--SInput-->")[1].split("<!--EInput-->")[0];
        Contents = Contents.replace(/\[0\]/g, "[" + SocialID + "]");
        $("#SocialLayer").append(Contents);
    }
}

//전문활동추가
var EtcID = 0;
function AddEtc() {
    var Contents = "";
    EtcID++;
    Contents += $("#EtcLayer").html();
    Contents = Contents.split("<!--SInput-->")[1].split("<!--EInput-->")[0];
    Contents = Contents.replace(/\[0\]/g, "[" + EtcID + "]");
    $("#EtcLayer").append(Contents);
}

//첨부파일 체크
function FileCheck() {
    var files = $("#sFileName").get(0).files;
    var FileNameLayerContents = "";
    for (var i = 0; i < files.length; i++) {
        FileNameLayerContents += files[i].name;
        FileNameLayerContents += " [<a href=\"#\" onclick=\"javascript:FileDelete();return false;\">삭제</a>]";
    }
    $("#FilenameLayer").html(FileNameLayerContents);
    $("#FilenameLayer").show();
}
function FileDelete() {
    $("#sFileName").val("");
    $("#FilenameLayer").html("");
    $("#FilenameLayer").hide();
}

//다음단계
function RegistLevel(id) {
    if (NP == "1") {
        if (!$("input[name=p_gender]").is(":checked")) { alert("필수항목을 입력하셔야 합니다."); return; }
    } else if (NP == "2") {
        if ($("#p_job__1").val() == "") { alert("필수항목을 입력하셔야 합니다."); return; }
        if ($("#p_job__2")) { if ($("#p_job__2").val() == "") { alert("필수항목을 입력하셔야 합니다."); return; } }
    }
    for (var i = 0; i <= 7; i++) {
        $("#RegistLevel_" + i).removeClass("_this");
        $("#RegistLayerLevel_" + i).hide();
    }
    $("#RegistLevel_" + id).addClass("_this");
    $("#RegistLayerLevel_" + id).show();
    NP = id;
}

//등록체크
function SetConfirm() {
    if ($("input[name=p_gender]").is(":checked")) {
        check1 = "1";
    }

    if ($("#p_job__1").val() != "") {
        check2 = "1";
    } else {
        check2 = "0";
    }

    if (check1 != "0" && check2 != "0") {
        if (!confirm("신청사항을 모두 작성하셨습니까?")) {
            return;
        } else {
            ApplyRegist();
        }
    } else {
        alert("필수항목을 먼저 입력해주세요");
        return;
    }
}


//수정등록체크
function SetModifyConfirm() {
   
    if ($.trim($("#Voc_Req_Cont").val()) == "") {
        alert("수정 요청사항을을 먼저 입력해주세요");
        return;
    }
    else {
        if (!confirm("수정 요청사항을 모두 작성하셨습니까?")) {
            return;
        } else {
            
            var filename = "";
            var sfiles = $("#sFileName").get(0).files;        
            var fileData = new FormData();
            for (var i = 0; i < sfiles.length; i++) {
                if (sfiles[i].size > 5000000) {
                    alert("첨부파일의 용량이 5MB를 초과하였습니다.");
                    return;
                }
                fileData.append(sfiles[i].name, sfiles[i]);
                filename = sfiles[i].name;
            }

            var params = { "VocType": "213", "VocReqCont": $("#Voc_Req_Cont").val(), "Did": Did, "VocReqFile": filename }
            sendNonBlockingAjaxJsonRequest("/Lawyer/SetLawyerVocModify/", params, function (result) {
                if (result[0]["ResultCode"] == "0") {
                    //File Upload
                    if (filename != "") {
                        $("#bg_screen").show();
                        $.ajax({
                            type: "POST",
                            url: "/Lawyer/LawyerFileUpload/",
                            data: fileData,
                            //cache: false,
                            contentType: false,
                            processData: false,
                            success: function (result) {
                                location.href = "/Lawyer/RegistConfirm/?AddType=M";
                            },
                            error: function (e) {
                                alert("수정 요청사항이 정상적으로 등록되었으나 파일업로드가 정상적으로 이루어지지 않았습니다. 1:1문의를 통하여 연락부탁드립니다.");
                                $("#bg_screen").hide();
                            },
                            complete: function () {
                                $("#bg_screen").hide();
                            }
                        });
                    } else {
                        location.href = "/Lawyer/RegistConfirm/?AddType=M";
                    }
                } else {
                    alert("수정 요청이 실패하였습니다. 해당문제가 지속되면 1:1문의를 통해 연락부탁드립니다.");
                    window.close();
                }
            });
        }
    }
}


//등록
function ApplyRegist() {
    //basic
    var p_name = { "name_1": UserName, "name_2": $("#p_name_2").val(), "name_ch": $("#p_name_ch").val() }
    var p_information = { "p_email": $("#p_email").val(), "p_homepage": $("#p_homepage").val() }
    //work
    var treated_1 = [];
    $("input[name='treated__1[]']:checked").each(function () {
        treated_1.push({ "@code": this.value, "#text": this.value });
    });
    var p_treated_1 = { "treated": treated_1 }
    var p_field = [{ "p_expertise": "", //$("#p_expertise__1").val(),
        "p_treated": "", //p_treated_1,
        "p_subject": "" //$("#p_subject__1").val()
    }]
    
    var treated_2 = [];
    $("input[name='treated__2[]']:checked").each(function () {
        treated_2.push({ "@code": this.value, "#text": this.value });
    });
    var p_treated_2 = { "treated": treated_2 }
//    if ($("#p_expertise__2").val() != undefined) {
//        p_field.push({ "p_expertise": $("#p_expertise__2").val(),
//            "p_treated": p_treated_2,
//            "p_subject": $("#p_subject__2").val()
//        });
//    }

    //실Table에 맞춘 Data // 현직/겸직 변호사And변호사 교수And교수 중복 불가
    if ($("#p_job__1").val() == "1012") {
        p_field[0]["p_expertise"] = $("#p_expertise__1").val();
        p_field[0]["p_treated"] = p_treated_1;
    } else if ($("#p_job__2").val() == "1012") {
        p_field[0]["p_expertise"] = $("#p_expertise__2").val();
        p_field[0]["p_treated"] = p_treated_2;
    }

    if ($("#p_job__1").val() == "1014") {
        p_field[0]["p_subject"] = $("#p_subject__1").val()
    } else if ($("#p_job__2").val() == "1014") {
        p_field[0]["p_subject"] = $("#p_subject__2").val()
    }
    ///

    var photoname = "";
    var files = $("#imagefile").get(0).files;
    var fileData = new FormData();
    for (var i = 0; i < files.length; i++) {
        if (files[i].size > 10000000) {
            alert("첨부파일의 용량이 10MB를 초과하였습니다.");
            return;
        }
        fileData.append(files[i].name, files[i]);
        photoname = files[i].name;
    }
//    if (files.length > 0) {
//        filename = files[0].name;
//    }
    if (photoname == "") {
        if ($("#PreviewImg").attr("src").split("/lbimg/peopdata/")[1] != "") {
            photoname = $("#PreviewImg").attr("src").split("/lbimg/peopdata/")[1];
        }
    }
    var base_information = { "p_photo": photoname,
        "p_name": p_name,
        "p_gender": $("input[name=p_gender]:checked").val(),
        "p_birth": $("#p_birth").val(),
        "p_information": p_information,
        "p_field": p_field,
        "p_addr": $("#p_addr").val(),
        "p_phone": $("#p_phone").val()
    }

    var p_work = [{ "@type": "C",
        "p_job": { "@code": $("#p_job__1").val(), "#text": $("#p_job__1 option:selected").text() },
        "p_position": { "@code": "0", "#text": $("#p_position__1").val() },
        "p_work_area": { "@code": "0", "#text": $("#p_work_area__1").val() },
        "p_foreign": $("#p_foreign_country__1").val() + " " + $("#p_foreign__1").val(),
        "p_work_name": { "@code": "0", "#text": $("#p_work_name__1").val() },
        "p_group": $("#p_group__1").val(),
        "p_department": $("#p_department__1").val(),
        "p_phone": $("#p_w_phone__1").val(),
        "p_fax": $("#p_w_fax__1").val(),
        "p_w_email": $("#p_w_email__1").val(),
        "p_w_hompage": $("#p_w_hompage__1").val(),
        "p_w_addr": $("#p_w_addr__1").val()
    }]
    if ($("#p_job__2").val()) {
        p_work.push({ "@type": "A",
            "p_job": { "@code": $("#p_job__2").val(), "#text": $("#p_job__2 option:selected").text() },
            "p_position": { "@code": "0", "#text": $("#p_position__2").val() },
            "p_work_area": { "@code": "0", "#text": $("#p_work_area__2").val() },
            "p_foreign": $("#p_foreign_country__2").val() + " " + $("#p_foreign__2").val(),
            "p_work_name": { "@code": "0", "#text": $("#p_work_name__2").val() },
            "p_group": $("#p_group__2").val(),
            "p_department": $("#p_department__2").val(),
            "p_phone": $("#p_w_phone__2").val(),
            "p_fax": $("#p_w_fax__2").val(),
            "p_w_email": $("#p_w_email__2").val(),
            "p_w_hompage": $("#p_w_hompage__2").val(),
            "p_w_addr": $("#p_w_addr__2").val()
        });
    }
    var work_information = { "p_work": p_work, "etc_work": $("#etc_work").val() }
    //exam
    var p_exam = []
    if ($("#p_exam_name_1").val() != "" || $("#p_exam_num_1").val() != "") {
        p_exam.push({   "@type": $("#p_exam_name_1").val(),
                        "p_exam_name": $("#p_exam_name_1 option:selected").text(),
                        "p_exam_num": $("#p_exam_num_1").val() 
                    });
    }
    if ($("#p_exam_name_2").val() != "" || $("#p_exam_num_2").val() != "") {
        p_exam.push({   "@type": $("#p_exam_name_2").val(),
                        "p_exam_name": $("#p_exam_name_2 option:selected").text(),
                        "p_exam_num": $("#p_exam_num_2").val() 
                    });
    }

    var exam_information = { "p_exam": p_exam, "p_train": $("#p_train").val(), "etc_exam": $("#etc_exam").val() }
    //school
    var p_school = []
    if ($("input[name='school_name[0][0]']").val() != "") {
        p_school.push({ "@type": "0",
            "p_school_foreign": $("input[name='school_foreign[0][0]']:checked").val(),
            "p_school_name": { "@code": "0", "#text": $("input[name='school_name[0][0]']").val() },
            "p_school_major": "",
            "p_school_graduation": "",
            "p_school_s_year": $("input[name='school_sdate[0][0]']").val(),
            "p_school_e_year": $("input[name='school_edate[0][0]']").val(),
            "p_school_certificate": {
                "p_school_c_type": "",
                "p_school_c_status": ""
            }
        });
    }
    //대학교
    for (var i = 0; i <= UniversityID; i++) {
        if ($("input[name='school_name[1][" + i + "]']").val() != "") {
            p_school.push({ "@type": "1",
                "p_school_foreign": $("input[name='school_foreign[1][" + i + "]']:checked").val(),
                "p_school_name": { "@code": "0", "#text": $("input[name='school_name[1][" + i + "]']").val() },
                "p_school_major": $("input[name='school_major[1][" + i + "]']").val(),
                "p_school_graduation": "",
                "p_school_s_year": $("input[name='school_sdate[1][" + i + "]']").val(),
                "p_school_e_year": $("input[name='school_edate[1][" + i + "]']").val(),
                "p_school_certificate": {
                    "p_school_c_type": "",
                    "p_school_c_status": ""
                }
            });
        }
    }
    //대학원
    for (var i = 0; i <= GraduateID; i++) {
        if ($("input[name='school_name[2][" + i + "]']").val() != "") {
            p_school.push({ "@type": "2",
                "p_school_foreign": $("input[name='school_foreign[2][" + i + "]']:checked").val(),
                "p_school_name": { "@code": "0", "#text": $("input[name='school_name[2][" + i + "]']").val() },
                "p_school_major": $("input[name='school_major[2][" + i + "]']").val(),
                "p_school_graduation": $("input[name='school_graduation[2][" + i + "]']:checked").val(),
                "p_school_s_year": $("input[name='school_sdate[2][" + i + "]']").val(),
                "p_school_e_year": $("input[name='school_edate[2][" + i + "]']").val(),
                "p_school_certificate": {
                    "p_school_c_type": $("input[name='school_grade[2][" + i + "]']:checked").val(),
                    "p_school_c_status": ""
                }
            });
        }
    }
    //로스쿨
    for (var i = 0; i <= LawschoolID; i++) {
        if ($("input[name='school_name[3][" + i + "]']").val() != "") {
            p_school.push({ "@type": "4",
                "p_school_foreign": $("input[name='school_foreign[3][" + i + "]']:checked").val(),
                "p_school_name": { "@code": "0", "#text": $("input[name='school_name[3][" + i + "]']").val() },
                "p_school_major": $("input[name='school_major[3][" + i + "]']").val(),
                "p_school_graduation": $("input[name='school_graduation[3][" + i + "]']:checked").val(),
                "p_school_s_year": $("input[name='school_sdate[3][" + i + "]']").val(),
                "p_school_e_year": $("input[name='school_edate[3][" + i + "]']").val(),
                "p_school_certificate": {
                    "p_school_c_type": $("input[name='school_grade[3][" + i + "]']:checked").val(),
                    "p_school_c_status" : ""
                }
            });
        }
    }
    var school_information = { "p_school": p_school, "etc_school": $("#etc_school").val() }

    //career
    var p_career = []
    for (var i = 0; i <= CareerID; i++) {
        if ($("input[name='career_work_name[" + i + "]']").val() != "" || $("input[name='career_s_date[" + i + "]']").val() != "" ||
            $("input[name='career_e_date[" + i + "]']").val() != "") {
            p_career.push({ "p_career_work_name": { "@code": "0", "#text": $("input[name='career_work_name[" + i + "]']").val() },
                "p_career_position": { "@code": "0" },
                "p_career_group": "",
                "p_career_department": "",
                "p_career_s_date": $("input[name='career_s_date[" + i + "]']").val(),
                "p_career_e_date": $("input[name='career_e_date[" + i + "]']").val()
            });
        }
    }
    var career_information = { "p_career": p_career, "etc_career": $("#etc_career").val() }

    //social
    var p_social = []
    for (var i = 0; i <= SocialID; i++) {
        if ($("input[name='social_name[" + i + "]']").val() != "" || $("input[name='social_s_date[" + i + "]']").val() != "" ||
            $("input[name='social_e_date[" + i + "]']").val() != "") {
            p_social.push({ "p_social_name": $("input[name='social_name[" + i + "]']").val(),
                "p_social_s_date": $("input[name='social_s_date[" + i + "]']").val(),
                "p_social_e_date": $("input[name='social_e_date[" + i + "]']").val()
            });
        }
    }
    var p_social_information = { "p_social": p_social }

    //etc
    var p_counsel = []
    var p_award = []
    var p_news = []
    var p_book = []
    var p_etc = []
    for (var i = 0; i <= EtcID; i++) {
        if ($("select[name='etc_information[" + i + "]']").val() == "counsel") {
            p_counsel.push({ "p_counsel_name": $("input[name='etc_name[" + i + "]']").val(),
                "p_counsel_date": $("input[name='etc_date[" + i + "]']").val(),
                "p_counsel_etc": $("input[name='etc_src[" + i + "]']").val()
            });
        }
        if ($("select[name='etc_information[" + i + "]']").val() == "award") {
            p_award.push({ "p_award_name": $("input[name='etc_name[" + i + "]']").val(),
                "p_award_date": $("input[name='etc_date[" + i + "]']").val(),
                "p_award_etc": $("input[name='etc_src[" + i + "]']").val()
            });
        }
        if ($("select[name='etc_information[" + i + "]']").val() == "news") {
            p_news.push({ "p_news_name": $("input[name='etc_name[" + i + "]']").val(),
                "p_news_date": $("input[name='etc_date[" + i + "]']").val(),
                "p_news_src": $("input[name='etc_src[" + i + "]']").val(),
                "p_news_link": ""
            });
        }
        if ($("select[name='etc_information[" + i + "]']").val() == "book") {
            p_book.push({ "p_book_name": $("input[name='etc_name[" + i + "]']").val(),
                "p_book_date": $("input[name='etc_date[" + i + "]']").val(),
                "p_book_etc": $("input[name='etc_src[" + i + "]']").val()
            });
        }
        if ($("select[name='etc_information[" + i + "]']").val() == "etc") {
            p_etc.push({ "p_etc_name": $("input[name='etc_name[" + i + "]']").val(),
                "p_etc_date": $("input[name='etc_date[" + i + "]']").val(),
                "p_etc_etc": $("input[name='etc_src[" + i + "]']").val()
            });
        }
    }
    var p_counsel_information = { "p_counsel": p_counsel }
    var p_award_information = { "p_award": p_award }
    var p_news_information = { "p_news": p_news }
    var p_book_information = { "p_book": p_book }
    var p_etc_information = { "p_etc": p_etc }
    
    var etc_information = { "p_counsel_information": p_counsel_information,
        "p_award_information": p_award_information,
        "p_social_information": p_social_information,
        "p_news_information": p_news_information,
        "p_book_information": p_book_information,
        "p_etc_information": p_etc_information,
        "etc_etc": $("#etc_etc").val()
    }
    var filename = "";
    var sfiles = $("#sFileName").get(0).files;
//    if (sfiles.length > 0) {
//        filename = sfiles[0].name;
//    }
    for (var i = 0; i < sfiles.length; i++) {
        if (sfiles[i].size > 10000000) {
            alert("첨부파일의 용량이 10MB를 초과하였습니다.");
            return;
        }
        fileData.append(sfiles[i].name, sfiles[i]);
        filename = sfiles[i].name;
    }

    var Voc_People_Xml = { "doc_type": { "@code": "P000", "#text": "법조인" },
        "base_information": base_information,
        "work_information": work_information,
        "exam_information": exam_information,
        "school_information": school_information,
        "career_information": career_information,
        "etc_information": etc_information,
        "etc_text": $("#etc_Add").val(),
        "etc_file": filename
    }
    if (Did != "") {
        var params = { "VocType": "213", "VocXml": JSON.stringify(Voc_People_Xml), "Did": Did }
    } else {
        var params = { "VocType": "212", "VocXml": JSON.stringify(Voc_People_Xml), "Did": "" }
    }

    sendNonBlockingAjaxJsonRequest("/Lawyer/SetLawyerVoc/", params, function (result) {
        if (result[0]["ResultCode"] == "0") {
            //File Upload
            if (filename != "" || photoname != "") {
                $("#bg_screen").show();
                $.ajax({
                    type: "POST",
                    url: "/Lawyer/LawyerFileUpload/",
                    data: fileData,
                    //cache: false,
                    contentType: false,
                    processData: false,
                    success: function (result) {
                        location.href = "/Lawyer/RegistConfirm/?AddType=A";
                    },
                    error: function (e) {
                        alert("요청사항이 정상적으로 등록되었으나 파일업로드가 정상적으로 이루어지지 않았습니다. 1:1문의를 통하여 연락부탁드립니다.");
                        $("#bg_screen").hide();
                    },
                    complete: function () {
                        $("#bg_screen").hide();
                    }
                });
            } else {
                location.href = "/Lawyer/RegistConfirm/?AddType=A";
            }
        } else {
            alert("등록 요청이 실패하였습니다. 해당문제가 지속되면 1:1문의를 통해 연락부탁드립니다.");
            window.close();
        }
    });
}

//필수항목에 따른 작성완료 버튼 변경
function btnchange() {
    if ($("input[name=p_gender]").is(":checked")) { check1 = "1"; } else { check1 = "0"; }
    if ($("#p_job").val() != "") { check2 = "1"; } else { check1 = "0"; }
    //if (check1 != "0" && check2 != "0") { $("#SetConfirm").show(); }
    //else { $("#SetConfirm").hide(); }
}

//수정시 Data Load
function ModifyData(data) {
    var Contents = "";
    var TempData = "";
    var Cnt = 0;
    //Basic
    $("#PreviewImg").prop("src", "/lbimg/peopdata/" + data["base_information"]["p_photo"]);
    $("#p_name_2").val(data["base_information"]["p_name"]["name_2"]);
    $("#p_name_ch").val(data["base_information"]["p_name"]["name_ch"]);
    $("input[name=p_gender][value=" + data["base_information"]["p_gender"] + "]").prop("checked", true);
    $("#p_birth").val(data["base_information"]["p_birth"]);
    $("#p_homepage").val(data["base_information"]["p_information"]["p_homepage"]);
    $("#p_email").val(data["base_information"]["p_information"]["p_email"]);
    $("#p_phone").val();    //현재없음
    $("#p_addr").val();     //현재없음
    //Job
    if (data["work_information"] != undefined) {
        if (data["work_information"]["p_work"].length != undefined) {
            for (var i = 0; i < data["work_information"]["p_work"].length; i++) {
                if (data["work_information"]["p_work"][i]["@type"] == "C") {
                    JobCodeSet('__1', data["work_information"]["p_work"][i], data["base_information"]["p_field"]);
                } else if (data["work_information"]["p_work"][i]["@type"] == "A") {
                    JobCodeSet('__2', data["work_information"]["p_work"][i], data["base_information"]["p_field"]);
                    AddWork();
                }
            }
        } else {//직업이 1개일시
            if (data["work_information"]["p_work"]["@type"] == "C") {
                JobCodeSet('__1', data["work_information"]["p_work"], data["base_information"]["p_field"]);
            }
        }
    }
    //Exam
    Cnt = 0;
    if (data["exam_information"] != undefined) {
        if (data["exam_information"]["p_exam"].length != undefined) {
            Cnt += data["exam_information"]["p_exam"].length;
        }
    }
    Contents = "";
    Contents += "<div class=\"prev_text_info\">";
    Contents += "<em>현재 입력된 시험정보  " + Cnt + "건</em><br>";
    if (data["exam_information"] != undefined) {
        if (data["exam_information"]["p_exam"].length != undefined) {
            Contents += "<span>";
            for (var i = 0; i < data["exam_information"]["p_exam"].length; i++) {
                Contents += data["exam_information"]["p_exam"][i]["p_exam_name"] + " " + data["exam_information"]["p_exam"][i]["p_exam_num"] + "회, ";
            }
            Contents = Contents.substring(0, Contents.length - 2);
            Contents += "</span>";
        } 
    }
    Contents += "</div><div class=\"mgb20 txt_info\">기존 입력 정보 외에 추가로 합격한 시험이 있으면 입력하세요. </div>";
    $("#ExamModifyLayer").html(Contents);
    $("#ExamModifyLayer").show();

    //School
    Cnt = 0;
    if (data["school_information"] != undefined) {
        if (data["school_information"]["p_school"].length != undefined) {
            Cnt += data["school_information"]["p_school"].length;
        }
    }
    Contents = "";
    Contents += "<div class=\"prev_text_info\">";
    Contents += "<em>현재 입력된 학교정보  " + Cnt + "건</em><em class=\"txt_info total_view\">전체보기</em><br>";
    if (data["school_information"] != undefined) {
        if (data["school_information"]["p_school"].length != undefined) {
            for (var i = 0; i < data["school_information"]["p_school"].length; i++) {
                Contents += "<span>" + data["school_information"]["p_school"][i]["p_school_name"]["#text"] + " ";
                if (data["school_information"]["p_school"][i]["p_school_major"] != undefined) {
                    Contents += data["school_information"]["p_school"][i]["p_school_major"] + " ";
                }
                if (data["school_information"]["p_school"][i]["p_school_certificate"]["p_school_c_type"] != undefined) {
                    Contents += data["school_information"]["p_school"][i]["p_school_certificate"]["p_school_c_type"] + " ";
                }
                Contents += GetStringDate(data["school_information"]["p_school"][i]["p_school_s_year"]) + " ~ " + GetStringDate(data["school_information"]["p_school"][i]["p_school_e_year"]);
                if (data["school_information"]["p_school"][i]["p_school_graduation"] != undefined) {
                    Contents += " " + data["school_information"]["p_school"][i]["p_school_graduation"];
                }
                Contents += "</span><br>";
            }
        }
    }
	Contents += "</div>";
	Contents += "<div class=\"mgb20 txt_info\">기존 입력 정보 외에 추가로 졸업, 재학중인 학교가 있으면 입력해 주세요.</div>";
    $("#SchoolModifyLayer").html(Contents);
    $("#SchoolModifyLayer").show();

    //Career
    Cnt = 0;
    if (data["career_information"] != undefined) {
        if (data["career_information"]["p_career"].length != undefined) {
            Cnt += data["career_information"]["p_career"].length;
        }
    }
    if (data["etc_information"]["p_social_information"] != undefined) {
        if (data["etc_information"]["p_social_information"]["p_social"].length != undefined) {
            Cnt += data["etc_information"]["p_social_information"]["p_social"].length;
        }
    }
    Contents = "";
    Contents += "<div class=\"prev_text_info\">";
    Contents += "<em>현재 입력된 경력/사회활동 정보 " + Cnt + "건</em><em class=\"txt_info total_view\">전체보기</em><br>";
    if (data["career_information"]["p_career"].length != undefined) {
        for (var i = 0; i < data["career_information"]["p_career"].length; i++) {
            Contents += "<span>" + data["career_information"]["p_career"][i]["p_career_work_name"]["#text"];
            Contents += GetStringDate(data["career_information"]["p_career"][i]["p_career_s_date"]) + " ~ " + GetStringDate(data["career_information"]["p_career"][i]["p_career_e_date"]);
            Contents += "</span><br>";
        }
    }
    if (data["etc_information"]["p_social_information"] != undefined){
        if (data["etc_information"]["p_social_information"]["p_social"].length != undefined) {
            for (var i = 0; i < data["etc_information"]["p_social_information"]["p_social"].length; i++) {
                if (data["etc_information"]["p_social_information"]["p_social"][i]["p_social_name"] != undefined) {
                    Contents += "<span>" + data["etc_information"]["p_social_information"]["p_social"][i]["p_social_name"];
                    if (data["etc_information"]["p_social_information"]["p_social"][i]["p_social_s_date"] != undefined && data["etc_information"]["p_social_information"]["p_social"][i]["p_social_e_date"] != undefined) {
                        Contents += GetStringDate(data["etc_information"]["p_social_information"]["p_social"][i]["p_social_s_date"]) + " ~ " + GetStringDate(data["etc_information"]["p_social_information"]["p_social"][i]["p_social_e_date"]);
                    }
                    Contents += "</span><br>";
                }
            }
        }
    }
    Contents += "</div>";
    Contents += "<div class=\"mgb20 txt_info\">기존 입력 정보 외 추가 경력/사회활동을 입력해 주세요.</div>";
    $("#CareerModifyLayer").html(Contents);
    $("#CareerModifyTitleLayer").show();
    $("#CareerModifyLayer").show();

    //Etc
    Cnt = 0;
    if (data["etc_information"]["p_counsel_information"] != undefined) {
        if (data["etc_information"]["p_counsel_information"]["p_counsel"].length != undefined) {
            Cnt += data["etc_information"]["p_counsel_information"]["p_counsel"].length;
        }
    }
    if (data["etc_information"]["p_award_information"] != undefined) {
        if (data["etc_information"]["p_award_information"]["p_award"].length != undefined) {
            Cnt += data["etc_information"]["p_award_information"]["p_award"].length;
        }
    }
    if (data["etc_information"]["p_news_information"] != undefined) {
        if (data["etc_information"]["p_news_information"]["p_news"].length != undefined) {
            Cnt += data["etc_information"]["p_news_information"]["p_news"].length;
        }
    }
    if (data["etc_information"]["p_etc_information"] != undefined) {
        if (data["etc_information"]["p_etc_information"]["p_etc"].length != undefined) {
            Cnt += data["etc_information"]["p_etc_information"]["p_etc"].length;
        }
    }
    Contents = "";
    Contents += "<div class=\"prev_text_info\">";
    Contents += "<em>현재 입력된 전문활동 정보 " + Cnt + "건</em><em class=\"txt_info total_view\">전체보기</em><br>";
    Contents += EtcContentsSet(data, 'p_counsel');
    Contents += EtcContentsSet(data, 'p_award');
    Contents += EtcContentsSet(data, 'p_news');
    Contents += EtcContentsSet(data, 'p_book');
    Contents += EtcContentsSet(data, 'p_etc');
	Contents += "</div>";
    Contents += "<div class=\"mgb20 txt_info\">기존 입력 정보 외 추가 전문활동을 입력해 주세요. 보도기사, 저서, 논문기고  중 로앤비에 있는 자료는 링크로 연결해 드립니다. </div> ";

    $("#EtcModifyLayer").html(Contents);
    $("#EtcModifyLayer").show();

}

function JobCodeSet(id, workdata, basedata) {
    $("#p_job" + id).val(workdata["p_job"]["@code"]);
    $("#p_work_name" + id).val(workdata["p_work_name"]["#text"]);
    $("#p_position" + id).val(workdata["p_position"]["#text"]);
    $("#p_group" + id).val(workdata["p_group"]);
    $("#p_department" + id).val(workdata["p_department"]);
    $("#p_w_phone" + id).val(workdata["p_phone"]);
    $("#p_w_fax" + id).val(workdata["p_fax"]);
    $("#p_w_email" + id).val(workdata["p_w_email"]);
    $("#p_w_hompage" + id).val(workdata["p_w_hompage"]);
    $("#p_w_addr" + id).val(workdata["p_w_addr"]);

    if (workdata["p_job"]["@code"] == "1012") {//변호사
        $("#p_work_area" + id).val(workdata["p_work_area"]["#text"]);
        if (workdata["p_foreign"] != undefined) {
            $("#p_foreign_country" + id).val(workdata["p_foreign"].split(" ")[0]);
            $("#p_foreign" + id).val(workdata["p_foreign"].split(" ")[1]);
        }
        $("#p_expertise" + id).val(basedata["p_expertise"]);
        if (basedata["p_treated"]) {
            if (basedata["p_treated"]["treated"].length != undefined) {
                for (var k = 0; k < basedata["p_treated"]["treated"].length; k++) {
                    $("input[name='treated" + id + "[]']").each(function () {
                        if (basedata["p_treated"]["treated"][k]["@code"] == this.value) {
                            this.checked = true;
                        }
                    });
                }
            }
        }
    } else if (workdata["p_job"]["@code"] == "1014") {//교수
        $("#p_subject" + id).val(basedata["p_subject"]);
    }
    JobChange(id);
}

function GetStringDate(str) {
    var retval = "";
    if (str.length == 8) {
        if (str.substring(4, 6) != "00" && str.substring(6, 8) != "00") {
            retval = str.substring(0, 4) + "." + str.substring(4, 6) + "." + str.substring(6, 8);
        } else if (str.substring(4, 6) != "00") {
            retval = str.substring(0, 4) + "." + str.substring(4, 6);
        } else {
            retval = str.substring(0, 4);
        }
    } else if (str.length == 6) {
        if (str.substring(4, 6) != "00") {
            retval = str.substring(0, 4) + "." + str.substring(4, 6);
        } else {
            retval = str.substring(0, 4);
        }
    } else {
        retval = str;
    }
    return retval;
}

function EtcContentsSet(data, id) {
    var Contents = "";
    if (data["etc_information"][id + "_information"] != undefined) {
        if (data["etc_information"][id + "_information"][id].length != undefined) {
            for (var i = 0; i < data["etc_information"][id + "_information"][id].length; i++) {
                if (data["etc_information"][id + "_information"][id][i][id + "_name"] != undefined) {
                    Contents += "<span>" + data["etc_information"][id + "_information"][id][i][id + "_name"];
                    if (data["etc_information"][id + "_information"][id][i][id + "_date"] != undefined) {
                        Contents += GetStringDate(data["etc_information"][id + "_information"][id][i][id + "_date"]);
                    }
                    Contents += "</span><br>";
                }
            }
        }
    }
    return Contents;
}

function WinningCase() {
    window.open("/Lawyer/WinningCase/", "_blank", "width=1120,height=600,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0");
}

// 법조인 수정 요청시 연결 정보
function SetView(Did) {
    
    var params = { "Did": Did }
    sendNonBlockingAjaxJsonRequest("/Lawyer/GetLawyerConntectedInfo/", params, function (result) {        
        var LawyerConnectInfoHtml = "";
        if (Did != "") {
            /*
            <div><p>회원 정보</p><span>이름 : 홍길동<br>ID : HongGildong</span></div>
            <div><p>법조인 정보</p><span>홍길동(Hong, Gildong) 洪吉洞 <br>1999년생/ 여자 / (사법시험 50회 / 연수원 40기)</span></div>
            */
            LawyerConnectInfoHtml += "<div><p>회원 정보</p><span>이름 : " + result[0][0]["UserName"] + "<br>ID : " + result[0][0]["UserID"] + "</span></div>";
            LawyerConnectInfoHtml += "<div><p>법조인 정보</p><span>" + result[0][0]["LawyerName1"] + "(" + result[0][0]["LawyerName2"] + ") " + result[0][0]["LawyerNameCH"];
            LawyerConnectInfoHtml += "<br>" + result[0][0]["LawyerBirth"] + "년생/ " + (result[0][0]["Gender"] == "1" ? "여자" : (result[0][0]["Gender"] == "0" ? "남자" : ""));
            LawyerConnectInfoHtml += " / (" + result[0][0]["ExamName"] + " " + result[0][0]["ExamNum"] + "회 / ";
            LawyerConnectInfoHtml += ((result[0][0]["TrainNum"] != "" && result[0][0]["TrainNum"] != undefined) ? "연수원 " + result[0][0]["TrainNum"] + "기" : "") + ")</span></div>";
        }
        $("#LawyerConntedInfo").html(LawyerConnectInfoHtml);
    });
}