<?php include '../include/header_sub_content.php'; ?>
<!--	시작 : 헤더	-->
<?php include '../include/header_sub_02.php'; ?>
<!--	끝 : 헤더	-->
<div class="container-wrap">
	<div class="container-inner">
		<div class="container-left">
			<div class="scroll-y">
				<div class="container-left-pd">
					<div class="index-list">
						<ul class="index-ul">
							<li><a href="user_manage_list01.php">ID 관리</a></li>
							<li class="on"><a href="user_manage_list02.php">유로권한 결제</a></li>
							<li><a href="user_manage_list03.php">ID 결제 관리</a></li>
							<li><a href="user_manage_list04.php">결제내역 조회</a></li>
						</ul>
					</div>
					<div class="mt-20">
						<a href="user_manage_list05.php" class="btn-none btn-m dis-b ta-c">1:1 문의</a>
						<a href="user_manage_list05.php" class="btn-none btn-m dis-b ta-c mt-10">탈퇴 신청</a>
					</div>
				</div>
			</div>
		</div>
		<div class="container-cr manage-id-container">
			<h2 class="sub-main-tit">
				<p>유료권한 결제</p>
			</h2>
			<div class="bg-border p-25">
				<div class="content-div-wrap">
					<div class="h3-wrap">
						<div class="basic_info_box bg-sky-box mt-15 lh-26px">
							<p><b>이세진 lsj1027  ( 개인회원 )</b></p>
							<p>유료회원 (Professional), 현등급 이용기간 : 2011-04-20 ~ 2100-12-31</p>
						</div>
					</div>
					<div class="h3-wrap">
						<div class="h3-div clear">
							<div class="c-left">
								<h3>서비스별 이용 내역</h3>
							</div>
						</div>
						<div class="info_table">
							<table class="list pay">
								<colgroup>
									<col>
									<col>
									<col>
									<col width="220px">
									<col >
									<col width="100px">
								</colgroup>
								<thead>
									<tr>
										<th>ID</th>
										<th>구분</th>
										<th>등급선택</th>
										<th>기간선택</th>
										<th>금액</th>
										<th>적용</th>
									</tr>
								</thead>
								<tbody>
									<tr >
										<td class="ta-c" rowspan="2">onju <br>개인회원</td>
										<td class="ta-c" rowspan="2">
											<select id="select" class="select-css01">
												<option>정기결제</option>
												<option>선택2</option>
												<option>선택3</option>
												<option>선택4</option>
											</select>
										</td>
										<td class="ta-c">
											<select id="select" class="select-css01">
												<option>Basic</option>
												<option>선택2</option>
												<option>선택3</option>
												<option>선택4</option>
											</select>
										</td>
										<td class="ta-c">
											<select id="select" class="select-css01 w-100px m-auto">
												<option>1개월</option>
												<option>선택2</option>
												<option>선택3</option>
												<option>선택4</option>
											</select>
											<p class="c-red mt-5">2023-11-30 ~ 2023-12-30</p>
										</td>
										<td class="ta-c" rowspan="2">103,000원</td>
										<td class="ta-c" rowspan="2"><button class="btn btn-blue btn-s">적용</button></td>
									</tr>
									<tr >
										<td colspan='2'>
											<div>
												<label class='css-label'><input type='checkbox' id='CouponUseYN_0' onclick="CouponUse('0')">쿠폰 사용</label>
											</div>
											<div class="mt-5 dis-t w-100p">
												<div class='dis-tr'>
													<div class='dis-tc'>
														<input type='text' id='CouponCode_0' name='CouponCode_0' style='' placeholder='보유한 쿠폰번호를 입력해 주세요. ' maxlength='8' class="input-css01">
													</div>
													<div class='dis-tc pl-5 va-m w-60px'>
														<button type='button' class='btn btn-blue btn-s dis-b' onclick="CouponConfirm('0')">확인</button>
													</div>
												</div>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
							<ul class="text_ex">
								<li>1개월 등급 상향은 신청 후 다음 정기 결제부터 상향된 등급으로 이용 가능합니다.</li>
								<li>12개월 등급 상향은 현재 서비스 이용기간이 20일 이상 남아있어야 하며, 결제 완료 후 즉시 서비스 이용 가능합니다.</li>
								<li>다음 정기 결제일부터는 상향된 금액으로 정기 결제됩니다.</li>
							</ul>
							<div class="bg-gray-box ta-c mt-30 border-r-10">
								<b>총 금액 : 0원</b>
							</div>
						</div>
					</div>
					<div class="h3-wrap">
						<div class="h3-div clear">
							<div class="c-left">
								<h3>결제방법 선택</h3>
							</div>
							<div class='c-right clear'>
								<button type='button' class='btn btn-none btn-s c-left mr-5'>거래계좌 확인서</button>
								<button type='button' class='btn btn-none btn-s c-left'>증빙서류 발급안내</button>
							</div>
						</div>
						<div class="info_table">
							<table>
								<colgroup>
									<col width="100px">
									<col>
								</colgroup>
								<tbody>
								<tr >
									<th>결제수단</th>
									<td>
										<label class='css-label'><input type="radio"> 신용카드</label>
										<label class='css-label'><input type='radio'> 무통장입금</label>
									</td>
								</tr>
								<tr>
									<th>무통장입금 안내</th>
									<td colspan='3'>
										<div id='DepositlessLayer'>
											<input type='text' name='Depositless_Name' id='Depositless_Name' placeholder='입금자명' maxlength='50' class='input-css01 mw-250px'>
											<div class='mgt10'>
												임금계좌 안내 : SC은행 195-20-012309 (주)톰슨로이터코리아<br>
											</div>
											<div class='mgt10' id='DepositlessTaxLayer' style=''>
												<span class='mr-10'>세금계산서 발행여부</span>
												<label class="css-label"><input type='radio' name='Depositless_TaxBill' onchange='TaxBillLayer()'
												       value='1'>발행</label>
												<label class='css-label'><input type='radio' name='Depositless_TaxBill' onchange='TaxBillLayer()'
												       value='0' class="">미발행</label>
												<span class='text_ex'>(법인회원만 가능)</span>
											</div>
										</div>
									</td>
								</tr>
								</tbody>
							</table>
						</div>
						<div class='h3-wrap' id='TaxManagerTitleLayer' style=''>
							<div class='h3-div clear'>
								<div class='c-left'>
									<h3>전자 세금계산서 수신정보</h3>
								</div>
								<div class='c-right clear'>
									<button type='button' class='btn btn-none btn-s c-left' onclick='ModifyTaxManager();'>담당자 정보수정</button>
								</div>
							</div>
							<div class='info_table' id='TaxManagerLayer' style=''>
								<table class='pay'>
									<colgroup>
										<col width='150'>
										<col width='32%'>
										<col width='150'>
										<col>
									</colgroup>
									<tbody>
									<tr>
										<th>담당자 이름</th>
										<td id='TaxManager_Name'></td>
										<th>부서</th>
										<td id='TaxManager_Department'></td>
									</tr>
									<tr>
										<th>이메일</th>
										<td id='TaxManager_Email'></td>
										<th>전화</th>
										<td id='TaxManager_Phone'></td>
									</tr>
									</tbody>
								</table>
							</div>
							<div class='info_table' id='TaxManagerModifyLayer'>
								<table class='pay'>
									<colgroup>
										<col width='150'>
										<col width='32%'>
										<col width='150'>
										<col>
									</colgroup>
									<tbody>
									<tr>
										<th>담당자 이름</th>
										<td><input type='text' name='TaxManager_Name_mod' id='TaxManager_Name_mod'
										           maxlength='50' class='input-css01'></td>
										<th>부서</th>
										<td><input type='text' name='TaxManager_Department_mod'
										           id='TaxManager_Department_mod' maxlength='50' class='input-css01'></td>
									</tr>
									<tr>
										<th>이메일</th>
										<td><input type='text' name='TaxManager_Email_mod' id='TaxManager_Email_mod'
										           maxlength='200' class='input-css01'></td>
										<th>전화</th>
										<td><input type='text' name='TaxManager_Phone_mod' id='TaxManager_Phone_mod'
										           maxlength='50' class='input-css01'></td>
									</tr>
									</tbody>
								</table>
								<div class='mgt10'>
									<div class='btn-list-m ta-c'>
										<button class='btn btn-blue btn-m dis-ib' onclick='TaxManagerModifySave();'>저장
										</button>
										<button class='btn btn-none btn-m dis-ib' onclick='TaxManagerCancel();'>취소
										</button>
									</div>
								</div>
							</div>
						</div>
						<div class='bg-gray-box ta-c mt-30'>
							<p>2023.2.13부로 정기결제 시스템으로 전환되었습니다.</p>
							<p>항목과 결제방법 선택을 후 결제하기를 진행해 주세요.</p>
						</div>
						<div class="mt-30">
							<button class="btn btn-blue btn-l w-150px dis-b m-auto">결제하기</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<?php include '../include/footer_sub.php'; ?>
