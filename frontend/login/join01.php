<?php
$url = "http://localhost/";
$title = "로앤비";
?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<title><?php echo $title; ?></title>
	<link rel="apple-touch-icon" href="../images/common/favicon.png">
	<link rel="shortcut icon" type="image/x-icon" href="../images/common/favicon.png"/>

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
<div class="w850 login-wrap">
	<div class="logo ta-c mb-60">
		<img src="../images/common/logo_login.png" alt="logo_tr">
	</div>
	<div class="flex-container gab15 flex-num-2">
		<div class="flex-item flex-1 bg-border box-pd02">
			<div class="ta-c pt-10">
				<div class="mb-10">
					<div class="n-i-user n-i-w35 m-auto"></div>
				</div>
				<div class="fw-700 mb-15">개인회원</div>
				<div class="c-58 mb-10 lh-2p min-h-90px">개인명의로 가입하는 일반 회원제도입니다. <br>외국인도 가입이 가능합니다.</div>
			</div>
			<div class="mt-20 ta-c">
				<button class="btn-blue btn-l ta-c w-300px m-auto">개인회원 가입</button>
			</div>
		</div>
		<div class="flex-item flex-1 bg-border box-pd02">
			<div class="ta-c pt-10">
				<div class="mb-10">
					<div class="n-i-user n-i-w35 m-auto"></div>
				</div>
				<div class="fw-700 mb-15">법인회원</div>
				<div class="c-58 mb-10 lh-2p min-h-90px">법인 및 개인사업자를 위한 회원제도입니다. <br>ID의 소유주는 법인이며, <br>결제시 법인명의의 세금계산서를 발행합니다.</div>
			</div>
			<div class="mt-20 ta-c">
				<button class="btn-blue btn-l ta-c w-300px m-auto">개인회원 가입</button>
			</div>
		</div>
	</div>
	<div class="mt-60 mb-60 ta-c">
		<ul class="ul-dot dis-ib ta-l">
			<li class="mb-20">
				<div class="dot-cell">
					<a href="https://www.lawnb.com" target="_blank" class="c-blue dis-ib mr-30 fs-14"><strong>로앤비 법률정보</strong></a>
					<a href="https://www.lawnb.com/Support/SupportScale" target="Support_center" class="dis-ib mr-30 fs-14">로앤비 회원등급별 제공범위</a>
					<a href="https://www.lawnb.com/Support/SupportPrice" target="Support_center" class="dis-ib mr-30 fs-14">로앤비 회원체계 및 가격 안내</a>
				</div>
			</li>
			<li>
				<div class="dot-cell">
					<a href="http://www.lawnbedu.com" target="_blank" class="c-blue dis-ib mr-30 fs-14"><strong>로앤비 교육센터</strong></a>
					<a href="https://www.lawnbedu.com/Judicial" target="_edu" class="dis-ib mr-30 fs-14">단기과정 기업법무</a>
					<a href="https://www.lawnbedu.com/Practice" target="_edu" class="dis-ib mr-30 fs-14">자격과정 기업법무실무능력</a>
					<a href="https://www.lawnbedu.com/UsaLawyer" target="_edu" class="dis-ib mr-30 fs-14">자격과정 미국변호사시험</a>
				</div>
			</li>
		</ul>
	</div>
	<div id="footer">
		<div class="mt-30 ta-c">
			<div>
				Copyright@ <em class="c-orange">Thomson Reuters Korea</em>. All Rights Reserved.
			</div>
			<div class="mt-20 img_tr">
				<img src="../images/common/logo_tr.png" alt="logo_tr">
			</div>
		</div>
	</div>
</div>
</body>
</html>
