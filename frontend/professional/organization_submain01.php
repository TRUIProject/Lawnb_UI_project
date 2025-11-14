<?php include '../include/header_sub.php'; ?>
<div class="container-wrap">
	<div class="container-inner">
		<h2 class="sub-main-tit clear">조직도 검색</h2>
		<div class="bg-border">
			<div class="sub-main-pd">
				<div class="mb-25 mt-10">
					<ul class="ul-style08">
						<li data-id="1032">헌법재판소</li>
						<li class="this-page" data-id="1000">법원</li>
						<li data-id="1001">검찰청</li>
						<li data-id="1052">고위공직자범죄수사처</li>
						<li data-id="1009">법학전문 대학원</li>
						<li data-id="1010">법과대학</li>
					</ul>
				</div>
				<div class="clear">
					<div class="center-index">
						<div id="divOrgMenu" class="accordion">
							<section>
								<h4 class="hide">group</h4>
								<p class="chg_tag on"><a href="#" data-id="100156">대법원</a></p>
								<p class="chg_tag"><a href="#" data-id="100170">법원행정처</a></p>
								<p class="chg_tag"><a href="#" data-id="100172">법원공무원교육원</a></p>
								<p class="chg_tag"><a href="#" data-id="100168">사법연수원</a></p>
								<p class="chg_tag"><a href="#" data-id="100169">법원도서관</a></p>
								<p class="chg_tag"><a href="#" data-id="135693">사법정책연구원</a></p>
								<p class="chg_tag"><a href="#" data-id="135694">양형위원회</a></p>
								<ol class="keyword-list list-block">
									<li class="keyword-dropdown on">
										<button class="keyword-list-btn" data-bs-target="#location-con-01"
										        onclick="fn_keyword_list_open(this)"></button>
										<div class="str keyword-list-hd">서울고등법원</div>
										<ol id="location-con-01" class="keyword-list list-block not-input">
											<li><a href="#" data-id="100000">서울중앙지방법원</a></li>
											<li><a href="#" data-id="100167">서울가정법원</a></li>
											<li><a href="#" data-id="100163">서울행정법원</a></li>
											<li><a href="#" data-id="134059">서울회생법원</a></li>
											<li><a href="#" data-id="100001">서울동부지방법원</a></li>
											<li><a href="#" data-id="100002">서울남부지방법원</a></li>
											<li><a href="#" data-id="100003">서울북부지방법원</a></li>
											<li><a href="#" data-id="100004">서울서부지방법원</a></li>
											<li class="keyword-dropdown sub-dropdown on">
												<button class="keyword-list-btn" data-bs-target="#location-con-01-01"
												        onclick="fn_keyword_list_open(this)"></button>
												<div class="str keyword-list-hd">의정부지방법원</div>
												<ol id="location-con-01-01" class="keyword-list list-block not-input">
													<li><a href="#" data-id="100012">의정부지방법원 고양지원</a></li>
													<li><a href="#" data-id="135665">의정부지방법원 남양주지원</a></li>
												</ol>
											</li>
											<li class="keyword-dropdown sub-dropdown on">
												<button class="keyword-list-btn" data-bs-target="#location-con-01-02"
												        onclick="fn_keyword_list_open(this)"></button>
												<div class="str keyword-list-hd">인천지방법원</div>
												<ol id="location-con-01-02" class="keyword-list list-block not-input">
													<li><a href="#" data-id="100017">인천지방법원 부천지원</a></li>
												</ol>
											</li>
											<li><a href="#" data-id="134060">인천가정법원</a></li>
											<li class="keyword-dropdown sub-dropdown on">
												<button class="keyword-list-btn" data-bs-target="#location-con-01-03"
												        onclick="fn_keyword_list_open(this)"></button>
												<div class="str keyword-list-hd">춘천지방법원</div>
												<ol id="location-con-01-03" class="keyword-list list-block not-input">
													<li><a href="#" data-id="100035">춘천지방법원 강릉지원</a></li>
													<li><a href="#" data-id="100038">춘천지방법원 원주지원</a></li>
													<li><a href="#" data-id="100040">춘천지방법원 속초지원</a></li>
													<li><a href="#" data-id="100043">춘천지방법원 영월지원</a></li>
												</ol>
											</li>
										</ol>
									</li>
								</ol>
							</section>
						</div>
					</div>
					<div class="center-view">
						<div class="clear dark-line sub-main-group">
							<h2 class="c-left">대법원</h2>
							<div class="c-right btn_more clear">
								<a href="javascript:mydesk.myPersonalization('VIEWMY05')">
									<i class="icon-printer" data-icon=""></i>인쇄
								</a>
								<a href="#" onclick="org.orgInfoMapPopup()">법조기관 관할표</a>
							</div>
						</div>
						<div class="c-red fs-14 mb-20 mt-10">
							<i class="icon-16 fs-16" data-icon=""></i>
							로앤비 법조인 정보를 근거로 검사, 변호사를 사칭하는 보이스피싱이 급증하고 있으니 주의바랍니다.
							<a class="btn-s btn-none" href="">내용 자세히 보기 </a>
						</div>
						<div class="submain_group title organi"><h3>기본정보<span
										class="btn_more">(업데이트 기준일 : 2025.03.04)</span></h3>
							<div class="lawyer-info01"><span>대표전화 : 02-3480-1100</span><br><span>주소 : [06590]서울시 서초구 서초대로 219</span><br><span>홈페이지 : <a
											href="https://www.scourt.go.kr/supreme" target="_blank">https://www.scourt.go.kr/supreme</a></span><br><span>관할구역 : 전국</span>
							</div>
						</div>
						<div class="submain_group title organi">
							<h3>부서별 전화번호<span id="div01-btn" class="btn_more open _ic" onclick="fn_toggle_slide(this)" data-target="#div01" data-wrap="#div01-btn"></span></h3>
							<div id="div01" class="lawyer-info01 tel hide">
								<span>대법관 : </span><span>전속재판연구관 : </span><span>공동재판연구관실 : </span>
							</div>
						</div>
						<div class="submain_group title organi"><h3>구성원정보</h3>
							<div class="lawyer-info01"><span>대법원장 : <a href="/Info/ContentView?sid=P000A634AB28C023"
									>조희대</a> (13기)</span><br><span>수석재판연구관 : <a
											href="/Info/ContentView?sid=P000302862547630">고홍석</a> (28기)</span><br><span>선임재판연구관 : <a
											href="/Info/ContentView?sid=P000BAFF393593EE">정상규</a> (29기)</span>
							</div>
						</div>
						<div class="submain_group organi divflag court">
							<div class="lawyer-info01 organi_title"><p>대법관</p></div>
							<div class="lawyer-info01 small_unit">
								<div class="s_unit">
									<span>대법관</span>
									<ul>
										<li><a href="/Info/ContentView?sid=P0004098F448ACF2">노태악</a>
											(16기)
										</li>
										<li><a href="/Info/ContentView?sid=P0005F672E321CDE">서경환</a>
											(21기)
										</li>
										<li><a href="/Info/ContentView?sid=P000D50DC794DF1E">신숙희</a>
											(25기)
										</li>
										<li><a href="/Info/ContentView?sid=P000194B961D769D">노경필</a>
											(23기)
										</li>
										<li><a href="/Info/ContentView?sid=P000684FA8CA81DB">오경미</a>
											(25기)
										</li>
										<li><a href="/Info/ContentView?sid=P000EBF8DF01044E">권영준</a>
											(25기)
										</li>
										<li><a href="/Info/ContentView?sid=P000B210B0C42576">박영재</a>
											(22기)
										</li>
										<li><a href="/Info/ContentView?sid=P000FB11629090EE">이흥구</a>
											(22기)
										</li>
										<li><a href="/Info/ContentView?sid=P0004F5E999D72D0">오석준</a>
											(19기)
										</li>
										<li><a href="/Info/ContentView?sid=P0004C044732612F">엄상필</a>
											(23기)
										</li>
										<li><a href="/Info/ContentView?sid=P000E066CD351898">이숙연</a>
											(26기)
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="submain_group organi divflag court">
							<div class="lawyer-info01 organi_title"><p>전속재판연구관</p></div>
							<div class="lawyer-info01 small_unit">
								<div class="s_unit"><span>전속재판연구관</span>
									<ul>
										<li><a href="/Info/ContentView?sid=P000D3AD35533EEA">김태준</a>
											(34기)
										</li>
										<li><a href="/Info/ContentView?sid=P000F679F6834142">홍주현</a>
											(40기)
										</li>
										<li><a href="/Info/ContentView?sid=P000F782C55A1B52">장재원</a>
											(36기)
										</li>
										<li><a href="/Info/ContentView?sid=P000939AF210EA42">임윤한</a>
											(39기)
										</li>
										<li><a href="/Info/ContentView?sid=P0009D3F74E7DD0B">강지웅</a>
											(35기)
										</li>
										<li><a href="/Info/ContentView?sid=P0009F6D5C0A53AD">김선중</a>
											(40기)
										</li>
										<li><a href="/Info/ContentView?sid=P000E601AF6FB6E6">안석</a>
											(34기)
										</li>
										<li><a href="/Info/ContentView?sid=P0002A9F05A7F09C">채희인</a>
											(40기)
										</li>
										<li><a href="/Info/ContentView?sid=P00065CB2353ACA4">이미선</a>
											(34기)
										</li>
										<li><a href="/Info/ContentView?sid=P0004A033F9CCD01">오소현</a>
											(39기)
										</li>
										<li><a href="/Info/ContentView?sid=P00018C827F9E085">이지혜</a>
											(35기)
										</li>
										<li><a href="/Info/ContentView?sid=P0009B390EF359F7">백지예</a>
											(39기)
										</li>
										<li><a href="/Info/ContentView?sid=P0001034DBC87858">정성민</a>
											(36기)
										</li>
										<li><a href="/Info/ContentView?sid=P0006F8173ABDCA1">이이영</a>
											(39기)
										</li>
										<li><a href="/Info/ContentView?sid=P000D3207C9A34AD">안금선</a>
											(36기)
										</li>
										<li><a href="/Info/ContentView?sid=P00041F0DCB91E0C">봉지수</a>
											(40기)
										</li>
										<li><a href="/Info/ContentView?sid=P000D44B4038F2DE">차진석</a>
											(35기)
										</li>
										<li><a href="/Info/ContentView?sid=P0005656B24CCA5B">강성우</a>
											(39기)
										</li>
										<li><a href="/Info/ContentView?sid=P000ED6998749B0F">남우현</a>
											(35기)
										</li>
										<li><a href="/Info/ContentView?sid=P0000FC4FB1EB3CC">최유경</a>
											(39기)
										</li>
										<li><a href="/Info/ContentView?sid=P000BEC0C2AD1A95">김유진</a>
											(35기)
										</li>
										<li><a href="/Info/ContentView?sid=P000AD4AFAC644F1">이영제</a>
											(40기)
										</li>
										<li><a href="/Info/ContentView?sid=P000B3E0A41B902D">이도행</a>
											(34기)
										</li>
										<li><a href="/Info/ContentView?sid=P00038C2C30789A0">전흔자</a>
											(39기)
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="submain_group organi divflag court">
							<div class="lawyer-info01 organi_title"><p>공동재판연구관실</p></div>
							<div class="lawyer-info01 small_unit">
								<div class="s_unit"><span>공동재판연구관실</span>
									<ul>
										<li><a href="/Info/ContentView?sid=P000CA3C0A0D01FD">강경미</a>
											(39기)
										</li>
										<li><a href="/Info/ContentView?sid=P000337CEE0E4F97">강경표</a>
											(31기)
										</li>
										<li><a href="/Info/ContentView?sid=P000CFD18DBB5016">강동훈</a>
											(39기)
										</li>
										<li><a href="/Info/ContentView?sid=P000591FD16A23F1">강산아</a>
											(41기)
										</li>
										<li><a href="/Info/ContentView?sid=P000631D434DBAFF">강성훈</a>
											(39기)
										</li>
										<li><a href="/Info/ContentView?sid=P000816FE9CAD591">곽동준</a>
											(41기)
										</li>
										<li><a href="/Info/ContentView?sid=P000EEC428281C44">구지인</a>
											(41기)
										</li>
										<li><a href="/Info/ContentView?sid=P0004D7BAF853B5B">권영혜</a>
											(39기)
										</li>
										<li><a href="/Info/ContentView?sid=P00012EEF42BCA75">김민주</a>
											(39기)
										</li>
										<li><a href="/Info/ContentView?sid=P000F832195FD20C">김봉준</a>
											(41기)
										</li>
										<li><a href="/Info/ContentView?sid=P0009D8B57AA2F14">김수정</a>
											(39기)
										</li>
										<li><a href="/Info/ContentView?sid=P0000B0AC7DFDDE6">김시원</a>
											(41기)
										</li>
										<li><a href="/Info/ContentView?sid=P000D95E384FCB2E">김영욱</a>
											(34기)
										</li>
										<li><a href="/Info/ContentView?sid=P000B2882C583D4C">김유미</a>
											(41기)
										</li>
										<li><a href="/Info/ContentView?sid=P000F4B2E15F37F8">김이슬</a>
											(41기)
										</li>
										<li><a href="/Info/ContentView?sid=P000C0C8EF6D6FE7">김정기</a>
											(41기)
										</li>
										<li><a href="/Info/ContentView?sid=P000CE49FA83EE80">김정성</a>
											(41기)
										</li>
										<li><a href="/Info/ContentView?sid=P00001B12DCC8E8A">김정환</a>
											(40기)
										</li>
										<li><a href="/Info/ContentView?sid=P00098ACA2DC6E5B">김종신</a>
											(39기)
										</li>
										<li><a href="/Info/ContentView?sid=P000720246E000E7">김한철</a>
											(32기)
										</li>
										<li><a href="/Info/ContentView?sid=P00049774D9E5CC1">박상한</a>
											(41기)
										</li>
										<li><a href="/Info/ContentView?sid=P00061971DD01203">박소연</a>
											(40기)
										</li>
										<li><a href="/Info/ContentView?sid=P000007CFDD89C1B">박예지</a>
											(40기)
										</li>
										<li><a href="/Info/ContentView?sid=P000A199E3EA1A0E">박철홍</a>
											(40기)
										</li>
										<li>백두선 (기)</li>
										<li><a href="/Info/ContentView?sid=P0005C6C0B842B51">백숙종</a>
											(34기)
										</li>
										<li>백우현 (기)</li>
										<li><a href="/Info/ContentView?sid=P0006DDCEE6E3E1D">서경민</a>
											(41기)
										</li>
										<li><a href="/Info/ContentView?sid=P000402130DCB318">서범욱</a>
											(39기)
										</li>
										<li><a href="/Info/ContentView?sid=P000FDFA28D94FDD">성기석</a>
											(41기)
										</li>
										<li><a href="/Info/ContentView?sid=P0008FCCDDA541CF">성하경</a>
											(39기)
										</li>
										<li><a href="/Info/ContentView?sid=P000BAF6D0B619E9">손인희</a>
											(41기)
										</li>
										<li><a href="/Info/ContentView?sid=P0001E9B02C144AC">손태원</a>
											(39기)
										</li>
										<li><a href="/Info/ContentView?sid=P0007C8B32EB341E">손호영</a>
											(40기)
										</li>
										<li><a href="/Info/ContentView?sid=P000E74E994709B6">신동일</a>
											(41기)
										</li>
										<li><a href="/Info/ContentView?sid=P000245DD9B92B1B">신성훈</a>
											(41기)
										</li>
										<li><a href="/Info/ContentView?sid=P000226860DEFBFB">오수빈</a>
											(40기)
										</li>
										<li><a href="/Info/ContentView?sid=P0006961178B5F48">원운재</a>
											(41기)
										</li>
										<li><a href="/Info/ContentView?sid=P000E5A9574B65F6">유선우</a>
											(40기)
										</li>
										<li><a href="/Info/ContentView?sid=P000187D6170C9FA">유지상</a>
											(41기)
										</li>
										<li><a href="/Info/ContentView?sid=P000E1A44EEBB816">윤민수</a>
											(40기)
										</li>
										<li><a href="/Info/ContentView?sid=P0001F1603953345">윤성열</a>
											(35기)
										</li>
										<li><a href="/Info/ContentView?sid=P0005C8A1594232A">윤성진</a>
											(41기)
										</li>
										<li><a href="/Info/ContentView?sid=P00005A2FDFB4A7F">윤성헌</a>
											(41기)
										</li>
										<li><a href="/Info/ContentView?sid=P0002818998DC0E2">윤지영</a>
											(40기)
										</li>
										<li><a href="/Info/ContentView?sid=P0000333F9DC2A0C">이경호</a>
											(39기)
										</li>
										<li><a href="/Info/ContentView?sid=P0006D81347315DA">이고은</a>
											(40기)
										</li>
										<li><a href="/Info/ContentView?sid=P0006AEF4B892B6F">이석준</a>
											(40기)
										</li>
										<li><a href="/Info/ContentView?sid=P0004D6611BF8B48">이승훈</a>
											(38기)
										</li>
										<li><a href="/Info/ContentView?sid=P000FB31580D4A10">이승훈</a>
											(39기)
										</li>
										<li><a href="/Info/ContentView?sid=P0001CF20DBDF483">이영진</a>
											(34기)
										</li>
										<li><a href="/Info/ContentView?sid=P000918F1C834BF4">이용우</a>
											(32기)
										</li>
										<li><a href="/Info/ContentView?sid=P0003163212B7DBA">이정아</a>
											(41기)
										</li>
										<li><a href="/Info/ContentView?sid=P000C7E604288571">이정호</a>
											(39기)
										</li>
										<li><a href="/Info/ContentView?sid=P000A94B0332019A">이한상</a>
											(35기)
										</li>
										<li><a href="/Info/ContentView?sid=P0001732A2C3BB04">이혜민</a>
											(38기)
										</li>
										<li><a href="/Info/ContentView?sid=P000F124286E1384">이희수</a>
											(40기)
										</li>
										<li><a href="/Info/ContentView?sid=P00010024D7B6F83">장우석</a>
											(40기)
										</li>
										<li><a href="/Info/ContentView?sid=P0003ED5A13EA250">전경세</a>
											(41기)
										</li>
										<li><a href="/Info/ContentView?sid=P0007E283315BB52">전재현</a>
											(41기)
										</li>
										<li><a href="/Info/ContentView?sid=P000B28AF6184135">정교형</a>
											(39기)
										</li>
										<li><a href="/Info/ContentView?sid=P00029B730FBC889">정성종</a>
											(41기)
										</li>
										<li><a href="/Info/ContentView?sid=P0008DB85A761A6B">정우철</a>
											(40기)
										</li>
										<li><a href="/Info/ContentView?sid=P00084913091CAB1">정유미</a>
											(41기)
										</li>
										<li><a href="/Info/ContentView?sid=P0003DE089DF4BFE">정윤주</a>
											(41기)
										</li>
										<li><a href="/Info/ContentView?sid=P0009DBD66FA695B">조연수</a>
											(39기)
										</li>
										<li><a href="/Info/ContentView?sid=P00099D18D892988">조장환</a>
											(40기)
										</li>
										<li><a href="/Info/ContentView?sid=P000E9DCE32CB3F0">조재헌</a>
											(39기)
										</li>
										<li><a href="/Info/ContentView?sid=P000CF82DC273432">최문수</a>
											(36기)
										</li>
										<li><a href="/Info/ContentView?sid=P00090F157AFB67F">최민석</a>
											(40기)
										</li>
										<li><a href="/Info/ContentView?sid=P000F02082EA4094">최지아</a>
											(39기)
										</li>
										<li><a href="/Info/ContentView?sid=P0006E5672484529">함철환</a>
											(40기)
										</li>
										<li><a href="/Info/ContentView?sid=P00007879DAFC926">허준기</a>
											(41기)
										</li>
										<li><a href="/Info/ContentView?sid=P000BF54D6BE4C80">홍승모</a>
											(41기)
										</li>
										<li><a href="/Info/ContentView?sid=P0008123A1FF7434">우지훈</a>
											(변호사시험 1회)
										</li>
									</ul>
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
