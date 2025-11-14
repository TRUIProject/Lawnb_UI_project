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
					<li class="on"><a href="./noti_list02.php">1:1문의 내역</a></li>
					<li><a href="./noti_list02.php">판결문 등재 내역</a></li>
					<li><a href="./noti_list02.php">법조인명록 업데이트 내역</a></li>
					<li><a href="./noti_list02.php">승소판결문 등록 내역</a></li>
					<li><a href="./noti_list02.php">법령&키워드 알림 내역</a></li>
				</ul>
			</div>
			<div class="clear mb-20">
				<div class="c-left clear">
					<a href="./noti_list02.php" class="btn-none btn-m">
						<p class="str pl-20">
							<span class="n-i n-i-w15 n-i-arrow-left str-ltc"></span>
							목록으로
						</p>
					</a>
				</div>
			</div>
			<div class="bg-border">
				<div class="content-div-wrap qna-div">
					<div class="pd-20">
						<div class="content-div">
							<div class="tit01">김제민 테스트 문의 하는중 입니다.</div>
							<div class="flex-table">
								<div class="flex-tr">
									<div class="tit02">문의일자</div>
									<div class="tit03">2023-11-15</div>
								</div>
								<div class="flex-tr">
									<div class="tit02">판결문제공 변호사</div>
									<div class="tit03">정세진 / 여자</div>
								</div>
								<div class="flex-tr">
									<div class="tit02">첨부파일</div>
									<div class="tit03">첨부파일</div>
								</div>
								<div class="flex-tr">
									<div class="tit02">첨부파일</div>
									<div class="tit03">첨부파일</div>
								</div>
								<div class="flex-tr">
									<div class="tit02">첨부파일</div>
									<div class="tit03">첨부파일</div>
								</div>
							</div>
						</div>
						<div class="content-div">
							<div class="str pl-30">
								<span class="n-i n-i-w20 n-i-chat str-lt c-blue"></span>
								<div class="tit01">답변내용</div>
								<div class="flex-table">
									<div class="flex-tr">
										<div class="tit02">제목</div>
										<div class="tit03">제목입니다</div>
									</div>
									<div class="flex-tr">
										<div class="tit02">답변일자</div>
										<div class="tit03">2023-11-15</div>
									</div>
									<div class="flex-tr">
										<div class="tit02">답변내용</div>
										<div class="tit03">첨부파일</div>
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
