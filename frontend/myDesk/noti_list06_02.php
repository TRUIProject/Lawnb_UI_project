<?php include '../include/header_sub.php'; ?>
<!-- 알림 팝업 -->
<div id='alarm-add-popup' class='ct-popup-wrap detail-search-popup bg30 str'>
	<div class='str-center'>
		<div class='bg-border w-700px'>
			<div class='top_title clear'>
				<div class='top_title_txt c-left c-blue'>알림 추가</div>
				<div class='top_title_group c-right'>
					<button class='btn btn-none btn-s' onclick="fn_remove_class_on('#alarm-add-popup')"><i class='icon-close' data-icon=''></i></button>
				</div>
			</div>
			<div class='alert_area_modi'>
				<div class='co_searchContent'>
					<h3>
						[키워드] <input type='text' id='txtSearch' name='' style='width:500px'>
						<div class='btn-group'>
							<button type='button' class='btn btn-square ' onclick="myalert.myAlertSearch('1')">추가</button>
						</div>
					</h3>
					<div class='keyw_list txt_blue'>
					</div>
					<div class='co_searchResults_summary'>
						<ul>
							<li>
								<span>알림 수신 빈도</span>
								<input type='radio' id='rdoMonth' name='rdoFreq' class='rdoFreq' value='M' checked=''>매월
								<select name='selDay' id='selDay'>
									<option value='1' selected=''>1일</option>
									<option value='2'>2일</option>
									<option value='3'>3일</option>
									<option value='4'>4일</option>
									<option value='5'>5일</option>
									<option value='6'>6일</option>
									<option value='7'>7일</option>
									<option value='8'>8일</option>
									<option value='9'>9일</option>
									<option value='10'>10일</option>
									<option value='11'>11일</option>
									<option value='12'>12일</option>
									<option value='13'>13일</option>
									<option value='14'>14일</option>
									<option value='15'>15일</option>
									<option value='16'>16일</option>
									<option value='17'>17일</option>
									<option value='18'>18일</option>
									<option value='19'>19일</option>
									<option value='20'>20일</option>
									<option value='21'>21일</option>
									<option value='22'>22일</option>
									<option value='23'>23일</option>
									<option value='24'>24일</option>
									<option value='25'>25일</option>
									<option value='26'>26일</option>
									<option value='27'>27일</option>
									<option value='28'>28일</option>
									<option value='29'>29일</option>
									<option value='30'>30일</option>
									<option value='31'>31일</option>
								</select>
								&nbsp;&nbsp;
								<input type='radio' id='rdoWeek' name='rdoFreq' class='rdoFreq' value='W'>매주
								<select name='selWeek' id='selWeek'>
									<option value='MON' selected='selected'>월요일</option>
									<option value='TUE'>화요일</option>
									<option value='WEN'>수요일</option>
									<option value='THU'>목요일</option>
									<option value='FRI'>금요일</option>
									<option value='SAT'>토요일</option>
									<option value='SUN'>일요일</option>
								</select>
								&nbsp;&nbsp;
								<input type='radio' id='rdoDay' name='rdoFreq' class='rdoFreq' value='D'>매일
							</li>
							<li>
								<span>전송기간</span>
								<span class='f15'><em id='dDate1'>2025.06.08</em> ~ <em id='dDate2'>2025.07.08</em></span>
								<input type='radio' class='rdoPeriod btnPeriod _select' name='rdoPeriod btnPeriod' value='1'
								       checked=''>1개월
								<input type='radio' class='rdoPeriod btnPeriod' name='rdoPeriod btnPeriod' value='3'>3개월
								<input type='radio' class='rdoPeriod btnPeriod' name='rdoPeriod btnPeriod' value='6'>6개월
							</li>
							<li>
								<span>알림 메일 수신 여부</span>
								<input type='radio' class='rdoEmailYN' name='rdoEmailYN' value='Y'>Y
								<input type='radio' class='rdoEmailYN' name='rdoEmailYN' value='N' checked=''>N &nbsp;&nbsp;
								<input type='text' id='txtEmail' name='' value='sj4755@naver.com' style='width:200px'
								       disabled=''>
								<div class='btn-group btn-group-sm btnEmailUpdate' style='display:none;'>
									<button type='button' class='btn btn-square' onclick='myalert.myAlertEmailUpdate();'>메일
										수정
									</button>
								</div>
								<span style='cursor:pointer; display:none;' class='btnEmailUpdate'
								      onclick="myalert.myAlertEmailRestore('sj4755@naver.com')"><i class='icon-16'
								                                                                   data-icon=''></i> 수정취소</span>
								<br>
								<em class='text_ness'><i class='icon- ' data-icon=''></i> 메일정보 수정시 회원정보상의 메일 주소가 수정됩니다.기존의
									알림 메일 역시 수정된 메일 주소로 발송됩니다. </em>
							</li>
							<li>
								<span>콘텐츠 범위</span>
								<div>
									<table>
										<thead>
										<tr>
											<th><input type='checkbox' name='chkC0' class='chkScopeMain' value='C0'>판례</th>
											<th><input type='checkbox' name='chkI0' class='chkScopeMain' value='I0'>심판·결정·해석
											</th>
											<th><input type='checkbox' name='chkD0' class='chkScopeMain' value='D0'>문헌</th>
											<th><input type='checkbox' name='chkP01' class='chkScopeMain' value='P0'>법조인
											</th>
											<th><input type='checkbox' name='chkP02' class='chkScopeMain' value='P0'>기업법무
											</th>
											<th><input type='checkbox' name='chkN0' class='chkScopeMain' value='N0'>뉴스·칼럼
											</th>
											<th><input type='checkbox' name='chkJ0' class='chkScopeMain' value='J0'>온주</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td><input type='checkbox' name='chkC0' class='chkScopes' value='C000'>판례</td>
											<td><input type='checkbox' name='chkI0' class='chkScopes' value='I001'>특허 심판례
											</td>
											<td><input type='checkbox' name='chkD0' class='chkScopes' value='D000'>평석·논문
											</td>
											<td><input type='checkbox' name='chkP01' class='chkScopes' value='P000'>법조인명록
											</td>
											<td><input type='checkbox' name='chkP02' class='chkScopes' value='P011'>로펌 리포트
											</td>
											<td><input type='checkbox' name='chkN0' class='chkScopes' value='N000'>뉴스</td>
											<td><input type='checkbox' name='chkJ0' class='chkScopes' value='J001'>온주</td>
										</tr>
										<tr>
											<td></td>
											<td><input type='checkbox' name='chkI0' class='chkScopes' value='I002'>결정례</td>
											<td><input type='checkbox' name='chkD0' class='chkScopes' value='D021'>주석서</td>
											<td><input type='checkbox' name='chkP01' class='chkScopes' value='P001'>로펌</td>
											<td></td>
											<td><input type='checkbox' name='chkN0' class='chkScopes' value='N001'>칼럼</td>
											<td></td>
										</tr>
										<tr>
											<td></td>
											<td><input type='checkbox' name='chkI0' class='chkScopes chkI0' value='I003'>유권해석
											</td>
											<td><input type='checkbox' name='chkD0' class='chkScopes' value='D022'>E-Book
											</td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
										</tr>
										</tbody>
									</table>
								</div>
							</li>
						</ul>
					</div>
					<div class='mt-30 ta-c'>
						<button class='btn-blue btn-m min-w-60px mr-10 '>저장</button>
						<button class='btn-none btn-m min-w-60px' onclick="fn_remove_class_on('#alarm-add-popup')">취소</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div id='alarm-keyword-popup' class='ct-popup-wrap detail-search-popup bg30 str'>
	<div class='str-center'>
		<div class='bg-border w-700px'>
			<div class='top_title clear'>
				<div class='top_title_txt c-left c-blue'>법령 알림 추가</div>
				<div class='top_title_group c-right'>
					<button class='btn btn-none btn-s' onclick="fn_remove_class_on('#alarm-keyword-popup')"><i class='icon-close' data-icon=''></i></button>
				</div>
			</div>
			<div class='alert_area_modi'>
				<div class='co_searchContent'>
					<h3>
						[법령] <input type='text' id='txtSearch' name='txtSearch' style='width:500px'>
						<div class='btn-group'>
							<button type='button' class='btn btn-square lawsearch'
							        onclick="myalert.myAlertSearch('2')">검색
							</button>
						</div>
					</h3>
					<div class='school_search' style='left:63px;top:75px'>
					</div>
					<input type='hidden' id='hdnsScope' name='hdnsScope' value=''>
					<div class='co_searchResults_summary'>
						<ul>
							<li>
								<span>전송기간</span>
								<span class='f15'><em id='dDate1'>2025.06.09</em> ~ <em id='dDate2'>2026.06.09</em></span>
								<input type='radio' class='rdoPeriod btnPeriod' name='rdoPeriod btnPeriod'
								       value='6'>6개월
								<input type='radio' class='rdoPeriod btnPeriod _select' name='rdoPeriod btnPeriod'
								       value='12' checked=''>1년
								<input type='radio' class='rdoPeriod btnPeriod' name='rdoPeriod btnPeriod'
								       value='36'>3년
							</li>
							<li>
								<span>알림 메일 수신 여부</span>
								<input type='radio' class='rdoEmailYN' name='rdoEmailYN' value='Y'>Y
								<input type='radio' class='rdoEmailYN' name='rdoEmailYN' value='N' checked=''>N
								&nbsp;&nbsp;
								<input type='text' id='txtEmail' name='' value='' style='width:200px' disabled=''>
								<div class='btn-group btn-group-sm  btnEmailUpdate' style='display:none;'>
									<button type='button' class='btn btn-square'
									        onclick='myalert.myAlertEmailUpdate();'>메일 수정
									</button>
								</div>
								<span style='cursor:pointer; display:none;' class='btnEmailUpdate'
								      onclick="myalert.myAlertEmailRestore('')"><i class='icon-16'
								                                                   data-icon=''></i> 수정취소</span>
								<br>
								<em class='text_ness'><i class='icon- ' data-icon=''></i> 메일정보 수정시 회원정보상의 메일 주소가
									수정됩니다.기존의 알림 메일 역시 수정된 메일 주소로 발송됩니다. </em>
							</li>
						</ul>
					</div>
					<div class='mgt10 text_ex lh-1p5'><i class='icon- ' data-icon=''></i> 업데이트 알림은 현행법령을 기준으로 제공됩니다. 로앤비
						법령 업데이트 알림 서비스의 제공 범위는 아래와 같습니다.<br>&nbsp;&nbsp; - 법령 개정시, 법령 개정발의가 있을 경우
					</div>
					<div class='mt-30 ta-c'>
						<button class='btn-blue btn-m min-w-60px mr-10 '>저장</button>
						<button class='btn-none btn-m min-w-60px' onclick="fn_remove_class_on('#alarm-keyword-popup')">취소</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="container-wrap">
    <div class="container-inner">
        <div class="container-left">
            <div class="scroll-y">
                <div class="container-left-pd">
                    <div class="index-list">
                        <h2>개인화 서비스</h2>
                        <ul class="index-ul">
                            <li>
                                <a href="folder_list01.php">
                                    <div class="str pl-30">
                                        <p class="n-i n-i-w20 n-i-folder str-ltc"></p>
                                        <p>나의폴더</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="memo_list01.php">
                                    <div class="str pl-30">
                                        <p class="n-i n-i-w20 n-i-pencil str-ltc"></p>
                                        <p>하이라이트&메모</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="history_list01.php">
                                    <div class="str pl-30">
                                        <p class="n-i n-i-w20 n-i-clock str-ltc"></p>
                                        <p>히스토리</p>
                                    </div>
                                </a>
                            </li>
                            <li class="on">
                                <a href="noti_list01.php">
                                    <div class="str pl-30">
                                        <p class="n-i n-i-w20 n-i-bell str-ltc"></p>
                                        <p>알림내역</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-cr">
            <h2 class="sub-main-tit str pl-30">
                <p class="n-i n-i-w20 n-i-bell str-ltc"></p>
                <p>알림내역</p>
            </h2>
            <div class="sub-main-tab-warp clear">
                <ul class="sub-main-tab-ul c-left">
                    <li><a href="./noti_list01.php">전체</a></li>
                    <li><a href="./noti_list02.php">1:1문의 내역</a></li>
                    <li><a href="./noti_list02.php">판결문 등재 내역</a></li>
                    <li><a href="./noti_list02.php">법조인명록 업데이트 내역</a></li>
                    <li><a href="./noti_list02.php">승소판결문 등록 내역</a></li>
                    <li class="on"><a href="./noti_list02.php">법령&키워드 알림 내역</a></li>
                </ul>
            </div>
            <div class="clear mb-20">
                <div class="c-left clear">
                    <a href="./noti_list06.php" class="btn-none btn-m c-left mr-5">
                        <p class="str pl-20">
                            <span class="n-i n-i-w15 n-i-arrow-left str-ltc"></span>
                            알림목록
                        </p>
                    </a>
                    <button class="btn-none btn-m c-left">선택삭제</button>
                </div>
                <div class="c-right clear">
                    <button class="btn-blue btn-m c-left mr-5" onclick="fn_add_class_on('#alarm-add-popup')">+ 법령 알림 추가</button>
                    <button class="btn-blue btn-m c-left" onclick="fn_add_class_on('#alarm-keyword-popup')">+ 키워드 알림 추가</button>
                </div>
            </div>
	        <div class="fs-12 mb-20 c-gray-l">
		        ※ 로앤비에서는 서비스 환경을 최적화하기 위해 최대 알림 갯수를 10개까지 제공하고 있습니다.
	        </div>
            <div class="bg-border">
	            <div class="content-div-wrap">
		            <div class="content-div flex-table">
			            <div class="flex-tr">
				            <div class="c-gray-l pr-10"><input type="checkbox"></div>
				            <div class="flex-tc-num c-gray-l">1</div>
				            <div class="li-con">
					            <a href="" class="c-blue fs-16">[키워드] ‘소송’ </a>
					            <button class="btn-none btn-s ml-5">수정</button>
					            <p class="fs-14 mt-5 c-gray-l">설정일자 : 2023.11.14 ~ 2024.05.14</p>
					            <p class="fs-14 mt-5 c-gray-l">설정범위 : 특허심판례,평석논문,법조인명록,뉴스,온주,결정례,주석서,로펌,칼럼,유권해석,E-BOOK</p>
					            <p class="fs-14 mt-5 c-gray-l">알림 메일 수신 여부 : N</p>
				            </div>
			            </div>
		            </div>
		            <div class="content-div flex-table">
			            <div class="flex-tr">
				            <div class="c-gray-l pr-10"><input type="checkbox"></div>
				            <div class="flex-tc-num c-gray-l">2</div>
				            <div class="li-con">
					            <a href="" class="c-blue fs-16">[키워드] ‘소송’ </a>
					            <button class="btn-none btn-s ml-5">수정</button>
					            <p class="fs-14 mt-5 c-gray-l">설정일자 : 2023.11.14 ~ 2024.05.14</p>
					            <p class="fs-14 mt-5 c-gray-l">설정범위 : 특허심판례,평석논문,법조인명록,뉴스,온주,결정례,주석서,로펌,칼럼,유권해석,E-BOOK</p>
					            <p class="fs-14 mt-5 c-gray-l">알림 메일 수신 여부 : N</p>
				            </div>
			            </div>
		            </div>
		            <div class="content-div flex-table">
			            <div class="flex-tr">
				            <div class="c-gray-l pr-10"><input type="checkbox"></div>
				            <div class="flex-tc-num c-gray-l">3</div>
				            <div class="li-con">
					            <a href="" class="c-blue fs-16">[키워드] ‘소송’ </a>
					            <button class="btn-none btn-s ml-5">수정</button>
					            <p class="fs-14 mt-5 c-gray-l">설정일자 : 2023.11.14 ~ 2024.05.14</p>
					            <p class="fs-14 mt-5 c-gray-l">설정범위 : 특허심판례,평석논문,법조인명록,뉴스,온주,결정례,주석서,로펌,칼럼,유권해석,E-BOOK</p>
					            <p class="fs-14 mt-5 c-gray-l">알림 메일 수신 여부 : N</p>
				            </div>
			            </div>
		            </div>
		            <div class="content-div flex-table">
			            <div class="flex-tr">
				            <div class="c-gray-l pr-10"><input type="checkbox"></div>
				            <div class="flex-tc-num c-gray-l">4</div>
				            <div class="li-con">
					            <a href="" class="c-blue fs-16">[키워드] ‘소송’ </a>
					            <button class="btn-none btn-s ml-5">수정</button>
					            <p class="fs-14 mt-5 c-gray-l">설정일자 : 2023.11.14 ~ 2024.05.14</p>
					            <p class="fs-14 mt-5 c-gray-l">설정범위 : 특허심판례,평석논문,법조인명록,뉴스,온주,결정례,주석서,로펌,칼럼,유권해석,E-BOOK</p>
					            <p class="fs-14 mt-5 c-gray-l">알림 메일 수신 여부 : N</p>
				            </div>
			            </div>
		            </div>
	            </div>
            </div>
            <nav class="page-navigation mt-30">
                <ul class="pagination">
                    <li class="page-item on">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span class="icon-chevron-double-left"></span>
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span class="icon-prev"></span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span class="icon-next"></span>
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span class="icon-chevron-double-right"></span>
                        </a>
                    </li>
                </ul>
            </nav>
	        <div class="bg-gray-border mt-30 fs-14">
		        <div class="dis-t">
			        <div class="dis-tr">
				        <div class="dis-tc">
					        <div class="pr-10 c-gray-l">
						        <p class="n-i n-i-w20 n-i-alert-cir"></p>
					        </div>
				        </div>
				        <div class="dis-tc">
					        <div>
						        <p class="fw-700">이용안내</p>
						        <p class="mt-10">
							        알림서비스를 이용하여 로앤비 업데이트 알림을 제공 받을 수 있습니다. <br>
							        알림은 로앤비 홈페이지 상단에서 확인 가능하며, 메일 수신 설정시 별도로 알림 메일을 받아보실 수 있습니다.
						        </p>
					        </div>
					        <div class="mt-20">
						        <p class="fw-700">알림의 종류</p>
						        <ul class="ul-dot gap-0 mt-10">
							        <li>
								        <div class="dot-cell">
									        <a href="" class="dis-b fs-14">키워드 알림 : 이용자가 설정한 키워드를 포함하는 콘텐츠가 업데이트 되면 알림을 제공합니다. 콘텐츠의 범위 역시 직접 설정 가능합니다.</a>
								        </div>
							        </li>
							        <li>
								        <div class="dot-cell">
									        <a href="" class="dis-b fs-14">법령 업데이트 알림 : 법령이 개정되거나 폐지된 경우, 그리고 해당 법령에 대한 의안이 발의된 경우에 알림을 제공합니다. 해당 법령의 본문 페이지나 알림 페이지에서 설정할 수 있습니다.</a>
								        </div>
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
<?php include '../include/footer_sub.php'; ?>
