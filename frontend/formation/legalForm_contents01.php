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
	<div class="ct-left">
		<div class="ct-pt h-100p">
			<div class="str h-100p">
				<div class="ct-scroll">
					<div class="table_index tree">
						<div class="str">
							<h3 class="ct-tit">목차</h3>
						</div>
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
		</div>
	</div>
	<div class="ct-right">
		<div class="ct-pt h-100p">
			<div class="ct-scroll">
				<div class="ct-pw">
					<div class="border-b">
						<div class="icon-exclamation-triangle icon-w25-b mb-5"></div>
						<div class="c-58 fs-14">
							로앤비 사이트의 서식은 (주)톰슨로이터코리아 또는 서식 제공업체 및 저작자와의 계약을 통하여 제공되는 저작물입니다. 이를 상업적 이용, 무단 복제 및 배포 등 불법적으로 이용할 시에는 저작권법 및 관계법령에 따른 책임을 질 수 있습니다.
						</div>
					</div>
					<div class="border-b">
						<div class="str">
							<h3 class="ct-tit">Acrobat Reader 다운로드 <i class="icon-download3" data-icon=""></i></h3>
						</div>
						<ul class="ul-dot link-list block-list mt-10">
							<li>
								<div class="dot-cell">
									<a href="" class="dis-b fs-14 c-blue">이 자료는 Acrobat Reader를 설치해야 볼 수 있는 PDF 파일입니다.
										만약 오류가 있으면 PC에 설치된 Acrobat 프로그램을 삭제하고
										새로 다운받아 설치해 보십시오.</a>
								</div>
							</li>
						</ul>
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
						<div class="ct-title str clear">
							<div class="tit-div c-left">
								<h2 class="tit">가등기말소청구의소(경매받은물건)</h2>
								<p class="tit-sub">민사실무대전Ⅰ: 소제기절차와 소장편 [제18판] / 발간연도 : 2022.04 / 출판사 : 백영사</p>
							</div>
							<div class="c-right">
								<a href="" class="badge badge-blue">PDF 다운로드</a>
								<a href="" class="badge badge-blue">HWP 다운로드</a>
							</div>
						</div>
						<div class="main_container_view_inner">
							여기에 frame을 위치해주세요
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!--	끝 : 본문	-->
</body>
</html>
