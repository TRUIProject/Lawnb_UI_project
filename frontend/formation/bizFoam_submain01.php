<?php include '../include/header_sub.php'; ?>
<div class="container-wrap">
	<div class="container-inner">
		<div class="container-right">
			<div class="direct-list">
				<div class="direct-item">
					<div class="clear mb-5">
						<h2 class="c-left right-header">추천 전문가제작 서식</h2>
					</div>
					<ul class="direct-ul">
						<li>
							<a href="">
								<span class="c-blue">담보취소신청서 2(소멸에 의한 담보취소신청)</span>
							</a>
						</li>
						<li>
							<a href="">
								<span class="c-blue">담보취소신청서 2(소멸에 의한 담보취소신청)</span>
							</a>
						</li>
						<li>
							<a href="">
								<span class="c-blue">담보취소신청서 2(소멸에 의한 담보취소신청)</span>
							</a>
						</li>
						<li>
							<a href="">
								<span class="c-blue">담보취소신청서 2(소멸에 의한 담보취소신청)</span>
							</a>
						</li>
						<li>
							<a href="">
								<span class="c-blue">담보취소신청서 2(소멸에 의한 담보취소신청)</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="container-center">
			<h2 class="sub-main-tit clear">비즈폼 서식 검색</h2>
			<div class="bg-border">
				<div class="sub-main-pd">
					<div class="sub-main-tab-warp clear">
						<ul class="sub-main-tab-ul c-left">
							<li class="on"><a href="./bizFoam_submain01.php">비즈폼 서식 검색</a></li>
							<li><a href="./bizFoam_submain02.php">분야별 계약서</a></li>
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
												<label for="keyword-except">추천검색어 </label>
											</div>
											<div class="dis-tc">
												<ul class="ul-style02">
													<li class="txt01">세금계산서</li>
													<li class="txt01">PPT</li>
													<li class="txt01">자기소개서</li>
													<li class="txt01">사업계획서</li>
													<li class="txt01">이력서</li>
													<li class="txt01">경력기술서</li>
													<li class="txt01">제안서</li>
													<li class="txt01">재직증명서</li>
													<li class="txt01">PPT템플릿</li>
													<li class="txt01">급여명세서</li>
													<li class="txt01">차용증</li>
												</ul>
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
