<template>
	<div class="healthySos">
		<div class="healthyBody" ref="healthyBody" id="healthyBody">
			<div class="page page1">
				<div class="layered">
					<p class="text section_abs"> 
						<span class="title red">急救报告</span>
						<span class="con">老人突发意外家人（或医疗机构 <sup>1</sup>）<br />第一时间得知老人<br /><span class="orange">地理位置</span>与各项<span class="orange">生命体征</span></span>
					</p>
					<img src="../../../../static/img/healthyPage/healthySos/section1-1.png" class="section_rel section_w750 "/>
				</div>
				<div class="layered pageTit">
					<span class="tit">1、医疗机构提供的急救服务正陆续开放，因地区不同，情况有所差异。</span>
				</div>
			</div>
			<div class="page page2 bg_slope_gray">
				<div class="layered">
					<p class="text section_abs"> 
						<span class="title">急救卡</span>
						<span class="con">提供老人的基础信息<br />便于开展更有针对性的救援<br />有效避免误用药物</span>
					</p>
					<img src="../../../../static/img/healthyPage/healthySos/section1-2.png" class="section_rel section_w750 "/>					
				</div>
			</div>
			<div class="page page2">
				<div class="layered">
					<p class="text section_abs"> 
						<span class="title">病历</span>
						<span class="con">展示老人的过往病史<br />利于医生快速分析病情<br />辅助有效治疗</span>
					</p>
					<img src="../../../../static/img/healthyPage/healthySos/section1-3.png" class="section_rel section_w750 "/>					
				</div>
			</div>
			<div class="page page_btn">
				<div class="layered">
					<p class="text section_abs"> 
						<span class="title">全方位智能医疗解决方案</span>
						<span class="next">立即了解</span>
					</p>
					<img src="../../../../static/img/healthyPage/healthySos/section1-4.png" class="section_rel section_bg section_w750"/>
				</div>
				
			</div>
		</div>
		<div id="close"><router-link to = "healthy" tag = "p">关闭</router-link></div>
	</div>
</template>

<script>
</script>

<style>
	@import "../../../../static/css/watch/public.css";
	@import "../../../../static/css/healthyPage/healthyPublic.css";	
	@import "../../../../static/css/healthyPage/healthySos.css";
</style>