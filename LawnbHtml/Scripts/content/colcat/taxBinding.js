var gubuns = {
    "semu" : ["tax:세 무","acc:회 계","etc:기타경제법","upda:정기Update"],
    "opinion" : ["k1:자문위원","k2:칼럼위원","k3:외부위원"],
    "yegu1" : ["151:사전답변","152:질의회신","159:자문사례","161:심사청구","162:심판청구","163:판례","169:헌재"],
    "yegu2" : ["55:법인세법","2:소득세법","56:조세특례제한법","54:부가가치세법","52:상속세 및 증여세법","9:국제조세조정에 관한 법률","10:국세기본법","65:지방세법","66:지방세기본법","67:지방세특례제한법","6:개별소비세법","11:국세징수법","12:교육세법","22:교통ㆍ에너지ㆍ환경세법","14:인지세법","53:외국인투자촉진법","57:주세법","17:자산재평가법","20:증권거래세법","62:종합부동산세법","23:농어촌특별세법","99:폐지,삭제,구법","9999:민법등 기타법"],
    "insa" : ["i1:임금","i2:근로시간","i3:휴일휴가","i4:비정규직","i5:근로관계","i6:4대보험","i7:모성보호"],
    "jog": ["1:지방세", "2:부동산보유세", "3:양도소득세", "4:상속증여세", "5:법인세", "6:종합소득세", "8:조특법", "9:부가가치세"]
};

var tax = new function () {

    this.jogyeonGoToList = function (n, c, v, x) {

        $('#sType').val("0");
        $('#sViewPage').val(c);
        $('#sCat1').val(c);
        $('#sCat2').val(v);
        $('#sSubType1').val(c);
        $('#sType4').val(n);

        $('#sPage').val(1);       
        $("#sSubType").val(x);

        getApiContentList("/AjaxInfo/ContentList");
        //$('#searchForm').attr("action", "/Info/ContentList");
        //$('#searchForm').removeAttr('onsubmit').submit();

    };

    this.goToSearchList = function (n, c, v) {
        IsGoSubMain = true;
        $('#sType').val("0");
        $('#sViewPage').val(c);
        $('#sCat1').val(c);
        $('#sCat2').val(v);
        $('#sSubType1').val(c);
        $('#sType4').val(n);

        $('#searchForm').attr("action", "/Info/ContentList");
        $('#searchForm').removeAttr('onsubmit').submit();

    };

    this.jogyeonGoToSearchList = function (n, c, v, x) {
        IsGoSubMain = true;
        $('#sType').val("0");
        $('#sViewPage').val(c);
        $('#sCat1').val(c);
        $('#sCat2').val(v);
        $('#sSubType1').val(c);
        $('#sType4').val(n);

        $("#sCat3").val(x);

        $('#searchForm').attr("action", "/Info/ContentList");
        $('#searchForm').removeAttr('onsubmit').submit();

    };

    this.setChangeTaxCategory = function (c, v, r) {
        if (c != '0') {
            var optArr = null;
            $("#liCat2").show();
            $("#sCat2 option").remove();
            $("#sCat2").append("<option value='0'>전체</option>");
            switch (c) {
                case "1":
                    optArr = gubuns.semu;
                    break;
                case "2":
                    optArr = gubuns.opinion;
                    break;
                case "3":
                    optArr = gubuns.yegu1;
                    break;
                case "4":
                    optArr = gubuns.yegu1;
                    break;
                case "5":
                    optArr = gubuns.insa;
                    break;
                case "6":
                    optArr = gubuns.jog;
                    break;
            }
            jQuery.each(optArr, function (index, value) {
                var optVal = value.split(':');
                $("#sCat2").append("<option value='" + optVal[0] + "'>" + optVal[1] + "</option>");
            });

            //cat2 값 넘기기 위해 저장
            if (v == undefined || v == "")
                v = "0";
            $("#liCat2 #sCat2").val(v);

            //cat3 - 최신,추천 세무 예규에서 세목에 해당
            if (c == 3 || c == 4) {
                optArr = gubuns.yegu2;
                $("#liCat3").show();
                $("#sCat3").append("<option value='0'>전체</option>");
                jQuery.each(optArr, function (index, value) {
                    var optVal = value.split(':');
                    $("#sCat3").append("<option value='" + optVal[0] + "'>" + optVal[1] + "</option>");
                });

                //cat3 값 넘기기 위해 저장 
                if (r == undefined || r == "")
                    r = "0";
                $("#sCat3").val(r);
            } else {
                $("#liCat3").hide();
            }
        }
        else {
            if ($("#sCat2").length)
                $("#liCat2").hide();
            if ($("#sCat3").length)
                $("#liCat3").hide();
        }
    };

};
