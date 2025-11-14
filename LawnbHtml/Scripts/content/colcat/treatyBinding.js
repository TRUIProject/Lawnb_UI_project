
$(document).ready(function () {

    $('.country_select').on('click', function () {
        $('.country_div').show();
    });

    $('.country_div .btn_close_pop').click(function () {
        treaty.SetNationText();        
        $('#selNation>span.text_ex').html(" " + nationTxt);
        $('.country_div').hide();
        treaty.initSetNationText();
    });

});

var nationTxt = "";
var treaty = new function () {

    this.initSetNationList = function () {
        setTimeout(function () { treaty.getNationList(); }, 100);
    };

    this.setCategoryType = function () {
        var chk = "";
        $("input[name=cType2]:checkbox").each(function () {
            if (this.checked) { chk += "1"; }
            else { chk += "0"; }
        });
        if (chk == '11') {
            //$("select[name=sCat1]").attr("disabled", "disabled");
            //$("#selNation").hide();

            $('#sCat1').empty();
            $('#sCat1').html("<option value='00'>전체</option>");
            $("#sCat1").attr("disabled", true);
            $('#selNation').hide();
            $('.text_ex').text("");

            for (var i = 0; i < 7; i++) {
                $("input[name=chk100" + i + "]").prop("checked", false);
                $("input[name=c100" + i + "]").prop("checked", false);
            }
        } else if (chk == '10') {
            $("select[name=sCat1]").attr("disabled", false);
            $("#selNation").show();
            treaty.setSelectCatVal(1);
        } else if (chk == '01') {
            $("select[name=sCat1]").attr("disabled", false);
            $("#selNation").hide();
            treaty.setSelectCatVal(2);
        } else {
            $("select[name=sCat1]").attr("disabled", "disabled");
            $("#selNation").hide();
        }
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

    this.setNationToCat2 = function () {
        var chkNation = "";
        for (i = 1000; i < 1007; i++) {

            var t = $("input[name=c" + i.toString() + "]:checkbox").length / 2;
            for (var x = 0; x < t; x++) {
                var _this = $("input[name=c" + i.toString() + "]:checkbox").eq(x);
                if (_this.is(":checked")) {
                    chkNation += _this.val() + ",";                  
                }
            }
            /*
            $("input[name=c" + i.toString() + "]:checkbox").each(function () {
                if (this.checked) { chkNation += $(this).val() + ","; }
            });
            */
        }
        if (chkNation != "") {
            $('#sCat2').val(chkNation.slice(0, -1));
        }
    };

    this.setNationTopCheck = function () {
        for (i = 1000; i < 1007; i++) {
            var isChk = 0;
            $("input[name=c" + i.toString() + "]:checkbox").each(function () {
                if (!this.checked) { isChk = 1; }
            });
            if (isChk == 0) {
                $("#chk" + i.toString()).prop("checked", true);
            }
        }
    };

    this.getNationList = function () {
        var chkVal = $('#sCat2').val();
        var url = "/AjaxInfo/ContentSearchNationList";
        setTimeout(function () { getTrNationList(url, chkVal); }, 300);
    };

    this.SetNationText = function () {
        //nationTxt <- 초기화가 안되는게 문제...
        nationTxt = "";
        var nCnt = 0;
        for (i = 1000; i < 1007; i++) {
            var isTopChk = 0;
            if ($("#chk" + i.toString()).prop("checked")) {
                nationTxt += (nationTxt == "") ? $("#chk" + i.toString()).parent("dt").text() : ", " + $("#chk" + i.toString()).parent("dt").text();
                isTopChk = 1;
                nCnt++;
            }
            if (isTopChk == 0) {
                var t = $("input[name=c" + i.toString() + "]:checkbox").length / 2;
                for ( var x = 0; x < t; x++)
                {
                    var _this = $("input[name=c" + i.toString() + "]:checkbox").eq(x);
                    if (_this.is(":checked"))
                    {
                        if (nCnt < 3) {
                            nationTxt += (nationTxt == "") ? _this.parent("dd").text() : ", " + _this.parent("dd").text();
                            nCnt++;
                        }
                    }
                }
                /*
                $("input[name=c" + i.toString() + "]:checkbox").each(function () {                   
                    if (this.checked) {
                        if (nCnt < 3) {
                            nationTxt += (nationTxt == "") ? $(this).parent("dd").text() : ", " + $(this).parent("dd").text();
                            nCnt++;
                        }
                    }                   
                });
                */
            }

            if (nCnt == 3) {
                nationTxt += "..."; break;
            }
        }
    };

    this.initSetNationText = function () {
        treaty.SetNationText();
        $('#selNation>span.text_ex').html(" " + nationTxt);

    };

    this.chkNat_A = function (d) {
        if ($("#chk" + d).prop("checked")) {
            $("input[name=c" + d + "]").prop("checked", true);
        } else {
            $("input[name=c" + d + "]").prop("checked", false);
        }

    };

    this.setTvnToggle = function () {
        if ($('div.left_container>section>p.mgt10').text() == "양자조약") {
            $('.tree .tNavToggle').parent('li').toggleClass('open');
            $('.tree .tNavToggle').text('+').removeClass('minus').addClass('plus');
        }
    };

};