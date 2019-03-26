<template>
	<div class="batteryLevel">
		<div class="watchBody" ref="watchBody" id="watchBody">
			<div class="page page1">
				<div class="layered">
					<p class="text"> 
						<span class="title">电量不足 智能提醒</span>
						<span class="con">百分比显示当前剩余电量<br />智能计算剩余电量使用时间<br />语音提醒用户及时充电</span>
					</p>
				</div>
				<div class="layered">
					<img src="../../../../static/img/watchPage/batteryLevel/section1-1.png" class="section1-1 section_w426"/>
				</div>
			</div>
			<div class="page page2 bg_slope_gray">
				<div class="layered">
					<p class="text"> 
						<span class="title">吸附式充电盘</span>
						<span class="con">充电方便，强力吸附<br/>高效充电设计，用时更短，陪伴更持久</span>
					</p>
				</div>
				<div class="layered">
					<img src="../../../../static/img/watchPage/batteryLevel/section2-1.png" class="section1-1 section_w578"/>
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
	@import "../../../../static/css/watch/batteryLevel.css";
</style>