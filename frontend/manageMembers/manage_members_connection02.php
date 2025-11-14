<?php include '../include/header_sub_content.php'; ?>
<!--	시작 : 헤더	-->
<header class="ct-header">
	<div class="w1600 str clear">
		<h1 class="logo-div"><a href="../main/main_search.php"><img src="../images/common/logo_s.png" alt="로앤비"/></a>
		</h1>
		<h2 class="logo-txt"> | 로앤비 법조인명록 관리</h2>
		<div class="c-right logo-btn-list">
			<button class="btn btn-none btn-s"><div class="str pl-20"><span class="n-i-w15 n-i n-i-alert-cir str-ltc"></span>도움말</div></button
		</div>
	</div>
</header>
<!--	끝 : 헤더	-->
<div class="container-wrap container-writer">
	<div class="container-inner vh-m">
		<div class='container-writer-r'>
			<div class='pd'>
				<div class="mb-15 fc-ffffff fs-16">로앤비 법조인명록 수록범위</div>
				<ul class='ul-dot fc-ffffff gab15'>
					<li>
						<div class='dot-cell'>판사, 검사, 변호사(국내/외국), 법과대학교수, 로스쿨교수, 사법연수원생,법무관 등</div>
					</li>
				</ul>
				<div class="mt-25 mb-15 fc-ffffff fs-16">연결 주의사항</div>
				<ul class='ul-dot fc-ffffff gab15'>
					<li><div class='dot-cell'>로앤비 ID의 이름과 법조인명록의 이름이 일치해야 합니다.</div></li>
					<li><div class='dot-cell'>ID 이름이 외국어라면 법조인명록 이름도 외국어여야 합니다.</div></li>
					<li><div class='dot-cell'>만약 다른 사람으로 잘못 신청된 경우, 로앤비 운영자가 연결을 거절할 수 있습니다.</div></li>
				</ul>
				<div class='mt-30'>
					<a href='' class='btn-blue dis-b btn-m ta-c'><span>승소판결문 등록 신청</span></a>
					<a href='' class='btn-blue dis-b btn-m ta-c mt-15'><span>법조인정보 입력양식 다운로드</span></a>
					<a href='' class='btn-blue dis-b btn-m ta-c mt-15'><span>1:1 문의</span></a>
				</div>
			</div>
		</div>
		<div class="container-writer">
			<div class="pt-30 pb-50">
				<div class="w-700px m-auto">
					<div class='status_txt' id='VocProcessing'>내 아이디와 법조인 연계신청이 [접수]되어 진행되고 있습니다.</div>
					<div class='flow_box_group two regist_info'>
						<div><p>회원 정보</p><span>이름 : 이세진<br>ID : lsj1027</span></div>
						<div><p>법조인 정보</p><span id='DueLawyerInfo'>이세진 李世珍 <br>1986년생/ 여자/ (변호사시험 4)</span></div>
					</div>
					<div class='etc_info'>다른 문의가 있으신 경우 <a href='#'
					                                       onclick="javascript:OnetoOneContactUs('B01'); return false;">1:1
							문의</a>를 이용해 주세요.
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>
