<?php include '../include/header_sub.php'; ?>
<div id="container-wrap" class="container-wrap show-view-right">
	<div class="container-inner">
		<div class="container-left">
			<div class='scroll-y'>
				<h2 class='h2'>자치법규</h2>
				<ul id="left-con-accordion" class="accordion">
					<li class='accordion-item'>
						<h3 class='accordion-header'>
							<p class='fs-14 fw-400'>검색어</p>
						</h3>
						<div class='input-box-plus mt-10 str'>
							<input id='word-search' type='text' class='input-css01' placeholder='검색어 입력 (최대 3개)'>
							<button class='btn-plus' onclick="fn_add_html('word-search', 'word-search-list')">
								<div class='str'><span class='n-i-w15 n-i-plus n-i str-center'></span></div>
							</button>
						</div>
						<div id='word-search-list' class='word-add-list'></div>
						<h3 class='accordion-header mt-15'>
							<p class='fs-14 fw-400'>제외어</p>
						</h3>
						<div class='input-box-plus mt-10 str'>
							<input id='word-except' type='text' class='input-css01' placeholder='제외어 입력 (최대 3개)'>
							<button class='btn-plus' onclick="fn_add_html('word-except', 'word-except-list')">
								<div class='str'><span class='n-i-w15 n-i-plus n-i str-center'></span></div>
							</button>
						</div>
						<div id='word-except-list' class='word-add-list'></div>
					</li>
					<li class="accordion-item">
						<h3 class="accordion-header">
							<button class="accordion-button show" type="button" data-bs-target="#left-con-accordion01">
								자치법규
							</button>
						</h3>
						<div id="left-con-accordion01" class="accordion-collapse collapse" data-bs-parent="#left-con-accordion">
							<div class="accordion-body">
								<ul class="keyword-list list-block">
									<li>
										<input type="checkbox" id="keyword-1-1" value="법령명" name="keyword-list">
										<label for="keyword-1-1">법령명</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-1-2" value="조문제목" name="keyword-list">
										<label for="keyword-1-2">조문제목</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-1-3" value="조문내용" name="keyword-list">
										<label for="keyword-1-3">조문내용</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-1-4" value="부칙" name="keyword-list">
										<label for="keyword-1-4">부칙</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-1-5" value="별표서식" name="keyword-list">
										<label for="keyword-1-5">별표서식</label>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li class="accordion-item">
						<h3 class="accordion-header">
							<button class="accordion-button show" type="button" data-bs-target="#left-con-accordion02">
								자치법규 종류
							</button>
						</h3>
						<div id="left-con-accordion02" class="accordion-collapse collapse" data-bs-parent="#left-con-accordion">
							<div class="accordion-body">
								<ul class="keyword-list list-inline">
									<li>
										<input type="checkbox" id="keyword-2-1" value="조례" name="keyword-list02">
										<label for="keyword-2-1">조례</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-2-2" value="규칙" name="keyword-list02">
										<label for="keyword-2-2">규칙</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-2-3" value="훈령" name="keyword-list02">
										<label for="keyword-2-3">훈령</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-2-4" value="예규" name="keyword-list02">
										<label for="keyword-2-4">예규</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-2-5" value="고시" name="keyword-list02">
										<label for="keyword-2-5">고시</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-2-6" value="의회" name="keyword-list02">
										<label for="keyword-2-6">의회</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-2-7" value="기타" name="keyword-list02">
										<label for="keyword-2-7">기타</label>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li class="accordion-item">
						<h3 class="accordion-header">
							<button class="accordion-button show" type="button" data-bs-target="#left-con-accordion03">
								소관부처
							</button>
						</h3>
						<div id="left-con-accordion03" class="accordion-collapse collapse" data-bs-parent="#left-con-accordion">
							<div class="accordion-body">
								<ul class="keyword-list list-block">
									<li class="keyword-dropdown">
										<button class="keyword-list-btn" data-bs-target="#location-con-01" onClick="fn_keyword_list_open(this)"></button>
										<div class="str keyword-list-hd">
											<input type="checkbox" id="location1" value="서울특별시" name="keyword-list" onclick="fn_chk_all(this)" data-bs-target="#location-con-01" >
											<label for="location1">서울특별시</label>
											<span class="sub-ul-num">26</span>
										</div>
										<ul id="location-con-01" class="sub-ul keyword-list list-block">
											<li>
												<input type="checkbox" id="location1-1" value="" name="keyword-list">
												<label for="location1-1">서울1</label>
											</li>
											<li>
												<input type="checkbox" id="location1-2" value="" name="keyword-list">
												<label for="location1-2">서울2</label>
											</li>
											<li>
												<input type="checkbox" id="location1-3" value="" name="keyword-list">
												<label for="location1-3">서울3</label>
											</li>
											<li>
												<input type="checkbox" id="location1-4" value="" name="keyword-list">
												<label for="location1-4">서울4</label>
											</li>
										</ul>
									</li>
									<li class="keyword-dropdown">
										<button class="keyword-list-btn" data-bs-target="#location-con-02" onClick="fn_keyword_list_open(this)"></button>
										<div class="str keyword-list-hd">
											<input type="checkbox" id="location2" value="" name="keyword-list" onclick="fn_chk_all(this)" data-bs-target="#location-con-02" >
											<label for="location2">인천광역시</label>
											<span class="sub-ul-num">10</span>
										</div>
										<ul id="location-con-02" class="sub-ul keyword-list list-block">
											<li>
												<input type="checkbox" id="location2-1" value="" name="keyword-list">
												<label for="location2-1">인천광역시-1</label>
											</li>
											<li>
												<input type="checkbox" id="location2-2" value="" name="keyword-list">
												<label for="location2-2">인천광역시-2</label>
											</li>
											<li>
												<input type="checkbox" id="location2-3" value="" name="keyword-list">
												<label for="location2-3">인천광역시-3</label>
											</li>
											<li>
												<input type="checkbox" id="location2-4" value="" name="keyword-list">
												<label for="location2-4">인천광역시-4</label>
											</li>
										</ul>
									</li>
									<li class="keyword-dropdown">
										<button class="keyword-list-btn" data-bs-target="#location-con-03" onClick="fn_keyword_list_open(this)"></button>
										<div class="str keyword-list-hd">
											<input type="checkbox" id="location3" value="" name="keyword-list" onclick="fn_chk_all(this)" data-bs-target="#location-con-03" >
											<label for="location3">대전광역시</label>
											<span class="sub-ul-num">5</span>
										</div>
										<ul id="location-con-03" class="sub-ul keyword-list list-block">
											<li>
												<input type="checkbox" id="location3-1" value="" name="keyword-list">
												<label for="location3-1">대전광역시-1</label>
											</li>
											<li>
												<input type="checkbox" id="location3-2" value="" name="keyword-list">
												<label for="location3-2">대전광역시-2</label>
											</li>
											<li>
												<input type="checkbox" id="location3-3" value="" name="keyword-list">
												<label for="location3-3">대전광역시-3</label>
											</li>
											<li>
												<input type="checkbox" id="location3-4" value="" name="keyword-list">
												<label for="location3-4">대전광역시-4</label>
											</li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li class="accordion-item">
						<h3 class="accordion-header">
							<button class="accordion-button show" type="button" data-bs-target="#left-con-accordion04">
								기간
							</button>
						</h3>
						<div id="left-con-accordion04" class="accordion-collapse collapse" data-bs-parent="#left-con-accordion">
							<div class="accordion-body">
								<ul class="keyword-list list-inline">
									<li>
										<input type="radio" id="keyword-3-1" value="공포일자" name="keyword-list03" checked>
										<label for="keyword-3-1">공포일자</label>
									</li>
									<li>
										<input type="radio" id="keyword-3-2" value="시행일자" name="keyword-list03">
										<label for="keyword-3-2">시행일자</label>
									</li>
								</ul>
								<ul class="keyword-list list-block">
									<li>
										<input type="radio" id="date-all" value="전체" name="date-range">
										<label for="date-all">전체</label>
									</li>
									<li>
										<input type="radio" id="date-y1" value="최근 1년" name="date-range">
										<label for="date-y1">최근 1년</label>
									</li>
									<li>
										<input type="radio" id="date-y2" value="최근 2년" name="date-range">
										<label for="date-y2">최근 2년</label>
									</li>
									<li>
										<input type="radio" id="date-y3" value="최근 3년" name="date-range">
										<label for="date-y3">최근 3년</label>
									</li>
									<li>
										<input type="radio" id="date-self" value="직접선택" name="date-range">
										<label for="date-self">직접선택</label>
										<div class='dis-t mt-10'>
											<div class='dis-tr'>
												<div class='dis-tc div-date v-m'><input id='word-except' type='text' class='input-css01'></div>
												<div class='dis-tc div-dash v-m'>~</div>
												<div class='dis-tc div-date v-m pr-5'><input id='word-except' type='text' class='input-css01'></div>
												<div class='dis-tc v-m'>
													<button class='btn-blue btn-m wb-kl'>적용</button>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</li>
				</ul>
				<div class="btn-wrap border-top">
					<div class="ta-c">
						<button class='btn-blue btn-m'>
							<div class='str pl-20'><span class='n-i n-i-reset n-i-w15 str-ltc'></span>초기화</div>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="container-right">
			<div class="direct-list">
				<div class="direct-item">
					<h3 class="right-header">다이렉트 검색</h3>
					<ul class="direct-ul">
						<li>
							<a href="">
								<p class="c-blue">부동산</p>
								토지 및 그 정착물을 부동산이라 한다(민99). 동산과 부동산은 재산적 가치의 차이가 있기는 하지만 공시방법에서의 차이가 그 주된 구별이유이다. 독일,
								[圖說 法律用語辭典 오세경/ 2017.02.15 / 법전출판사]
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="pt-20">
				<button class="btn-blue w-100p btn-l dis-b">법규 비교</button>
			</div>
			<div class="reset-con-list pt-20">
				<div class="reset-con-item">
					<h3 class="right-header">최근 조회 ESG</h3>
					<ul class="reset-con-ul">
						<li>
							<a href="">
								<span class="c-blue">대법원 1999. 3. 18 선고 98다32175 전원합의체 판결</span> 【토지소유권이전등기】 [공99.5.1.[81],718]</span>
							</a>
						</li>
						<li>
							<a href="">
								<span class="c-blue">【유럽법제동향】 공동불법행위자간의 구상권 주장시 중대한 의료과오에 있어서의 입증책임전환 인정</span> BGH 6. Zivilsenat, Urteil vom 06.10.2009 - VI ZR 24/09박성은 / 2010.03.04</span>
							</a>
						</li>
						<li>
							<a href="">
								<span class="c-blue">【유럽법제동향】 공동불법행위자간의 구상권 주장시 중대한 의료과오에 있어서의 입증책임전환 인정</span> BGH 6. Zivilsenat, Urteil vom 06.10.2009 - VI ZR 24/09박성은 / 2010.03.04</span>
							</a>
						</li>
						<li>
							<a href="">
								<span class="c-blue">【유럽법제동향】 공동불법행위자간의 구상권 주장시 중대한 의료과오에 있어서의 입증책임전환 인정</span> BGH 6. Zivilsenat, Urteil vom 06.10.2009 - VI ZR 24/09박성은 / 2010.03.04</span>
							</a>
						</li>
						<li>
							<a href="">
								<span class="c-blue">【유럽법제동향】 공동불법행위자간의 구상권 주장시 중대한 의료과오에 있어서의 입증책임전환 인정</span> BGH 6. Zivilsenat, Urteil vom 06.10.2009 - VI ZR 24/09박성은 / 2010.03.04</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="container-center">
			<div class="content-wrap">
				<div class="clear mb-15">
					<div class="c-left">
						<b>검색결과 8건</b> <span class="fs-14">1/1</span>
					</div>
				</div>
				<div class="tab-button-wrap clear">
					<div class="l-div c-left">
						<input type="checkbox" id="con-1" class="input-chk" value="판례" name="keyword-list02">
						<button class="btn-none btn-m ml-10">다운로드</button>
					</div>
					<div class="c-right clear">
						<div class="c-left">
							<div class="btn-list btn-list-m btn-list-none">
								<button class="btn btn-icon on"><span class="icon icon-bar3"></span></button>
								<button class="btn btn-icon"><span class="icon icon-bar2"></span></button>
							</div>
						</div>
						<div class="c-left ml-10">
							<div class="btn-list btn-list-m btn-list-none">
								<button class="btn on">정확도</button>
								<button class="btn pr-5" onclick="fn_order_con(this);">
									<span class="icon icon-order resent">자치법규명</span>
								</button>
								<button class="btn pr-5" onclick="fn_order_con(this);">
									<span class="icon icon-order resent">공포일자</span>
								</button>
							</div>
						</div>
						<div class="dropdown c-left ml-10">
							<button class="btn btn-none btn-m dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								20개
							</button>
							<div class="dropdown-menu-wrap">
								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="#">50개</a></li>
									<li><a class="dropdown-item" href="#">20개</a></li>
									<li><a class="dropdown-item" href="#">10개</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<ul class="content-ul">
					<li id='sub-law-con-1' class='sub-law-con'>
						<div class="li-con">
							<input type="checkbox" id="con-1" class="input-chk" value="" name="search-list">
							<div class='clear'>
								<div class='c-right clear'>
									<div class='c-left'>
										<button id='' class='btn btn-gray sub-law-btn' type='button'
										        onclick='fn_sub_law(1)'>
											﻿조 검색 20건
										</button>
									</div>
									<button class='icon-plus icon-w25 c-left ml-10'
									        onclick='fn_showPreviewPage(event)'></button>
								</div>
								<div class='c-left clear mr-10'>
									<a href='' class='txt01'><span class='badge-blue badge-small mr-2'>현행</span> 부동산거래정보
										운영규정</a>
								</div>
							</div>
							<div class="txt-div">
								<p class="text01 mt-10">
									국토교통부 훈형 제1597호 일부개정 발령일 2023.02.01, 시행일 2023.02.01
								</p>
							</div>
							<div class='sub-law-slider mt-25 slick-dot01'>
								<ul class='ul-dot'>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제2조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의 기재사항)
											</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한 법률
												시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한 법률
												이하..법이라 한다.) 제5조제1항에 따른 <span class='highlight-yellow'>부동산</span>개발 전문인력
												(이하..</p>
										</div>
									</li>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제3조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의 기재사항)
											</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한 법률
												시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한 법률
												이하..법이라 한다.) 제5조제1항에 따른 <span class='highlight-yellow'>부동산</span>개발 전문인력
												(이하..</p>
										</div>
									</li>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제5조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의 기재사항)
											</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한 법률
												시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한 법률
												이하..법이라 한다.) 제5조제1항에 따른 <span class='highlight-yellow'>부동산</span>개발 전문인력
												(이하..</p>
										</div>
									</li>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제3조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의
												기재사항)</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한
												법률 시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에
												관한 법률 이하..법이라 한다.) 제5조제1항에 따른 <span
														class='highlight-yellow'>부동산</span>개발 전문인력 (이하..</p>
										</div>
									</li>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제5조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의
												기재사항)</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한
												법률 시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에
												관한 법률 이하..법이라 한다.) 제5조제1항에 따른 <span
														class='highlight-yellow'>부동산</span>개발 전문인력 (이하..</p>
										</div>
									</li>
								</ul>
								<ul class='ul-dot'>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제3조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의
												기재사항)</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한
												법률 시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에
												관한 법률 이하..법이라 한다.) 제5조제1항에 따른 <span
														class='highlight-yellow'>부동산</span>개발 전문인력 (이하..</p>
										</div>
									</li>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제5조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의
												기재사항)</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한
												법률 시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에
												관한 법률 이하..법이라 한다.) 제5조제1항에 따른 <span
														class='highlight-yellow'>부동산</span>개발 전문인력 (이하..</p>
										</div>
									</li>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제2조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의
												기재사항)</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한
												법률 시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에
												관한 법률 이하..법이라 한다.) 제5조제1항에 따른 <span
														class='highlight-yellow'>부동산</span>개발 전문인력 (이하..</p>
										</div>
									</li>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제3조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의
												기재사항)</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한
												법률 시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에
												관한 법률 이하..법이라 한다.) 제5조제1항에 따른 <span
														class='highlight-yellow'>부동산</span>개발 전문인력 (이하..</p>
										</div>
									</li>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제5조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의
												기재사항)</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한
												법률 시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에
												관한 법률 이하..법이라 한다.) 제5조제1항에 따른 <span
														class='highlight-yellow'>부동산</span>개발 전문인력 (이하..</p>
										</div>
									</li>
								</ul>
								<ul class='ul-dot'>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제3조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의
												기재사항)</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한
												법률 시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에
												관한 법률 이하..법이라 한다.) 제5조제1항에 따른 <span
														class='highlight-yellow'>부동산</span>개발 전문인력 (이하..</p>
										</div>
									</li>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제5조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의
												기재사항)</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한
												법률 시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에
												관한 법률 이하..법이라 한다.) 제5조제1항에 따른 <span
														class='highlight-yellow'>부동산</span>개발 전문인력 (이하..</p>
										</div>
									</li>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제2조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의
												기재사항)</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한
												법률 시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에
												관한 법률 이하..법이라 한다.) 제5조제1항에 따른 <span
														class='highlight-yellow'>부동산</span>개발 전문인력 (이하..</p>
										</div>
									</li>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제3조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의
												기재사항)</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한
												법률 시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에
												관한 법률 이하..법이라 한다.) 제5조제1항에 따른 <span
														class='highlight-yellow'>부동산</span>개발 전문인력 (이하..</p>
										</div>
									</li>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제5조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의
												기재사항)</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한
												법률 시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에
												관한 법률 이하..법이라 한다.) 제5조제1항에 따른 <span
														class='highlight-yellow'>부동산</span>개발 전문인력 (이하..</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li id='sub-law-con-2' class='sub-law-con'>
						<div class='li-con'>
							<input type='checkbox' id='con-2' class='input-chk' value='' name='search-list'>
							<div class='clear'>
								<div class='c-right clear'>
									<div class='c-left'>
										<button id='' class='btn btn-gray sub-law-btn' type='button'
										        onclick='fn_sub_law(2)'>
											﻿조 검색 20건
										</button>
									</div>
									<button class='icon-plus icon-w25 c-left ml-10'
									        onclick='fn_showPreviewPage(event)'></button>
								</div>
								<div class='c-left clear mr-10'>
									<a href='' class='txt01'><span class='badge-blue badge-small mr-2'>현행</span> 부동산거래정보
										운영규정</a>
								</div>
							</div>
							<div class='txt-div'>
								<p class='text01 mt-10'>
									국토교통부 훈형 제1597호 일부개정 발령일 2023.02.01, 시행일 2023.02.01
								</p>
							</div>
							<div class='sub-law-slider mt-25 slick-dot01'>
								<ul class='ul-dot'>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제2조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의 기재사항)
											</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한 법률
												시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한 법률
												이하..법이라 한다.) 제5조제1항에 따른 <span class='highlight-yellow'>부동산</span>개발 전문인력
												(이하..</p>
										</div>
									</li>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제3조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의 기재사항)
											</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한 법률
												시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한 법률
												이하..법이라 한다.) 제5조제1항에 따른 <span class='highlight-yellow'>부동산</span>개발 전문인력
												(이하..</p>
										</div>
									</li>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제5조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의 기재사항)
											</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한 법률
												시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한 법률
												이하..법이라 한다.) 제5조제1항에 따른 <span class='highlight-yellow'>부동산</span>개발 전문인력
												(이하..</p>
										</div>
									</li>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제3조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의
												기재사항)</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한
												법률 시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에
												관한 법률 이하..법이라 한다.) 제5조제1항에 따른 <span
														class='highlight-yellow'>부동산</span>개발 전문인력 (이하..</p>
										</div>
									</li>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제5조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의
												기재사항)</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한
												법률 시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에
												관한 법률 이하..법이라 한다.) 제5조제1항에 따른 <span
														class='highlight-yellow'>부동산</span>개발 전문인력 (이하..</p>
										</div>
									</li>
								</ul>
								<ul class='ul-dot'>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제3조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의
												기재사항)</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한
												법률 시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에
												관한 법률 이하..법이라 한다.) 제5조제1항에 따른 <span
														class='highlight-yellow'>부동산</span>개발 전문인력 (이하..</p>
										</div>
									</li>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제5조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의
												기재사항)</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한
												법률 시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에
												관한 법률 이하..법이라 한다.) 제5조제1항에 따른 <span
														class='highlight-yellow'>부동산</span>개발 전문인력 (이하..</p>
										</div>
									</li>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제2조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의
												기재사항)</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한
												법률 시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에
												관한 법률 이하..법이라 한다.) 제5조제1항에 따른 <span
														class='highlight-yellow'>부동산</span>개발 전문인력 (이하..</p>
										</div>
									</li>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제3조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의
												기재사항)</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한
												법률 시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에
												관한 법률 이하..법이라 한다.) 제5조제1항에 따른 <span
														class='highlight-yellow'>부동산</span>개발 전문인력 (이하..</p>
										</div>
									</li>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제5조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의
												기재사항)</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한
												법률 시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에
												관한 법률 이하..법이라 한다.) 제5조제1항에 따른 <span
														class='highlight-yellow'>부동산</span>개발 전문인력 (이하..</p>
										</div>
									</li>
								</ul>
								<ul class='ul-dot'>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제3조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의
												기재사항)</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한
												법률 시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에
												관한 법률 이하..법이라 한다.) 제5조제1항에 따른 <span
														class='highlight-yellow'>부동산</span>개발 전문인력 (이하..</p>
										</div>
									</li>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제5조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의
												기재사항)</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한
												법률 시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에
												관한 법률 이하..법이라 한다.) 제5조제1항에 따른 <span
														class='highlight-yellow'>부동산</span>개발 전문인력 (이하..</p>
										</div>
									</li>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제2조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의
												기재사항)</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한
												법률 시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에
												관한 법률 이하..법이라 한다.) 제5조제1항에 따른 <span
														class='highlight-yellow'>부동산</span>개발 전문인력 (이하..</p>
										</div>
									</li>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제3조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의
												기재사항)</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한
												법률 시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에
												관한 법률 이하..법이라 한다.) 제5조제1항에 따른 <span
														class='highlight-yellow'>부동산</span>개발 전문인력 (이하..</p>
										</div>
									</li>
									<li>
										<div class='dot-cell'>
											<p class='tit'>제5조(<span class='highlight-yellow'>부동산</span>개발업 등록신청서의
												기재사항)</p>
											<p class='txt'><span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에 관한
												법률 시행령(이하 ..<span class='highlight-yellow'>부동산</span>개발업의 관리 및 육성에
												관한 법률 이하..법이라 한다.) 제5조제1항에 따른 <span
														class='highlight-yellow'>부동산</span>개발 전문인력 (이하..</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<div class="li-con">
							<input type="checkbox" id="con-1" class="input-chk" value="" name="search-list">
							<div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
							<div class="txt-div">
								<a href="" class="txt01"><span class="badge-blue badge-small mr-2">현행</span> 부동산거래정보 운영규정</a>
								<p class="text01 mt-10">
									국토교통부 훈형 제1597호 일부개정 발령일 2023.02.01, 시행일 2023.02.01
								</p>
							</div>
						</div>
					</li>
					<li>
						<div class="li-con">
							<input type="checkbox" id="con-1" class="input-chk" value="" name="search-list">
							<div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
							<div class="txt-div">
								<a href="" class="txt01"><span class="badge-blue badge-small mr-2">현행</span> 부동산거래정보 운영규정</a>
								<p class="text01 mt-10">
									국토교통부 훈형 제1597호 일부개정 발령일 2023.02.01, 시행일 2023.02.01
								</p>
							</div>
						</div>
					</li>
					<li>
						<div class="li-con">
							<input type="checkbox" id="con-1" class="input-chk" value="" name="search-list">
							<div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
							<div class="txt-div">
								<a href="" class="txt01"><span class="badge-blue badge-small mr-2">현행</span> 부동산거래정보 운영규정</a>
								<p class="text01 mt-10">
									국토교통부 훈형 제1597호 일부개정 발령일 2023.02.01, 시행일 2023.02.01
								</p>
							</div>
						</div>
					</li>
					<li>
						<div class="li-con">
							<input type="checkbox" id="con-1" class="input-chk" value="" name="search-list">
							<div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
							<div class="txt-div">
								<a href="" class="txt01"><span class="badge-blue badge-small mr-2">현행</span> 부동산거래정보 운영규정</a>
								<p class="text01 mt-10">
									국토교통부 훈형 제1597호 일부개정 발령일 2023.02.01, 시행일 2023.02.01
								</p>
							</div>
						</div>
					</li>
				</ul>
				<nav class="page-navigation">
					<ul class="pagination">
						<li class="page-item on">
							<a class="page-link" href="#" aria-label="Previous">
								<span class="icon-chevron-double-left"></span>
							</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#" aria-label="Previous">
								<span class="icon-prev"></span>
							</a>
						</li>
						<li class="page-item"><a class="page-link" href="#">1</a></li>
						<li class="page-item"><a class="page-link" href="#">2</a></li>
						<li class="page-item"><a class="page-link" href="#">3</a></li>
						<li class="page-item">
							<a class="page-link" href="#" aria-label="Next">
								<span class="icon-next"></span>
							</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#" aria-label="Previous">
								<span class="icon-chevron-double-right"></span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
        <?php include '../include/previewPage.php'; ?>
	</div>
</div>
<?php include '../include/footer_sub.php'; ?>
