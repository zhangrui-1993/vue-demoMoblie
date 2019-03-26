<template>
	<div class="voiceAssistant">
		<div class="watchBody" ref="watchBody" id="watchBody">
			<div class="page page1">
				<div class="layered">
					<p class="text"> 
						<span class="title">语音播报</span>
						<span class="con">敲击表盘两下，小穗语音播报当前内容</span>
					</p>
				</div>
				<div class="layered">
					<!--<img src="../../../../static/img/watchPage/voiceAssistant/section1-1.png" class="section1-1 section_w569"/>-->
				</div>
			</div>
			<div class="page page1">
				<div class="layered">
					<span class="name">小穗</span>
					<span class="tit_box">
						今天是7月31号，星期二，戊戌狗年六月十九日。 现在是北京时间中午十一点二十九分 天气多云，气温35摄氏度
						<img src="../../../../static/img/watchPage/voiceAssistant/section1-1.png" class="section_margin_auto section_w569"/>
					</span>					
				</div>
				<div class="layered">
					<img src="../../../../static/img/watchPage/voiceAssistant/section1-2.png" class="section_margin_auto section_w426"/>
				</div>
			</div>
			<div class="page page1 page_right">
				<div class="layered">
					<span class="name">小穗</span>
					<span class="tit_box">
						您当前的心率是85次/分，心率值在正常范围内 请您继续保持。
						<img src="../../../../static/img/watchPage/voiceAssistant/section1-3.png" class="section_margin_auto section_w555"/>
					</span>					
				</div>
				<div class="layered">
					<img src="../../../../static/img/watchPage/voiceAssistant/section1-4.png" class="section_margin_auto section_w443"/>
				</div>
			</div>
			<div class="page page1 bg_slope_gray bg_slope">
				<div class="layered">
					<p class="text"> 
						<span class="title">语音指令</span>
						<span class="con margin_bottom_30">召唤小穗，诸事皆有</span>
					</p>
				</div>
				<div class="layered">
					<img src="../../../../static/img/watchPage/voiceAssistant/section2-1.png" class="section_margin_auto section_w443 margin_bottom_30"/>
					<img src="../../../../static/img/watchPage/voiceAssistant/section2-2.png" class="section_margin_auto section_w480 margin_bottom_40"/>
				</div>
				
			</div>
			<div class="page bg">				
			</div>
			
		</div>
		<div id="close"><router-link to = "watchPage" tag = "p">关闭</router-link></div>
	</div>
</template>

<script>
</script>

<style>
	@import "../../../../static/css/watch/public.css";
	@import "../../../../static/css/watch/voiceAssistant.css";
</style>