<?php include '../include/header_sub_detail.php'; ?>
<div id="container-wrap" class="container-wrap show-view-right detail-search">
	<div class="container-inner">
		<div class="container-left">
			<div class="scroll-y">
				<ul id="left-con-accordion" class="accordion">
					<li class="accordion-item">
						<h3 class='accordion-header'>
							<p class='fs-14 fw-400'>검색어</p>
						</h3>
						<div class='input-box-plus mt-10 str'>
							<input id='word-except' type='text' class='input-css01' placeholder='검색어 입력 (최대 3개)'>
							<button class='btn-plus'>
								<div class='str'><span class='n-i-w15 n-i-plus n-i str-center'></span></div>
							</button>
						</div>
						<h3 class='accordion-header mt-30'>
							<p class='fs-14 fw-400'>제외어</p>
						</h3>
						<div class='input-box-plus mt-10 str'>
							<input id='word-except' type='text' class='input-css01' placeholder='제외어 입력 (최대 3개)'>
							<button class='btn-plus'>
								<div class='str'><span class='n-i-w15 n-i-plus n-i str-center'></span></div>
							</button>
						</div>
						<h3 class="accordion-header mt-30">
							<button class="accordion-button show" type="button" data-bs-target="#left-con-accordion02">
								토픽
							</button>
						</h3>
						<div id="left-con-accordion02" class="accordion-collapse collapse" data-bs-parent="#left-con-accordion">
							<div class="accordion-body">
								<ul class='keyword-list list-block'>
									<li>
										<input type="checkbox" id="keyword-2-1" value="" name="keyword-list02">
										<label for="keyword-2-1">토픽1</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-2-2" value="" name="keyword-list02">
										<label for="keyword-2-2">토픽2</label>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li class="accordion-item">
						<h3 class="accordion-header">
							<button class="accordion-button show" type="button" data-bs-target="#left-con-accordion03">
								Guidance 종류
							</button>
						</h3>
						<div id="left-con-accordion03" class="accordion-collapse collapse" data-bs-parent="#left-con-accordion">
							<div class="accordion-body">
								<ul class="keyword-list list-block">
									<li>
										<input type="checkbox" id="keyword-3-1" value="" name="keyword-list">
										<label for="keyword-3-1">실무노트</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-3-2" value="" name="keyword-list">
										<label for="keyword-3-2">표준문서 및 템플릿</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-3-3" value="" name="keyword-list">
										<label for="keyword-3-3">체크리스트</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-3-4" value="" name="keyword-list">
										<label for="keyword-3-4">동영상</label>
									</li>
								</ul>
							</div>
						</div>
					</li>
				</ul>
				<div class="btn-wrap border-top">
					<button class="btn-none btn-m"><div class="str pl-20"><span class="n-i n-i-reset n-i-w15 str-ltc"></span>초기화</div></button>
				</div>
			</div>
		</div>
		<div class="container-right">
			<div class="ai-container">
				<div class="ai-bg">
					<button class="btn btn-blue-grad btn-m" onclick="fn_add_class_on('#ai-popup')"><div class="str pl-20"><span class='n-i str-ltc n-i-bolt n-i-w15'></span>AI요약</div></button>
					<div class="ai-summary mt-10">관련 주요 판례 AI요약</div>
					<button class='btn btn-none btn-m mt-10'>펼쳐보기</button>
				</div>
			</div>
			<div class='pr-2 mt-40'>
				<button class='btn-none w-100p btn-l dis-b btn-shadow fw-500'>LAWnB 가이던스 집필위원</button>
			</div>
			<div class='mt-40'>
				<div class='tit-div str'>
					<h3 class='tit'>최근 조회 Guidance</h3>
				</div>
				<ul class='direct-ul mt-20'>
					<li class='mb-15'>
						<a href='' class='dis-b'>
							<p class='c-blue fw-500'>제목. 제목을 입력해주세요.제목을 입력해주세요제목을 입력해주세요</p>
							<p class='c-gray-l fs-12 mt-5'>기업 / 기업정보 공시 / 김지윤 / 2025.3.18</p>
						</a>
					</li>
					<li class='mb-15'>
						<a href='' class='dis-b'>
							<p class='c-blue fw-500'>제목. 제목을 입력해주세요.제목을 입력해주세요제목을 입력해주세요</p>
							<p class='c-gray-l fs-12 mt-5'>기업 / 기업정보 공시 / 김지윤 / 2025.3.18</p>
						</a>
					</li>
					<li class='mb-15'>
						<a href='' class='dis-b'>
							<p class='c-blue fw-500'>제목. 제목을 입력해주세요.제목을 입력해주세요제목을 입력해주세요</p>
							<p class='c-gray-l fs-12 mt-5'>기업 / 기업정보 공시 / 김지윤 / 2025.3.18</p>
						</a>
					</li>
					<li class='mb-15'>
						<a href='' class='dis-b'>
							<p class='c-blue fw-500'>제목. 제목을 입력해주세요.제목을 입력해주세요제목을 입력해주세요</p>
							<p class='c-gray-l fs-12 mt-5'>기업 / 기업정보 공시 / 김지윤 / 2025.3.18</p>
						</a>
					</li>
					<li>
						<a href='' class='dis-b'>
							<p class='c-blue fw-500'>제목. 제목을 입력해주세요.제목을 입력해주세요제목을 입력해주세요</p>
							<p class='c-gray-l fs-12 mt-5'>기업 / 기업정보 공시 / 김지윤 / 2025.3.18</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="container-center">
			<div class="content-wrap">
				<div class='clear mb-20'>
					<div class="dis-t">
						<div class="dis-tr">
							<div class="dis-tc v-m">
								실무분야 :
							</div>
							<div class='dis-tc v-m pl-10'>
								<div class='dropdown dropdown-scroll hover-chk'>
									<button class='btn btn-none btn-m dropdown-toggle' type='button'
									        data-bs-toggle='dropdown' aria-expanded='false'>
										개인정보 보호 및 정보 보안
									</button>
									<div class='dropdown-menu-wrap'>
										<ul class='dropdown-menu'>
											<li><a class='dropdown-item' href='#'>선택1</a></li>
											<li><a class='dropdown-item' href='#'>선택2</a></li>
											<li><a class='dropdown-item' href='#'>선택3</a></li>
											<li><a class='dropdown-item' href='#'>선택3</a></li>
											<li><a class='dropdown-item' href='#'>선택3</a></li>
											<li><a class='dropdown-item' href='#'>선택3</a></li>
											<li><a class='dropdown-item' href='#'>선택3</a></li>
											<li><a class='dropdown-item' href='#'>선택3</a></li>
											<li><a class='dropdown-item' href='#'>선택3</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class='clear mb-10'>
					<div class='c-left'>
						<span class='fs-14'>검색어 "동해물과", "백두산이", "마르고"</span>
					</div>
				</div>
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
						<div class='li-con'>
							<input type='checkbox' id='con-1' class='input-chk' value='판례' name='keyword-list02'>
							<div class='str-rt'>
								<button class='icon-plus' onclick='fn_showPreviewPage(event)'></button>
							</div>
							<div class='txt-div'>
								<a href='' class='txt01'>제목을 입력해주세요. 제목을 입력해주세요. 제목을 입력해주세요.</a>
								<p class='mt-5 c-gray-l fs-12'>기업 / 기업정보 공시 / 김지윤 / 2025.3.18</p>
							</div>
						</div>
					</li>
					<li>
						<div class="li-con">
							<input type="checkbox" id="con-1" class="input-chk" value="판례" name="keyword-list02">
							<div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
							<div class="txt-div">
								<a href="" class="txt01">제목을 입력해주세요. 제목을 입력해주세요. 제목을 입력해주세요.</a>
                                <p class="mt-5 c-gray-l fs-12">기업 / 기업정보 공시 / 김지윤 / 2025.3.18</p>
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
								<a href='' class='txt01'>제목을 입력해주세요. 제목을 입력해주세요. 제목을 입력해주세요.</a>
								<p class='mt-5 c-gray-l fs-12'>기업 / 기업정보 공시 / 김지윤 / 2025.3.18</p>
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
								<a href='' class='txt01'>제목을 입력해주세요. 제목을 입력해주세요. 제목을 입력해주세요.</a>
								<p class='mt-5 c-gray-l fs-12'>기업 / 기업정보 공시 / 김지윤 / 2025.3.18</p>
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
								<a href='' class='txt01'>제목을 입력해주세요. 제목을 입력해주세요. 제목을 입력해주세요.</a>
								<p class='mt-5 c-gray-l fs-12'>기업 / 기업정보 공시 / 김지윤 / 2025.3.18</p>
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
