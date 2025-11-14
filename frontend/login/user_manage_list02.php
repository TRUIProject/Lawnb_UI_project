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
										<td colspan="2">
											<label><input type="checkbox"> 쿠폰 사용</label>
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
										<label><input type="radio"> 신용카드</label>
									</td>
								</tr>
								</tbody>
							</table>
							<div class="bg-gray-box ta-c mt-30">
								<p>2023.2.13부로 정기결제 시스템으로 전환되었습니다.</p>
								<p>항목과 결제방법 선택을 후 결제하기를 진행해 주세요.</p>
							</div>
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
