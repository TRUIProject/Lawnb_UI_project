function SetTitle() {
    var params = {};
    sendNonBlockingAjaxJsonRequest("/Support/GetPrice/", params, function (result) {
        SetPrice(result);
        setHeight_customer();
    });
}

function SetPrice(data) {
    var Contents = "";
    Contents += "<thead><tr><th style='width:200px'></th>";
    for (var i = 0; i < 3; i++) {
        if (i == data.length - 1) {
            if (data[i]["Discount"] != "0") {
                Contents += "<th>" + data[i]["PriceName"] + " (" + data[i]["Discount"] + "%할인)</th>";
            } else {
                Contents += "<th>" + data[i]["PriceName"] + "</th>";
            }
        } else {
            if (data[i]["Discount"] != "0") {
                Contents += "<th>" + data[i]["PriceName"] + " (" + data[i]["Discount"] + "%할인)</th>";
            } else {
                Contents += "<th style=\"width:20%\">" + data[i]["PriceName"] + "</th>";
            }
        }
    }
    Contents += "</tr></thead>";
    Contents += "<tbody>";

    var PriceGrade = "";
    Contents += "<tr><th class=pdl10>" + data[0]["PriceGrade"] + "</th>";
    for (var i = 0; i < data.length; i++) {
        if (i == 0) {
            PriceGrade = data[i]["PriceGrade"];
        } else {
            PriceGrade = data[i - 1]["PriceGrade"];
        }

        if (PriceGrade != data[i]["PriceGrade"]) {
            if (i > 0) {
                Contents += "</tr>";
            }
            Contents += "<tr><th class=pdl10>" + data[i]["PriceGrade"] + "</th>";
        }

        if (data[i]["Discount"] != "0") {
            Contents += "<td class=\"ac\"><strike>" + numberformat(data[i]["OriginPrice"]) + "원</strike> → " + numberformat(data[i]["Price"]) + "원</td>";
        } else {
            Contents += "<td class=\"ac\">" + numberformat(data[i]["Price"]) + "원</td>";
        }
    }
    Contents += "</tr></tbody>";
    $("#PriceLayer").html(Contents);
    $("#PriceArea").show();
}

function numberformat(strNum) {
    try {
        var retval = strNum.toString();
        var regular = /(\d+)(\d{3})/;
        while (regular.test(retval)) {
            retval = retval.replace(regular, '$1' + ',' + '$2');
        }
        return retval;
    } catch (e) {
        return strNum;
    }
}