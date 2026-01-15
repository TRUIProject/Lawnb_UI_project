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
									<label for='keyword-1-2'>제목</label>
								</li>
								<li>
									<input type='checkbox' id='keyword-1-3' value=''
									       name='keyword-list' checked=''>
									<label for='keyword-1-3'>본문</label>
								</li>
								<li>
									<input type='checkbox' id='keyword-1-4' value=''
									       name='keyword-list' checked=''>
									<label for='keyword-1-4'>대상판례</label>
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
								<label for='keyword-except'>분야</label>
							</div>
							<div class='dis-tc'>
								<ul class='keyword-chk-list'>
									<li>
										<input type='checkbox' id='field-4' value='전체'
										       name='field-list[]'>
										<label for='field-4'>전체</label>
									</li>
									<li>
										<input type='checkbox' id='field-5' value='민법'
										       name='field-list[]'>
										<label for='field-5'>민법</label>
									</li>
									<li>
										<input type='checkbox' id='field-6' value='상사'
										       name='field-list[]'>
										<label for='field-6'>상사</label>
									</li>
									<li>
										<input type='checkbox' id='field-7' value='민사소송'
										       name='field-list[]'>
										<label for='field-7'>민사소송</label>
									</li>
									<li>
										<input type='checkbox' id='field-8' value='민사집행'
										       name='field-list[]'>
										<label for='field-8'>민사집행</label>
									</li>
									<li>
										<input type='checkbox' id='field-9' value='노동'
										       name='field-list[]'>
										<label for='field-9'>노동</label>
									</li>
									<li>
										<input type='checkbox' id='field-10' value='회생'
										       name='field-list[]'>
										<label for='field-10'>회생</label>
									</li>
									<li>
										<input type='checkbox' id='field-11' value='지식재산권'
										       name='field-list[]'>
										<label for='field-11'>지식재산권</label>
									</li>
									<li>
										<input type='checkbox' id='field-12' value='행정'
										       name='field-list[]'>
										<label for='field-12'>행정</label>
									</li>
									<li>
										<input type='checkbox' id='field-13' value='개별 법률 판례'
										       name='field-list[]'>
										<label for='field-13'>개별 법률 판례</label>
									</li>

									<li>
										<input type='checkbox' id='field-14' value='국세기본'
										       name='field-list[]'>
										<label for='field-14'>국세기본</label>
									</li>
									<li>
										<input type='checkbox' id='field-15' value='국제조세'
										       name='field-list[]'>
										<label for='field-15'>국제조세</label>
									</li>
									<li>
										<input type='checkbox' id='field-16' value='법인세'
										       name='field-list[]'>
										<label for='field-16'>법인세</label>
									</li>
									<li>
										<input type='checkbox' id='field-17' value='부가세'
										       name='field-list[]'>
										<label for='field-17'>부가세</label>
									</li>
									<li>
										<input type='checkbox' id='field-18' value='상증세'
										       name='field-list[]'>
										<label for='field-18'>상증세</label>
									</li>
									<li>
										<input type='checkbox' id='field-19' value='소득세'
										       name='field-list[]'>
										<label for='field-19'>소득세</label>
									</li>
									<li>
										<input type='checkbox' id='field-20' value='조세범처벌·처벌절차'
										       name='field-list[]'>
										<label for='field-20'>조세범처벌 · 처벌절차</label>
									</li>
									<li>
										<input type='checkbox' id='field-21' value='조세특례제한'
										       name='field-list[]'>
										<label for='field-21'>조세특례제한</label>
									</li>
									<li>
										<input type='checkbox' id='field-22' value='종부세'
										       name='field-list[]'>
										<label for='field-22'>종부세</label>
									</li>
									<li>
										<input type='checkbox' id='field-23' value='지방세특례제한'
										       name='field-list[]'>
										<label for='field-23'>지방세특례제한</label>
									</li>
									<li>
										<input type='checkbox' id='field-24' value='조세 기타'
										       name='field-list[]'>
										<label for='field-24'>조세 기타</label>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class='btn-wrap ta-c'>
			<button class='btn btn-blue btn-l'
			        onclick="location.href='/frontend/precedent/explanation_search01.php';">검색
			</button>
		</div>
	</div>
</div>