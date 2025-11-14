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
				<a href="./legalCompar_content01.php" class="badge">법규 비교</a>
				<a href="./legalCompar_content02.php" class="badge on">본문 비교</a>
			</div>
		</div>
	</div>
	<!--	끝 : 서브헤더	-->
	<!--	시작 : 3단 본문	-->
	<div id="step3-container" class="step3-container">
		<div class="w1600 clear">
			<div id="step3-button-wrap" class="flex_box">
				<div class="box_third flex_1" title="닫기" style="overflow:inherit"><div class="flex_close old_close_1" onclick="fn_step3_close(1)"></div></div>
				<div class="box_third flex_2" title="닫기" style="overflow:inherit"><div class="flex_close old_close_2" onclick="fn_step3_close(2)"></div></div>
				<div class="box_third flex_3" title="닫기" style="overflow:inherit"><div class="flex_close old_close_3" onclick="fn_step3_close(3)"></div></div>
			</div>
			<div id="step3-con-wrap" class="h-100p">
				<div class="con-div box_third flex_1">
					<div class="history-hlist clear">
						<p class="c-left tit">히스토리 조회</p>
						<ul class="history-ul c-left ml-10 clear">
							<li class="on"><a href="" class="link">2004다41651</a> <button class="btn"><span class="icon icon-x-mark icon-w15"></span></button></li>
							<li><a href="" class="link">2004다41651</a> <button class="btn"><span class="icon icon-x-mark icon-w15"></span></button></li>
						</ul>
					</div>
					<div class="search-wrap b-b">
						<div class="dis-t w-100p str">
							<div class="dis-tr">
								<div class="select-tc dis-tc pr-10">
									<select class="select-css01">
										<option>행정규칙</option>
										<option>선택1</option>
										<option>선택2</option>
										<option>선택3</option>
									</select>
								</div>
								<div class="input-tc is-tc pr-10">
									<input type="search" name="nWord1" class="input-css01" placeholder="검색어">
								</div>
								<div class="btn-tc dis-tc">
									<button class="btn" onclick="fn_add_class_on('#lrlist1')">검색</button>
								</div>
							</div>
							<div id='lrlist1' class='school_search'>
								<p class='fw-700 str'>
									법령명을 선택하세요.
									<button class='icon-x-mark icon-w25 btn-s str-rt' onclick="fn_remove_class_on('#lrlist1')"></button>
								</p>
								<div class='lawval' data-val='L0006AF53B487A94' data-txt='건축서비스산업 진흥법'>건축서비스산업 진흥법<span>선택</span>
								</div>
								<div class='lawval' data-val='L0004BCE29EB45D7' data-txt='건축서비스산업 진흥법 시행규칙'>건축서비스산업 진흥법
									시행규칙<span>선택</span></div>
								<div class='lawval' data-val='L00015B683FB0A15' data-txt='건축서비스산업 진흥법 시행령'>건축서비스산업 진흥법
									시행령<span>선택</span></div>
								<div class='lawval' data-val='L0007715DEF6138C'
								     data-txt='농업과학기술정보서비스의 제공 및 이용 활성화에 관한 법률'>농업과학기술정보서비스의 제공 및 이용 활성화에 관한
									법률<span>선택</span></div>
								<div class='lawval' data-val='L000137159B954AC'
								     data-txt='농업과학기술정보서비스의 제공 및 이용 활성화에 관한 법률 시행규칙'>농업과학기술정보서비스의 제공 및 이용 활성화에 관한 법률
									시행규칙<span>선택</span></div>
								<div class='lawval' data-val='L000C3B30540D47F'
								     data-txt='농업과학기술정보서비스의 제공 및 이용 활성화에 관한 법률 시행령'>농업과학기술정보서비스의 제공 및 이용 활성화에 관한 법률
									시행령<span>선택</span></div>
								<div class='lawval' data-val='L000932C4BB26D79'
								     data-txt='농촌 지역 공동체 기반 경제·사회 서비스 활성화에 관한 법률'>농촌 지역 공동체 기반 경제·사회 서비스 활성화에 관한
									법률<span>선택</span></div>
								<div class='lawval' data-val='L00031BBF690737E'
								     data-txt='농촌 지역 공동체 기반 경제·사회 서비스 활성화에 관한 법률 시행규칙'>농촌 지역 공동체 기반 경제·사회 서비스 활성화에 관한 법률
									시행규칙<span>선택</span></div>
								<div class='lawval' data-val='L0009424C902D583'
								     data-txt='농촌 지역 공동체 기반 경제·사회 서비스 활성화에 관한 법률 시행령'>농촌 지역 공동체 기반 경제·사회 서비스 활성화에 관한 법률
									시행령<span>선택</span></div>
								<div class='lawval' data-val='L0005DD59B9733D6' data-txt='부동산서비스산업 진흥법'>부동산서비스산업
									진흥법<span>선택</span></div>
								<div class='lawval' data-val='L000CFAED387A082' data-txt='부동산서비스산업 진흥법 시행규칙'>부동산서비스산업
									진흥법 시행규칙<span>선택</span></div>
								<div class='lawval' data-val='L0007D661336469E' data-txt='부동산서비스산업 진흥법 시행령'>부동산서비스산업 진흥법
									시행령<span>선택</span></div>
								<div class='lawval' data-val='L000BA0558547690' data-txt='사법서비스진흥기금 관리 및 운용에 관한 규칙'>
									사법서비스진흥기금 관리 및 운용에 관한 규칙<span>선택</span></div>
								<div class='lawval' data-val='L0004DF41370845A' data-txt='사회서비스 이용 및 이용권 관리에 관한 법률'>
									사회서비스 이용 및 이용권 관리에 관한 법률<span>선택</span></div>
								<div class='lawval' data-val='L0006BE848AE4DF0'
								     data-txt='사회서비스 이용 및 이용권 관리에 관한 법률 시행규칙'>사회서비스 이용 및 이용권 관리에 관한 법률
									시행규칙<span>선택</span></div>
								<div class='lawval' data-val='L00053D57F340A91' data-txt='사회서비스 이용 및 이용권 관리에 관한 법률 시행령'>
									사회서비스 이용 및 이용권 관리에 관한 법률 시행령<span>선택</span></div>
								<div class='lawval' data-val='L0004B01E7D8254F'
								     data-txt='사회서비스 지원 및 사회서비스원 설립·운영에 관한 법률'>사회서비스 지원 및 사회서비스원 설립·운영에 관한
									법률<span>선택</span></div>
								<div class='lawval' data-val='L00075AD3401A076'
								     data-txt='사회서비스 지원 및 사회서비스원 설립·운영에 관한 법률 시행규칙'>사회서비스 지원 및 사회서비스원 설립·운영에 관한 법률
									시행규칙<span>선택</span></div>
								<div class='lawval' data-val='L00034ED934DE25F'
								     data-txt='사회서비스 지원 및 사회서비스원 설립·운영에 관한 법률 시행령'>사회서비스 지원 및 사회서비스원 설립·운영에 관한 법률
									시행령<span>선택</span></div>
								<div class='lawval' data-val='L000660E61801FE3' data-txt='생활물류서비스산업발전법'>
									생활물류서비스산업발전법<span>선택</span></div>
								<div class='lawval' data-val='L00014F694E1CE77' data-txt='생활물류서비스산업발전법 시행규칙'>
									생활물류서비스산업발전법 시행규칙<span>선택</span></div>
								<div class='lawval' data-val='L0004E62AFB77175' data-txt='생활물류서비스산업발전법 시행령'>생활물류서비스산업발전법
									시행령<span>선택</span></div>
								<div class='lawval' data-val='L0009608A5128D10'
								     data-txt='정신건강증진 및 정신질환자 복지서비스 지원에 관한 법률'>정신건강증진 및 정신질환자 복지서비스 지원에 관한
									법률<span>선택</span></div>
								<div class='lawval' data-val='L0005F145A71717A'
								     data-txt='정신건강증진 및 정신질환자 복지서비스 지원에 관한 법률 시행규칙'>정신건강증진 및 정신질환자 복지서비스 지원에 관한 법률
									시행규칙<span>선택</span></div>
								<div class='lawval' data-val='L0009ED460B5E206'
								     data-txt='정신건강증진 및 정신질환자 복지서비스 지원에 관한 법률 시행령'>정신건강증진 및 정신질환자 복지서비스 지원에 관한 법률
									시행령<span>선택</span></div>
								<div class='lawval' data-val='L0001C6FF40C009E'
								     data-txt='지능형 해상교통정보서비스의 제공 및 이용 활성화에 관한 법률'>지능형 해상교통정보서비스의 제공 및 이용 활성화에 관한
									법률<span>선택</span></div>
								<div class='lawval' data-val='L0000EDA4D90955F'
								     data-txt='지능형 해상교통정보서비스의 제공 및 이용 활성화에 관한 법률 시행규칙'>지능형 해상교통정보서비스의 제공 및 이용 활성화에 관한 법률
									시행규칙<span>선택</span></div>
								<div class='lawval' data-val='L0002588A6D2970E'
								     data-txt='지능형 해상교통정보서비스의 제공 및 이용 활성화에 관한 법률 시행령'>지능형 해상교통정보서비스의 제공 및 이용 활성화에 관한 법률
									시행령<span>선택</span></div>
							</div>
						</div>
					</div>
					<div class="title-area b-b str">
						<div class="str-lt btn_change_search">
							<i class="icon-" data-icon=""></i>
							기준법규 설정
							<i class="icon- miju-wrap" data-icon="">
								<div id="miju_change_search" class="miju_box">
									<div class="miju_box_line">비교 기준 법규 설정하면 유사 규칙을 검색할 수 있습니다.</div>
								</div>
							</i>
						</div>
						<div class="tit-box">
							<p class="txt02">대기환경보전법</p>
							<p class="txt03">법률 제19660호 일부개정 2023. 08. 16.</p>
						</div>
						<div class="str-rt btn-open"><span class="icon-out-box icon-w15 icon"></span></div>
					</div>
					<div class="scroll-y case-div-m" style="height: calc(100% - 216px)">
						<div class="box_third joView" id="wrapper_sam">
							<div class="no_search_result" style="display: none;">
								선택한 법규가 없습니다.<br>
								기준법규 설정 후 이용해주세요.
							</div>
							<div id="samC1">
								<div class="normal"><strong>제1조</strong>(목적) 이 조례는 각종 재해·재난 등 긴급상황 발생 시 대처능력을 배양하고 안전사고에 대한 경각심을 고취하기 위해 한국안전체험관(이하 “안전체험관”이라 한다) 설치 및 운영에 관하여 필요한 사항을 규정함을 목적으로 한다. &lt;개정 2020. 12. 29.&gt;</div><a id="P2">  </a><div class="normal"><strong>제2조</strong>(설치 및 기능) 이 조례에 의하여 설치하는 안전체험관의 명칭 및 위치는 규칙으로 정하며, 청소년 및 국민에 대하여 재난의 직·간접 체험을 통한 안전 및 방재교육으로 안전문화 확산과 재난대비 능력 배양으로 삶의 질 향상 기능을 수행한다. &lt;개정 2020. 12. 29.&gt;</div><a id="P3">  </a><div class="normal"><strong>제3조</strong>(개관 및 휴관) <br>① 안전체험관은 제2항의 휴관일을 제외하고 매일 개관한다. &lt;개정 2020. 12. 29.&gt;<br>② 체험관의 휴관일은 다음 각 호와 같다. &lt;개정 2013.5.31.&gt;<br>1. &lt;삭제&gt;<br>2. 매주 월요일, 다만 월요일이 <a href="/Info/ContentView?sid=L000002404_2" class="popup_view">「관공서의 공휴일에 관한 규정」제2조</a>에 따른 공휴일과 겹칠 경우 공휴일 다음 첫 번째 평일로 한다.<br>3. 태백시장(이하 “시장”이라 한다)이 정하는 휴관일<br>③ 안전체험관의 개관시간은 09:00부터 18:00까지로 한다. &lt;개정 2020. 12. 29.&gt;<br>④ 시장은 부득이한 사정이 있는 때에는 일정기간 동안 개관시간을 변경하여 운영 할 수 있다.<br>⑤ 시장은 제2항제3호에 따라 임시 휴관일을 정하거나 제4항에 따라 개관시간을 변경하는 때에는 사전에 홈페이지에 게시하여 공고한다.<br></div><a id="P4">  </a><div class="normal"><strong>제4조</strong>(이용대상자) <br>① 안전체험관을 이용할 수 있는 자는 청소년 및 일반국민을 대상으로 하되 시장은 다음 각 호의 어느 하나에 해당하는 사람에게는 이용을 제한 할 수 있다. &lt;개정 2013.7.26., 2020. 12. 29.&gt;<br>1. 사람을 위해 할 수 있는 물품을 소지한 사람<br>2. 음주, 폭력 등 체험관 질서유지에 해를 가하는 사람<br>3. 임산부, 노약자 등 청소년안전체험센터 이용에 안전상 적합하지 아니하다고 판단되는 사람<br>② 제1항 본문의 규정에 불구하고 시장은 안전체험관을 운영함에 있어 청소년을 우선으로 하되 일반 국민도 이용토록 할 수 있다. &lt;개정 2020. 12. 29.&gt;<br></div><a id="P5">  </a><div class="normal"><strong>제5조</strong>(이용방법 등) <br>① 안전체험관 이용인원은 관별 수용능력 범위 내에서 1일 최대수용 인원을 기준으로 운영함을 원칙으로 한다. &lt;개정 2020. 12. 29.&gt;<br>② 제1항의 규정에 불구하고 개인이 이용하고자 하는 사람을 위하여 시장은 일정 인원수 단위로 이용하게 할 수 있다. &lt;개정 2013.7.26.&gt;<br>③ 기계설비에 의해 작동되는 체험관의 경우 7세 이하의 어린이는 성인 인솔자가 동승 시 탑승이 가능하며 단체인 경우 18명까지 보호자(성인) 1명이 동반하여야 하고, 18명 초과 시에는 25명까지 마다 1명씩 추가 되어야 한다. &lt;개정 2013.5.31., 2013.7.26., 2024. 12. 31.&gt;<br>④ 안전체험관을 이용하고자 하는 자는 인터넷(홈페이지)를 통하여 이용하고자 하는 날짜 및 시간 등을 사전 예약 할 수 있다. &lt;개정 2020. 12. 29.&gt;<br>⑤ 시장은 안전체험 수요가 급증하여 방문객에게 불편을 줄 우려가 있다고 인정되는 경우 현장방문 체험과 제4항에 따른 예약인원의 비율을 별도로 지정하여 운영 할 수 있다.<br></div><a id="P6">  </a><div class="normal"><strong>제6조</strong>(이용시간 등의 제한) 시장은 안전체험관을 운영함에 있어 필요하다고 인정하는 때에는 이용시간·회수 및 입장시간 등을 제한할 수 있으며 이 경우 그 제한에 관하여는 규칙으로 정한다. &lt;개정 2020. 12. 29.&gt;</div><a id="P7">  </a><div class="normal"><strong>제7조</strong>(행위의 제한) <br>① 안전체험관 이용자는 구역 안에서 다음 각 호의 행위를 하여서는 아니된다. &lt;개정 2013.7.26., 2020. 12. 29.&gt;<br>1. 음주, 흡연, 무전취식<br>2. 안내요원의 허가 없이 단체에서 이탈하는 행위<br>3. 임의로 체험설비 등 시설물을 만지거나 조작하는 행위<br>4. 안내요원의 정당한 통제에 불응하는 행위<br>5. 그 밖의 다른 이용자의 안전을 위협하는 행위<br>② 시장은 제1항 각 호에 해당하는 행위를 한 사람에게 퇴관을 명할 수 있다. &lt;개정 2013.7.26.&gt;<br></div><a id="P8">  </a><div class="normal"><strong>제8조</strong>(관리자 등 지정) <br>① 관리자는 한국안전체험관장이 겸임한다. 다만, 시장이 필요하다고 인정할 경우에는 소속공무원 중에서 관리자를 임명할 수 있다. &lt;개정 2020. 12. 29., 2022. 12. 30.&gt;<br>② 관리자 이외의 필요한 공무원을 두되 정원은 시장이 따로 정한다.<br></div><a id="P9">  </a><div class="normal"><strong>제9조</strong>(세입·세출) 세입은 다음 각 호의 수입으로 하며, 세출은 시설의 관리·운영에 필요한 경비로 한다. &lt;개정 2013.7.26.&gt;<br>1. <a href="/Info/ContentView?sid=L0082134921#P11" class="popup_view">제11조</a>에 따른 이용료<br>2. 시설의 위탁에 따른 임대료<br>3. 이자 및 그 밖의 수입금<br></div><a id="P10">  </a><div class="normal"><strong>제10조</strong>(회계관계 공무원의 관직지정) 시설의 회계사무를 관리하기 위한 회계공무원의 관직지정은 규칙으로 정한다.</div><a id="P11">  </a><div class="normal"><strong>제11조</strong>(이용료 및 수련비용) &lt;개정 2013.07.26&gt;<br>① 안전체험관의 이용료는 <a href="/Info/ContentView?sid=L0082134921_B0000000_Y_20241231" class="popup_view">별표</a>의 기준에 따른다. 다만, 시장이 공익상 필요하거나 특별한 사유가 있다고 인정하는 경우에는 이를 감면할 수 있다. &lt;개정 2015.11.13., 2020. 12. 29.&gt;<br>1. 시장은 시와 업무협약(MOU)를 체결한 기관이 공동으로 이용할 수 있는 통합상품권(모바일 판매 포함)을 발행할 수 있다. 이 경우 할인율은 50퍼센트의 범위 안에서 성수기와 비수기를 달리하여 정할 수 있다.<br>2. 시장은 한국안전체험관의 운영활성화 및 지역경제활성화를 위하여 체험객에게 징수한 시설이용료의 일부를 태백사랑상품권으로 교부할 수 있다. &lt;개정 2020.1.10., 2020. 12. 29.&gt;<br>② 시장은 체험ㆍ수련활동 프로그램 참여 및 각종 행사 운영비용 등을 충당하기 위하여 비용을 징수할 수 있다. 다만 공익상 필요한때에는 징수하지 아니한다. &lt;신설 2013.7.26.&gt;<br>③ 시장은 체험ㆍ행사 등을 비영리법인 또는 전문가에게 위탁하여 운영할 수 있으며, 수탁자는 체험료 등을 사전협의하여 징수할 수 있다. &lt;신설 2013..7.26.&gt;<br>④ 안전체험관 이용권은 규칙으로 정하며, 환불규정은 전자상거래소비자보호법 및 공정거래법을 준용한다. &lt;개정 2013.7.26., 2020. 12. 29.&gt;<br>⑤ 운영수입에 관한 사항은 태백시 세외수입 징수규정에 따른다. &lt;개정 2013.7.26.&gt;<br></div><a id="P12">  </a><div class="normal"><strong>제12조</strong>(손해배상 등) <br>① 안전체험관 이용자가 전시품 및 체험시설을 파괴·훼손 및 오손한 때에는 이에 상당하는 손해를 배상하게 할 수 있다. &lt;개정 2020. 12. 29.&gt;<br>② &lt;삭제&gt; &lt;개정 2013.05.31&gt;<br></div><a id="P13">  </a><div class="normal"><strong>제13조</strong>(체험객 모집 보상) <br>① 안전체험관의 안정적인 운영을 위하여 시장은 교육기관ㆍ단체와 모집에 관한 협약을 체결할 수 있다. &lt;개정 2020. 12. 29.&gt;<br>② 제1항에 따라 체험객을 모집하여 안전체험관을 이용하는 경우 시장은 지원금을 지급할 수 있다. 이 경우 지원금은 협약에 따른다. &lt;개정 2020. 12. 29.&gt;<br></div><a id="P14">  </a><div class="normal"><strong>제14조</strong>(보험가입) 시장은 안전체험관의 재산·물품의 파손과 이용자의 안전사고에 대비하기 위하여 필요한 경우 손해보험에 가입할 수 있다. &lt;개정 2020. 12. 29.&gt;</div><a id="P15">  </a><div class="normal"><strong>제15조</strong>(편의시설 설치·운영) <br>① 시장은 안전체험관 이용자의 편의를 도모하기 위하여 다음 각 호의 편의시설을 설치·운영할 수 있다. &lt;개정 2020. 12. 29.&gt;<br>1. 매점<br>2. 기념품점(뮤즈엄 샵), 카페테리아, 식당 등<br>3. 그 밖에 시장이 필요하다고 인정하는 편의 시설 &lt;개정 2013.07.26&gt;<br>② 시장은 제1항의 편의시설을 효율적으로 관리·운영하기 위하여 필요한 때에는 그 관리·운영을 법인·단체 또는 그 기관이나 개인에게 임대 할 수 있다.<br>③ 제2항에 따른 임대 계약기간은 5년 이내로 한다. 다만, 시장이 필요하다고 인정하는 경우 그 기간을 단축하거나 연장할 수 있다. &lt;개정 2017.5.4.&gt;<br></div><a id="P16">  </a><div class="normal"><strong>제16조</strong>(양도 및 전대금지) <a href="/Info/ContentView?sid=L0082134921#P15" class="popup_view">제15조제3항</a>에 따른 임대자는 그 권리를 타인에게 양도할 수 없다. 다만, 시장의 승인을 받은 경우에는 예외로 한다. &lt;개정 2013.05.31, 2017.5.4.&gt;</div><a id="P17">  </a><div class="normal"><strong>제17조</strong>(임대의 취소) 시장은 다음 각 호의 어느 하나에 해당하는 사유가 발생하였을 경우 계약을 취소할 수 있다.<br>1. 임대자가 의무를 위반하였을 때<br>2. 운영능력이 없다고 판단되었을 때<br>3. 임대관리운영 계약조건을 위반하였을 때<br>4. 시정사항을 정당한 사유 없이 이행하지 않을 때<br>5. 그 밖에 공익상 시장이 필요하다고 인정할 때<br></div><a id="P18">  </a><div class="normal"><strong>제18조</strong>(행정재산의 관리위탁) <br>① 시장은 지역경제 활성화를 위하여 필요한 경우 <a href="/Info/ContentView?sid=L0082130409#P22" class="popup_view">「태백시 공유재산 관리조례」 제22조</a>에 따라 지방자치단체 외의 자에게 그 관리를 위탁할 수 있다. &lt;개정 2013.05.31&gt;<br>② 제1항에 따라 관리위탁을 받은 자는 미리 시장의 승인을 받아 이용료를 징수하여 이를 관리에 드는 경비에 충당하거나, 그 행정재산의 효율적 관리 등으로 인하여 이용료의 수입이 증대된 경우 그 증대된 수입의 전부 또는 일부를 관리위탁을 받은 자의 수입으로 할 수 있다. &lt;개정 2013.05.31&gt;<br>③ 시장은 관리위탁을 받은 자에게 관리에 드는 경비를 지원할 수 있다.<br></div><a id="P19">  </a><div class="normal"><strong>제19조</strong>(사용료의 감면) <br>① 시장은 <a href="/Info/ContentView?sid=L000010000_24" class="popup_view">「공유재산 및 물품관리법」 (이하 “법”이라 한다) 제24조제2항</a>에 따라 지역경제 활성화를 위하여 필요한 경우 그 사용료를 경감할 수 있다.<br>② 제1항에 따라 사용료를 경감하는 경우 그 비율은 규칙으로 정한다. &lt;개정 2013.05.31&gt;<br>③ 사용료에 관하여 이 조례에 정하지 않은 사항은 법을 준용한다.<br></div><a id="P20">  </a><div class="normal"><strong>제20조</strong>(자원봉사자 운영) <br>① 시장은 안전체험관 운영을 위하여 자원봉사자를 모집하여 운영할 수 있다. &lt;개정 2020. 12. 29.&gt;<br>② 자원봉사자 모집 운영에 관한 사항은 시장이 따로 정한다.<br></div><a id="P21">  </a><div class="normal"><strong>제21조</strong>(실비지급) 시장은 <a href="/Info/ContentView?sid=L0082134921#P20" class="popup_view">제20조</a>에 따라 자원봉사자를 모집·운영하는 경우 자원봉사자에게 예산의 범위 내에서 실비를 지급할 수 있다.</div><a id="P22">  </a><div class="normal"><strong>제22조</strong>(준용) 안전체험관의 재산 및 물품의 관리, 그 밖의 편의시설의 관리·운영 및 청소년수련시설의 사용ㆍ관리에 관하여 이 조례에 정하지 아니한 사항에 대하여는 <a href="/Info/ContentView?sid=L0082130409#P0" class="popup_view">「태백시 공유재산 관리 조례」</a>및 <a href="/Info/ContentView?sid=L0082130754#P0" class="popup_view">「태백시 청소년수련시설 설치 및 운영 조례」</a> 에 따른다. &lt;개정 2013.05.31, 2020. 12. 29.&gt;</div><a id="P23">  </a><div class="normal"><strong>제23조</strong>(시행규칙) 이 조례의 시행에 관하여 필요한 사항은 규칙으로 정한다.</div><div class="normal" id="A202412312207">부칙(2012.8.3)<br>이 조례는 공포한 날부터 시행한다.<br>부칙(2013.05.31)<br>이 조례는 공포한 날부터 시행한다.<br>부칙(2013.07.26)<br>이 조례는 공포한 날부터 시행한다.<br>  부칙 &lt;태백시 조례 제1656호, 2015.8.7.&gt; (태백시 병역명문가 예우에 관한 조례)<br>제1조(시행일) 이 조례는 공포한 날부터 시행한다.<br>제2조(다른 조례의 개정) ①부터 ⑬까지 생략<br> ⑭「한국청소년안전체험관 설치 및 운영 조례」일부를 다음과 같이 개정한다.<br> 별표1의 시설이용료 중 요금할인율 30% 대상에 “병역명문가 등록자”를 신설한다.<br>부칙 &lt;태백시 조례 제1670호, 2015.11.13.&gt;<br>이 조례는 공포한 날부터 시행한다.<br>부칙 &lt;태백시 조례 제1716호, 2016.5.13.&gt; (태백시 용연동굴 관리 운영 조례)<br>제1조(시행일) 이 조례는 공포한 날부터 시행한다. <br>제2조(다른 조례의 개정) ①부터 ④까지 생략<br>⑤ 한국청소년안전체험관 설치 및 운영 조례 일부를 다음과 같이 개정한다.<br>별표 1을 별지와 같이 한다.<br>부칙&lt;&lt;태백시 조례 제1732호, 2016.10.18.&gt;(태백시 용연동굴 관리 운영 조례)<br>제1조(시행일) 이 조례는 공포한 날부터 시행한다. <br>제2조(다른 조례의 개정) ① 태백고생대자연사박물관 관리운영 조례 일부를 다음과 같이 개정한다.<br>제7조제1항제9호를 제10호로 하고 제9호를 다음과 같이 신설 한다.<br>9. 태백시 자유학년제 대상 학생 및 인솔자(성수기를 제외한 연1회에 한하되, 담당부서장과 사전협의를 하여야 한다.)<br>② 한국청소년안전체험관 설치 및 운영 조례 일부를 다음과 같이 개정한다.<br>별표 1을 별지와 같이 한다.<br>부칙 &lt;태백시 조례 제1776호, 2017.5.4.&gt;<br>이 조례는 공포한 날부터 시행한다.<br>부칙 &lt;태백시 조례 제1904호, 2020. 1. 10.&gt;<br>이 조례는 공포한 날부터 시행한다.<br>부칙 &lt;태백시 조례 제1957호, 2020. 12. 29.&gt; (태백시 행정기구 설치 조례)<br>제1조(시행일) 이 조례는 2021년 1월 1일부터 시행한다.<br>제2조(다른 규정의 개정) ①부터 ㊽까지 생략<br>  ㊾ 한국청소년안전체험관 설치 및 운영 조례 일부를 다음과 같이 개정한다.<br>  제명 “한국청소년안전체험관 설치 및 운영 조례”를 “한국안전체험관 설치 및 운영 조례”로 한다.<br>  제1조 중 “한국청소년안전체험관(이하 “청소년안전체험관””을 “한국안전체험관(이하 “안전체험관””으로 한다.<br>  제2조 중 “청소년안전체험관”을 “안전체험관”으로 한다.<br>  제3조제1항 및 제3항 중 “청소년안전체험관”을 각각 “안전체험관”으로 한다.<br>  제4조제1항 각 호 외의 부분 및 제2항 중 “청소년안전체험관”을 각각 “안전체험관”으로 한다.<br>  제5조제1항 및 제4항 중 “청소년안전체험관”을 각각 “안전체험관”으로 한다.<br>  제6조 전단 중 “청소년안전체험관”을 “안전체험관”으로 한다.<br>  제7조제1항 각 호 외의 부분 중 “청소년안전체험관”을 “안전체험관”으로 한다.<br>  제8조제1항 본문 중 “청소년안전체험관장”을 “안전체험관장”으로 한다.<br>  제11조제1항 각 호 외의 부분 본문 중 “청소년안전체험관”을 “안전체험관”으로 하고, 같은 항 제2호 중 “한국청소년안전체험관”을 “안전체험관”으로 하며, 같은 조 제4항 중 “청소년안전체험관”을 “안전체험관”으로 한다.<br>  제12조제1항 중 “청소년안전체험관”을 “안전체험관”으로 한다.<br>  제13조제1항 및 제2항 전단 중 “청소년안전체험관”을 각각 “안전체험관”으로 한다.<br>  제14조 중 “청소년안전체험관”을 “안전체험관”으로 한다.<br>  제15조제1항 각 호 외의 부분 중 “청소년안전체험관”을 “안전체험관”으로 한다.<br>  제20조제1항 중 “청소년안전체험관”을 “안전체험관”으로 한다.<br>  제22조 중 “청소년안전체험관”을 “안전체험관”으로 한다.<br>  별표 1의 제안이유 및 주요내용 중 “한국청소년안전체험관”을 “안전체험관”으로 한다.<br>부      칙 &lt;태백시 조례 제2085호, 2022. 12. 30.&gt; (태백시 행정기구 설치 조례) <br>제1조(시행일) 이 조례는 2023년 1월 1일부터 시행한다. <br>제2조(다른 조례의 개정) ㊱ 한국안전체험관 설치 및 운영조례 일부를 다음과 같이 개정한다.<br>  제8조제1항 중 “안전체험관장”을 “한국안전체험관장”으로 한다.<br>부      칙 &lt;태백시 조례 제2207호, 2024. 12. 31.&gt; (만 나이 정착을 위한 태백시 10개 조례 일부개정조례)<br>이 조례는 공포한 날부터 시행한다.<br></div><div class="normal" id="B0000000"><a href="/Info/ContentView?sid=L0080F7B406D3028_B0000000_Y_20241231" class="popup_view">[별표] 시설이용료(제11조 관련)</a></div>
							</div>
							<div class="space"></div>
						</div>
					</div>
				</div>
				<div class="con-div box_third flex_2">
					<div class="history-hlist clear">
						<p class="c-left tit">히스토리 조회</p>
						<ul class="history-ul c-left ml-10 clear">
							<li class="on"><a href="" class="link">2004다41651</a> <button class="btn"><span class="icon icon-x-mark icon-w15"></span></button></li>
							<li><a href="" class="link">2004다41651</a> <button class="btn"><span class="icon icon-x-mark icon-w15"></span></button></li>
						</ul>
					</div>
					<div class="search-wrap b-b">
						<div class="dis-t w-100p str">
							<div class="dis-tr">
								<div class="select-tc dis-tc pr-10">
									<select class="select-css01">
										<option>행정규칙</option>
										<option>선택1</option>
										<option>선택2</option>
										<option>선택3</option>
									</select>
								</div>
								<div class="input-tc is-tc pr-10">
									<input type="search" name="nWord1" class="input-css01" placeholder="검색어">
								</div>
								<div class="btn-tc dis-tc">
									<button class='btn' onclick="fn_add_class_on('#lrlist2')">검색</button>
								</div>
							</div>
							<div id='lrlist2' class='school_search' style="width: 100%;">
								<p class='fw-700 str'>
									법령명을 선택하세요.
									<button class='icon-x-mark icon-w25 btn-s str-rt' onclick="fn_remove_class_on('#lrlist2')"></button>
								</p>
								<div class='lawval' data-val='L0006AF53B487A94' data-txt='건축서비스산업 진흥법'>건축서비스산업 진흥법<span>선택</span>
								</div>
								<div class='lawval' data-val='L0004BCE29EB45D7' data-txt='건축서비스산업 진흥법 시행규칙'>건축서비스산업 진흥법
									시행규칙<span>선택</span></div>
								<div class='lawval' data-val='L00015B683FB0A15' data-txt='건축서비스산업 진흥법 시행령'>건축서비스산업 진흥법
									시행령<span>선택</span></div>
								<div class='lawval' data-val='L0007715DEF6138C'
								     data-txt='농업과학기술정보서비스의 제공 및 이용 활성화에 관한 법률'>농업과학기술정보서비스의 제공 및 이용 활성화에 관한
									법률<span>선택</span></div>
								<div class='lawval' data-val='L000137159B954AC'
								     data-txt='농업과학기술정보서비스의 제공 및 이용 활성화에 관한 법률 시행규칙'>농업과학기술정보서비스의 제공 및 이용 활성화에 관한 법률
									시행규칙<span>선택</span></div>
								<div class='lawval' data-val='L000C3B30540D47F'
								     data-txt='농업과학기술정보서비스의 제공 및 이용 활성화에 관한 법률 시행령'>농업과학기술정보서비스의 제공 및 이용 활성화에 관한 법률
									시행령<span>선택</span></div>
								<div class='lawval' data-val='L000932C4BB26D79'
								     data-txt='농촌 지역 공동체 기반 경제·사회 서비스 활성화에 관한 법률'>농촌 지역 공동체 기반 경제·사회 서비스 활성화에 관한
									법률<span>선택</span></div>
								<div class='lawval' data-val='L00031BBF690737E'
								     data-txt='농촌 지역 공동체 기반 경제·사회 서비스 활성화에 관한 법률 시행규칙'>농촌 지역 공동체 기반 경제·사회 서비스 활성화에 관한 법률
									시행규칙<span>선택</span></div>
								<div class='lawval' data-val='L0009424C902D583'
								     data-txt='농촌 지역 공동체 기반 경제·사회 서비스 활성화에 관한 법률 시행령'>농촌 지역 공동체 기반 경제·사회 서비스 활성화에 관한 법률
									시행령<span>선택</span></div>
								<div class='lawval' data-val='L0005DD59B9733D6' data-txt='부동산서비스산업 진흥법'>부동산서비스산업
									진흥법<span>선택</span></div>
								<div class='lawval' data-val='L000CFAED387A082' data-txt='부동산서비스산업 진흥법 시행규칙'>부동산서비스산업
									진흥법 시행규칙<span>선택</span></div>
								<div class='lawval' data-val='L0007D661336469E' data-txt='부동산서비스산업 진흥법 시행령'>부동산서비스산업 진흥법
									시행령<span>선택</span></div>
								<div class='lawval' data-val='L000BA0558547690' data-txt='사법서비스진흥기금 관리 및 운용에 관한 규칙'>
									사법서비스진흥기금 관리 및 운용에 관한 규칙<span>선택</span></div>
								<div class='lawval' data-val='L0004DF41370845A' data-txt='사회서비스 이용 및 이용권 관리에 관한 법률'>
									사회서비스 이용 및 이용권 관리에 관한 법률<span>선택</span></div>
								<div class='lawval' data-val='L0006BE848AE4DF0'
								     data-txt='사회서비스 이용 및 이용권 관리에 관한 법률 시행규칙'>사회서비스 이용 및 이용권 관리에 관한 법률
									시행규칙<span>선택</span></div>
								<div class='lawval' data-val='L00053D57F340A91' data-txt='사회서비스 이용 및 이용권 관리에 관한 법률 시행령'>
									사회서비스 이용 및 이용권 관리에 관한 법률 시행령<span>선택</span></div>
								<div class='lawval' data-val='L0004B01E7D8254F'
								     data-txt='사회서비스 지원 및 사회서비스원 설립·운영에 관한 법률'>사회서비스 지원 및 사회서비스원 설립·운영에 관한
									법률<span>선택</span></div>
								<div class='lawval' data-val='L00075AD3401A076'
								     data-txt='사회서비스 지원 및 사회서비스원 설립·운영에 관한 법률 시행규칙'>사회서비스 지원 및 사회서비스원 설립·운영에 관한 법률
									시행규칙<span>선택</span></div>
								<div class='lawval' data-val='L00034ED934DE25F'
								     data-txt='사회서비스 지원 및 사회서비스원 설립·운영에 관한 법률 시행령'>사회서비스 지원 및 사회서비스원 설립·운영에 관한 법률
									시행령<span>선택</span></div>
								<div class='lawval' data-val='L000660E61801FE3' data-txt='생활물류서비스산업발전법'>
									생활물류서비스산업발전법<span>선택</span></div>
								<div class='lawval' data-val='L00014F694E1CE77' data-txt='생활물류서비스산업발전법 시행규칙'>
									생활물류서비스산업발전법 시행규칙<span>선택</span></div>
								<div class='lawval' data-val='L0004E62AFB77175' data-txt='생활물류서비스산업발전법 시행령'>생활물류서비스산업발전법
									시행령<span>선택</span></div>
								<div class='lawval' data-val='L0009608A5128D10'
								     data-txt='정신건강증진 및 정신질환자 복지서비스 지원에 관한 법률'>정신건강증진 및 정신질환자 복지서비스 지원에 관한
									법률<span>선택</span></div>
								<div class='lawval' data-val='L0005F145A71717A'
								     data-txt='정신건강증진 및 정신질환자 복지서비스 지원에 관한 법률 시행규칙'>정신건강증진 및 정신질환자 복지서비스 지원에 관한 법률
									시행규칙<span>선택</span></div>
								<div class='lawval' data-val='L0009ED460B5E206'
								     data-txt='정신건강증진 및 정신질환자 복지서비스 지원에 관한 법률 시행령'>정신건강증진 및 정신질환자 복지서비스 지원에 관한 법률
									시행령<span>선택</span></div>
								<div class='lawval' data-val='L0001C6FF40C009E'
								     data-txt='지능형 해상교통정보서비스의 제공 및 이용 활성화에 관한 법률'>지능형 해상교통정보서비스의 제공 및 이용 활성화에 관한
									법률<span>선택</span></div>
								<div class='lawval' data-val='L0000EDA4D90955F'
								     data-txt='지능형 해상교통정보서비스의 제공 및 이용 활성화에 관한 법률 시행규칙'>지능형 해상교통정보서비스의 제공 및 이용 활성화에 관한 법률
									시행규칙<span>선택</span></div>
								<div class='lawval' data-val='L0002588A6D2970E'
								     data-txt='지능형 해상교통정보서비스의 제공 및 이용 활성화에 관한 법률 시행령'>지능형 해상교통정보서비스의 제공 및 이용 활성화에 관한 법률
									시행령<span>선택</span></div>
							</div>
						</div>
					</div>
					<div class="title-area b-b str">
						<div class="str-lt btn_change_search">
							<i class="icon-" data-icon=""></i>
							기준법규 설정
							<i class="icon- miju-wrap" data-icon="">
								<div id="miju_change_search" class="miju_box">
									<div class="miju_box_line">비교 기준 법규 설정하면 유사 규칙을 검색할 수 있습니다.</div>
								</div>
							</i>
						</div>
						<div class="tit-box">
							<p class="txt02">대기환경보전법</p>
							<p class="txt03">법률 제19660호 일부개정 2023. 08. 16.</p>
						</div>
						<div class="str-rt btn-open"><span class="icon-out-box icon-w15 icon"></span></div>
					</div>
					<div class="scroll-y case-div-m" style="height: calc(100% - 216px)">
						<div class="box_third joView" id="wrapper_sam">
							<div class="no_search_result" style="display: none;">
								선택한 법규가 없습니다.<br>
								기준법규 설정 후 이용해주세요.
							</div>
							<div id="samC1">
								<div class="normal"><strong>제1조</strong>(목적) 이 조례는 각종 재해·재난 등 긴급상황 발생 시 대처능력을 배양하고 안전사고에 대한 경각심을 고취하기 위해 한국안전체험관(이하 “안전체험관”이라 한다) 설치 및 운영에 관하여 필요한 사항을 규정함을 목적으로 한다. &lt;개정 2020. 12. 29.&gt;</div><a id="P2">  </a><div class="normal"><strong>제2조</strong>(설치 및 기능) 이 조례에 의하여 설치하는 안전체험관의 명칭 및 위치는 규칙으로 정하며, 청소년 및 국민에 대하여 재난의 직·간접 체험을 통한 안전 및 방재교육으로 안전문화 확산과 재난대비 능력 배양으로 삶의 질 향상 기능을 수행한다. &lt;개정 2020. 12. 29.&gt;</div><a id="P3">  </a><div class="normal"><strong>제3조</strong>(개관 및 휴관) <br>① 안전체험관은 제2항의 휴관일을 제외하고 매일 개관한다. &lt;개정 2020. 12. 29.&gt;<br>② 체험관의 휴관일은 다음 각 호와 같다. &lt;개정 2013.5.31.&gt;<br>1. &lt;삭제&gt;<br>2. 매주 월요일, 다만 월요일이 <a href="/Info/ContentView?sid=L000002404_2" class="popup_view">「관공서의 공휴일에 관한 규정」제2조</a>에 따른 공휴일과 겹칠 경우 공휴일 다음 첫 번째 평일로 한다.<br>3. 태백시장(이하 “시장”이라 한다)이 정하는 휴관일<br>③ 안전체험관의 개관시간은 09:00부터 18:00까지로 한다. &lt;개정 2020. 12. 29.&gt;<br>④ 시장은 부득이한 사정이 있는 때에는 일정기간 동안 개관시간을 변경하여 운영 할 수 있다.<br>⑤ 시장은 제2항제3호에 따라 임시 휴관일을 정하거나 제4항에 따라 개관시간을 변경하는 때에는 사전에 홈페이지에 게시하여 공고한다.<br></div><a id="P4">  </a><div class="normal"><strong>제4조</strong>(이용대상자) <br>① 안전체험관을 이용할 수 있는 자는 청소년 및 일반국민을 대상으로 하되 시장은 다음 각 호의 어느 하나에 해당하는 사람에게는 이용을 제한 할 수 있다. &lt;개정 2013.7.26., 2020. 12. 29.&gt;<br>1. 사람을 위해 할 수 있는 물품을 소지한 사람<br>2. 음주, 폭력 등 체험관 질서유지에 해를 가하는 사람<br>3. 임산부, 노약자 등 청소년안전체험센터 이용에 안전상 적합하지 아니하다고 판단되는 사람<br>② 제1항 본문의 규정에 불구하고 시장은 안전체험관을 운영함에 있어 청소년을 우선으로 하되 일반 국민도 이용토록 할 수 있다. &lt;개정 2020. 12. 29.&gt;<br></div><a id="P5">  </a><div class="normal"><strong>제5조</strong>(이용방법 등) <br>① 안전체험관 이용인원은 관별 수용능력 범위 내에서 1일 최대수용 인원을 기준으로 운영함을 원칙으로 한다. &lt;개정 2020. 12. 29.&gt;<br>② 제1항의 규정에 불구하고 개인이 이용하고자 하는 사람을 위하여 시장은 일정 인원수 단위로 이용하게 할 수 있다. &lt;개정 2013.7.26.&gt;<br>③ 기계설비에 의해 작동되는 체험관의 경우 7세 이하의 어린이는 성인 인솔자가 동승 시 탑승이 가능하며 단체인 경우 18명까지 보호자(성인) 1명이 동반하여야 하고, 18명 초과 시에는 25명까지 마다 1명씩 추가 되어야 한다. &lt;개정 2013.5.31., 2013.7.26., 2024. 12. 31.&gt;<br>④ 안전체험관을 이용하고자 하는 자는 인터넷(홈페이지)를 통하여 이용하고자 하는 날짜 및 시간 등을 사전 예약 할 수 있다. &lt;개정 2020. 12. 29.&gt;<br>⑤ 시장은 안전체험 수요가 급증하여 방문객에게 불편을 줄 우려가 있다고 인정되는 경우 현장방문 체험과 제4항에 따른 예약인원의 비율을 별도로 지정하여 운영 할 수 있다.<br></div><a id="P6">  </a><div class="normal"><strong>제6조</strong>(이용시간 등의 제한) 시장은 안전체험관을 운영함에 있어 필요하다고 인정하는 때에는 이용시간·회수 및 입장시간 등을 제한할 수 있으며 이 경우 그 제한에 관하여는 규칙으로 정한다. &lt;개정 2020. 12. 29.&gt;</div><a id="P7">  </a><div class="normal"><strong>제7조</strong>(행위의 제한) <br>① 안전체험관 이용자는 구역 안에서 다음 각 호의 행위를 하여서는 아니된다. &lt;개정 2013.7.26., 2020. 12. 29.&gt;<br>1. 음주, 흡연, 무전취식<br>2. 안내요원의 허가 없이 단체에서 이탈하는 행위<br>3. 임의로 체험설비 등 시설물을 만지거나 조작하는 행위<br>4. 안내요원의 정당한 통제에 불응하는 행위<br>5. 그 밖의 다른 이용자의 안전을 위협하는 행위<br>② 시장은 제1항 각 호에 해당하는 행위를 한 사람에게 퇴관을 명할 수 있다. &lt;개정 2013.7.26.&gt;<br></div><a id="P8">  </a><div class="normal"><strong>제8조</strong>(관리자 등 지정) <br>① 관리자는 한국안전체험관장이 겸임한다. 다만, 시장이 필요하다고 인정할 경우에는 소속공무원 중에서 관리자를 임명할 수 있다. &lt;개정 2020. 12. 29., 2022. 12. 30.&gt;<br>② 관리자 이외의 필요한 공무원을 두되 정원은 시장이 따로 정한다.<br></div><a id="P9">  </a><div class="normal"><strong>제9조</strong>(세입·세출) 세입은 다음 각 호의 수입으로 하며, 세출은 시설의 관리·운영에 필요한 경비로 한다. &lt;개정 2013.7.26.&gt;<br>1. <a href="/Info/ContentView?sid=L0082134921#P11" class="popup_view">제11조</a>에 따른 이용료<br>2. 시설의 위탁에 따른 임대료<br>3. 이자 및 그 밖의 수입금<br></div><a id="P10">  </a><div class="normal"><strong>제10조</strong>(회계관계 공무원의 관직지정) 시설의 회계사무를 관리하기 위한 회계공무원의 관직지정은 규칙으로 정한다.</div><a id="P11">  </a><div class="normal"><strong>제11조</strong>(이용료 및 수련비용) &lt;개정 2013.07.26&gt;<br>① 안전체험관의 이용료는 <a href="/Info/ContentView?sid=L0082134921_B0000000_Y_20241231" class="popup_view">별표</a>의 기준에 따른다. 다만, 시장이 공익상 필요하거나 특별한 사유가 있다고 인정하는 경우에는 이를 감면할 수 있다. &lt;개정 2015.11.13., 2020. 12. 29.&gt;<br>1. 시장은 시와 업무협약(MOU)를 체결한 기관이 공동으로 이용할 수 있는 통합상품권(모바일 판매 포함)을 발행할 수 있다. 이 경우 할인율은 50퍼센트의 범위 안에서 성수기와 비수기를 달리하여 정할 수 있다.<br>2. 시장은 한국안전체험관의 운영활성화 및 지역경제활성화를 위하여 체험객에게 징수한 시설이용료의 일부를 태백사랑상품권으로 교부할 수 있다. &lt;개정 2020.1.10., 2020. 12. 29.&gt;<br>② 시장은 체험ㆍ수련활동 프로그램 참여 및 각종 행사 운영비용 등을 충당하기 위하여 비용을 징수할 수 있다. 다만 공익상 필요한때에는 징수하지 아니한다. &lt;신설 2013.7.26.&gt;<br>③ 시장은 체험ㆍ행사 등을 비영리법인 또는 전문가에게 위탁하여 운영할 수 있으며, 수탁자는 체험료 등을 사전협의하여 징수할 수 있다. &lt;신설 2013..7.26.&gt;<br>④ 안전체험관 이용권은 규칙으로 정하며, 환불규정은 전자상거래소비자보호법 및 공정거래법을 준용한다. &lt;개정 2013.7.26., 2020. 12. 29.&gt;<br>⑤ 운영수입에 관한 사항은 태백시 세외수입 징수규정에 따른다. &lt;개정 2013.7.26.&gt;<br></div><a id="P12">  </a><div class="normal"><strong>제12조</strong>(손해배상 등) <br>① 안전체험관 이용자가 전시품 및 체험시설을 파괴·훼손 및 오손한 때에는 이에 상당하는 손해를 배상하게 할 수 있다. &lt;개정 2020. 12. 29.&gt;<br>② &lt;삭제&gt; &lt;개정 2013.05.31&gt;<br></div><a id="P13">  </a><div class="normal"><strong>제13조</strong>(체험객 모집 보상) <br>① 안전체험관의 안정적인 운영을 위하여 시장은 교육기관ㆍ단체와 모집에 관한 협약을 체결할 수 있다. &lt;개정 2020. 12. 29.&gt;<br>② 제1항에 따라 체험객을 모집하여 안전체험관을 이용하는 경우 시장은 지원금을 지급할 수 있다. 이 경우 지원금은 협약에 따른다. &lt;개정 2020. 12. 29.&gt;<br></div><a id="P14">  </a><div class="normal"><strong>제14조</strong>(보험가입) 시장은 안전체험관의 재산·물품의 파손과 이용자의 안전사고에 대비하기 위하여 필요한 경우 손해보험에 가입할 수 있다. &lt;개정 2020. 12. 29.&gt;</div><a id="P15">  </a><div class="normal"><strong>제15조</strong>(편의시설 설치·운영) <br>① 시장은 안전체험관 이용자의 편의를 도모하기 위하여 다음 각 호의 편의시설을 설치·운영할 수 있다. &lt;개정 2020. 12. 29.&gt;<br>1. 매점<br>2. 기념품점(뮤즈엄 샵), 카페테리아, 식당 등<br>3. 그 밖에 시장이 필요하다고 인정하는 편의 시설 &lt;개정 2013.07.26&gt;<br>② 시장은 제1항의 편의시설을 효율적으로 관리·운영하기 위하여 필요한 때에는 그 관리·운영을 법인·단체 또는 그 기관이나 개인에게 임대 할 수 있다.<br>③ 제2항에 따른 임대 계약기간은 5년 이내로 한다. 다만, 시장이 필요하다고 인정하는 경우 그 기간을 단축하거나 연장할 수 있다. &lt;개정 2017.5.4.&gt;<br></div><a id="P16">  </a><div class="normal"><strong>제16조</strong>(양도 및 전대금지) <a href="/Info/ContentView?sid=L0082134921#P15" class="popup_view">제15조제3항</a>에 따른 임대자는 그 권리를 타인에게 양도할 수 없다. 다만, 시장의 승인을 받은 경우에는 예외로 한다. &lt;개정 2013.05.31, 2017.5.4.&gt;</div><a id="P17">  </a><div class="normal"><strong>제17조</strong>(임대의 취소) 시장은 다음 각 호의 어느 하나에 해당하는 사유가 발생하였을 경우 계약을 취소할 수 있다.<br>1. 임대자가 의무를 위반하였을 때<br>2. 운영능력이 없다고 판단되었을 때<br>3. 임대관리운영 계약조건을 위반하였을 때<br>4. 시정사항을 정당한 사유 없이 이행하지 않을 때<br>5. 그 밖에 공익상 시장이 필요하다고 인정할 때<br></div><a id="P18">  </a><div class="normal"><strong>제18조</strong>(행정재산의 관리위탁) <br>① 시장은 지역경제 활성화를 위하여 필요한 경우 <a href="/Info/ContentView?sid=L0082130409#P22" class="popup_view">「태백시 공유재산 관리조례」 제22조</a>에 따라 지방자치단체 외의 자에게 그 관리를 위탁할 수 있다. &lt;개정 2013.05.31&gt;<br>② 제1항에 따라 관리위탁을 받은 자는 미리 시장의 승인을 받아 이용료를 징수하여 이를 관리에 드는 경비에 충당하거나, 그 행정재산의 효율적 관리 등으로 인하여 이용료의 수입이 증대된 경우 그 증대된 수입의 전부 또는 일부를 관리위탁을 받은 자의 수입으로 할 수 있다. &lt;개정 2013.05.31&gt;<br>③ 시장은 관리위탁을 받은 자에게 관리에 드는 경비를 지원할 수 있다.<br></div><a id="P19">  </a><div class="normal"><strong>제19조</strong>(사용료의 감면) <br>① 시장은 <a href="/Info/ContentView?sid=L000010000_24" class="popup_view">「공유재산 및 물품관리법」 (이하 “법”이라 한다) 제24조제2항</a>에 따라 지역경제 활성화를 위하여 필요한 경우 그 사용료를 경감할 수 있다.<br>② 제1항에 따라 사용료를 경감하는 경우 그 비율은 규칙으로 정한다. &lt;개정 2013.05.31&gt;<br>③ 사용료에 관하여 이 조례에 정하지 않은 사항은 법을 준용한다.<br></div><a id="P20">  </a><div class="normal"><strong>제20조</strong>(자원봉사자 운영) <br>① 시장은 안전체험관 운영을 위하여 자원봉사자를 모집하여 운영할 수 있다. &lt;개정 2020. 12. 29.&gt;<br>② 자원봉사자 모집 운영에 관한 사항은 시장이 따로 정한다.<br></div><a id="P21">  </a><div class="normal"><strong>제21조</strong>(실비지급) 시장은 <a href="/Info/ContentView?sid=L0082134921#P20" class="popup_view">제20조</a>에 따라 자원봉사자를 모집·운영하는 경우 자원봉사자에게 예산의 범위 내에서 실비를 지급할 수 있다.</div><a id="P22">  </a><div class="normal"><strong>제22조</strong>(준용) 안전체험관의 재산 및 물품의 관리, 그 밖의 편의시설의 관리·운영 및 청소년수련시설의 사용ㆍ관리에 관하여 이 조례에 정하지 아니한 사항에 대하여는 <a href="/Info/ContentView?sid=L0082130409#P0" class="popup_view">「태백시 공유재산 관리 조례」</a>및 <a href="/Info/ContentView?sid=L0082130754#P0" class="popup_view">「태백시 청소년수련시설 설치 및 운영 조례」</a> 에 따른다. &lt;개정 2013.05.31, 2020. 12. 29.&gt;</div><a id="P23">  </a><div class="normal"><strong>제23조</strong>(시행규칙) 이 조례의 시행에 관하여 필요한 사항은 규칙으로 정한다.</div><div class="normal" id="A202412312207">부칙(2012.8.3)<br>이 조례는 공포한 날부터 시행한다.<br>부칙(2013.05.31)<br>이 조례는 공포한 날부터 시행한다.<br>부칙(2013.07.26)<br>이 조례는 공포한 날부터 시행한다.<br>  부칙 &lt;태백시 조례 제1656호, 2015.8.7.&gt; (태백시 병역명문가 예우에 관한 조례)<br>제1조(시행일) 이 조례는 공포한 날부터 시행한다.<br>제2조(다른 조례의 개정) ①부터 ⑬까지 생략<br> ⑭「한국청소년안전체험관 설치 및 운영 조례」일부를 다음과 같이 개정한다.<br> 별표1의 시설이용료 중 요금할인율 30% 대상에 “병역명문가 등록자”를 신설한다.<br>부칙 &lt;태백시 조례 제1670호, 2015.11.13.&gt;<br>이 조례는 공포한 날부터 시행한다.<br>부칙 &lt;태백시 조례 제1716호, 2016.5.13.&gt; (태백시 용연동굴 관리 운영 조례)<br>제1조(시행일) 이 조례는 공포한 날부터 시행한다. <br>제2조(다른 조례의 개정) ①부터 ④까지 생략<br>⑤ 한국청소년안전체험관 설치 및 운영 조례 일부를 다음과 같이 개정한다.<br>별표 1을 별지와 같이 한다.<br>부칙&lt;&lt;태백시 조례 제1732호, 2016.10.18.&gt;(태백시 용연동굴 관리 운영 조례)<br>제1조(시행일) 이 조례는 공포한 날부터 시행한다. <br>제2조(다른 조례의 개정) ① 태백고생대자연사박물관 관리운영 조례 일부를 다음과 같이 개정한다.<br>제7조제1항제9호를 제10호로 하고 제9호를 다음과 같이 신설 한다.<br>9. 태백시 자유학년제 대상 학생 및 인솔자(성수기를 제외한 연1회에 한하되, 담당부서장과 사전협의를 하여야 한다.)<br>② 한국청소년안전체험관 설치 및 운영 조례 일부를 다음과 같이 개정한다.<br>별표 1을 별지와 같이 한다.<br>부칙 &lt;태백시 조례 제1776호, 2017.5.4.&gt;<br>이 조례는 공포한 날부터 시행한다.<br>부칙 &lt;태백시 조례 제1904호, 2020. 1. 10.&gt;<br>이 조례는 공포한 날부터 시행한다.<br>부칙 &lt;태백시 조례 제1957호, 2020. 12. 29.&gt; (태백시 행정기구 설치 조례)<br>제1조(시행일) 이 조례는 2021년 1월 1일부터 시행한다.<br>제2조(다른 규정의 개정) ①부터 ㊽까지 생략<br>  ㊾ 한국청소년안전체험관 설치 및 운영 조례 일부를 다음과 같이 개정한다.<br>  제명 “한국청소년안전체험관 설치 및 운영 조례”를 “한국안전체험관 설치 및 운영 조례”로 한다.<br>  제1조 중 “한국청소년안전체험관(이하 “청소년안전체험관””을 “한국안전체험관(이하 “안전체험관””으로 한다.<br>  제2조 중 “청소년안전체험관”을 “안전체험관”으로 한다.<br>  제3조제1항 및 제3항 중 “청소년안전체험관”을 각각 “안전체험관”으로 한다.<br>  제4조제1항 각 호 외의 부분 및 제2항 중 “청소년안전체험관”을 각각 “안전체험관”으로 한다.<br>  제5조제1항 및 제4항 중 “청소년안전체험관”을 각각 “안전체험관”으로 한다.<br>  제6조 전단 중 “청소년안전체험관”을 “안전체험관”으로 한다.<br>  제7조제1항 각 호 외의 부분 중 “청소년안전체험관”을 “안전체험관”으로 한다.<br>  제8조제1항 본문 중 “청소년안전체험관장”을 “안전체험관장”으로 한다.<br>  제11조제1항 각 호 외의 부분 본문 중 “청소년안전체험관”을 “안전체험관”으로 하고, 같은 항 제2호 중 “한국청소년안전체험관”을 “안전체험관”으로 하며, 같은 조 제4항 중 “청소년안전체험관”을 “안전체험관”으로 한다.<br>  제12조제1항 중 “청소년안전체험관”을 “안전체험관”으로 한다.<br>  제13조제1항 및 제2항 전단 중 “청소년안전체험관”을 각각 “안전체험관”으로 한다.<br>  제14조 중 “청소년안전체험관”을 “안전체험관”으로 한다.<br>  제15조제1항 각 호 외의 부분 중 “청소년안전체험관”을 “안전체험관”으로 한다.<br>  제20조제1항 중 “청소년안전체험관”을 “안전체험관”으로 한다.<br>  제22조 중 “청소년안전체험관”을 “안전체험관”으로 한다.<br>  별표 1의 제안이유 및 주요내용 중 “한국청소년안전체험관”을 “안전체험관”으로 한다.<br>부      칙 &lt;태백시 조례 제2085호, 2022. 12. 30.&gt; (태백시 행정기구 설치 조례) <br>제1조(시행일) 이 조례는 2023년 1월 1일부터 시행한다. <br>제2조(다른 조례의 개정) ㊱ 한국안전체험관 설치 및 운영조례 일부를 다음과 같이 개정한다.<br>  제8조제1항 중 “안전체험관장”을 “한국안전체험관장”으로 한다.<br>부      칙 &lt;태백시 조례 제2207호, 2024. 12. 31.&gt; (만 나이 정착을 위한 태백시 10개 조례 일부개정조례)<br>이 조례는 공포한 날부터 시행한다.<br></div><div class="normal" id="B0000000"><a href="/Info/ContentView?sid=L0080F7B406D3028_B0000000_Y_20241231" class="popup_view">[별표] 시설이용료(제11조 관련)</a></div>
							</div>
							<div class="space"></div>
						</div>
					</div>
				</div>
				<div class="con-div box_third flex_3">
					<div class="history-hlist clear">
						<p class="c-left tit">히스토리 조회</p>
						<ul class="history-ul c-left ml-10 clear">
							<li class="on"><a href="" class="link">2004다41651</a> <button class="btn"><span class="icon icon-x-mark icon-w15"></span></button></li>
							<li><a href="" class="link">2004다41651</a> <button class="btn"><span class="icon icon-x-mark icon-w15"></span></button></li>
						</ul>
					</div>
					<div class="search-wrap b-b">
						<div class="dis-t w-100p str">
							<div class="dis-tr">
								<div class="select-tc dis-tc pr-10">
									<select class="select-css01">
										<option>행정규칙</option>
										<option>선택1</option>
										<option>선택2</option>
										<option>선택3</option>
									</select>
								</div>
								<div class="input-tc is-tc pr-10">
									<input type="search" name="nWord1" class="input-css01" placeholder="검색어">
								</div>
								<div class="btn-tc dis-tc">
									<button class="btn" onclick="fn_add_class_on('#lrlist3')">검색</button>
								</div>
							</div>
							<div id='lrlist3' class='school_search' style='width: 100%;'>
								<p class='fw-700 str'>
									법령명을 선택하세요.
									<button class='icon-x-mark icon-w25 btn-s str-rt'
									        onclick="fn_remove_class_on('#lrlist3')"></button>
								</p>
								<div class='lawval' data-val='L0006AF53B487A94' data-txt='건축서비스산업 진흥법'>건축서비스산업 진흥법<span>선택</span>
								</div>
								<div class='lawval' data-val='L0004BCE29EB45D7' data-txt='건축서비스산업 진흥법 시행규칙'>건축서비스산업 진흥법
									시행규칙<span>선택</span></div>
								<div class='lawval' data-val='L00015B683FB0A15' data-txt='건축서비스산업 진흥법 시행령'>건축서비스산업 진흥법
									시행령<span>선택</span></div>
								<div class='lawval' data-val='L0007715DEF6138C'
								     data-txt='농업과학기술정보서비스의 제공 및 이용 활성화에 관한 법률'>농업과학기술정보서비스의 제공 및 이용 활성화에 관한
									법률<span>선택</span></div>
								<div class='lawval' data-val='L000137159B954AC'
								     data-txt='농업과학기술정보서비스의 제공 및 이용 활성화에 관한 법률 시행규칙'>농업과학기술정보서비스의 제공 및 이용 활성화에 관한 법률
									시행규칙<span>선택</span></div>
								<div class='lawval' data-val='L000C3B30540D47F'
								     data-txt='농업과학기술정보서비스의 제공 및 이용 활성화에 관한 법률 시행령'>농업과학기술정보서비스의 제공 및 이용 활성화에 관한 법률
									시행령<span>선택</span></div>
								<div class='lawval' data-val='L000932C4BB26D79'
								     data-txt='농촌 지역 공동체 기반 경제·사회 서비스 활성화에 관한 법률'>농촌 지역 공동체 기반 경제·사회 서비스 활성화에 관한
									법률<span>선택</span></div>
								<div class='lawval' data-val='L00031BBF690737E'
								     data-txt='농촌 지역 공동체 기반 경제·사회 서비스 활성화에 관한 법률 시행규칙'>농촌 지역 공동체 기반 경제·사회 서비스 활성화에 관한 법률
									시행규칙<span>선택</span></div>
								<div class='lawval' data-val='L0009424C902D583'
								     data-txt='농촌 지역 공동체 기반 경제·사회 서비스 활성화에 관한 법률 시행령'>농촌 지역 공동체 기반 경제·사회 서비스 활성화에 관한 법률
									시행령<span>선택</span></div>
								<div class='lawval' data-val='L0005DD59B9733D6' data-txt='부동산서비스산업 진흥법'>부동산서비스산업
									진흥법<span>선택</span></div>
								<div class='lawval' data-val='L000CFAED387A082' data-txt='부동산서비스산업 진흥법 시행규칙'>부동산서비스산업
									진흥법 시행규칙<span>선택</span></div>
								<div class='lawval' data-val='L0007D661336469E' data-txt='부동산서비스산업 진흥법 시행령'>부동산서비스산업 진흥법
									시행령<span>선택</span></div>
								<div class='lawval' data-val='L000BA0558547690' data-txt='사법서비스진흥기금 관리 및 운용에 관한 규칙'>
									사법서비스진흥기금 관리 및 운용에 관한 규칙<span>선택</span></div>
								<div class='lawval' data-val='L0004DF41370845A' data-txt='사회서비스 이용 및 이용권 관리에 관한 법률'>
									사회서비스 이용 및 이용권 관리에 관한 법률<span>선택</span></div>
								<div class='lawval' data-val='L0006BE848AE4DF0'
								     data-txt='사회서비스 이용 및 이용권 관리에 관한 법률 시행규칙'>사회서비스 이용 및 이용권 관리에 관한 법률
									시행규칙<span>선택</span></div>
								<div class='lawval' data-val='L00053D57F340A91' data-txt='사회서비스 이용 및 이용권 관리에 관한 법률 시행령'>
									사회서비스 이용 및 이용권 관리에 관한 법률 시행령<span>선택</span></div>
								<div class='lawval' data-val='L0004B01E7D8254F'
								     data-txt='사회서비스 지원 및 사회서비스원 설립·운영에 관한 법률'>사회서비스 지원 및 사회서비스원 설립·운영에 관한
									법률<span>선택</span></div>
								<div class='lawval' data-val='L00075AD3401A076'
								     data-txt='사회서비스 지원 및 사회서비스원 설립·운영에 관한 법률 시행규칙'>사회서비스 지원 및 사회서비스원 설립·운영에 관한 법률
									시행규칙<span>선택</span></div>
								<div class='lawval' data-val='L00034ED934DE25F'
								     data-txt='사회서비스 지원 및 사회서비스원 설립·운영에 관한 법률 시행령'>사회서비스 지원 및 사회서비스원 설립·운영에 관한 법률
									시행령<span>선택</span></div>
								<div class='lawval' data-val='L000660E61801FE3' data-txt='생활물류서비스산업발전법'>
									생활물류서비스산업발전법<span>선택</span></div>
								<div class='lawval' data-val='L00014F694E1CE77' data-txt='생활물류서비스산업발전법 시행규칙'>
									생활물류서비스산업발전법 시행규칙<span>선택</span></div>
								<div class='lawval' data-val='L0004E62AFB77175' data-txt='생활물류서비스산업발전법 시행령'>생활물류서비스산업발전법
									시행령<span>선택</span></div>
								<div class='lawval' data-val='L0009608A5128D10'
								     data-txt='정신건강증진 및 정신질환자 복지서비스 지원에 관한 법률'>정신건강증진 및 정신질환자 복지서비스 지원에 관한
									법률<span>선택</span></div>
								<div class='lawval' data-val='L0005F145A71717A'
								     data-txt='정신건강증진 및 정신질환자 복지서비스 지원에 관한 법률 시행규칙'>정신건강증진 및 정신질환자 복지서비스 지원에 관한 법률
									시행규칙<span>선택</span></div>
								<div class='lawval' data-val='L0009ED460B5E206'
								     data-txt='정신건강증진 및 정신질환자 복지서비스 지원에 관한 법률 시행령'>정신건강증진 및 정신질환자 복지서비스 지원에 관한 법률
									시행령<span>선택</span></div>
								<div class='lawval' data-val='L0001C6FF40C009E'
								     data-txt='지능형 해상교통정보서비스의 제공 및 이용 활성화에 관한 법률'>지능형 해상교통정보서비스의 제공 및 이용 활성화에 관한
									법률<span>선택</span></div>
								<div class='lawval' data-val='L0000EDA4D90955F'
								     data-txt='지능형 해상교통정보서비스의 제공 및 이용 활성화에 관한 법률 시행규칙'>지능형 해상교통정보서비스의 제공 및 이용 활성화에 관한 법률
									시행규칙<span>선택</span></div>
								<div class='lawval' data-val='L0002588A6D2970E'
								     data-txt='지능형 해상교통정보서비스의 제공 및 이용 활성화에 관한 법률 시행령'>지능형 해상교통정보서비스의 제공 및 이용 활성화에 관한 법률
									시행령<span>선택</span></div>
							</div>
						</div>
					</div>
					<div class="title-area b-b str">
						<div class="tit-box">
							<p class="txt02">대기환경보전법</p>
							<p class="txt03">법률 제19660호 일부개정 2023. 08. 16.</p>
						</div>
						<div class="str-rt btn-open"><span class="icon-out-box icon-w15 icon"></span></div>
					</div>
					<div class="scroll-y case-div-m" style="height: calc(100% - 216px)">
						<div class="box_third joView" id="wrapper_sam">
							<div class="no_search_result" style="display: none;">
								선택한 법규가 없습니다.<br>
								기준법규 설정 후 이용해주세요.
							</div>
							<div id="samC1">
								<div class="normal"><strong>제1조</strong>(목적) 이 조례는 각종 재해·재난 등 긴급상황 발생 시 대처능력을 배양하고 안전사고에 대한 경각심을 고취하기 위해 한국안전체험관(이하 “안전체험관”이라 한다) 설치 및 운영에 관하여 필요한 사항을 규정함을 목적으로 한다. &lt;개정 2020. 12. 29.&gt;</div><a id="P2">  </a><div class="normal"><strong>제2조</strong>(설치 및 기능) 이 조례에 의하여 설치하는 안전체험관의 명칭 및 위치는 규칙으로 정하며, 청소년 및 국민에 대하여 재난의 직·간접 체험을 통한 안전 및 방재교육으로 안전문화 확산과 재난대비 능력 배양으로 삶의 질 향상 기능을 수행한다. &lt;개정 2020. 12. 29.&gt;</div><a id="P3">  </a><div class="normal"><strong>제3조</strong>(개관 및 휴관) <br>① 안전체험관은 제2항의 휴관일을 제외하고 매일 개관한다. &lt;개정 2020. 12. 29.&gt;<br>② 체험관의 휴관일은 다음 각 호와 같다. &lt;개정 2013.5.31.&gt;<br>1. &lt;삭제&gt;<br>2. 매주 월요일, 다만 월요일이 <a href="/Info/ContentView?sid=L000002404_2" class="popup_view">「관공서의 공휴일에 관한 규정」제2조</a>에 따른 공휴일과 겹칠 경우 공휴일 다음 첫 번째 평일로 한다.<br>3. 태백시장(이하 “시장”이라 한다)이 정하는 휴관일<br>③ 안전체험관의 개관시간은 09:00부터 18:00까지로 한다. &lt;개정 2020. 12. 29.&gt;<br>④ 시장은 부득이한 사정이 있는 때에는 일정기간 동안 개관시간을 변경하여 운영 할 수 있다.<br>⑤ 시장은 제2항제3호에 따라 임시 휴관일을 정하거나 제4항에 따라 개관시간을 변경하는 때에는 사전에 홈페이지에 게시하여 공고한다.<br></div><a id="P4">  </a><div class="normal"><strong>제4조</strong>(이용대상자) <br>① 안전체험관을 이용할 수 있는 자는 청소년 및 일반국민을 대상으로 하되 시장은 다음 각 호의 어느 하나에 해당하는 사람에게는 이용을 제한 할 수 있다. &lt;개정 2013.7.26., 2020. 12. 29.&gt;<br>1. 사람을 위해 할 수 있는 물품을 소지한 사람<br>2. 음주, 폭력 등 체험관 질서유지에 해를 가하는 사람<br>3. 임산부, 노약자 등 청소년안전체험센터 이용에 안전상 적합하지 아니하다고 판단되는 사람<br>② 제1항 본문의 규정에 불구하고 시장은 안전체험관을 운영함에 있어 청소년을 우선으로 하되 일반 국민도 이용토록 할 수 있다. &lt;개정 2020. 12. 29.&gt;<br></div><a id="P5">  </a><div class="normal"><strong>제5조</strong>(이용방법 등) <br>① 안전체험관 이용인원은 관별 수용능력 범위 내에서 1일 최대수용 인원을 기준으로 운영함을 원칙으로 한다. &lt;개정 2020. 12. 29.&gt;<br>② 제1항의 규정에 불구하고 개인이 이용하고자 하는 사람을 위하여 시장은 일정 인원수 단위로 이용하게 할 수 있다. &lt;개정 2013.7.26.&gt;<br>③ 기계설비에 의해 작동되는 체험관의 경우 7세 이하의 어린이는 성인 인솔자가 동승 시 탑승이 가능하며 단체인 경우 18명까지 보호자(성인) 1명이 동반하여야 하고, 18명 초과 시에는 25명까지 마다 1명씩 추가 되어야 한다. &lt;개정 2013.5.31., 2013.7.26., 2024. 12. 31.&gt;<br>④ 안전체험관을 이용하고자 하는 자는 인터넷(홈페이지)를 통하여 이용하고자 하는 날짜 및 시간 등을 사전 예약 할 수 있다. &lt;개정 2020. 12. 29.&gt;<br>⑤ 시장은 안전체험 수요가 급증하여 방문객에게 불편을 줄 우려가 있다고 인정되는 경우 현장방문 체험과 제4항에 따른 예약인원의 비율을 별도로 지정하여 운영 할 수 있다.<br></div><a id="P6">  </a><div class="normal"><strong>제6조</strong>(이용시간 등의 제한) 시장은 안전체험관을 운영함에 있어 필요하다고 인정하는 때에는 이용시간·회수 및 입장시간 등을 제한할 수 있으며 이 경우 그 제한에 관하여는 규칙으로 정한다. &lt;개정 2020. 12. 29.&gt;</div><a id="P7">  </a><div class="normal"><strong>제7조</strong>(행위의 제한) <br>① 안전체험관 이용자는 구역 안에서 다음 각 호의 행위를 하여서는 아니된다. &lt;개정 2013.7.26., 2020. 12. 29.&gt;<br>1. 음주, 흡연, 무전취식<br>2. 안내요원의 허가 없이 단체에서 이탈하는 행위<br>3. 임의로 체험설비 등 시설물을 만지거나 조작하는 행위<br>4. 안내요원의 정당한 통제에 불응하는 행위<br>5. 그 밖의 다른 이용자의 안전을 위협하는 행위<br>② 시장은 제1항 각 호에 해당하는 행위를 한 사람에게 퇴관을 명할 수 있다. &lt;개정 2013.7.26.&gt;<br></div><a id="P8">  </a><div class="normal"><strong>제8조</strong>(관리자 등 지정) <br>① 관리자는 한국안전체험관장이 겸임한다. 다만, 시장이 필요하다고 인정할 경우에는 소속공무원 중에서 관리자를 임명할 수 있다. &lt;개정 2020. 12. 29., 2022. 12. 30.&gt;<br>② 관리자 이외의 필요한 공무원을 두되 정원은 시장이 따로 정한다.<br></div><a id="P9">  </a><div class="normal"><strong>제9조</strong>(세입·세출) 세입은 다음 각 호의 수입으로 하며, 세출은 시설의 관리·운영에 필요한 경비로 한다. &lt;개정 2013.7.26.&gt;<br>1. <a href="/Info/ContentView?sid=L0082134921#P11" class="popup_view">제11조</a>에 따른 이용료<br>2. 시설의 위탁에 따른 임대료<br>3. 이자 및 그 밖의 수입금<br></div><a id="P10">  </a><div class="normal"><strong>제10조</strong>(회계관계 공무원의 관직지정) 시설의 회계사무를 관리하기 위한 회계공무원의 관직지정은 규칙으로 정한다.</div><a id="P11">  </a><div class="normal"><strong>제11조</strong>(이용료 및 수련비용) &lt;개정 2013.07.26&gt;<br>① 안전체험관의 이용료는 <a href="/Info/ContentView?sid=L0082134921_B0000000_Y_20241231" class="popup_view">별표</a>의 기준에 따른다. 다만, 시장이 공익상 필요하거나 특별한 사유가 있다고 인정하는 경우에는 이를 감면할 수 있다. &lt;개정 2015.11.13., 2020. 12. 29.&gt;<br>1. 시장은 시와 업무협약(MOU)를 체결한 기관이 공동으로 이용할 수 있는 통합상품권(모바일 판매 포함)을 발행할 수 있다. 이 경우 할인율은 50퍼센트의 범위 안에서 성수기와 비수기를 달리하여 정할 수 있다.<br>2. 시장은 한국안전체험관의 운영활성화 및 지역경제활성화를 위하여 체험객에게 징수한 시설이용료의 일부를 태백사랑상품권으로 교부할 수 있다. &lt;개정 2020.1.10., 2020. 12. 29.&gt;<br>② 시장은 체험ㆍ수련활동 프로그램 참여 및 각종 행사 운영비용 등을 충당하기 위하여 비용을 징수할 수 있다. 다만 공익상 필요한때에는 징수하지 아니한다. &lt;신설 2013.7.26.&gt;<br>③ 시장은 체험ㆍ행사 등을 비영리법인 또는 전문가에게 위탁하여 운영할 수 있으며, 수탁자는 체험료 등을 사전협의하여 징수할 수 있다. &lt;신설 2013..7.26.&gt;<br>④ 안전체험관 이용권은 규칙으로 정하며, 환불규정은 전자상거래소비자보호법 및 공정거래법을 준용한다. &lt;개정 2013.7.26., 2020. 12. 29.&gt;<br>⑤ 운영수입에 관한 사항은 태백시 세외수입 징수규정에 따른다. &lt;개정 2013.7.26.&gt;<br></div><a id="P12">  </a><div class="normal"><strong>제12조</strong>(손해배상 등) <br>① 안전체험관 이용자가 전시품 및 체험시설을 파괴·훼손 및 오손한 때에는 이에 상당하는 손해를 배상하게 할 수 있다. &lt;개정 2020. 12. 29.&gt;<br>② &lt;삭제&gt; &lt;개정 2013.05.31&gt;<br></div><a id="P13">  </a><div class="normal"><strong>제13조</strong>(체험객 모집 보상) <br>① 안전체험관의 안정적인 운영을 위하여 시장은 교육기관ㆍ단체와 모집에 관한 협약을 체결할 수 있다. &lt;개정 2020. 12. 29.&gt;<br>② 제1항에 따라 체험객을 모집하여 안전체험관을 이용하는 경우 시장은 지원금을 지급할 수 있다. 이 경우 지원금은 협약에 따른다. &lt;개정 2020. 12. 29.&gt;<br></div><a id="P14">  </a><div class="normal"><strong>제14조</strong>(보험가입) 시장은 안전체험관의 재산·물품의 파손과 이용자의 안전사고에 대비하기 위하여 필요한 경우 손해보험에 가입할 수 있다. &lt;개정 2020. 12. 29.&gt;</div><a id="P15">  </a><div class="normal"><strong>제15조</strong>(편의시설 설치·운영) <br>① 시장은 안전체험관 이용자의 편의를 도모하기 위하여 다음 각 호의 편의시설을 설치·운영할 수 있다. &lt;개정 2020. 12. 29.&gt;<br>1. 매점<br>2. 기념품점(뮤즈엄 샵), 카페테리아, 식당 등<br>3. 그 밖에 시장이 필요하다고 인정하는 편의 시설 &lt;개정 2013.07.26&gt;<br>② 시장은 제1항의 편의시설을 효율적으로 관리·운영하기 위하여 필요한 때에는 그 관리·운영을 법인·단체 또는 그 기관이나 개인에게 임대 할 수 있다.<br>③ 제2항에 따른 임대 계약기간은 5년 이내로 한다. 다만, 시장이 필요하다고 인정하는 경우 그 기간을 단축하거나 연장할 수 있다. &lt;개정 2017.5.4.&gt;<br></div><a id="P16">  </a><div class="normal"><strong>제16조</strong>(양도 및 전대금지) <a href="/Info/ContentView?sid=L0082134921#P15" class="popup_view">제15조제3항</a>에 따른 임대자는 그 권리를 타인에게 양도할 수 없다. 다만, 시장의 승인을 받은 경우에는 예외로 한다. &lt;개정 2013.05.31, 2017.5.4.&gt;</div><a id="P17">  </a><div class="normal"><strong>제17조</strong>(임대의 취소) 시장은 다음 각 호의 어느 하나에 해당하는 사유가 발생하였을 경우 계약을 취소할 수 있다.<br>1. 임대자가 의무를 위반하였을 때<br>2. 운영능력이 없다고 판단되었을 때<br>3. 임대관리운영 계약조건을 위반하였을 때<br>4. 시정사항을 정당한 사유 없이 이행하지 않을 때<br>5. 그 밖에 공익상 시장이 필요하다고 인정할 때<br></div><a id="P18">  </a><div class="normal"><strong>제18조</strong>(행정재산의 관리위탁) <br>① 시장은 지역경제 활성화를 위하여 필요한 경우 <a href="/Info/ContentView?sid=L0082130409#P22" class="popup_view">「태백시 공유재산 관리조례」 제22조</a>에 따라 지방자치단체 외의 자에게 그 관리를 위탁할 수 있다. &lt;개정 2013.05.31&gt;<br>② 제1항에 따라 관리위탁을 받은 자는 미리 시장의 승인을 받아 이용료를 징수하여 이를 관리에 드는 경비에 충당하거나, 그 행정재산의 효율적 관리 등으로 인하여 이용료의 수입이 증대된 경우 그 증대된 수입의 전부 또는 일부를 관리위탁을 받은 자의 수입으로 할 수 있다. &lt;개정 2013.05.31&gt;<br>③ 시장은 관리위탁을 받은 자에게 관리에 드는 경비를 지원할 수 있다.<br></div><a id="P19">  </a><div class="normal"><strong>제19조</strong>(사용료의 감면) <br>① 시장은 <a href="/Info/ContentView?sid=L000010000_24" class="popup_view">「공유재산 및 물품관리법」 (이하 “법”이라 한다) 제24조제2항</a>에 따라 지역경제 활성화를 위하여 필요한 경우 그 사용료를 경감할 수 있다.<br>② 제1항에 따라 사용료를 경감하는 경우 그 비율은 규칙으로 정한다. &lt;개정 2013.05.31&gt;<br>③ 사용료에 관하여 이 조례에 정하지 않은 사항은 법을 준용한다.<br></div><a id="P20">  </a><div class="normal"><strong>제20조</strong>(자원봉사자 운영) <br>① 시장은 안전체험관 운영을 위하여 자원봉사자를 모집하여 운영할 수 있다. &lt;개정 2020. 12. 29.&gt;<br>② 자원봉사자 모집 운영에 관한 사항은 시장이 따로 정한다.<br></div><a id="P21">  </a><div class="normal"><strong>제21조</strong>(실비지급) 시장은 <a href="/Info/ContentView?sid=L0082134921#P20" class="popup_view">제20조</a>에 따라 자원봉사자를 모집·운영하는 경우 자원봉사자에게 예산의 범위 내에서 실비를 지급할 수 있다.</div><a id="P22">  </a><div class="normal"><strong>제22조</strong>(준용) 안전체험관의 재산 및 물품의 관리, 그 밖의 편의시설의 관리·운영 및 청소년수련시설의 사용ㆍ관리에 관하여 이 조례에 정하지 아니한 사항에 대하여는 <a href="/Info/ContentView?sid=L0082130409#P0" class="popup_view">「태백시 공유재산 관리 조례」</a>및 <a href="/Info/ContentView?sid=L0082130754#P0" class="popup_view">「태백시 청소년수련시설 설치 및 운영 조례」</a> 에 따른다. &lt;개정 2013.05.31, 2020. 12. 29.&gt;</div><a id="P23">  </a><div class="normal"><strong>제23조</strong>(시행규칙) 이 조례의 시행에 관하여 필요한 사항은 규칙으로 정한다.</div><div class="normal" id="A202412312207">부칙(2012.8.3)<br>이 조례는 공포한 날부터 시행한다.<br>부칙(2013.05.31)<br>이 조례는 공포한 날부터 시행한다.<br>부칙(2013.07.26)<br>이 조례는 공포한 날부터 시행한다.<br>  부칙 &lt;태백시 조례 제1656호, 2015.8.7.&gt; (태백시 병역명문가 예우에 관한 조례)<br>제1조(시행일) 이 조례는 공포한 날부터 시행한다.<br>제2조(다른 조례의 개정) ①부터 ⑬까지 생략<br> ⑭「한국청소년안전체험관 설치 및 운영 조례」일부를 다음과 같이 개정한다.<br> 별표1의 시설이용료 중 요금할인율 30% 대상에 “병역명문가 등록자”를 신설한다.<br>부칙 &lt;태백시 조례 제1670호, 2015.11.13.&gt;<br>이 조례는 공포한 날부터 시행한다.<br>부칙 &lt;태백시 조례 제1716호, 2016.5.13.&gt; (태백시 용연동굴 관리 운영 조례)<br>제1조(시행일) 이 조례는 공포한 날부터 시행한다. <br>제2조(다른 조례의 개정) ①부터 ④까지 생략<br>⑤ 한국청소년안전체험관 설치 및 운영 조례 일부를 다음과 같이 개정한다.<br>별표 1을 별지와 같이 한다.<br>부칙&lt;&lt;태백시 조례 제1732호, 2016.10.18.&gt;(태백시 용연동굴 관리 운영 조례)<br>제1조(시행일) 이 조례는 공포한 날부터 시행한다. <br>제2조(다른 조례의 개정) ① 태백고생대자연사박물관 관리운영 조례 일부를 다음과 같이 개정한다.<br>제7조제1항제9호를 제10호로 하고 제9호를 다음과 같이 신설 한다.<br>9. 태백시 자유학년제 대상 학생 및 인솔자(성수기를 제외한 연1회에 한하되, 담당부서장과 사전협의를 하여야 한다.)<br>② 한국청소년안전체험관 설치 및 운영 조례 일부를 다음과 같이 개정한다.<br>별표 1을 별지와 같이 한다.<br>부칙 &lt;태백시 조례 제1776호, 2017.5.4.&gt;<br>이 조례는 공포한 날부터 시행한다.<br>부칙 &lt;태백시 조례 제1904호, 2020. 1. 10.&gt;<br>이 조례는 공포한 날부터 시행한다.<br>부칙 &lt;태백시 조례 제1957호, 2020. 12. 29.&gt; (태백시 행정기구 설치 조례)<br>제1조(시행일) 이 조례는 2021년 1월 1일부터 시행한다.<br>제2조(다른 규정의 개정) ①부터 ㊽까지 생략<br>  ㊾ 한국청소년안전체험관 설치 및 운영 조례 일부를 다음과 같이 개정한다.<br>  제명 “한국청소년안전체험관 설치 및 운영 조례”를 “한국안전체험관 설치 및 운영 조례”로 한다.<br>  제1조 중 “한국청소년안전체험관(이하 “청소년안전체험관””을 “한국안전체험관(이하 “안전체험관””으로 한다.<br>  제2조 중 “청소년안전체험관”을 “안전체험관”으로 한다.<br>  제3조제1항 및 제3항 중 “청소년안전체험관”을 각각 “안전체험관”으로 한다.<br>  제4조제1항 각 호 외의 부분 및 제2항 중 “청소년안전체험관”을 각각 “안전체험관”으로 한다.<br>  제5조제1항 및 제4항 중 “청소년안전체험관”을 각각 “안전체험관”으로 한다.<br>  제6조 전단 중 “청소년안전체험관”을 “안전체험관”으로 한다.<br>  제7조제1항 각 호 외의 부분 중 “청소년안전체험관”을 “안전체험관”으로 한다.<br>  제8조제1항 본문 중 “청소년안전체험관장”을 “안전체험관장”으로 한다.<br>  제11조제1항 각 호 외의 부분 본문 중 “청소년안전체험관”을 “안전체험관”으로 하고, 같은 항 제2호 중 “한국청소년안전체험관”을 “안전체험관”으로 하며, 같은 조 제4항 중 “청소년안전체험관”을 “안전체험관”으로 한다.<br>  제12조제1항 중 “청소년안전체험관”을 “안전체험관”으로 한다.<br>  제13조제1항 및 제2항 전단 중 “청소년안전체험관”을 각각 “안전체험관”으로 한다.<br>  제14조 중 “청소년안전체험관”을 “안전체험관”으로 한다.<br>  제15조제1항 각 호 외의 부분 중 “청소년안전체험관”을 “안전체험관”으로 한다.<br>  제20조제1항 중 “청소년안전체험관”을 “안전체험관”으로 한다.<br>  제22조 중 “청소년안전체험관”을 “안전체험관”으로 한다.<br>  별표 1의 제안이유 및 주요내용 중 “한국청소년안전체험관”을 “안전체험관”으로 한다.<br>부      칙 &lt;태백시 조례 제2085호, 2022. 12. 30.&gt; (태백시 행정기구 설치 조례) <br>제1조(시행일) 이 조례는 2023년 1월 1일부터 시행한다. <br>제2조(다른 조례의 개정) ㊱ 한국안전체험관 설치 및 운영조례 일부를 다음과 같이 개정한다.<br>  제8조제1항 중 “안전체험관장”을 “한국안전체험관장”으로 한다.<br>부      칙 &lt;태백시 조례 제2207호, 2024. 12. 31.&gt; (만 나이 정착을 위한 태백시 10개 조례 일부개정조례)<br>이 조례는 공포한 날부터 시행한다.<br></div><div class="normal" id="B0000000"><a href="/Info/ContentView?sid=L0080F7B406D3028_B0000000_Y_20241231" class="popup_view">[별표] 시설이용료(제11조 관련)</a></div>
							</div>
							<div class="space"></div>
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
