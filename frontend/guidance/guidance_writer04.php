<?php include '../include/header_sub_content.php'; ?>
<!--	시작 : 헤더	-->
<header class="ct-header">
	<div class="w1600 str clear">
		<h1 class="logo-div"><a href="../main/main_search.php"><img src="../images/common/logo_s.png" alt="로앤비"/></a>
		</h1>
		<h2 class="logo-txt"> | 원고 접수 내역</h2>
	</div>
</header>
<!--	끝 : 헤더	-->
<div class="container-wrap container-writer">
	<div class="container-inner vh-m">
		<div class='container-writer-r'>
			<div class='pd'>
				<ul class='ul-dot fc-ffffff'>
					<li>
						<div class='dot-cell'>가이던스 집필위원님께 집필에 관련된 정보를 제공하기 위한 메뉴입니다.</div>
					</li>
				</ul>
				<div class='mt-50'>
					<a href='' class='btn-blue dis-b btn-m ta-c'><span>판결문 등재 신청</span></a>
					<a href='' class='btn-blue dis-b btn-m ta-c mt-15'><span>1:1 문의</span></a>
					<a href='' class='btn-blue dis-b btn-m ta-c mt-15'><span>온주집필가이드</span></a>
				</div>
			</div>
		</div>
		<div class="container-writer">
			<div class="pt-20 pb-50">
				<ul class='ul-float badge-ul gap-10 '>
					<li class='on'><a href='guidance_writer01.php' class='badge'>집필원고 관리</a></li>
					<li><a href='guidance_writer02.php' class='badge'>가이던스 통계</a></li>
					<li><a href='guidance_writer05.php' class='badge'>인세</a></li>
				</ul>
				<div class='mt-40'>
					<h3>원고 접수 내역</h3>
					<ul class="ex-ul mt-20">
						<li>원고 접수하기를 통해서 보내주신 원고내역입니다.</li>
						<li>첨부한 우너고 파일은 접수일 기준으로 30일간 다운로드가 가능합니다.</li>
					</ul>
					<p class='ta-c mt-30'>
						<button class='btn-orange btn-m mr-10'>원고 접수하기</button>
						<button class='btn-none btn-m'>원고 접수 내역</button>
					</p>
					<div class="mt-100">
						<table class='info_table01'>
							<colgroup>
								<col width='40px'>
								<col>
								<col>
								<col width='100px'>
							</colgroup>
							<thead>
							<tr>
								<th>NO</th>
								<th>제목</th>
								<th>첨부파일</th>
								<th>날짜</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td colspan="4" class="none-con">내역이 존재하지 않습니다</td>
							</tr>
							</tbody>
						</table>
						<nav class='page-navigation mt-20'>
							<ul class='pagination'>
								<li class='page-item on'>
									<a class='page-link' href='#' aria-label='Previous'>
										<span class='icon-chevron-double-left'></span>
									</a>
								</li>
								<li class='page-item'>
									<a class='page-link' href='#' aria-label='Previous'>
										<span class='icon-prev'></span>
									</a>
								</li>
								<li class='page-item'><a class='page-link' href='#'>1</a></li>
								<li class='page-item'><a class='page-link' href='#'>2</a></li>
								<li class='page-item'><a class='page-link' href='#'>3</a></li>
								<li class='page-item'>
									<a class='page-link' href='#' aria-label='Next'>
										<span class='icon-next'></span>
									</a>
								</li>
								<li class='page-item'>
									<a class='page-link' href='#' aria-label='Previous'>
										<span class='icon-chevron-double-right'></span>
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
</body>
</html>
