//修正Windows Phone 8 设备按照桌面浏览器的方式呈现页面的错误
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	var msViewportStyle = document.createElement('style')
	msViewportStyle.appendChild(
		document.createTextNode(
			'@-ms-viewport{width:auto!important}'
		)
	)
	document.querySelector('head').appendChild(msViewportStyle)
}

$(document).ready(function(){
	//加载头部、边栏、底部
	$("#header").load("header.html");
	$("#sidebar").load("sidebar.html");
	$("#footer").load("footer.html");
	//弹出主页网址提示层
	$("#app-tool > a").popover({ trigger: "hover", html: true, container: "body", title: "<div class='center'>扫一扫，用手机访问网站</div>", content: "<img src='images/qrcode-home-url.jpg' width='144' height='144' border='0' alt='http://www.oozuoye.com/' />" });

	$("#btnFavicon").click(function(){
		var sURL = document.URL;
		var sTitle = document.title;
		var ctrl=(navigator.userAgent.toLowerCase()).indexOf('mac')!=-1?'Command/Cmd': 'CTRL';
		if(document.all){
			window.external.addFavorite(sURL, sTitle);
		}
		else if(window.sidebar){
			window.sidebar.addPanel(sTitle, sURL, "");
		}
		else{
			alert('您可以通过快捷键' + ctrl + ' + D 加入到收藏夹');
		}
	});

});

//附加导航
function myaffix(c) {
	setTimeout(function () {
	var $sideBar = $(c)
	$sideBar.affix({
		offset: {
			top: function () {
				var offsetTop = $sideBar.offset().top
				var sideBarMargin = parseInt($sideBar.children(0).css('margin-top'), 10)
				var navOuterHeight = $('.breadcrumb').parents().height()
				return (this.top = offsetTop - navOuterHeight - sideBarMargin)
			},
			bottom: function () {
				return (this.bottom = $('.container-footer').outerHeight(true))
			}
		}
	})
	}, 10);
}
