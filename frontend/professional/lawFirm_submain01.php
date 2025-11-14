<?php include '../include/header_sub.php'; ?>
<div class="container-wrap">
	<div class="container-inner">
		<div class="container-right">
			<div class="pr-2">
				<button class="btn-none w-100p btn-l dis-b btn-shadow">법조인명록 등록 / 수정</button>
				<button class="btn-none w-100p btn-l dis-b btn-shadow mt-10">승소판결문 등록</button>
			</div>
			<div class="direct-list pt-20">
				<div class="direct-item">
					<div class="clear mb-5">
						<h2 class="c-left right-header">법률사무소 소식</h2>
					</div>
					<ul class="direct-ul">
						<li>
							<a href="">
								<span class="c-blue">대법원 2023. 7. 27 선고 2022두52980 판결 [정보공개거부처분취소 (다) 파기환송 ]</span>
								<span class="c-gray-l">/ 2023.09.22</span>
							</a>
						</li>
						<li>
							<a href="">
								<span class="c-blue">대법원 2023. 7. 27 선고 2022두52980 판결 [정보공개거부처분취소 (다) 파기환송 ]</span>
								<span class="c-gray-l">/ 2023.09.22</span>
							</a>
						</li>
						<li>
							<a href="">
								<span class="c-blue">대법원 2023. 7. 27 선고 2022두52980 판결 [정보공개거부처분취소 (다) 파기환송 ]</span>
								<span class="c-gray-l">/ 2023.09.22</span>
							</a>
						</li>
						<li>
							<a href="">
								<span class="c-blue">대법원 2023. 7. 27 선고 2022두52980 판결 [정보공개거부처분취소 (다) 파기환송 ]</span>
								<span class="c-gray-l">/ 2023.09.22</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	    <div class="container-center">
	        <h2 class="sub-main-tit clear">로펌 검색</h2>
	        <div class="bg-border">
	            <div class="sub-main-pd">
	                <div class="sub-main-tab-warp clear">
	                    <ul class="sub-main-tab-ul c-left">
	                        <li class="on"><a href="./lawFirm_submain01.php">로펌 검색</a></li>
	                        <li><a href="./lawFirm_submain02.php">로펌</a></li>
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
	                                            <label for="keyword-search">사무소 이름</label>
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
	                                            <label for="keyword-except">지역선택</label>
	                                        </div>
	                                        <div class="dis-tc">
		                                        <div class="dis-t">
			                                        <div class="dis-tr">
				                                        <div class="dis-tc pr-10">
					                                        <select id="" class="select-css01">
						                                        <option>전체</option>
						                                        <option>선택1</option>
					                                        </select>
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
