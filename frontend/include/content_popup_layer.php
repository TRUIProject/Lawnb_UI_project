<!-- 메모 레이어 -->
<div class="hMemoLayer">
	<h4>하이라이트 메모</h4>
	<div class="checkColor">
		<span class="colorBlock hl_OG"></span>
		<span class="colorBlock hl_GN"></span>
		<span class="colorBlock hl_BL"></span>
		<span class="colorBlock hl_PR"></span>
		<span class="colorBlock hl_GY"></span>
		<button class="colorBlock clear" disabled>해제</button>
	</div>
	<div class="addMeomo">
		<label><input class="memoInput" type="checkbox" onclick="addHLLayerMemo()" disabled/> 메모하기</label>
		<div class="addMemo_txt">
			<textarea placeholder="메모 250자 제한"></textarea>
			<button class="submit">적용</button>
		</div>
	</div>
</div>
<!-- 검색 팝업창 레이어 -->
<div id="con-search-popup" class="content-popup con-search-popup" style="right: 200px; top: 100px;">
	<div class="popup-bg bg-gray p-10">
		<div class="dis-t">
			<div class="dis-tr">
				<div class="dis-tc pr-2 v-m">
					<input id="keyword-search" type="text" class="input-css01" placeholder="검색어">
				</div>
				<div class="dis-tc pr-2 v-m">
					<button class="btn"><span class="n-i-w20 n-i-search n-i"></span></button>
				</div>
				<div class="dis-tc pr-2 v-m">
					<div class="btn btn-01">
						<button class="dis-b"><span class="n-i-w15 n-i-chevron-up n-i"></span></button>
						<button class="dis-b"><span class="n-i-w15 n-i-chevron-down n-i"></span></button>
					</div>
				</div>
				<div class="dis-tc pr-2 v-m">
					<button class="btn btn-txt">모아보기</button>
				</div>
				<div class="dis-tc v-m">
					<button class="btn" onclick="fn_remove_class_on('#con-search-popup')"><span
								class="n-i-w20 n-i-x-mark n-i"></span></button>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- 하이라이트&메모 팝업창 레이어 -->
<div id="con-highlight-popup" class="header-popup content-popup con-highlight-popup" style="right: 200px; top: 100px;">
	<div class="popup-bg">
		<div class="popup-header">
			<div class="top_title clear">
				<div class="top_title_txt c-left">
					<div class="str pl-25 pr-25"><span class="n-i-w20 n-i-pencil str-ltc"></span> 하이라이트&메모
						<span class="n-i-w20 n-i-alert-cir str-rm"></span></div>
				</div>
				<div class="top_title_group c-right clear">
					<div class="btn-group c-left">
						<button class="btn btn-none btn-s">숨기기</button>
					</div>
					<div class="btn_close_pop c-left">
						<button class="btn btn-none btn-s" onclick="fn_remove_class_on('#con-highlight-popup')">
							<i class="icon-close" data-icon=""></i></button>
					</div>
				</div>
			</div>
		</div>
		<div class="popup-list-wrap">
			<ul class="highlight-list">
				<li>
					<a href="" class="hl_GY">
						<div class="str pr-30">
							<p>하나에 해당하는 권리의 보존, 이전, 설정, 변경, 처분의 제한 또는 소멸에 대하여 한다.</p>
							<button onclick="" class="del_hlight str-rm"><span
										class="n-i-w20 n-i-trash n-i"></span></button>
						</div>
					</a>
				</li>
				<li>
					<a href="" class="hl_OG">
						<div class="str pr-30">
							<p>부본자료"(登記簿副本資料)란 등기부와 동일한 내용으로 보조기억장치에 기록된 자료를 말한다.</p>
							<button onclick="" class="del_hlight str-rm"><span
										class="n-i-w20 n-i-trash n-i"></span></button>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</div>
<!-- 폴더 담기 팝업창 레이어 -->
<div id="add-folder-popup" class="header-popup content-popup add-folder-popup" style="right: 200px; top: 100px;">
	<div class="popup-bg">
		<div class="popup-header">
			<div class="top_title clear">
				<div class="top_title_txt c-left"><i class="icon-" data-icon=""></i> 폴더 담기</div>
				<div class="top_title_group c-right clear">
					<div class="btn-group c-left">
						<button class="btn btn-none btn-s"><i class="icon" data-icon=""></i> 새폴더</button>
					</div>
					<div class="btn_close_pop c-left">
						<button class="btn btn-none btn-s" onclick="fn_remove_class_on('#add-folder-popup')">
							닫기<i class="icon-close" data-icon=""></i></button>
					</div>
				</div>
			</div>
		</div>
		<div class="popup-list-wrap">
			<div id="my-service-con01" class="popup-con-wrap on">
				<div class="popup-con scroll-y">
					<div id="folder_results" class="folder-results">
						<ol>
							<li class="keyword-dropdown on">
								<button class="keyword-list-btn" data-bs-target="#location-con-01"
								        onclick="fn_keyword_list_open(this)"></button>
								<div class="str keyword-hd folder-hd">
									<input type="radio" id="location1" value="" name="keyword-list"
									       onclick="fn_chk_all(this)" data-bs-target="#location-con-01">
									<label for="location1"><strong>이세진</strong>님의 폴더</label>
								</div>
								<ol id="location-con-01" class="dropdown-ol">
									<li class="keyword-dropdown on">
										<button class="keyword-list-btn" data-bs-target="#location-con-01-01"
										        onclick="fn_keyword_list_open(this)"></button>
										<div class="str keyword-hd">
											<input type="radio" id="location1" value="" name="keyword-list"
											       onclick="fn_chk_all(this)" data-bs-target="#location-con-01">
											<label for="location1">가사</label>
										</div>
										<ol id="location-con-01-01">
											<li>
												<input type="radio" id="location1" value="" name="keyword-list">
												<label for="location1">가사-1</label>
											</li>
										</ol>
									</li>
									<li>
										<input type="radio" id="location1-2" value="" name="keyword-list">
										<label for="location1-2">개발부담금부</label>
									</li>
									<li>
										<input type="radio" id="location1-3" value="" name="keyword-list">
										<label for="location1-3">건물철거 근저당권</label>
									</li>
									<li>
										<input type="radio" id="location1-4" value="" name="keyword-list">
										<label for="location1-4">경업금지</label>
									</li>
									<li>
										<input type="radio" id="location1-5" value="" name="keyword-list">
										<label for="location1-5">경업해제</label>
									</li>
									<li>
										<input type="radio" id="location1-5" value="" name="keyword-list">
										<label for="location1-5">경업해제</label>
									</li>
									<li>
										<input type="radio" id="location1-5" value="" name="keyword-list">
										<label for="location1-5">경업해제</label>
									</li>
									<li>
										<input type="radio" id="location1-5" value="" name="keyword-list">
										<label for="location1-5">경업해제</label>
									</li>
									<li>
										<input type="radio" id="location1-5" value="" name="keyword-list">
										<label for="location1-5">경업해제</label>
									</li>
								</ol>
							</li>
						</ol>
					</div>
				</div>
				<div class="popup-footer fs-12">
					<div class="ft-con">
						<div class="str pl-20">
							<span class="icon-exclamation-circle icon-w15 str-lt"></span>
							폴더 저장 후 본문 페이지 우측영역에서 메모를 추가하실 수 있습니다.
						</div>
					</div>
					<div class="ft-con c-blue">
						<div class="btn-wrap">
							<div class="ta-c">
								<button class="btn btn-blue btn-m">저장</button>
								<button class="btn btn-none btn-m"
								        onclick="fn_remove_class_on('#add-folder-popup')">취소
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!--  알림 설정 팝업창 레이어 -->
<div id="con-alert-popup" class="header-popup content-popup con-alert-popup" style="right: 200px; top: 100px;">
	<div class="popup-bg">
		<div class="popup-header">
			<div class="top_title clear">
				<div class="top_title_txt c-left">
					<div class="str pl-25"><span class="n-i-w20 n-i-bell str-ltc"></span> 알림 설정</div>
				</div>
				<div class="top_title_group c-right">
					<button class="btn btn-none btn-s" onclick="fn_remove_class_on('#con-alert-popup')"><i
								class="icon-close" data-icon=""></i></button>
				</div>
			</div>
		</div>
		<div class="popup-list-wrap">
			<div class="popup-con-wrap">
				<div class="popup-con bg-gray-b">
					<div class="dis-t">
						<div class="dis-tr">
							<div class="dis-tc pr-10 v-m fw-500">전송기간</div>
							<div class="dis-tc pr-5 v-m">2025.05.01 ~ 2026.05.01</div>
							<div class="dis-tc v-m">
								<div class="btn-list btn-list-m btn-list-none">
									<button class="btn">6개월</button>
									<button class="btn on">1년</button>
									<button class="btn">3년</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="popup-con">
					<div class="dis-t">
						<div class="dis-tr">
							<div class="dis-tc pr-10 v-m fw-500">알림메일 수신여부</div>
							<div class="dis-tc pr-5 v-m">
								<div class="btn-list btn-list-m btn-list-none dis-b">
									<button class="btn">Yes</button>
									<button class="btn on">No</button>
								</div>
							</div>
							<div class="dis-tc v-m">
								<input id="keyword-search" type="text" class="input-css01"
								       value="sj4755@naver.com" readonly disabled>
							</div>
						</div>
					</div>
				</div>
				<div class="popup-footer fs-12">
					<div class="ft-con">
						<div class="str pl-20">
							<span class="icon-exclamation-circle icon-w15 str-lt"></span>
							메일정보 수정시 회원정보상의 메일 주소가 수정됩니다. 기존의 알림 메일 역시 수정된 메일 주소로 발송됩니다.
						</div>
					</div>
					<div class="ft-con c-blue">
						<div class="btn-wrap">
							<div class="ta-c">
								<button class="btn btn-blue btn-m">저장</button>
								<button class="btn btn-none btn-m"
								        onclick="fn_remove_class_on('#con-alert-popup')">취소
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- 인쇄 팝업창 레이어 -->
<div id="con-print-popup" class="header-popup content-popup con-print-popup" style="right: 200px; top: 100px;">
	<div class="popup-bg">
		<div class="popup-header">
			<div class="top_title clear">
				<div class="top_title_txt c-left">
					<div class="str pl-25"><span class="n-i-w20 n-i-print str-ltc"></span> 인쇄</div>
				</div>
				<div class="top_title_group c-right">
					<button class="btn btn-none btn-s" onclick="fn_remove_class_on('#con-print-popup')"><i
								class="icon-close" data-icon=""></i></button>
				</div>
			</div>
		</div>
		<div class="popup-list-wrap">
			<div class="popup-con-wrap">
				<div class="popup-con p-10">
					<div>
						<strong>부가정보 표시 여부</strong>
						<div class="mt-5">
							<div>
								<input type="checkbox" id="" name="" class="mr-2" disabled="">폴더 메모
								<div class="bg-gray-b p-10 mt-5">
									<div class="info">폴더 메모가 있을 경우 함께 인쇄를 할 수 있습니다.</div>
								</div>
							</div>
							<div class="text_ex mt-5">
								해당 본문 페이지에서 하이라이트의 제공 여부가 인쇄물에 그대로 반영됩니다. 인쇄물에 하이라이트를 표시하지 않으려면 아래와 같이 하이라이트를 제거
								후 인쇄해주세요.​ <br>
								1) 검색어 하이라이트 = 본문 상단 “검색어“ 체크 해제 처리​<br>
								2) 본문 하이라이트= 본문 상단 “하이라이트&amp;메모“ 내 숨김 처리
							</div>
						</div>
					</div>
					<div class="mt-20">
						<strong>인쇄 범위</strong>
						<div class="gray_info mt-5">
							<ul>
								<li><input type="radio" name="iType_p" checked="checked" value="0" class="mr-2">전체</li>
								<li class="mt-5">
									<div class="dis-t">
										<div class="dis-tr">
											<div class="dis-tc v-m pr-10" style="width: 80px;">
												<input type="radio" name="iType_p" value="1" class="mr-2">범위 지정
											</div>
											<div class="dis-tc v-m pr-2">
												<select id="iSelType_p" name="iSelType_p" class="input-css01">
													<option value="00">전체</option>
													<option value="제1조">제1조</option>
													<option value="제2조">제2조</option>
													<option value="제3조">제3조</option>
													<option value="제4조">제4조</option>
													<option value="제5조">제5조</option>
													<option value="제6조">제6조</option>
													<option value="제7조">제7조</option>
													<option value="제7조의2">제7조의2</option>
													<option value="제7조의3">제7조의3</option>
													<option value="제8조">제8조</option>
													<option value="제9조">제9조</option>
													<option value="제10조">제10조</option>
													<option value="제11조">제11조</option>
													<option value="제12조">제12조</option>
													<option value="제13조">제13조</option>
													<option value="제14조">제14조</option>
													<option value="제15조">제15조</option>
													<option value="제16조">제16조</option>
													<option value="제17조">제17조</option>
													<option value="제18조">제18조</option>
													<option value="제19조">제19조</option>
													<option value="제20조">제20조</option>
													<option value="제21조">제21조</option>
													<option value="제22조">제22조</option>
													<option value="제23조">제23조</option>
													<option value="제24조">제24조</option>
													<option value="제25조">제25조</option>
													<option value="제26조">제26조</option>
													<option value="제27조">제27조</option>
													<option value="제28조">제28조</option>
													<option value="제29조">제29조</option>
													<option value="제30조">제30조</option>
													<option value="제31조">제31조</option>
													<option value="제32조">제32조</option>
													<option value="제33조">제33조</option>
													<option value="제34조">제34조</option>
													<option value="제35조">제35조</option>
													<option value="제36조">제36조</option>
													<option value="제37조">제37조</option>
													<option value="제38조">제38조</option>
													<option value="제39조">제39조</option>
													<option value="제40조">제40조</option>
													<option value="제41조">제41조</option>
													<option value="제42조">제42조</option>
													<option value="제43조">제43조</option>
													<option value="제44조">제44조</option>
													<option value="제45조">제45조</option>
													<option value="제46조">제46조</option>
													<option value="제47조">제47조</option>
													<option value="제48조">제48조</option>
													<option value="제49조">제49조</option>
													<option value="제50조">제50조</option>
													<option value="제51조">제51조</option>
													<option value="제52조">제52조</option>
													<option value="제53조">제53조</option>
													<option value="제54조">제54조</option>
													<option value="제55조">제55조</option>
													<option value="제56조">제56조</option>
													<option value="제57조">제57조</option>
													<option value="제58조">제58조</option>
													<option value="제59조">제59조</option>
													<option value="제60조">제60조</option>
													<option value="제61조">제61조</option>
													<option value="제62조">제62조</option>
													<option value="제63조">제63조</option>
													<option value="제64조">제64조</option>
													<option value="제65조">제65조</option>
													<option value="제66조">제66조</option>
													<option value="제67조">제67조</option>
													<option value="제68조">제68조</option>
													<option value="제69조">제69조</option>
													<option value="제70조">제70조</option>
													<option value="제71조">제71조</option>
													<option value="제72조">제72조</option>
													<option value="제73조">제73조</option>
													<option value="제74조">제74조</option>
													<option value="제75조">제75조</option>
													<option value="제76조">제76조</option>
													<option value="제77조">제77조</option>
													<option value="제78조">제78조</option>
													<option value="제79조">제79조</option>
													<option value="제80조">제80조</option>
													<option value="제81조">제81조</option>
													<option value="제82조">제82조</option>
													<option value="제82조의2">제82조의2</option>
													<option value="제83조">제83조</option>
													<option value="제84조">제84조</option>
													<option value="제84조의2">제84조의2</option>
													<option value="제85조">제85조</option>
													<option value="제85조의2">제85조의2</option>
													<option value="제86조">제86조</option>
													<option value="제87조">제87조</option>
													<option value="제87조의2">제87조의2</option>
													<option value="제87조의3">제87조의3</option>
													<option value="제88조">제88조</option>
													<option value="제89조">제89조</option>
													<option value="제90조">제90조</option>
													<option value="제91조">제91조</option>
													<option value="제92조">제92조</option>
													<option value="제93조">제93조</option>
													<option value="제94조">제94조</option>
													<option value="제95조">제95조</option>
													<option value="제96조">제96조</option>
													<option value="제97조">제97조</option>
													<option value="제98조">제98조</option>
													<option value="제99조">제99조</option>
													<option value="제100조">제100조</option>
													<option value="제101조">제101조</option>
													<option value="제102조">제102조</option>
													<option value="제103조">제103조</option>
													<option value="제104조">제104조</option>
													<option value="제105조">제105조</option>
													<option value="제106조">제106조</option>
													<option value="제107조">제107조</option>
													<option value="제108조">제108조</option>
													<option value="제109조">제109조</option>
													<option value="제109조의2">제109조의2</option>
													<option value="제110조">제110조</option>
													<option value="제111조">제111조</option>
													<option value="제112조">제112조</option>
													<option value="제113조">제113조</option>
												</select>
											</div>
											<div class="dis-tc v-m pr-2">
												~
											</div>
											<div class="dis-tc v-m">
												<select id="iSelType1_p" name="iSelType1_p" class="input-css01">
													<option value="00">전체</option>
													<option value="제1조">제1조</option>
													<option value="제2조">제2조</option>
													<option value="제3조">제3조</option>
													<option value="제4조">제4조</option>
													<option value="제5조">제5조</option>
													<option value="제6조">제6조</option>
													<option value="제7조">제7조</option>
													<option value="제7조의2">제7조의2</option>
													<option value="제7조의3">제7조의3</option>
													<option value="제8조">제8조</option>
													<option value="제9조">제9조</option>
													<option value="제10조">제10조</option>
													<option value="제11조">제11조</option>
													<option value="제12조">제12조</option>
													<option value="제13조">제13조</option>
													<option value="제14조">제14조</option>
													<option value="제15조">제15조</option>
													<option value="제16조">제16조</option>
													<option value="제17조">제17조</option>
													<option value="제18조">제18조</option>
													<option value="제19조">제19조</option>
													<option value="제20조">제20조</option>
													<option value="제21조">제21조</option>
													<option value="제22조">제22조</option>
													<option value="제23조">제23조</option>
													<option value="제24조">제24조</option>
													<option value="제25조">제25조</option>
													<option value="제26조">제26조</option>
													<option value="제27조">제27조</option>
													<option value="제28조">제28조</option>
													<option value="제29조">제29조</option>
													<option value="제30조">제30조</option>
													<option value="제31조">제31조</option>
													<option value="제32조">제32조</option>
													<option value="제33조">제33조</option>
													<option value="제34조">제34조</option>
													<option value="제35조">제35조</option>
													<option value="제36조">제36조</option>
													<option value="제37조">제37조</option>
													<option value="제38조">제38조</option>
													<option value="제39조">제39조</option>
													<option value="제40조">제40조</option>
													<option value="제41조">제41조</option>
													<option value="제42조">제42조</option>
													<option value="제43조">제43조</option>
													<option value="제44조">제44조</option>
													<option value="제45조">제45조</option>
													<option value="제46조">제46조</option>
													<option value="제47조">제47조</option>
													<option value="제48조">제48조</option>
													<option value="제49조">제49조</option>
													<option value="제50조">제50조</option>
													<option value="제51조">제51조</option>
													<option value="제52조">제52조</option>
													<option value="제53조">제53조</option>
													<option value="제54조">제54조</option>
													<option value="제55조">제55조</option>
													<option value="제56조">제56조</option>
													<option value="제57조">제57조</option>
													<option value="제58조">제58조</option>
													<option value="제59조">제59조</option>
													<option value="제60조">제60조</option>
													<option value="제61조">제61조</option>
													<option value="제62조">제62조</option>
													<option value="제63조">제63조</option>
													<option value="제64조">제64조</option>
													<option value="제65조">제65조</option>
													<option value="제66조">제66조</option>
													<option value="제67조">제67조</option>
													<option value="제68조">제68조</option>
													<option value="제69조">제69조</option>
													<option value="제70조">제70조</option>
													<option value="제71조">제71조</option>
													<option value="제72조">제72조</option>
													<option value="제73조">제73조</option>
													<option value="제74조">제74조</option>
													<option value="제75조">제75조</option>
													<option value="제76조">제76조</option>
													<option value="제77조">제77조</option>
													<option value="제78조">제78조</option>
													<option value="제79조">제79조</option>
													<option value="제80조">제80조</option>
													<option value="제81조">제81조</option>
													<option value="제82조">제82조</option>
													<option value="제82조의2">제82조의2</option>
													<option value="제83조">제83조</option>
													<option value="제84조">제84조</option>
													<option value="제84조의2">제84조의2</option>
													<option value="제85조">제85조</option>
													<option value="제85조의2">제85조의2</option>
													<option value="제86조">제86조</option>
													<option value="제87조">제87조</option>
													<option value="제87조의2">제87조의2</option>
													<option value="제87조의3">제87조의3</option>
													<option value="제88조">제88조</option>
													<option value="제89조">제89조</option>
													<option value="제90조">제90조</option>
													<option value="제91조">제91조</option>
													<option value="제92조">제92조</option>
													<option value="제93조">제93조</option>
													<option value="제94조">제94조</option>
													<option value="제95조">제95조</option>
													<option value="제96조">제96조</option>
													<option value="제97조">제97조</option>
													<option value="제98조">제98조</option>
													<option value="제99조">제99조</option>
													<option value="제100조">제100조</option>
													<option value="제101조">제101조</option>
													<option value="제102조">제102조</option>
													<option value="제103조">제103조</option>
													<option value="제104조">제104조</option>
													<option value="제105조">제105조</option>
													<option value="제106조">제106조</option>
													<option value="제107조">제107조</option>
													<option value="제108조">제108조</option>
													<option value="제109조">제109조</option>
													<option value="제109조의2">제109조의2</option>
													<option value="제110조">제110조</option>
													<option value="제111조">제111조</option>
													<option value="제112조">제112조</option>
													<option value="제113조">제113조</option>
												</select>
											</div>
										</div>
									</div>
								</li>
								<li class="mt-5">
									<div class="dis-t">
										<div class="dis-tr">
											<div class="dis-tc v-m pr-10" style="width: 80px;">
												<input type="radio" name="iType_p" value="2" class="mr-2">각조 지정
											</div>
											<div class="dis-tc v-m pr-2">
												<input type="text" id="txtSeljo_p" name="txtSeljo_p" class="input-css01">
											</div>
											<div class="dis-tc v-m">
												<select id="iSelType2_p" name="iSelType2_p" class="input-css01">
													<option value="00">전체</option>
													<option value="제1조">제1조</option>
													<option value="제2조">제2조</option>
													<option value="제3조">제3조</option>
													<option value="제4조">제4조</option>
													<option value="제5조">제5조</option>
													<option value="제6조">제6조</option>
													<option value="제7조">제7조</option>
													<option value="제7조의2">제7조의2</option>
													<option value="제7조의3">제7조의3</option>
													<option value="제8조">제8조</option>
													<option value="제9조">제9조</option>
													<option value="제10조">제10조</option>
													<option value="제11조">제11조</option>
													<option value="제12조">제12조</option>
													<option value="제13조">제13조</option>
													<option value="제14조">제14조</option>
													<option value="제15조">제15조</option>
													<option value="제16조">제16조</option>
													<option value="제17조">제17조</option>
													<option value="제18조">제18조</option>
													<option value="제19조">제19조</option>
													<option value="제20조">제20조</option>
													<option value="제21조">제21조</option>
													<option value="제22조">제22조</option>
													<option value="제23조">제23조</option>
													<option value="제24조">제24조</option>
													<option value="제25조">제25조</option>
													<option value="제26조">제26조</option>
													<option value="제27조">제27조</option>
													<option value="제28조">제28조</option>
													<option value="제29조">제29조</option>
													<option value="제30조">제30조</option>
													<option value="제31조">제31조</option>
													<option value="제32조">제32조</option>
													<option value="제33조">제33조</option>
													<option value="제34조">제34조</option>
													<option value="제35조">제35조</option>
													<option value="제36조">제36조</option>
													<option value="제37조">제37조</option>
													<option value="제38조">제38조</option>
													<option value="제39조">제39조</option>
													<option value="제40조">제40조</option>
													<option value="제41조">제41조</option>
													<option value="제42조">제42조</option>
													<option value="제43조">제43조</option>
													<option value="제44조">제44조</option>
													<option value="제45조">제45조</option>
													<option value="제46조">제46조</option>
													<option value="제47조">제47조</option>
													<option value="제48조">제48조</option>
													<option value="제49조">제49조</option>
													<option value="제50조">제50조</option>
													<option value="제51조">제51조</option>
													<option value="제52조">제52조</option>
													<option value="제53조">제53조</option>
													<option value="제54조">제54조</option>
													<option value="제55조">제55조</option>
													<option value="제56조">제56조</option>
													<option value="제57조">제57조</option>
													<option value="제58조">제58조</option>
													<option value="제59조">제59조</option>
													<option value="제60조">제60조</option>
													<option value="제61조">제61조</option>
													<option value="제62조">제62조</option>
													<option value="제63조">제63조</option>
													<option value="제64조">제64조</option>
													<option value="제65조">제65조</option>
													<option value="제66조">제66조</option>
													<option value="제67조">제67조</option>
													<option value="제68조">제68조</option>
													<option value="제69조">제69조</option>
													<option value="제70조">제70조</option>
													<option value="제71조">제71조</option>
													<option value="제72조">제72조</option>
													<option value="제73조">제73조</option>
													<option value="제74조">제74조</option>
													<option value="제75조">제75조</option>
													<option value="제76조">제76조</option>
													<option value="제77조">제77조</option>
													<option value="제78조">제78조</option>
													<option value="제79조">제79조</option>
													<option value="제80조">제80조</option>
													<option value="제81조">제81조</option>
													<option value="제82조">제82조</option>
													<option value="제82조의2">제82조의2</option>
													<option value="제83조">제83조</option>
													<option value="제84조">제84조</option>
													<option value="제84조의2">제84조의2</option>
													<option value="제85조">제85조</option>
													<option value="제85조의2">제85조의2</option>
													<option value="제86조">제86조</option>
													<option value="제87조">제87조</option>
													<option value="제87조의2">제87조의2</option>
													<option value="제87조의3">제87조의3</option>
													<option value="제88조">제88조</option>
													<option value="제89조">제89조</option>
													<option value="제90조">제90조</option>
													<option value="제91조">제91조</option>
													<option value="제92조">제92조</option>
													<option value="제93조">제93조</option>
													<option value="제94조">제94조</option>
													<option value="제95조">제95조</option>
													<option value="제96조">제96조</option>
													<option value="제97조">제97조</option>
													<option value="제98조">제98조</option>
													<option value="제99조">제99조</option>
													<option value="제100조">제100조</option>
													<option value="제101조">제101조</option>
													<option value="제102조">제102조</option>
													<option value="제103조">제103조</option>
													<option value="제104조">제104조</option>
													<option value="제105조">제105조</option>
													<option value="제106조">제106조</option>
													<option value="제107조">제107조</option>
													<option value="제108조">제108조</option>
													<option value="제109조">제109조</option>
													<option value="제109조의2">제109조의2</option>
													<option value="제110조">제110조</option>
													<option value="제111조">제111조</option>
													<option value="제112조">제112조</option>
													<option value="제113조">제113조</option>
												</select>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="mt-20">
						<div class="btn-group ta-c">
							<button type="button" class="btn-m btn-blue">인쇄</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- 파일저장 팝업창 레이어 -->
<div id="con-file-down-popup" class="header-popup content-popup con-file-down-popup" style="right: 200px; top: 100px;">
	<div class="popup-bg">
		<div class="popup-header">
			<div class="top_title clear">
				<div class="top_title_txt c-left">
					<div class="str pl-25"><span class="n-i-w20 n-i-file-down str-ltc"></span> 파일저장</div>
				</div>
				<div class="top_title_group c-right">
					<button class="btn btn-none btn-s" onclick="fn_remove_class_on('#con-file-down-popup')"><i class="icon-close" data-icon=""></i></button>
				</div>
			</div>
		</div>
		<div class="popup-list-wrap">
			<div class="popup-con-wrap">
				<div class="popup-con p-10">
					<div>
						<strong>부가정보 표시 여부</strong>
						<div class="mt-5">
							<div>
								<div>
									<input type="checkbox" id="" name="" class="mr-2">본문 내 링크 표시
								</div>
								<div>
									<input type="checkbox" id="" name="" class="mr-2" disabled="">폴더 메모
								</div>
								<div class="bg-gray-b p-10 mt-5">폴더 메모가 있을 경우 함께 파일저장을 할 수 있습니다.</div>
							</div>
						</div>
					</div>
					<div class="mt-20">
						<strong>저장 범위</strong>
						<div class="gray_info mt-5">
							<ul>
								<li><input type="radio" name="iType_p" checked="checked" value="0" class="mr-2">전체</li>
								<li class="mt-5">
									<div class="dis-t">
										<div class="dis-tr">
											<div class="dis-tc v-m pr-10" style="width: 80px;">
												<input type="radio" name="iType_p" value="1" class="mr-2">범위 지정
											</div>
											<div class="dis-tc v-m pr-2">
												<select id="iSelType_p" name="iSelType_p" class="input-css01">
													<option value="00">전체</option>
													<option value="제1조">제1조</option>
													<option value="제2조">제2조</option>
													<option value="제3조">제3조</option>
													<option value="제4조">제4조</option>
													<option value="제5조">제5조</option>
													<option value="제6조">제6조</option>
													<option value="제7조">제7조</option>
													<option value="제7조의2">제7조의2</option>
													<option value="제7조의3">제7조의3</option>
													<option value="제8조">제8조</option>
													<option value="제9조">제9조</option>
													<option value="제10조">제10조</option>
													<option value="제11조">제11조</option>
													<option value="제12조">제12조</option>
													<option value="제13조">제13조</option>
													<option value="제14조">제14조</option>
													<option value="제15조">제15조</option>
													<option value="제16조">제16조</option>
													<option value="제17조">제17조</option>
													<option value="제18조">제18조</option>
													<option value="제19조">제19조</option>
													<option value="제20조">제20조</option>
													<option value="제21조">제21조</option>
													<option value="제22조">제22조</option>
													<option value="제23조">제23조</option>
													<option value="제24조">제24조</option>
													<option value="제25조">제25조</option>
													<option value="제26조">제26조</option>
													<option value="제27조">제27조</option>
													<option value="제28조">제28조</option>
													<option value="제29조">제29조</option>
													<option value="제30조">제30조</option>
													<option value="제31조">제31조</option>
													<option value="제32조">제32조</option>
													<option value="제33조">제33조</option>
													<option value="제34조">제34조</option>
													<option value="제35조">제35조</option>
													<option value="제36조">제36조</option>
													<option value="제37조">제37조</option>
													<option value="제38조">제38조</option>
													<option value="제39조">제39조</option>
													<option value="제40조">제40조</option>
													<option value="제41조">제41조</option>
													<option value="제42조">제42조</option>
													<option value="제43조">제43조</option>
													<option value="제44조">제44조</option>
													<option value="제45조">제45조</option>
													<option value="제46조">제46조</option>
													<option value="제47조">제47조</option>
													<option value="제48조">제48조</option>
													<option value="제49조">제49조</option>
													<option value="제50조">제50조</option>
													<option value="제51조">제51조</option>
													<option value="제52조">제52조</option>
													<option value="제53조">제53조</option>
													<option value="제54조">제54조</option>
													<option value="제55조">제55조</option>
													<option value="제56조">제56조</option>
													<option value="제57조">제57조</option>
													<option value="제58조">제58조</option>
													<option value="제59조">제59조</option>
													<option value="제60조">제60조</option>
													<option value="제61조">제61조</option>
													<option value="제62조">제62조</option>
													<option value="제63조">제63조</option>
													<option value="제64조">제64조</option>
													<option value="제65조">제65조</option>
													<option value="제66조">제66조</option>
													<option value="제67조">제67조</option>
													<option value="제68조">제68조</option>
													<option value="제69조">제69조</option>
													<option value="제70조">제70조</option>
													<option value="제71조">제71조</option>
													<option value="제72조">제72조</option>
													<option value="제73조">제73조</option>
													<option value="제74조">제74조</option>
													<option value="제75조">제75조</option>
													<option value="제76조">제76조</option>
													<option value="제77조">제77조</option>
													<option value="제78조">제78조</option>
													<option value="제79조">제79조</option>
													<option value="제80조">제80조</option>
													<option value="제81조">제81조</option>
													<option value="제82조">제82조</option>
													<option value="제82조의2">제82조의2</option>
													<option value="제83조">제83조</option>
													<option value="제84조">제84조</option>
													<option value="제84조의2">제84조의2</option>
													<option value="제85조">제85조</option>
													<option value="제85조의2">제85조의2</option>
													<option value="제86조">제86조</option>
													<option value="제87조">제87조</option>
													<option value="제87조의2">제87조의2</option>
													<option value="제87조의3">제87조의3</option>
													<option value="제88조">제88조</option>
													<option value="제89조">제89조</option>
													<option value="제90조">제90조</option>
													<option value="제91조">제91조</option>
													<option value="제92조">제92조</option>
													<option value="제93조">제93조</option>
													<option value="제94조">제94조</option>
													<option value="제95조">제95조</option>
													<option value="제96조">제96조</option>
													<option value="제97조">제97조</option>
													<option value="제98조">제98조</option>
													<option value="제99조">제99조</option>
													<option value="제100조">제100조</option>
													<option value="제101조">제101조</option>
													<option value="제102조">제102조</option>
													<option value="제103조">제103조</option>
													<option value="제104조">제104조</option>
													<option value="제105조">제105조</option>
													<option value="제106조">제106조</option>
													<option value="제107조">제107조</option>
													<option value="제108조">제108조</option>
													<option value="제109조">제109조</option>
													<option value="제109조의2">제109조의2</option>
													<option value="제110조">제110조</option>
													<option value="제111조">제111조</option>
													<option value="제112조">제112조</option>
													<option value="제113조">제113조</option>
												</select>
											</div>
											<div class="dis-tc v-m pr-2">
												~
											</div>
											<div class="dis-tc v-m">
												<select id="iSelType1_p" name="iSelType1_p" class="input-css01">
													<option value="00">전체</option>
													<option value="제1조">제1조</option>
													<option value="제2조">제2조</option>
													<option value="제3조">제3조</option>
													<option value="제4조">제4조</option>
													<option value="제5조">제5조</option>
													<option value="제6조">제6조</option>
													<option value="제7조">제7조</option>
													<option value="제7조의2">제7조의2</option>
													<option value="제7조의3">제7조의3</option>
													<option value="제8조">제8조</option>
													<option value="제9조">제9조</option>
													<option value="제10조">제10조</option>
													<option value="제11조">제11조</option>
													<option value="제12조">제12조</option>
													<option value="제13조">제13조</option>
													<option value="제14조">제14조</option>
													<option value="제15조">제15조</option>
													<option value="제16조">제16조</option>
													<option value="제17조">제17조</option>
													<option value="제18조">제18조</option>
													<option value="제19조">제19조</option>
													<option value="제20조">제20조</option>
													<option value="제21조">제21조</option>
													<option value="제22조">제22조</option>
													<option value="제23조">제23조</option>
													<option value="제24조">제24조</option>
													<option value="제25조">제25조</option>
													<option value="제26조">제26조</option>
													<option value="제27조">제27조</option>
													<option value="제28조">제28조</option>
													<option value="제29조">제29조</option>
													<option value="제30조">제30조</option>
													<option value="제31조">제31조</option>
													<option value="제32조">제32조</option>
													<option value="제33조">제33조</option>
													<option value="제34조">제34조</option>
													<option value="제35조">제35조</option>
													<option value="제36조">제36조</option>
													<option value="제37조">제37조</option>
													<option value="제38조">제38조</option>
													<option value="제39조">제39조</option>
													<option value="제40조">제40조</option>
													<option value="제41조">제41조</option>
													<option value="제42조">제42조</option>
													<option value="제43조">제43조</option>
													<option value="제44조">제44조</option>
													<option value="제45조">제45조</option>
													<option value="제46조">제46조</option>
													<option value="제47조">제47조</option>
													<option value="제48조">제48조</option>
													<option value="제49조">제49조</option>
													<option value="제50조">제50조</option>
													<option value="제51조">제51조</option>
													<option value="제52조">제52조</option>
													<option value="제53조">제53조</option>
													<option value="제54조">제54조</option>
													<option value="제55조">제55조</option>
													<option value="제56조">제56조</option>
													<option value="제57조">제57조</option>
													<option value="제58조">제58조</option>
													<option value="제59조">제59조</option>
													<option value="제60조">제60조</option>
													<option value="제61조">제61조</option>
													<option value="제62조">제62조</option>
													<option value="제63조">제63조</option>
													<option value="제64조">제64조</option>
													<option value="제65조">제65조</option>
													<option value="제66조">제66조</option>
													<option value="제67조">제67조</option>
													<option value="제68조">제68조</option>
													<option value="제69조">제69조</option>
													<option value="제70조">제70조</option>
													<option value="제71조">제71조</option>
													<option value="제72조">제72조</option>
													<option value="제73조">제73조</option>
													<option value="제74조">제74조</option>
													<option value="제75조">제75조</option>
													<option value="제76조">제76조</option>
													<option value="제77조">제77조</option>
													<option value="제78조">제78조</option>
													<option value="제79조">제79조</option>
													<option value="제80조">제80조</option>
													<option value="제81조">제81조</option>
													<option value="제82조">제82조</option>
													<option value="제82조의2">제82조의2</option>
													<option value="제83조">제83조</option>
													<option value="제84조">제84조</option>
													<option value="제84조의2">제84조의2</option>
													<option value="제85조">제85조</option>
													<option value="제85조의2">제85조의2</option>
													<option value="제86조">제86조</option>
													<option value="제87조">제87조</option>
													<option value="제87조의2">제87조의2</option>
													<option value="제87조의3">제87조의3</option>
													<option value="제88조">제88조</option>
													<option value="제89조">제89조</option>
													<option value="제90조">제90조</option>
													<option value="제91조">제91조</option>
													<option value="제92조">제92조</option>
													<option value="제93조">제93조</option>
													<option value="제94조">제94조</option>
													<option value="제95조">제95조</option>
													<option value="제96조">제96조</option>
													<option value="제97조">제97조</option>
													<option value="제98조">제98조</option>
													<option value="제99조">제99조</option>
													<option value="제100조">제100조</option>
													<option value="제101조">제101조</option>
													<option value="제102조">제102조</option>
													<option value="제103조">제103조</option>
													<option value="제104조">제104조</option>
													<option value="제105조">제105조</option>
													<option value="제106조">제106조</option>
													<option value="제107조">제107조</option>
													<option value="제108조">제108조</option>
													<option value="제109조">제109조</option>
													<option value="제109조의2">제109조의2</option>
													<option value="제110조">제110조</option>
													<option value="제111조">제111조</option>
													<option value="제112조">제112조</option>
													<option value="제113조">제113조</option>
												</select>
											</div>
										</div>
									</div>
								</li>
								<li class="mt-5">
									<div class="dis-t">
										<div class="dis-tr">
											<div class="dis-tc v-m pr-10" style="width: 80px;">
												<input type="radio" name="iType_p" value="2" class="mr-2">각조 지정
											</div>
											<div class="dis-tc v-m pr-2">
												<input type="text" id="txtSeljo_p" name="txtSeljo_p" class="input-css01">
											</div>
											<div class="dis-tc v-m">
												<select id="iSelType2_p" name="iSelType2_p" class="input-css01">
													<option value="00">전체</option>
													<option value="제1조">제1조</option>
													<option value="제2조">제2조</option>
													<option value="제3조">제3조</option>
													<option value="제4조">제4조</option>
													<option value="제5조">제5조</option>
													<option value="제6조">제6조</option>
													<option value="제7조">제7조</option>
													<option value="제7조의2">제7조의2</option>
													<option value="제7조의3">제7조의3</option>
													<option value="제8조">제8조</option>
													<option value="제9조">제9조</option>
													<option value="제10조">제10조</option>
													<option value="제11조">제11조</option>
													<option value="제12조">제12조</option>
													<option value="제13조">제13조</option>
													<option value="제14조">제14조</option>
													<option value="제15조">제15조</option>
													<option value="제16조">제16조</option>
													<option value="제17조">제17조</option>
													<option value="제18조">제18조</option>
													<option value="제19조">제19조</option>
													<option value="제20조">제20조</option>
													<option value="제21조">제21조</option>
													<option value="제22조">제22조</option>
													<option value="제23조">제23조</option>
													<option value="제24조">제24조</option>
													<option value="제25조">제25조</option>
													<option value="제26조">제26조</option>
													<option value="제27조">제27조</option>
													<option value="제28조">제28조</option>
													<option value="제29조">제29조</option>
													<option value="제30조">제30조</option>
													<option value="제31조">제31조</option>
													<option value="제32조">제32조</option>
													<option value="제33조">제33조</option>
													<option value="제34조">제34조</option>
													<option value="제35조">제35조</option>
													<option value="제36조">제36조</option>
													<option value="제37조">제37조</option>
													<option value="제38조">제38조</option>
													<option value="제39조">제39조</option>
													<option value="제40조">제40조</option>
													<option value="제41조">제41조</option>
													<option value="제42조">제42조</option>
													<option value="제43조">제43조</option>
													<option value="제44조">제44조</option>
													<option value="제45조">제45조</option>
													<option value="제46조">제46조</option>
													<option value="제47조">제47조</option>
													<option value="제48조">제48조</option>
													<option value="제49조">제49조</option>
													<option value="제50조">제50조</option>
													<option value="제51조">제51조</option>
													<option value="제52조">제52조</option>
													<option value="제53조">제53조</option>
													<option value="제54조">제54조</option>
													<option value="제55조">제55조</option>
													<option value="제56조">제56조</option>
													<option value="제57조">제57조</option>
													<option value="제58조">제58조</option>
													<option value="제59조">제59조</option>
													<option value="제60조">제60조</option>
													<option value="제61조">제61조</option>
													<option value="제62조">제62조</option>
													<option value="제63조">제63조</option>
													<option value="제64조">제64조</option>
													<option value="제65조">제65조</option>
													<option value="제66조">제66조</option>
													<option value="제67조">제67조</option>
													<option value="제68조">제68조</option>
													<option value="제69조">제69조</option>
													<option value="제70조">제70조</option>
													<option value="제71조">제71조</option>
													<option value="제72조">제72조</option>
													<option value="제73조">제73조</option>
													<option value="제74조">제74조</option>
													<option value="제75조">제75조</option>
													<option value="제76조">제76조</option>
													<option value="제77조">제77조</option>
													<option value="제78조">제78조</option>
													<option value="제79조">제79조</option>
													<option value="제80조">제80조</option>
													<option value="제81조">제81조</option>
													<option value="제82조">제82조</option>
													<option value="제82조의2">제82조의2</option>
													<option value="제83조">제83조</option>
													<option value="제84조">제84조</option>
													<option value="제84조의2">제84조의2</option>
													<option value="제85조">제85조</option>
													<option value="제85조의2">제85조의2</option>
													<option value="제86조">제86조</option>
													<option value="제87조">제87조</option>
													<option value="제87조의2">제87조의2</option>
													<option value="제87조의3">제87조의3</option>
													<option value="제88조">제88조</option>
													<option value="제89조">제89조</option>
													<option value="제90조">제90조</option>
													<option value="제91조">제91조</option>
													<option value="제92조">제92조</option>
													<option value="제93조">제93조</option>
													<option value="제94조">제94조</option>
													<option value="제95조">제95조</option>
													<option value="제96조">제96조</option>
													<option value="제97조">제97조</option>
													<option value="제98조">제98조</option>
													<option value="제99조">제99조</option>
													<option value="제100조">제100조</option>
													<option value="제101조">제101조</option>
													<option value="제102조">제102조</option>
													<option value="제103조">제103조</option>
													<option value="제104조">제104조</option>
													<option value="제105조">제105조</option>
													<option value="제106조">제106조</option>
													<option value="제107조">제107조</option>
													<option value="제108조">제108조</option>
													<option value="제109조">제109조</option>
													<option value="제109조의2">제109조의2</option>
													<option value="제110조">제110조</option>
													<option value="제111조">제111조</option>
													<option value="제112조">제112조</option>
													<option value="제113조">제113조</option>
												</select>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="mt-20">
						<strong>파일 형식</strong>
						<div class="gray_info mt-5">
							<label><input type="radio" name="iType1" checked="checked" value="0" class="mr-2">PDF</label>
							<label><input type="radio" name="iType1" value="0" class="mr-2">HWP</label>
							<label><input type="radio" name="iType1" value="0" class="mr-2">MS Word</label>
							<label><input type="radio" name="iType1" value="0" class="mr-2">TXT</label>
						</div>
					</div>
					<div class="mt-20">
						<div class="btn-group ta-c">
							<button type="button" class="btn-m btn-blue">다운로드</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- 파일 공유 팝업창 레이어 -->
<div id="con-file-share-popup" class="header-popup content-popup con-file-share-popup" style="right: 200px; top: 100px;">
	<div class="popup-bg">
		<div class="popup-header">
			<div class="top_title clear">
				<div class="top_title_txt c-left">
					<div class="str pl-25"><span class="n-i-w20 n-i-share str-ltc"></span> 공유하기</div>
				</div>
				<div class="top_title_group c-right">
					<button class="btn btn-none btn-s" onclick="fn_remove_class_on('#con-file-share-popup')"><i class="icon-close" data-icon=""></i></button>
				</div>
			</div>
		</div>
		<div class="popup-list-wrap">
			<div class="popup-con-wrap">
				<div class="popup-con p-10">
					<div class="share_site">
						<i class="snslink icon-" data-icon="" id="facebook"><span class="blind">페이스북</span></i>
						<i class="snslink icon-" data-icon="" id="twitter"><span class="blind">트위터</span></i>
						<i class="snslink icon-" data-icon="" id="googleplus"><span class="blind">구글+</span></i>
						<i class="snslink icon-" data-icon="" id="naverblog"><span class="blind">네이버</span></i>
						<i class="snslink icon-" data-icon="" id="kakaostory"><span class="blind">카카오스토리</span></i>
						<i class="snslink icon-" data-icon="" id="email"><span class="blind">이메일</span></i>
					</div>
					<div class="share_address">
						<div id="shareUrl">https://www.lawnb.com/Info/ContentView?sid=L0000C4E3F864767</div>
						<span onclick="">URL복사</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- 상세검색 팝업 -->
<div id='detail-search-popup' class='ct-popup-wrap detail-search-popup bg30 str'>
	<div class='str-center'>
		<div class='bg-border w-700px'>
			<div class='top_title clear'>
				<div class='top_title_txt c-left c-blue'> 판례 상세검색</div>
				<div class='top_title_group c-right'>
					<button class='btn btn-none btn-s' onclick="fn_remove_class_on('#detail-search-popup')"><i class='icon-close' data-icon=''></i></button>
				</div>
			</div>
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
										<input id='keyword-except' type='text' class='input-css01' placeholder='제외어'>
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
											<label for='keyword-except'>사건번호</label>
										</div>
										<div class='dis-tc'>
											<input id='keyword-except' type='text' class='input-css01'>
										</div>
									</div>
								</div>
							</div>
							<div class='input-box str'>
								<div class='dis-t'>
									<div class='dis-tr'>
										<div class='dis-th'>
											<label for='keyword-except'>판시상황</label>
										</div>
										<div class='dis-tc'>
											<input id='keyword-except' type='text' class='input-css01'>
										</div>
									</div>
								</div>
							</div>
							<div class='input-box str'>
								<div class='dis-t'>
									<div class='dis-tr'>
										<div class='dis-th'>
											<label for='keyword-except'>재반요지</label>
										</div>
										<div class='dis-tc'>
											<input id='keyword-except' type='text' class='input-css01'>
										</div>
									</div>
								</div>
							</div>
							<div class='input-box str'>
								<div class='dis-t'>
									<div class='dis-tr'>
										<div class='dis-th'>
											<label for='keyword-except'>사건명</label>
										</div>
										<div class='dis-tc'>
											<input id='keyword-except' type='text' class='input-css01'>
										</div>
									</div>
								</div>
							</div>
							<div class='input-box str'>
								<div class='dis-t'>
									<div class='dis-tr'>
										<div class='dis-th'>
											<label for='keyword-except'>사건명</label>
										</div>
										<div class='dis-tc'>
											<input id='keyword-except' type='text' class='input-css01'>
										</div>
									</div>
								</div>
							</div>
							<div class='input-box str'>
								<div class='dis-t'>
									<div class='dis-tr'>
										<div class='dis-th'>
											<label for='keyword-except'>전문</label>
										</div>
										<div class='dis-t'>
											<div class='dis-tr'>
												<div class='dis-tc w-145px pr-10'>
													<select id='' class='select-css01'>
														<option>전체</option>
														<option>선택1</option>
													</select>
												</div>
												<div class='dis-tc'>
													<input id='keyword-except' type='text' class='input-css01'>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class='input-box str'>
								<div class='dis-t'>
									<div class='dis-tr'>
										<div class='dis-th'>
											<label for='keyword-except'>참조조문</label>
										</div>
										<div class='dis-tc clear'>
											<div class='dis-t'>
												<div class='dis-tr'>
													<div class='dis-tc sub-th'><label for='keyword-except'>법령명</label>
													</div>
													<div class='dis-tc pr-10'><input id='keyword-except' type='text'
													                                 class='input-css01'
													                                 placeholder='예) 형법,인사소송'></div>
													<div class='dis-tc sub-th'><label for='keyword-except'>조문번호</label>
													</div>
													<div class='dis-tc'><input id='keyword-except' type='text'
													                           class='input-css01'
													                           placeholder='예) 제 10조'></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class='str-rb'>
									<button class='btb-plus btn-none'><span class='icon-plus02 icon-w18'></span>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div class='btn-wrap ta-c'>
						<button class='btn btn-blue btn-l'>검색</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- ai 팝업 -->
<div id='ai-popup' class='ct-popup-wrap ai-popup str'>
	<div class='str-center'>
		<div class='bg-border w-1445px'>
			<div class='top_title clear'>
				<div class='c-left clear'>
					<button class='btn btn-blue-grad btn-m c-left' onclick="fn_add_class_on('#ai-popup')">
						<div class='str pl-20'><span class='n-i str-ltc n-i-bolt n-i-w15'></span>AI요약</div>
					</button>
					<p class='c-left ml-15 tit'>
						<span class="c-blue">개인정보 보호 및 정보 보안</span>
						<span>관련주요 판례 AI 요약</span>
						<span class="dis-ib n-i-w20 n-i-alert-cir va-m"></span>
					</p>
				</div>
				<div class='c-right'>
					<button class='dis-b' onclick="fn_remove_class_on('#ai-popup')"><span class="n-i n-i-w25 n-i-x-mark"></span></button>
				</div>
			</div>
			<div class='flex-container ai-con'>
				<div class="flex-item con-01">
					<ul class="step-ul01">
						<li class="on">개인정보 제3자 제공 및 공유</li>
						<li>개인정보 수집 및 이용</li>
						<li>개인정보 저장 및 보호</li>
						<li>개인정보 접근 및 수정 권리</li>
						<li>정보보안 및 기술적 보호조치</li>
					</ul>
				</div>
				<div class='flex-item con-02'>
					<ul class='step-ul02'>
						<li class='on'>
							<p class="tit02">개인정보 제3자 제공 및 공유</p>
							<ul class='step-ul03'>
								<li>수원지방법원 2024.9.3 선고 2023가단 512709 판결 [손해배상(기)]</li>
								<li>개인정보 수집 및 이용</li>
								<li>개인정보 저장 및 보호</li>
								<li>개인정보 접근 및 수정 권리</li>
								<li>정보보안 및 기술적 보호조치</li>
							</ul>
						</li>
						<li>
							<p class='tit02'>개인정보 수집 및 이용</p>
							<ul class='step-ul03'>
								<li>개인정보 제3자 제공 및 공유</li>
								<li>개인정보 수집 및 이용</li>
								<li>개인정보 저장 및 보호</li>
								<li>개인정보 접근 및 수정 권리</li>
								<li>정보보안 및 기술적 보호조치</li>
							</ul>
						</li>
						<li><p class='tit02'>개인정보 저장 및 보호</p></li>
						<li><p class='tit02'>개인정보 접근 및 수정 권리</p></li>
						<li><p class='tit02'>정보보안 및 기술적 보호조치</p></li>
				</ul>
				</div>
				<div class='flex-item con-03 flex-1'>
					<!-- 검색결과가 없을 경우-->
					<!--<div class="con-non ta-c bg-fff box-shadow">
						<p class="n-i n-i-w50 n-i-document m-auto"></p>
						<p class="fw-500 mt-35">좌측에서 판례를 클릭하세요</p>
						<p class="mt-10">AI 요약과 본문까지 여기서 한번에 보실 수 있습니다.</p>
					</div>-->
					<!-- 있을 경우-->
					<div class="con-03-tit clear">
						<div class="c-left txt01">서울중앙지방법원 2014.11.1 선고 2013나49885 판결 [부당이득금반환]</div>
						<div class="c-right">
							<a href='' class='btn btn-none btn-s'>
								<p class="str pr-30">전체보기<span class="n-i n-i-w15 n-i-open str-rm"></span></p>
							</a>
						</div>
					</div>
					<div class='con-03-ai clear'>
						<div class='ai-container'>
							<div class='ai-bg'>
								<button class='btn btn-blue-grad btn-m' onclick="fn_add_class_on('#ai-popup')">
									<div class='str pl-20'><span class='n-i str-ltc n-i-bolt n-i-w15'></span>AI요약</div>
								</button>
								<div class='ai-summary mt-10 fw-500 c-blue'>관련 주요 판례 AI요약 관련 주요 판례 AI요약관련 주요 판례 AI요약관련 주요 판례 AI요약관련 주요 판례 AI요약관련 주요 판례 AI요약관련 주요 판례 AI요약관련 주요 판례 AI요약관련 주요 판례 AI요약관련 주요 판례 AI요약관련 주요 판례 AI요약관련 주요 판례 AI요약관련 주요 판례 AI요약관련 주요 판례 AI요약관련 주요 판례 AI요약관련 주요 판례 AI요약관련 주요 판례 AI요약관련 주요 판례 AI요약관련 주요 판례 AI요약관련 주요 판례 AI요약관련 주요 판례 AI요약관련 주요 판례 AI요약관련 주요 판례 AI요약관련 주요 판례 AI요약관련 주요 판례 AI요약관련 주요 판례 AI요약관련 주요 판례 AI요약관련 주요 판례 AI요약관련 주요 판례</div>
								<button class='btn btn-none btn-m mt-10'>접기</button>
							</div>
						</div>
					</div>
					<div class="con-03-content">
						<div class="bg-fff p-25">
							<div class='case_info highlighter-context'>
								<p class='c_tit_1' id='prPansi_t'> 판시사항<br></p>
								<div class='c_con' id='prPansi'>
									<div id='Miju1' class='miju-wrap miju_num' onmouseover="open_miju('Mi1')"
									     onmouseout="close_miju('Mi1')" onclick="open_miju('Mi1');">
										<span>1)</span>
										<div id='Mi1' class='miju_box'>
											<div class='miju_box_line'> 공소장에는 “2023. 5. 16.”이라고 기재되어 있으나, 이는 2023. 5. 10.의
												오기로 보이고, 공소장 변경절차 없이 이를 정정하더라도 피고인의 방어권 행사에 실질적인 불이익을 초래한다고 보이지 않으므로직권으로
												정정한다.
											</div>
										</div>
										<div id='Mi1' class='miju_box' style='top: 140px;'>
											<div class='miju_box_line'> 공소장에는 “2023. 5. 16.”이라고 기재되어 있으나, 이는 2023. 5. 10.의
												오기로 보이고, 공소장 변경절차 없이 이를 정정하더라도 피고인의 방어권 행사에 실질적인 불이익을 초래한다고 보이지 않으므로직권으로
												정정한다.
											</div>
										</div>
									</div>
									부동산을 편취한 경우에 <a href='/Info/ContentView?sid=L000001136_3_20041231' class='popup_view'>특정경제범죄
										가중처벌 등에 관한 법률 제3조</a>의 적용을
									전제로 그 부동산의 가액을 산정함에 있어, 부동산의 시가 상당액에서 근저당권 등에 의한 부담에 상당하는 금액을 공제하여야 하는지 여부(적극)
								</div>
								<a id='case_point' name='case_point' class='nopopup'> </a>
								<p class='c_tit_1' id='prSumm_t'>판결요지<br></p>
								<div class='c_con' id='prSumm'>[다수의견] (가) <a
											href='/Info/ContentView?sid=L000001692_347_20050729' class='popup_view'>형법
										제347조</a>의 사기죄는 사람을 기망하여 재물의 교부를
									받거나 재산상의 이익을 취득하거나 제3자로 하여금 재물의 교부를 받게 하거나 <span class='highlighted hl_BL'><i
												class='newic-h_memo hb_BL'></i>재산상의 이익
										<!-- 메모 뷰 저장시 출력 예시-->
				<div class='hMemoView BL' style='top: 25px;left: 25px;display: none;'>
					<div class='hMemo_btn'>
						<button>수정</button>
						<button>삭제</button>
					</div>
					<div class='hMemo_time'>2022.06.31</div>
					<div class='hMemo_cont'>
						재산상의 이익
					</div>
				</div>
				</span>을 취득하게 함으로써 성립하고, 그 교부받은 재물이나 재산상 이익의 가액이
									얼마인지는 문제되지 아니하는 데 비하여, 사기로 인한 특정경제범죄 가중처벌 등에 관한 법률 위반죄에 있어서는 편취한 재물이나 재산상 이익의 가액이 5억 원
									이상 또는 50억
									원 이상이라는 것이 범죄구성요건의 일부로 되어 있고 그 가액에 따라 그 죄에 대한 형벌도 가중되어 있으므로, 이를 적용함에 있어서는 편취한 재물이나 재산상
									이익의 가액을
									엄격하고 신중하게 산정함으로써,
									범죄와 형벌 사이에 적정한 균형이 이루어져야 한다는 죄형균형 원칙이나 형벌은 책임에 기초하고 그 책임에 비례하여야 한다는 책임주의 원칙이
									훼손되지 않도록 유의하여야 한다. <br>(나) 따라서 사람을 기망하여 부동산의 소유권을 이전받거나 제3자로 하여금 이전받게 함으로써 이를 편취한 경우에 <a
											href='/Info/ContentView?sid=L000001136_3_20041231' class='popup_view'>특정경제범죄
										가중처벌 등에 관한
										법률 제3조</a>의 적용을 전제로 하여 그 부동산의 가액을 산정함에 있어서는, 그 부동산에 아무런 부담이 없는 때에는 그 부동산의 시가 상당액이 곧
									그 가액이라고
									볼 것이지만, 그 부동산에 근저당권설정등기가 경료되어 있거나 압류 또는 가압류 등이 이루어져 있는 때에는 특별한 사정이 없는 한 아무런 부담이 없는 상태에서의
									그 부동산의
									시가 상당액에서 근저당권의 채권최고액 범위 내에서의 피담보채권액, 압류에 걸린 집행채권액, 가압류에 걸린 청구금액 범위 내에서의 피보전채권액 등을 뺀 실제의
									교환가치를 그
									부동산의 가액으로 보아야 한다. <br>[대법관 김용담, 김황식, 안대희의 별개의견] <br>(가) 근저당권이 설정되거나 압류ㆍ가압류가 이루어진 부동산을
									편취하면서 그
									피담보채무 등을 인수하여 변제하겠다고 한 것은 그 편취한 재물의 대가지급방법에 불과하다고 보거나 근저당권이나 압류ㆍ가압류를 편취한 재물에 붙은 부담이라고 볼
									수 있고,
									편취한 재물의 실제 교환가치의 파악 즉 궁극적으로 그와 같은 이득을 실현할 것인지 여부는 사기로 인한 특정경제범죄 가중처벌 등에 관한 법률 위반죄에 있어서도
									여전히 범죄의
									구성요건이 아니라 양형에 관한 사항이라고 해석하여야 할 것이므로, <a
											href='/Info/ContentView?sid=L000001136_3_20041231' class='popup_view'>특정경제범죄
										가중처벌 등에 관한 법률 제3조</a>의 적용을 전제로
									한 부동산의 가액도 통상적으로 사용되는 재물의 시장가치 즉 아무런 부담이 없는 상태에서의 그 부동산의 객관적인 시가 상당액을 뜻한다고 보는 것이 문언에 충실한
									해석이다.
									<br>(나) 다수의견에 의하면 편취 당시의 근저당권 피담보채무 등이 사후에 원래 채무자의 변제 등을 통해 전부 또는 일부 소멸하는 경우 부동산의 실제
									교환가치가 증가하게
									되는데 이러한 편취 이후의 사정에 따라 적용법조를 달리하여야 할 것인지 문제가 되고, 공동담보가 설정되거나 하나의 압류ㆍ가압류의 대상이 된 수개의 부동산들 중
									일부를 편취한
									경우와 근저당권 이외의 담보물권 또는 용익물권, 대항력 있는 임차권, 가처분, 가등기 등이 있는 경우 그 공제의 범위를 어디까지 또는 어느 정도까지로 한정할
									것인지에 관해서
									명확한 기준을 제시하기 어려우므로, 다수의견은 죄형법정주의의 내용인 명확성의 원칙에 반하고 형사절차에서 혼란을 가져오는 것이어서 적절하지 않다.<br>(다)
									따라서 <a href='/Info/ContentView?sid=L000001136_3_20041231' class='popup_view'>특정경제범죄 가중처벌
										등에 관한
										법률 제3조</a> 소정의 ‘이득액’을 산정함에 있어 편취한 부동산에 관하여 압류나 가등기가 경료되어 있다는 사정은 이득액을 부동산의 객관적인 시가보다
									감액하여
									평가할 사유가 되지 못한다. <br>[다수의견에 대한 대법관 김능환의 보충의견] <br>(가) 사기로 인한 <a
											href='/Info/ContentView?sid=L000001136_3_20041231' class='popup_view'>특정경제범죄
										가중처벌 등에 관한
										법률 제3조</a> 위반죄에 있어서는 형법상 사기죄로 인하여 편취한 재물 또는 재산상 이익의 가액이 5억 원 이상이거나 50억 원 이상일 것을 요건으로
									하여 법정형을
									달리 규정하고 있음이 그 문언상 명백하므로 형법상의 사기죄와는 그 구성요건이 다른 것으로 볼 수밖에 없고, 편취한 재물의 가액이 얼마인지가 구성요건의 일부라면
									그 가액의
									평가 내지 산정은 객관적이고도 타당한 방법으로 이루어져야 할 것인데, 거래의 실정에 비추어 근저당권 등의 부담이 있는 부동산과 그러한 부담이 없는 부동산이
									가지는 객관적
									교환가치가 동일할 수는 없다. <br>(나) 또한, 근저당권 등의 부담이 있는 부동산을 편취함으로써 그 범죄가 기수에 이른 이상, 그 당시에 있어서의 객관적
									교환가치가
									부동산의 가액인 것이고, 이를 기준으로 하여 <a href='/Info/ContentView?sid=L000001136_3_20041231'
									                            class='popup_view'>특정경제범죄 가중처벌 등에 관한 법률 제3조</a>의 적용 여부를 가려야
									할 것이지 그
									근저당권 등이 사후에 변제 등으로 소멸하였는지 여부를 고려할 것은 아니다. <br>(다) 다수의견에 의하면, 가처분이나 순위보전의 가등기는 부동산의 처분에
									장애사유는 될 수
									있어도 교환가치에 영향을 미치는 사유는 아니므로 부동산의 가액 산정에 있어 이를 고려할 것은 아니지만, 지상권 등의 용익물권은 경우에 따라 그 부동산의
									교환가치에 영향을
									미치는 요소가 될 수 있고, 담보가등기ㆍ등기된 전세권ㆍ대항력 있는 임대차 등은 특별한 사정이 없는 한 근저당권과 동일하게 취급하여도 무방하리라고 생각된다.
									그리고 구체적
									사안에 따라서는 편취의 대상인 부동산의 객관적 교환가치를 평가ㆍ산정하는 것이 그리 단순한 문제가 아닐 수도 있지만, 그 경우에도 부동산의 가액을 객관적으로
									타당하게 파악하기
									위해 노력해야 하는 것은 적절한 형사사법절차 운영의 책임을 지고 있는 법원의 당연한 책무이고, 그러한 노력에도 불구하고 그 가액을 파악할 수 없는 경우에는
									입증책임의 원리에
									따라 문제를 해결하여야 할 것이지 그 가액 산정이 어렵다는 이유로 죄형균형 원칙이나 책임주의 원칙이 훼손되는 결과를 용인하는 것은 온당치 못하다. <br>(라)
									결국,
									편취한 재물의 가액에 따라 법정형을 달리 규정하고 있는 사기로 인한 특정경제범죄 가중처벌 등에 관한 법률 위반죄에 있어서 편취한 부동산의 실제 교환가치가
									얼마인지를 범죄의
									구성요건 요소가 아니라 단지 양형에 관한 사항에 불과한 것으로 보려는 별개의견의 견해는 죄형균형 원칙이나 책임주의 원칙에 어긋나는 과도한 형벌을 과하게 되는
									결과를 낳을
									우려가 있어 찬성하기 어렵다.
									<hr class='hr_line' style='display: none;'>
								</div>
								<div class='inner_login_area'><p class='hide'>로그인</p>
									<div class='gray_info'>아직 로그인하지 않으셨습니다. <br>로그인 또는 회원가입 후 이용해 주시기 바랍니다.</div>
									<div class='btn_area'><span><a href='/Login/Index'>로그인</a></span><span><a
													href='http://member.lawnb.com' target='_blank'>회원가입</a></span></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
