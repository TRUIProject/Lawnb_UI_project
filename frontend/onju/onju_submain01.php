<?php include '../include/header_sub.php'; ?>
<div class="container-wrap">
	<div class="container-inner">
		<div class="container-right">
			<div class="direct-list">
				<div class="direct-item">
					<div class="clear mb-5">
						<h2 class="c-left right-header">신간/개정 주석서</h2>
					</div>
					<ul class="direct-ul">
						<li class="dis-t">
							<div class="dis-tr">
								<div class="dis-tc pr-5">
									<p class="badge-sky badge-mid wb-kl min-w-60px ta-c">신간</p>
								</div>
								<div class="dis-tc pr-5">
									<p class="badge-green badge-mid wb-kl min-w-60px ta-c">기본법</p>
								</div>
								<div class="dis-tc">
									<a href="" class="c-blue">민법</a>
								</div>
							</div>
						</li>
						<li class="dis-t">
							<div class="dis-tr">
								<div class="dis-tc pr-5">
									<p class="badge-sky badge-mid wb-kl min-w-60px ta-c">신간</p>
								</div>
								<div class="dis-tc">
									<a href="" class="c-blue">민법</a>
								</div>
							</div>
						</li>
						<li class="dis-t">
							<div class="dis-tr">
								<div class="dis-tc pr-5">
									<p class="badge-sky badge-mid wb-kl min-w-60px ta-c">개정판</p>
								</div>
								<div class="dis-tc">
									<a href="" class="c-blue">민법</a>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="pr-2 pt-20">
				<button class="btn-none w-100p btn-l dis-b btn-shadow">온주 편집위원 소개</button>
				<button class="btn-none w-100p btn-l dis-b btn-shadow mt-10">온주 집필위원 소개</button>
			</div>
		</div>
	    <div class="container-center">
	        <h2 class="sub-main-tit clear">온주</h2>
	        <div class="bg-border">
	            <div class="sub-main-pd">
	                <div class="sub-main-tab-warp clear">
	                    <ul class="sub-main-tab-ul c-left">
	                        <li class="on"><a href="./onju_submain01.php">온주 검색</a></li>
	                        <li><a href="./onju_submain02.php">온주 리스트</a></li>
	                        <li><a href="./onju_submain03.php">나의 온주</a></li>
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
						                        <ul class="keyword-chk-list mt-10">
							                        <li>
								                        <input type="checkbox" id="keyword-1-1" value="" name="keyword-list">
								                        <label for="keyword-1-1">전체</label>
							                        </li>
							                        <li>
								                        <input type="checkbox" id="keyword-1-2" value="" name="keyword-list">
								                        <label for="keyword-1-2">주석서 본문</label>
							                        </li>
							                        <li>
								                        <input type="checkbox" id="keyword-1-3" value="" name="keyword-list">
								                        <label for="keyword-1-3">법령 본문</label>
							                        </li>
							                        <li>
								                        <input type="checkbox" id="keyword-1-4" value="" name="keyword-list">
								                        <label for="keyword-1-4">집필자</label>
							                        </li>
						                        </ul>
						                        <p class="mt-5 c-gray-l"><span class="icon icon-w20 icon-exclamation-circle mr-2"></span>
							                        집필자 검색은 ‘집필자명’이 완전히 일치할 경우에 제공됩니다.</p>
					                        </div>
				                        </div>
			                        </div>
		                        </div>
		                        <div class="input-box str">
			                        <div class="dis-t">
				                        <div class="dis-tr">
					                        <div class="dis-th">
						                        <label for="keyword-except">주석서명</label>
					                        </div>
					                        <div class='dis-tc'>
						                        <div class='junmunSearch_select'>
							                        <div class='selectBox' onclick="checkboxesDisplay('checkboxes')" id='selContList'>
								                        <select id='selType4' name='selType4' class='select-css01 select-multi'>
									                        <option disabled selected>전체</option>
								                        </select>
								                        <div class='overSelect'></div>
							                        </div>
							                        <div id='checkboxes' class='hide_check nolaw w100p'>
								                        <div><input type='checkbox' id='cType3_a' name='cType3_a'
								                                    checked='checked' onclick="chkCat_A('3')">전체
								                        </div>
								                        <div><input type='checkbox' data-name='가맹사업거래의공정화에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='009367'>가맹사업거래의공정화에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='가상자산이용자보호등에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='014474'>가상자산이용자보호등에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='가족관계의등록등에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='010444'>가족관계의등록등에관한법률
								                        </div>
								                        <div><input type='checkbox'
								                                    data-name='개인금융채권의관리및개인금융채무자의보호에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='014591'>개인금융채권의관리및개인금융채무자의보호에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='개인정보보호법'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='011357'>개인정보보호법
								                        </div>
								                        <div><input type='checkbox' data-name='건축법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='001823'>건축법
								                        </div>
								                        <div><input type='checkbox' data-name='고용보험법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='001761'>고용보험법
								                        </div>
								                        <div><input type='checkbox' data-name='공탁법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='001212'>공탁법
								                        </div>
								                        <div><input type='checkbox' data-name='관세법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='001556'>관세법
								                        </div>
								                        <div><input type='checkbox' data-name='국가를당사자로하는계약에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='000695'>국가를당사자로하는계약에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='국세기본법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='001586'>국세기본법
								                        </div>
								                        <div><input type='checkbox' data-name='국세징수법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='001585'>국세징수법
								                        </div>
								                        <div><input type='checkbox' data-name='국제사법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='001236'>국제사법
								                        </div>
								                        <div><input type='checkbox' data-name='국제조세조정에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='000603'>국제조세조정에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='국토의계획및이용에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='009294'>국토의계획및이용에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='군인사법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='001629'>군인사법
								                        </div>
								                        <div><input type='checkbox' data-name='군형법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='001624'>군형법
								                        </div>
								                        <div><input type='checkbox' data-name='근로기준법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='001872'>근로기준법
								                        </div>
								                        <div><input type='checkbox' data-name='근로복지기본법'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='009252'>근로복지기본법
								                        </div>
								                        <div><input type='checkbox' data-name='근로자퇴직급여보장법'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='009883'>근로자퇴직급여보장법
								                        </div>
								                        <div><input type='checkbox' data-name='금융소비자보호에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='013704'>금융소비자보호에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='금융실명거래및비밀보장에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='000549'>금융실명거래및비밀보장에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='금융회사의지배구조에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='012338'>금융회사의지배구조에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='기간제및단시간근로자보호등에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='010356'>기간제및단시간근로자보호등에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='기업구조조정촉진법'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='013179'>기업구조조정촉진법
								                        </div>
								                        <div><input type='checkbox' data-name='남녀고용평등과일ㆍ가정양립지원에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='000130'>남녀고용평등과일ㆍ가정양립지원에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='노동조합및노동관계조정법'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='000143'>노동조합및노동관계조정법
								                        </div>
								                        <div><input type='checkbox' data-name='대규모유통업에서의거래공정화에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='011491'>대규모유통업에서의거래공정화에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='대리점거래의공정화에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='012417'>대리점거래의공정화에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='대외무역법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='001467'>대외무역법
								                        </div>
								                        <div><input type='checkbox' data-name='도시개발법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='002024'>도시개발법
								                        </div>
								                        <div><input type='checkbox' data-name='도시및주거환경정비법'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='009410'>도시및주거환경정비법
								                        </div>
								                        <div><input type='checkbox' data-name='도심복합개발지원에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='014616'>도심복합개발지원에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='독점규제및공정거래에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='001591'>독점규제및공정거래에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='디자인보호법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='001871'>디자인보호법
								                        </div>
								                        <div><input type='checkbox' data-name='민법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='001706'>민법
								                        </div>
								                        <div><input type='checkbox' data-name='방문판매등에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='000354'>방문판매등에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='방송법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='000794'>방송법
								                        </div>
								                        <div><input type='checkbox' data-name='방위사업법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='010107'>방위사업법
								                        </div>
								                        <div><input type='checkbox' data-name='법인세법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='001563'>법인세법
								                        </div>
								                        <div><input type='checkbox' data-name='부가가치세법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='001571'>부가가치세법
								                        </div>
								                        <div><input type='checkbox' data-name='부동산등기법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='001697'>부동산등기법
								                        </div>
								                        <div><input type='checkbox' data-name='부동산실권리자명의등기에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='001178'>부동산실권리자명의등기에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='부정경쟁방지및영업비밀보호에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='000308'>부정경쟁방지및영업비밀보호에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='산업안전보건법'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='001766'>산업안전보건법
								                        </div>
								                        <div><input type='checkbox' data-name='산업재해보상보험법'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='001760'>산업재해보상보험법
								                        </div>
								                        <div><input type='checkbox' data-name='상가건물임대차보호법'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='009276'>상가건물임대차보호법
								                        </div>
								                        <div><input type='checkbox' data-name='상속세및증여세법'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='001561'>상속세및증여세법
								                        </div>
								                        <div><input type='checkbox' data-name='상표법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='001870'>상표법
								                        </div>
								                        <div><input type='checkbox' data-name='소득세법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='001565'>소득세법
								                        </div>
								                        <div><input type='checkbox' data-name='신용정보의이용및보호에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='001540'>신용정보의이용및보호에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='신탁법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='001246'>신탁법
								                        </div>
								                        <div><input type='checkbox' data-name='여신전문금융업법'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='000536'>여신전문금융업법
								                        </div>
								                        <div><input type='checkbox' data-name='외국환거래법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='001525'>외국환거래법
								                        </div>
								                        <div><input type='checkbox' data-name='우주개발진흥법'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='009938'>우주개발진흥법
								                        </div>
								                        <div><input type='checkbox' data-name='유사수신행위의규제에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='002035'>유사수신행위의규제에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='은행법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='001549'>은행법
								                        </div>
								                        <div><input type='checkbox' data-name='이자제한법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='010404'>이자제한법
								                        </div>
								                        <div><input type='checkbox' data-name='자동차손해배상보장법'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='001746'>자동차손해배상보장법
								                        </div>
								                        <div><input type='checkbox' data-name='자본시장과금융투자업에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='010513'>자본시장과금융투자업에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='자산유동화에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='000519'>자산유동화에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='저작권법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='000798'>저작권법
								                        </div>
								                        <div><input type='checkbox'
								                                    data-name='전기통신금융사기피해방지및피해금환급에관한특별법'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='011359'>전기통신금융사기피해방지및피해금환급에관한특별법
								                        </div>
								                        <div><input type='checkbox' data-name='전기통신사업법'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='001733'>전기통신사업법
								                        </div>
								                        <div><input type='checkbox' data-name='전자금융거래법'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='010199'>전자금융거래법
								                        </div>
								                        <div><input type='checkbox' data-name='전자문서및전자거래기본법'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='002000'>전자문서및전자거래기본법
								                        </div>
								                        <div><input type='checkbox' data-name='전자상거래등에서의소비자보호에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='009318'>전자상거래등에서의소비자보호에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='전자서명법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='009413'>전자서명법
								                        </div>
								                        <div><input type='checkbox' data-name='정보통신망이용촉진및정보보호등에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='000030'>정보통신망이용촉진및정보보호등에관한법률
								                        </div>
								                        <div><input type='checkbox'
								                                    data-name='정신건강증진및정신질환자복지서비스지원에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='000222'>정신건강증진및정신질환자복지서비스지원에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='제조물책임법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='002039'>제조물책임법
								                        </div>
								                        <div><input type='checkbox' data-name='조세범처벌법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='001583'>조세범처벌법
								                        </div>
								                        <div><input type='checkbox' data-name='조세범처벌절차법'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='000641'>조세범처벌절차법
								                        </div>
								                        <div><input type='checkbox' data-name='조세특례제한법'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='001584'>조세특례제한법
								                        </div>
								                        <div><input type='checkbox' data-name='종합부동산세법'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='009873'>종합부동산세법
								                        </div>
								                        <div><input type='checkbox' data-name='주택법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='001809'>주택법
								                        </div>
								                        <div><input type='checkbox' data-name='주택임대차보호법'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='001248'>주택임대차보호법
								                        </div>
								                        <div><input type='checkbox' data-name='중대재해처벌등에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='013993'>중대재해처벌등에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='지방세기본법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='011177'>지방세기본법
								                        </div>
								                        <div><input type='checkbox' data-name='지방세법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='001649'>지방세법
								                        </div>
								                        <div><input type='checkbox' data-name='지방세징수법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='012708'>지방세징수법
								                        </div>
								                        <div><input type='checkbox' data-name='지방세특례제한법'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='011178'>지방세특례제한법
								                        </div>
								                        <div><input type='checkbox' data-name='지방자치단체를당사자로하는계약에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='010002'>지방자치단체를당사자로하는계약에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='집합건물의소유및관리에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='001262'>집합건물의소유및관리에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='채무자회생및파산에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='009930'>채무자회생및파산에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='최저임금법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='000129'>최저임금법
								                        </div>
								                        <div><input type='checkbox' data-name='클라우드컴퓨팅발전및이용자보호에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='012266'>클라우드컴퓨팅발전및이용자보호에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='특정금융거래정보의보고및이용등에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='009244'>특정금융거래정보의보고및이용등에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='특허법' name='cType3'
								                                    checked='checked' onclick="chkCat('3')"
								                                    value='001455'>특허법
								                        </div>
								                        <div><input type='checkbox' data-name='파견근로자보호등에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='000122'>파견근로자보호등에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='표시ㆍ광고의공정화에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='002011'>표시ㆍ광고의공정화에관한법률
								                        </div>
								                        <div><input type='checkbox' data-name='하도급거래공정화에관한법률'
								                                    name='cType3' checked='checked'
								                                    onclick="chkCat('3')" value='001590'>하도급거래공정화에관한법률
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
		                    <div id="search-area-wrap" class="search-area-wrap con bg-gray">
		                        <div class="setting-box">
			                        <button class="dis-b str" onclick="fn_toggle_slide(this)" data-target="#toggle01" data-warp="#search-area-wrap">
				                        <span class="icon-plus02 icon-w15"></span> 인용주석서 확인</spa>
				                        <span class="icon-arrow-up icon-w20 str-rt"></span></spa>
			                        </button>
		                        </div>
			                    <div id="toggle01" class="search-area-con input-box str mt-20">
		                            <div class="input-box str">
		                                <div class="dis-t">
		                                    <div class="dis-tr">
		                                        <div class="dis-th">
		                                            <label for="keyword-except">주석서명</label>
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
		                                            <label for="keyword-except">조문번호</label>
		                                        </div>
		                                        <div class="dis-tc pr-20">
		                                            <input id="keyword-except" type="text" class="input-css01">
		                                        </div>
			                                    <div class="dis-th">
				                                    <label for="keyword-except">출판일자</label>
			                                    </div>
			                                    <div class="dis-tc">
				                                    <input id="keyword-except" type="text" class="input-css01">
			                                    </div>
		                                    </div>
		                                </div>
		                            </div>
				                    <div class="ta-c mt-20">
					                    <button class="btn-none btn-m">확인</button>
			                        </div>
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
