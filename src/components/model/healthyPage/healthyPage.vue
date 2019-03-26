<template>
	<div class="healthyPage">
		<head-er-view></head-er-view>
		<div class="healthyBody" ref="healthyBody" id="healthyBody">
			<!--<router-view></router-view>-->
			<div class="page margin_top_40">
				<div class="layered">
					<img src="../../../../static/img/healthyPage/home/setion_home_1.png" alt="" class="section_margin_auto section_w271"/>
				</div>
				<div class="layered">
					<p class="text margin_top_set"> 
						<span class="title">锦穗<sup>™</sup>健康</span>
						<span class="con">智能增量算法，更快、更省</span>
						<span class="download">
							<span class="ios btnBox">
								<img src="../../../../static/img/healthyPage/home/ios-download.png" alt="" class="section_w165"/>
								<span class="tit">IOS建议使用8.0及以上版本</span>
							</span>
							<span class="ios btnBox">
								<img src="../../../../static/img/healthyPage/home/android-download.png" alt="" class="section_w165"/>
								<span class="tit">Android OS建议使用4.4及以上版本</span>
							</span>
						</span>
					</p>
				</div>
			</div>
			<div class="page page2">
				<div class="layered">
					<img src="../../../../static/img/healthyPage/home/section1-1.png" class="section_rel section_w750 "/>
					<img src="../../../../static/img/healthyPage/home/section1-2.png" class="section_abs section_w750 "/>
					<img src="../../../../static/img/healthyPage/home/section1-3.png" class="section_abs section_w750 "/>
					<img src="../../../../static/img/healthyPage/home/section1-4.png" class="section_abs section_w750 "/>
					<img src="../../../../static/img/healthyPage/home/section1-5.png" class="section_abs section_w750 "/>
					<img src="../../../../static/img/healthyPage/home/section1-7.png" class="section_abs section_w750 "/>
					<img src="../../../../static/img/healthyPage/home/section1-8.png" class="section_abs section_w750 "/>
					<img src="../../../../static/img/healthyPage/home/section1-9.png" class="section_abs section_w750 "/>
				</div>
			</div>
			<div class="page page1">
				<div class="layered bg_gray">
					<p class="text section_abs"> 
						<span class="title">健康数据</span>
						<span class="con">随时随地，查看老人各项身体指标</span>
						<span class="next"><router-link to = "healthyData" tag = "p">进一步了解</router-link></span>
					</p>
					<img src="../../../../static/img/healthyPage/home/section2-1.png" class="section_rel section_w750 "/>
					<img src="../../../../static/img/healthyPage/home/section2-2.png" class="section_abs section_w750 "/>
					<img src="../../../../static/img/healthyPage/home/section2-3.png" class="section_abs section_w750 "/>
				</div>
			</div>
			<div class="page page2">				
				<div class="layered">
					<p class="text section_abs"> 
						<span class="title">健康及预警报告</span>
						<span class="con">定期接收老人健康报告，必要时接收老人疾病预警报告</span>
						<span class="next"><router-link to = "earlyWarningReport" tag = "p">进一步了解</router-link></span>
					</p>
					<img src="../../../../static/img/healthyPage/home/section3-1.png" class="section_rel section_w750 "/>					
					<img src="../../../../static/img/healthyPage/home/section3-3.png" class="section_abs section_w750 "/>
					<img src="../../../../static/img/healthyPage/home/section3-2.png" class="section_abs section_w750 "/>
				</div>
			</div>
			<div class="page page2">			
				<div class="layered bg_gray">
					<p class="text section_abs"> 
						<span class="title">让爱不留遗憾</span>
						<span class="con">老人突发意外,接收腕表自动报警<br />同时知晓老人位置与体征标</span>
						<span class="next"><router-link to = "healthySos" tag = "p">进一步了解</router-link></span>
					</p>
					<img src="../../../../static/img/healthyPage/home/section4-1.png" class="section_rel section_w750 "/>	
				</div>		
			</div>
			<div class="page page2 pageTit">
				<div class="layered">
					<p class="text section_abs"> 
						<span class="title">为爱守护·爱不迷路</span>
						<span class="con">智能电子围栏 <sup>1</sup>、多重设备定位</span>
					</p>
					<img src="../../../../static/img/healthyPage/home/section5-1.png" class="section_rel section_w750 "/>	
					<img src="../../../../static/img/healthyPage/home/section5-2.png" class="section_abs section_w750 "/>	
				</div>		
				<div class="layered">
					<span class="tit">1、拥有自主知识产权的智能电子围栏算法<br />按照老人日常活动区域进行大数据计算<br />保证安全性，摆脱固化半径束缚</span>
				</div>
			</div>
			<div class="page page2">
				<div class="layered bg_gray">
					<p class="text section_abs"> 
						<span class="title">细节处见关爱</span>
						<span class="con">为老人设置事项提醒，从此无需担心老人<br />忘记吃药、喝水不足、久坐伤身</span>
						<span class="next"><router-link to = "careReminder" tag = "p">进一步了解</router-link></span>
					</p>
					<img src="../../../../static/img/healthyPage/home/section6-1.png" class="section_rel section_w750 "/>	
					<img src="../../../../static/img/healthyPage/home/section6-2.png" class="section_abs section_w750 "/>	
					<img src="../../../../static/img/healthyPage/home/section6-3.png" class="section_abs section_w750 "/>	
				</div>			
			</div>
			<div class="page page2">
				<div class="layered">
					<p class="text section_abs"> 
						<span class="title">健康日记</span>
						<span class="con">记一笔，辅助更精准的疾病预测</span>
					</p>
					<img src="../../../../static/img/healthyPage/home/section7-1.png" class="section_rel section_w750 "/>
					<img src="../../../../static/img/healthyPage/home/section7-2.png" class="section_abs section_w750 "/>
				</div>			
			</div>
			<div class="page page2">
				<div class="layered bg_gray">
					<p class="text section_abs"> 
						<span class="title">便捷操作</span>
						<span class="con">无论是智养腕表还是锦穗健康<br />我们的点击最多不超过两次</span>
						<span class="next"><router-link to = "healthyQuick" tag = "p">进一步了解</router-link></span>
					</p>
					<img src="../../../../static/img/healthyPage/home/section8-1.png" class="section_rel section_w750 "/>
				</div>			
			</div>
			<div class="page page2">
				<div class="layered">
					<p class="text section_abs"> 
						<span class="title">电量不足提示</span>
						<span class="con">腕表电量不足时收到提示，再也不用担心爸妈腕表没电</span>
					</p>
					<img src="../../../../static/img/healthyPage/home/section9-1.png" class="section_rel section_w750 "/>
					<img src="../../../../static/img/healthyPage/home/section9-2.png" class="section_abs section_w750 "/>
				</div>			
			</div>
			<div class="page page2">
				<div class="layered bg_gray">
					<p class="text section_abs"> 
						<span class="title">脱腕温馨提醒</span>
						<span class="con">腕表脱离手腕超过设定时间，推送消息提醒<br />全方位守护您的家人</span>
					</p>
					<img src="../../../../static/img/healthyPage/home/section10-1.png" class="section_rel section_w750 "/>
				</div>			
			</div>
			<div class="page page2">
				<div class="layered">
					<p class="text section_abs"> 
						<span class="title">专属人性化设置</span>
						<span class="con">子女可自定义语音提醒，让关爱每日萦绕老人耳边</span>
						<span class="con">在APP上完成腕表佩戴设置，优化老人佩戴体验</span>
						<span class="next"><router-link to = "healthyCustomSetup" tag = "p">进一步了解</router-link></span>
						
					</p>
					<img src="../../../../static/img/healthyPage/home/section11-1.png" class="section_rel section_w750 "/>
				</div>	
			</div>
			<div class="page page2">
				<div class="layered bg_gray">
					<p class="text section_abs"> 
						<span class="title">隐私不外泄</span>
						<span class="con">支持挂失，清除数据，保护隐私</span>
						<span class="next"><router-link to = "healthyPrivacy" tag = "p">进一步了解</router-link></span>						
					</p>
					<img src="../../../../static/img/healthyPage/home/section12-1.png" class="section_rel section_w750 "/>
					<img src="../../../../static/img/healthyPage/home/section12-2.png" class="section_abs section_w750 "/>
					<img src="../../../../static/img/healthyPage/home/section12-3.png" class="section_abs section_w750 "/>
				</div>	
			</div>
			
			<div class="page page2">
				<div class="layered">
					<p class="text section_abs"> 
						<span class="title">一键智能换机更省心</span>
						<span class="con">即使更换手机，也依旧保留原本的设置，省去换机麻烦</span>
						<span class="how">如何一键换机？</span>
					</p>
					<img src="../../../../static/img/healthyPage/home/section13-1.png" class="section_rel section_w750 "/>
					<img src="../../../../static/img/healthyPage/home/section13-2.png" class="section_abs section_w750 "/>
					<img src="../../../../static/img/healthyPage/home/section13-3.png" class="section_abs section_w750 "/>
				</div>		
			</div>
			<div class="page page2">
				<div class="layered">
					<p class="text section_abs"> 
						<span class="title">趁我们未老，趁爸妈还在</span>
						<span class="con">尽孝不能等，他们需要全方位的爱</span>
						<span class="how bridge_how">了解全方位解决方案<img src="../../../../static/img/watchPage/home/bridge.png" class="bridge"/></span>
					</p>
					<img src="../../../../static/img/healthyPage/home/section14-1.png" class="section_rel section_w750 "/>
					<img src="../../../../static/img/healthyPage/home/section14-2.png" class="section_abs section_w750 "/>
					<img src="../../../../static/img/healthyPage/home/section14-3.png" class="section_abs section_w750 "/>
					<img src="../../../../static/img/healthyPage/home/section14-4.png" class="section_abs section_w750 "/>
					<img src="../../../../static/img/healthyPage/home/section14-5.png" class="section_abs section_w750 "/>
					<img src="../../../../static/img/healthyPage/home/section14-6.png" class="section_abs section_w750 "/>
					<img src="../../../../static/img/healthyPage/home/section14-7.png" class="section_abs section_w750 "/>
					<img src="../../../../static/img/healthyPage/home/section14-8.png" class="section_abs section_w750 "/>
					<img src="../../../../static/img/healthyPage/home/section14-9.png" class="section_abs section_w750 "/>
				</div>
			</div>			
		</div>
	</div>
</template>

<script>
</script>

<style>
	@import "../../../../static/css/watch/public.css";
	@import "../../../../static/css/healthyPage/healthyPage.css";
	@import "../../../../static/css/healthyPage/healthyPublic.css";
</style>