$(document).ready(function () {
	$('.flex_close').click(function () {
		$(this).toggleClass('on');
	});

	// 3단 조문 추가 쿼리
	$('.old_close_1').click(function () {
		$(".flex_1").toggleClass('flex_hide');
		$(".flex_close").toggle();
		$(this).show();
	});
	$('.old_close_2').click(function () {
		$(".flex_2").toggleClass('flex_hide');
		$(".flex_close").toggle();
		$(this).show();
	});
	$('.old_close_3').click(function () {
		$(".flex_3").toggleClass('flex_hide');
		$(".flex_close").toggle();
		$(this).show();
	});

	$('.flex_open').click(function () { // 가려진거 원상복구
		$(".flex_1, .flex_2, .flex_3").removeClass('flex_hide');
		$(".flex_close, .flex_open").toggle();
	});

	
	$('.toggle_search').click(function () { // 검색영역 세로 토글
		if ($(".box_third_history, .box_third_search").height() == 0) { $(".box_third_history, .box_third_search").css({ height: 'auto', transition: '.3s' }); }
		else { $(".box_third_history, .box_third_search").css({ height: '0', transition: '.3s' }); }
		$(".search_open, .search_close").toggle();
		
		setTimeout(function () { setHeight_samdan(0); }, 400);
	});

	//$('.history_hlist > span').click(function () { // 기준검색설정
	//	$(this).toggleClass('on');
	//	$(this).siblings().removeClass('on');
	//});

	$(document).on('click', '.school_search p span', function () {
		$(this).closest(".box_third").find(".school_search").hide();
	});

	$(document).on('click', '.school_search div.lawval', function () {
		var lawVal = $(this).attr("data-val");
		var lawTit = $(this).attr("data-txt");
		if ($(this).closest(".box_third").find("#nWord1").length > 0) {
			lawrule.showLawRuleView(lawVal, 1, null);
			lawrule.setLawRuleInnerHtml(lawVal + ':' + lawTit, 1);
		}
		else if ($(this).closest(".box_third").find("#nWord2").length > 0) {
			lawrule.showLawRuleView(lawVal, 2, null);
			lawrule.setLawRuleInnerHtml(lawVal + ':' + lawTit, 2);
		}
		else {
			lawrule.showLawRuleView(lawVal, 3, null);
			lawrule.setLawRuleInnerHtml(lawVal + ':' + lawTit, 3);
		}
		$(".school_search").hide();
	});

});

function resizeComment() {
	setHeight_samdan(1);
	$(".right_container").removeClass('slide_mov_right');
}
var selectType = 1;
var isSelectView = false;
var lawRuleArr1 = [], lawRuleArr2 = [], lawRuleArr3 = [];
var lawrule = new function () {
	
	this.initLawRuleCont = function (sId) {
		if (sId != "0" && sId != "L006|0|B") {
			setTimeout(function () { lawrule.showLawRuleView(sId, 1, null); }, 100);
			if (localStorage.getItem("lawRuleArr1") != null) {
				lawRuleArr1 = JSON.parse(localStorage.getItem("lawRuleArr1"));
				lawrule.setLawRuleInnerHtml('', 1);
			}
			if (localStorage.getItem("lawRuleArr2") != null) {
				lawRuleArr2 = JSON.parse(localStorage.getItem("lawRuleArr2"));
				lawrule.setLawRuleInnerHtml('', 2);
			}
			if (localStorage.getItem("lawRuleArr3") != null) {
				lawRuleArr3 = JSON.parse(localStorage.getItem("lawRuleArr3"));
				lawrule.setLawRuleInnerHtml('', 3);
			}
		} else {
			$(".no_search_result").show();
			localStorage.removeItem('lawRuleArr1');
			localStorage.removeItem('lawRuleArr2');
			localStorage.removeItem('lawRuleArr3');
		}
	};

	this.showLawRuleView = function (sId, s, ob) {
		selectType = s;
		if (selectType == 1) {
			$("#lbDid").val(sId);
		} else if (selectType == 2) {
			$("#lbDid1").val(sId);
		} else if (selectType == 3) {
			$("#lbDid2").val(sId);
		}
		if (ob != null) {
			$(ob).parent().toggleClass('on');
			$(ob).parent().siblings().removeClass('on');
		}
		var data = { "sId": sId };
		sendNonBlockingAjaxRequest(view.getViewUrl(), data, lawrule.setLawRuleCompViewCallback);
	};

	this.setLawRuleCompViewCallback = function (result) {
		if (result != null) {
			$('#no_search' + selectType.toString()).hide();
			var titleArea = $(result).filter('.title_area').html();
			titleArea = titleArea.replace(/h2/gi, 'p');
			titleArea = titleArea.replace(/(<span)(.*)(<\/span>)/gi, '');
			titleArea = titleArea.replace(/(<div\s*class=\"meta_area\">)/gi, '');
			titleArea = titleArea.replace(/(<\/div>)/gi, '');
			$('#laeruleTitle' + selectType.toString() + '>div').empty();
			$('#laeruleTitle' + selectType.toString() + '>div').html(titleArea);

			var contArea = $(result).filter('.main_container_view_inner').html().trim();
			contArea = contArea.replace(/(<div\s*id=\"view_content\">)/gi, '');
			contArea = contArea.substr(0, contArea.length - 6);
			contArea = contArea.replace(/<!--\?xml\s*version=\"1.0\"\s*encoding=\"utf-16\"\?-->/gi, '');

			$('#samC' + selectType.toString()).empty();
			$('#samC' + selectType.toString()).html(contArea);

			
			if (!isSelectView) {
				isSelectView = true;
				var c = $("#lbDid").val().split('|')[0];
				var tit = $('#laeruleTitle1>div>p').text().trim();
				lawrule.setLawRuleInnerHtml(c + ':' + tit, 1);
			}
			setHeight_samdan(0);
		}
	};


	this.lawRuleSearch = function (t) {
		var txtSearch = $.trim($("#nWord" + t.toString()).val());
		var alertTxt = "", mType = "";
		var cType = $("input[name='cType" + t.toString() + "']:checked").val();

		alertTxt = "검색어를 입력해주세요.";

		if (txtSearch == "" || txtSearch == null) {
			alert(alertTxt);
			$("#nWord" + t.toString()).focus();
		}
		else if (txtSearch.length < 2) {
			alert("검색어는 두 자 이상이어야 합니다.");
			$("#nWord" + t.toString()).focus();
		}
       
		else {
			selectType = t;
			var data = { "searchWord": txtSearch, "sType": cType };
			sendAjaxRequest(view.getTargetUrl(), data, lawrule.lawRuleSearchCallBack);
		}
	};

	this.lawRuleSearchCallBack = function (result) {
		if (result != null) {
			$("#lrlist" + selectType).empty();
			$("#lrlist" + selectType).html(result);
			$("#btnSam" + selectType).closest(".box_third").find(".school_search").toggle();
		}
	};

	this.setLawRuleInnerHtml = function (s, n) {
		if (s.length > 5 || lawRuleArr1.length > 0 || lawRuleArr2.length > 0 || lawRuleArr3.length > 0) {
			if (s != "") {
				if (n == 1) {
					if (lawRuleArr1.indexOf(s) < 0) {
						lawRuleArr1.push(s);
						localStorage.setItem("lawRuleArr1", JSON.stringify(lawRuleArr1));
					}
				} else if (n == 2) {
					if (lawRuleArr2.indexOf(s) < 0) {
						lawRuleArr2.push(s);
						localStorage.setItem("lawRuleArr2", JSON.stringify(lawRuleArr2));
					}
				} else if (n == 3) {
					if (lawRuleArr3.indexOf(s) < 0) {
						lawRuleArr3.push(s);
						localStorage.setItem("lawRuleArr3", JSON.stringify(lawRuleArr3));
					}
				}
			}
			var iHtml = "";
			$('.history_hlist > span').removeClass('on');
			if (n == 1) {
				jQuery.each(lawRuleArr1, function (inx) {
					var hlaw = this.split(':');
					var clson = "";
					if (inx == lawRuleArr1.length - 1) { clson = " class='on'"; }
					iHtml += "<span" + clson + "><a href='#' onclick=\"javascript:lawrule.showLawRuleView('" + hlaw[0] + "', 1, this)\"  Title='" + hlaw[1] + "'>" + hlaw[1] + "</a> <em onclick=\"lawrule.removeRemoveInnerHtml('" + this + "',1)\">X</em></span>";
				});
				$("#hLawList1").html("<h4>조회 히스토리</h4>" + iHtml);
			} else if (n == 2) {
				jQuery.each(lawRuleArr2, function (inx) {
					var hlaw = this.split(':');
					var clson = "";
					if (inx == lawRuleArr2.length - 1) { clson = " class='on'"; }
					iHtml += "<span" + clson + "><a href='#' onclick=\"javascript:lawrule.showLawRuleView('" + hlaw[0] + "', 2, this)\"  Title='" + hlaw[1] + "'>" + hlaw[1] + "</a> <em onclick=\"lawrule.removeRemoveInnerHtml('" + this + "',2)\">X</em></span>";
				});
				$("#hLawList2").html("<h4>조회 히스토리</h4>" + iHtml);
			} else if (n == 3) {
				jQuery.each(lawRuleArr3, function (inx) {
					var hlaw = this.split(':');
					var clson = "";
					if (inx == lawRuleArr3.length - 1) { clson = " class='on'"; }
					iHtml += "<span" + clson + "><a href='#' onclick=\"javascript:lawrule.showLawRuleView('" + hlaw[0] + "', 3, this)\" Title='" + hlaw[1] + "'>" + hlaw[1] + "</a> <em onclick=\"lawrule.removeRemoveInnerHtml('" + this + "',3)\">X</em></span>";
				});
				$("#hLawList3").html("<h4>조회 히스토리</h4>" + iHtml);
			}
		}
	};

	this.removeRemoveInnerHtml = function (s, n) {
		
		if (n == 1) {
			lawRuleArr1.splice(lawRuleArr1.indexOf(s), 1);
			lawrule.setLawRuleInnerHtml('', 1);
		} else if (n == 2) {
			lawRuleArr2.splice(lawRuleArr2.indexOf(s), 1);
			lawrule.setLawRuleInnerHtml('', 2);
		} else if (n == 3) {
			lawRuleArr3.splice(lawRuleArr3.indexOf(s), 1);
			lawrule.setLawRuleInnerHtml('', 3);
		}
	
	};

	this.goToPopView = function (p) {
		var sId = (p == 1) ? $("#lbDid").val().split('|')[0] : (p == 2) ? $("#lbDid1").val() : $("#lbDid2").val();
		if (sId != '' && sId.length > 4) { showOriginalView('../Info/ContentView?sid=' + sId);}
		
	};

	this.moveToTab = function (p) {
		var sId = $("#lbDid").val().split('|')[0];
		var url = (p == 0) ? "/Info/ContentView?sid=" + sId + "_0_A" : "/Info/ContentView?sid=" + sId + "_0_B" ;
		$(location).attr('href', url);
	};
};