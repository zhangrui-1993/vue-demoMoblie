<template>
	<div class="earlyWarningReport">
		<div class="healthyBody" ref="healthyBody" id="healthyBody">

			<div class="page page1 bg_slope_gray">
				<div class="layered">
					<p class="text section_abs"> 
						<span class="title">报告首页</span>
						<!--<span class="tit_text">
							<span class="greenTit"><p class="orange">每周定期推送</p>健康报告</span>
							<span class="">身体状况不佳时推送预警报告</span>
							<span>紧急情况或突发意外时<br />推送急救报告</span>
							<span>点击列表即可查看报告详情</span>
						</span>-->
						<span class="con page1_top">左右滑动<br />切换设备</span>
					</p>
					<img src="../../../../static/img/healthyPage/earlyWarningReport/section1-1.png" class="section_rel section_w750 "/>	
					<img src="../../../../static/img/healthyPage/earlyWarningReport/section1-2.png" class="section_abs section_w750 "/>	
					<img src="../../../../static/img/healthyPage/earlyWarningReport/section1-3.png" class="section_abs section_w750 "/>	
					<img src="../../../../static/img/healthyPage/earlyWarningReport/section1-4.png" class="section_abs section_w750 "/>	
					<img src="../../../../static/img/healthyPage/earlyWarningReport/section1-5.png" class="section_abs section_w750 "/>	
					<img src="../../../../static/img/healthyPage/earlyWarningReport/section1-7.png" class="section_abs section_w750 "/>	
					<img src="../../../../static/img/healthyPage/earlyWarningReport/section1-8.png" class="section_abs section_w750 "/>						
					<img src="../../../../static/img/healthyPage/earlyWarningReport/section1-9.png" class="section_abs section_w750 "/>					
					<img src="../../../../static/img/healthyPage/earlyWarningReport/section1-10.png" class="section_abs section_w750 "/>					
					<img src="../../../../static/img/healthyPage/earlyWarningReport/section1-11.png" class="section_abs section_w750 "/>					
					<img src="../../../../static/img/healthyPage/earlyWarningReport/section1-12.png" class="section_abs section_w750 "/>	
				</div>
			</div>
			<div class="page page2 ">
				<div class="layered">
					<p class="text section_abs"> 
						<span class="title margin_bottom_set">健康报告详情</span>
						<span class="con"><span class="green">绿色(分值范围81-100)</span>代表身体状况良好<br /><span class="orange">黄色（分值范围46-80）</span>代表身体状况欠佳<br /><span class="red">红色（分值范围0-45）</span>代表老人突发意外</span>
						<span class="con margin_top_15">雷达图全方位展示<br />体征概况一目了然</span>
					</p>					
					<img src="../../../../static/img/healthyPage/earlyWarningReport/section2-1.png" class="section_rel section_w750 "/>	
				</div>
				<div class="layered">
					<p class="text section_abs tit section_w430">
						<span class="con"><span class="orange">大数据</span>加<span class="orange">人工智能</span><br />实时分析，深度解读<br />身体各项指标——<br />心率、血压、血氧、体温、疲劳度</span>
					</p>					
					<img src="../../../../static/img/healthyPage/earlyWarningReport/section2-2.png" class="section_rel section_w750 "/>	
				</div>
				<div class="layered">
					<p class="text section_abs tit"> 
						<span class="con "><span class="orange">大数据</span>加<span class="orange">人工智能</span>实时分析<br />多维度诠释身体健康状况</span>
					</p>					
					<img src="../../../../static/img/healthyPage/earlyWarningReport/section2-3.png" class="section_rel section_w750 "/>	
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
	@import "../../../../static/css/healthyPage/earlyWarningReport.css";
</style>