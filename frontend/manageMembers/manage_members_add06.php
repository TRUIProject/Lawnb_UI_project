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
								<li id='RegistLevel_4'><a href='#law_refer' onclick="javascript:RegistLevel('4'); return false;">학교정보</a></li>
								<li id='RegistLevel_5'><a href='#law_refer' onclick="javascript:RegistLevel('5'); return false;">경력정보</a></li>
								<li id='RegistLevel_6' class='on'><a href='#law_refer' onclick="javascript:RegistLevel('6'); return false;">전문활동</a></li>
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
										<div class='input-box clear'>
											<p class='c-left fs-16 fw-700'>전문활동</p>
											<div class='c-right'>
												<button class="btn btn-none btn-m" onclick='addProActivitiesRow()'>전문활동 추가</button>
											</div>
										</div>
										<div class='input-box str'>
											<table id="pro-activities-table" class='table-css02'>
												<colgroup>
													<col width=''>
													<col width=''>
													<col width=''>
													<col width='130px'>
												</colgroup>
												<thead>
												<tr>
													<th>종류선택</th>
													<th>내용</th>
													<th>기관</th>
													<th>날짜</th>
												</tr>
												</thead>
												<tbody>
												<tr>
													<td>
														<select class='select-css01' name='etc_information[0]'>
															<option value='' selected='selected'>선택</option>
															<option value='counsel'>자문실적</option>
															<option value='award'>수상</option>
															<option value='award'>임명</option>
															<option value='news'>보도기사</option>
															<option value='book'>저서</option>
															<option value='etc'>논문기고</option>
														</select>
													</td>
													<td><input type='text' class='input-css01'></td>
													<td><input type='text' class='input-css01'></td>
													<td><input type='text' class='input-css01' placeholder='예) 2001.02'></td>
												</tr>
												</tbody>
											</table>
										</div>
									</div>
									<div class='con doc max-w100'>
										<div class='input-box str'>
											<p class='fs-16 fw-700'>전문활동 추가 요청사항 <em class='txt_info'>입력 양이 많거나 별도 요청이 있으면 입력해 주세요.</em></p>
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
    let proActivitiesIndex = 0;
    // 경력 행 추가 함수 (전역 범위)
    function addProActivitiesRow() {
        proActivitiesIndex++;
        const rowHtml = `
			<tr>
				<td>
					<select class='select-css01' name='etc_information[${proActivitiesIndex}]'>
						<option value='' selected='selected'>선택</option>
						<option value='counsel'>자문실적</option>
						<option value='award'>수상</option>
						<option value='award'>임명</option>
						<option value='news'>보도기사</option>
						<option value='book'>저서</option>
						<option value='etc'>논문기고</option>
					</select>
				</td>
				<td><input type='text' class='input-css01'></td>
				<td><input type='text' class='input-css01'></td>
				<td><input type='text' class='input-css01' placeholder='예) 2001.02'></td>
			</tr>
  `;
        $('#pro-activities-table tbody').append(rowHtml);
    }
</script>
</body>
</html>
