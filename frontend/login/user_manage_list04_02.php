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
							<li><a href="user_manage_list02.php">유로권한 결제</a></li>
							<li><a href="user_manage_list03.php">ID 결제 관리</a></li>
							<li class="on"><a href="user_manage_list04.php">결제내역 조회</a></li>
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
				<p>결제내역 조회</p>
			</h2>
			<div class="bg-border p-25">
				<div class="content-div-wrap">
					<div class="sub-main-tab-warp clear">
						<ul class="sub-main-tab-ul c-left">
							<li><a href="./user_manage_list04.php">로앤비</a></li>
							<li class="on"><a href="./user_manage_list04_02.php">온주(통합이전)</a></li>
						</ul>
					</div>
					<div class="h3-wrap">
						<div class="dis-t">
							<div class="dis-tr">
								<div class="dis-tc v-m pr-10">
									<p>결제일 선택</p>
								</div>
								<div class="dis-tc v-m pr-10">
									<select id="select" class="select-css01">
										<option>3개월</option>
										<option>선택2</option>
										<option>선택3</option>
										<option>선택4</option>
									</select>
								</div>
								<div class="dis-tc v-m">
									<button class="btn btn-blue btn-m">적용</button>
								</div>
							</div>
						</div>
						<div class="info_table">
							<table class="list pay">
								<thead>
								<tr>
									<th>No</th>
									<th>결제항목</th>
									<th>결제금액</th>
									<th>결제신청 일시</th>
									<th>승인상태/일시</th>
									<th>결제 수단</th>
									<th>결제취소</th>
									<th>증빙서류</th>
								</tr>
								</thead>
								<tbody>
									<tr>
										<td colspan="8" class="ta-c h-180px">해당 기간의 결제 내역이 없습니다</td>
									</tr>
								</tbody>
							</table>
						</div>
						<nav class="page-navigation mt-60">
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
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<?php include '../include/footer_sub.php'; ?>
