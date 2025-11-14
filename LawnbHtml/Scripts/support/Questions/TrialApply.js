function Confirm() {
    if ($("input[name=PrivacyAgreeYN]:checked").val() != "Y") {
        alert("개인정보 동의에 동의후 진행해주세요.");
        return;
    }

    var BBSQuestion = "";
    if (GoodsName == "Lawnb") {
        BBSQuestion = "101";
    } else if (GoodsName == "ONJU") {
        BBSQuestion = "102";
    } else if (GoodsName == "Westlaw") {
        BBSQuestion = "201";
    } else if (GoodsName == "WA") {
        BBSQuestion = "202";
    } else if (GoodsName == "PL") {
        BBSQuestion = "203";
    } else if (GoodsName == "CE") {
        BBSQuestion = "204";
    } else if (GoodsName == "WJ") {
        BBSQuestion = "301";
    } else if (GoodsName == "MS") {
        BBSQuestion = "401";
    } else if (GoodsName == "LT") {
        BBSQuestion = "402";
    } else if (GoodsName == "Lawffice") {
        BBSQuestion = "403";
    }

    //var GoodsName = $("#GoodsName").val();
    var UserName = $("#UserName").val();
    var CompanyCategory = $("#CompanyCategory").val();
    var Position = $("#Position").val();
    var CompanyName = $("#CompanyName").val();
    var UserEmail = $("#UserEmail").val();
    var Department = $("#Department").val();
    var UserPhone = $("#UserPhone").val();

    if (GoodsName == "" || UserName == "" || CompanyCategory == "" || Position == "" || CompanyName == "" ||
        UserEmail == "" || Department == "" || UserPhone == "") {
        alert("필수항목을 입력해주세요.");
        return;
    }

    var params = { "GoodsName": BBSQuestion,
        "UserName": UserName,
        "CompanyCategory": CompanyCategory,
        "Position": Position,
        "CompanyName": CompanyName,
        "UserEmail": UserEmail,
        "Department": Department,
        "UserPhone": UserPhone
    }

    //Ajax
    //GAEvent("LeadSubmit");
    //StartGA();
    //dataLayer.push({ 'event': 'lead_submit', 'goods_name': FullGoodsName });

    sendNonBlockingAjaxJsonRequest("/Questions/SetTrialApply/", params, function (result) {
        if (result[0]["ResultCode"] == "0") {
            alert("신청되었습니다.");
            window.close();
        } else {
            alert(result[0]["ResultMsg"]);
        }
    });
}