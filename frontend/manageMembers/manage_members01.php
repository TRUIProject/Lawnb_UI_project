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
				<div class="fw-700 ta-c mb-30">내 법조인명록이 로앤비 법조인명록에 등록되어 있는지 확인해보세요.</div>
				<div class="ta-c mb-45">
					<div class='dis-ib bg-gray-b p10-15 border-r-10 fs-14'>
						수록범위 : 판사, 검사, 변호사(국내/외국), 법과대학교수, 로스쿨교수, 사법연수원생,법무관 등
					</div>
				</div>
				<div class='flex-container gab30 flex-num-3 h-stretch'>
					<div class='flex-item flex-1 bg-border box-shadow manage_member_box'>
						<div class='ta-c pt-10'>
							<div class='mb-25'>
								<div class='n-i-link n-i-w40 m-auto bg-blue'></div>
							</div>
							<div class='fs-18 c-blue mb-25'>내 법조인 연결 신청</div>
							<div class='fs-16 c-gray-l'>내 법조인 명록이 있는지 확인 후<br> 연결신청합니다.<br>로앤비 ID의 이름과 법조인명록의<br> 이름이 일치해야합니다.</div>
						</div>
						<div class='mt-40 ta-c'>
							<a href='manage_members02.php' class='btn-none btn-m ta-c w-130px m-auto'>신청</a>
						</div>
					</div>
					<div class='flex-item flex-1 bg-border box-shadow manage_member_box'>
						<div class='ta-c pt-10'>
							<div class='mb-25'>
								<div class='n-i-user-plus n-i-w40 m-auto bg-blue'></div>
							</div>
							<div class='fs-18 c-blue mb-25'>신규등록 신청</div>
							<div class='fs-16 c-gray-l'>내 법조인 명록이 없으면 신규등록을<br> 신청해 주세요.<br>담당자가 확인 후 신규 등록해<br> 드립니다.<br>내 법조인명록 삭제 신청</div>
						</div>
						<div class='mt-40 ta-c'>
							<a href='manage_members_add.php' class='btn-none btn-m ta-c w-130px m-auto'>신청</a>
						</div>
					</div>
					<div class='flex-item flex-1 bg-border box-shadow manage_member_box'>
						<div class='ta-c pt-10'>
							<div class='mb-25'>
								<div class='n-i-user-minus n-i-w40 m-auto bg-blue'></div>
							</div>
							<div class='fs-18 c-blue mb-25'>내 법조인명록 삭제 신청</div>
							<div class='fs-16 c-gray-l'>내 법조인명록 삭제를 원하시면<br> 신청해주세요.<br>본인의 법조인명록에 한해서<br> 삭제신청할 수 있습니다.</div>
						</div>
						<div class='mt-40 ta-c'>
							<a href='manage_members_del01.php' class='btn-none btn-m ta-c w-130px m-auto'>신청</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>
