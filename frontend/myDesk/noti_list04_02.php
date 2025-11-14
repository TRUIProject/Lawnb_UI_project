<?php include '../include/header_sub.php'; ?>
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
					<li><a href="./noti_list03.php">판결문 등재 내역</a></li>
					<li class="on"><a href="./noti_list04.php">법조인명록 업데이트 내역</a></li>
					<li><a href="./noti_list05.php">승소판결문 등록 내역</a></li>
					<li><a href="./noti_list06.php">법령&키워드 알림 내역</a></li>
				</ul>
			</div>
			<div class="clear mb-20">
				<div class="c-right clear">
					<button class="btn-blue btn-m">내 법조인명록 관리</button>
				</div>
			</div>
			<div class="bg-border">
				<div class="content-div-wrap">
					<div class="no-con ta-c">
						<p class="n-i-alert-tri n-i-w45 m-auto"></p>
						<p class="mt-30 fs-16 fw-700">아직 로앤비 법조인명록에 연결된 정보가 없습니다.</p>
						<p class="mt-30 lh-2p">하단의 [내 법조인명록 관리] 버튼을 클릭하여 내 법조인 정보를 로앤비 법조인명록에 연결 또는 등록해주세요.</p>
						<p class="lh-2p">로앤비에 등록된 내 법조인명록의 업데이트 내역을 확인할 수 있습니다.</p>
						<a href="" class="btn-blue btn-m mt-35">내 법조인명록 관리</a>
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
		</div>
	</div>
</div>
<?php include '../include/footer_sub.php'; ?>
