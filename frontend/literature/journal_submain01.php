<?php include '../include/header_sub.php'; ?>
<div class="container-wrap">
	<div class="container-inner">
		<div class="container-right">
			<div class="direct-list">
				<div class="direct-item">
					<div class="clear mb-5">
						<h2 class="c-left right-header">최신 유럽법제동향</h2>
					</div>
					<ul class="direct-ul">
						<li>
							<a href="">
								<span class="c-blue">대법원 2023. 7. 27 선고 2022두52980 판결 [정보공개거부처분취소 (다) 파기환송 ]</span>
								<span class="c-gray-l">2025.04.08</span>
							</a>
						</li>
						<li>
							<a href="">
								<span class="c-blue">대법원 2023. 7. 27 선고 2022두52980 판결 [정보공개거부처분취소 (다) 파기환송 ]</span>
								<span class="c-gray-l">2025.04.08</span>
							</a>
						</li>
						<li>
							<a href="">
								<span class="c-blue">대법원 2023. 7. 27 선고 2022두52980 판결 [정보공개거부처분취소 (다) 파기환송 ]</span>
								<span class="c-gray-l">2025.04.08</span>
							</a>
						</li>
						<li>
							<a href="">
								<span class="c-blue">대법원 2023. 7. 27 선고 2022두52980 판결 [정보공개거부처분취소 (다) 파기환송 ]</span>
								<span class="c-gray-l">2025.04.08</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	    <div class="container-center">
	        <h2 class="sub-main-tit clear">저널 검색</h2>
	        <div class="bg-border">
	            <div class="sub-main-pd">
	                <div class="sub-main-tab-warp clear">
	                    <ul class="sub-main-tab-ul c-left">
	                        <li class="on"><a href="./journal_submain01.php">저널 검색</a></li>
	                        <li><a href="./journal_submain02.php">법률잡지/공공간행물</a></li>
	                    </ul>
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
			                                    <input id="keyword-except" type="text" class="input-css01" placeholder="제외어">
			                                    <ul class="keyword-chk-list mt-10">
				                                    <li>
					                                    <input type="checkbox" id="keyword-1-1" value="" name="keyword-list">
					                                    <label for="keyword-1-1">전체</label>
				                                    </li>
				                                    <li>
					                                    <input type="checkbox" id="keyword-1-2" value="" name="keyword-list">
					                                    <label for="keyword-1-2">제목</label>
				                                    </li>
				                                    <li>
					                                    <input type="checkbox" id="keyword-1-3" value="" name="keyword-list">
					                                    <label for="keyword-1-3">초록</label>
				                                    </li>
				                                    <li>
					                                    <input type="checkbox" id="keyword-1-4" value="" name="keyword-list">
					                                    <label for="keyword-1-4">저자</label>
				                                    </li>
				                                    <li>
					                                    <input type="checkbox" id="keyword-1-5" value="" name="keyword-list">
					                                    <label for="keyword-1-5">주제어</label>
				                                    </li>
			                                    </ul>
			                                    <p class="mt-5 c-gray-l"><span class="icon icon-w20 icon-exclamation-circle mr-2"></span>주제어 검색은 법률잡지에 한하여 제공됩니다</p>
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
								                    <label for="keyword-except">저널구분</label>
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
								                    <label for="keyword-except">저널종류</label>
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
								                    <label for="keyword-except">발간호수</label>
							                    </div>
							                    <div class="dis-tc clear">
								                    <div class="dis-t">
									                    <div class="dis-tr">
										                    <div class="dis-tc pr-10" style="width: 25%">
											                    <select id="select" class="select-css01">
												                    <option>제21대</option>
												                    <option>선택2</option>
												                    <option>선택3</option>
												                    <option>선택4</option>
											                    </select>
										                    </div>
										                    <div class="dis-tc">
											                    <select id="select" class="select-css01">
												                    <option>제21대</option>
												                    <option>선택2</option>
												                    <option>선택3</option>
												                    <option>선택4</option>
											                    </select>
										                    </div>
									                    </div>
								                    </div>
							                    </div>
						                    </div>
					                    </div>
				                    </div>
				                    <div class="input-box str">
					                    <div class="dis-t">
						                    <div class="dis-tr">
							                    <div class="dis-th">
								                    <label for="keyword-except">발행일자</label>
							                    </div>
							                    <div class="dis-tc clear">
								                    <div class="dis-t">
									                    <div class="dis-tr">
										                    <div class="dis-tc pr-10" style="width: 25%">
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
