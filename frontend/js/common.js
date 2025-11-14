let expandChk = false;
$(document).ready(function () {

    chkCat_A = function (d) {
        if ($("#cType" + d + "_a").prop("checked")) {
            $("input[name=cType" + d + "]").prop("checked", true);
        } else {
            $("input[name=cType" + d + "]").prop("checked", false);
        }
        if ($('#selType3').length > 0) {
            //$('#selType3').html("<option>법원등급 선택</option>");
            if ($("#sCode").val() == "J001") {
                if (d == "3") {
                    $('#selType3').html("<option>전체</option>");
                    $('#sSubType3').val("");
                }
            } else {
                if (d == "3") {
                    $('#selType3').html("<option>전체</option>");
                }
            }
        }
        if ($('#selType4').length > 0) {
            if ($("#sCode").val() == "I001") {
                $('#selType4').html("<option>전체</option>");
            }
            if ($("#sCode").val() == "C000") {
                if (d == "4") {
                    $('#selType4').html("<option>전체</option>");
                }
            }
        }

        var colCode = $("#sCode").val();
        if (colCode == "L007") {
            treaty.setCategoryType();
        }
    };


    // 메뉴 버튼 클릭 시
    $("#btn-nav").click(function () {
        $("#nav-wrap").toggleClass("on");
    });
    $("#btn-nav-close").click(function () {
        $("#nav-wrap").toggleClass("on");
    });

    //아코디언
    $(".accordion-button").click(function () {
        let isExpanded = $(this).hasClass("show");
        let target = $(this).attr("data-bs-target");
        let $targetDiv = $(target); // jQuery 객체로 변환
        if (isExpanded) {
            $targetDiv.slideUp(300); // 닫기
        } else {
            $targetDiv.slideDown(300); // 열기
        }
        $(this).toggleClass("show");
    });

    // 1. 컨텐츠 미주창 출력
    const mouseupRange = ".highlighter-context";
    let selectedRange = null;
    let justOpened = false; // 팝업이 방금 열렸는지 체크
    $(mouseupRange).on("mouseup", function (e) {
        const selection = window.getSelection();
        if (selection.toString().trim().length > 0) {
            const range = selection.getRangeAt(0);
            const contents = range.cloneContents();

            // 1. div가 포함되어 있으면 제외
            const containsDiv = contents.querySelector("div") !== null;
            if (containsDiv) return;

            // 2. 시작 또는 끝 노드가 .highlighted 내부일 경우 제외
            const startContainer = range.startContainer.parentNode;
            const endContainer = range.endContainer.parentNode;
            if ($(startContainer).closest(".highlighted").length > 0 ||
                $(endContainer).closest(".highlighted").length > 0) {
                return;
            }

            selectedRange = range;

            const popupX = e.pageX + 10;
            const popupY = e.pageY + 10;
            $(".hMemoLayer").css({
                top: popupY + "px",
                left: popupX + "px",
                display: "block"
            }).fadeIn(200);

            justOpened = true;
            setTimeout(() => {
                justOpened = false;
            }, 100);
        }
    });

    // 2. colorBlock 클릭 시, 드래그한 텍스트를 span으로 감싸기
    $(".colorBlock").not(".clear").on("click", function () {
        const highlightClass = $(this).attr("class").split(" ").find(cls => cls.startsWith("hl_"));

        if (selectedRange && highlightClass) {
            const node = selectedRange.commonAncestorContainer;
            const $parentSpan = $(node).closest("span.hl_OG, span.hl_GN, span.hl_BL, span.hl_PR, span.hl_GY");

            if ($parentSpan.length) {
                $parentSpan
                    .removeClass("hl_OG hl_GN hl_BL hl_PR hl_GY")
                    .addClass(highlightClass);
            } else {
                const span = document.createElement("span");
                span.className = highlightClass;
                const contents = selectedRange.extractContents();
                span.appendChild(contents);
                selectedRange.insertNode(span);
            }

            window.getSelection().removeAllRanges();
            selectedRange = null;

            $(".memoInput").prop("disabled", false);
            $(".colorBlock.clear").prop("disabled", false);
            $(".addMeomo label, .colorBlock.clear").css({ opacity: 1 });
            $(".hMemoLayer").fadeOut(100);
        }
    });

    // 4. '해제' 버튼 클릭 시 하이라이트 제거
    $(".colorBlock.clear").on("click", function () {
        if (selectedRange) {
            const node = selectedRange.commonAncestorContainer;
            const $span = $(node.nodeType === 3 ? node.parentNode : node);

            if ($span.is("span.hl_OG, span.hl_GN, span.hl_BL, span.hl_PR, span.hl_GY")) {
                $span.replaceWith($span.contents());
                selectedRange = null;
                $(".hMemoLayer").fadeOut(100);
                $(".colorBlock").removeClass("active");
            }
        }
    });

    // 5. 스크롤 시 팝업 닫기
    $("#main-container-view-inner .ct-scroll").on("scroll", function () {
        $(".hMemoLayer").fadeOut(100);
        $(".hMemoView").fadeOut(100);
        $(".colorBlock").removeClass("active");
        selectedRange = null;
    });

    //팝업 외부 클릭 감지
    $(document).on("click", function (e) {
        if ($(".highlighter-context .hMemoLayer").css("display") === "block" && !justOpened) {
            if (!$(e.target).closest(".hMemoLayer, .colorBlock").length) {
                $(".hMemoLayer").fadeOut(100);
                $(".colorBlock").removeClass("active");
                selectedRange = null;
            }
        }
        if ($(".highlighter-context .hMemoView").css("display") === "block" && !justOpened) {
            if (!$(e.target).closest(".hMemoLayer, .colorBlock").length) {
                $(".hMemoView").fadeOut(100);
                selectedRange = null;
            }
        }
    });

    // 2. highlighted 클릭
    $(".highlighter-context .highlighted").on("click", function () {
        // 현재 클릭된 하이라이트 내부의 .hMemoView만 토글
        $(this).find(".hMemoView").css({
            display: "block"
        }).fadeIn(200);
        justOpened = true;
        setTimeout(() => {
            justOpened = false;
        }, 100);
    });
});

function checkboxesDisplay(ob) {
    if (ob == 'checkboxes' || ob == 'checkboxes2') {
        if (!expandChk) {
            $("#" + ob).show();
            expandChk = true;
        } else {
            $("#" + ob).hide();
            expandChk = false;
        }
    }
};

/* 메모장 출력 */
function addHLLayerMemo() {
    $(".addMemo_txt").toggle();
}

/* 히스토리 탭슬라이드 */
function fn_content_tab_slide(el){
    const liElement = $(el).closest("li");
    let isExpanded = liElement.hasClass("on");
    if (isExpanded) {
        $(liElement).removeClass("on");
    } else {
        $(liElement).addClass("on");
    }
}

function fn_content_left_close(){
    const liElement = $('.ct-left');
    liElement.toggleClass('close');
}
function fn_content_left_open(){
    const liElement = $('.ct-left');
    let isExpanded = liElement.hasClass("close");
    if (isExpanded) {
        liElement.removeClass('close');
    } else {
        liElement.addClass('open');
    }
}


function fn_conPreviewLeft(event){
    $('#container-wrap').removeClass("show-view-right");
    $('#container-wrap').addClass("show-view");
    $('#container-wrap').addClass("show-view-left");
}
function fn_conPreviewRight(event){
    $('#container-wrap').removeClass("show-view-left");
    $('#container-wrap').addClass("show-view");
    $('#container-wrap').addClass("show-view-right");
}

function fn_showPreviewPage(event){
    const liElement = event.target.closest("li");
    if (liElement) {
        liElement.classList.add("on");
    }
    $('#container-wrap').addClass("show-view");
    $('#container-wrap').addClass("show-view-right");
}

function fn_hidePreviewPage(){
    $('#container-wrap').removeClass("show-view");
    $('#container-wrap').removeClass("show-view-left");
    $('#container-wrap').addClass("show-view-right");
}

function fn_toggle_slide(el){
    let target = $(el).attr("data-target");
    let warp = $(el).attr("data-wrap");
    $(target).slideToggle(300);
    $(warp).toggleClass("on");
}

function fn_tab_list(el){
    let parentId = $(el).attr("data-tab-id");
    let targetCon = $(el).attr("data-tab-con");
    $(parentId).find('.tab-li').removeClass("on");
    $(el).addClass("on");
    $(parentId).find('.popup-con-wrap').removeClass("on");
    $(parentId).find(targetCon).addClass("on");
}

function fn_add_class_on(id){
    $(id).addClass("on");
}

function fn_remove_class_on(id){
    $(id).removeClass("on");
}

function fn_toggle_on(el){
    $(el).toggleClass("on");
}

function fn_toggle_off(el){
    $(el).toggleClass("off");
}

function fn_header_sub_menu_toggle(el){
    let target = $(el).attr("data-bs-target");
    $(target).toggleClass("on");
}

function fn_order_con(el){
    $(el).find('span').toggleClass("resent");
}

function fn_keyword_list_open(el){
    const parentLi = $(el).closest("li");
    let target = $(el).attr("data-bs-target");
    let isExpanded = parentLi.hasClass("on");
    let $targetDiv = $(target); // jQuery 객체로 변환
    if (isExpanded) {
        $targetDiv.slideUp(300); // 닫기
    } else {
        $targetDiv.slideDown(300); // 열기
    }
    parentLi.toggleClass("on");
}

function fn_chk_all(el) {
    let target = $(el).attr("data-bs-target");
    let $targetCheckboxes = $(target).find("input[type='checkbox']");
    let isChecked = $(el).prop("checked");

    // 하위 체크박스 전체 선택/해제
    $targetCheckboxes.prop("checked", isChecked);

    // 하위 체크박스 변경 시 부모 체크박스 상태 업데이트
    $targetCheckboxes.on("change", function () {
        let allChecked = $targetCheckboxes.length === $targetCheckboxes.filter(":checked").length;
        $(el).prop("checked", allChecked);
    });
}

function fn_table_index(el) {
    $(el).closest("li").toggleClass("open");
}

// 콘텐츠 팝업창 함수
// 특정 타겟의 버튼과 팝업을 활성화하고, 기존 활성화된 요소들을 비활성화함
function fn_ct_popup(target) {
    // 버튼과 팝업의 ID를 생성
    const btnId = '#' + target + '-btn';
    const popupId = '#' + target + '-popup';

    // 모든 팝업 버튼의 활성화 클래스('on') 제거
    $('.ct-popup-btn-group').find(".btn").removeClass('on');

    // 모든 팝업 창의 활성화 클래스('on') 제거
    $('.ct-center').find(".ct-popup-wrap").removeClass('on');

    // 선택한 버튼과 팝업에 활성화 클래스('on') 추가
    $(btnId).addClass('on');
    $(popupId).addClass('on');
    document.body.classList.add('no-scroll');
}

// 콘텐츠 팝업창 함수
// 특정 타겟의 버튼과 팝업을 활성화하고, 기존 활성화된 요소들을 비활성화함
function fn_ct_popup_close(target) {
    // 모든 팝업 버튼의 활성화 클래스('on') 제거
    $('.ct-popup-btn-group').find(".btn").removeClass('on');
    // 모든 팝업 창의 활성화 클래스('on') 제거
    $('.ct-center').find(".ct-popup-wrap").removeClass('on');
    document.body.classList.remove('no-scroll');
}

// 콘텐츠 조약 함수
// 특정 타겟의 버튼과 팝업을 활성화하고, 기존 활성화된 요소들을 비활성화함
function fn_doc_area(target) {
    const btnId = '#doc-area-' + target + '-btn';
    $('#doc_area_btn_warp').find(".btn").removeClass('on');
    $('#doc_area_warp').removeClass();
    $('#doc_area_warp').addClass(target);
    $(btnId).addClass('on');
}

// 콘텐츠 팝업창 함수
function fn_popup_open(target) {
    // 버튼과 팝업의 ID를 생성
    const popupId = '#' + target + '-popup';

    // 선택한 버튼과 팝업에 활성화 클래스('on') 추가
    $(popupId).addClass('on');
    document.body.classList.add('no-scroll');
}
// 콘텐츠 팝업창 함수
function fn_popup_close(target) {
    // 버튼과 팝업의 ID를 생성
    const popupId = '#' + target + '-popup';

    // 선택한 버튼과 팝업에 활성화 클래스('on') 추가
    $(popupId).removeClass('on');
    document.body.classList.remove('no-scroll');
}

// 법규비교 필터창 함수
function fn_filter_open() {
    // filter-wrap 클래스('filter-open') 추가
    $("#filter-wrap").addClass('filter-open');
}
function fn_filter_close() {
    // filter-wrap 클래스('filter-open') 추가
    $("#filter-wrap").removeClass('filter-open');
}


function fn_step3_close(conNum) {
    const container = $("#step3-container");
    const container01 = $("#step3-button-wrap");
    const btnElement = container01.find('.old_close_' + conNum);
    let isExpanded = btnElement.hasClass("on");
    container.find('.box_third').removeClass('flex_hide'); // 모든 항목 숨김
    if (isExpanded) {
        container.removeClass("close");
    } else {
        container.addClass("close");
        container01.find('.flex_close').removeClass('on'); // 모든 항목 숨김
        container.find('.box_third.flex_' + conNum).addClass('flex_hide'); // 해당 항목만 토글
    }
    btnElement.toggleClass('on');
}


/*
* fn_wrap_class
* 1. class 목록 중에서 'classNm-'로 시작하는 class제거
* 2. 'warpName-classNm' 클래스 추가
*  */
function fn_wrap_class(warpName, classNm) {
    const parentWrap = $('#' + warpName + '-wrap');
    if (parentWrap.length > 0) {
        const el = parentWrap.get(0); // DOM 요소 추출
        const classList = Array.from(el.classList);
        classList.forEach(cls => {
            if (cls.startsWith(warpName + '-')) {
                el.classList.remove(cls);
            }
        });
        el.classList.add(`${warpName}-${classNm}`);
    }
}

/*
* fn_wrap_class
* - 자주묻는질문
*  */
function fn_div_slide() {

}


//미주창 오픈
function open_miju(target) {
    const parentWrap = $('#' + target);
    parentWrap.css('display', 'block');
}
function close_miju(target) {
    const parentWrap = $('#' + target);
    parentWrap.css('display', 'none');
}
/*
* 부칙 오픈
* - 감싸는 li에 class="sub-law-con" 필수 입력
* - 버튼에 onclick='fn_sub_law(2)'를 사용하면 id="sub-law-con-2"에 class on이 추가되고, slick이 활성화됨
*  */
function fn_sub_law(num){
    let wrapCon = $('#sub-law-con-' + num);
    let isExpanded = wrapCon.hasClass('on');
    if (isExpanded) {
        // 닫기
        wrapCon.find('.sub-law-slider').slick('unslick');
    } else {
        // 열기
        wrapCon.find('.sub-law-slider').slick({
            dots:true,
            arrows:false,
            speed:1200,
            autoplay:true,
            autoplaySpeed:9000,
            infinite: true,
        });
    }
    wrapCon.toggleClass('on');
}

/*
* html삭제
*  */
function fn_remove_html(element){
    element.remove();
}

/*
* html삭제
*  */
function fn_add_html(inputId, addId){
    console.log("dd?");
    var inputValue = document.getElementById(inputId).value;
    var targetElement = document.getElementById(addId);
    // 값이 존재할 경우만 추가
    if (inputValue.trim() !== "") {
        // 중복 방지
        var existingLabels = targetElement.querySelectorAll("label");
        for (var i = 0; i < existingLabels.length; i++) {
            if (existingLabels[i].textContent.trim() === inputValue) {
                // 이미 존재하면 추가하지 않음
                return;
            }
        }

        var label = document.createElement("label");
        label.setAttribute("onclick", "fn_remove_html(this)");

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = inputValue;
        checkbox.checked = true;
        checkbox.setAttribute("checked", "checked");

        label.appendChild(checkbox);
        label.append(" " + inputValue); // 띄어쓰기 포함해서 텍스트 추가

        targetElement.appendChild(label);

        // input 값 비움
        inputElement.value = "";
    }
}

/* 팝업내 탭 오픈 */
function fn_popup_tab_on(el){
    let parentId = $(el).attr("data-tab-id");
    let targetCon = $(el).attr("data-tab-con");
    // 기존 선택된 탭과 콘텐츠 제거
    $(parentId).find('.tab-li').removeClass("on");
    $(parentId).find('.popup-con-wrap').removeClass("on");
    // data-tab-con이 같은 .tab-li에 on 추가
    $(parentId).find('.tab-li').filter(function() {
        return $(this).attr("data-tab-con") === targetCon;
    }).addClass("on");
    // 콘텐츠와 부모에 on 추가
    $(parentId).find(targetCon).addClass("on");
    $(parentId).addClass("on");
}


/* 토글탭 */
function fn_tab_toggle(el) {
    let parentId = $(el).attr("data-tab-id"); // 부모 컨테이너 ID
    let targetCon = $(el).attr("data-tab-con"); // 보여줄 콘텐츠 ID

    // 기존 버튼에서 on 제거
    $(parentId).find('.tab-li').removeClass("on");

    // 클릭한 버튼에 on 추가
    $(el).addClass("on");

    // 모든 regulation 숨김 처리
    $(parentId).find('.table_index_con').removeClass("on");

    // targetCon에 on 추가 및 표시
    $(parentId).find(targetCon).addClass("on");
}