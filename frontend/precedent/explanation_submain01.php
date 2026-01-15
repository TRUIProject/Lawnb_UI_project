<?php include '../include/header_sub.php'; ?>
<div class="container-wrap">
    <div class="container-inner">
        <div class="container-right">
        </div>
        <div class="container-center">
            <h2 class="sub-main-tit clear">판례해설</h2>
            <div class="bg-border">
                <div class="sub-main-pd">
                    <div class="sub-main-tab-warp clear">
                        <ul class="sub-main-tab-ul c-left">
                            <li class="on"><a href="./explanation_submain01.php">판례해설 검색</a></li>
	                        <li><a href='./explanation_submain02.php'>민사판례해설</a></li>
	                        <li><a href='./explanation_submain03.php'>조세판례해설</a></li>
                        </ul>
	                    <div class='sub-main-info c-right'>
                            <?php include '../common/guide_operator.php'; ?>
	                    </div>
                    </div>
                    <?php include './explanation_search.php'; ?>
                </div>
            </div>
        </div>
    </div>
</div>
<?php include '../include/footer_sub.php'; ?>
