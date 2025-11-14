<?php include '../include/header_sub_content.php'; ?>
<!--	시작 : 본문	-->
<div class="step3-wrap">
	<!--	시작 : 헤더	-->
	<header class="ct-header">
		<div class="w1600 str clear">
			<h1 class="logo-div"><a href="../main/main_search.php"><img src="../images/common/logo_s.png" alt="로앤비"/></a></h1>
			<div class="c-right header-h">
                <?php include '../include/content_popup.php'; ?>
			</div>
		</div>
	</header>
	<!--	끝 : 헤더	-->
	<!--	시작 : 서브헤더	-->
	<div class="step3-sub-header">
		<div class="w1600 clear">
			<div class="c-left clear">
				<a href="./step3_content01.php" class="badge on">인용조문비교(조문단위)</a>
				<a href="./step3_content02.php" class="badge">인용조문비교(법전체)</a>
				<a href="./step3_content03.php" class="badge">단순비교</a>
			</div>
			<div class="c-right clear">
				<div class="dropdown">
					<button class="btn btn-none btn-m dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						대기환경보전법 - 대기환경보전법시행령 - 대기환경보전법시행규칙
					</button>
					<div class="dropdown-menu-wrap">
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#">대기환경보전법</a></li>
							<li><a class="dropdown-item" href="#">대기환경보전법시행령</a></li>
							<li><a class="dropdown-item" href="#">대기환경보전법시행규칙</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--	끝 : 서브헤더	-->
	<!--	시작 : 3단 본문	-->
	<div class="step3-container">
		<div class="w1600">
			<div class="title-area clear">
				<div class="con-div step3-con on">
					<div class="tit-box">
						<label for="step-1">
							<p class="radio-box">
								<input type="radio" id="step-1" value="" name="keyword-list">
								<span class="txt01">기준</span>
							</p>
							<p class="txt02">대기환경보전법</p>
							<p class="txt03">법률 제19660호 일부개정 2023. 08. 16.</p>
						</label>
					</div>
				</div>
				<div class="con-div step3-con">
					<div class="tit-box">
						<label for="step-1">
							<p class="radio-box">
								<input type="radio" id="step-1" value="" name="keyword-list">
								<span class="txt01">기준</span>
							</p>
							<p class="txt02">대기환경보전법</p>
							<p class="txt03">법률 제19660호 일부개정 2023. 08. 16.</p>
						</label>
					</div>
				</div>
				<div class="con-div step3-con">
					<div class="tit-box">
						<label for="step-1">
							<p class="radio-box">
								<input type="radio" id="step-1" value="" name="keyword-list">
								<span class="txt01">기준</span>
							</p>
							<p class="txt02">대기환경보전법</p>
							<p class="txt03">법률 제19660호 일부개정 2023. 08. 16.</p>
						</label>
					</div>
				</div>
			</div>
			<div class="content-area">
				<div class="tree-area clear">
					<div class="con-div step3-con scroll-y">
						<div class="table_index tree">
							<h3 class="hide">조문목차</h3>
							<ul id="law_tree_list" class="regulation">
								<li class="active_d1 open">
									<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
									<a href="#" class="tit">제1장 총칙 [개정 2010.10.8]</a>
									<ul>
										<li class="comment"><a name="joMoveLink" href="#P1" onclick="law.goTarget('1')"><span>제1조</span> (목적) <span class="c-red">[변경]</span></a></li>
										<li class="comment"><a name="joMoveLink" href="#P2" onclick="law.goTarget('2')"><span>제2조</span> (정의)</a></li>
										<li class="comment"><a name="joMoveLink" href="#P3" onclick="law.goTarget('3')"><span>제3조</span> (선로의 형식)</a></li>
										<li class="comment"><a name="joMoveLink" href="#P4" onclick="law.goTarget('4')"><span>제4조</span> </a></li>
										<li class="comment"><a name="joMoveLink" href="#P5" onclick="law.goTarget('5')"><span>제5조</span> (열차의 운전 진로)</a></li>
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
												<li class="comment"><a name="joMoveLink" href="#P6" onclick="law.goTarget('6')"><span>제6조</span> (궤간)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P7" onclick="law.goTarget('7')"><span>제7조</span> (확대궤간)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P8" onclick="law.goTarget('8')"><span>제8조</span> (확대궤간의 체감거리)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P9" onclick="law.goTarget('9')"><span>제9조</span> (궤간의 공차)</a>
												</li>
											</ul>
										</li>
										<li class="comment open">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제2절 곡선 [개정 2010.10.8]</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P10" onclick="law.goTarget('10')"><span>제10조</span> (선로의 곡선반경
														등)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P11" onclick="law.goTarget('11')"><span>제11조</span> (캔트)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P12" onclick="law.goTarget('12')"><span>제12조</span> (캔트의 체감거리)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P13" onclick="law.goTarget('13')"><span>제13조</span> (완화곡선)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P14" onclick="law.goTarget('14')"><span>제14조</span> (직선의 삽입 등)</a>
												</li>
											</ul>
										</li>
										<li class="comment open">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제3절 기울기</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P15" onclick="law.goTarget('15')"><span>제15조</span> (정거장 밖의 기울기한도)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P16" onclick="law.goTarget('16')"><span>제16조</span> (정거장 안의 기울기
														한도)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P17" onclick="law.goTarget('17')"><span>제17조</span> (측선의 기울기)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P18" onclick="law.goTarget('18')"><span>제18조</span> (종곡선)</a></li>
											</ul>
										</li>
										<li class="comment">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제4절 건축한계</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P19" onclick="law.goTarget('19')"><span>제19조</span> (건축한계)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P20" onclick="law.goTarget('20')"><span>제20조</span> (직선구간의
														건축한계)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P21" onclick="law.goTarget('21')"><span>제21조</span> (곡선구간의
														건축한계)</a></li>
											</ul>
										</li>
										<li class="comment">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제5절 궤도 [개정 2010.10.8]</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P22" onclick="law.goTarget('22')"><span>제22조</span> (궤도의 중심
														간격)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P23" onclick="law.goTarget('23')"><span>제23조</span> (곡선인 궤도의 중심
														간격)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P24" onclick="law.goTarget('24')"><span>제24조</span> (레일)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P25" onclick="law.goTarget('25')"><span>제25조</span> (도상의 두께 등)</a>
												</li>
											</ul>
										</li>
										<li class="comment">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제6절 구조물</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P26" onclick="law.goTarget('26')"><span>제26조</span> (건축한계 외의 여유
														공간)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P27" onclick="law.goTarget('27')"><span>제27조</span> (도로면 등으로부터의
														간격)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P28" onclick="law.goTarget('28')"><span>제28조</span> </a></li>
											</ul>
										</li>
										<li class="comment">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제7절 분기 [개정 2010.10.8]</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P29" onclick="law.goTarget('29')"><span>제29조</span> (분기)</a></li>
											</ul>
										</li>
									</ul>
								</li>
								<li class="active_d1 open">
									<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
									<a href="#" class="tit">제3장 정거장</a>
									<ul>
										<li class="comment"><a name="joMoveLink" href="#P30" onclick="law.goTarget('30')"><span>제30조</span> (정거장의 시설ㆍ설비)</a></li>
										<li class="comment"><a name="joMoveLink" href="#P30X2" onclick="law.goTarget('30X2')"><span>제30조의2</span>
												(승강장의 안전시설)</a></li>
										<li class="comment"><a name="joMoveLink" href="#P30X3" onclick="law.goTarget('30X3')"><span>제30조의3</span>
												(정거장 간의 거리)</a></li>
										<li class="comment"><a name="joMoveLink" href="#P31" onclick="law.goTarget('31')"><span>제31조</span> (승강장의 너비 등)</a><span class="icon_red"> [변경]</span></li>
										<li class="comment"><a name="joMoveLink" href="#P32" onclick="law.goTarget('32')"><span>제32조</span> (승강장 연단의 높이)</a></li>
										<li class="comment"><a name="joMoveLink" href="#P33" onclick="law.goTarget('33')"><span>제33조</span> (승강장 연단과 차량한계와의
												간격)</a></li>
										<li class="comment"><a name="joMoveLink" href="#P34" onclick="law.goTarget('34')"><span>제34조</span> (승강장의 길이 및 통로의 폭)</a>
										</li>
										<li class="comment"><a name="joMoveLink" href="#P35" onclick="law.goTarget('35')"><span>제35조</span> (노면 출입구 및 지상보행로)</a>
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
												<li class="comment"><a name="joMoveLink" href="#P36" onclick="law.goTarget('36')"><span>제36조</span> (전기방식)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P37" onclick="law.goTarget('37')"><span>제37조</span> (전선로)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P38" onclick="law.goTarget('38')"><span>제38조</span> (전식방지대책)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P39" onclick="law.goTarget('39')"><span>제39조</span> </a></li>
												<li class="comment"><a name="joMoveLink" href="#P40" onclick="law.goTarget('40')"><span>제40조</span> (급전선의 차단)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P41" onclick="law.goTarget('41')"><span>제41조</span> (예비전원설비)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P42" onclick="law.goTarget('42')"><span>제42조</span> (전차선로)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P43" onclick="law.goTarget('43')"><span>제43조</span> (전차선의 기울기)</a>
												</li>
											</ul>
										</li>
										<li class="comment">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제2절 환기·배수 및 통신설비</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P44" onclick="law.goTarget('44')"><span>제44조</span> (환기설비)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P45" onclick="law.goTarget('45')"><span>제45조</span> (배수설비)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P46" onclick="law.goTarget('46')"><span>제46조</span> (통신설비의 설치
														등)</a></li>
											</ul>
										</li>
										<li class="comment">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제3절 신호ㆍ보안설비 등 [개정 2010.10.8]</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P47" onclick="law.goTarget('47')"><span>제47조</span> (본선 열차의 신호방식)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P48" onclick="law.goTarget('48')"><span>제48조</span> (신호장치 등의
														설치)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P49" onclick="law.goTarget('49')"><span>제49조</span> (선로전환기와 신호장치와의
														연동)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P50" onclick="law.goTarget('50')"><span>제50조</span> (보안장치)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P50X2" onclick="law.goTarget('50X2')"><span>제50조의2</span> (자동요금징수설비)</a>
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
												<li class="comment"><a name="joMoveLink" href="#P51" onclick="law.goTarget('51')"><span>제51조</span> </a></li>
												<li class="comment"><a name="joMoveLink" href="#P52" onclick="law.goTarget('52')"><span>제52조</span> </a></li>
												<li class="comment"><a name="joMoveLink" href="#P53" onclick="law.goTarget('53')"><span>제53조</span> </a></li>
											</ul>
										</li>
										<li class="comment">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제2절 삭제 [2000·3·18]</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P54" onclick="law.goTarget('54')"><span>제54조</span> </a></li>
												<li class="comment"><a name="joMoveLink" href="#P55" onclick="law.goTarget('55')"><span>제55조</span> </a></li>
												<li class="comment"><a name="joMoveLink" href="#P56" onclick="law.goTarget('56')"><span>제56조</span> </a></li>
											</ul>
										</li>
										<li class="comment">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제3절 삭제 [2000·3·18]</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P57" onclick="law.goTarget('57')"><span>제57조</span> </a></li>
												<li class="comment"><a name="joMoveLink" href="#P58" onclick="law.goTarget('58')"><span>제58조</span> </a></li>
												<li class="comment"><a name="joMoveLink" href="#P59" onclick="law.goTarget('59')"><span>제59조</span> </a></li>
												<li class="comment"><a name="joMoveLink" href="#P60" onclick="law.goTarget('60')"><span>제60조</span> </a></li>
											</ul>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
					<div class="con-div step3-con scroll-y">
						<div class="table_index tree">
							<h3 class="hide">조문목차</h3>
							<ul id="law_tree_list" class="regulation">
								<li class="active_d1 open">
									<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
									<a href="#" class="tit">제1장 총칙 [개정 2010.10.8]</a>
									<ul>
										<li class="comment"><a name="joMoveLink" href="#P1" onclick="law.goTarget('1')"><span>제1조</span> (목적)</a></li>
										<li class="comment"><a name="joMoveLink" href="#P2" onclick="law.goTarget('2')"><span>제2조</span> (정의)</a></li>
										<li class="comment"><a name="joMoveLink" href="#P3" onclick="law.goTarget('3')"><span>제3조</span> (선로의 형식)</a></li>
										<li class="comment"><a name="joMoveLink" href="#P4" onclick="law.goTarget('4')"><span>제4조</span> </a></li>
										<li class="comment"><a name="joMoveLink" href="#P5" onclick="law.goTarget('5')"><span>제5조</span> (열차의 운전 진로)</a></li>
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
												<li class="comment"><a name="joMoveLink" href="#P6" onclick="law.goTarget('6')"><span>제6조</span> (궤간)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P7" onclick="law.goTarget('7')"><span>제7조</span> (확대궤간)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P8" onclick="law.goTarget('8')"><span>제8조</span> (확대궤간의 체감거리)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P9" onclick="law.goTarget('9')"><span>제9조</span> (궤간의 공차)</a>
												</li>
											</ul>
										</li>
										<li class="comment open">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제2절 곡선 [개정 2010.10.8]</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P10" onclick="law.goTarget('10')"><span>제10조</span> (선로의 곡선반경
														등)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P11" onclick="law.goTarget('11')"><span>제11조</span> (캔트)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P12" onclick="law.goTarget('12')"><span>제12조</span> (캔트의 체감거리)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P13" onclick="law.goTarget('13')"><span>제13조</span> (완화곡선)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P14" onclick="law.goTarget('14')"><span>제14조</span> (직선의 삽입 등)</a>
												</li>
											</ul>
										</li>
										<li class="comment open">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제3절 기울기</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P15" onclick="law.goTarget('15')"><span>제15조</span> (정거장 밖의 기울기한도)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P16" onclick="law.goTarget('16')"><span>제16조</span> (정거장 안의 기울기
														한도)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P17" onclick="law.goTarget('17')"><span>제17조</span> (측선의 기울기)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P18" onclick="law.goTarget('18')"><span>제18조</span> (종곡선)</a></li>
											</ul>
										</li>
										<li class="comment">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제4절 건축한계</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P19" onclick="law.goTarget('19')"><span>제19조</span> (건축한계)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P20" onclick="law.goTarget('20')"><span>제20조</span> (직선구간의
														건축한계)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P21" onclick="law.goTarget('21')"><span>제21조</span> (곡선구간의
														건축한계)</a></li>
											</ul>
										</li>
										<li class="comment">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제5절 궤도 [개정 2010.10.8]</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P22" onclick="law.goTarget('22')"><span>제22조</span> (궤도의 중심
														간격)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P23" onclick="law.goTarget('23')"><span>제23조</span> (곡선인 궤도의 중심
														간격)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P24" onclick="law.goTarget('24')"><span>제24조</span> (레일)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P25" onclick="law.goTarget('25')"><span>제25조</span> (도상의 두께 등)</a>
												</li>
											</ul>
										</li>
										<li class="comment">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제6절 구조물</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P26" onclick="law.goTarget('26')"><span>제26조</span> (건축한계 외의 여유
														공간)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P27" onclick="law.goTarget('27')"><span>제27조</span> (도로면 등으로부터의
														간격)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P28" onclick="law.goTarget('28')"><span>제28조</span> </a></li>
											</ul>
										</li>
										<li class="comment">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제7절 분기 [개정 2010.10.8]</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P29" onclick="law.goTarget('29')"><span>제29조</span> (분기)</a></li>
											</ul>
										</li>
									</ul>
								</li>
								<li class="active_d1 open">
									<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
									<a href="#" class="tit">제3장 정거장</a>
									<ul>
										<li class="comment"><a name="joMoveLink" href="#P30" onclick="law.goTarget('30')"><span>제30조</span> (정거장의 시설ㆍ설비)</a></li>
										<li class="comment"><a name="joMoveLink" href="#P30X2" onclick="law.goTarget('30X2')"><span>제30조의2</span>
												(승강장의 안전시설)</a></li>
										<li class="comment"><a name="joMoveLink" href="#P30X3" onclick="law.goTarget('30X3')"><span>제30조의3</span>
												(정거장 간의 거리)</a></li>
										<li class="comment"><a name="joMoveLink" href="#P31" onclick="law.goTarget('31')"><span>제31조</span> (승강장의 너비 등)</a><span class="icon_red"> [변경]</span></li>
										<li class="comment"><a name="joMoveLink" href="#P32" onclick="law.goTarget('32')"><span>제32조</span> (승강장 연단의 높이)</a></li>
										<li class="comment"><a name="joMoveLink" href="#P33" onclick="law.goTarget('33')"><span>제33조</span> (승강장 연단과 차량한계와의
												간격)</a></li>
										<li class="comment"><a name="joMoveLink" href="#P34" onclick="law.goTarget('34')"><span>제34조</span> (승강장의 길이 및 통로의 폭)</a>
										</li>
										<li class="comment"><a name="joMoveLink" href="#P35" onclick="law.goTarget('35')"><span>제35조</span> (노면 출입구 및 지상보행로)</a>
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
												<li class="comment"><a name="joMoveLink" href="#P36" onclick="law.goTarget('36')"><span>제36조</span> (전기방식)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P37" onclick="law.goTarget('37')"><span>제37조</span> (전선로)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P38" onclick="law.goTarget('38')"><span>제38조</span> (전식방지대책)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P39" onclick="law.goTarget('39')"><span>제39조</span> </a></li>
												<li class="comment"><a name="joMoveLink" href="#P40" onclick="law.goTarget('40')"><span>제40조</span> (급전선의 차단)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P41" onclick="law.goTarget('41')"><span>제41조</span> (예비전원설비)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P42" onclick="law.goTarget('42')"><span>제42조</span> (전차선로)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P43" onclick="law.goTarget('43')"><span>제43조</span> (전차선의 기울기)</a>
												</li>
											</ul>
										</li>
										<li class="comment">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제2절 환기·배수 및 통신설비</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P44" onclick="law.goTarget('44')"><span>제44조</span> (환기설비)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P45" onclick="law.goTarget('45')"><span>제45조</span> (배수설비)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P46" onclick="law.goTarget('46')"><span>제46조</span> (통신설비의 설치
														등)</a></li>
											</ul>
										</li>
										<li class="comment">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제3절 신호ㆍ보안설비 등 [개정 2010.10.8]</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P47" onclick="law.goTarget('47')"><span>제47조</span> (본선 열차의 신호방식)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P48" onclick="law.goTarget('48')"><span>제48조</span> (신호장치 등의
														설치)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P49" onclick="law.goTarget('49')"><span>제49조</span> (선로전환기와 신호장치와의
														연동)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P50" onclick="law.goTarget('50')"><span>제50조</span> (보안장치)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P50X2" onclick="law.goTarget('50X2')"><span>제50조의2</span> (자동요금징수설비)</a>
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
												<li class="comment"><a name="joMoveLink" href="#P51" onclick="law.goTarget('51')"><span>제51조</span> </a></li>
												<li class="comment"><a name="joMoveLink" href="#P52" onclick="law.goTarget('52')"><span>제52조</span> </a></li>
												<li class="comment"><a name="joMoveLink" href="#P53" onclick="law.goTarget('53')"><span>제53조</span> </a></li>
											</ul>
										</li>
										<li class="comment">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제2절 삭제 [2000·3·18]</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P54" onclick="law.goTarget('54')"><span>제54조</span> </a></li>
												<li class="comment"><a name="joMoveLink" href="#P55" onclick="law.goTarget('55')"><span>제55조</span> </a></li>
												<li class="comment"><a name="joMoveLink" href="#P56" onclick="law.goTarget('56')"><span>제56조</span> </a></li>
											</ul>
										</li>
										<li class="comment">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제3절 삭제 [2000·3·18]</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P57" onclick="law.goTarget('57')"><span>제57조</span> </a></li>
												<li class="comment"><a name="joMoveLink" href="#P58" onclick="law.goTarget('58')"><span>제58조</span> </a></li>
												<li class="comment"><a name="joMoveLink" href="#P59" onclick="law.goTarget('59')"><span>제59조</span> </a></li>
												<li class="comment"><a name="joMoveLink" href="#P60" onclick="law.goTarget('60')"><span>제60조</span> </a></li>
											</ul>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
					<div class="con-div step3-con scroll-y">
						<div class="table_index tree">
							<h3 class="hide">조문목차</h3>
							<ul id="law_tree_list" class="regulation">
								<li class="active_d1 open">
									<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
									<a href="#" class="tit">제1장 총칙 [개정 2010.10.8]</a>
									<ul>
										<li class="comment"><a name="joMoveLink" href="#P1" onclick="law.goTarget('1')"><span>제1조</span> (목적)</a></li>
										<li class="comment"><a name="joMoveLink" href="#P2" onclick="law.goTarget('2')"><span>제2조</span> (정의)</a></li>
										<li class="comment"><a name="joMoveLink" href="#P3" onclick="law.goTarget('3')"><span>제3조</span> (선로의 형식)</a></li>
										<li class="comment"><a name="joMoveLink" href="#P4" onclick="law.goTarget('4')"><span>제4조</span> </a></li>
										<li class="comment"><a name="joMoveLink" href="#P5" onclick="law.goTarget('5')"><span>제5조</span> (열차의 운전 진로)</a></li>
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
												<li class="comment"><a name="joMoveLink" href="#P6" onclick="law.goTarget('6')"><span>제6조</span> (궤간)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P7" onclick="law.goTarget('7')"><span>제7조</span> (확대궤간)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P8" onclick="law.goTarget('8')"><span>제8조</span> (확대궤간의 체감거리)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P9" onclick="law.goTarget('9')"><span>제9조</span> (궤간의 공차)</a>
												</li>
											</ul>
										</li>
										<li class="comment open">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제2절 곡선 [개정 2010.10.8]</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P10" onclick="law.goTarget('10')"><span>제10조</span> (선로의 곡선반경
														등)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P11" onclick="law.goTarget('11')"><span>제11조</span> (캔트)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P12" onclick="law.goTarget('12')"><span>제12조</span> (캔트의 체감거리)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P13" onclick="law.goTarget('13')"><span>제13조</span> (완화곡선)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P14" onclick="law.goTarget('14')"><span>제14조</span> (직선의 삽입 등)</a>
												</li>
											</ul>
										</li>
										<li class="comment open">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제3절 기울기</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P15" onclick="law.goTarget('15')"><span>제15조</span> (정거장 밖의 기울기한도)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P16" onclick="law.goTarget('16')"><span>제16조</span> (정거장 안의 기울기
														한도)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P17" onclick="law.goTarget('17')"><span>제17조</span> (측선의 기울기)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P18" onclick="law.goTarget('18')"><span>제18조</span> (종곡선)</a></li>
											</ul>
										</li>
										<li class="comment">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제4절 건축한계</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P19" onclick="law.goTarget('19')"><span>제19조</span> (건축한계)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P20" onclick="law.goTarget('20')"><span>제20조</span> (직선구간의
														건축한계)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P21" onclick="law.goTarget('21')"><span>제21조</span> (곡선구간의
														건축한계)</a></li>
											</ul>
										</li>
										<li class="comment">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제5절 궤도 [개정 2010.10.8]</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P22" onclick="law.goTarget('22')"><span>제22조</span> (궤도의 중심
														간격)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P23" onclick="law.goTarget('23')"><span>제23조</span> (곡선인 궤도의 중심
														간격)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P24" onclick="law.goTarget('24')"><span>제24조</span> (레일)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P25" onclick="law.goTarget('25')"><span>제25조</span> (도상의 두께 등)</a>
												</li>
											</ul>
										</li>
										<li class="comment">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제6절 구조물</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P26" onclick="law.goTarget('26')"><span>제26조</span> (건축한계 외의 여유
														공간)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P27" onclick="law.goTarget('27')"><span>제27조</span> (도로면 등으로부터의
														간격)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P28" onclick="law.goTarget('28')"><span>제28조</span> </a></li>
											</ul>
										</li>
										<li class="comment">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제7절 분기 [개정 2010.10.8]</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P29" onclick="law.goTarget('29')"><span>제29조</span> (분기)</a></li>
											</ul>
										</li>
									</ul>
								</li>
								<li class="active_d1 open">
									<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
									<a href="#" class="tit">제3장 정거장</a>
									<ul>
										<li class="comment"><a name="joMoveLink" href="#P30" onclick="law.goTarget('30')"><span>제30조</span> (정거장의 시설ㆍ설비)</a></li>
										<li class="comment"><a name="joMoveLink" href="#P30X2" onclick="law.goTarget('30X2')"><span>제30조의2</span>
												(승강장의 안전시설)</a></li>
										<li class="comment"><a name="joMoveLink" href="#P30X3" onclick="law.goTarget('30X3')"><span>제30조의3</span>
												(정거장 간의 거리)</a></li>
										<li class="comment"><a name="joMoveLink" href="#P31" onclick="law.goTarget('31')"><span>제31조</span> (승강장의 너비 등)</a><span class="icon_red"> [변경]</span></li>
										<li class="comment"><a name="joMoveLink" href="#P32" onclick="law.goTarget('32')"><span>제32조</span> (승강장 연단의 높이)</a></li>
										<li class="comment"><a name="joMoveLink" href="#P33" onclick="law.goTarget('33')"><span>제33조</span> (승강장 연단과 차량한계와의
												간격)</a></li>
										<li class="comment"><a name="joMoveLink" href="#P34" onclick="law.goTarget('34')"><span>제34조</span> (승강장의 길이 및 통로의 폭)</a>
										</li>
										<li class="comment"><a name="joMoveLink" href="#P35" onclick="law.goTarget('35')"><span>제35조</span> (노면 출입구 및 지상보행로)</a>
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
												<li class="comment"><a name="joMoveLink" href="#P36" onclick="law.goTarget('36')"><span>제36조</span> (전기방식)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P37" onclick="law.goTarget('37')"><span>제37조</span> (전선로)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P38" onclick="law.goTarget('38')"><span>제38조</span> (전식방지대책)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P39" onclick="law.goTarget('39')"><span>제39조</span> </a></li>
												<li class="comment"><a name="joMoveLink" href="#P40" onclick="law.goTarget('40')"><span>제40조</span> (급전선의 차단)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P41" onclick="law.goTarget('41')"><span>제41조</span> (예비전원설비)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P42" onclick="law.goTarget('42')"><span>제42조</span> (전차선로)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P43" onclick="law.goTarget('43')"><span>제43조</span> (전차선의 기울기)</a>
												</li>
											</ul>
										</li>
										<li class="comment">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제2절 환기·배수 및 통신설비</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P44" onclick="law.goTarget('44')"><span>제44조</span> (환기설비)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P45" onclick="law.goTarget('45')"><span>제45조</span> (배수설비)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P46" onclick="law.goTarget('46')"><span>제46조</span> (통신설비의 설치
														등)</a></li>
											</ul>
										</li>
										<li class="comment">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제3절 신호ㆍ보안설비 등 [개정 2010.10.8]</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P47" onclick="law.goTarget('47')"><span>제47조</span> (본선 열차의 신호방식)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P48" onclick="law.goTarget('48')"><span>제48조</span> (신호장치 등의
														설치)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P49" onclick="law.goTarget('49')"><span>제49조</span> (선로전환기와 신호장치와의
														연동)</a></li>
												<li class="comment"><a name="joMoveLink" href="#P50" onclick="law.goTarget('50')"><span>제50조</span> (보안장치)</a>
												</li>
												<li class="comment"><a name="joMoveLink" href="#P50X2" onclick="law.goTarget('50X2')"><span>제50조의2</span> (자동요금징수설비)</a>
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
												<li class="comment"><a name="joMoveLink" href="#P51" onclick="law.goTarget('51')"><span>제51조</span> </a></li>
												<li class="comment"><a name="joMoveLink" href="#P52" onclick="law.goTarget('52')"><span>제52조</span> </a></li>
												<li class="comment"><a name="joMoveLink" href="#P53" onclick="law.goTarget('53')"><span>제53조</span> </a></li>
											</ul>
										</li>
										<li class="comment">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제2절 삭제 [2000·3·18]</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P54" onclick="law.goTarget('54')"><span>제54조</span> </a></li>
												<li class="comment"><a name="joMoveLink" href="#P55" onclick="law.goTarget('55')"><span>제55조</span> </a></li>
												<li class="comment"><a name="joMoveLink" href="#P56" onclick="law.goTarget('56')"><span>제56조</span> </a></li>
											</ul>
										</li>
										<li class="comment">
											<button class="tNavToggle minus" onclick="fn_table_index(this)"></button>
											<p class="tit">제3절 삭제 [2000·3·18]</p>
											<ul>
												<li class="comment"><a name="joMoveLink" href="#P57" onclick="law.goTarget('57')"><span>제57조</span> </a></li>
												<li class="comment"><a name="joMoveLink" href="#P58" onclick="law.goTarget('58')"><span>제58조</span> </a></li>
												<li class="comment"><a name="joMoveLink" href="#P59" onclick="law.goTarget('59')"><span>제59조</span> </a></li>
												<li class="comment"><a name="joMoveLink" href="#P60" onclick="law.goTarget('60')"><span>제60조</span> </a></li>
											</ul>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="con-area clear">
					<div class="con-div case-div step3-con scroll-y">
						<div class="case_info highlighter-context">
							<div>
								<em>제1조</em> (목적)   이 법은 한국재정정보원을 설립하여 디지털예산회계시스템을 안정적으로 운영·관리하고 국가재정 관련 정책의 개발을 지원함으로써 국가재정 업무의 발전에 이바지하고, 디지털예산회계시스템의 수출 등 재정정보화 분야의 국제협력을 강화함으로써 국제사회의 재정정보화에 이바지함을 목적으로 한다.<br><br>
							</div>
							<div>
								<em>제1조</em> (목적)   이 법은 한국재정정보원을 설립하여 디지털예산회계시스템을 안정적으로 운영·관리하고 국가재정 관련 정책의 개발을 지원함으로써 국가재정 업무의 발전에 이바지하고, 디지털예산회계시스템의 수출 등 재정정보화 분야의 국제협력을 강화함으로써 국제사회의 재정정보화에 이바지함을 목적으로 한다.<br><br>
							</div>
							<div>
								<em>제1조</em> (목적)   이 법은 한국재정정보원을 설립하여 디지털예산회계시스템을 안정적으로 운영·관리하고 국가재정 관련 정책의 개발을 지원함으로써 국가재정 업무의 발전에 이바지하고, 디지털예산회계시스템의 수출 등 재정정보화 분야의 국제협력을 강화함으로써 국제사회의 재정정보화에 이바지함을 목적으로 한다.<br><br>
							</div>
							<div>
								<em>제1조</em> (목적)   이 법은 한국재정정보원을 설립하여 디지털예산회계시스템을 안정적으로 운영·관리하고 국가재정 관련 정책의 개발을 지원함으로써 국가재정 업무의 발전에 이바지하고, 디지털예산회계시스템의 수출 등 재정정보화 분야의 국제협력을 강화함으로써 국제사회의 재정정보화에 이바지함을 목적으로 한다.<br><br>
							</div>
							<div>
								<em>제1조</em> (목적)   이 법은 한국재정정보원을 설립하여 디지털예산회계시스템을 안정적으로 운영·관리하고 국가재정 관련 정책의 개발을 지원함으로써 국가재정 업무의 발전에 이바지하고, 디지털예산회계시스템의 수출 등 재정정보화 분야의 국제협력을 강화함으로써 국제사회의 재정정보화에 이바지함을 목적으로 한다.<br><br>
							</div>
							<div>
								<em>제1조</em> (목적)   이 법은 한국재정정보원을 설립하여 디지털예산회계시스템을 안정적으로 운영·관리하고 국가재정 관련 정책의 개발을 지원함으로써 국가재정 업무의 발전에 이바지하고, 디지털예산회계시스템의 수출 등 재정정보화 분야의 국제협력을 강화함으로써 국제사회의 재정정보화에 이바지함을 목적으로 한다.<br><br>
							</div>
						</div>
					</div>
					<div class="con-div case-div step3-con scroll-y">
						<div class="case_info highlighter-context">
							<div>
								<em>제1조</em> (목적)   이 법은 한국재정정보원을 설립하여 디지털예산회계시스템을 안정적으로 운영·관리하고 국가재정 관련 정책의 개발을 지원함으로써 국가재정 업무의 발전에 이바지하고, 디지털예산회계시스템의 수출 등 재정정보화 분야의 국제협력을 강화함으로써 국제사회의 재정정보화에 이바지함을 목적으로 한다.<br><br>
							</div>
							<div>
								<em>제1조</em> (목적)   이 법은 한국재정정보원을 설립하여 디지털예산회계시스템을 안정적으로 운영·관리하고 국가재정 관련 정책의 개발을 지원함으로써 국가재정 업무의 발전에 이바지하고, 디지털예산회계시스템의 수출 등 재정정보화 분야의 국제협력을 강화함으로써 국제사회의 재정정보화에 이바지함을 목적으로 한다.<br><br>
							</div>
						</div>
					</div>
					<div class="con-div case-div step3-con scroll-y">
						<div class="case_info highlighter-context">
							<div>
								<em>제1조</em> (목적)   이 법은 한국재정정보원을 설립하여 디지털예산회계시스템을 안정적으로 운영·관리하고 국가재정 관련 정책의 개발을 지원함으로써 국가재정 업무의 발전에 이바지하고, 디지털예산회계시스템의 수출 등 재정정보화 분야의 국제협력을 강화함으로써 국제사회의 재정정보화에 이바지함을 목적으로 한다.<br><br>
							</div>
							<div>
								<em>제1조</em> (목적)   이 법은 한국재정정보원을 설립하여 디지털예산회계시스템을 안정적으로 운영·관리하고 국가재정 관련 정책의 개발을 지원함으로써 국가재정 업무의 발전에 이바지하고, 디지털예산회계시스템의 수출 등 재정정보화 분야의 국제협력을 강화함으로써 국제사회의 재정정보화에 이바지함을 목적으로 한다.<br><br>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--	끝 : 3단 본문	-->
</div>
<!--	끝 : 본문	-->
</body>
</html>
