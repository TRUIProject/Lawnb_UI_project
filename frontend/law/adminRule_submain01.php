<?php include '../include/header_sub.php'; ?>
<div class="container-wrap">
	<div class="container-inner">
		<div class="container-right">
			<div class="pr-2">
				<button class="btn-blue w-100p btn-l dis-b btn-shadow">법규비교</button>
			</div>
		</div>
	    <div class="container-center">
	        <h2 class="sub-main-tit clear">행정규칙</h2>
	        <div class="bg-border">
	            <div class="sub-main-pd">
	                <div class="sub-main-tab-warp clear">
	                    <ul class="sub-main-tab-ul c-left">
	                        <li class="on"><a href="./adminRule_submain01.php">행정규칙 검색</a></li>
	                        <li><a href="./adminRule_submain02.php">나의 법규집</a></li>
	                    </ul>
		                <div class="sub-main-info c-right">
			                <div class="str">
				                <button class="info-bt" onclick="fn_add_class_on('#keyword-operator-wrap')">
					                <span class="icon icon-exclamation-circle"></span>검색 연산자 안내
				                </button>
				                <div id="keyword-operator-wrap" class="header-popup keyword-operator-wrap">
					                <div class="popup-bg">
						                <div class="tit-div fw-700 str">
							                LAWnB 검색연산자 안내
							                <div class="str-rt"><button class="icon-x-mark icon-w25 btn-s" onclick="fn_remove_class_on('#keyword-operator-wrap')"></button></div>
						                </div>
						                <ul class="info-list">
							                <li>
								                <div class="div-l">AND</div>
								                <div class="div-r">
									                <p class="txt01">"이사회"와 "감사"가 모두 포함된 문서</p>
									                <p class="txt02">- 예시) 이사회 감사, 이사회 AND 감사</p>
								                </div>
							                </li>
							                <li>
								                <div class="div-l">OR</div>
								                <div class="div-r">
									                <p class="txt01">"이사회"와 "감사" 중 어느 하나라도 포함된 문서</p>
									                <p class="txt02">- 예시) 이사회 OR 감사</p>
								                </div>
							                </li>
							                <li>
								                <div class="div-l">NOT</div>
								                <div class="div-r">
									                <p class="txt01">"이사회"가 포함되고 "감사"가 포함되지 않은 문서</p>
									                <p class="txt02">- 예시) [검색어]이사회 [제외어]감사, 이사회 NOT 감사</p>
								                </div>
							                </li>
							                <li>
								                <div class="div-l">EQUAL</div>
								                <div class="div-r">
									                <p class="txt01">"이사회 감사"라는 검색어와 완전일치하는 구문이 있는 문서</p>
									                <p class="txt02">- 예시) "이사회 감사"</p>
								                </div>
							                </li>
							                <li>
								                <div class="div-l">NEAR</div>
								                <div class="div-r">
									                <p class="txt01">"이사회"와 "감사" 사이에 단어(형태소)가 10개 이하인 문서</p>
									                <p class="txt02">- 예시) "이사회 감사"~10</p>
								                </div>
							                </li>
						                </ul>
					                </div>
				                </div>
			                </div>
		                </div>
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
	                                            <input id="keyword-search" type="text" class="input-css01" placeholder="검색어" >
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
	                                            <input id="keyword-except" type="text" class="input-css01" placeholder="제외어" >
	                                        </div>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                        <div id="search-area-wrap" class="search-area-wrap con">
	                            <div class="setting-box">
	                                <button class="dis-b str" onclick="fn_toggle_slide(this)" data-target="#toggle01" data-warp="#search-area-wrap">
		                                <span class="icon-plus02 icon-w15"></span> 검색범위 상세설정</spa>
		                                <span class="icon-arrow-up icon-w20 str-rt"></span></spa>
	                                </button>
	                            </div>
	                            <div id="toggle01" class="search-area-con">
		                            <div class="input-box str mt-20">
			                            <div class="dis-t">
				                            <div class="dis-tr">
					                            <div class="dis-th">
						                            <label for="keyword-except">법령명</label>
					                            </div>
					                            <div class="dis-tc">
						                            <input id="keyword-except" type="text" class="input-css01">
					                            </div>
				                            </div>
			                            </div>
		                            </div>
		                            <div class="input-box str">
			                            <div class="dis-t">
				                            <div class="dis-tr">
					                            <div class="dis-th">
						                            <label for="keyword-except">조문제목</label>
					                            </div>
					                            <div class="dis-tc">
						                            <input id="keyword-except" type="text" class="input-css01">
					                            </div>
				                            </div>
			                            </div>
		                            </div>
		                            <div class="input-box str">
			                            <div class="dis-t">
				                            <div class="dis-tr">
					                            <div class="dis-th">
						                            <label for="keyword-except">조문내용</label>
					                            </div>
					                            <div class="dis-tc">
						                            <input id="keyword-except" type="text" class="input-css01">
					                            </div>
				                            </div>
			                            </div>
		                            </div>
		                            <div class="input-box str">
			                            <div class="dis-t">
				                            <div class="dis-tr">
					                            <div class="dis-th">
						                            <label for="keyword-except">부칙</label>
					                            </div>
					                            <div class="dis-tc">
						                            <input id="keyword-except" type="text" class="input-css01">
					                            </div>
				                            </div>
			                            </div>
		                            </div>
		                            <div class="input-box str">
			                            <div class="dis-t">
				                            <div class="dis-tr">
					                            <div class="dis-th">
						                            <label for="keyword-except">별표서식</label>
					                            </div>
					                            <div class="dis-tc">
						                            <input id="keyword-except" type="text" class="input-css01">
					                            </div>
				                            </div>
			                            </div>
		                            </div>
	                                <div class="input-box str">
		                                <div class="dis-t">
		                                    <div class="dis-tr">
		                                        <div class="dis-th">
		                                            <label for="keyword-except">법령종류</label>
		                                        </div>
		                                        <div class="dis-tc">
			                                        <ul class="keyword-chk-list">
	                                                    <li>
	                                                        <input type="checkbox" id="keyword-1-1" value="" name="keyword-list">
	                                                        <label for="keyword-1-1">전체</label>
	                                                    </li>
	                                                    <li>
	                                                        <input type="checkbox" id="keyword-1-2" value="" name="keyword-list">
	                                                        <label for="keyword-1-2">훈령</label>
	                                                    </li>
	                                                    <li>
	                                                        <input type="checkbox" id="keyword-1-3" value="" name="keyword-list">
	                                                        <label for="keyword-1-3">예규</label>
	                                                    </li>
				                                        <li>
					                                        <input type="checkbox" id="keyword-1-4" value="" name="keyword-list">
					                                        <label for="keyword-1-4">고시</label>
				                                        </li>
				                                        <li>
					                                        <input type="checkbox" id="keyword-1-5" value="" name="keyword-list">
					                                        <label for="keyword-1-5">기타</label>
				                                        </li>
	                                                </ul>
		                                        </div>
		                                    </div>
		                                </div>
	                                </div>
		                            <div class="input-box str">
		                                <div class="dis-t">
		                                    <div class="dis-tr">
		                                        <div class="dis-th">
		                                            <label for="keyword-except">일자선택</label>
		                                        </div>
		                                        <div class="dis-tc clear">
			                                        <div class="input-radio-wrap">
				                                        <ul class="input-radio-list list-inline">
					                                        <li>
						                                        <input type="radio" id="keyword-2-1" value="" name="keyword-list" checked>
						                                        <label for="keyword-2-1">공포일자</label>
					                                        </li>
					                                        <li>
						                                        <input type="radio" id="keyword-2-2" value="" name="keyword-list">
						                                        <label for="keyword-2-2">시행일자</label>
					                                        </li>
				                                        </ul>
			                                        </div>
		                                            <div class="dis-t mt-10">
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
	</div>
</div>
<?php include '../include/footer_sub.php'; ?>
