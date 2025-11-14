<?php include '../include/header_sub_detail.php'; ?>
<div id='container-wrap' class='container-wrap show-view-right'>
	<div class="container-inner">
		<div class="container-right">
			<div class='sub-main-info str'>
				<button class='info-bt' onclick="fn_add_class_on('#keyword-operator-wrap')">
					<span class='icon icon-exclamation-circle'></span>검색 연산자 안내
				</button>
				<div id='keyword-operator-wrap' class='header-popup keyword-operator-wrap'>
					<div class='popup-bg'>
						<div class='tit-div fw-700 str'>
							LAWnB 검색연산자 안내
							<div class='str-rt'>
								<button class='icon-x-mark icon-w25 btn-s'
								        onclick="fn_remove_class_on('#keyword-operator-wrap')"></button>
							</div>
						</div>
						<ul class='info-list'>
							<li>
								<div class='div-l'>AND</div>
								<div class='div-r'>
									<p class='txt01'>'이사회'와 '감사'가 모두 포함된 문서</p>
									<p class='txt02'>- 예시) 이사회 감사, 이사회 AND 감사</p>
								</div>
							</li>
							<li>
								<div class='div-l'>OR</div>
								<div class='div-r'>
									<p class='txt01'>'이사회'와 '감사' 중 어느 하나라도 포함된 문서</p>
									<p class='txt02'>- 예시) 이사회 OR 감사</p>
								</div>
							</li>
							<li>
								<div class='div-l'>NOT</div>
								<div class='div-r'>
									<p class='txt01'>'이사회'가 포함되고 '감사'가 포함되지 않은 문서</p>
									<p class='txt02'>- 예시) [검색어]이사회 [제외어]감사, 이사회 NOT 감사</p>
								</div>
							</li>
							<li>
								<div class='div-l'>EQUAL</div>
								<div class='div-r'>
									<p class='txt01'>'이사회 감사'라는 검색어와 완전일치하는 구문이 있는 문서</p>
									<p class='txt02'>- 예시) '이사회 감사'</p>
								</div>
							</li>
							<li>
								<div class='div-l'>NEAR</div>
								<div class='div-r'>
									<p class='txt01'>'이사회'와 '감사' 사이에 단어(형태소)가 10개 이하인 문서</p>
									<p class='txt02'>- 예시) '이사회 감사'~10</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class='pr-2 mt-20'>
				<button class='btn-none w-100p btn-l dis-b btn-shadow fw-500'>LAWnB 가이던스 집필위원</button>
			</div>
			<div class='mt-40'>
				<div class='tit-div str'>
					<h3 class='tit'>최신 업데이트 Guidance</h3>
				</div>
				<ul class='direct-ul mt-20'>
					<li class="mb-15">
						<a href='' class="dis-b">
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
		    <div class="">
		        <h2 class="sub-main-tit clear">가이던스 검색</h2>
		        <div class="bg-border">
		            <div class="sub-main-pd non-mh">
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
				                                    <input id="keyword-except" type="text" class="input-css01" placeholder="제외어">
			                                    </div>
		                                    </div>
		                                </div>
		                            </div>
			                        <div class='input-box str'>
				                        <div class='dis-t'>
					                        <div class='dis-tr'>
						                        <div class='dis-th'>
							                        <label for='keyword-except'>검색옵션</label>
						                        </div>
						                        <div class='dis-tc'>
							                        <ul class='keyword-chk-list mt-10'>
								                        <li>
									                        <input type='checkbox' id='keyword-1-1' value=''
									                               name='keyword-list'>
									                        <label for='keyword-1-1'>전체</label>
								                        </li>
								                        <li>
									                        <input type='checkbox' id='keyword-1-2' value=''
									                               name='keyword-list'>
									                        <label for='keyword-1-2'>토픽명</label>
								                        </li>
								                        <li>
									                        <input type='checkbox' id='keyword-1-3' value=''
									                               name='keyword-list'>
									                        <label for='keyword-1-3'>본문</label>
								                        </li>
								                        <li>
									                        <input type='checkbox' id='keyword-1-4' value=''
									                               name='keyword-list'>
									                        <label for='keyword-1-4'>집필자</label>
								                        </li>
							                        </ul>
							                        <p class='mt-5 c-gray-l'>집필자 검색은 '집필자명'이 완전히 일치할 경우에 제공됩니다.</p>
						                        </div>
					                        </div>
				                        </div>
			                        </div>
			                        <div class='input-box str'>
				                        <div class='dis-t'>
					                        <div class='dis-tr'>
						                        <div class='dis-th'>
							                        <label for='keyword-except'>실무분야</label>
						                        </div>
						                        <div class='dis-tc'>
							                        <select id='' class='select-css01'>
								                        <option>전체</option>
								                        <option>선택1</option>
								                        <option>선택2</option>
							                        </select>
						                        </div>
					                        </div>
				                        </div>
			                        </div>
		                        </div>
		                        <div class="btn-wrap ta-c">
		                            <button class="btn btn-blue btn-m box-shadow mr-10">검색</button>
			                        <button class="btn btn-none btn-m box-shadow"><div class="str pl-20"><p class="n-i-reset n-i-w15 n-i str-ltc"></p>초기화</div></button>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		    <div class='mt-40'>
			    <div class='clear'>
				    <h2 class='sub-main-tit c-left'>실무분야 리스트</h2>
				    <div class='c-right'>
					    <button class="btn btn-blue btn-m dis-b box-shadow">한눈에 보기</button>
				    </div>
			    </div>
			    <div class='bg-border'>
				    <div class="p-30">
					    <div class="flex-container flex-2 gab20">
						    <div class="flex-item">
							    <div class="box-style-01">
								    <div class="accordion-button tit str show" data-bs-target='#box-con-01'>
									    개인정보 보호 및 정보 보안
									    <span class="n-i str-rm"></span>
								    </div>
								    <div id='box-con-01' class='box-con'>
									    <ul class="txt-list clear">
										    <li><a href="">동해물과 백두산이</a></ㅁ></li>
										    <li><a href="">무궁화 삼천리</a></ㅁ></li>
										    <li><a href="">마르고 닳도록</a></ㅁ></li>
										    <li><a href="">화려강상</a></ㅁ></li>
										    <li><a href="">하느님이 보우하사</a></ㅁ></li>
									    </ul>
								    </div>
							    </div>
						    </div>
						    <div class='accordion-box flex-item'>
							    <div class='box-style-01'>
								    <div class='accordion-button tit str show' data-bs-target='#box-con-02'>
									    개인정보 보호 및 정보 보안
									    <span class='n-i str-rm'></span>
								    </div>
								    <div id='box-con-02' class='box-con'>
									    <ul class='txt-list clear'>
										    <li><a href=''>동해물과 백두산이</a></ㅁ></li>
										    <li><a href=''>무궁화 삼천리</a></ㅁ></li>
										    <li><a href=''>마르고 닳도록</a></ㅁ></li>
										    <li><a href=''>화려강상</a></ㅁ></li>
										    <li><a href=''>하느님이 보우하사</a></ㅁ></li>
									    </ul>
								    </div>
							    </div>
						    </div>
						    <div class='accordion-box flex-item'>
							    <div class='box-style-01'>
								    <div class='accordion-button tit str show' data-bs-target='#box-con-03'>
									    개인정보 보호 및 정보 보안
									    <span class='n-i str-rm'></span>
								    </div>
								    <div id='box-con-03' class='box-con'>
									    <ul class='txt-list clear'>
										    <li><a href=''>동해물과 백두산이</a></ㅁ></li>
										    <li><a href=''>무궁화 삼천리</a></ㅁ></li>
										    <li><a href=''>마르고 닳도록</a></ㅁ></li>
										    <li><a href=''>화려강상</a></ㅁ></li>
										    <li><a href=''>하느님이 보우하사</a></ㅁ></li>
									    </ul>
								    </div>
							    </div>
						    </div>
						    <div class='accordion-box flex-item'>
							    <div class='box-style-01'>
								    <div class='accordion-button tit str show' data-bs-target='#box-con-04'>
									    개인정보 보호 및 정보 보안
									    <span class='n-i str-rm'></span>
								    </div>
								    <div id='box-con-04' class='box-con'>
									    <ul class='txt-list clear'>
										    <li><a href=''>동해물과 백두산이</a></ㅁ></li>
										    <li><a href=''>무궁화 삼천리</a></ㅁ></li>
										    <li><a href=''>마르고 닳도록</a></ㅁ></li>
										    <li><a href=''>화려강상</a></ㅁ></li>
										    <li><a href=''>하느님이 보우하사</a></ㅁ></li>
									    </ul>
								    </div>
							    </div>
						    </div>
					    </div>
				    </div>
			    </div>
		    </div>
	    </div>
	</div>
</div>
<?php include '../include/footer_sub.php'; ?>
