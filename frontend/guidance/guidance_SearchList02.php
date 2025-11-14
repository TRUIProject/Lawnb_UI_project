<?php include '../include/header_sub_detail.php'; ?>
<div id='container-wrap' class='container-wrap show-view-right detail-search'>
	<div class='container-inner'>
		<div class='container-left'>
			<div class='scroll-y'>
				<h2 class="h2">실무분야</h2>
				<ul id='left-con-accordion' class='accordion'>
					<li class='accordion-item'>
						<div class='accordion-body'>
							<ul class='keyword-list list-block'>
								<li>
									<input type='checkbox' id='keyword-1-1' value='판례' name='keyword-list'>
									<label for='keyword-1-1'>실무 분야</label>
								</li>
								<li>
									<input type='checkbox' id='keyword-1-2' value='사건번호' name='keyword-list'>
									<label for='keyword-1-2'>실무 분야</label>
								</li>
								<li>
									<input type='checkbox' id='keyword-1-3' value='재판요지' name='keyword-list'>
									<label for='keyword-1-3'>실무 분야</label>
								</li>
								<li>
									<input type='checkbox' id='keyword-1-4' value='사건명' name='keyword-list'>
									<label for='keyword-1-4'>실무 분야</label>
								</li>
							</ul>
						</div>
					</li>
					<li class='accordion-item'>
						<div class='accordion-header'>
							<button class='accordion-button show' type='button' data-bs-target='#left-con-accordion02'>
								토픽
							</button>
						</div>
						<div id='left-con-accordion02' class='accordion-collapse collapse'
						     data-bs-parent='#left-con-accordion'>
							<div class='accordion-body'>
								<ul class='keyword-list list-block'>
									<li>
										<input type='checkbox' id='keyword-2-1' value='판례' name='keyword-list02'>
										<label for='keyword-2-1'>토픽 이름</label>
									</li>
									<li>
										<input type='checkbox' id='keyword-2-2' value='사건번호' name='keyword-list02'>
										<label for='keyword-2-2'>토픽 이름</label>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li class='accordion-item'>
						<div class='accordion-header'>
							<button class='accordion-button show' type='button' data-bs-target='#left-con-accordion03'>
								가이던스 종류
							</button>
						</div>
						<div id='left-con-accordion03' class='accordion-collapse collapse'
						     data-bs-parent='#left-con-accordion'>
							<div class='accordion-body'>
								<ul class='keyword-list list-block'>
									<li>
										<input type='checkbox' id='keyword-3-1' value='' name='keyword-list'>
										<label for='keyword-3-1'>실무노트</label>
									</li>
									<li>
										<input type='checkbox' id='keyword-3-2' value='' name='keyword-list'>
										<label for='keyword-3-2'>표준문서 및 템플릿</label>
									</li>
									<li>
										<input type='checkbox' id='keyword-3-3' value='헌법재판소' name='keyword-list'>
										<label for='keyword-3-3'>체크리스트</label>
									</li>
									<li>
										<input type='checkbox' id='keyword-3-4' value='행정법원' name='keyword-list'>
										<label for='keyword-3-4'>동영상</label>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li class='accordion-item'>
						<div class='accordion-header'>
							<button class='accordion-button show' type='button' data-bs-target='#left-con-accordion04'>
								기간
							</button>
						</div>
						<div id='left-con-accordion04' class='accordion-collapse collapse'
						     data-bs-parent='#left-con-accordion'>
							<div class='accordion-body'>
								<ul class='keyword-list list-block'>
									<li>
										<input type='radio' id='date-all' value='전체' name='date-range'>
										<label for='date-all'>전체</label>
									</li>
									<li>
										<input type='radio' id='date-y1' value='최근 1년' name='date-range'>
										<label for='date-y1'>최근 1년</label>
									</li>
									<li>
										<input type='radio' id='date-y2' value='최근 2년' name='date-range'>
										<label for='date-y2'>최근 2년</label>
									</li>
									<li>
										<input type='radio' id='date-y3' value='최근 3년' name='date-range'>
										<label for='date-y3'>최근 3년</label>
									</li>
									<li>
										<input type='radio' id='date-self' value='직접선택' name='date-range'>
										<label for='date-self'>직접선택</label>
									</li>
								</ul>
							</div>
						</div>
					</li>
				</ul>
				<div class='btn-wrap border-top'>
					<div class='ta-c'>
						<button class='btn-none btn-m'>
							<div class='str pl-20'><span class='n-i n-i-reset n-i-w15 str-ltc'></span>초기화</div>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class='container-right'>
			<div class='direct-list'>
				<div class='direct-item'>
					<div class='clear mb-5'>
						<h3 class='c-left right-header'>최근 조회 가이던스</h3>
					</div>
					<ul class='direct-ul'>
						<li>
							<a href=''>
								<span class='c-blue'>제목입니다. 제목을 입력해주세요.</span>
							</a>
							<p class="c-gray-l fs-12 mt-5">기업/기업정보 공시</p>
						</li>
						<li>
							<a href=''>
								<span class='c-blue'>제목입니다. 제목을 입력해주세요.</span>
							</a>
							<p class='c-gray-l fs-12 mt-5'>기업/기업정보 공시</p>
						</li>
						<li>
							<a href=''>
								<span class='c-blue'>제목입니다. 제목을 입력해주세요.</span>
							</a>
							<p class='c-gray-l fs-12 mt-5'>기업/기업정보 공시</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class='container-center'>
			<div class='content-wrap'>
				<!-- 검색어 결과 문구 ／  -->
				<div class='clear mb-15'>
					<div class='c-left'>
						<p class="mb-5"><span class='fs-14'>검색어 '동해물과', '백두산이', '마르고'</span></p>
						<p><b>검색결과 8건</b> <span class='fs-14'>1/1</span></p>
					</div>
					<div class='r-div c-right clear'>
						<button class='btn-blue btn-m' onclick="fn_add_class_on('#detail-search-popup')">상세검색</button>
					</div>
				</div>
				<!-- ／ 검색어 결과 문구  -->
				<div class='tab-button-wrap clear'>
					<div class='l-div c-left'>
						<input type='checkbox' id='con-1' class='input-chk' value='판례' name='keyword-list02'>
						<button class='btn-none btn-m ml-10'>다운로드</button>
					</div>
					<div class='r-div c-right clear'>
						<div class='c-left'>
							<div class='btn-list btn-list-m btn-list-none'>
								<button class='btn btn-icon on'><span class='icon icon-bar3'></span></button>
								<button class='btn btn-icon'><span class='icon icon-bar2'></span></button>
							</div>
						</div>
						<div class='dropdown c-left ml-10'>
							<button class='btn btn-none btn-m dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
								20개
							</button>
							<div class='dropdown-menu-wrap'>
								<ul class='dropdown-menu'>
									<li><a class='dropdown-item' href='#'>50개</a></li>
									<li><a class='dropdown-item' href='#'>20개</a></li>
									<li><a class='dropdown-item' href='#'>10개</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<ul class='content-ul'>
					<li>
						<div class='li-con'>
							<input type='checkbox' id='con-1' class='input-chk' value='판례' name='keyword-list02'>
							<div class='str-rt'>
								<button class='icon-plus' onclick='fn_showPreviewPage(event)'></button>
							</div>
							<div class='txt-div'>
								<a href='' class='txt01'>[제목제목제목제목제목제목제목제목] <span class="square-s square-orange dis-ib ml-5">New</span></a>
								<p class='c-gray-l fs-14 mt-5'>지적 재산 / 오픈소스 SW 라이선스 법률 분쟁 / 홍길동 / 2025.1.18</p>
								<p class='mt-5'>여기에 내용을 입력해주세요. 여기에 내용을 입력해주세요. 여기에 내용을 입력해주세요. 여기에 내용을 입력해주세요. 여기에 내용을 입력해주세요. 여기에 내용을 입력해주세요. 여기에 내용을 입력해주세요. 여기에 내용을 입력해주세요.</p>
							</div>
						</div>
						<div class='clear mt-10'>
							<div class='clear c-right'>
								<a href='' class='c-left'><span class='badge-gray badge-mid mr-5'>관련자료 7건</span></a>
								<a href='' class='c-left'><span class='badge-sky badge-mid'>판례히스토리</span></a>
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
								<a href='' class='txt01'>대법원 2016. 5. 27. 선고 2014두8490 판결 【도로점용허가처분무효확인등】 종국결과 [공2016하,
									888 ] </a>
								<p class='mt-10'>
									&lt;별칭사건명 별칭사건명 별칭사건명&gt;<br>
									속보 요약정보 중 일부 구 대학교원의 임용권자가 임용기간이 만료된 조교수에 대하여 재임용을거부하는 취지로 한 임용기간만료의 통지가 행정소송의 대상이
									되는 처분에해당하는지 여부(적극)
								</p>
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
								<a href='' class='txt01'>대법원 2016. 5. 27. 선고 2014두8490 판결 【도로점용허가처분무효확인등】 종국결과 [공2016하,
									888 ] </a>
								<p class='mt-10'>
									&lt;별칭사건명 별칭사건명 별칭사건명&gt;<br>
									속보 요약정보 중 일부 구 대학교원의 임용권자가 임용기간이 만료된 조교수에 대하여 재임용을거부하는 취지로 한 임용기간만료의 통지가 행정소송의 대상이
									되는 처분에해당하는지 여부(적극)
								</p>
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
								<a href='' class='txt01'>대법원 2016. 5. 27. 선고 2014두8490 판결 【도로점용허가처분무효확인등】 종국결과 [공2016하,
									888 ] </a>
								<p class='mt-10'>
									&lt;별칭사건명 별칭사건명 별칭사건명&gt;<br>
									속보 요약정보 중 일부 구 대학교원의 임용권자가 임용기간이 만료된 조교수에 대하여 재임용을거부하는 취지로 한 임용기간만료의 통지가 행정소송의 대상이
									되는 처분에해당하는지 여부(적극)
								</p>
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
								<a href='' class='txt01'>대법원 2016. 5. 27. 선고 2014두8490 판결 【도로점용허가처분무효확인등】 종국결과 [공2016하,
									888 ] </a>
								<p class='mt-10'>
									&lt;별칭사건명 별칭사건명 별칭사건명&gt;<br>
									속보 요약정보 중 일부 구 대학교원의 임용권자가 임용기간이 만료된 조교수에 대하여 재임용을거부하는 취지로 한 임용기간만료의 통지가 행정소송의 대상이
									되는 처분에해당하는지 여부(적극)
								</p>
							</div>
						</div>
					</li>
				</ul>
				<nav class='page-navigation'>
					<ul class='pagination'>
						<li class='page-item on'>
							<a class='page-link' href='#' aria-label='Previous'>
								<span class='icon-chevron-double-left'></span>
							</a>
						</li>
						<li class='page-item'>
							<a class='page-link' href='#' aria-label='Previous'>
								<span class='icon-prev'></span>
							</a>
						</li>
						<li class='page-item'><a class='page-link' href='#'>1</a></li>
						<li class='page-item'><a class='page-link' href='#'>2</a></li>
						<li class='page-item'><a class='page-link' href='#'>3</a></li>
						<li class='page-item'>
							<a class='page-link' href='#' aria-label='Next'>
								<span class='icon-next'></span>
							</a>
						</li>
						<li class='page-item'>
							<a class='page-link' href='#' aria-label='Previous'>
								<span class='icon-chevron-double-right'></span>
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
