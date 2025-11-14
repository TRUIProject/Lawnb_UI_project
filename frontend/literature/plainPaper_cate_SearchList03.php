<?php include '../include/header_sub_detail.php'; ?>
<div id='container-wrap' class='container-wrap show-view-right detail-search'>
	<div class="container-inner">
		<div class="container-left">
			<div class='scroll-y'>
				<h2 class='h2'>평석논문</h2>
				<ul id="left-con-accordion" class="accordion">
					<li class="accordion-item">
						<h3 class="accordion-header">
							<button class="accordion-button show" type="button" data-bs-target="#left-con-accordion01">
								검색결과
							</button>
						</h3>
						<div id="left-con-accordion01" class="accordion-collapse collapse" data-bs-parent="#left-con-accordion">
							<div class="accordion-body">
								<ul class="keyword-list list-block">
									<li>
										<input type="checkbox" id="keyword-1-1" value="판례" name="keyword-list">
										<label for="keyword-1-1">행정학<span class="ml-5 fs-12 c-gray-l">26</span></label>
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
									</li>
								</ul>
							</div>
						</div>
					</li>
				</ul>
				<div class='btn-wrap border-top'>
					<div class='ta-c'>
						<button class='btn-blue btn-m'>
							<div class='str pl-20'><span class='n-i n-i-reset n-i-w15 str-ltc'></span>초기화</div>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="container-right">
			<div class="pr-2">
				<button class="btn-none w-100p btn-l dis-b btn-shadow">나의 학회/간행물 바로가기</button>
			</div>
			<!-- 최근 조회 시작 // -->
			<div class="reset-con-list pt-40">
				<div class="reset-con-item">
					<h3 class="right-header">최근 조회 논문평석</h3>
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
			<!-- // 최근 조회 끝 -->
		</div>
		<div class="container-center">
			<div class="content-wrap">
				<div class="hr-b mb-30 clear pb-30">
					<div class="c-left">
						<p class="mb-10">
							<a href="" class="fs-14">행정학</a> <i class="icon-" data-icon=""></i>
						</p>
						<p class="fs-18 fw-700">
							<a href="" class="c-blue fs-18">가톨릭대학교 정부혁신생산성연구소</a>
							<i class="icon-" data-icon=""></i>
							<a href="" class="c-blue fs-18">정부와 정책</a>
						</p>
					</div>
					<div class="c-right clear">
						<button class="btn-none btn-m"> <i class="icon-" data-icon=""></i>학회/간행물 리스트 보기</button>
					</div>
				</div>
				<div class="clear mb-15">
					<div class="c-left">
						<b>검색결과 8건</b> <span class="fs-14">1/1</span>
					</div>
					<div class="c-right clear">
						<button id="detail-search-btn" class="btn-blue btn-m" onclick="fn_ct_popup('detail-search')">상세검색</button>
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
							<input type="checkbox" id="con-1" class="input-chk" value="" name="search-list">
							<div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
							<div class="txt-div">
								<a href="" class="txt01">[학회논문] 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목</a>
								<p class="fs-16 mt-5">
									서브제목입니다. 서브제목을 입력해주세요.
								</p>
								<p class="fs-14 c-gray-l mt-5">
									서브제목입니다. 서브제목을 입력해주세요.
								</p>
								<p class="fs-14 mt-5">
									서브제목입니다. 서브제목을 입력해주세요. 서브제목을 입력해주세요.서브제목을 입력해주세요.서브제목을 입력해주세요.서브제목을 입력해주세요.서브제목을 입력해주세요.서브제목을 입력해주세요.서브제목을 입력해주세요.
								</p>
							</div>
						</div>
					</li>
					<li>
						<div class="li-con">
							<input type="checkbox" id="con-1" class="input-chk" value="" name="search-list">
							<div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
							<div class="txt-div">
								<a href="" class="txt01">[학회논문] 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목</a>
								<p class="fs-16 mt-5">
									서브제목입니다. 서브제목을 입력해주세요.
								</p>
								<p class="fs-14 c-gray-l mt-5">
									서브제목입니다. 서브제목을 입력해주세요.
								</p>
								<p class="fs-14 mt-5">
									서브제목입니다. 서브제목을 입력해주세요. 서브제목을 입력해주세요.서브제목을 입력해주세요.서브제목을 입력해주세요.서브제목을 입력해주세요.서브제목을 입력해주세요.서브제목을 입력해주세요.서브제목을 입력해주세요.
								</p>
							</div>
						</div>
					</li>
					<li>
						<div class="li-con">
							<input type="checkbox" id="con-1" class="input-chk" value="" name="search-list">
							<div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
							<div class="txt-div">
								<a href="" class="txt01">[학회논문] 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목</a>
								<p class="fs-16 mt-5">
									서브제목입니다. 서브제목을 입력해주세요.
								</p>
								<p class="fs-14 c-gray-l mt-5">
									서브제목입니다. 서브제목을 입력해주세요.
								</p>
								<p class="fs-14 mt-5">
									서브제목입니다. 서브제목을 입력해주세요. 서브제목을 입력해주세요.서브제목을 입력해주세요.서브제목을 입력해주세요.서브제목을 입력해주세요.서브제목을 입력해주세요.서브제목을 입력해주세요.서브제목을 입력해주세요.
								</p>
							</div>
						</div>
					</li>
					<li>
						<div class="li-con">
							<input type="checkbox" id="con-1" class="input-chk" value="" name="search-list">
							<div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
							<div class="txt-div">
								<a href="" class="txt01">[학회논문] 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목</a>
								<p class="fs-16 mt-5">
									서브제목입니다. 서브제목을 입력해주세요.
								</p>
								<p class="fs-14 c-gray-l mt-5">
									서브제목입니다. 서브제목을 입력해주세요.
								</p>
								<p class="fs-14 mt-5">
									서브제목입니다. 서브제목을 입력해주세요. 서브제목을 입력해주세요.서브제목을 입력해주세요.서브제목을 입력해주세요.서브제목을 입력해주세요.서브제목을 입력해주세요.서브제목을 입력해주세요.서브제목을 입력해주세요.
								</p>
							</div>
						</div>
					</li>
					<li>
						<div class="li-con">
							<input type="checkbox" id="con-1" class="input-chk" value="" name="search-list">
							<div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
							<div class="txt-div">
								<a href="" class="txt01">[학회논문] 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목 논문제목</a>
								<p class="fs-16 mt-5">
									서브제목입니다. 서브제목을 입력해주세요.
								</p>
								<p class="fs-14 c-gray-l mt-5">
									서브제목입니다. 서브제목을 입력해주세요.
								</p>
								<p class="fs-14 mt-5">
									서브제목입니다. 서브제목을 입력해주세요. 서브제목을 입력해주세요.서브제목을 입력해주세요.서브제목을 입력해주세요.서브제목을 입력해주세요.서브제목을 입력해주세요.서브제목을 입력해주세요.서브제목을 입력해주세요.
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
<div id="detail-search-popup" class="ct-popup-wrap bg30">
	<div class="w700">
		<div class="content-bg">
			<div class="clear mb-20">
				<p class="c-left c-blue fw-700 fs-18">상세검색</p>
				<p class="c-right"><button class="btn" onclick="fn_popup_close('detail-search')"><span class="icon-w25 icon-x-mark"></span></button></p>
			</div>
			<div class="sub-main-con-warp">
				<div class="sub-main-con">
					<div class="con">
						<div class="input-box str">
							<div class="dis-t">
								<div class="dis-tr">
									<div class="dis-th">
										<label for="keyword-search">검색어</label>
									</div>
									<div class="dis-tc">
										<input id="keyword-search" type="text" class="input-css01" placeholder="검색어">
									</div>
								</div>
							</div>
						</div>
						<div class="input-box str">
							<div class="dis-t">
								<div class="dis-tr">
									<div class="dis-th">
										<label for="keyword-except">제외어</label>
									</div>
									<div class="dis-tc">
										<input id="keyword-except" type="text" class="input-css01" placeholder="제외어">
										<ul class="keyword-chk-list mt-10">
											<li>
												<input type="checkbox" id="keyword-1-1" value="" name="keyword-list" checked="">
												<label for="keyword-1-1">전체</label>
											</li>
											<li>
												<input type="checkbox" id="keyword-1-2" value="" name="keyword-list" checked="">
												<label for="keyword-1-2">제목</label>
											</li>
											<li>
												<input type="checkbox" id="keyword-1-3" value="" name="keyword-list" checked="">
												<label for="keyword-1-3">본문(초록)</label>
											</li>
											<li>
												<input type="checkbox" id="keyword-1-4" value="" name="keyword-list" checked="">
												<label for="keyword-1-4">저자</label>
											</li>
											<li>
												<input type="checkbox" id="keyword-1-6" value="" name="keyword-list" checked="">
												<label for="keyword-1-6">주제어</label>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="search-area-wrap" class="search-area-wrap con">
						<div class="setting-box">
							<button class="dis-b str" onclick="fn_toggle_slide(this)" data-target="#toggle01" data-warp="#search-area-wrap">
								<span class="icon-plus02 icon-w15"></span> 검색범위 상세설정
								<span class="icon-arrow-up icon-w20 str-rt"></span>
							</button>
						</div>
						<div id="toggle01" class="search-area-con input-box str mt-20">
							<div class="input-box str">
								<div class="dis-t">
									<div class="dis-tr">
										<div class="dis-th">
											<label for="keyword-except">종류</label>
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
											<label for="keyword-except">발행연도</label>
										</div>
										<div class="dis-tc">
											<div class="dis-t">
												<div class="dis-tr">
													<div class="dis-tc pr-10">
														<select id="select" class="select-css01">
															<option>기간선택</option>
															<option>선택2</option>
															<option>선택3</option>
															<option>선택4</option>
														</select>
													</div>
													<div class="dis-tc pr-5"><input id="keyword-except" type="date" class="input-css01" placeholder="년/월/일"></div>
													<div class="dis-tc pr-5 ta-c">~</div>
													<div class="dis-tc"><input id="keyword-except" type="date" class="input-css01" placeholder="년/월/일"></div>
												</div>
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
<?php include '../include/footer_sub.php'; ?>
