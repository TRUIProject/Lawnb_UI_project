<div class="container-view view-wrap clear">
	<div class="view-02 c-left mr-10">
		<div class="view-bg-g">
			<div class="view-bg-w">
				<div class="view-header str">
					<div class="btn-wrap str-rt">
						<button class="btn-close icon-x-mark icon-w25" onclick="fn_hidePreviewPage()"></button>
					</div>
					<div class="tit-div str">
						<span class="tit">전원 합의체 대법원 1999. 3. 18 선고 98다32175 전원합의체 판결 [토지소유권이전등기] [공99.5.1.[81],718]</span>
						<a href="../precedent/precedent_contents.php" target="_blank" class="btn-none btn-s ml-10">새창보기
							<span class="icon-out-box icon-w15 pr-15 ml-5"></span></a>
						<a href="../precedent/precedent_history.php" target="_blank"
						   class="badge-blue badge-mid">판례히스토리</a>
					</div>
				</div>
				<div class="view-con">
                    <?php include '../include/contentHtml.php'; ?>
				</div>
			</div>
		</div>
	</div>
	<div class="view-03 c-left">
		<div class="view-icon-warp">
			<ul>
				<li>
					<button onclick="fn_conPreviewLeft()"><span class='n-i n-i-w35 n-i-doc-left'></span></button>
				</li>
				<li>
					<button onclick="fn_conPreviewRight()"><span class="n-i n-i-w35 n-i-doc-right"></span></button>
				</li>
				<li>
					<button onclick="fn_hidePreviewPage()"><span class="icon icon-x-mark icon-w35"></span></button>
				</li>
			</ul>
		</div>
	</div>
</div>