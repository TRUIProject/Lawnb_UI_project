$(document).ready(function () {
    goMoveList = function (n) {
        $('#sSubType').val(n);
        $('#sSortChk_1').val("0");
        $('#sPage').val("1");
        $('#sList').val("20");
        $('#sType').val('0');
        $('#sWord').val('');
        $('#sSubType1').val('');
        $('#sSubType2').val('');
        if (n == 0) {
            $('#sSort').val("2");
            setSearchObject["sSort"] = "2";
            initSearchObject["sSort"] = "2";
        } else {
            $('#sSort').val("1");
            setSearchObject["sSort"] = "1";
            initSearchObject["sSort"] = "1";
        }
      
        $('#searchForm').attr("action", "/Info/ContentList");
        $('#searchForm').submit();
    }


    goSearchList = function () {
        if ($('#sWordEx').length > 0) {
            $('#sWordEx').val('');
        }

        var chkVal = page.chkSearchWord();
        if (chkVal == 0) {
            alert('검색어를 입력해 주세요.');
            return false;
        }
        else if (chkVal == 2) {
            return false;
        } else if (chkVal == 3) {
            alert('검색어는 두 자 이상이어야 합니다.');
            return false;
        } else {
            page.setWordHighlightData();
            $('#sSort').val("0");
            $('#sPage').val("1");
            $('#sList').val("20");
            $('#sType').val('0');
            $('#sSubType1').val('');
            $('#sSubType2').val('');
            setSearchObject["sSort"] = "0";
            initSearchObject["sSort"] = "0";
            page.setTheSortChk(0);
            $('#searchForm').attr("action", "/Info/ContentList");
            $('#searchForm').submit();
        }

    };


    this.setDidToEsg = function (s) {
        var lArr = [];
        if (localStorage.getItem("sEsgDidList") == null) {
            lArr.push(s);
            localStorage.setItem("sEsgDidList", JSON.stringify(lArr));
        } else {
            if (localStorage.getItem("sEsgDidList") == '') {
                localStorage.removeItem('sEsgDidList');
            } else {
                lArr = JSON.parse(localStorage.getItem("sEsgDidList"));
                lArr.push(s);
                let lArr2 = lArr.filter((v, i) => lArr.indexOf(v) === i);
                localStorage.setItem("sEsgDidList", JSON.stringify(lArr2));
            }
        }
    };


    this.viewEsgDown = function (s, data, ext, rn) {
      
        const rand1 = Math.floor(Math.random() * 100);
        data = unescape(data);
        var url = "https://www.lawnb.com/AjaxInfo/ContentFileDown";
        url += "?sCode=notice";
        url += "&fileName=" +  data;
        url += "&ext=" ;
        url += "&realFileName=" + rand1 + rn;
        url += "&docdownload=Y";
        location.href = url;

       
    };
});