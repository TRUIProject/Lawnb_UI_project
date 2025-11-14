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
				<div class='bg-border'>
					<div class='sub-main-pd'>
						<div class='sub-main-con-warp'>
							<div class='sub-main-con'>
								<div class='con doc'>
									<div class='input-box str'>
										<div class='dis-t'>
											<div class='dis-tr'>
												<div class='dis-th'>법조인</div>
												<div class='dis-tc'>홍길동 : 1994년생 / 남자 / 사법시험 1</div>
											</div>
										</div>
									</div>
									<div class='input-box str'>
										<div class='dis-t'>
											<div class='dis-tr'>
												<div class='dis-th'>사유선택 </div>
												<div class='dis-tc'>
													<p><label><input type='radio' name='reason'> 정보가 잘못 입력되었음(삭제 후 재등록)</label></p>
													<p class='mt-5'><label><input type='radio' name='reason'> 정보 제공 의사가 없음</label></p>
													<p class='mt-5'><label><input type='radio' name='reason'> 기타</label></p>
												</div>
											</div>
										</div>
									</div>
									<div class='input-box str'>
										<div class='dis-t'>
											<div class='dis-tr'>
												<div class='dis-th'>삭제 방안 선택 </div>
												<div class='dis-tc'>
													<p><label><input type='radio' name='reason'> 로앤비 사이트에서 내 노출 안함(검색 및 조회되지 않도록 함)</label></p>
													<p class="mt-5 mb-5"><label><input type='radio' name='reason'> 데이터 완전 삭제를 원함</label></p>
													<em class='c-red'>[참고] 로앤비는 정보삭제를 원하시는 법조인 분들의 정보가 재업데이트 되지 않도록 최선을 다 하고 있습니다. 하지만 데이터 완전삭제를 하는 경우 해당 법조인이 삭제요청을 원하신다는 정보 또한 남지 않기 때문에 오히려 정보가 재업데이트 되는 경우가 있습니다.</em>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class='con doc'>
									<div class='input-box str'>
										<p class='fs-16 fw-700'>신청자 연락처</p>
									</div>
									<div class='input-box str'>
										<div class='dis-t'>
											<div class='dis-tr'>
												<div class='dis-th'>이름<em class='c-red'>*</em></div>
												<div class='dis-tc'>
													<input type='text' class='input-css01'>
													<div class='mt-5'>
														<label><input type='checkbox'> 회원정보와 일치</label>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class='input-box str'>
										<div class='dis-t'>
											<div class='dis-tr'>
												<div class='dis-th'>이메일</div>
												<div class='dis-tc'>
													<input type='text' class='input-css01'>
												</div>
											</div>
										</div>
									</div>
									<div class='input-box str'>
										<div class='dis-t'>
											<div class='dis-tr'>
												<div class='dis-th'>전화번호</div>
												<div class='dis-tc'>
													<input type='text' class='input-css01'>
													<em class='txt_info'>실제 연락이 가능한 이메일과 전화번호를 남겨주세요. 처리여부를 메일로 보내드립니다.</em>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class='policy_agree' id='DivChkConnect1'>
									<p>법조인정보 제공 및 이용 동의</p>
									<div>법조인명록 등록 신청시 입력하는 법조인정보는 로앤비의 법조인명록에 등재되며, 이는 로앤비 사이트 및 모바일앱의 법조인 메뉴에 반영됩니다. <a href='#'
									                                                                                     onclick='javascript:Popup_LawyerAgree(); return false;'>상세내용</a>
									</div>
									<label><input type='checkbox' id='chkConnect1'>입력한 법조인 정보의 보관 및 이용에 동의합니다.</label>
								</div>
								<div class='btn-wrap ta-c'>
									<a href='#' class='btn-blue btn-m ta-c min-w-130px'>확인</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>
