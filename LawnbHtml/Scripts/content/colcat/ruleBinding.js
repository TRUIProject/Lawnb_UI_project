

var expanded = false;

function showCheckboxes() {
    if (!expanded) {
        $("#checkboxes").show();
        expanded = true;
    } else {
        $("#checkboxes").hide();
        expanded = false;
    }
}

this.setSubViewCallback = function (result) {
    if (result != null) {
        if (sParams == "R7") {
            view.elc_pdf_view('전자관보');
            pdfOpen('pdf_view_other');
            if ($('#view_sub_content').length > 0) {
                $('#view_sub_content').hide();
            }
        }
        else {
            var tmpParam = sParams;
            $('.main_container_view .btn_close').trigger('click');
            sParams = tmpParam;
            if ($('#view_sub_content').length > 0) {
                $('#view_content').hide();
                $('#view_sub_content').empty();
                $('#view_sub_content').html(result);
                $('#view_sub_content').show();
            } else {
                $('#view_content').empty();
                $('#view_content').html(result);
            }
            if ($('#pdf_view_ahnex').length > 0) {
                $("#pdf_view_ahnex").height($('.main_container').outerHeight() - 110);
                pdfOpen('pdf_view_ahnex');
            }
            setHeight();
        }

        hidePrintLayer("open");

        drawLiBylaw();
    }
};

// li 다시 그리기
this.drawLiBylaw = function () {
    var lbListType = 0;
    if (sParams == "R2") {
        lbListType = 0;
    } else if (sParams == "R3") {
        lbListType = 1;
    } else {
        lbListType = 99;
    }
    $('.btn_group>a>span').each(function (index) {
        if (lbListType == index) {
            $(this).addClass('_this');
        } else {
            $(this).removeClass('_this');
        }
    });
};

$(function () {
//    $('.favi_add').click(function () {
//        $(this).children('i').toggleClass('starfull');
//        $('.base_popup').hide();
//        $('#popup_favilaw').show();
//    });

//    $(document).on('click', 'section .btn-group .btn', function () {
//        if ($('#right_control').css("display") == "block") {
//            $(".right_container").removeClass('add_border');
//            $(".right_container").addClass('slide_mov_right');
//            $(".right_container").removeClass('slide_mov');
//            $('#right_control').removeClass('_up');
//        }
//        $("#title_result_tab .btn_close").show();
//        $("#title_result_tab .btn_reapprea").hide();
//        $("#title_result_tab").show();
//        $("#result_area").show();
//        $("#pdf_view").hide();
//        $("#view_content").hide();
//        setTimeout(function () {
//            $("#result_area").addClass('slide_mov_bottom');
//        }, 200);
//    });

    var i = 0;
    $('.relative_law .detail_area .but').click(function () {

        var x_object = $(this).parent().parent().find('.relative_law_view');
        if (i == "0") {
            $(x_object).show();
            $(this).children('i').removeClass('icon_open').addClass('icon_close');
            $(this).parent().css('margin-bottom', '30px');
            i = 1;
        } else {
            $(x_object).hide();
            $(this).children('i').addClass('icon_open').removeClass('icon_close');
            $(this).parent().css('margin-bottom', '0');
            i = 0;
        }
        setHeight();
    });

    $(document).on('click', 'p>span.btn_close', function (event) {
        sParams = 99; //버튼초기화
        drawLiBylaw();
        $('#view_content').show();
        $('#view_sub_content').hide();
    });


    $("#checkboxes").bind("mouseleave", function () {
        $("#checkboxes").hide();
        expanded = false;
    });

});

var isJoView = 'N', targeType = "1";
var isSel = 0;
var law = new function () {
    this.goTarget = function (n) {
        sParams = 99; //버튼초기화
        drawLiBylaw();
        $('.main_container_view .btn_close').trigger('click');
        $('#view_content').show();
        $('#view_sub_content').hide();
        if ($("#co_popupContainer").has('mobile') && document.body.clientWidth < 500) {
            $('.left_container').removeClass('slide_mov ').removeClass('add_border ');
            $('#bg_screen').hide();
            $("html").css("overflow-y", "auto");
        } else {
            $('.main_container').css('overflow', 'auto');
        }

        hidePrintLayer("open");
    };

    this.goView = function (n) {
        $(location).attr('href', '/Info/ContentView?sid=' + $("#lbDid").val() + '_' + n);
    };

    this.goToRefView = function (j) {
        showOriginalView('/Info/ContentView?sid=' + j);
    };

    this.goToMapView = function () {
        law.goToRefView($('#lbDid').val() + '_0_R6');
    };

    // 20200506 법령체계도 개선
    this.goToMapView = function (j) {
        var j = $('#lbDid').val() + "_0_R6_" + $('#lbLid').val() + "_" + $('#lbDidMap').val();        
        showOriginalView('/Info/ContentView?sid=' + j);
    };

    // 20200506 법령체계도 개선
    this.goToMapViewAll = function (j) {
        var j = $('#lbDid').val() + "_0_R6_" + $('#lbLid').val() + "_" + $('#lbDidMap').val();
        //var j = $('#lbDid').val() + "_0_R6_" + $('#lbLid').val();
        showOriginalView('/Info/ContentView?sid=' + j);
    };

    // 20200506 법령체계도 개선
    this.mapViewHtml = function () {
        var col = $('#lbDid').val().substr(0, 4);
        var lid = $("#selMapView option:selected").val();
        if (lid != null && lid != 'undefined') {
            var lawMapDid = (col == "L006" ? "L006" : "L008") + lid + "|R6";
            // 법령체계도 전체보기 lid 값 변경
            $('#lbDidMap').val(lid);

            var params = { "lid": lawMapDid }
            sendNonBlockingTextToJsonRequest("/AjaxInfo/GetLawMapViewHtml", params, function (result) {
                if (result != null) {
                    $(".law_level").html("");
                    $(".law_level").html(result);

                    setTreeBinding();
                }
            });
        }
    };

    this.goToRefView = function (j) {

        if (j.indexOf('_A') > 0 || j.indexOf('|A') > 0) {
            j = j.replace('_', '|');
            if (j.split('|')[0].length < 16) {
                j = $("#lbDid").val() + '_' + j.split('|')[1] + '_A';
            }
        } else if (j.indexOf('_B') > 0 || j.indexOf('|B') > 0) {
            j = j.replace('_', '|');

            if (j.split('|')[0].length < 16) {
                j = $("#lbDid").val() + '_' + j.split('|')[1] + '_B';
            }
        }
        showOriginalView('/Info/ContentView?sid=' + j);
    };
};
