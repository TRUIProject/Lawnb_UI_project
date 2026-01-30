<!doctype html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>로앤비</title>
	<link rel="stylesheet" type="text/css" href="../frontend/css/reset.css">
	<link rel="stylesheet" type="text/css" href="../frontend/css/common.css">
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
	<h1 style="text-align:left;border-bottom:1px solid #ddd;padding-bottom:10px;margin-bottom:10px">신규 화면 리스트</h1>
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
				<th>이전작업</th>
				<td><a href="/frontend/index_bak.php" target="_blank">이전작업페이지 확인</a></td>
				<td>작업완료</td>
				<td></td>
				<td class="info">
				</td>
			</tr>
			<tr>
				<td colspan="5"></td>
			</tr>
			<tr>
				<th rowspan="6">판례해설</th>
				<td><a href="/frontend/precedent/explanation_submain01.php" target='_blank'>판례해설 검색</a></td>
				<td>작업완료</td>
				<td>2026.01.10</td>
				<td class='info'>
				</td>
			</tr>
			<tr>
				<td><a href='/frontend/precedent/explanation_submain02.php' target='_blank'>민사판례해설</a></td>
				<td>작업완료</td>
				<td>2026.01.10</td>
				<td class='info'>
				</td>
			</tr>
			<tr>
				<td><a href='/frontend/precedent/explanation_submain03.php' target='_blank'>조세판례해설</a></td>
				<td>작업완료</td>
				<td>2026.01.10</td>
				<td class='info'>
				</td>
			</tr>
			<tr>
				<td><a href='/frontend/precedent/explanation_search01.php' target='_blank'>판례해설 검색결과</a></td>
				<td>작업완료</td>
				<td>2026.01.10</td>
				<td class='info'>
				</td>
			</tr>
			<tr>
				<td><a href='/frontend/precedent/explanation_contents.php' target='_blank'>판례해설 본문리스트</a></td>
				<td>작업완료</td>
				<td>2026.01.24</td>
				<td class='info'>
				</td>
			</tr>
			<tr>
				<td><a href='/frontend/precedent/explanation_contents02.php' target='_blank'>판례해설 본문</a></td>
				<td>작업완료</td>
				<td>2026.01.10</td>
				<td class='info'>
				</td>
			</tr>
			<tr>
				<td colspan='5'></td>
			</tr>
			<tr>
				<th rowspan='5'>주요 예규 해설</th>
				<td><a href='/frontend/law/mainRulesExp_submain01.php' target='_blank'>조세예규 검색</a></td>
				<td>작업완료</td>
				<td>2026.01.17</td>
				<td class='info'>
				</td>
			</tr>
			<tr>
				<td><a href='/frontend/law/mainRulesExp_submain02.php' target='_blank'>법령별 예규 · 주요예규 해설집</a></td>
				<td>작업완료</td>
				<td>2026.01.17</td>
				<td class='info'>
				</td>
			</tr>
			<tr>
				<td><a href='/frontend/law/mainRulesExp_search01.php' target='_blank'>검색결과</a></td>
				<td>작업완료</td>
				<td>2026.01.17</td>
				<td class='info'>
				</td>
			</tr>
			<tr>
				<td><a href='/frontend/law/mainRulesExp_contents01.php' target='_blank'>주요 예규 · 해설 목차 페이지</a></td>
				<td>작업완료</td>
				<td>2026.01.18</td>
				<td class='info'>
				</td>
			</tr>
			<tr>
				<td><a href='/frontend/law/mainRulesExp_contents02.php' target='_blank'>본문 뷰 페이지</a></td>
				<td>작업완료</td>
				<td>2026.01.18</td>
				<td class='info'>
				</td>
			</tr>
			<tr>
				<td colspan='5'></td>
			</tr>
			<tr>
				<th rowspan='5'>회원페이지</th>
				<td><a href='./login/user_manage_list01.php'>ID관리</a></td>
				<td>작업완료</td>
				<td>2025.05.02</td>
				<td class='info'>
					<p>- 법인 관련 데이터 추가 2026.01.30</p>
				</td>
			</tr>
		</tbody>
	</table>
</div>
</body>
</html>