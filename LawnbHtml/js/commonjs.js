  
 

// 본문 사이즈 조절
function setHeight() {
    var popup_topH = $('header').outerHeight() + 1; 

    if ($(".lawmap").length > 0 ) {
        var headerH = 0;
    } else {
        var headerH = $('.title_area').outerHeight();
    }

    $('.left_container').height(document.body.clientHeight - popup_topH - headerH);
    $('.right_container').height(document.body.clientHeight - popup_topH - headerH);
    $('.main_container').height(document.body.clientHeight - popup_topH - headerH);

    $('.left_container').css('overflow', 'auto');
    $('.right_container').css('overflow', 'auto');
    if ($(".main_container #pdf_view").length > 0) {
        $(".main_container #pdf_view").height($('.main_container').height());
        $('.main_container').css('overflow', 'none');
    } else {
        $('.main_container').css('overflow', 'auto');
    }

    if ($("#pdf_view_ahnex").length > 0) { //별표서식
        $("#pdf_view_ahnex").height($('.main_container').innerHeight() - $('.normal').outerHeight() - 61); 
        $('.main_container').css('overflow', 'none');
    }
    bg_screen_H();
} 
// 고객센터 사이즈 조절
function setHeight_customer() {
    var popup_topH = $('header').outerHeight() + 1;
    var bottomH = $('footer').outerHeight();  
 
	$('.main_container').height($('.main_container_view').outerHeight());
	$('.main_container').css('min-height',document.body.clientHeight - popup_topH - bottomH); 
} 

function bg_screen_H() {
    //회색바닥 사이즈 
    if ($("#container").length > 0) {
        var mainH = $('#container').outerHeight();
    } else {
        mainH = 0;
    }
    if ($("footer").length > 0) {
        var footH = $('footer').outerHeight();
    } else {
        footH = 0;
    }
    $("#bg_screen").height($('header').outerHeight() + mainH + footH + 20);
}
// 바닥페이지 사이즈조절

function setHeight_under(more_num) {
    setTimeout(function () {
        if ($('#container').hasClass('list-view')) {
            var center_height = $('.main_container_inner').outerHeight();
            var center_view_height = $('.main_container_view_inner ').outerHeight();

            //    $('.main_container').height(Math.max(center_view_height, center_height));
            if (center_height < center_view_height) {
                if (!more_num == 0) {
                    $('.main_container').animate({ height: Math.max(center_view_height + 60, center_height) }, 200);
                    $('.container_view_more').css({ 'bottom': '-30px', 'top': 'auto' });
                    $('.container_view_more .btn').html('닫기');
                } else {
                    $('.main_container').animate({ height: center_height }, 150);
                    $('.container_view_more').css('top', center_height - 103);
                    $('.container_view_more .btn').html('더보기');
                }
            } else { $('.main_container').height(center_height); $('.container_view_more').hide(); }

            if ($('.main_container').height() < $('.right_container').height()) {
                $('.right_container').height(Math.max(center_view_height, center_height));
            }
        }
        else if ($('#container').hasClass('list_two-con')) { //변형3단
            var center_index = $('.center_index section').outerHeight() + 10;
            var center_view = $('.center_view').outerHeight() + 40;

            $('.main_container').height(Math.max(center_index, center_view));
            if (center_index < center_view) {
                $('.center_index').height($('.main_container').height());
            }

        }
        else { //미리보기 아님
            var center_height = $('.main_container_inner').outerHeight() + 40;
            if (document.body.clientWidth < 1170) {
                $('.main_container').height(center_height);
                $('.right_container').height(center_height);
                $('.right_container').css('overflow', 'auto');
            }
            else {
                $('.main_container').height(Math.max($('.left_container').height(), $('.right_container').outerHeight(), center_height));
                $('.right_container').css({ "height": "" });
                $('.right_container').css('overflow', 'none');
            }

        }
        if ($(document).width() > 1250) {
            $("#right_control").hide();
        } else { $("#right_control").show(); }

        $(".btn_top_box").css("margin-left", $('#container').width() + 1);
        bg_screen_H();
    }, 300);
}

// 법조네비 사이즈 조절
function setHeight_navi() {
    var popup_topH = $('header').outerHeight() + 1;
    var headerH = $('.title_area').outerHeight(); 

	$('.left_container').height(document.body.clientHeight - popup_topH - headerH ).css('overflow','auto');
	$('.right_container').height(document.body.clientHeight - popup_topH - headerH ).css('overflow','auto'); 
	$('.main_container_inner').height(document.body.clientHeight - popup_topH - headerH ).css('overflow-y','auto');
	$('.main_container_view').height(document.body.clientHeight - popup_topH - headerH ).css('overflow-y','auto'); 
	$('.small_search_outbox').height( headerH -1 );
	$('.search_result').css('top',headerH).height($('.main_container_inner').height()-1);
	$('#right_control').hide();	 
} 

// 법조인등록 사이즈 조절
function setHeight_Lregi() {
	 var popup_topH = $('header').outerHeight() + 1;
    var headerH = $('.title_area').outerHeight();  
	$('.left_container').height(document.body.clientHeight - popup_topH - headerH );
	$('.right_container').height(document.body.clientHeight - popup_topH - headerH ).css('overflow','auto'); 
	$('.main_container').height(document.body.clientHeight - popup_topH - headerH ).css('overflow','auto');

	if($(".btn_right").length > 0){
		$(".lots_list li").each(function(index){
			var btn_height = $(this).outerHeight(); 
			$(this).find('> .btn_right').css('line-height',btn_height + 'px');
		});
	} 
} 

// 판례히스토리 사이즈 조절
function setHeight_history() {
    var popup_topH = $('header').outerHeight() + 1; 
    var headerH = $('.title_area').outerHeight(); 
    var hlistH = $('.history_hlist').outerHeight(); 

	//$('.left_container').height(document.body.clientHeight - popup_topH - headerH ).css('overflow','auto');
	//$('.right_container').height(document.body.clientHeight - popup_topH - headerH ).css('overflow','auto'); 
	$('.main_container').height(document.body.clientHeight - popup_topH - headerH - hlistH).css('overflow-y','auto');
	$('.case_follow').height(document.body.clientHeight - popup_topH - headerH - hlistH).css('overflow-y','auto');
	$('.case_comment').height(document.body.clientHeight - popup_topH - headerH - hlistH).css('overflow-y','auto');
	
	var pnum = $('.case_comment_in p').length;
	$('.show_ccomment').each(function(index){
		if($(this).css("display") == "block"){ 
			$(this).height($('.case_comment').height() - ( ($('.case_comment_in p').outerHeight() +2) * pnum ) ).css('overflow-y','auto');
		} 
	});
} 

function setHeight_newold() { //신구조문
    var popup_topH = $('header').outerHeight();
    var titleH = $('.title_area').outerHeight();
    var joH = $('.newold_left').height();
    // 15 : 사건번호부분 padding 높이 
   
	$('.main_container').height(document.body.clientHeight - (popup_topH + titleH));
	$('.main_container').css('overflow', 'hidden');

	if ($('#sChk').val() == '1') {
		$('#NewOldContID').height(document.body.clientHeight - (popup_topH + titleH + joH + 280));
		$('#NewOldContID').css('overflow', 'auto');
	} else {
		//$('#NewOldContID').css('height', 'auto');
		$('#NewOldContID').height(document.body.clientHeight - (popup_topH + titleH + joH + 80));
		$('#NewOldContID').css('overflow', 'auto');
	}

	if (WebInMobile()) {
		$('.newold_left').width( $('.old_new').width()/2  );
		$('.newold_right').width( $('.old_new').width()/2  );
	}
	else{
		if($(".popup_law").height() < $('#NewOldContID').height()){
			$('.newold_left').width( $('.old_new').width()/2 - 8 );
			$('.newold_right').width( $('.old_new').width()/2 + 8 );
		}else{
			$('.newold_left').width( $('.old_new').width()/2  );
			$('.newold_right').width( $('.old_new').width()/2  );
		}
	}
	if ($(".icon_fixed").length > 0) {
	    $('.popup_law .new_normal').css('padding-left', '48px');
	     $('.icon_fixed').height($('.new_normal').height()+8); 
	   // alert($('.icon_fixed').parent.height());
	}
}
function WebInMobile() {
    var uagent = navigator.userAgent.toLowerCase();
    var isMobile = false;

    var ret1 = uagent.search("android");
    var ret2 = uagent.search("ipad");
    var ret3 = uagent.search("ipod");
    var ret4 = uagent.search("iphone");

    if ( ret2 > -1 || ret4 > -1) { 
			isMobile = true; 
    }
    else {
        isMobile = false;
    } 
    return isMobile;
}

//  popup 삼단비교 사이즈 조절
function setHeight_samdan(isCall) {
    var popup_topH = $('header').outerHeight();
    var titleH = $('.title_area').outerHeight(); 
    var tit_H = Math.max( $('#samTitle1').height(), $('#samTitle2').height(), $('#samTitle3').height()); 
    $('#tit_area .box_third').height(tit_H + 2);
   
    if (!isCall == 0) {
        var tree_H = 0;
		$('#tree_area').hide(); 
    } 
	else{
		var tree_H = $('#tree_area').outerHeight();
		$('#tree_area').show(); 
	}
	$('.main_container').height(document.body.clientHeight - (popup_topH +  titleH  ));
    
    $('.jo_group .box_third').height(document.body.clientHeight - (popup_topH + titleH + tree_H + tit_H  + 24)); 
    
    if ($("#wrapper_sam1").length > 0) {
        $('#wrapper_sam1').height(document.body.clientHeight - (popup_topH + titleH + tree_H + tit_H   + 24));
        
    }
    if ($("#wrapper_sam2").length > 0) {
        $('#wrapper_sam2').height(document.body.clientHeight - (popup_topH + titleH + tree_H + tit_H   + 24));
        
    }
}
 
function setHeight_samdan_no(isCall) {
    var popup_topH = $('header').outerHeight();
    var titleH = $('.title_area').outerHeight(); 
    var tit_H = $('#tit_area').height();
    var newtit_H = $('.newold_tit').height();
    var jo_H = $('.jo').height();
    if (isCall == 1) { //삼단비교시
        $('#tit_area .box_third').height(tit_H - 6);
    }
   $('.main_container').height(document.body.clientHeight - (popup_topH +  titleH  ));
    $('#wrapper_sam_no').height(document.body.clientHeight - (popup_topH + titleH + tit_H + newtit_H + jo_H + 12)); 
    if ($("#popup_law").length > 0) {
        $("#wrapper_popup").height(document.body.clientHeight * 0.8 - 40); 
    }

}

function bg_screen_H() {
    //회색바닥 사이즈 
    if ($("#container").length > 0) {
        var mainH = $('#container').outerHeight();
    } else {
        mainH = 0;
    }
    if ($("footer").length > 0) {
        var footH = $('footer').outerHeight();
    } else {
        footH = 0;
    }
    $("#bg_screen").height($('header').outerHeight() + mainH + footH + 20);
}

// 미주 오픈
function open_miju(mi) { 
    if (event.clientX > 950) {
		 $("#" + mi).addClass("miju_box_left");
		 if(mi=="Miju_case"){$("#" + mi).removeClass("miju_box_left");}
    }  
if ($(".case_history").length > 0) {
        $("#" + mi).removeClass("miju_box").addClass("pasi_box");
        if (event.clientY > 500) {
            $(".case_history #" + mi).css('top', '');
	        $(".case_history #" + mi).css("bottom", document.body.clientHeight - event.pageY + "px");
	    }
	    else {
	        $(".case_history #" + mi).css('top', event.pageY - 110 + 'px');
	        $(".case_history #" + mi).css('bottom', '');
	    }
	}
	//alert(mi);
	$("#" + mi).show(); 
}

// 미주 클로즈
function close_miju(mi) {
	$("#" + mi).addClass("miju_box");
    $("#" + mi).hide();
}
function case_comment_info_popup(){ //천장평석
	$('#bg_screen').show();
	$('#case_comment_info').show();
}

function popup_case(){ // 판결문 등재요청
		window.open('popup_case_ask.html','_blank','top=0,left=0,width=700,height=600,toolbar=0,status=0,scrollbars=1,resizable=0');
}

function popup_win_case(){  //승소판례등록
		window.open('법조인.승소판례등록_1_popup.html','_blank','top=0,left=0,width=1271,height=900,toolbar=0,status=0,scrollbars=1,resizable=0');
}

function popup_question(){ // 1:1 문의
		window.open('popup_ask.html','_blank','top=0,left=0,width=915,height=600,toolbar=0,status=0,scrollbars=1,resizable=0');
}

function popup_doc_dictionary_list(){  //법률사전 법령명 약어표
		window.open('문헌.popup-법률용어_법령명.html','_blank','top=0,left=0,width=800,height=600,toolbar=0,status=0,scrollbars=1,resizable=0');
}
  
function set_history(){  //히스토리 설정
		$('#popup_history .noti_txt').hide(); 
		$('#popup_history .noti_txt_set').show(); 
}

function popup_alert(){  // 키워드알림 보기
		window.open('개인화.popup-키워드알림.html','_blank','top=0,left=0,width=800,height=600,toolbar=0,status=0,scrollbars=1,resizable=0');
}

var  f_setting = 0;
$(document).ready(function () {

    // 미리보기 더보기
    $('#co_mainContainer .main_container_view').append("<div class='container_view_more'><div class='btn'>펼쳐보기</div><em class='text_ex fnob'><i class='icon-16 va' data-icon='&#xe90d;'></i>미리보기 화면에서는 관련 자료 등의 정보 제공에 제한이 있을 수 있습니다.</em> </div>");
    $(".main_container_view_inner h3 .btn_close").empty();
    $('.container_view_more .btn').click(function () {
        var position = $(".container_view_more").position();
        if (position.top > $('.main_container_inner').outerHeight()) { var more_num = 0; }
        else { var more_num = 1; }
        setHeight_under(more_num);
    });

    $('.function_area').on('click', '.font-p', function () {
        if (f_setting < 0) {
            $('#view_content').css('font-size', '');
            $('.table_index').css('font-size', '');
            f_setting = 0;
        } else {
            $('#view_content').css('font-size', 'larger');
            $('.table_index').css('font-size', 'larger');
            f_setting = 1;
        }
    });

    $('.function_area').on('click', '.font-m', function () {
        if (f_setting < 1) {
            $('#view_content').css('font-size', 'smaller');
            $('.table_index').css('font-size', 'smaller');
            f_setting = -1;
        } else {
            $('#view_content').css('font-size', '');
            $('.table_index').css('font-size', '');
            f_setting = 0;
        }
    });

    //회색바닥 사이즈 
    if ($("#container").length > 0) {
        var mainH = $('#container').outerHeight();
    } else {
        mainH = 0;
    }
    if ($("footer").length > 0) {
        var footH = $('footer').outerHeight();
    } else {
        footH = 0;
    }
    $("#bg_screen").height($('header').outerHeight() + mainH + footH + 20);

    //통검자동
    $(".search_center input[type='search']").click(function () {
        $(".search_layer_outer").show();
        $('.search_layer').show();
        $('.layer_calc_outer').hide();

    });
    $('.search_layer').mouseout(function () { //검색popup 닫기
        $('.search_layer').hide();
    });
    $('.search_layer').mouseover(function () { //검색popup 유지
        $('.search_layer').show();
        $('.layer_calc_outer').hide();
    });
    if ($('.search_layer_list').has('_done')) {
        $('.search_layer_list ul').height($('.search_layer_list._done').height() - 10);
    }

    //통검결과
    $(".btn_search_result").click(function () {
        $('#bg_screen').show();
        $('#search_map').addClass('slide_mov');
    });

    $("#search_map .btn_close_pop").click(function () {
        $('#bg_screen').hide();
        $('#search_map').removeClass('slide_mov');
    });
    //end

    $('.case_comment_in ').on('click', 'p', function () {
        $('.show_ccomment').hide();
        $(this).next('.show_ccomment').show();
        setHeight_history();
    });
    $("#sCat1").change(function () {
        if ($(this).val() == "440539") {
            $(".sCat_txt").text('질의기관');
        } else {
            $(".sCat_txt").text('구분');
        }

    });

    $('.calc_info').on('click', '.btn_more', function () { //개인화popup 닫기
        $('.calc_info div').toggle();
        $('.btn_more i').toggleClass('icon_close');
    });

    // $('.main_container').prepend("<div class='move_btn'><div class='btn_block'><i class='icon-' data-icon='&#xe911;'></i><i class='icon-' data-icon='&#xe907;'></i></div></div>");
    $('#co_mainContainer #container').append("<div class='btn_top_box'><div class='btn_top'>Top</div></div>");

    $('#indiv_area').on('click', '.icon-myfolder', function () { //header 마이폴더
        $('.base_popup').hide();
        $('#individual_area').show();
        $('#popup_myfolder').show();
    });

    $('#indiv_area').on('click', '.icon-history', function () { //header 히스토리
        $('.base_popup').hide();
        $('#individual_area').show();
        $('#popup_history').show();
    });

    $('.noti_txt_set').on('click', '.set_close', function () { //header 히스토리
        $('.noti_txt_set').hide();
        $('.noti_txt').show();
    });

    $('#indiv_area').on('click', '.icon-myinfo', function () { //header 나의정보
        $('.base_popup').hide();
        $('#individual_area').show();
        $('#popup_myinfo').show();
    });


    $('#indiv_area').on('click', '.icon-alert', function () { //header 알림
        $('.base_popup').hide();
        $('#individual_area').show();
        $('#popup_alert').show();
    });
    $('#indiv_area').on('click', '.icon-question', function () { //header 개인화 로그인전

        $('.base_popup').hide();
        $('#individual_area').show();
        $('#popup_login_ask').show();
    });

    $('#individual_area').on('click', '.btn_close_pop', function () { //개인화popup 닫기
        $('#individual_area').hide();
    });

    $('#container').click(function () { //개인화popup 닫기
        $('#individual_area').hide();
    });
    $('.base_popup').mouseout(function () { //개인화popup 닫기
        $('#individual_area').hide();
    });
    $('.base_popup').mouseover(function () { //개인화popup 유지
        $('#individual_area').show();
    });
    $('.folder_setup').on('click', '.folder_del_ac', function () {
        if ($('.tree li').has('folder_ac')) {
            $('.tree li .folder_ac').remove();
        };
        if ($(".folder_ac").length < 2) {
            $("<div class='folder_ac _delete'><i class='icon- ' data-icon='&#xe9ac;'><span class='blind'>삭제</span></i></div>").appendTo(".tree li");
        };
    });
    $('.folder_setup').on('click', '.folder_modi_ac', function () {
        if ($('.tree li').has('folder_ac')) {
            $('.tree li .folder_ac').remove();
        };
        if ($(".folder_ac").length < 2) {
            $("<div class='folder_ac _modify'><i class='icon-' data-icon='&#xe925;'><span class='blind'>수정</span></i></div>").appendTo(".tree li");
            $('.folder_ac').click(function () {
                $(this).empty();
                $(this).append("<div><span>확인</span> <span>취소</span></div>");
            });
        };
    });

    $('#case_comment_info').on('click', '.btn_close_pop', function () { //천자평석 popup 닫기
        $('#case_comment_info').hide();
        $('#bg_screen').hide();
    });

    $('.top_container  .function_area').on('click', '#cont_share', function () { // popup공유
        $('.base_popup').hide();
        $('#individual_area').show();
        $('#popup_share').show();
    });

    $('.top_container  .function_area').on('click', '#folder_put', function () { // popup폴더담기
        $('.base_popup').hide();
        $('#individual_area').show();
        $('#popup_folder').show();
    });

    $('.top_container  .function_area').on('click', '#alert_set', function () { // popup폴더담기
        $('.base_popup').hide();
        $('#individual_area').show();
        $('#popup_alert_set').show();
    });

    $('.top_container  .function_area').on('click', '#pring_set', function () { // popup 인쇄
        $('.base_popup').hide();
        $('#individual_area').show();
        $('#other_function').show();
    });
    $('.top_container  .function_area').on('click', '#save_set', function () { // popup 저장
        $('.base_popup').hide();
        $('#individual_area').show();
        $('#other_function_save').show();
    });

    $(".btn_top").click(function () {
        $('body,html').animate({ "scrollTop": "0" }, 300);
        return false;
    });
    $(window).scroll(function () {

        if ($(window).scrollTop() >= 80) {
            $(".btn_top").fadeIn(2000).css("left", $('#container').width() + $(".btn_top").width() + 7);

        } else {
            $(".btn_top").fadeOut(2000).css("left", $('#container').width() + $(".btn_top").width() + 7);
        }

    });

    $("nav dd").click(function () {
        $(".submenu_group").toggleClass('slide_mov');
    });

    $(".submenu_group").mouseleave(function () {
        $(".submenu_group").removeClass('slide_mov');
    });

    $(".icon_listnview").click(function () {
        if ($(".navigation_p").length > 0) {
            $("#container").addClass('list-view ');
            $(".main_container_view").addClass('slide_mov');
            $(".right_container").addClass('slide_mov_right');
            $("#right_control").css('display', 'block');
            $("#search_results").css('overflow-y', 'auto').height($(".main_container_inner").height());
            setHeight_navi();
        }
        else {
           // alert(document.body.clientWidth);
            $(".main_container_view").addClass('slide_mov');
            $("#container").addClass('list-view ');
            $(".main_container ol").removeClass('btn_exist');
            $("#option_a").attr('class', 'option_a_on');
            $("#option_b").attr('class', 'option_b');
            $(".list").addClass('type-a');
            $(".right_container").addClass('slide_mov_right');
            $("#right_control").css('display', 'block');
            $('#container').addClass('hasscroll'); //미리보기의 데이터이동 아이콘
            if ($('#co_mainContainer').length > 0) {
                setHeight_under();
            } else {
                setHeight();
            }
        }
    });

    $("#right_control").click(function () {  //오른쪽 영역 레이어로 올려서 움직이기
        if ($(".add_border").length > 0) {
            $(".right_container").removeClass('add_border');
            $(".right_container").addClass('slide_mov_right');
            $(".right_container").removeClass('slide_mov');
            $(this).removeClass('_up');
        }
        else {
            $(".right_container").removeClass('slide_mov_right');
            $(".right_container").addClass('slide_mov');
            $(".right_container").addClass('add_border');
            $(this).addClass('_up');
        }
        if ($('#co_mainContainer').length > 0) {
            setHeight_under();
        } else {
            setHeight();
        }
    });

    $(".main_container_view .btn_close").click(function () {
        //alert(document.body.clientWidth);
        if ($(".navigation_p").length > 0) {
            $(".main_container_view").removeClass('slide_mov');
            $("#container").removeClass('list-view');
            $(".right_container").removeClass('slide_mov_right').removeClass('add_border');
            $('#search_results').css('overflow', 'hidden');
            if (document.body.clientWidth > 1270) {
                $("#right_control").css('display', 'none');
            }
            setHeight_navi();
        }
        else if ($(".case_history").length > 0) {
            $(".main_container").removeClass('_view');
        }
        else {
            $(".main_container_view").removeClass('slide_mov');
            $("#container").removeClass('list-view');
            $(".main_container ol").addClass('btn_exist');
            $(".right_container").removeClass('slide_mov_right').removeClass('add_border');
            $("#option_a").attr('class', 'option_a');
            $("#option_b").attr('class', 'option_b_on');
            $(".list").removeClass('type-a');
            $('#container').removeClass('hasscroll'); 
            if ($('#co_mainContainer').length > 0) {//바닥페이지 
                setHeight_under();
            } else { //popup 페이지 
                setHeight();
            }
        }
    });

    $("#title_result_tab .btn_close").click(function () {
        $("#result_area").removeClass('slide_mov_bottom');
        setTimeout(function () {
            $("#result_area").hide();
            if ($("#pdf_view_etc").length > 0) {
                $("#pdf_view_etc").hide().removeClass('slide_mov_bottom');
            }
        }, 200);
        $(this).hide();
        if ($("#pdf_view").length > 0) {
            $("#pdf_view").height($('.main_container').height() - 37);
            $(".btn_reapprea").show();
        } else {
            $("#title_result_tab").hide();
            $("#pdf_view").show();
            $("#view_content").show();
        }
    });

    $("#title_result_tab .btn_reapprea").click(function () {

        $("#result_area").show();
        setTimeout(function () {
            $("#result_area").addClass('slide_mov_bottom');
            $("#pdf_view").css('padding-top', '37px');
        }, 200);
        $(this).hide();
        $("#title_result_tab .btn_close").show();
        $("#result_area").css('z-index', '1');
        $("#title_result_tab").css('z-index', '1');
    });


    $("#related_comment_tab .btn_close").click(function () {
        $(".popup_mov_area").removeClass('slide_mov_bottom');
        setTimeout(function () {
            $(".popup_mov_area").hide();
        }, 200);
        $(this).hide();
        if ($("#pdf_view").length > 0) {
            $("#pdf_view").height($('.main_container').height() - 37);
            $(".btn_reapprea").show();
            if ($('#related_comment_result').length > 0) {
                $("#pdf_view").height($('.main_container').height());
                $(".result_tab").hide();
                $("#pdf_view").css('padding-top', '0');
            }
        } else {
            $(".result_tab").hide();
            $("#pdf_view").show();

        }
        $(".result_tab").css('z-index', '1');
        $("#title_result_tab").css('z-index', '1');
        $(".popup_mov_area").css('z-index', '1');
    });

    $(".info_div_area div").click(function () {
        $(".info_div_area").hide();

    });


    $('.view_type_list').on('click', '#option_a', function () {
        $("#option_a").attr('class', 'option_a_on');
        $("#option_b").attr('class', 'option_b');
        if ($('.t_search').length > 0) {
            $(this).parent().parent().parent().parent().find('+ ol.list').addClass('type-a');
        } else {
            $(".list").addClass('type-a');
        }
        setHeight_under();
    });

    $('.view_type_list').on('click', '#option_b', function () {
        $("#option_a").attr('class', 'option_a');
        $("#option_b").attr('class', 'option_b_on');
        if ($('.t_search').length > 0) {
            $(this).parent().parent().parent().parent().find('+ ol.list').removeClass('type-a');
        } else {
            $(".list").removeClass('type-a');
        }
        setHeight_under();
    });

    $('.container_hide').on('click', '#left_hide', function () {
        if ($("#container.two-con").length > 0) {
            $("#container").removeClass('two-con');
        } else {
            if ($("#container.wide_left").length > 0) {
                $("#container").removeClass('wide_left');
            } else { $("#container").addClass('two-con'); }
        }
        setHeight();
    });

    $('.container_hide').on('click', '#left_wide', function () {
        if ($("#container.two-con").length > 0) {
            $("#container").removeClass('two-con');
        } else {
            $("#container").addClass('wide_left');
        }

        setHeight();
    });

    $('.detail_area .but').click(function () {
        $("#detail_area").toggle();
        if ($('#co_popupContainer').length > 0) {
            setHeight();
        } else {
            $(this).toggleClass('open');
            setHeight_under();
        }
    });

    $(".add_option span.btn").click(function () {
        var choo_div = $(this).attr('data-rev');
        $('#' + choo_div).toggle();
        $(this).toggleClass('_select');
        setHeight_under();
    });

    $(".level_court em").click(function () {
        $(this).parent().children().next().toggle();
        $(this).parent().toggleClass('_select');
    });

    $(".date_select").change(function () {

        if ($(this).val() == "00") {
            $(".detail_date").show();
        } else {
            $(".detail_date").hide();
        }
    });

    $(".directory_list.commentary li").click(function (index) {
        $(".directory_sub_org").hide();
        var idx = $(".directory_list.commentary li").index($(this));
        $(".directory_sub_org").eq(idx).toggle();
        var span_x = idx % 5;
        $(".directory_sub_org").eq(idx).find('span').css('margin-left', $(".directory_list.commentary li").width() * span_x + 45);
        setHeight_under();
    });



    $('#career_add').on('click', function () {
        if ($("#career_area li ").length < 4) {
            $("<li class='fill'><label>경력소속</label><input type='text'  name=' '  class='career_input'></li>").appendTo("#career_area");
        }

    });


    var tNav = $('.tree');
    var tNavPlus = '\<button type=\"button\" class=\"tNavToggle plus\"\>+\<\/button\>';
    var tNavMinus = '\<button type=\"button\" class=\"tNavToggle minus\"\>-\<\/button\>';

    tNav.find('li>ol:hidden').parent('li').prepend(tNavPlus);
    tNav.find('li>ol:visible').parent('li').prepend(tNavMinus);

    tNav.find('li>ul:hidden').parent('li').prepend(tNavPlus);
    tNav.find('li>ul:visible').parent('li').prepend(tNavMinus);

    tNav.find('li:first-child').addClass('open').parents('li').addClass('open');
    tNav.find('li.open>.tNavToggle').text('-').removeClass('plus').addClass('minus');
    tNav.find('li>ol>li>olli>ol:visible').hide().parent('li').removeClass('open').addClass('close');
    tNav.find('li.close>.tNavToggle').text('+').removeClass('minus').addClass('plus');

    $('.tree .tNavToggle').click(function () {
        t = $(this);

        t.parent('li').toggleClass('open');

        if (t.parent('li').hasClass('open')) {
            t.text('-').removeClass('plus').addClass('minus');
            t.parent('li').find('>ol').slideDown(100);
            t.parent('li').find('>ul').slideDown(100);
        } else {
            t.text('+').removeClass('minus').addClass('plus');
            t.parent('li').find('>ol').slideUp(100);
            t.parent('li').find('>ul').slideUp(100);
        }
        return false;
    });
    $('.tree label').click(function () {
        t = $(this);
        t.parent('li').toggleClass('open');
        if (t.parent('li').hasClass('open')) {
            t.prev('button.tNavToggle').text('-').removeClass('plus').addClass('minus');
            t.parent('li').find('>ol').slideDown(100);
        } else {
            t.prev('button.tNavToggle').text('+').removeClass('minus').addClass('plus');
            t.parent('li').find('>ol').slideUp(100);
        }
        return false;
    });

    $('.result_case_tab li a').click(function () {
        $('.result_case_tab li').not(this).removeClass('_this');
        $(this).parent('li').addClass('_this');
    });

}); 