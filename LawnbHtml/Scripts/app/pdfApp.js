////pdfOpen = function (d) {
////    var options = {
////        pdfOpenParams: {
////            navpanes: 0,
////            toolbar: 0,
////            statusbar: 0,
////            view: "FitV",
////            pagemode: "none",
////            page: 1
////        },
////        forcePDFJS: true,
////        PDFJS_URL: "/App/PdfView/web/viewer.html"
////    };
////    var vm = (Math.floor(Math.random() * 100) + 1).toString();
////    var lbPDF = PDFObject.embed("/info/DocView?v=" + vm, "#"+d, options);
////};

pdfOpen = function (d) {
    var options = {
        pdfOpenParams: {
            navpanes: 0,
            toolbar: 0,
            statusbar: 0,
            view: "FitV",
            pagemode: "none",
            page: 1
        },
        forcePDFJS: true,
        PDFJS_URL: "/App/PdfView_3_11_legacy/web/viewer.html"
    };
    var vm = (Math.floor(Math.random() * 100) + 1).toString();
    var lbPDF = PDFObject.embed("/info/DocView?v=" + vm, "#" + d, options);
};

//pdfAjaxPreOpen = function (d) {
//    var options = {
//        pdfOpenParams: {
//            navpanes: 0,
//            toolbar: 0,
//            statusbar: 0,
//            view: "FitV",
//            pagemode: "none",
//            page: 1
//        },
//        forcePDFJS: true,
//        PDFJS_URL: "/App/PdfView/web/viewer.html"
//    };
//    var lbPDF = PDFObject.embed("/AjaxInfo/DocView", "#" + d, options);    
//};

pdfAjaxOpen = function (d, s, data) {
    var options = {
        pdfOpenParams: {
            navpanes: 0,
            toolbar: 0,
            statusbar: 0,
            view: "FitV",
            pagemode: "none",
            page: 1
        },
        forcePDFJS: true,
        PDFJS_URL: "/App/PdfView_3_11_legacy/web/viewer.html"
    };

    var lbPDF = PDFObject.embed("/AjaxInfo/ContentPDFView?pdfFile=" + data + "&sCode=" + s, "#" + d, options);
};

//pdfAjaxOpen = function (d, s, data) {
//    var options = {
//        pdfOpenParams: {
//            navpanes: 0,
//            toolbar: 0,
//            statusbar: 0,
//            view: "FitV",
//            pagemode: "none",
//            page: 1
//        },
//        forcePDFJS: true,
//        PDFJS_URL: "/App/PdfView/web/viewer.html"
//    };

//    var lbPDF = PDFObject.embed("/AjaxInfo/ContentPDFView?pdfFile=" + data + "&sCode=" + s, "#" + d, options);
//};


pdfCaseOpen = function (d) {
    var options = {
        pdfOpenParams: {
            navpanes: 0,
            toolbar: 0,
            statusbar: 0,
            view: "FitV",
            pagemode: "none",
            page: 1
        },
        forcePDFJS: true,
        PDFJS_URL: "/App/PdfView_3_11_legacy/web/caseviewer.html"
    };
    var vm = (Math.floor(Math.random() * 100) + 1).toString();
    var lbPDF = PDFObject.embed("/info/DocView?v=" + vm, "#" + d, options);
};


pdfAjaxCaseOpen = function (d) {
    var options = {
        pdfOpenParams: {
            navpanes: 0,
            toolbar: 0,
            statusbar: 0,
            view: "FitV",
            pagemode: "none",
            page: 1
        },
        forcePDFJS: true,
        PDFJS_URL: "/App/PdfView_3_11_legacy/web/caseajaxviewer.html"
    };
    var vm = (Math.floor(Math.random() * 100) + 1).toString();
    var lbPDF = PDFObject.embed("/info/DocView?v=" + vm, "#" + d, options);
};


PrintPdf = function () {

    var vm = (Math.floor(Math.random() * 100) + 1).toString();
    var agent = navigator.userAgent.toLowerCase();

    if ((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
        var url = "/info/DocView?v=" + vm;
        var style = 'position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:0%; height:0%; border:none; margin:0; padding:0; overflow:hidden;';
        var pdf = '<embed  id="pdf_pr" src="' + url + '" name="pdf_pr" style="' + style + '" type="application/pdf"></embed>';
        $(document.body).append(pdf);
        var pdfObject = document.getElementById('pdf_pr');
        setTimeout(function () { pdfObject.print(); }, 1000);
    } else {
        var iframe = document.createElement('iframe');
        iframe.style.display = "none";
       // iframe.src = "/info/DocView?v=" + vm;
        iframe.src = "/ConService/ContentCasePrintView?v=" + vm;
        document.body.appendChild(iframe);
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
    }

};


pdfCaseSave = function (fn) {
    //var vm = (Math.floor(Math.random() * 100) + 1).toString();
    //var agent = navigator.userAgent.toLowerCase();
    //if ((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
    //    $.post("/info/DocView?v=" + vm,
    //        { param: "value" },   // 요청할 변수들
    //        function (data) {                      //성공콜백
    //            var blobObject = new Blob([data], { type: ' type: "application/pdf"' });
    //            window.navigator.msSaveOrOpenBlob(blobObject, fn);
    //        }).fail(function () {
    //            console.log('post error')
    //        });		
    //} else {
    //    $.ajax({
    //        url: "/info/DocView?v=" + vm,
    //        method: 'GET',
    //        xhrFields: {
    //            responseType: 'blob'
    //        },
    //        success: function (data) {
    //            var a = document.createElement('a');
    //            var url = window.URL.createObjectURL(data);
    //            a.href = url;
    //            a.download = fn;
    //            document.body.append(a);
    //            a.click();
    //            a.remove();
    //            window.URL.revokeObjectURL(url);
    //        }
    //    });
    //}

    var url = "/ConService/ContentCaseSaveView";
    var frm = document.createElement("form");

    frm.method = "post";
    document.body.appendChild(frm);

    frm.action = url;
    frm.submit();

    document.body.removeChild(frm);
   
};