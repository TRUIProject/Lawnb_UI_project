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
<div class="w550 login-wrap">
	<div class="logo ta-c mb-20">
		<img src="../images/common/logo_login.png" alt="logo_tr">
	</div>
	<div class="bg-border box-pd">
		<form name="LoginForm" id="LoginForm" action="">
			<div class="input-div">
				<label for="UserID">아이디</label>
				<input type="text" id="UserID" name="UserID" placeholder="ID" maxlength="20" class="input-css01" >
			</div>
			<div class="input-div">
				<label for="UserPW">비밀번호</label>
				<input type="password" id="UserPW" name="UserPW" placeholder="비밀번호" maxlength="20" class="input-css01" >
			</div>
			<div>
				<input type="checkbox" id="IDSave" class="mr-5"> ID 저장
			</div>
			<div class="mt-30 c-red">
				로앤비에 등록되어 있지 않은 ID 또는 잘못된 비밀번호입니다. <br>
				다시 입력해 주세요.
			</div>
			<div class="mt-30">
				<button class="btn-blue btn-l w-100p">로그인</button>
				<div class="or-div str">
					<p class="or-p str-center">또는</p>
					<hr>
				</div>
				<a href="#" onclick="javascript: kakaoauth(); return false;" class="btn-kakao btn-l w-100p">카카오 로그인</a>
			</div>
		</form>
		<div class="etc mt-20">
			<a href="#" onclick="javascript:MoveMembers('Member/SearchIDPW/'); return false;">ID/비밀번호 찾기</a>
			<a href="#" onclick="javascript:MoveMembers(''); return false;">회원가입</a>
			<a href="../../Support/SupportMain" target="Support_center">고객센터</a>
		</div>
	</div>
	<div class="img_tr mt-20">
		<img src="../images/test/testImg03.jpg" alt="logo_tr">
	</div>
	<div class="bg-gray-box mt-20">
		간편 로그인 계정은 통합회원 페이지 내 아이디 기본정보에서 변경 가능합니다. <br>
		로그인, ID/비밀번호 찾기가 원활하게 되지 않는 경우 고객센터로 문의해 주시기 바랍니다. cs.lawnb@tr.com
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
