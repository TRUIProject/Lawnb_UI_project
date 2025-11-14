var flawyer = new function () {

    this.viewPopup = function (did) {
            
        //몇번째를 show 할건지 로직 필요
        $("#freePopup_" + did).show();
        $("#bg_screen").show();
        $("html").css("overflow", "hidden");

        $('#bg_screen').click(function () {
            $(".free_lawyer_view").hide();
            $('#bg_screen').hide().css('z-index', '10000');
            $("html").css("overflow", "auto");            
        });

        $('.btn_close_ar').click(function () {
            $(".free_lawyer_view").hide();
            $('#bg_screen').hide().css('z-index', '10000');
            $("html").css("overflow", "auto");
        });
        
    };
};
