<!doctype html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>로앤비</title>
	<link rel="stylesheet" type="text/css" href="./css/reset.css">
	<link rel="stylesheet" type="text/css" href="./css/common.css">
	<style>
		table th{vertical-align: top;}
        table th,
        table td{padding:2px;border: 1px solid #ddd;font-size: 14px;font-weight: 400;}
        table tr:hover th,
        table tr:hover td{background: #e1e1e182}
        table td a{font-size: 14px;font-weight: 400;}
        table .info{font-size: 12px;font-weight: 400;}
        table td:hover a{color: #005da2;}
        table .bg td{background: #e1e1e182}
        table .yellow td{background: #fff59d}
        table .bg_blue td{background: #83cdff}
	</style>
</head>
<body>
<div style="margin:10px">
	<h1 style="text-align:left;border-bottom:1px solid #ddd;padding-bottom:10px;margin-bottom:10px">화면 리스트</h1>
	<table style="border:0;text-align:left">
		<colgroup>
			<col width="10%">
			<col width="25%">
			<col width="8%">
			<col width="8%">
			<col width="*">
		</colgroup>
		<thead>
			<tr>
				<th>구분</th>
				<th>상세</th>
				<th>작업 상태</th>
				<th>작업 완료 예정일</th>
				<th>비고</th>
			</tr>
		</thead>
		<tbody>
			<tr class="bg">
				<th rowspan="3">00_메인</th>
				<td><a href="main/main_search.php" target="new">검색 중심 화면</a></td>
				<td>작업완료</td>
				<td>2025.03.09</td>
				<td class="info">
					<p>상단헤더 개인화 서비스 팝업창 추가작업 완료</p>
					<p>검색연산자 안내 팝업창 추가작업 완료</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="main/main_contents.php" target="new">컨텐츠 포함 화면</a></td>
				<td>작업완료</td>
				<td>2025.03.15</td>
				<td></td>
			</tr>
			<tr class='bg'>
				<td><a href='main/main_contents02.php' target='new'>컨텐츠 포함 화면(수정)</a></td>
				<td>작업완료</td>
				<td>2025.05.11</td>
				<td></td>
			</tr>
			<tr>
				<td colspan="5"></td>
			</tr>
			<tr class="bg">
				<th rowspan="25">01_통합검색결과</th>
				<td><a href="./precedent/precedent01.php">02_통합검색결과1_판례</a></td>
				<td>작업완료</td>
				<td>2025.03.09</td>
				<td class="info">
					<p>2025.03.12 - 촤즉 하단 초기화, 적용버튼 변경</p>
					<p>2025.03.17 - 변경안 디자인 적용</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./precedent/precedent02.php">02_통합검색결과1_판례_멀티선택키워드</a></td>
				<td>작업완료</td>
				<td>2025.03.10</td>
				<td class="info">
					<p>2025.03.12 - 촤즉 하단 초기화, 적용버튼 변경</p>
					<p>2025.03.18 - 변경안 디자인 적용</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/lawSearchList.php">02_통합검색결과2_법령</a></td>
				<td>작업완료</td>
				<td>2025.03.11</td>
				<td class="info">
					<p>2025.03.12 - 촤즉 하단 초기화, 적용버튼 변경</p>
					<p>2025.03.18 - 변경안 디자인 적용</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/adminRulesList.php">02_통합검색결과3_행정규칙</a></td>
				<td>작업완료</td>
				<td>2025.03.12</td>
				<td class="info">
					<p>2025.03.18 - 변경안 디자인 적용</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/lawTrendList.php">02_통합검색결과4_입법동향</a></td>
				<td>작업완료</td>
				<td>2025.03.12</td>
				<td class="info">
					<p>2025.03.18 - 변경안 디자인 적용</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/regulationsSearchList.php">02_통합검색결과4_자치법규</a></td>
				<td>작업완료</td>
				<td>2025.03.13</td>
				<td class="info">
					<p>2025.03.18 - 변경안 디자인 적용</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/treatySearchList.php">02_통합검색결과5_조약</a></td>
				<td>작업완료</td>
				<td>2025.03.14</td>
				<td class="info">
					<p>2025.03.18 - 변경안 디자인 적용</p>
				</td>
			</tr>
			<tr class="yellow">
				<td><a href="./content/content01.php">02_통합검색결과24_콘텐츠미리보기1</a></td>
				<td>작업완료</td>
				<td>2025.03.16</td>
				<td class="info">우측 아이콘 파일 필요</td>
			</tr>
			<tr class="yellow">
				<td><a href="./content/content02.php">02_통합검색결과24_콘텐츠미리보기2</a></td>
				<td>작업완료</td>
				<td>2025.03.16</td>
				<td class="info">우측 아이콘 파일 필요</td>
			</tr>
            <tr class="bg">
				<td><a href="./jdi/patentTrialSearchList.php">02_통합검색결과6_특허심판례</a></td>
                <td>작업완료</td>
				<td>2025.03.19</td>
				<td class="info"></td>
			</tr>
            <tr class="bg">
				<td><a href="./jdi/decisiveSearchList.php">02_통합검색결과7_결정례</a></td>
                <td>작업완료</td>
				<td>2025.03.19</td>
                <td class="info"></td>
			</tr>
            <tr class="bg">
				<td><a href="./jdi/authoritSearchList.php">02_통합검색결과8_유권해석</a></td>
                <td>작업완료</td>
                <td>2025.03.19</td>
                <td class="info"></td>
			</tr>
            <tr class="bg">
				<td><a href="./literature/plainPaperSearchList.php">02_통합검색결과9_평석논문</a></td>
				<td>작업완료</td>
				<td>2025.03.20</td>
				<td></td>
			</tr>
            <tr class="bg">
				<td><a href="./literature/eBookSearchList.php">02_통합검색결과10_ebook</a></td>
				<td>작업완료</td>
				<td>2025.03.20</td>
				<td></td>
			</tr>
            <tr class="bg">
                <td><a href="./literature/dictionarySearchList.php">02_통합검색결과11_법률사전</a></td>
                <td>작업완료</td>
				<td>2025.03.21</td>
                <td class="info"></td>
            </tr>
            <tr class="bg">
                <td><a href="professional/professionalsSearchList.php">02_통합검색결과12_법조인명록</a></td>
				<td>작업완료</td>
				<td>2025.03.21</td>
                <td class="info"></td>
			</tr>
            <tr class="bg">
                <td><a href="professional/lawFirmSearchList.php">02_통합검색결과13_로펌</a></td>
				<td>작업완료</td>
				<td>2025.03.21</td>
                <td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="corporate/lawFirmReportSearchList.php">02_통합검색결과14_로펌리포트</a></td>
				<td>작업완료</td>
				<td>2025.03.24</td>
				<td class="info">
			</tr>
			<tr class="bg">
				<td><a href="corporate/corporateInfoSearchList.php">02_통합검색결과15_기업정보</a></td>
				<td>작업완료</td>
				<td>2025.03.24</td>
				<td class="info">
			</tr>
			<tr class="bg">
				<td><a href="formation/legalFormSearchList.php">02_통합검색결과16_전문법률서식</a></td>
				<td>작업완료</td>
				<td>2025.03.24</td>
				<td class="info">
			</tr>
			<tr class="bg">
				<td><a href="formation/bizFoamSearchList.php">02_통합검색결과17_비즈폼서식</a></td>
				<td>작업완료</td>
				<td>2025.03.25</td>
				<td class="info">
			</tr>
			<tr class="bg">
				<td><a href="news/newsSearchList.php">02_통합검색결과18_뉴스</a></td>
				<td>작업완료</td>
				<td>2025.03.25</td>
				<td class="info">
			</tr>
			<tr class="bg">
				<td><a href="news/columnSearchList.php">02_통합검색결과19_칼럼</a></td>
				<td>작업완료</td>
				<td>2025.03.25</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="onju/onjuSearchList.php">02_통합검색결과20_온주</a></td>
				<td>작업완료</td>
				<td>2025.03.26</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./literature/commentSearchList.php">02_통합검색결과20_주석서</a></td>
				<td>작업완료</td>
				<td>2025.03.26</td>
				<td></td>
			</tr>
			<tr>
				<td colspan="5"></td>
			</tr>
			<tr class="bg">
				<th rowspan="11">02_판례</th>
				<td><a href="./precedent/precedent_submain01.php">04_submain_1판례_01</a></td>
				<td>작업완료</td>
				<td>2025.03.18</td>
				<td class="info"></td>
			</tr>
            <tr class="bg">
				<td><a href="./precedent/precedent_submain02.php">04_submain_1판례_02</a></td>
				<td>작업완료</td>
                <td>2025.03.18</td>
				<td></td>
			</tr>
            <tr class="bg">
				<td><a href="./precedent/squareFeet_submain01.php">04_submain_2천자평석01</a></td>
				<td>작업완료</td>
				<td>2025.03.20</td>
                <td class="info"></td>
			</tr>
            <tr class="bg">
				<td><a href="./precedent/squareFeet_submain02.php">04_submain_2천자평석02</a></td>
				<td>작업완료</td>
				<td>2025.03.20</td>
                <td class="info"></td>
			</tr>
            <tr class="bg">
                <td><a href="./precedent/squareFeet_submain02-1.php">04_submain_2천자평석02_1</a></td>
				<td>작업완료</td>
				<td>2025.03.20</td>
				<td class="info"></td>
			</tr>
            <tr class="bg">
                <td><a href="./precedent/research_submain01.php">04_submain_3판례연구01</a></td>
                <td>작업완료</td>
                <td>2025.03.21</td>
                <td class="info"></td>
            </tr>
            <tr class="bg">
                <td><a href="./precedent/research_submain02.php">04_submain_3판례연구02</a></td>
                <td>작업완료</td>
                <td>2025.03.21</td>
                <td class="info"></td>
            </tr>
			<tr class="bg">
				<td><a href="./precedent/precedent01_detail.php">05_검색결과1_판례</a></td>
				<td>작업완료</td>
				<td>2025.05.17</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href='./precedent/pressCaseSearchList.php'>05_검색결과1_판례2_공보판례</a></td>
				<td>작업완료</td>
				<td>2025.05.17</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./precedent/precedent_contents.php">06_콘텐츠_판례</a></td>
				<td>작업완료</td>
				<td>2025.03.23</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./precedent/precedent_history.php">06_콘텐츠_판례_히스토리</a></td>
				<td>작업완료</td>
				<td>2025.03.25</td>
				<td class="info"></td>
			</tr>
			<tr>
				<td colspan="5"></td>
			</tr>
			<tr class="bg">
				<th rowspan="35">03_법규</th>
				<td><a href="./law/law_submain01.php">04_submain_법규1_법령1</a></td>
				<td>작업완료</td>
				<td>2025.03.22</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./law/law_submain02.php">04_submain_법규1_법령2</a></td>
				<td>작업완료</td>
				<td>2025.03.22</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./law/adminRule_submain01.php">04_submain_법규2_행정규칙1</a></td>
				<td>작업완료</td>
				<td>2025.03.22</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./law/adminRule_submain02.php">04_submain_법규2_행정규칙2</a></td>
				<td>작업완료</td>
				<td>2025.03.22</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./law/regulations_submain01.php">04_submain_법규3_자치법규1</a></td>
				<td>작업완료</td>
				<td>2025.03.25</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./law/lawTrend_submain01.php">04_submain_법규4_입법동향1</a></td>
				<td>작업완료</td>
				<td>2025.03.26</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./law/lawTrend_submain02.php">04_submain_법규4_입법동향2</a></td>
				<td>작업완료</td>
				<td>2025.03.26</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./law/treaty_submain01.php">04_submain_법규5_조약</a></td>
				<td>작업완료</td>
				<td>2025.03.27</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./law/lawSearchList_detail.php">05_검색결과2_법령</a></td>
				<td>작업완료</td>
				<td>2025.05.17</td>
				<td class="info">
					<p>상세 페이지 수정</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/adminRulesList_detail.php">05_검색결과3_행정규칙</a></td>
				<td>작업완료</td>
				<td>2025.05.17</td>
				<td class='info'>
					<p>상세 페이지 수정</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/lawTrendList_detail.php">05_검색결과4_입법동향</a></td>
				<td>작업완료</td>
				<td>2025.05.17</td>
				<td class='info'>
					<p>상세 페이지 수정</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/regulationsSearchList_datail.php">05_검색결과4_자치법규</a></td>
				<td>작업완료</td>
				<td>2025.05.17</td>
				<td class='info'>
					<p>상세 페이지 수정</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/treatySearchList_detail.php">05_검색결과5_조약</a></td>
				<td>작업완료</td>
				<td>2025.05.17</td>
				<td class='info'>
					<p>상세 페이지 수정</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/law_content.php">06_콘텐츠_법령</a></td>
				<td>작업완료</td>
				<td>2025.03.30</td>
				<td class="info">
					<p>2025.03.27 주말작업 필요</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/law_content.php">06_콘텐츠_법령_1변경조문</a></td>
				<td>작업완료</td>
				<td>2025.03.30</td>
				<td class="info">
					<p>2025.03.27 주말작업 필요</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/law_content.php">06_콘텐츠_법령_2별표서식</a></td>
				<td>작업완료</td>
				<td>2025.03.30</td>
				<td class="info">
					<p>2025.03.28 주말작업 필요</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/law_content.php">06_콘텐츠_법령_3재개정문</a></td>
				<td>작업완료</td>
				<td>2025.03.30</td>
				<td class="info">
					<p>2025.03.28 주말작업 필요</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/law_content.php">06_콘텐츠_법령_4재개정이유</a></td>
				<td>작업완료</td>
				<td>2025.03.30</td>
				<td class="info">
					<p>2025.03.28 주말작업 필요</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/law_content.php">06_콘텐츠_법령_5전자관보</a></td>
				<td>작업완료</td>
				<td>2025.03.30</td>
				<td class="info">
					<p>2025.03.28 주말작업 필요</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/law_content.php">06_콘텐츠_법령_6관보정정</a></td>
				<td>작업완료</td>
				<td>2025.03.30</td>
				<td class="info">
					<p>2025.03.28 주말작업 필요</p>
				</td>
			</tr>
			<tr class='bg'>
				<td><a href='./law/law_eng.php'>06_영문법령_한영</a></td>
				<td>작업완료</td>
				<td>2025.08.18</td>
				<td class='info'>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/lawTrend_content.php">06_콘텐츠_입법동향</a></td>
				<td>작업완료</td>
				<td>2025.03.30</td>
				<td class="info">
					<p>2025.03.29 주말작업 필요</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/regulations_content.php">06_콘텐츠_자치법규</a></td>
				<td>작업완료</td>
				<td>2025.03.30</td>
				<td class="info">
					<p>2025.03.29 주말작업 필요</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/treaty_content.php">06_콘텐츠_조약</a></td>
				<td>작업완료</td>
				<td>2025.03.30</td>
				<td class="info">
					<p>2025.03.29 주말작업 필요</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/treaty_content.php">06_콘텐츠_조약_한영</a></td>
				<td>작업완료</td>
				<td>2025.03.30</td>
				<td class="info">
					<p>2025.03.29 주말작업 필요</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/adminRules_content.php">06_콘텐츠_행정규칙</a></td>
				<td>작업완료</td>
				<td>2025.03.30</td>
				<td class="info">
					<p>2025.03.29 주말작업 필요</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/step3_content01.php">07_콘텐츠1_3단비교</a></td>
				<td>작업완료</td>
				<td>2025.04.04</td>
				<td rowspan="6" class="info">
					<p>2025.03.30</p>
					<p>주말작업 필요</p>
					<p>04.06일 업로드 예정</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/step3_content02.php">07_콘텐츠1_3단비교_2인용조문비교</a></td>
				<td>작업완료</td>
				<td>2025.04.05</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/step3_content03.php">07_콘텐츠1_3단비교_3단순비교</a></td>
				<td>작업완료</td>
				<td>2025.04.05</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/newArticles_content01.php">07_콘텐츠2_신구조문비교1</a></td>
				<td>작업완료</td>
				<td>2025.04.06</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/newArticles_content02.php">07_콘텐츠2_신구조문비교2</a></td>
				<td>작업완료</td>
				<td>2025.04.06</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/newArticles_content03.php">07_콘텐츠2_신구조문비교3</a></td>
				<td>작업완료</td>
				<td>2025.04.06</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/legalCompar_content01.php">07_콘텐츠4_법규비교</a></td>
				<td>작업완료</td>
				<td>2025.04.12</td>
				<td rowspan="3" class="info">
					<p>2025.03.30</p>
					<p>주말작업 필요</p>
					<p>04.14일 업로드 예정</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/legalCompar_content02.php">07_콘텐츠4_법규비교_본문비교</a></td>
				<td>작업완료</td>
				<td>2025.04.12</td>
			</tr>
			<tr class="bg">
				<td><a href="./law/law_diagram.php">07_콘텐츠5_법령체계도</a></td>
				<td>작업완료</td>
				<td>2025.04.12</td>
			</tr>
			<tr>
				<td colspan="5"></td>
			</tr>
			<tr class="bg">
				<th rowspan="12">04_심판결정해석</th>
				<td><a href="./jdi/patentTria_submain.php">04_submain_심판결정1_특허심판례1</a></td>
				<td>작업완료</td>
				<td>2025.04.01</td>
				<td class="info">
					<p>2025.04.02 예정일</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./jdi/decisive_submain01.php">04_submain_심판결정2_결정례1</a></td>
				<td>작업완료</td>
				<td>2025.04.01</td>
				<td class="info">
					<p>2025.04.02 예정일</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./jdi/decisive_submain02.php">04_submain_심판결정2_결정례2</a></td>
				<td>작업완료</td>
				<td>2025.04.01</td>
				<td class="info">
					<p>2025.04.02 예정일</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./jdi/authorit_sumain01.php">04_submain_심판결정2_유권해석1</a></td>
				<td>작업완료</td>
				<td>2025.04.06</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./jdi/authorit_sumain02.php">04_submain_심판결정2_유권해석2</a></td>
				<td>작업완료</td>
				<td>2025.04.06</td>
				<td></td>
			</tr>
            <tr class="bg">
				<td><a href="./jdi/patentTrialSearchList_detail.php">05_검색결과6_특허심판례</a></td>
                <td>작업완료</td>
                <td>2025.03.19</td>
				<td class="info">
					<p>[02_통합검색결과6_특허심판례]와 동일페이지</p>
				</td>
			</tr>
            <tr class="bg">
				<td><a href="./jdi/decisiveSearchList_detail.php">05_검색결과7_결정례</a></td>
                <td>작업완료</td>
                <td>2025.03.19</td>
				<td class="info">
					<p>[02_통합검색결과7_결정례]와 동일페이지</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./jdi/authoritSearchList_detail.php">05_검색결과8_유권해석</a></td>
                <td>작업완료</td>
                <td>2025.03.19</td>
				<td class="info">
					<p>[02_통합검색결과8_유권해석]와 동일페이지</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./jdi/authorit_contents.php">06_콘텐츠__03심판·결정·해석_유권해석</a></td>
				<td>작업완료</td>
				<td>2025.04.06</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./jdi/decisive_contents.php">06_콘텐츠_03심판·결정·해석_결정례</a></td>
				<td>작업완료</td>
				<td>2025.04.06</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./jdi/patentTria_contents01.php">06_콘텐츠_심판결정해_특허심판례</a></td>
				<td>작업완료</td>
				<td>2025.04.06</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./jdi/patentTria_contents02.php">06_콘텐츠_심판결정해_특허심판례_요약정보</a></td>
				<td>작업완료</td>
				<td>2025.04.06</td>
				<td class="info"></td>
			</tr>
			<tr>
				<td colspan="5"></td>
			</tr>
			<tr class="bg">
				<th rowspan="28">05_문헌</th>
				<td><a href="./literature/plainPaper_submain01.php">04_submain_문헌1_논문1</a></td>
				<td>작업완료</td>
				<td>2025.04.10</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./literature/plainPaper_submain02.php">04_submain_문헌1_논문2</a></td>
				<td>작업완료</td>
				<td>2025.04.10</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./literature/plainPaper_submain03.php">04_submain_문헌1_논문3</a></td>
				<td>작업완료</td>
				<td>2025.04.10</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./literature/journal_submain01.php">04_submain_문헌2_저널1</a></td>
				<td>작업완료</td>
				<td>2025.04.08</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./literature/journal_submain02.php">04_submain_문헌2_저널2</a></td>
				<td>작업완료</td>
				<td>2025.04.08</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./literature/eBook_submain01.php">04_submain_문헌3_Ebook1</a></td>
				<td>작업완료</td>
				<td>2025.04.08</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./literature/eBook_submain02.php">04_submain_문헌3_Ebook2</a></td>
				<td>작업완료</td>
				<td>2025.04.08</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./literature/europe_submain01.php">04_submain_문헌4_유럽법제동향1</a></td>
				<td>작업완료</td>
				<td>2025.04.08</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./literature/europe_submain02.php">04_submain_문헌4_유럽법제동향2</a></td>
				<td>작업완료</td>
				<td>2025.04.08</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./literature/dictionary_submain01.php">04_submain_문헌5_법률사전</a></td>
				<td>작업완료</td>
				<td>2025.04.10</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./literature/comment_submain01.php">04_submain_문헌6_주석서1</a></td>
				<td>작업완료</td>
				<td>2025.04.13</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./literature/comment_submain02.php">04_submain_문헌6_주석서2</a></td>
				<td>작업완료</td>
				<td>2025.04.13</td>
				<td></td>
			</tr>
            <tr class="bg">
                <td><a href="./literature/plainPaperSearchList_detail.php">05_검색결과9_논문</a></td>
                <td>작업완료</td>
                <td></td>
                <td class="info">
                    <p>[02_통합검색결과9_평석논문]와 동일페이지</p>
                </td>
            </tr>
			<tr class="bg">
				<td><a href="./literature/plainPaper_cate_SearchList01.php">05_검색결과9_논문_카테고리리스트</a></td>
				<td>작업완료</td>
				<td>2025.04.13</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./literature/plainPaper_cate_SearchList02.php">05_검색결과9_논문_카테고리리스트2_검색결과</a></td>
				<td>작업완료</td>
				<td>2025.04.13</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./literature/plainPaper_cate_SearchList03.php">05_검색결과9_논문_카테고리리스트3_상세</a></td>
				<td>작업완료</td>
				<td>2025.04.14</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./literature/europe_SearchList.php">05_검색결과9_유럽법제동향</a></td>
				<td>작업완료</td>
				<td>2025.04.14</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./literature/journal_SearchList.php">05_검색결과9_저널</a></td>
				<td>작업완료</td>
				<td>2025.04.14</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./literature/eBookSearchList_detail.php">05_검색결과10_ebook</a></td>
				<td>작업완료</td>
				<td></td>
				<td class="info">
					<p>[02_통합검색결과10_ebook]와 동일페이지</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./literature/dictionarySearchList_detail.php">05_검색결과11_법률사전</a></td>
				<td>작업완료</td>
				<td></td>
				<td class="info">
					<p>[02_통합검색결과11_법률사전]와 동일페이지</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./literature/commentSearchList_detail.php">05_검색결과12_주석서</a></td>
				<td>작업완료</td>
				<td></td>
				<td class="info">
					<p>[02_통합검색결과20_주석서]와 동일페이지</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./literature/LawDicInfo_contents01.php">05_법률영한사전_약어표</a></td>
				<td>작업완료</td>
				<td>2025.04.15</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./literature/KorEngDicInfo_contents01.php">05_법률영한사전_일러두기</a></td>
				<td>작업완료</td>
				<td>2025.04.15</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./literature/eBook_contents01.php">06_콘텐츠_03문헌_Ebook</a></td>
				<td>작업완료</td>
				<td>2025.04.15</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./literature/plainPaper_contents.php">06_콘텐츠_03문헌_논문</a></td>
				<td>작업완료</td>
				<td>2025.04.16</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./literature/dictionary_contents.php">06_콘텐츠_03문헌_법률사전</a></td>
				<td>작업완료</td>
				<td>2025.04.16</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./literature/comment_contents01.php">06_콘텐츠_03문헌_주석서</a></td>
				<td>작업완료</td>
				<td>2025.04.16</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./literature/squareStone_contents01.php">06_콘텐츠_03문헌_천자평석</a></td>
				<td>작업완료</td>
				<td>2025.04.16</td>
				<td></td>
			</tr>
			<tr>
				<td colspan="5"></td>
			</tr>
			<tr class="bg">
				<th rowspan="16">05_법조인</th>
				<td><a href="./professional/professional_submain01.php">04_submain_법조인01_법조인명록1</a></td>
				<td>작업완료</td>
				<td>2025.04.16</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./professional/professional_submain02.php">04_submain_법조인01_법조인명록2</a></td>
				<td>작업완료</td>
				<td>2025.04.17</td>
				<td class="info">
				</td>
			</tr>
			<tr class="bg">
				<td><a href="./professional/organization_submain01.php">04_submain_법조인02_조직도</a></td>
				<td>작업완료</td>
				<td>2025.04.17</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./professional/lawFirm_submain01.php">04_submain_법조인03_로펌1</a></td>
				<td>작업완료</td>
				<td>2025.04.17</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./professional/lawFirm_submain02.php">04_submain_법조인03_로펌1</a></td>
				<td>작업완료</td>
				<td>2025.04.17</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./professional/institution_submain01.php">04_submain_법조인04_법조기관안내</a></td>
				<td>작업완료</td>
				<td>2025.04.17</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="professional/professionalsSearchList_detail.php">05_검색결과12_법조인명록</a></td>
				<td>작업완료</td>
				<td></td>
				<td class="info">
					<p>[02_통합검색결과12_법조인명록]과 동일페이지</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="professional/lawFirmSearchList_detail.php">05_검색결과13_로펌</a></td>
				<td>작업완료</td>
				<td></td>
				<td class="info">
					<p>[02_통합검색결과13_로펌]과 동일페이지</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="professional/institution_contents01.php">06_콘텐츠_05법조인_법조기관관할표</a></td>
				<td>작업완료</td>
				<td>2025.04.18</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="professional/professional_content01.php">06_콘텐츠_법조인_0법조인명록</a></td>
				<td>작업완료</td>
				<td>2025.04.18</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="professional/lawFirm_content01.php">06_콘텐츠_법조인_로펌_1기본정보</a></td>
				<td>작업완료</td>
				<td>2025.04.18</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="professional/lawFirm_content02.php">06_콘텐츠_법조인_로펌_2구성원정보</a></td>
				<td>작업완료</td>
				<td>2025.04.20</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="professional/lawFirm_content03.php">06_콘텐츠_법조인_로펌_3로펌소식</a></td>
				<td>작업완료</td>
				<td>2025.04.20</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="professional/lawFirm_content04.php">06_콘텐츠_법조인_로펌_4업무사례</a></td>
				<td>작업완료</td>
				<td>2025.04.20</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="professional/lawFirm_content05.php">06_콘텐츠_법조인_로펌_5로펌리포트</a></td>
				<td>작업완료</td>
				<td>2025.04.20</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="professional/lawFirm_content06.php">06_콘텐츠_법조인_법조인네비게이션</a></td>
				<td>작업완료</td>
				<td>2025.04.26</td>
				<td></td>
			</tr>
			<tr>
				<td colspan="5"></td>
			</tr>
			<tr class="bg">
				<th rowspan="12">06_기업법무</th>
				<td><a href="corporate/corporate_submain01.php">04_submain_기업법무1_esg</a></td>
				<td>작업완료</td>
				<td>2025.04.20</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="corporate/corporate_submain02.php">04_submain_기업법무2_로펌리포트1</a></td>
				<td>작업완료</td>
				<td>2025.04.20</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="corporate/corporate_submain03.php">04_submain_기업법무2_로펌리포트2</a></td>
				<td>작업완료</td>
				<td>2025.04.20</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="corporate/corporate_submain04.php">04_submain_기업법무3_기업정보</a></td>
				<td>작업완료</td>
				<td>2025.04.27</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="corporate/corporate_submain05.php">04_submain_기업법무4_소송비용계산</a></td>
				<td>작업완료</td>
				<td>2025.04.27</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="corporate/lawFirmReportSearchList_detail.php">05_검색결과14_로펌리포트</a></td>
				<td>작업완료</td>
				<td></td>
				<td class="info">
					<p>[02_통합검색결과14_로펌리포트]과 동일페이지</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="corporate/corporateInfoSearchList_detail.php">05_검색결과15_기업정보</a></td>
				<td>작업완료</td>
				<td></td>
				<td class="info">
					<p>[02_통합검색결과15_기업정보]과 동일페이지</p>
				</td>
			</tr>
			<tr>
				<td><a href="" onclick="alert('페이지 작업 전입니다.');">05_검색결과16_esg</a></td>
				<td>작업전</td>
				<td>2025.04.22</td>
				<td></td>
			</tr>
			<tr>
				<td><a href="" onclick="alert('페이지 작업 전입니다.');">05_검색결과16_esg_검색</a></td>
				<td>작업전</td>
				<td>2025.04.22</td>
				<td></td>
			</tr>
			<tr>
				<td><a href="" onclick="alert('페이지 작업 전입니다.');">06_콘텐츠_법조인_로펌_5로펌리포트</a></td>
				<td>작업전</td>
				<td>2025.04.23</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="corporate/corporateInfo_contents.php">06콘텐츠_06기업법무_기업정보</a></td>
				<td>작업완료</td>
				<td>2025.04.27</td>
				<td></td>
			</tr>
			<tr>
				<td><a href="" onclick="alert('페이지 작업 전입니다.');">06콘텐츠_06기업법무_소송비용계산</a></td>
				<td>미작업</td>
				<td>2025.04.23</td>
				<td class="info">기존 페이지 그대로 유지</td>
			</tr>
			<tr>
				<td colspan="5"></td>
			</tr>
			<tr class="bg">
				<th rowspan="9">07_서식</th>
				<td><a href="formation/legalForm_submain01.php">04_submain_서식_전문법률서식1</a></td>
				<td>작업완료</td>
				<td>2025.04.27</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="formation/legalForm_submain02.php">04_submain_서식_전문법률서식2</a></td>
				<td>작업완료</td>
				<td>2025.04.27</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="formation/legalForm_submain03.php">04_submain_서식_전문법률서식2_한줄</a></td>
				<td>작업완료</td>
				<td>2025.04.27</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="formation/bizFoam_submain01.php">04_submain_서식2_비즈폼서식1</a></td>
				<td>작업완료</td>
				<td>2025.04.27</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="formation/bizFoam_submain02.php">04_submain_서식2_비즈폼서식2</a></td>
				<td>작업완료</td>
				<td>2025.04.27</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="formation/legalFormSearchList.php">05_검색결과16_전문법률서식</a></td>
				<td>작업완료</td>
				<td></td>
				<td class="info">
					<p>[02_통합검색결과16_전문법률서식]과 동일페이지</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="formation/bizFoamSearchList.php">05_검색결과17_비즈폼서식</a></td>
				<td>작업완료</td>
				<td></td>
				<td class="info">
					<p>[02_통합검색결과17_비즈폼서식]과 동일페이지</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="formation/bizFoam_contents01.php">06_콘텐츠_06서식_비즈폼서식</a></td>
				<td>작업완료</td>
				<td>2025.04.27</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="formation/legalForm_contents01.php">06_콘텐츠_06서식_전문법률서식</a></td>
				<td>작업완료</td>
				<td>2025.04.27</td>
				<td class="info"></td>
			</tr>
			<tr>
				<td colspan="4"></td>
			</tr>
			<tr class="bg">
				<th rowspan="8">08_뉴스·칼럼</th>
				<td><a href="news/column_submain01.php">05_submain_news01</a></td>
				<td>작업완료</td>
				<td>2025.04.27</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="news/column_submain01.php">05_submain_news01_academy</a></td>
				<td>작업완료</td>
				<td>2025.04.27</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="news/column_submain02.php">05_submain_news03_tab2</a></td>
				<td>작업완료</td>
				<td>2025.04.27</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="news/column_submain03.php">05_submain_news03_tab3_에디터</a></td>
				<td>작업완료</td>
				<td>2025.04.27</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="news/column_submain04.php">05_submain_news03_tab4_칼럼</a></td>
				<td>작업완료</td>
				<td>2025.04.27</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="news/columnSearchList.php">05_검색결과18_뉴스</a></td>
				<td>작업완료</td>
				<td></td>
				<td class="info">
					<p>[02_통합검색결과18_뉴스]과 동일페이지</p>
				</td>
			</tr>
			<tr class="bg">
				<td><a href="news/news_content.php">06_콘텐츠_08뉴스_뉴스</a></td>
				<td>작업완료</td>
				<td>2025.04.20</td>
				<td></td>
			</tr>
			<tr>
				<td colspan="5"></td>
			</tr>
			<tr class="bg">
				<th rowspan="5">09_온주</th>
				<td><a href="onju/onju_submain01.php">05_submain_온주1</a></td>
				<td>작업완료</td>
				<td>2025.04.27</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="onju/onju_submain02.php">05_submain_온주_온주리스트탭1(수정)</a></td>
				<td>작업완료</td>
				<td>2025.04.27</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="onju/onju_submain02_02.php">05_submain_온주_온주리스트탭2(수정)</a></td>
				<td>작업완료</td>
				<td>2025.04.27</td>
				<td class="info"></td>
			</tr>
			<tr>
				<td><a href="" onclick="alert('페이지 작업 전입니다.');">05_검색결과20_온주</a></td>
				<td>작업전</td>
				<td>2025.04.29</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="onju/onju_contents.php">06_콘텐츠페이지_온주</a></td>
				<td>작업완료</td>
				<td>2025.04.27</td>
				<td class="info"></td>
			</tr>
			<tr>
				<td colspan="5"></td>
			</tr>
			<tr class="bg">
				<th rowspan="14">10_개인화메뉴</th>
				<td><a href="./myDesk/folder_list01.php">나의 폴더</a></td>
				<td>작업완료</td>
				<td>2025.04.20</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./myDesk/folder_list02.php">나의 폴더 추가</a></td>
				<td>작업완료</td>
				<td>2025.04.20</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./myDesk/folder_list03.php">나의 폴더 수정</a></td>
				<td>작업완료</td>
				<td>2025.04.20</td>
				<td></td>
			</tr>
            <tr class="bg">
                <td><a href="./myDesk/memo_list01.php">하이라이트메모</a></td>
				<td>작업완료</td>
				<td>2025.04.21</td>
				<td></td>
			</tr>
            <tr class="bg">
                <td><a href="./myDesk/history_list01.php">히스토리</a></td>
				<td>작업완료</td>
				<td>2025.04.21</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./myDesk/noti_list01.php">알림내역_전체</a></td>
				<td>작업완료</td>
				<td>2025.04.20</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./myDesk/noti_list02.php">알림내역_11문의</a></td>
				<td>작업완료</td>
				<td>2025.04.20</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./myDesk/noti_list02_02.php">알림내역_11문의 상세</a></td>
				<td>작업완료</td>
				<td>2025.04.20</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./myDesk/noti_list03.php">알림내역_판결문 등재 내역</a></td>
				<td>작업완료</td>
				<td>2025.04.20</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./myDesk/noti_list04.php">알림내역_법조인명록</a></td>
				<td>작업완료</td>
				<td>2025.04.20</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./myDesk/noti_list04_02.php">알림내역_법조인명록2</a></td>
				<td>작업완료</td>
				<td>2025.04.20</td>
				<td></td>
			</tr>
            <tr class="bg">
                <td><a href="./myDesk/noti_list05.php">알림내역_승소판결문</a></td>
				<td>작업완료</td>
				<td>2025.04.21</td>
				<td></td>
			</tr>
            <tr class="bg">
                <td><a href="./myDesk/noti_list06.php">알림내역_법령키워드1</a></td>
                <td>작업완료</td>
				<td>2025.04.21</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./myDesk/noti_list06_02.php">알림내역_법령키워드2</a></td>
				<td>작업완료</td>
				<td>2025.04.21</td>
				<td></td>
			</tr>
			<tr>
				<td colspan="5"></td>
			</tr>
			<tr class="bg">
				<th rowspan="11">11_고객센터</th>
				<td><a href="./cs/cs01.php">홈</a></td>
				<td>작업완료</td>
				<td>2025.05.04</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./cs/cs02.php">공지사항</a></td>
				<td>작업완료</td>
				<td>2025.05.05</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./cs/cs02_view.php">공지사항 상세</a></td>
				<td>작업완료</td>
				<td>2025.05.05</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./cs/cs03.php">이용안내</a></td>
				<td>작업완료</td>
				<td>2025.05.05</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./cs/cs04.php">모바일서비스1</a></td>
				<td>작업완료</td>
				<td>2025.05.05</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./cs/cs04_02.php">모바일서비스2</a></td>
				<td>작업완료</td>
				<td>2025.05.05</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./cs/cs05.php">pc인증-수동설치</a></td>
				<td>작업완료</td>
				<td>2025.05.05</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./cs/cs06.php">회원체계</a></td>
				<td>작업완료</td>
				<td>2025.05.05</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./cs/cs07.php">제공범위</a></td>
				<td>작업완료</td>
				<td>2025.05.05</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./cs/cs08.php">약관및정책</a></td>
				<td>작업완료</td>
				<td>2025.05.05</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./cs/cs09.php">원격지원</a></td>
				<td>작업완료</td>
				<td>2025.05.05</td>
				<td class="info"></td>
			</tr>
			<tr>
				<td colspan="5"></td>
			</tr>
			<tr class="bg">
				<th rowspan="18">11_로그인-회원가입</th>
				<td><a href="./login/login.php">로그인</a></td>
				<td>작업완료</td>
				<td>2025.04.21</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./login/find-id.php">아이디찾기</a></td>
				<td>작업완료</td>
				<td>2025.04.21</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./login/find-pw.php">비밀번호찾기</a></td>
				<td>작업완료</td>
				<td>2025.04.21</td>
				<td></td>
			</tr>
			<tr class="bg">
				<td><a href="./login/join01.php">회원가입</a></td>
				<td>작업완료</td>
				<td>2025.04.27</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./login/join02.php">개인_1약관동의</a></td>
				<td>작업완료</td>
				<td>2025.04.27</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./login/join03.php">개인_2내용입력</a></td>
				<td>작업완료</td>
				<td>2025.04.27</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./login/join04.php">개인_3가입완료</a></td>
				<td>작업완료</td>
				<td>2025.05.02</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./login/join-co-02.php">법인_1약관동의</a></td>
				<td>작업완료</td>
				<td>2025.05.02</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./login/join-co-03.php">법인_2내용입력</a></td>
				<td>작업완료</td>
				<td>2025.05.02</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./login/join-co-04.php">법인_3가입완료</a></td>
				<td>작업완료</td>
				<td>2025.05.02</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./login/user_manage_list01.php">ID관리</a></td>
				<td>작업완료</td>
				<td>2025.05.02</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./login/user_manage_list02.php">유료회원결제</a></td>
				<td>작업완료</td>
				<td>2025.05.04</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./login/user_manage_list02_02.php">유료회원결제 완료</a></td>
				<td>작업완료</td>
				<td>2025.05.04</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./login/user_manage_list03.php">ID결제관리1</a></td>
				<td>작업완료</td>
				<td>2025.05.04</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./login/user_manage_list03_02.php">ID결제관리2</a></td>
				<td>작업완료</td>
				<td>2025.05.04</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./login/user_manage_list04.php">결제내역조회1</a></td>
				<td>작업완료</td>
				<td>2025.05.04</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./login/user_manage_list04_02.php">결제내역조회2</a></td>
				<td>작업완료</td>
				<td>2025.05.04</td>
				<td class="info"></td>
			</tr>
			<tr class="bg">
				<td><a href="./login/user_manage_list05.php">탈퇴신청</a></td>
				<td>작업완료</td>
				<td>2025.05.04</td>
				<td class="info"></td>
			</tr>
			<tr>
				<td colspan='5'></td>
			</tr>
			<tr class='bg'>
				<th rowspan='11'>13_디자인수정-가이던스</th>
				<td><a href='./guidance/main.php'>메인</a></td>
				<td>작업완료</td>
				<td>2025.05.14</td>
				<td></td>
			</tr>
			<tr class='bg'>
				<td><a href='./guidance/guidance01.php'>02_실무분야 리스트</a></td>
				<td>작업완료</td>
				<td>2025.05.14</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<td><a href='./guidance/guidance_contents01.php'>05_AI요약_콘텐츠전체보기</a></td>
				<td>작업완료</td>
				<td>2025.05.24</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<td><a href='./guidance/guidance_SearchList01.php'>가이던스 집필위원</a></td>
				<td>작업완료</td>
				<td>2025.05.24</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<td><a href='./guidance/guidance_SearchList02.php'>검색결과</a></td>
				<td>작업완료</td>
				<td>2025.05.24</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<td><a href='./guidance/guidance_writer01.php'>집필자메뉴_원고 접수</a></td>
				<td>작업완료</td>
				<td>2025.05.24</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<td><a href='./guidance/guidance_writer02.php'>집필자메뉴_가이던스 통계</a></td>
				<td>작업완료</td>
				<td>2025.05.24</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<td><a href='./guidance/guidance_writer03.php'>집필자메뉴_원고접수내역</a></td>
				<td>작업완료</td>
				<td>2025.05.25</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<td><a href='./guidance/guidance_writer04.php'>집필자메뉴_원고접수내역없음</a></td>
				<td>작업완료</td>
				<td>2025.05.25</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<td><a href='./guidance/guidance_writer05.php'>집필자메뉴_인세</a></td>
				<td>작업완료</td>
				<td>2025.05.25</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<td><a href='./guidance/guidance_writer06.php'>집필자메뉴_집필원고관리</a></td>
				<td>작업완료</td>
				<td>2025.05.25</td>
				<td class='info'></td>
			</tr>
			<tr>
				<td colspan='5'></td>
			</tr>
			<tr class='bg'>
				<th rowspan='20'>법조인관리</th>
				<td><a href='./manageMembers/manage_members01.php'>01_법조인명록관리</a></td>
				<td>작업완료</td>
				<td>2025.06.28</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<td><a href='./manageMembers/manage_members02.php'>01_법조인명록관리_17page_연결신청</a></td>
				<td>작업완료</td>
				<td>2025.06.28</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<td><a href='./manageMembers/manage_members_add.php'>01_법조인명록관리_18page_추가신청</a></td>
				<td>작업완료</td>
				<td>2025.06.28</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<td><a href='./manageMembers/manage_members_add01.php'>01_법조인명록관리_18page_01</a></td>
				<td>작업완료</td>
				<td>2025.06.28</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<td><a href='./manageMembers/manage_members_add02.php'>01_법조인명록관리_18page_02</a></td>
				<td>작업완료</td>
				<td>2025.06.28</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<td><a href='./manageMembers/manage_members_add03.php'>01_법조인명록관리_18page_03</a></td>
				<td>작업완료</td>
				<td>2025.06.28</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<td><a href='./manageMembers/manage_members_add04.php'>01_법조인명록관리_18page_04</a></td>
				<td>작업완료</td>
				<td>2025.06.28</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<td><a href='./manageMembers/manage_members_add05.php'>01_법조인명록관리_18page_05</a></td>
				<td>작업완료</td>
				<td>2025.06.28</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<td><a href='./manageMembers/manage_members_add06.php'>01_법조인명록관리_18page_06</a></td>
				<td>작업완료</td>
				<td>2025.06.28</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<td><a href='./manageMembers/manage_members_add07.php'>01_법조인명록관리_18page_07</a></td>
				<td>작업완료</td>
				<td>2025.06.28</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<td><a href='./manageMembers/manage_members_del01.php'>01_법조인명록관리_19page_삭제신청</a></td>
				<td>작업완료</td>
				<td>2025.06.28</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<td><a href='./manageMembers/manage_members_connection01.php'>01_법조인명록관리_20page_연결신청</a></td>
				<td>작업완료</td>
				<td>2025.06.28</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<td><a href='./manageMembers/manage_members_connection02.php'>01_법조인명록관리_20page_연결신청</a></td>
				<td>작업완료</td>
				<td>2025.06.28</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<td><a href='./manageMembers/manage_members03.php'>01_법조인명록관리_21page_연결된 상태</a></td>
				<td>작업완료</td>
				<td>2025.06.28</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<td><a href='./manageMembers/manage_members_edit01.php'>01_법조인명록관리_22page_정보수정</a></td>
				<td>작업완료</td>
				<td>2025.06.28</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<td><a href='./manageMembers/manage_members_edit02.php'>01_법조인명록관리_22page_정보수정</a></td>
				<td>작업완료</td>
				<td>2025.06.28</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<td><a href='./manageMembers/manage_members_edit03.php'>01_법조인명록관리_22page_정보수정</a></td>
				<td>작업완료</td>
				<td>2025.06.28</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<td><a href='./manageMembers/manage_members_discon01.php'>01_법조인명록관리_23page_연결해제</a></td>
				<td>작업완료</td>
				<td>2025.06.28</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<td><a href='./manageMembers/manage_members_del02.php'>01_법조인명록관리_23page_삭제신청</a></td>
				<td>작업완료</td>
				<td>2025.06.28</td>
				<td class='info'></td>
			</tr>
			<tr>
				<td colspan='5'></td>
			</tr>
			<tr class='bg'>
				<th rowspan='1'>추가</th>
				<td><a href='./etc/etc01.php'>소송비용 계산 화면</a></td>
				<td>작업완료</td>
				<td>2025.07.19</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<th rowspan='1'>추가</th>
				<td><a href='./popup/CaseSignHelp.php'>사건별 부호문자</a></td>
				<td>작업완료</td>
				<td>2025.09.17</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<th rowspan='1'>추가</th>
				<td><a href='./popup/OnetoOneContactUs.php'>1:1 문의</a></td>
				<td>작업완료</td>
				<td>2025.09.17</td>
				<td class='info'></td>
			</tr>
			<tr class='bg'>
				<th rowspan='1'>추가</th>
				<td><a href='./popup/OnetoOneContactUs02.php'>판결문 등재 신청</a></td>
				<td>작업완료</td>
				<td>2025.09.17</td>
				<td class='info'></td>
			</tr>
		</tbody>
	</table>
</div>
</body>
</html>