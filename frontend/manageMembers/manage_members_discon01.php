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
		<div class='container-writer'>
			<div class='pt-20'>
				<div class='w-700px m-auto'>
					<div class='status_txt'>연결해제 신청</div>
					<div class='flow_box_group two regist_info'>
						<div><p>회원 정보</p><span>이름 : 이세진<br>ID : lsj1027</span></div>
						<div><p>법조인 정보</p><span id='DueLawyerInfo'>이세진 李世珍 <br>1986년생/ 여자/ (변호사시험 4)</span></div>
					</div>
					<div class="lh-2p">
						<p>위 회원 ID와 법조인명록 연결해제를 신청합니다</p>
						<p><label><input type='radio' name='reason'> 연결이 잘못 신청되었음</label></p>
						<p><label><input type='radio' name='reason'> ID를 변경하고자 함(탈퇴 후 재가입)</label></p>
						<p><label><input type='radio' name='reason'> ID 사용자가 퇴사하였거나 퇴사할 예정임</label></p>
						<p><label><input type='radio' name='reason'> 이름 개명으로 변경이 필요함</label></p>
						<p><label><input type='radio' name='reason'> 기타</label></p>
					</div>
					<div class='policy_agree' id='DivChkConnect1'>
						<p>법조인정보 제공 및 이용 동의</p>
						<div>법조인명록 등록 신청시 입력하는 법조인정보는 로앤비의 법조인명록에 등재되며, 이는 로앤비 사이트 및 모바일앱의 법조인 메뉴에 반영됩니다. <a href='#'
						                                                                                     onclick='javascript:Popup_LawyerAgree(); return false;'>상세내용</a>
						</div>
						<label><input type='checkbox' id='chkConnect1'>입력한 법조인 정보의 보관 및 이용에 동의합니다.</label>
					</div>
					<div class='mt-30 ta-c'>
						<a href='manage_members_add01.php' class='btn-blue btn-m ta-c min-w-130px'>완료</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>
