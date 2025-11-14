var AgreeCheck = "0";
var PostSearchCnt = 0;
var NumberRegEx = /^[0-9]+$/;
var ENRegEx = /^[0-9a-zA-Z.,-_]+$/;

function SetTitle() {
    var NowDate = new Date();
    var NowYear = NowDate.getFullYear();
    var NowMonth = NowDate.getMonth() + 1;
    var NowDay = NowDate.getDate();
    SelectboxList("UserBirth3", NowYear - 80, NowYear, "년", NowYear - 35, "desc");
    SelectboxList("UserBirth1", 1, 12, "월", 1, "asc");
    SelectboxList("UserBirth2", 1, 31, "일", 1, "asc");
    JobList();
    AgreeInputSetting();
}

function SelectboxList(id, start, end, selecttext, selectedid, order) {
    var InputSelectboxHTML = "";
    if (order == "asc") {
        for (var i = start; i <= end; i++) {
            if (i == selectedid) {
                InputSelectboxHTML += "<option value='" + i + "' selected='selected'>" + i + selecttext + "</option>";
            } else {
                InputSelectboxHTML += "<option value='" + i + "'>" + i + selecttext + "</option>";
            }
        }
    } else {
        for (var i = end; i >= start; i--) {
            if (i == selectedid) {
                InputSelectboxHTML += "<option value='" + i + "' selected='selected'>" + i + selecttext + "</option>";
            } else {
                InputSelectboxHTML += "<option value='" + i + "'>" + i + selecttext + "</option>";
            }
        }
    }
    $("#" + id).append(InputSelectboxHTML);
}

function JobList() {
    sendNonBlockingAjaxJsonRequest("/Member/SelectJobList/", "", function (result) {
        var optionhtml = "";
        for (var i = 0; i < result.length; i++) {
            optionhtml += "<option value='" + result[i]["code"] + "'> " + result[i]["jobname"] + "</option>";
        }
        $("#UserJobcd").append(optionhtml);
    });
}

function PostLayer_Open() {
    $("#PostLayer").show();
}

function PostLayer_Close() {
    $("#PostLayer").hide();
}

function PostLayer_Search(pagenum) {
    var Post_SearchName = $("#Post_SearchName").val();
    var params = { "SearchWord": Post_SearchName, "PageNum": pagenum };
    $("#bg_screen").show();
    sendNonBlockingAjaxJsonRequest("/Member/PostRoad/", params, function (result) {
        if (result.substring(0, 1) == "(") {
            var Jsondata = JSON.parse(result.substring(1, result.length - 1));
            var errCode = Jsondata.results.common.errorCode;
            var errDesc = Jsondata.results.common.errorMessage;

            if (errCode != "0") {
                $("#ResultAddress").html("<li>" + errDesc + "</li>");
            } else {
                var totalPage = parseInt(Jsondata.results.common.totalCount / Jsondata.results.common.countPerPage);
                SetPaging(pagenum, totalPage);
                ContentViewJson(Jsondata);
            }
            PostSearchCnt = 0;
        } else {
            PostSearchCnt++;
            if (PostSearchCnt < 3) {
                PostLayer_Search(pagenum);
            } else {
                alert("현재 검색이 지연중입니다. 다시 시도해주세요.");
            }
            $("#bg_screen").hide();
        }
    });
    $("#bg_screen").hide();
}


function SetPaging(nowpage, totpage) {
    var Contents = "";
    if (totpage > 0) {
        //Prev
        if (nowpage / 10 > 1) {
            Contents += "<a href=\"#\" onclick=\"javascript:PostLayer_Search( " + (((Math.floor(nowpage / 10) - 1) * 10) + 1) + "); return false;\" class=\"navFirst hiddenLink\">&lt;&lt;</a>";
        }
        if (nowpage > 1) {
            Contents += "<a href=\"#\" onclick=\"javascript:PostLayer_Search(" + (nowpage - 1) + "); return false;\" class=\"navPrevious hiddenLink\">&lt;</a>";
        }

        //Main
        if (Math.ceil(totpage / 10) - Math.ceil(nowpage / 10) > 0) {
            var starti = (Math.ceil(nowpage / 10) * 10) + 1 - 10;
            var lasti = starti + 10;
            for (starti; starti < lasti; starti++) {
                if (starti == nowpage) {
                    Contents += "<span class=\"currentPage\">" + starti + "</span>";
                } else {
                    Contents += "<a href=\"#\" onclick=\"javascript:PostLayer_Search('" + starti + "'); return false;\" class=\"navPages\">" + starti + "</a>";
                }
            }
        } else {
            var starti = (Math.ceil(nowpage / 10) * 10) + 1 - 10;
            for (starti; starti <= totpage; starti++) {
                if (starti == nowpage) {
                    Contents += "<span class=\"currentPage\">" + starti + "</span>";
                } else {
                    Contents += "<a href=\"#\" onclick=\"javascript:PostLayer_Search('" + starti + "'); return false;\" class=\"navPages\">" + starti + "</a>";
                }
            }
        }

        //Next
        if (totpage > nowpage) {
            Contents += "<a href=\"#\" onclick=\"javascript:PostLayer_Search('" + (nowpage + 1) + "'); return false;\" class=\"navNext\">&gt;</a>";
        }
        if (Math.ceil(totpage / 10) - Math.ceil(nowpage / 10) > 0) {
            Contents += "<a href=\"#\" onclick=\"javascript:PostLayer_Search('" + (((Math.floor(nowpage / 10) + 1) * 10) + 1) + "'); return false;\" class=\"navLast\">&gt;&gt;</a>";
        }
    }
    $("#ResultAddresspaging").html(Contents);
}


function ContentViewJson(jsonlist) {
    var list = jsonlist.results.juso;
    var Content = "";
    for (var i = 0; i < list.length; i++) {
        Content += "<li>";
        Content += "<span>(" + list[i].zipNo + ") </span>";
        Content += "<div onclick=\"javascript:SetPost('" + list[i].zipNo + "','" + list[i].roadAddr + "');\">" + list[i].roadAddr + "</div>";
        Content += "<div onclick=\"javascript:SetPost('" + list[i].zipNo + "','" + list[i].jibunAddr + "');\">" + list[i].jibunAddr + "</div>";
        Content += "</li>";
    }
    if (list.length == 0) {
        Content += "<li>검색 결과가 없습니다.</li>";
        $("#ResultAddresspaging").html("");
    }
    $("#ResultAddress").html(Content);
}

function SetPost(zipNo, roadAddr) {
    $("#PostLayer").hide();
    $("#Post_SearchName").val("");
    $("#ResultAddress").html("");
    $("#ResultAddresspaging").html("");
    $("#UserPost1").val(zipNo.substring(0, 3));
    $("#UserPost2").val(zipNo.substring(3, 6));
    $("#UserAddress1").val(roadAddr);
}

//Email SelectBox Change
function EmailSelectchange() {
    if ($("#SelUserEmail").val() != "") {
        $("#UserEmail2").val($("#SelUserEmail").val());
        $("#UserEmail2").prop("disabled", true);
    } else {
        $("#UserEmail2").val("");
        $("#UserEmail2").prop("disabled", false);
    }
}

function AgreeInputSetting() {
    if (!$("#chk_IndividualSelectAgree").is(":checked") && !$("#chk_MarketingAgree").is(":checked")) {
        $("#UserOffice").val("");
        $("#UserOffice").prop("disabled", true);
        $("#UserHphone").val("");
        $("#UserHphone").prop("disabled", true);
        $("#UserPost1").val("");
        $("#UserPost1").prop("disabled", true);
        $("#UserPost2").val("");
        $("#UserPost2").prop("disabled", true);
        $("#UserAddress1").val("");
        $("#UserAddress1").prop("disabled", true);
        $("#UserAddress2").val("");
        $("#UserAddress2").prop("disabled", true);
        $("#btnPostSearch").prop("disabled", true);
    } else {
        $("#UserOffice").prop("disabled", false);
        $("#UserHphone").prop("disabled", false);
        $("#UserPost1").prop("disabled", false);
        $("#UserPost2").prop("disabled", false);
        $("#UserAddress1").prop("disabled", false);
        $("#UserAddress2").prop("disabled", false);
        $("#btnPostSearch").prop("disabled", false);
    }
}

function AgreeAll() {
    if ($("#chk_AllAgree").is(":checked")) {
        $("#chk_PolicyAgree").prop("checked", true);
        $("#chk_IndividualAgree").prop("checked", true);
        $("#chk_IndividualSelectAgree").prop("checked", true);
        $("#chk_MarketingAgree").prop("checked", true);
    }
    else {
        $("#chk_PolicyAgree").prop("checked", false);
        $("#chk_IndividualAgree").prop("checked", false);
        $("#chk_IndividualSelectAgree").prop("checked", false);
        $("#chk_MarketingAgree").prop("checked", false);
    }
    AgreeCheck = "0";
    AgreeInputSetting();
}

function AgreeEachClick() {
    if ($("#chk_AllAgree").is(":checked")) {
        if ($("#chk_PolicyAgree").is(":checked")) {
            $("#chk_AllAgree").prop("checked", false);
        }
        if ($("#chk_IndividualAgree").is(":checked")) {
            $("#chk_AllAgree").prop("checked", false);
        }
        if ($("#chk_IndividualSelectAgree").is(":checked")) {
            $("#chk_AllAgree").prop("checked", false);
        }
        if ($("#chk_MarketingAgree").is(":checked")) {
            $("#chk_AllAgree").prop("checked", false);
        }
    }
    else {
        if ($("#chk_PolicyAgree").is(":checked") && $("#chk_IndividualAgree").is(":checked") && $("#chk_IndividualSelectAgree").is(":checked") && $("#chk_MarketingAgree").is(":checked")) {
            $("#chk_AllAgree").prop("checked", true);
        }
    }
    AgreeCheck = "0";
    AgreeInputSetting();
}

function Agree() {
    if (AgreeCheck == "0") {
        if (!$("#chk_PolicyAgree").is(":checked")) {
            alert("통합회원 이용약관 동의는 필수입니다.");
            return;
        } else if (!$("#chk_IndividualAgree").is(":checked")) {
            alert("개인정보(필수항목) 수집 및 이용에 대한 동의는 필수입니다.");
            return;
        } else if (!$("#chk_IndividualSelectAgree").is(":checked") || !$("#chk_MarketingAgree").is(":checked")) {
            if (confirm("개인정보(선택항목) 수집 및 이용이나 마케팅 동의를 하지 않으실 경우 회원정보 입력 시 선택항목에 대한 정보는 입력하실 수 없습니다.\n동의 및 입력을 하지 않고 회원가입을 진행하시려면 확인을, 선택을 변경하시려면 취소를 클릭해 주세요.") == true) {
                AgreeCheck = "1";
                VaildCheck();
            } else {
                AgreeCheck = "0";
                return;
            }
        } else {
            AgreeCheck = "1";
            VaildCheck();
        }
    } else {
        VaildCheck();
    }
}

//Confirm
function VaildCheck() {
    if (ResultCode == "-6") {
        AgreeSubmit();
    }
    //div 초기화 
    for (var i = 10; i <= 70; i++) {
        if ($("#AlertDiv" + i)) {
            $("#AlertDiv" + i).hide();
        }
    }

    //이름체크
    if ($("#UserName").val() == "") {
        $("#AlertDiv10").show();
        $("#UserName").focus();
        return;
    }
    var namingdcheck = /^[0-9가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z.,-]+$/;
    if (!namingdcheck.test($("#UserName").val())) {
        $("#AlertDiv11").show();
        $("#UserName").focus();
        return;
    }

    //비밀번호체크
    if ($("#UserPasswd").val() != $("#UserPasswdConfirm").val()) {
        $("#AlertDiv25").show();
        $("#UserPasswd").focus();
        return;
    }
    if ($("#UserPasswd").val() == "") {
        $("#AlertDiv21").show();
        $("#UserPasswd").focus();
        return;
    }
    var pwcheck = /^[0-9a-zA-Z]{6,12}$/;
    if (!pwcheck.test($("#UserPasswd").val())) {
        $("#AlertDiv22").show();
        $("#UserPasswd").focus();
        return;
    }
    if ($("#UserPasswdConfirm").val() == "") {
        $("#AlertDiv24").show();
        $("#UserPasswdConfirm").focus();
        return;
    }

    //생일체크
    if ($("#UserBirth3").val() == "" || $("#UserBirth1").val() == "" || $("#UserBirth2").val() == "") {
        $("#AlertDiv30").show();
        $("#UserBirth3").focus();
        return;
    }

    //양력음력체크
    if (!$("input[name=UserBlunar]").is(":checked")) {
        $("#AlertDiv31").show();
        return;
    }

    //직업체크
    if ($("#UserJobcd").val() == "") {
        $("#AlertDiv40").show();
        $("#UserJobcd").focus();
        return;
    }

    //소속체크
    if ($("#UserCompanyName").val() == "") {
        $("#AlertDiv50").show();
        $("#UserCompanyName").focus();
        return;
    }

    //일반전화번호체크
    if ($("#UserHphone").val() != "") {
        if (!NumberRegEx.test($("#UserHphone").val())) {
            $("#AlertDiv60").show();
            $("#UserHphone").focus();
            return;
        }
    }

    //휴대폰체크
    if ($("#UserHcellphone2").val() == "" || $("#UserHcellphone3").val() == "") {
        alert("휴대폰번호를 입력해주세요.");
        $("#UserHcellphone2").focus();
        return;
    }

    if ($("#UserHcellphone2").val().length <= 2 || $("#UserHcellphone3").val().length <= 3 || !NumberRegEx.test($("#UserHcellphone2").val()) || !NumberRegEx.test($("#UserHcellphone3").val())) {
        alert("휴대폰번호를 정확히 입력해주세요.");
        $("#UserHcellphone2").focus();
        return;
    }

    //이메일체크
    //var emailchk = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])+\.[a-zA-Z]{2,3}$/;
    var emailchk = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if ($("#UserEmail").val() == "") {
        alert("이메일주소를 입력해주세요.");
        $("#UserEmail").focus();
        return;
    }

    if (!Emailchk.test($("#UserEmail").val())) {
        alert("이메일주소를 정확하게 입력해 주세요.");
        $("#UserEmail").focus();
        return;
    }

    //if ($("#UserEmail1").val() == "" || $("#UserEmail2").val() == "") {
    //    alert("이메일주소를 입력해주세요.");
    //    $("#UserEmail1").focus();
    //    return;
    //}
    //if (!ENRegEx.test($("#UserEmail1").val())) {
    //    alert("이메일주소를 정확하게 입력해 주세요.");
    //    return;
    //}
    //if (!emailchk.test($("#UserEmail2").val())) {
    //    alert("이메일주소를 정확하게 입력해 주세요.");
    //    return;
    //}

    Submit();
}

function Submit() {
    var IndividualSelectAgree = "";
    var MarketingAgree = "";
    var UserBizLetter = "";
    var UserEduLetter = "";
    var UserONJULetter = "N";
    var UserADLetter = "";
    var UserPost = "";
    //Agree
    if ($("#chk_IndividualSelectAgree").is(":checked")) { IndividualSelectAgree = "Y"; } else { IndividualSelectAgree = "N"; }
    if ($("#chk_MarketingAgree").is(":checked")) { MarketingAgree = "Y"; } else { MarketingAgree = "N"; }
    //Letter
    if ($("#UserBizLetter").is(":checked")) { UserBizLetter = "Y"; } else { userbiz_letter = "N"; }
    if ($("#UserEduLetter").is(":checked")) { UserEduLetter = "Y"; } else { useredu_letter = "N"; }
    //if ($("#UserONJULetter").is(":checked")) { UserONJULetter = "Y"; } else { useronju_letter = "N"; }
    if ($("#UserADLetter").is(":checked")) { UserADLetter = "Y"; } else { userad_letter = "N"; }
    if ($("#UserPost1").val() == "" || $("#UserPost2").val() == "") { UserPost = "" } else { UserPost = $("#UserPost1").val() + "" + $("#UserPost2").val(); }

    var params = { "UserID": UserID,
        "UserPW": UserPW,
        "IndividualSelectAgree": IndividualSelectAgree,
        "MarketingAgree": MarketingAgree,
        "UserName": $("#UserName").val(),
        "UserPasswd": $("#UserPasswd").val(),
        "UserBirth3": $("#UserBirth3").val(),
        "UserBirth1": $("#UserBirth1").val(),
        "UserBirth2": $("#UserBirth2").val(),
        "UserBlunar": $(':radio[name="UserBlunar"]:checked').val(),
        "UserJobcd": $("#UserJobcd").val(),
        "UserCompanyName": $("#UserCompanyName").val(),
        "UserOffice": $("#UserOffice").val(),
        "UserHphone": $("#UserHphone").val(),
        "UserHpost": UserPost,
        "UserHaddress1": $("#UserAddress1").val(),
        "UserHaddress2": $("#UserAddress2").val(),
        "UserHcellphone": $("#UserHcellphone1").val() + $("#UserHcellphone2").val() + $("#UserHcellphone3").val(),
        "UserEmail": $("#UserEmail1").val() + "@" + $("#UserEmail2").val(),
        "UserBizLetter": UserBizLetter,
        "UserEduLetter": UserEduLetter,
        "UserONJULetter": UserONJULetter,
        "UserADLetter": UserADLetter
    };

    $("#imgconfirm").hide();
    $("#bg_screen").show();

    sendNonBlockingAjaxJsonRequest("/Member/SetModify/", params, function (result) {
        if (result[0]["ResultCode"] == "0") {
            if (opener) { //현재창이 팝업이면
                window.opener.location.reload();
            }
            alert("Sub ID 정보 입력이 완료되었습니다. 재로그인 후 이용해 주세요.");
            location.href = Referer;
        } else {
            alert(result[0]["ResultMsg"]);
        }
    });
    $("#bg_screen").hide();
    $("#imgconfirm").show();
}

//AgreeSubmit
function AgreeSubmit() {
    var IndividualSelectAgree = "";
    var MarketingAgree = "";
    //Agree
    if ($("#chk_IndividualSelectAgree").is(":checked")) { IndividualSelectAgree = "Y"; } else { IndividualSelectAgree = "N"; }
    if ($("#chk_MarketingAgree").is(":checked")) { MarketingAgree = "Y"; } else { MarketingAgree = "N"; }

    var params = { "UserID": UserID,
        "IndividualSelectAgree": IndividualSelectAgree,
        "MarketingAgree": MarketingAgree
    };
    $("#imgconfirm").hide();
    $("#bg_screen").show();

    sendNonBlockingAjaxJsonRequest("/Member/SetAgree/", params, function (result) {
        if (result[0]["ResultCode"] == "0") {
            if (window.opener != undefined && window.opener != null && jQuery.isEmptyObject(window.opener) != true) { //현재창이 팝업이면
                if (window.opener.location != undefined && window.opener.location != null) {
                    window.opener.location.reload();
                    window.close();
                } else {
                    alert("필수 동의 입력이 완료되었습니다. 재로그인 후 이용해 주세요.");
                    location.href = Referer;
                }
            } else {
                alert("필수 동의 입력이 완료되었습니다. 재로그인 후 이용해 주세요.");
                location.href = Referer;
            }
        } else {
            alert(result[0]["ResultMsg"]);
        }
    });
    $("#bg_screen").hide();
    $("#imgconfirm").show();
}