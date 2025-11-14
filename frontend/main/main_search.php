<?php
	include '../include/header_main.php';
?>
	<!--	시작 : 메인페이지	-->
	<div id="main-container" class="clear">
		<div class="w700">
			<div class="search-wrap">
				<div class="tit str clear">
					<h1 class="c-left" ><img src="../images/common/logo.png" alt="<?php echo $title;?>" class="img"></h1>
					<div class="str-rb">
						<div class="str">
							<button class="fs-12 fc-ffffff" onclick="fn_add_class_on('#keyword-operator-wrap')">검색연산자 안내</button>
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
				<div class="search-box">
					<div class="input-div">
						<div class="input-box str">
							<label>
								<input id="keyword-input" placeholder="사건번호, 법령명, 키워드를 입력해주세요.">
							</label>
							<button class="search-btn"></button>
						</div>
					</div>
					<div id="keyword-wrap" class="keyword-wrap" style="top: 59px;">
						<div class="scroll-y">
							<div class="con-01">
								<div class="txt-div">
									<p>우선 검색범위 선택 <span class="c-blue">: 판례, 논문, 온주</span></p>
									<ul class="btn-list clear">
										<li class="c-left mr-5"><button class="icon-arrow-path"></button></li>
										<li class="c-left"><button id="btn-keyword-close" class="icon-arrow-up accordion-button" data-bs-target="#keyword-list"></button></li>
									</ul>
								</div>
								<ul id="keyword-list" class="keyword-list">
									<li>
										<input type="checkbox" id="keyword-1" value="판례" name="keyword-list">
										<label for="keyword-1">판례</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-2" value="법령" name="keyword-list">
										<label for="keyword-2">법령</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-3" value="비즈폼서식" name="keyword-list">
										<label for="keyword-3">비즈폼서식</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-4" value="유권해석" name="keyword-list">
										<label for="keyword-4">유권해석</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-5" value="논문" name="keyword-list">
										<label for="keyword-5">논문</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-6" value="결정례" name="keyword-list">
										<label for="keyword-6">결정례</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-7" value="행정규칙" name="keyword-list">
										<label for="keyword-7">행정규칙</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-8" value="자치법규" name="keyword-list">
										<label for="keyword-8">자치법규</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-9" value="입법동향" name="keyword-list">
										<label for="keyword-9">입법동향</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-10" value="조약" name="keyword-list">
										<label for="keyword-10">조약</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-11" value="특허심판례" name="keyword-list">
										<label for="keyword-11">특허심판례</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-12" value="유럽법제동향" name="keyword-list">
										<label for="keyword-12">유럽법제동향</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-13" value="법률사전" name="keyword-list">
										<label for="keyword-13">법률사전</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-14" value="로펌" name="keyword-list">
										<label for="keyword-14">로펌</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-15" value="기업정보" name="keyword-list">
										<label for="keyword-15">기업정보</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-16" value="전문법률서식" name="keyword-list">
										<label for="keyword-16">전문법률서식</label>
									</li>
									<li>
										<input type="checkbox" id="keyword-17" value="E-book" name="keyword-list">
										<label for="keyword-17">E-book</label>
									</li>
								</ul>
							</div>
							<div class="con-02">
								<ul class="resent-list">
									<li class="">
										<a href="">
											<p class="keyword">종합부동산세액</p>
											<p class="date">9.27</p>
										</a>
										<button></button>
									</li>
									<li class="">
										<a href="">
											<p class="keyword">부동산</p>
											<p class="date">9.27</p>
										</a>
										<button></button>
									</li>
									<li class="">
										<a href="">
											<p class="keyword">사업자가 과세사업</p>
											<p class="date">9.27</p>
										</a>
										<button></button>
									</li>
									<li class="">
										<a href="">
											<p class="keyword">부동산실권리자명의등기에관한법률</p>
											<p class="date">9.27</p>
										</a>
										<button></button>
									</li>
								</ul>
							</div>
						</div>
						<div class="keyword-footer clear">
							<div class="chk-dot-wrap c-right">
								<input type="checkbox" id="save-search-yn" value="Y" name="save-search-yn">
								<label for="save-search-yn">최근검색어저장 <span class="dot ml-5"></span></label>
							</div>
						</div>
					</div>
					<div id='keyword-wrap2' class='keyword-wrap' style='top: 59px;'>
						<div class='scroll-y'>
							<div class='search_layer_list _done'>
								<ul class='resent-list'>
									<li class=''>법무법인 <strong>로</strong>고스<i class='icon-myfolder&quot;'
									                                         data-icon=''></i></li>
									<li class=''><strong>로</strong>엘법률사무소<i class='icon-myfolder&quot;'
									                                        data-icon=''></i></li>
									<li class=''><strong>로</strong>티스합동법률사무소<i class='icon-myfolder&quot;'
									                                           data-icon=''></i></li>
									<li class=''><strong>로</strong>펌고우<i class='icon-myfolder&quot;' data-icon=''></i>
									</li>
									<li class='selected'><strong>로</strong>드베르투스<i class='icon-myfolder&quot;'
									                                               data-icon=''></i></li>
									<li class=''><strong>로</strong>셔<i class='icon-myfolder&quot;' data-icon=''></i>
									</li>
									<li class=''><strong>로</strong>열티<i class='icon-myfolder&quot;' data-icon=''></i>
									</li>
									<li class=''><strong>로</strong>젠베르크<i class='icon-myfolder&quot;' data-icon=''></i>
									</li>
									<li class=''><strong>로</strong>크<i class='icon-myfolder&quot;' data-icon=''></i>
									</li>
								</ul>
								<div id='result_target'>
									<div class='expend_result middle'
									     onclick="showContentPopView('/Info/ContentView?sid=D0137BB23A90FBD9')"><p>
											로드베르투스 [영]JohannKarlRodbertus(1805～1875)</p><span>[圖說 法律用語辭典 오세경/ 2017.02.15 / 법전출판사]</span>
										<div class='dirct_go'>바로가기</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--	끝 : 메인페이지	-->
	<?php
		include '../include/footer_main.php';
	?>
	<script>
        document.querySelectorAll('.resent-list li').forEach(li => {
            li.addEventListener('mouseover', () => {
                document.querySelectorAll('.resent-list li').forEach(item => {
                    item.classList.remove('selected');
                });
                li.classList.add('selected');
            });

            // 선택 유지가 필요 없으면 mouseout 시 제거
            li.addEventListener('mouseout', () => {
                li.classList.remove('selected');
            });
        });
        $(document).ready(function () {
            const input = document.getElementById('keyword-input');
            const popup1 = document.getElementById('keyword-wrap');
            const popup2 = document.getElementById('keyword-wrap2');
            input.addEventListener('focus', () => {
                if (input.value.trim() === '') {
                    popup1.classList.add('on');
                    popup2.classList.remove('on');
                }
            });
            // 값이 입력될 때 팝업1 → 팝업2 전환
            input.addEventListener('input', () => {
                if (input.value.trim() === '') {
                    popup1.classList.add('on');
                    popup2.classList.remove('on');
                } else {
                    popup1.classList.remove('on');
                    popup2.classList.add('on');
                }
            });
            // focus 빠지면 둘 다 숨김
            input.addEventListener('blur', () => {
                popup1.classList.remove('on');
                popup2.classList.remove('on');
            });
        });
	</script>
</body>
</html>
