<?php include '../include/header_sub_content.php'; ?>
<!--	시작 : 헤더	-->
<header class="ct-header">
	<div class="w1600 str clear">
		<h1 class="logo-div"><a href="../main/main_search.php"><img src="../images/common/logo_s.png" alt="로앤비"/></a>
		</h1>
	</div>
</header>
<!--	끝 : 헤더	-->
<!--	시작 : 본문	-->
<div class="ct-wrap">
	<div class="ct-left">
		<div class="ct-pt h-100p">
			<div class="str h-100p">
				<div class="ct-scroll">
					<div class="ct-pw">
						<h3 class="ct-tit">요약정보</h3>
						<ul class="ct-summary-ul">
							<li><a href="" class="link">판시사항</a></li>
							<li><a href="" class="link">판결요지</a></li>
							<li><a href="" class="link">참조조문</a></li>
							<li><a href="" class="link">재판경과</a></li>
							<li><a href="" class="link">참조판례</a></li>
						</ul>
						<h3 class="ct-tit mt-10">전문</h3>
						<ul class="ct-summary-ul">
							<li><a href="" class="link">당사자</a></li>
							<li><a href="" class="link">판결</a></li>
							<li><a href="" class="link">주문</a></li>
							<li>
								<a href="" class="link">이유</a>
								<ul>
									<li><a href="" class="link">1. 1차 계약금 30,000,000원 상당의 부당이득반환청구 부분에 대한 상고이유에 관한...</a></li>
									<li><a href="" class="link">2. 2차 계약금 16,578,000원 상당의 부당이득반환청구 부분에 대한 상고에 관한 판...</a></li>
									<li><a href="" class="link">3. 결론 </a></li>
								</ul>
							</li>
							<li><a href="" class="link">판사</a></li>
						</ul>
					</div>
				</div>
				<div class="ct-left-btn">
					<button id="btn-left-close" class="btn-div" onclick="fn_content_left_close()"><span class="icon icon-double-left icon-w20"></span></button>
					<button id="btn-left-open" class="btn-div" onclick="fn_content_left_open()"><span class="icon icon-double-right icon-w20"></span></button>
				</div>
			</div>
		</div>
	</div>
	<div class="ct-right">
		<div class="ct-pt h-100p">
			<div class="ct-scroll">
				<div class="ct-pw">
					<h3 class="ct-tit">관련주석서 총 1건</h3>
					<ul class="ct-ul">
						<li>[온주] 민법 / 제162조 [채권, 재산권의 소멸시효]</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="ct-center">
		<div class="ct-pt h-100p">
			<div class="str h-100p">
				<div class="ct-bg h-100p">
					<div class="ct-scroll ct-bg-pd">
						<div class="ct-title flex-container gab15">
							<div class="tit-div">
								<h2 class="tit">대법원 2025. 1. 9 선고 2023다209403 판결 [부당이득금] <span>[2025상, 451]</span></h2>
							</div>
							<div class="ml-auto">
								<a href="./precedent_history.php" target="_blank" class="badge badge-blue">판례히스토리</a>
							</div>
						</div>
		                <?php include '../include/contentHtml.php'; ?>
					</div>
				</div>
                <?php include '../include/content_popup.php'; ?>
			</div>
		</div>
	</div>
</div>
<!--	끝 : 본문	-->
</body>
</html>
