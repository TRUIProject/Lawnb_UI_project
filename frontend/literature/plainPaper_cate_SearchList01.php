<?php include '../include/header_sub_detail.php'; ?>
<div id='container-wrap' class='container-wrap show-view-right detail-search'>
	<div class="container-inner">
		<div class="container-left">
			<div class='scroll-y'>
				<h2 class='h2'>학회논문</h2>
				<ul id="left-con-accordion" class="accordion">
					<li class="accordion-item">
						<h3 class="accordion-header">
							<button class="accordion-button show" type="button" data-bs-target="#left-con-accordion03">
								학회논문
							</button>
						</h3>
						<div id="left-con-accordion03" class="accordion-collapse collapse" data-bs-parent="#left-con-accordion">
							<div class="accordion-body">
								<ul class="keyword-list list-block not-input">
									<li><a href="" class="txt03">나의 학회/간행물</a></li>
									<li><a href="" class="txt03">전체(1700학회)</a></li>
									<li><a href="" class="txt03">법학(187학회)</a></li>
									<li><a href="" class="txt03">행정학(92학회)</a></li>
									<li class="keyword-dropdown">
										<button class="keyword-list-btn" data-bs-target="#location-con-01" onClick="fn_keyword_list_open(this)"></button>
										<div class="str keyword-list-hd">사회과학(485학회)</div>
										<ul id="location-con-01" class="sub-ul keyword-list list-block">
											<li>경영학 (57)</li>
											<li>경제학 (59)</li>
											<li>관광학 (13)</li>
											<li>교육 (87)</li>
										</ul>
									</li>
									<li class="keyword-dropdown">
										<button class="keyword-list-btn" data-bs-target="#location-con-02" onClick="fn_keyword_list_open(this)"></button>
										<div class="str keyword-list-hd">선택2</div>
										<ul id="location-con-02" class="sub-ul keyword-list list-block">
											<li>선택2-1</li>
											<li>선택2-2</li>
											<li>선택2-3</li>
											<li>선택2-4</li>
											<li>선택2-5</li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="container-right">
			<!-- 최근 조회 시작 // -->
			<div class="reset-con-list">
				<div class="reset-con-item">
					<h3 class="right-header">최근 조회 논문평석</h3>
					<ul class="reset-con-ul">
						<li>
							<a href="">
								<span class="c-blue">대법원 1999. 3. 18 선고 98다32175 전원합의체 판결</span> 【토지소유권이전등기】 [공99.5.1.[81],718]</span>
							</a>
						</li>
						<li>
							<a href="">
								<span class="c-blue">【유럽법제동향】 공동불법행위자간의 구상권 주장시 중대한 의료과오에 있어서의 입증책임전환 인정</span> BGH 6. Zivilsenat, Urteil vom 06.10.2009 - VI ZR 24/09박성은 / 2010.03.04</span>
							</a>
						</li>
						<li>
							<a href="">
								<span class="c-blue">【유럽법제동향】 공동불법행위자간의 구상권 주장시 중대한 의료과오에 있어서의 입증책임전환 인정</span> BGH 6. Zivilsenat, Urteil vom 06.10.2009 - VI ZR 24/09박성은 / 2010.03.04</span>
							</a>
						</li>
						<li>
							<a href="">
								<span class="c-blue">【유럽법제동향】 공동불법행위자간의 구상권 주장시 중대한 의료과오에 있어서의 입증책임전환 인정</span> BGH 6. Zivilsenat, Urteil vom 06.10.2009 - VI ZR 24/09박성은 / 2010.03.04</span>
							</a>
						</li>
						<li>
							<a href="">
								<span class="c-blue">【유럽법제동향】 공동불법행위자간의 구상권 주장시 중대한 의료과오에 있어서의 입증책임전환 인정</span> BGH 6. Zivilsenat, Urteil vom 06.10.2009 - VI ZR 24/09박성은 / 2010.03.04</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<!-- // 최근 조회 끝 -->
		</div>
		<div class="container-center">
			<div class="content-wrap">
				<!-- 검색어 결과 문구 ／  -->
				<div class='clear mb-10'>
					<div class='c-left'>
						<span class='fs-14'>검색어 '동해물과', '백두산이', '마르고'</span>
					</div>
				</div>
				<!-- ／ 검색어 결과 문구  -->
				<div class='clear mb-15'>
					<div class='c-left'>
						<b>검색결과 8건</b> <span class='fs-14'>1/1</span>
					</div>
					<div class='r-div c-right clear'>
						<button class='btn-blue btn-m' onclick="fn_add_class_on('#detail-search-popup')">상세검색</button>
					</div>
				</div>
				<div class="clear mb-15">
					<div class="c-left">
						<p class="c-blue fw-700 fs-18">경영학 (57학회 / 155종)</p>
					</div>
					<div class="c-right clear">
						<div class="dis-t">
							<div class="dis-tr">
								<div class="dis-tc pr-10">
									<select id="select" class="select-css01">
										<option>전체</option>
										<option>선택2</option>
										<option>선택3</option>
										<option>선택4</option>
									</select>
								</div>
								<div class="dis-tc pr-5"><input type="text" class="input-css01" placeholder="학회명 및 간행물명 검색"></div>
								<div class="dis-tc"><button class="btn-orange btn-m dis-b">검색</button></div>
							</div>
						</div>
					</div>
				</div>
				<div class="content-bg">
					<dl class="article_detail_list">
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','465840','KNU기업경영연구소');">
								KNU기업경영연구소 (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('465841','465840','기업경영리뷰');">기업경영리뷰</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','466167','K·기업경영연구원');">
								K·기업경영연구원 (2종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('466699','466167','Cogent K 기업인');">Cogent K 기업인</a></li>
								<li><a href="javascript:doc.goSubSearchList('466168','466167','KBM Journal(K Business Management Journal)');">KBM Journal(K Business Management Journal)</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441713','경기대학교 호텔경영연구소');">
								경기대학교 호텔경영연구소 (2종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('461908','441713','김충호박사정년기념논문집');">김충호박사정년기념논문집</a></li>
								<li><a href="javascript:doc.goSubSearchList('459753','441713','호텔경영연구논총');">호텔경영연구논총</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','465119','경남대학교 산업경영연구소');">
								경남대학교 산업경영연구소 (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('465120','465119','지역산업연구');">지역산업연구</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441744','경희대학교 경영연구원');">
								경희대학교 경영연구원 (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('460026','441744','의료경영학연구');">의료경영학연구</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441703','고려대학교 경영대학');">
								고려대학교 경영대학 (3종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('459603','441703','경영논총');">경영논총</a></li>
								<li><a href="javascript:doc.goSubSearchList('461885','441703','고려대학교 논문집');">고려대학교 논문집</a></li>
								<li><a href="javascript:doc.goSubSearchList('459507','441703','고려대학교50주년 기념논문집');">고려대학교50주년 기념논문집</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441725','군산대학교 산업개발연구소');">
								군산대학교 산업개발연구소 (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('459605','441725','산업개발연구');">산업개발연구</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441739','기술경영경제학회');">
								기술경영경제학회 (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('462247','441739','기술혁신연구');">기술혁신연구</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','464752','동의대학교 경제경영전략연구소');">
								동의대학교 경제경영전략연구소 (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('464803','464752','경제경영연구');">경제경영연구</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','465848','사회혁신기업연구원  ');">
								사회혁신기업연구원   (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('465850','465848','혁신기업연구');">혁신기업연구</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','467733','산업혁신경영연구원');">
								산업혁신경영연구원 (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('467734','467733','산업혁신경영연구');">산업혁신경영연구</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441723','상명대학교 경영연구소');">
								상명대학교 경영연구소 (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('460574','441723','경영학연구');">경영학연구</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441720','서강대학교 경영연구소');">
								서강대학교 경영연구소 (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('460028','441720','서강경영논총');">서강경영논총</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441717','성균관대학교 경영연구소');">
								성균관대학교 경영연구소 (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('461541','441717','Sungkyun Management Research Institute Working Paper');">Sungkyun Management Research Institute Working Paper</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','464773','숙명여자대학교 경제경영연구소');">
								숙명여자대학교 경제경영연구소 (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('464838','464773','기업경제연구');">기업경제연구</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441719','원광대학교 경영경제연구소');">
								원광대학교 경영경제연구소 (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('459910','441719','경영경제연구');">경영경제연구</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','466677','중소벤처기업연구원');">
								중소벤처기업연구원 (3종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('466695','466677','중소기업정책연구');">중소기업정책연구</a></li>
								<li><a href="javascript:doc.goSubSearchList('466679','466677','중소기업정책연구보고서');">중소기업정책연구보고서</a></li>
								<li><a href="javascript:doc.goSubSearchList('466696','466677','중소기업포커스');">중소기업포커스</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441746','충북대학교 산업경영연구소');">
								충북대학교 산업경영연구소 (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('462221','441746','산업과경영');">산업과경영</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441738','텔코경영연구원');">
								텔코경영연구원 (3종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('461230','441738',' ITBI Review');"> ITBI Review</a></li>
								<li><a href="javascript:doc.goSubSearchList('461372','441738','연구총서');">연구총서</a></li>
								<li><a href="javascript:doc.goSubSearchList('462098','441738','텔코 저널');">텔코 저널</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441748','포스코경영연구원');">
								포스코경영연구원 (7종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('459972','441748','Asian Steel Watch');">Asian Steel Watch</a></li>
								<li><a href="javascript:doc.goSubSearchList('462198','441748','CHINDIA Plus');">CHINDIA Plus</a></li>
								<li><a href="javascript:doc.goSubSearchList('462348','441748','China Steel Monthly Brief');">China Steel Monthly Brief</a></li>
								<li><a href="javascript:doc.goSubSearchList('461888','441748','POSRI 경영경제연구');">POSRI 경영경제연구</a></li>
								<li><a href="javascript:doc.goSubSearchList('461997','441748','POSRI 이슈리포트');">POSRI 이슈리포트</a></li>
								<li><a href="javascript:doc.goSubSearchList('460943','441748','POSRI 철강수급전망');">POSRI 철강수급전망</a></li>
								<li><a href="javascript:doc.goSubSearchList('461853','441748','환경이슈페이퍼');">환경이슈페이퍼</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441743','한국경영공학회');">
								한국경영공학회 (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('459689','441743','한국경영공학회지');">한국경영공학회지</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441708','한국경영사학회');">
								한국경영사학회 (4종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('459389','441708','THE JOURNAL OF BUSINESS HISTORY');">THE JOURNAL OF BUSINESS HISTORY</a></li>
								<li><a href="javascript:doc.goSubSearchList('461260','441708','경영사학');">경영사학</a></li>
								<li><a href="javascript:doc.goSubSearchList('460593','441708','뉴스레터');">뉴스레터</a></li>
								<li><a href="javascript:doc.goSubSearchList('461824','441708','한국경영사학회 연구총서3 - 매헌박승직 연강박두병 연구');">한국경영사학회 연구총서3 - 매헌박승직 연강박두병 연구</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441742','한국고객만족경영학회');">
								한국고객만족경영학회 (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('459295','441742','고객만족경영연구');">고객만족경영연구</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','467381','한국관세무역개발원');">
								한국관세무역개발원 (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('467382','467381','관세무역연구');">관세무역연구</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441701','한국국제경영학회');">
								한국국제경영학회 (7종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('461231','441701','98년 제9차 정기총회경과보고');">98년 제9차 정기총회경과보고</a></li>
								<li><a href="javascript:doc.goSubSearchList('460829','441701','KOREAN ACADEMY OF INTERNATIONAL BUSINESS');">KOREAN ACADEMY OF INTERNATIONAL BUSINESS</a></li>
								<li><a href="javascript:doc.goSubSearchList('461417','441701','Newsletter');">Newsletter</a></li>
								<li><a href="javascript:doc.goSubSearchList('461652','441701','국제경영연구');">국제경영연구</a></li>
								<li><a href="javascript:doc.goSubSearchList('460939','441701','제3시장에서의 현지경영전략');">제3시장에서의 현지경영전략</a></li>
								<li><a href="javascript:doc.goSubSearchList('461337','441701','한국국제경영학회 학술발표논문집');">한국국제경영학회 학술발표논문집</a></li>
								<li><a href="javascript:doc.goSubSearchList('461951','441701','현대자동차 해외진출사례');">현대자동차 해외진출사례</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441741','한국금융공학회');">
								한국금융공학회 (3종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('460508','441741','금융공학산학연구');">금융공학산학연구</a></li>
								<li><a href="javascript:doc.goSubSearchList('459385','441741','금융공학연구');">금융공학연구</a></li>
								<li><a href="javascript:doc.goSubSearchList('459310','441741','한국금융공학회 학술발표논문집');">한국금융공학회 학술발표논문집</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441740','한국금융소비자학회');">
								한국금융소비자학회 (3종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('462366','441740','금융소비자연구');">금융소비자연구</a></li>
								<li><a href="javascript:doc.goSubSearchList('464880','441740','정책심포지엄');">정책심포지엄</a></li>
								<li><a href="javascript:doc.goSubSearchList('459935','441740','한국금융소비자학회 학술발표논문집');">한국금융소비자학회 학술발표논문집</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441707','한국로지스틱스학회');">
								한국로지스틱스학회 (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('461434','441707','로지스틱스연구');">로지스틱스연구</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441704','한국리스크관리학회');">
								한국리스크관리학회 (8종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('460994','441704','RMR');">RMR</a></li>
								<li><a href="javascript:doc.goSubSearchList('459553','441704','Y2K 리스크의 전망과 대책');">Y2K 리스크의 전망과 대책</a></li>
								<li><a href="javascript:doc.goSubSearchList('460352','441704','리스크 관리연구');">리스크 관리연구</a></li>
								<li><a href="javascript:doc.goSubSearchList('460020','441704','리스크관리학회보');">리스크관리학회보</a></li>
								<li><a href="javascript:doc.goSubSearchList('462010','441704','자동차보험의 현안문제와 해결방안');">자동차보험의 현안문제와 해결방안</a></li>
								<li><a href="javascript:doc.goSubSearchList('460543','441704','한국리스크관리학회 세미나');">한국리스크관리학회 세미나</a></li>
								<li><a href="javascript:doc.goSubSearchList('460159','441704','한국리스크관리학회 특별세미나');">한국리스크관리학회 특별세미나</a></li>
								<li><a href="javascript:doc.goSubSearchList('460841','441704','한국리스크관리학회 학술세미나자료집');">한국리스크관리학회 학술세미나자료집</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441734','한국마케팅과학회');">
								한국마케팅과학회 (3종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('459770','441734','Journal of Global Fashion Marketing');">Journal of Global Fashion Marketing</a></li>
								<li><a href="javascript:doc.goSubSearchList('459905','441734','마케팅과학연구');">마케팅과학연구</a></li>
								<li><a href="javascript:doc.goSubSearchList('461095','441734','한국마케팅과학회 하계학술발표논문집');">한국마케팅과학회 하계학술발표논문집</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','466660','한국벤처혁신학회');">
								한국벤처혁신학회 (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('466661','466660','벤처혁신연구');">벤처혁신연구</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441718','한국병원경영학회');">
								한국병원경영학회 (3종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('460405','441718','한국병원경영학회 학술대회연제집');">한국병원경영학회 학술대회연제집</a></li>
								<li><a href="javascript:doc.goSubSearchList('460375','441718','한국병원경영학회지');">한국병원경영학회지</a></li>
								<li><a href="javascript:doc.goSubSearchList('465711','441718','한국병원경영학회지 특별호');">한국병원경영학회지 특별호</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441721','한국보험학회');">
								한국보험학회 (4종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('462105','441721','보험학회보');">보험학회보</a></li>
								<li><a href="javascript:doc.goSubSearchList('459994','441721','보험학회지');">보험학회지</a></li>
								<li><a href="javascript:doc.goSubSearchList('461066','441721','생명보험회사의 기업공개 과제');">생명보험회사의 기업공개 과제</a></li>
								<li><a href="javascript:doc.goSubSearchList('461923','441721','한국보험학회 하계학술발표논문집');">한국보험학회 하계학술발표논문집</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441729','한국산학경영학회');">
								한국산학경영학회 (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('460880','441729','산학경영연구');">산학경영연구</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','465688','한국생산성학회');">
								한국생산성학회 (5종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('465692','465688','THE JOURNAL OF PRODUCTIVITY');">THE JOURNAL OF PRODUCTIVITY</a></li>
								<li><a href="javascript:doc.goSubSearchList('465691','465688','금융산업 생산성혁신을 위한 심포지엄');">금융산업 생산성혁신을 위한 심포지엄</a></li>
								<li><a href="javascript:doc.goSubSearchList('465689','465688','생산성연구: 국제융합학술지');">생산성연구: 국제융합학술지</a></li>
								<li><a href="javascript:doc.goSubSearchList('465690','465688','한국생산성학회 학술발표논문집');">한국생산성학회 학술발표논문집</a></li>
								<li><a href="javascript:doc.goSubSearchList('465693','465688','한국생산성학회의 연혁');">한국생산성학회의 연혁</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441709','한국소비자학회');">
								한국소비자학회 (10종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('461201','441709','개방화시대의 소비자문제와 정책 - 소비자 기업 정부의 역할 -');">개방화시대의 소비자문제와 정책 - 소비자 기업 정부의 역할 -</a></li>
								<li><a href="javascript:doc.goSubSearchList('460703','441709','서비스 경쟁력과 소비자');">서비스 경쟁력과 소비자</a></li>
								<li><a href="javascript:doc.goSubSearchList('460310','441709','소비자학연구');">소비자학연구</a></li>
								<li><a href="javascript:doc.goSubSearchList('460758','441709','정보화시대와 소비자');">정보화시대와 소비자</a></li>
								<li><a href="javascript:doc.goSubSearchList('460668','441709','지방자치와 소비자보호');">지방자치와 소비자보호</a></li>
								<li><a href="javascript:doc.goSubSearchList('465779','441709','춘계학술대회논문집');">춘계학술대회논문집</a></li>
								<li><a href="javascript:doc.goSubSearchList('461976','441709','한국소비문화의 방향');">한국소비문화의 방향</a></li>
								<li><a href="javascript:doc.goSubSearchList('459312','441709','한국소비자학회 제3차 Doctoral Consortium');">한국소비자학회 제3차 Doctoral Consortium</a></li>
								<li><a href="javascript:doc.goSubSearchList('461190','441709','한국소비자학회 학술발표논문집');">한국소비자학회 학술발표논문집</a></li>
								<li><a href="javascript:doc.goSubSearchList('460081','441709','환경문제와 소비자');">환경문제와 소비자</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441710','한국유통경영학회');">
								한국유통경영학회 (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('461229','441710','유통경영학회지');">유통경영학회지</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','464767','한국유통물류정책학회');">
								한국유통물류정책학회 (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('464832','464767','유통물류연구');">유통물류연구</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441731','한국윤리경영학회');">
								한국윤리경영학회 (3종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('461158','441731','기업윤리연구');">기업윤리연구</a></li>
								<li><a href="javascript:doc.goSubSearchList('460824','441731','윤리경영연구');">윤리경영연구</a></li>
								<li><a href="javascript:doc.goSubSearchList('461252','441731','한국윤리경영학회 춘계학술발표논문집');">한국윤리경영학회 춘계학술발표논문집</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441745','한국융합과학회');">
								한국융합과학회 (4종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('459415','441745','한국시큐리티융합경영학회 창립 세미나집');">한국시큐리티융합경영학회 창립 세미나집</a></li>
								<li><a href="javascript:doc.goSubSearchList('467011','441745','한국융합과학회 국제학술대회자료집');">한국융합과학회 국제학술대회자료집</a></li>
								<li><a href="javascript:doc.goSubSearchList('466870','441745','한국융합과학회 춘계 학술세미나집');">한국융합과학회 춘계 학술세미나집</a></li>
								<li><a href="javascript:doc.goSubSearchList('460418','441745','한국융합과학회지');">한국융합과학회지</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441736','한국인력개발학회');">
								한국인력개발학회 (2종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('461831','441736','HRD연구');">HRD연구</a></li>
								<li><a href="javascript:doc.goSubSearchList('460422','441736','인력개발연구');">인력개발연구</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441737','한국인적자원관리학회');">
								한국인적자원관리학회 (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('461343','441737','인적자원관리연구');">인적자원관리연구</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441716','한국인터넷비즈니스학회');">
								한국인터넷비즈니스학회 (2종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('459309','441716','The Journal of e - Business');">The Journal of e - Business</a></li>
								<li><a href="javascript:doc.goSubSearchList('462285','441716','인터넷비즈니스 연구');">인터넷비즈니스 연구</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441711','한국재무관리학회');">
								한국재무관리학회 (3종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('459967','441711','재무관리논총');">재무관리논총</a></li>
								<li><a href="javascript:doc.goSubSearchList('462049','441711','재무관리연구');">재무관리연구</a></li>
								<li><a href="javascript:doc.goSubSearchList('462266','441711','한국재무관리학회 하계학술발표논문집');">한국재무관리학회 하계학술발표논문집</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','466568','한국재무학회');">
								한국재무학회 (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('466569','466568','재무연구');">재무연구</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441747','한국정보시스템학회');">
								한국정보시스템학회 (3종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('460299','441747','정보시스템연구');">정보시스템연구</a></li>
								<li><a href="javascript:doc.goSubSearchList('461676','441747','한국정보시스템학회 추계 학술발표논문집');">한국정보시스템학회 추계 학술발표논문집</a></li>
								<li><a href="javascript:doc.goSubSearchList('459645','441747','한국정보시스템학회 춘계 학술발표논문집');">한국정보시스템학회 춘계 학술발표논문집</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','467012','한국중견기업학회');">
								한국중견기업학회 (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('467013','467012','중견기업연구');">중견기업연구</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441714','한국중소기업학회');">
								한국중소기업학회 (8종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('459338','441714','경제학 공동학술대회');">경제학 공동학술대회</a></li>
								<li><a href="javascript:doc.goSubSearchList('461730','441714','기업가정신과 벤처연구(JSBI)(구 벤처경영연구)');">기업가정신과 벤처연구(JSBI)(구 벤처경영연구)</a></li>
								<li><a href="javascript:doc.goSubSearchList('462385','441714','기업가정신과 벤처연구(구 벤처경영연구)');">기업가정신과 벤처연구(구 벤처경영연구)</a></li>
								<li><a href="javascript:doc.goSubSearchList('459741','441714','중소기업 연구총서');">중소기업 연구총서</a></li>
								<li><a href="javascript:doc.goSubSearchList('459739','441714','중소기업연구');">중소기업연구</a></li>
								<li><a href="javascript:doc.goSubSearchList('460556','441714','한국중소기업학회 추계학술발표논문집');">한국중소기업학회 추계학술발표논문집</a></li>
								<li><a href="javascript:doc.goSubSearchList('461160','441714','한국중소기업학회 춘계학술발표논문집');">한국중소기업학회 춘계학술발표논문집</a></li>
								<li><a href="javascript:doc.goSubSearchList('462123','441714','한국중소기업학회 하계학술발표논문집');">한국중소기업학회 하계학술발표논문집</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441752','한국지방재정공제회');">
								한국지방재정공제회 (3종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('460799','441752','지방세');">지방세</a></li>
								<li><a href="javascript:doc.goSubSearchList('461007','441752','지방재정');">지방재정</a></li>
								<li><a href="javascript:doc.goSubSearchList('460995','441752','지방재정과 지방세');">지방재정과 지방세</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441749','한국지식경영학회');">
								한국지식경영학회 (2종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('459347','441749','지식경영 학술심포지움');">지식경영 학술심포지움</a></li>
								<li><a href="javascript:doc.goSubSearchList('460403','441749','지식경영연구');">지식경영연구</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441735','한국창업정보학회');">
								한국창업정보학회 (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('460724','441735','창업정보학회지');">창업정보학회지</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441702','한국파생상품학회');">
								한국파생상품학회 (8종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('460902','441702','96 주가지수 선물거래전략 워크샵');">96 주가지수 선물거래전략 워크샵</a></li>
								<li><a href="javascript:doc.goSubSearchList('462326','441702','선물거래 상품의 선정 및 거래소 설립방안');">선물거래 상품의 선정 및 거래소 설립방안</a></li>
								<li><a href="javascript:doc.goSubSearchList('462128','441702','선물연구');">선물연구</a></li>
								<li><a href="javascript:doc.goSubSearchList('462028','441702','옵션의 경제적 효과와 거래제도 구축방안');">옵션의 경제적 효과와 거래제도 구축방안</a></li>
								<li><a href="javascript:doc.goSubSearchList('461769','441702','외환위기와 파생금융상품거래');">외환위기와 파생금융상품거래</a></li>
								<li><a href="javascript:doc.goSubSearchList('461294','441702','한국파생상품학회 심포지움논문집');">한국파생상품학회 심포지움논문집</a></li>
								<li><a href="javascript:doc.goSubSearchList('461887','441702','한국파생상품학회 추계학술발표논문집');">한국파생상품학회 추계학술발표논문집</a></li>
								<li><a href="javascript:doc.goSubSearchList('459859','441702','한국파생상품학회 춘계학술발표논문집');">한국파생상품학회 춘계학술발표논문집</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441705','한국품질경영학회');">
								한국품질경영학회 (10종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('460345','441705','The 12th Asia Quality Management Symposium : Total Quality Management for Restoring Competitiveness');">The 12th Asia Quality Management Symposium : Total Quality Management for Restoring Competitiveness</a></li>
								<li><a href="javascript:doc.goSubSearchList('459447','441705','The Asian Journal on Quality');">The Asian Journal on Quality</a></li>
								<li><a href="javascript:doc.goSubSearchList('460055','441705','품질경영연구');">품질경영연구</a></li>
								<li><a href="javascript:doc.goSubSearchList('461263','441705','품질경영학회지');">품질경영학회지</a></li>
								<li><a href="javascript:doc.goSubSearchList('462234','441705','품질경영학회지 발표문집');">품질경영학회지 발표문집</a></li>
								<li><a href="javascript:doc.goSubSearchList('461276','441705','품질관리학회지 초록집');">품질관리학회지 초록집</a></li>
								<li><a href="javascript:doc.goSubSearchList('459299','441705','품질혁신');">품질혁신</a></li>
								<li><a href="javascript:doc.goSubSearchList('461053','441705','한국품질경영학회 추계학술발표논문집');">한국품질경영학회 추계학술발표논문집</a></li>
								<li><a href="javascript:doc.goSubSearchList('460493','441705','한국품질경영학회 춘계학술발표논문집');">한국품질경영학회 춘계학술발표논문집</a></li>
								<li><a href="javascript:doc.goSubSearchList('461640','441705','한국품질경영학회보');">한국품질경영학회보</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441750','한국항공경영학회');">
								한국항공경영학회 (3종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('460909','441750','한국항공경영학회 추계학술발표논문집');">한국항공경영학회 추계학술발표논문집</a></li>
								<li><a href="javascript:doc.goSubSearchList('460950','441750','한국항공경영학회 춘계학술발표논문집');">한국항공경영학회 춘계학술발표논문집</a></li>
								<li><a href="javascript:doc.goSubSearchList('460960','441750','한국항공경영학회지');">한국항공경영학회지</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441726','한국항공대학교 경영연구소');">
								한국항공대학교 경영연구소 (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('459668','441726','산업과 경영');">산업과 경영</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441706','한국해운물류학회');">
								한국해운물류학회 (6종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('460340','441706','목포 개항 100 년의 역사적 의미와 21 세기를 향한 목포항의 비전');">목포 개항 100 년의 역사적 의미와 21 세기를 향한 목포항의 비전</a></li>
								<li><a href="javascript:doc.goSubSearchList('462091','441706','한국해운물류학회 추계학술발표논문집');">한국해운물류학회 추계학술발표논문집</a></li>
								<li><a href="javascript:doc.goSubSearchList('459802','441706','한국해운물류학회 춘계학술발표논문집');">한국해운물류학회 춘계학술발표논문집</a></li>
								<li><a href="javascript:doc.goSubSearchList('460169','441706','한국해운학회 알림판');">한국해운학회 알림판</a></li>
								<li><a href="javascript:doc.goSubSearchList('461061','441706','해운물류 : 이론과 실천');">해운물류 : 이론과 실천</a></li>
								<li><a href="javascript:doc.goSubSearchList('459518','441706','해운물류연구');">해운물류연구</a></li>
							</ol>
						</dd>
						<!-- s2data = 0:이름, 1:state, 2:index, 3:간행물(종)수 -->
						<dd>
							<a href="javascript:doc.goSubSearchList('0','441751','한국호텔리조트학회');">
								한국호텔리조트학회 (1종)                    </a>
							<ol>
								<li><a href="javascript:doc.goSubSearchList('460044','441751','호텔리조트연구');">호텔리조트연구</a></li>
							</ol>
						</dd>
					</dl>
				</div>
			</div>
		</div>
        <?php include '../include/previewPage.php'; ?>
	</div>
</div>
<?php include '../include/footer_sub.php'; ?>
