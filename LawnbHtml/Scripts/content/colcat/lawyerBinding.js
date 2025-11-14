$(document).ready(function () {
    $('#career_add').on('click', function () {
        if ($("#career_area li ").length < 4) {
            $("<li class='fill'><label>경력소속</label><input type='text'  name='sCarr'  class='career_input'></li>").appendTo("#career_area");
        }
        setHeight_under();
    });

    insertLawyerCarr = function () {
        var value = "";
        $('#sCareerList').val("");
        $("input[name=sCarr]").each(function () {
            if ($(this).val() != "") { value += $(this).val() + "$"; }
        });
        if (value != "") { value = value.slice(0, -1); $('#sCareerList').val(value); }
    };


    $('#sHigh').change(function () { $('#sHighCode').val(""); });
    $('#sUniv').change(function () { $('#sUnivCode').val(""); });
    $('#sLawSch').change(function () { $('#sLawSchCode').val(""); });

});

var lawyer = new function () {
    this.getSearchSchool = function (t) {
        var chkVal = "";
        if (t == 1031) {
            chkVal = $('#sHigh').val();
            schLayer = "high_search";
        } else if (t == 1010) {
            chkVal = $('#sUniv').val();
            schLayer = "high_search";
        } else if (t == 1009) {
            chkVal = $('#sLawSch').val();
            schLayer = "high_search";
        }

        if (chkVal == "") {
            alert('검색어를 입력해 주세요.');
        } else {
            var url = "/AjaxInfo/ContentSearchOrgList";
            getOrgList(url, 0, chkVal, t);
        }
    };

    this.closeOrgList = function () {
        $('#' + schLayer).hide();
        $('#' + schLayer).empty();
    };

    this.setOrgCode = function (n, m, t) {
        if (t == 1031) {
            $('#sHigh').val(m);
            $('#sHighCode').val(n);
        } else if (t == 1010) {
            $('#sUniv').val(m);
            $('#sUnivCode').val(n);
        } else if (t == 1009) {
            $('#sLawSch').val(m);
            $('#sLawSchCode').val(n);
        }
        lawyer.closeOrgList();
    };

    this.goSubMainList = function (n) {
        IsGoSubMain = true;
        $('#sCat').val(n);        
        $('#searchForm').attr("action", "/Info/ContentLawyerSubMain");
        $('#searchForm').removeAttr('onsubmit').submit();
    };

    this.goSubMainList_Navi = function (n) {
        IsGoSubMain = true;
        $('#sCat').val(n);
        $('#sType').val(0);
        $('#searchForm').attr("action", "/Info/ContentLawyerSubMain");
        $('#searchForm').removeAttr('onsubmit').submit();
    };
};
