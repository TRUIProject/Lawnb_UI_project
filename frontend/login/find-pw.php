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
	<div class="btn-wrap ta-c mb-20">
		<a href="find-id.php">아이디찾기</a>
		<a href="find-pw.php" class="on">비밀번호찾기</a>
	</div>
	<div class="bg-border box-pd02">
		<div class="ta-c pt-20">
			<div class="fw-700 mb-15">
				비밀번호 찾기
			</div>
			<div class="c-blue mb-30">
				회원정보에 입력한 이름, ID, 휴대폰번호 또는 이메일을 입력해 주세요.
			</div>
		</div>
		<form name="LoginForm" id="LoginForm" action="" class="pb-20">
			<div class="input-div">
				<label for="UserName">이름</label>
				<input type="text" id="UserName" name="UserName" placeholder="이름" maxlength="20" class="input-css01" >
			</div>
			<div class="input-div">
				<label>
					<input type="radio" name="sid_Type" value="Hp" checked="checked" class="mr-5">휴대폰
					<input type="radio" name="sid_Type" value="Email" class="ml-10 mr-5">이메일
				</label>
				<input type="password" id="UserPW" name="UserPW" placeholder="휴대폰번호는 - 없이 입력하세요" maxlength="20" class="input-css01" >
			</div>
			<div class="mt-30 ta-c">
				<button class="btn-blue btn-m min-w-130px ta-c">확인</button>
			</div>
		</form>
	</div>
	<div class="bg-border box-pd02 mt-30">
		<div class="ta-c">
			<div class="fw-700 mb-15">
				비밀번호 찾기
			</div>
			<div class="c-blue mb-30">
				휴대폰 또는 이메일로 임시비밀번호를 전송해 드립니다.
			</div>
		</div>
		<div class="bg-gray-border">
			<p>
				<input type="radio" name="tel" checked="checked" class="mr-5">이메일 : queenzerg**@naver.com
			</p>
			<p class="mt-10">
				<input type="radio" name="tel" class="mr-5">휴대폰 : 010554754**
			</p>
		</div>
		<div class="mt-20 ta-c">
			<button class="btn-blue btn-m min-w-130px ta-c">임시비밀번호 발송</button>
		</div>
		<div class="mt-30 fs-12 c-gray-l">
			회원정보에 기재된 이메일 또는 휴대폰으로 임시비밀번호를 전송합니다. <br>
			뒤의 2자리는 **처리하여 표시하였습니다. <br>
			이메일과 휴대폰 모두 현재 사용중이 아닌 경우 cs.lawnb@tr.com 로 연락하여 주십시오.
		</div>
	</div>
	<div class="bg-gray-border mt-20 ta-c c-blue">
		로그인, ID/비밀번호 찾기가 원활하게 되지 않는 경우 <br>
		고객센터로 문의해 주시기 바랍니다. <br>
		cs.lawnb@tr.com
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
