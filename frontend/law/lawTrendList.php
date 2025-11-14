<?php include '../include/header_sub.php'; ?>
<div id="container-wrap" class="container-wrap show-view-right">
	<div class="container-inner">
		<div class="container-left">
			<div class="scroll-y">
				<h2 class='h2'>입법동향</h2>
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
								제안대수 21대 처리현황
							</button>
						</h3>
						<div id="left-con-accordion01" class="accordion-collapse collapse" data-bs-parent="#left-con-accordion">
							<div class="accordion-body">
								<ul class="keyword-list list-block">
									<li class="keyword-dropdown on">
										<button class="keyword-list-btn" data-bs-target="#keyword-sub01" onClick="fn_keyword_list_open(this)"></button>
										<div>
											<input type="checkbox" id="keyword-1-1" value="규칙명" name="keyword-list" onclick="fn_chk_all(this)" data-bs-target="#keyword-sub01" >
											<label for="keyword-1-1">처리</label>
										</div>
										<ul id="keyword-sub01" class="sub-ul keyword-list list-block">
											<li>
												<input type="checkbox" id="keyword-1-1-1" value="규칙명" name="keyword-list">
												<label for="keyword-1-1-1">가결(통과)</label>
											</li>
											<li>
												<input type="checkbox" id="keyword-1-1-2" value="조문제목" name="keyword-list">
												<label for="keyword-1-1-2">대안반영</label>
											</li>
											<li>
												<input type="checkbox" id="keyword-1-1-3" value="조문내용" name="keyword-list">
												<label for="keyword-1-1-3">부결</label>
											</li>
											<li>
												<input type="checkbox" id="keyword-1-1-4" value="부칙" name="keyword-list">
												<label for="keyword-1-1-4">기타</label>
											</li>
										</ul>
									</li>
									<li>
										<input type="checkbox" id="keyword-1-2" value="조문제목" name="keyword-list">
										<label for="keyword-1-2">계류</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-1-3" value="조문내용" name="keyword-list">
										<label for="keyword-1-3">본회의부의</label>
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
						<div class="c-left">
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
					<li>
						<div class="li-con">
							<input type="checkbox" id="con-1" class="input-chk" value="" name="search-list">
							<div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
							<div class="txt-div">
								<a href="" class="txt01">
									<span class="c-blue">[2125003] 공인중개사법 일부개정법률안(김민석의원 등 10일)</span>
									<span class="c-gray-l fs-14 ml-5">제안자 : 의원 / 제안일 2023.10.4 제안자 : 의원 / 제안일 2023.10.4</span>
								</a>
								<p class="text01 mt-5">
									제안이유 및 주요내용 현행법은 개업공인중개사가 등록관청의 관할..이러한 유령 중개사무소는 사무실이 실재하지 않아 전세 사기 등 중개거래사고가 발생하더라고 직접 찾아가 책임을 물을 수 없어 <span class="highlight-yellow">부동산</span>거래 피해자가 발생할 우려가 매우 큰 상황임... 이에 개업공인중개사가 중개사무소를 다른 용로도 사용하거나 다른 용로도 사용하려는 사람에게 대여하지 못하도록 하고 이를 위한반 경우 등록관청이 해당 중개사무소의 개설등록을 취소할 수 있도록 하는 법적 근거를 마련하여 <span class="highlight-yellow">부동산</span> 거래사고 발생을 사전에 차단하고자 함(제13조제7항 신설 등)....
								</p>
							</div>
						</div>
					</li>
					<li>
						<div class="li-con">
							<input type="checkbox" id="con-1" class="input-chk" value="" name="search-list">
							<div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
							<div class="txt-div">
								<a href="" class="txt01">
									<span class="c-blue">[2125003] 공인중개사법 일부개정법률안(김민석의원 등 10일)</span>
									<span class="c-gray-l fs-14 ml-5">제안자 : 의원 / 제안일 2023.10.4 제안자 : 의원 / 제안일 2023.10.4</span>
								</a>
								<p class="text01 mt-5">
									제안이유 및 주요내용 현행법은 개업공인중개사가 등록관청의 관할..이러한 유령 중개사무소는 사무실이 실재하지 않아 전세 사기 등 중개거래사고가 발생하더라고 직접 찾아가 책임을 물을 수 없어 <span class="highlight-yellow">부동산</span>거래 피해자가 발생할 우려가 매우 큰 상황임... 이에 개업공인중개사가 중개사무소를 다른 용로도 사용하거나 다른 용로도 사용하려는 사람에게 대여하지 못하도록 하고 이를 위한반 경우 등록관청이 해당 중개사무소의 개설등록을 취소할 수 있도록 하는 법적 근거를 마련하여 <span class="highlight-yellow">부동산</span> 거래사고 발생을 사전에 차단하고자 함(제13조제7항 신설 등)....
								</p>
							</div>
						</div>
					</li>
					<li>
						<div class="li-con">
							<input type="checkbox" id="con-1" class="input-chk" value="" name="search-list">
							<div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
							<div class="txt-div">
								<a href="" class="txt01">
									<span class="c-blue">[2125003] 공인중개사법 일부개정법률안(김민석의원 등 10일)</span>
									<span class="c-gray-l fs-14 ml-5">제안자 : 의원 / 제안일 2023.10.4 제안자 : 의원 / 제안일 2023.10.4</span>
								</a>
								<p class="text01 mt-5">
									제안이유 및 주요내용 현행법은 개업공인중개사가 등록관청의 관할..이러한 유령 중개사무소는 사무실이 실재하지 않아 전세 사기 등 중개거래사고가 발생하더라고 직접 찾아가 책임을 물을 수 없어 <span class="highlight-yellow">부동산</span>거래 피해자가 발생할 우려가 매우 큰 상황임... 이에 개업공인중개사가 중개사무소를 다른 용로도 사용하거나 다른 용로도 사용하려는 사람에게 대여하지 못하도록 하고 이를 위한반 경우 등록관청이 해당 중개사무소의 개설등록을 취소할 수 있도록 하는 법적 근거를 마련하여 <span class="highlight-yellow">부동산</span> 거래사고 발생을 사전에 차단하고자 함(제13조제7항 신설 등)....
								</p>
							</div>
						</div>
					</li>
					<li>
						<div class="li-con">
							<input type="checkbox" id="con-1" class="input-chk" value="" name="search-list">
							<div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
							<div class="txt-div">
								<a href="" class="txt01">
									<span class="c-blue">[2125003] 공인중개사법 일부개정법률안(김민석의원 등 10일)</span>
									<span class="c-gray-l fs-14 ml-5">제안자 : 의원 / 제안일 2023.10.4 제안자 : 의원 / 제안일 2023.10.4</span>
								</a>
								<p class="text01 mt-5">
									제안이유 및 주요내용 현행법은 개업공인중개사가 등록관청의 관할..이러한 유령 중개사무소는 사무실이 실재하지 않아 전세 사기 등 중개거래사고가 발생하더라고 직접 찾아가 책임을 물을 수 없어 <span class="highlight-yellow">부동산</span>거래 피해자가 발생할 우려가 매우 큰 상황임... 이에 개업공인중개사가 중개사무소를 다른 용로도 사용하거나 다른 용로도 사용하려는 사람에게 대여하지 못하도록 하고 이를 위한반 경우 등록관청이 해당 중개사무소의 개설등록을 취소할 수 있도록 하는 법적 근거를 마련하여 <span class="highlight-yellow">부동산</span> 거래사고 발생을 사전에 차단하고자 함(제13조제7항 신설 등)....
								</p>
							</div>
						</div>
					</li>
					<li>
						<div class="li-con">
							<input type="checkbox" id="con-1" class="input-chk" value="" name="search-list">
							<div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
							<div class="txt-div">
								<a href="" class="txt01">
									<span class="c-blue">[2125003] 공인중개사법 일부개정법률안(김민석의원 등 10일)</span>
									<span class="c-gray-l fs-14 ml-5">제안자 : 의원 / 제안일 2023.10.4 제안자 : 의원 / 제안일 2023.10.4</span>
								</a>
								<p class="text01 mt-5">
									제안이유 및 주요내용 현행법은 개업공인중개사가 등록관청의 관할..이러한 유령 중개사무소는 사무실이 실재하지 않아 전세 사기 등 중개거래사고가 발생하더라고 직접 찾아가 책임을 물을 수 없어 <span class="highlight-yellow">부동산</span>거래 피해자가 발생할 우려가 매우 큰 상황임... 이에 개업공인중개사가 중개사무소를 다른 용로도 사용하거나 다른 용로도 사용하려는 사람에게 대여하지 못하도록 하고 이를 위한반 경우 등록관청이 해당 중개사무소의 개설등록을 취소할 수 있도록 하는 법적 근거를 마련하여 <span class="highlight-yellow">부동산</span> 거래사고 발생을 사전에 차단하고자 함(제13조제7항 신설 등)....
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
