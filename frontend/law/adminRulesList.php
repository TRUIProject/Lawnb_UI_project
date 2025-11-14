<?php include '../include/header_sub.php'; ?>
<div id="container-wrap" class="container-wrap show-view-right">
	<div class="container-inner clear">
		<div class="container-left">
			<div class="scroll-y">
				<h2 class='h2'>행정규칙</h2>
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
								행정규칙
							</button>
						</h3>
						<div id="left-con-accordion01" class="accordion-collapse collapse" data-bs-parent="#left-con-accordion">
							<div class="accordion-body">
								<ul class="keyword-list list-block">
									<li>
										<input type="checkbox" id="keyword-1-1" value="규칙명" name="keyword-list">
										<label for="keyword-1-1">규칙명</label>
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
								행정규칙 종류
							</button>
						</h3>
						<div id="left-con-accordion02" class="accordion-collapse collapse" data-bs-parent="#left-con-accordion">
							<div class="accordion-body">
								<ul class="keyword-list list-inline">
									<li>
										<input type="checkbox" id="keyword-2-1" value="훈령" name="keyword-list02">
										<label for="keyword-2-1">훈령</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-2-2" value="예규" name="keyword-list02">
										<label for="keyword-2-2">예규</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-2-3" value="고시" name="keyword-list02">
										<label for="keyword-2-3">고시</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-2-4" value="기타" name="keyword-list02">
										<label for="keyword-2-4">기타</label>
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
										<input type="radio" id="date-y5" value="최근 5년" name="date-range">
										<label for="date-y5">최근 5년</label>
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
					<div class="r-div c-right clear">
						<div class="c-left ml-10">
							<div class="btn-list btn-list-m btn-list-none">
								<button class="btn btn-icon on"><span class="icon icon-bar3"></span></button>
								<button class="btn btn-icon"><span class="icon icon-bar2"></span></button>
							</div>
						</div>
						<div class="c-left ml-10">
							<div class="btn-list btn-list-m btn-list-none">
								<button class="btn on">업데이트순</button>
								<button class="btn">정확도</button>
								<button class="btn">처리순</button>
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
							<div class="txt-div">
								<div class='clear'>
									<div class='c-right clear'>
										<div class='c-left'>
											<button id='' class='btn btn-gray sub-law-btn' type='button'
											        onclick='fn_sub_law(1)'>
												﻿조 검색 20건
											</button>
										</div>
										<button class='icon-plus icon-w25 c-left ml-10' onclick='fn_showPreviewPage(event)'></button>
									</div>
									<div class='c-left clear mr-10'>
										<a href='' class=''>
											<span class='c-blue'>[2125003] 공인중개사법 일부개정법률안(김민석의원 등 10일)</span>
										</a>
									</div>
								</div>
								<div class='mt-5'>
									<span class='c-gray-l fs-14'>제안자 : 의원 / 제안일 2023.10.4 제안자 : 의원 / 제안일 2023.10.4</span>
								</div>
								<p class="text01 mt-5">
									제안이유 및 주요내용 현행법은 개업공인중개사가 등록관청의 관할..이러한 유령 중개사무소는 사무실이 실재하지 않아 전세 사기 등 중개거래사고가 발생하더라고 직접 찾아가 책임을 물을 수 없어 <span class="highlight-yellow">부동산</span>거래 피해자가 발생할 우려가 매우 큰 상황임... 이에 개업공인중개사가 중개사무소를 다른 용로도 사용하거나 다른 용로도 사용하려는 사람에게 대여하지 못하도록 하고 이를 위한반 경우 등록관청이 해당 중개사무소의 개설등록을 취소할 수 있도록 하는 법적 근거를 마련하여 <span class="highlight-yellow">부동산</span> 거래사고 발생을 사전에 차단하고자 함(제13조제7항 신설 등)....
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
							<div class='txt-div'>
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
										<a href='' class=''>
											<span class='c-blue'>[2125003] 공인중개사법 일부개정법률안(김민석의원 등 10일)</span>
										</a>
									</div>
								</div>
								<div class='mt-5'>
									<span class='c-gray-l fs-14'>제안자 : 의원 / 제안일 2023.10.4 제안자 : 의원 / 제안일 2023.10.4</span>
								</div>
								<p class='text01 mt-5'>
									제안이유 및 주요내용 현행법은 개업공인중개사가 등록관청의 관할..이러한 유령 중개사무소는 사무실이 실재하지 않아 전세 사기 등 중개거래사고가
									발생하더라고 직접 찾아가 책임을 물을 수 없어 <span class='highlight-yellow'>부동산</span>거래 피해자가 발생할 우려가
									매우 큰 상황임... 이에 개업공인중개사가 중개사무소를 다른 용로도 사용하거나 다른 용로도 사용하려는 사람에게 대여하지 못하도록 하고 이를 위한반 경우
									등록관청이 해당 중개사무소의 개설등록을 취소할 수 있도록 하는 법적 근거를 마련하여 <span
											class='highlight-yellow'>부동산</span> 거래사고 발생을 사전에 차단하고자 함(제13조제7항 신설 등)....
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
					<li id='sub-law-con-3' class='sub-law-con'>
						<div class='li-con'>
							<input type='checkbox' id='con-3' class='input-chk' value='' name='search-list'>
							<div class='txt-div'>
								<div class='clear'>
									<div class='c-right clear'>
										<div class='c-left'>
											<button id='' class='btn btn-gray sub-law-btn' type='button'
											        onclick='fn_sub_law(3)'>
												﻿조 검색 20건
											</button>
										</div>
										<button class='icon-plus icon-w25 c-left ml-10'
										        onclick='fn_showPreviewPage(event)'></button>
									</div>
									<div class='c-left clear mr-10'>
										<a href='' class=''>
											<span class='c-blue'>[2125003] 공인중개사법 일부개정법률안(김민석의원 등 10일)</span>
										</a>
									</div>
								</div>
								<div class='mt-5'>
									<span class='c-gray-l fs-14'>제안자 : 의원 / 제안일 2023.10.4 제안자 : 의원 / 제안일 2023.10.4</span>
								</div>
								<p class='text01 mt-5'>
									제안이유 및 주요내용 현행법은 개업공인중개사가 등록관청의 관할..이러한 유령 중개사무소는 사무실이 실재하지 않아 전세 사기 등 중개거래사고가
									발생하더라고 직접 찾아가 책임을 물을 수 없어 <span class='highlight-yellow'>부동산</span>거래 피해자가 발생할 우려가
									매우 큰 상황임... 이에 개업공인중개사가 중개사무소를 다른 용로도 사용하거나 다른 용로도 사용하려는 사람에게 대여하지 못하도록 하고 이를 위한반 경우
									등록관청이 해당 중개사무소의 개설등록을 취소할 수 있도록 하는 법적 근거를 마련하여 <span
											class='highlight-yellow'>부동산</span> 거래사고 발생을 사전에 차단하고자 함(제13조제7항 신설 등)....
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
					<li id='sub-law-con-4' class='sub-law-con'>
						<div class='li-con'>
							<input type='checkbox' id='con-4' class='input-chk' value='' name='search-list'>
							<div class='txt-div'>
								<div class='clear'>
									<div class='c-right clear'>
										<div class='c-left'>
											<button id='' class='btn btn-gray sub-law-btn' type='button'
											        onclick='fn_sub_law(4)'>
												﻿조 검색 20건
											</button>
										</div>
										<button class='icon-plus icon-w25 c-left ml-10'
										        onclick='fn_showPreviewPage(event)'></button>
									</div>
									<div class='c-left clear mr-10'>
										<a href='' class=''>
											<span class='c-blue'>[2125003] 공인중개사법 일부개정법률안(김민석의원 등 10일)</span>
										</a>
									</div>
								</div>
								<div class='mt-5'>
									<span class='c-gray-l fs-14'>제안자 : 의원 / 제안일 2023.10.4 제안자 : 의원 / 제안일 2023.10.4</span>
								</div>
								<p class='text01 mt-5'>
									제안이유 및 주요내용 현행법은 개업공인중개사가 등록관청의 관할..이러한 유령 중개사무소는 사무실이 실재하지 않아 전세 사기 등 중개거래사고가
									발생하더라고 직접 찾아가 책임을 물을 수 없어 <span class='highlight-yellow'>부동산</span>거래 피해자가 발생할 우려가
									매우 큰 상황임... 이에 개업공인중개사가 중개사무소를 다른 용로도 사용하거나 다른 용로도 사용하려는 사람에게 대여하지 못하도록 하고 이를 위한반 경우
									등록관청이 해당 중개사무소의 개설등록을 취소할 수 있도록 하는 법적 근거를 마련하여 <span
											class='highlight-yellow'>부동산</span> 거래사고 발생을 사전에 차단하고자 함(제13조제7항 신설 등)....
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
					<li id='sub-law-con-5' class='sub-law-con'>
						<div class='li-con'>
							<input type='checkbox' id='con-5' class='input-chk' value='' name='search-list'>
							<div class='txt-div'>
								<div class='clear'>
									<div class='c-right clear'>
										<div class='c-left'>
											<button id='' class='btn btn-gray sub-law-btn' type='button'
											        onclick='fn_sub_law(5)'>
												﻿조 검색 20건
											</button>
										</div>
										<button class='icon-plus icon-w25 c-left ml-10'
										        onclick='fn_showPreviewPage(event)'></button>
									</div>
									<div class='c-left clear mr-10'>
										<a href='' class=''>
											<span class='c-blue'>[2125003] 공인중개사법 일부개정법률안(김민석의원 등 10일)</span>
										</a>
									</div>
								</div>
								<div class='mt-5'>
									<span class='c-gray-l fs-14'>제안자 : 의원 / 제안일 2023.10.4 제안자 : 의원 / 제안일 2023.10.4</span>
								</div>
								<p class='text01 mt-5'>
									제안이유 및 주요내용 현행법은 개업공인중개사가 등록관청의 관할..이러한 유령 중개사무소는 사무실이 실재하지 않아 전세 사기 등 중개거래사고가
									발생하더라고 직접 찾아가 책임을 물을 수 없어 <span class='highlight-yellow'>부동산</span>거래 피해자가 발생할 우려가
									매우 큰 상황임... 이에 개업공인중개사가 중개사무소를 다른 용로도 사용하거나 다른 용로도 사용하려는 사람에게 대여하지 못하도록 하고 이를 위한반 경우
									등록관청이 해당 중개사무소의 개설등록을 취소할 수 있도록 하는 법적 근거를 마련하여 <span
											class='highlight-yellow'>부동산</span> 거래사고 발생을 사전에 차단하고자 함(제13조제7항 신설 등)....
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
