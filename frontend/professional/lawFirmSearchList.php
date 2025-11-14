<?php include '../include/header_sub.php'; ?>
<div class="container-wrap">
    <div class="container-inner">
        <div class="container-right">
            <div class="pr-2">
                <button class="btn-none w-100p btn-l dis-b btn-shadow">법조인명록 등록 / 수정</button>
                <button class="btn-none w-100p btn-l dis-b btn-shadow mt-10">승소판결문 등록</button>
            </div>
            <!-- 법률사무소 소식 시작 // -->
            <div class="direct-list mt-25">
                <div class="direct-item">
                    <h2 class="right-header">법률사무소 소식</h2>
                    <ul class="direct-ul">
                        <li>
                            <a href="">
                                <span class="c-blue">제목</span>
                                <span class="fs-12">/ 2025.12.12</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span class="c-blue">제목</span>
                                <span class="fs-12">/ 2025.12.12</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span class="c-blue">제목</span>
                                <span class="fs-12">/ 2025.12.12</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- // 법률사무소 소식 -->
        </div>
        <div class="container-center">
            <div class="content-wrap">
                <div class="clear mb-15">
                    <div class="c-left">
                        <b>검색결과 8건</b> <span class="fs-14">1/1</span>
                    </div>
                </div>
                <div class="clear">
                    <div class="c-left">
                        <input type="checkbox" id="con-1" class="input-chk" value="판례" name="keyword-list02">
                        <button class="btn-none btn-m ml-10">다운로드</button>
                    </div>
                    <div class="c-right clear">
                        <div class="c-left">
                            <div class="btn-list btn-list-m btn-list-none">
                                <button class="btn btn-icon on"><span class="icon icon-bar3"></span></button>
                                <button class="btn btn-icon"><span class="icon icon-bar2"></span></button>
                            </div>
                        </div>
                        <div class="c-left ml-10">
                            <div class="btn-list btn-list-m btn-list-none">
                                <button class="btn on">정확도</button>
                                <button class="btn pr-5" onclick="fn_order_con(this);">
                                    <span class="icon icon-order resent">목차순</span>
                                </button>
                                <button class="btn pr-5" onclick="fn_order_con(this);">
                                    <span class="icon icon-order resent">연령</span>
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
                <ul class="content-ul">
                    <li>
                        <div class="clear">
                            <div class="c-left img-div-wrap">
                                <div class="img-box">
                                    <div class="img-div mb-5" style="background-image: url('../images/test/testImg01.jpg')"></div>
                                    <p class="fs-14 ta-c">법무법인 세종</p>
                                </div>
                            </div>
                            <div class="c-left txt-div-wrap02">
                                <p class="fs-16 fw-500">서울특별시 광진구 아차산로 405 대성빌딩 202동 302호</p>
                                <div class="mt-10 clear">
                                    <p class="c-left square-gray square-s mr-10">기본정보</p>
                                    <p class="c-left square-gray square-s">구성원</p>
                                </div>
                                <div class="mt-15 p-10">
                                    <p class="fs-14 fw-500">분사무소 정보</p>
                                    <ul class="fs-14 ul-dot mt-5">
                                        <li>
                                            <div class="dot-cell">
                                                <p class="txt">분사무소 정보1</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="dot-cell">
                                                <p class="txt">분사무소 정보1</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="dot-cell">
                                                <p class="txt">분사무소 정보1</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="dot-cell">
                                                <p class="txt">분사무소 정보1</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
	                <li>
		                <div class="clear">
			                <div class="c-left img-div-wrap">
				                <div class="img-box">
					                <p class="fs-14 ta-c">법무법인 세종</p>
				                </div>
			                </div>
			                <div class="c-left txt-div-wrap02">
				                <p class="fs-16 fw-500">서울특별시 광진구 아차산로 405 대성빌딩 202동 302호</p>
				                <div class="mt-10 clear">
					                <p class="c-left square-gray square-s mr-10">기본정보</p>
					                <p class="c-left square-gray square-s">구성원</p>
				                </div>
				                <div class="mt-15 p-10">
					                <p class="fs-14 fw-500">분사무소 정보</p>
					                <ul class="fs-14 ul-dot mt-5">
						                <li>
							                <div class="dot-cell">
								                <p class="txt">분사무소 정보1</p>
							                </div>
						                </li>
						                <li>
							                <div class="dot-cell">
								                <p class="txt">분사무소 정보1</p>
							                </div>
						                </li>
						                <li>
							                <div class="dot-cell">
								                <p class="txt">분사무소 정보1</p>
							                </div>
						                </li>
						                <li>
							                <div class="dot-cell">
								                <p class="txt">분사무소 정보1</p>
							                </div>
						                </li>
					                </ul>
				                </div>
			                </div>
		                </div>
	                </li>
	                <li>
		                <div class="clear">
			                <div class="c-left img-div-wrap">
				                <div class="img-box">
					                <p class="fs-14 ta-c">법무법인 세종</p>
				                </div>
			                </div>
			                <div class="c-left txt-div-wrap02">
				                <p class="fs-16 fw-500">서울특별시 광진구 아차산로 405 대성빌딩 202동 302호</p>
				                <div class="mt-10 clear">
					                <p class="c-left square-gray square-s mr-10">기본정보</p>
					                <p class="c-left square-gray square-s">구성원</p>
				                </div>
				                <div class="mt-15 p-10">
					                <p class="fs-14 fw-500">분사무소 정보</p>
					                <ul class="fs-14 ul-dot mt-5">
						                <li>
							                <div class="dot-cell">
								                <p class="txt">분사무소 정보1</p>
							                </div>
						                </li>
						                <li>
							                <div class="dot-cell">
								                <p class="txt">분사무소 정보1</p>
							                </div>
						                </li>
						                <li>
							                <div class="dot-cell">
								                <p class="txt">분사무소 정보1</p>
							                </div>
						                </li>
						                <li>
							                <div class="dot-cell">
								                <p class="txt">분사무소 정보1</p>
							                </div>
						                </li>
					                </ul>
				                </div>
			                </div>
		                </div>
	                </li>
	                <li>
		                <div class="clear">
			                <div class="c-left img-div-wrap">
				                <div class="img-box">
					                <p class="fs-14 ta-c">법무법인 세종</p>
				                </div>
			                </div>
			                <div class="c-left txt-div-wrap02">
				                <p class="fs-16 fw-500">서울특별시 광진구 아차산로 405 대성빌딩 202동 302호</p>
				                <div class="mt-10 clear">
					                <p class="c-left square-gray square-s mr-10">기본정보</p>
					                <p class="c-left square-gray square-s">구성원</p>
				                </div>
				                <div class="mt-15 p-10">
					                <p class="fs-14 fw-500">분사무소 정보</p>
					                <ul class="fs-14 ul-dot mt-5">
						                <li>
							                <div class="dot-cell">
								                <p class="txt">분사무소 정보1</p>
							                </div>
						                </li>
						                <li>
							                <div class="dot-cell">
								                <p class="txt">분사무소 정보1</p>
							                </div>
						                </li>
						                <li>
							                <div class="dot-cell">
								                <p class="txt">분사무소 정보1</p>
							                </div>
						                </li>
						                <li>
							                <div class="dot-cell">
								                <p class="txt">분사무소 정보1</p>
							                </div>
						                </li>
					                </ul>
				                </div>
			                </div>
		                </div>
	                </li>
                </ul>
                <nav class="page-navigation">
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
</div>
<?php include '../include/footer_sub.php'; ?>
