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
								<li id='RegistLevel_2'><a href='#case_point' onclick="javascript:RegistLevel('2'); return false;">현직/겸직 <span class='fs-14 c-red'>필수</span></a></li>
								<li id='RegistLevel_3'><a href='#law_refer' onclick="javascript:RegistLevel('3'); return false;">시험정보</a></li>
								<li id='RegistLevel_4' class='on'><a href='#law_refer' onclick="javascript:RegistLevel('4'); return false;">학교정보</a></li>
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
									<div class='con doc max-w100'>
										<div class='input-box str'>
											<p class='fs-18 fw-700'>학교정보</p>
										</div>
										<div class='input-box str'>
											<p class='fs-16 fw-700'>고등학교 <em class='txt_info'>고등학교는 졸업한 학교 하나만 입력해 주세요.</em></p>
										</div>
										<div class='input-box str'>
											<table class='table-css02'>
												<colgroup>
													<col width='100px'>
													<col width=''>
													<col width='100px'>
													<col width='100px'>
												</colgroup>
												<thead>
													<tr>
														<th>국내/국외</th>
														<th>학교명</th>
														<th>입학년도</th>
														<th>졸업년도</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<label class='mr-10'><input type='radio' name='high-school-loc' checked=''> 국내</label><br>
															<label class='mr-10'><input type='radio' name='high-school-loc'> 국외</label>
														</td>
														<td>
															<input type='text' class='input-css01'>
															<div class='txt_info'>예) 경상남도 거제중앙고등학교</div>
														</td>
														<td>
															<input type='text' class='input-css01'>
															<div class='txt_info'>예) 2001.03</div>
														</td>
														<td>
															<input type='text' class='input-css01'>
															<div class='txt_info'>예) 2001.02</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<div class='con doc max-w100'>
										<div class='input-box clear'>
											<p class='c-left fs-16 fw-700'>대학교</p>
											<div class='c-right'>
												<button class="btn btn-none btn-m" onclick='addUniversityRow()'>대학교 추가</button>
											</div>
										</div>
										<div class='input-box str'>
											<table id="university-table" class='table-css02'>
												<colgroup>
													<col width='100px'>
													<col width=''>
													<col width='100px'>
													<col width='100px'>
												</colgroup>
												<thead>
												<tr>
													<th>국내/국외</th>
													<th>학교명/전공정보</th>
													<th>입학년도</th>
													<th>졸업년도</th>
												</tr>
												</thead>
												<tbody>
												<tr>
													<td>
														<label class='mr-10'><input type='radio' name='university-loc-01' checked=''> 국내</label><br>
														<label class='mr-10'><input type='radio' name='university-loc-01'> 국외</label>
													</td>
													<td>
														<div class='dis-t'>
															<div class='dis-tr'>
																<div class='dis-tc'><input type='text' class='input-css01'></div>
																<div class='dis-tc div-dash'>/</div>
																<div class='dis-tc'><input type='text' class='input-css01'></div>
															</div>
														</div>
													</td>
													<td>
														<input type='text' class='input-css01'>
														<div class='txt_info'>예) 2001.03</div>
													</td>
													<td>
														<input type='text' class='input-css01'>
														<div class='txt_info'>예) 2001.02</div>
													</td>
												</tr>
												</tbody>
											</table>
											<div class='txt_info'>대학교 입력예<br>
												예1 : 서울대학교 법과대학 사법학과<br>
												예2 : 중국 흑룡강대학교 법학과<br>
												예3 : New York University School of Law (Juris Doctor)
											</div>
										</div>
									</div>
									<div class='con doc max-w100'>
										<div class='input-box clear'>
											<p class='c-left fs-16 fw-700'>대학원</p>
											<div class='c-right'>
												<button class='btn btn-none btn-m' onclick='addGraduateRow()'>대학원 추가
												</button>
											</div>
										</div>
										<div class='input-box str'>
											<table id='graduate-table' class='table-css02'>
												<colgroup>
													<col width="100px">
													<col width="">
													<col width='100px'>
													<col width='100px'>
													<col width='100px'>
													<col width='100px'>
												</colgroup>
												<thead>
												<tr>
													<th>국내/국외</th>
													<th>학교명/전공정보</th>
													<th>수료과정</th>
													<th>수료여부</th>
													<th>입학년도</th>
													<th>졸업년도</th>
												</tr>
												</thead>
												<tbody>
												<tr>
													<td>
														<label class='mr-10'><input type='radio' name='graduate-loc-01' checked=''> 국내</label><br>
														<label class='mr-10'><input type='radio' name='graduate-loc-01'> 국외</label>
													</td>
													<td>
														<div class='dis-t'>
															<div class='dis-tr'>
																<div class='dis-tc'><input type='text' class='input-css01'></div>
																<div class='dis-tc div-dash'>/</div>
																<div class='dis-tc'><input type='text' class='input-css01'></div>
															</div>
														</div>
													</td>
													<td>
														<label class='mr-10'><input type='radio' name='degree-01' checked=''> 석사</label><br>
														<label class='mr-10'><input type='radio' name='degree-01'> 박사</label>
													</td>
													<td>
														<label class='mr-10'><input type='radio' name='completion-status-01' checked=''> 수료</label><br>
														<label class='mr-10'><input type='radio' name='completion-status-01'> 미수료</label>
													</td>
													<td>
														<input type='text' class='input-css01'>
														<div class='txt_info'>예) 2001.03</div>
													</td>
													<td>
														<input type='text' class='input-css01'>
														<div class='txt_info'>예) 2001.02</div>
													</td>
												</tr>
												</tbody>
											</table>
											<div class='txt_info'>대학원 입력예<br>
												예1 : 서울대학교 법과대학원 세법학<br>
												예2 : 중국 북경대학교 법학원 경제법학(회사법 전공)<br>
												예2 : London Business School, Investment Management Programme (LL.M)
											</div>
										</div>
									</div>
									<div class='con doc max-w100'>
										<div class='input-box clear'>
											<p class='c-left fs-16 fw-700'>로스쿨</p>
											<div class='c-right'>
												<button class='btn btn-none btn-m' onclick='addLawSchoolRow()'>로스쿨 추가
												</button>
											</div>
										</div>
										<div class='input-box str'>
											<table id='law-school-table' class='table-css02'>
												<colgroup>
													<col width='100px'>
													<col width=''>
													<col width='100px'>
													<col width='100px'>
													<col width='100px'>
													<col width='100px'>
												</colgroup>
												<thead>
												<tr>
													<th>국내/국외</th>
													<th>학교명/전공정보</th>
													<th>수료과정</th>
													<th>수료여부</th>
													<th>입학년도</th>
													<th>졸업년도</th>
												</tr>
												</thead>
												<tbody>
												<tr>
													<td>
														<label class='mr-10'><input type='radio' name='law-school-loc-01' checked=''> 국내</label><br>
														<label class='mr-10'><input type='radio' name='law-school-loc-01'> 국외</label>
													</td>
													<td>
														<div class='dis-t'>
															<div class='dis-tr'>
																<div class='dis-tc'><input type='text'
																                           class='input-css01'></div>
																<div class='dis-tc div-dash'>/</div>
																<div class='dis-tc'><input type='text'
																                           class='input-css01'></div>
															</div>
														</div>
													</td>
													<td>
														<label class='mr-10'><input type='radio' name='law-school-degree-01'
														                            checked=''> 석사</label><br>
														<label class='mr-10'><input type='radio' name='law-school-degree-01'>
															박사</label>
													</td>
													<td>
														<label class='mr-10'><input type='radio'
														                            name='law-school-completion-status-01'
														                            checked=''> 수료</label><br>
														<label class='mr-10'><input type='radio'
														                            name='law-school-completion-status-01'>
															미수료</label>
													</td>
													<td>
														<input type='text' class='input-css01'>
														<div class='txt_info'>예) 2001.03</div>
													</td>
													<td>
														<input type='text' class='input-css01'>
														<div class='txt_info'>예) 2001.02</div>
													</td>
												</tr>
												</tbody>
											</table>
											<div class='txt_info'>
												로스쿨 입력예<br>
												예1 : 성균관대학교 법학전문대학원<br>
												예2 : Indiana University at Bloomington School of Law (LL.M.)
											</div>
										</div>
									</div>
									<div class='con doc max-w100'>
										<div class='input-box str'>
											<p class='fs-16 fw-700'>학교정보 추가 요청사항 <em class='txt_info'>입력 양이 많거나 별도 요청이 있으면 입력해 주세요.</em></p>
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
<script>
    let universityIndex = 1;
    let graduateIndex = 1;
    let lawSchoolIndex = 1;
    // 대학교 행 추가 함수 (전역 범위)
    function addUniversityRow() {
        universityIndex++;
        const indexStr = universityIndex.toString().padStart(2, '0');
        const rowHtml = `
    <tr>
      <td>
        <label class='mr-10'><input type='radio' name='university-loc-${indexStr}' checked> 국내</label><br>
        <label class='mr-10'><input type='radio' name='university-loc-${indexStr}'> 국외</label>
      </td>
      <td>
        <div class='dis-t'>
          <div class='dis-tr'>
            <div class='dis-tc'><input type='text' class='input-css01'></div>
            <div class='dis-tc div-dash'>/</div>
            <div class='dis-tc'><input type='text' class='input-css01'></div>
          </div>
        </div>
      </td>
      <td>
        <input type='text' class='input-css01'>
        <div class='txt_info'>예) 2001.03</div>
      </td>
      <td>
        <input type='text' class='input-css01'>
        <div class='txt_info'>예) 2001.02</div>
      </td>
    </tr>
  `;
        $('#university-table tbody').append(rowHtml);
    }
    // 대학원 행 추가 함수 (전역 범위)
    function addGraduateRow() {
        graduateIndex++;
        const indexStr = graduateIndex.toString().padStart(2, '0');
        const rowHtml = `
    <tr>
		<td>
			<label class='mr-10'><input type='radio' name='graduate-loc-${indexStr}' checked=''> 국내</label><br>
			<label class='mr-10'><input type='radio' name='graduate-loc-${indexStr}'> 국외</label>
		</td>
		<td>
			<div class='dis-t'>
				<div class='dis-tr'>
					<div class='dis-tc'><input type='text' class='input-css01'></div>
					<div class='dis-tc div-dash'>/</div>
					<div class='dis-tc'><input type='text' class='input-css01'></div>
				</div>
			</div>
		</td>
		<td>
			<label class='mr-10'><input type='radio' name='degree-${indexStr}' checked=''> 석사</label><br>
			<label class='mr-10'><input type='radio' name='degree-${indexStr}'> 박사</label>
		</td>
		<td>
			<label class='mr-10'><input type='radio' name='completion-status-${indexStr}' checked=''> 수료</label><br>
			<label class='mr-10'><input type='radio' name='completion-status-${indexStr}'> 미수료</label>
		</td>
		<td>
			<input type='text' class='input-css01'>
			<div class='txt_info'>예) 2001.03</div>
		</td>
		<td>
			<input type='text' class='input-css01'>
			<div class='txt_info'>예) 2001.02</div>
		</td>
	</tr>
  `;
        $('#graduate-table tbody').append(rowHtml);
    }
    // 로스쿨 행 추가 함수 (전역 범위)
    function addLawSchoolRow() {
        lawSchoolIndex++;
        const indexStr = lawSchoolIndex.toString().padStart(2, '0');
        const rowHtml = `
    <tr>
		<td>
			<label class='mr-10'><input type='radio' name='law-school-loc-${indexStr}' checked=''> 국내</label><br>
			<label class='mr-10'><input type='radio' name='law-school-loc-${indexStr}'> 국외</label>
		</td>
		<td>
			<div class='dis-t'>
				<div class='dis-tr'>
					<div class='dis-tc'><input type='text'
					                           class='input-css01'></div>
					<div class='dis-tc div-dash'>/</div>
					<div class='dis-tc'><input type='text'
					                           class='input-css01'></div>
				</div>
			</div>
		</td>
		<td>
			<label class='mr-10'><input type='radio' name='law-school-degree-${indexStr}'
			                            checked=''> 석사</label><br>
			<label class='mr-10'><input type='radio' name='law-school-degree-${indexStr}'>
				박사</label>
		</td>
		<td>
			<label class='mr-10'><input type='radio'
			                            name='law-school-completion-status-${indexStr}'
			                            checked=''> 수료</label><br>
			<label class='mr-10'><input type='radio'
			                            name='law-school-completion-status-${indexStr}'>
				미수료</label>
		</td>
		<td>
			<input type='text' class='input-css01'>
			<div class='txt_info'>예) 2001.03</div>
		</td>
		<td>
			<input type='text' class='input-css01'>
			<div class='txt_info'>예) 2001.02</div>
		</td>
	</tr>
  `;
        $('#law-school-table tbody').append(rowHtml);
    }
</script>
</body>
</html>
