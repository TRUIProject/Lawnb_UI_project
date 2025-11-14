<?php include '../include/header_sub_content.php'; ?>
<!--	시작 : 헤더	-->
<header class="ct-header">
	<div class="w1600 str clear">
		<h1 class="logo-div"><a href="../main/main_search.php"><img src="../images/common/logo_s.png" alt="로앤비"/></a>
		</h1>
	</div>
</header>
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
						<div class="ta-c">
							<p class="n-i-check n-i-w50 m-auto c-blue n-i"></p>
							<p class="c-58 mt-20 fw-500">감사합니다.</p>
							<p class="c-58 mt-5 fw-500">유료권한 정기 결제가 완료되었습니다.</p>
						</div>
						<div class="bg-gray-box mt-30 p-30 c-58">
							<ul class="ul-dot link-list block-list">
								<li>
									<div class="dot-cell">
										<b>결제번호 </b>: Toss_123456789 (2023-12-01 10:35:48)
									</div>
								</li>
								<li>
									<div class="dot-cell">
										<b>결제금액 : 103,000</b>원
									</div>
								</li>
								<li>
									<div class="dot-cell">
										<b>결제수단</b> : 신용카드 (신한 / 123451****302*)
									</div>
								</li>
							</ul>
						</div>
						<p class="fs-12 ta-c mt-15 c-58">결제 또는 입금 완료후 변경된 권한을 사용하시려면 재로그인이 필요하며,아래 로그인 버튼 클릭시 로앤비 접속은 강제 종료 됩니다. </p>
						<div class="ta-c mt-30">
							<button class="btn btn-blue btn-l w-150px dis-b m-auto">로그인</button>
						</div>
					</div>
					<div class="h3-wrap">
						<div class="h3-div clear">
							<div class="c-left">
								<h3>결제 항목</h3>
							</div>
						</div>
						<div class="info_table">
							<table>
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
										<th>기타</th>
									</tr>
								</thead>
								<tbody>
									<tr >
										<td class="ta-c">onju <br>개인회원</td>
										<td class="ta-c">정기결제</td>
										<td class="ta-c">Basic</td>
										<td class="ta-c">
											<p>1개월</p>
											<p class="c-red mt-5">2023-11-30 ~ 2023-12-30</p>
										</td>
										<td class="ta-c">103,000원</td>
										<td class="ta-c"></td>
									</tr>
								</tbody>
							</table>
							<ul class="text_ex">
								<li>정기결제 특성상 말일 (29,30,31)결제시 다음 정기결제 시점 또는 서비스 이용기간이 다소 차이가 날 수 있습니다. </li>
								<li>가격 변동 시 정기결제 금액이 조정될 수 있습니다.</li>
							</ul>
						</div>
					</div>
					<div class="h3-wrap">
						<div class="h3-div clear">
							<div class="c-left">
								<h3>결제및 증명서류 안내 </h3>
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
									<th>신용카드</th>
									<td>
										<p>결제정보</p>
										<br>
										<p>- 상품금액 : 103,000원</p>
										<p>- 쿠폰할인 : 0원</p>
										<p>- 총 결제금액 : 103,000원</p>
										<p>신용카드는 결제 즉시 카드전표의 확인 및 출력이 가능합니다. 현금영수증 및 계산서 발행은 불가능합니다.</p>
										<p>카드결제 완료 후 재로그인하여 서비스 이용하시기 바랍니다.</p>
									</td>
								</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<?php include '../include/footer_sub.php'; ?>
