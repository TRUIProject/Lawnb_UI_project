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
				<p>탈퇴신청</p>
			</h2>
			<div class="bg-border p-25">
				<div class="content-div-wrap">
					<div class="h3-wrap">
						<div class="h3-div clear">
							<div class="c-left">
								<h3>로앤비 회원탈퇴에 따른 정보 삭제 정책</h3>
							</div>
						</div>
						<div class="info_table">
							<div class="bg-gray-box mt-30 border-r-10">
								<div>
									<em>1. 통합회원 탈퇴</em>
									<ul>
										<li>통합회원제도에 따라 회원탈퇴시 함께 가입한 모든 사이트에서 동시에 탈퇴되며, 로앤비 법률정보, 교육센터 사이트 등에 더 이상 로그인 할
											수 없습니다.
										</li>
									</ul>
								</div>
								<div class='mt-10'>
									<em>2. 회원정보 삭제</em>
									<ul>
										<li>
											탈퇴와 동시에 ID, 이름, 이메일 등 개인정보를 즉시 파기합니다. 단, 관계법령(전자상거래등에서의 소비자보호에 관한 법률 및 동법
											시행령)에 의하여 거래관련 정보는 권리의무관계확인을 위해 일정기간 정보를 보유합니다.
											<ul>
												<li>가. 계약 또는 청약철회 등에 관한 기록 : 5년</li>
												<li>나. 대금결제 및 재희 등의 공급에 관한 기록 : 5년</li>
												<li>다. 소비자 불만 또는 분쟁처리에 관한 기록 : 5년</li>
											</ul>
										</li>
									</ul>
								</div>
								<div class='mt-10'>
									<em class='mt-10'>3. 개인화 저장정보 및 이용내역 삭제</em>
									<ul>
										<li>로앤비 법률정보 사이트의 폴더, 메모 기록, 간편 로그인 연결 계정 등 개인화 정보가 모두 삭제됩니다.</li>

										<li>교육센터의 수강내역과 설정내역 등이 모두 삭제되고, 더 이상 수료증 발급확인 및 재발급 기능 등을 사용할 수 없습니다.</li>
									</ul>
								</div>
							</div>
							<div class='flow_check mt-10'>
								<label class='css-label'><input type='checkbox' name='chk_withdrawal' id='chk_withdrawal'>위
								내용에 대해 이해하고 동의합니다.</label>
							</div>
						</div>
					</div>
					<div class="h3-wrap">
						<div class="h3-div clear">
							<div class="c-left">
								<h3>본인확인</h3>
							</div>
						</div>
						<div class='info_table' id='TaxManagerModifyLayer'>
							<table class='pay'>
								<colgroup>
									<col width='150'>
									<col width='32%'>
									<col width='150'>
									<col>
								</colgroup>
								<tbody>
								<tr>
									<th>이름</th>
									<td><input type='text' name='UserName' id='UserName' maxlength='20' class='input-css01'></td>
									<td colspan="2" class='no-b'></td>
								</tr>
								<tr>
									<th>ID</th>
									<td><input type='text' name='UserID' id='UserID' maxlength='20' class='input-css01'></td>
									<th>비밀번호</th>
									<td><input type='password' name='UserPW' id='UserPW' maxlength='20' class='input-css01'></td>
								</tr>
								</tbody>
							</table>
							<div class='mt-30'>
								<button class='btn btn-black btn-m dis-b m-auto'
								        onclick="location.href='user_manage_withdrawal_03.php'">회원탈퇴</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<?php include '../include/footer_sub.php'; ?>
