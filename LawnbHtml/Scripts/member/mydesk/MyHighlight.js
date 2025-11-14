
$(function () {
    $('head').append('<script src=\'/Scripts/app/high/jquery.textHighlighter.js?v=7\'><\/script>');
    $('head').append('<script src=\'/Scripts/app/high/TextHighlighter.js?v=7\'><\/script>');
    $('head').append('<script src=\'/Scripts/app/high/ColorPicker.js?v=7\'><\/script>');
   
    if ($("#highView").length > 0) { highView.onselectstart = () => false; }

    
    var myHighParams = {
        "MyHighGet": "/MyDesk/MyHighlightViewGet",
        "MyHighHistoryGet": "/MyDesk/MyHighlightHistoryViewGet",
        "MyHighSave": "/MyDesk/SetHighlightView",
        "MyHighMemoSave": "/MyDesk/SetHighlightMemo",
        "MyHighHisSave": "/MyDesk/SetHighlightHis",
        "hltr": null,
        "hlt_val": "",
        "hlt_memo_arr": null,
        "hlt_arr": null,
        "hidx": "",
        "hsword": "",
        "wsword": ""
    };
    myhigh.init(myHighParams);
});

var isChange = false, isSelect = false
    , isHigh = true, isHiEdit = true
    , isCaseGong = false, isContUpt = false, isModyMemo = false
    , isUpdate = false, isCaseOnju = false, isMemberYN = false;
var curTop = 0, divTop = 0, divLeft = 0;
var ColorArray = ["OG", "GN", "BL", "PR", "GY"];
var LoginMsgArray = ["아직 로그인하지 않으셨습니다. \n로그인 또는 회원가입 후 이용해 주시기 바랍니다.",
    "개인 ID로 로그인을 하여 로앤비의 개인화 서비스인 하이라이트&메모 기능을 이용해보세요.",
    "해당 하이라이트&메모의 본문은 <br>Basic 등급 이상의 유료회원 제공범위에 해당합니다. <br>유료전환 후 이용해 주시기 바랍니다.",
    "해당 하이라이트&메모의 본문은 <br>Professional 등급 이상의 유료회원 제공범위에 해당합니다. <br>유료전환 후 이용해 주시기 바랍니다.",
    "하이라이트/메모가 숨김 처리된 상태입니다. ​본문 상단에서 숨김 해제 후 하이라이트를 추가해주세요.",
    "본문검색중에는 하이라이트 기능이 제한이 됩니다.\n본문검색 종료 후 이용해주세요."];
var hCount = 0, hcIdx = 0;
var hidDid = "", hltValue = "", hltMemValue = "", hGid = "", m_hid = "";
var hisHighArrs = null, hisHighMemoArrs = null, hisContArrs = null;


$(document).ready(function () {

    $("#container").on('mousedown', function (e) {
        if ($(e.target).parents('.main_container_view_inner').length < 1
            && $(e.target).parents('.hMemoLayer').length < 1
            && $(e.target).parents('.hMemoView').length < 1) {
            if ($("#highView>div.checkColor").is(':visible')) {
                $("#highView").hide();
            }
            $('#highMemoView').appendTo('#templete');
            if (!isUpdate) {
                var chk_ = "true";

                $(".highlighted").each(function () {
                    if ($(this).attr('data-highlightchk') == "false") {
                        if (isChange) {
                            $(this).attr("data-highlightchk", "true");
                            myhigh.saveHighlight();
                            isChange = false;
                        } else { chk_ = "false"; }
                    }
                });

                isSelect = false;
                if (chk_ == "false") {
                    myhigh.setInitHighlight();
                    myhigh.reinit();
                }
            } else {
                myhigh.setInitHighlight();
                myhigh.reinit();
            }
        }
    });

    $("#view_content").on('mousedown', function (e) {

        if (e.detail > 1) { e.preventDefault(); }
        if ($("#highView>div.checkColor").is(':visible')) { $("#highView").hide(); }
        if ($(e.target).parents('.hMemoLayer').length < 1) {
            if (window.getSelection().toString().length > 0) {
                if (!myhigh.chkTitleHtml(e)) {
                    if (e.which === 1) {
                        if (isChange) {
                            if (!isUpdate) {
                                var chk_ = "true";

                                $(".highlighted").each(function () {
                                    if ($(this).attr('data-highlightchk') == "false") {
                                        if (isChange) {
                                            $(this).attr("data-highlightchk", "true");
                                            myhigh.saveHighlight();
                                            isChange = false;
                                        } else { chk_ = "false"; }
                                    }
                                });

                                isSelect = false;
                                if (chk_ == "false") {
                                    myhigh.setInitHighlight();
                                    myhigh.reinit();
                                }
                            }
                        }
                        window.getSelection().removeAllRanges();
                    }

                    isChange = false;

                }
            }
            else {
                $("#txt_memo").val("");
                if ($("#highView>div.checkColor").is(':visible')) { $("#highView").hide(); }
                if (e.target.className == "highlighted"
                    && $(e.target).attr('data-highlightchk') == "true") {
                    isChange = false;
                    var isMemoYN = false;
                    H_ID = e.target.id;
                    if (myhighParams.hlt_memo_arr != null) {
                        for (var i = 0; i < myhighParams.hlt_memo_arr.length; ++i) {
                            if (myhighParams.hlt_memo_arr[i][0] == H_ID) {
                                isMemoYN = true;
                            }
                        }
                    }
                    if (isMemoYN) { myhigh.viewHiglightMemoLayer(e, H_ID, myhigh.getColorName($(e.target).css("background-color").replace(/ /g, ''))); }
                    else {
                        if (!isHigh) {
                            alert(LoginMsgArray[5]);
                        } else {
                            if ($('#highView').html() != '') { myhigh.viewHiglightLayer(e); }
                            myhigh.setMemoText(H_ID);
                            isSelect = true;
                            myhigh.changeCheckMemo(false, '1');
                            $('.memoInput').prop("checked", false);
                            $('.addMemo_txt').hide();
                            $("#btnBlockCancel").prop("disabled", false);
                            $('#btnBlockCancel').css('opacity', 1);
                        }
                    }
                } else if (e.target.className == "newic-h_memo hb_" + ColorArray[0] ||
                    e.target.className == "newic-h_memo hb_" + ColorArray[1] ||
                    e.target.className == "newic-h_memo hb_" + ColorArray[2] ||
                    e.target.className == "newic-h_memo hb_" + ColorArray[3] ||
                    e.target.className == "newic-h_memo hb_" + ColorArray[4]) {
                    isChange = false;
                    myhigh.viewHiglightMemoLayer(e, e.target.parentElement.id, e.target.className.replace(/newic-h_memo hb_/gi, ""));
                } else {
                 
                    if (e.target.id != "highMemoView"
                        && e.target.className != "hMemo_cont"
                        && e.target.className != "hMemo_time") {
                       $('#highMemoView').appendTo('#templete');
                    }

                    if (e.target.id != "popup_highlight") {
                        $('#popup_his_memo').hide();
                        $('#popup_highlight').hide();
                    }

                    if (e.target.id == 'modyMemo') {
                        $('#highMemoView').appendTo('#templete');
                        isChange = false;
                        if ($('#highView').html() != '') { myhigh.viewHiglightLayer(e); }
                        myhigh.setMemoText(H_ID);
                        isSelect = true;
                        myhigh.changeCheckMemo(false, '1');
                        $('.memoInput').prop("checked", true);
                        $('.memoInput').prop("disabled", true);
                        $("#btnBlockCancel").prop("disabled", false);
                        $('#btnBlockCancel').css('opacity', 1);
                        $('.addMemo_txt').show();
                    } else if (e.target.id == 'delMemo') {
                        myhigh.deleteHbyMemo();
                    } else {
                        if (!isUpdate) {
                            var chk_ = "true";

                            $(".highlighted").each(function () {
                                if ($(this).attr('data-highlightchk') == "false") {
                                    if (isChange) {
                                        $(this).attr("data-highlightchk", "true");
                                        myhigh.saveHighlight();
                                        isChange = false;
                                    } else { chk_ = "false"; }
                                }
                            });

                            isSelect = false;
                            if (chk_ == "false") {
                                myhigh.setInitHighlight();
                                myhigh.reinit();
                            }
                        }
                    }


                }
            }
        }
    });

    $("#view_content").on('mouseup', function (e) {
        if (e.target.className == "highlighted" || e.target.className == "c_tit_1"
            || e.target.className == "inner_login_area" || e.target.className == "flow_g"
            || e.target.className == "hMemo_cont" || e.target.className == "hMemo_time") {
            isSelect = true;
        }
        if (window.getSelection().toString().length > 0) {
            if (!myhigh.chkTitleHtml(e)) {
                if (e.which === 1 && !isSelect) {
                    H_ID = "";
                    $("#btnBlockCancel").prop("disabled", true);
                    $('#btnBlockCancel').css('opacity', 0.5);
                    myhigh.changeCheckMemo(true, '1');
                    $('.memoInput').prop("checked", false);
                    $('.addMemo_txt').hide();
                    if ($('#highView').html() != '') { myhigh.viewHiglightLayer(e); }
                } isChange = false;
            }
        }

    });


    $(".main_container").scroll(function () {
        var position = $(".main_container").scrollTop();
        if ((position - curTop) >= 180 || (position - curTop) <= -180) {
            // myhigh.setReCheckInitHighlight();
            if ($("#highView>div.checkColor").is(':visible')) { $("#highView").hide(); }
         //   $("#highMemoView").hide();
            $('#highMemoView').appendTo('#templete');
        }
    });

    $('#txt_memo').on('keyup', function () {
        textLengthLimit('txt_memo', 250);
    });


    $(".colorBlock").on('mousedown', function (e) {
        if (myUserCode == "") {
            if ($("#highView>div.checkColor").is(':visible')) { $("#highView").hide(); }
            //if (dataLayer[1].userType_IP != '') {
                if (confirm(LoginMsgArray[1])) {
                    location.href = "/Login/Index/";
                }
           // } else {
                if (confirm(LoginMsgArray[0])) {
                    location.href = "/Login/Index/";
                }
           // }
        } else if (myUserCode != "") {
            if (!isHiEdit) {
                alert(LoginMsgArray[4]);
                if ($("#highView>div.checkColor").is(':visible')) { $("#highView").hide(); }
            } else if (!isHigh) {
                alert(LoginMsgArray[5]);
                if ($("#highView>div.checkColor").is(':visible')) { $("#highView").hide(); }
            }
            else {
                    if ($(e.target).hasClass("colorBlock clear")) {
                        var isMemo = false;
                        if (myhighParams.hlt_memo_arr != null) {
                            for (var i = 0; i < myhighParams.hlt_memo_arr.length; ++i) {
                                if (myhighParams.hlt_memo_arr[i][0] == H_ID) {
                                    isMemo = true;
                                }
                            }
                        }
                        
                        if (!isMemo) {
                            if ($("#highView>div.checkColor").is(':visible')) { $("#highView").hide(); }
                            
                            if (isCaseOnju && !isMemberYN) {
                                if (confirm("해당 본문에서 하이라이트를 추가/해제할 경우 본문 내 유료회원 제공 범위에 설정된 하이라이트 메모가 삭제될 수 있습니다. \n하이라이트를 추가/해제 하시겠습니까?")) {
                                    isMemberYN = true;
                                    $(".highlighted").each(function () {
                                        var id_ = $(this).attr('data-timestamp');
                                        if (H_ID == id_) {
                                            myhighParams.hltr.removeHighlights(this);
                                            //myhigh.removeByMemberArray(H_ID);
                                        }
                                    });
                                    isChange = false;
                                    myhigh.setMemoUpdate(H_ID, "", 1);
                                    myhigh.saveHighlight();
                                }
                            } else {
                                $(".highlighted").each(function () {
                                    var id_ = $(this).attr('data-timestamp');
                                    if (H_ID == id_) {
                                        myhighParams.hltr.removeHighlights(this);
                                        //myhigh.removeByMemberArray(H_ID);
                                    }
                                });
                                isChange = false;
                                myhigh.setMemoUpdate(H_ID, "", 1);
                                myhigh.saveHighlight();
                            }


                        } else {
                            if ($("#txt_memo").val().replace(/ /gi, "").length == 0) {
                                myhigh.deleteHighlightMemoLayer();
                            } else {
                                alert("메모 삭제 후 하이라이트 해제가 가능합니다.");
                            }
                        }
                    } else {

                        if (hCount == 16 && window.getSelection().toString().length > 0) {
                            alert("하이라이트&메모 설정은 최대 15건까지 가능합니다.");
                            if ($("#highView>div.checkColor").is(':visible')) { $("#highView").hide(); }
                        } else {
                            if (window.getSelection().toString().length > 1500) {
                                alert("하이라이트&메모 설정 글자수 범위를 넘었습니다.");
                            }
                            else {
                                if (isCaseOnju && !isMemberYN) {
                                    if (confirm("해당 본문에서 하이라이트를 추가/해제할 경우 본문 내 유료회원 제공 범위에 설정된 하이라이트 메모가 삭제될 수 있습니다. \n하이라이트를 추가/해제 하시겠습니까?")) {
                                        isMemberYN = true;
                                        myhigh.setHighlightColorChoice(e);
                                    }
                                } else {
                                    myhigh.setHighlightColorChoice(e);
                                }
                            }
                        }
                    }
            }
        }

        
    });


    $("#btnsave").click(function () {
        $(".highlighted").each(function () {
            var id_ = $(this).attr('data-timestamp');
            if (H_ID == id_) {
                if (isChange) { $(this).attr("data-highlightchk", "true"); }
                else {
                    var chk_ = "true";
                    $(".highlighted").each(function () {
                        if ($(this).attr('data-highlightchk') == "false") {
                            chk_ = "false";
                        }
                    });
                    if (chk_ == "false") {
                        myhigh.setInitHighlight();
                        myhigh.reinit();
                    }
                }
            }
        });
        if ($('.memoInput').is(":checked") && $(".memoInput").prop("disabled")) {
            if ($("#txt_memo").val().replace(/ /gi, "").length == 0) {
                myhigh.setMemoUpdate(H_ID, "", 1);
                setTimeout(myhigh.saveHighlightMemo(1, 0), 100);
            } else {
                setTimeout(myhigh.saveHighlightMemo(0, 0), 100);
            }
        } else {
            myhigh.saveHighlight();
            setTimeout(myhigh.saveHighlightMemo(0, 0), 100);
        }
    });

    $('.colorBlock').click(function () {
        if ($('.memoInput').is(":checked") && $(".memoInput").prop("disabled") && $("#txt_memo").is(':visible')) {

        } else {
            myhigh.changeCheckMemo(false, '1');
        }
       
    });
});


var myhighParams = null;
var myhigh = new function () {
    
    this.init = function (data) {
        hidDid = "";
        myhighParams = data;
        var sandbox = document.getElementById('view_content');
        myhighParams.hltr = new TextHighlighter(sandbox);
        myhighParams.hltr.setColor('#bdbebd');
        myhighParams.hidx = +new Date();
        $("#btnBlockCancel").prop("disabled", true);
        $('#btnBlockCancel').css('opacity', 0.5);
        if ($('#hdnHid').length > 0) {
            if (($('#hdnHid').val().substring(0, 4) == 'J001')) {
                setTimeout(myhigh.getHightlight(), 100);
            }
        } else {
            if ($('#lbDid').length > 0) {
                if (($('#lbDid').val().substring(0, 4) == 'C000')) {
                    if ($('#cGong').text() == '1') {
                        isCaseGong = true;
                    }
                }
                if (($('#lbDid').val().substring(0, 4) != 'J001')) { setTimeout(myhigh.getHightlight(), 100); }
            }
           
            myhigh.setAdminRuleHis();
        }
    };

    this.reviewinit = function () {
        hidDid = "";
        isChange = false; isSelect = false; isHiEdit = true;
        isCaseGong = false; isContUpt = false; isModyMemo = false;
        isUpdate = false; isCaseOnju = false; isMemberYN = false;
        curTop = 0; divTop = 0; divLeft = 0;
        hCount = 0; hcIdx = 0; 
        hidDid = ""; hltValue = ""; hltMemValue = ""; hGid = ""; m_hid = "";
        hisHighArrs = null; hisHighMemoArrs = null; hisContArrs = null;

        $('#popup_his_memo').hide();
        $('#popup_highlight').hide();
        $('#popup_highlight>div>div>div>#hideHilight_').removeClass('off');
        $("#btnBlockCancel").prop("disabled", true);
        $('#btnBlockCancel').css('opacity', 0.5);
        var myHighParams = {
            "MyHighGet": "/MyDesk/MyHighlightViewGet",
            "MyHighHistoryGet": "/MyDesk/MyHighlightHistoryViewGet",
            "MyHighSave": "/MyDesk/SetHighlightView",
            "MyHighMemoSave": "/MyDesk/SetHighlightMemo",
            "MyHighHisSave": "/MyDesk/SetHighlightHis",
            "hltr": null,
            "hlt_val": "",
            "hlt_memo_arr": null,
            "hlt_arr": null,
            "hidx": "",
            "hsword": "",
            "wsword": ""
        };
        myHighParams.hlt_memo_arr = null;
        myHighParams.hlt_arr = null;
        myHighParams.hlt_val = "";
        myhighParams.hidx = +new Date();
        setTimeout(myhigh.getHightlight(), 100);
    };

    this.reinit = function () {
        setTimeout(myhigh.setReCheckHighlight(), 100);
    };

    this.setAdminRuleHis = function () {

        if ($('#lbDid').length > 0) {
            if ($('#lbDid').val().substring(0, 4) == 'L006') {
                if ($('#lbType').length > 0) {
                    if ($('#lbType').val() == 'H') {
                        if ($('#alert_set').length > 0) { $('#alert_set').hide(); }
                        if ($('#folder_put').length > 0) { $('#folder_put').hide(); }
                        if ($('#save_set').length > 0) { $('#save_set').hide(); }
                        if ($('#cont_share').length > 0) { $('#cont_share').hide(); }
                        if ($('#highlight_set').length > 0) { $('#highlight_set').hide(); }
                        $('#highMemoView>.hMemo_btn>#modyMemo').hide();
                        $('#highMemoView>.hMemo_btn>#delMemo').hide();
                        $('#highView').html('');
                    }
                }
            }
        }
       
        if ($('#highlight_set').length > 0) {
            if ($('#highlight_set').css("display") == "none") {
                $('#highView').html('');
            }
        } else {
            $('#highView').html('');
        }
    };

    this.getHightlight = function () {
       

        var url = myhighParams.MyHighGet;
        var cid = ($('#hdnHid').length > 0) ? $('#hdnHid').val() : ($('#lbDid').val().substring(0, 4) == 'J001' ? $('#hdnSid').val().substring(0, $('#hdnSid').val().length - 2) : $('#lbDid').val());
        if ($('#lbDid').length > 0) {
            if ($('#lbDid').val().substring(0, 4) == 'J001' && cid != '') {
                if ($('#hdnCommentID').length > 0) { cid += '|' + $('#hdnCommentID').val(); }
            }
        }
        
        var data = { "userCode": ((typeof myUserCode != "undefined") ? myUserCode : uCode), "cid": cid };
        sendNonBlockingAjaxRequest(url, data, myhigh.getMyHighlightCallBack);
    };

    this.getMyHighlightCallBack = function (result) {
        if (result != null) {
            if (result == "") { contentHighlight(''); } else {
                var highs = JSON.parse(result);
                hGid = highs[0].high_gid;
                if (highs[0].high_gid == '' &&
                    $('#lbDid').val().substring(0, 4) == 'C000' &&
                    isCaseGong
                ) {
                    contentHighlight('');
                } else {
                    myhighParams.hidx = highs[0].high_idx;
                    hltMemValue = hltValue = myhighParams.hlt_val = highs[0].high_html;
                    myhighParams.hlt_val = myhighParams.hlt_val.replace(/&lt;/gi, "<").replace(/&gt;/gi, ">");
                    if ($('#hdnHid').length > 0) {
                        myhigh.getContentTypeToReplace();
                    } 

                    myhighParams.hsword = highs[0].high_word;
                    var hlt_memo = highs[0].high_memo;
                    myhigh.contentWordChecking();
                    myhighParams.hltr.deserializeHighlights(myhighParams.hlt_val);

                    if ($('#hdnHid').length < 1) {
                        myhigh.chkUptContent();
                    } 

                   

                    myhigh.setMemoArray(hlt_memo, false);
                    myhighParams.wsword = myhigh.getTagWord();
                    if (!isContUpt) {
                        hltValue = highs[0].high_his_html;
                        hcIdx = 0;
                    } else {
                        hltValue = "0♤" + hltValue;
                    }
                    setTimeout(myhigh.setInitHighlightContentHisArray(), 300);
                }
               
                if (highs[0].high_gid == '' &&
                    $('#lbDid').val().substring(0, 4) == 'C000' &&
                    isCaseGong
                ) {
                     isContUpt = false; hltValue = "";
                     myhigh.getHightlightHistory();
                }
            }
        } else {
            contentHighlight('');
        }
        if ($('#hdnDid').length == 0) {
            if ($('#lbDid').val().substring(0, 4) == 'J001' ||
                $('#lbDid').val().substring(0, 4) == 'L006') {
                if ($('#lbDid').val().substring(0, 4) == 'L006') {
                    if ($('#lbType').length > 0) {
                        if ($('#lbType').val() == 'C') {
                            myhigh.getHightlightHistory();
                        }
                    }
                }
                else if ($('#lbDid').val().substring(0, 4) == 'J001')
                {
                    myhigh.getHightlightHistory();
                }
            }
        }
        //myhigh.initbinding(); 
        setTimeout(myhigh.setInitHighlightArray(), 100);
        setTimeout(myhigh.chkHighFiltering(), 100);
    };


    this.getHightlightHistory = function () {
        var url = myhighParams.MyHighHistoryGet;
        var cid = ($('#lbDid').val().substring(0, 4) == 'J001') ? $('#hdnSid').val().substring(0, $('#hdnSid').val().length - 2) : $('#lbDid').val();
        if ($('#lbDid').val().substring(0, 4) == 'J001' && cid != '') {
            if ($('#hdnCommentID').length > 0) { cid += '|' + $('#hdnCommentID').val(); }
        }
        var data = { "userCode": myUserCode, "cid": cid };
        sendNonBlockingAjaxRequest(url, data, myhigh.getMyHighlightHistoryCallBack);
    };

    this.getMyHighlightHistoryCallBack = function (result) {
        myhighParams.hlt_his_arr = [];
        if (result != null) {
            if (result == "") { } else {
                hisHighArrs = JSON.parse(result);
                myhigh.setMemoArray(hisHighArrs[0].high_memo, true);
                myhigh.setInitHighlightHistoryArray();
            }
        } 
    };

    this.getContentTypeToReplace = function () {
        myhighParams.hlt_val = myhighParams.hlt_val.replace(/,"30:/gi, ",\"3:");
        myhighParams.hlt_val = myhighParams.hlt_val.replace(/,"32:/gi, ",\"3:");
    };

    this.setHighlightColorChoice = function (e) {
        $("#btnBlockCancel").prop("disabled", false);
        $('#btnBlockCancel').css('opacity', 1);

        if (window.getSelection().toString().length > 0) {
            if (e.which === 1 && !isSelect) {
                myhighParams.hltr.doHighlight();
            }
        }
        var rgb = ""; isChange = true;
        if ($(e.target).hasClass("colorBlock hl_" + ColorArray[0])) {
            rgb = "rgba(255,211,176,0.5)";
        } else if ($(e.target).hasClass("colorBlock hl_" + ColorArray[1])) {
            rgb = "rgba(231,244,183,0.5)";
        } else if ($(e.target).hasClass("colorBlock hl_" + ColorArray[2])) {
            rgb = "rgba(186,237,249,0.5)";
        } else if ($(e.target).hasClass("colorBlock hl_" + ColorArray[3])) {
            rgb = "rgba(221,211,255,0.5)";
        } else if ($(e.target).hasClass("colorBlock hl_" + ColorArray[4])) {
            rgb = "rgba(219,219,219,0.5)";
        }
        $(".highlighted").each(function () {
            var id_ = $(this).attr('data-timestamp');
            if (H_ID == id_) {
                $(this).css("background-color", rgb);
                $(this).attr("data-highlightchk", "false");
            }
        });
    };

    this.saveHighlight = function () {
        myhigh.setInitHighlight();
        myhighParams.hlt_val = myhighParams.hltr.serializeHighlights();
        //myhigh.replaceByMemberArray();
        myhighParams.hlt_val = myhighParams.hlt_val.replace(/</gi, "&lt;").replace(/>/gi, "&gt;");
        var sWordChk = (myhighParams.hsword == "") ? myhigh.setCreateWordChk() : myhighParams.hsword;
        var url = myhighParams.MyHighSave;
        var cid = ($('#lbDid').val().substring(0, 4) == 'J001') ? $('#hdnSid').val().substring(0, $('#hdnSid').val().length - 2) : $('#lbDid').val();
        if ($('#lbDid').val().substring(0, 4) == 'J001' && cid != '') {
            if ($('#hdnCommentID').length > 0) { cid += '|' + $('#hdnCommentID').val(); }
        }
        //var cid = $('#hdnDid').val();
        var stitle = "";
        if (cid.substring(0, 4) == "L000" || cid.substring(0, 4) == "J001") {
            if (cid.substring(0, 4) == 'J001') {
                if ($('#hdnStitle').length > 0) { stitle = $('#hdnStitle').val(); }
            }
        } else {
            stitle = myforderParams.sTitle;
        }

        var data = {
            "sHighId": myhighParams.hidx, "userCode": myUserCode,
            "cid": cid, "highHtml": myhighParams.hlt_val, "sword": sWordChk, "stitle": stitle, "sType": 0
        };
        sendNonBlockingTextToJsonRequest(url, data, myhigh.setMyHighlightSaveCallBack);
    };


    this.saveHisHighlight = function (hidx) {

        for (var k = 0; k < hisHighArrs.length; k++) {
            try {
                if (hisHighArrs[k].high_idx == hidx) {
                    var url = myhighParams.MyHighSave;
                    var data = {
                        "sHighId": hidx, "userCode": myUserCode,
                        "cid": '', "highHtml": hisHighArrs[k].high_html, "sword": '', "sType": 0
                    };
                    sendNonBlockingTextToJsonRequest(url, data, myhigh.setMyHighlightSaveCallBack);
                }

            } catch (e) { }

        }
    };


   
    this.setMyHighlightSaveCallBack = function (result) {
        if (result != null) {
            if (result == "1") {
                myhigh.setInitHighlight();
                myhigh.reinit();
            }
            else {
                alert("저장에 실패했습니다. 다시 시도해주세요.");
            }
        }
    };


    this.saveHighlightMemo = function (t, y) {
        var hMemo = ($("#txt_memo").length > 0) ? $("#txt_memo").val() : '';
        $('#highMemoView').appendTo('#templete');
        if (y == 0) {
            if (hMemo.replace(/ /g, '').length > 0 || (t == 1 && H_ID != '')) {
                isUpdate = true;
                m_hid = H_ID;
                var url = myhighParams.MyHighMemoSave;
                var data = {
                    "sHighId": myhighParams.hidx, "sHighDivId": H_ID, "highMemo": hMemo, "sType": t
                };
                sendNonBlockingTextToJsonRequest(url, data, myhigh.setMyHighlightMemoCallBack);
            } else if (hMemo.replace(/ /g, '').length == 0 && t == 0) {
                //  alert("메모를 입력해주세요.");
                //  $("#highView").show();
            }
        } else {
            isUpdate = true;
            var url = myhighParams.MyHighMemoSave;
            var data = {
                "sHighId": myhighParams.hidx, "sHighDivId": y, "highMemo": hMemo, "sType": t
            };
            sendNonBlockingTextToJsonRequest(url, data, myhigh.setMyHighlightMemoCallBack);
        }
       
    };

    
    this.setMyHighlightMemoCallBack = function (result) {
        if (result != null) {
            if (result == "1") {
                myhigh.setMemoUpdate(H_ID, $("#txt_memo").val(), 0);
                myhigh.setMemoCheck();
                if (H_ID != "") {
                    $("#" + H_ID + ">i.newic-h_memo").remove();
                    tco = myhigh.getColorName($("#" + H_ID).css("background-color").replace(/ /g, ''));
                    $("#" + H_ID).prepend("<i class='newic-h_memo hb_" + tco + "'></i>");
                }

            } else if (result == "2") {
                myhigh.setMemoUpdate(H_ID, "", 1);
                myhigh.setMemoCheck();
                if (H_ID != "") { $("#" + H_ID + ">i.newic-h_memo").remove(); }
                if ($("#highView>div.checkColor").is(':visible')) { $("#highView").hide(); }
            }
            else {
                alert("저장에 실패했습니다. 다시 시도해주세요.");
            }
            if (result == "1") {
                if ($("#highView>div.checkColor").is(':visible')) { $("#highView").hide(); }
                if (isModyMemo) {
                    myhigh.goMemoview();
                } 
            }
        }
        isUpdate = false;
        $("#txt_memo").val("");
    };

    this.goMemoview = function () {
        $("#" + m_hid).mousedown();
    };

    this.contentWordChecking = function () {
        var sWord_ = myhighParams.hsword;
        if (sWord_ != "") {
            var wArr = sWord_.split(':');
            for (i = 0; i < wArr.length; i++) {
                if (wArr[i].length > 1) {
                    $("#view_content:contains('" + wArr[i] + "')").each(function () {
                        var regex = new RegExp(wArr[i], 'gi');
                        $(this).html($(this).html().replace(regex, ";markx;" + wArr[i] + ";marjx;"));
                    });
                }
            }
            myhigh.setWordChkFiltering();
            $("#view_content").html($("#view_content").html().replace(/;markx;/g, "<markx>").replace(/;marjx;/g, "</markx>"));

        }

    };

    this.setWordChkFiltering = function () {
        var wHtml = $("#view_content").html();
        var reg = /<[^>]*(;markx;)*(;marjx;)>?/gim;
        $.each(wHtml.match(reg), function (index, res) {
            wHtml = wHtml.replace(res, res.replace(/;markx;/g, "").replace(/;marjx;/g, ""));
        });
        $("#view_content").html(wHtml);
    };

    this.setCreateWordChk = function () {
        var hWord = (myhighParams.wsword != "") ? myhighParams.wsword : myhigh.getTagWord();
        var sWord_ = myhighParams.hsword;
        var chkWord_ = "";
        if (sWord_ == "") {
            chkWord_ = hWord;
        } else {
            var wArr = sWord_.split(':');
            if (hWord != "") {
                var hArr = hWord.split(':');
                var aSum = wArr.concat(hArr);
                var aUnion = aSum.filter((item, index) => aSum.indexOf(item) === index);

                for (i = 0; i < aUnion.length; i++) {
                    if (i == 0) {
                        chkWord_ = aUnion[i];
                    } else {
                        chkWord_ += ':' + aUnion[i];
                    }
                }
            }
            else {
                chkWord_ = sWord_;
            }
        }
        return chkWord_;
    };


    this.setInitHighlightArray = function () {
        myhighParams.hlt_arr = [];
        var  hTxt = '', hlId = '', hIsmemo = '0', hColor = '';
        var cnt = 0;

        $(".highlighted").each(function (index) {

            hlId = $(this).attr('data-timestamp');
            hColor = $(this).css("background-color");
            hTxt = $(this).text();


            var isHighId = false;
            hIsmemo = '0';

           
            for (var n = 0; n < myhighParams.hlt_arr.length; n++) {
                if (myhighParams.hlt_arr[n][0] == hlId) {
                    if (myhighParams.hlt_arr[n][2].length < 40) {
                        myhighParams.hlt_arr[n][2] += hTxt;
                    }
                   
                    isHighId = true;
                }
            }

            if (!isHighId) {
                if (myhighParams.hlt_memo_arr != null) {
                    for (var i = 0; i < myhighParams.hlt_memo_arr.length; i++) {
                        if (myhighParams.hlt_memo_arr[i][0] == hlId) {
                            hIsmemo = '1';
                        }
                    }
                }

                myhighParams.hlt_arr[cnt] = [hlId, hColor.replace(/ /g, ''), hTxt, hIsmemo];
                cnt++;
            }

        });

        myhighParams.hlt_arr.sort(function (a1, a2) {
            return (a1[0] > a2[0]) ? -1 : ((a1[0] < a2[0]) ? 1 : 0);
        });

        hCount = cnt + 1;
    };

    this.setInitHighlightHistoryArray = function () {
        myhighParams.hlt_his_arr = [];
        var hTxt = '', hlId = '', hIsmemo = '0', hColor = '';
        var cnt = 0;


        for (var k = 0; k < hisHighArrs.length; k++) {
            try {
                hTxt = ''; hlId = ''; hIsmemo = '0'; hColor = '';
                var htmlArrs = JSON.parse(hisHighArrs[k].high_html.replace(/&lt;/gi, "<").replace(/&gt;/gi, ">"));
               
                for (var m = 0; m < htmlArrs.length; m++) {
                    var hhtml = $.parseHTML(htmlArrs[m][0]); 
                    var htext = htmlArrs[m][1];
                    hlId = $(hhtml).attr('data-timestamp');
                    hIsmemo = '0'; hColor = $(hhtml).css("background-color");
                    hTxt = htext;
                    var isHighId = false;
                   
                    for (var n = 0; n < myhighParams.hlt_his_arr.length; n++) {
                        if (myhighParams.hlt_his_arr[n][0] == hlId) {
                            myhighParams.hlt_his_arr[n][2] += hTxt;
                            isHighId = true;
                        }
                    }

                    if (!isHighId) {
                        if (hisHighMemoArrs != null) {
                            for (var i = 0; i < hisHighMemoArrs.length; i++) {
                                if (hisHighMemoArrs[i][0] == hlId) {
                                    hIsmemo = '1';
                                }
                            }
                        }

                        myhighParams.hlt_his_arr[cnt] = [hlId, hColor.replace(/ /g, ''), hTxt, hIsmemo, hisHighArrs[k].high_idx, hisHighArrs[k].high_rev, hisHighArrs[k].high_cid];
                        cnt++;
                    }
                }

            } catch (e) { }

        }

        myhighParams.hlt_his_arr.sort(function (a1, a2) {
            return (a1[0] > a2[0]) ? -1 : ((a1[0] < a2[0]) ? 1 : 0);
        });

    };

    this.setInitHighlightContentHisArray = function () {
        var hltValArr_ = null;
        if (hltValue.indexOf("♤") > 0) {
            hltValArr_ = hltValue.split('♤');
        }
        hisContArrs = [];
        if (hltValArr_ != null) {
            var hTxt = '', hlId = '', hIsmemo = '0', hColor = '';
            var cnt = 0;
            try {
                hTxt = ''; hlId = ''; hIsmemo = '0'; hColor = '';
                var htmlArrs = JSON.parse(hltValArr_[1].replace(/&lt;/gi, "<").replace(/&gt;/gi, ">"));

                for (var m = 0; m < htmlArrs.length; m++) {
                    var hhtml = $.parseHTML(htmlArrs[m][0]);
                    var htext = htmlArrs[m][1];
                    hlId = $(hhtml).attr('data-timestamp');
                    hIsmemo = '0'; hColor = $(hhtml).css("background-color");
                    hTxt = htext;
                    var isHighId = false;

                    for (var n = 0; n < hisContArrs.length; n++) {
                        if (hisContArrs[n][0] == hlId) {
                            hisContArrs[n][2] += hTxt;
                            isHighId = true;
                        }
                    }

                    if (!isHighId) {
                        if (myhighParams.hlt_memo_arr != null) {
                            for (var i = 0; i < myhighParams.hlt_memo_arr.length; i++) {
                                if (myhighParams.hlt_memo_arr[i][0] == hlId) {
                                    hIsmemo = '1';
                                }
                            }
                        }

                        hisContArrs[cnt] = [hlId, hColor.replace(/ /g, ''), hTxt, hIsmemo, (hcIdx != 0) ? hcIdx : hltValArr_[0]];
                        cnt++;
                    }
                }

            } catch (e) { }

            hisContArrs.sort(function (a1, a2) {
                return (a1[0] > a2[0]) ? -1 : ((a1[0] < a2[0]) ? 1 : 0);
            });
        }
    };

    this.setReCheckHighlight = function () {
        if (myhighParams.hlt_val != "") {
            isModyMemo = false;
            $("span.highlighted>i.newic-h_memo").remove();
            try { myhighParams.hltr.removeHighlights(); }
            catch {
              //  location.reload();
            }
            myhighParams.hlt_val = myhighParams.hlt_val.replace(/&lt;/gi, "<").replace(/&gt;/gi, ">");
            myhighParams.hltr.deserializeHighlights(myhighParams.hlt_val);
            myhigh.setMemoCheck();
        } else {
            if ($("#highView>div.checkColor").is(':visible')) { $("#highView").hide(); }

        }
        setTimeout(myhigh.setInitHighlightArray(), 100);
    };

    this.setMemoArray = function (hmemo, ishis) {
        if (hmemo != "") {
            var memoArr = hmemo.split('♣');
            if (ishis) {
                hisHighMemoArrs = [];
                for (var i = 0; i < memoArr.length; i++) {
                    hisHighMemoArrs[i] = [memoArr[i].split('♤')[0], memoArr[i].split('♤')[1], memoArr[i].split('♤')[2]];
                }
            } else {
                myhighParams.hlt_memo_arr = [];
                for (var i = 0; i < memoArr.length; i++) {
                    myhighParams.hlt_memo_arr[i] = [memoArr[i].split('♤')[0], memoArr[i].split('♤')[1], memoArr[i].split('♤')[2]];
                }
                myhigh.setMemoCheck();

            }
           
        }
    };

    this.setMemoCheck = function () {
        if (myhighParams.hlt_memo_arr != null) {
            var tmpid = '', tco = '';

            $(".highlighted").each(function () {
                var id_ = $(this).attr('data-timestamp');
                if (myhighParams.hlt_memo_arr != null) {
                    for (var i = 0; i < myhighParams.hlt_memo_arr.length; i++) {
                        if (myhighParams.hlt_memo_arr[i][0] == id_) {
                            if (id_ != tmpid) {
                                tco = myhigh.getColorName($(this).css("background-color").replace(/ /g, ''));
                                $(this).prepend("<i class='newic-h_memo hb_" + tco + "'></i>");
                            }
                        }
                    }
                }
                tmpid = id_;
            });

            setTimeout(myhigh.setInitHighlightArray(), 100);
        }

    };

    this.setMemoText = function (t) {
        if (myhighParams.hlt_memo_arr != null) {
            for (var i = 0; i < myhighParams.hlt_memo_arr.length; i++) {
                if (myhighParams.hlt_memo_arr[i][0] == t) {
                    $("#txt_memo").val(myhighParams.hlt_memo_arr[i][1]);
                    break;
                }
            }
        }
    };

    this.setInitHighlight = function () {

        $("span.highlighted>i.newic-h_memo").remove();

        $(".highlighted").each(function () {
            if ($(this).attr('data-highlightchk') == "false") {
                $(this).attr("data-highlightchk", "true");
            }
        });
    };

    this.getSelectionHtml = function () {
        var html = "";
        if (typeof window.getSelection != "undefined") {
            var sel = window.getSelection();
            if (sel.rangeCount) {
                var container = document.createElement("div");
                for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                    container.appendChild(sel.getRangeAt(i).cloneContents());
                }
                html = container.innerHTML;
            }
        } else if (typeof document.selection != "undefined") {
            if (document.selection.type == "Text") {
                html = document.selection.createRange().htmlText;
            }
        }
        return html;
    };

    this.chkTitleHtml = function (ob) {
        var inHtml = myhigh.getSelectionHtml();
        if (inHtml.indexOf("c_tit_1") >= 0
            || inHtml.indexOf("inner_login_area") >= 0
            || inHtml.indexOf("id=\"P10\"") >= 0
            || inHtml.indexOf("id=\"P20\"") >= 0
            || inHtml.indexOf("id=\"P30\"") >= 0
            || inHtml.indexOf("id=\"P40\"") >= 0
            || inHtml.indexOf("onju_front_page") >= 0
            || inHtml.indexOf("highlighted") >= 0) {
            return true;
        } else if ($(ob.target).parents(".inner_login_area").length > 0
            || $(ob.target).parents(".onju_front_page").length > 0
            || $(ob.target).parents(".flow_g").length > 0
            || $(ob.target).attr('id') == 'P00'
            || $(ob.target).attr('id') == 'P10'
            || $(ob.target).attr('id') == 'P20'
            || $(ob.target).attr('id') == 'P30'
        ) {
            return true;
        } else {
            return false;
        }
    };

    this.setMemoUpdate = function (t, m, y) {
        var isArr = false;
        var tDate = new Date().toISOString().slice(0, 10);
        if (myhighParams.hlt_memo_arr != null) {
            if (y == 0) {
                for (var i = 0; i < myhighParams.hlt_memo_arr.length; i++) {
                    if (myhighParams.hlt_memo_arr[i][0] == t) {
                        myhighParams.hlt_memo_arr[i][1] = m;
                        myhighParams.hlt_memo_arr[i][2] = tDate;

                        isModyMemo = isArr = true;
                        break;
                    }
                }
                if (!isArr) {
                    const memo_ = [t, m, tDate];
                    myhighParams.hlt_memo_arr.push(memo_);
                }
            } else {
                for (var i = 0; i < myhighParams.hlt_memo_arr.length; i++) {
                    if (myhighParams.hlt_memo_arr[i][0] == t) {
                        myhighParams.hlt_memo_arr.splice(i, 1)
                        i--;
                    }
                }
            }
        } else {
            if (y == 0) {
                myhighParams.hlt_memo_arr = [];
                myhighParams.hlt_memo_arr[0] = [t, m, tDate];
            }
        }

    };

    this.viewHiglightLayer = function (e) {
   
            $('#highMemoView').appendTo('#templete');
            $('#popup_his_memo').hide();
            curTop = $(".main_container").scrollTop();
            $('#highView').removeClass("_M");
            divTop = e.pageY;
            divLeft = e.pageX;
            $('#highView').appendTo('#container_inner');
            $('#highView').css({
                "top": divTop
                , "left": divLeft
            }).show();
            var pgy = e.pageY / document.body.clientHeight * 100;
            if (pgy > 80) {
                $("#highView").addClass("onlyBottom");
            } else {
                $("#highView").removeClass("onlyBottom");
            }
            if ($("#right_control").css("display") == "none") {
                $("#highView").removeClass("onlyRight");
            } else {
                if (e.pageX > 800) {
                    $("#highView").addClass("onlyRight");
                } else {
                    $("#highView").removeClass("onlyRight");
                }
            }
        
    };

    this.viewHiglightMemoLayer = function (e, eid, hc) {
      
            $('#highMemoView').appendTo('#templete');
            //if (!isHigh) {
            //    $('#highMemoView>div.hMemo_btn>#delMemo').prop("disabled", true);
            //} else {
            //    $('#highMemoView>div.hMemo_btn>#delMemo').prop("disabled", false);
            //}
            if (myhighParams.hlt_memo_arr != null) {
                for (var i = 0; i < myhighParams.hlt_memo_arr.length; ++i) {
                    if (myhighParams.hlt_memo_arr[i][0] == eid) {
                        H_ID = eid;
                        $("#highMemoView>div.hMemo_time").text(myhighParams.hlt_memo_arr[i][2]);
                        $("#highMemoView>div.hMemo_cont").text(myhighParams.hlt_memo_arr[i][1]);
                        for (var j = 0; j < ColorArray.length; j++) { $(".hMemoView").removeClass(ColorArray[j]); }
                        $(".hMemoView").addClass(hc);
                        $('#highMemoView').appendTo('#' + H_ID);
                    }
                }
            }
            var p = $('#' + H_ID + '>i.newic-h_memo').offset();
            var pgy = p.top / document.body.clientHeight * 100;
            if (pgy > 80) {
                $("#highMemoView").addClass("onlyBottom");
            } else {
                $("#highMemoView").removeClass("onlyBottom");
            }

            if (p.left > 800) {
                $("#highMemoView").addClass("onlyRight");
            } else {
                $("#highMemoView").removeClass("onlyRight");
            }
    };

    this.addHLLayerMemo = function () {
        $('.addMemo_txt').toggle();
        if ($("#highView").hasClass("onlyBottom")) {
            $('#highView').toggleClass("_M");
        }
    };

    this.myHighlightViewList = function () {
        if (!isContUpt && hltValue == "") {
            myhigh.myHighlightContList();
        }
        else {
            myhigh.myHighlightModyContList();
        }
    };

    this.myHighlightContList = function () {
        $('.base_popup').hide();
        $("#individual_area").hide();
        $('#popup_highlight>div.cont_list.hl').remove();
        $('#popup_highlight>div.no_cont').remove();
        $('#popup_highlight>div>div>div>#hideHilight_').prop("disabled", false);
        var hiHtml = "<div class=\"cont_list hl\">";
        var isHigh = false;

        if (myhighParams.hlt_arr != null) {

            for (var i = 0; i < myhighParams.hlt_arr.length; i++) {
                if (typeof myhighParams.hlt_arr[i] == "undefined" || myhighParams.hlt_arr[i] == null) { }
                else {
                    if (myhighParams.hlt_arr[i].length == 4) {
                        var hListTag = "", hColor = "";

                        hColor = myhigh.getColorName(myhighParams.hlt_arr[i][1]);
                       // hListTag += "<a href='#' class='hl_" + hColor + "' onclick=\"javascript:myhigh.goToSelect('" + myhighParams.hlt_arr[i][0] + "');$('#popup_his_memo').hide();myhigh.gotohighMove('" + myhighParams.hlt_arr[i][0] + "');\">";
                        hListTag += "<a href=\"javascript:myhigh.goToSelect('" + myhighParams.hlt_arr[i][0] + "');\" class='hl_" + hColor + "'>";
                        if (myhighParams.hlt_arr[i][3] == "1") {
                            hListTag += "<span class='icon_group'><i class='newic-h_memo hb_" + hColor + "'></i></span>";
                        }
                        hListTag += "<p>" + myhighParams.hlt_arr[i][2] + "</p>";
                        hListTag += "<span onclick=\"myhigh.deleteHiMemo('" + myhighParams.hlt_arr[i][0] + "');\" class='del_hlight'><i class='icon-' data-icon='&#xe9ac;'></i></span>";
                        hListTag += "</a>";
                        hiHtml += hListTag;
                        isHigh = true;
                    }
                }
            }
        }

        if (myhighParams.hlt_his_arr != null) {
            for (var i = 0; i < myhighParams.hlt_his_arr.length; i++) {
                if (typeof myhighParams.hlt_his_arr[i] == "undefined" || myhighParams.hlt_his_arr[i] == null) { }
                else {
                    if (myhighParams.hlt_his_arr[i].length == 7) {
                        var hListTag = "", hColor = "";

                        hColor = myhigh.getColorName(myhighParams.hlt_his_arr[i][1]);
                        hListTag += "<a href=\"javascript:myhigh.callHisMsg('" + myhighParams.hlt_his_arr[i][0] + "','"
                            + hColor + "', '" + myhighParams.hlt_his_arr[i][4] + "', '" + myhighParams.hlt_his_arr[i][6] + "',1)\" class='hl_" + hColor + "'>";
                        if (myhighParams.hlt_his_arr[i][3] == "1") {
                            hListTag += "<span class='icon_group'><i class='newic-h_memo hb_" + hColor + "'></i></span>";
                        }
                        hListTag += "<p>" + myhighParams.hlt_his_arr[i][2] + "</p>";
                        hListTag += "<p class=\"revision\">" + myhighParams.hlt_his_arr[i][5] + "</p>";
                        hListTag += "<span onclick=\"myhigh.deleteHisHiMemo('" + myhighParams.hlt_his_arr[i][0] + "', '" + myhighParams.hlt_his_arr[i][4] + "');\" class='del_hlight'><i class='icon-' data-icon='&#xe9ac;'></i></span>";
                        hListTag += "</a>";
                        hiHtml += hListTag;
                        isHigh = true;
                    }
                }
            }

        }


        hiHtml += "</div>";

        if (!isHigh) {
            $('#popup_highlight>div>div>div>#hideHilight_').prop("disabled", true);
            hiHtml = "<div class=\"no_cont\">저장된 하이라이트&메모가 없습니다.</div>";
        }


        $('#popup_highlight').append(hiHtml);
        $('#popup_highlight').show();
        $("#individual_area").show();
    };

    this.myHighlightModyContList = function () {
        var ModyHisContArray = [];
        if (myhighParams.hlt_arr != null && hisContArrs != null)
        {
            var isMList = false; var mcnt = 0;
            for (var i = 0; i < hisContArrs.length; i++) {
                isMList = false;
                for (var j = 0; j < myhighParams.hlt_arr.length; j++) {
                    if (hisContArrs[i][0] == myhighParams.hlt_arr[j][0] &&
                           hisContArrs[i][2].replace(/ /g, '') == myhighParams.hlt_arr[j][2].replace(/ /g, ''))
                       // hisContArrs[i][2].replace(/ /g, '').length == myhighParams.hlt_arr[j][2].replace(/ /g, '').length)
                    {
                        isMList = true;
                        break;
                    }
                }
                if (!isMList) {
                    ModyHisContArray[mcnt] = [hisContArrs[i][0], hisContArrs[i][1], hisContArrs[i][2], hisContArrs[i][3], hisContArrs[i][4]];
                    mcnt++;
                }
            }
        }

        $('.base_popup').hide();
        $("#individual_area").hide();
        $('#popup_highlight>div.cont_list.hl').remove();
        $('#popup_highlight>div.no_cont').remove();
        $('#popup_highlight>div>div>div>#hideHilight_').prop("disabled", false);
        var hiHtml = "<div class=\"cont_list hl\">";
        var isHigh = false;

        if (myhighParams.hlt_arr != null) {

            for (var i = 0; i < myhighParams.hlt_arr.length; i++) {
                if (typeof myhighParams.hlt_arr[i] == "undefined" || myhighParams.hlt_arr[i] == null) { }
                else {
                    if (myhighParams.hlt_arr[i].length == 4) {
                        var hListTag = "", hColor = "";

                        hColor = myhigh.getColorName(myhighParams.hlt_arr[i][1]);
                        hListTag += "<a href=\"javascript:myhigh.goToSelect('" + myhighParams.hlt_arr[i][0] + "');\" class='hl_" + hColor + "'>";
                        if (myhighParams.hlt_arr[i][3] == "1") {
                            hListTag += "<span class='icon_group'><i class='newic-h_memo hb_" + hColor + "'></i></span>";
                        }
                        hListTag += "<p>" + myhighParams.hlt_arr[i][2] + "</p>";
                        hListTag += "<span onclick=\"myhigh.deleteHiMemo('" + myhighParams.hlt_arr[i][0] + "');\" class='del_hlight'><i class='icon-' data-icon='&#xe9ac;'></i></span>";
                        hListTag += "</a>";
                        hiHtml += hListTag;
                        isHigh = true;
                    }
                }
            }
        }


        if (ModyHisContArray != null) {
            var displayli_ = '';
            if (!isContUpt) { displayli_ = 'none'; }
            for (var i = 0; i < ModyHisContArray.length; i++) {
                if (typeof ModyHisContArray[i] == "undefined" || ModyHisContArray[i] == null) { }
                else {
                    if (ModyHisContArray[i].length == 5) {
                        var hListTag = "", hColor = "";

                        hColor = myhigh.getColorName(ModyHisContArray[i][1]);
                        hListTag += "<a href=\"javascript:myhigh.callHisMsg('" + ModyHisContArray[i][0] + "','"
                            + hColor + "', '', '', 0)\" class='hl_" + hColor + "' style='display:" + displayli_ + "'>";
                        if (ModyHisContArray[i][3] == "1") {
                            hListTag += "<span class='icon_group'><i class='newic-h_memo hb_" + hColor + "'></i></span>";
                        }
                        hListTag += "<p>" + ModyHisContArray[i][2] + "</p>";
                        hListTag += "<span onclick=\"myhigh.deleteModyContHiMemo('" + ModyHisContArray[i][0] + "', '"
                            + ModyHisContArray[i][4] + "');\" class='del_hlight'><i class='icon-' data-icon='&#xe9ac;'></i></span>";
                        hListTag += "</a>";
                        hiHtml += hListTag;
                        isHigh = true;
                    }
                }
            }
        }


        if (myhighParams.hlt_his_arr != null) {
            for (var i = 0; i < myhighParams.hlt_his_arr.length; i++) {
                if (typeof myhighParams.hlt_his_arr[i] == "undefined" || myhighParams.hlt_his_arr[i] == null) { }
                else {
                    if (myhighParams.hlt_his_arr[i].length == 7) {
                        var hListTag = "", hColor = "";

                        hColor = myhigh.getColorName(myhighParams.hlt_his_arr[i][1]);
                        hListTag += "<a href=\"javascript:myhigh.callHisMsg('" + myhighParams.hlt_his_arr[i][0] + "','"
                            + hColor + "', '" + myhighParams.hlt_his_arr[i][4] + "', '" + myhighParams.hlt_his_arr[i][6] + "', 1)\" class='hl_" + hColor + "'>";
                        if (myhighParams.hlt_his_arr[i][3] == "1") {
                            hListTag += "<span class='icon_group'><i class='newic-h_memo hb_" + hColor + "'></i></span>";
                        }
                        hListTag += "<p>" + myhighParams.hlt_his_arr[i][2] + "</p>";
                        hListTag += "<p class=\"revision\">" + myhighParams.hlt_his_arr[i][5] + "</p>";
                        hListTag += "<span onclick=\"myhigh.deleteHisHiMemo('" + myhighParams.hlt_his_arr[i][0] + "', '" + myhighParams.hlt_his_arr[i][4] + "');\" class='del_hlight'><i class='icon-' data-icon='&#xe9ac;'></i></span>";
                        hListTag += "</a>";
                        hiHtml += hListTag;
                        isHigh = true;
                    }
                }
            }

        }


        hiHtml += "</div>";

        if (!isHigh) {
            $('#popup_highlight>div>div>div>#hideHilight_').prop("disabled", true);
            hiHtml = "<div class=\"no_cont\">저장된 하이라이트&메모가 없습니다.</div>";
        }


        $('#popup_highlight').append(hiHtml);
        $('#popup_highlight').show();
        $("#individual_area").show();
    };

    this.getColorName = function (c) {
        var co = "";
        if (c == "rgba(255,211,176,0.5)") {
            co = ColorArray[0];
        } else if (c == "rgba(231,244,183,0.5)") {
            co = ColorArray[1];
        } else if (c == "rgba(186,237,249,0.5)") {
            co = ColorArray[2];
        } else if (c == "rgba(221,211,255,0.5)") {
            co = ColorArray[3];
        } else if (c == "rgba(219,219,219,0.5)") {
            co = ColorArray[4];
        }
        return co;
    };

    this.getTagWord = function () {
        var mWordArr = []; var cWord = "";
        var h = 0;
        if ($('marks').length > 0) {
            $("marks").each(function (index) {
                var hTxt = $(this).text();
                if (mWordArr.indexOf(hTxt) < 0) {
                    mWordArr[h] = hTxt;
                    h++;
                }
            });
        }
        for (i = 0; i < mWordArr.length; i++) {
            if (i == 0) {
                cWord = mWordArr[i];
            } else {
                cWord += ':' + mWordArr[i];
            }
        }
        return cWord;
    };

    this.changeCheckMemo = function (a, c) {
        $('.memoInput').attr("disabled", a);
        $('.addMeomo label').css('opacity', c);
    };

    this.deleteHiMemo = function (c) {
        H_ID = c;
        if (H_ID != "") {
            myhigh.deleteHighlightMemo();
            $('#highlight_set').trigger("click");
        }
    };


    this.deleteHbyMemo = function () {
        if (confirm("메모를 삭제하시겠습니까?")) {
            if ($("#highView>div.checkColor").is(':visible')) { $("#highView").hide(); }
            myhigh.setMemoUpdate(H_ID, "", 1);
            //myhigh.saveHighlight();
            setTimeout(myhigh.saveHighlightMemo(1, 0), 100);
            //$("#highMemoView").hide();
            $('#highMemoView').appendTo('#templete');
            //myhigh.setInitHighlight();
            //myhigh.reinit();
        }
    };


    this.deleteHighlightMemo = function () {
        if (confirm("하이라이트&메모를 삭제하시겠습니까?")) {
            myhigh.deleteHighlightMemoLayer();
        }
    };

    this.deleteHighlightMemoLayer = function () {
        if ($("#highView>div.checkColor").is(':visible')) { $("#highView").hide(); }
        $("span.highlighted>i.newic-h_memo").remove();
        $(".highlighted").each(function () {
            var id_ = $(this).attr('data-timestamp');
            if (H_ID == id_) {
                myhighParams.hltr.removeHighlights(this);
            }
        });

        myhigh.setMemoUpdate(H_ID, "", 1);
        myhigh.saveHighlight();
        setTimeout(myhigh.saveHighlightMemo(1, 0), 100);
        //$("#highMemoView").hide();
        $('#highMemoView').appendTo('#templete');
        myhigh.setInitHighlight();
        myhigh.reinit();
    };

    this.chkHighFiltering = function () {
        if (myhighParams.hlt_arr != null && hisContArrs != null) {
            var isMList = false; isChange = false;
            var chkDivId = ""; var mcnt = 0; 
           // $("span.highlighted>i.newic-h_memo").remove();
            for (var i = 0; i < hisContArrs.length; i++) {
                isMList = false;
                for (var j = 0; j < myhighParams.hlt_arr.length; j++) {
                    if (hisContArrs[i][0] == myhighParams.hlt_arr[j][0] &&
                        hisContArrs[i][2].replace(/ /g, '') == myhighParams.hlt_arr[j][2].replace(/ /g, '')) {
                        isMList = true;
                        break;
                    }
                }
                if (!isMList) {
                    //$(".highlighted").each(function () {
                    //    var id_ = $(this).attr('data-timestamp');
                    //    if (hisContArrs[i][0] == id_) {
                    //      // myhighParams.hltr.removeHighlights(this);
                    //    }
                    //});
                    chkDivId += hisContArrs[i][0] + '|';
                }
            }

           // myhigh.setMemoCheck();
            //myhighParams.hlt_val = myhighParams.hltr.serializeHighlights();
            //myhigh.setInitHighlight();
            //myhigh.reinit();

            setTimeout(myhigh.saveHighlightMemo(2, chkDivId), 100);
        }
    };

    this.chkMemberCol = function () {
        if ($('#lbDid').val().substring(0, 4) == 'C000' ||
            $('#lbDid').val().substring(0, 4) == 'I003' ||
            $('#lbDid').val().substring(0, 4) == 'D009' ||
            $('#lbDid').val().substring(0, 4) == 'D007' ||
            $('#lbDid').val().substring(0, 4) == 'P012' ||
            $('#lbDid').val().substring(0, 4) == 'P013' ||
            $('#lbDid').val().substring(0, 4) == 'P011' ||
            $('#lbDid').val().substring(0, 4) == 'J001') {
            return true;
        } else {
            return false;
        }
    };

    //btn btn-default hm_toggle off
    this.hideHilight = function (obj) {
        if (!isHigh) {
            alert("본문검색중에는 하이라이트 기능이 제한이 됩니다. \n본문검색 종료 후 이용해주세요.");
        } else {
            if (isHiEdit) {
                $("span.highlighted>i.newic-h_memo").remove();
                myhighParams.hltr.removeHighlights();
                isHiEdit = false;
                $(obj).addClass('off');
            } else {
                myhigh.setInitHighlight();
                myhigh.reinit();
                isHiEdit = true;
                $(obj).removeClass('off');
            }
        }
    };


    this.callHisMsg = function (hid, hc, hci, hcid, ic) {
        var msg = "";
        if (myUserCode != "" && userType == "0" && myhigh.chkMemberCol()) {
            if (($('#lbDid').val().substring(0, 4) != 'J001')) {
                msg = LoginMsgArray[2] ;
            } else {
                msg = LoginMsgArray[3];
            }
        }

        if (myUserCode != "") {
            if (($('#lbDid').val().substring(0, 4) == 'J001') && userType == "1") {
                msg = LoginMsgArray[3];
            }
            hidDid = hcid;
            $("#popup_his_memo").attr('class', "hMemoView " + hc + " hMOut");
            $("#popup_his_memo>.hMemo_time").text("");
            $("#popup_his_memo>#hiDivNum_").text(hid + '|' + hci);
            if (ic == 0) {
                if (msg == "") {
                    msg = "본문이 수정되어 설정된 하이라이트 메모로 이동할 수 없습니다. 삭제 후 다시 추가해주세요.";
                }
                $("#popup_his_memo>.hMemo_cont>.hMOut_info").html("<i class=\"icon-alert\" data-icon=\"\"></i>" + msg);
                $("#popup_his_memo>.hMemo_history>#btnHis").hide();
                $("#popup_his_memo>.hMemo_btn>#btnClose").show();
                $("#popup_his_memo>.hMemo_cont>.hMOut_cont").text("");
                if (myhighParams.hlt_memo_arr != null) {
                    for (var i = 0; i < myhighParams.hlt_memo_arr.length; i++) {
                        if (myhighParams.hlt_memo_arr[i][0] == hid) {
                            $("#popup_his_memo>.hMemo_time").text(myhighParams.hlt_memo_arr[i][2]);
                            $("#popup_his_memo>.hMemo_cont>.hMOut_cont").text(myhighParams.hlt_memo_arr[i][1]);
                        }
                    }
                }
            }
            else if (ic == 1) {
                if (hGid == '' &&
                    $('#lbDid').val().substring(0, 4) == 'C000' &&
                    isCaseGong
                ) {
                    $("#popup_his_memo>.hMemo_cont>.hMOut_info").html("<i class=\"icon-alert\" data-icon=\"\"></i>공보 판례로 교체되어 설정된 하이라이트 메모로 이동할 수 없습니다. 삭제 후 다시 추가해주세요.");
                    $("#popup_his_memo>.hMemo_history>#btnHis").hide();
                }
                else if ($('#lbDid').val().substring(0, 4) == 'L006') {
                    $("#popup_his_memo>.hMemo_cont>.hMOut_info").html("<i class=\"icon-alert\" data-icon=\"\"></i>본문이 개정되어 설정된 하이라이트&메모로 이동할 수 없습니다. 기존 설정한 내용을 확인하여 삭제 후 다시 추가해주세요.");
                    $("#popup_his_memo>.hMemo_history>#btnHis").show();
                }
                else if ($('#lbDid').val().substring(0, 4) == 'J001') {
                    $("#popup_his_memo>.hMemo_cont>.hMOut_info").html("<i class=\"icon-alert\" data-icon=\"\"></i>온주 원고가 개정될 경우 본문 내 기존 등록된 하이라이트&메모가 삭제될 수 있습니다.");
                    $("#popup_his_memo>.hMemo_history>#btnHis").show();
                }

                $("#popup_his_memo>.hMemo_cont>.hMOut_cont").text("");
                if (hisHighMemoArrs != null) {
                    for (var i = 0; i < hisHighMemoArrs.length; i++) {
                        if (hisHighMemoArrs[i][0] == hid) {
                            $("#popup_his_memo>.hMemo_time").text(hisHighMemoArrs[i][2]);
                            $("#popup_his_memo>.hMemo_cont>.hMOut_cont").text(hisHighMemoArrs[i][1]);
                        }
                    }
                }

            }

            $("#popup_his_memo").show();
        }

    };


    this.deleteHisHiMemo = function (hid, hidx) {
        if (confirm("개정 연혁 하이라이트&메모를 삭제하시겠습니까?")) {
            for (var k = 0; k < hisHighArrs.length; k++) {
                try {
                    if (hisHighArrs[k].high_idx == hidx) {
                        var htmlArrs = JSON.parse(hisHighArrs[k].high_html.replace(/&lt;/gi, "<").replace(/&gt;/gi, ">"));

                        var m = 0;
                        while (m < htmlArrs.length) {
                            var hhtml = $.parseHTML(htmlArrs[m][0]);
                            if ($(hhtml).attr('data-timestamp') == hid) {
                                htmlArrs.splice(m, 1);
                            } else {
                                ++m;
                            }
                        }
                        hisHighArrs[k].high_html = JSON.stringify(htmlArrs).replace(/</gi, "&lt;").replace(/>/gi, "&gt;");
                        myhigh.saveHisHighlight(hidx);
                        myhigh.setInitHighlightHistoryArray();
                        $('#popup_his_memo').hide();
                        $('#highlight_set').trigger("click");
                    }

                } catch (e) { }

            }
        }
    };


    this.deleteModyContHiMemo = function (hid, hidx) {
        if (confirm("하이라이트&메모를 삭제하시겠습니까?")) {
            var htmlArrs = JSON.parse(hltValue.split('♤')[1].replace(/&lt;/gi, "<").replace(/&gt;/gi, ">"));

            var m = 0;
            while (m < htmlArrs.length) {
                var hhtml = $.parseHTML(htmlArrs[m][0]);
                if ($(hhtml).attr('data-timestamp') == hid) {
                    htmlArrs.splice(m, 1);
                } else {
                    ++m;
                }
            }
            hltValue = '0♤' + JSON.stringify(htmlArrs).replace(/</gi, "&lt;").replace(/>/gi, "&gt;");
         
            if ($("#highView>div.checkColor").is(':visible')) { $("#highView").hide(); }
            $("span.highlighted>i.newic-h_memo").remove();
            $(".highlighted").each(function () {
                var id_ = $(this).attr('data-timestamp');
                if (hid == id_) {
                    myhighParams.hltr.removeHighlights(this);
                }
            });

            myhigh.setMemoUpdate(hid, "", 1);
            myhigh.saveHighlight();
            $('#highMemoView').appendTo('#templete');
            myhigh.setInitHighlight();
            setTimeout(myhigh.saveHighlightMemo(2, hid), 100);
            myhigh.reinit();
            myhigh.setInitHighlightContentHisArray();
            $('#highlight_set').trigger("click");
            $('#popup_his_memo').hide();
        }
    };


    this.delHiSelect = function () {
        if ($('#btnHis').is(':visible')) {
            var hcid = $("#popup_his_memo>#hiDivNum_").text();
            myhigh.deleteHisHiMemo(hcid.split('|')[0], hcid.split('|')[1]);
        } else {
            var hcid = $("#popup_his_memo>#hiDivNum_").text();
            myhigh.deleteModyContHiMemo(hcid.split('|')[0], 0);
        }
       
    };

    this.goHiSelect = function () {
        EditorPopup(hidDid); 
    };

    this.goToSelect = function (hid) {
        if (!$("#view_contentr").is(':visible')) {
            $('.main_container_view_inner .result_tab .btn_option_outer .btn_close').trigger('click');
            //$('#view_content').show();
            //$('#view_sub_content').hide();
            //if ($("#co_popupContainer").has('mobile') && document.body.clientWidth < 500) {
            //    $('.left_container').removeClass('slide_mov ').removeClass('add_border ');
            //    $('#bg_screen').hide();
            //    $("html").css("overflow-y", "auto");
            //    $('.main_container').height($(".main_container_view_inner").height());
            //} else {
            //    $('.main_container').css('overflow', 'auto');
            //}
        }
        $('#popup_his_memo').hide();
        myhigh.gotohighMove(hid);
    };

    this.gotohighMove = function (hid) {
        location.href = "#" + hid;
    };

    this.chkUptContent = function () {
        myhigh.setInitHighlight();
        var htmlArrs = JSON.parse(hltValue.replace(/&lt;/gi, "<").replace(/&gt;/gi, ">"));
        var curhtmlArrs = JSON.parse(myhighParams.hltr.serializeHighlights());
        if (htmlArrs.length != curhtmlArrs.length) {
            isContUpt = true;
            var url = myhighParams.MyHighHisSave;
            hltValue = hltValue.replace(/</gi, "&lt;").replace(/>/gi, "&gt;");
            var data = {
                "idx": 0, "sHighId": myhighParams.hidx, "highHtml": hltValue, "sType": 0
            };
            sendNonBlockingTextToJsonRequest(url, data, myhigh.chkUptContentCallBack);
           
        } else {
            for (var m = 0; m < htmlArrs.length; m++) {
                if (htmlArrs[m][1].replace(/ /g, '') != curhtmlArrs[m][1].replace(/ /g, '')) {
                    isContUpt = true;
                    var url = myhighParams.MyHighHisSave;
                    hltValue = hltValue.replace(/</gi, "&lt;").replace(/>/gi, "&gt;");
                    var data = {
                        "idx": 0, "sHighId": myhighParams.hidx, "highHtml": hltValue, "sType": 0
                    };
                    sendNonBlockingTextToJsonRequest(url, data, myhigh.chkUptContentCallBack);
                    break;
                }
            }
        }

        if (isContUpt) {
            if (myUserCode != "" && userType == "0" && myhigh.chkMemberCol()) {
                if (($('#lbDid').val().substring(0, 4) == 'J001'
                    || $('#lbDid').val().substring(0, 4) == 'C000'
                )) {
                    isCaseOnju = true;
                }
            } else if (myUserCode != "") {
                if (($('#lbDid').val().substring(0, 4) == 'J001') && userType == "1") {
                    isCaseOnju = true;
                }
            }
        }


        //myhigh.removeByMemberArray('');
    };

    this.chkUptContentCallBack = function (result) {
        if (result != null) {
            if (result != "-1") {
                hcIdx = result;
              //  myhigh.reinit();
            }
            else {
                //alert("저장에 실패했습니다. 다시 시도해주세요.");
            }
        }
    };


    this.saveModyHisHighlight = function (hidx) {
        var url = myhighParams.MyHighHisSave;
        var data = {
            "idx": hidx, "sHighId": myhighParams.hidx, "highHtml": hltValue.split('♤')[1], "sType": 1
        };
        sendNonBlockingTextToJsonRequest(url, data, myhigh.saveModyHisHighlightCallBack);
    };



    this.saveModyHisHighlightCallBack = function (result) {
        if (result != null) {
            if (result == "1") {
                //myhigh.setInitHighlight();
                //myhigh.reinit();
            }
            else {
                alert("저장에 실패했습니다. 다시 시도해주세요.");
            }
        }
    };

    this.closeSaveMsg = function () {
        $("#highView>h4").show();
        $("#highView>div.checkColor").show();
        $("#highView>div.addMeomo").show();
        $("#highView>div.alram").hide();
        $("#highView").hide();
    };

    //this.replaceByMemberArray = function () {
        
    //    if (isCaseOnju) {
    //        //var htmlArrs = "";
    //        //htmlArrs = JSON.parse(hltMemValue.replace(/&lt;/gi, "<").replace(/&gt;/gi, ">"));
    //        //var curhtmlArrs = JSON.parse(myhighParams.hlt_val);
    //        //var ccnt = curhtmlArrs.length;
    //        //for (var m = 0; m < htmlArrs.length; m++) {
    //        //    curhtmlArrs.push(htmlArrs[m]);
    //        //}
    //        //myhighParams.hlt_val = JSON.stringify(curhtmlArrs);
    //    }
    //};


    //this.removeByMemberArray = function (hid) {
       
    //    if (isCaseOnju) {
    //       // var htmlArrs = "";
    //       // htmlArrs = JSON.parse(hltMemValue.replace(/&lt;/gi, "<").replace(/&gt;/gi, ">"));
    //       //// alert(hltMemValue.replace(/&lt;/gi, "<").replace(/&gt;/gi, ">"));
    //       // if (hid != '') {
    //       //     for (var m = 0; m < htmlArrs.length; m++) {
    //       //         var hhtml = $.parseHTML(htmlArrs[m][0]);
    //       //         var htid = $(hhtml).attr('data-timestamp');
    //       //         if (htid == hid) {
    //       //             htmlArrs.splice(m, 1)
    //       //             i--;
    //       //         }
    //       //     }
    //       // } else {
    //       //   //  alert(myhighParams.hltr.serializeHighlights());
    //       //     var curhtmlArrs = JSON.parse(myhighParams.hltr.serializeHighlights());
    //       //     for (var m = 0; m < htmlArrs.length; m++) {
    //       //         var hhtml = $.parseHTML(htmlArrs[m][0]);
    //       //         var htid = $(hhtml).attr('data-timestamp');
    //       //         for (var n = 0; n < curhtmlArrs.length; n++) {
    //       //             var httml = $.parseHTML(curhtmlArrs[n][0]);
    //       //             var httid = $(httml).attr('data-timestamp');
    //       //             if (htid == httid) {
    //       //                 htmlArrs.splice(m, 1)
    //       //                 i--;
    //       //             }
    //       //         }
    //       //     }
    //       // }

    //       // hltMemValue = JSON.stringify(htmlArrs);
    //      //  alert(hltMemValue);
    //    }
    //};


    //this.bindEvent = function () {
     
    //};



};
