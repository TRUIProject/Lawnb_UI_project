<?php include '../include/header_sub_content.php'; ?>
<!--	시작 : 헤더	-->
<?php include '../include/header_sub_02.php'; ?>
<!--	끝 : 헤더	-->
<div class="container-wrap">
	<div class="container-inner">
		<div class="container-left">
			<div class="scroll-y">
                <?php include './user_manage_nav.php'; ?>
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
					<div class='h3-wrap'>
						<div class='h3-div clear'>
							<div class='c-left'>
								<h3>
									결제항목 선택
								</h3>
							</div>
							<div class='c-left pl-10'>
								<div class='chk-dot-wrap'>
									<input type='checkbox' id='save-search-yn' value='Y' name='save-search-yn'>
									<label for='save-search-yn' class="c-blue fw-700">Guidance <span class='dot ml-5'></span></label>
								</div>
							</div>
						</div>
						<div class='info_table'>
							<table class='list pay'>
								<colgroup>
									<col>
									<col>
									<col>
									<col width='220px'>
									<col>
									<col width='100px'>
								</colgroup>
								<thead>
								<tr>
									<th>ID</th>
									<th>구분</th>
									<th>Add on</th>
									<th>기간선택</th>
									<th>금액</th>
									<th>적용</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td class='ta-c'>onju <br>개인회원</td>
									<td class='ta-c'>정기결제</td>
									<td class='ta-c'>Guidance</td>
									<td class='ta-c'>
										<p>1개월</p>
										<p class='mt-5 fs-12'>(2023-11-30 ~ 2023-12-30)</p>
									</td>
									<td class='ta-c'>103,000원</td>
									<td class='ta-c'>
										<button class='btn btn-blue btn-s'>적용</button>
									</td>
								</tr>
								</tbody>
							</table>
							<div class='bg-gray-box mt-10 fs-14'>
								<div>
									<p>*  로앤비 유료회원만 구매 가능합니다.</p>
									<p>*  1개월 정기구독 상태가 아닌경우 구매 할 수 없습니다.</p>
									<p>*  이용기간 & 정기결제 상태는 기존 유료 ID 조건과  동일합니다.</p>
									<p>*  1개월 정기구독자는 익월부터 사용 가능합니다. (익월 로앤비 ID + Guidance  이용료 각각 결제)</p>
									<p>*  12개월 유료사용자는 즉시 사용가능하며,  남은 유료기간 일할 계산됩니다.  (익년 로앤비 ID + Guidance  이용료 각각 결제 )</p>
									<p>*  결제수단은  기존 결제 수단과 동일하게 자동 적용 됩니다.</p>
								</div>
							</div>
							<div class='bg-gray-box ta-c mt-10 border-r-10'>
								<b>Guidance 총 금액 : 0원</b>
							</div>
						</div>
					</div>
					<div class='h3-wrap'>
						<div class='h3-div clear'>
							<div class='c-left'>
								<h3>결제방법 선택</h3>
							</div>
							<div class='c-right clear'>
								<button type='button' class='btn btn-none btn-s c-left'>증빙서류 발급안내</button>
							</div>
						</div>
						<div class='bg-gray-box fs-14 mt-10'>
							<p>
								1) 기존에 등록된 정기결제 수단으로 결제가 진행되며, 동의 체크 후 결제하기를 클릭해 주세요.
								<label class='css-label ml-10 fs-12'>동의합니다 <input type='checkbox'></label>
							</p>
							<p>
								2) 기존 등록 결제수단으로 결제 신청이 진행되며, 다음 회차부터 Guidance 정기결제가 적용됩니다.
								동의 체크 후 ‘신청하기’를 눌러 주세요.
								<label class='css-label ml-10 fs-12'>동의합니다 <input type='checkbox'></label>
							</p>
						</div>
						<div class='mt-30 ta-c'>
							<button class='btn btn-blue btn-l w-150px dis-ib m-auto'>자동 정기결제</button>
							<button class='btn btn-blue btn-l w-150px dis-ib m-auto'>결제 신청</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<?php include '../include/footer_sub.php'; ?>
