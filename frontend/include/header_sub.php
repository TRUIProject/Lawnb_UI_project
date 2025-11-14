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
			<button id="btn-nav" class="btn-nav c-left"></button>
			<h1 class="logo-div c-left ml-15"><a href="../main/main_search.php"><img src="../images/common/logo_s.png" alt="로앤비" /></a></h1>
			<button class='btn-search c-left'><span class='n-i n-i-w15 n-i-search'
			                                        onclick="fn_toggle_on('#hd-search-box')"></span></button>
			<div id='hd-search-box' class='center search-box'>
				<div class='str'>
					<div class='input-div'>
						<div class='input-box str'>
							<label>
								<input id='keyword-input' placeholder='사건번호, 법령명, 키워드를 입력해주세요.'>
							</label>
							<button class='search-btn'></button>
						</div>
					</div>
					<div id='keyword-wrap' class='keyword-wrap'>
						<div class='scroll-y'>
							<div class='con-01'>
								<div class='txt-div'>
									<p>우선 검색범위 선택 <span class='c-blue'>: 판례, 논문, 온주</span></p>
									<ul class='btn-list clear'>
										<li class='c-left mr-5'>
											<button class='icon-arrow-path'></button>
										</li>
										<li class='c-left'>
											<button id='btn-keyword-close' class='icon-arrow-up accordion-button'
											        data-bs-target='#keyword-list'></button>
										</li>
									</ul>
								</div>
								<ul id='keyword-list' class='keyword-list'>
									<li>
										<input type='checkbox' id='keyword-1' value='판례' name='keyword-list'>
										<label for='keyword-1'>판례</label>
									</li>
									<li>
										<input type='checkbox' id='keyword-2' value='법령' name='keyword-list'>
										<label for='keyword-2'>법령</label>
									</li>
									<li>
										<input type='checkbox' id='keyword-3' value='비즈폼서식' name='keyword-list'>
										<label for='keyword-3'>비즈폼서식</label>
									</li>
									<li>
										<input type='checkbox' id='keyword-4' value='유권해석' name='keyword-list'>
										<label for='keyword-4'>유권해석</label>
									</li>
									<li>
										<input type='checkbox' id='keyword-5' value='논문' name='keyword-list'>
										<label for='keyword-5'>논문</label>
									</li>
									<li>
										<input type='checkbox' id='keyword-6' value='결정례' name='keyword-list'>
										<label for='keyword-6'>결정례</label>
									</li>
									<li>
										<input type='checkbox' id='keyword-7' value='행정규칙' name='keyword-list'>
										<label for='keyword-7'>행정규칙</label>
									</li>
									<li>
										<input type='checkbox' id='keyword-8' value='자치법규' name='keyword-list'>
										<label for='keyword-8'>자치법규</label>
									</li>
									<li>
										<input type='checkbox' id='keyword-9' value='입법동향' name='keyword-list'>
										<label for='keyword-9'>입법동향</label>
									</li>
									<li>
										<input type='checkbox' id='keyword-10' value='조약' name='keyword-list'>
										<label for='keyword-10'>조약</label>
									</li>
									<li>
										<input type='checkbox' id='keyword-11' value='특허심판례' name='keyword-list'>
										<label for='keyword-11'>특허심판례</label>
									</li>
									<li>
										<input type='checkbox' id='keyword-12' value='유럽법제동향' name='keyword-list'>
										<label for='keyword-12'>유럽법제동향</label>
									</li>
									<li>
										<input type='checkbox' id='keyword-13' value='법률사전' name='keyword-list'>
										<label for='keyword-13'>법률사전</label>
									</li>
									<li>
										<input type='checkbox' id='keyword-14' value='로펌' name='keyword-list'>
										<label for='keyword-14'>로펌</label>
									</li>
									<li>
										<input type='checkbox' id='keyword-15' value='기업정보' name='keyword-list'>
										<label for='keyword-15'>기업정보</label>
									</li>
									<li>
										<input type='checkbox' id='keyword-16' value='전문법률서식' name='keyword-list'>
										<label for='keyword-16'>전문법률서식</label>
									</li>
									<li>
										<input type='checkbox' id='keyword-17' value='E-book' name='keyword-list'>
										<label for='keyword-17'>E-book</label>
									</li>
								</ul>
							</div>
							<div class='con-02'>
								<ul class='resent-list'>
									<li class=''>
										<a href=''>
											<p class='keyword'>종합부동산세액</p>
											<p class='date'>9.27</p>
										</a>
										<button></button>
									</li>
									<li class=''>
										<a href=''>
											<p class='keyword'>부동산</p>
											<p class='date'>9.27</p>
										</a>
										<button></button>
									</li>
									<li class=''>
										<a href=''>
											<p class='keyword'>사업자가 과세사업</p>
											<p class='date'>9.27</p>
										</a>
										<button></button>
									</li>
									<li class=''>
										<a href=''>
											<p class='keyword'>부동산실권리자명의등기에관한법률</p>
											<p class='date'>9.27</p>
										</a>
										<button></button>
									</li>
								</ul>
							</div>
						</div>
						<div class='keyword-footer clear'>
							<div class='chk-dot-wrap c-right'>
								<input type='checkbox' id='save-search-yn' value='Y' name='save-search-yn'>
								<label for='save-search-yn'>최근검색어저장 <span class='dot ml-5'></span></label>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ul class="c-right clear hd-r-list">
				<li class="on"><a href="../member/login.php">로그인</a></li>
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
								<a href="../main/main_search.php" class="btn-gray btn-logout"><span class="icon-logout">로그아웃</span></a>
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
	<div class="header-sub-menu02">
		<div class="w1200 str clear">
			<ul id="sub-menu-list" class="sub-menu-list clear">
				<li id="sub-menu-01" class="sub-menu-li on" onclick="fn_sub_menu('01')"><p>우선검색</p></li>
				<li id="sub-menu-02" class="sub-menu-li" onclick="fn_sub_menu('02')"><p>판례</p></li>
				<li id="sub-menu-03" class="sub-menu-li" onclick="fn_sub_menu('03')"><p>법령</p></li>
				<li id="sub-menu-04" class="sub-menu-li" onclick="fn_sub_menu('04')"><p>문헌</p></li>
				<li id="sub-menu-05" class="sub-menu-li" onclick="fn_sub_menu('05')"><p>법조인</p></li>
				<li id="sub-menu-06" class="sub-menu-li" onclick="fn_sub_menu('06')"><p>뉴스</p></li>
				<li id="sub-menu-07" class="sub-menu-li" onclick="fn_sub_menu('07')"><p>LAWnB Guidance</p></li>
			</ul>
		</div>
	</div>
</header>
<div class="w800">
	<div class="con-center content-nav-warp">
		<div id="sub-menu-con-warp">
			<ul id="sub-menu-con-01" class="sub-menu-con on ul-style02">
				<li><a href="" onclick="alert('페이지 작업 전입니다.');">가이던스</a></li>
				<li><a href="" onclick="alert('페이지 작업 전입니다.');">온주</a></li>
				<li class="on"><a href="../precedent/precedent_submain01.php">판례</a></li>
			</ul>
			<ul id="sub-menu-con-02" class="sub-menu-con ul-style02">
				<li><a href="../precedent/precedent_submain01.php">판례</a></li>
				<li><a href="../jdi/patentTria_submain.php">특허심판례</a></li>
				<li><a href="../jdi/decisive_submain01.php">결정례</a></li>
				<li><a href="../jdi/authoritSearchList.php">유권해석</a></li>
			</ul>
			<ul id="sub-menu-con-03" class="sub-menu-con ul-style02">
				<li><a href="../law/law_submain01.php">법령</a></li>
				<li><a href="../law/regulations_submain01.php">자치법규</a></li>
				<li><a href="../law/treaty_submain01.php">조약</a></li>
				<li><a href="../law/lawTrend_submain01.php">입법동향</a></li>
				<li><a href="../law/adminRule_submain01.php">행정규칙</a></li>
			</ul>
			<ul id="sub-menu-con-04" class="sub-menu-con ul-style02">
				<li><a href="" onclick="alert('미작업페이지입니다.');">온주</a></li>
				<li><a href="../literature/comment_submain01.php">기본법 주석서</a></li>
				<li><a href="../literature/plainPaper_submain01.php">논문</a></li>
				<li><a href="../literature/journal_submain01.php">저널</a></li>
				<li><a href="../precedent/research_submain01.php">판례연구</a></li>
				<li><a href="../precedent/squareFeet_submain01.php">천자평석</a></li>
				<li><a href="../literature/europe_submain01.php">유럽법제동향</a></li>
				<li><a href="" onclick="alert('미작업페이지입니다.');">판례해설</a></li>
				<li><a href="" onclick="alert('미작업페이지입니다.');">로펌리포트</a></li>
				<li><a href="../literature/dictionary_submain01.php">법률사전</a></li>
				<li><a href="../literature/eBook_submain01.php">이북</a></li>
				<li><a href="" onclick="alert('미작업페이지입니다.');">전문법률서식</a></li>
				<li><a href="" onclick="alert('미작업페이지입니다.');">비즈폼</a></li>
			</ul>
			<ul id="sub-menu-con-05" class="sub-menu-con ul-style02">
				<li><a href="" onclick="alert('미작업페이지입니다.');">법조인명록</a></li>
				<li><a href="" onclick="alert('미작업페이지입니다.');">기업정보</a></li>
				<li><a href="" onclick="alert('미작업페이지입니다.');">로펌</a></li>
			</ul>
			<ul id="sub-menu-con-06" class="sub-menu-con ul-style02">
				<li><a href="" onclick="alert('미작업페이지입니다.');">뉴스</a></li>
				<li><a href="" onclick="alert('미작업페이지입니다.');">칼럼</a></li>
				<li><a href="" onclick="alert('미작업페이지입니다.');">ESG</a></li>
			</ul>
		</div>
	</div>
</div>
<?php include '../include/nav.php'; ?>
<!--	끝 : 헤더	-->
<script>
    function fn_sub_menu(conNum) {
        const menuList = $("#sub-menu-list");
        const menuLi = $("#sub-menu-" + conNum);
        const conWrap = $("#sub-menu-con-warp");
        const conDiv = $("#sub-menu-con-" + conNum);
        menuList.find('.sub-menu-li').removeClass('on');
        conWrap.find('.sub-menu-con').removeClass('on');
        menuLi.addClass('on');
        conDiv.addClass('on');
    }
</script>
