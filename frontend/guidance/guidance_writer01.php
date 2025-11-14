<?php include '../include/header_sub_content.php'; ?>
<!--	시작 : 헤더	-->
<header class="ct-header">
	<div class="w1600 str clear">
		<h1 class="logo-div"><a href="../main/main_search.php"><img src="../images/common/logo_s.png" alt="로앤비"/></a>
		</h1>
		<h2 class="logo-txt"> | 원고 접수하기</h2>
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
					<h3>원고 접수</h3>
					<ul class="ex-ul mt-20">
						<li>집필하신 권고 파일을 첨부하여 등록해주시면 가이던스 페이지에 반영해드리겠습니다.</li>
					</ul>
					<div class='join-wrap clear'>
						<div class='w-700px'>
							<div class="dis-t w-100p">
								<div class="dis-tr">
									<div class="dis-tc pr-20">
										<div class='input-div'>
											<div class='input-hd fw-500'>아이디 <span class='star'></span></div>
											<div>
												<input type='text' name='userid' id='userid' class='input-css01'>
											</div>
										</div>
									</div>
									<div class='dis-tc pl-20'>
										<div class='input-div'>
											<div class='input-hd fw-500'>이름 <span class='star'></span></div>
											<div>
												<input type='text' name='username' id='username' title='이름' class='input-css01'>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class='input-div'>
								<div class='input-hd fw-500'>제목 <span class='star'></span></div>
								<div class='w-100p'>
									<input type='text' name='title' id='title' class='input-css01'>
								</div>
							</div>
							<div class='input-div mt-40'>
								<div class='input-hd fw-500'>부가설명</div>
								<div class='w-100p'>
									<textarea rows="30" class='input-css01'></textarea>
								</div>
							</div>
							<div class='input-div mt-40'>
								<div class='input-hd fw-500'>첨부파일 <span class='star'></span> <span class='c-orange fw-400 fs-12'>파일이 여러 개일 경우에는 압축하여 업로드 하시면 됩니다. (첨부가능한 최대 용량 5MB)</span></div>
								<div>
									<div class='file-upload-wrapper'>
										<label for='file' class='file-upload-button btn btn-none btn-m'>사진변경</label>
										<input type='file' name='file' id='file' class='input-css01'>
										<p class="file-txt">선택된 파일 없음</p>
									</div>
								</div>
							</div>
							<p class='ta-c mt-30'>
								<button class='btn-blue btn-m min-w-130px'>확인</button>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>
