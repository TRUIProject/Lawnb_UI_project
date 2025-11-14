$(document).ready(function () {
    $('.search_div .word_expl').prependTo('.M_text_area'); // 검색결과리스트 검색어 복사
 

    $(document).on('click', '.miju_box_close', function () {
        $('.title_area .miju_box').hide();
    });

    $(document).on("click", ".miju_box_line span", function () {
        $(".miju_box").hide();
    });

    $('.total_icon').click(function () {
        $(".total_menu").show(500);
        $("#bg_screen").css('z-index', '1000').show(100);
        $("html").css("overflow", "hidden");

        $('#bg_screen').click(function () {
            $(".total_menu").hide(500);
            $('#bg_screen').hide().css('z-index', '10000');
            $("html").css("overflow", "auto");
        });

        $('.menu_close').click(function () {
            $(".total_menu").hide(500);
            $('#bg_screen').hide().css('z-index', '10000');
            $("html").css("overflow", "auto");
        });
    });

    $('.bottom_search_function').click(function () {
        $('body,html').animate({ "scrollTop": "0" }, 100);
        $("#t_search").show();
        $('#indiv_area').hide();
        $('header h1').hide();
        $("#bg_screen").css('z-index', '1000').show();
        $('header').css('z-index', '10000').css({ 'position': 'fixed', 'top': '0', 'left': '0' });
        $("html").css("overflow", "hidden");

        $('#bg_screen').click(function () {
            $("#t_search").hide(500);
            $('#bg_screen').hide().css('z-index', '10000');
            $('#indiv_area').show();
            $('header h1').show();
            $('header').css({ 'z-index': '1000', 'position': 'relative' });
            $("html").css("overflow", "auto");
        });
    });

    $('.btn_search_close').click(function () {
        $("#t_search").hide(500);
        $('#bg_screen').hide().css('z-index', '10000');
        $('#indiv_area').show();
        $('header h1').show();
        $('header').css({ 'z-index': '1000', 'position': 'relative' });
        $("html").css("overflow", "auto");

    });
    $('#research_bg').click(function () {
        if ($('.total_menu').is(':visible')) {
            $(".total_menu").hide(500);
        }
        $("#research_layer").hide();
        $("#research_bg").hide();
    });

    $('#qu').focus(function () {
        $('.search_container .search_inner').addClass('sch-write');
        $('head h1').css('z-index', '1');
        $('.search_container').css('z-index', '1000');
    });
    $('#qu').blur(function () {
        $('.search_container .search_inner').removeClass('sch-write');
        $('head h1').css('z-index', '1000');
        $('.search_container').css('z-index', '1');
        $('search_layer_outer').hide();
    });

    // if ($('.submain').length > 0 && document.body.clientWidth < 750) { // 모바일 주석서명 검색 노출
    //    $('#detail_area').removeClass('_open');
    // }

    $('.left_container').on('click', '#LiAddInfo a', function () {
        if (document.body.clientWidth < 500) { // 紐⑤컮?쇱슜 - ?쇱そ ?덉씠??媛由ш린
            $('.left_container').removeClass('slide_mov ').removeClass('add_border ');
            $('#bg_screen').hide();
            $("html").css("overflow", "auto");
        }
    });


    $('#main_bt_list').on('click', '.directory_list li', function () {

        $(this).show();
    });

    $('#search_results').on('click', '.search_filter', function () {//?쇱そ ?곸뿭 ?덉씠?대줈 ?щ젮???吏곸씠湲?

        if ($(".add_border").length > 0) {
            $(".left_container").removeClass('add_border');
            $(".left_container").removeClass('slide_mov');
            if ($('#container').hasClass('navigation_p')) {
                $('.left_container').css({ 'position': 'absolute', 'transform': 'translateX(-100%)', 'z-index': '1', 'width': '100%' });
                $('.submit_area').css({ 'bottom': '40px', 'z-index': '10' }).hide();
            }
        }
        else {
            $(".left_container").addClass('slide_mov');
            $(".left_container").addClass('add_border');
            $('#bg_screen').show().css('z-index', '10');
            $("html").css("overflow", "hidden");
            if (document.body.clientWidth < 480 && !$('#container').hasClass('navigation_p')) {
                $('.left_container').height(document.body.clientHeight);
            }
            if ($('#container').hasClass('navigation_p')) {
                $('.left_container').css({ 'position': 'fixed', 'transform': 'translateX(0)', 'z-index': '1000' });
                $('.submit_area').css({ 'bottom': '0', 'z-index': '1000' }).show();
                $('.left_container').css({ 'width': '80%' });
            }
        }

        $('#bg_screen').click(function () {
            $(".left_container").removeClass('add_border');
            $(".left_container").removeClass('slide_mov');
            $('#bg_screen').hide().css('z-index', '10000');
            $("html").css("overflow", "auto");
            if ($('#container').hasClass('navigation_p')) {
                $('.left_container').css({ 'position': 'absolute', 'transform': 'translateX(-100%)', 'z-index': '1', 'width': '100%' });
                $('.submit_area').css({ 'bottom': '40px', 'z-index': '10' }).hide();
            }
        });
    });

    $(".mview_tab_area span").on("click", function () {
        if ($(this).data("id") == "R100") { //table of content
            if ($(".add_border").length > 0) {
                $(".left_container").removeClass('add_border');
                $(".left_container").removeClass('slide_mov');
                $(".main_container").css('overflow', 'auto');
            }
            else {
                $(".left_container").addClass('slide_mov');
                $(".left_container").addClass('add_border');
                $('#bg_screen').show().css('z-index', '10');
                $("html").css("overflow", "hidden");
                if (document.body.clientWidth < 480) {
                    $('.left_container').height(document.body.clientHeight);
                }
            }
            $('#bg_screen').click(function () {
                $(".left_container").removeClass('add_border');
                $(".left_container").removeClass('slide_mov');
                $('#bg_screen').hide().css('z-index', '10000');
                $("html").css("overflow-y", "auto");
            });
        } else if ($(this).data("id") == "R000") { //contnet
            $("#title_result_tab>div.btn_option_outer>div.btn_close").trigger("click");
            if ($(".add_border").length > 0) {
                $(".left_container").removeClass('add_border');
                $(".left_container").removeClass('slide_mov');
            }
            if ($('.dic').length > 0) {
                $('.dic_info_layer').hide();
            }
            if ($('.onju').length > 0) {
                $('.publish_write').hide(); 
            }
            $("#view_content").show();
            $("#result_area").hide();
            $("#title_result_tab").hide();
            $(".mview_tab_area span").removeClass('_this');
            $(this).addClass('_this');

            var sCode = $("#lbDid").val().substring(0, 4);
            if (sCode == "C000") {
                $("#view_sub_content").hide();
            }   

        } else if ($(this).data("id") == "R200") { //related 
            if ($('.dic').length > 0) {
                $('.dic_info_layer').hide();
            }
            if ($('.onju').length > 0) {
                $('.publish_write').hide();
            }
            $(".mview_tab_area span").removeClass('_this');
            $(this).addClass('_this');

        }
        else if ($(this).data("id") == "R300") { //related 
            if ($('.dic').length > 0) {
                $('.dic_info_layer').hide();
            }
            else if ($('.onju').length > 0) {
                $('.publish_write p .btn_close').hide();
                $('#result_area').hide();
            }
            $(".mview_tab_area span").removeClass('_this');
            $(this).addClass('_this');

        }
        else if ($(this).data("id") == "R400") { //related 
            
            $(".mview_tab_area span").removeClass('_this');
            $(this).addClass('_this');

        }

        if ($(this).data("id") != null) {

            if ($(this).data("id") != "R100" ) {
                //-- mobile view 페이지 이동 시 localstorage 파라미터 저장 --//                                   
                if (localStorage.getItem("sViewMobileList") != null) {
                    if (JSON.parse(localStorage.getItem("sViewMobileList")).length > 0) {
                        var currIdx = (localStorage.getItem("currIdx") * 1 == null || localStorage.getItem("currIdx") * 1 == "") ? 0 : localStorage.getItem("currIdx") * 1;
                        var sViewMobileList = JSON.parse(localStorage.getItem("sViewMobileList"));

                        sViewMobileList[currIdx]["addInfoLawListCheck"] = "N";
                        sViewMobileList[currIdx]["addInfoLawListDid"] = "";
                        sViewMobileList[currIdx]["addInfoLawListCode"] = "";
                        sViewMobileList[currIdx]["addInfoLawListPage"] = 1;
                        sViewMobileList[currIdx]["addInfoLawListPageSize"] = 10;
                        
                        sViewMobileList[currIdx]["addInfoListCheck"] = "N";                        
                        sViewMobileList[currIdx]["addInfoListCode"] = "";
                        sViewMobileList[currIdx]["addInfoListPage"] = 1;
                        sViewMobileList[currIdx]["addInfoListPageSize"] = 10;

                        localStorage.setItem("sViewMobileList", JSON.stringify(sViewMobileList));
                    }
                }                
            }
            
            //!-- mobile view 페이지 이동 시 localstorage 파라미터 저장 --//

            if ($(this).data("id").indexOf("N0") < 0) {
                setHeight();
            }

            $(".policy_viwer_mobile").hide();
        }

    });

    $('.navi_area').on('click', '.icon-tsearch', function () {//?듦?寃곌낵?섏씠吏 ?쇱そ ?곸뿭 ?덉씠?대줈 ?щ젮???吏곸씠湲?

        if ($(".add_border").length > 0) {
            $(".left_container").removeClass('add_border');
            $(".left_container").removeClass('slide_mov');
        }
        else {
            $(".left_container").addClass('slide_mov');
            $(".left_container").addClass('add_border');
            $('#bg_screen').show().css('z-index', '10');
            $("html").css("overflow", "hidden");
            if (document.body.clientWidth < 480) {
                $('.left_container').height(document.body.clientHeight);
            }
        }
        $('#bg_screen').click(function () {
            $(".left_container").removeClass('add_border');
            $(".left_container").removeClass('slide_mov');
            $('#bg_screen').hide().css('z-index', '10000');
            $("html").css("overflow", "auto");
        });

    });



    $('.word_expl>div').click(function () {
        if ($('.search_div').is(":visible")) {
            $('.search_div').hide();
            $(this).find('i').addClass('icon-down');
            $(this).find('i').removeClass('icon-up');
        } else {
            $('.search_div').show();
            $(this).find('i').removeClass('icon-down');
            $(this).find('i').addClass('icon-up');
        }
    });

    $('body').on('click', 'a', function (e) {
        e.preventDefault();
        var target = $(this).attr('target');
        var href = $(this).attr('href');
        var cls = $(this).attr('class');
        if (href != null && href != undefined) {
            if (target == '_blank' && href.indexOf('lawnb.com') < 0) {
                if (isAppleDevice()) {
                    location.href = 'homepage:' + href;
                } else {
                    location.href = href;
                }
            } else if (target == 'Support_center' || target == 'new_popup') {
                if (isAppleDevice()) {
                    location.href = 'homepage:' + href;
                } else {
                    location.href = href;
                }
            }
            else if (cls != 'popup_view') {
                if ($.trim(href) != '#') {
                    location.href = href;

                }
            }
        }
    });

    $(document).on('click', '.top_title.mobile span', function () {
        if (document.body.clientWidth < 480) {
            var index = $('.top_title.mobile span').index($(this));
            $('.top_title.mobile span').removeClass('_this');
            $('.top_title.mobile span').eq(index).addClass('_this');
            $('.seperation_div').hide();
            $('.seperation_div').eq(index).show();
            $('#popup_alert .mobile_popup_btn .btn-group').hide();
            $('#popup_alert .mobile_popup_btn .btn-group').eq(index).show();
        }
    });

    $('.popup_footer').on('click', '.btns_more', function () {
        if (!$(this).hasClass('disabled')) {
            $('.function_area').addClass('slide_mov_bottom');
            $("html").css("overflow", "hidden");
            $('.popup_footer').css('z-index', '1000');
            $('#bg_screen').show().css('z-index', '1000');
        }
        $('#bg_screen').click(function () {
            $(".function_area").removeClass('slide_mov_bottom');
            $('#bg_screen').hide().css('z-index', '100');
            $('.popup_footer').css('z-index', '10');
            if (!$("#pdf_view").is(':visible')) {
                $("html").css("overflow", "auto");
            }
        });
        $('.box_close').click(function () {
            $(".function_area").removeClass('slide_mov_bottom');
            $('#bg_screen').hide().css('z-index', '1000');
            $('.popup_footer').css('z-index', '10');
            if (!$("#pdf_view").is(':visible')) {
                $("html").css("overflow", "auto");
            }
            
            // 20200702 모바일 본문검색 초기화
            if ($("highlight").length > 0) {
                $("highlight").contents().unwrap();
                $("#txtContendViewSearchWord").val("");

                initContentViewSearch();
                if (markingChecked) {
                    if ($("marks").length > 0) {
                        $('marks').removeClass('nomark');
                        $(".icon-checkbox-unchecked").addClass('_checked');
                    }
                }                
            }
            // 모바일 스타일
            $('.inner_search_div').hide();
            $('#search_word').css('display', 'inline-block');
            $('#inner_search').css('display', 'inline-block');

            checkMobileContentSearhed = false;
            /*
            if (!$(".title_area").hasClass("topfixed")) {
                $(".title_area").addClass("topfixed");
            } */           
        });

        $('.function_area .box a').click(function () {
            $('.popup_footer').css('z-index', '100');
        });
    });

    $('.top_container>.btn_close_pop').click(function () {
        mstorage.clearAll();
        $(location).attr('href', '/Main/ListBack');
    });

    //<!-- 배너 -->
    var datas = { "PageType": "AppLogin" }
    sendNonBlockingAjaxJsonRequest("/Login/GetBanner/", datas, function (result) {
        var Contents = "";
        //console.log(result);
        for (var i = 0; i < result.length; i++) {
            if (result[i]["UploadMethod"] == "image") {
                Contents += "<div id=\"banner_" + i + "\" style=\"display:none;\">";
                if (result[i]["LinkUrl"] != "") {
                    Contents += "<a href=\"" + result[i]["LinkUrl"] + "\" target=\"Support_center\">";
                    Contents += "<img src=\"" + result[i]["FileRoot"] + "\" alt=\"배너\">";
                    Contents += "</a>";
                } else {
                    Contents += "<img src=\"" + result[i]["FileRoot"] + "\" alt=\"배너\">";
                }
                Contents += "</div>";
            } else {
                Contents += result[i]["Contents"];
            }
        }
        $("#banner_area").html(Contents);
        Banner_Change(GetIDCnt("banner_", 10));

        // GA Login Banner
        //var filename = "";
        //for (var i = 0; i < $("#banner_area").children().length; i++) {
        //    if ($("#banner_area").children()[i].style.display == "block" || $("#banner_area").children()[i].style.display == "") {
        //        var child = $("#banner_area").children()[i];
        //        filename = $(child).find("img")[0].src;

        //        filename = filename.split("?")[0].split(location.hostname)[1];
        //        if (filename.indexOf("/lbimg/") >= 0) {
        //            filename = filename.split("/lbimg/")[1];
        //        }
        //        //dataLayer.push({ 'banner_image': filename });
        //    }
        //}

        //(function (w, d, s, l, i) {
        //    w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        //    var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true;
        //    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
        //})(window, document, 'script', 'dataLayer', 'GTM-K2BLLP5');

    });

    function GetIDCnt(id, maxcnt) {
        var retval = 0;
        for (var i = 0; i < maxcnt; i++) {
            if ($("#" + id + i).html()) {
                retval++;
            }
        }
        return Math.floor(Math.random() * Math.floor(retval));
    }

    function Banner_Change(id2) {
        $(".free_banner_area div").hide();
        $("#banner_" + id2).show();
    }
    // <!-- -배너- --> 
});

function goApp(_ver){
    var userAgent = navigator.userAgent;
    var visitedAt = (new Date()).getTime(); // 방문 시간

    if (userAgent.match(/iPhone|iPad|iPod/)) {
       
       setTimeout(
            function() {
                if ((new Date()).getTime() - visitedAt < 2000) {
                    location.href = "https://itunes.apple.com/kr/app/lawnb-pro/id955387972?mt=8";
                }
            }, 500);

            setTimeout(function () {
                //  location.href = "{커스텀 스킴 주소}";               
                location.href = "https://itunes.apple.com/kr/app/lawnb-pro/id955387972?mt=8";
            }, 0);
           
        
        //location.href = "https://itunes.apple.com/kr/app/lawnb-pro/id955387972?mt=8";
   }
    else{ 
        if (userAgent.match(/Chrome/)) {            
            // 안드로이드의 크롬에서는 intent만 동작하기 때문에 intent로 호출해야함
            setTimeout(function () {
                // location.href = "intent://커스텀스킴주소#Intent; scheme=스킴; action=..;category=..; package=com.android.xxx; end;";
                if (_ver == "free") {
                    //alert("크롬-프리");                    
                    //location.href = "intent://appfreelawnb/#Intent;scheme=lawnbfree;package=com.lawnb.free.lawinfo;end";
                    location.href = "https://play.google.com/store/apps/details?id=com.lawnb.free.lawinfo&hl=ko";                                        
                    
                }
                else {
                    //alert("크롬-유료");
                    //location.href = "intent://appprolawnb/#Intent;scheme=lawnbpro;package=com.lawnb.app;end";                    
                    //location.href = "market://details?id=com.lawnb.app&hl=ko";
                    location.href = "https://play.google.com/store/apps/details?id=com.lawnb.app&hl=ko"; 
                }
            }, 1000);                     
        } else {
            // 크롬 이외의 브라우저들
            setTimeout(
                function () {
                    if ((new Date()).getTime() - visitedAt < 2000) {
                        if (_ver == "free") {
                            //alert("이외브라우저-프리");
                            location.href = "https://play.google.com/store/apps/details?id=com.lawnb.free.lawinfo&hl=ko"; 
                        }
                        else {
                            //alert("이외브라우저-유료");
                            location.href = "https://play.google.com/store/apps/details?id=com.lawnb.app&hl=ko"; 
                        }
                    }
                }, 500);

            var iframe = document.createElement('iframe');
            iframe.style.visibility = 'hidden';
            //iframe.src = '{커스텀 스킴 주소}';
            if (_ver == "free") {
                iframe.src = 'lawnbfree://appfreelawnb';  
            }
            else
            {
                iframe.src = 'lawnbpro://appprolawnb';  
            }               
            document.body.appendChild(iframe);
            document.body.removeChild(iframe); // back 호출시 캐싱될 수 있으므로 제거
         }
    }
 
     
 
}

function Check_title_area() {
    if ($('.title_area .btn_option').length > 0) {
        if ($('.title_area .lawhistory_area').length > 0) {
            $('.title_area .lawhistory_area').prependTo('#research_btn .tab_g_law');
            $('.tab_btn.tab_g_case').hide();
        } else {
            $('#research_btn .other_btns').empty(); 
        }
    }
    
    if ($('.right_container .law_addfuntion_btn').length > 0) {
        $('#research_btn .other_btns_top').empty();
        $('.law_addfuntion_btn').prependTo('#research_btn .other_btns_top');
    }
}

function setHeight_main() {
    var popup_topH = $('header').outerHeight() + 1;
    var bottomH = $('footer').outerHeight();

    $("#container").height(document.body.clientHeight - popup_topH - bottomH); 
     
    bg_screen_H();
}

function WebInMobile() {
    return localStorage.getItem("tabletYn") == "N";
}

// ?좏뵆 湲곌퀎?몄? ?꾨땶吏
isAppleDevice = function () {
    var userAgent = navigator.userAgent.toLowerCase();
    var appleDevices = ['ipad', 'ipod', 'iphone'];
    for (var i = 0; i < appleDevices.length; i++) {
        if (userAgent.indexOf(appleDevices[i]) >= 0) {
            return true;
        }
    }
    return false;
}
function isPopupPage() {
    return true;
};

function appPopupClose() {
    //alert("test");
    mstorage.clearAll();
    window.APPPopup.popupColse();
}

function fMainRedirect(sCode)
{
    location.href = "/Info/ContentMain/"+ sCode;
}

function appRedirect(url, rType) {

    if (rType == "login") {
        //location.href = "http://mobile.lawnb.com/Main/Landing";
        //location.href = "/Main/Landing";
        //location.href = "http://app.lawnb.com/Main/Landing";
        
        if (localStorage.getItem("fromPro") != null)
        {
            if (localStorage.getItem("fromPro") == "Y")
            {
                //location.href = "http://mobile.lawnb.com/Main/Landing";
                location.href = "https://app.lawnb.com/Main/Landing";
            }
            else if (confirm("LAWnB Plus 앱을 설치하시면, 보다 확장된 서비스를 이용할 수 있습니다. LAWnB Plus 앱을 이용하시겠습니까? ")) {
                
                goApp('pro');
            }     
        }        
        else if (confirm("LAWnB Plus 앱을 설치하시면, 보다 확장된 서비스를 이용할 수 있습니다. LAWnB Plus 앱을 이용하시겠습니까? ")) {
            
            goApp('pro');
        }        
    }
    else if (rType == "fhome") {
        location.href = "/Main/MobileMain";
    }
    else if (rType == "reload") {
        location.reload();
    }
    else if (rType == "back" && url.indexOf("/Main/MobileMain") == -1) {
        history.go(-1);
    }
    else if (rType == "next") {
        history.go(1);
    }
    else if (rType == "guide") {
        location.href = "/Main/MUserGuide?popupYn=Y";
    }
}

function clickBackButton() {
    mstorage.prevItems();
}


function mBottomMove(url, n) {
    if (url != "/Main/Index" || n != -1) {
        history.go(n);
    }
}


function downloadParamAdd(_href) {
    if (checkMobile())
    {
    _href = _href.indexOf("?") >= 0 ? _href + "&docdownload=Y" : _href + "?docdownload=Y";
    }
    return _href;
}
