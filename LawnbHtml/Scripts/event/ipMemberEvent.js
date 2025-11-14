var emailConfirmChk = false;
var eNRegEx = /^[0-9a-zA-Z.,-_]+$/;

// 비회원 메일링 신청
function userEmailChange() {

    var tempEmail = $("#txtUserEmail").val() + "@" + $("#txtUserEmailDomain").val();
    $("#lblUserEmail").val(tempEmail);
    
    var selUserEmailVal = $("#selUserEmail").val();
    if (selUserEmailVal == "")
    {
        $("#txtUserEmailDomain").attr("disabled", false);
        $("#txtUserEmailDomain").val("");
    }
    else
    {
        $("#txtUserEmailDomain").attr("disabled", true);
        $("#txtUserEmailDomain").val(selUserEmailVal);
    }
}

function userEmailConfirm() 
{
    var emailChk = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])+\.[a-zA-Z]{2,3}$/;
    if ($("#txtUserEmail").val() == "") {
        alert("수신 받으실 이메일을 입력해주세요.");
        return;
    }
    else if (!eNRegEx.test($("#txtUserEmail").val()) || !emailChk.test($("#txtUserEmailDomain").val())) {
        alert("이메일 형식이 유효하지 않습니다.");
        return;
    }
    else {
        var tempEmail = $("#txtUserEmail").val() + "@" + $("#txtUserEmailDomain").val();
        $("#lblUserEmail").text(tempEmail);
        $("#lblUserEmailSave").removeClass('_before');
              
        emailConfirmChk = true;
    }        
}

function userEmailSave()
{
    var emailChk = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])+\.[a-zA-Z]{2,3}$/;
    var bizLetter = "N", onjuLetter = "N", eduLetter = "N", marketLetter = "N";
    var letterAlert = "";

    if ($("#chkBizLetter").is(":checked")) { 
        bizLetter = "Y"; 
        letterAlert += "비즈레터, ";
    } else { 
        bizLetter = "N"; 
    }
    if ($("#chkOnjuLetter").is(":checked")) { 
        onjuLetter = "Y"; 
        letterAlert += "온주 레터, ";
    } else { 
        onjuLetter = "N"; 
    }
    if ($("#chkEduLetter").is(":checked")) { 
        eduLetter = "Y"; 
        letterAlert += "교육센터안내메일, ";
    } else { 
        eduLetter = "N"; 
    }
    /*
    if ($("#chkMarketLetter").is(":checked")) { 
        marketLetter = "Y"; 
        letterAlert += "마케팅 메일 ";
    } else { 
        marketLetter = "N"; 
    }
    */

    letterAlert = letterAlert.substring(0, letterAlert.length -2);

    if (!$("#chkUserEmailAgree").is(":checked"))
    {
        alert("개인정보에 대한 수집 및 이용 안내에 동의해 주셔야 신청하실 수 있습니다.");
        return;
    }
    else if (!emailConfirmChk)
    {
        alert("이메일확인 버튼을 눌러주세요.");
        return;
    }
    else if ($("#txtUserEmail").val() == "")
    {
        alert("수신 받으실 이메일을 입력해주세요.");
        return;
    }
    else if (!eNRegEx.test($("#txtUserEmail").val()) || !emailChk.test($("#txtUserEmailDomain").val()))
    {
        alert("이메일 형식이 유효하지 않습니다.");    
        return;
    }
    else if (bizLetter == "N" && onjuLetter == "N" && eduLetter == "N" && marketLetter == "N")
    {
        alert("1개 이상의 메일링서비스를 선택해 주세요");
        return; 
    }
    else
    {
        var tempEmail = $("#txtUserEmail").val() + "@" + $("#txtUserEmailDomain").val();
        var params = {
            "userEmail" : tempEmail,
            "bizLetter" : bizLetter,
            "onjuLetter" : onjuLetter,
            "eduLetter" : eduLetter,
            "marketLetter" : marketLetter,
        }
        sendNonBlockingAjaxJsonRequest("/Event/SetNonMemberMailing/", params, function (result) {
            if (result[0]["ResultCode"] == "0") {
                var resultMsg = tempEmail + " 비회원 메일링서비스 신청이 완료되었습니다. 감사합니다.\n\n";
                resultMsg += "신청 서비스: " + letterAlert + "\n\n";
                resultMsg += "향후 수신을 더 이상 원치 않으시면, 받으신 메일 하단에 있는 [수신거부]를 클릭하여 메일링서비스별로 거부할 수 있습니다.";

                alert(resultMsg);

                location.reload();
            } else {
                alert(result[0]["ResultMsg"]);
            }
        });
    }
}
//// 비회원 메일링 신청

// IP회원 이벤트 참여
function eventJoin()
{
    if( !$("#chkEventJoinAgree").is(":checked"))
    {
        alert("로앤비 “개인화 로그인＂이벤트 참여를 위한 개인정보에 대한 수집 및 이용 안내에 동의하지 않았습니다. 비동의 시, 이벤트에 참여하실 수 없습니다.");
        return;
    }
    else if ($("#hdnIPUserID").val() == "")
    {
        alert("IP회원만 참여가능합니다.");
        return;
    }
    else if ($("#hdnIDUserID").val() == "")
    {
        alert("개인화로그인을 한 IP회원만 참여가능합니다.");
        location.href = "/Login/EventIndex/";
    }
    else {
        var params = {
            "IPUserID" : $("#hdnIPUserID").val(),
            "IDUserID" : $("#hdnIDUserID").val()            
        }
        
        sendNonBlockingAjaxJsonRequest("/Event/SetIPMemberEventJoin/", params, function (result) {
            
            if (result[0]["RESULTCODE"] == "1") 
            {
                $("#divEventJoinText").text('로앤비 "개인화 로그인" 이벤트에 참여 되었습니다.');

                $('#bg_screen').show();
                $('.enjoy_event_popup').show();
                $('#pPersonalText').text('"개인화 로그인"을 통해 다양한 개인화 기능들을 더 편리하게 사용할 수 있습니다.');
            } 
            else if (result[0]["RESULTCODE"] == "3")
            {
                $("#divEventJoinText").text('로앤비 "개인화 로그인" 이벤트에 이미 참여 되었습니다.');

                $('#bg_screen').show();
                $('.enjoy_event_popup').show();
                $('#pPersonalText').text('');
            }
            else
            {
                alert(result[0]["RESULTMSG"]);                
            }
        });

    }    
}
