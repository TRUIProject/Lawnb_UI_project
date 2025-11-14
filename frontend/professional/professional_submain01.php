<?php include '../include/header_sub.php'; ?>
<div class="container-wrap">
	<div class="container-inner">
		<div class="container-right">
			<div class="pr-2">
				<button class="btn-none w-100p btn-l dis-b btn-shadow">법조인명록 등록 / 수정</button>
				<button class="btn-none w-100p btn-l dis-b btn-shadow mt-10">승소판결문 등록</button>
			</div>
			<div class="direct-list   mt-25">
				<div class="direct-item">
					<div class="clear mb-5">
						<h2 class="c-left right-header">오늘의 변호사</h2>
					</div>
					<div class="clear">
						<div class="c-left img-div-wrap pr-10">
							<div class="img-circle" style="background-image: url('../images/test/testImg01.jpg')"></div>
						</div>
						<div class="c-left txt-div-wrap">
							<a href="" class="c-blue fs-14">홍길동</a>
							<p class="fs-12 c-gray-l mt-5">(변호사시험 7)</p>
							<p class="fs-14 mt-5"><span class="fs-12 c-gray-l">소속 </span> 청백 공동법률사무소</p>
							<p class="fs-14 mt-5"><span class="fs-12 c-gray-l">업무분야 </span> 국가계약 향사법</p>
							<p class="fs-14 mt-5"><span class="badge-sky badge-mid">승소판례 11건</span></p>
						</div>
					</div>
					<div class="clear mt-20">
						<div class="c-left img-div-wrap pr-10">
							<div class="img-circle" style="background-image: url('../images/test/testImg01.jpg')"></div>
						</div>
						<div class="c-left txt-div-wrap">
							<a href="" class="c-blue fs-14">홍길동</a>
							<p class="fs-12 c-gray-l mt-5">(변호사시험 7)</p>
							<p class="fs-14 mt-5"><span class="fs-12 c-gray-l">소속 </span> 청백 공동법률사무소</p>
							<p class="fs-14 mt-5"><span class="fs-12 c-gray-l">업무분야 </span> 국가계약 향사법</p>
							<p class="fs-14 mt-5"><span class="badge-sky badge-mid">승소판례 11건</span></p>
						</div>
					</div>
					<div class="clear mt-20">
						<div class="c-left img-div-wrap pr-10">
							<div class="img-circle" style="background-image: url('../images/test/testImg01.jpg')"></div>
						</div>
						<div class="c-left txt-div-wrap">
							<a href="" class="c-blue fs-14">홍길동</a>
							<p class="fs-12 c-gray-l mt-5">(변호사시험 7)</p>
							<p class="fs-14 mt-5"><span class="fs-12 c-gray-l">소속 </span> 청백 공동법률사무소</p>
							<p class="fs-14 mt-5"><span class="fs-12 c-gray-l">업무분야 </span> 국가계약 향사법</p>
							<p class="fs-14 mt-5"><span class="badge-sky badge-mid">승소판례 11건</span></p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container-center">
			<h2 class="sub-main-tit clear">법조인명록 검색</h2>
			<div class="bg-border">
				<div class="sub-main-pd">
					<div class="sub-main-tab-warp clear">
						<ul class="sub-main-tab-ul c-left">
							<li class="on"><a href="./professional_submain01.php">법조인명록 검색</a></li>
							<li><a href="./professional_submain02.php">주요 업무 분야별 변호사</a></li>
						</ul>
						<div class="sub-main-info c-right">
							<div class="str">
								<button class="info-bt" onclick="fn_add_class_on('#keyword-operator-wrap')">
									<span class="icon icon-exclamation-circle"></span>검색 연산자 안내
								</button>
								<div id="keyword-operator-wrap" class="header-popup keyword-operator-wrap">
									<div class="popup-bg">
										<div class="tit-div fw-700 str">
											LAWnB 검색연산자 안내
											<div class="str-rt">
												<button class="icon-x-mark icon-w25 btn-s"
												        onclick="fn_remove_class_on('#keyword-operator-wrap')"></button>
											</div>
										</div>
										<ul class="info-list">
											<li>
												<div class="div-l">AND</div>
												<div class="div-r">
													<p class="txt01">"이사회"와 "감사"가 모두 포함된 문서</p>
													<p class="txt02">- 예시) 이사회 감사, 이사회 AND 감사</p>
												</div>
											</li>
											<li>
												<div class="div-l">OR</div>
												<div class="div-r">
													<p class="txt01">"이사회"와 "감사" 중 어느 하나라도 포함된 문서</p>
													<p class="txt02">- 예시) 이사회 OR 감사</p>
												</div>
											</li>
											<li>
												<div class="div-l">NOT</div>
												<div class="div-r">
													<p class="txt01">"이사회"가 포함되고 "감사"가 포함되지 않은 문서</p>
													<p class="txt02">- 예시) [검색어]이사회 [제외어]감사, 이사회 NOT 감사</p>
												</div>
											</li>
											<li>
												<div class="div-l">EQUAL</div>
												<div class="div-r">
													<p class="txt01">"이사회 감사"라는 검색어와 완전일치하는 구문이 있는 문서</p>
													<p class="txt02">- 예시) "이사회 감사"</p>
												</div>
											</li>
											<li>
												<div class="div-l">NEAR</div>
												<div class="div-r">
													<p class="txt01">"이사회"와 "감사" 사이에 단어(형태소)가 10개 이하인 문서</p>
													<p class="txt02">- 예시) "이사회 감사"~10</p>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="c-red fs-14 mt-m-20 mb-20">
						<i class="icon-16 fs-16" data-icon=""></i>
						로앤비 법조인 정보를 근거로 검사, 변호사를 사칭하는 보이스피싱이 급증하고 있으니 주의바랍니다.
						<a class="btn-s btn-none" href="">내용 자세히 보기 </a>
					</div>
					<div class="sub-main-con-warp">
						<div class="sub-main-con">
							<div class="con doc">
								<div class="input-box str">
									<div class="dis-t">
										<div class="dis-tr">
											<div class="dis-th">
												<label for="keyword-search">이름</label>
											</div>
											<div class="dis-tc">
												<input id="keyword-search" type="text" class="input-css01"
												       placeholder="이름">
											</div>
										</div>
									</div>
								</div>
								<div class="input-box str">
									<div class="dis-t">
										<div class="dis-tr">
											<div class="dis-th">
												<label for="keyword-search">현직소속</label>
											</div>
											<div class="dis-tc">
												<input id="keyword-search" type="text" class="input-css01">
											</div>
										</div>
									</div>
								</div>
								<div class="input-box str">
									<div class="dis-t">
										<div class="dis-tr">
											<div class="dis-th">
												<label for="keyword-search">현직</label>
											</div>
											<div class="dis-tc clear">
												<select id="select" class="select-css01">
													<option>선택</option>
													<option>선택2</option>
													<option>선택3</option>
													<option>선택4</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<div class="input-box str">
									<div class="dis-t">
										<div class="dis-tr">
											<div class="dis-th">
												<label for="keyword-search">근무지역</label>
											</div>
											<div class="dis-tc">
												<input id="keyword-search" type="text" class="input-css01">
											</div>
										</div>
									</div>
								</div>
								<div class="input-box str">
									<div class="dis-t">
										<div class="dis-tr">
											<div class="dis-th">
												<label for="keyword-except">시험종류</label>
											</div>
											<div class="dis-tc clear">
												<select id="select" class="select-css01">
													<option>선택</option>
													<option>선택2</option>
													<option>선택3</option>
													<option>선택4</option>
												</select>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="con doc">
								<div class="input-box str">
									<div class="dis-t">
										<div class="dis-tr">
											<div class="dis-th">
												<label for="keyword-search">시험횟수</label>
											</div>
											<div class="dis-tc">
												<div class="dis-t">
													<div class="dis-tr">
														<div class="dis-tc pr-5"><input id="keyword-except" type="text" class="input-css01"></div>
														<div class="dis-tc pr-5 ta-c">~</div>
														<div class="dis-tc pr-5"><input id="keyword-except" type="text" class="input-css01"></div>
														<div class="dis-tc ta-c">회</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="input-box str">
									<div class="dis-t">
										<div class="dis-tr">
											<div class="dis-th">
												<label for="keyword-search">연수원기수</label>
											</div>
											<div class="dis-tc">
												<div class="dis-t">
													<div class="dis-tr">
														<div class="dis-tc pr-5"><input id="keyword-except" type="text" class="input-css01"></div>
														<div class="dis-tc pr-5 ta-c">~</div>
														<div class="dis-tc pr-5"><input id="keyword-except" type="text" class="input-css01"></div>
														<div class="dis-tc ta-c">기</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="con doc">
								<div class="input-box str">
									<div class="dis-t">
										<div class="dis-tr">
											<div class="dis-th">
												<label for="keyword-search">고등학교</label>
											</div>
											<div class="dis-tc str">
												<div class="dis-t">
													<div class="dis-tr">
														<div class="dis-tc pr-5"><input id="keyword-except" type="text" class="input-css01"></div>
														<div class="dis-tc pr-15"><button class="btn-none btn-m wb-kl dis-b" onclick="fn_add_class_on('#high_search')">확인</button></div>
														<div class="dis-tc pr-5"><input id="keyword-except" type="text" class="input-css01" placeholder="졸업연도"></div>
														<div class="dis-tc pr-5 ta-c">~</div>
														<div class="dis-tc pr-5"><input id="keyword-except" type="text" class="input-css01" placeholder="졸업연도"></div>
													</div>
												</div>
												<div id='high_search' class='header-popup school_search'>
													<p class='fw-700 str'>
														고등학교를 선택하세요.
															<button class='icon-x-mark icon-w25 btn-s str-rt' onclick="fn_remove_class_on('#high_search')"></button>
													</p>
													<div onclick="lawyer.setOrgCode('1857', '경기고등학교','1031')">경기고등학교
														[서울특별시]<span>선택</span></div>
													<div onclick="lawyer.setOrgCode('2237', '경기고등학교부설방송통신고등학교','1031')">
														경기고등학교부설방송통신고등학교 [서울특별시]<span>선택</span></div>
													<div onclick="lawyer.setOrgCode('687', '경기-고등학교졸업자격검정고시','1031')">
														경기-고등학교졸업자격검정고시 [경기도]<span>선택</span></div>
													<div onclick="lawyer.setOrgCode('225', '경기과학고등학교','1031')">
														경기과학고등학교 [경기도]<span>선택</span></div>
													<div onclick="lawyer.setOrgCode('2060', '경기기계공업고등학교','1031')">
														경기기계공업고등학교 [서울특별시]<span>선택</span></div>
													<div onclick="lawyer.setOrgCode('226', '경기대명고등학교','1031')">
														경기대명고등학교 [경기도]<span>선택</span></div>
													<div onclick="lawyer.setOrgCode('2084', '경기상업고등학교','1031')">
														경기상업고등학교 [서울특별시]<span>선택</span></div>
													<div onclick="lawyer.setOrgCode('653', '경기실업고등기술학교','1031')">
														경기실업고등기술학교 [경기도]<span>선택</span></div>
													<div onclick="lawyer.setOrgCode('1858', '경기여자고등학교','1031')">
														경기여자고등학교 [서울특별시]<span>선택</span></div>
													<div onclick="lawyer.setOrgCode('2206', '경기여자고등학교부설방송통신고등학교','1031')">
														경기여자고등학교부설방송통신고등학교 [서울특별시]<span>선택</span></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="input-box str">
									<div class="dis-t">
										<div class="dis-tr">
											<div class="dis-th">
												<label for="keyword-search">대학교</label>
											</div>
											<div class="dis-tc str">
												<div class="dis-t">
													<div class="dis-tr">
														<div class="dis-tc pr-5"><input id="keyword-except" type="text" class="input-css01"></div>
														<div class="dis-tc pr-15"><button class="btn-none btn-m wb-kl dis-b" onclick="fn_add_class_on('#univ_search')">확인</button></div>
														<div class="dis-tc pr-5"><input id="keyword-except" type="text" class="input-css01" placeholder="졸업연도"></div>
														<div class="dis-tc pr-5 ta-c">~</div>
														<div class="dis-tc pr-5"><input id="keyword-except" type="text" class="input-css01" placeholder="졸업연도"></div>
													</div>
												</div>
												<div id='univ_search' class='header-popup school_search'>
													<p class='fw-700 str'>
														대학교를 선택하세요.
														<button class='icon-x-mark icon-w25 btn-s str-rt'
														        onclick="fn_remove_class_on('#univ_search')"></button>
													</p>
													<div onclick="lawyer.setOrgCode('1857', '경기고등학교','1031')">경기고등학교
														[서울특별시]<span>선택</span></div>
													<div onclick="lawyer.setOrgCode('2237', '경기고등학교부설방송통신고등학교','1031')">
														경기고등학교부설방송통신고등학교 [서울특별시]<span>선택</span></div>
													<div onclick="lawyer.setOrgCode('687', '경기-고등학교졸업자격검정고시','1031')">
														경기-고등학교졸업자격검정고시 [경기도]<span>선택</span></div>
													<div onclick="lawyer.setOrgCode('225', '경기과학고등학교','1031')">
														경기과학고등학교 [경기도]<span>선택</span></div>
													<div onclick="lawyer.setOrgCode('2060', '경기기계공업고등학교','1031')">
														경기기계공업고등학교 [서울특별시]<span>선택</span></div>
													<div onclick="lawyer.setOrgCode('226', '경기대명고등학교','1031')">
														경기대명고등학교 [경기도]<span>선택</span></div>
													<div onclick="lawyer.setOrgCode('2084', '경기상업고등학교','1031')">
														경기상업고등학교 [서울특별시]<span>선택</span></div>
													<div onclick="lawyer.setOrgCode('653', '경기실업고등기술학교','1031')">
														경기실업고등기술학교 [경기도]<span>선택</span></div>
													<div onclick="lawyer.setOrgCode('1858', '경기여자고등학교','1031')">
														경기여자고등학교 [서울특별시]<span>선택</span></div>
													<div onclick="lawyer.setOrgCode('2206', '경기여자고등학교부설방송통신고등학교','1031')">
														경기여자고등학교부설방송통신고등학교 [서울특별시]<span>선택</span></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="input-box str">
									<div class="dis-t">
										<div class="dis-tr">
											<div class="dis-th">
												<label for="keyword-search">로스쿨</label>
											</div>
											<div class="dis-tc str">
												<div class="dis-t">
													<div class="dis-tr">
														<div class="dis-tc pr-5"><input id="keyword-except" type="text" class="input-css01"></div>
														<div class="dis-tc pr-15"><button class="btn-none btn-m wb-kl dis-b" onclick="fn_add_class_on('#lawsch_search')">확인</button></div>
														<div class="dis-tc pr-5"><input id="keyword-except" type="text" class="input-css01" placeholder="졸업연도"></div>
														<div class="dis-tc pr-5 ta-c">~</div>
														<div class="dis-tc pr-5"><input id="keyword-except" type="text" class="input-css01" placeholder="졸업연도"></div>
													</div>
												</div>
												<div id='lawsch_search' class='header-popup school_search'>
													<p class='fw-700 str'>
														법학전문대학원를 선택하세요.
														<button class='icon-x-mark icon-w25 btn-s str-rt'
														        onclick="fn_remove_class_on('#lawsch_search')"></button>
													</p>
													<div onclick="lawyer.setOrgCode('1857', '경기고등학교','1031')">경기고등학교
														[서울특별시]<span>선택</span></div>
													<div onclick="lawyer.setOrgCode('2237', '경기고등학교부설방송통신고등학교','1031')">
														경기고등학교부설방송통신고등학교 [서울특별시]<span>선택</span></div>
													<div onclick="lawyer.setOrgCode('687', '경기-고등학교졸업자격검정고시','1031')">
														경기-고등학교졸업자격검정고시 [경기도]<span>선택</span></div>
													<div onclick="lawyer.setOrgCode('225', '경기과학고등학교','1031')">
														경기과학고등학교 [경기도]<span>선택</span></div>
													<div onclick="lawyer.setOrgCode('2060', '경기기계공업고등학교','1031')">
														경기기계공업고등학교 [서울특별시]<span>선택</span></div>
													<div onclick="lawyer.setOrgCode('226', '경기대명고등학교','1031')">
														경기대명고등학교 [경기도]<span>선택</span></div>
													<div onclick="lawyer.setOrgCode('2084', '경기상업고등학교','1031')">
														경기상업고등학교 [서울특별시]<span>선택</span></div>
													<div onclick="lawyer.setOrgCode('653', '경기실업고등기술학교','1031')">
														경기실업고등기술학교 [경기도]<span>선택</span></div>
													<div onclick="lawyer.setOrgCode('1858', '경기여자고등학교','1031')">
														경기여자고등학교 [서울특별시]<span>선택</span></div>
													<div onclick="lawyer.setOrgCode('2206', '경기여자고등학교부설방송통신고등학교','1031')">
														경기여자고등학교부설방송통신고등학교 [서울특별시]<span>선택</span></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="con doc">
								<div class="input-box str">
									<div id='career-table'>
										<div id="career-row-0" class="dis-t">
											<div class="dis-tr">
												<div class="dis-th">
													<label for="keyword-except">경력소속</label>
												</div>
												<div class='dis-tc pr-5 va-m'>
													<input id="keyword-except" type="text" class="input-css01">
												</div>
												<div class='dis-tc w-30px va-m'>
													<button class='dis-b btb-plus btn-none' onclick='addCareerRow()'><span
																class='icon-plus02 icon-w18'></span></button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="con doc">
								<div class="input-box str">
									<div class="dis-t">
										<div class="dis-tr">
											<div class="dis-th">
												<label for="keyword-search">출생연도</label>
											</div>
											<div class="dis-tc">
												<div class="dis-t">
													<div class="dis-tr">
														<div class="dis-tc pr-5"><input id="keyword-except" type="text" class="input-css01"></div>
														<div class="dis-tc pr-5 ta-c">~</div>
														<div class="dis-tc pr-5"><input id="keyword-except" type="text" class="input-css01"></div>
														<div class="dis-tc ta-c">년</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="btn-wrap ta-c">
								<button class="btn btn-blue btn-l">검색</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script>
    let careerIndex = 0;

    function addCareerRow() {
        careerIndex++;
        const indexStr = careerIndex.toString().padStart(2, '0');
        const rowId = `career-row-${indexStr}`;
        const inputId = `keyword-except-${indexStr}`;

        const rowHtml = `
        <div id="${rowId}" class='dis-t mt-10'>
	        <div class='dis-tr'>
	            <div class='dis-th'>
	                <label for='${inputId}'>경력소속</label>
	            </div>
	            <div class='dis-tc pr-5 va-m'>
	                <input id='${inputId}' type='text' class='input-css01'>
	            </div>
	            <div class='dis-tc w-30px va-m'>
	                <button class='dis-b btb-plus btn-none' onclick='removeCareerRow("${rowId}")'>
	                    <span class='icon-minus icon-w18'></span>
	                </button>
	            </div>
	        </div>
        </div>
    `;
        $('#career-table').append(rowHtml);
    }

    function removeCareerRow(rowId) {
        $(`#${rowId}`).remove();
    }
</script>
<?php include '../include/footer_sub.php'; ?>
