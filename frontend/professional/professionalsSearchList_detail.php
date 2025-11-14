<?php include '../include/header_sub_detail.php'; ?>
<div id='container-wrap' class='container-wrap show-view-right detail-search'>
    <div class="container-inner">
        <div class="container-left">
	        <div class='scroll-y'>
		        <h2 class='h2'>법조인명록</h2>
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
	                <!-- 체크박스 리스트 시작 // -->
	                <li class="accordion-item">
	                    <h3 class="accordion-header">
	                        <button class="accordion-button show" type="button" data-bs-target="#left-con-accordion01">
	                            직업
	                        </button>
	                    </h3>
	                    <div id="left-con-accordion01" class="accordion-collapse collapse" data-bs-parent="#left-con-accordion">
	                        <div class="accordion-body">
	                            <ul class="keyword-list list-block">
	                                <li>
	                                    <input type="checkbox" id="keyword-1-1" value="" name="keyword-list">
	                                    <label for="keyword-1-1">선택1</label>
	                                </li>
	                                <li>
	                                    <input type="checkbox" id="keyword-1-2" value="" name="keyword-list">
	                                    <label for="keyword-1-2">선택2</label>
	                                </li>
	                                <li>
	                                    <input type="checkbox" id="keyword-1-3" value="" name="keyword-list">
	                                    <label for="keyword-1-3">선택3</label>
	                                </li>
	                                <li>
	                                    <input type="checkbox" id="keyword-1-4" value="" name="keyword-list">
	                                    <label for="keyword-1-4">선택4</label>
	                                </li>
	                                <li>
	                                    <input type="checkbox" id="keyword-1-5" value="" name="keyword-list">
	                                    <label for="keyword-1-5">선택5</label>
	                                </li>
	                                <li>
	                                    <input type="checkbox" id="keyword-1-6" value="" name="keyword-list">
	                                    <label for="keyword-1-6">선택6</label>
	                                </li>
	                            </ul>
	                            <a href="" class="btn-gray btn-m dis-b ta-c mt-10"><span class="icon icon-plus02 icon-w15 mr-2"></span>직업 더보기</a>
	                        </div>
	                    </div>
	                </li>
	                <!-- // 체크박스 리스트 -->
	                <!-- 체크박스 리스트 시작 // -->
	                <li class="accordion-item">
	                    <h3 class="accordion-header">
	                        <button class="accordion-button show" type="button" data-bs-target="#left-con-accordion02">
	                            시험종류
	                        </button>
	                    </h3>
	                    <div id="left-con-accordion02" class="accordion-collapse collapse" data-bs-parent="#left-con-accordion">
	                        <div class="accordion-body">
	                            <ul class="keyword-list list-block">
	                                <li>
	                                    <input type="checkbox" id="keyword-2-1" value="" name="keyword-list">
	                                    <label for="keyword-2-1">선택1</label>
	                                </li>
	                                <li>
	                                    <input type="checkbox" id="keyword-2-2" value="" name="keyword-list">
	                                    <label for="keyword-2-2">선택2</label>
	                                </li>
	                                <li>
	                                    <input type="checkbox" id="keyword-2-3" value="" name="keyword-list">
	                                    <label for="keyword-2-3">선택3</label>
	                                </li>
	                                <li>
	                                    <input type="checkbox" id="keyword-2-4" value="" name="keyword-list">
	                                    <label for="keyword-2-4">선택4</label>
	                                </li>
	                                <li>
	                                    <input type="checkbox" id="keyword-2-5" value="" name="keyword-list">
	                                    <label for="keyword-2-5">선택5</label>
	                                </li>
	                                <li>
	                                    <input type="checkbox" id="keyword-2-6" value="" name="keyword-list">
	                                    <label for="keyword-2-6">선택6</label>
	                                </li>
	                            </ul>
	                            <a href="" class="btn-gray btn-m dis-b ta-c mt-10"><span class="icon icon-plus02 icon-w15 mr-2"></span>시험종류 더보기</a>
	                        </div>
	                    </div>
	                </li>
	                <!-- // 체크박스 리스트 -->
	                <!-- 시험결과 시작 // -->
	                <li class="accordion-item">
	                    <h3 class="accordion-header">
	                        <button class="accordion-button show" type="button" data-bs-target="#left-test-result">
	                            시험결과
	                        </button>
	                    </h3>
	                    <div id="left-test-result" class="accordion-collapse collapse" data-bs-parent="#left-con-accordion">
	                        <div class="accordion-body test-result">
	                            <div class="border-b-dash pt-10 pb-10">
	                                <div class="dis-t">
	                                    <div class="dis-tr">
	                                        <div class="dis-tc div-tit pr-2">시험회수</div>
	                                        <div class="dis-tc div-date"><input id="keyword-except" type="text" class="input-css01"></div>
	                                        <div class="dis-tc div-dash">~</div>
	                                        <div class="dis-tc div-date"><input id="keyword-except" type="text" class="input-css01"></div>
	                                    </div>
	                                </div>
	                            </div>
	                            <div class="pt-10">
	                                <div class="dis-t">
	                                    <div class="dis-tr">
	                                        <div class="dis-tc div-tit pr-2">연수원</div>
	                                        <div class="dis-tc div-date"><input id="keyword-except" type="text" class="input-css01"></div>
	                                        <div class="dis-tc div-dash">~</div>
	                                        <div class="dis-tc div-date"><input id="keyword-except" type="text" class="input-css01"></div>
	                                    </div>
	                                </div>
	                                <div class="dis-t mt-10">
	                                    <div class="dis-tr">
	                                        <div class="dis-tc div-tit pr-2">출생년도</div>
	                                        <div class="dis-tc div-date"><input id="keyword-except" type="text" class="input-css01"></div>
	                                        <div class="dis-tc div-dash">~</div>
	                                        <div class="dis-tc div-date"><input id="keyword-except" type="text" class="input-css01"></div>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	                </li>
	                <!-- // 시험결과 -->
	            </ul>
	            <div class="btn-wrap border-top pb-20">
	                <div class="ta-c">
		                <button class='btn-blue btn-m'>
			                <div class='str pl-20'><span class='n-i n-i-reset n-i-w15 str-ltc'></span>초기화</div>
		                </button>
	                </div>
	            </div>
	        </div>
        </div>
        <div class="container-right">
            <!-- 최근 조회 법조인 시작 // -->
            <div class="reset-con-list pt-40">
                <div class="reset-con-item">
                    <h3 class="right-header">최근 조회 법조인</h3>
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
            <!-- // 최근 조회 법조인 끝 -->
        </div>
        <div class="container-center">
            <div class="content-wrap">
	            <!-- 검색어 결과 문구 ／  -->
	            <div class='clear mb-10'>
		            <div class='c-left'>
			            <span class='fs-14'>검색어 '동해물과', '백두산이', '마르고'</span>
		            </div>
	            </div>
	            <!-- ／ 검색어 결과 문구  -->
	            <div class='clear mb-15'>
		            <div class='c-left'>
			            <b>검색결과 8건</b> <span class='fs-14'>1/1</span>
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
                    <div class="c-right clear">
                        <div class="c-left">
                            <!-- 다이렉스 검색 시작 // -->
                            <!-- button에 class on 추가시 활성화-->
                            <div class="btn-list btn-list-m btn-list-none">
                                <button class="btn btn-icon on"><span class="icon icon-bar3"></span></button>
                                <button class="btn btn-icon"><span class="icon icon-bar2"></span></button>
                            </div>
                            <!-- // 다이렉스 검색 시작 -->
                        </div>
	                    <div class="r-div c-right clear">
                            <div class="btn-list btn-list-m btn-list-none">
                                <button class="btn on pr-5" onclick="fn_order_con(this);">
                                    <span class="icon icon-order resent">발행일</span>
                                </button>
                                <button class="btn pr-5" onclick="fn_order_con(this);">
                                    <span class="icon icon-order resent">연령</span>
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
			                <div class="clear">
				                <div class="c-left img-div-wrap">
					                <div class="img-circle" style="background-image: url('../images/test/testImg01.jpg')" ></div>
				                </div>
				                <div class="c-left txt-div-wrap">
					                <a href="" class="txt01">홍길동</a>
					                <p class="fs-14 mt-5">
						                1992년생 / 여자 / 변호사시럼
					                </p>
				                </div>
			                </div>
		                </div>
		                <div class="clear mt-10">
			                <div class="clear c-right">
				                <a href="" class="c-left"><span class="badge-green badge-mid">네비게이션</span></a>
			                </div>
		                </div>
	                </li>
	                <li>
		                <div class="li-con">
			                <input type="checkbox" id="con-1" class="input-chk" value="" name="search-list">
			                <div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
			                <div class="clear">
				                <div class="c-left img-div-wrap">
					                <div class="img-circle" style="background-image: url('../images/test/testImg02.jpg')" ></div>
				                </div>
				                <div class="c-left txt-div-wrap">
					                <a href="" class="txt01">홍길동</a>
					                <p class="fs-14 mt-5">
						                1992년생 / 여자 / 변호사시럼
					                </p>
				                </div>
			                </div>
		                </div>
		                <div class="clear mt-10">
			                <div class="clear c-right">
				                <a href="" class="c-left"><span class="badge-green badge-mid">네비게이션</span></a>
			                </div>
		                </div>
	                </li>
	                <li>
		                <div class="li-con">
			                <input type="checkbox" id="con-1" class="input-chk" value="" name="search-list">
			                <div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
			                <div class="clear">
				                <div class="c-left img-div-wrap">
					                <div class="img-circle" style="background-image: url('../images/test/testImg01.jpg')" ></div>
				                </div>
				                <div class="c-left txt-div-wrap">
					                <a href="" class="txt01">홍길동</a>
					                <p class="fs-14 mt-5">
						                1992년생 / 여자 / 변호사시럼
					                </p>
				                </div>
			                </div>
		                </div>
		                <div class="clear mt-10">
			                <div class="clear c-right">
				                <a href="" class="c-left"><span class="badge-green badge-mid">네비게이션</span></a>
			                </div>
		                </div>
	                </li>
                    <li>
                        <div class="li-con">
                            <input type="checkbox" id="con-1" class="input-chk" value="" name="search-list">
	                        <div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
                            <div class="clear">
                                <div class="c-left img-div-wrap">
                                    <div class="img-circle" style="background-image: url('../images/test/testImg02.jpg')" ></div>
                                </div>
                                <div class="c-left txt-div-wrap">
                                    <a href="" class="txt01">홍길동</a>
                                    <p class="fs-14 mt-5">
                                        1992년생 / 여자 / 변호사시럼
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="clear mt-10">
                            <div class="clear c-right">
                                <a href="" class="c-left"><span class="badge-green badge-mid">네비게이션</span></a>
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
