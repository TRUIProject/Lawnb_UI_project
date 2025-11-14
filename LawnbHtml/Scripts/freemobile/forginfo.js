var forginfo = new function () {

    this.fRedirectPage = function (orgTypeCode, pageType, areaCode, areaName) {
        var params = "?orgTypeCode=" + orgTypeCode;
        params += "&pageType=" + pageType;
        params += "&areaCode=" + areaCode;
        params += "&areaName=" + areaName;

        location.href = "/Info/ContentFreeOrgList" + params;
    };

    this.fViewPopup = function (orgTypeCode, orgId, areaCode) {
        var params = "?orgTypeCode=" + orgTypeCode;
        params += "&orgId=" + orgId;
        params += "&areaCode=" + areaCode; 

        var _href = "/AjaxInfo/ContentFreeOrgInfo" + params;

        if (checkMobile()) {
            _href = _href.indexOf("?") >= 0 ? _href + "&popupYn=Y" : _href + "?popupYn=Y";
        }

        /*
        if (checkMobile()) {
            href = href.indexOf("?") >= 0 ? href + "&popupYn=Y" : href + "?popupYn=Y";
        }
        var maxThisX = screen.width * 0.85;
        var maxThisY = screen.height * 0.85;
        window.open(href, setLinkTargetName(href), "width=" + maxThisX + ",height=" + maxThisY + ",scrollbars=no,toolbar=no, resizable=yes, menubar=no, left=70, top=15");
        */        

        //var maxThisX = screen.width * 0.85;
        //var maxThisY = screen.height * 0.85;
        //window.open("/AjaxInfo/ContentFreeOrgInfo" + params, "", "width=" + maxThisX + ",height=" + maxThisY + ",scrollbars=no,toolbar=no, resizable=yes, menubar=no, left=70, top=15");

        location.href = _href;
    };
};