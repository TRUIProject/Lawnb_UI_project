<?php include '../include/header_sub_content.php'; ?>
<!--	시작 : 헤더	-->
<header class="ct-header">
	<div class="w1600 str clear">
		<h1 class="logo-div"><a href="../main/main_search.php"><img src="../images/common/logo_s.png" alt="로앤비"/></a>
		</h1>
	</div>
</header>
<!--	끝 : 헤더	-->
<div class="w-800px join-wrap">
	<div class="clear mb-30">
		<h2 class="c-left fs-18">개인회원 가입</h2>
		<div class="c-right">
			<ol class="ol-list01">
				<li><p>약관동의</p></li>
				<li class="on"><p>정보입력</p></li>
				<li><p>가입완료</p></li>
			</ol>
		</div>
	</div>
	<div class="container bg-border">
		<div class="border-b pb-40">
			<h3>사용자 정보 입력</h3>
			<p class="star">표시는 필수항목이며, 이름과 아이디(ID)는 가입 후 변경할 수 없습니다.</p>
			<div class="pt-40">
				<div class="w-360px m-auto">
					<div class="input-div">
						<div class="input-hd fw-500">이름 <span class="star"></span></div>
						<div>
							<input type="text" name="username" id="username" title="이름" maxlength="20" class="input-css01">
						</div>
					</div>
					<div class="input-div">
						<div class="input-hd fw-500">아이디 <span class="star"></span></div>
						<div class="dis-t w-100p">
							<div class="dis-tr">
								<div class="dis-tc v-t pr-10">
									<input type="text" name="userid" id="userid" maxlength="12" placeholder="4~12자이내 영문/숫자"
									       onkeypress="IDChange();" onkeydown="IDChange();" onkeyup="IDChange();"
									       class="input-css01">
								</div>
								<div class="dis-tc v-t w-130px">
									<button class="btn-submit min-w-130px">중복확인</button>
								</div>
							</div>
						</div>
					</div>
					<div class="input-div">
						<div class="input-hd fw-500">비밀번호 <span class="star"></span></div>
						<div class="dis-t w-100p">
							<div class="dis-tr">
								<div class="dis-tc v-t pr-10">
									<input type="password" name="userpassword" id="userpassword" maxlength="12"
									       placeholder="6~12자 영문/숫자" class="input-css01">
								</div>
								<div class="dis-tc v-t">
									<input type="password" name="userpasswordconfirm" id="userpasswordconfirm"
									       maxlength="12" placeholder="비밀번호 확인" class="input-css01">
								</div>
							</div>
						</div>
					</div>
					<div class="input-div">
						<div class="input-hd fw-500">
							<span class="">생일</span>
							<span class="star"></span>
							<span class="c-gray-l fw-400 fs-12">(LAWnB는 만 14세 이상부터 가입이 가능합니다.)</span>
						</div>
						<div class="dis-t w-100p">
							<div class="dis-tr">
								<div class="dis-tc v-t pr-10" style="width :75px">
									<select name="userbirth3" id="userbirth3" class="input-css01">
										<option value="">년</option>
										<option value="2010">2010</option>
										<option value="2009">2009</option>
										<option value="2008">2008</option>
										<option value="2007">2007</option>
										<option value="2006">2006</option>
										<option value="2005">2005</option>
										<option value="2004">2004</option>
										<option value="2003">2003</option>
										<option value="2002">2002</option>
										<option value="2001">2001</option>
										<option value="2000">2000</option>
										<option value="1999">1999</option>
										<option value="1998">1998</option>
										<option value="1997">1997</option>
										<option value="1996">1996</option>
										<option value="1995">1995</option>
										<option value="1994">1994</option>
										<option value="1993">1993</option>
										<option value="1992">1992</option>
										<option value="1991">1991</option>
										<option value="1990">1990</option>
										<option value="1989">1989</option>
										<option value="1988">1988</option>
										<option value="1987">1987</option>
										<option value="1986">1986</option>
										<option value="1985">1985</option>
										<option value="1984">1984</option>
										<option value="1983">1983</option>
										<option value="1982">1982</option>
										<option value="1981">1981</option>
										<option value="1980">1980</option>
										<option value="1979">1979</option>
										<option value="1978">1978</option>
										<option value="1977">1977</option>
										<option value="1976">1976</option>
										<option value="1975">1975</option>
										<option value="1974">1974</option>
										<option value="1973">1973</option>
										<option value="1972">1972</option>
										<option value="1971">1971</option>
										<option value="1970">1970</option>
										<option value="1969">1969</option>
										<option value="1968">1968</option>
										<option value="1967">1967</option>
										<option value="1966">1966</option>
										<option value="1965">1965</option>
										<option value="1964">1964</option>
										<option value="1963">1963</option>
										<option value="1962">1962</option>
										<option value="1961">1961</option>
										<option value="1960">1960</option>
										<option value="1959">1959</option>
										<option value="1958">1958</option>
										<option value="1957">1957</option>
										<option value="1956">1956</option>
										<option value="1955">1955</option>
										<option value="1954">1954</option>
										<option value="1953">1953</option>
										<option value="1952">1952</option>
										<option value="1951">1951</option>
										<option value="1950">1950</option>
										<option value="1949">1949</option>
										<option value="1948">1948</option>
										<option value="1947">1947</option>
										<option value="1946">1946</option>
										<option value="1945">1945</option>
										<option value="1944">1944</option>
										<option value="1943">1943</option>
										<option value="1942">1942</option>
										<option value="1941">1941</option>
										<option value="1940">1940</option>
										<option value="1939">1939</option>
										<option value="1938">1938</option>
										<option value="1937">1937</option>
										<option value="1936">1936</option>
										<option value="1935">1935</option>
										<option value="1934">1934</option>
										<option value="1933">1933</option>
										<option value="1932">1932</option>
										<option value="1931">1931</option>
										<option value="1930">1930</option>
									</select>
								</div>
								<div class="dis-tc v-t pr-10" style="width :75px">
									<select name="userbirth1" id="userbirth1" class="input-css01">
										<option value="">월</option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
										<option value="6">6</option>
										<option value="7">7</option>
										<option value="8">8</option>
										<option value="9">9</option>
										<option value="10">10</option>
										<option value="11">11</option>
										<option value="12">12</option>
									</select>
								</div>
								<div class="dis-tc v-t pr-10" style="width :75px">
									<select name="userbirth2" id="userbirth2" class="input-css01">
										<option value="">일</option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
										<option value="6">6</option>
										<option value="7">7</option>
										<option value="8">8</option>
										<option value="9">9</option>
										<option value="10">10</option>
										<option value="11">11</option>
										<option value="12">12</option>
										<option value="13">13</option>
										<option value="14">14</option>
										<option value="15">15</option>
										<option value="16">16</option>
										<option value="17">17</option>
										<option value="18">18</option>
										<option value="19">19</option>
										<option value="20">20</option>
										<option value="21">21</option>
										<option value="22">22</option>
										<option value="23">23</option>
										<option value="24">24</option>
										<option value="25">25</option>
										<option value="26">26</option>
										<option value="27">27</option>
										<option value="28">28</option>
										<option value="29">29</option>
										<option value="30">30</option>
										<option value="31">31</option>
									</select>
								</div>
								<div class="dis-tc v-m">
									<input type="radio" name="userblunar" value="1"> 양력
									<input type="radio" name="userblunar" value="0"> 음력
								</div>
							</div>
						</div>
					</div>
					<div class="input-div">
						<div class="dis-t w-100p">
							<div class="dis-tr">
								<div class="dis-tc v-t pr-10">
									<div class="input-hd fw-500">
										<span class="">직업</span>
										<span class="star"></span>
									</div>
									<input type="text" class="input-css01">
								</div>
								<div class="dis-tc v-t pr-10">
									<div class="input-hd fw-500">
										<span class="">소속</span>
										<span class="star"></span>
									</div>
									<input type="text" class="input-css01">
								</div>
								<div class="dis-tc v-t">
									<div class="input-hd fw-500">
										<span class="">부서</span>
									</div>
									<input type="text" class="input-css01">
								</div>
							</div>
						</div>
					</div>
					<div class="input-div">
						<div class="input-hd fw-500">
							<span class="">일반전화번호</span>
							<span class="c-gray-l fs-12">일반전화번호 입력시 '-' 없이 입력</span>
						</div>
						<input type="text" class="input-css01">
					</div>
					<div class="input-div">
						<div class="input-hd fw-500">
							<span class="">주소</span>
							<span class="star"></span>
						</div>
						<div class="dis-t w-100p">
							<div class="dis-tr">
								<div class="dis-tc v-t pr-10">
									<input type="text" class="input-css01">
								</div>
								<div class="dis-tc v-t w-130px">
									<button class="btn-submit min-w-130px">우편번호검색</button>
								</div>
							</div>
							<div class="dis-tr">
								<div class="dis-tc v-t pr-10 pt-10">
									<input type="text" class="input-css01">
								</div>
								<div class="dis-tc v-t w-130px  pt-10">
									<input type="text" class="input-css01">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="border-b mt-30 pb-40">
			<h3>연락처 정보 입력</h3>
			<p class="star">아래에 기재하는 휴대폰과 이메일로 결제정보, 이용기간만료 안내, PC인증번호, 임시비밀번호 등 로앤비 이용에 중요한 정보들을 보내드리니 반드시 실제 이용하고 있는 정보를 기재하여 주시기 바랍니다.</p>
			<div class="pt-30">
				<div class="w-360px m-auto">
					<div class="input-div">
						<div class="input-hd fw-500">휴대폰 <span class="star"></span></div>
						<div class="dis-t w-100p">
							<div class="dis-tr">
								<div class="dis-tc v-t pr-10">
									<input type="text"  class="input-css01">
								</div>
								<div class="dis-tc v-t pr-10">
									<input type="text"  class="input-css01">
								</div>
								<div class="dis-tc v-t">
									<input type="text"  class="input-css01">
								</div>
							</div>
						</div>
					</div>
					<div class="input-div">
						<div class="input-hd fw-500">이메일 <span class="star"></span></div>
						<input type="text"  class="input-css01">
						<div class="c-gray-l fs-12 mt-10">다음메일(hanmail.net, daum.net)로는 로앤비 메일이 가지 않는 경우가 있으므로, 타 메일 사용을 권합니다. <br>중요한
							결제정보, 이용기간 만료 안내 및 비밀번호 찾기 할때 이메일이 발송되므로 현재 사용하는 메일을 적어 주시기 바랍니다.
						</div>
						<div class="mt-10 fw-500">
							<div class="str pr-25 dis-ib">
								정기 메일링 서비스 선택 <span class="n-i-alert-cir n-i-w20 str-rm"></span>
							</div>
						</div>
						<div class="mt-10">
							<label class="mr-10"><input type="checkbox" name="userbiz_letter" id="userbiz_letter" checked="checked"> 비즈레터</label>
							<label class="mr-10"><input type="checkbox" name="useredu_letter" id="useredu_letter" checked="checked"> 교육센터안내메일</label>
							<label class="mr-10"><input type="checkbox" name="userad_letter" id="userad_letter" checked="checked"> 마케팅 메일</label>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="border-b mt-30 pb-40">
			<h3>가입인증</h3>
			<p class="star">로앤비는 극소수 익명사용자의 대략/중복 가입을 방지하기 위해 인승번호 발송/확인을 통해 회원가입을 받고 있습니다. <br>위에 입력하신 휴대폰 또는 이메일 중
				인증번호를 받으실 곳을 선택하셔서 인증번호를 받으신 후 아래에 입력해 주세요. </p>
			<div class="pt-30">
				<div class="w-360px m-auto">
					<div class="input-div">
						<div class="input-hd fw-500">인증번호 발송 <span class="star"></span></div>
						<div class="dis-t w-100p">
							<div class="dis-tr">
								<div class="dis-tc v-m pr-10">
									<label class="mr-10"><input type="checkbox"> 휴대폰</label>
									<label class="mr-10"><input type="checkbox"> 이메일</label>
								</div>
								<div class="dis-tc v-t" style="width: 200px">
									<button class="btn-blue btn-m w-100p">인증번호 발송</button>
								</div>
							</div>
						</div>
					</div>
					<div class="input-div">
						<div class="dis-t w-100p">
							<div class="dis-tr">
								<div class="dis-tc v-m pr-10">
									<input type="text" class="input-css01">
								</div>
								<div class="dis-tc v-t pr-10" style="width: 120px">
									<button class="btn-submit w-100p">인증번호 확인</button>
								</div>
								<div class="dis-tc v-t" style="width: 80px">
									<button class="btn-submit w-100p">취소</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<p class="c-gray-l fs-14 mt-10">- [010-1234-1234]로 인증번호를 발송하였습니다.</p>
				<p class="c-blue fs-14 mt-10">- [010-1234-1234]로 인증번호를 발송하였습니다.</p>
			</div>
		</div>
		<p class="ta-c mt-30">
			<button class="btn-blue btn-m min-w-130px">확인</button>
		</p>
	</div>
</div>
<?php include '../include/footer_sub.php'; ?>
