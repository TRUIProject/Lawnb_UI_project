<div class='str guide-operator'>
	<button class='info-bt' onclick="fn_add_class_on('#keyword-operator-wrap')">
		<span class='icon icon-w20 icon-exclamation-circle'></span>검색 연산자 안내
	</button>
	<div id='keyword-operator-wrap' class='header-popup keyword-operator-wrap'>
		<div class='popup-bg'>
			<div class='tit-div fw-700 str'>
				LAWnB 검색연산자 안내
				<div class='str-rt'>
					<button class='icon-x-mark icon-w25 btn-s'
					        onclick="fn_remove_class_on('#keyword-operator-wrap')"></button>
				</div>
			</div>
			<ul class='info-list'>
				<li>
					<div class='div-l'>AND</div>
					<div class='div-r'>
						<p class='txt01'>'이사회'와 '감사'가 모두 포함된 문서</p>
						<p class='txt02'>- 예시) 이사회 감사, 이사회 AND 감사</p>
					</div>
				</li>
				<li>
					<div class='div-l'>OR</div>
					<div class='div-r'>
						<p class='txt01'>'이사회'와 '감사' 중 어느 하나라도 포함된 문서</p>
						<p class='txt02'>- 예시) 이사회 OR 감사</p>
					</div>
				</li>
				<li>
					<div class='div-l'>NOT</div>
					<div class='div-r'>
						<p class='txt01'>'이사회'가 포함되고 '감사'가 포함되지 않은 문서</p>
						<p class='txt02'>- 예시) [검색어]이사회 [제외어]감사, 이사회 NOT 감사</p>
					</div>
				</li>
				<li>
					<div class='div-l'>EQUAL</div>
					<div class='div-r'>
						<p class='txt01'>'이사회 감사'라는 검색어와 완전일치하는 구문이 있는 문서</p>
						<p class='txt02'>- 예시) '이사회 감사'</p>
					</div>
				</li>
				<li>
					<div class='div-l'>NEAR</div>
					<div class='div-r'>
						<p class='txt01'>'이사회'와 '감사' 사이에 단어(형태소)가 10개 이하인 문서</p>
						<p class='txt02'>- 예시) '이사회 감사'~10</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</div>