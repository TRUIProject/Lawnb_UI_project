
var mstorage = new function () {
    var currIdx = 0;

    if (localStorage.getItem("currIdx") == null) {
        localStorage.setItem("currIdx", currIdx);
    } else {
        currIdx = localStorage.getItem("currIdx") * 1;
    }

    this.initViewTypeSetting = function () {
        console.log(currIdx);
        $("#first_btns").removeClass('disabled');
        $("#prev_btns").removeClass('disabled');
        $("#next_btns").removeClass('disabled');
        if (currIdx == 0 && JSON.parse(localStorage.getItem("sViewMobileList")).length == 1) {
            $('#next_btns').addClass('disabled');
        } else if ((currIdx + 1) == JSON.parse(localStorage.getItem("sViewMobileList")).length) {
            $('#next_btns').addClass('disabled');
        } else {
            $("#next_btns").removeClass('disabled');
        }
    };

    this.increaseIndex = function () {
        currIdx += 1;
        localStorage.setItem("currIdx", currIdx * 1);
    };

    this.decreaseIndex = function () {
        if (currIdx > 0) {
            currIdx -= 1;
            localStorage.setItem("currIdx", currIdx * 1);
        }
    };

    this.addHistory = function (params) {

        var urlArr = [];
        if (mstorage.hasNext()) {
            mstorage.removeHistory();
        }

        if (localStorage.getItem("currUrlList") == null) {
            urlArr.push(params);
            localStorage.setItem("currUrlList", JSON.stringify(urlArr));
        }
        else if (localStorage.getItem("currUrlList") != null) {
            mstorage.increaseIndex();
            if (urlArr.length == 100) {
                urlArr.shift();
            }
            urlArr.push(params);
            localStorage.setItem("currUrlList", JSON.stringify(urlArr));
        }
    };

    this.removeCurrentHistory = function () {
        if (mstorage.hasNext()) {
            mstorage.removeHistory();
        }
        localStorage.removeItem(currIdx);
    };

    this.removeHistory = function () {
        var lLength = localStorage.length;
        var start = currIdx * 1 + 1;
        for (var i = start; i < lLength; i++) {
            localStorage.removeItem(i);
        }
    };

    this.hasNext = function () {
        var result = false;
        if (JSON.parse(localStorage.getItem("sViewMobileList")).length > (currIdx + 1)) { result = true; }
        return result;
    };

    this.hasBefore = function () {
        var result = false;
        if (currIdx > 0) {
            result = true;
        }
        return result;
    };

    this.getItemOneValue = function () {

    };

    this.getItemValues = function () {
        //  return JSON.parse(localStorage.getItem("currUrlList"));
        var lArr = [];
        lArr = JSON.parse(localStorage.getItem("sViewMobileList"));
        return lArr[currIdx].url;
    };

    this.prevItems = function () {
        if ($("#prev_btns").hasClass('disabled')) { } else {
            if (mstorage.hasBefore()) {
                mstorage.decreaseIndex();
                mstorage.checkIsMove();
                
                $("#next_btns").removeClass('disabled');
                
                location.href = mstorage.getItemValues();
            } else {
                mstorage.clearAll();
                location.href = '/Main/ListBack';
            }
        }
    };

    this.nextItems = function () {
        if ($("#next_btns").hasClass('disabled')) { } else {
            if (mstorage.hasNext()) {
                mstorage.increaseIndex();
                mstorage.checkIsMove();
                location.href = mstorage.getItemValues();
            }
        }
    };

    this.firstItem = function () {
        if ($("#first_btns").hasClass('disabled')) { } else {
            if (currIdx == 0) {
                mstorage.clearAll();
                location.href = '/Main/ListBack';
            } else {
                currIdx = 0;
                localStorage.setItem("currIdx", currIdx * 1);
                mstorage.checkIsMove();
                location.href = mstorage.getItemValues();
            }
        }
    };

    this.reloadItem = function () {
        mstorage.checkIsMove();
        location.href = mstorage.getItemValues();
    };

    this.clearAll = function () {
        currIdx = 0;
        localStorage.removeItem('sViewMobileList');
        localStorage.removeItem('currIdx');
        localStorage.removeItem('isPageMove');
    };

    this.checkIsMove = function () {
        if (localStorage.getItem("isPageMove") == null) {
            localStorage.setItem("isPageMove", "Y");
        } else {
            localStorage.setItem("isPageMove", "Y");
        }
    };

    this.isPageChk = function () {
        var result = false;
        if (localStorage.getItem("isPageMove") != null) {
            if (localStorage.getItem("isPageMove") == "Y") {
                result = true;
            }
        }
        return result;
    };

    this.setMobileView = function (s) {

        if (!mstorage.isPageChk()) {
            var lArr = [];
            if (localStorage.getItem("sViewMobileList") != null) {
                lArr = JSON.parse(localStorage.getItem("sViewMobileList"));
                var h = $(location).attr('href');
                if (currIdx >= 0) {
                    if (h == lArr[currIdx].url) {
                        mstorage.decreaseIndex();
                    } else {
                        var uArr = [];
                        for (i = 0; i <= currIdx; i++) {
                            uArr.push(lArr[i]);
                        }
                        mstorage.increaseIndex();
                        uArr.push(s);
                        localStorage.setItem("sViewMobileList", JSON.stringify(uArr));
                        lArr = [];
                    }
                } else {
                    currIdx = 0;
                    lArr.push(s);
                    localStorage.setItem("sViewMobileList", JSON.stringify(lArr));
                }

            } else {
                currIdx = 0;
                lArr.push(s);
                localStorage.setItem("sViewMobileList", JSON.stringify(lArr));
            }
        } else {
            localStorage.setItem("isPageMove", "N");
        }

        mstorage.initViewTypeSetting();
    };


};