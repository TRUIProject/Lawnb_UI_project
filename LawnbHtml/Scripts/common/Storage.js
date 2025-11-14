$(function () {
    var dtarget = new Date();
    var targetday = dtarget.getDate();
    if (localStorage.getItem("chkDate") == null) {
        localStorage.removeItem('caseHisList');
        localStorage.removeItem('sViewDataList');
        localStorage.removeItem('sSortChk');
        localStorage.removeItem('sNaviLawyerList');
        storage.setDelTotalCnt();
        localStorage.setItem("chkDate", targetday);
    }
    else {
        if (localStorage.getItem("chkDate") != targetday) {
            localStorage.removeItem('caseHisList');
            localStorage.removeItem('sViewDataList');
            localStorage.removeItem('sSortChk');
            localStorage.removeItem('sNaviLawyerList');
            storage.setDelTotalCnt();
            localStorage.setItem("chkDate", targetday);
        }
    }
});


var storage = new function () {
    this.getCurHour = function () {
        var dtarget = new Date();
        return dtarget.getHours();
    };

    this.setRemoveData = function (s) {
        localStorage.setItem("sStatusType", s);
    };

    this.setStatusType = function (s) {
        localStorage.setItem("sStatusType", s);
    };

    this.getStatusType = function () {
        return localStorage.getItem("sStatusType");
    };

    this.setCaseHistory = function (s) {
        var cases = [];
        if (localStorage.getItem("caseHisList") == null) {
            cases.push(s);
            localStorage.setItem("caseHisList", JSON.stringify(cases));
        } else {
            cases = JSON.parse(localStorage.getItem("caseHisList"));
            if (cases.indexOf(s) < 0) {
                if (cases.length == 8) {
                    cases.shift();
                }
                cases.push(s);
                localStorage.setItem("caseHisList", JSON.stringify(cases));
            }
        }
    };

    this.setViewLatest = function (s) {
        var lArr = [];
        if (localStorage.getItem("sViewDataList") == null) {
            lArr.push(s);
            localStorage.setItem("sViewDataList", JSON.stringify(lArr));
        } else {
            lArr = JSON.parse(localStorage.getItem("sViewDataList"));
            var item = $.grep(lArr, function (e) { return e.did === s.did });
            if (item.length == 0) {
                if (lArr.length == 100) {
                    lArr.shift();
                }
                lArr.push(s);
                localStorage.setItem("sViewDataList", JSON.stringify(lArr));
            }
        }
    };

    this.getViewLatest = function () {
        return JSON.parse(localStorage.getItem("sViewDataList"));
    };

    this.setWordToDesk = function (s) {
        var lArr = [];
        if (localStorage.getItem("sWordDataList") == null) {
            lArr.push(s);
            localStorage.setItem("sWordDataList", JSON.stringify(lArr));
        } else {
            if (localStorage.getItem("sWordDataList") == '') {
                storage.setDelWordToDesk();
            } else {
                lArr = JSON.parse(localStorage.getItem("sWordDataList"));
                var item = $.grep(lArr, function (e) { return e.dWord === s.dWord });
                if (item.length == 0) {
                    if (lArr.length == 20) {
                        lArr.shift();
                    }
                    lArr.push(s);
                } else {
                    for (var i = 0; i < lArr.length; i++) {
                        if (s.dWord == lArr[i].dWord) {
                            lArr.splice(i, 1);
                        }
                    }
                    lArr.push(s);
                }
                localStorage.setItem("sWordDataList", JSON.stringify(lArr));
            }
        }
    };

    this.setWordDelToDesk = function (s) {
        localStorage.setItem("sWordDataList", s);
    };

    this.getWordToDesk = function () {
        //alert(localStorage.getItem("sWordDataList"));
        if (localStorage.getItem("sWordDataList") == "") { return ""; }
        else { return JSON.parse(localStorage.getItem("sWordDataList")); }
    };

    this.setDelWordToDesk = function () {

        // 검색어 DB삭제 all
        var params = { "userCode": uCode, "searchWord": "" };
        sendNonBlockingAjaxJsonRequest("/AjaxInfo/DelSearchWord/", params, function (result) { });

        localStorage.removeItem('sWordDataList');
    };

    this.setSearchWordType = function (s) {
        localStorage.setItem("sWordType", s);
    };

    this.getSearchWordType = function () {
        if (localStorage.getItem("sWordType") == null) {
            localStorage.setItem("sWordType", "0#0");
        }
        return localStorage.getItem("sWordType");
    };

    this.setTotalCnt = function (s) {
        var lArr = [];

        if (localStorage.getItem("sTotalCnt") == null) {
            lArr.push(s);
            localStorage.setItem("sTotalCnt", JSON.stringify(lArr));
        } else {
            lArr = JSON.parse(localStorage.getItem("sTotalCnt"));
            var item = $.grep(lArr, function (e) { return e.did === s.did });
            if (item.length == 0) {
                lArr.push(s);
                localStorage.setItem("sTotalCnt", JSON.stringify(lArr));
            }
        }
    };

    this.getTotalCnt = function () {
        return JSON.parse(localStorage.getItem("sTotalCnt"));
    };

    this.setDelTotalCnt = function () {
        localStorage.removeItem('sTotalCnt');
        storage.setDelTotalContentForm();
    };

    this.setTotalContentForm = function (s) {
        localStorage.setItem("sTotalForm", JSON.stringify(s));
    };

    this.getTotalContentForm = function () {
        return JSON.parse(localStorage.getItem("sTotalForm"));
    };

    this.setDelTotalContentForm = function () {
        localStorage.removeItem('sTotalForm');
    };

    this.setReuterNews = function (s) {
        var dtarget = new Date();
        localStorage.setItem("reuterHour", dtarget.getHours());
        localStorage.setItem("reuterNewsList", JSON.stringify(s));
    };

    this.getReuterHour = function () {
        return localStorage.getItem("reuterHour");
    };

    this.getReuterNews = function () {
        return JSON.parse(localStorage.getItem("reuterNewsList"));
    };

    this.setSortChk = function (s) {
        var lArr = [];

        if (localStorage.getItem("sSortChk") == null) {
            lArr.push(s);
            localStorage.setItem("sSortChk", JSON.stringify(lArr));
        } else {
            var item = $.grep(lArr, function (e) { return e.code === s.code });
            if (item.length == 0) {
                lArr.push(s);
                localStorage.setItem("sSortChk", JSON.stringify(lArr));
            } else {
                lArr = JSON.parse(localStorage.getItem("sSortChk"));
                for (var i = 0; i < lArr.length; i++) {
                    if (lArr[i].code == s.code) {
                        lArr[i].chk = s.chk;
                        break;
                    }
                }
                localStorage.setItem("sSortChk", JSON.stringify(lArr));
            }
        }
    };

    this.getSortChk = function () {
        return JSON.parse(localStorage.getItem("sSortChk"));
    };

    this.setNaviLawyerDesk = function (s) {
        var lArr = [];
        if (localStorage.getItem("sNaviLawyerList") == null) {
            lArr.push(s);
            localStorage.setItem("sNaviLawyerList", JSON.stringify(lArr));
        } else {
            lArr = JSON.parse(localStorage.getItem("sNaviLawyerList"));
            var item = $.grep(lArr, function (e) { return e.did === s.did });
            if (item.length == 0) {
                if (lArr.length == 20) {
                    lArr.shift();
                }
                lArr.push(s);
            } else {
                for (var i = 0; i < lArr.length; i++) {
                    if (s.did == lArr[i].did) {
                        lArr.splice(i, 1);
                    }
                }
                lArr.push(s);
            }
            localStorage.setItem("sNaviLawyerList", JSON.stringify(lArr));
        }
    };

    this.setDelNaviLawyerDesk = function (s) {
        localStorage.setItem("sNaviLawyerList", JSON.stringify(s));
    };

    this.getNaviLawyerDesk = function () {
        return JSON.parse(localStorage.getItem("sNaviLawyerList"));
    };

    this.setMyDeskChk = function () {
        localStorage.setItem("sMyDeskChkVal", "Y");
    };

    this.setDeleteMyDeskChk = function () {
        localStorage.removeItem('sMyDeskChkVal');
    };

    this.getMyDeskChk = function () {
        if (localStorage.getItem("sMyDeskChkVal") == null) {
            localStorage.setItem("sMyDeskChkVal", "N");
        }
        return localStorage.getItem("sMyDeskChkVal")
    };

    this.getIsMemberLogin = function () {
        if (localStorage.getItem("LawnbTime") == null) {
            return "";
        } else {
            return localStorage.getItem("LawnbTime");
        }
    };

    this.setHwpChrType = function (s) {
        localStorage.setItem("sHwpChr", s);
    };

    this.getHwpChrType = function () {
        if (localStorage.getItem("sHwpChr") == null) {
            return "1";
        } else {
            return localStorage.getItem("sHwpChr");
        }
    };

    // 개인화 나의 검색
    this.setMySearchData = function (_onoff, _cont) {
        if (_cont == "") {
            if (_onoff != "") {
                localStorage.setItem("mySearchOnOff", _onoff);
            }
            else {
                localStorage.removeItem("mySearchOnOff");
            }            
            localStorage.removeItem("mySearchContentList");
        }
        else {
            localStorage.setItem("mySearchOnOff", _onoff);
            localStorage.setItem("mySearchContentList", _cont);
        }        
    };


    this.setSearchWord = function (s) {
        localStorage.setItem("sWordData", s);
    };

    this.getSearchWord = function () {
        if (localStorage.getItem("sWordData") == null) {
            localStorage.setItem("sWordData", "");
        }
        return localStorage.getItem("sWordData");
    };
};