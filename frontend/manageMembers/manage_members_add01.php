<?php include '../include/header_sub_content.php'; ?>
<!--	시작 : 헤더	-->
<header class="ct-header">
	<div class="w1600 str clear">
		<h1 class="logo-div"><a href="../main/main_search.php"><img src="../images/common/logo_s.png" alt="로앤비"/></a>
		</h1>
		<h2 class="logo-txt"> | 로앤비 법조인명록 관리</h2>
		<div class="c-right logo-btn-list">
			<button class="btn btn-none btn-s">
				<div class="str pl-20"><span class="n-i-w15 n-i n-i-alert-cir str-ltc"></span>도움말</div>
			</button
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
					<li>
						<div class='dot-cell'>로앤비 ID의 이름과 법조인명록의 이름이 일치해야 합니다.</div>
					</li>
					<li>
						<div class='dot-cell'>ID 이름이 외국어라면 법조인명록 이름도 외국어여야 합니다.</div>
					</li>
					<li>
						<div class='dot-cell'>만약 다른 사람으로 잘못 신청된 경우, 로앤비 운영자가 연결을 거절할 수 있습니다.</div>
					</li>
				</ul>
				<div class='mt-30'>
					<a href='' class='btn-blue dis-b btn-m ta-c'><span>승소판결문 등록 신청</span></a>
					<a href='' class='btn-blue dis-b btn-m ta-c mt-15'><span>법조인정보 입력양식 다운로드</span></a>
					<a href='' class='btn-blue dis-b btn-m ta-c mt-15'><span>1:1 문의</span></a>
				</div>
			</div>
		</div>
		<div class="str mb-50">
			<div class='container-left'>
				<div class='scroll-y'>
					<div class='container-left-pd'>
						<div class='index-list'>
							<ol class='index-ul'>
								<li id='RegistLevel_1' class='on'><a href='#case_info' onclick="javascript:RegistLevel('1'); return false;">기본정보 <span class='fs-14 c-red'>필수</span></a></li>
								<li id='RegistLevel_2'><a href='#case_point' onclick="javascript:RegistLevel('2'); return false;">현직/겸직 <span class='fs-14 c-red'>필수</span></a></li>
								<li id='RegistLevel_3'><a href='#law_refer' onclick="javascript:RegistLevel('3'); return false;">시험정보</a></li>
								<li id='RegistLevel_4'><a href='#law_refer' onclick="javascript:RegistLevel('4'); return false;">학교정보</a></li>
								<li id='RegistLevel_5'><a href='#law_refer' onclick="javascript:RegistLevel('5'); return false;">경력정보</a></li>
								<li id='RegistLevel_6'><a href='#law_refer' onclick="javascript:RegistLevel('6'); return false;">전문활동</a></li>
								<li id='RegistLevel_7'><a href='#law_refer' onclick="javascript:RegistLevel('7'); return false;">기타/첨부파일</a></li>
							</ol>
						</div>
					</div>
				</div>
			</div>
			<div class="container-writer pl-280">
				<div class="pt-20">
					<div class='bg-border'>
						<div class='sub-main-pd'>
							<div class='t_name'>이세진<span class='text_ness'>이름  수정불가</span></div>
							<div class='txt_info mb-20'>
								기본정보의 전화번호/홈페이지/이메일/주소는 직장이 아닌 개인적인 연락처를 의미합니다. <br>
								휴직 중이거나 개인 홈페이지 등을 운영하는 경우에만 입력해 주세요.
							</div>
							<div class='sub-main-con-warp'>
								<div class='sub-main-con'>
									<div class='con doc'>
										<div class='input-box str'>
											<div class='img str'>
												<img id='PreviewImg' src='http://app.lawnb.com/lbmobileweb/images/tr_lawyer_default.png' alt='사진'>
												<div class='btn_img_add'>
													<span onclick='javascript:ImgAdd();'>사진변경</span>
													<input type='file' id='imagefile' accept='.jpg,.jpeg,.png,.bmp' onchange='ImageCheck();' style='display:none'>
												</div>
											</div>
											<em class='txt_info'>gif, jpg, png 가능, 1:1비율, 최소사이즈 : 150px , 5Mbyte 이하</em>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>
														<label for='kor-name'>한자이름</label>
													</div>
													<div class='dis-tc'>
														<input id='kor-name' type='text' class='input-css01'>
													</div>
												</div>
											</div>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>
														<label for='eng-name'>영문이름</label>
													</div>
													<div class='dis-tc'>
														<input id='eng-name' type='text' class='input-css01'>
													</div>
												</div>
											</div>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>성별<em class='c-red'>*</em></div>
													<div class='dis-tc clear'>
														<label class="mr-10"><input type='radio' name="gender" checked> 남</label>
														<label><input type='radio' name="gender"> 여</label>
													</div>
												</div>
											</div>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>
														<label for='birth-year'>출생년도</label>
													</div>
													<div class='dis-tc'>
														<div class='dis-t'>
															<div class='dis-tr'>
																<div class='dis-tc pr-5'><input id='birth-year' type='text' class='input-css01'></div>
																<div class='dis-tc ta-c'>년</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>
														<label for='user-ph'>전화번호</label>
													</div>
													<div class='dis-tc clear'>
														<input id='user-ph' type='text' class='input-css01'>
													</div>
												</div>
											</div>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>
														<label for='user-homepage'>홈페이지</label>
													</div>
													<div class='dis-tc'>
														<input id='user-homepage' type='text' class='input-css01'>
													</div>
												</div>
											</div>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>
														<label for='user-email'>이메일</label>
													</div>
													<div class='dis-tc'>
														<input id='user-email' type='text' class='input-css01'>
													</div>
												</div>
											</div>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>
														<label for='user-address'>주소</label>
													</div>
													<div class='dis-tc'>
														<input id='user-address' type='text' class='input-css01'>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class='btn-wrap ta-c'>
										<a href='#' class='btn-none btn-m ta-c min-w-130px mr-5'>다음단계</a>
										<a href='#' class='btn-blue btn-m ta-c min-w-130px'>작성완료</a>
									</div>
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
