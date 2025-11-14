<?php include '../include/header_sub_content.php'; ?>
<!--	시작 : 헤더	-->
<header class="ct-header">
	<div class="w1600 str clear">
		<h1 class="logo-div"><a href="../main/main_search.php"><img src="../images/common/logo_s.png" alt="로앤비"/></a>
		</h1>
	</div>
</header>
<!--	끝 : 헤더	-->
<!--	시작 : 본문	-->
<div class="ct-wrap">
	<!-- ** ct-left 바로 뒤에 .ct-left-btn가 존재해야 합니다.	-->
	<div class="ct-left">
		<div class="ct-pt h-100p">
			<div class="str h-100p">
				<div class="ct-scroll">
					<div class="table_index tree">
						<h3 class="hide">조문목차</h3>
						<ul id="law_tree_list" class="regulation">
							<li class="active_d1 open">
								<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
								<a href="#" class="tit">제1장 총칙 [개정 2010.10.8]</a>
								<ul>
									<li class="comment"><a name="joMoveLink" href="#P1"
									                       onclick="law.goTarget('1')"><span>제1조</span> (목적)</a></li>
									<li class="comment"><a name="joMoveLink" href="#P2"
									                       onclick="law.goTarget('2')"><span>제2조</span> (정의)</a></li>
									<li class="comment"><a name="joMoveLink" href="#P3"
									                       onclick="law.goTarget('3')"><span>제3조</span> (선로의 형식)</a></li>
									<li class="comment"><a name="joMoveLink" href="#P4"
									                       onclick="law.goTarget('4')"><span>제4조</span> </a></li>
									<li class="comment"><a name="joMoveLink" href="#P5"
									                       onclick="law.goTarget('5')"><span>제5조</span> (열차의 운전 진로)</a></li>
								</ul>
							</li>
							<li class="active_d1 open">
								<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
								<a href="#" class="tit">제2장 선로 [개정 2010.10.8]</a>
								<ul>
									<li class="comment open">
										<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
										<p class="tit">제1절 궤간 [개정 2010.10.8]</p>
										<ul>
											<li class="comment"><a name="joMoveLink" href="#P6"
											                       onclick="law.goTarget('6')"><span>제6조</span> (궤간)</a></li>
											<li class="comment"><a name="joMoveLink" href="#P7"
											                       onclick="law.goTarget('7')"><span>제7조</span> (확대궤간)</a></li>
											<li class="comment"><a name="joMoveLink" href="#P8"
											                       onclick="law.goTarget('8')"><span>제8조</span> (확대궤간의 체감거리)</a>
											</li>
											<li class="comment"><a name="joMoveLink" href="#P9"
											                       onclick="law.goTarget('9')"><span>제9조</span> (궤간의 공차)</a>
											</li>
										</ul>
									</li>
									<li class="comment open">
										<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
										<p class="tit">제2절 곡선 [개정 2010.10.8]</p>
										<ul>
											<li class="comment"><a name="joMoveLink" href="#P10"
											                       onclick="law.goTarget('10')"><span>제10조</span> (선로의 곡선반경
													등)</a></li>
											<li class="comment"><a name="joMoveLink" href="#P11"
											                       onclick="law.goTarget('11')"><span>제11조</span> (캔트)</a></li>
											<li class="comment"><a name="joMoveLink" href="#P12"
											                       onclick="law.goTarget('12')"><span>제12조</span> (캔트의 체감거리)</a>
											</li>
											<li class="comment"><a name="joMoveLink" href="#P13"
											                       onclick="law.goTarget('13')"><span>제13조</span> (완화곡선)</a>
											</li>
											<li class="comment"><a name="joMoveLink" href="#P14"
											                       onclick="law.goTarget('14')"><span>제14조</span> (직선의 삽입 등)</a>
											</li>
										</ul>
									</li>
									<li class="comment open">
										<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
										<p class="tit">제3절 기울기</p>
										<ul>
											<li class="comment"><a name="joMoveLink" href="#P15"
											                       onclick="law.goTarget('15')"><span>제15조</span> (정거장 밖의 기울기한도)</a>
											</li>
											<li class="comment"><a name="joMoveLink" href="#P16"
											                       onclick="law.goTarget('16')"><span>제16조</span> (정거장 안의 기울기
													한도)</a></li>
											<li class="comment"><a name="joMoveLink" href="#P17"
											                       onclick="law.goTarget('17')"><span>제17조</span> (측선의 기울기)</a>
											</li>
											<li class="comment"><a name="joMoveLink" href="#P18"
											                       onclick="law.goTarget('18')"><span>제18조</span> (종곡선)</a></li>
										</ul>
									</li>
									<li class="comment">
										<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
										<p class="tit">제4절 건축한계</p>
										<ul>
											<li class="comment"><a name="joMoveLink" href="#P19"
											                       onclick="law.goTarget('19')"><span>제19조</span> (건축한계)</a>
											</li>
											<li class="comment"><a name="joMoveLink" href="#P20"
											                       onclick="law.goTarget('20')"><span>제20조</span> (직선구간의
													건축한계)</a></li>
											<li class="comment"><a name="joMoveLink" href="#P21"
											                       onclick="law.goTarget('21')"><span>제21조</span> (곡선구간의
													건축한계)</a></li>
										</ul>
									</li>
									<li class="comment">
										<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
										<p class="tit">제5절 궤도 [개정 2010.10.8]</p>
										<ul>
											<li class="comment"><a name="joMoveLink" href="#P22"
											                       onclick="law.goTarget('22')"><span>제22조</span> (궤도의 중심
													간격)</a></li>
											<li class="comment"><a name="joMoveLink" href="#P23"
											                       onclick="law.goTarget('23')"><span>제23조</span> (곡선인 궤도의 중심
													간격)</a></li>
											<li class="comment"><a name="joMoveLink" href="#P24"
											                       onclick="law.goTarget('24')"><span>제24조</span> (레일)</a></li>
											<li class="comment"><a name="joMoveLink" href="#P25"
											                       onclick="law.goTarget('25')"><span>제25조</span> (도상의 두께 등)</a>
											</li>
										</ul>
									</li>
									<li class="comment">
										<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
										<p class="tit">제6절 구조물</p>
										<ul>
											<li class="comment"><a name="joMoveLink" href="#P26"
											                       onclick="law.goTarget('26')"><span>제26조</span> (건축한계 외의 여유
													공간)</a></li>
											<li class="comment"><a name="joMoveLink" href="#P27"
											                       onclick="law.goTarget('27')"><span>제27조</span> (도로면 등으로부터의
													간격)</a></li>
											<li class="comment"><a name="joMoveLink" href="#P28"
											                       onclick="law.goTarget('28')"><span>제28조</span> </a></li>
										</ul>
									</li>
									<li class="comment">
										<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
										<p class="tit">제7절 분기 [개정 2010.10.8]</p>
										<ul>
											<li class="comment"><a name="joMoveLink" href="#P29"
											                       onclick="law.goTarget('29')"><span>제29조</span> (분기)</a></li>
										</ul>
									</li>
								</ul>
							</li>
							<li class="active_d1 open">
								<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
								<a href="#" class="tit">제3장 정거장</a>
								<ul>
									<li class="comment"><a name="joMoveLink" href="#P30"
									                       onclick="law.goTarget('30')"><span>제30조</span> (정거장의 시설ㆍ설비)</a></li>
									<li class="comment"><a name="joMoveLink" href="#P30X2" onclick="law.goTarget('30X2')"><span>제30조의2</span>
											(승강장의 안전시설)</a></li>
									<li class="comment"><a name="joMoveLink" href="#P30X3" onclick="law.goTarget('30X3')"><span>제30조의3</span>
											(정거장 간의 거리)</a></li>
									<li class="comment"><a name="joMoveLink" href="#P31"
									                       onclick="law.goTarget('31')"><span>제31조</span> (승강장의 너비 등)</a><span
												class="icon_red"> [변경]</span></li>
									<li class="comment"><a name="joMoveLink" href="#P32"
									                       onclick="law.goTarget('32')"><span>제32조</span> (승강장 연단의 높이)</a></li>
									<li class="comment"><a name="joMoveLink" href="#P33"
									                       onclick="law.goTarget('33')"><span>제33조</span> (승강장 연단과 차량한계와의
											간격)</a></li>
									<li class="comment"><a name="joMoveLink" href="#P34"
									                       onclick="law.goTarget('34')"><span>제34조</span> (승강장의 길이 및 통로의 폭)</a>
									</li>
									<li class="comment"><a name="joMoveLink" href="#P35"
									                       onclick="law.goTarget('35')"><span>제35조</span> (노면 출입구 및 지상보행로)</a>
									</li>
									<li class="comment"><a name="joMoveLink" href="#P35X2" onclick="law.goTarget('35X2')"><span>제35조의2</span>
											(특별피난계단)</a></li>
									<li class="comment"><a name="joMoveLink" href="#P35X3" onclick="law.goTarget('35X3')"><span>제35조의3</span>
											(정거장의 구조물 등의 마감재료)</a></li>
								</ul>
							</li>
							<li class="active_d1 open">
								<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
								<a href="#" class="tit">제4장 설비 [개정 2010.10.8]</a>
								<ul>
									<li class="comment">
										<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
										<p class="tit">제1절 전기설비</p>
										<ul>
											<li class="comment"><a name="joMoveLink" href="#P36"
											                       onclick="law.goTarget('36')"><span>제36조</span> (전기방식)</a>
											</li>
											<li class="comment"><a name="joMoveLink" href="#P37"
											                       onclick="law.goTarget('37')"><span>제37조</span> (전선로)</a></li>
											<li class="comment"><a name="joMoveLink" href="#P38"
											                       onclick="law.goTarget('38')"><span>제38조</span> (전식방지대책)</a>
											</li>
											<li class="comment"><a name="joMoveLink" href="#P39"
											                       onclick="law.goTarget('39')"><span>제39조</span> </a></li>
											<li class="comment"><a name="joMoveLink" href="#P40"
											                       onclick="law.goTarget('40')"><span>제40조</span> (급전선의 차단)</a>
											</li>
											<li class="comment"><a name="joMoveLink" href="#P41"
											                       onclick="law.goTarget('41')"><span>제41조</span> (예비전원설비)</a>
											</li>
											<li class="comment"><a name="joMoveLink" href="#P42"
											                       onclick="law.goTarget('42')"><span>제42조</span> (전차선로)</a>
											</li>
											<li class="comment"><a name="joMoveLink" href="#P43"
											                       onclick="law.goTarget('43')"><span>제43조</span> (전차선의 기울기)</a>
											</li>
										</ul>
									</li>
									<li class="comment">
										<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
										<p class="tit">제2절 환기·배수 및 통신설비</p>
										<ul>
											<li class="comment"><a name="joMoveLink" href="#P44"
											                       onclick="law.goTarget('44')"><span>제44조</span> (환기설비)</a>
											</li>
											<li class="comment"><a name="joMoveLink" href="#P45"
											                       onclick="law.goTarget('45')"><span>제45조</span> (배수설비)</a>
											</li>
											<li class="comment"><a name="joMoveLink" href="#P46"
											                       onclick="law.goTarget('46')"><span>제46조</span> (통신설비의 설치
													등)</a></li>
										</ul>
									</li>
									<li class="comment">
										<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
										<p class="tit">제3절 신호ㆍ보안설비 등 [개정 2010.10.8]</p>
										<ul>
											<li class="comment"><a name="joMoveLink" href="#P47"
											                       onclick="law.goTarget('47')"><span>제47조</span> (본선 열차의 신호방식)</a>
											</li>
											<li class="comment"><a name="joMoveLink" href="#P48"
											                       onclick="law.goTarget('48')"><span>제48조</span> (신호장치 등의
													설치)</a></li>
											<li class="comment"><a name="joMoveLink" href="#P49"
											                       onclick="law.goTarget('49')"><span>제49조</span> (선로전환기와 신호장치와의
													연동)</a></li>
											<li class="comment"><a name="joMoveLink" href="#P50"
											                       onclick="law.goTarget('50')"><span>제50조</span> (보안장치)</a>
											</li>
											<li class="comment"><a name="joMoveLink" href="#P50X2"
											                       onclick="law.goTarget('50X2')"><span>제50조의2</span> (자동요금징수설비)</a>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li class="active_d1 open">
								<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
								<a href="#" class="tit">제5장 삭제 [2000·3·18]</a>
								<ul>
									<li class="comment">
										<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
										<p class="tit">제1절 삭제 [2000·3·18]</p>
										<ul>
											<li class="comment"><a name="joMoveLink" href="#P51"
											                       onclick="law.goTarget('51')"><span>제51조</span> </a></li>
											<li class="comment"><a name="joMoveLink" href="#P52"
											                       onclick="law.goTarget('52')"><span>제52조</span> </a></li>
											<li class="comment"><a name="joMoveLink" href="#P53"
											                       onclick="law.goTarget('53')"><span>제53조</span> </a></li>
										</ul>
									</li>
									<li class="comment">
										<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
										<p class="tit">제2절 삭제 [2000·3·18]</p>
										<ul>
											<li class="comment"><a name="joMoveLink" href="#P54"
											                       onclick="law.goTarget('54')"><span>제54조</span> </a></li>
											<li class="comment"><a name="joMoveLink" href="#P55"
											                       onclick="law.goTarget('55')"><span>제55조</span> </a></li>
											<li class="comment"><a name="joMoveLink" href="#P56"
											                       onclick="law.goTarget('56')"><span>제56조</span> </a></li>
										</ul>
									</li>
									<li class="comment">
										<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
										<p class="tit">제3절 삭제 [2000·3·18]</p>
										<ul>
											<li class="comment"><a name="joMoveLink" href="#P57"
											                       onclick="law.goTarget('57')"><span>제57조</span> </a></li>
											<li class="comment"><a name="joMoveLink" href="#P58"
											                       onclick="law.goTarget('58')"><span>제58조</span> </a></li>
											<li class="comment"><a name="joMoveLink" href="#P59"
											                       onclick="law.goTarget('59')"><span>제59조</span> </a></li>
											<li class="comment"><a name="joMoveLink" href="#P60"
											                       onclick="law.goTarget('60')"><span>제60조</span> </a></li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
				<div class="ct-left-btn">
					<button id="btn-left-close" class="btn-div" onclick="fn_content_left_close()"><span class="icon icon-double-left icon-w20"></span></button>
					<button id="btn-left-open" class="btn-div" onclick="fn_content_left_open()"><span class="icon icon-double-right icon-w20"></span></button>
				</div>
			</div>
		</div>
	</div>
	<div class="ct-right">
		<div class="ct-pt h-100p">
			<div class="ct-scroll">
				<div class="ct-pw">
					<div class="border-b">
						<div class="btn_group law_funtion_btn">
							<a href="javascript:law.goToRefView('L000216E9101A2AB_0_B');" class="btn w-100p">법규비교<span class="icon icon-w15 icon-out-box"></span></a>
						</div>
					</div>
					<div class="border-b">
						<div class="ct-popup-btn-group btn_group law_funtion_btn">
							<button id="revised-reasons-btn" class="btn" onclick="fn_ct_popup('revised-reasons')">제·개정이유</button>
							<button id="revised-sentence-btn" class="btn" onclick="fn_ct_popup('revised-sentence')">제·개정문</button>
							<button id="asterisk-form-btn" class="btn" onclick="fn_ct_popup('asterisk-form')">별표서식</button>
						</div>
					</div>
					<div class="border-b">
						<h3 class="ct-tit">담당부처 전화번호</h3>
						<ul class="ul-dot mt-10">
							<li>
								<div class="dot-cell">
									<p class="fs-14 c-blue">국토교통부(광역도시철도과), 044-201-3959</p>
								</div>
							</li>
						</ul>
					</div>
					<div class="border-b">
						<div class="str">
							<h3 class="ct-tit">법령체계도 총 1건</h3>
							<div class="str-rt"><a href="" class="btn-none btn-s">전체보기</a></div>
						</div>
						<div class="table_index tree mt-10">
							<ul class="regulation law_level">
								<li class="comment">
									<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
									<a href="/Info/ContentView?sid=L000009847" class="popup_view">철도의 건설 및 철도시설 유지관리에 관한
										법률</a>
									<ul>
										<li class="comment">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<a href="/Info/ContentView?sid=L000009988" class="popup_view">철도의 건설 및 철도시설
												유지관리에 관한
												법률 시행령</a>
											<ul>
												<li class="comment">
													<button class="tNavToggle minus"
													        onclick="fn_table_index(this)"></button>
													<a href="/Info/ContentView?sid=L000009994" class="popup_view">철도의 건설 및
														철도시설
														유지관리에 관한 법률 시행규칙</a>
													<ul>
														<li class="comment close"><a href="javascript:law.goToMapViewAll();"
														                             class="last_law"> 행정규칙 (3건) </a></li>
													</ul>
												</li>
												<li class="comment close"><a href="javascript:law.goToMapViewAll();"
												                             class="last_law"> 행정규칙 (3건) </a></li>
											</ul>
										</li>
										<li class="comment">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<a href="/Info/ContentView?sid=L000007101" class="popup_view">도시철도건설규칙</a>
											<ul>
												<li class="comment close"><a href="javascript:law.goToMapViewAll();"
												                             class="last_law"> 행정규칙 (2건) </a></li>
											</ul>
										</li>
										<li class="comment">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<a href="/Info/ContentView?sid=L000010015" class="popup_view">철도건설규칙</a>
											<ul>
												<li class="comment close"><a href="javascript:law.goToMapViewAll();"
												                             class="last_law"> 행정규칙 (1건) </a></li>
											</ul>
										</li>
										<li class="comment close"><a href="javascript:law.goToMapViewAll();"
										                             class="last_law">행정규칙 (3건) </a></li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="ct-center">
		<div class="ct-pt h-100p">
			<div class="str h-100p">
				<div class="ct-bg h-100p">
					<div class="ct-scroll ct-bg-pd">
						<div class="ct-title">
							<div class="dis-t w-100p">
								<div class="dis-tr">
									<div class="tit-div dis-tc">
										<h2 class="tit">부동산 가격공시 등의 수수료에 관한 기준</h2>
										<p class="tit-sub">국토교통부 고시 제2021-12호 일부개정 2021. 1. 6</p>
									</div>
								</div>
							</div>
						</div>
						<div class="case_info highlighter-context" id="view_content" style="">
							<!--?xml version="1.0" encoding="utf-16"?--><p class="dp1" name="P10001000">제1장 총칙 [개정
								2010.10.8]</p>
							<p id="foreTitle"><a id="P1" name="P1"> </a></p>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_1" class="popup_view">제1조</a></em>(목적)
								<div class="btn-group  " style="display:none;" id="R_1">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>이 규칙은 <a href="/Info/ContentView?sid=L000001751_18_20211103" class="popup_view">「도시철도법」
									제18조</a>에 따라 도시교통권역에
								건설하는 도시철도의 건설기준 등에 관하여 필요한 사항을 규정함을 목적으로 한다. [개정 <span class="miju_num addition_num"
								                                                       onclick="open_miju('2014f7f8_8045')">2014.7.8<div
											id="2014f7f8_8045" class="miju_box" style="display: none;"> </div></span> 제106호(<a
										href="/Info/ContentView?sid=L000010555_0_20211103" class="popup_view">도시철도법 시행규칙</a>)]<br>[전문개정
								<span
										class="miju_num addition_num" onclick="open_miju('2010f10f8_768');">2010.10.8<div
											id="2010f10f8_768"
											class="miju_box"
											style="display: none;"><div
												class="miju_box_line" onmouseout="close_miju('2010f10f8_768')">부칙 [2010.10.8 제290호]<br>이 규칙은 공포한 날부터 시행한다.<br></div></div></span>]<br>
							</div>
							<div id="I_1" style="display:none;" class="relative_law">_</div>
							<a id="P2" name="P2"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_2" class="popup_view">제2조</a></em>(정의)
								<div class="btn-group  " style="display:none;" id="R_2">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>이 규칙에서 사용하는 용어의 뜻은 다음과 같다. [개정 <span class="miju_num addition_num"
								                                         onclick="open_miju('T_lawTel_info');">2021.8.27<div
											id="2021f8f27_2048" class="miju_box miju_box_left" style="display: none;"><div
												class="miju_box_line"
												onmouseout="close_miju('2021f8f27_2048')">부 칙[2021.8.27 제882호(어려운 법령용어 정비를 위한 80개 국토교통부령 일부개정령)]<br>이 규칙은 공포한 날부터 시행한다. &lt;단서 생략&gt;<br></div></div></span>
								제882호(어려운 법령용어 정비를 위한 80개 국토교통부령 일부개정령)]<br>1. “궤간”이란 다음 각 목의 구분에 따른 궤도사이의 간격을 말한다.<br>가.
								철제차륜을 사용하는 도시철도차량(이하
								“차량”이라 한다)의 경우: 레일의 맨 위쪽 부분으로부터 14밀리미터 아래 지점에 위치한 양쪽 레일의 안쪽 간의 가장 짧은 거리<br>나. 고무차륜을 사용하는 차량의
								경우: 차륜 중심 간의 거리<br>다.
								자기부상추진방식을 사용하는 차량의 경우: 부상레일 중심 간의 거리<br>2. “본선(本線)”이란 열차의 운전에 상용(常用)되는 선로(정거장 안에 있는 대피선과
								반복운전선을 포함한다)를
								말한다.<br>3. “측선(側線)”이란 본선 외의 선로를 말한다.<br>4. “정거장”이란 승객이 열차(본선에서 운행할 목적으로 편성된 차량을 말한다. 이하
								같다)를 타고 내리는데 사용되는 장소를
								말한다.<br>5. “차량기지”란 차량을 유치·검수 및 정비 등을 하기 위하여 설치한 시설을 말한다.<br>6. “경량전철”이란 모노레일형식, 노면전차형식,
								철제차륜형식, 고무차륜형식,
								선형유도전동기형식, 자기부상추진형식 등으로 운행되고, 차량 최대 설계축하중 13.5톤 이하[분포하중(分布荷重)의 경우 단위 미터당 2.8톤 이하를 말한다]의
								전기철도를 말한다.<br>7.
								“제3레일”이란 전차선(電車線)의 한 종류로서 레일 또는 주행면과 평행하게 부설하여 차량의 옆면이나 밑면에서 차량에 전기를 공급하는 시설물을 말한다.<br>8.
								“제3레일방식”이란 제3레일을
								이용하여 차량에 전기를 공급하는 방식을 말한다.<br>[전문개정 <span class="miju_num addition_num"
								                                          onclick="open_miju('2010f10f8_2721')">2010.10.8<div
											id="2010f10f8_2721" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_2" style="" class="relative_law">
								<div id="J2_view" class="relative_law_view rules">_</div>
								<div class="detail_area">
									<div class="but" onclick="view.addBottomList('L000007101|2', 'L006','J2_view')">관련 행정규칙
										<i
												class="icon_open"> </i></div>
								</div>
							</div>
							<a id="P3" name="P3"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_3" class="popup_view">제3조</a></em>(선로의
								형식)
								<div class="btn-group  " style="display:none;" id="R_3">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>본선은 복선(複線)으로 한다. 다만, <a href="/Info/ContentView?sid=L000001751_6_20211103"
								                              class="popup_view">「도시철도법」
									제6조</a>에 따른 노선별 도시철도기본계획에서 정하는 특수한 구간에 대해서는 단선(單線)으로 할 수 있다. [개정 <span
										class="miju_num addition_num"
										onclick="open_miju('2014f7f8_4192')">2014.7.8<div
											id="2014f7f8_4192" class="miju_box" style="display: none;"> </div></span> 제106호(<a
										href="/Info/ContentView?sid=L000010555_0_20211103" class="popup_view">도시철도법 시행규칙</a>)]<br>[전문개정
								<span
										class="miju_num addition_num" onclick="open_miju('2010f10f8_8643')">2010.10.8<div
											id="2010f10f8_8643"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_3" style="display:none;" class="relative_law">_</div>
							<a id="P4" name="P4"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_4" class="popup_view">제4조</a></em>
								<div class="btn-group  " style="display:none;" id="R_4">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br> 삭제 [<span class="miju_num addition_num" onclick="open_miju('2004f12f4_7435')">2004.12.4<div
											id="2004f12f4_7435" class="miju_box" style="display: none;"> </div></span>]
								[[시행일 2005.3.4]]
							</div>
							<div id="I_4" style="display:none;" class="relative_law">_</div>
							<a id="P5" name="P5"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_5" class="popup_view">제5조</a></em>(열차의
								운전
								진로)
								<div class="btn-group  " style="display:none;" id="R_5">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>상행·하행 열차를 구별하여 운전하는 한 쌍의 선로의 경우 열차의 운전 진로는 오른쪽으로 한다. 다만, 국유철도와 직접 연결되는 선로의 경우에는 왼쪽으로 할 수
								있다.<br>[전문개정 <span
										class="miju_num addition_num" onclick="open_miju('2010f10f8_8566')">2010.10.8<div
											id="2010f10f8_8566"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_5" style="display:none;" class="relative_law">_</div>
							<p class="dp1" name="P10002000">제2장 선로 [개정 2010.10.8]</p>
							<p id="foreTitle"></p>
							<p class="dp1" name="P20001000">제1절 궤간 [개정 2010.10.8]</p>
							<p id="foreTitle"><a id="P6" name="P6"> </a></p>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_6" class="popup_view">제6조</a></em>(궤간)
								<div class="btn-group  " style="display:none;" id="R_6">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br> 궤간의 치수는 1천435밀리미터로 한다.
							</div>
							<div id="I_6" style="display:none;" class="relative_law">_</div>
							<a id="P7" name="P7"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_7" class="popup_view">제7조</a></em>(확대궤간)
								<div class="btn-group  " style="display:none;" id="R_7">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>① 선로가 곡선인 구간(이하 “곡선구간”라 한다)의 궤간에는 <a href="/Info/ContentView?sid=L000007101_6_20211103"
								                                         class="popup_view">제6조</a>에도
								불구하고 확대궤간을 두어야 한다.<br> ② 제1항에 따른 확대궤간은 곡선부분의 안쪽 레일에 두어야 하며, 그 치수는 25밀리미터를 초과하지 아니하는 범위에서 해당
								곡선의 반경 등을 고려하여
								특별시장·광역시장·도지사·특별자치도지사·시장 또는 군수(이하 “시·도지사등”이라 한다)가 정한다.<br>[전문개정 <span
										class="miju_num addition_num"
										onclick="open_miju('2010f10f8_2883')">2010.10.8<div
											id="2010f10f8_2883" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_7" style="display:none;" class="relative_law">_</div>
							<a id="P8" name="P8"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_8" class="popup_view">제8조</a></em>(확대궤간의
								체감거리)
								<div class="btn-group  " style="display:none;" id="R_8">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>① <a href="/Info/ContentView?sid=L000007101_7_20211103" class="popup_view">제7조</a>에 따른
								확대궤간은 선로가 나누어지는 지점(이하
								“분기부”라 한다)의 경우를 제외하고는 다음 각 호의 거리에서 체감(遞減)시켜야 한다.<br> 1. 완화곡선이 있는 경우: 그 곡선 전체의 거리<br> 2.
								완화곡선이 없는 경우: <a
										href="/Info/ContentView?sid=L000007101_12_20211103" class="popup_view">제12조</a>에 따른
								캔트의 체감거리(遞減距離)와
								같게 하되, 캔트를 두지 아니하는 경우에는 원곡선의 시작점·끝점으로부터 5미터 이상의 거리<br> ② 반경이 다른 같은 방향의 곡선이 접속하는 경우에는 반경이 큰
								곡선 안에서 확대궤간의 차를
								제1항제1호 및 제2호에 준하여 체감하여야 한다.<br>[전문개정 <span class="miju_num addition_num"
								                                           onclick="open_miju('2010f10f8_986')">2010.10.8<div
											id="2010f10f8_986" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_8" style="display:none;" class="relative_law">_</div>
							<a id="P9" name="P9"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_9" class="popup_view">제9조</a></em>(궤간의
								공차)
								<div class="btn-group  " style="display:none;" id="R_9">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>① 궤간에는 다음 각 호에서 정하는 공차(公差)를 허용한다.<br> 1. 크로싱의 경우: 증(增) 3밀리미터, 감(減) 2밀리미터<br> 2. 그 밖의
								경우: 증 10밀리미터, 감
								2밀리미터<br> ② 제1항에 따른 허용치에 확대궤간을 더한 치수는 30밀리미터를 초과해서는 아니 된다.<br>[전문개정 <span
										class="miju_num addition_num"
										onclick="open_miju('2010f10f8_4021')">2010.10.8<div
											id="2010f10f8_4021" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_9" style="display:none;" class="relative_law">_</div>
							<p class="dp1" name="P20002000">제2절 곡선 [개정 2010.10.8]</p>
							<p id="foreTitle"><a id="P10" name="P10"> </a></p>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_10" class="popup_view">제10조</a></em>(선로의
								곡선반경 등)
								<div class="btn-group  " style="display:none;" id="R_10">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>① 선로의 곡선반경은 선로의 구간 및 기능 등에 따라 그 크기를 다르게 할 수 있다.<br> ② 제1항에 따른 곡선반경의 크기는 시·도지사등이 정한다.<br>[전문개정
								<span
										class="miju_num addition_num" onclick="open_miju('2010f10f8_9590')">2010.10.8<div
											id="2010f10f8_9590"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_10" style="display:none;" class="relative_law">_</div>
							<a id="P11" name="P11"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_11" class="popup_view">제11조</a></em>(캔트)
								<div class="btn-group  " style="display:none;" id="R_11">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>① 곡선구간의 바깥쪽 레일에는 열차의 안전운행을 위하여 캔트(열차의 원심력에 의한 탈선이나 전복을 막기 위하여 바깥쪽 레일을 안쪽 레일보다 높게 부설하는 것을
								말한다. 이하 같다)를 두어야
								한다. 다만, 분기부에 연속되는 곡선의 경우에는 그러하지 아니하다.<br> ② 제1항에 따른 캔트의 크기는 해당 곡선의 반경, 열차의 운행속도 등을 고려하여
								시·도지사등이 정하되, 최대 160밀리미터를
								초과할 수 없다.<br>[전문개정 <span class="miju_num addition_num"
								                         onclick="open_miju('2010f10f8_6598')">2010.10.8<div
											id="2010f10f8_6598" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_11" style="display:none;" class="relative_law">_</div>
							<a id="P12" name="P12"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_12" class="popup_view">제12조</a></em>(캔트의
								체감거리)
								<div class="btn-group  " style="display:none;" id="R_12">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>캔트의 체감거리는 다음 각 호와 같다.<br> 1. 완화곡선이 있는 경우: 그 곡선 전체의 거리<br> 2. 완화곡선이 없는 경우: <a
										href="/Info/ContentView?sid=L000007101_11_20211103" class="popup_view">제11조제2항</a>에
								따른 캔트(이하 “표준캔트”로
								한다)의 600배 이상의 거리<br> 3. 복심(複心)곡선이 있는 경우: 반경이 큰 곡선상에서의 캔트 차의 600배 이상의 거리<br> 4. 제1호부터
								제3호까지의 경우로서 시·도지사등이 정하는
								부득이한 경우: 표준캔트의 450배 이상의 거리<br>[전문개정 <span class="miju_num addition_num"
								                                          onclick="open_miju('2010f10f8_2642')">2010.10.8<div
											id="2010f10f8_2642" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_12" style="display:none;" class="relative_law">_</div>
							<a id="P13" name="P13"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_13" class="popup_view">제13조</a></em>(완화곡선)
								<div class="btn-group  " style="display:none;" id="R_13">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>① 본선의 경우에 곡선반경이 800미터 이하인 곡선과 직선이 접속하는 곳에는 적절한 완화곡선을 삽입하여야 한다. 다만, 분기부에 연속되는 곡선인 경우에는
								그러하지 아니하다.<br> ② 제1항에
								따른 완화곡선의 길이는 표준캔트의 600배 이상으로 한다. 다만, 부득이한 경우에는 표준캔트의 450배까지 줄일 수 있다.<br>[전문개정 <span
										class="miju_num addition_num" onclick="open_miju('2010f10f8_871')">2010.10.8<div
											id="2010f10f8_871"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_13" style="display:none;" class="relative_law">_</div>
							<a id="P14" name="P14"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_14" class="popup_view">제14조</a></em>(직선의
								삽입
								등)
								<div class="btn-group  " style="display:none;" id="R_14">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>① 본선의 경우에 인접하여 두 개의 곡선이 있는 선로에는 캔트 체감 후에 20미터 이상의 직선을 삽입하여야 한다.<br> ② 제1항의 경우에 반대방향의 두
								개의 곡선인 선로가 인접되어 있는
								경우로서 지형상 직선을 삽입할 수 없는 부득이한 때에는 직선을 삽입하지 아니할 수 있으며, 같은 방향의 두 개의 곡선인 선로가 인접되어 있는 경우에는 시·도지사등이
								정하는 범위에서 복심곡선으로 할 수
								있다.<br> ③ 제1항 및 제2항에도 불구하고 분기부에 연속하는 경우와 측선의 경우로서 안전에 지장이 없는 경우에는 직선을 삽입하지 아니하거나 제2항의 기준과 다른
								복심곡선으로 할 수 있다.<br>[전문개정
								<span class="miju_num addition_num" onclick="open_miju('2010f10f8_7426')">2010.10.8<div
											id="2010f10f8_7426"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_14" style="display:none;" class="relative_law">_</div>
							<p class="dp1" name="P20003000">제3절 기울기</p>
							<p id="foreTitle"><a id="P15" name="P15"> </a></p>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_15" class="popup_view">제15조</a></em>(정거장
								밖의
								기울기한도)
								<div class="btn-group  " style="display:none;" id="R_15">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>① 정거장 밖의 지역에 있는 본선의 기울기는 1천분의 35를 초과해서는 아니 된다.<br> ② 곡선인 선로에 기울기를 두는 경우에는 제1항에 따른 한도에
								적절한 곡선보정을 한 기울기를 한도로
								한다.<br>[전문개정 <span class="miju_num addition_num" onclick="open_miju('2010f10f8_8064')">2010.10.8<div
											id="2010f10f8_8064" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_15" style="display:none;" class="relative_law">_</div>
							<a id="P16" name="P16"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_16" class="popup_view">제16조</a></em>(정거장
								안의
								기울기 한도)
								<div class="btn-group  " style="display:none;" id="R_16">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>정거장 안에 있는 본선의 기울기는 다음 각 호의 구분에 따른 한도를 초과해서는 아니 된다.<br> 1. 본선이 차량을 분리·연결 또는 유치하는 용도로 사용되는
								경우: 1천분의 3<br> 2.
								제1호 외의 경우: 1천분의 8(부득이한 경우에는 1천분의 10)<br>[전문개정 <span class="miju_num addition_num"
								                                                    onclick="open_miju('2010f10f8_5549')">2010.10.8<div
											id="2010f10f8_5549" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_16" style="display:none;" class="relative_law">_</div>
							<a id="P17" name="P17"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_17" class="popup_view">제17조</a></em>(측선의
								기울기)
								<div class="btn-group  " style="display:none;" id="R_17">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>측선의 기울기는 1천분의 3을 초과해서는 아니 된다. 다만, 차량을 유치하지 아니하는 측선의 경우에는 1천분의 45까지로 할 수 있다.<br>[전문개정
								<span
										class="miju_num addition_num" onclick="open_miju('2010f10f8_1674')">2010.10.8<div
											id="2010f10f8_1674"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_17" style="display:none;" class="relative_law">_</div>
							<a id="P18" name="P18"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_18" class="popup_view">제18조</a></em>(종곡선)
								<div class="btn-group  " style="display:none;" id="R_18">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>선로의 기울기가 변하는 경우로서 인접 기울기의 변화가 1천분의 5를 초과하는 경우에는 반경 3천미터 이상의 종곡선(從曲線)을 삽입하여야 한다.<br>[전문개정
								<span
										class="miju_num addition_num" onclick="open_miju('2010f10f8_2986')">2010.10.8<div
											id="2010f10f8_2986"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_18" style="display:none;" class="relative_law">_</div>
							<p class="dp1" name="P20004000">제4절 건축한계</p>
							<p id="foreTitle"><a id="P19" name="P19"> </a></p>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_19" class="popup_view">제19조</a></em>(건축한계)
								<div class="btn-group  " style="display:none;" id="R_19">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>도시철도에는 차량의 흔들림이나 선로의 비틀림 등을 고려하여 차량의 안전운행에 필요한 공간(이하 “건축한계”라 한다)을 두고 이에 건물이나 그 밖의 시설을
								설치해서는 아니 된다. 다만,
								가공전차선(架空電車線) 및 그 현수장치(懸垂裝置)와 선로 보수 등의 작업에 필요한 일시적인 시설로서 열차의 안전운행에 지장이 없는 경우에는 그러하지
								아니하다.<br>[전문개정 <span
										class="miju_num addition_num" onclick="open_miju('2010f10f8_8801')">2010.10.8<div
											id="2010f10f8_8801"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_19" style="display:none;" class="relative_law">_</div>
							<a id="P20" name="P20"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_20" class="popup_view">제20조</a></em>(직선구간의
								건축한계)
								<div class="btn-group  " style="display:none;" id="R_20">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>선로가 직선인 구간(이하 “직선구간”라 한다)의 건축한계는 시·도지사등이 정한다.<br>[전문개정 <span
										class="miju_num addition_num"
										onclick="open_miju('2010f10f8_3137')">2010.10.8<div
											id="2010f10f8_3137" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_20" style="display:none;" class="relative_law">_</div>
							<a id="P21" name="P21"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_21" class="popup_view">제21조</a></em>(곡선구간의
								건축한계)
								<div class="btn-group  " style="display:none;" id="R_21">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>① 곡선구간의 건축한계는 <a href="/Info/ContentView?sid=L000007101_11_20211103" class="popup_view">제11조제2항</a>에
								따른 캔트의
								크기에 따라 기울게 하여야 한다.<br> ② 제1항에 따른 곡선구간의 건축한계는 직선구간의 건축한계를 궤도중심의 각 측(側)에 일정한 치수 이상으로 확대한 것으로
								하되, 그 범위는 곡선반경 등을
								고려하여 시·도지사등이 정한다. 다만, 가공전차선 및 그 현수장치를 제외한 상부의 건축한계는 이에 따르지 아니할 수 있다.<br> ③ 제2항에 따른 확대치수는
								완화곡선에 따라 체감하여야 한다. 다만,
								완화곡선의 길이가 20미터 이하인 경우 또는 완화곡선이 없는 경우에는 원곡선 끝으로부터 20미터 이상의 거리에서 체감하여야 하며, 원곡선이 복심곡선인 경우 확대치수의
								차는 반경이 큰 곡선으로부터
								20미터 이상의 거리에서 체감하여야 한다.<br>[전문개정 <span class="miju_num addition_num"
								                                       onclick="open_miju('2010f10f8_5020')">2010.10.8<div
											id="2010f10f8_5020" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_21" style="display:none;" class="relative_law">_</div>
							<p class="dp1" name="P20005000">제5절 궤도 [개정 2010.10.8]</p>
							<p id="foreTitle"><a id="P22" name="P22"> </a></p>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_22" class="popup_view">제22조</a></em>(궤도의
								중심
								간격)
								<div class="btn-group  " style="display:none;" id="R_22">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>① 열차가 서로 반대방향으로 운행되는 본선 궤도의 경우에는 열차 및 승객 등의 안전을 위하여 궤도 간의 간격을 충분히 두어야 한다.<br> ② 제1항에 따른
								궤도의 간격은 해당 궤도의 지상부,
								지하부, 궤도 병설 수 및 차체규격 등을 고려하여 시·도지사등이 기준을 정한다. 이 경우 궤도 사이에 가공전차선 지주(支柱)나 신호기 지주 등을 설치하는 경우에는
								해당 부분만큼 궤도의 간격을
								확대하여야 한다.<br>[전문개정 <span class="miju_num addition_num" onclick="open_miju('2010f10f8_824')">2010.10.8<div
											id="2010f10f8_824" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_22" style="display:none;" class="relative_law">_</div>
							<a id="P23" name="P23"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_23" class="popup_view">제23조</a></em>(곡선인
								궤도의
								중심 간격)
								<div class="btn-group  " style="display:none;" id="R_23">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>곡선인 궤도의 중심 간격은 <a href="/Info/ContentView?sid=L000007101_21_20211103"
								                      class="popup_view">제21조제2항</a>에 따른 치수의
								두 배 이상으로 확대하여야 한다.<br>[전문개정 <span class="miju_num addition_num"
								                                  onclick="open_miju('2010f10f8_4520')">2010.10.8<div
											id="2010f10f8_4520" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_23" style="display:none;" class="relative_law">_</div>
							<a id="P24" name="P24"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_24" class="popup_view">제24조</a></em>(레일)
								<div class="btn-group  " style="display:none;" id="R_24">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>레일의 중량은 열차의 종류, 설계하중 및 통과톤수 등에 따라 시·도지사등이 정한다.<br>[전문개정 <span
										class="miju_num addition_num"
										onclick="open_miju('2010f10f8_8700')">2010.10.8<div
											id="2010f10f8_8700" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_24" style="display:none;" class="relative_law">_</div>
							<a id="P25" name="P25"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_25" class="popup_view">제25조</a></em>(도상의
								두께
								등)
								<div class="btn-group  " style="display:none;" id="R_25">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>① 도상[레일의 침목(枕木) 밑면부터 시공기면(施工基面)까지에 설치하는 콘크리트나 자갈 등을 말한다. 이하 같다]의 두께 및 너비의 기준은
								시·도지사등이 정하는 기준 이상으로 하여야
								한다. 다만, 기술상 또는 지형상 불가능한 경우로서 안전에 지장이 없다고 인정되는 경우에는 도상의 두께를 달리하거나 도상을 설치하지 아니할 수 있다.<br> ②
								시·도지사등은 제1항의 기준을 정할
								때에는 지상이나 지하의 필요 공간과 지반의 특성 등을 고려하되, 해당 도상을 자갈로 하는 경우와 콘크리트로 하는 경우를 구분하여 정할 수 있다.<br>[전문개정
								<span
										class="miju_num addition_num" onclick="open_miju('2010f10f8_2951')">2010.10.8<div
											id="2010f10f8_2951"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_25" style="display:none;" class="relative_law">_</div>
							<p class="dp1" name="P20006000">제6절 구조물</p>
							<p id="foreTitle"><a id="P26" name="P26"> </a></p>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_26" class="popup_view">제26조</a></em>(건축한계
								외의
								여유 공간)
								<div class="btn-group  " style="display:none;" id="R_26">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>구조물과 건축한계 사이에는 시·도지사등이 정하는 바에 따라 전기, 신호, 통신, 통로 또는 그 밖의 시설을 설치하는 데 필요한 여유 공간을 두어야
								한다.<br>[전문개정 <span
										class="miju_num addition_num" onclick="open_miju('2010f10f8_6980')">2010.10.8<div
											id="2010f10f8_6980"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_26" style="display:none;" class="relative_law">_</div>
							<a id="P27" name="P27"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_27" class="popup_view">제27조</a></em>(도로면
								등으로부터의 간격)
								<div class="btn-group  " style="display:none;" id="R_27">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>① 도로면과 지하구조물 윗면과의 사이 또는 도로면과 고가구조물 밑면과의 사이에는 안전 확보와 통신·배관 등 지하매설물이나 지상가설물의 설치 등에 필요한 일정
								기준 이상의 깊이 또는 높이를
								확보하여야 한다. 다만, 개구부(開口部) 등 지형상 부득이한 경우로서 안전에 지장이 없다고 인정되는 경우에는 그러하지 아니하다.<br> ② 제1항에 따른 깊이
								또는 높이의 기준은 지질 등을
								고려하여 시·도지사등이 정한다.<br> ③ 하천의 밑을 지나는 터널의 윗면과 하천의 계획준설면 사이에는 하천의 유지·관리 및 도시철도 시설물의 보호 등을 위하여
								시·도지사등이 정하는 기준 이상의 깊이를
								확보하여야 한다.<br>[전문개정 <span class="miju_num addition_num"
								                         onclick="open_miju('2010f10f8_7386')">2010.10.8<div
											id="2010f10f8_7386" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_27" style="display:none;" class="relative_law">_</div>
							<a id="P28" name="P28"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_28" class="popup_view">제28조</a></em>
								<div class="btn-group  " style="display:none;" id="R_28">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br> 삭제 [2000·3·18]
							</div>
							<div id="I_28" style="display:none;" class="relative_law">_</div>
							<p class="dp1" name="P20007000">제7절 분기 [개정 2010.10.8]</p>
							<p id="foreTitle"><a id="P29" name="P29"> </a></p>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_29" class="popup_view">제29조</a></em>(분기)
								<div class="btn-group  " style="display:none;" id="R_29">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>본선으로부터의 선로의 분기(分岐)는 정거장 안에서 하거나 신호소가 있는 곳에서 하여야 한다. 다만, 적절한 보안설비를 하는 경우에는 그러하지
								아니하다.<br>[전문개정 <span
										class="miju_num addition_num" onclick="open_miju('2010f10f8_9218')">2010.10.8<div
											id="2010f10f8_9218"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_29" style="display:none;" class="relative_law">_</div>
							<p class="dp1" name="P10003000">제3장 정거장</p>
							<p id="foreTitle"><a id="P30" name="P30"> </a></p>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_30" class="popup_view">제30조</a></em>(정거장의
								시설ㆍ설비)
								<div class="btn-group  " style="" id="R_30">
									<button type="button" class="btn btn-square"
									        onclick="law.changeRefIconType(''); view.addInfoLawList('L000007101|30', 'C000')">
										판례
									</button>
									<button type="button" class="btn btn-square"
									        onclick="law.changeRefIconType(''); view.addInfoLawList('L000007101|30', 'C000')">
										문헌
									</button>
								</div>
								<br>정거장에는 승강장·대합실·화장실 및 통로 등 승객의 도시철도 이용에 필요한 시설과 전기·통신설비 등을 설치하여야 하며, 이에 필요한 세부적인 사항은
								국토교통부장관이 정하여 고시한다. [개정
								<span class="miju_num addition_num" onclick="open_miju('2013f3f23_4595')">2013.3.23<div
											id="2013f3f23_4595"
											class="miju_box"
											style="display: none;"> </div></span>
								제1호(<a href="/Info/ContentView?sid=L000011804_0_20211103" class="popup_view">국토교통부와 그 소속기관
									직제 시행규칙</a>)]<br>[전문개정
								<span class="miju_num addition_num" onclick="open_miju('2010f10f8_2251')">2010.10.8<div
											id="2010f10f8_2251"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_30" style="" class="relative_law">
								<div id="J30_view" class="relative_law_view rules">_</div>
								<div class="detail_area">
									<div class="but" onclick="view.addBottomList('L000007101|30', 'L006','J30_view')">관련
										행정규칙 <i
												class="icon_open"> </i></div>
								</div>
							</div>
							<a id="P30X2" name="P30X2"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_30X2"
							                           class="popup_view">제30조의2</a></em>(승강장의
								안전시설)
								<div class="btn-group  " style="" id="R_30X2">
									<button type="button" class="btn btn-square"
									        onclick="law.changeRefIconType(''); view.addInfoLawList('L000007101|30X2', 'C000')">
										판례
									</button>
								</div>
								<br>① 승강장에는 승객의 안전사고를 방지하기 위하여 다음 각 호의 어느 하나에 해당하는 안전시설을 설치해야 한다. [개정 <span
										class="miju_num addition_num"
										onclick="open_miju('2021f8f27_9308')">2021.8.27<div
											id="2021f8f27_9308" class="miju_box" style="display: none;"> </div></span>
								제882호(어려운 법령용어 정비를 위한 80개
								국토교통부령 일부개정령)]<br>1. 안전울타리<br>2. 전동차 출입문과 연동되어 열리고 닫히는 승하차용 출입문 설비(이하 “스크린도어”라 한다)<br>②
								스크린도어는 다음 각 호의 기준에 적합하게
								설치하여야 한다.<br>1. 승객이 전동차와 스크린도어 사이에 끼는 것을 방지할 수 있도록 승강장의 연단으로부터 스크린도어의 출입문까지의 거리를 최소로 할 것<br>2.
								제1호에 따른 조치에도 불구하고
								승객이 전동차와 스크린도어 사이에 끼는 경우에 대비할 수 있도록 승객의 끼임을 감지하여 승무원과 역무원에게 인지시킬 수 있는 경보장치를 설치할 것<br>3.
								스크린도어의 재질은 <a
										href="/Info/ContentView?sid=L000007104_10_20211103" class="popup_view">「도시철도차량 안전기준에
									관한 규칙」 제10조제1항</a>에
								따른 불연재료 또는 같은 조 제3항에 따른 재료를 사용할 것<br>4. 화재 발생 등 비상 상황이 발생하는 경우 손으로 출입문을 열 수 있도록 할 것<br>5.
								승강장의 구조와 승강장의 바닥구조물의
								강도를 고려하여 설치할 것<br>③ 차량과 승강장 연단의 간격이 10센티미터가 넘는 부분에는 안전발판 등 승객의 실족사고를 방지하는 설비를 설치하여야 한다.<br>[전문개정
								<span
										class="miju_num addition_num" onclick="open_miju('2010f10f8_78')">2010.10.8<div
											id="2010f10f8_78"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_30X2" style="display:none;" class="relative_law">_</div>
							<a id="P30X3" name="P30X3"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_30X3"
							                           class="popup_view">제30조의3</a></em>(정거장
								간의 거리)
								<div class="btn-group  " style="display:none;" id="R_30X3">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>도시철도의 정거장 간 거리는 1킬로미터 이상으로 하되, 교통수요·경제성·지형여건 및 다른 교통수단과의 연계성 등을 종합적으로 고려하여 조정할 수 있다.<br>[전문개정
								<span
										class="miju_num addition_num" onclick="open_miju('2010f10f8_9284')">2010.10.8<div
											id="2010f10f8_9284"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_30X3" style="display:none;" class="relative_law">_</div>
							<a id="P31" name="P31"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_31" class="popup_view">제31조</a></em>(승강장의
								너비
								등)
								<div class="btn-group  " style="display:none;" id="R_31">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>① 승강장의 너비는 다음 각 호의 기준에 따른다. 다만, 승객의 이용이 적은 승강장의 양 끝 지역이나 승강장의 구조 등을 고려하여 국토교통부장관이 고시하는
								경우에는 승강장의 너비를 다음 각 호의
								기준보다 좁게 할 수 있다. [개정 <span class="miju_num addition_num"
								                          onclick="open_miju('2021f11f3_7633')">2021.11.3<div
											id="2021f11f3_7633" class="miju_box" style="display: none;"> </div></span>]<br>1.
								본선과 본선 사이에 설치된
								승강장의 경우: 8미터 이상<br>2. 본선의 양옆에 설치된 승강장의 경우: 4미터 이상<br>② 승강장의 연단으로부터 너비 1.5미터, 높이 2미터 이내에는 승객의
								실족·추락 방지시설, 대피시설 등
								안전시설만을 설치할 수 있다. 다만, 시·도지사등은 해당 승강장의 여건상 불가피하다고 인정되는 경우에는 기둥이나 계단 또는 <a
										href="/Info/ContentView?sid=L000004066_3_20211103" class="popup_view">「승강기 안전관리법
									시행령」 제3조</a>에 따른 승강기를
								설치하게 할 수 있다. [개정 <span class="miju_num addition_num" onclick="open_miju('2021f11f3_2240')">2021.11.3<div
											id="2021f11f3_2240" class="miju_box" style="display: none;"> </div></span>]<br>③
								삭제 [<span
										class="miju_num addition_num" onclick="open_miju('2021f11f3_2598')">2021.11.3<div
											id="2021f11f3_2598"
											class="miju_box"
											style="display: none;"> </div></span>]<br>[전문개정
								<span class="miju_num addition_num" onclick="open_miju('2010f10f8_4560')">2010.10.8<div
											id="2010f10f8_4560"
											class="miju_box"
											style="display: none;"> </div></span>]<br>[본조제목개정
								<span class="miju_num addition_num" onclick="open_miju('2021f11f3_4122')">2021.11.3<div
											id="2021f11f3_4122"
											class="miju_box"
											style="display: none;"> </div></span>]
							</div>
							<div id="I_31" style="display:none;" class="relative_law">_</div>
							<a id="P32" name="P32"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_32" class="popup_view">제32조</a></em>(승강장
								연단의
								높이)
								<div class="btn-group  " style="display:none;" id="R_32">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>승강장의 연단은 레일의 윗면으로부터 1.135미터 높이에 설치하는 것을 표준으로 한다.<br>[전문개정 <span
										class="miju_num addition_num"
										onclick="open_miju('2010f10f8_4665')">2010.10.8<div
											id="2010f10f8_4665" class="miju_box" style="display: none;"> </div></span>]
							</div>
							<div id="I_32" style="display:none;" class="relative_law">_</div>
							<a id="P33" name="P33"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_33" class="popup_view">제33조</a></em>(승강장
								연단과
								차량한계와의 간격)
								<div class="btn-group  " style="display:none;" id="R_33">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>① 승강장의 연단은 <a href="/Info/ContentView?sid=L000007101_51_20211103" class="popup_view">제51조</a>에
								따른 차량한계로부터
								50밀리미터의 간격을 두고 설치하여야 한다.<br> ② 선로가 곡선으로 되어 있는 승강장은 제1항에 따른 간격에 <a
										href="/Info/ContentView?sid=L000007101_21_20211103" class="popup_view">제21조제2항</a>에
								따른 치수를 더하여 설치하여야 한다.<br>[전문개정
								<span class="miju_num addition_num" onclick="open_miju('2010f10f8_2456')">2010.10.8<div
											id="2010f10f8_2456"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_33" style="display:none;" class="relative_law">_</div>
							<a id="P34" name="P34"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_34" class="popup_view">제34조</a></em>(승강장의
								길이
								및 통로의 폭)
								<div class="btn-group  " style="display:none;" id="R_34">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>승강장의 유효길이 및 통로의 폭은 해당 노선의 수송수요 및 운전계획 등을 고려하여 정하되, 이에 필요한 세부적인 사항은 국토교통부장관이 정하여 고시한다.
								[개정 <span
										class="miju_num addition_num" onclick="open_miju('2013f3f23_510')">2013.3.23<div
											id="2013f3f23_510"
											class="miju_box"
											style="display: none;"> </div></span>
								제1호(<a href="/Info/ContentView?sid=L000011804_0_20211103" class="popup_view">국토교통부와 그 소속기관
									직제 시행규칙</a>)]<br>[전문개정
								<span class="miju_num addition_num" onclick="open_miju('2010f10f8_3903')">2010.10.8<div
											id="2010f10f8_3903"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_34" style="display:none;" class="relative_law">_</div>
							<a id="P35" name="P35"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_35" class="popup_view">제35조</a></em>(노면
								출입구
								및 지상보행로)
								<div class="btn-group  " style="display:none;" id="R_35">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>노면 출입구를 지상보도에 설치하는 경우에는 해당 출입구를 제외한 지상보행로의 폭이 2미터 이상이 되도록 하여야 한다.<br>[전문개정 <span
										class="miju_num addition_num" onclick="open_miju('2010f10f8_6343')">2010.10.8<div
											id="2010f10f8_6343"
											class="miju_box"
											style="display: none;"> </div></span>]
							</div>
							<div id="I_35" style="display:none;" class="relative_law">_</div>
							<a id="P35X2" name="P35X2"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_35X2"
							                           class="popup_view">제35조의2</a></em>(특별피난계단)
								<div class="btn-group  " style="display:none;" id="R_35X2">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>① 지하 3층 이하의 승강장에는 비상시 승객이 쉽게 대피할 수 있도록 승강장과 지상을 계단으로 직접 연결한 별도의 비상계단(이하 “특별피난계단”이라 한다)을
								설치하되, 본선과 본선 사이에 설치된
								승강장에는 한 군데 이상, 본선의 양옆에 설치된 승강장에는 승강장별로 한 군데 이상을 설치하여야 한다.<br> ② 제1항에 따라 특별피난계단을 설치하는 경우 <a
										href="/Info/ContentView?sid=L000007101_69_20211103" class="popup_view">제69조</a>에 따른
								유도등과 <a
										href="/Info/ContentView?sid=L000007101_70_20211103" class="popup_view">제70조</a>에 따른
								비상조명등을 각각 설치하여야
								한다.<br>[전문개정 <span class="miju_num addition_num" onclick="open_miju('2010f10f8_810')">2010.10.8<div
											id="2010f10f8_810" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_35X2" style="display:none;" class="relative_law">_</div>
							<a id="P35X3" name="P35X3"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_35X3"
							                           class="popup_view">제35조의3</a></em>(정거장의
								구조물 등의 마감재료)
								<div class="btn-group  " style="display:none;" id="R_35X3">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>① 정거장의 각 구조물 등에 사용되는 마감재료 등은 다음 각 호의 기준을 따른다.<br> 1. 승강장 및 대합실에 사용되는 마감재료는 <a
										href="/Info/ContentView?sid=L000002118_2_20211103" class="popup_view">「건축법 시행령」
									제2조제10호</a>에 따른 불연재료(이하
								이 조에서 “불연재료”라 한다)를 사용하여야 한다. 다만, 냉방장치 등 기계설비가 설치된 장소의 바닥에 사용되는 마감재료는 불연재료를 사용하지 아니할 수
								있다.<br> 2. 복도·계단 및 통로에
								사용되는 마감재료는 불연재료를 사용하여야 한다.<br> 3. 조립식 칸막이의 외부에 사용되는 마감재료는 불연재료를 사용하여야 하며, 조립식 칸막이의 내부에 사용되는
								재료는 불연재료 또는 <a
										href="/Info/ContentView?sid=L000002118_2_20211103" class="popup_view">「건축법 시행령」
									제2조제11호</a>에 따른 준불연재료(이하
								이 조에서 “준불연재료”라 한다)를 사용하여야 한다.<br> 4. 실내장식물은 불연재료·준불연재료 또는 <a
										href="/Info/ContentView?sid=L000009503_12_20211103"
										class="popup_view">「소방시설 설치유지 및 안전관리에 관한 법률」
									제12조제1항</a>에 따른 물품을 사용하여야 한다.<br> 5. 가판대·안내소·공중전화부스 등의 편의시설에 사용되는 마감재료는 불연재료를 사용하여야
								한다.<br> ② 제1항에 따른 마감재료는
								정거장 구조물의 균열·누수 또는 노후화를 쉽게 점검할 수 있도록 적절한 방법에 따라 설치하여야 한다.<br>[전문개정 <span
										class="miju_num addition_num"
										onclick="open_miju('2010f10f8_4929')">2010.10.8<div
											id="2010f10f8_4929" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_35X3" style="display:none;" class="relative_law">_</div>
							<p class="dp1" name="P10004000">제4장 설비 [개정 2010.10.8]</p>
							<p id="foreTitle"></p>
							<p class="dp1" name="P20001000">제1절 전기설비</p>
							<p id="foreTitle"><a id="P36" name="P36"> </a></p>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_36" class="popup_view">제36조</a></em>(전기방식)
								<div class="btn-group  " style="display:none;" id="R_36">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>선로에 공급하는 전압 및 전기방식은 다음 각 호에서 정하는 바에 따르되, 전력은 해당 도시철도를 관할하는 도시철도 변전소로부터 공급받는 것을 원칙으로
								한다.<br> 1. 전차선로: 직류
								1천500볼트 가공선식(架空線式)<br> 2. 고압배전선: 교류 3상 6천600볼트, 2만2천볼트 또는 2만2천900볼트<br> 3. 선로 안의 조명 및
								동력시설: 교류 단상(單相)
								220볼트 또는 3상 380볼트<br> 4. 신호용 배전선: 교류 100볼트 이상 400볼트 이하<br>[전문개정 <span
										class="miju_num addition_num"
										onclick="open_miju('2010f10f8_4003')">2010.10.8<div
											id="2010f10f8_4003" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_36" style="display:none;" class="relative_law">_</div>
							<a id="P37" name="P37"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_37" class="popup_view">제37조</a></em>(전선로)
								<div class="btn-group  " style="display:none;" id="R_37">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>① 조명 및 동력용 고압배전선은 2회선 이상으로 하여야 한다.<br> ② 지상부 전차선은 별도의 급전선(給電線)을 설치하여 구간별로 전기를 공급하여야
								하고, 지하부 전차선은
								강체전차선(剛體電車線) 또는 커티너리 조가선(弔架線)이 급전선을 겸하도록 하여야 한다. 다만, 제3레일방식의 경우에는 제3레일이 급전선을 겸하도록
								하여야 한다.<br>[전문개정 <span
										class="miju_num addition_num" onclick="open_miju('2010f10f8_2381')">2010.10.8<div
											id="2010f10f8_2381"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_37" style="display:none;" class="relative_law">_</div>
							<a id="P38" name="P38"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_38" class="popup_view">제38조</a></em>(전식방지대책)
								<div class="btn-group  " style="display:none;" id="R_38">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>주행레일을 귀선(歸線)으로 이용하는 경우에는 누설전류에 의하여 케이블, 금속제 지중관로 및 선로 구조물 등에 미칠 장애를 방지하기 위한 적절한 시설을
								설치하여야 한다.<br>[전문개정
								<span class="miju_num addition_num" onclick="open_miju('2010f10f8_1440')">2010.10.8<div
											id="2010f10f8_1440"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_38" style="display:none;" class="relative_law">_</div>
							<a id="P39" name="P39"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_39" class="popup_view">제39조</a></em>
								<div class="btn-group  " style="display:none;" id="R_39">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br> 삭제 [<span class="miju_num addition_num" onclick="open_miju('2004f12f4_6711')">2004.12.4<div
											id="2004f12f4_6711" class="miju_box" style="display: none;"> </div></span>]
								[[시행일 2005.3.4]]
							</div>
							<div id="I_39" style="display:none;" class="relative_law">_</div>
							<a id="P40" name="P40"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_40" class="popup_view">제40조</a></em>(급전선의
								차단)
								<div class="btn-group  " style="display:none;" id="R_40">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>급전선에 설치하는 자동차단설비는 사고 등의 비상시에 신속히 사고전류를 검지하여 전원을 차단할 수 있어야 한다.<br>[전문개정 <span
										class="miju_num addition_num"
										onclick="open_miju('2010f10f8_3451')">2010.10.8<div
											id="2010f10f8_3451" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_40" style="display:none;" class="relative_law">_</div>
							<a id="P41" name="P41"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_41" class="popup_view">제41조</a></em>(예비전원설비)
								<div class="btn-group  " style="display:none;" id="R_41">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>지하선로에는 예비전원설비 또는 2중계 이상의 공급선로를 설치하여야 한다.<br>[전문개정 <span class="miju_num addition_num"
								                                                            onclick="open_miju('2010f10f8_5636')">2010.10.8<div
											id="2010f10f8_5636" class="miju_box" style="display: none;"> </div></span>]
							</div>
							<div id="I_41" style="display:none;" class="relative_law">_</div>
							<a id="P42" name="P42"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_42" class="popup_view">제42조</a></em>(전차선로)
								<div class="btn-group  " style="display:none;" id="R_42">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>① 전차선의 가선방식, 레일 윗면으로부터의 높이 및 편차에 관한 사항은 열차의 종류, 전차선의 설치장소 및 지역 여건 등을 고려하여 시·도지사등이
								정한다.<br> ② 전차선은 본선과 측선과의
								경계지점, 변전소 부근 등 보안 및 운전에 필요한 곳에서는 전기 공급이 자동으로 차단될 수 있도록 급단전(給斷電) 설비를 갖추어야 한다.<br> ③ 전차선이
								제3레일방식인 경우에는
								승강장·궤도·차량기지 등에 승객·승무원·역무원·보수점검원 등이 고압에 감전되는 위험을 최소화할 수 있도록 적절한 설비를 갖추어야 한다.<br>[전문개정 <span
										class="miju_num addition_num" onclick="open_miju('2010f10f8_8192')">2010.10.8<div
											id="2010f10f8_8192"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_42" style="display:none;" class="relative_law">_</div>
							<a id="P43" name="P43"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_43" class="popup_view">제43조</a></em>(전차선의
								기울기)
								<div class="btn-group  " style="display:none;" id="R_43">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>가공전차선의 레일면에 대한 기울기는 본선의 경우에는 1천분의 3 이하로 하고, 측선의 경우에는 1천분의 10 이하로 하여야 한다. 다만, 지형상 부득이한 경우
								본선의 경우에는 1천분의 5 이하로
								할 수 있고, 측선의 경우에는 1천분의 15 이하로 할 수 있다.<br>[전문개정 <span class="miju_num addition_num"
								                                                    onclick="open_miju('2010f10f8_5978')">2010.10.8<div
											id="2010f10f8_5978" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_43" style="display:none;" class="relative_law">_</div>
							<p class="dp1" name="P20002000">제2절 환기·배수 및 통신설비</p>
							<p id="foreTitle"><a id="P44" name="P44"> </a></p>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_44" class="popup_view">제44조</a></em>(환기설비)
								<div class="btn-group  " style="display:none;" id="R_44">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>지하선로에는 지하 공간의 크기, 도시철도의 운행계획, 이용객의 편익 등을 고려하여 적절한 환기설비를 하여야 한다.<br>[전문개정 <span
										class="miju_num addition_num"
										onclick="open_miju('2010f10f8_1923')">2010.10.8<div
											id="2010f10f8_1923" class="miju_box" style="display: none;"> </div></span>]
							</div>
							<div id="I_44" style="display:none;" class="relative_law">_</div>
							<a id="P45" name="P45"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_45" class="popup_view">제45조</a></em>(배수설비)
								<div class="btn-group  " style="display:none;" id="R_45">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br> 선로에는 적절한 배수설비를 하여야 한다.
							</div>
							<div id="I_45" style="display:none;" class="relative_law">_</div>
							<a id="P46" name="P46"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_46" class="popup_view">제46조</a></em>(통신설비의
								설치 등)
								<div class="btn-group  " style="display:none;" id="R_46">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>① 통신설비는 열차의 운행과 시설물의 운용 및 유지·관리에 지장이 없도록 설치하여야 한다.<br> ② 무선통신설비는 승무원·역무원·보수원 및 관제 업무에
								종사하는 사람 등 도시철도 관련 업무에
								종사하는 사람 간에 양방향 통신을 할 수 있고, 도시철도 관련 업무에 종사하는 사람과 경찰서·소방서·의료기관 등 외부 재난 관련 기관과도 양방향 통신을 할 수 있도록
								설치하여야 한다.<br> ③
								관제실과 역무실에는 승강장, 대합실 등의 안전이 취약한 장소의 상황을 화상을 통하여 실시간으로 감시할 수 있는 설비를 설치하여야 한다.<br> ④ 역무실에는
								화재경보가 감지된 지역을 화상으로 나타낼 수
								있는 설비를 설치하여야 한다.<br> ⑤ 운전실에는 차량이 승강장에 진입하여 정차한 후 출발할 때까지의 승강장 상황을 화상을 통하여 실시간으로 감시할 수 있는 설비를
								설치하여야 한다. 다만, 역사
								전체에 스크린도어가 설치되어 있거나 <a href="/Info/ContentView?sid=L000007102_3_20211103"
								                       class="popup_view">「도시철도운전규칙」
									제3조제11호</a>에 따른 무인운전을 적용하는 경우에는 그러하지 아니하다.<br> ⑥ 승강장에는 승객이 역무실과 양방향 통화를 할 수 있는 비상통신장치를
								승강장의 바닥에서 1.5미터 높이로 세
								군데 이상의 장소에 분산하여 설치하여야 한다.<br> ⑦ 제2항에 따른 무선통신설비를 이용한 음성통화 내용은 녹음장치에 녹음하여 1개월 이상 보관하고, 제3항에 따른
								화상기록은 녹화장치에 녹화하여
								1주일 이상 보관하여야 한다.<br>[전문개정 <span class="miju_num addition_num"
								                                onclick="open_miju('2010f10f8_7236')">2010.10.8<div
											id="2010f10f8_7236" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_46" style="display:none;" class="relative_law">_</div>
							<p class="dp1" name="P20003000">제3절 신호ㆍ보안설비 등 [개정 2010.10.8]</p>
							<p id="foreTitle"><a id="P47" name="P47"> </a></p>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_47" class="popup_view">제47조</a></em>(본선
								열차의
								신호방식)
								<div class="btn-group  " style="display:none;" id="R_47">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>① 본선을 운행하는 열차의 신호는 차내신호방식을 원칙으로 한다. 다만, 지상신호기가 설치되어 있는 선로·출발역 및 차량기지 등의 특수한 경우에는
								지상신호방식으로 할 수 있다.<br> ② 제1항에
								따라 신호방식을 차내신호방식으로 하는 경우에도 정거장의 출발지역이나 역 간의 폐색구간 등 필요한 지역에 대해서는 신호표지를 설치할 수 있다.<br>[전문개정
								<span
										class="miju_num addition_num" onclick="open_miju('2010f10f8_8793')">2010.10.8<div
											id="2010f10f8_8793"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_47" style="display:none;" class="relative_law">_</div>
							<a id="P48" name="P48"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_48" class="popup_view">제48조</a></em>(신호장치
								등의
								설치)
								<div class="btn-group  " style="display:none;" id="R_48">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>분기부가 설치된 정거장이나 차량기지 등에는 차량의 입환(入換)에 필요한 신호장치와 진로표지를 설치하여야 한다.<br>[전문개정 <span
										class="miju_num addition_num"
										onclick="open_miju('2010f10f8_4411')">2010.10.8<div
											id="2010f10f8_4411" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_48" style="display:none;" class="relative_law">_</div>
							<a id="P49" name="P49"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_49" class="popup_view">제49조</a></em>(선로전환기와
								신호장치와의 연동)
								<div class="btn-group  " style="display:none;" id="R_49">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>선로의 진로를 변경시키는 선로전환기와 열차의 진행방향을 안내하는 신호장치는 서로 연동되도록 설치하여야 한다.<br>[전문개정 <span
										class="miju_num addition_num"
										onclick="open_miju('2010f10f8_4984')">2010.10.8<div
											id="2010f10f8_4984" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_49" style="display:none;" class="relative_law">_</div>
							<a id="P50" name="P50"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_50" class="popup_view">제50조</a></em>(보안장치)
								<div class="btn-group  " style="display:none;" id="R_50">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>선로에는 신호장치와 연동하여 자동으로 열차를 제어하거나 정지시킬 수 있는 보안장치를 설치하여야 한다. 다만, 측선의 경우에는 설치하지 아니할 수 있다.<br>[전문개정
								<span
										class="miju_num addition_num" onclick="open_miju('2010f10f8_5825')">2010.10.8<div
											id="2010f10f8_5825"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_50" style="display:none;" class="relative_law">_</div>
							<a id="P50X2" name="P50X2"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_50X2"
							                           class="popup_view">제50조의2</a></em>(자동요금징수설비)
								<div class="btn-group  " style="display:none;" id="R_50X2">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>자동요금징수설비를 설치하는 경우에는 전자교통카드 및 승차권의 매표·개집표(開集票)·회계·통계 등의 요금징수 업무를 전산화하여 처리하고, 연계된
								교통수단과의 환승 시 관련 요금의 정산이
								가능하도록 설치하여야 한다.<br>[본조신설 <span class="miju_num addition_num"
								                               onclick="open_miju('2010f10f8_1303')">2010.10.8<div
											id="2010f10f8_1303" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_50X2" style="display:none;" class="relative_law">_</div>
							<p class="dp1" name="P10005000">제5장 삭제 [2000·3·18]</p>
							<p id="foreTitle"></p>
							<p class="dp1" name="P20001000">제1절 삭제 [2000·3·18]</p>
							<p id="foreTitle"><a id="P51" name="P51"> </a></p>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_51" class="popup_view">제51조</a></em>
								<div class="btn-group  " style="display:none;" id="R_51">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>삭제 [2000·3·18]
							</div>
							<div id="I_51" style="display:none;" class="relative_law">_</div>
							<a id="P52" name="P52"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_52" class="popup_view">제52조</a></em>
								<div class="btn-group  " style="display:none;" id="R_52">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>삭제 [2000·3·18]
							</div>
							<div id="I_52" style="display:none;" class="relative_law">_</div>
							<a id="P53" name="P53"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_53" class="popup_view">제53조</a></em>
								<div class="btn-group  " style="display:none;" id="R_53">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>삭제 [2000·3·18]
							</div>
							<div id="I_53" style="display:none;" class="relative_law">_</div>
							<p class="dp1" name="P20002000">제2절 삭제 [2000·3·18]</p>
							<p id="foreTitle"><a id="P54" name="P54"> </a></p>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_54" class="popup_view">제54조</a></em>
								<div class="btn-group  " style="display:none;" id="R_54">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>삭제 [2000·3·18]
							</div>
							<div id="I_54" style="display:none;" class="relative_law">_</div>
							<a id="P55" name="P55"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_55" class="popup_view">제55조</a></em>
								<div class="btn-group  " style="display:none;" id="R_55">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>삭제 [2000·3·18]
							</div>
							<div id="I_55" style="display:none;" class="relative_law">_</div>
							<a id="P56" name="P56"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_56" class="popup_view">제56조</a></em>
								<div class="btn-group  " style="display:none;" id="R_56">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>삭제 [2000·3·18]
							</div>
							<div id="I_56" style="display:none;" class="relative_law">_</div>
							<p class="dp1" name="P20003000">제3절 삭제 [2000·3·18]</p>
							<p id="foreTitle"><a id="P57" name="P57"> </a></p>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_57" class="popup_view">제57조</a></em>
								<div class="btn-group  " style="display:none;" id="R_57">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>삭제 [2000·3·18]
							</div>
							<div id="I_57" style="display:none;" class="relative_law">_</div>
							<a id="P58" name="P58"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_58" class="popup_view">제58조</a></em>
								<div class="btn-group  " style="display:none;" id="R_58">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>삭제 [2000·3·18]
							</div>
							<div id="I_58" style="display:none;" class="relative_law">_</div>
							<a id="P59" name="P59"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_59" class="popup_view">제59조</a></em>
								<div class="btn-group  " style="display:none;" id="R_59">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>삭제 [2000·3·18]
							</div>
							<div id="I_59" style="display:none;" class="relative_law">_</div>
							<a id="P60" name="P60"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_60" class="popup_view">제60조</a></em>
								<div class="btn-group  " style="display:none;" id="R_60">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>삭제 [2000·3·18]
							</div>
							<div id="I_60" style="display:none;" class="relative_law">_</div>
							<p class="dp1" name="P10006000">제6장 선로표지 등의 안전설비</p>
							<p id="foreTitle"><a id="P61" name="P61"> </a></p>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_61" class="popup_view">제61조</a></em>(선로의
								표지)
								<div class="btn-group  " style="display:none;" id="R_61">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>선로에는 다음 각 호의 표지를 설치하여야 한다.<br> 1. 100미터 구간마다 그 거리를 표시하는 표지<br> 2. 기울기가 변경되는 장소에는 그 기울기를
								표시하는 표지<br> 3. 분기부에는
								차량의 접속한계를 표시하는 표지<br> 4. 곡선의 반경 및 시작점·끝점과 완화곡선의 시작점·끝점을 표시하는 표지<br> 5. 열차속도를 제한하거나 그 밖에 전기 및
								열차의 운행상 특히 주의하여야 할
								곳에는 이를 표시하는 표지<br> 6. 정거장의 중심을 표시하는 표지<br>[전문개정 <span class="miju_num addition_num"
								                                                      onclick="open_miju('2010f10f8_8280')">2010.10.8<div
											id="2010f10f8_8280" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_61" style="display:none;" class="relative_law">_</div>
							<a id="P62" name="P62"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_62" class="popup_view">제62조</a></em>(차막이시설)
								<div class="btn-group  " style="display:none;" id="R_62">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br> 선로의 종점에는 차막이시설을 설치하여야 한다.
							</div>
							<div id="I_62" style="display:none;" class="relative_law">_</div>
							<a id="P63" name="P63"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_63" class="popup_view">제63조</a></em>(대피시설)
								<div class="btn-group  " style="display:none;" id="R_63">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>선로에는 다음 각 호의 대피시설을 설치하여야 한다.<br> 1. 다리 및 고가부의 양쪽에 순회통로 및 손잡이 시설<br> 2. 중간기둥이 있는 지하부에
								중간기둥 손잡이 시설<br> 3.
								지하분기부의 양쪽 벽면에 통로 및 손잡이 시설<br> 4. 터널 안이나 차량기지 등 필요한 곳에 순회통로 및 손잡이 시설<br> 5. 지하 본선에 지상 출입구
								시설<br>[전문개정 <span
										class="miju_num addition_num" onclick="open_miju('2010f10f8_5572')">2010.10.8<div
											id="2010f10f8_5572"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_63" style="display:none;" class="relative_law">_</div>
							<a id="P64" name="P64"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_64" class="popup_view">제64조</a></em>(침수방지설비)
								<div class="btn-group  " style="display:none;" id="R_64">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br> 구조물의 개구부에는 필요에 따라 침수방지설비를 하여야 한다.
							</div>
							<div id="I_64" style="display:none;" class="relative_law">_</div>
							<a id="P65" name="P65"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_65" class="popup_view">제65조</a></em>(방화설비
								및
								방재설비)
								<div class="btn-group  " style="display:none;" id="R_65">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>구조물에는 방화설비 및 방재설비를 하여야 한다.<br>[전문개정 <span class="miju_num addition_num"
								                                              onclick="open_miju('2010f10f8_5773')">2010.10.8<div
											id="2010f10f8_5773" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_65" style="display:none;" class="relative_law">_</div>
							<a id="P66" name="P66"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_66" class="popup_view">제66조</a></em>(환기구
								내부의
								설비)
								<div class="btn-group  " style="display:none;" id="R_66">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>환기구 내부에는 출입이 쉽도록 계단이나 사다리 등의 장치를 하여야 하며, 안전에 필요한 철책을 설치하여야 한다.<br>[전문개정 <span
										class="miju_num addition_num"
										onclick="open_miju('2010f10f8_538')">2010.10.8<div
											id="2010f10f8_538" class="miju_box" style="display: none;"> </div></span>]
							</div>
							<div id="I_66" style="display:none;" class="relative_law">_</div>
							<a id="P67" name="P67"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_67" class="popup_view">제67조</a></em>(제연설비)
								<div class="btn-group  " style="display:none;" id="R_67">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>① 정거장 및 터널 안에는 화재가 발생할 경우 승객이 쉽게 대피할 수 있도록 화재 발생 장소를 고려하여 유독가스 배출방향을 조절할 수 있는 제연(制煙)설비를
								설치하여야 한다.<br> ②
								제연설비 중 전동기·배풍기·배출풍도 및 배풍막(배풍기와 배출풍도를 연결하는 막을 말한다)은 섭씨 250도에서 1시간 이상 정상적으로 기능을 유지할 수 있어야 한다.
								다만, 배풍기와 분리 설치되어
								배출가스의 영향을 받지 아니하는 전동기의 경우에는 그러하지 아니하다.<br> ③ 터널 안에 설치하는 제연설비는 승객이 대피하는 반대방향으로 연기가 배출될 수 있도록
								연기의 배출방향을 조절할 수 있는
								성능을 갖추어야 하며, 비상시 배출되는 연기의 기류속도는 초속 2.5미터 이상이 되도록 하여야 한다.<br> ④ 특별피난계단의 승강장 쪽 입구와 승강장에서 대합실로
								통하는 계단 또는 에스컬레이터의
								입구에는 제연 경계벽 등 유독가스의 확산을 지연시키거나 방지하는 설비를 각각 설치하여야 한다.<br>[전문개정 <span
										class="miju_num addition_num"
										onclick="open_miju('2010f10f8_1263')">2010.10.8<div
											id="2010f10f8_1263" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_67" style="display:none;" class="relative_law">_</div>
							<a id="P68" name="P68"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_68" class="popup_view">제68조</a></em>(물을
								사용하는
								소화설비)
								<div class="btn-group  " style="display:none;" id="R_68">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>정거장에 설치하는 옥내소화전, 살수장치(sprinkler) 등 물을 사용하는 소화설비는 전기 공급이 중단된 때에도 작동할 수 있도록 상수도 소화용수설비와
								연결하여 설치되어야 한다.<br>[전문개정
								<span class="miju_num addition_num" onclick="open_miju('2010f10f8_3749')">2010.10.8<div
											id="2010f10f8_3749"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_68" style="display:none;" class="relative_law">_</div>
							<a id="P69" name="P69"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_69" class="popup_view">제69조</a></em>(유도등)
								<div class="btn-group  " style="display:none;" id="R_69">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>① 정거장의 승강장·대합실·통로·계단 등에는 평상시에는 항상 켜져 있고, 정전되었을 경우 60분 이상 계속하여 켜질 수 있는 유도등을 설치하여야 한다.<br>
								② 정거장 안의 주요 대피로에는
								비상시 청각장애인이 쉽게 대피할 수 있도록 점멸(點滅)기능을 가진 유도등을 설치하거나 유도등의 인근에 시각경보기를 설치하여야 한다.<br>[전문개정 <span
										class="miju_num addition_num" onclick="open_miju('2010f10f8_6476')">2010.10.8<div
											id="2010f10f8_6476"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_69" style="display:none;" class="relative_law">_</div>
							<a id="P70" name="P70"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_70" class="popup_view">제70조</a></em>(비상조명등)
								<div class="btn-group  " style="display:none;" id="R_70">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>① 정거장이나 터널에는 정전되었을 경우 60분 이상 계속하여 켜질 수 있는 비상조명등을 설치하여야 한다.<br> ② 정거장 안의 주요 대피로에 설치하는
								비상조명등은 바닥의 평균조명도(照明度)가
								5럭스(lux) 이상이 되도록 하여야 한다.<br> ③ 터널 안의 비상조명등은 바닥으로부터 1미터 이상 1.5미터 이하의 높이에 설치하고, 바닥의 평균조명도가 1럭스
								이상이 되도록 하여야 한다.<br>[전문개정
								<span class="miju_num addition_num" onclick="open_miju('2010f10f8_1857')">2010.10.8<div
											id="2010f10f8_1857"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_70" style="display:none;" class="relative_law">_</div>
							<a id="P71" name="P71"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_71" class="popup_view">제71조</a></em>(터널
								안의
								연결송수관설비 등)
								<div class="btn-group  " style="display:none;" id="R_71">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>① 터널 안에는 비상시 소화용으로 활용할 수 있도록 연결송수관설비를 설치하여야 하며, 방수구(防水口)는 터널의 동일 선로 연결방향으로 50미터 이내의
								간격으로 설치하여야 한다.<br> ②
								제1항에 따른 연결송수관설비는 평상시에는 터널 안 살수용으로 활용할 수 있다.<br>[전문개정 <span class="miju_num addition_num"
								                                                           onclick="open_miju('2010f10f8_370')">2010.10.8<div
											id="2010f10f8_370" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_71" style="display:none;" class="relative_law">_</div>
							<a id="P72" name="P72"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_72" class="popup_view">제72조</a></em>(터널로
								통하는
								진입로)
								<div class="btn-group  " style="display:none;" id="R_72">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>승강장에서 터널로 통하는 진입로는 너비가 90센티미터 이상이 되어야 하며, 비상시 승객이 쉽게 대피할 수 있도록 계단 등 안전시설을 설치하여야 한다.<br>[전문개정
								<span
										class="miju_num addition_num" onclick="open_miju('2010f10f8_6608')">2010.10.8<div
											id="2010f10f8_6608"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_72" style="display:none;" class="relative_law">_</div>
							<a id="P73" name="P73"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_73" class="popup_view">제73조</a></em>(내진설계기준)
								<div class="btn-group  " style="display:none;" id="R_73">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br><a href="/Info/ContentView?sid=L000010726_14_20211103" class="popup_view">「지진재해대책법」
									제14조제10호</a>에 따른 도시철도
								내진설계기준은 국토교통부장관이 정하여 고시한다. [개정 <span class="miju_num addition_num"
								                                     onclick="open_miju('2013f3f23_3446')">2013.3.23<div
											id="2013f3f23_3446" class="miju_box" style="display: none;"> </div></span>
								제1호(<a
										href="/Info/ContentView?sid=L000011804_0_20211103" class="popup_view">국토교통부와 그 소속기관
									직제 시행규칙</a>)]<br>[전문개정
								<span class="miju_num addition_num" onclick="open_miju('2010f10f8_8865')">2010.10.8<div
											id="2010f10f8_8865"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_73" style="display:none;" class="relative_law">_</div>
							<p class="dp1" name="P10007000">제7장 경량전철에 관한 특례 [신설 2010.10.8]</p>
							<p id="foreTitle"><a id="P74" name="P74"> </a></p>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_74" class="popup_view">제74조</a></em>(궤간에
								관한
								특례)
								<div class="btn-group  " style="display:none;" id="R_74">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>① <a href="/Info/ContentView?sid=L000007101_6_20211103" class="popup_view">제6조</a>에도
								불구하고 경량전철 중 철제차륜을 사용하는
								경우 궤간의 치수는 1천435밀리미터를 표준으로 하고, 고무차륜을 사용하는 경우 궤간의 치수는 1천700밀리미터, 안내면 간 거리(차량의 궤도 이탈을 막는 안내레일
								안쪽 간의 거리 중 가장 짧은 거리를
								말한다)의 치수는 2천900밀리미터를 표준으로 한다. 그 밖에 다른 형식의 경우 궤간은 차량의 구조, 궤도 등의 특성을 고려하여 시·도지사등이 정한다.<br> ②
								<a
										href="/Info/ContentView?sid=L000007101_9_20211103" class="popup_view">제9조</a>에도 불구하고
								경량전철 궤간의 공차는 차량의 형식
								및 궤도의 특성을 고려하여 시·도지사등이 정한다.<br>[본조신설 <span class="miju_num addition_num"
								                                           onclick="open_miju('2010f10f8_2853')">2010.10.8<div
											id="2010f10f8_2853" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_74" style="display:none;" class="relative_law">_</div>
							<a id="P75" name="P75"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_75" class="popup_view">제75조</a></em>(확대궤간에
								관한 특례)
								<div class="btn-group  " style="display:none;" id="R_75">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>① <a href="/Info/ContentView?sid=L000007101_7_20211103" class="popup_view">제7조</a> 및 <a
										href="/Info/ContentView?sid=L000007101_8_20211103" class="popup_view">제8조</a>에도 불구하고
								경량전철 확대궤간의 치수 및
								체감거리는 해당 곡선의 반경 등을 고려하여 시·도지사등이 정한다.<br> ② 자기부상추진형식의 경우에는 확대궤간을 두지 아니한다.<br>[본조신설 <span
										class="miju_num addition_num" onclick="open_miju('2010f10f8_5701')">2010.10.8<div
											id="2010f10f8_5701"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_75" style="display:none;" class="relative_law">_</div>
							<a id="P76" name="P76"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_76" class="popup_view">제76조</a></em>(캔트,
								완화곡선 등에 관한 특례)
								<div class="btn-group  " style="display:none;" id="R_76">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br><a href="/Info/ContentView?sid=L000007101_11$18_20211103" class="popup_view">제11조부터
									제18조까지</a> 및 <a
										href="/Info/ContentView?sid=L000007101_21_20211103" class="popup_view">제21조제3항</a>에도
								불구하고 경량전철의 경우
								캔트(고무차륜형식의 경우에는 횡기울기를 말한다)의 크기 및 체감거리, 완화곡선의 삽입기준 및 길이, 직선의 삽입길이, 본선의 기울기 한도, 측선의 기울기 한도,
								종곡선의 삽입기준 및 길이, 곡선구간의
								건축한계 등에 관하여는 차량의 형식 및 선로의 특성 등을 고려하여 시·도지사등이 다르게 정할 수 있다.<br>[본조신설 <span
										class="miju_num addition_num"
										onclick="open_miju('2010f10f8_3698')">2010.10.8<div
											id="2010f10f8_3698" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_76" style="display:none;" class="relative_law">_</div>
							<a id="P77" name="P77"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_77" class="popup_view">제77조</a></em>(곡선인
								궤도의
								중심 간격에 관한 특례)
								<div class="btn-group  " style="display:none;" id="R_77">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br><a href="/Info/ContentView?sid=L000007101_23_20211103" class="popup_view">제23조</a>에도
								불구하고 자기부상추진형식의 경우 곡선인
								궤도의 중심 간격은 건축한계의 안쪽 확대치수와 바깥쪽 확대치수를 더한 값 이상으로 확대하여야 한다.<br>[본조신설 <span
										class="miju_num addition_num"
										onclick="open_miju('2010f10f8_7864')">2010.10.8<div
											id="2010f10f8_7864" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_77" style="display:none;" class="relative_law">_</div>
							<a id="P78" name="P78"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_78" class="popup_view">제78조</a></em>(정거장의
								시설
								등에 관한 특례)
								<div class="btn-group  " style="display:none;" id="R_78">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br><a href="/Info/ContentView?sid=L000007101_30_20211103" class="popup_view">제30조</a>, <a
										href="/Info/ContentView?sid=L000007101_30X2_20211103" class="popup_view">제30조의2</a>,
								<a
										href="/Info/ContentView?sid=L000007101_30X3_20211103" class="popup_view">제30조의3</a>
								및 <a
										href="/Info/ContentView?sid=L000007101_31$35_20211103" class="popup_view">제31조부터
									제35조까지</a>의 규정에도 불구하고
								경량전철의 정거장에 설치하는 승강장·통로·출입구 등 승객의 도시철도 이용에 필요한 시설과 전기·통신설비 등의 세부기준은 국토교통부장관이 정하여 고시한다. [개정
								<span
										class="miju_num addition_num" onclick="open_miju('2013f3f23_5667')">2013.3.23<div
											id="2013f3f23_5667"
											class="miju_box"
											style="display: none;"> </div></span>
								제1호(<a href="/Info/ContentView?sid=L000011804_0_20211103" class="popup_view">국토교통부와 그 소속기관
									직제 시행규칙</a>)]<br>[본조신설
								<span class="miju_num addition_num" onclick="open_miju('2010f10f8_7970')">2010.10.8<div
											id="2010f10f8_7970"
											class="miju_box"
											style="display: none;"> </div></span>]
							</div>
							<div id="I_78" style="display:none;" class="relative_law">_</div>
							<a id="P79" name="P79"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_79" class="popup_view">제79조</a></em>(전기방식에
								관한 특례)
								<div class="btn-group  " style="display:none;" id="R_79">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br><a href="/Info/ContentView?sid=L000007101_36_20211103" class="popup_view">제36조제1호</a>에도
								불구하고 경량전철의 경우 전차선로에
								공급하는 전압 및 전기방식은 직류 750볼트 또는 1천500볼트 제3레일방식을 원칙으로 하되, 차량의 형식 또는 선로의 특성에 따라 다르게 할 수 있다.<br>[본조신설
								<span
										class="miju_num addition_num" onclick="open_miju('2010f10f8_8304')">2010.10.8<div
											id="2010f10f8_8304"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_79" style="display:none;" class="relative_law">_</div>
							<a id="P80" name="P80"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_80" class="popup_view">제80조</a></em>(전선로에
								관한
								특례)
								<div class="btn-group  " style="display:none;" id="R_80">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br><a href="/Info/ContentView?sid=L000007101_37_20211103" class="popup_view">제37조제1항</a>에도
								불구하고 경량전철의 경우 조명 및
								동력용 전원 공급이 이중화(二重化) 된 경우에는 전선로의 구성을 다르게 할 수 있다.<br>[본조신설 <span
										class="miju_num addition_num"
										onclick="open_miju('2010f10f8_1116')">2010.10.8<div
											id="2010f10f8_1116" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_80" style="display:none;" class="relative_law">_</div>
							<a id="P81" name="P81"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_81" class="popup_view">제81조</a></em>(전차선로의
								기울기에 관한 특례)
								<div class="btn-group  " style="display:none;" id="R_81">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br><a href="/Info/ContentView?sid=L000007101_43_20211103" class="popup_view">제43조</a>에도
								불구하고 경량전철 전차선의 레일면에 대한
								기울기 한도는 차량의 운행 조건 등을 고려하여 시·도지사등이 정한다.<br>[본조신설 <span class="miju_num addition_num"
								                                                      onclick="open_miju('2010f10f8_8541')">2010.10.8<div
											id="2010f10f8_8541" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_81" style="display:none;" class="relative_law">_</div>
							<a id="P82" name="P82"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_82" class="popup_view">제82조</a></em>(비상통신장치의
								설치에 관한 특례)
								<div class="btn-group  " style="display:none;" id="R_82">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br><a href="/Info/ContentView?sid=L000007101_46_20211103" class="popup_view">제46조제6항</a>에도
								불구하고 경량전철의 승강장에는 승객이
								관제실과 양방향 통화를 할 수 있도록 비상통신장치를 바닥에서 1.5미터 높이로 설치하여야 한다. 이 경우 설치 개소 및 위치 등은 정거장 규모를 고려하여
								시·도지사등이 정한다.<br>[본조신설
								<span class="miju_num addition_num" onclick="open_miju('2010f10f8_3180')">2010.10.8<div
											id="2010f10f8_3180"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_82" style="display:none;" class="relative_law">_</div>
							<a id="P83" name="P83"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_83" class="popup_view">제83조</a></em>(선로의
								표지에
								관한 특례)
								<div class="btn-group  " style="display:none;" id="R_83">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br><a href="/Info/ContentView?sid=L000007101_61_20211103" class="popup_view">제61조</a>에도
								불구하고 경량전철의 무인운전을 적용하는
								선로에는 필요에 따라 표지를 선택적으로 설치할 수 있다.<br>[본조신설 <span class="miju_num addition_num"
								                                               onclick="open_miju('2010f10f8_2091')">2010.10.8<div
											id="2010f10f8_2091" class="miju_box" style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_83" style="display:none;" class="relative_law">_</div>
							<a id="P84" name="P84"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_84" class="popup_view">제84조</a></em>(선로의
								대피시설에 관한 특례)
								<div class="btn-group  " style="display:none;" id="R_84">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br><a href="/Info/ContentView?sid=L000007101_63_20211103" class="popup_view">제63조</a>에도
								불구하고 경량전철 차량에 방재기능을
								갖추었거나 비상탈출 설비를 구비하는 등 비상시 승객이 안전하게 대피할 수 있도록 조치한 경우에는 선로에 대피시설을 설치하지 아니할 수 있다.<br>[본조신설
								<span
										class="miju_num addition_num" onclick="open_miju('2010f10f8_9602')">2010.10.8<div
											id="2010f10f8_9602"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_84" style="display:none;" class="relative_law">_</div>
							<a id="P85" name="P85"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_85" class="popup_view">제85조</a></em>(무인운전
								안전설비)
								<div class="btn-group  " style="display:none;" id="R_85">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>경량전철에 무인운전을 적용하려는 경우에는 <a href="/Info/ContentView?sid=L000001460_11_20211103"
								                              class="popup_view">「산업표준화법」
									제11조</a>에 따라 고시된 한국산업표준 KS C IEC PAS62267의 자동도시철도교통(AUGT) 안전 요구사항에 따라 적절한 안전설비를 갖추어야 한다.<br>[본조신설
								<span
										class="miju_num addition_num" onclick="open_miju('2010f10f8_1448')">2010.10.8<div
											id="2010f10f8_1448"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_85" style="display:none;" class="relative_law">_</div>
							<a id="P86" name="P86"> </a>
							<div class="normal"><em><a href="/Info/ContentView?sid=L000216E9101A2AB_86" class="popup_view">제86조</a></em>(노면전차형식에
								관한 특례)
								<div class="btn-group  " style="display:none;" id="R_86">
									<button type="button" class="btn btn-square">자료</button>
								</div>
								<br>노면전차형식의 경량전철인 경우에는 다른 도로교통과 함께 주행하는 특성을 고려하여 시·도지사등이 이 규칙의 내용과 다르게 정할 수 있다.<br>[본조신설
								<span
										class="miju_num addition_num" onclick="open_miju('2010f10f8_9298')">2010.10.8<div
											id="2010f10f8_9298"
											class="miju_box"
											style="display: none;"> </div></span>]<br>
							</div>
							<div id="I_86" style="display:none;" class="relative_law">_</div>
							<div class="normal" id="A1001">부칙[1994·5·9]<br> ①(시행일) 이 규칙은 공포한 날부터 시행한다.<br> ②(폐지법령) 교통부령
								제679호 서울도시철도건설규칙, 교통부령
								제681호 부산도시철도건설규칙 및 교통부령 제957호 대구도시철도건설규칙은 이를 각각 폐지한다.<br> ③(경과조치) 이 규칙 시행당시 건설되었거나 건설중인
								도시철도는 종전의 규정에 의한다.<br>
							</div>
							<div class="normal" id="A231">부 칙[2000.3.18 제231호(도시철도차량안전기준에관한규칙)]<br>①(시행일) 이 규칙은 공포한 날부터
								시행한다.<br>②생략<br>③(다른 법령의
								개정) 도시철도건설규칙중 다음과 같이 개정한다.<br>제28조를 삭제한다.<br>제5장(제51조 내지 제60조)을 삭제한다.
							</div>
							<div class="normal" id="A1003">부칙 [2004.12.4.]<br>①(시행일) 이 규칙은 공포 후 3월이 경과한 날부터 시행한다.<br>②(경과조치)
								이 규칙 시행 당시 건설되었거나
								건설중인 도시철도에 관하여는 종전의 규정에 의한다.<br></div>
							<div class="normal" id="A1004">부칙 [2008.3.14, 제4호(정부조직법의 개정에 따른 감정평가에 관한 규칙 등)]<br>이 규칙은 공포한 날부터
								시행한다.
							</div>
							<div class="normal" id="A1005">부칙 [2010.10.8 제290호]<br>이 규칙은 공포한 날부터 시행한다.</div>
							<div class="normal" id="A1006">부 칙[2013.3.23 제1호(국토교통부와 그 소속기관 직제 시행규칙)]<br>제1조(시행일) 이 규칙은 공포한
								날부터 시행한다. &lt;단서 생략&gt;<br>제2조부터
								제5조까지 생략<br>제6조(다른 법령의 개정) ①부터 &lt;50&gt;까지 생략<br> &lt;51&gt; 도시철도건설규칙 일부를 다음과 같이 개정한다.<br>
								제30조, 제34조, 제73조 및
								제78조 중 "국토해양부장관"을 각각 "국토교통부장관"으로 한다.<br> &lt;52&gt;부터 &lt;126&gt;까지 생략
							</div>
							<div class="normal" id="A1007">부 칙[2014.7.8 제106호(도시철도법 시행규칙)]<br>제1조(시행일) 이 규칙은 2014년 7월 8일부터
								시행한다.<br>제2조(다른 법령의
								개정) ①부터 ③까지 생략<br> ④ 도시철도건설규칙 일부를 다음과 같이 개정한다.<br> 제1조 중 "「도시철도법」 제10조의2"를 "「도시철도법」 제18조"로
								한다.<br> 제3조 단서 중
								"「도시철도법」제3조의2에 따른 도시철도기본계획"을 "「도시철도법」 제6조에 따른 노선별 도시철도기본계획"으로 한다. <br> ⑤부터 ⑧까지 생략<br>제3조
								생략<br></div>
							<div class="normal" id="A882">부 칙[2021.8.27 제882호(어려운 법령용어 정비를 위한 80개 국토교통부령 일부개정령)]<br>이 규칙은
								공포한 날부터 시행한다. &lt;단서
								생략&gt;
							</div>
							<div class="normal" id="A910">부 칙[2021.11.3 제910호]<br>이 규칙은 공포한 날부터 시행한다.</div>
						</div>
					</div>
				</div>
                <?php include '../include/content_popup.php'; ?>
			</div>
			<!-- 별표서식 시작 // -->
			<div id="asterisk-form-popup" class="ct-popup-wrap">
				<div class="ct-frame str">
					<button class="btn btn-close str-rt" onclick="fn_ct_popup_close('asterisk-form')"><span class="icon-w30 icon-x-mark"></span></button>
					<!-- 별표서식 프레임 시작 // -->
					<div class="ct-frame-bg">
						<div class="case_info">
							<div class="normal">별표1 위탁받을 업무를 수행할 수 있는 전담인력 보유기준(제11조제2항제1호 관련) <br>
								<div class="ar">

									<div class="btn-group">
										<button type="button" class="btn btn-none mr-5" onclick="view.viewFileDown('L000', '013886#AHNEX#lawnb_18104616312.pdf', 'pdf')">PDF 다운로드</button>
										<button type="button" class="btn btn-none" onclick="view.viewFileDown('L000', '013886#AHNEX#lawnb_18104616344.hwp', 'hwp')">HWP 다운로드</button>
									</div>
								</div>
							</div>
							서식 프레임을 이곳에 위치해주세요
						</div>
					</div>
					<!-- // 별표서식 프레임-->
				</div>
			</div>
			<!-- // 별표서식 -->
			<!-- 제·개정이유 시작 // -->
			<div id="revised-reasons-popup" class="ct-popup-wrap ct-popup-pd ct-popup-scroll-y">
				<div class="ct-bg str">
					<button class="btn btn-close str-rt" onclick="fn_ct_popup_close('revised-reasons')"><span class="icon-w30 icon-x-mark"></span></button>
					<div class="case_info" id="view_sub_content" style="">
						<p> 제·개정이유 <span class="btn_close"></span></p>
						<div class="normal mgt0">[일부개정]<br>◇ 개정이유 및 주요내용<br>  전자관보가 제공된 이후에 대다수의 국민들이 인터넷 또는 모바일 웹으로 제공되는 전자관보를 이용하고 있으나, 현행 규정에 따르면 관보는 종이관보를 기본으로 하고 전자관보는 보완적으로만 운영하고 있으며, 관보의 내용 해석 및 적용 시기 등에 대해서도 종이관보를 우선으로 하고 전자관보는 부차적인 효력만을 갖도록 하고 있는 바, 국민 대다수가 전자관보를 이용하는 현실을 반영하고 전자관보에 대한 국민의 신뢰를 보호하기 위하여 종이관보와 전자관보를 대등하게 운영하고, 관보의 내용 해석 및 적용시기 등에 대해서도 종이관보와 전자관보가 동일한 효력을 가지도록 하려는 것임. </div>

					</div>
				</div>
			</div>
			<!-- // 제·개정이유 -->
			<!-- 제·개정문 시작 // -->
			<div id="revised-sentence-popup" class="ct-popup-wrap ct-popup-pd ct-popup-scroll-y">
				<div class="ct-bg str">
					<button class="btn btn-close str-rt" onclick="fn_ct_popup_close('revised-sentence')"><span class="icon-w30 icon-x-mark"></span></button>
					<div class="case_info" id="view_sub_content" style="">
						<p> 제·개정문 <span class="btn_close"></span></p>
						<div class="normal mgt0">⊙법률 제15798호<br>법령 등 공포에 관한 법률 일부개정법률<br>법령 등 공포에 관한 법률 일부를 다음과 같이 개정한다.<br>제11조제3항 및 제4항을 각각 다음과 같이 한다.<br>  ③ 제1항에 따른 관보는 종이로 발행되는 관보(이하 "종이관보"라 한다)와 전자적인 형태로 발행되는 관보(이하 "전자관보"라 한다)로 운영한다.<br>  ④ 관보의 내용 해석 및 적용 시기 등에 대하여 종이관보와 전자관보는 동일한 효력을 가진다. <br>          부칙<br>이 법은 공포한 날부터 시행한다. </div>

					</div>
				</div>
			</div>
			<!-- // 제·개정문 -->
		</div>
	</div>
</div>
<!--	끝 : 본문	-->
</body>
</html>
