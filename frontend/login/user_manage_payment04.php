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
				<p class='dis-ib'>유료권한 결제</p>
				<div class='dis-ib pl-10'>
					<div class='chk-dot-wrap'>
						<input type='checkbox' id='guidance-yn' value='Y' name='guidance-yn'>
						<label for='guidance-yn' class='c-blue fw-700'>Guidance <span class='dot ml-5'></span></label>
					</div>
				</div>
			</h2>
			<div class="bg-border p-25">
				<div class="content-div-wrap">
					<div class="h3-wrap">
						<div class="basic_info_box bg-sky-box mt-15 lh-26px">
							<p><b>이세진 lsj1027  ( 개인회원 )</b></p>
							<p>유료회원 (Professional), 현등급 이용기간 : 2011-04-20 ~ 2100-12-31</p>
						</div>
					</div>
					<div class='bg-gray-box ta-c mt-10 fs-14'>
						<p>2023.2.13부로 정기결제 시스템으로 전환되었습니다.</p>
						<p>항목과 결제방법 선택을 후 결제하기를 진행해 주세요.</p>
					</div>
					<div class='h3-wrap'>
						<div class='info_table'>
							<table class='list'>
								<thead>
								<tr>
									<th>등급</th>
									<th>1개월</th>
									<th>12개월(20%할인)</th>
									<th>Addon</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td class='ta-c'>Basic(베이직)</td>
									<td class='ta-c'>113,300원</td>
									<td class='ta-c'><strike>1,359,600원</strike> → 1,087,680원</td>
									<td rowspan="2">
										<p>1개월: 0원</p>
										<p>12개월:00원</p>
									</td>
								</tr>
								<tr>
									<td class='ta-c'>Professional(프로페셔널)</td>
									<td class='ta-c'>168,300원</td>
									<td class='ta-c'><strike>1,359,600원</strike> → 1,087,680원</td>
								</tr>
								</tbody>
							</table>
						</div>
						<div class='mt-10 text_ex'>
							<p><i class='icon-16' data-icon=''></i> Guidance 결제시</p>
							<p><i class='icon-16' data-icon=''></i>
								Professional 등급 결제시 국내 유일의 온라인 특별법 주석서 “온주”를 이용하실 수 있습니다.
								<br>
								<span class="pl-15">가격 변동 시 정기결제 금액이 조정될 수 있습니다.</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<?php include '../include/footer_sub.php'; ?>
