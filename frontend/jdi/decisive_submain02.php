<?php include '../include/header_sub.php'; ?>
<div class="container-wrap">
	<div class="container-inner">
		<div class="container-right">
			<div class="direct-list">
				<div class="direct-item">
					<div class="clear mb-5">
						<h2 class="c-left right-header">최신 결정례</h2>
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
							<li><a href="./decisive_submain01.php">결정례 검색</a></li>
							<li class="on"><a href="./decisive_submain02.php">결정기관별 결정례</a></li>
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
							<div class="sub-border-box">
								<ul class="ul-style06">
									<li class="on"><a href="">국민권익위원회(중앙)</a></li>
									<li><a href="">국민권익위원회(소위원회)</a></li>
									<li><a href="">고용보험심사위원회</a></li>
									<li><a href="">감사원</a></li>
									<li><a href="">국가인권위원회</a></li>
									<li><a href="">공정거래위원회</a></li>
									<li><a href="">개인정보보호위원회</a></li>
								</ul>
							</div>
							<div class="sub-border-box">
								<ul class="ul-style04">
									<li class="on"><a href="">전체</a></li>
									<li><a href="">일반</a></li>
									<li><a href="">경찰</a></li>
									<li><a href="">노동</a></li>
									<li><a href="">보훈</a></li>
									<li><a href="">운전</a></li>
									<li><a href="">의료</a></li>
									<li><a href="">징계</a></li>
									<li><a href="">토지수용</a></li>
									<li><a href="">학교정화구역</a></li>
									<li><a href="">행정절차</a></li>
									<li><a href="">기타</a></li>
								</ul>
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
</div>
<?php include '../include/footer_sub.php'; ?>
