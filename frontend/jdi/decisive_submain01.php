<?php include '../include/header_sub.php'; ?>
<div class="container-wrap">
	<div class="container-inner">
		<div class="container-right">
			<div class="direct-list">
				<div class="direct-item">
					<div class="clear mb-5">
						<h2 class="c-left right-header">최신 유권해석</h2>
						<div class="c-right">
							<a href="" class="btn-none btn-s">전체보기</a>
						</div>
					</div>
					<ul class="direct-ul">
						<li>
							<a href="">
								<p class="c-blue">법제처 23-0759, 2023. 9. 22 [국토교통부ㆍ서울특별시교육청 - 대수선에 해당하는 건축물 외벽에 사용하는 마감재료 증설의 범위(「건축법 시행령」 제3조의2제9호 등 관련)]
								</p>
							</a>
						</li>
						<li>
							<a href="">
								<p class="c-blue">법제처 23-0759, 2023. 9. 22 [국토교통부ㆍ서울특별시교육청 - 대수선에 해당하는 건축물 외벽에 사용하는 마감재료 증설의 범위(「건축법 시행령」 제3조의2제9호 등 관련)]
								</p>
							</a>
						</li>
						<li>
							<a href="">
								<p class="c-blue">법제처 23-0759, 2023. 9. 22 [국토교통부ㆍ서울특별시교육청 - 대수선에 해당하는 건축물 외벽에 사용하는 마감재료 증설의 범위(「건축법 시행령」 제3조의2제9호 등 관련)]
								</p>
							</a>
						</li>
						<li>
							<a href="">
								<p class="c-blue">법제처 23-0759, 2023. 9. 22 [국토교통부ㆍ서울특별시교육청 - 대수선에 해당하는 건축물 외벽에 사용하는 마감재료 증설의 범위(「건축법 시행령」 제3조의2제9호 등 관련)]
								</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="container-center">
			<h2 class="sub-main-tit clear">결정례 검색</h2>
			<div class="bg-border">
				<div class="sub-main-pd">
					<div class="sub-main-tab-warp clear">
						<ul class="sub-main-tab-ul c-left">
							<li class="on"><a href="./decisive_submain01.php">결정례 검색</a></li>
							<li><a href="./decisive_submain02.php">결정기관별 결정례</a></li>
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
												<ul class="keyword-chk-list mt-10">
													<li>
														<input type="checkbox" id="keyword-1-1" value="" name="keyword-list">
														<label for="keyword-1-1">전체</label>
													</li>
													<li>
														<input type="checkbox" id="keyword-1-2" value="" name="keyword-list">
														<label for="keyword-1-2">사건명</label>
													</li>
													<li>
														<input type="checkbox" id="keyword-1-3" value="" name="keyword-list">
														<label for="keyword-1-3">결정요지</label>
													</li>
													<li>
														<input type="checkbox" id="keyword-1-4" value="" name="keyword-list">
														<label for="keyword-1-4">전문</label>
													</li>
													<li>
														<input type="checkbox" id="keyword-1-5" value="" name="keyword-list">
														<label for="keyword-1-5">사건번호</label>
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
										<span class="icon-plus02 icon-w15"></span> 검색범위 상세설정</spa>
										<span class="icon-arrow-up icon-w20 str-rt"></span></spa>
									</button>
								</div>
								<div id="toggle01" class="search-area-con input-box str mt-20">
									<div class="input-box str">
										<div class="dis-t">
											<div class="dis-tr">
												<div class="dis-th">
													<label for="keyword-except">결정기관</label>
												</div>
												<div class="dis-tc">
													<select id="" class="select-css01">
														<option>전체</option>
														<option>선택1</option>
													</select>
												</div>
											</div>
										</div>
									</div>

									<div class="input-box str">
										<div class="dis-t">
											<div class="dis-tr">
												<div class="dis-th">
													<label for="keyword-except">구 분</label>
												</div>
												<div class="dis-tc">
													<select id="" class="select-css01">
														<option>전체</option>
														<option>선택1</option>
													</select>
												</div>
											</div>
										</div>
									</div>
									<div class="input-box str">
										<div class="dis-t">
											<div class="dis-tr">
												<div class="dis-th">
													<label for="keyword-except">결정일자</label>
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
	</div>
</div>
<?php include '../include/footer_sub.php'; ?>
