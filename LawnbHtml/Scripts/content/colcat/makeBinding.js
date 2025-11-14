
$(document).on('change', '#dNum', function () {
    IsGoSubMain = true;
    $('#sType').val("0");
    $('#sNum').val($(this).children('option:selected').val());
    if ($(this).children('option:selected').val() == "21") { $('#sType1').val("0"); } else { $('#sType1').val("2"); }
    if ($('#sCat3').length > 0) $('#sCat3').val("");
    $('#searchForm').attr("action", "/Info/ContentSubMain");
    $('#searchForm').removeAttr('onsubmit').submit();
});

var make = new function () {

    this.initMakeMainList = function () {
        $('#sType').val("1");
        if ($("#sCat1 option:selected").val() != "00") {
            make.selectMakeList($("#sCat1 option:selected").val());
        } else {
            page.initSearchList();
        }
    };

    this.selectMakeList = function (c) {
        for (i = 0; i < 3; i++) {
            $('#div_li' + i.toString()).removeClass('_this');
        }
        $('#div_li' + c.toString()).addClass('_this');
        $('#sType').val("1");
        $('#sType1').val(c);
        $("select[name=sCat1]").val("00").prop("selected", true);
        if ($('#sCat3').length > 0) $('#sCat3').val("");
        page.initSearchList();
    };

    this.selectSubMakeList = function (c) {
        $('#sType').val("1");
        $('#sCat3').val(c);
        page.initSearchList();
    };

    this.goSubMainList = function (c) {
        IsGoSubMain = true;
        $('#sList').val("20");
        $("select[name=sCat1]").val(c).prop("selected", true);
        $('#searchForm').removeAttr('onsubmit').submit();
    };

};
