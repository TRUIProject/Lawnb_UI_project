<?php include '../include/header_sub.php'; ?>
<div class="container-wrap">
	<div class="container-inner">
		<div class="container-left">
			<div class="scroll-y">
				<div class="container-left-pd">
					<div class="index-list">
						<h2>개인화 서비스</h2>
                        <ul class="index-ul">
                            <li class="on">
                                <a href="folder_list01.php">
                                    <div class="str pl-30">
                                        <p class="n-i n-i-w20 n-i-folder str-ltc"></p>
                                        <p>나의폴더</p>
                                    </div>
                                </a>
                                <div id="folder-wrap" class="index-box p-10">
                                    <div class="folder-tab flex-table">
                                        <div class="flex-tr">
                                            <div class="flex-tc border-r">
                                                <button class="n-i n-i-w25 n-i-folder-plus m-auto" onclick="fn_wrap_class('folder', 'add')"></button>
                                            </div>
                                            <div class="flex-tc">
                                                <button class="n-i n-i-w25 n-i-setting m-auto" onclick="fn_wrap_class('folder', 'edit')"></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="folder-search dis-t mt-10">
                                        <div class="dis-tr">
                                            <div class="dis-tc pr-5"><input type="text" class="input-css01" placeholder="폴더명 입력"></div>
                                            <div class="dis-tc pr-5"><button class="btn-blue btn-m dis-b wb-kl">검색</button></div>
                                            <div class="dis-tc"><button class="btn-gray btn-m dis-b wb-kl">취소</button></div>
                                        </div>
                                    </div>
                                    <ul class="mt-10">
                                        <li class="keyword-dropdown on">
                                            <button class="keyword-list-btn" data-bs-target="#location-con-01" onclick="fn_keyword_list_open(this)"></button>
                                            <div class="keyword-list-hd">
                                                <a href="" class="pl-30 str">
                                                    <p class="n-i n-i-w20 n-i-folder str-lt"></p>
                                                    <p class="fs-16">폴더명</p>
                                                </a>
                                            </div>
                                            <div class="on-edit str">
                                                <p class="n-i n-i-w20 n-i-bar3 str-lt t3"></p>
                                                <ul id="location-con-01" class="sub-ul">
                                                    <li class="on">
                                                        <a href="" class="clear">
                                                            <p class="n-i n-i-w20 n-i-folder c-left mr-5"></p>
                                                            <p class="fs-12 c-left">1234</p>
                                                            <button class="n-i n-i-w20 n-i-x-circle c-right c-58 ml-5"></button>
                                                            <button class="n-i n-i-w20 n-i-pencil c-right c-58"></button>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="" class="clear">
                                                            <p class="n-i n-i-w20 n-i-folder c-left mr-5"></p>
                                                            <p class="fs-12 c-left">1234</p>
                                                            <button class="n-i n-i-w20 n-i-x-circle c-right c-58 ml-5"></button>
                                                            <button class="n-i n-i-w20 n-i-pencil c-right c-58"></button>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="" class="clear">
                                                            <p class="n-i n-i-w20 n-i-folder c-left mr-5"></p>
                                                            <p class="fs-12 c-left">1234</p>
                                                            <button class="n-i n-i-w20 n-i-x-circle c-right c-58 ml-5"></button>
                                                            <button class="n-i n-i-w20 n-i-pencil c-right c-58"></button>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
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
                            <li>
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
		<div class="container-right">
			<div class="border-b-list">
				<div class="str">
					<p class="n-i n-i-w20 n-i-search str-rm r5"></p>
					<input id="keyword-search" type="text" class="input-css01 pr-30" placeholder="결과 내 검색">
				</div>
				<div class="accordion mt-10">
					<ul class="keyword-list list-block">
						<li>
							<input type="checkbox" id="keyword-1-1" value="판례" name="keyword-list">
							<label for="keyword-1-1">판례</label>
						</li>
						<li>
							<input type="checkbox" id="keyword-1-2" value="사건번호" name="keyword-list">
							<label for="keyword-1-2">사건번호</label>
						</li>
						<li>
							<input type="checkbox" id="keyword-1-3" value="재판요지" name="keyword-list">
							<label for="keyword-1-3">재판요지</label>
						</li>
						<li>
							<input type="checkbox" id="keyword-1-4" value="사건명" name="keyword-list">
							<label for="keyword-1-4">사건명</label>
						</li>
						<li>
							<input type="checkbox" id="keyword-1-5" value="전문" name="keyword-list">
							<label for="keyword-1-5">전문</label>
						</li>
						<li>
							<input type="checkbox" id="keyword-1-6" value="참조조문" name="keyword-list">
							<label for="keyword-1-6">참조조문</label>
						</li>
					</ul>
				</div>
			</div>
			<div class="border-b-list">
				<div class="accordion">
					<ul class="keyword-list list-block">
						<li>
							<input type="radio" id="radio-all" value="전체" name="date-range">
							<label for="radio-all">전체</label>
						</li>
						<li>
							<input type="radio" id="radio-y1" value="최근 1년" name="date-range">
							<label for="radio-y1">폴더메모</label>
						</li>
						<li>
							<input type="radio" id="radio-y2" value="최근 2년" name="date-range">
							<label for="radio-y2">폴더메모 없음</label>
						</li>
					</ul>
				</div>
			</div>
			<div class="border-b-list">
				<div class="accordion">
					<ul class="keyword-list list-block">
						<li>
							<input type="radio" id="date-all" value="전체" name="date-range">
							<label for="date-all">전체기간</label>
						</li>
						<li>
							<input type="radio" id="date-y1" value="최근 1년" name="date-range">
							<label for="date-y1">최근 일주일</label>
						</li>
						<li>
							<input type="radio" id="date-y2" value="최근 2년" name="date-range">
							<label for="date-y2">최근 한달</label>
						</li>
						<li>
							<input type="radio" id="date-self" value="직접선택" name="date-range">
							<label for="date-self">직접선택</label>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="container-center">
			<h2 class="sub-main-tit str pl-30">
				<p class="n-i n-i-w20 n-i-folder str-ltc"></p>
				<p>중요한 폴더</p>
			</h2>
			<div class="clear mb-20">
				<div class="c-left clear">
					<button class="btn-none btn-m">선택삭제</button>
				</div>
				<div class="r-div c-right clear">
					<div class="c-left ml-10">
						<div class="btn-list btn-list-m btn-list-none">
							<button class="btn pr-5 on" onclick="fn_order_con(this);">
								<span class="icon icon-order resent">날짜</span>
							</button>
							<button class="btn pr-5" onclick="fn_order_con(this);">
								<span class="icon icon-order resent">카테고리</span>
							</button>
						</div>
					</div>
					<div class="dropdown c-left ml-10">
						<button class="btn btn-none btn-m dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							20개
						</button>
						<div class="dropdown-menu-wrap">
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#">50개</a></li>
								<li><a class="dropdown-item" href="#">20개</a></li>
								<li><a class="dropdown-item" href="#">10개</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="bg-border">
				<div class="content-div-wrap">
					<div class="content-div flex-table">
						<div class="flex-tr">
							<div class="c-gray-l pr-10"><input type="checkbox"></div>
							<div class="flex-tc-num c-gray-l">1</div>
							<div class="li-con">
								<ul class="folder-ul">
									<li>
										<a href="">
											<div class="str pl-20 c-blue">
												<p class="n-i n-i-w15 n-i-folder str-ltc"></p>
												<p class="fs-14">폴더명1</p>
											</div>
										</a>
									</li>
									<li>
										<a href="">
											<div class="str pl-20 c-blue">
												<p class="n-i n-i-w15 n-i-folder str-ltc"></p>
												<p class="fs-14">폴더명2</p>
											</div>
										</a>
									</li>
								</ul>
								<a href="" class="c-blue fs-16 mt-5 dis-b">제목입니다</a>
								<p class="fs-12 mt-5 c-gray-l">
									<span>
                                        <i class="newic-h_memo hb_GN"></i>
                                        <i class="newic-h_memo hb_BL"></i>
                                        <i class="newic-h_memo hb_OG"></i>
										<i class="newic-h_memo hb_PR"></i>
										<i class="newic-h_memo hb_GY"></i>
                                    </span>
									2023.02.01</p>
							</div>
						</div>
					</div>
					<div class="content-div flex-table">
						<div class="flex-tr">
							<div class="c-gray-l pr-10"><input type="checkbox"></div>
							<div class="flex-tc-num c-gray-l">2</div>
							<div class="li-con">
								<ul class="folder-ul">
									<li>
										<a href="">
											<div class="str pl-20 c-blue">
												<p class="n-i n-i-w15 n-i-folder str-ltc"></p>
												<p class="fs-14">폴더명1</p>
											</div>
										</a>
									</li>
									<li>
										<a href="">
											<div class="str pl-20 c-blue">
												<p class="n-i n-i-w15 n-i-folder str-ltc"></p>
												<p class="fs-14">폴더명2</p>
											</div>
										</a>
									</li>
								</ul>
								<a href="" class="c-blue fs-16 mt-5 dis-b">제목입니다</a>
								<p class="fs-12 mt-5 c-gray-l">
									<span>
                                        <i class="newic-h_memo hb_GN"></i>
                                        <i class="newic-h_memo hb_BL"></i>
                                        <i class="newic-h_memo hb_OG"></i>
										<i class="newic-h_memo hb_PR"></i>
										<i class="newic-h_memo hb_GY"></i>
                                    </span>
									2023.02.01</p>
							</div>
						</div>
					</div>
					<div class="content-div flex-table">
						<div class="flex-tr">
							<div class="c-gray-l pr-10"><input type="checkbox"></div>
							<div class="flex-tc-num c-gray-l">3</div>
							<div class="li-con">
								<ul class="folder-ul">
									<li>
										<a href="">
											<div class="str pl-20 c-blue">
												<p class="n-i n-i-w15 n-i-folder str-ltc"></p>
												<p class="fs-14">폴더명1</p>
											</div>
										</a>
									</li>
									<li>
										<a href="">
											<div class="str pl-20 c-blue">
												<p class="n-i n-i-w15 n-i-folder str-ltc"></p>
												<p class="fs-14">폴더명2</p>
											</div>
										</a>
									</li>
								</ul>
								<a href="" class="c-blue fs-16 mt-5 dis-b">제목입니다</a>
								<p class="fs-12 mt-5 c-gray-l">
									<span>
                                        <i class="newic-h_memo hb_GN"></i>
                                        <i class="newic-h_memo hb_BL"></i>
                                        <i class="newic-h_memo hb_OG"></i>
										<i class="newic-h_memo hb_PR"></i>
										<i class="newic-h_memo hb_GY"></i>
                                    </span>
									2023.02.01</p>
							</div>
						</div>
					</div>
					<div class="content-div flex-table">
						<div class="flex-tr">
							<div class="c-gray-l pr-10"><input type="checkbox"></div>
							<div class="flex-tc-num c-gray-l">4</div>
							<div class="li-con">
								<ul class="folder-ul">
									<li>
										<a href="">
											<div class="str pl-20 c-blue">
												<p class="n-i n-i-w15 n-i-folder str-ltc"></p>
												<p class="fs-14">폴더명1</p>
											</div>
										</a>
									</li>
									<li>
										<a href="">
											<div class="str pl-20 c-blue">
												<p class="n-i n-i-w15 n-i-folder str-ltc"></p>
												<p class="fs-14">폴더명2</p>
											</div>
										</a>
									</li>
								</ul>
								<a href="" class="c-blue fs-16 mt-5 dis-b">제목입니다</a>
								<p class="fs-12 mt-5 c-gray-l">
									<span>
                                        <i class="newic-h_memo hb_GN"></i>
                                        <i class="newic-h_memo hb_BL"></i>
                                        <i class="newic-h_memo hb_OG"></i>
										<i class="newic-h_memo hb_PR"></i>
										<i class="newic-h_memo hb_GY"></i>
                                    </span>
									2023.02.01</p>
							</div>
						</div>
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
