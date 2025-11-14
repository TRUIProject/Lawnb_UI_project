// ajax
var isSendable = true;

function sendFileDownAjaxRequest(url, requestParam) {
    $.ajax({
        url: url,
        type: "POST",
        data: requestParam,
        dataType: "json",
        //contentType: false,
        //processData: false,
        success: function (res) {
            if (res != null && res.msg != "fail") {
                viewFileDownForm(requestParam);
            } else {
                alert("파일이 존재하지 않습니다.");
            }
        },
        error: function (res) {
            alert("파일다운로드 중 오류가 발생했습니다.");            
        }
    });
};

function sendAjaxRequest(url, requestParam, callback) {
    if (isSendable) {
        $.ajax({
            url: url,
            type: "POST",
            data: requestParam,
            dataType: "html",
            beforeSend: function (xhr) {
                isSendable = false;
                $('#bg_screen').show();
                $('.loading_img').show();
            }
        }).done(function (data) {
            callback(data);
        }).fail(function (jqXHR, textStatus, errorThrown) {
            if (jqXHR.status == 9999) {
                location.reload();
            } else {
                //alert("응용프로그램을 사용하는 중 예기치 않은 오류로 인하여 작동을 하지 않습니다.");
            }
        }).always(function () {
            isSendable = true;
            $('#bg_screen').hide();
            $('.loading_img').hide();

            if (checkMobile()) {
                mobileIndividualCheck();
            }
        });
    }
};

// ajax always 시 $('#bg_screen').hide(); show()로 변경.
function sendAjaxBGshowRequest(url, requestParam, callback) {
    if (isSendable) {
        $.ajax({
            url: url,
            type: "POST",
            data: requestParam,
            dataType: "html",
            beforeSend: function (xhr) {
                isSendable = false;
                $('#bg_screen').show();
                $('.loading_img').show();
            }
        }).done(function (data) {
            callback(data);
        }).fail(function (jqXHR, textStatus, errorThrown) {
            if (jqXHR.status == 9999) {
                location.reload();
            } else {
                //alert("응용프로그램을 사용하는 중 예기치 않은 오류로 인하여 작동을 하지 않습니다.");
            }
        }).always(function (data, textStatus, jqXHR) {
            isSendable = true;            
            $('.loading_img').hide();
        });
    }
};


function sendAjaxHistoryRequest(url, requestParam, callback, stateObject) {
    if (isSendable) {
        $.ajax({
            url: url,
            type: "POST",
            data: requestParam,
            dataType: "html",
            beforeSend: function (xhr) {
                isSendable = false;
                $('#bg_screen').show();
                $('.loading_img').show();
            }
        }).done(function (data) {
            callback(data);
            if (window.history.pushState) {
                if (!stateObject) {
                    stateObject = {
                        "url": url + "?" + $.param(requestParam)
                    };
                }
                window.history.pushState(stateObject, new Date().getTime());
                storage.increaseIndex();
            }
            drawNavigator();
        }).fail(function (jqXHR, textStatus, errorThrown) {
            if (jqXHR.status == 9999) {
                location.reload();
            } else {
                //alert("응용프로그램을 사용하는 중 예기치 않은 오류로 인하여 작동을 하지 않습니다.");
            }
        }).always(function () {
            isSendable = true;
            $('#bg_screen').hide();
            $('.loading_img').hide();
        });
    }
};

// ajax 순차 호출
function sendSequenceAjaxRequest(url, requestParam, callback) {
    $.ajaxQueue({
        url: url,
        type: "POST",
        data: requestParam,
        dataType: "html"
    }).done(function (data) {
        callback(data);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        if (jqXHR.status == 9999) {
            location.reload();
        } else {
            //alert("응용프로그램을 사용하는 중 예기치 않은 오류로 인하여 작동을 하지 않습니다.");
        }
    }).always(function () {
        hideloading();
    });
};

// ajax 멀티 호출
function sendNonBlockingAjaxRequest(url, requestParam, callback) {
    $.ajax({
        url: url,
        type: "POST",
        data: requestParam,
        dataType: "html"
    }).done(function (data) {
        callback(data);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        if (jqXHR.status == 9999) {
            location.reload();
        } else {
            //alert("응용프로그램을 사용하는 중 예기치 않은 오류로 인하여 작동을 하지 않습니다.");
        }
    }).always(function () {
        // hideloading();                     
        if (checkMobile()) {
            mobileIndividualCheck();
        }   
    });
};

// ajax JSon data
function sendNonBlockingAjaxJsonRequest(url, requestParam, callback) {
    $.ajax({
        url: url,
        type: "POST",
        data: requestParam,
        dataType: "json",
        error: function (e) {
            console.log(e.responseText);
        }
    }).done(function (data) {
        callback(data);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        if (jqXHR.status == 9999) {
            location.reload();
        } else {
            //alert("응용프로그램을 사용하는 중 예기치 않은 오류로 인하여 작동을 하지 않습니다.");
        }
    }).always(function () {
        //hideloading();
    });
};


// ajax JSon data
function sendNonBlockingAjaxJsonpRequest(url, requestParam, callback) {
    $.ajax({
        url: url,
        type: "POST",
        data: requestParam,
        dataType: "jsonp"
    }).done(function (data) {
        callback(data);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        if (jqXHR.status == 9999) {
            location.reload();
        } else {
            //alert("응용프로그램을 사용하는 중 예기치 않은 오류로 인하여 작동을 하지 않습니다.");
        }
    }).always(function () {
        //hideloading();
    });
};

// ajax Text data
function sendNonBlockingTextToJsonRequest(url, requestParam, callback) {
    $.ajax({
        url: url,
        type: "POST",
        data: requestParam,
        dataType: "text"
    }).done(function (data) {
        callback(data);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        if (jqXHR.status == 9999) {
            location.reload();
        } else {
            //alert("응용프로그램을 사용하는 중 예기치 않은 오류로 인하여 작동을 하지 않습니다.");
        }
    }).always(function () {
       // hideloading();
    });
};

function sendNonBlockingTypeOfAjaxRequest(url, params, cType, dType, callback) {
    $.ajax({
        url: url,
        type: "POST",
        data: params,
        contentType: cType,
        dataType: dType
    }).done(function (data) {
        callback(data);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        if (jqXHR.status == 9999) {
            location.reload();
        } else {
            //alert("응용프로그램을 사용하는 중 예기치 않은 오류로 인하여 작동을 하지 않습니다.");
        }
    }).always(function () {
        //hideloading();
    });
};


reloadImg = function () {
    $('.cImg').load(function () {
        setHeight_popup();
    }).error(function () {
        setHeight_popup();
    });
};

showloading = function () {
    $('#bg_screen').show();
    $('.loading_img').show();
};

hideloading = function () {
    $('#bg_screen').hide();
    $('.loading_img').hide();
};

this.viewFileDownForm = function (params) {
    if (checkMobile()) {
        var url = "/AjaxInfo/ContentFileDown";
        url += "?sCode=" + params.sCode;
        url += "&fileName=" + params.fileName;
        url += "&ext=" + params.ext;
        //url += "&realFileName=" + ((typeof (view) != 'undefined') ? view.getFileRealName() : page.getFileRealName());
        url += "&realFileName=" + ((typeof (view) != 'undefined') ? view.getFileRealName() : ((typeof (page) != 'undefined') ? page.getFileRealName() : ""));
        url += "&docdownload=Y";
        location.href = url;
    }
    else {
        var url = "/AjaxInfo/ContentFileDown";
        var frm = document.createElement("form");
        frm.method = "post";
        var input = new Array();

        for (var i = 0; i < 4; i++) {
            input[i] = document.createElement("input");
            $(input[i]).attr("type", "hidden");
            if (i == 0) {
                $(input[i]).attr("name", "sCode");
                $(input[i]).attr("value", params.sCode);
            }
            else if (i == 1) {
                $(input[i]).attr("name", "fileName");
                $(input[i]).attr("value", params.fileName);
            }
            else if (i == 2) {
                $(input[i]).attr("name", "ext");
                $(input[i]).attr("value", params.ext);
            }
            else {
                $(input[i]).attr("name", "realFileName");
                $(input[i]).attr("value", (typeof (view) != 'undefined') ? view.getFileRealName() : ((typeof (page) != 'undefined') ? page.getFileRealName() : ""));
            }
            frm.appendChild(input[i]);
        }
        document.body.appendChild(frm);

        frm.action = url;
        frm.submit();
    }
};


//문자열 편집
function replaceChars(entry, out, add) {
    temp = "" + entry; // temporary holder
    while (temp.indexOf(out) > -1) {
        pos = temp.indexOf(out);
        temp = "" + (temp.substring(0, pos) + add + temp.substring((pos + out.length), temp.length));
    }
    return temp;
}

//숫자 자동 증가
var autoIncrementVal = function (obj, val, durationVal, inTxt) {
    $({ someValue: 0 }).animate({ someValue : val }, {
        duration: durationVal,
        easing: 'swing', 
        step: function () { 
            $(obj).html(Math.ceil(this.someValue) + inTxt);
        }
    });
}

//모바일 개인화 bg_screen show
function mobileIndividualCheck()
{
    if($("#individual_area").is(':visible'))
    {
        $("#bg_screen").show();
    }
}