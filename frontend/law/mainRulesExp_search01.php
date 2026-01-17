<?php include '../include/header_sub.php';?>
<div id="container-wrap" class="container-wrap show-view-right">
	<div class="container-inner">
		<div class="container-left">
			<div class="scroll-y">
				<h2 class='h2'>주요 예규 해설</h2>
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
								필터
							</button>
						</h2>
						<div id="left-con-accordion01" class="accordion-collapse collapse" data-bs-parent="#left-con-accordion">
							<div class="accordion-body">
								<ul class='keyword-list list-block'>
									<li class='sub-num'>
										<input type='checkbox' id='tax-1' value='법인세법' name='keyword-list'>
										<label for='tax-1'>법인세법</label>
										<span class='sub-ul-num'>100</span>
									</li>
									<li class='sub-num'>
										<input type='checkbox' id='tax-2' value='소득세법' name='keyword-list'>
										<label for='tax-2'>소득세법</label>
										<span class='sub-ul-num'>99</span>
									</li>
									<li class='sub-num'>
										<input type='checkbox' id='tax-3' value='부가가치세법' name='keyword-list'>
										<label for='tax-3'>부가가치세법</label>
										<span class='sub-ul-num'>98</span>
									</li>
									<li class='sub-num'>
										<input type='checkbox' id='tax-4' value='상속세 및 증여세법' name='keyword-list'>
										<label for='tax-4'>상속세 및 증여세법</label>
										<span class='sub-ul-num'>97</span>
									</li>
									<li class='sub-num'>
										<input type='checkbox' id='tax-5' value='조세특례 제한법' name='keyword-list'>
										<label for='tax-5'>조세특례 제한법</label>
										<span class='sub-ul-num'>96</span>
									</li>
									<li class='sub-num'>
										<input type='checkbox' id='tax-6' value='국제조세 조정관련법률' name='keyword-list'>
										<label for='tax-6'>국제조세 조정관련법률</label>
										<span class='sub-ul-num'>95</span>
									</li>
									<li class='sub-num'>
										<input type='checkbox' id='tax-7' value='국세기본법' name='keyword-list'>
										<label for='tax-7'>국세기본법</label>
										<span class='sub-ul-num'>94</span>
									</li>
									<li class='sub-num'>
										<input type='checkbox' id='tax-8' value='국세징수법' name='keyword-list'>
										<label for='tax-8'>국세징수법</label>
										<span class='sub-ul-num'>93</span>
									</li>
									<li class='sub-num'>
										<input type='checkbox' id='tax-9' value='종합부동산세' name='keyword-list'>
										<label for='tax-9'>종합부동산세</label>
										<span class='sub-ul-num'>92</span>
									</li>
									<li class='sub-num'>
										<input type='checkbox' id='tax-10' value='개별소비세' name='keyword-list'>
										<label for='tax-10'>개별소비세</label>
										<span class='sub-ul-num'>91</span>
									</li>
									<li class='sub-num'>
										<input type='checkbox' id='tax-11' value='주세' name='keyword-list'>
										<label for='tax-11'>주세</label>
										<span class='sub-ul-num'>90</span>
									</li>
									<li class='sub-num'>
										<input type='checkbox' id='tax-12' value='교육세법' name='keyword-list'>
										<label for='tax-12'>교육세법</label>
										<span class='sub-ul-num'>89</span>
									</li>
									<li class='sub-num'>
										<input type='checkbox' id='tax-13' value='농어촌특별세법' name='keyword-list'>
										<label for='tax-13'>농어촌특별세법</label>
										<span class='sub-ul-num'>88</span>
									</li>
									<li class='sub-num'>
										<input type='checkbox' id='tax-14' value='조세범처벌법' name='keyword-list'>
										<label for='tax-14'>조세범처벌법</label>
										<span class='sub-ul-num'>87</span>
									</li>
									<li class='sub-num'>
										<input type='checkbox' id='tax-15' value='조세범처벌절차법' name='keyword-list'>
										<label for='tax-15'>조세범처벌절차법</label>
										<span class='sub-ul-num'>86</span>
									</li>
									<li class='sub-num'>
										<input type='checkbox' id='tax-16' value='사전답변' name='keyword-list'>
										<label for='tax-16'>사전답변</label>
									</li>
									<li class='sub-num'>
										<input type='checkbox' id='tax-17' value='질의회신' name='keyword-list'>
										<label for='tax-17'>질의회신</label>
									</li>
									<li class='sub-num'>
										<input type='checkbox' id='tax-18' value='과세기준자문' name='keyword-list'>
										<label for='tax-18'>과세기준자문</label>
									</li>
									<li class='sub-num'>
										<input type='checkbox' id='tax-19' value='조시서면질의' name='keyword-list'>
										<label for='tax-19'>조시서면질의</label>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li class="accordion-item">
						<h2 class="accordion-header">
							<button class="accordion-button show" type="button" data-bs-target="#left-con-accordion04">
								발행일자
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
								<a href="" class="txt01">무급휴업, 휴직자에 대한 고용유지지원금의 과세대상여부</a>
								<div class='mt-5'>
									<span class='c-gray-l fs-14'>기획재정부 소득세제과-407 생산일자 2020. 8. 5</span>
								</div>
								<p class='txt04 mt-5'>「부동산개발업의 관리 및 육성에 관한 법률」 제4조제1항에 따른 부동산개발업 등록을 한 후에 그 부동
									산 등을 대상으로 부동산개발업을 영위할 수 있는지? ..「부동산개발업의 관리 및 육성에 관한 법률」 제4 조제1항에 따른 부동산개발업 등록을 한 이후에도 그 부동산 등을 대상으로 부동산개발업을 영위할 수
									없다고 할 것입니다. ....부동산개발업법 상 ..</p>
							</div>
						</div>
					</li>
					<li>
						<div class='li-con'>
							<input type='checkbox' id='con-1' class='input-chk' value='판례' name='keyword-list02'>
							<div class='str-rt'>
								<button class='icon-plus' onclick='fn_showPreviewPage(event)'></button>
							</div>
							<div class='txt-div'>
								<a href='' class='txt01'>무급휴업, 휴직자에 대한 고용유지지원금의 과세대상여부</a>
								<div class='mt-5'>
									<span class='c-gray-l fs-14'>기획재정부 소득세제과-407 생산일자 2020. 8. 5</span>
								</div>
								<p class='txt04 mt-5'>「부동산개발업의 관리 및 육성에 관한 법률」 제4조제1항에 따른 부동산개발업 등록을 한 후에 그 부동
									산 등을 대상으로 부동산개발업을 영위할 수 있는지? ..「부동산개발업의 관리 및 육성에 관한 법률」 제4 조제1항에 따른 부동산개발업 등록을 한
									이후에도 그 부동산 등을 대상으로 부동산개발업을 영위할 수
									없다고 할 것입니다. ....부동산개발업법 상 ..</p>
							</div>
						</div>
					</li>
					<li>
						<div class='li-con'>
							<input type='checkbox' id='con-1' class='input-chk' value='판례' name='keyword-list02'>
							<div class='str-rt'>
								<button class='icon-plus' onclick='fn_showPreviewPage(event)'></button>
							</div>
							<div class='txt-div'>
								<a href='' class='txt01'>무급휴업, 휴직자에 대한 고용유지지원금의 과세대상여부</a>
								<div class='mt-5'>
									<span class='c-gray-l fs-14'>기획재정부 소득세제과-407 생산일자 2020. 8. 5</span>
								</div>
								<p class='txt04 mt-5'>「부동산개발업의 관리 및 육성에 관한 법률」 제4조제1항에 따른 부동산개발업 등록을 한 후에 그 부동
									산 등을 대상으로 부동산개발업을 영위할 수 있는지? ..「부동산개발업의 관리 및 육성에 관한 법률」 제4 조제1항에 따른 부동산개발업 등록을 한
									이후에도 그 부동산 등을 대상으로 부동산개발업을 영위할 수
									없다고 할 것입니다. ....부동산개발업법 상 ..</p>
							</div>
						</div>
					</li>
					<li>
						<div class='li-con'>
							<input type='checkbox' id='con-1' class='input-chk' value='판례' name='keyword-list02'>
							<div class='str-rt'>
								<button class='icon-plus' onclick='fn_showPreviewPage(event)'></button>
							</div>
							<div class='txt-div'>
								<a href='' class='txt01'>무급휴업, 휴직자에 대한 고용유지지원금의 과세대상여부</a>
								<div class='mt-5'>
									<span class='c-gray-l fs-14'>기획재정부 소득세제과-407 생산일자 2020. 8. 5</span>
								</div>
								<p class='txt04 mt-5'>「부동산개발업의 관리 및 육성에 관한 법률」 제4조제1항에 따른 부동산개발업 등록을 한 후에 그 부동
									산 등을 대상으로 부동산개발업을 영위할 수 있는지? ..「부동산개발업의 관리 및 육성에 관한 법률」 제4 조제1항에 따른 부동산개발업 등록을 한
									이후에도 그 부동산 등을 대상으로 부동산개발업을 영위할 수
									없다고 할 것입니다. ....부동산개발업법 상 ..</p>
							</div>
						</div>
					</li>
					<li>
						<div class='li-con'>
							<input type='checkbox' id='con-1' class='input-chk' value='판례' name='keyword-list02'>
							<div class='str-rt'>
								<button class='icon-plus' onclick='fn_showPreviewPage(event)'></button>
							</div>
							<div class='txt-div'>
								<a href='' class='txt01'>무급휴업, 휴직자에 대한 고용유지지원금의 과세대상여부</a>
								<div class='mt-5'>
									<span class='c-gray-l fs-14'>기획재정부 소득세제과-407 생산일자 2020. 8. 5</span>
								</div>
								<p class='txt04 mt-5'>「부동산개발업의 관리 및 육성에 관한 법률」 제4조제1항에 따른 부동산개발업 등록을 한 후에 그 부동
									산 등을 대상으로 부동산개발업을 영위할 수 있는지? ..「부동산개발업의 관리 및 육성에 관한 법률」 제4 조제1항에 따른 부동산개발업 등록을 한
									이후에도 그 부동산 등을 대상으로 부동산개발업을 영위할 수
									없다고 할 것입니다. ....부동산개발업법 상 ..</p>
							</div>
						</div>
					</li>
					<li>
						<div class='li-con'>
							<input type='checkbox' id='con-1' class='input-chk' value='판례' name='keyword-list02'>
							<div class='str-rt'>
								<button class='icon-plus' onclick='fn_showPreviewPage(event)'></button>
							</div>
							<div class='txt-div'>
								<a href='' class='txt01'>무급휴업, 휴직자에 대한 고용유지지원금의 과세대상여부</a>
								<div class='mt-5'>
									<span class='c-gray-l fs-14'>기획재정부 소득세제과-407 생산일자 2020. 8. 5</span>
								</div>
								<p class='txt04 mt-5'>「부동산개발업의 관리 및 육성에 관한 법률」 제4조제1항에 따른 부동산개발업 등록을 한 후에 그 부동
									산 등을 대상으로 부동산개발업을 영위할 수 있는지? ..「부동산개발업의 관리 및 육성에 관한 법률」 제4 조제1항에 따른 부동산개발업 등록을 한
									이후에도 그 부동산 등을 대상으로 부동산개발업을 영위할 수
									없다고 할 것입니다. ....부동산개발업법 상 ..</p>
							</div>
						</div>
					</li>
					<li>
						<div class='li-con'>
							<input type='checkbox' id='con-1' class='input-chk' value='판례' name='keyword-list02'>
							<div class='str-rt'>
								<button class='icon-plus' onclick='fn_showPreviewPage(event)'></button>
							</div>
							<div class='txt-div'>
								<a href='' class='txt01'>무급휴업, 휴직자에 대한 고용유지지원금의 과세대상여부</a>
								<div class='mt-5'>
									<span class='c-gray-l fs-14'>기획재정부 소득세제과-407 생산일자 2020. 8. 5</span>
								</div>
								<p class='txt04 mt-5'>「부동산개발업의 관리 및 육성에 관한 법률」 제4조제1항에 따른 부동산개발업 등록을 한 후에 그 부동
									산 등을 대상으로 부동산개발업을 영위할 수 있는지? ..「부동산개발업의 관리 및 육성에 관한 법률」 제4 조제1항에 따른 부동산개발업 등록을 한
									이후에도 그 부동산 등을 대상으로 부동산개발업을 영위할 수
									없다고 할 것입니다. ....부동산개발업법 상 ..</p>
							</div>
						</div>
					</li>
					<li>
						<div class='li-con'>
							<input type='checkbox' id='con-1' class='input-chk' value='판례' name='keyword-list02'>
							<div class='str-rt'>
								<button class='icon-plus' onclick='fn_showPreviewPage(event)'></button>
							</div>
							<div class='txt-div'>
								<a href='' class='txt01'>무급휴업, 휴직자에 대한 고용유지지원금의 과세대상여부</a>
								<div class='mt-5'>
									<span class='c-gray-l fs-14'>기획재정부 소득세제과-407 생산일자 2020. 8. 5</span>
								</div>
								<p class='txt04 mt-5'>「부동산개발업의 관리 및 육성에 관한 법률」 제4조제1항에 따른 부동산개발업 등록을 한 후에 그 부동
									산 등을 대상으로 부동산개발업을 영위할 수 있는지? ..「부동산개발업의 관리 및 육성에 관한 법률」 제4 조제1항에 따른 부동산개발업 등록을 한
									이후에도 그 부동산 등을 대상으로 부동산개발업을 영위할 수
									없다고 할 것입니다. ....부동산개발업법 상 ..</p>
							</div>
						</div>
					</li>
					<li>
						<div class='li-con'>
							<input type='checkbox' id='con-1' class='input-chk' value='판례' name='keyword-list02'>
							<div class='str-rt'>
								<button class='icon-plus' onclick='fn_showPreviewPage(event)'></button>
							</div>
							<div class='txt-div'>
								<a href='' class='txt01'>무급휴업, 휴직자에 대한 고용유지지원금의 과세대상여부</a>
								<div class='mt-5'>
									<span class='c-gray-l fs-14'>기획재정부 소득세제과-407 생산일자 2020. 8. 5</span>
								</div>
								<p class='txt04 mt-5'>「부동산개발업의 관리 및 육성에 관한 법률」 제4조제1항에 따른 부동산개발업 등록을 한 후에 그 부동
									산 등을 대상으로 부동산개발업을 영위할 수 있는지? ..「부동산개발업의 관리 및 육성에 관한 법률」 제4 조제1항에 따른 부동산개발업 등록을 한
									이후에도 그 부동산 등을 대상으로 부동산개발업을 영위할 수
									없다고 할 것입니다. ....부동산개발업법 상 ..</p>
							</div>
						</div>
					</li>
					<li>
						<div class='li-con'>
							<input type='checkbox' id='con-1' class='input-chk' value='판례' name='keyword-list02'>
							<div class='str-rt'>
								<button class='icon-plus' onclick='fn_showPreviewPage(event)'></button>
							</div>
							<div class='txt-div'>
								<a href='' class='txt01'>무급휴업, 휴직자에 대한 고용유지지원금의 과세대상여부</a>
								<div class='mt-5'>
									<span class='c-gray-l fs-14'>기획재정부 소득세제과-407 생산일자 2020. 8. 5</span>
								</div>
								<p class='txt04 mt-5'>「부동산개발업의 관리 및 육성에 관한 법률」 제4조제1항에 따른 부동산개발업 등록을 한 후에 그 부동
									산 등을 대상으로 부동산개발업을 영위할 수 있는지? ..「부동산개발업의 관리 및 육성에 관한 법률」 제4 조제1항에 따른 부동산개발업 등록을 한
									이후에도 그 부동산 등을 대상으로 부동산개발업을 영위할 수
									없다고 할 것입니다. ....부동산개발업법 상 ..</p>
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
        <?php include './mainRulesExp_preview.php'; ?>
	</div>
</div>
<div id='detail-search-popup' class='ct-popup-wrap detail-search-popup bg30 str'>
	<div class='str-center'>
		<div class='bg-border w-700px'>
			<div class='top_title clear'>
				<div class='top_title_txt c-left c-blue'>주요 예규 해설 상세검색</div>
				<div class='top_title_group c-right'>
					<button class='btn btn-none btn-s' onclick="fn_remove_class_on('#detail-search-popup')"><i
								class='icon-close' data-icon=''></i></button>
				</div>
			</div>
            <?php include './mainRulesExp_search.php'; ?>
		</div>
	</div>
</div>
<?php include '../include/footer_sub.php'; ?>
