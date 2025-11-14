var biz_api = {
    getViewParam: function (item, highlight_flag) {
        var highlight = "";
        if (highlight_flag != undefined) {
            highlight = '&high_light=' + highlight_flag;
        }
        return 'form_kind=' + item.form_kind + '&form_number=' + item.form_number + '&virtual_flag=' + item.virtual_flag + highlight;
    },

    downloadLink: function (item, file_nm) {
        var downlink = "";

        //  if (item.hwp == file_nm || item.doc == file_nm || item.xls == file_nm || item.pdf == file_nm || item.etc == file_nm) {
        var file_ext = file_nm.split('.')[1];

        //etc 타입의 파일의 경우 etc로 고정값을 설정하면 됩니다.
        if (file_ext == "" ||
                (file_ext.toLowerCase() != "hwp"
                && file_ext.toLowerCase() != "doc"
                && file_ext.toLowerCase() != "docx"
                && file_ext.toLowerCase() != "xls"
                && file_ext.toLowerCase() != "xlsx"
                && file_ext.toLowerCase() != "pdf")
            ) 
        {
            file_ext = "etc"; 
        }

        data = "api_key=961ce60486af0d6b84a33014259ed5d8"
				+ "&form_kind=" + item.substring(0, 1)
				+ "&form_number=" + item.substring(2, item.length)
				+ "&file_type=" + file_ext
				+ "&virtual_flag=" + item.substring(1, 2);

        //alert(data);
        downlink = biz_api.download(data, 'post');
        //  }

        return downlink;
    },

    download: function (data, method) {

        //var file_ext = file_nm.split('.')[1];
        url = '//apis.bizforms.co.kr/v1/search/download.asp';

        if (url && data) {
            data = typeof data == 'string' ? data : jQuery.param(data);
            var inputs = '';
            jQuery.each(data.split('&'), function () {
                var pair = this.split('=');
                inputs += '<input type="hidden" name="' + pair[0] + '" value="' + pair[1] + '" />';
            });
            // jQuery('<form action="'+ url +'" method="'+ (method||'post') +'">'+inputs+'</form>')

            var src = url + '?' + data;

            if ($('#frm_down').length) {
                $('#frm_down').attr('src', src);
            }
            else {
                jQuery('<iframe id="frm_down" style="display:none;" src="' + src + '"></iframe>')
	        	.appendTo('body');

                //       	$('#frm_down').load( function(){
                //     biz_api.frameReset();
                // });
            }



            // jQuery('<iframe id="frm_down" style="display:none;" src="'+ src +'"></iframe>')
            // .appendTo('body');
            // .submit()
            // .remove();
        }
    },

    frameReset: function () {
        $('#frm_down').attr('src', '');
    }
}