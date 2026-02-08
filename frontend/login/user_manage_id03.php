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
				<p>ID 관리</p>
			</h2>
			<div class="bg-border p-25">
				<div class="content-div-wrap">
					<div class='basic_info_box bg-sky-box lh-26px' id='TitleInfo'>
						<strong>이세진 lsj1027</strong> (개인회원)
					</div>
					<div class="info_table v">
						<ul>
							<li>
								<div>다음 결제 예정일은 <b>2026년 01월 22일</b> 입니다.</div>
								<div class="mt-5">
									<button type='button' class='btn btn-s btn-none'
									        onclick="fn_add_class_on('#popup-termin-payment')">정기결제 해지
									</button>
									<span class='text_ex'>
										<i class='icon-16' data-icon=''></i> Guidance 구독 회원은 Guidance 정기결제 해제 후 (등급) 해지가 가능합니다.
									</span>
								</div>
							</li>
						</ul>
					</div>
					<div class='h3-wrap'>
						<div class='h3-div clear'>
							<div class='c-left'>
								<h3>로앤비 정기결제 정보</h3>
							</div>
						</div>
						<div class='info_table'>
							<table>
								<colgroup>
									<col width='100px'>
									<col>
								</colgroup>
								<tbody>
								<tr>
									<th>로앤비 법률정보</th>
									<td>
										<p>현재 권한 : 유로회원(Basic,  Guidance 2025.12.22~2026.01.22)</p>
										<ul class='mt-15'>
											<li>다음 결제 예정일 : Basic,  Guidance 2026.01.22</li>
											<li>결제 예정금액 : 113,300원(Basic) / 00 원 (Guidance)   총: 000000 원</li>
											<li>정기결제 : 1개월</li>
											<li>결제수단 : 신용카드(신한 / 45184212****302*)
												<button class='btn square-none btn-square btn-s ml-5'
												        onclick="confirm('결제수단 변경시 Guidance 결제 수단도 동시에 변경됩니다.')">변경
												</button>
											</li>
										</ul>
									</td>
								</tr>
								</tbody>
							</table>
						</div>
						<div class='text_ex mt-10'>
							<p><i class='icon-16' data-icon=''></i> 현재 이용중인 로앤비 법률정보 서비스 정기결제 정보만 제공합니다. 교육센터는 정기결제가 적용되지 않습니다.</p>
						</div>
						<div class='bg-gray-box ta-c mt-30 fs-14'>
							<b>12개월 결제시 20% 할인 혜택</b>
						</div>
						<div class='info_table'>
							<table class='list'>
								<colgroup>
									<col width='200px'>
									<col width='150px'>
									<col>
									<col>
								</colgroup>
								<thead>
								<tr>
									<th>등급</th>
									<th>1개월</th>
									<th class='c-red fw-700'>12개월(20%할인)</th>
									<th>Addon</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td>Basic(베이직)</td>
									<td class='ta-c'>113,300원</td>
									<td class='ta-c'><strike>1,359,600원</strike> → 1,087,680원</td>
									<td rowspan='2'>
										<p>1개월: 0원</p>
										<p>12개월:00원</p>
									</td>
								</tr>
								<tr>
									<td>Professional(프로페셔널)</td>
									<td class='ta-c'>168,300원​</td>
									<td class='ta-c'><strike>1,359,600원</strike> → 1,087,680원</td>
								</tr>
								</tbody>
							</table>
							<ul class='text_ex'>
								<li>Professional 등급 결제시 국내 유일의 온라인 특별법 주석서 “온주”를 이용하실 수 있습니다.</li>
								<li>가격 변동 시 정기결제 금액이 조정될 수 있습니다.</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div id='popup-termin-payment' class='ct-popup-wrap detail-search-popup bg30 str'>
	<div class='str-center'>
		<div class='bg-border'>
			<div class='top_title clear'>
				<div class='top_title_txt c-left c-blue'>정기결제 해지</div>
				<div class='top_title_group c-right'>
					<button class='btn btn-none btn-s' onclick="fn_remove_class_on('#popup-termin-payment')"><i
								class='icon-close' data-icon=''></i></button>
				</div>
			</div>
			<ul class='pay_select'>
				<li><a onclick="alert('(등급)만 단독 해지는 불가합니다. Guidance 해지 후 또는 (등급) 과 Guidance 동시 해지가 가능합니다.')">(등급) <br>해지</a>
				</li>
				<li><a onclick="">Guidance 해지</a></li>
			</ul>
		</div>
	</div>
</div>
<?php include '../include/footer_sub.php'; ?>
