handleScroll = function(dom) {
var scrollTop,offsetTop,scrollTop1
	offsetTop = dom.offsetTop
	console.log(offsetTop)
	scrollTop1 = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
	scrollTop =dom.scrollTopp
  console.log(scrollTop)
  console.log(scrollTop1)
  console.log("执行了")
  console.log("scrollTop"+offsetTop)
}
$(".index .color_green").bind(function(){
		console.log(this)
		$(this).addClass("active")
//		$(this).attr("background","#f6f6f6")
//		$(this).attr("background",'green')
	})
