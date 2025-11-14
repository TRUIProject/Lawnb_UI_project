<?php include '../include/header_sub.php'; ?>
<div class="container-wrap">
	<div class="container-inner">
		<div class="container-right">
			<div class="pr-2">
				<button class="btn-blue w-100p btn-l dis-b btn-shadow">판결문등재신청</button>
				<button class="btn-none w-100p btn-l dis-b btn-shadow mt-10">사건별 부호문자 안내</button>
			</div>
			<div class="direct-list pt-20">
				<div class="direct-item">
					<div class="clear mb-5">
						<h2 class="c-left right-header">판례속보</h2>
						<div class="c-right">
							<a href="" class="btn-none btn-s">전체보기</a>
						</div>
					</div>
					<ul class="direct-ul">
						<li>
							<a href="">
								<p class="c-blue">대법원 2023. 7. 27 선고 2022두52980 판결 [정보공개거부처분취소 (다) 파기환송 ]</p>
							</a>
						</li>
						<li>
							<a href="">
								<p class="c-blue">대법원 2023. 7. 27 선고 2023두35661 판결 [폐기물처리사업계획신청 반려처분취소 (바) 파기환송 ]</p>
							</a>
						</li>
						<li>
							<a href="">
								<p class="c-blue">대법원 2023. 7. 27 선고 2022두44392 판결 [주거이전비등 (차) 파기환송(일부) ]</p>
							</a>
						</li>
						<li>
							<a href="">
								<p class="c-blue">대법원 2023. 7. 27 선고 2023다228107 판결 [부당이득금 (자) 파기환송(일부) ]</p>
							</a>
						</li>
						<li>
							<a href="">
								<p class="c-blue">대법원 2023. 7. 27 선고 2023다227418 판결 [추심금 (나) 파기자판(일부) ]</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	    <div class="container-center">
	        <h2 class="sub-main-tit clear">판례검색</h2>
	        <div class="bg-border">
	            <div class="sub-main-pd">
	                <div class="sub-main-tab-warp clear">
	                    <ul class="sub-main-tab-ul c-left">
	                        <li class="on"><a href="./precedent_submain01.php">판례검색</a></li>
	                        <li><a href="./precedent_submain02.php">공보판례</a></li>
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
			                    <div id="toggle01" class="search-area-con input-box str mt-20">
		                            <div class="input-box str">
		                                <div class="dis-t">
		                                    <div class="dis-tr">
		                                        <div class="dis-th">
		                                            <label for="keyword-except">사건번호</label>
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
		                                            <label for="keyword-except">판시상황</label>
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
		                                            <label for="keyword-except">재반요지</label>
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
		                                            <label for="keyword-except">사건명</label>
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
		                                            <label for="keyword-except">사건명</label>
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
		                                        <div class="dis-t">
			                                        <div class="dis-tr">
			                                            <div class="dis-tc w-145px pr-10">
				                                            <div class='junmunSearch_select'>
					                                            <div class='selectBox' onclick="checkboxesDisplay('checkboxes2')" id='selContList'>
						                                            <select id='selType4' name='selType4' class='select-css01 select-multi'>
							                                            <option>전체</option>
						                                            </select>
						                                            <div class='overSelect'></div>
					                                            </div>
					                                            <div id='checkboxes2' class='hide_check nolaw w100p'>
						                                            <div><input type='checkbox' name='cType4_a'
						                                                        id='cType4_a' checked='checked'
						                                                        onclick="chkCat_A('4')"
						                                                        data-gtm-form-interact-field-id='0'>전체
						                                            </div>
						                                            <div><input type='checkbox' name='cType4'
						                                                        checked='checked' onclick="chkCat('4')"
						                                                        value='주문'>주문
						                                            </div>
						                                            <div><input type='checkbox' name='cType4'
						                                                        checked='checked' onclick="chkCat('4')"
						                                                        value='청구취지'>청구취지
						                                            </div>
						                                            <div><input type='checkbox' name='cType4'
						                                                        checked='checked' onclick="chkCat('4')"
						                                                        value='이유'>이유
						                                            </div>
						                                            <div><input type='checkbox' name='cType4'
						                                                        checked='checked' onclick="chkCat('4')"
						                                                        value='판사'>판사
						                                            </div>
					                                            </div>
				                                            </div>
			                                            </div>
			                                            <div class="dis-tc">
			                                                <input id="keyword-except" type="text" class="input-css01">
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
		                                            <label for="keyword-except">참조조문</label>
		                                        </div>
		                                        <div class="dis-tc clear">
			                                        <!-- 반복되는 DIV -->
		                                            <div class="str">
			                                            <div class="dis-t">
			                                                <div class="dis-tr">
			                                                    <div class="dis-tc sub-th"><label for="keyword-except">법령명</label></div>
			                                                    <div class="dis-tc pr-10"><input id="keyword-except" type="text" class="input-css01" placeholder="예) 형법,인사소송"></div>
			                                                    <div class="dis-tc sub-th"><label for="keyword-except">조문번호</label></div>
			                                                    <div class="dis-tc"><input id="keyword-except" type="text" class="input-css01" placeholder="예) 제 10조"></div>
			                                                </div>
			                                            </div>
				                                        <div class='str-rb trans-x-r pl-5'>
					                                        <button class='btb-plus btn-none'><span
								                                        class='icon-minus icon-w18'></span></button>
				                                        </div>
			                                        </div>
			                                        <!-- 반복되는 DIV -->
			                                        <div class='str mt-5'>
				                                        <div class='dis-t'>
					                                        <div class='dis-tr'>
						                                        <div class='dis-tc sub-th'><label for='keyword-except'>법령명</label>
						                                        </div>
						                                        <div class='dis-tc pr-10'><input id='keyword-except'
						                                                                         type='text'
						                                                                         class='input-css01'
						                                                                         placeholder='예) 형법,인사소송'>
						                                        </div>
						                                        <div class='dis-tc sub-th'><label for='keyword-except'>조문번호</label>
						                                        </div>
						                                        <div class='dis-tc'><input id='keyword-except'
						                                                                   type='text'
						                                                                   class='input-css01'
						                                                                   placeholder='예) 제 10조'></div>
					                                        </div>
				                                        </div>
				                                        <div class='str-rb trans-x-r pl-5'>
					                                        <button class='btb-plus btn-none'><span
								                                        class='icon-plus02 icon-w18'></span></button>
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
