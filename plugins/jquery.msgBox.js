//模拟对话框
//2015/3/10
(function () {
	$.msgBox = {
		cAlert: function (style, title, msg, btnOkText, callBack) {
			GenerateHtml("alert", style, title, msg, btnOkText);
			loadMsgBox();
			btnOk(callBack);
			btnNo();
		},
		cConfirm: function (style, title, msg, btnOkText, callBack, btnNoText, callBackNo) {
			GenerateHtml("confirm", style, title, msg, btnOkText, btnNoText);
			loadMsgBox();
			btnOk(callBack);
			btnNo(callBackNo);
		}
	}
	//生成Html
	var GenerateHtml = function (type, style, title, msg, btnOkText, btnNoText) {
		if (style == null) {
			style = "primary";
		}
		var _html = "";
		_html += "<div id=\"msgBoxModal\" class=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"msgBoxModalLabel\" aria-hidden=\"true\">";
		_html += "<div class=\"modal-dialog modal-xs\">";
		_html += "<div class=\"text-" + style + " modal-content\">";
		_html += "<div class=\"modal-header\">";
		//_html += "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
		//_html += "<span aria-hidden=\"true\">×</span>";
		//_html += "</button>";
		_html += "<h4 class=\"modal-title\">" + title + "</h4>";
		_html += "</div>";
		_html += "<div class=\"modal-body clearfix\">";
		_html += "<div class=\"msg-icon text-right col-xs-3 col-sm-3 col-md-3 col-lg-3\">";
		if (style == "success") {
			_html += "<i class=\"fa fa-check-circle fa-3x\"></i>";
		}else if (style == "Danger") {
			_html += "<i class=\"fa fa-times-circle fa-3x\"></i>";
		}else if (style == "Warning") {
			_html += "<i class=\"fa fa-exclamation-circle fa-3x\"></i>";
		}else {
			_html += "<i class=\"fa fa-question-circle fa-3x\"></i>";
		}
		_html += "</div>";
		_html += "<p class=\"msg-text lead col-xs-9 col-sm-9 col-md-9 col-lg-9\">";
		_html += msg;
		_html += "</p>";
		_html += "</div>";
		_html += "<div class=\"modal-footer\">";
		if (type == "alert") {
			_html += "<button type=\"button\" id=\"msgBtnOk\" class=\"btn btn-" + style + "\" data-dismiss=\"modal\">" + btnOkText + "</button>";
		}
		if (type == "confirm") {
			_html += "<button type=\"button\" id=\"msgBtnOk\" class=\"btn btn-" + style + "\" data-dismiss=\"modal\">" + btnOkText + "</button>";
			_html += "<button type=\"button\" id=\"msgBtnNo\" class=\"btn btn-default\" data-dismiss=\"modal\">" + btnNoText + "</button>";
		}
		_html += "</div>";
		_html += "</div>";
		_html += "</div>";
		_html += "</div>";

		//必须先将_html添加到body，再设置Css样式
		$("body").append(_html);
	}
	//显示消息框
	var loadMsgBox = function () {
		$("#msgBoxModal").on("shown.bs.modal", function () {
			$("#msgBtnOk").focus();
		});
		$("#msgBoxModal").modal({
			backdrop: 'static',
			keyboard: false
		});
	}
	//确定按钮事件
	var btnOk = function (callBack) {
		$("#msgBtnOk").click(function () {
			$("#msgBoxModal").modal('hide')
			$("#msgBoxModal").remove();
			if (typeof (callBack) == 'function') {
				callBack();
			}
		});
	}
	//取消按钮事件
	var btnNo = function (callBackNo) {
		$("#msgBtnNo").click(function () {
			$("#msgBoxModal").modal('hide')
			$("#msgBoxModal").remove();
			if (typeof (callBackNo) == 'function') {
				callBackNo();
			}
		});
	}
})(jQuery);