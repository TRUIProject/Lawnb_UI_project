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
					<div id='ModConnTitleLayer' class='status_txt'>회원님 ID와 아래의 법조인을 연결합니다.</div>
					<ul class='content-ul'>
						<li class='str'>
							<div class='li-con pl-none'>
								<div class='clear'>
									<div class='c-left img-div-wrap'>
										<div class='img-circle'
										     style="background-image: url('../images/test/testImg01.jpg')"></div>
									</div>
									<div class='c-left txt-div-wrap'>
										<a href='' class='txt01'>도진수 (2002년생 / 남자 / 변호사시험 7)</a>
										<p class='fs-14 mt-5'>현직 : 변호사</p>
										<p class='fs-14 mt-5'>소속 : 법무법인 로앤비</p>
										<div class='mt-5'><span class='badge-sky badge-mid'>승소판례11건</span></div>
									</div>
								</div>
							</div>
						</li>
					</ul>
					<div id='ConnectAlertLayer' class='etc_info'>본인의 법조인이 맞는지 다시 한번 확인해 주세요. <br>만약 다른 법조인으로 잘못 신청되는 경우, 로앤비
						운영자가 임의로 연결을 거절하거나 추후 삭제할 수 있습니다.
					</div>
					<div class='policy_agree' id='DivChkConnect1'>
						<p>법조인정보 제공 및 이용 동의</p>
						<div>법조인명록 등록 신청시 입력하는 법조인정보는 로앤비의 법조인명록에 등재되며, 이는 로앤비 사이트 및 모바일앱의 법조인 메뉴에 반영됩니다. <a href='#'
						                                                                                     onclick='javascript:Popup_LawyerAgree(); return false;'>상세내용</a>
						</div>
						<label><input type='checkbox' id='chkConnect1'>입력한 법조인 정보의 보관 및 이용에 동의합니다.</label>
					</div>
					<div class='policy_agree'>
						<p>법조인정보 신청 시 수집항목의 이용 및 보관 동의</p>
						<div>법조인명록의 신규등록/수정/연결/삭제 및 승소판결문 등록 신청시에 입력하는 연락처 및 입력내용은 요청하신 사항을 처리하고, 진행상황에 대한 안내 및 그 내역을 보관하는
							용도로 사용됩니다. <a href='#' onclick='javascript:Popup_LawyerCollection(); return false;'>상세내용</a>
						</div>
						<label><input type='checkbox' id='chkConnect2'>입력한 정보의 보관 및 사용에 동의합니다.</label>
					</div>
					<div class='mt-30 ta-c'>
						<a href='manage_members_add01.php' class='btn-none btn-m ta-c min-w-130px'>다음단계</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>
