$(document).ready(function () {

    //통검자동
    $(".search_center input[type='search']").click(function () {
        initSettingWordChk();
        setTimeout(function () {
            if ($.trim($('#qu').val()) == '') {
                setTheLatestWord();
            } else {
                setInitAutoComplete();
            }
            setStateWordChk(1);
            if (getStateChk()[0] == "1" && getStateChk()[1] == "1") { setLayerSuggestIcon(true); }
            else { if ($.trim($('#qu').val()) == '' && getStateChk()[0] == "1") { setLayerSuggestIcon(true); } else { setLayerSuggestIcon(false); } };
        }, 100);
    });

    $(".search_right>span.more_btn").click(function () {
        if (isLayerChk) {
            $(".search_layer_outer").hide();
            $('.search_layer').hide();
        }
        else {
            $(".search_layer_outer").show();
            $('.search_layer').show();
            setTimeout(function () {
                initSettingWordChk();
                setStateWordChk(0);
                if (getStateChk()[1] == "0") {
                    if ($.trim($('#qu').val()) == '') {
                        setTheLatestWord();
                    } else {
                        setInitAutoComplete();
                    }
                }
            }, 100);
        }
        setLayerSuggestIcon(isLayerChk);
    });

    $('.search_layer').mouseover(function () { //검색popup 유지
        $('.search_layer').show();
    });

    $(document).mouseup(function (e) { //검색popup 닫기
        if ($('.search_layer_outer').has(e.target).length == 0) {
            initSearchLayer();
            if ($('.search_right').has(e.target).length == 0) {
                $(".search_layer_outer").hide();
                $('.search_layer').hide();
                setLayerSuggestIcon(true);
            }
        }
    });

    $('#qu').on('keyup', function (e) {
        var keyword = "";
        keyword = $(this).val();
        if (keyword == "") {
            $('.search_layer').hide();
            setLayerSuggestIcon(true);
        } else {
            var kc = e.keyCode || e.which;
            if ((kc >= 48 && kc <= 57)	/*0-9*/
							|| (kc >= 65 && kc <= 90) /*A-Z*/
							|| (kc >= 96 && kc <= 105) /*numpad 0-9*/
							|| (kc == 229) || kc == 8) /*한글*/{

                if (kc == 21) return false;
                var chkType = storage.getSearchWordType().split('#');
                setInitAutoComplete();
            }
        } return false;
    });

    var cnt = -1;
    $('#qu').on('keydown', function (e) {

        if (e.which == 38 || e.which == 40) {
            if ($('.search_layer').is(':visible')) {
                var len = $('.search_layer>div>ul>li').length;

                if (len > 0) {
                    var curr = $('.search_layer>div>ul').find('li.selected');
                    var target = null;
                    if (e.which == 38) {		//위 화살표
                        cnt--;
                        cnt %= len;
                        target = $(curr).prev();
                        if (target.length == 0) { target = $('.search_layer>div>ul>li').eq(len - 1); cnt = len - 1; }

                    } else if (e.which == 40) {	//아래 화살표
                        cnt++;
                        cnt %= len;
                        target = $(curr).next();
                        if (target.length == 0) { target = $('.search_layer>div>ul>li').eq(0); cnt = 0; }
                    }

                    if (target != null && target.length > 0) {
                        var q = $('.search_layer>div>ul>li').eq(cnt).text();
                        if ($('.search_layer>div>ul>li').eq(cnt).find('span').length > 0) {
                            q = q.replace($('.search_layer>div>ul>li').eq(cnt).find('span').text(), '');
                        }
                        if (q == '최근 검색어 내역이 없습니다.') { q = ''; }
                        $('#qu').val(q);
                        showTargetContent(cnt);
                        $('.search_layer>div>ul').children().removeClass("selected");
                        $(target).addClass("selected");
                    }
                }
            }
        }

    });

    $('#qu').on("click keyup", function (e) {
        if (e.which == 38) {
            if (this.createTextRange) { var range = this.createTextRange(); range.move('character', this.value.length); range.select(); }
            else if (this.selectionStart || this.selectionStart == '0') this.selectionStart = this.value.length;
        }
    });

    $(document).on('mouseover', '.search_layer>div>ul>li', function () {
        $('.search_layer>div>ul').children().removeClass("selected");
        $(this).addClass("selected");
        cnt = $('.search_layer>div>ul>li').index(this);
        showTargetContent(cnt);
    });

    $(document).on('click', '.search_layer>div>ul>li', function () {
        var q = $(this).text();
        if ($(this).find('span').length > 0) {
            q = q.replace($(this).find('span').text(), '');
        }
        if (q == '최근 검색어 내역이 없습니다.') { q = ''; }
        $('#qu').val(q);
        getTotalClickSearch();
    });


    $(document).on('click', '.search_layer>div>ul>li>span', function () {
        if ($(this).find('i').length > 0) {
            // 검색어 DB삭제 1개
            if (uCode != null && uCode != "") {
                var params = { "userCode": uCode, "searchWord": $(this).parent().text() };
                sendNonBlockingAjaxJsonRequest("/AjaxInfo/DelSearchWord/", params, function (result) { }); ;
            }

            $(this).parent().remove();
            setTargetDelWord($(this).parent().text());
            if ($('.search_layer>div>ul>li').length == 0) {
                setTheLatestWord();
            }
        }
        return false;

    });
});

var isLayerChk = false;

function initSettingWordChk() {
    var chkType = storage.getSearchWordType().split('#');
    setLatestWordChk(chkType[0]);
    setSuggestWordChk(chkType[1]);
}

function getStateChk() {
    return storage.getSearchWordType().split('#');
}

var fArr = [];

function autoComplete(sWord) {
    var data = {
        "sWord": sWord
    };
    sendNonBlockingAjaxJsonRequest("/ConService/GetSuggestWord", data, autoCompleteCallback);
};


// 자동완성 콜백
function autoCompleteCallback(result) {
    if (result != null) {
        fArr = []; initSearchLayer();
        $('.search_layer>div>ul').empty();
        $(".search_layer_outer").show();
        $('.search_layer').show();
        for (var key in result) {
            var sWord = $.trim($('#qu').val());
            var liHtml = "<li>" + key.replace(sWord, '<strong>' + sWord + '</strong>') ;
            if (result[key] != '#') {
                if (result[key].indexOf("#") > 0) {
                    if (result[key].split('#')[1].replace(/ /g, '') != '') {
                        liHtml += "<i class=\icon-myfolder\" data-icon=\"&#xe900;\"></i></li>";
                    }
                }
            }
            
            //liHtml = liHtml.replace(sWord, '<strong>' + sWord + '</strong>');
            $('.search_layer>div>ul').append(liHtml);
            fArr.push(result[key]);
        }
        $('.search_layer>div.search_layer_list').removeClass("_done").addClass("_done");
    } else {
        $('.search_layer').hide();
      
    }
};

function showTargetContent(index) {
    if (fArr.length > 0) {
        fArr[index] = (typeof (fArr[index]) == 'undefined') ? "#" : fArr[index];
        var shrr = fArr[index].split('#');
        var iHtml = "";
        if (fArr[index].replace(/ /g, '') != '#') {
            var hArr = shrr[1].split('$');
            if (hArr.length == 2) {
                var ecss = "expend_result";
                if (index > 2 && index < 6) { ecss = "expend_result middle" } else if (index > 5) { ecss = "expend_result bottom" }

                if (shrr[0].substr(0, 4) == 'P001' || shrr[0].substr(0, 4) == 'P003') {
                    iHtml = "<div class=\"" + ecss + "\" onclick=\"showContentView('/Info/ContentView?sid=" + shrr[0] + "')\">";
                }
                else if (shrr[0].substr(0, 4) == 'http') {
                    iHtml = "<div class=\"" + ecss + "\" onclick=\"showContentPopView('" + shrr[0] + "')\">";
                }
                else {
                    iHtml = "<div class=\"" + ecss + "\" onclick=\"showContentPopView('/Info/ContentView?sid=" + shrr[0] + "')\">";
                }
                
                iHtml += "<p>" + hArr[0] + "</p>";
                iHtml += "<span>" + hArr[1] + "</span>";
                iHtml += "<div class=\"dirct_go\">바로가기</div>";
                iHtml += "</div>";
                $('#result_target').html(iHtml);
            } else {
                $('#result_target').empty();
            }
        } else {
            $('#result_target').empty();
        }
    } else {
        $('#result_target').empty();
    }
}

function setTheLatestWord() {
 //   alert(checkPrivacy());
//    if (storage.getIsMemberLogin() != "") {
    if (uCode != "" && uCode != null) {
        initSearchLayer();
        var lArr = storage.getWordToDesk();
        $('.search_layer>div>ul').empty();
        $('.search_layer>div.search_layer_list').removeClass("_done");
        if (lArr != null) {
            var iHtml = "";
            var j = 0;
            for (var i = lArr.length - 1; i >= 0; i--) {
                iHtml = "<li>" + lArr[i].dWord + "<span>" + lArr[i].dDate + "</span></li>";
                $('.search_layer>div>ul').append(iHtml);
                j++;
                if (j > 10) { break; }
            }
            if (iHtml != "") {
                $(".search_layer_outer").show();
                $('.search_layer').show();
            } else {
                $('.search_layer>div>ul').append("<li>최근 검색어 내역이 없습니다.</li>");
            }
        } else {
            $('.search_layer>div>ul').append("<li>최근 검색어 내역이 없습니다.</li>");
        }
        $(".search_layer_outer").show();
        $('.search_layer').show();
    }
//    }
}

function initSearchLayer() {
    cnt = -1; fArr = []; chkSwdDel = false; $('.search_layer_foot>div.fl').html('기록삭제');
    $('#result_target').empty();
}

function setInitAutoComplete() {
    var chkType = getStateChk();
    if (chkType[1] == '0') {
        setLayerSuggestIcon(false); 
        $('.search_layer>div>div.txt_info').hide();
        $('.search_layer>div>ul').show();
        startAutoComplete();
    } else {
        setStateWordChk(1);
    }
}

function setLayerSuggestIcon(y) {
    isLayerChk = y;
    if (isLayerChk) {
        $(".search_right>span.more_btn").html("<i class=\"icon-more\" data-icon=\"&#xe903;\"></i><span class=\"hide\">more</span>");
        isLayerChk = false;
    }
    else {
        $(".search_right>span.more_btn").html("<i class=\"icon-more\" data-icon=\"&#xe902;\"></i><span class=\"hide\">more</span>");
        isLayerChk = true;
    }
}


var beforeSword = null;
var numEng = /[0-9]|[a-z]|[A-Z]/;
var korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]|[\/]/;
var koreanWord = /[가-힣]|[\/]/;
var sWordCheckFlag = false;
var chkSwd = null;

function startAutoComplete() {
    var sWord = $.trim($('#qu').val());
    if (sWord == '') {
        $('.search_layer').hide();
    } else {
        if (korean.test(sWord)) {
            var searchChar = sWord.substring(sWord.length - 1, sWord.length);
            if (koreanWord.test(searchChar)) {
                autoComplete(sWord);
            }
        } else {
            autoComplete(sWord);
        }
    }
}

var chkSwdDel = false;
function setDeleteWord() {
    if (!chkSwdDel) {
        $('.search_layer_foot>div.fl').html('기록전체삭제');
        chkSwdDel = true;
        $('.search_layer>div>ul>li').each(function (index) {
            $(this).find('span').html("<i class=\"icon-myfolder\" data-icon=\"&#xe915;\"></i>");
        });
    }
    else {
        storage.setDelWordToDesk();
        setTheLatestWord();
        $('.search_layer_foot>div.fl').html('기록삭제');
        chkSwdDel = false;
    }
}

function setTargetDelWord(s) {
    var lArr = storage.getWordToDesk();
    if (lArr != null) {
        for (var i = 0; i < lArr.length; i++) {
            if (s == lArr[i].dWord) {
                lArr.splice(i, 1);
            }
        }
        storage.setWordDelToDesk(JSON.stringify(lArr));
    }
}

function chkMemberAlert() {
    if (localStorage.getItem("IpMemberY") == null ||
        localStorage.getItem("IpMemberY") == "") {
        return false;
    } else {
        return true;
    }
}

var TXT_LATEST = "최근검색어저장 기능이 OFF 상태에 있습니다.<br>이용을 원하시면 하단의 최근검색어저장 상태를 ON으로 변경해주세요.";
var TXT_LATEST_RE = "최근검색어저장 기능이 OFF 상태에 있습니다.<br>이용을 원하시면 로그인 하시고 하단의 최근검색어저장 상태를 ON으로 변경해주세요.";
var TXT_SUGGEST = "자동완성 기능이 OFF 상태에 있습니다.<br>이용을 원하시면 하단의 자동완성 상태를 ON으로 변경해주세요.";
var TXT_SUGGEST_RE = "자동완성 기능이 OFF 상태에 있습니다.<br>이용을 원하시면 로그인 하시고 하단의 자동완성 상태를 ON으로 변경해주세요.";

function setLatestWordChk(t) {
    var chkType = getStateChk();
    if (t == '0') {
        $('.search_layer_foot>div.fr>div.btn-group>button').eq(1).removeClass("btn_orange _select").addClass("btn-default");
        $('.search_layer_foot>div.fr>div.btn-group>button').eq(0).removeClass("btn-default").addClass("btn_orange _select");
        storage.setSearchWordType('0#' + chkType[1]);
        $('.search_layer>div>div.txt_info').html('');
        $('.search_layer>div>div.txt_info').hide();
        $('.search_layer>div>ul').show();
        if (chkType[1] == '1') {
            if (chkMemberAlert()) { $('.search_layer>div>div.txt_info').html(TXT_SUGGEST); }
            else { $('.search_layer>div>div.txt_info').html(TXT_SUGGEST_RE); }
           // $('.search_layer>div>div.txt_info').html(TXT_SUGGEST);
            $('.search_layer>div>div.txt_info').show();
            $('.search_layer>div>ul').hide();
        }
    }
    else {
        $('.search_layer_foot>div.fr>div.btn-group>button').eq(0).removeClass("btn_orange _select").addClass("btn-default");
        $('.search_layer_foot>div.fr>div.btn-group>button').eq(1).removeClass("btn-default").addClass("btn_orange _select");
        storage.setSearchWordType('1#' + chkType[1]);
        if (chkMemberAlert()) { $('.search_layer>div>div.txt_info').html(TXT_LATEST); }
        else { $('.search_layer>div>div.txt_info').html(TXT_LATEST_RE); }

        //$('.search_layer>div>div.txt_info').html(TXT_LATEST);
        $('.search_layer>div>div.txt_info').show();
        $('.search_layer>div>ul').hide();
    }
}

function setSuggestWordChk(t) {
    var chkType = getStateChk();
    initSearchLayer();
    if (t == '0') {
        $('.search_layer_foot>div.fr>div.btn-group>button').eq(3).removeClass("btn_orange _select").addClass("btn-default");
        $('.search_layer_foot>div.fr>div.btn-group>button').eq(2).removeClass("btn-default").addClass("btn_orange _select");
        storage.setSearchWordType(chkType[0] + "#0");
        $('.search_layer>div>div.txt_info').html('');
        $('.search_layer>div>div.txt_info').hide();
        $('.search_layer>div>ul').show();
        if (chkType[0] == '1') {
            //$('.search_layer>div>div.txt_info').html(TXT_LATEST);
            if (chkMemberAlert()) { $('.search_layer>div>div.txt_info').html(TXT_LATEST); }
            else { $('.search_layer>div>div.txt_info').html(TXT_LATEST_RE); }
            $('.search_layer>div>div.txt_info').show();
            $('.search_layer>div>ul').hide();
        }
    }
    else {
        $('.search_layer_foot>div.fr>div.btn-group>button').eq(2).removeClass("btn_orange _select").addClass("btn-default");
        $('.search_layer_foot>div.fr>div.btn-group>button').eq(3).removeClass("btn-default").addClass("btn_orange _select");
        storage.setSearchWordType(chkType[0] + "#1");
        //$('.search_layer>div>div.txt_info').html(TXT_SUGGEST);
        if (chkMemberAlert()) { $('.search_layer>div>div.txt_info').html(TXT_SUGGEST); }
        else { $('.search_layer>div>div.txt_info').html(TXT_SUGGEST_RE); }
        $('.search_layer>div>div.txt_info').show();
        $('.search_layer>div>ul').hide();
    }
}

function setStateWordChk(y) {
    var chkType = getStateChk();
    if (chkType[0] == '1' && chkType[1] == '1') {
        if (y == 0) {
            //$('.search_layer>div>div.txt_info').html(TXT_SUGGEST);
            if (chkMemberAlert()) { $('.search_layer>div>div.txt_info').html(TXT_SUGGEST); }
            else { $('.search_layer>div>div.txt_info').html(TXT_SUGGEST_RE); }
            $('.search_layer>div>div.txt_info').show();
            $('.search_layer>div>ul').hide();
        } else {
            $(".search_layer_outer").hide();
            $('.search_layer').hide();
        }
    } else if (chkType[0] == '1' && chkType[1] == '0') {
        if (y == 0) {
            //$('.search_layer>div>div.txt_info').html(TXT_LATEST);
            if (chkMemberAlert()) { $('.search_layer>div>div.txt_info').html(TXT_LATEST); }
            else { $('.search_layer>div>div.txt_info').html(TXT_LATEST_RE); }
            $('.search_layer>div>div.txt_info').show();
            $('.search_layer>div>ul').hide();
        } else {
            $(".search_layer_outer").hide();
            $('.search_layer').hide();
        }
    } else if (chkType[0] == '0' && chkType[1] == '1') {
        if (y == 0) {
            if ($.trim($('#qu').val()) != '') {
                //$('.search_layer>div>div.txt_info').html(TXT_SUGGEST);
                if (chkMemberAlert()) { $('.search_layer>div>div.txt_info').html(TXT_SUGGEST); }
                else { $('.search_layer>div>div.txt_info').html(TXT_SUGGEST_RE); }
                $('.search_layer>div>div.txt_info').show();
                $('.search_layer>div>ul').hide();
            } else {
                $('.search_layer>div>div.txt_info').html('');
                $('.search_layer>div>div.txt_info').hide();
                $('.search_layer>div>ul').show();
            }
        } else {
            if ($.trim($('#qu').val()) != '') {
                $(".search_layer_outer").hide();
                $('.search_layer').hide();
            } else {
                $('.search_layer>div>div.txt_info').html('');
                $('.search_layer>div>div.txt_info').hide();
                $('.search_layer>div>ul').show();
            }
        }
    }
}

this.setFilterByJoFromWord = function (sw) {
    sw = sw.replace(/ /g, '');
    var tmpVal = (sw.length >= 10) ? sw.substring(sw.length - 10, 10) : sw;
    var exptext = /제[0-9]{1,4}조(의)?([0-9]{1,4})?/;
    if (exptext.test(tmpVal) == false) {
        exptext = /[0-9]{1,4}조(의)?([0-9]{1,4})?/;
        if (exptext.test(tmpVal) == true) {
            var tmpE = exptext.exec(tmpVal)[0];
            sw = sw.replace(tmpE, "제" + tmpE);
        }
    }
    return sw;
};



