<div class='sub-main-con-warp'>
	<div class='sub-main-con'>
		<div class='con'>
			<div class='input-box str'>
				<div class='dis-t'>
					<div class='dis-tr'>
						<div class='dis-th'>
							<label for='keyword-search'>검색어</label>
						</div>
						<div class='dis-tc'>
							<input id='keyword-search' type='text' class='input-css01' placeholder='검색어'>
						</div>
					</div>
				</div>
			</div>
			<div class='input-box str'>
				<div class='dis-t'>
					<div class='dis-tr'>
						<div class='dis-th'>
							<label for='keyword-except'>제외어</label>
						</div>
						<div class='dis-tc'>
							<input id='keyword-except' type='text' class='input-css01'
							       placeholder='제외어'>
							<ul class='keyword-chk-list mt-10'>
								<li>
									<input type='checkbox' id='keyword-1-1' value=''
									       name='keyword-list' checked=''>
									<label for='keyword-1-1'>전체</label>
								</li>
								<li>
									<input type='checkbox' id='keyword-1-2' value=''
									       name='keyword-list' checked=''>
									<label for='keyword-1-2'>질의요지</label>
								</li>
								<li>
									<input type='checkbox' id='keyword-1-3' value=''
									       name='keyword-list' checked=''>
									<label for='keyword-1-3'>전문</label>
								</li>
								<li>
									<input type='checkbox' id='keyword-1-4' value=''
									       name='keyword-list' checked=''>
									<label for='keyword-1-4'>문서번호</label>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id='search-area-wrap' class='search-area-wrap con'>
			<div class='setting-box'>
				<button class='dis-b str' onclick='fn_toggle_slide(this)' data-target='#toggle01'
				        data-warp='#search-area-wrap'>
					<span class='icon-plus02 icon-w15'></span> 검색범위 상세설정
					<span class='icon-arrow-up icon-w20 str-rt'></span>
				</button>
			</div>
			<div id='toggle01' class='search-area-con input-box str mt-20'>
				<div class='input-box str'>
					<div class='dis-t'>
						<div class='dis-tr'>
							<div class='dis-th'>
								<label for='keyword-except'>법령명</label>
							</div>
							<div class='dis-tc'>
								<select id='' class='select-css01'>
									<option>전체</option>
									<option>선택1</option>
								</select>
							</div>
						</div>
					</div>
				</div>
				<div class='input-box str'>
					<div class='dis-t'>
						<div class='dis-tr'>
							<div class='dis-th'>
								<label for='keyword-except'>발행일자</label>
							</div>
							<div class='dis-tc clear'>
								<div class='dis-t'>
									<div class='dis-tr'>
										<div class='dis-tc pr-10'>
											<select id='select' class='select-css01'>
												<option>기간선택</option>
												<option>선택2</option>
												<option>선택3</option>
												<option>선택4</option>
											</select>
										</div>
										<div class='dis-tc pr-5'><input id='keyword-except' type='date'
										                                class='input-css01' placeholder='년/월/일'>
										</div>
										<div class='dis-tc pr-5 ta-c'>~</div>
										<div class='dis-tc'><input id='keyword-except' type='date'
										                           class='input-css01' placeholder='년/월/일'>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class='btn-wrap ta-c'>
			<button class='btn btn-blue btn-l'
			        onclick="location.href='/frontend/law/mainRulesExp_search01.php';">검색
			</button>
		</div>
	</div>
</div>