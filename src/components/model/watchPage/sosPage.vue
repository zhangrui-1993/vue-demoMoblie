<template>	
	<div class="sosPage">
		<div class="watchBody" ref="watchBody" id="watchBody">
			<div class="page page1">
				<div class="layered">
					<p class="text"> 
						<span class="title">自动联系家人（或医疗结构<sup>1</sup> ）</span>
						<span class="con">老人摔倒或者生命体征不详<br>双向通话自动打开<br>向紧急联系人（或医疗机构）自动报警求助</span>
					</p>
				</div>
				<div class="layered img_box">
					<img src="../../../../static/img/watchPage/sosPage/section1-1.png" class="section1-1 section_w451"/>
				</div>
				<div class="layered">
					<span class="tit">1、医疗机构提供的急救服务正陆续开放，因地区不同，情况有所差异。</span>
				</div>
			</div>
			<div class="page page2 bg_slope_gray">
				<div class="layered">
					<p class="text"> 
						<span class="title">防止误报</span>
						<span class="con">若为误报<br>15s内可单击表盘取消报警</span>
					</p>
				</div>
				<div class="layered">
					<img src="../../../../static/img/watchPage/sosPage/section1-icon.png" class="section_w81"/>
					<img src="../../../../static/img/watchPage/sosPage/section1-2.png" class="section1-1 section_w454"/>
				</div>	
			</div>		
			<div class="page page3">
				<div class="layered">
					<p class="text"> 
						<span class="title">支持手动报警 </span>
						<span class="con">连续敲击表盘五下即可手动报警</span>
					</p>
				</div>
				<div class="layered">					
					<img src="../../../../static/img/watchPage/sosPage/section2-1.png" class="section1-1 section_w454"/>
					<img src="../../../../static/img/watchPage/sosPage/section2-icon.png" class="section_w81"/>
					<img src="../../../../static/img/watchPage/sosPage/section2-2.png" class="section1-1 section_w456"/>
				</div>	
			</div>
			<div class="page page_btn">
				<div class="layered">
					<p class="text"> 
						<span class="title">全方位智能医疗解决方案</span>
						<span class="next">立即了解</span>
					</p>
				</div>
				<img src="../../../../static/img/watchPage/sosPage/section_botton_bg.png" class="section_bg"/>
			</div>
		</div>
		<div id="close"><router-link to = "watchPage" tag = "p">关闭</router-link></div>
	</div>
</template>

<script>
	export default{		
		mounted:function(){
			console.log("after11");
			console.log(this.$refs.watchBody)
//			this.$refs.watchBody.scrollTop = 0
		}
	}
</script>

<style scoped = "scoped">
	@import "../../../../static/css/watch/public.css";
	@import "../../../../static/css/watch/sosPage.css";
</style>