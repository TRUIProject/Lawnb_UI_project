
$(document).ready(function () {

    $('.region_select, .region_div2 .btn_close_pop, .bg_screen').click(function () {
        $('.region_div2, .bg_screen').toggle();

        locallaw.initSetAreaText();
    });

    $('.btn_region_cancel').click(function () {
        locallaw.setCategoryType();
    });

    //$('.tNavToggle').click(function () {
    //    $(this).parent().parent().find('ol').slideToggle(300);
    //    $(this).parent().parent().find('.tNavToggle').toggleClass('on');
    //});
});

var araeTxt = "";
var locallaw = new function () {

    this.initSetAreaList = function () {
        setTimeout(function () { locallaw.getArea(); }, 100);
    };


    this.setSelectCatVal = function (opt) {
        var optArr = catArr.split('|');
        $("#sCat1 option").remove();
        $("#sCat1").append("<option value='00'>전체</option>");
        jQuery.each(optArr, function (index, value) {
            var optVal = value.split(':');
            if (value.charAt(optVal[0].length - 1) == opt) {
                $("#sCat1").append("<option value='" + optVal[0].slice(0, -1) + "'>" + optVal[1] + "</option>");
            }
        });
    };

    //this.setAreaTopCheck = function () {
    //    for (i = 1000; i < 1018; i++) {
    //        var isChk = 0;
    //        $("input[name=c" + i.toString() + "]:checkbox").each(function () {
    //            if (!this.checked) { isChk = 1; }
    //        });
    //        if (isChk == 0) {
    //            $("#chk" + i.toString()).prop("checked", true);
    //        }
    //    }
    //};

    this.getArea = function () {
        var chkVal = $('#sCat2').val();
        var url = "/AjaxInfo/ContentSearchAreaList";
        setTimeout(function () { getLoAreaList(url, chkVal); }, 300);
    };

    this.SetAreaText = function () {
        araeTxt = "";
        var nCnt = 0;
        for (i = 1000; i < 1018; i++) {
            var isTopChk = 0;
            if ($("#eType" + i.toString() + "_a").prop("checked")) {
                araeTxt += (araeTxt == "") ? $("#eType" + i.toString() + "_a").val() : ", " + $("#eType" + i.toString() + "_a").val();
                isTopChk = 1;
                nCnt++;
            }
            if (isTopChk == 0) {
                var t = $("input[name=eType" + i.toString() + "]:checkbox").length;
                for (var x = 0; x < t; x++) {
                    var _this = $("input[name=eType" + i.toString() + "]:checkbox").eq(x);
                    if (_this.is(":checked")) {
                        if (nCnt < 7) {
                            araeTxt += (araeTxt == "") ? _this.parent("label").text() : ", " + _this.parent("label").text();
                            nCnt++;
                        }
                    }
                }
            }

            if (nCnt == 7) {
                araeTxt += "..."; break;
            }
        }
        if (nCnt == 0) { $('#sCat2').val('');}
    };

    this.initSetAreaText = function () {
        locallaw.SetAreaText();
        $('#selArea>span.text_ex').html(" " + araeTxt);

    };


    this.SetAreaChkToCat2 = function () {
        var chkArea = "";
        for (i = 1000; i < 1018; i++) {

            var t = $("input[name=eType" + i.toString() + "]:checkbox").length;
            for (var x = 0; x < t; x++) {
                var _this = $("input[name=eType" + i.toString() + "]:checkbox").eq(x);
                if (_this.is(":checked")) {
                    chkArea += _this.val() + ",";
                }
            }
        }
        if (chkArea != "") {
            $('#sCat2').val(chkArea.slice(0, -1));
        }
    };

    this.SetAreaFiltering = function () {
        var cHtml = $('#goveinfo').html();
        if (typeof cHtml != "undefined") {
            if (cHtml.trim() != '') {
                $('#goveType').html(cHtml);
                $('#goveinfo').html('');
                setTreeBinding();
            }
        }

    };

    this.setCategoryType = function () {
        $('#selArea>span.text_ex').text("");
        $('.tNavToggle').removeClass('on');
        $('.ol_goveinfo').hide();
        for (i = 1000; i < 1018; i++) {
            $("#eType" + i.toString() + "_a").prop("checked", false);
            $("input[name=eType" + i.toString() + "]").prop("checked", false);
        }
    };

    this.ShowAreaSet = function (obj) {
        if (mobileType == "N") {
            $(obj).parent().parent().find('ol').slideToggle(300);
            $(obj).parent().parent().find('.tNavToggle').toggleClass('on');
        } else {
            $(obj).parent().find('ol').slideToggle(300);
            $(obj).parent().find('.tNavToggle').toggleClass('on');
        }
    };

};