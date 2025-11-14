<?php include '../include/header_sub.php'; ?>
<div class="container-wrap">
    <div class="container-inner">
        <div class="container-right">
            <div class="direct-list">
                <div class="direct-item">
                    <div class="clear mb-5">
                        <h2 class="c-left right-header">주요 판례연구</h2>
                        <div class="c-right">
                            <a href="" class="btn-none btn-s">전체보기</a>
                        </div>
                    </div>
                    <ul class="direct-ul">
                        <li>
                            <a href="">
                                <p class="c-blue">제목. 제목을 입력해주세요.제목을 입력해주세요제목을 입력해주세요제목을 입력해주세요제목을 입력해주세요제목을 입력해주세요</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <p class="c-blue">제목. 제목을 입력해주세요</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <p class="c-blue">제목. 제목을 입력해주세요</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <p class="c-blue">제목. 제목을 입력해주세요</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container-center">
            <h2 class="sub-main-tit clear">판례연구</h2>
            <div class="bg-border">
                <div class="sub-main-pd">
                    <div class="sub-main-tab-warp clear">
                        <ul class="sub-main-tab-ul c-left">
                            <li class="on"><a href="./research_submain01.php">판례연구 검색</a></li>
                            <li><a href="./research_submain02.php">분야별 판례연구</a></li>
                        </ul>
                    </div>
                    <div class="sub-main-con-warp">
                        <div class="sub-main-con">
                            <div class="con">
                                <div class="input-box str">
                                    <div class="dis-t">
                                        <div class="dis-tr">
                                            <div class="dis-th">
                                                <label for="keyword-search">검색어</label>
                                            </div>
                                            <div class="dis-tc">
                                                <input id="keyword-search" type="text" class="input-css01" placeholder="검색어" >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="input-box str">
                                    <div class="dis-t">
                                        <div class="dis-tr">
                                            <div class="dis-th">
                                                <label for="keyword-except">제외어</label>
                                            </div>
                                            <div class="dis-tc">
                                                <input id="keyword-except" type="text" class="input-css01" placeholder="제외어" >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="search-area-wrap" class="search-area-wrap con">
                                <div class="setting-box">
                                    <button class="dis-b str" onclick="fn_toggle_slide(this)" data-target="#toggle01" data-warp="#search-area-wrap">
                                        <span class="icon-plus02 icon-w15"></span> 검색범위 상세설정</spa>
                                        <span class="icon-arrow-up icon-w20 str-rt"></span></spa>
                                    </button>
                                </div>
                                <div id="toggle01" class="search-area-con input-box str mt-20">
                                    <div class="input-box str">
                                        <div class="dis-t">
                                            <div class="dis-tr">
                                                <div class="dis-th">
                                                    <label for="keyword-except">평석종류</label>
                                                </div>
                                                <div class="dis-tc">
                                                    <ul class="keyword-chk-list">
                                                        <li>
                                                            <input type="checkbox" id="keyword-1-1" value="" name="keyword-list">
                                                            <label for="keyword-1-1">전체</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="keyword-1-2" value="선택1" name="keyword-list">
                                                            <label for="keyword-1-2">선택1</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="keyword-1-3" value="선택2" name="keyword-list">
                                                            <label for="keyword-1-3">선택2</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="input-box str">
                                        <div class="dis-t">
                                            <div class="dis-tr">
                                                <div class="dis-th">
                                                    <label for="keyword-except">분야</label>
                                                </div>
                                                <div class="dis-tc">
                                                    <ul class="keyword-chk-list">
                                                        <li>
                                                            <input type="checkbox" id="input-chk-1" value="" name="keyword-list">
                                                            <label for="input-chk-1">전체</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="input-chk-2" value="선택1" name="keyword-list">
                                                            <label for="input-chk-2">선택1</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox" id="input-chk-3" value="선택2" name="keyword-list">
                                                            <label for="input-chk-3">선택2</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="input-box str">
                                        <div class="dis-t">
                                            <div class="dis-tr">
                                                <div class="dis-th">
                                                    <label for="keyword-except">발행일자</label>
                                                </div>
                                                <div class="dis-tc clear">
                                                    <div class="dis-t">
                                                        <div class="dis-tr">
                                                            <div class="dis-tc pr-10">
                                                                <select id="select" class="select-css01">
                                                                    <option>기간선택</option>
                                                                    <option>선택2</option>
                                                                    <option>선택3</option>
                                                                    <option>선택4</option>
                                                                </select>
                                                            </div>
                                                            <div class="dis-tc pr-5"><input id="keyword-except" type="date" class="input-css01" placeholder="년/월/일"></div>
                                                            <div class="dis-tc pr-5 ta-c">~</div>
                                                            <div class="dis-tc"><input id="keyword-except" type="date" class="input-css01" placeholder="년/월/일"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="btn-wrap ta-c">
                                <button class="btn btn-blue btn-l">검색</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php include '../include/footer_sub.php'; ?>
