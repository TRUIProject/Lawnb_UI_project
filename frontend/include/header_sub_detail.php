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
<?php include '../include/content_popup_layer.php'; ?>
<!--	시작 : 헤더	-->
<header id="header" class="header_wrap">
	<div class="header-pd header-bg">
		<div class="w1600 str clear">
			<button id="btn-nav" class="btn-nav c-left"></button>
			<h1 class="logo-div c-left ml-15"><a href="../main/main_search.php"><img src="../images/common/logo_s.png" alt="로앤비" /></a></h1>
			<button class='btn-search c-left'><span class="n-i n-i-w15 n-i-search" onclick="fn_toggle_on('#hd-search-box')"></span></button>
			<div id="hd-search-box" class="center search-box">
				<div class="str">
					<div class="input-div">
						<div class="input-box str">
							<label>
								<input id="keyword-input" placeholder="사건번호, 법령명, 키워드를 입력해주세요.">
							</label>
							<button class="search-btn"></button>
						</div>
					</div>
					<div id="keyword-wrap" class="keyword-wrap">
						<div class="scroll-y">
							<div class="con-01">
								<div class="txt-div">
									<p>우선 검색범위 선택 <span class="c-blue">: 판례, 논문, 온주</span></p>
									<ul class="btn-list clear">
										<li class="c-left mr-5"><button class="icon-arrow-path"></button></li>
										<li class="c-left"><button id="btn-keyword-close" class="icon-arrow-up accordion-button" data-bs-target="#keyword-list"></button></li>
									</ul>
								</div>
								<ul id="keyword-list" class="keyword-list">
									<li>
										<input type="checkbox" id="keyword-1" value="판례" name="keyword-list">
										<label for="keyword-1">판례</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-2" value="법령" name="keyword-list">
										<label for="keyword-2">법령</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-3" value="비즈폼서식" name="keyword-list">
										<label for="keyword-3">비즈폼서식</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-4" value="유권해석" name="keyword-list">
										<label for="keyword-4">유권해석</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-5" value="논문" name="keyword-list">
										<label for="keyword-5">논문</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-6" value="결정례" name="keyword-list">
										<label for="keyword-6">결정례</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-7" value="행정규칙" name="keyword-list">
										<label for="keyword-7">행정규칙</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-8" value="자치법규" name="keyword-list">
										<label for="keyword-8">자치법규</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-9" value="입법동향" name="keyword-list">
										<label for="keyword-9">입법동향</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-10" value="조약" name="keyword-list">
										<label for="keyword-10">조약</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-11" value="특허심판례" name="keyword-list">
										<label for="keyword-11">특허심판례</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-12" value="유럽법제동향" name="keyword-list">
										<label for="keyword-12">유럽법제동향</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-13" value="법률사전" name="keyword-list">
										<label for="keyword-13">법률사전</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-14" value="로펌" name="keyword-list">
										<label for="keyword-14">로펌</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-15" value="기업정보" name="keyword-list">
										<label for="keyword-15">기업정보</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-16" value="전문법률서식" name="keyword-list">
										<label for="keyword-16">전문법률서식</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-17" value="E-book" name="keyword-list">
										<label for="keyword-17">E-book</label>
									</li>
								</ul>
							</div>
							<div class="con-02">
								<ul class="resent-list">
									<li class="">
										<a href="">
											<p class="keyword">종합부동산세액</p>
											<p class="date">9.27</p>
										</a>
										<button></button>
									</li>
									<li class="">
										<a href="">
											<p class="keyword">부동산</p>
											<p class="date">9.27</p>
										</a>
										<button></button>
									</li>
									<li class="">
										<a href="">
											<p class="keyword">사업자가 과세사업</p>
											<p class="date">9.27</p>
										</a>
										<button></button>
									</li>
									<li class="">
										<a href="">
											<p class="keyword">부동산실권리자명의등기에관한법률</p>
											<p class="date">9.27</p>
										</a>
										<button></button>
									</li>
								</ul>
							</div>
						</div>
						<div class="keyword-footer clear">
							<div class="chk-dot-wrap c-right">
								<input type="checkbox" id="save-search-yn" value="Y" name="save-search-yn">
								<label for="save-search-yn">최근검색어저장 <span class="dot ml-5"></span></label>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ul class="c-right clear hd-r-list">
				<li class="on"><a href="../member/login.php">로그인</a></li>
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
