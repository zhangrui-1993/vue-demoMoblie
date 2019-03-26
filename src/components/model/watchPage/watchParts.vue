<template>
	<div class="watchParts">

		<div class="watchBody" ref="watchBody" id="watchBody">
			<div class="page page1">
				<div class="layered">
					<p class="text"> 
						<span class="title">表带随选，拆装简便 </span>
						<span class="con">互动式表廊，滑动查看搭配效果</span>
						<span class="next"><router-link to = "watchBand" tag = "p">进一步了解</router-link></span>
					</p>
				</div>
				<div class="layered margin_top_30">
					<img src="../../../../static/img/watchPage/watchParts/home/section1-2.png" class="section1-1 section_w378 section_margin_auto"/>
					<img src="../../../../static/img/watchPage/watchParts/home/section1-1.png" class="section1-1 section_w338 section_abs"/>
				</div>	
			</div>
			<div class="page page1 padding_bottom_30px">
				<div class="layered">
					<p class="text"> 
						<span class="title">吸附式充电盘</span>
						<span class="con">充电方便，自动吸附<br/>可旋转盘体，灵活对接腕表充电区域 </span>
					</p>
				</div>
			</div>
			<div class="page page1 bg_gray padding_bottom_40">
				<div class="layered">
					<p class="text margin_top_30"> 
						<span class="title">标配</span>
						<span class="next"><router-link to = "rechargeStand" tag = "p">进一步了解</router-link></span>
					</p>
				</div>
				<div class="layered img_tit margin_top_25_1">
					<img src="../../../../static/img/watchPage/watchParts/home/section2-1.png" class="section1-1 section_w750 "/>
					<span class="tit">充电线x1</span>
				</div>	
				<div class="layered img_tit1 img_tit">
					<img src="../../../../static/img/watchPage/watchParts/home/section2-2.png" class="section1-1 section_w750 "/>
					<span class="tit">充电头x1</span>
				</div>	
			</div>	
			<div class="page page1 bg_gray">				
				<div class="layered img_tit">
					<img src="../../../../static/img/watchPage/watchParts/home/section2-3.png" class="section1-1 section_w750 "/>
					<span class="tit">吸附式充电盘（1.0米 ）</span>
				</div>					
			</div>	
			<div class="page page1 bg_gray margin_bottom_40">				
				<div class="layered img_tit">
					<img src="../../../../static/img/watchPage/watchParts/home/section2-4.png" class="section1-1 section_w750 "/>
					<span class="tit">标配版充电头</span>
				</div>					
			</div>	
		</div>
		<div id="close"><router-link to = "watchPage" tag = "p">关闭</router-link></div>
	</div>
</template>

<script>
</script>

<style scoped="">
	@import "../../../../static/css/watch/public.css";
	@import "../../../../static/css/watch/watchParts.css";
</style>