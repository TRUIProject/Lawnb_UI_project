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
							<li class="on"><a href="user_manage_list01.php">ID 관리</a></li>
							<li><a href="user_manage_list02.php">유로권한 결제</a></li>
							<li><a href="user_manage_list03.php">ID 결제 관리</a></li>
							<li><a href="user_manage_list04.php">결제내역 조회</a></li>
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
				<p>ID 관리</p>
			</h2>
			<div class="bg-border p-25">
				<div class="content-div-wrap">
					<div class="h3-wrap">
						<h3>아이디 기본 정보</h3>
						<div class="basic_info_box bg-sky-box mt-15 lh-26px" id="TitleInfo">
							<strong>이세진 lsj1027</strong> (개인회원) | 간편 로그인 : <button class="btn btn-s btn-blue">카카오 연결하기</button>
						</div>
						<div class="info_table mt-20">
							<table>
								<tbody>
								<tr>
									<th>가입일</th>
									<td id="RegDate">2003.09.19</td>
									<th>이전 방문일</th>
									<td id="LastContact">2025.05.02</td>
									<th> 총 로그인</th>
									<td id="TotLoginCnt">10848회</td>
								</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="h3-wrap">
						<div class="h3-div clear">
							<div class="c-left">
								<h3>서비스별 이용 내역</h3>
							</div>
						</div>
						<div class="info_table">
							<table>
								<tbody>
								<tr>
									<th>로앤비 법률정보 </th>
									<td id="LAWNB_Service" class="pr">현재 권한 : 유료회원 (Professional 2011.04.20 ~ 2100.12.31) <button type="button" class="btn btn-blue btn-s dis-ib ml-5" onclick="location.href='/Payment/Order/'">유료권한 결제</button></td>
								</tr>

								<tr>
									<th>교육센터</th>
									<td>
										현재 이용중인 온라인 강의 내역
										<ul id="Edu_Service"><li>없음</li></ul>
									</td>
								</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="h3-wrap">
						<div class="h3-div clear">
							<div class="c-left">
								<h3>PC/모바일 등록 내역</h3>
							</div>
							<div class="c-right clear">
								<button type="button" class="btn btn-none btn-s c-left">상세내역 조회</button>
							</div>
						</div>
						<div class="info_table">
							<table class="list">
								<thead>
								<tr>
									<th>서비스</th>
									<th>종류</th>
									<th>기기 별칭/정보</th>
									<th>등록일자</th>
									<th>관리</th>
								</tr>
								</thead>
								<tbody id="PCMobileRegList"><tr><td>로앤비</td><td>PC</td><td>yrye1</td><td>2024.03.25 13:58:00</td><td>-</td></tr><tr><td>로앤비</td><td>모바일앱</td><td>test1</td><td>2024.10.04 20:12:00</td><td><a href="#" onclick="DeleteMobileAuth('12978'); return false;">삭제</a></td></tr></tbody>
							</table>
						</div>
					</div>
					<div class="h3-wrap">
						<div class="h3-div clear">
							<div class="c-left">
								<h3>상세정보</h3>
							</div>
							<div class="c-right clear">
								<button type="button" class="btn btn-none btn-s c-left mr-5">정보수정</button>
								<button type="button" class="btn btn-none btn-s c-left">비밀번호 수정</button>
							</div>
						</div>
						<div class="info_table">
							<table>
								<colgroup>
									<col width="150">
									<col width="32%">
									<col width="150">
									<col>
								</colgroup>
								<tbody>
								<tr>
									<th>생년월일</th>
									<td id="UserBirthDay">1977.10.27 (양력)</td>
									<th>직업</th>
									<td id="UserJobName">기타</td>
								</tr>
								<tr>
									<th>회사명</th>
									<td id="UserCompanyName">로앤비</td>
									<th>부서</th>
									<td id="UserDepartment"></td>
								</tr>
								<tr>
									<th>직급</th>
									<td id="UserJobGrade"></td>
									<th>소속기관</th>
									<td id="UserCompanyGroup"></td>
								</tr>
								<tr>
									<th>일반전화번호</th>
									<td id="UserTel"></td>
									<th>주소</th>
									<td id="UserAddr"> </td>
								</tr>
								<tr>
									<th>휴대폰번호</th>
									<td id="UserHP">01096767662</td>
									<th>이메일</th>
									<td id="UserEmail">sj4755@naver.com</td>
								</tr>
								<tr>
									<th>이용약관 및 개인정보 수집/활용 동의 여부</th>
									<td colspan="3">
										<input type="checkbox" name="chk_PolicyAgree" checked="checked" disabled="disabled">통합회원 이용약관(필수)&nbsp;&nbsp;
										<input type="checkbox" name="chk_IndividualAgree" checked="checked" disabled="disabled">개인정보 [필수항목]에 대한 수집 및 이용 (필수)<br>
										<input type="checkbox" name="chk_IndividualSelectAgree" id="chk_IndividualSelectAgree" disabled="disabled">개인정보 [선택항목]에 대한 수집 및 이용 (선택)&nbsp;&nbsp;
										<input type="checkbox" name="chk_MarketingAgree" id="chk_MarketingAgree" disabled="disabled">마케팅 활용 동의 (선택)
										<ul class="text_ex">
											<li>이용약관 및 개인정보 필수항목에 대한 동의는 필수동의사항으로 해제할 수 없습니다. </li>
											<li>개인정보 선택항목 동의와 마케팅 활용 동의는 선택할 수 있으며, 비선택 시 해당 정보를 입력할 수 없습니다.</li>
										</ul>
									</td>
								</tr>
								</tbody>
							</table>
						</div>
						<div class="info_table mailing">
							<table>
								<colgroup>
									<col width="100">
									<col>
									<col width="80">
								</colgroup>
								<thead>
								<tr>
									<th>메일 종류</th>
									<th>안내</th>
									<th>신청</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td class="ta-c">비즈 레터</td>
									<td>최근 법률 이슈와 관련된 로앤비가 보유하고 있는 각종 콘텐츠(판례,법령, 논문 등)를 메일로 제공해 드립니다.</td>
									<td><input type="checkbox" id="chk_BizLetter" name="chk_BizLetter" disabled="disabled" checked="checked">신청</td>
								</tr>

								<tr>
									<td class="ta-c">교육센터<br>안내메일</td>
									<td>로앤비 교육센터의 법무 관련 온/오프라인 교육과정, 세미나, 컨퍼런스, 프로모션에 관한 정보를 받아보실 수 있습니다.</td>
									<td><input type="checkbox" id="chk_EduLetter" name="chk_EduLetter" disabled="disabled" checked="checked">신청</td>
								</tr>
								<tr>
									<td class="ta-c">마케팅<br>메일</td>
									<td>톰슨로이터와 로앤비의 리걸솔루션 관련 정보, 백서, 프로모션, 이벤트에 관한 소식을 전해드립니다.</td>
									<td><input type="checkbox" id="chk_AdLetter" name="chk_AdLetter" disabled="disabled" checked="checked">신청</td>
								</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<?php include '../include/footer_sub.php'; ?>
