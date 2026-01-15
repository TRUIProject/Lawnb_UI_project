<?php include '../include/header_sub.php';?>
<div id="container-wrap" class="container-wrap show-view-right">
	<div class="container-inner">
		<div class="container-left">
			<div class="scroll-y">
				<h2 class='h2'>판례해설</h2>
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
						<div id='word-search-list' class="word-add-list"></div>
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
						<h2 class="accordion-header">
							<button class="accordion-button show" type="button" data-bs-target="#left-con-accordion01">
								판례해설
							</button>
						</h2>
						<div id="left-con-accordion01" class="accordion-collapse collapse" data-bs-parent="#left-con-accordion">
							<div class="accordion-body">
								<ul class="keyword-list list-block">

									<li>
										<input type='checkbox' id='keyword-1-1' value=''
										       name='keyword-list'>
										<label for='keyword-1-1'>전체</label>
									</li>
									<li>
										<input type='checkbox' id='keyword-1-2' value=''
										       name='keyword-list'>
										<label for='keyword-1-2'>제목</label>
									</li>
									<li>
										<input type='checkbox' id='keyword-1-3' value=''
										       name='keyword-list'>
										<label for='keyword-1-3'>본문</label>
									</li>
									<li>
										<input type='checkbox' id='keyword-1-4' value=''
										       name='keyword-list'>
										<label for='keyword-1-4'>대상판례</label>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li class="accordion-item">
						<h2 class="accordion-header">
							<button class="accordion-button show" type="button" data-bs-target="#left-con-accordion03">
								분야
							</button>
						</h2>
						<div id="left-con-accordion03" class="accordion-collapse collapse" data-bs-parent="#left-con-accordion">
							<div class="accordion-body">
								<ul class="keyword-list list-block">

									<li>
										<input type='checkbox' id='field-4' value='전체'
										       name='field-list[]'>
										<label for='field-4'>전체</label>
									</li>
									<li>
										<input type='checkbox' id='field-5' value='민법'
										       name='field-list[]'>
										<label for='field-5'>민법</label>
									</li>
									<li>
										<input type='checkbox' id='field-6' value='상사'
										       name='field-list[]'>
										<label for='field-6'>상사</label>
									</li>
									<li>
										<input type='checkbox' id='field-7' value='민사소송'
										       name='field-list[]'>
										<label for='field-7'>민사소송</label>
									</li>
									<li>
										<input type='checkbox' id='field-8' value='민사집행'
										       name='field-list[]'>
										<label for='field-8'>민사집행</label>
									</li>
									<li>
										<input type='checkbox' id='field-9' value='노동'
										       name='field-list[]'>
										<label for='field-9'>노동</label>
									</li>
									<li>
										<input type='checkbox' id='field-10' value='회생'
										       name='field-list[]'>
										<label for='field-10'>회생</label>
									</li>
									<li>
										<input type='checkbox' id='field-11' value='지식재산권'
										       name='field-list[]'>
										<label for='field-11'>지식재산권</label>
									</li>
									<li>
										<input type='checkbox' id='field-12' value='행정'
										       name='field-list[]'>
										<label for='field-12'>행정</label>
									</li>
									<li>
										<input type='checkbox' id='field-13' value='개별 법률 판례'
										       name='field-list[]'>
										<label for='field-13'>개별 법률 판례</label>
									</li>

									<li>
										<input type='checkbox' id='field-14' value='국세기본'
										       name='field-list[]'>
										<label for='field-14'>국세기본</label>
									</li>
									<li>
										<input type='checkbox' id='field-15' value='국제조세'
										       name='field-list[]'>
										<label for='field-15'>국제조세</label>
									</li>
									<li>
										<input type='checkbox' id='field-16' value='법인세'
										       name='field-list[]'>
										<label for='field-16'>법인세</label>
									</li>
									<li>
										<input type='checkbox' id='field-17' value='부가세'
										       name='field-list[]'>
										<label for='field-17'>부가세</label>
									</li>
									<li>
										<input type='checkbox' id='field-18' value='상증세'
										       name='field-list[]'>
										<label for='field-18'>상증세</label>
									</li>
									<li>
										<input type='checkbox' id='field-19' value='소득세'
										       name='field-list[]'>
										<label for='field-19'>소득세</label>
									</li>
									<li>
										<input type='checkbox' id='field-20' value='조세범처벌·처벌절차'
										       name='field-list[]'>
										<label for='field-20'>조세범처벌 · 처벌절차</label>
									</li>
									<li>
										<input type='checkbox' id='field-21' value='조세특례제한'
										       name='field-list[]'>
										<label for='field-21'>조세특례제한</label>
									</li>
									<li>
										<input type='checkbox' id='field-22' value='종부세'
										       name='field-list[]'>
										<label for='field-22'>종부세</label>
									</li>
									<li>
										<input type='checkbox' id='field-23' value='지방세특례제한'
										       name='field-list[]'>
										<label for='field-23'>지방세특례제한</label>
									</li>
									<li>
										<input type='checkbox' id='field-24' value='조세 기타'
										       name='field-list[]'>
										<label for='field-24'>조세 기타</label>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li class="accordion-item">
						<h2 class="accordion-header">
							<button class="accordion-button show" type="button" data-bs-target="#left-con-accordion04">
								선고일자
							</button>
						</h2>
						<div id="left-con-accordion04" class="accordion-collapse collapse" data-bs-parent="#left-con-accordion">
							<div class="accordion-body">
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
			<div>
                <?php include '../common/guide_operator.php'; ?>
			</div>
			<div class="direct-list mt-30">
				<div class="direct-item">
					<h2 class="right-header">다이렉트 검색</h2>
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
			<div class="reset-con-list pt-30">
				<div class="reset-con-item">
					<h2 class="right-header">최근 조회 판례연구</h2>
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
				<div class='clear mb-10'>
					<div class='c-left'>
						<span class='fs-14'>검색어 '동해물과', '백두산이', '마르고'</span>
					</div>
				</div>
				<div class="clear mb-15">
					<div class="c-left">
						<b>검색결과 8건</b> <span class="fs-14">1/1</span>
					</div>
					<div class='r-div c-right clear'>
						<button class='btn-blue btn-m' onclick="fn_add_class_on('#detail-search-popup')">상세검색</button>
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
								<button class="btn on">정확도</button>
								<button class="btn pr-5" onclick="fn_order_con(this);">
									<span class="icon icon-order resent">발행일</span>
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
								<a href="" class="txt01">[판례연구] 공인중개사의 실거래가신고의무제도의 문제점</a>
								<div class='mt-5'>
									<span class='c-gray-l fs-14'>이승우 / 헌법판례연구 11 / 한국헌법판례연구학회 / 박영사 / 2010.02.20 / 31Page</span>
								</div>
								<p class='txt04 mt-5'>상세 내용이 들어갑니다. 상세 내용이 들어갑니다. 상세 내용이 들어갑니다. 상세 내용이 들어갑니다. 상세 내용이 들어갑니다. 상세 내용이 들어갑니다. 상세 내용이 들어갑니다. 상세 내용이 들어갑니다. 상세 내용이 들어갑니다. 상세 내용이 들어갑니다. 상세 내용이 들어갑니다. 상세 내용이 들어갑니다.</p>
							</div>
						</div>
						<div class="clear mt-10">
							<div class="clear c-right">
								<a href="" class="c-left"><span class="badge-gray badge-mid">관련판례 7건</span></a>
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
        <?php include './explanation_preview.php'; ?>
	</div>
</div>
<div id='detail-search-popup' class='ct-popup-wrap detail-search-popup bg30 str'>
	<div class='str-center'>
		<div class='bg-border w-700px'>
			<div class='top_title clear'>
				<div class='top_title_txt c-left c-blue'>판례해설 상세검색</div>
				<div class='top_title_group c-right'>
					<button class='btn btn-none btn-s' onclick="fn_remove_class_on('#detail-search-popup')"><i
								class='icon-close' data-icon=''></i></button>
				</div>
			</div>
            <?php include './explanation_search.php'; ?>
		</div>
	</div>
</div>
<?php include '../include/footer_sub.php'; ?>
