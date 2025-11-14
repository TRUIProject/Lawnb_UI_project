<?php include '../include/header_sub.php'; ?>
<div class="container-wrap">
	<div class="container-inner">
		<div class="container-right">
			<div class="direct-list">
				<div class="direct-item">
					<div class="clear mb-5">
						<h2 class="c-left right-header">최신 조약</h2>
						<div class="c-right">
							<a href="" class="btn-none btn-s">전체보기</a>
						</div>
					</div>
					<ul class="direct-ul">
						<li>
							<a href="">
								<span class="c-blue">법제처 23-0759, 2023. 9. 22 </span>
								<span class="c-gray-l">법제처 23-0759, 2023. 9. 22 </span>
							</a>
						</li>
						<li>
							<a href="">
								<span class="c-blue">법제처 23-0759, 2023. 9. 22 </span>
								<span class="c-gray-l">법제처 23-0759, 2023. 9. 22 </span>
							</a>
						</li>
						<li>
							<a href="">
								<span class="c-blue">법제처 23-0759, 2023. 9. 22 </span>
								<span class="c-gray-l">법제처 23-0759, 2023. 9. 22 </span>
							</a>
						</li>
						<li>
							<a href="">
								<span class="c-blue">법제처 23-0759, 2023. 9. 22 </span>
								<span class="c-gray-l">법제처 23-0759, 2023. 9. 22 </span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="container-center">
			<h2 class="sub-main-tit clear">특허심판례 검색</h2>
			<div class="bg-border">
				<div class="sub-main-pd">
					<div class="sub-main-con-warp mt-20">
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
								<div id="toggle01" class="search-area-con input-box str mt-20">
									<div class="input-box str mt-20">
										<div class="dis-t">
											<div class="dis-tr">
												<div class="dis-th">
													<label for="keyword-except">심판번호</label>
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
													<label for="keyword-except">사건표시</label>
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
													<label for="keyword-except">청구취지</label>
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
													<label for="keyword-except">전문</label>
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
													<label for="keyword-except">등록번호</label>
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
													<label for="keyword-except">출원번호</label>
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
													<label for="keyword-except">권리구분</label>
												</div>
												<div class="dis-tc">
													<ul class="keyword-chk-list">
														<li>
															<input type="checkbox" id="keyword-1-1" value="" name="keyword-list">
															<label for="keyword-1-1">전체</label>
														</li>
														<li>
															<input type="checkbox" id="keyword-1-2" value="" name="keyword-list">
															<label for="keyword-1-2">특허</label>
														</li>
														<li>
															<input type="checkbox" id="keyword-1-3" value="" name="keyword-list">
															<label for="keyword-1-3">실용신안</label>
														</li>
														<li>
															<input type="checkbox" id="keyword-1-4" value="" name="keyword-list">
															<label for="keyword-1-4">디자인</label>
														</li>
														<li>
															<input type="checkbox" id="keyword-1-5" value="" name="keyword-list">
															<label for="keyword-1-5">상표</label>
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
													<label for="keyword-except">당사자</label>
												</div>
												<div class="dis-tc">
													<ul class="keyword-chk-list">
														<li>
															<input type="checkbox" id="keyword-2-1" value="" name="keyword-list">
															<label for="keyword-2-1">전체</label>
														</li>
														<li>
															<input type="checkbox" id="keyword-2-2" value="" name="keyword-list">
															<label for="keyword-2-2">결정계</label>
														</li>
														<li>
															<input type="checkbox" id="keyword-2-3" value="" name="keyword-list">
															<label for="keyword-2-3">당사자계</label>
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
													<label for="keyword-except">심급구분</label>
												</div>
												<div class="dis-tc">
													<ul class="keyword-chk-list">
														<li>
															<input type="checkbox" id="keyword-3-1" value="" name="keyword-list">
															<label for="keyword-3-1">전체</label>
														</li>
														<li>
															<input type="checkbox" id="keyword-3-2" value="" name="keyword-list">
															<label for="keyword-3-2">특허심판원(심판소, 항고심판소 포함)</label>
														</li>
														<li>
															<input type="checkbox" id="keyword-3-3" value="" name="keyword-list">
															<label for="keyword-3-3">특허법원</label>
														</li>
														<li>
															<input type="checkbox" id="keyword-3-4" value="" name="keyword-list">
															<label for="keyword-3-4">대법원</label>
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
													<label for="keyword-except">심판종류</label>
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
													<label for="keyword-except">심결일자</label>
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
