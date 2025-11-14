<?php include '../include/header_sub.php';?>
<div id="container-wrap" class="container-wrap show-view-right">
	<div class="container-inner">
		<div class="container-left">
			<div class="scroll-y">
				<h2 class='h2'>조약</h2>
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
								검색결과
							</button>
						</h3>
						<div id="left-con-accordion01" class="accordion-collapse collapse" data-bs-parent="#left-con-accordion">
							<div class="accordion-body">
								<ul class="keyword-list list-block">
									<li class="keyword-dropdown">
										<button class="keyword-list-btn" data-bs-target="#result-con-01" onClick="fn_keyword_list_open(this)"></button>
										<div class="str keyword-list-hd">
											<input type="checkbox" id="result-1" value="" name="keyword-list" onclick="fn_chk_all(this)" data-bs-target="#result-con-01" >
											<label for="result-1">양자조약</label>
										</div>
										<ul id="result-con-01" class="sub-ul keyword-list list-block">
											<li>
												<input type="checkbox" id="result-1-1" value="" name="keyword-list">
												<label for="result-1-1">양자조약1 <span class="ml-5 fs-12">15</span></label>
											</li>
											<li>
												<input type="checkbox" id="result-1-2" value="" name="keyword-list">
												<label for="result-1-2">양자조약2 <span class="ml-5 fs-12">15</span></label>
											</li>
											<li>
												<input type="checkbox" id="result-1-3" value="" name="keyword-list">
												<label for="result-1-3">양자조약2 <span class="ml-5 fs-12">15</span></label>
											</li>
											<li>
												<input type="checkbox" id="result-1-4" value="" name="keyword-list">
												<label for="result-1-4">양자조약4 <span class="ml-5 fs-12">15</span></label>
											</li>
										</ul>
									</li>
									<li class="keyword-dropdown">
										<button class="keyword-list-btn" data-bs-target="#result-con-02" onClick="fn_keyword_list_open(this)"></button>
										<div class="str keyword-list-hd">
											<input type="checkbox" id="result-2" value="" name="keyword-list" onclick="fn_chk_all(this)" data-bs-target="#result-con-02" >
											<label for="result-2">다자조약</label>
										</div>
										<ul id="result-con-02" class="sub-ul keyword-list list-block">
											<li>
												<input type="checkbox" id="result-2-1" value="" name="keyword-list">
												<label for="result-2-1">다자조약-1 <span class="ml-5 fs-12">15</span></label>
											</li>
											<li>
												<input type="checkbox" id="result-2-2" value="" name="keyword-list">
												<label for="result-2-2">다자조약-2 <span class="ml-5 fs-12">15</span></label>
											</li>
											<li>
												<input type="checkbox" id="result-2-3" value="" name="keyword-list">
												<label for="result-2-3">다자조약-3 <span class="ml-5 fs-12">15</span></label>
											</li>
											<li>
												<input type="checkbox" id="result-2-4" value="" name="keyword-list">
												<label for="result-2-4">다자조약-4 <span class="ml-5 fs-12">15</span></label>
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
				<div class="tab-button-wrap mb-15 clear">
					<div class="l-div c-left">
						<input type="checkbox" id="con-1" class="input-chk" value="판례" name="keyword-list02">
						<button class="btn-none btn-m ml-10">다운로드</button>
					</div>
					<div class="r-div c-right clear">
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
									<span class="icon icon-order">조약명</span>
								</button>
								<button class="btn pr-5" onclick="fn_order_con(this);">
									<span class="icon icon-order">발효일</span>
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
					<li>
						<div class="li-con">
							<input type="checkbox" id="con-1" class="input-chk" value="판례" name="keyword-list02">
							<div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
							<div class="txt-div">
								<a href="" class="txt01">대한민국 정부와 이란회교공화국 정부 간의 소득 및 자본에 대한 조세에 관한 이중과세방지협정</a>
								<p class="txt05 mt-5">AGREEMENT BETWEEN THE GOVERNMENT OF THE REPUBLIC OF KOREA AND THE GOVERNMENT OF THE ISLAMIC REPUBLIC OF IRAN FOR THE AVOIDANCE OF DOUBLE TAXATION WITH RESPECT TO TAXES ON INCOME AND CAPITAL</p>
								<p class="txt02 mt-5">[발효일 2009.12.8]</p>
								<p class="txt04 mt-5">속보 요약정보 중 일부 구 대학교원의 임용권자가 임용기간이 만료된 조교수에 대하여 재임용을거부하는 취지로 한 임용기간만료의 통지가 행정소송의속보 요약정보 중 일부 구 대학교원의 임용권자가 임용기간이 만료된 조교수에 대하여 재임용을거부하는 취지로 한 임용기간만료의 통지가 행정소송의속보 요약정보 중 일부 구 대학교원의 임용권자가 임용기간이 만료된 조교수에 대하여 재임용을거부하는 취지로 한 임용기간만료의 통지가 행정소송의</p>
							</div>
						</div>
					</li>
					<li>
						<div class="li-con">
							<input type="checkbox" id="con-1" class="input-chk" value="판례" name="keyword-list02">
							<div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
							<div class="txt-div">
								<a href="" class="txt01">대한민국 정부와 이란회교공화국 정부 간의 소득 및 자본에 대한 조세에 관한 이중과세방지협정</a>
								<p class="txt05 mt-5">AGREEMENT BETWEEN THE GOVERNMENT OF THE REPUBLIC OF KOREA AND THE GOVERNMENT OF THE ISLAMIC REPUBLIC OF IRAN FOR THE AVOIDANCE OF DOUBLE TAXATION WITH RESPECT TO TAXES ON INCOME AND CAPITAL</p>
								<p class="txt02 mt-5">[발효일 2009.12.8]</p>
								<p class="txt04 mt-5">속보 요약정보 중 일부 구 대학교원의 임용권자가 임용기간이 만료된 조교수에 대하여 재임용을거부하는 취지로 한 임용기간만료의 통지가 행정소송의속보 요약정보 중 일부 구 대학교원의 임용권자가 임용기간이 만료된 조교수에 대하여 재임용을거부하는 취지로 한 임용기간만료의 통지가 행정소송의속보 요약정보 중 일부 구 대학교원의 임용권자가 임용기간이 만료된 조교수에 대하여 재임용을거부하는 취지로 한 임용기간만료의 통지가 행정소송의</p>
							</div>
						</div>
					</li>
					<li>
						<div class="li-con">
							<input type="checkbox" id="con-1" class="input-chk" value="판례" name="keyword-list02">
							<div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
							<div class="txt-div">
								<a href="" class="txt01">대한민국 정부와 이란회교공화국 정부 간의 소득 및 자본에 대한 조세에 관한 이중과세방지협정</a>
								<p class="txt05 mt-5">AGREEMENT BETWEEN THE GOVERNMENT OF THE REPUBLIC OF KOREA AND THE GOVERNMENT OF THE ISLAMIC REPUBLIC OF IRAN FOR THE AVOIDANCE OF DOUBLE TAXATION WITH RESPECT TO TAXES ON INCOME AND CAPITAL</p>
								<p class="txt02 mt-5">[발효일 2009.12.8]</p>
								<p class="txt04 mt-5">속보 요약정보 중 일부 구 대학교원의 임용권자가 임용기간이 만료된 조교수에 대하여 재임용을거부하는 취지로 한 임용기간만료의 통지가 행정소송의속보 요약정보 중 일부 구 대학교원의 임용권자가 임용기간이 만료된 조교수에 대하여 재임용을거부하는 취지로 한 임용기간만료의 통지가 행정소송의속보 요약정보 중 일부 구 대학교원의 임용권자가 임용기간이 만료된 조교수에 대하여 재임용을거부하는 취지로 한 임용기간만료의 통지가 행정소송의</p>
							</div>
						</div>
					</li>
					<li>
						<div class="li-con">
							<input type="checkbox" id="con-1" class="input-chk" value="판례" name="keyword-list02">
							<div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
							<div class="txt-div">
								<a href="" class="txt01">대한민국 정부와 이란회교공화국 정부 간의 소득 및 자본에 대한 조세에 관한 이중과세방지협정</a>
								<p class="txt05 mt-5">AGREEMENT BETWEEN THE GOVERNMENT OF THE REPUBLIC OF KOREA AND THE GOVERNMENT OF THE ISLAMIC REPUBLIC OF IRAN FOR THE AVOIDANCE OF DOUBLE TAXATION WITH RESPECT TO TAXES ON INCOME AND CAPITAL</p>
								<p class="txt02 mt-5">[발효일 2009.12.8]</p>
								<p class="txt04 mt-5">속보 요약정보 중 일부 구 대학교원의 임용권자가 임용기간이 만료된 조교수에 대하여 재임용을거부하는 취지로 한 임용기간만료의 통지가 행정소송의속보 요약정보 중 일부 구 대학교원의 임용권자가 임용기간이 만료된 조교수에 대하여 재임용을거부하는 취지로 한 임용기간만료의 통지가 행정소송의속보 요약정보 중 일부 구 대학교원의 임용권자가 임용기간이 만료된 조교수에 대하여 재임용을거부하는 취지로 한 임용기간만료의 통지가 행정소송의</p>
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