<?php include '../include/header_sub.php'; ?>
<div id="container-wrap" class="container-wrap show-view-right">
    <div class="container-inner">
        <div class="container-left">
	        <div class='scroll-y'>
		        <h2 class='h2'>법률사전</h2>
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
	                    <h2 class="accordion-header">
	                        <button class="accordion-button show" type="button" data-bs-target="#left-con-accordion03">
	                            검색결과
	                        </button>
	                    </h2>
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
	                        </div>
	                    </div>
	                </li>
	                <!-- // 체크박스 리스트 -->
	                <!-- INDEX 시작 // -->
	                <li class="accordion-item">
	                    <h2 class="accordion-header">
	                        <button class="accordion-button show" type="button" data-bs-target="#left-con-index">
	                            INDEX
	                        </button>
	                    </h2>
	                    <div id="left-con-index" class="accordion-collapse collapse" data-bs-parent="#left-con-accordion">
	                        <div class="accordion-body">
	                            <div class="border-b-dash pb-10">
	                                <ul class="index-ko keyword-chk-list02">
	                                    <li>
	                                        <input type="checkbox" id="ko-1" value="" name="">
	                                        <label for="ko-1">ㄱ</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="ko-2" value="" name="">
	                                        <label for="ko-2">ㄴ</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="ko-3" value="" name="">
	                                        <label for="ko-3">ㄷ</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="ko-4" value="" name="">
	                                        <label for="ko-4">ㄹ</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="ko-5" value="" name="">
	                                        <label for="ko-5">ㅁ</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="ko-6" value="" name="">
	                                        <label for="ko-6">ㅂ</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="ko-7" value="" name="">
	                                        <label for="ko-7">ㅅ</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="ko-8" value="" name="">
	                                        <label for="ko-8">ㅇ</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="ko-9" value="" name="">
	                                        <label for="ko-9">ㅈ</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="ko-10" value="" name="">
	                                        <label for="ko-10">ㅊ</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="ko-11" value="" name="">
	                                        <label for="ko-11">ㅋ</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="ko-12" value="" name="">
	                                        <label for="ko-12">ㅌ</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="ko-13" value="" name="">
	                                        <label for="ko-13">ㅍ</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="ko-14" value="" name="">
	                                        <label for="ko-14">ㅎ</label>
	                                    </li>
	                                </ul>
	                            </div>
	                            <div class="pt-10">
	                                <ul class="index-ko keyword-chk-list02">
	                                    <li>
	                                        <input type="checkbox" id="eng-1" value="" name="">
	                                        <label for="eng-1">A</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="eng-2" value="" name="">
	                                        <label for="eng-2">B</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="eng-3" value="" name="">
	                                        <label for="eng-3">C</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="eng-4" value="" name="">
	                                        <label for="eng-4">D</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="eng-5" value="" name="">
	                                        <label for="eng-5">E</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="eng-6" value="" name="">
	                                        <label for="eng-6">F</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="eng-7" value="" name="">
	                                        <label for="eng-7">G</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="eng-8" value="" name="">
	                                        <label for="eng-8">H</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="eng-9" value="" name="">
	                                        <label for="eng-9">I</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="eng-10" value="" name="">
	                                        <label for="eng-10">J</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="eng-11" value="" name="">
	                                        <label for="eng-11">K</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="eng-12" value="" name="">
	                                        <label for="eng-12">L</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="eng-13" value="" name="">
	                                        <label for="eng-13">M</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="eng-14" value="" name="">
	                                        <label for="eng-14">N</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="eng-15" value="" name="">
	                                        <label for="eng-15">O</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="eng-16" value="" name="">
	                                        <label for="eng-16">P</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="eng-17" value="" name="">
	                                        <label for="eng-17">Q</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="eng-18" value="" name="">
	                                        <label for="eng-18">R</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="eng-19" value="" name="">
	                                        <label for="eng-19">S</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="eng-20" value="" name="">
	                                        <label for="eng-20">T</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="eng-21" value="" name="">
	                                        <label for="eng-21">U</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="eng-22" value="" name="">
	                                        <label for="eng-22">V</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="eng-23" value="" name="">
	                                        <label for="eng-23">W</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="eng-24" value="" name="">
	                                        <label for="eng-24">X</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="eng-25" value="" name="">
	                                        <label for="eng-25">Y</label>
	                                    </li>
	                                    <li>
	                                        <input type="checkbox" id="eng-26" value="" name="">
	                                        <label for="eng-26">Z</label>
	                                    </li>
	                                </ul>
	                            </div>
	                        </div>
	                    </div>
	                </li>
	                <!-- // INDEX -->
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
            <!-- 다이렉스 검색 시작 // -->
            <div class="direct-list">
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
            <!-- // 다이렉스 검색 끝 -->
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
                                    <span class="icon icon-order resent">목차순</span>
                                </button>
                                <button class="btn pr-5" onclick="fn_order_con(this);">
                                    <span class="icon icon-order resent">가나다</span>
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
			                <div class="text-box">
				                <a href="" class="txt01">[검색결과] 제목을 입력해주세요</a>
				                <p class="fs-16 mt-5">
					                서브제목입니다. 서브제목을 입력해주세요.
				                </p>
				                <p class="fs-14 c-gray-l mt-5">
					                서브제목입니다. 서브제목을 입력해주세요.
				                </p>
			                </div>
		                </div>
	                </li>
                    <li>
                        <div class="li-con">
                            <input type="checkbox" id="con-1" class="input-chk" value="" name="search-list">
	                        <div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
                            <div class="text-box">
                                <a href="" class="txt01">[검색결과] 제목을 입력해주세요</a>
                                <p class="fs-16 mt-5">
                                    서브제목입니다. 서브제목을 입력해주세요.
                                </p>
                                <p class="fs-14 c-gray-l mt-5">
                                    서브제목입니다. 서브제목을 입력해주세요.
                                </p>
                            </div>
                        </div>
                    </li>
	                <li>
		                <div class="li-con">
			                <input type="checkbox" id="con-1" class="input-chk" value="" name="search-list">
			                <div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
			                <div class="text-box">
				                <a href="" class="txt01">[검색결과] 제목을 입력해주세요</a>
				                <p class="fs-16 mt-5">
					                서브제목입니다. 서브제목을 입력해주세요.
				                </p>
				                <p class="fs-14 c-gray-l mt-5">
					                서브제목입니다. 서브제목을 입력해주세요.
				                </p>
			                </div>
		                </div>
	                </li>
	                <li>
		                <div class="li-con">
			                <input type="checkbox" id="con-1" class="input-chk" value="" name="search-list">
			                <div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
			                <div class="text-box">
				                <a href="" class="txt01">[검색결과] 제목을 입력해주세요</a>
				                <p class="fs-16 mt-5">
					                서브제목입니다. 서브제목을 입력해주세요.
				                </p>
				                <p class="fs-14 c-gray-l mt-5">
					                서브제목입니다. 서브제목을 입력해주세요.
				                </p>
			                </div>
		                </div>
	                </li>
	                <li>
		                <div class="li-con">
			                <input type="checkbox" id="con-1" class="input-chk" value="" name="search-list">
			                <div class="str-rt"><button class="icon-plus" onclick="fn_showPreviewPage(event)"></button></div>
			                <div class="text-box">
				                <a href="" class="txt01">[검색결과] 제목을 입력해주세요</a>
				                <p class="fs-16 mt-5">
					                서브제목입니다. 서브제목을 입력해주세요.
				                </p>
				                <p class="fs-14 c-gray-l mt-5">
					                서브제목입니다. 서브제목을 입력해주세요.
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
