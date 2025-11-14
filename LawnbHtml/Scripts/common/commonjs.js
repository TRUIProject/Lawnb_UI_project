//https
var _tempIndex = 0;
var ipMember = (localStorage.getItem("IpMemberY") == null ? "" : localStorage.getItem("IpMemberY"));
var httpslogin = window.location.href.replace("http://", "https://");
//if (ipMember != "IPMember") {
    if (window.location.href.indexOf("https://") < 0 && window.location.href.indexOf("localhost") < 0
        && window.location.href.indexOf("app.lawnb.com") < 0 && window.location.href.indexOf("appfree.lawnb.com") < 0
        && window.location.href.indexOf("demoui.lawnb.com") < 0 && window.location.href.indexOf("114.200.198.41") < 0
        && window.location.href.indexOf("114.200.198.42") < 0 && window.location.href.indexOf("114.200.198.43") < 0
        && window.location.href.indexOf("114.200.198.44") < 0 && window.location.href.indexOf("testlawnb.lawnb.com") < 0
        ) { //http 일때 
        location.href = httpslogin;
    }
//}
//console.log(ipMember);
var eventPopup;
var expanded = false;
var bExCharr = "`,~,!,@,#,$,%,^,&,*,(,),_,|,+,\,-,=,?,;,:,',\",\,,.,<,>,\,{,\},\[,\],\\,\/";
var uCode = "";
var LoginLevelChk = false;
$(function () {
    if ($('.title_area h2').height() > 67) { 
            $('h2 .more').show(); 
         
    } else {
        expanded = false;
        $('h2 .more').hide();
    };
    $('.more').click(function () {
        if (!expanded) {
            $('.title_area h2').addClass("case_tit_hidden");
            $('.btn_more_area').addClass("act");
            $('.more').attr('title', '제목열기');
            resizeComment();
            expanded = true;
        } else {
            $('.title_area h2').removeClass("case_tit_hidden");
            $('.btn_more_area').removeClass("act");
            $('.more').attr('title', '제목닫기');
            resizeComment();
            expanded = false;
        }
    });
    /*
    if (uCode == "") {
        localStorage.removeItem("mySearchOnOff");
        localStorage.removeItem("mySearchContentList");
    }*/
});

// 정규식 숫자 체크
function isNumeric(_val, _type) 
{
    // 좌우 trim(공백제거)을 해준다.
    _val = String(_val).replace(/^\s+|\s+$/g, "");

    if (_type == "undefined" || _type == "1") {
        // 모든 10진수 (부호 선택, 자릿수구분기호 선택, 소수점 선택)
        var regex = /^[+\-]?(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g;
    } else if (_type == "2") {
        // 부호 미사용, 자릿수구분기호 선택, 소수점 선택
        var regex = /^(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g;
    } else if (_type == "3") {
        // 부호 미사용, 자릿수구분기호 미사용, 소수점 선택
        var regex = /^[0-9]+(\.[0-9]+)?$/g;
    } else {
        // only 숫자만(부호 미사용, 자릿수구분기호 미사용, 소수점 미사용)            
        // /^[0-9]+$/;
        var regex = /^[0-9]*$/g;
    }

    if (regex.test(_val)) {
        _val = _val.replace(/,/g, "");
        return isNaN(_val) ? false : true;
    }
    else {
        return false;
    }
} 

// 체크박스 전체 체크
function chkIdCat_A (_id) {
    if ($("#" + _id + "_a").prop("checked")) {
        $("input[name=" + _id + "]").prop("checked", true);
    } else {
        $("input[name=" + _id + "]").prop("checked", false);
    }
};
// 체크박스 체크
function chkIdCat (_id) {
    var isAllchk = true;
    $("input[name=" + _id + "]:checkbox").each(function () {
        if (!this.checked) { isAllchk = false; }
    });
    $("#" + _id + "_a").prop("checked", isAllchk);
};

// 클립보드 copy
function urlCopy() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#shareUrl").text()).select();
    document.execCommand("copy");
    $temp.remove();
};

//------------ 개인화 히스토리 저장 ----------------------------------//
function loginNeed()
{
    var ipMemberChk = (localStorage.getItem("IpMemberY") == null ? "" : localStorage.getItem("IpMemberY"));
    if (ipMemberChk == "IPMember") {
        alert("해당 기능은 개인화 로그인을 한 후 이용할 수 있습니다.");
    }
    else {
        alert("해당 기능은 로그인 후 이용할 수 있습니다.");
    }    
    location.href = "/Login/Index/";
}

function SetMyHistoryList(sCode, sId, sTitle){

    var url = "/MyDesk/SetMyHistorys";
    var dataParams = { "sCode": sCode, "sId": sId, "sTitle": sTitle };
    sendNonBlockingAjaxRequest(url, dataParams, MyHistoryResultCallBack);
}
function MyHistoryResultCallBack(result){
    
    if (result == "1")  // 성공 or pass
    {
        // alert("[TEST]히스토리저장에 성공했습니다.");
        storage.setMyDeskChk();
    }
    else if (result == "-1") // 실패
    {
      //  alert("[TEST]히스토리저장에 실패했습니다.");        
    }
    else if (result == "-2" ) // 로그인 필수
    {
        loginNeed();
    }
}
//!------------ 개인화 히스토리 저장 --------------------------------!//

// 유효성 검사

// 알림 이메일 형식 체크
commonValidCheck = function (_type, _id) {
    var chkResult = true;
    switch (_type) 
    {
        case "email":
            {
                if ($("#" + _id).length > 0) 
                {
                    var txtEmail = $.trim($("#" + _id).val());
                    if (txtEmail == "" || txtEmail == null) {
                        alert("이메일을 입력해주세요.");
                        //$("#txtEmail").focus();
                        chkResult = false;
                        break;
                    }

                    if (!regExpression(_type, _id)) {
                        alert("이메일 형식이 유효하지 않습니다.");
                        chkResult = false;
                        break;
                    }
                }
            } break;
    }    
    return chkResult;
};

//type별 정규식 체크
function regExpression(_type, _id) 
{
    var chkResult = true;
    var regExp = ""; 
    switch(_type)
    {
        case "email":
            {
                var txtEmail = $("#" + _id).val();
                var emailList = txtEmail.split(';');
                regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
                for (var i = 0; i < emailList.length; i++) {
                    if (!regExp.test(emailList[i])) {
                        chkResult = false;
                        break;
                    }
                }
            } break;        
    }
    return chkResult;
};

// 글자수 제한
function textLengthLimit(id, len) {
    if ($("#" + id).val().length > len) {
        alert("글자수는 " + len.toString() + "자로 제한됩니다.")
        $("#" + id).val($("#" + id).val().substring(0, len));
        $("#" + id).focus();
        return false;
    }
}

// 본문 사이즈 조절
function setHeight() {
    if ($('#co_popupContainer').hasClass('mobile')) {
        if ($("#pdf_view").length > 0) {
            setTimeout(function () {
                if ($("#pdf_view").is(':visible')) {
                    if ($('#lbDid').length > 0) {
                        if ($('#lbDid').val().indexOf("C000") >= 0) {
                            $("#pring_set").hide(); $("#save_set").hide(); $("#highlight_set").hide();
                        }
                        else {
                            $("#pring_set").hide(); $("#save_set").hide();
                        }
                    } else {
                        $("#pring_set").hide(); $("#save_set").hide();
                    }
                    if ($('#topInfoDiv').length > 0) {
                        var topInfoDiv = $('#topInfoDiv').outerHeight();
                    } else { var topInfoDiv = 0; }
                    $("#pdf_view").height(document.body.clientHeight - $('head').outerHeight() - $('.title_area').outerHeight() - $('.mview_tab_area').outerHeight() - 80 - topInfoDiv);
                    $('.main_container').height($("#pdf_view").height() + topInfoDiv);
                    if (document.body.clientWidth > 500) {
                        $('.left_container').height($('.main_container').height());
                        $('#view_content').height($('.main_container').height());
                    };
                    $('html').css('overflow', 'hidden');
                } else {
                    $("#pring_set").show(); $("#save_set").show();
                    $('.main_container').height();
                    $('html').css('overflow', 'auto');
                }
            }, 300);
        }
        else if ($("#pdf_view_ahnex").is(':visible') && $('#view_sub_content').is(':visible')) { //별표서식
            setTimeout(function () {
                $("#pdf_view_ahnex").height(document.body.clientHeight - $('head').outerHeight() - $('#view_sub_content .normal').outerHeight() - $('.title_area').outerHeight() - 122);
                $('.main_container').height($("#pdf_view_ahnex").outerHeight());
            }, 300);
        }
        else if ($(".onju").is(':visible') && document.body.clientWidth > 500 ) {
            setTimeout(function () {
                $('.left_container').height(document.body.clientHeight - $('head').outerHeight() - $('.title_area').outerHeight() - 120 );
                $('.main_container').height(document.body.clientHeight - $('head').outerHeight() - $('.title_area').outerHeight() - 120 );
            }, 300);
        }
        else {
            if (!$("#container").hasClass('lawmap')) {
                if (document.body.clientWidth < 500) {
                    $('.left_container').height(document.body.clientHeight);
                } else {
                    $('.main_container').css('min-height', document.body.clientHeight - $('head').outerHeight() - $('.title_area').outerHeight() - $('.mview_tab_area').outerHeight() - 80);
                }
            } else{
                $('.main_container').css('min-height', document.body.clientHeight - $('head').outerHeight()  - 80);
            }

            if ($('.main_container').height() < $('.left_container').height()) {
                $('.main_container').height($(".left_container").outerHeight());
            } else {
                $('.main_container').height($(".main_container_view_inner").outerHeight());
            }
        }
        if ($('.onju_front_page').is(':visible')) {
            var front_page_H = document.body.clientHeight - $('head').outerHeight() - $('.title_area').outerHeight() - $('.mview_tab_area').outerHeight() - $('.onju_front_page p + div').outerHeight() - $('.onju_front_page .ar').outerHeight() - 40;
            if (front_page_H < 200) {
                $('.onju_front_page p').height(200).css('padding-top', '80px');
            } else {
                $('.onju_front_page p').height(front_page_H)
                    .css('padding-top', $('.onju_front_page p').height() / 2 - 20 + 'px');
            } 
        }
    } else {
        var popup_topH = $('header').outerHeight() + 1;

        if ($(".lawmap").length > 0) {
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

        if ($("#pdf_view_ahnex").is(':visible')) { //별표서식
            $("#pdf_view_ahnex").height($('.main_container').innerHeight() - $("#view_sub_content .normal").outerHeight() - 61);
            $('.main_container').css('overflow', 'hidden');
            if ($('.wide_left').length > 0) {
                //$('#pring_set').hide();
                $('.right_container').addClass('slide_mov_right');
                if ($('#right_control').hasClass('_up')) { $('.right_container').removeClass('slide_mov_right'); }
                if ($('#view_content').length > 0)
                { $('#right_control').show(); } else { $('#right_control').hide(); }
            }
        }
        if ($('.doc').length > 0 || $('.onju').length > 0 ) {
            if ($('.small_search_inbox').length > 0) {
            $('.small_search_inbox').width($('.left_container').width() - 30);
            // 이북,주석서 검색결과레이어 높이계산 추가 Jenna 2020.08.11
                $("#result_area").height($('.main_container').height() - 37); 
            }
        }

        if ($('#container').hasClass('lawyer')) { //법조인본문 테이블 깨짐 처리
            var Comp3 = $('#p_workType_C + ul li:nth-child(3)').height();
            var Comp4 = $('#p_workType_C + ul li:nth-child(4)').height();
            $('#p_workType_C + ul li:nth-child(3)').height(Math.max(Comp3, Comp4));
            $('#p_workType_C + ul li:nth-child(4)').height(Math.max(Comp3, Comp4)); 
        }

        if ($('.onju_front_page').is(':visible')) {
            var front_page_H = $('.main_container').height() - 70 - $('.onju_front_page p + div').outerHeight() - $('.onju_front_page .ar').outerHeight();
            if (front_page_H < 200) {
                $('.onju_front_page p').height(200).css('line-height',  '200px');
            } else {
                $('.onju_front_page p').height(front_page_H)
                    .css('line-height', $('.onju_front_page p').height() + 'px');
            }
            
        }
 
        setTimeout(function () {
            if ($("#pdf_view").length > 0) {
                if ($("#pdf_view").is(':visible')) {
                    if ($('#lbDid').length > 0) {
                        if ($('#lbDid').val().indexOf("C000") >= 0) {
                            $("#pring_set").show(); $("#save_set").show();
                        }
                        else {
                            $("#pring_set").hide(); $("#save_set").hide();
                        }
                    } else {
                        $("#pring_set").hide(); $("#save_set").hide();
                    }
                } else {
                    $("#pring_set").show(); $("#save_set").show();
                }
            }

        }, 300);
        bg_screen_H();
    }
}

// 고객센터 사이즈 조절
function setHeight_customer() {
    var popup_topH = $('header').outerHeight() + 1;
    var bottomH = $('footer').outerHeight();
    if ($('#co_mainContainer').hasClass('mobile')) { 
        $('.main_container').css('min-height', document.body.clientHeight - popup_topH - bottomH);
    } else {
        setTimeout(function () {
        $('.main_container').css('min-height', document.body.clientHeight - popup_topH - bottomH);
        $('.main_container').height($('.main_container_view').outerHeight() + 35); 
    }, 300); 
    }
}

// 바닥페이지 사이즈조절
function setHeight_under(more_num) {
    if ($('#co_mainContainer').hasClass('mobile')) {
        var popup_topH = $('header').outerHeight() + $('.navi_area').outerHeight();
        var bottomH = $('footer').outerHeight();
        var C_height = document.body.clientHeight - popup_topH - bottomH;
        var scrollWIdth = 0;
        $('.main_container').css('min-height', C_height).height('unset'); 
        
        if ($('#container').hasClass('t_search')) {
            $("._scroll a:visible").each(function (index) {
                scrollWIdth += $(this).outerWidth(); 
            });
           $("._scroll div").width(scrollWIdth + 50);
       } else if ($('#container').hasClass('org') && document.body.clientWidth < 480) {
           var L_height = document.body.clientHeight - popup_topH - bottomH - $('#org_tab').outerHeight()  ;
           if ($('.main_container').is(':visible')) {
               $('.left_container').css('min-height', 0);
               if ($('#map_result').length > 0){
                   $('.main_container').height($('#map_result').outerHeight() + 60); 
                }
               else{
               $('.center_index').height($('#divOrgMenu').outerHeight() + $('#org_tab').outerHeight());
               $('.main_container').height($('#divOrgMenu').outerHeight() + $('#org_tab').outerHeight()); 
               }
           } else {
               $('.left_container').css('min-height', L_height);
           }
       }
        if (($('.main_container_inner').height() < $('.left_container').height()) && document.body.clientWidth > 480 ) {
        
           $('.main_container').height($(".left_container").outerHeight());
       }  

       if($("#container").hasClass('list-view')){
           if ($('#search_results').height() < $('.main_container_view_inner').height()) {
               $('.main_container').height($(".main_container_view_inner").outerHeight());
           }  
        }
       
   } else {

   setTimeout(function () {
       if ($('#container').hasClass('list-view')) { //미리보기
           var center_height = $('.main_container_inner').outerHeight();
           var center_view_height = $('.main_container_view_inner ').outerHeight();
			
			//미리보기 새UI	 
			if($(document).scrollTop() > 147 && $(document).scrollTop() < $('.main_container').height() - $(window).height() + 135 ){ 
				var widthX = $('.main_container').width() * 0.6 ;
				var rightX = ($(document).width() - $('.main_container').width())/2; 
				$('.main_container_view').addClass('fixed').width(widthX).css('right', rightX + 'px');
				$('.main_container_view').scrollTop(0);
			}  
			else{
				$('.main_container_view').removeClass('fixed').width('').css('right', '0');
			}
			//미리보기 새UI end
			   
       //    if ($('#sCode').val() == 'L000') {
       //        $('.main_container').height(Math.max(center_view_height, center_height));
       //      //  $('.container_view_more').hide();
       //    }
       //    else {
       ////        if (center_height < center_view_height) {
				   ////if(!$('.main_container_view').hasClass('fixed')){
					  //// if (!more_num == 0) {
						 ////  $('.main_container').animate({ height: Math.max(center_view_height + 60, center_height) }, 200);
						 ////  $('.container_view_more').css({ 'bottom': '-30px', 'top': 'auto' }).show();
						 ////  $('.container_view_more .btn').html('접기');
					  //// } else {
						 ////  $('.main_container').animate({ height: center_height }, 150);
						 ////  $('.container_view_more').css('top', center_height - 103).show();
						 ////  $('.container_view_more .btn').html('펼쳐보기');
					  //// }
				   ////}
       ////        } else { $('.main_container').height(center_height); $('.container_view_more').hide(); }
       //    }

           if ($('.main_container').height() < $('.right_container').height()) {
               $('.right_container').height(Math.max(center_view_height, center_height));
           }
       }
       else if ($('#container').hasClass('list_two-con')) { //변형3단
           if ($('#container').hasClass('personal_menu')) { //개인화
               var center_index = $('.left_container').outerHeight() + 10;
           }
           else {
               var center_index = $('.center_index section').outerHeight() + 20;
           }
           var center_view = $('.center_view').outerHeight() + 40;

           $('.main_container').height(Math.max(center_index, center_view));

           if (center_index < center_view) {
               $('.center_index').height($('.main_container').height());
           } else {
               $('.center_index').height(center_index);
           }
       }
       else { //미리보기 아님

			$('.main_container_view').removeClass('fixed');

           var center_height = $('.main_container_inner').outerHeight() + 40;
           if (document.body.clientWidth < 1170) {
               if ($('#container').hasClass('case')) {
                   $('.main_container').height(center_height + 40);
               } else if ($('#container').hasClass('_article')) {
                   $('.main_container').height(Math.max($('.left_container').outerHeight(), center_height));
               }
               else {
                   $('.main_container').height(center_height);
               }
               $('.right_container').height(center_height);
               $('.right_container').css('overflow', 'auto');
           }
           else {
               if ($('#container').hasClass('case')) {
                   $('.main_container').height(Math.max($('.left_container').height(), $('.right_container').outerHeight(), center_height) + 40);
               } else {
                   $('.main_container').height(Math.max($('.left_container').height(), $('.right_container').outerHeight(), center_height));
               }
               $('.right_container').css({ "height": "" });
           }

           if ($('#container').hasClass('news') && $('.newslist .thumb_s img').length > 0) {
               $('.thumb_s img').each(function (i) {
                   console.log(i + ": " + $(this).width() + ',' + $(this).height());
                   if ($(this).width() > $(this).height()) {
                       $(this).width('100%');
                   } else { $(this).height('100%'); }
               });
            
           }

       }
       if ($(document).width() > 1250) {
           $("#right_control").hide();
       } else { $("#right_control").show(); }
       $(".btn_top_box").css("margin-left", $('#container').width() + 1);
       bg_screen_H();
   }, 300); 
    }
}

// 법조네비 사이즈 조절
function setHeight_navi() {
    var popup_topH = $('header').outerHeight() + 1;
    var headerH = $('.title_area').outerHeight();
    if($('#co_popupContainer').hasClass('mobile')){
        if (document.body.clientWidth < 480  ) {
            //$('.main_container_inner').height(document.body.clientHeight - popup_topH - headerH - $('.popup_footer').outerHeight());
        } else {
            $('.main_container_inner').css('min-height', document.body.clientHeight - popup_topH - headerH - $('.popup_footer').outerHeight() - 50);
            if ($('.left_container').height() > $('.main_container_inner').height()) {
                $('.main_container_inner').height($('.left_container').height());
            } else {
                $('.main_container_inner').height($('#search_results').height() + 35); 
            }
        }
   }
    else {
        $('.left_container').height(document.body.clientHeight - popup_topH - headerH).css('overflow', 'auto');

        $('.right_container').height(document.body.clientHeight - popup_topH - headerH).css('overflow', 'auto');
        $('.main_container_inner').height(document.body.clientHeight - popup_topH - headerH).css('overflow-y', 'auto');
        $('.main_container_view').height(document.body.clientHeight - popup_topH - headerH).css('overflow-y', 'auto');
        $('.checklist_area').height(document.body.clientHeight - popup_topH - headerH).css('overflow-y', 'auto'); // 체크리스트 

        $('.small_search_outbox').height(headerH - 1);
        $('.search_result').css('top', headerH).height($('.main_container_inner').height() - 1);
    }
    $('#right_control').hide(); 
    bg_screen_H();
}

// 법조인등록 사이즈 조절
function setHeight_Lregi() {
    var popup_topH = $('header').outerHeight() + 1;
    var headerH = $('.top_container').outerHeight();
    $('.left_container').height(document.body.clientHeight - popup_topH - headerH);
    $('.right_container').height(document.body.clientHeight - popup_topH - headerH).css('overflow', 'auto');
    $('.main_container').height(document.body.clientHeight - popup_topH - headerH).css('overflow', 'auto');

    if ($(".btn_right").length > 0) {
        $(".lots_list li").each(function (index) {
            var btn_height = $(this).outerHeight();
            $(this).find('> .btn_right').css('line-height', btn_height + 'px');
        });
    } 
}

// 판례히스토리 사이즈 조절
function setHeight_history() {
    var popup_topH = $('header').outerHeight() + 1;
    var headerH = $('.title_area').outerHeight();
    var hlistH = $('.history_hlist').outerHeight();
    if ($('.mobile').length > 0) {
        var more_space = $('.popup_footer').outerHeight();
    } else {
        var more_space = 0;
    };
    
    if (document.body.clientWidth > 480){
        $('.main_container').height(document.body.clientHeight - popup_topH - headerH - hlistH - more_space).css('overflow-y', 'auto');
        $('.case_follow').height(document.body.clientHeight - popup_topH - headerH - hlistH - more_space).css('overflow-y', 'auto');
        $('.case_comment').height(document.body.clientHeight - popup_topH - headerH - hlistH - more_space).css('overflow-y', 'auto');

        var pnum = $('.case_comment_in p').length;
        $('.show_ccomment').each(function (index) {
            if ($(this).css("display") == "block") {
                if (pnum == '1') {
                    $(this).height($('.case_comment').height() - (($('.case_comment_in p').outerHeight() + 2) * pnum) - $('.last-blank').height() - more_space).css('overflow-y', 'auto');
                } else { $(this).height($('.case_comment').height() - (($('.case_comment_in p').outerHeight() + 2) * pnum)).css('overflow-y', 'auto'); $('.last-blank').hide(); }
            }
        });
    }
    if ($('.case_comment_in div').length == 1) {
        $('.case_comment.graph_area').css('background-color', '#e7f3f3');
        $('.last-blank').hide();
    } else {
        $('.case_comment.graph_area').css('background-color', 'transparent');
    }
    bg_screen_H();
}

function setHeight_newold() { //신구조문
    var popup_topH = $('header').outerHeight();
    var titleH = $('.title_area').outerHeight();
    var joH = $('.old_new .title').height() + Math.max($('#n_top_left').outerHeight(), $('#n_top_right').outerHeight());

    $('.lawtitle_content').height(Math.max($('#n_top_left .lawtitle_content').height(), $('#n_top_right .lawtitle_content').height()));
     
    if ($('#co_popupContainer').hasClass('mobile')) {
        $('.main_container').height(document.body.clientHeight - (popup_topH + titleH + 40));
    } else {
        $('.main_container').height(document.body.clientHeight - (popup_topH + titleH));
    }
	$('.main_container').css('overflow', 'hidden');
	

	if ($('#sChk').val() == '1') {
	    $('#NewOldContID').height(document.body.clientHeight - (popup_topH + titleH + joH + $("#list_Left").height()));
		$('#NewOldContID').css('overflow', 'auto');
	} else { 
		$('#NewOldContID').height(document.body.clientHeight - (popup_topH + titleH + joH ));
		$('#NewOldContID').css('overflow', 'auto');
}

if ($(".icon_fixed").length > 0) {
    $('.popup_law .new_normal').css('padding-left', '48px');
    $('.icon_fixed').height($('.new_normal').height() + 8);
}
	if (WebInMobile()) {
	    $('.newold_left').width($('.old_new').width() / 2);
	    $('.newold_right').width($('.old_new').width() / 2);
	}
	else {
	    if ($(".popup_law").height() > $('#NewOldContID').height()) {
	        
	        $('.newold_left').width(parseInt($('.old_new').width() / 2) - 9 );
	        $('.newold_right').width(parseInt($('.old_new').width() / 2) + 8);
	        //$('td:nth-of-type(even) .icon_fixed').css('left', '51%');
	    } else { 
	        $('.newold_left').width($('.old_new').width() / 2 - 1);
	        $('.newold_right').width($('.old_new').width() / 2  );
	       // $('td:nth-of-type(even) .icon_fixed').css('left', '51.8%');
	    }
	}
	if ($(".icon_fixed").length > 0) {
	    //$('.popup_law .new_normal').css('padding-left', '48px');
	    $('.icon_fixed').height($('.new_normal').height() + 8);
	}
	bg_screen_H();
}


//  popup 삼단비교 사이즈 조절
function setHeight_samdan(isCall) {
    var popup_topH = $('header').outerHeight();
    var titleH = $('.title_area').outerHeight();
    var tit_H = Math.max($('#samTitle1').height(), $('#samTitle2').height(), $('#samTitle3').height());
    $('#tit_area .box_third').height(tit_H);

    if (isCall == 0) {
        var tree_H = 0;
        $('#tree_area').hide();
    }
    else {
        var tree_H = $('#tree_area').outerHeight();
        
        $('#tree_area').show();
    }
    
    if ($('#co_popupContainer').hasClass('mobile')) {
        $('.main_container').height(document.body.clientHeight - (popup_topH + titleH + 40));
    }else{
        $('.main_container').height(document.body.clientHeight - (popup_topH + titleH));
    }
    $('#content_1 .jo_group .box_third').height(document.body.clientHeight - (popup_topH + titleH + tree_H + tit_H + 24));

    if ($("#wrapper_sam1").length > 0) {
        $('#wrapper_sam1').height(document.body.clientHeight - (popup_topH + titleH + tree_H + tit_H + 24));
    }
    if ($("#wrapper_sam2").length > 0) {
        $('#wrapper_sam2').height(document.body.clientHeight - (popup_topH + titleH + tree_H + tit_H + 24));
    }

    // 자치법규 추가 
    var historyH = $('.box_third_history').outerHeight();
    var searchH = $('.box_third_search').outerHeight();
    var titleH2 = $('#tit_area').outerHeight();

    if ($("#wrapper_laerule").length > 0) {
        $('#wrapper_laerule').height(document.body.clientHeight - (titleH2 + historyH + searchH + 115));
    }

    if ($("#wrapper_laerule1").length > 0) {
        $('#wrapper_laerule1').height(document.body.clientHeight - (titleH2 + historyH + searchH + 115));
    }

    if ($("#wrapper_laerule2").length > 0) {
        $('#wrapper_laerule2').height(document.body.clientHeight - (titleH2 + historyH + searchH + 115));
    }

    // 법규 비교 
    if ($("#wrapper_lawcomp").length > 0) {
        $('#wrapper_lawcomp').height(document.body.clientHeight - (titleH2 + searchH + 103));
    }

    if ($("#wrapper_lawcomp2").length > 0) {
        $('#wrapper_lawcomp2').height(document.body.clientHeight - (titleH2 + historyH + 103));
    }

    bg_screen_H();
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
    $('.main_container').height(document.body.clientHeight - (popup_topH + titleH));
    $('#wrapper_sam_no').height(document.body.clientHeight - (popup_topH + titleH + tit_H + newtit_H + jo_H + 12));
    if ($("#popup_law").length > 0) {
        $("#wrapper_popup").height(document.body.clientHeight * 0.8 - 40);
    }
  
}

// 미주 오픈
function open_miju(mi) {
    if (event.clientX > 800) {
        $("#" + mi).addClass("miju_box_left");
        if (mi == "Miju_case") { $("#" + mi).removeClass("miju_box_left"); }
    }
    if (event.clientY > (document.body.clientHeight / 3) * 2) {
        $("#" + mi).addClass("miju_box_bottom");
        if (mi == "Miju_case") { $("#" + mi).removeClass("miju_box_bottom"); }
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
    if ($("#lbDid").length > 0) {
        if ($.trim($('#lbDid').val()).substring(0, 4) == "L000") {
            law.setAdditionCont(mi);
        }
    }
    if ($("#" + mi).text() != "") {
        $("#" + mi).show();
    }
}

// 미주 클로즈
function close_miju(mi) {
    $("#" + mi).addClass("miju_box");
    $("#" + mi).hide();

    //var x = $("#" + mi).parents(".miju_num").index();
    //alert(x);
    $(".miju_num").eq(_tempIndex).attr("onclick", "open_miju('" + mi + "');");
}

function case_comment_info_popup() { //천자평석
    $('#bg_screen').show();
    $('#case_comment_info').show();
    $('#case_comment_info .base_popup').show();
}

 

function popup_doc_dictionary_list() {  //법률사전 법령명 약어표
    window.open('/Support/ContentHelp/LawDicInfo', '_blank', 'top=0,left=0,width=800,height=600,toolbar=0,status=0,scrollbars=1,resizable=0');
}

function popup_doc_dictionary_list2() {  //법률영한사전 법령명 약어표
    window.open('/Support/ContentHelp/KorEngDicInfo', '_blank', 'top=0,left=0,width=700,height=600,toolbar=0,status=0,scrollbars=1,resizable=0');
}

function setTreeBinding() {
    var tNav = $('.tree');
    var tNavPlus = '\<button type=\"button\" class=\"tNavToggle plus\"\>+\<\/button\>';
    var tNavMinus = '\<button type=\"button\" class=\"tNavToggle minus\"\>-\<\/button\>';

    if ($('.c_center').length > 0 ) {  
        tNav.find('li li>ul:visible').hide().parent('li').prepend(tNavMinus).addClass('close'); 
         
    } else if ($('._article').length > 0 ){
        tNav.find('li>ol:visible').hide().parent('li').prepend(tNavMinus).addClass('close'); 
    }else {
        tNav.find('li>ol:hidden').parent('li').prepend(tNavPlus);
        tNav.find('li>ol:visible').parent('li').prepend(tNavMinus);

        tNav.find('li>ul:hidden').parent('li').prepend(tNavPlus);
        tNav.find('li>ul:visible').parent('li').prepend(tNavMinus);

    }
    
//    if (!$("#sCode").val() == "D001")
//    {
//        tNav.find('li:first-child').addClass('open').parents('li').addClass('open');
//    }
    // + - 버튼 두번클릭시에만 열려서 open 제거
    // 하단에 추가    
    //tNav.find('li:first-child').addClass('open').parents('li').addClass('open');

    tNav.find('li.open>.tNavToggle').text('-').removeClass('plus').addClass('minus');

    if ($("#container").hasClass('doc')) {
        tNav.find('li>ol>li>ol>li>ol:visible').hide().parent('li').addClass('close');
    }

    tNav.find('li.close>.tNavToggle').text('+').removeClass('minus').addClass('plus');
}


if ($('.search_layer_list').has('_done')) {
    $('.search_layer_list ul').height($('.search_layer_list._done').height() - 10);
}

function getTotalSearch() {
    var sWordChk = $.trim($('#qu').val());
    if (sWordChk.length == 0) {
        alert('검색어를 입력해 주세요.');
        return false;
    } else {
        if (chkTotalValue(sWordChk) == 1) {
            alert('검색어는 두 자 이상이어야 합니다.');
            return false;
        }
        else if (chkTotalValue(sWordChk) == 2) {
            alert('제한된 개수 검색어에 특수문자가 들어 있습니다.');
            return false;
        } else {
            sWordChk = sWordChk.replace(/ /g, ':');
            storage.setSearchWord(sWordChk);
            return true;
        }
    }
}

function getTotalClickSearch() {
    var sWordChk = $.trim($('#qu').val());
    if (sWordChk.length == 0) {
        alert('검색어를 입력해 주세요.');
        return false;
    } else {
        var sChk = chkTotalValue(sWordChk);
        if (sChk == 1) {
            alert('검색어는 두 자 이상이어야 합니다.');
            return false;
        }else if (sChk == 2) {
            alert('제한된 개수 검색어에 특수문자가 들어 있습니다.');
            return false;
        } else {
            sWordChk = sWordChk.replace(/ /g, ':');
            storage.setSearchWord(sWordChk);
           $('#totalSearchForm').submit();
        }
    }
}

function chkTotalValue(sWordC) {
    var sChk = 0;
    if (sWordC.replace(/ /g, '').length == 1) {
        sChk = 1;
    }
    else if (sWordC.replace(/ /g, '').length <= 2) {
        //for (n = 0; n < bExCharr.split(',').length; n++) {
        //    if (sWordC.indexOf(bExCharr.split(',')[n]) >= 0) {
        //        sChk = 2;
        //        break;
        //    }
        //}
        sWordC = sWordC.replace(/ /g, '');
        var s1 = sWordC.substr(0, 1);
        var s2 = sWordC.substr(1, 1);
        for (n = 0; n < bExCharr.split(',').length; n++) {
            if (bExCharr.split(',')[n] != "") {
                if (s1 == bExCharr.split(',')[n]) {
                    sChk = 2;
                    break;
                }
                if (s2 == bExCharr.split(',')[n]) {
                    sChk = 2;
                    break;
                }
            }
        }
    } else {
        sWordC = sWordC.replace(/ /g, '');
        if (sWordC.length > 2) {
            var reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
            var resultData = sWordC.replace(reg, "");
            if (resultData == '') {
                sChk = 2;
            }
        }
    }
    return sChk;
}

function chkSpecialStr(_str) {
    var _boolSpecial = true;
    //var exChar = ".,*,^,[,],{,},:,\\,/,?,!,@,#,$,%,&,(,),<,>";

    //for (n = 0; n < exChar.split(',').length; n++) {
    //    if (_str.indexOf(exChar.split(',')[n]) >= 0) {
    //        _boolSpecial = false;
    //        break;
    //    }
    //}
    var reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
    var resultData = _str.replace(reg, "");
    if (resultData == '') {
        _boolSpecial = false;
    }
    return _boolSpecial;
}

function WebInMobile() {
    var uagent = navigator.userAgent.toLowerCase();
    var isMobile = false;

    var ret1 = uagent.search("android");
    var ret2 = uagent.search("ipad");
    var ret3 = uagent.search("ipod");
    var ret4 = uagent.search("iphone");

    if (ret2 > -1 || ret4 > -1) {isMobile = true;}
    else {isMobile = false;}
    return isMobile;
}

function CheckIeAgent() { 
    var agent = navigator.userAgent.toLowerCase();
        if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
            return true;
        }
        else {
            return false;
        }
}
 
function bg_screen_H() {
    if (!$('.mobile').length > 0) {
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
}
 
var f_setting = 0;

$(window).scroll(function(){  // 미리보기 ui변경
	if (!$('#co_mainContainer').hasClass('mobile') && $('#container').hasClass('list-view')){
	 //alert( $(document).scrollTop());
		if($(document).scrollTop() > 147 && $(document).scrollTop() < $('.main_container').height() - $(window).height() + 135 ){ 
			var widthX = $('.main_container').width() * 0.6 ;
			var rightX = ($(document).width() - $('.main_container').width())/2; 
			$('.main_container_view').addClass('fixed').width(widthX).css('right', rightX + 'px');
			//$('.main_container_view').scrollTop(0);
			//$('.container_view_more').hide();
		}  
		else{
			$('.main_container_view').removeClass('fixed').width('').css('right', '0'); 
			if ($('#sCode').val() != 'L000') {
				//$('.container_view_more').show();
				setHeight_under();
			}
		}
		
	}
});
$(document).ready(function () {

    // 법령 부칙 레이어에서 상위html이벤트 때문에 하위 html 클릭이 안되는 문제 해결
    $(document).on("click",".miju_num", function () {

        var i = $(".miju_num").index($(this));
        $(".miju_num").eq(i).removeAttr("onclick");
        _tempIndex = i;
        //var _tempID = $(".miju_num>div").eq(i).attr("id");
        //alert(i + "____" + _tempID);
        //$(".miju_num").eq(i).attr("onclick", "open_miju('" + _tempID + "');");
    });

    //if (document.body.clientWidth > 480) {// 미리보기 더보기 
    //   // $('#co_mainContainer .main_container_view').append("<div class='container_view_more'><div class='btn'>펼쳐보기</div><em class='text_ex fnob'><i class='icon-16 va' data-icon='&#xe90d;'></i>미리보기 화면에서는 관련 자료 등의 정보 제공에 제한이 있을 수 있습니다.</em> </div>");
    //}
    $(".main_container_view_inner h3 .btn_close").empty();
    //$('.container_view_more .btn').click(function () {
    //    var position = $(".container_view_more").position();
    //    if (position.top > $('.main_container_inner').outerHeight()) { var more_num = 0; }
    //    else { var more_num = 1; }
    //    setHeight_under(more_num);
    //});

    //FONT SIZE
    $('.function_area').on('click', '.font-p', function () {
        if (f_setting < 0) {
            $('#view_content').css('font-size', '');
            $('.table_index').css('font-size', '');
            $('.title_area').css('font-size', ''); //add title size. Jaemin 2021.06
            $('.font-p').removeClass('font_size_fin'); //add title size. Jaemin 2021.06
            $('.font-m').removeClass('font_size_fin');
            if ($('.print_mode').length > 0) { //add print mode .Jenna 2020.06
                $('.memo_outbox').css('font-size', '');
                $('.lawyer_info').css('font-size', '');
                $('.submain_group h3').css('font-size', '');
                $('.title_area').css('font-size', '');
                $('.title_area h2').css('font-size', '18px');
                if ($('.print_first_page').length > 0) {
                    $('.print_first_page').css('font-size', '');
                }
            }
            f_setting = 0;
        } else {
            $('#view_content').css('font-size', 'larger');
            $('.table_index').css('font-size', 'larger');
            $('.title_area').css('font-size', 'larger'); //add title size. Jaemin 2021.06
            $('.font-p').addClass('font_size_fin');
            if ($('.print_mode').length > 0) {  //add print mode .Jenna 2020.06
                $('.memo_outbox').css('font-size', 'larger');
                $('.lawyer_info').css('font-size', 'larger');
                $('.submain_group h3').css('font-size', 'larger');
                $('.title_area').css('font-size', 'larger');
                $('.title_area h2').css('font-size', '24px');
                if ($('#p_workType_C').length > 0) {
                    $('#p_workType_C + ul li:nth-of-type(3)').height('auto');
                    $('#p_workType_C + ul li:nth-of-type(4)').height('auto');
                }
                if ($('.print_first_page').length > 0) {
                    $('.print_first_page').css('font-size', 'larger');
                }
            }
            f_setting = 1;
        }
    });

    $('.function_area').on('click', '.font-m', function () {
        if (f_setting < 1) {
            $('#view_content').css('font-size', 'smaller');
            $('.table_index').css('font-size', 'smaller');
            $('.title_area').css('font-size', 'smaller'); //add title size. Jaemin 2021.06
            $('.font-m').addClass('font_size_fin');
            if ($('.print_mode').length > 0) { //add print mode .Jenna 2020.06
                $('.memo_outbox').css('font-size', 'smaller');
                $('.lawyer_info').css('font-size', 'smaller');
                $('.submain_group h3').css('font-size', 'smaller');
                $('.title_area').css('font-size', 'smaller');
                $('.title_area h2').css('font-size', '16px');
                if ($('#p_workType_C').length > 0) {
                    $('#p_workType_C + ul li:nth-of-type(3)').height('auto');
                    $('#p_workType_C + ul li:nth-of-type(4)').height('auto');
                }
                if ($('.print_first_page').length > 0) {
                    $('.print_first_page').css('font-size', 'smaller');
                }
            }
            f_setting = -1;
        } else {
            $('#view_content').css('font-size', '');
            $('.table_index').css('font-size', '');
            $('.title_area').css('font-size', ''); //add title size. Jaemin 2021.06
            $('.font-p').removeClass('font_size_fin');
            $('.font-m').removeClass('font_size_fin');
            if ($('.print_mode').length > 0) { //add print mode .Jenna 2020.06
                $('.memo_outbox').css('font-size', '');
                $('.lawyer_info').css('font-size', '');
                $('.submain_group h3').css('font-size', '');
                $('.title_area').css('font-size', '');
                $('.title_area h2').css('font-size', '18px');
                if ($('.print_first_page').length > 0) {
                    $('.print_first_page').css('font-size', '');
                }
            }
            f_setting = 0;
        }
    });
    //삼단구조
    $('.function_area').on('click', '.popup_using_three', function () {
        $("#bg_screen").show();
        $("body").css("overflow", "hidden");
        $("#popup_useing_three").show();
    });

    $('#popup_useing_three').on('click', '.btn_close_pop', function () {
        $("#bg_screen").hide();
        $("body").css("overflow", "auto");
        $("#popup_useing_three").hide();
        $("#individual_area").hide();
    });

    //소송
    $('.function_area').on('click', '.popup_using_sosong', function () {
        $("#bg_screen").show();
        $("body").css("overflow", "hidden");
        $("#popup_useing_sosong").show();
    });
    $('#popup_useing_sosong').on('click', '.btn_close_pop', function () {
        $("#bg_screen").hide();
        $("body").css("overflow", "auto");
        $("#popup_useing_sosong").hide();
        $("#individual_area").hide();
    });


    //통검
    $("#searchButton").click(function () {
        getTotalClickSearch();
    });

    //통검결과
    $(".btn_search_result").click(function () {
        setMapCount();
        $('#search_map').addClass('slide_mov');
    });

    $("#search_map .btn_close_pop").click(function () {
        $('#search_map').removeClass('slide_mov');
    });
    //end

    $('.case_comment_in ').on('click', 'p', function () { //히스토리 참조판례 정렬
        $('.show_ccomment').hide();
        $(this).next('.show_ccomment').show();
        setHeight_history();
    });

    $('#case_comment_info').on('click', '.btn_close_pop', function () { //천자평석 popup 닫기
        $('#case_comment_info').hide();
        $('#bg_screen').hide();
    });

    $('.calc_info').on('click', '.btn_more', function () { //검색연산자 안내 
        $('.calc_info div').toggle();  
        $('.btn_more i').toggleClass('icon_close'); //클릭시 아이콘 변경임 삭제하면 안됨
        setHeight_under();
    });

    $('#co_mainContainer.nomobile #container').append("<div class='btn_top_box'><div class='btn_top'>Top</div></div>");

    $("#sCat1").change(function () {
        if ($(this).val() == "440539") {
            $(".sCat_txt").text('질의기관');
        } else {
            $(".sCat_txt").text('구분');
        }

    });

    $('#individual_area').on('click', '.btn_close_pop', function () { //개인화popup 닫기
        
        // 나의검색 선택없이 닫을 시
        if ($("#popup_mysearch").css("display") == "block") {
            var mySearchContList = localStorage.getItem("mySearchContentList");
            if (mySearchContList == "" || mySearchContList == null)
            {
                chgMySearchOnOff("N");
                localStorage.setItem("mySearchOnOff", "N");
                var dataParams = { "onOff": "N" };
                sendNonBlockingAjaxRequest("/MyDesk/GetMySearchInfo", dataParams, function (result) {
                    if (result != null) {
                        $('#individual_area').hide();
                        $('.base_popup').hide();
                        $("#bg_screen").hide();
                        if ($('.mobile').length > 0) {
                            $("html").css("overflow", "auto");
                        }
                    }
                });
            }
            else
            {
                $('#individual_area').hide();
                $('.base_popup').hide();
                $("#bg_screen").hide();
                if ($('.mobile').length > 0) {
                    $("html").css("overflow", "auto");
                }
            }
        }
        else {
            $('#individual_area').hide();
            $('.base_popup').hide();
            $("#bg_screen").hide();
            if ($('.mobile').length > 0) {
                $("html").css("overflow", "auto");
            }    
        }
    });

    $(".btns_top .icon-16").click(function () {
        $('body,html').animate({ "scrollTop": "0" }, 300);
        return false;
    });

    $(".btn_top").click(function () {
        $('body,html').animate({ "scrollTop": "0" }, 300);
        return false;
    });

    /* 
    $("nav dd").click(function () {
        $(".submenu_group").toggleClass('slide_mov');
    });

    $(".submenu_group dl").hover(function () {
        var idx = $(this).index();
        $("nav dd").eq(idx).addClass('_this');
    }, function () {
        $("nav dd").removeClass('_this');
    });

    $(".submenu_group").mouseleave(function () {
        $(".submenu_group").removeClass('slide_mov');
    });
    */
    $(document).on('click', '.icon_listnview', function () {
        if ($(".navigation_p").length > 0) {
            $("#container").addClass('list-view ');
            $(".main_container_view").addClass('slide_mov');
            $(".right_container").addClass('slide_mov_right');
            $("#right_control").css('display', 'block');
            $("#search_results").css('overflow-y', 'auto').height($(".main_container_inner").height());
            setHeight_navi();
        }
        else {
            $(".main_container_view").addClass('slide_mov');
            $("#container").addClass('list-view ');
            $(".main_container ol").removeClass('btn_exist');
            $("#option_a").attr('class', 'option_a_on');
            $("#option_b").attr('class', 'option_b');
            $(".list").addClass('type-a');
            $(".history_open").hide();
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

    $(document).on('click', '#right_control', function () {   //오른쪽 영역 레이어로 올려서 움직이기
        if ($(".add_border").length > 0) {
            $(".right_container").removeClass('add_border');
            $(".right_container").addClass('slide_mov_right');
            $(".right_container").removeClass('slide_mov');
            $(this).removeClass('_up');
        }
        else {
            $(".right_container").addClass('slide_mov');
            $(".right_container").addClass('add_border');
            $(this).addClass('_up');
            $(".right_container").removeClass('slide_mov_right');
        }
        if ($('#co_mainContainer').length > 0) {
            setHeight_under();
        } else {
            setHeight();
        }
    });

    $(document).on('click', '.main_container_view_inner .btn_close', function () {
        if ($("#lbDid").length > 0) {
            hidePrintLayer("close");
        }        

        if ($(".navigation_p").length > 0) {
            $(".main_container_view").removeClass('slide_mov');
            $("#container").removeClass('list-view');
            $(".right_container").removeClass('slide_mov_right').removeClass('add_border');
            $('#search_results').css('overflow', 'hidden')
            if (document.body.clientWidth > 1270) {
                $("#right_control").css('display', 'none');
            }
            setHeight_navi();
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
            if (document.body.clientWidth > 1270) {
                if(  $('#container').hasClass('wide_left') ){ 
					$("#right_control").show();
					$(".right_container").addClass('slide_mov_right');
				}
                else{ $("#right_control").hide();}
            }
            if ($('#co_mainContainer').length > 0) {//바닥페이지 
                setHeight_under();
            } else { //popup 페이지 
                setHeight();
            }

            if (typeof (view) != 'undefined') view.moveToByView();
        }
    });

    $(document).on('click', '#title_result_tab .btn_close', function () {
        $("#result_area").removeClass('slide_mov_bottom');
        setTimeout(function () {
            $("#result_area").hide();
            if ($("#pdf_view_etc").length > 0) {
                $("#pdf_view_etc").hide().removeClass('slide_mov_bottom');
            }
        }, 200);
        if ($('#lbCode').length > 0)
        {           
            if ($('#lbCode').val() == "J001" || $('#lbCode').val() == "D022" || $('#lbCode').val() == "D021" || $('#lbCode').val() == "F001")
            {
                /*
                if ($('#lbCode').val() == "J001") {
                    $('.onju_preview_law').show();
                    $('.onju_preview_onju').show();
                    $('.onju_index_popup').hide();
                }
                */
                // 도서내 검색 단어 변경 추가
                // 도서내 검색 시 기존검색한 검색어로 변경하도록 로직 추가
                if ($('#lbCode').val() == "J001")
                {                    
                    if (typeof eKey !== 'undefined')
                    {
                        if (eKey == 'BookSearchWord')
                        {
                            var hdnSid = $("#hdnSid").val();
                            eKey = "StargetWord";
                            getContentSubView("/SubInfo/ContentSubView", hdnSid);
                        }
                    }                    
                }

                if ($('#result_area>div.list').length > 0)
                {
                    if ($('#result_area>div.list').html() == '')
                    {
                        if ($('.onju_preview_law').length > 0 || $('.onju_preview_onju').length > 0 || $('.onju_front_page').length > 0) {
                            $("#title_result_tab").hide();
                            //$('.onju_preview_law').show();
                            //$('.onju_preview_onju').show();
                            $('.onju_index_popup').hide();
                            $("#view_content").show(); 
                        }
                        else {
                            $("#title_result_tab").hide();
                            $("#pdf_view").show();
                            $("#view_content").show(); 
                        }                        
                    }
                    else
                    {
                        if ($("#pdf_view").length > 0 && !$('#co_popupContainer').hasClass('mobile')) {
                            if ($(".btn_reapprea").is(':visible')) {
                                $("#title_result_tab").hide();
                                $("#pdf_view").show();
                                $("#view_content").show();
                            }
                            else {
                                $("#pdf_view").height($('.main_container').height() - 37);
                                $(".btn_reapprea").show();
                                $("#pdf_view").show();
                                $("#view_content").show();
                            }
                        }
                        else if (($('.onju_preview_law').length > 0 || $('.onju_preview_onju').length > 0) || $('.onju_front_page').length > 0
                                && !$('#co_popupContainer').hasClass('mobile') )
                        {
                            if ($(".btn_reapprea").is(':visible')) {
                                $("#title_result_tab").hide();                                
                                $("#view_content").show();
                                //$(".onju_preview_law").show();
                                //$(".onju_preview_onju").show();
                                $('.onju_index_popup').hide();
                            }
                            else {        
                                $(".btn_reapprea").show();
                                $("#view_content").show();
                                //$(".onju_preview_law").show();
                                //$(".onju_preview_onju").show();
                                $('.onju_index_popup').hide();
                            }
                        }
                    }
                }
                else { 
                    $("#title_result_tab").hide();
                    $("#pdf_view").show();
                    $("#view_content").show();
                }
            } else { 
                $("#title_result_tab").hide();
                $("#pdf_view").show();
                $("#view_content").show();
                if ($('#lbCode').val() == "I001" || $('#lbCode').val() == "I002" || $('#lbCode').val() == "I003") {//심판·결정·해석의 pdf때문에 조건걸음
                    if ($('#result_tab li:first-child').hasClass('this-page')) {
                        $(".main_container").css('overflow', 'hidden');
                    } else { $(".main_container").css('overflow', 'auto'); }
                }
                else {
                    if ($("#pdf_view").length > 0) {
                        $(".main_container").css('overflow', 'hidden'); //pdf의 이중 스크롤 없애기
                    } else { $(".main_container").css('overflow', 'auto'); }
                }
            }
        } else { 
            $("#title_result_tab").hide();
            $("#pdf_view").show();
            $("#view_content").show();
        }


        if (checkMobile()) {
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
    });

    $(document).on('click', '#title_result_tab .btn_reapprea', function () {
        
        if ($('.onju_preview_law').length > 0 || $('.onju_preview_onju').length > 0) {
            $("#view_content").hide();
            //$(".onju_preview_law").hide();
            //$(".onju_preview_onju").hide();
            //$('.onju_index_popup').hide();
        }
        else {
            setTimeout(function () {
                $("#result_area").addClass('slide_mov_bottom');
                $("#pdf_view").css('padding-top', '37px');
            }, 200);            
            $("#pdf_view").hide();            
        }
        $("#result_area").show();
        $(this).hide();
        $("#title_result_tab .btn_close").show();
        $("#result_area").css('z-index', '1');
        $("#title_result_tab").css('z-index', '1');        
    });

    $(document).on('click', '#related_comment_tab .btn_close', function () {
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

    $(document).on('click', '#option_a', function () {
        $("#option_a").attr('class', 'option_a_on');
        $("#option_b").attr('class', 'option_b');
        if ($('.t_search').length > 0) {
            $(this).parent().parent().parent().parent().find('+ ol.list').addClass('type-a');
        } else {
            $(".list").addClass('type-a');
            $(".history_open").hide();
        }
        storage.setStatusType(0);
        reSettingHeight();
    });

    $(document).on('click', '#option_b', function () {
        $("#option_a").attr('class', 'option_a');
        $("#option_b").attr('class', 'option_b_on');
        if ($('.t_search').length > 0) {
            $(this).parent().parent().parent().parent().find('+ ol.list').removeClass('type-a');
        } else {
            $(".list").removeClass('type-a');
            $(".history_open").show();
        }
        storage.setStatusType(1);
        reSettingHeight();
    });

    $('.container_hide').on('click', '#left_hide', function () {

        if ($("#container.two-con").length > 0) {
            $("#container").removeClass('two-con');
            sessionStorage.setItem("leftWide", "Y");
        } else {
            if ($("#container.wide_left").length > 0) {
                $("#container").removeClass('wide_left');
                $(".right_container").removeClass('slide_mov_right');
                $(".main_container").removeClass('moveright');
                $('#right_control').addClass('_up');
                sessionStorage.setItem("leftWide", "Y");
            } else {
                $("#container").addClass('two-con');
                sessionStorage.setItem("leftWide", "");
            }
            //            if ($(document).width() > 1250) {
            //                $("#right_control").hide();
            //            } else { $("#right_control").show(); }
        }
                setHeight();

        if ($("#lbPositionLawJo").length > 0) {
            document.getElementById($("#lbPositionLawJo").val()).scrollIntoView();
        }                
    });

    $('.container_hide').on('click', '#left_wide', function () {
        if ($("#container.two-con").length > 0) {
            $("#container").removeClass('two-con');
            sessionStorage.setItem("leftWide", "Y");
        } else {
            $("#container").addClass('wide_left');
            $('#right_control').removeClass('_up');
            if ($('#view_content').length > 0) {
                $('#right_control').show();
            }
            $(".right_container").addClass('slide_mov_right');
            $(".main_container").addClass('moveright');
            sessionStorage.setItem("leftWide", "YY");
        }
        setHeight();
        if ($("#lbPositionLawJo").length > 0) {
            document.getElementById($("#lbPositionLawJo").val()).scrollIntoView();
        }
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

    $(document).on('click', '.add_option span.btn', function () {
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
            $("#dDate1").val("");
            $("#dDate2").val("");
        } else {
            $(".detail_date").hide();
        }
    });

    $('.law .submain_group.title').on('click', '.btn_more', function () { //나의법규집안내
        $("#lawbook_info_popup").show();
        $(".base_popup2").show();
    });
    $('.law .submain_group.title').on('click', '.btn_close_pop', function () {
        $("#lawbook_info_popup").hide();
        $(".base_popup2").hide();
    });


    setTreeBinding();

    $(document).on('click', '.tree .tNavToggle', function () {
        t = $(this);

        //t.parent('li').toggleClass('open');

        if (t.parent('li').hasClass('open') || t.parent('li').hasClass('close')) {
            t.text('-').removeClass('plus').addClass('minus');
            t.parent('li').removeClass('open').removeClass('close');
            t.parent('li').find('>ol').slideDown(100);
            t.parent('li').find('>ul').slideDown(100);
        }  else {
            t.text('+').removeClass('minus').addClass('plus');
            t.parent('li').addClass('close');
            t.parent('li').find('>ol').slideUp(100);
            t.parent('li').find('>ul').slideUp(100);
        }
        reSettingHeight();
        return false;
    });


    $(document).on('click', '.popup_view', function (event) {
        if ($("#sMatchWord").length > 0) {
            if ($("#sMatchWord").val() != "") { storage.setSearchWord($("#sMatchWord").val()); }
        }
        event.preventDefault();
        var href = $(this).attr('href');
        href = href.replace(/<(\/marks|marks)([^>]*)>/gi, "");
        if ($(location).attr('href').indexOf("/Info/ContentView") > 0) {
            if (typeof (previewYn) == 'undefined') {
                moveContentView(href);
            }
            else {
                var did = href.split('=')[1];
                if ($(this).parents("div.co_searchContent").length > 0) {
                    if (typeof (previewYn) == 'undefined') {
                        moveContentView(href);
                    } else {
                        if (previewYn == "Y") {
                            page.showPreview(did);
                        } else {
                            moveContentView(href);
                        }
                    }

                } else {
                    moveContentView(href);
                }
            }

        } else {
            if (typeof (previewYn) == 'undefined') {
                moveContentView(href);
            } else {
                if (previewYn == "Y" && href != null) {
                    if (niceYn == "Y") {
                        var didParams = href.split('=')[1];
                        var did = didParams.split('^')[0] + '^' + didParams.split('^')[2];
                        page.niceShowPreview(did);
                    }
                    else {
                        var did = href.split('=')[1];
                        if ($(this).parents("div.co_searchContent").length > 0) {
                            if ($('#sPreViewId').length > 0) {
                                if (did.indexOf('|') < 0 && did.indexOf('_') < 0) {
                                    did = did + $('#sPreViewId').val();
                                }
                                if (did.substring(0, 4) == 'L000' ||
                                    did.substring(0, 4) == 'L006') {
                                    if (did.substring(0, 4) == 'L006') {
                                        if ($('#sPreViewId').val().split('|')[2] == '4') {
                                            searchTarget = (did.indexOf('Y') > 0) ? (did.indexOf('_') > 0) ? did.split("_")[1] : did.split("|")[1] : '';
                                            var l_id = (did.indexOf('_') > 0) ? did.split("_")[0] : did.split("|")[0];
                                            did = l_id.split("_")[0] + $('#sPreViewId').val();
                                        } else {
                                            var l_id = (did.indexOf('_') > 0) ? did.split("_")[0] : did.split("|")[0];
                                            searchTarget = (l_id.indexOf('#') > 0) ? l_id.split('#')[1] : '';
                                            did = l_id.split('#')[0] + $('#sPreViewId').val();
                                        }
                                    } else {
                                        if ($('#sPreViewId').val().split('|').length == 4) {
                                            if ($('#sPreViewId').val().split('|')[2] == '3' || $('#sPreViewId').val().split('|')[2] == '4') {
                                                var l_id = (did.indexOf('_') > 0) ? did.split("_")[0] : did.split("|")[0];
                                                if ($('#sPreViewId').val().split('|')[2] == '3') {
                                                    searchTarget = (did.indexOf('#') > 0) ? did.split('#')[1] : '';
                                                } else if ($('#sPreViewId').val().split('|')[2] == '4') {
                                                    searchTarget = (did.indexOf('Y') > 0) ? (did.indexOf('_') > 0) ? did.split("_")[1] : did.split("|")[1] : '';
                                                }
                                                did = l_id + $('#sPreViewId').val();
                                            }
                                        }
                                    }
                                }
                            }
                            if (did.substring(0, 4) == 'D021') { did = did + "_R4"; }
                            page.showPreview(did);
                        } else {
                            moveContentView(href);
                        }
                    }
                }
                else {
                    moveContentView(href);
                }
            }
        }
    });
});

function MoveMembers(action) {
    var f = document.createElement("form");
    f.setAttribute("method", "get");
    f.setAttribute("target", "member_regist");
    f.setAttribute("action", "https://member.lawnb.com/" + action);
    document.body.appendChild(f);
    f.submit();
    document.body.removeChild(f);
}

// 원문보기 팝업
this.showContentPopView = function (href) {
    var maxThisX = screen.width * 0.85;
    var maxThisY = screen.height * 0.85;
    window.open(href, "", "width=" + maxThisX + ",height=" + maxThisY + ",scrollbars=no,toolbar=no, resizable=yes, menubar=no, left=70, top=15");
    event.preventDefault();
};

this.showContentView = function (href) {
    location.href = href;
};

this.reSettingHeight = function () {
    if ($(location).attr('href').indexOf("/Info/ContentView") > 0) {
        if ($(location).attr('search').indexOf("P000") > 0 && ($(location).attr('search').indexOf("_R6") > 0 || $(location).attr('search').indexOf("|R6") > 0)) {
            setHeight_navi();
        } else if ($(location).attr('search').indexOf("L000") > 0 && ($(location).attr('search').indexOf("_U") > 0 || $(location).attr('search').indexOf("|U") > 0)) {
            setHeight_newold();  
        } else if ($(location).attr('search').indexOf("L000") > 0 && ($(location).attr('search').indexOf("_L") > 0 || $(location).attr('search').indexOf("|L") > 0)) {
            setHeight_samdan(1);
        } else if ($(location).attr('search').indexOf("P001") > 0) {
            setHeight_under();
        } else {
            setHeight();
        }
    }
    else {
        setHeight_under();
    }
}

///////////////////////////////My Info///////////////////////////////
function MyInfo() {
    sendNonBlockingAjaxJsonRequest("/Member/GetMyInfo/", "", MyInfoAjaxReturn);
}

function MyInfoAjaxReturn(result) {
    $('.base_popup').hide();
    if (result == "-1") {
        //alert("로그인후 이용해주세요");
        $("#individual_area").show();
        $("#popup_login_ask").show(); 
        return;
    } else if (result == "-2") {
        //alert("개인화 로그인후 이용해주세요");
        $("#individual_area").show();
        $("#popup_login_ask").show(); 
        if($('.mobile').length > 0){
            $("#bg_screen").show();
        }
        return;
    }
    var data = result[0];
    if (data["ResultCode"] == "0") {
        var EmailContents = "";
        EmailContents += "이메일 : " + data["UserEmail"];
        EmailContents += "<br> 메일링 서비스 <a href=\"#\" onclick=\"javascript:MoveMembers(''); return false;\">관리</a> "; 
        $("#my_info_email_mailing_layer").html(EmailContents);
        $("#my_info_mailing_title_layer").show();

        if (data["Mobile_RegDate"] != "") {
            var MobileContents = "";
            MobileContents += "- " + data["Mobile_Name"] + " (" + data["Mobile_RegDate"] + ")";
            MobileContents += "<a href=\"#\" onclick=\"javascript:SetMobileDel('" + data["Mobile_Seq"] + "'); return false;\">삭제</a> ";
            MobileContents += "<i class=\"icon-info\" data-icon=\"\" onmouseout=\"close_miju('Miju3')\" onmouseover=\"open_miju('Miju3')\">";
            MobileContents += "<span class=\"blind\">안내</span>";
            MobileContents += "<div id=\"Miju3\" class=\"miju_box\"><div class=\"miju_box_line\">- 모바일 기기 등록정보를 삭제하면 해당 기기에서는 LAWnB Plus APP을 바로 사용할 수 없습니다. <br><br>- 삭제한 기기를 다시 사용하려면 LAWnB Plus APP 로그인 페이지 내에 \r\n\“기기등록 초기화\” 버튼으로 초기화 후에 다시 로그인하여 주십시오.</div></div>";
            MobileContents += "</i>";
            $("#my_info_mobile_layer").html(MobileContents);
            $("#my_info_mobile_layer").show();
            $("#my_info_mobile_title_layer").show();
        }

        if (data["MbrLevel"] == "A") {
            var CorpContents = "";
            CorpContents += "서브 아이디 (유료 " + data["ChargedSubIDCnt"] + "개 / 무료 " + data["FreeSubIDCnt"] + "개) ";
            CorpContents += "<a href=\"#\" onclick=\"javascript:MoveMembers('');return false;\">관리</a> ";
            $("#my_info_corp_layer").html(CorpContents);
            $("#my_info_corp_layer").show();
            $("#my_info_corp_title_layer").show();
        } else if (data["MbrLevel"] == "S") {
            $("#my_info_sub_layer").show();
            $("#my_info_corp_title_layer").html("법인(관리자) 정보");
            $("#my_info_corp_title_layer").show();
        }

        if (data["People_Xml"] == null) {
            $("#my_info_login_layer").show();
        } else {
            $("#my_info_my_lawyer_layer").show();
            var my_lawyer_layer = "";
            my_lawyer_layer += "<p>나의 법조인 명록</p>";

            var photo = "";
            if (data["LawyerPhoto"] != "") {
                photo = "<img src=\"\\lbimg\\peopdata\\" + data["LawyerPhoto"] + "\" alt=\"사진\">";
            }
            var basicinfo = "";
            basicinfo = "<a href=\"/Info/ContentView?sid=" + data["Did"] + "\" class=\"popup_view\">" + data["LawyerName"] + " ";
            if (data["LawyerNameChn"] != "") {
                basicinfo += data["LawyerNameChn"] + " ";
            }
            basicinfo += "</a>";

            if (data["LawyerBirth"] != "" || data["LawyerGender"] != "" || data["ExamName"] != "") {
                basicinfo += "<span>";
                if (data["LawyerBirth"] != "") {
                    basicinfo += data["LawyerBirth"] + " / ";
                }
                if (data["LawyerGender"] != "") {
                    basicinfo += data["LawyerGender"] + " / ";
                }
                if (data["ExamName"] != "") {
                    basicinfo += "(" + data["ExamName"];
                    if (data["ExamNum"] != "") {
                        basicinfo += " " + data["ExamNum"] + "회";
                    }
                    basicinfo += ")";
                }
                basicinfo += "</span>";
            }

            if (data["JobName"] != "") {
                basicinfo += "<br><span>";
                basicinfo += "현직 : " + data["JobName"];
                if (data["WorkName"] != "") {
                    basicinfo += " / " + data["WorkName"];
                }
                basicinfo += " </span>";
            }

            var treated = "";
            if (data["Treated"] != "") {
                treated += "<span> 주요업무분야";
                treated += "<small><i class=\"icon-info\" data-icon=\"\" onmouseout=\"close_miju('Miju2')\" onmouseover=\"open_miju('Miju2')\"><span class=\"blind\">안내</span><div id=\"Miju2\" class=\"miju_box\"><div class=\"miju_box_line\">변호사님이 주로 취급하는 업무로 선택한 분야입니다.</div></div></i></small>";
                treated += " : " + data["Treated"] + "</span>";
            }

            var LastUpdateDate = "";
            if (data["LastUpdateDate"] != "") {
                LastUpdateDate += "[최근 업데이트 일자 : " + data["LastUpdateDate"] + "]";
                //LastUpdateDate += "<a href=\"#\" onclick=\"javascript:LawyerModify('" + data["Did"] + "'); return false;\">수정요청하기</a>";
            }
            
            if (photo != "") {
                my_lawyer_layer += "<div class=\"img\">" + photo + "</div>";
            }
            my_lawyer_layer += "<div class=\"basic_info\">" + basicinfo + "</div>";
            if (treated != "") {
                my_lawyer_layer += "<div class=\"lawyer_info\">" + treated + "</div>";
            }
            if (LastUpdateDate != "") {
                my_lawyer_layer += "<div class=\"ar text_ex\">" + LastUpdateDate + "</div>";
            }
            $("#my_info_my_lawyer_layer").html(my_lawyer_layer);

        }

        $("#individual_area").show();
        $("#popup_myinfo").show(); 

        
    }
}

function SetMobileDel(Mobile_Seq) {
    if (!confirm("모바일 기기 등록 정보를 삭제하시겠습니까? \r\n삭제를 원하시면 아래의 확인 버튼을 클릭해주세요.")) {
        return;
    }
    var params = { "MobileSeq" : Mobile_Seq }
    sendNonBlockingAjaxJsonRequest("/Member/SetMobileAuthDelete/", params, MobileDeleteAjaxReturn);
}

function MobileDeleteAjaxReturn(result){
    //if (result[0]["ResultCode"] == "0") {
        alert("삭제되었습니다.");
    
        MyInfo();
    //}
}

goToCollection = function (s) {
    // alert('1');
    if (s.indexOf('_') > 0) { storage.setDelTotalContentForm(); }
    if (storage.getTotalContentForm() == null) {
       
        // alert('2');
        var sc = (s.indexOf('_') > 0 ? s.split('_')[0] : s);
        //alert($('#tc_' + sc).text() + "u");
        if ($('#tc_' + sc).text().trim() == '(0)' && s.indexOf('_') < 0) {}
        else{
            if ($('#sTotalSearch').length > 0) {
                //  alert('3');
                $('#sList').val('20');
                $('#sCode').val(sc);
                if (sc == "L005" || sc == "N000" || sc == "N001") {
                    $('#sViewPage').val('2');
                } else {
                    $('#sViewPage').val('0');
                    if (sc == 'B002') {
                        $('#sType1').val('11');
                    } else if (sc == 'F002') {
                        $('#sType1').val('0000');
                    }
                }
                $('#sType').val('0');
                if ($('#sType5').length > 0) { $('#sType5').val(''); }
                storage.setTotalContentForm($('#searchForm').serializeObject());
                $('#searchForm').submit();
            }
        }
    } else {
        //alert($('#tc_' + s).text());
        if ($('#tc_' + s).text().trim() != '(0)') {
            //   alert('5');
            var iArr = storage.getTotalContentForm();
            iArr['sCode'] = s;
            if (s == "L005" || s == "N000" || s == "N001") {
                iArr['sViewPage'] = '2';
            } else {
                iArr['sViewPage'] = '0';
            }
            iArr['sType'] = '0';

            var frm = document.createElement("FORM");
            $(document.body).append(frm);
            frm.method = "POST";
            frm.action = "/Info/ContentList";
            frm.enctype = "application/x-www-form-urlencoded";
            var hidden = document.createElement("input");
            hidden.setAttribute("type", "hidden");
            hidden.setAttribute("name", "sWord");
            hidden.setAttribute("value", iArr['sWord']);
            frm.appendChild(hidden);
            hidden = document.createElement("input");
            hidden.setAttribute("type", "hidden");
            hidden.setAttribute("name", "sCode");
            hidden.setAttribute("value", iArr['sCode']);
            frm.appendChild(hidden);
            hidden = document.createElement("input");
            hidden.setAttribute("type", "hidden");
            hidden.setAttribute("name", "sType");
            hidden.setAttribute("value", iArr['sType']);
            frm.appendChild(hidden);
            if (iArr['sCode'] == 'B002' || iArr['sCode'] == 'F002') {
                hidden = document.createElement("input");
                hidden.setAttribute("type", "hidden");
                hidden.setAttribute("name", "sType1");
                hidden.setAttribute("value", "11");
                frm.appendChild(hidden);
            }
            hidden = document.createElement("input");
            hidden.setAttribute("type", "hidden");
            hidden.setAttribute("name", "sViewPage");
            hidden.setAttribute("value", iArr['sViewPage']);
            frm.appendChild(hidden);
            hidden = document.createElement("input");
            hidden.setAttribute("type", "hidden");
            hidden.setAttribute("name", "sSubType");
            hidden.setAttribute("value", iArr['sSubType']);
            frm.appendChild(hidden);
            document.body.appendChild(frm);
            storage.setSearchWord(iArr['sWord'].replace(/ /g, ':'));
            frm.submit();
            document.body.removeChild(frm);
        }
    }
};


setMapCount = function () {
    var lArr = [];
    lArr = storage.getTotalCnt();
    var mySearchOnOff = localStorage.getItem("mySearchOnOff") == null ? "" : localStorage.getItem("mySearchOnOff");
    var mySearchContentList = localStorage.getItem("mySearchContentList") == null ? "" : localStorage.getItem("mySearchContentList");

    if (mySearchOnOff == "Y") {
        $("#divMySearchGuide").show();
        if (lArr != null) {
            $(".td_totalcnt").addClass("nouse");
            for (var i = 0; i < lArr.length; i++) {

                if ($('#tc_' + lArr[i].did).length > 0 && mySearchContentList.indexOf(lArr[i].did) > -1) {
                    $('#tc_' + lArr[i].did).html('(' + lArr[i].cnt + ')');
                    $('#tc_' + lArr[i].did).parent("td").removeClass("nouse");
                }                
            }
        }
    }
    else {
        if (lArr != null) {
            for (var i = 0; i < lArr.length; i++) {

                if ($('#tc_' + lArr[i].did).length > 0) {
                    $('#tc_' + lArr[i].did).html('(' + lArr[i].cnt + ')');
                }
            }
        }
        $("#divMySearchGuide").hide();
    }
    
    if (storage.getTotalContentForm() != null) {
        var wArr = storage.getTotalContentForm();
        $("#search_map>div.map_inner>div.txt_info").html("<strong>“" + wArr["sWord"] + "”</strong>에 대한 각 메뉴별 검색결과로 이동합니다. ");
    } else {
        if ($('#sTotalSearch').length == 0) {
            $("#search_map>div.map_inner>div.txt_info").html("통합검색시, 각 메뉴별 검색결과를 보여줍니다.");
        }
    }
};

jQuery.fn.serializeObject = function () {
    var obj = null;
    try {
        if (this[0].tagName && this[0].tagName.toUpperCase() == "FORM") {
            var arr = this.serializeArray();
            if (arr) {
                obj = {};
                jQuery.each(arr, function () {
                    obj[this.name] = this.value;
                });
            } 
        }
    } catch (e) {
        alert(e.message);
    } finally {
    }

    return obj;
};

function SetHeight_LawnbEditor() {
    var leftheight = $(".left_container").height();
    var mainheigth = $(".main_container_inner").height();
    var rightheigth = $(".right_container").height();

    if($(".mobile").length <= 0){
        if (leftheight > mainheigth) {
            if (leftheight > rightheigth) {
                $(".main_container").height(leftheight);
            } else {
                $(".main_container").height(rightheigth);
            }
        } else {
            if (rightheigth > mainheigth) {
                $(".main_container").height(rightheigth);
            } else {
                $(".main_container").height(mainheigth);
            }
        }
    }
    else{
        if (leftheight > mainheigth) {
            $(".main_container").height(leftheight);
        } else {$(".main_container").height(mainheigth); }
    }
}

//Common Post Form Call
function POSTFORMCall(url, obj) {
    var f = document.createElement("form");
    f.setAttribute("method", "post");
    f.setAttribute("action", url);
    var params;
    for (var i = 0; i < obj.length; i++) {
        params = document.createElement("input");
        params.setAttribute("type", "hidden");
        params.setAttribute("name", obj[i].name);
        params.setAttribute("value", obj[i].value);
        f.appendChild(params);
        params = null;
    }
    document.body.appendChild(f);
    f.submit();
    document.body.removeChild(f);
}

//Common Get PopupCall
function GetOnetoOnePopupCall(url, obj, width, height, scroll) {
    var time = Date.now();
    var gsWin = window.open("", "CommonPopup" + time, "width=" + width + ", height=" + height + ",toolbar=0,menubar=0,location=0,status=1,scrollbars=" + scroll + ",resizable=1,left=0,top=0");
    var f = document.createElement("form");
    f.setAttribute("method", "get");
    f.setAttribute("target", "CommonPopup" + time);
    f.setAttribute("action", url);
    var params;
    for (var i = 0; i < obj.length; i++) {
        params = document.createElement("input");
        params.setAttribute("type", "hidden");
        params.setAttribute("name", obj[i].name);
        params.setAttribute("value", obj[i].value);
        f.appendChild(params);
        params = null;
    }
    document.body.appendChild(f);
    f.submit();
    document.body.removeChild(f);
}

// 판결문 등재 신청 수정 2022.04
function OnetoOneContactUs(BBS) {
    if (BBS == "B04") {
        var maxThisX = screen.width * 0.85;
        var maxThisY = screen.height * 0.85;
        var obj = []
        GetOnetoOnePopupCall("/Lawyer/WinningCase/", obj, maxThisX, maxThisY, "0");
    } else {
        if ($('.mobile').length > 0) {
            alert("1:1 문의는 웹서비스에서만 이용가능합니다.");
        }else{
            var obj = [{ "name": "BBS", "value": BBS }, { "name": "BBSQuestion", "value": "" }, { "name": "QType", "value": "Question" }, { "name": "ParentsNo", "value": "0" }, { "name": "CaseInfo", "value": "" }]
            GetOnetoOnePopupCall("/Questions/OnetoOneContactUs/", obj, "915", "600", "1");
        }
    }
}

// BBSQuestion 추가
// 판결문 등재 신청 수정 2022.04
function OnetoOneContactUsOther(BBS, BBSQuestion) {
    if (BBS == "B04") {
        var maxThisX = screen.width * 0.85;
        var maxThisY = screen.height * 0.85;
        var obj = []
        GetOnetoOnePopupCall("/Lawyer/WinningCase/", obj, maxThisX, maxThisY, "0");
    } else {
        if ($('.mobile').length > 0) {
            alert("1:1 문의는 웹서비스에서만 이용가능합니다.");
        } else {
            var obj = [{ "name": "BBS", "value": BBS }, { "name": "BBSQuestion", "value": BBSQuestion }, { "name": "QType", "value": "Question" }, { "name": "ParentsNo", "value": "0" }, { "name": "CaseInfo", "value": "" }]
            GetOnetoOnePopupCall("/Questions/OnetoOneContactUs/", obj, "915", "600", "1");
        }
    }
}

// 판결문 등재 신청 추가 2022.04
function CaseRegistApply(caseInfo, dy)
{
    if ($('.mobile').length > 0)
    {
        var params = { "BBS": ("B02" + dy), "BBSQuestion": "", "QType": "Question", "ParentsNo": "0", "CaseInfo": caseInfo }
            sendNonBlockingAjaxRequest("/Questions/OnetoOneContactUsMobile/", params, function (result) {
                if (result != null) {
                    $('#divCaseRegistApplyHtml').empty();
                    $('#divCaseRegistApplyHtml').html(result);
                    $('#divCaseRegistApplyHtml').show();
                }
                else {
                    alert("데이터 연결에 실패했습니다. 잠시후 다시 시도해주세요.");
                }
            });       
    }
    else
    {
        var obj = [{ "name": "BBS", "value": ("B02" + dy) }, { "name": "BBSQuestion", "value": "" }, { "name": "QType", "value": "Question" }, { "name": "ParentsNo", "value": "0" }, { "name": "CaseInfo", "value": caseInfo }]
        GetOnetoOnePopupCall("/Questions/OnetoOneContactUs/", obj, "915", "600", "1");
    }
}


function Questions(BBS) {
    var obj = [{ "name": "BBS", "value": BBS } ]
    POSTFORMCall("/Questions/OnetoOneList/", obj);
}

// 팝업 열기
this.openPopup = function (popupUrl) {
    location.href = popupUrl;
};

this.hyperlink = function (n, c, m) {
    if (n == '9') {
        window.open(c, '_blank'); 
    } else {
        c = c.replace(/<(\/marks|marks)([^>]*)>/gi, "");
        m = m.replace(/<(\/marks|marks)([^>]*)>/gi, "");
        if (c.indexOf('C000') < 0) {
            var check = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
            if (!check.test(c.substring(0, 4))) {
                c = 'L000' + c;
                c = c.replace("L000L000", "L000");
            }

            if (n == '5') {
                c = '온주|' + c + '0';
                m = '0';
            }
        }
        var href = "ContentView?sid=" + c + "|" + m;
        moveContentView(href);
    }
};

this.moveContentView = function (h) {
    var check = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    var s = "";
    if (h.indexOf('=') > -1) { s = h.split('=')[1]; }
    if (check.test(s.substring(0, 2)) || s.replace("_", "|").split('|')[0].replace("L000", "").length == 32) {
        s = s.replace("_", "|");
        $.ajax({
            type: "GET", url: "../AjaxInfo/GetContentDid?sId=" + encodeURI(s), dataType: "text", success: function (data) {
                if (data.substr(0, 1) == "0") {
                    // 판결문 등재 신청 추가 2022.04
                    if (data.length > 1)
                    {
                        if (data.substr(1, 4) == "CASE") {
                            if (confirm("아직 로앤비에 등록되지 않은 콘텐츠입니다.\r\n등재 신청 하시겠습니까?")) {
                                CaseRegistApply(s,'');
                            }
                        }
                        else {
                            alert("아직 로앤비에 등록되지 않은 콘텐츠입니다.");
                        }
                    }
                    else {
                        alert("아직 로앤비에 등록되지 않은 콘텐츠입니다.");
                    }                    
                }
                else {
                    s = data;
                    showOriginalView(h.split('=')[0] + "=" + s);
                }
            }, error: function (e) { }
        });
    }
    else { showOriginalView(h); }
};

// 원문보기 팝업
this.showOriginalView = function (href) {
    if (checkMobile()) {
        href = href.indexOf("?") >= 0 ? href + "&popupYn=Y" : href + "?popupYn=Y";
        location.href = href;
    } else {
        var maxThisX = screen.width * 0.85;
        var maxThisY = screen.height * 0.85;
        var isScroll = "no";
        if (href.indexOf("ContentPrintView") > 0) { isScroll = "yes"; var maxThisX = "800";}
        window.open(href, setLinkTargetName(href), "width=" + maxThisX + ",height=" + maxThisY + ",scrollbars=" + isScroll + ",toolbar=no, resizable=yes, menubar=no, left=70, top=15");
    }
};

this.setLinkTargetName = function (href) {
    var linkname = "";
    if (href.indexOf("/ConService/ContentPrintView") >= 0) {
        linkname = "lbPrint";
    } else {
//        if ($(location).attr('href').indexOf("/Info/ContentView") >= 0) {
//            if (href.indexOf("=L000") > 0 ||
//             href.indexOf("=L006") > 0 ||
//             href.indexOf("=P000") > 0 ||
//             href.indexOf("=C000") > 0) {
//                linkname = "";
//            } else {
//                linkname = "lbinfo";
//            }
//        } else {
//            if (href.indexOf("=L000") > 0 ||
//            href.indexOf("=L006") > 0 ||
//            href.indexOf("=P000") > 0 ||
//            href.indexOf("=C000") > 0) {
//                linkname = "";
//            } else {
//                linkname = "lbinfo";
//            }
        //        }
        linkname = "";
    }
    return linkname;
};

this.checkMarking = function () {
    if ($("marks").length > 0) {
        $("#view_content").html($("#view_content").html().replace(/<marks>/g, "<markn>").replace(/<\/marks>/g, "</markn>"));
        $(".icon-checkbox-unchecked").removeClass('_checked');
    }else if ($("markn").length > 0) {
        $("#view_content").html($("#view_content").html().replace(/<markn>/g, "<marks>").replace(/<\/markn>/g, "</marks>"));
        $(".icon-checkbox-unchecked").addClass('_checked');
    }
};

var markindex = 0;

this.moveFindMarks = function (p) {
    if ($('marks').length > 0) {
        if (p == 'N') {
            if ($('marks').length == markindex) {
                $("marks").get(markindex - 1).scrollIntoView();
                wordIndex = 0;
            }
            else {
                $("marks").get(markindex).scrollIntoView();
                markindex += 1;
            } 
        }
        else {
            if (markindex == 0) {
                markindex = 0;
                $("marks").get(0).scrollIntoView();
            }
            else {
                markindex -= 1;
                $("marks").get(markindex).scrollIntoView();
            }        
        }
    }
};

//Main Index Script
function EditorIssueChange(id) {
    $(".main_issue").hide();
    $("#LE_" + id).show();

    $(".list_issue").children().removeClass("_this");
    $("#LE_Link_" + id).addClass("_this");

    $(".main_tap").children().removeClass("on");
    $("#EditorTap_" + id).addClass("on");
}

function M_Today_Layer(id) {
    $(".main .lawyer_area dl").hide();
    $("#T_lawyer_" + id).show();
}

function Banner_Change(id2) {
    $(".main .banner_area div").hide();
    $("#banner_" + id2).show();
}

function EditorPopup(sid) {
    if (checkMobile()) {
        location.href = "/Info/ContentView?sid=" + sid + "&popupYn=Y" ;
    } else {
        var href = "/Info/ContentView?sid=" + sid;
        var maxThisX = screen.width * 0.85;
        var maxThisY = screen.height * 0.85;
        window.open(href, setLinkTargetName(href), "width=" + maxThisX + ",height=" + maxThisY + ",scrollbars=no,toolbar=no, resizable=yes, menubar=no, left=70, top=15");
    }
}

function EditorLink(id) {
    var obj = [{ "name": "LEM_No", "value": id}]
    POSTFORMCall("/Editor/Index/", obj);
}

function MainNewsView(University) {
    if (University == "Y") {
        if ($("#NUniversity")) {
            $("#NUniversity").hide();
        }
    } else {
        if ($("#NUniversity")) {
            $("#NUniversity").show();
        }
    }
}

function EduCenterChange() {
    var FirstLevel = 0;
    var SecondLevel = 0;
    for (var i = 0; i < 10; i++) {
        if ($("#EduCenter_1_" + i).html()) {
            $("#EduCenter_1_" + i).hide();
            FirstLevel++;
        }
    }
    for (var i = 0; i < 10; i++) {
        if ($("#EduCenter_2_" + i).html()) {
            $("#EduCenter_2_" + i).hide();
            SecondLevel++;
        }
    }

    if (FirstLevel >= 2) {
        randomhideshow("EduCenter_1_");
        randomhideshow("EduCenter_1_");
    } else if (FirstLevel == 1) {
        randomhideshow("EduCenter_1_");
        randomhideshow("EduCenter_2_");
    } else if (FirstLevel == 0) {
        randomhideshow("EduCenter_2_");
        randomhideshow("EduCenter_2_");
    }

    //$("#" + id).show();
}

function randomhideshow(id) {
    var randomarray = []
    for (var i = 0; i < 10; i++) {
        if ($("#" + id + i)) {
            if ($("#" + id + i).css("display") == "none") {
                randomarray.push(i);
            }
        }
    }
    if (randomarray.length > 0) {
        var ShowID = Math.floor(Math.random() * Math.floor(randomarray.length));
        $("#" + id + randomarray[ShowID]).show();
    }
}

function removeNumber(_id) 
{
    var _val = $("#" + _id).val();
    var regex = /[0-9]/g;    
    _val = _val.replace(regex, "");

    $("#" + _id).val(_val);
}

this.checkPrivacy = function () {
    sendNonBlockingAjaxJsonRequest("/Login/PrivacyCheck", "", function (data) {
        if (data) {
            alert(data);
            //return data;
        } else {
            alert(data);
            //return "0";
        }
    });

}

this.checkMobile = function () {
    var isMobile = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

    if (localStorage.getItem("tabletYn") == "Y") {        
        isMobile = true;
    }

    return isMobile;
}

//GA Script Event
function GAEvent(Page) {    
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", window.location.origin + "/GA/" + Page);
    ifrm.style.width = "0px";
    ifrm.style.height = "0px";
    ifrm.style.display = "none";
    document.body.appendChild(ifrm);
}

function GAEvent(Page, Params) {    
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", window.location.origin + "/GA/" + Page + "/" + Params);
    ifrm.style.width = "0px";
    ifrm.style.height = "0px";
    ifrm.style.display = "none";
    document.body.appendChild(ifrm);
}
/*
// 모바일 본문 창 닫기
function appPopupClose() {
    //alert("test");

    window.APPPopup.popupColse();
}
*/
//임시... 알림설정레이어 오푼
function open_alert_set() {
    $('#popup_alert').hide();
    $('#mobile_alert_set').show();
    $('#bg_screen').show();
}

this.MoveMenuNew = function (link, s, j) {
    var r = confirm("「온주」는 건축법, 독점규제법, 개인정보보호법 등 실무상 수요가 많은 법률을 대상으로 한 디지털 주석서를 온라인으로 제공하는 서비스 입니다. \n\n로앤비 서비스와 별개로 운영됩니다. \n\n「온주」로 이동하시겠습니까?");
    if (r) {
        link = link.replace(s, escape(s));
        if (j != '') {
            link = link.replace(j, escape(j));
        }
        CheckCPMemberInfo(link);
    }

};

this.CheckCPMemberInfo = function (link) {
    $.ajax({ type: "GET", url: "../AjaxInfo/GetVerifyCPMember", dataType: "text", success: function (data) {
        if (data == "0") { window.open(link); }
        else {
            link = link.replace(/&/g, '^');
            var cpLink = "/Member/GoOnju?domain=" + data + "&param=" + link;
            window.open(cpLink);
        }
    }, error: function (e) { }
    });
};

// 법조인명록 등록/수정 view
this.lawyerAddView = function (href) {    
    
    //loginNeed();

    if (checkMobile()) {
        href = href.indexOf("?") >= 0 ? href + "&popupYn=Y" : href + "?popupYn=Y";
        location.href = href;
    } else {
        var maxThisX = screen.width * 0.85;
        var maxThisY = screen.height * 0.85;
        window.open(href, setLinkTargetName(href), "width=" + maxThisX + ",height=" + maxThisY + ",scrollbars=no,toolbar=no, resizable=yes, menubar=no, left=70, top=15");
    }
};

// 20191001 - 20191031 IP회원 이벤트 쿠키 체크
function eventVisibleCheck() {
    var chkFlag = $("#chkIpMemeberEvent").prop("checked") ? true : false;
    var date = new Date();
    if (chkFlag) {
        date.setDate(date.getDate() + 7); // 7일
        //date.setTime(date.getTime() + 1 * 60 * 1000); // 1분 test
        document.cookie = "LAWNBEVENT=LAWNB20TH_; expires=" + date.toGMTString() + "; path=/";
    } else {
        date.setDate(date.getDate() - 1);
        document.cookie = "LAWNBEVENT=; expires=" + date.toGMTString() + "; path=/";
    }
}

function getCookie(name) {
    var nameChk = new RegExp(name + '=([^;]*)');
    return nameChk.test(document.cookie) ? unescape(RegExp.$1) : "";
}


function close_keris_check() {
    try {
        if (opener) {
            if (opener.location.href.toLowerCase().indexOf("contentview") < 0) {
                opener.location.href = '//www.lawnb.com';
            }
            window.close();
        } else {
            if ($(location).attr('href').toLowerCase().indexOf("contentview") > 0) {
                window.close();
            } else {
                $(location).attr('href', '//www.lawnb.com');
            }
        } 
    } catch (error) {
        if ($(location).attr('href').toLowerCase().indexOf("contentview") > 0) {
            window.close();
        } else {
            $(location).attr('href', '//www.lawnb.com');
        }
    }

}

//var whiteListExts = ["txt", "doc", "docx", "hwp", "jpg", "jpeg", "png", "bmp", "ppt", "pptx", "xlsx", "xls"];
$('#requestForm').on('change', '#attachedDownFile', function () {
    var fileSize = this.files[0].size;
    var fileName = this.files[0].name;
    var ext = fileName.substr(fileName.lastIndexOf('.') + 1);
    if (fileSize * 1 / 1024 / 1024 > 5) {
        alert('5MB넘는 파일은 첨부하실 수 없습니다.');
        $(this).replaceWith($(this).clone());
        return false;
    }
    /* 
    var isAllowExtName = false;
    for (var i = 0; i < whiteListExts.length; i++) {
        var extName = whiteListExts[i];
        if (extName == ext.toLowerCase()) {
            isAllowExtName = true;
            break;
        }
    }

    if (!isAllowExtName) {
        //alert('이미지 또는 문서 형식 파일만 업로드해 주시기바랍니다.');
        alert('업로드 파일 확장자를 확인해주세요.');
        $(this).replaceWith($(this).clone());
        return false;
    }
    */    
});

function fnGetDate(tDate) {
    if (tDate == null) {
        tDate = new Date();
    }    
    var year = tDate.getFullYear();
    var month = ('0' + (tDate.getMonth() + 1)).slice(-2);
    var day = ('0' + tDate.getDate()).slice(-2);
    //var dateStr = year + '-' + month + '-' + day;

    return (year + '/' + month + '/' + day);
}

function fnGetTime(tDate) {
    if (tDate == null) {
        tDate = new Date();
    }
    var hours = ('0' + tDate.getHours()).slice(-2);
    var minutes = ('0' + tDate.getMinutes()).slice(-2);
    var seconds = ('0' + tDate.getSeconds()).slice(-2);
    //var timeStr = hours + ':' + minutes;

    return (hours + ':' + minutes);
}

// 2022.04 UI 개선 수정 작업
function chgMySearchOnOff(_val) {
    $("#indiv_area #spanMySearch em").removeClass("icon_mySearch_on");
    $("#indiv_area #spanMySearch em").removeClass("icon_mySearch_off");
    if (_val == "Y") {
        $("#indiv_area #spanMySearch em").addClass("icon_mySearch_on");
        $("#indiv_area #spanMySearch em").text("ON");
    }
    else {
        $("#indiv_area #spanMySearch em").addClass("icon_mySearch_off");
        $("#indiv_area #spanMySearch em").text("OFF");
    }
}
/*
var chgMainEditorIndex = 0;
// 2022.04 UI 개선 수정 작업
function mainEditorNext() {

    if (chgMainEditorIndex == 6) {
        chgMainEditorIndex = 0;
    }
    else {
        chgMainEditorIndex++;
    }    
    $(".main_issue").hide();
    $("#LE_" + chgMainEditorIndex).show();

    $(".list_issue").children().removeClass("_this");
    $("#LE_Link_" + chgMainEditorIndex).addClass("_this");

    $(".main_tap").children().removeClass("on");
    $("#EditorTap_" + chgMainEditorIndex).addClass("on");

}
function mainEditorPrev() {
    if (chgMainEditorIndex == 0) {
        chgMainEditorIndex = 6;
    }
    else {
        chgMainEditorIndex--;
    }

    $(".main_issue").hide();
    $("#LE_" + chgMainEditorIndex).show();

    $(".list_issue").children().removeClass("_this");
    $("#LE_Link_" + chgMainEditorIndex).addClass("_this");

    $(".main_tap").children().removeClass("on");
    $("#EditorTap_" + chgMainEditorIndex).addClass("on");
}
*/


//간편로그인 카카오 연결하기
function kakaoauth() {
    var f = document.createElement("form");
    f.setAttribute("method", "get");
    f.setAttribute("name", "kakaoauthform");
    f.setAttribute("id", "kakaoauthform");
    f.setAttribute("action", "https://kauth.kakao.com/oauth/authorize");

    var client_id = document.createElement("input");
    client_id.setAttribute("type", "hidden");
    client_id.setAttribute("name", "client_id");
    client_id.setAttribute("value", "f7e5083322c0a12365fa4263023c8a18");

    var redirect_uri = document.createElement("input");
    redirect_uri.setAttribute("type", "hidden");
    redirect_uri.setAttribute("name", "redirect_uri");
    redirect_uri.setAttribute("value", "https://" + window.location.hostname + "/Member/KakaoLogin");

    var response_type = document.createElement("input");
    response_type.setAttribute("type", "hidden");
    response_type.setAttribute("name", "response_type");
    response_type.setAttribute("value", "code");

    f.appendChild(client_id);
    f.appendChild(redirect_uri);
    f.appendChild(response_type);
    document.body.appendChild(f);
    f.submit();
}


contentHighlight = function (hw) {
    var hWord = storage.getSearchWord();
    if (hWord != "") {
        hWord = setWordFiltering(hWord);
        if (hWord != "") {
            if ($("#view_content").length > 0) {
                var wArr = hWord.split(':'); var isHighwd = false;
                for (i = 0; i < wArr.length; i++) {
                    isHighwd = false;
                    if (wArr[i].length > 1) {
                        if (hw != '') {
                            if (hw.split(':').indexOf(wArr[i]) >= 0) { isHighwd = true; }
                        }
                    }
                    //if (wArr[i].length > 1 && !isHighwd) {
                    //    $("#view_content:contains('" + wArr[i] + "')").each(function () {
                    //        var regex = new RegExp(wArr[i], 'gi');
                    //        $(this).html($(this).html().replace(regex, ";marks;" + wArr[i] + ";marjs;"));
                    //    });
                    //}
                    if (wArr[i].length > 0 && !isHighwd) {
                        $("#view_content:contains('" + wArr[i] + "')").each(function () {
                            var regex = new RegExp(wArr[i], 'gi');
                            $(this).html($(this).html().replace(regex, ";marks;" + wArr[i] + ";marjs;"));
                        });
                    }
                }

                setWordTagFiltering();
                $("#view_content").html($("#view_content").html().replace(/;marks;/g, "<marks>").replace(/;marjs;/g, "</marks>"));
                $("#view_content").html($("#view_content").html().replace(/([a-zA-Z0-9가-힣\.\(\)""\'\,\:\;\{\}\[\]【】]|^)(\s*)(<marks>)([a-zA-Z0-9가-힣])(<\/marks>)(\s*)([a-zA-Z0-9가-힣\.\(\)""\'\,\:\;\{\}\[\]【】]|$)/g
                    , "$1$2$4$6$7"));
                $(".icon-checkbox-unchecked").addClass('_checked');
            }
           
        }

    }
};

setWordFiltering = function (sw) {
    sw = sw.replace("(", ":").replace(")", ":");
    var sWord_ = ":" + sw + ":";
    var reg = /:br:|:div:|:em:|:dl:|:dt:|:form:|:img:|:li:|:label:|:table:|:tbody:|:td:|:tr:|:span:/gim;

    sWord_ = sWord_.replace(reg, ":");
    sWord_ = sWord_.replace(/::/g, ':');

    return sWord_;
};

setWordTagFiltering = function () {
    if ($("#view_content").length > 0) {
        var wHtml = $("#view_content").html();
        var reg = /<[^>]*(;marks;)*(;marjs;)>?/gim;
        $.each(wHtml.match(reg), function (index, res) {
            wHtml = wHtml.replace(res, res.replace(/;marks;/g, "").replace(/;marjs;/g, ""));
        });
        $("#view_content").html(wHtml);
    }
};

noImage = function () {
    $("img").attr("src", "/Images/lawnbnext/noimage.jpg");
}

