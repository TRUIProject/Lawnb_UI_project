<?php include '../include/header_sub_content.php'; ?>
<!--	시작 : 헤더	-->
<header class="ct-header">
	<div class="w-700px m-auto str clear">
		<h1 class="logo-div"><a href="../main/main_search.php"><img src="../images/common/logo_s.png" alt="로앤비"/></a>
		</h1>
		<h2 class="logo-txt"> | 1:1 문의</h2>
		<div class="c-right logo-btn-list">
			<button class="btn btn-none btn-s">
				<div class="str pl-20"><span class="n-i-w15 n-i n-i-alert-cir str-ltc"></span>도움말</div>
			</button
		</div>
	</div>
</header>
<!--	끝 : 헤더	-->
<div id="co_popupContainer_small" class="w-700px m-auto">
	<div class="container-inner vh-m">
		<div class="str mb-50">
			<div class="pt-20">
				<div class='bg-border'>
					<div class='sub-main-pd'>
						<div class='sub-main-con-warp container form-css'>
							<div class='ask_info mb-20'>
								- 1:1 문의 답변내용은 이메일로 보내드리며 로앤비 알림의 문의내역에서도 볼 수 있습니다. <br>
								- 법률상담 문의는 받지 않습니다. 상담은 대한법률구조공단(<a href='http://www.klac.or.kr/' target='_blank'>http://www.klac.or.kr/</a>)을
								이용하시기 바랍니다.<br>
								- 콘텐츠나 사이트의 오류내용을 신고해 주시면 매월 2분을 선정하여 소정의 선물을 보내드립니다.
							</div>
							<div class='lawyer_info onetoone'>
								<ul>
									<li>
										<span>아이디 <em class='text_ness'>*</em></span>
										lsj1027
									</li>
									<li>
										<span>이름 <em class='text_ness'>*</em></span>
										<input type='text' id='UserName' name='UserName' value='이세진'
										       maxlength='100'>
									</li>

									<li>
										<span>이메일 <em class='text_ness'>*</em></span>
										<input type='text' id='UserEmail' name='UserEmail' value='sj4755@naver.com'
										       maxlength='200' style='width:98%'>
									</li>
									<li>
										<span>휴대폰</span>
										<input type='text' id='UserHP' name='UserHP' value='01096767662'
										       maxlength='20'>
									</li>

									<li class='_ful'>
										<span>문의분야<em class='text_ness'>*</em></span>
										<select name='BBSQuestion' id='BBSQuestion'>
											<option value='' selected='selected'>선택</option>
											<option value='001'>콘텐츠 문의</option>
											<option value='002'>회원정보 문의</option>
											<option value='003'>가입/결제 문의</option>
											<option value='004'>제휴/광고 문의</option>
											<option value='006'>온주집필 문의</option>
											<option value='005'>기타</option>
										</select>
									</li>

									<li class='_ful mHide'>
										<span>제목 <em class='text_ness'>*</em></span>
										<input type='text' id='Title' name='Title' maxlength='200' style='width:98%'
										       value=''>
									</li>

									<li class='_ful mHide'>
										<span>문의내용 <em class='text_ness'>*</em></span>

										<textarea name='Contents' id='Contents' class='sContents_add'
										          placeholder='법원도서관 판결정보특별열람실 내규 변경에 따른 방문 열람 이용 대상자 제한 지침(2025년 1월 1일부터)으로 인해 사건번호 없는 판결문 등재 신청 접수가 불가합니다.'></textarea>

									</li>
									<li class='_ful mHide'>
										<span>첨부파일</span>
										<input type='file' id='sFileName' name='sFileName' onchange='FileCheck();'>
										<span id='FilenameLayer' class='sFile_name' style='display: none;'></span>
										<em class='text_ness' style='line-height:140%'>파일이 여러 개일 경우에는 압축하여 업로드 하시면
											됩니다.<br>(단, 첨부가능한 최대 용량은 5MB 입니다.) </em>
									</li>
								</ul>
							</div>


							<p class='ac'><strong>[1:1 문의] 개인정보 수집 및 이용에 대한 안내</strong></p>
							<span>1. 수집 항목</span>
							<div>[필수항목] 이름, 아이디, 이메일 [선택항목] 휴대폰 <br>문의자는 필수 및 선택 항목의 정보수집에 대한 동의를 거부할 권리가 있으며, 거부할
								경우 문의에 대한 응대가 불가능할 수 있습니다.
							</div>
							<span>2. 수집∙이용 목적</span>
							<div>문의사항 확인, 답변, 처리내역을 보관하기 위한 용도</div>
							<span>3. 보유 및 이용 기간</span>
							<div> 문의 처리 후 3년간 보관</div>
							<div style='background-color:#f0f0f0;padding:5px'><label><input type='checkbox' id='ConfirmCheckbox'>입력한
									정보의 사용 및 보관에 동의합니다.</label></div>
							<div class='btn_area ac'><span class='btn-blue btn-l ta-c min-w-130px' onclick='Confirm();'>확인</span></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>
