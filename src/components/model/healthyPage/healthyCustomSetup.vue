<template>
	<div class="healthyCustomSetup">
		<div class="healthyBody" ref="healthyBody" id="healthyBody">
			<div class="page page1">
				<div class="layered">
					<p class="text section_abs"> 
						<span class="title">节电模式 </span>
						<span class="con">若腕表丢失<br />在锦穗  健康APP里开启节电模式<br />腕表会处于休眠状态<br />腕表电量将集中用于智能定位功能</span>
					</p>
					<img src="../../../../static/img/healthyPage/healthyCustomSetup/section1-1.png" class="section_rel section_w750 "/>	
				</div>
			</div>
			<div class="page page1 bg_slope_gray">
				<div class="layered">
					<p class="text section_abs"> 
						<span class="title">勿扰模式</span>
						<span class="con">第一紧急联系人<br />可在锦穗  健康APP为老人设置勿扰模式<br />在设定时间段内腕表自动关闭提醒及通知<br />所有来电将静音</span>
					</p>
					<img src="../../../../static/img/healthyPage/healthyCustomSetup/section2-1.png" class="section_rel section_w750 "/>	
				</div>
			</div>
			<div class="page bg">				
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
	@import "../../../../static/css/healthyPage/healthyCustomSetup.css";
</style>