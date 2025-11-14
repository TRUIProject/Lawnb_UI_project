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
								<li id='RegistLevel_1'><a href='#case_info' onclick="javascript:RegistLevel('1'); return false;">기본정보 <span class='fs-14 c-red'>필수</span></a></li>
								<li id='RegistLevel_2' class='on'><a href='#case_point' onclick="javascript:RegistLevel('2'); return false;">현직/겸직 <span class='fs-14 c-red'>필수</span></a></li>
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
							<div class='sub-main-con-warp'>
								<div class='sub-main-con'>
									<div class='con doc'>
										<div class='input-box str'>
											<p class="fs-16 fw-700">현직정보 <em class='txt_info'>현재 직업과 직장, 해당 직장의 연락처 등을 입력해 주세요.</em></p>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>직업<em class='c-red'>*</em></div>
													<div class='dis-tc'>
														<select id='select' class='select-css01'>
															<option>선택</option>
															<option>선택2</option>
															<option>선택3</option>
															<option>선택4</option>
														</select>
													</div>
												</div>
											</div>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>소속</div>
													<div class='dis-tc'>
														<input type='text' class='input-css01' placeholder="정식명칭 입력">
														<em class='txt_info'>예) 법무법인 케이엘파트너스, 광화문 법무법인</em>
													</div>
												</div>
											</div>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>직책</div>
													<div class='dis-tc clear'>
														<input type='text' class='input-css01' placeholder='소속내 담당직책'>
														<em class='txt_info'>예) 대표변호사, 파트너변호사, 수석 부장판사</em>
													</div>
												</div>
											</div>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>조직</div>
													<div class='dis-tc clear'>
														<input type='text' class='input-css01' placeholder='소속내 1단계조직 '>
														<div class='txt_info'>예) 민사부, 지적재산권 파트</div>
													</div>
												</div>
											</div>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>부서</div>
													<div class='dis-tc clear'>
														<input type='text' class='input-css01' placeholder='소속내 2단계조직 '>
														<div class='txt_info'>예) 민사40부(항고), 특허팀</div>
													</div>
												</div>
											</div>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>전화번호</div>
													<div class='dis-tc clear'><input type='text' class='input-css01'></div>
												</div>
											</div>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>팩스번호</div>
													<div class='dis-tc clear'><input type='text' class='input-css01'></div>
												</div>
											</div>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>이메일</div>
													<div class='dis-tc clear'><input type='text' class='input-css01'></div>
												</div>
											</div>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>홈페이지</div>
													<div class='dis-tc clear'><input type='text' class='input-css01'></div>
												</div>
											</div>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>주소</div>
													<div class='dis-tc clear'><input type='text' class='input-css01'></div>
												</div>
											</div>
										</div>
									</div>
									<div class='con doc'>
										<div class='input-box str'>
											<p class='fs-16 fw-700'>겸직정보 <em class='txt_info'>겸직이 있는 경우에만 입력해 주세요.</em></p>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>직업<em class='c-red'>*</em></div>
													<div class='dis-tc'>
														<select id='select' class='select-css01'>
															<option>선택</option>
															<option>선택2</option>
															<option>선택3</option>
															<option>선택4</option>
														</select>
													</div>
												</div>
											</div>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>소속</div>
													<div class='dis-tc'>
														<input type='text' class='input-css01' placeholder='정식명칭 입력'>
														<em class='txt_info'>예) 법무법인 케이엘파트너스, 광화문 법무법인</em>
													</div>
												</div>
											</div>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>직책</div>
													<div class='dis-tc clear'>
														<input type='text' class='input-css01' placeholder='소속내 담당직책'>
														<em class='txt_info'>예) 대표변호사, 파트너변호사, 수석 부장판사</em>
													</div>
												</div>
											</div>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>조직</div>
													<div class='dis-tc clear'>
														<input type='text' class='input-css01' placeholder='소속내 1단계조직 '>
														<div class='txt_info'>예) 민사부, 지적재산권 파트</div>
													</div>
												</div>
											</div>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>부서</div>
													<div class='dis-tc clear'>
														<input type='text' class='input-css01' placeholder='소속내 2단계조직 '>
														<div class='txt_info'>예) 민사40부(항고), 특허팀</div>
													</div>
												</div>
											</div>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>전화번호</div>
													<div class='dis-tc clear'><input type='text' class='input-css01'>
													</div>
												</div>
											</div>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>팩스번호</div>
													<div class='dis-tc clear'><input type='text' class='input-css01'>
													</div>
												</div>
											</div>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>이메일</div>
													<div class='dis-tc clear'><input type='text' class='input-css01'>
													</div>
												</div>
											</div>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>홈페이지</div>
													<div class='dis-tc clear'><input type='text' class='input-css01'>
													</div>
												</div>
											</div>
										</div>
										<div class='input-box str'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-th'>주소</div>
													<div class='dis-tc clear'><input type='text' class='input-css01'>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class='con doc'>
										<div class='input-box str'>
											<p class='fs-16 fw-700'>현직/겸직 추가 신청사항 <em class='txt_info'>입력 양이 많거나 별도 요청이 있으면 입력해 주세요.</em></p>
										</div>
										<div class='input-box str'>
											<textarea rows='30' class='input-css01'></textarea>
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
