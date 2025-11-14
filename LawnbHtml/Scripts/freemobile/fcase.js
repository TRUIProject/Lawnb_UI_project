var fcase = new function () {

    var fParams = null;
    this.init = function (data) {
        fParams = data;
    };

    this.changeSearchList = function (idx) {

        $("#sSubType").val(idx);
        $("#sPage").val("1");        
        fcommon.searchList("2");

        if ($("#co_mainContainer").has('mobile')) {
            $('.left_container').removeClass('slide_mov ').removeClass('add_border ');
            $("html").css("overflow", "auto");
        }
    };

    this.initMainList = function (n, n1, m) {
        var sCode = $("#sCode").val();
        var data = { "sCode": sCode,
            "sId": n,
            "sSubId": n1,
            "sType": m
        };
        sendNonBlockingAjaxRequest(fParams.bottomSetUrl, data, fcase.setMainBottomCallback);
    };

    this.setMainBottomCallback = function (result) {
        if (result != null) {
            $('#main_bt_list').empty();
            $('#main_bt_list').html(result);
        } else {
            $('#main_bt_list').empty();
        }
        setHeight_under();
    };
    
    this.goSubMainList = function (n, obj) {
        $('#sType').val("0");
        $('#sCat').val(n);
        if ($('#sCat').val() == null) {
            $('#sCat1').val(n);
            $('#sDate1').val($('#eYear').val());
        } else {
            $('#sDate1').val($('#sYear').val());
        }
        if ($('#sDate1').val() == "00") {
            $('#sDate1').val($(obj).find("span").text().split('년')[0].replace('[', '').replace(/ /g, ''));
        }
        
        $('#sSort').val('1');
        $('#searchForm').attr("action", "/Info/ContentSubMain");
        $('#searchForm').removeAttr('onsubmit').submit();
    };

    this.setYearInfo = function () {
        //var colCode = $("#sCode").val();
        var toDay = new Date();
        var year = toDay.getFullYear();        
        var sYear = ($('#sYearChk').length > 0) ? $('#sYearChk').val() : "0";
        
        $("#sYear").val(sYear);
        if ($('#eYear').length > 0) { $("#eYear").html(sYear); }
    };
};
