var selectJoList = "";

$(document).ready(function () {
    $(document).on('change', '#iSelType2_p', function () {
        var joText = $('#txtSeljo_p').val();
        if ((',' + joText + ',').indexOf(',' + $('#iSelType2_p option:selected').val() + ',') < 0) {
            joText = (joText == '') ? $('#iSelType2_p option:selected').val() : joText + ',' + $('#iSelType2_p option:selected').val();
            $('#txtSeljo_p').val(joText);
        }
    });


    $(document).on('change', '#iSelType2_s', function () {
        var joText = $('#txtSeljo_s').val();
        if ((',' + joText + ',').indexOf(',' + $('#iSelType2_s option:selected').val() + ',') < 0) {
            joText = (joText == '') ? $('#iSelType2_s option:selected').val() : joText + ',' + $('#iSelType2_s option:selected').val();
            $('#txtSeljo_s').val(joText);
        }
    });



    $("input:radio[name=iType1]").click(function () {
        var iTp = $("input:radio[name=iType1]:checked").val();
        if (iTp == 3) {
            $("input[name=chkLink]:checkbox").attr("disabled", "disabled");
        }
        else {
            $("input[name=chkLink]:checkbox").attr("disabled", false);
        }
    })

    if (storage.getHwpChrType() == '0') { $("#chkSvaeHwp").prop("checked", true); } else { $("#chkSvaeHwp").prop("checked", false); }
});

var service = new function () {
    // 체크박스 전체 체크
    this.chkIdCat_M = function (_id) {
        if ($("#" + _id + "_m").prop("checked")) {
            $("input[name=" + _id + "]").prop("checked", true);
            $("#" + _id + "_a").prop("checked", true);
        } else {
            $("input[name=" + _id + "]").prop("checked", false);
            $("#" + _id + "_a").prop("checked", false);
        }
    };

    // 체크박스 전체 체크
    this.chkIdCat_A = function (_id) {
        if ($("#" + _id + "_a").prop("checked")) {
            $("input[name=" + _id + "]").prop("checked", true);
            $("#" + _id + "_m").prop("checked", true);
        } else {
            $("input[name=" + _id + "]").prop("checked", false);
            $("#" + _id + "_m").prop("checked", false);
        }
    };
    // 체크박스 체크
    this.chkIdCat = function (_id) {
        var isAllchk = true;
        var _oneOfChk = 0;
        $("input[name=" + _id + "]:checkbox").each(function () {
            if (!this.checked) { isAllchk = false; }
            else { _oneOfChk += 1; }
        });

        $("#" + _id + "_a").prop("checked", isAllchk);
        if (_oneOfChk > 0)
            $("#" + _id + "_m").prop("checked", true);
        else
            $("#" + _id + "_m").prop("checked", false);
    };

    this.chkIndCat_A = function (p) {
        if ($("#iType" + p + "_a").prop("checked")) {
            $("input[name=iType" + p + "]").prop("checked", true);
        } else {
            $("input[name=iType" + p + "]").prop("checked", false);
        }
    };

    this.chkIndCat = function (p) {
        var isAllchk = true;
        $("input[name=iType" + p + "]:checkbox").each(function () {
            if (!this.checked) { isAllchk = false; }
        });
        $("#iType" + p + "_a").prop("checked", isAllchk);
    };

    this.contentFileSave = function () {
        var sid = "";
        if ($("#lbDid").length > 0) {
            sid = (($("#lbTid").length > 0) ? ($("#lbTid").val() == "") ? $("#lbDid").val() : $("#lbTid").val() : $("#lbDid").val());
            if ($("#lbDid").val().substring(0, 4) != sid.substring(0, 4)) {
                sid = $("#lbDid").val();
            }

            if ($("#lbDid").val().substring(0, 4) == "L000") {
                if ($('#iSelType_p').length > 0) {
                    sid = $("#lbDid").val();
                }
            }

            if ($("#lbDid").val().substring(0, 4) == "D001" || $("#lbDid").val().substring(0, 4) == "D003" || $("#lbDid").val().substring(0, 4) == "N006") {
                sid = $("#lbDid").val().split("|")[0];
            }
        }
        sid = replaceChars(sid, "_", "|");
        var isKor = "0";
        if (typeof sid === 'undefined') { sid = $("#sId").val(); }
        if (sid.split('|').length == 2 && $("#lbAdate").length > 0) {
            if ($("#lbAdate").val().length == 8) {
                sid = sid + "|" + $("#lbAdate").val();
            }
        }
        if ($("#chkSvaeHwp").length > 0) { if ($("#chkSvaeHwp").prop("checked")) { storage.setHwpChrType('0'); } else { storage.setHwpChrType('1'); } }
        if ($("#kor_area").length > 0 && $("#eng_area").length > 0) {
            if ($("#kor_area").css("display") == "none") { isKor = "1"; }
            else if ($("#eng_area").css("display") == "none") { isKor = "0"; }
            else { isKor = "2"; }
        }
        if ($('input:radio[name="iType1"]:checked').val() == "4") {
            service.saveByExcel(sid);
        } else {
            $.ajax({
                type: "GET", url: "../AjaxInfo/GetVerifyFile?sId=" + sid, dataType: "text", success: function (data) {
                    if (data == "0") { alert("정회원 이상 사용 가능합니다."); }
                    else {
                        GAEvent("DocDownload", "?sDiv=" + sid);
                        if (service.getChecSavekListVal()) {
                            if (checkMobile()) {
                                //var sFolderIdx = service.chkFolderIdxs("chkfolder6");
                                //url = "https://third.lawnb.com/ConService/ContentSaveByPdf";
                                //url += "?sid=" + sid;
                                //url += "&sUcode=" + uCode;
                                //url += "&fidx=" + sFolderIdx;
                                //url += "&nval=" + selectJoList;
                                //url += "&isLink=" + ($("input[name=chkLink]:checkbox").prop("checked") ? "1" : "0");
                                //url += "&dTarget=3";
                                //url += "&docdownload=Y";
                                //location.href = url;
                                service.setFilteringSave();
                                s = data;
                                var url = "/ConService/ContentSaveToDownView";
                                var frm = document.createElement("form");
                                var sFolderIdx = service.chkFolderIdxs("chkfolder6");

                                frm.method = "post";
                                var input = document.createElement("input");
                                $(input).attr("type", "hidden");
                                $(input).attr("name", "sId"); $(input).attr("value", sid);
                                frm.appendChild(input);

                                input = document.createElement("input");
                                $(input).attr("type", "hidden");
                                $(input).attr("name", "down"); $(input).attr("value", "3");
                                frm.appendChild(input);

                                input = document.createElement("input");
                                $(input).attr("type", "hidden");
                                $(input).attr("name", "downTarget"); $(input).attr("value", "3");
                                frm.appendChild(input);

                                input = document.createElement("input");
                                $(input).attr("type", "hidden");
                                $(input).attr("name", "sType"); $(input).attr("value", $('input:radio[name="iType1"]:checked').val());
                                frm.appendChild(input);

                                input = document.createElement("input");
                                $(input).attr("type", "hidden");
                                $(input).attr("name", "sFolderIdx"); $(input).attr("value", sFolderIdx);
                                frm.appendChild(input);

                                input = document.createElement("input");
                                $(input).attr("type", "hidden");
                                $(input).attr("name", "sVerKey"); $(input).attr("value", s);
                                frm.appendChild(input);

                                input = document.createElement("input");
                                $(input).attr("type", "hidden");
                                $(input).attr("name", "sUcode"); $(input).attr("value", uCode);
                                frm.appendChild(input);

                                input = document.createElement("input");
                                $(input).attr("type", "hidden");
                                $(input).attr("name", "sLinkType"); $(input).attr("value", ($("input[name=chkLink]:checkbox").prop("checked") ? "1" : "0"));
                                frm.appendChild(input);

                                input = document.createElement("input");
                                $(input).attr("type", "hidden");
                                $(input).attr("name", "sNumValue"); $(input).attr("value", selectJoList);
                                frm.appendChild(input);

                                input = document.createElement("input");
                                $(input).attr("type", "hidden");
                                $(input).attr("name", "sChkHwp"); $(input).attr("value", $("#chkSvaeHwp").prop("checked") ? "0" : "1");
                                frm.appendChild(input);

                                input = document.createElement("input");
                                $(input).attr("type", "hidden");
                                $(input).attr("name", "sChkKor"); $(input).attr("value", isKor);
                                frm.appendChild(input);

                                document.body.appendChild(frm);

                                frm.action = url;
                                frm.submit();

                                document.body.removeChild(frm);

                                if ($('input:radio[name="iType1"]:checked').val() == "0") {
                                    alert(" PDF 파일의 경우, 변환 후 다운로드까지 약간의 시간 소요가 있을 수 있습니다. \n잠시만 기다려주세요.");
                                }

                            } else {

                                //if ($('input:radio[name="iType1"]:checked').val() == "0") {
                                //    service.openSave(sid);

                                //} else {
                                service.setFilteringSave();
                                s = data;
                                //var url = ($('input:radio[name="iType1"]:checked').val() == "0") ? "https://third.lawnb.com/ConService/ContentSaveView" : "/ConService/ContentSaveView";
                                var url = ($('input:radio[name="iType1"]:checked').val() == "0"
                                    || $('input:radio[name="iType1"]:checked').val() == "1") ? "/ConService/SaveContentHWP" : "/ConService/ContentSaveView";
                                var frm = document.createElement("form");
                                var sFolderIdx = service.chkFolderIdxs("chkfolder6");

                                frm.method = "post";
                                var input = document.createElement("input");
                                $(input).attr("type", "hidden");
                                $(input).attr("name", "sId"); $(input).attr("value", sid);
                                frm.appendChild(input);

                                input = document.createElement("input");
                                $(input).attr("type", "hidden");
                                $(input).attr("name", "down"); $(input).attr("value", "3");
                                frm.appendChild(input);

                                input = document.createElement("input");
                                $(input).attr("type", "hidden");
                                $(input).attr("name", "downTarget"); $(input).attr("value", "3");
                                frm.appendChild(input);

                                input = document.createElement("input");
                                $(input).attr("type", "hidden");
                                $(input).attr("name", "sType"); $(input).attr("value", $('input:radio[name="iType1"]:checked').val());
                                frm.appendChild(input);

                                input = document.createElement("input");
                                $(input).attr("type", "hidden");
                                $(input).attr("name", "sFolderIdx"); $(input).attr("value", sFolderIdx);
                                frm.appendChild(input);

                                input = document.createElement("input");
                                $(input).attr("type", "hidden");
                                $(input).attr("name", "sVerKey"); $(input).attr("value", s);
                                frm.appendChild(input);

                                input = document.createElement("input");
                                $(input).attr("type", "hidden");
                                $(input).attr("name", "sUcode"); $(input).attr("value", uCode);
                                frm.appendChild(input);

                                input = document.createElement("input");
                                $(input).attr("type", "hidden");
                                $(input).attr("name", "sLinkType"); $(input).attr("value", ($("input[name=chkLink]:checkbox").prop("checked") ? "1" : "0"));
                                frm.appendChild(input);

                                input = document.createElement("input");
                                $(input).attr("type", "hidden");
                                $(input).attr("name", "sNumValue"); $(input).attr("value", selectJoList);
                                frm.appendChild(input);

                                input = document.createElement("input");
                                $(input).attr("type", "hidden");
                                $(input).attr("name", "sChkHwp"); $(input).attr("value", $("#chkSvaeHwp").prop("checked") ? "0" : "1");
                                frm.appendChild(input);

                                input = document.createElement("input");
                                $(input).attr("type", "hidden");
                                $(input).attr("name", "sChkKor"); $(input).attr("value", isKor);
                                frm.appendChild(input);

                                document.body.appendChild(frm);

                                frm.action = url;
                                frm.submit();

                                document.body.removeChild(frm);

                                if ($('input:radio[name="iType1"]:checked').val() == "0") {
                                    alert(" PDF 파일의 경우, 변환 후 다운로드까지 약간의 시간 소요가 있을 수 있습니다. \n잠시만 기다려주세요.");
                                }

                                //}
                            }
                        }

                    }
                }, error: function (e) { }
            });
        }
    };

 
 
    this.contentSave = function () {
        var sid = "";
        if ($("#lbDid").length > 0) {
            sid = (($("#lbTid").length > 0) ? ($("#lbTid").val() == "") ? $("#lbDid").val() : $("#lbTid").val() : $("#lbDid").val());
            if ($("#lbDid").val().substring(0, 4) != sid.substring(0, 4)) {
                sid = $("#lbDid").val();
            }

            if ($("#lbDid").val().substring(0, 4) == "L000") {
                if ($('#iSelType_p').length > 0) {
                    sid = $("#lbDid").val();
                }
            }

            if ($("#lbDid").val().substring(0, 4) == "D001" || $("#lbDid").val().substring(0, 4) == "D003" || $("#lbDid").val().substring(0, 4) == "N006") {
                sid = $("#lbDid").val().split("|")[0];
            }
        }
        sid = replaceChars(sid, "_", "|");
        var isKor = "0";
        if (typeof sid === 'undefined') { sid = $("#sId").val(); }
        if (sid.split('|').length == 2 && $("#lbAdate").length > 0) {
            if ($("#lbAdate").val().length == 8) {
                sid = sid + "|" + $("#lbAdate").val();
            }
        }
        if ($("#chkSvaeHwp").length > 0) { if ($("#chkSvaeHwp").prop("checked")) { storage.setHwpChrType('0'); } else { storage.setHwpChrType('1'); } }
        if ($("#kor_area").length > 0 && $("#eng_area").length > 0) {
            if ($("#kor_area").css("display") == "none") { isKor = "1"; }
            else if ($("#eng_area").css("display") == "none") { isKor = "0"; }
            else { isKor = "2"; }
        }
        if ($('input:radio[name="iType1"]:checked').val() == "4") {
            service.saveByExcel(sid);
        } else {
            $.ajax({
                type: "GET", url: "../AjaxInfo/GetVerifyFile?sId=" + sid, dataType: "text", success: function (data) {
                    if (data == "0") { alert("정회원 이상 사용 가능합니다."); }
                    else {
                        GAEvent("DocDownload", "?sDiv=" + sid);
                        if (service.getChecSavekListVal()) {
                            if (checkMobile()) {
                                var sFolderIdx = service.chkFolderIdxs("chkfolder6");
                                service.setFilteringSave();
                                s = data;
                                requestParam = {
                                    "sId": sid, "down": "3", "downTarget": "3",
                                    "sType": $('input:radio[name="iType1"]:checked').val(),
                                    "sFolderIdx": sFolderIdx,
                                    "sVerKey": s,
                                    "sUcode": uCode,
                                    "sLinkType": ($("input[name=chkLink]:checkbox").prop("checked") ? "1" : "0"),
                                    "sNumValue": selectJoList,
                                    "sChkHwp": ($("#chkSvaeHwp").prop("checked") ? "0" : "1"),
                                    "sChkKor": isKor,
                                };

                                 sendNonBlockingTextToJsonRequest("/ConService/ContentSaveToDownHtml", requestParam, service.saveContentCallback);

                            } else {
                                var sFolderIdx = service.chkFolderIdxs("chkfolder6");
                                service.setFilteringSave();
                                s = data;
                                requestParam = {
                                    "sId": sid, "down": "3", "downTarget": "3",
                                    "sType": $('input:radio[name="iType1"]:checked').val(),
                                    "sFolderIdx": sFolderIdx,
                                    "sVerKey": s,
                                    "sUcode": uCode,
                                    "sLinkType": ($("input[name=chkLink]:checkbox").prop("checked") ? "1" : "0"),
                                    "sNumValue": selectJoList,
                                    "sChkHwp": ($("#chkSvaeHwp").prop("checked") ? "0" : "1"),
                                    "sChkKor": isKor,
                                };

                                if ($('input:radio[name="iType1"]:checked').val() == "0") { //pdf 일때 
     
                                    sendNonBlockingTextToJsonRequest("/ConService/ContentSaveToDownHtml", requestParam, service.saveContentCallback);

                                } else {
                                    service.contentFileSave();
                                }
                            }
                        }
                    }
                }, error: function (e) { }
            });
        }
    };

    this.saveContentCallback = function (result) {

        if (result != null) {
            //console.log(result);
            // HTML 문자열을 DOM 요소로 변환
            var parser = new DOMParser();
            var docElement = parser.parseFromString(result, "text/html");

            var filename = "download.pdf"; // 기본 파일 이름

            // jsPDF 인스턴스 생성 및 폰트 설정
            window.jsPDF = window.jspdf.jsPDF;
            var doc = new jsPDF("p", "mm", "a4");

            // 헤더를 추가하는 함수
            function addHeader(doc) {
                var headerImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAAAqCAIAAACGFKaiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF4WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTctMTAtMzFUMTA6NTYrMDk6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTAyLTI4VDE1OjUyOjU4KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTAyLTI4VDE1OjUyOjU4KzA5OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU3NDI2ZjMzLTQxMTctNTc0ZC1hNThiLTIwOTkyMDlkNDZlMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBNTUxQTNFOEJEREUxMUU3OTdBNUUzODVFMDY3NEMxOSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkE1NTFBM0U4QkRERTExRTc5N0E1RTM4NUUwNjc0QzE5IiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTU1MUEzRTVCRERFMTFFNzk3QTVFMzg1RTA2NzRDMTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTU1MUEzRTZCRERFMTFFNzk3QTVFMzg1RTA2NzRDMTkiLz4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NTc0MjZmMzMtNDExNy01NzRkLWE1OGItMjA5OTIwOWQ0NmUzIiBzdEV2dDp3aGVuPSIyMDE4LTAyLTI4VDE1OjUyOjU4KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pguo22UAABAESURBVHic7Zx5WFPHFsAPEBAIYVUIu6KAyL4aCNCC7IpLbVFr+2yrz5W6tsVdP62KVgErYEVt9dUVsaiAoCxhF0VcQkCQTVldsCYkQAKGvD8GbkNCMJGgfX35ffxx7rln5k7uPXfmzJm5yPF4PJAhQxLkP3QDZPzvIXMaGRIjcxoZEiNzGhkSI9JpSGRfvLqemgbRytr5TmnZvAWLYuMTAGDp8tU/RGwFgJ+PHDUwttDRNfGZFtLW9iw2PoFoOInBYABAdEwsXl2PSqWtXvv9WD1TouGkNet+AAAqlebo4qk9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";
                doc.addImage(headerImage, 'PNG', 15, 5, 40, 8);
                doc.setLineWidth(0.2);
                doc.line(15, 15, doc.internal.pageSize.getWidth() - 15, 15); // 수평선
            }

            // 원래의 addPage 메소드 저장
            var originalAddPage = doc.addPage;

            // addPage 메소드 오버라이드
            // 페이지 넘어갈때마다 (모든페이지에) 헤더가 붙어야 한다.
            doc.addPage = function () {
                // 원래의 addPage 메소드 호출
                originalAddPage.apply(this, arguments);

                // 헤더 추가
                addHeader(this);
            };

            // 첫 페이지에 헤더 추가
            addHeader(doc);

            var leftMargin = 15;
            var rightMargin = 15;
            var topMargin = 15;
            var bottomMargin = 15;

            var docWidth = doc.internal.pageSize.getWidth(); // 문서의 전체 너비
            var docHeight = doc.internal.pageSize.getHeight();

            var maxWidth = docWidth - leftMargin; // 최대 텍스트 너비 계산
            var maxHeight = docHeight - topMargin - bottomMargin;

            //폰트 설정
            doc.addFileToVFS('NanumGothic.ttf', NanumGothic);
            doc.addFont('NanumGothic.ttf', 'NanumGothic', 'normal');

            doc.addFileToVFS('NanumGothicBold.ttf', NanumGothicBold);
            doc.addFont('NanumGothicBold.ttf', 'NanumGothicBold', 'bold');

            doc.setFont("NanumGothic", "normal");
            doc.setFontSize(12); // 기본 폰트 크기
            function getImageInfo(docElement) {
                return new Promise((resolve, reject) => {
                    // DOMParser를 사용하여 HTML 문자열을 DOM 요소로 변환
                    let imageSizeArr = [];
                    const images = docElement.querySelectorAll("img");

                    let loadedImages = 0;
                    images.forEach((img) => {
                        const image = new Image();
                        const parentDiv = img.parentElement;
                        image.src = img.src;

                        image.onload = () => {
                            if (parentDiv.id === "base_info") {
                                // Set fixed dimensions and note the need for rounding
                                imageSizeArr.push({
                                    width: 70 * 0.264,  // Convert px to mm for jsPDF
                                    height: 70 * 0.264, // Convert px to mm for jsPDF
                                    src: image.src,

                                });
                            } else {
                                // Use existing src without modification
                                imageSizeArr.push({
                                    width: image.width * 0.264,  // Existing conversion logic
                                    height: image.height * 0.264,
                                    src: img.src,
                                });
                            }
                            loadedImages++;

                            if (imageSizeArr.length === images.length) {
                                resolve(imageSizeArr); // 모든 이미지가 로드되면 배열을 반환
                            }
                        };

                        image.onerror = () => {
                            resolve(imageSizeArr);
                        };
                    });
                    // 이미지가 없는 경우 즉시 resolve
                    if (images.length === 0) {
                        resolve(imageSizeArr);
                    }
                });
            }

            getImageInfo(docElement).then((imageSizeArr) => {
                // HTML에서 텍스트 노드 추출 및 PDF에 추가
                processHtmlToPdf(docElement.body, doc, leftMargin, topMargin, maxWidth, maxHeight, imageSizeArr);
                // PDF 저장
                doc.save(filename);
                //console.log("imageSize", imageSizeArr.src);
            });

            function processHtmlToPdf(element, doc, x, y, maxWidth, maxHeight, imageSizeArr) {
                var children = element.childNodes;
                var currentY = y;
                var currentX = x;
                var prevNodeWasText = false; // 이전 노드가 텍스트 노드였는지 추적하는 변수
                // text와 a 태그가 연속해서 나올 경우 공백 등을 처리해 주기 위한 변수

                for (var i = 0, len = children.length; i < len; i++) {
                    var node = children[i];
                    if (node.nodeType === 1) {
                        // 요소 노드 체크
                        switch (node.tagName) {
                            case "TABLE":
                                var tableData = parseHtmlTable(node);
                                doc.autoTable({
                                    head: tableData.columns,
                                    body: tableData.rows,
                                    startY: currentY,
                                    margin: {
                                        top: topMargin + 5,
                                        left: leftMargin,
                                        right: rightMargin,
                                    },
                                    theme: "plain",
                                    styles: {
                                        font: "NanumGothic",
                                        fontSize: 10,
                                        halign: "center",
                                        lineWidth: 0.1,
                                    },
                                    didParseCell: function (data) {
                                        if (data.cell && data.cell.raw && typeof data.cell.raw === 'object') {
                                            if ('content' in data.cell.raw) {
                                                data.cell.text = [data.cell.raw.content];
                                            }

                                            if (data.cell.raw.links && data.cell.raw.links.length > 0) {
                                                var imgHeight = 4;
                                                var padding = 5;
                                                var cellHeight = data.cell.height;
                                                var requiredHeight = imgHeight + padding * 2;
                                                data.cell.styles.minCellHeight = Math.max(cellHeight, requiredHeight);
                                            }
                                        }

                                        // Handle colspan
                                        if (data.cell.raw && data.cell.raw.colspan) {
                                            data.cell.colSpan = data.cell.raw.colspan;
                                        }

                                    },
                                    willDrawCell: function (data) {
                                        var cell = data.cell;
                                        var doc = data.doc;
                                        if (cell.section === 'body' && cell.raw && Array.isArray(cell.raw.links)) {
                                            var imgMargin = 3;
                                            var imgWidth = 4;
                                            var imgHeight = 4;

                                            var totalImagesWidth = cell.raw.links.length * (imgWidth + imgMargin) - imgMargin;

                                            var iconsPosX;
                                            var cellText = cell.text && cell.text.length ? cell.text[0] : '';

                                            iconsPosX = cell.x + (cell.width - totalImagesWidth) / 2;

                                            var iconsPosY = cell.y + (cell.height - imgHeight) / 2;

                                            if (cellText) {
                                                iconsPosY += 2;
                                            }

                                            // Add images if <i> tag exists within <a>
                                            cell.raw.links.forEach(function (link, index) {
                                                if (link.hasIcon) {
                                                    var href = link.href.startsWith('//') ? 'https:' + link.href : link.href;
                                                    var typeMatch = href.match(/type=(\d+)/);
                                                    var imgData;

                                                    var pdfIcon = "data:image/gif;base64,R0lGODlhEAAQAMQTAMTExPqimdPU1Pbp497i0fTYyq2trPNZqunw5PUkI+5hXcE1QtACAdIEbNzc3O/v7owEBdqdp/X19f///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAAQABAAAAV64CSOIgOR4tI0i6oeiRKwzdREeI4rOmMTBIfjISkmAsXIaSEUIoqSBCPpawgf2KICUEhIlJPFYJA1SrqxRKJR1soiVEYDKnkopvSIaQEV3AV0XxByUAoQBlBYD3o2gYmKjHyBik1gknRYQgAAlo6ZDptgDRCkpaamEyEAOw==";
                                                    var hwpIcon = "data:image/gif;base64,R0lGODlhEAAQAKIFAH94fwAAf7+4vwAAAP///////wAAAAAAACH5BAEAAAUALAAAAAAQABAAAANDWBWh/o7JBuEkIGs9GCHeJ37CsEhjWiqh4L4CUYap2k0B/MpmAdQ2xY+ki618wNFxmOQJm5xn8rcsvgDHwmDL7W4VCQA7";

                                                    if (typeMatch) {
                                                        var type = typeMatch[1];
                                                        if (type === '0') {
                                                            imgData = hwpIcon;
                                                        } else if (type === '1') {
                                                            imgData = pdfIcon;
                                                        }
                                                    }

                                                    if (!imgData) {
                                                        imgData = pdfIcon;
                                                    }

                                                    var posX = iconsPosX + index * (imgWidth + imgMargin);
                                                    var posY = iconsPosY;
                                                    doc.addImage(imgData, 'PNG', posX, posY, imgWidth, imgHeight);
                                                    doc.link(posX, posY, imgWidth, imgHeight, { url: href });
                                                } else {
                                                    //var linkX = cell.x + 2 + (index * 40); // Adjust X position for each link
                                                    //var linkY = cell.y + cell.height / 2 + 2; // Adjust Y position for alignment

                                                    //doc.setTextColor(0, 0, 255);
                                                    //doc.textWithLink(link.text, linkX, linkY, { url: link.href });
                                                    //doc.setTextColor(0, 0, 0); // Reset text color

                                                    //// Replace the linked text in the cell text to avoid duplication
                                                    //cell.text[0] = cell.text[0].replace(link.text, '');
                                                }
                                            });
                                        }
                                    },
                                    tableWidth: maxWidth - 15,
                                });
                                currentY = doc.autoTable.previous.finalY + 10;
                                break;
                            case "UL":
                                var tableData = parseUlToTableData(node);
                                var autoTableOptions = {
                                    startY: currentY,
                                    margin: { left: leftMargin, right: rightMargin },
                                    theme: "plain",
                                    styles: { font: "NanumGothic", fontSize: 10, cellPadding: 2, overflow: "linebreak", valign: "middle", halign: "left", lineWidth: 0.1 },
                                };
                                if (tableData.headers.length > 0) {
                                    autoTableOptions.head = [tableData.headers];
                                }
                                autoTableOptions.body = tableData.body;
                                doc.autoTable(autoTableOptions);
                                currentY = doc.autoTable.previous.finalY;
                                break;
                            case "U":
                                var result = handleTextNode(node, doc, currentX, currentY, maxWidth, maxHeight);
                                currentX = result.currentX;
                                currentY = result.currentY;
                                break;
                            case "H2":
                                // <h2> 태그 처리
                                var text = node.textContent || "";
                                text = text.replace(/\n/g, '');
                                doc.setFont("NanumGothicBold", "bold");
                                var result = handleTextNode(node, doc, currentX, currentY, maxWidth, maxHeight);
                                currentX = result.currentX;
                                currentY = result.currentY;
                                doc.setFont("NanumGothic", "normal");
                                filename = text.trim() + ".pdf"; // H2 태그의 텍스트로 filename 업데이트
                                break;
                            case "B":
                                doc.setFont("NanumGothicBold", "bold");
                                var childNodes = node.childNodes;
                                for (var j = 0; j < childNodes.length; j++) {
                                    var childNode = childNodes[j];
                                    if (childNode.nodeType === 3) {
                                        // 텍스트 노드
                                        var result = handleTextNode(childNode, doc, currentX, currentY, maxWidth, maxHeight);
                                        currentX = result.currentX;
                                        currentY = result.currentY;
                                    } else if (childNode.nodeType === 1 && childNode.tagName === "BR") {
                                        currentX = x; // 줄의 시작 위치로 이동
                                        currentY += 10; // 새 줄의 Y 좌표 설정
                                    }
                                }
                                doc.setFont("NanumGothic", "normal");

                                break;
                            case "STRONG":
                                doc.setFont("NanumGothicBold", "bold");
                                var childNodes = node.childNodes;
                                for (var j = 0; j < childNodes.length; j++) {
                                    var childNode = childNodes[j];
                                    if (childNode.nodeType === 3) {
                                        // 텍스트 노드
                                        var result = handleTextNode(childNode, doc, currentX, currentY, maxWidth, maxHeight);
                                        currentX = result.currentX;
                                        currentY = result.currentY;
                                    } else if (childNode.nodeType === 1 && childNode.tagName === "BR") {
                                        currentX = x; // 줄의 시작 위치로 이동
                                        currentY += 10; // 새 줄의 Y 좌표 설정
                                    }
                                }
                                doc.setFont("NanumGothic", "normal");

                                break;
                            case "DIV":
                                // DIV 태그에 대한 처리
                                if (node.classList.contains("miju_num")) {
                                    // "miju_num" 클래스를 가진 div 요소 처리
                                    currentY = processHtmlToPdf(node, doc, currentX, currentY, maxWidth, maxHeight, imageSizeArr);
                                    currentX += 5;
                                } else if (node.classList.contains("miju_box")) {
                                    // "miju_box" 클래스를 가진 div 요소는 건너뜁니다.
                                } else if (node.classList.contains("title_area")) {
                                    // title_area 클래스를 가진 div 요소 처리
                                    currentY += 10; // 위쪽 여백 추가
                                    currentY = processHtmlToPdf(node, doc, currentX, currentY, maxWidth, maxHeight, imageSizeArr);
                                    doc.setLineWidth(0.2); // 수평선 두께 설정
                                    doc.line(15, currentY + 5, maxWidth, currentY + 5); // 수평선 그리기
                                    currentY += 10; // 수평선 아래 여백 추가
                                } else if (node.classList.contains("dp1")) {
                                    // dp1 클래스 요소 처리
                                    currentY += 10; // 위쪽 여백 추가
                                    currentY = processHtmlToPdf(node, doc, currentX, currentY, maxWidth, maxHeight, imageSizeArr);
                                } else {
                                    // 일반 DIV 태그 처리
                                    if (currentX !== x) {
                                        // 현재 줄에 이미 내용이 있으면, 새로운 줄로 이동
                                        currentY += 10;
                                        currentX = x;
                                    }
                                    currentY = processHtmlToPdf(node, doc, currentX, currentY, maxWidth, maxHeight, imageSizeArr) + 10; // DIV 내용 처리 후 줄 바꿈
                                }
                                //if (currentY > maxHeight) {
                                //    doc.addPage();
                                //    currentY = 25;
                                //}
                                break;
                            case "SPAN":
                                var child = node.firstChild;
                                while (child) {
                                    currentY = processHtmlToPdf(child, doc, currentX, currentY, maxWidth, maxHeight, imageSizeArr);
                                    child = child.nextSibling;
                                }
                                var result = handleTextNode(node, doc, currentX, currentY, maxWidth, maxHeight);
                                currentX = result.currentX;
                                currentY = result.currentY;
                                if (currentY > maxHeight) {
                                    doc.addPage();
                                    currentY = 25;
                                }
                                break;
                            case "P":
                                // P 태그 처리: 새로운 줄로 이동
                                if (currentX !== x) {
                                    // 현재 줄에 이미 내용이 있으면, 새로운 줄로 이동
                                    currentY += 10;
                                    currentX = x;
                                }
                                var pName = node.getAttribute("name");
                                var boldPattern = /^P\d{2}$/;
                                var isBold = boldPattern.test(pName);

                                if (isBold) {
                                    var result = handleTextNode(node, doc, currentX, currentY, maxWidth, maxHeight);
                                    currentX = result.currentX;
                                    currentY = result.currentY;
                                    currentY += 10;
                                } else if (node.parentNode && node.parentNode.className === "lawyer_info") {
                                    var result = handleTextNode(node, doc, currentX, currentY, maxWidth, maxHeight);
                                    currentX = result.currentX;
                                    currentY = result.currentY;
                                    currentY += 10;

                                } else {
                                    // "P00" 클래스를 가지지 않은 P 태그에 일반 스타일 적용
                                    currentY = processHtmlToPdf(node, doc, currentX, currentY, maxWidth, maxHeight, imageSizeArr) + 10; // P 내용 처리 후 줄 바꿈                 
                                }
                                if (currentY > maxHeight) {
                                    doc.addPage();
                                    currentY = 25;
                                }
                                break;
                            case "A":
                                var aName = node.getAttribute("name");
                                if (aName === "case_miju") {
                                    currentY += 10; // 수평선 위 여백 추가
                                    doc.setLineWidth(0.2); // 수평선 두께 설정
                                    doc.line(15, currentY + 5, maxWidth, currentY + 5); // 수평선 그리기
                                    currentY += 10; // 수평선 아래 여백 추가
                                    currentY = processHtmlToPdf(node, doc, currentX, currentY, maxWidth, maxHeight, imageSizeArr);
                                }

                                // 이전 노드가 텍스트 노드였으면 공백 추가
                                if (prevNodeWasText) {
                                    doc.text(" ", currentX, currentY);
                                    currentX += (doc.getStringUnitWidth(" ") * doc.internal.getFontSize()) / doc.internal.scaleFactor;
                                    // maxWidth를 초과하는 경우 줄을 바꾸고 currentX를 초기화
                                    if (currentX > maxWidth - 20) {
                                        currentY += 10;
                                        currentX = 15; // 줄의 시작 위치로 초기화
                                    }
                                }
                                var result = handleTextNode(node, doc, currentX, currentY, maxWidth, maxHeight);
                                currentX = result.currentX;
                                currentY = result.currentY;
                                if (currentY > maxHeight) {
                                    doc.addPage();
                                    currentY = 25;
                                }

                                prevNodeWasText = false; // <a> 태그 처리 후 변수 초기화
                                break;
                            case "BR":
                                // <br /> 태그 처리: 줄 바꿈
                                currentX = x; // 줄의 시작 위치로 이동
                                currentY += 10; // 새 줄의 Y 좌표 설정
                                if (currentY > maxHeight) {
                                    doc.addPage();
                                    currentY = 25;
                                }
                                break;
                            case "IMG":
                                if (node.parentNode && node.parentNode.id === "base_info") {
                                    var selectedImgInfo = imageSizeArr.find((obj) => obj.src === node.src);
                                    var imgWidth = selectedImgInfo ? selectedImgInfo.width : 15;
                                    var imgHeight = selectedImgInfo ? selectedImgInfo.height : 15;

                                    var imgX = 15; // Left margin
                                    var imgY = currentY - 10;// Top margin

                                    doc.addImage(node.src, "JPEG", imgX, imgY, imgWidth, imgHeight);
                                    var textX = imgX + imgWidth + 5; // Space between image and text
                                    var textY = currentY;

                                    // Store the positions for the text next to the image
                                    globalThis.baseInfoTextPosition = { x: textX, y: textY, width: maxWidth - imgWidth - 25 };
                                } else {
                                    var selectedImgInfo = imageSizeArr.find((obj) => obj.src === node.src);
                                    var imgWidth = 120;
                                    var imgHeight = 60;
                                    if (selectedImgInfo) {
                                        imgWidth = selectedImgInfo.width;
                                        imgHeight = selectedImgInfo.height;
                                    }
                                    //console.log(selectedImgInfo);
                                    if (currentY + imgHeight > maxHeight) {
                                        doc.addPage();
                                        currentY = 25;
                                    }
                                    // 이미지를 중앙에 정렬하기 위한 x 좌표 계산
                                    var centerX = (maxWidth - imgWidth) / 2 + leftMargin;
                                    currentY += 10; // 이미지 위의 여백
                                    doc.addImage(node.src, "JPEG", centerX - 5, currentY, imgWidth, imgHeight);
                                    currentY += imgHeight + 10; // 이미지 아래의 여백 추가
                                    //if (currentY > maxHeight) {
                                    //    doc.addPage();
                                    //    currentY = 25;
                                    //}
                                }
                                break;
                            default:
                                currentY = processHtmlToPdf(node, doc, 15, currentY, maxWidth, maxHeight, imageSizeArr);

                                prevNodeWasText = false; // 다른 엘리먼트 처리 후 변수 초기화
                                break;
                        }
                    } else if (node.nodeType === 3) {
                        //Handle text nodes
                        var result = handleTextNode(node, doc, currentX, currentY, maxWidth, maxHeight);
                        currentX = result.currentX;
                        currentY = result.currentY;
                        prevNodeWasText = true; // 텍스트 노드 처리 후 변수 설정
                    }
                    // Move to a new line if necessary
                    if (currentX > maxWidth) {
                        doc.addPage();
                        currentY = topMargin; // 새 페이지 상단 마진 설정
                    }
                }
                return currentY;
            }

            function handleTextNode(node, doc, currentX, currentY, maxWidth, maxHeight) {
                var text, href;
                var isATag = node.nodeType === 1 && node.tagName === "A";
                var parentElement = node.parentNode;

                if (isATag) {
                    text = node.textContent || ""; // null 체크 추가
                    href = node.href; // <a> 태그의 href 속성
                } else {
                    text = node.nodeValue || ""; // null 체크 추가
                }

                if (node.nodeType === 1 && ["H2", "U", "B", "P", "A"].includes(node.tagName)) {
                    text = node.textContent || "";
                }

                if ((parentElement && parentElement.className === "lawyer_info") || node.tagName === "SPAN") {
                    text = node.textContent || "";
                }
                if (node.tagName === "SPAN" && node.className === "blind") {
                    node.textContent = "";
                    return { currentX, currentY }; // Early return to prevent further processing
                }
                if ((parentElement && parentElement.id === "lawyer_info_tit") || node.tagName === "B" || node.tagName === "BR") {

                    text = node.textContent || "";
                    text = text.replace(/\s+/g, '  '); // Replace all whitespace with double spaces

                    if ((parentElement && parentElement.id === "lawyer_info_tit") && globalThis.baseInfoTextPosition) {
                        // Use the stored position
                        currentX = globalThis.baseInfoTextPosition.x;
                        currentY = globalThis.baseInfoTextPosition.y;
                        maxWidth = globalThis.baseInfoTextPosition.width;
                    }
                    currentY += 5;
                    doc.text(text, currentX, currentY);
                    return { currentX, currentY };
                }

                // "c_tit_1" 클래스를 가진 부모 노드를 확인하여 가운데 정렬 및 폰트 크기 조정
                if ((parentElement && parentElement.className === "c_tit_1") || node.tagName === "P") {

                    if (node.parentNode && node.parentNode.className === "lawyer_info") {
                        currentY += 10;

                        if (currentY > maxHeight) {
                            doc.addPage();
                            currentY = 25;
                        }

                        doc.setFont("NanumGothicBold", "bold");
                        doc.text(text, currentX, currentY);
                        doc.setFont("NanumGothic", "normal");
                    } else {
                        text = text.trim().split("").join(" "); // 각 글자 사이에 공백 추가
                        currentY += 10;
                        var pageWidth = doc.internal.pageSize.getWidth();
                        var textWidth = doc.getStringUnitWidth(text) * 12 / doc.internal.scaleFactor;
                        currentX = (pageWidth - textWidth) / 2;

                        if (currentY > maxHeight) {
                            doc.addPage();
                            currentY = 25;
                        }
                        doc.setFont("NanumGothicBold", "bold");
                        doc.text(text, currentX, currentY);
                        doc.setFont("NanumGothic", "normal");
                    }
                    return { currentX: 15, currentY };
                }

                if (text) {
                    text = text.replace(/\t/g, '');
                    text = text.replace(/\n/g, '');
                    var words = text.split(" ");
                    var line = "";
                    for (var i = 0; i < words.length; i++) {
                        var word = words[i];
                        var testLine = line + word + " ";
                        var testLineWidth = (doc.getStringUnitWidth(testLine) * 12) / doc.internal.scaleFactor;

                        if (currentX + testLineWidth > maxWidth && i > 0) {
                            if (isATag) {
                                doc.setTextColor(0, 0, 255);
                                doc.textWithLink(line.trim(), currentX, currentY, { url: href });
                                doc.setTextColor(0, 0, 0); // 글씨 색상을 원래대로 되돌림
                            } else {
                                doc.text(line.trim(), currentX, currentY);
                            }
                            line = word + " ";
                            currentY += 10;
                            currentX = 15;
                            if (currentY > maxHeight) {
                                doc.addPage();
                                currentY = 25;
                            }
                        } else {
                            line += word + " ";
                        }
                    }

                    if (line.length > 0) {
                        if (isATag) {
                            doc.setTextColor(0, 0, 255);
                            doc.textWithLink(line.trim(), currentX, currentY, { url: href });
                            doc.setTextColor(0, 0, 0); // 글씨 색상을 원래대로 되돌림
                        } else {
                            doc.text(line.trim(), currentX, currentY);
                        }
                        currentX += (doc.getStringUnitWidth(line.trim()) * 12) / doc.internal.scaleFactor;
                        if (currentX > maxWidth) {
                            currentY += 10;
                            currentX = 15; // 줄의 시작 위치로 초기화
                        }
                    }
                }

                return { currentX, currentY };
            }
            function parseHtmlTable(tableNode) {
                var columns = [],
                    rows = [];

                var firstRowCells = tableNode.querySelectorAll("tbody tr:first-child th, tbody tr:first-child td");
                Array.from(firstRowCells).forEach(function (cell) {
                    columns.push(cell.textContent.trim());
                });

                var bodyRows = tableNode.querySelectorAll("tbody tr:not(:first-child)");
                bodyRows.forEach(function (row) {
                    var rowData = [];
                    Array.from(row.cells).forEach(function (cell) {
                        var colspan = parseInt(cell.getAttribute('colspan') || '1', 10);
                        var cellContent = cell.textContent.trim();
                        var cellLinks = [];
                        cell.querySelectorAll('a').forEach(function (link) {
                            var hasIcon = link.querySelector('i') !== null;
                            cellLinks.push({
                                text: link.textContent.trim() || 'Link',
                                href: link.getAttribute('href'),
                                hasIcon: hasIcon // Add the flag for the icon
                            });
                        });
                        for (var i = 0; i < colspan; i++) {
                            rowData.push({
                                content: cellContent,
                                links: cellLinks,
                                colspan: colspan
                            });
                        }
                    });
                    rows.push(rowData);
                });

                function normalizeWhitespace(text) {
                    return typeof text === 'string' ? text.replace(/\s+/g, " ").trim() : text;
                }

                return {
                    columns: [columns.map(normalizeWhitespace)],
                    rows: rows.map(function (row) {
                        return row.map(function (cell) {
                            return {
                                content: normalizeWhitespace(cell.content),
                                links: cell.links.map(function (link) {
                                    return {
                                        text: normalizeWhitespace(link.text),
                                        href: link.href,
                                        hasIcon: link.hasIcon // Include the icon flag
                                    };
                                }),
                              
                            };
                        });
                    }),
                };
            }
            function parseUlToTableData(ulNode) {
                var data = [];
                var listItems = ulNode.querySelectorAll("li");
                var headers = []; // Holds the headers
                var currentRow = [];

                // Check if the parent div has an id attribute
                var hasId = ulNode.parentNode.hasAttribute('id');

                listItems.forEach(function (li) {
                    var span = li.querySelector("span");
                    var header = span ? span.textContent.trim() : "";
                    var content = li.innerText.replace(header, "").trim(); // Use innerText to get the full content
                    var isFullRow = li.classList.contains("_ful");


                    if (!hasId) {
                        if (isFullRow) {
                            if (currentRow.length > 0) {
                                data.push(currentRow);
                                currentRow = [];
                            }
                            data.push([{ content: header + ' ' + content, colSpan: 2 }]);
                        } else {
                            currentRow.push(header + ' ' + content);
                            if (currentRow.length === 2) { // Ensure row is complete before pushing
                                data.push(currentRow);
                                currentRow = [];
                            }
                        }
                    } else {
                        // Rest of the logic for hasId true
                        if (span) {
                            var header = span.textContent.trim();
                            var content = li.textContent.replace(header, "").trim(); // Get content after span text
                            var fullText = header + ' ' + content;
                            if (currentRow.length > 0) {
                                data.push(currentRow);
                                currentRow = [];
                            }
                            headers.push(fullText);
                        } else {
                            var content = li.textContent.trim(); // Use full textContent of li
                            currentRow.push(content);
                            if (currentRow.length === headers.length) {
                                data.push(currentRow);
                                currentRow = [];
                            }
                        }
                    }
                });

                if (currentRow.length > 0) {
                    data.push(currentRow);
                }

                return { headers: headers, body: data };
            }
        }
    };

    this.chkFolderIdxs = function (classNM) {
        var sFolderIdx = "";

        // 체크된 폴더 인쇄 시 바인딩            
        if ($("input:checkbox[name='" + classNM + "']:checked").length > 0) {
            var chkIds = "";
            $("input:checkbox[name='" + classNM + "']").each(function () {
                if ($(this).is(":checked")) {
                    chkIds += $(this).val() + ",";
                }
            });
            sFolderIdx = chkIds.substring(0, chkIds.length - 1);
        }
        return sFolderIdx;
    }

    this.openPrint = function (sId) {
        var pValue = $('input:radio[name=iType_p]:checked').val();
        var isView = true;
        if (pValue != null) {
            if (pValue == '1') {
                if ($("#iSelType_p option").index($("#iSelType_p option:selected")) > $("#iSelType1_p option").index($("#iSelType1_p option:selected"))) {
                    isView = false;
                    alert("조번호 범위가 맞지 않습니다.");
                }
            }
        }

        if (sId.substring(0, 4) == "J001") {
            var coverYN = "N";
            var contType = "11";

            if ($("#chkOnjuCover").is(":checked")) {
                coverYN = "Y";
            }
            if ($(".rdoContType").eq(1).is(":checked")) {
                contType = "01";
            }
            sId = sId + "^" + coverYN + "^" + contType;
        }

        // 온주 대량인쇄 알림 2022.01 
        if (sId.substring(0, 4) == "J001") {
            var today = new Date();
            if (localStorage.getItem("chkNowDate") == null) {
                localStorage.setItem("chkNowDate", fnGetDate(today));
            }

            var ipMemberChk = (localStorage.getItem("IpMemberY") == null ? "" : localStorage.getItem("IpMemberY"));
            var randomIPCode = localStorage.getItem("RandomIPCode") == null ? "" : localStorage.getItem("RandomIPCode");

            onjuLawTotalCntList();
            //ip회원의 경우 랜덤 코드 생성 후 onjuPrintDateList() 실행
            if (ipMemberChk == "IPMember" && randomIPCode == "") {
                getRandomIPUserCode();
            }
            else {
                onjuPrintDateList();
            }

            if (localStorage.getItem("chkNowDate") != fnGetDate(today)) {
                setTimeout(function () {
                    localStorage.removeItem("chkNowDate");
                    localStorage.setItem("chkNowDate", fnGetDate(today));
                }, 800);
            }
        }

        if ($("#iTypeP1").length > 0) {
            var chk_p = 0;
            $("input:checkbox[name='iTypeP']").each(function () {
                if ($(this).is(":checked")) {
                    chk_p ++;
                }
            });
            if (chk_p <= 1) {
                isView = false;
                alert("인쇄 범위를 최소 두 개 이상 선택해주세요.");
            }
        }


        if (isView) {
            var sFolderIdx = service.chkFolderIdxs("chkfolder5");
            var Params = "";

            Params += "?sId=" + sId;
            Params += "&sFolderIdxs=" + sFolderIdx;
            Params += "&pType=VIEWMY05";

            if (sId.substring(0, 4) == "J001") {
                setTimeout(function () {
                    showOriginalView("/ConService/ContentPrintView" + Params);
                }, 500);
            }
            else {
                showOriginalView("/ConService/ContentPrintView" + Params);
            }
        }
    };

    this.listSave = function () {
        var isChk = false;
        if (uCode == "" || uCode == null) {
            if (LoginLevelChk) {
                $("input[name=chk]:checkbox").each(function () {
                    if (this.checked) { isChk = true; }
                });

                if (!isChk) {
                    alert("다운로드 대상 리스트를 선택하지 않았습니다.");
                } else {
                    if (confirm("선택한 리스트를 다운로드 하시겠습니까?")) {
                        var url = "/ConService/ContentSaveView";
                        var frm = document.createElement("form");
                        frm.method = "post";
                        var input = null;
                        input = document.createElement("input");
                        $(input).attr("type", "hidden");
                        $(input).attr("name", "downTarget"); $(input).attr("value", "2");
                        frm.appendChild(input);
                        input = document.createElement("input");
                        $(input).attr("type", "hidden");
                        $(input).attr("name", "sWord"); $(input).attr("value", $('#searchForm>p').text());
                        frm.appendChild(input);
                        input = document.createElement("input");
                        $(input).attr("type", "hidden");
                        $(input).attr("name", "sCount"); $(input).attr("value", $('.s_num_area').text());
                        frm.appendChild(input);
                        input = document.createElement("input");
                        $(input).attr("type", "hidden");
                        $(input).attr("name", "sCode"); $(input).attr("value", $('#sCode').val());
                        frm.appendChild(input);

                        $("input[name=chk]:checkbox").each(function (index) {
                            if (this.checked) {
                                var _cont = "";
                                $('.co_searchContent>div.co_searchResults_summary .law_history_list').eq(index).children().each(function () {
                                    _cont += encodeURIComponent($(this).text() + "<br>");
                                });

                                var lTit = this.value + "^" + $('.co_searchContent>h3').eq(index).text() + "^"
                                    + ((storage.getStatusType() == 0) ? "" : _cont);
                                input = document.createElement("input");
                                $(input).attr("type", "hidden");
                                $(input).attr("name", "sResultData"); $(input).attr("value", lTit);
                                frm.appendChild(input);
                            }
                        });

                        document.body.appendChild(frm);
                        frm.action = url;
                        frm.submit();
                        document.body.removeChild(frm);
                    }
                }
            }
            else {
                alert("로그인 후 사용가능합니다..");
            }
        }
        else {
            $("input[name=chk]:checkbox").each(function () {
                if (this.checked) { isChk = true; }
            });

            if (!isChk) {
                alert("다운로드 대상 리스트를 선택하지 않았습니다.");
            } else {
                if (confirm("선택한 리스트를 다운로드 하시겠습니까?")) {
                    var url = "/ConService/ContentSaveView";
                    var frm = document.createElement("form");
                    frm.method = "post";
                    var input = null;
                    input = document.createElement("input");
                    $(input).attr("type", "hidden");
                    $(input).attr("name", "downTarget"); $(input).attr("value", "2");
                    frm.appendChild(input);
                    input = document.createElement("input");
                    $(input).attr("type", "hidden");
                    $(input).attr("name", "sWord"); $(input).attr("value", $('#searchForm>p').text());
                    frm.appendChild(input);
                    input = document.createElement("input");
                    $(input).attr("type", "hidden");
                    $(input).attr("name", "sCount"); $(input).attr("value", $('.s_num_area').text());
                    frm.appendChild(input);
                    input = document.createElement("input");
                    $(input).attr("type", "hidden");
                    $(input).attr("name", "sCode"); $(input).attr("value", $('#sCode').val());
                    frm.appendChild(input);

                    $("input[name=chk]:checkbox").each(function (index) {
                        if (this.checked) {
                            var _cont = "";
                            $('.co_searchContent>div.co_searchResults_summary .law_history_list').eq(index).children().each(function () {
                                _cont += encodeURIComponent($(this).text() + "<br>");
                            });

                            var lTit = this.value + "^" + $('.co_searchContent>h3').eq(index).text() + "^"
                                + ((storage.getStatusType() == 0) ? "" : _cont);
                            input = document.createElement("input");
                            $(input).attr("type", "hidden");
                            $(input).attr("name", "sResultData"); $(input).attr("value", lTit);
                            frm.appendChild(input);
                        }
                    });

                    document.body.appendChild(frm);
                    frm.action = url;
                    frm.submit();
                    document.body.removeChild(frm);
                }
            }
        }
    };

    this.saveByExcel = function (s) {
        $("#exiframe").show();
        $("#exiframe").attr("src", "/ConService/ContentExcelView");
    };

    // 인쇄하기 시 컨탠츠가 담긴 나의 폴더 가져오기
    this.getMyFolderHtml = function (sId, _type) {
        var data = { "sId": sId, "pType": _type };
        sendNonBlockingAjaxJsonRequest("/ConService/ContentPrintInMyFolderHtml", data, service.getMyFolderHtmlCallBack);
    };

    this.getMyFolderHtmlCallBack = function (result) {
        if (result != null) {
            if (result[0] == "MY05") {
                $("#contentInFolderHtml_Print").empty();
                $("#contentInFolderHtml_Print").html(result[1]);
            }
            else if (result[0] == "MY06") {
                $("#contentInFolderHtml_File").empty();
                $("#contentInFolderHtml_File").html(result[1]);
            }
        }
    };


    this.checkMyDeskForList = function () {
        //console.log(storage.getMyDeskChk());
        if (storage.getMyDeskChk() == 'Y') {
            var frm = document.createElement("form");
            frm.method = "post";
            var input = null;
            $(".function_btn").each(function (index) {
                if ($(this).attr("id") != undefined) {
                    input = document.createElement("input");
                    $(input).attr("type", "hidden");
                    $(input).attr("name", "sResultData"); $(input).attr("value", $(this).attr('id').replace(/func_/g, ''));
                    frm.appendChild(input);
                }
            });
            document.body.appendChild(frm);
            var data = $(frm).serialize();
            getMyDeskCheckList("/ConService/ContentMyDeskRefChkData", data);
            document.body.removeChild(frm);
        }
    };


    this.setChkRefIcon = function (jid, r) {
        var gi = service.getIconList(jid, r);
        if (gi != "") {
            gi += $('#func_' + jid).html();
            $('#func_' + jid).html(gi);
        }
    };

    this.setDelIconList = function () {
        $('.function_btn>.icon-alert').remove();
        $('.function_btn>.icon-folder').remove();
        $('.function_btn>.icon-memo').remove();
        $('.function_btn>.icon-glass').remove();
    };

    this.getIconList = function (jid, r) {
        var ilist = "";
        if (r[0] == 1) {
            ilist += " <i class=\"icon-alert\" data-icon=\"&#xe91b;\"  title=\"알림\"></i>";
        }
        if (r[1] == 1) {
            ilist += " <i class=\"icon-folder\" data-icon=\"&#xe930;\" title=\"폴더\"></i>";
        }
        if (r[2] == 1) {
            ilist += " <i class=\"icon-memo\" data-icon=\"&#xe924;\"  title=\"메모\"></i>";
        }
        if (r[3] == 1) {
            ilist += " <i class=\"icon-glass\" data-icon=\"&#xe913;\" title=\"최근조회자료\"></i>";
        }

        return ilist;
    };

    this.getChecSavekListVal = function () {
        selectJoList = "";
        var sValue = $('input:radio[name=iType_s]:checked').val();
        var isView = true;
        if (sValue != null) {
            if (sValue == '1') {
                if ($("#iSelType_s option").index($("#iSelType_s option:selected")) > $("#iSelType1_s option").index($("#iSelType1_s option:selected"))) {
                    isView = false;
                    alert("조번호 범위가 맞지 않습니다.");
                } else {

                }
            }
        }
        return isView;
    };


    this.setFilteringSave = function () {
        var pValue = $('input:radio[name=iType_s]:checked').val();
        if (pValue != null) {
            if (pValue == '0') { selectJoList = ""; }
            else if (pValue == '1') {
                var isChkeck = true;
                var sjo = $("#iSelType_s option:selected").val();
                var ejo = $("#iSelType1_s option:selected").val();
                if (sjo != '00' || ejo != '00') {
                    for (n = $("#iSelType_s option").index($("#iSelType_s option:selected")); n < $("#iSelType_s option").length; n++) {
                        selectJoList += $("#iSelType_s option:eq(" + n.toString() + ")").val() + ",";
                        if ($("#iSelType_s option:eq(" + n.toString() + ")").val() == ejo) {
                            break;
                        }
                    }
                    if (selectJoList != "") {
                        selectJoList = selectJoList.substring(0, selectJoList.length - 1);
                    }
                }
            } else if (pValue == '2') {
                var tjo = $("#txtSeljo_s").val();
                if (tjo != '') {
                    selectJoList = tjo;
                }
            }
        }
        if ($('#iTypeS1_a').length > 0) {
            selectJoList = "";
            var c1 = '0', c2 = '0', c3 = '0';
            if (!$("#iTypeS1_a").prop("checked")) {
                $("input[name=iTypeS1]:checkbox").each(function (index) {
                    if (this.checked) {
                        if (index == 0) {
                            c1 = '1';
                        } else if (index == 1) {
                            c2 = '1';
                        } else if (index == 2) {
                            c3 = '1';
                        }
                    }
                });
                selectJoList = c1 + "," + c2 + "," + c3;
            }
        }

    };


    this.clickByhwp = function (s) {
        $("#hwp_info").hide();
        if (s == 0) { $("#chkTmp").show(); $("#chkLink").hide(); }
        else { $("#chkTmp").hide(); $("#chkLink").show(); }
        //if (s == 0) { $("#hwp_info").show(); } else { $("#hwp_info").hide(); }
    };

    this.fileContentSave = function () {
        var _printType = $("#hdnPrintType").val();
        var _fileType = $("input[name='iType1']:checked").val();
        var _fileRoot = "";
        if (_printType == "1") {
            if (_fileType == "0") { _fileRoot = "사건별 부호문자.pdf"; }
            else if (_fileType == "1") { _fileRoot = "사건별 부호문자.hwp"; }
            else if (_fileType == "2") { _fileRoot = "사건별 부호문자.docx"; }
        }
        else if (_printType == "2") {
            if (_fileType == "0") { _fileRoot = "예규본문.pdf"; }
            else if (_fileType == "1") { _fileRoot = "예규본문.hwp"; }
            else if (_fileType == "2") { _fileRoot = "예규본문.docx"; }
        }

        if (_fileRoot != "") {
            view.viewFileDown('casesignhelp', _fileRoot, '');
        }
        else {
            alert("파일다운로드에 실패했습니다.");
        }
    };

    this.saveRangeChange = function (_v) {
        $("#hdnPrintType").val(_v);
    }
};

var onjuPLawList = {}
var onjuPDateList = {}
// 온주 대량인쇄 알림 2022.01  - 온주 주석서별 전체조문 수
function onjuLawTotalCntList() {
    var today = new Date();
    if (localStorage.getItem("chkNowDate") != fnGetDate(today)) {
        // 다음날로 넘어갔을 때 전체조문수 리셋
        localStorage.removeItem("onjuPLawList");

        sendNonBlockingAjaxJsonRequest("/ConService/GetOnjuLawToalCntList", "", function (result) {
            if (result != null) {
                if (result.length > 0) {
                    // 전체조문수
                    for (var i = 0; i < result[0].length; i++) {
                        onjuPLawList[result[0][i]["LAWNB_LAWID"]] = { "totalCnt": parseInt(result[0][i]["LawTotalCnt"]), "pCnt": 0 };
                    }
                    localStorage.setItem("onjuPLawList", JSON.stringify(onjuPLawList));
                }
            }
            else {
                console.log("Get OnjuLawTotalCountList Fail - Date");
            }
        });
    }
    else {
        // 당일인데 값이 없는 경우(초기값)
        // 다른컴퓨터로 이동 or 초기값
        if (localStorage.getItem("onjuPLawList") == null) {
            sendNonBlockingAjaxJsonRequest("/ConService/GetOnjuLawToalCntList", "", function (result) {
                if (result != null) {
                    if (result.length > 0) {
                        // 전체조문수
                        for (var i = 0; i < result[0].length; i++) {

                            onjuPLawList[result[0][i]["LAWNB_LAWID"]] = { "totalCnt": parseInt(result[0][i]["LawTotalCnt"]), "pCnt": 0 };
                        }
                        localStorage.setItem("onjuPLawList", JSON.stringify(onjuPLawList));
                    }
                }
                else {
                    console.log("Get OnjuLawTotalCountList Fail - Init");
                }
            });
        }
    }
}

// 온주 대량인쇄 알림 2022.01  - 온주 주석서별 첫 인쇄일자, flag
function onjuPrintDateList() {
    var ipMemberChk = (localStorage.getItem("IpMemberY") == null ? "" : localStorage.getItem("IpMemberY"));
    var today = new Date();
    var lawnbLawId = $("#lbLawnbLawId").val();

    if (localStorage.getItem("chkNowDate") != fnGetDate(today)) {
        // 다음날로 넘어갔을 때 인쇄일자데이터 리셋
        localStorage.removeItem("onjuPDateList");
        // 인쇄일자,flag
        onjuPDateList[lawnbLawId] = {
            "fStepFlag": "Y"
            , "fStopDate": ""
            , "sStepFlag": "Y"
            , "sStopDate": ""
            , "pStartDate": ""
            , "pEndDate": ""
            , "allUnlockFlag": "N"
        };
        localStorage.setItem("onjuPDateList", JSON.stringify(onjuPDateList));
    }
    else {
        // 당일인데 값이 없는 경우(초기값)
        // 다른컴퓨터로 이동 or 초기값
        // 다른컴퓨터이동(id회원) 경우 null 일때 db값 그대로 저장
        // ip회원 경우 null 일때 flag Y, date ''
        /*
        var boolPAdd = false;
        var pDateArr = localStorage.getItem("onjuPDateList") == null ? null : JSON.parse(localStorage.getItem("onjuPDateList"));
        if (localStorage.getItem("onjuPDateList") == null) {
            boolPAdd = true;
        }
        else if (typeof (pDateArr[lawnbLawId]) == 'undefined'){
            boolPAdd = true;            
        }

        if (boolPAdd)
        {*/
        var pDateArr = localStorage.getItem("onjuPDateList") == null ? null : JSON.parse(localStorage.getItem("onjuPDateList"));
        var params = { "lawnbLawId": lawnbLawId, "randomIPCode": (localStorage.getItem("RandomIPCode") == null ? "" : localStorage.getItem("RandomIPCode")) };
        sendNonBlockingAjaxJsonRequest("/ConService/GetOnjuPrintDate", params, function (result) {
            if (result != null) {
                if (result.length > 0) {
                    // 인쇄일자,flag
                    for (var i = 0; i < result[0].length; i++) {
                        if (ipMemberChk == "IPMember") {
                            if (pDateArr != null) {
                                var fStopDate = "", sStopDate = "", pStartDate = "", pEndDate = "";
                                if (typeof (pDateArr[lawnbLawId]) != 'undefined') {
                                    fStopDate = (pDateArr[lawnbLawId].fStopDate != "" && typeof (pDateArr[lawnbLawId].fStopDate) != 'undefined') ? pDateArr[lawnbLawId].fStopDate : "";
                                    sStopDate = (pDateArr[lawnbLawId].sStopDate != "" && typeof (pDateArr[lawnbLawId].sStopDate) != 'undefined') ? pDateArr[lawnbLawId].sStopDate : "";
                                    pStartDate = (pDateArr[lawnbLawId].pStartDate != "" && typeof (pDateArr[lawnbLawId].pStartDate) != 'undefined') ? pDateArr[lawnbLawId].pStartDate : "";
                                    pEndDate = (pDateArr[lawnbLawId].pEndDate != "" && typeof (pDateArr[lawnbLawId].pEndDate) != 'undefined') ? pDateArr[lawnbLawId].pEndDate : "";
                                }

                                // 데이터 존재
                                pDateArr[result[0][i]["LawnbLawId"]] = {
                                    "fStepFlag": result[0][i]["FirstStepFlag"]
                                    , "fStopDate": fStopDate
                                    , "sStepFlag": result[0][i]["SecondStepFlag"]
                                    , "sStopDate": sStopDate
                                    , "pStartDate": pStartDate
                                    , "pEndDate": pEndDate
                                    , "allUnlockFlag": result[0][i]["AllUnlockFlag"]
                                };
                            }
                            else {
                                // 초기빈값
                                onjuPDateList[result[0][i]["LawnbLawId"]] = {
                                    "fStepFlag": result[0][i]["FirstStepFlag"]
                                    , "fStopDate": ""
                                    , "sStepFlag": result[0][i]["SecondStepFlag"]
                                    , "sStopDate": ""
                                    , "pStartDate": ""
                                    , "pEndDate": ""
                                    , "allUnlockFlag": result[0][i]["AllUnlockFlag"]
                                };
                            }
                        }
                        else {
                            if (pDateArr != null) {
                                pDateArr[result[0][i]["LawnbLawId"]] = {
                                    "fStepFlag": result[0][i]["FirstStepFlag"]
                                    , "fStopDate": result[0][i]["FirstStopDate"]
                                    , "sStepFlag": result[0][i]["SecondStepFlag"]
                                    , "sStopDate": result[0][i]["SecondStopDate"]
                                    , "pStartDate": result[0][i]["PrintStartDate"]
                                    , "pEndDate": result[0][i]["PrintEndDate"]
                                    , "allUnlockFlag": result[0][i]["AllUnlockFlag"]
                                };
                            }
                            else {
                                onjuPDateList[result[0][i]["LawnbLawId"]] = {
                                    "fStepFlag": result[0][i]["FirstStepFlag"]
                                    , "fStopDate": result[0][i]["FirstStopDate"]
                                    , "sStepFlag": result[0][i]["SecondStepFlag"]
                                    , "sStopDate": result[0][i]["SecondStopDate"]
                                    , "pStartDate": result[0][i]["PrintStartDate"]
                                    , "pEndDate": result[0][i]["PrintEndDate"]
                                    , "allUnlockFlag": result[0][i]["AllUnlockFlag"]
                                };
                            }
                        }
                    }
                    if (pDateArr != null) {
                        localStorage.setItem("onjuPDateList", JSON.stringify(pDateArr));
                    }
                    else {
                        localStorage.setItem("onjuPDateList", JSON.stringify(onjuPDateList));
                    }
                }
            }
            else {
                console.log("Get OnjuPrintDate Fail - Init");
            }
        });
        //}
    }
}

//사용자, 법령 별 제한 정보 저장, IP회원 랜덤코드 생성
function getRandomIPUserCode() {
    var ipMemberChk = (localStorage.getItem("IpMemberY") == null ? "" : localStorage.getItem("IpMemberY"));
    sendNonBlockingAjaxRequest("/ConService/GetRandomIPUserCode", "", function (result) {
        if (result != null) {
            if (ipMemberChk == "IPMember" && result != "") {
                localStorage.setItem("RandomIPCode", result);

                onjuPrintDateList();
            }
        }
        else {
            console.log("Set RandomIPCode Fail");
        }
    });
}