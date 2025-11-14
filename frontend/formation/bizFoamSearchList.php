<?php include '../include/header_sub.php'; ?>
<div id="container-wrap" class="container-wrap show-view-right">
	<div class="container-inner">
		<div class="container-left">
			<div class="scroll-y">
				<h2 class='h2'>비즈폼서식</h2>
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
									<li>
										<input type="radio" id="keyword-1-1" value="" name="keyword-list">
										<label for="keyword-1-1">선택1선택1선택1선택1선택1선택1선택1선택1</label>
									</li>
									<li>
										<input type="radio" id="keyword-1-2" value="" name="keyword-list">
										<label for="keyword-1-2">선택2</label>
									</li>
									<li>
										<input type="radio" id="keyword-1-3" value="" name="keyword-list">
										<label for="keyword-1-3">선택3</label>
									</li>
									<li>
										<input type="radio" id="keyword-1-4" value="" name="keyword-list">
										<label for="keyword-1-4">선택4</label>
									</li>
									<li>
										<input type="radio" id="keyword-1-5" value="" name="keyword-list">
										<label for="keyword-1-5">선택5</label>
									</li>
									<li>
										<input type="radio" id="keyword-1-6" value="" name="keyword-list">
										<label for="keyword-1-6">선택6</label>
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
			<div class="pt-40">
				<h3 class="right-header">분야별 계약서</h3>
				<ul class="ul-style05">
					<li>
						<b>공사</b> -
						<a href="" class="c-blue">공사</a>,
						<a href="" class="c-blue">인테리어</a>,
						<a href="" class="c-blue">인테리어</a>,
						<a href="" class="c-blue">인테리어</a>,
						<a href="" class="c-blue">인테리어</a>,
						<a href="" class="c-blue">인테리어</a>,
						<a href="" class="c-blue">인테리어</a>
					</li>
					<li>
						<b>공사</b> -
						<a href="" class="c-blue">공사</a>,
						<a href="" class="c-blue">인테리어</a>
					</li>
					<li>
						<b>공사</b> -
						<a href="" class="c-blue">공사</a>,
						<a href="" class="c-blue">인테리어</a>
					</li>
					<li>
						<b>공사</b> -
						<a href="" class="c-blue">공사</a>,
						<a href="" class="c-blue">인테리어</a>
					</li>
					<li>
						<b>공사</b> -
						<a href="" class="c-blue">공사</a>,
						<a href="" class="c-blue">인테리어</a>
					</li>
					<li>
						<b>공사</b> -
						<a href="" class="c-blue">공사</a>,
						<a href="" class="c-blue">인테리어</a>
					</li>
				</ul>
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
					<div class="r-div c-right clear">
						<div class="c-left ml-10">
							<div class="btn-list btn-list-m btn-list-none">
								<button class="btn btn-icon on"><span class="icon icon-bar3"></span></button>
								<button class="btn btn-icon"><span class="icon icon-bar2"></span></button>
							</div>
						</div>
						<div class="c-left ml-10">
							<div class="btn-list btn-list-m btn-list-none">
								<button class="btn on">정확도</button>
								<button class="btn pr-5" onclick="fn_order_con(this);">
									<span class="icon icon-order resent">최신순</span>
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
							<div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
							<div class="txt-div">
								<div class="txt01">
									<a href="" class="c-blue">[2125003] 공인중개사법 일부개정법률안(김민석의원 등 10일)</a>
									<span class="c-gray-l fs-14 ml-5">제안자 : 의원 / 제안일 2023.10.4 제안자 : 의원 / 제안일 2023.10.4</span>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div class="li-con">
							<div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
							<div class="txt-div">
								<div class="txt01">
									<a href="" class="c-blue">[2125003] 공인중개사법 일부개정법률안(김민석의원 등 10일)</a>
									<span class="c-gray-l fs-14 ml-5">제안자 : 의원 / 제안일 2023.10.4 제안자 : 의원 / 제안일 2023.10.4</span>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div class="li-con">
							<div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
							<div class="txt-div">
								<div class="txt01">
									<a href="" class="c-blue">[2125003] 공인중개사법 일부개정법률안(김민석의원 등 10일)</a>
									<span class="c-gray-l fs-14 ml-5">제안자 : 의원 / 제안일 2023.10.4 제안자 : 의원 / 제안일 2023.10.4</span>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div class="li-con">
							<div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
							<div class="txt-div">
								<div class="txt01">
									<a href="" class="c-blue">[2125003] 공인중개사법 일부개정법률안(김민석의원 등 10일)</a>
									<span class="c-gray-l fs-14 ml-5">제안자 : 의원 / 제안일 2023.10.4 제안자 : 의원 / 제안일 2023.10.4</span>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div class="li-con">
							<div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
							<div class="txt-div">
								<div class="txt01">
									<a href="" class="c-blue">[2125003] 공인중개사법 일부개정법률안(김민석의원 등 10일)</a>
									<span class="c-gray-l fs-14 ml-5">제안자 : 의원 / 제안일 2023.10.4 제안자 : 의원 / 제안일 2023.10.4</span>
								</div>
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
