var page = new function () {

    this.init = function (_tabletYn) {
        //var tabletYn = "N";
        if (navigator.userAgent.match(/iPad/)) {
            _tabletYn = "Y";
        }
        //alert(_tabletYn);
        $('input[name="tabletYn"]').val($.trim(_tabletYn));
        page.storageInitialize(_tabletYn);
        $('#f').submit();
    };

    this.storageInitialize = function (tabletYn) {
        var currentStatus = localStorage.getItem("currentStatus");
        var deviceKey = localStorage.getItem("deviceKey");
        var groupName = localStorage.getItem("groupName");
        var nickname = localStorage.getItem("nickname");
        var reservationKey = localStorage.getItem("reservationKey");
        var memberType = localStorage.getItem("memberType");
        var phaseTwoFlag = localStorage.getItem("phaseTwoFirstJoinYn");
        var phaseThreeFlag = localStorage.getItem("phaseThreeFirstJoinYn");
        var nickCode = localStorage.getItem("nickCode");
        var autoLogin = localStorage.getItem("autoLogin");

        localStorage.clear();

        localStorage.setItem("tabletYn", tabletYn);
        if (currentStatus != null)
            localStorage.setItem("currentStatus", currentStatus);
        if (deviceKey != null)
            localStorage.setItem("deviceKey", deviceKey);
        if (groupName != null)
            localStorage.setItem("groupName", groupName);
        if (nickname != null)
            localStorage.setItem("nickname", nickname);
        if (reservationKey != null)
            localStorage.setItem("reservationKey", reservationKey);
        if (memberType != null)
            localStorage.setItem("memberType", memberType);
        if (phaseTwoFlag != null)
            localStorage.setItem("phaseTwoFirstJoinYn", phaseTwoFlag);
        if (phaseThreeFlag != null)
            localStorage.setItem("phaseThreeFirstJoinYn", phaseThreeFlag);
        if (nickCode != null)
            localStorage.setItem("nickCode", nickCode);
        if (autoLogin != null)
            localStorage.setItem("autoLogin", autoLogin);                    
    }
};