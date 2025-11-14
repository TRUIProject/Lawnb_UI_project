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


	//$('.lawsearch, .school_search p span').click(function () { // 각각 검색영역 노출 숨김
	//	$(this).closest(".box_third").find(".school_search").toggle();
	//});

	$('.toggle_search').click(function () { // 검색영역 히스토리 세로 토글
		$(".box_third_history, .box_third_search").slideToggle(300);
	});

	//$('.btn_change_search').click(function () { // 기준검색설정 버튼
	//	$(".box_third_search").toggleClass('search_hidden');
	//	$(this).toggleClass('on');
	//	setTimeout(function () { setHeight_samdan(0); }, 400);
	//});

	//$('.title_compare').click(function () { // 법규비교 제목 클릭시 액션 *  얘는 다시 개발 좀 해야겠다. 두개일때 클릭시 애러
	//	$(".old_close_1, .old_close_2, .old_close_3").show();
	//	$(".flex_3").removeClass('flex_hide');
	//});

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
		if ($(this).closest(".box_third").find("#nWord").length > 0) {
			isSelectView = false;
			$("#lbDid").val(lawVal);
			lawrule.showLawRuleView(lawVal, null);
			setTimeout(function () { lawrule.setInitVal(); lawrule.showLawRuleList(lawVal, 1, 0); }, 100);
			$(".search_filter_button").removeClass('on');
			$(".third_region_filter").removeClass('on');
			$(".region_filter_bg").removeClass('on');
		}
		$(".school_search").hide();
	});

	// 결과 정리 날짜 정의 
	$(document).on('change', '#gDate', function () {
		if ($(this).children('option:selected').val() != '00' && $(this).children('option:selected').val() != '0') {
			$("#gDateDiv").hide();
			lawrule.dateInput($(this).children('option:selected').val(), 'gDate');
		} else if ($(this).children('option:selected').val() == '00') {
			$("#gDateDiv").show();
		} else if ($(this).children('option:selected').val() == '0') {
			$("#gDateDiv").hide();
		}
	});


	$('.icon_info_search, .info_search_filter').click(function () {
		$('.info_search_filter').fadeToggle(200);
	});


	$('.search_filter_button').click(function () { // 필터 버튼
		$(".third_region_filter").addClass('on');
		$(".region_filter_bg").addClass('on');
	});

	$('.region_filter_bg, .close_region_filter').click(function () { // 필터 닫기 버튼
		$(".third_region_filter").removeClass('on');
		$(".region_filter_bg").removeClass('on');
	});
	
});

function resizeComment() {
	setHeight_samdan(1);
	$(".right_container").removeClass('slide_mov_right');
}

chkSubCat_A = function (d) {
	if ($("#eType" + d + "_a").prop("checked")) {
		$("input[name=eType" + d + "]").prop("checked", true);
	} else {
		$("input[name=eType" + d + "]").prop("checked", false);
	}
};

chkSubCat = function (d) {
	var isAllchk = false;
	var selName = "";
	$("input[name=eType" + d + "]:checkbox").each(function () {
		if (this.checked) { isAllchk = true; }
	});
	$("#eType" + d + "_a").prop("checked", isAllchk);
};


var isSelectView = false;
var selectType = 2;
var lawRuleArr1 = [];

var lawrule = new function () {
	this.initLawRuleList = function (sId) {
		if (sId != "0" && sId != "L006|0|A" && sId.substr(0, 4) != "L000") {
			
			isSelectView = false;
			setTimeout(function () { lawrule.showLawRuleView(sId, null); }, 100);
			setTimeout(function () { lawrule.showLawRuleList(sId, 1, 0); }, 100);

			if (localStorage.getItem("lawRuleArr") != null) {
				lawRuleArr1 = JSON.parse(localStorage.getItem("lawRuleArr"));
				lawrule.setLawRuleInnerHtml('');
			}
		} else {
			$(".no_search_result").show();
			$(".box_third_search").toggleClass('search_hidden');
			$(".btn_change_search").toggleClass('on');
			$("#chkselrule1").prop("checked", true);
			setTimeout(function () { setHeight_samdan(0); }, 400);
			localStorage.removeItem('lawRuleArr');
		}
	};

	this.showLawRuleView = function (sId, ob) {
		var data = { "sId": sId };
		if (ob != null) {
			$(ob).parent().toggleClass('on');
			$(ob).parent().siblings().removeClass('on');
			isSelectView = true;
		}
		sendNonBlockingAjaxRequest(view.getViewUrl(), data, lawrule.setLawRuleCompViewCallback);
	};

	this.setLawRuleCompViewCallback = function (result) {
		if (result != null) {
			$(".no_search_result").hide();
			var titleArea = $(result).filter('.title_area').html();
			titleArea = titleArea.replace(/h2/gi, 'p');
			titleArea = titleArea.replace(/(<span)(.*)(<\/span>)/gi, '');
			titleArea = titleArea.replace(/(<div\s*class=\"meta_area\">)/gi, '');
			titleArea = titleArea.replace(/(<\/div>)/gi, '');
			if (isSelectView) {
				$('#samTitle2>div').empty();
				$('#samTitle2>div').html(titleArea);
			} else {
				$('#samTitle1>div').empty();
				$('#samTitle1>div').html(titleArea);
			}
			var contArea = $(result).filter('.main_container_view_inner').html().trim();
			contArea = contArea.replace(/(<div\s*id=\"view_content\">)/gi, '');
			contArea = contArea.substr(0, contArea.length - 6);
			contArea = contArea.replace(/<!--\?xml\s*version=\"1.0\"\s*encoding=\"utf-16\"\?-->/gi, '');
			if (isSelectView) {
				$('#samC2').empty();
				$('#samC2').html(contArea);
			} else {
				$('#samC1').empty();
				$('#samC1').html(contArea); 
			}
		}
	};

	this.showLawRuleList = function (sId, pg, st) {
		var t = "9";
		var c = $("#lbDid").val().substring(0, 4);
		sId = sId.split('|')[0];
		var sw = $("#sWord").val(); var swex = $("#sWord1").val();
		var subtype = $("#sSubType1").val(); var sd1 = $("#sDate1").val(); var sd2 = $("#sDate2").val();
		var data = { "sId": sId, "targetCol": c, "sWord": sw, "sWord1": swex, "sSubType1": subtype, "sDate1": sd1, "sDate2": sd2, "page": pg, "sType": st};
		sendNonBlockingAjaxRequest(view.getTargetUrl(), data, lawrule.setLawRuleListCallback);
	};

	this.setLawRuleListCallback = function (result) {
		if (result != null) {
			var cHtml = $(result).filter('#goveinfo').html();
			var listArea = "<div class='list_header'><span>규칙명</span><span class='right'>소관부처</span></div>";
			listArea += "<ol class=\"list\">" + $(result).filter('#olist').html() + "</ol>";
			var pgArea = $(result).filter('#pgArea').html();
			pgArea = pgArea.replace(/goToPage/gi, 'lawrule.goRuleToPage');
			listArea = listArea + pgArea;
			$('#result_area').empty();
			$('#result_area').html(listArea);
			
			if (typeof cHtml != "undefined") {
				if (cHtml.replace(/ /gi, '').trim() != '') {
					$('#goveType').html("<p class='mgt10'>소관부처</p>" + cHtml);
					setTreeBinding();
				}

			} else {
				$('#goveType').html("");
			}
			
		}
	};

	this.goRuleToPage = function (pg) {
		var sId = $("#lbDid").val().split('|')[0];
		lawrule.showLawRuleList(sId, pg, 1);
	}

	this.goSelectRuleView = function (sId, ob) {
		isSelectView = true;
		lawrule.showLawRuleView(sId);
		$("#lbDid1").val(sId);
		var lawTit = $(ob).text();
		lawrule.setLawRuleInnerHtml(sId + ':' + lawTit);
	    $(".old_close_1, .old_close_2, .old_close_3").show();
		$(".flex_3").removeClass('flex_hide');
		$(ob).closest("li").addClass('_this');
		$(ob).closest("li").siblings().removeClass('_this');
	}

	this.dateInput = function (n, ct) {
		$("#" + ct + "1").val("");
		$("#" + ct + "2").val("");

		var today = new Date();
		var start;
		var m = n.charAt(n.length - 1);
		n = n.slice(0, -1);

		if (m == 'd') { start = new Date(today - n * 1000 * 60 * 60 * 24); }
		else if (m == 'm') { start = new Date(); start.setMonth(start.getMonth() - n); }
		else if (m == 'y') { n = n * ((n == 1) ? 364 : 365); start = new Date(today - n * 1000 * 60 * 60 * 24); }


		var yyyy = start.getFullYear();
		var mm = (start.getMonth() + 1).toString();
		var dd = start.getDate();

		var t_yyyy = today.getFullYear();
		var t_mm = (today.getMonth() + 1).toString();
		var t_dd = today.getDate();
		var cat_1 = '';
		$("#" + ct + "1").val(yyyy + lawrule.addzero(mm) + lawrule.addzero(dd));
		$("#" + ct + "2").val(t_yyyy + lawrule.addzero(t_mm) + lawrule.addzero(t_dd));
	};


	this.addzero = function (n) {
		return n < 10 ? "0" + n : n;
	};

	this.getInitSearch = function () {
		lawrule.setInitVal();
		var sId = $("#lbDid").val().split('|')[0];
		lawrule.showLawRuleList(sId, 1, 0);
		$(".search_filter_button").removeClass('on');
		$(".third_region_filter").removeClass('on');
		$(".region_filter_bg").removeClass('on');
	};

	this.setInitVal = function () {
		$("#gDateDiv").hide();
		$('#sSubType1').val('');
		$('#sDate1').val('');
		$('#sDate2').val('');
		$('#gDate1').val('');
		$('#gDate2').val('');
		$('#sWord').val('');
		$('#sWord1').val(''); 
		$("#gDate").val("0").prop("selected", true);
	};

	this.getSubSearch = function () {
        if (lawrule.setSubType() == 0) {
			var sId = $("#lbDid").val().split('|')[0];
			lawrule.showLawRuleList(sId, 1, 1);

			$(".search_filter_button").addClass('on');
			$(".third_region_filter").removeClass('on');
			$(".region_filter_bg").removeClass('on');
        }
	};

    this.setSubType = function () {
        var sChk = 0;
        var et = "";
		if ($("#lbDid").val().substring(0, 4) == "L008") {
			for (i = 1; i < 51; i++) {
				if ($('#eType' + i.toString() + "_a").length > 0) {
					var et_ = ""; var ut_ = "0";
					$("input[name=eType" + i.toString() + "]:checkbox").each(function () {
						if (this.checked) { et_ += $(this).val() + ","; }
						else { ut_ = "1"; }

					});
					if (et_ != "") {
						et += "$eType" + i.toString() + ":" + et_;
						et += ":" + $('#eType' + i.toString() + "_a").val();
						ut_ = "1";
						et += ":" + ut_;
					}
					else {
						if ($('#eType' + i.toString() + "_a").attr("type") == "checkbox") {
							if ($('#eType' + i.toString() + "_a").prop("checked")) {
								et += "$eType" + i.toString() + ":";
								if ($("input[name=eType" + i.toString() + "]").length == 0) { et += ":" + $('#eType' + i.toString() + "_a").val() + ":0"; }
							}
						}
					}

				}
				else // 전체 값이 없을 때
				{
					var et_ = ""; var ut_ = "0";
					$("input[name=eType" + i.toString() + "]:checkbox").each(function () {
						if (this.checked) { et_ += $(this).val() + ","; }
						else { ut_ = "1"; }
					});
					if (et_ != "") {
						et += "$eType" + i.toString() + ":" + et_;
						et += ":" + $('#eType' + i.toString() + "_a").val();
						et += ":" + ut_;
					}
				}
			}
		} else {
			var et_ = ""; var ut_ = "0";
			$("input[name=eType1]:checkbox").each(function () {
				if (this.checked) { et_ += $(this).val() + ","; }
				else { ut_ = "1"; }
			});
			if (et_ != "") {
				et += "$eType1:" + et_;
				et += ":" + ut_;
			}
		}
		

        if (et != "") { $('#sSubType1').val(et); } else {  $('#sSubType1').val(''); };

		if ($('#gDate1').length > 0 && $('#gDate2').length > 0) {
			if ($('#gDate1').val() != "" || $('#gDate2').val() != "") {
				if (Number($('#gDate1').val()) > Number($('#gDate2').val())) {
					sChk = 2;
					alert('시작 날짜가 끝 날짜보다 큽니다.');
				} else {
					$('#sDate1').val($('#gDate1').val());
					$('#sDate2').val($('#gDate2').val()); 
					sChk = 0;
				}
            }
        }
        return sChk;
	};


	this.lawRuleSearch = function (t) {
		var txtSearch = $.trim($("#nWord").val());
		var alertTxt = "", mType = "";
		var cType = $("input[name='cType1']:checked").val();
		alertTxt = "검색어를 입력해주세요.";

		if (txtSearch == "" || txtSearch == null) {
			alert(alertTxt);
			$("#nWord").focus();
		}
		else if (txtSearch.length < 2) {
			alert("검색어는 두 자 이상이어야 합니다.");
			$("#nWord").focus();
		}
		else {
			selectType = t;
			var data = { "searchWord": txtSearch, "sType": cType };
			sendAjaxRequest("/AjaxInfo/GetLawRuleSearch", data, lawrule.lawRuleSearchCallBack);
		}
	};

	this.lawRuleSearchCallBack = function (result) {
		if (result != null) {
			$("#lrlist1").empty();
			$("#lrlist1").html(result);
			$("#btnSam1").closest(".box_third").find(".school_search").show();
		}
	};

	this.setLawRuleInnerHtml = function (s) {
		if (s != "") {
			if (lawRuleArr1.indexOf(s) < 0) {
				lawRuleArr1.push(s);
				localStorage.setItem("lawRuleArr", JSON.stringify(lawRuleArr1));
			}
		}
		var iHtml = "";
		jQuery.each(lawRuleArr1, function (inx) {
			var hlaw = this.split(':');
			var clson = "";
			if (inx == lawRuleArr1.length - 1) { clson = " class='on'"; }
			iHtml += "<span" + clson + "><a href='#' onclick=\"javascript:lawrule.showLawRuleView('" + hlaw[0] + "', this)\"   Title='" + hlaw[1] + "'>" + hlaw[1] + "</a> <em onclick=\"lawrule.removeRemoveInnerHtml('" + this + "')\">X</em></span>";
		});
		$("#hLawList1").html("<h4>조회 히스토리</h4>" + iHtml);
	};

	this.removeRemoveInnerHtml = function (s) {
		lawRuleArr1.splice(lawRuleArr1.indexOf(s), 1);
		lawrule.setLawRuleInnerHtml('');
	};

	this.goToPopView = function (p) {
		var sId = (p == 0) ? $("#lbDid").val().split('|')[0] : $("#lbDid1").val();
		if (sId != '' && sId.length > 4) { showOriginalView('../Info/ContentView?sid=' + sId);}
	
	};

	this.moveToTab = function (p) {
		var sId = $("#lbDid").val().split('|')[0];
		var url = (p == 0) ? "/Info/ContentView?sid=" + sId + "_0_A" : "/Info/ContentView?sid=" + sId + "_0_B";
		$(location).attr('href', url);
	};


};