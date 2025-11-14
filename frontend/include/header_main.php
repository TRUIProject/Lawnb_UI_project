<?php
$url = "http://localhost/";
$title="로앤비";
?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<title><?php echo $title;?></title>
	<link rel="apple-touch-icon" href="../images/common/favicon.png">
	<link rel="shortcut icon" type="image/x-icon" href="../images/common/favicon.png" />

	<!-- FONT -->
	<link rel="stylesheet" type="text/css" href="../fonts/font.css">
	<!-- Link CSS -->
	<link rel="stylesheet" type="text/css" href="../css/icons.css">
	<link rel="stylesheet" type="text/css" href="../css/reset.css">
	<link rel="stylesheet" type="text/css" href="../css/common.css">
	<link rel="stylesheet" type="text/css" href="../css/hf.css">
	<link rel="stylesheet" type="text/css" href="../css/layout.css">
	<link rel="stylesheet" type="text/css" href="../css/slick.css">


	<!-- jquery 3.3.1 -->
	<script type="text/javascript" src="../js/jquery.min.js"></script>
	<!-- JS -->
	<script type="text/javascript" src="../js/common.js"></script>
	<script type="text/javascript" src="../js/slick.min.js"></script>
</head>

<body>
<!--	시작 : 헤더	-->
<header id="header" class="header_wrap">
	<div class="header-pd header-bg">
	    <div class="w1600 str clear">
		    <button class='btn-new'>NEW <br>검색 중심</button>
	        <button id="btn-nav" class="btn-nav c-left"></button>
		    <div id="screen-wrap" class="c-left ml-10">
			    <div class="str">
				    <button id="btn-screen"><span>화면 설정</span></button>
				    <div class="header-popup">
					    <div class="popup-bg">
						    <ul class="screen-list">
							    <li><a href="../main/main_search.php"><span>검색 중심 화면</span></a></li>
							    <li><a href="../main/main_contents.php"><span>컨텐츠 포함 화면</span></a></li>
						    </ul>
					    </div>
				    </div>
			    </div>
		    </div>
		    <ul class="c-right clear hd-r-list">
			    <li><a href="../member/login.php">로그인</a></li>
			    <li class="my-info-warp str">
				    <button class="icon-arrow"><span>로앤비</span>님</button>
				    <div class="header-popup my-info-popup">
					    <div class="popup-bg">
						    <div class="popup-tit clear">
							    <p class="c-left tit">나의정보</p>
							    <a href="" class="c-right badge-none">회원정보</a>
						    </div>
						    <div class="con01">
							    <p class="txt01">로앤비님</p>
							    <p class="txt02">LawnB***@naver.com</p>
							    <a href="" class="btn-blue btn-s">유로권한 설정</a>
						    </div>
						    <div class="con02">
							    <div class="clear">
								    <p class="txt03">회원등급</p>
								    <p class="txt02">개인회원 | Professional</p>
							    </div>
							    <div class="clear">
								    <p class="txt03">이용기간</p>
								    <p class="txt02"><span class="c-blue">2100-12-31 까지</span></p>
							    </div>
							    <div class="clear">
								    <p class="txt03">메일링 서비스</p>
								    <p class="txt02"><span class="c-blue">관리</span></p>
							    </div>
							    <div class="clear">
								    <p class="txt03">모바일 등록정보</p>
								    <p class="txt02">나의모바일기기<span class="c-blue ml-2">삭제</span><span class="icon-exclamation-circle icon-w20 ml-2"></span></p>
							    </div>
						    </div>
						    <div class="con03">
							    <ul class="btn-list clear">
								    <li><a href="" class="badge-none">1:1 문의</a></li>
								    <li><a href="" class="badge-none">판결문 등재 신청</a></li>
								    <li><a href="" class="badge-none">나의 법조인 관리</a></li>
								    <li><a href="" class="badge-none">숭소 판결문 등록</a></li>
							    </ul>
						    </div>
						    <div class="con04">
							    <a href="" class="btn-gray btn-logout"><span class="icon-logout">로그아웃</span></a>
						    </div>
					    </div>
				    </div>
			    </li>
			    <li class="alert-warp str">
				    <button class="icon-alert">알림<span class="dot-num">1</span></button>
				    <div class="header-popup alert-popup">
					    <div class="popup-bg">
						    <div class="gnb-scroll">
							    <div class="popup-tit clear">
								    <p class="c-left tit">알림</p>
								    <a href="" class="c-right badge-none">알림설정</a>
							    </div>
							    <ul class="alert-list">
								    <li>
									    <a href="">
										    <p class="con-tit">[입법동향 알림] [2119240]부동산 실권리자명의 등기에 관한 범률 일부개정법율안</p>
										    <p class="con-date">2022.08.29(금)</p>
									    </a>
								    </li>
								    <li>
									    <a href="">
										    <p class="con-tit">판결문 등재 신청에 대해 답변드립니다</p>
										    <p class="con-date">2022.08.29(금)</p>
									    </a>
								    </li>
								    <li>
									    <a href="">
										    <p class="con-tit">판결문 등재 신청에 대해 답변드립니다</p>
										    <p class="con-date">2022.08.29(금)</p>
									    </a>
								    </li>
								    <li>
									    <a href="">
										    <p class="con-tit">판결문 등재 신청에 대해 답변드립니다</p>
										    <p class="con-date">2022.08.29(금)</p>
									    </a>
								    </li>
								    <li>
									    <a href="">
										    <p class="con-tit">판결문 등재 신청에 대해 답변드립니다</p>
										    <p class="con-date">2022.08.29(금)</p>
									    </a>
								    </li>
							    </ul>
						    </div>
					    </div>
				    </div>
			    </li>
			    <li class="my-service-wrap str">
				    <button class="icon-arrow">개인화 서비스</button>
				    <div id="my-service-popup" class="header-popup my-service-popup">
					    <div class="popup-bg">
						    <div class="popup-header">
							    <ul class="tab-list clear">
								    <li class="tab-li on" onclick="fn_tab_list(this)" data-tab-id="#my-service-popup" data-tab-con="#my-service-con01">최근 조회 콘텐츠</li>
								    <li class="tab-li" onclick="fn_tab_list(this)" data-tab-id="#my-service-popup" data-tab-con="#my-service-con02">하이라이트&메모</li>
								    <li class="tab-li" onclick="fn_tab_list(this)" data-tab-id="#my-service-popup" data-tab-con="#my-service-con03">나의 폴더</li>
								    <li class="tab-li" onclick="fn_tab_list(this)" data-tab-id="#my-service-popup" data-tab-con="#my-service-con04">문의내역<span class="icon-out-box icon-w15 ml-2"></span></li>
							    </ul>
						    </div>
						    <div class="popup-list-wrap">
							    <div id="my-service-con01" class="popup-con-wrap on">
								    <div class="popup-con scroll-y">
									    <div class="str">
										    <div class="con-title">최근 조회 컨텐츠</div>
										    <div class="str-rt"><a href="" class="btn-none btn-s">전체보기</a></div>
									    </div>
									    <ul class="list-ul">
										    <li>
											    <a href="">
												    <p class="tit01">서울고등법원 2022.11.10 선고 2022누40521 판결[과징금납부명령취소]</p>
											    </a>
										    </li>
										    <li>
											    <a href="">
												    <p class="tit01">서울고등법원 2022.11.10 선고 2022누40521 판결[과징금납부명령취소]</p>
											    </a>
										    </li>
										    <li>
											    <a href="">
												    <p class="tit01">서울고등법원 2022.11.10 선고 2022누40521 판결[과징금납부명령취소]</p>
											    </a>
										    </li>
										    <li>
											    <a href="">
												    <p class="tit01">서울고등법원 2022.11.10 선고 2022누40521 판결[과징금납부명령취소]</p>
											    </a>
										    </li>
										    <li>
											    <a href="">
												    <p class="tit01">서울고등법원 2022.11.10 선고 2022누40521 판결[과징금납부명령취소]</p>
											    </a>
										    </li>
										    <li>
											    <a href="">
												    <p class="tit01">서울고등법원 2022.11.10 선고 2022누40521 판결[과징금납부명령취소]</p>
											    </a>
										    </li>
									    </ul>
								    </div>
								    <div class="popup-footer fs-12">
										<div class="ft-con">
											<div class="str pl-20 pr-50">
												<span class="icon-exclamation-circle icon-w15 str-lt"></span>
												로앤비에서 제공하는 히스토리의 기본 수집 번위는 판례와 법규 서비스에 한정됩니다.<br>
												해당 법위는 아래의 설정버튼에서 변경 가능합니다.
												<a href="" class="btn-none btn-s str-rt">설정</a>
											</div>
										</div>
										<div class="ft-con c-blue">
											<div class="save-dot-wrap" onclick="fn_toggle_on(this)">
												최근조회 설정 <span class="save-dot ml-5"></span>
											</div>
										</div>
								    </div>
							    </div>
							    <div id="my-service-con02" class="popup-con-wrap">
								    <div class="popup-con scroll-y">
									    <div class="str">
										    <div class="con-title">하이라이트&메모</div>
										    <div class="str-rt"><a href="" class="btn-none btn-s">전체보기</a></div>
									    </div>
									    <ul class="list-ul">
										    <li>
											    <a href="">
												    <p class="tit01">하이라이트&메모 2022.11.10 선고 2022누40521 판결[과징금납부명령취소]</p>
											    </a>
										    </li>
										    <li>
											    <a href="">
												    <p class="tit01">하이라이트&메모 2022.11.10 선고 2022누40521 판결[과징금납부명령취소]</p>
											    </a>
										    </li>
										    <li>
											    <a href="">
												    <p class="tit01">하이라이트&메모 2022.11.10 선고 2022누40521 판결[과징금납부명령취소]</p>
											    </a>
										    </li>
										    <li>
											    <a href="">
												    <p class="tit01">하이라이트&메모 2022.11.10 선고 2022누40521 판결[과징금납부명령취소]</p>
											    </a>
										    </li>
										    <li>
											    <a href="">
												    <p class="tit01">하이라이트&메모 2022.11.10 선고 2022누40521 판결[과징금납부명령취소]</p>
											    </a>
										    </li>
										    <li>
											    <a href="">
												    <p class="tit01">하이라이트&메모 2022.11.10 선고 2022누40521 판결[과징금납부명령취소]</p>
											    </a>
										    </li>
									    </ul>
								    </div>
							    </div>
							    <div id="my-service-con03" class="popup-con-wrap">
								    <div class="popup-con scroll-y">
									    <div class="str">
										    <div class="con-title">나의 폴더</div>
										    <div class="str-rt"><a href="" class="btn-none btn-s">전체보기</a></div>
									    </div>
									    <ul class="list-ul">
										    <li>
											    <a href="">
												    <p class="tit01">나의 폴더 나의 폴더 나의 폴더 나의 폴더 나의 폴더</p>
												    <p class="tit02">폴더1 > 999</p>
											    </a>
										    </li>
										    <li>
											    <a href="">
												    <p class="tit01">나의 폴더 나의 폴더 나의 폴더 나의 폴더 나의 폴더</p>
												    <p class="tit02">폴더1 > 999</p>
											    </a>
										    </li>
										    <li>
											    <a href="">
												    <p class="tit01">나의 폴더 나의 폴더 나의 폴더 나의 폴더 나의 폴더</p>
												    <p class="tit02">폴더1 > 999</p>
											    </a>
										    </li>
										    <li>
											    <a href="">
												    <p class="tit01">나의 폴더 나의 폴더 나의 폴더 나의 폴더 나의 폴더</p>
												    <p class="tit02">폴더1 > 999</p>
											    </a>
										    </li>
										    <li>
											    <a href="">
												    <p class="tit01">나의 폴더 나의 폴더 나의 폴더 나의 폴더 나의 폴더</p>
												    <p class="tit02">폴더1 > 999</p>
											    </a>
										    </li>
									    </ul>
								    </div>
							    </div>
							    <div id="my-service-con04" class="popup-con-wrap">
								    <div class="popup-con scroll-y">
									    <div class="str">
										    <div class="con-title">문의 내역</div>
										    <div class="str-rt"><a href="" class="btn-none btn-s">전체보기</a></div>
									    </div>
									    <ul class="list-ul">
										    <li>
											    <a href="" class="tit01">
												    <p class="tit01">문의 내역 문의 내역 문의 내역 문의 내역</p>
											    </a>
										    </li>
										    <li>
											    <a href="" class="tit01">
												    <p class="tit01">문의 내역 문의 내역 문의 내역 문의 내역</p>
											    </a>
										    </li>
										    <li>
											    <a href="" class="tit01">
												    <p class="tit01">문의 내역 문의 내역 문의 내역 문의 내역</p>
											    </a>
										    </li>
										    <li>
											    <a href="" class="tit01">
												    <p class="tit01">문의 내역 문의 내역 문의 내역 문의 내역</p>
											    </a>
										    </li>
										    <li>
											    <a href="" class="tit01">
												    <p class="tit01">문의 내역 문의 내역 문의 내역 문의 내역</p>
											    </a>
										    </li>
										    <li>
											    <a href="" class="tit01">
												    <p class="tit01">문의 내역 문의 내역 문의 내역 문의 내역</p>
											    </a>
										    </li>
									    </ul>
								    </div>
							    </div>
						    </div>
					    </div>
				    </div>
			    </li>
			    <li class="cs-wrap str">
				    <button class="icon-arrow">고객센터</button>
				    <div class="header-popup cs-popup">
					    <div class="popup-bg">
						    <div>
							    <ul class="cs-list">
								    <li><a href="../cs/cs_home.php"><span>고객센터 홈</span></a></li>
								    <li><a href="../cs/help_to_use.php"><span>이용도움말</span></a></li>
								    <li><a href="../cs/search_id.php"><span>ID 비밀번호 찾기</span></a></li>
								    <li><a href="../cs/inquiry.php"><span>1:1 문의</span></a></li>
								    <li><a href="../cs/regist_judgment.php"><span>판결문 등재신청</span></a></li>
							    </ul>
						    </div>
						    <div class="cs-info">
							    <div>
								    <p class="tit">C/S</p>
								    <p class="icon-phone">02-6467-5500</p>
								    <p class="icon-envelope">cs.lawnb@tr.com</p>
							    </div>
							    <div>
								    <p class="tit">24시간 긴급장애</p>
								    <p class="icon-phone">070-7618-9861</p>
							    </div>
						    </div>
					    </div>
				    </div>
			    </li>
		    </ul>
	    </div>
	</div>
</header>
<?php include '../include/nav.php'; ?>
<!--	끝 : 헤더	-->
<script>
</script>
