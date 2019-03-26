<template>
	<div class="watchPage">
		<!--智能腕表头部-->		
		<!--<v-head></v-head>-->	
		<head-view></head-view>
		<v-watchHead></v-watchHead>
		 <!--<router-view/>--> 
		<!--主体-->
		<div class="watchBody"  ref="watchBody" id="watchBody">
			<div class="page page1">
				<img src="../../../../static/img/watchPage/home/section1-1.png" class="section1-1"/>
				<img src="../../../../static/img/watchPage/home/section1-2.png" class="section1-2"/>
				<img src="../../../../static/img/watchPage/home/section1-3.png" class="section1-3"/>
				<p class="text"> 
					<span class="title">锦穗<sup>™</sup> 老人智养腕表</span>
					<span class="con">老年人的全时个众健康管家</span>
				</p>
			</div>
			<div class="page page2">
				<div class="layered">
					<p class="text"> 
						<span class="title">绿光传感+专利算法</span>
						<span class="con">24小时实时监测老人各项身体指标</span>
						<span class="next"><router-link to = "dataSubPage" tag = "p">进一步了解</router-link></span>
					</p>
				</div>
				<div class="layered">
					<img src="../../../../static/img/watchPage/home/section2-1.png" class="section2-1"/>
				</div>
				<div class="layered heartRate">
					<img src="../../../../static/img/watchPage/home/section2-2.png" class="section2-2"/>
					<img src="../../../../static/img/watchPage/home/section2-3.png" class="section2-3"/>
					<img src="../../../../static/img/watchPage/home/section2-4.png" class="section2-4"/>
				</div>					
			</div>
			<div class="page page3">
				<div class="layered">
					<p class="text"> 
						<span class="title">精密的元器件</span>
						<span class="con">只为父母的健康，准确率高达95%以上</span>
					</p>
				</div>
				<div class="layered">
					<img src="../../../../static/img/watchPage/home/section3-0.png" class="section3-0"/>
				</div>				
			</div>
			<div class="page page4">
				<div class="layered">
					<p class="text"> 
						<span class="title">大数据报告</span>
						<span class="con">接收常规健康报告与疾病预警报告</span>
					</p>
				</div>
				<div class="layered">
					<img src="../../../../static/img/watchPage/home/section3-1.png" class="section3-1"/>
					<img src="../../../../static/img/watchPage/home/section3-2.png" class="section3-2"/>
				</div>				
			</div>
			<div class="page page5">
				<div class="layered">
					<p class="text"> 
						<span class="title">SOS自动报警</span>
						<span class="con">老人突发意外，无须手动操作，腕表自动报警</span>
						
						<span class="next"><router-link to = "sosPage" tag = "p">进一步了解</router-link></span>
					</p>
				</div>
				<div class="layered">
					<img src="../../../../static/img/watchPage/home/section4-1.png" class="section4-1"/>
					<img src="../../../../static/img/watchPage/home/section4-bg.png" class="section4-bg section-bg"/>
				</div>				
			</div>
			<div class="page page6">
				<div class="layered">
					<p class="text"> 
						<span class="title">多重传感器精准定位</span>
						<span class="con">GPS+北斗双模定位传感器、三轴指南针地磁传感器</span>
					</p>
				</div>
				<div class="layered">
					<img src="../../../../static/img/watchPage/home/section5-1.png" class="section5-1"/>
					<img src="../../../../static/img/watchPage/home/section5-bg.png" class="section5-bg section-bg"/>
				</div>			
				<div class="layered">
					<span class="tit">注：若腕表丢失，第一紧急联系人可开启节电模式<br/>开启后腕表处于休眠状态，腕表所有电量集中用于定位功能</span>
				</div>
			</div>
			<div class="page page7">
				<div class="layered">
					<p class="text"> 
						<span class="title">细水长流，爱在每一天 </span>
						<span class="con">温馨提醒老人吃药、喝水、久坐</span>
					</p>
				</div>
				<div class="layered">
					<img src="../../../../static/img/watchPage/home/section6-1.png" class="section6-1"/>
				</div>				
			</div>
			<div class="page page8">
				<div class="layered">
					<p class="text"> 
						<span class="title">IP67级专业防尘防水  </span>
						<span class="con">生活防水，支持淋浴时佩戴</span>
					</p>
				</div>
				<div class="layered">
					<img src="../../../../static/img/watchPage/home/section7-1.png" class="section7-1"/>
				</div>				
			</div>
			<div class="page page9">
				<div class="layered">
					<p class="text"> 
						<span class="title">通话功能</span>
						<span class="con">采用eSIM卡，无需插卡即可通话</span>
					</p>
				</div>
				<div class="layered">
					<img src="../../../../static/img/watchPage/home/section8-1.png" class="section8-1"/>
					<!--<span class="tit">1、腕表分为None SIM、eSIM两种型号，选购时请注意。</span>-->
				</div>				
			</div>
			<div class="page page10">
				<div class="layered">
					<p class="text"> 
						<span class="title">1.39英寸圆形大表盘</span>
						<span class="con">让老人看得更清楚</span>
					</p>
				</div>
				<div class="layered">
					<img src="../../../../static/img/watchPage/home/section9-1.png" class="section9-1"/>					
				</div>				
			</div>
			<div class="page page11">
				<div class="layered">
					<p class="text"> 
						<span class="title">操作简便</span>
						<span class="con">两个手势即可开启智慧生活</span>
						<span class="next"><router-link to = "quickOperation" tag = "p">进一步了解</router-link></span>
					</p>
				</div>
				<div class="layered">
					<img src="../../../../static/img/watchPage/home/section10-1.png" class="section10-1"/>
					<img src="../../../../static/img/watchPage/home/section10-2.png" class="section10-2 active"/>
				</div>				
			</div>
			<div class="page page12">
				<div class="layered">
					<p class="text"> 
						<span class="title">语音助手——小穗</span>
						<span class="con">支持语音播报和语音指令<br>更加贴合老人使用习惯，不带花镜也能用</span>
						<span class="next"><router-link to = "voiceAssistant" tag = "p">进一步了解</router-link></span>
					</p>
				</div>
				<div class="layered">
					<img src="../../../../static/img/watchPage/home/section11-1.png" class="section11-1"/>
					<img src="../../../../static/img/watchPage/home/section11-bg.png" class="section11-bg section-bg"/>
				</div>				
			</div>
			<div class="page page13">
				<div class="layered">
					<p class="text"> 
						<span class="title">大容量电池，更持久的陪伴</span>
						<span class="con">智能估算时间提前推送低电量提醒，让家人更省心</span>
						<span class="next"><router-link to="batteryLevel" tag="p">进一步了解</router-link></span>
					</p>
				</div>
				<div class="layered">
					<img src="../../../../static/img/watchPage/home/section12-1.png" class="section12-1"/>
				</div>				
			</div>
			<div class="page page19">
				<div class="layered">
					<p class="text"> 
						<span class="title">脱离手腕，智能感知</span>
						<span class="con">一旦监测不到数据，腕表振动提示，“滴”声提醒</span>
					</p>
				</div>
				<div class="layered">
					<img src="../../../../static/img/watchPage/home/1-3.png" class="section12-1"/>
					<img src="../../../../static/img/watchPage/home/1-2.png" class="section_sub"/>					
					<img src="../../../../static/img/watchPage/home/1-1.png" class="section_sub"/>
					<img src="../../../../static/img/watchPage/home/1-hight.png" class="section_sub"/>					
				</div>				
			</div>
			<div class="page page14">
				<div class="layered">
					<p class="text"> 
						<span class="title">隐私不外泄</span>
						<span class="con">细粒度权限控制，保护数据安全</span>
						<span class="next"><router-link to = "privacyPage" tag = "p">进一步了解</router-link></span>
					</p>
				</div>
				<div class="layered">
					<img src="../../../../static/img/watchPage/home/section13-1.png" class="section13-1"/>
				</div>				
			</div>
			<div class="page page15">
				<div class="layered">
					<p class="text"> 
						<span class="title">一键智能换表更省心</span>
						<span class="con">即使更换腕表，也依旧保留原本的设置，省去换表麻烦</span>
						<!-- <span class="next">进一步了解</span> -->
						<span class="how">如何一键换表？</span>
					</p>
				</div>
				<div class="layered">
					<img src="../../../../static/img/watchPage/home/section14-1.png" class="section14-1"/>
					<div class="other">						
						<img src="../../../../static/img/watchPage/home/arrow.png" class="arrow"/>
						<!--<img src="../../../../static/img/watchPage/home/spot.png" class="spot"/>-->
					</div>
				</div>				
			</div>
			<div class="page page16">
				<div class="layered">
					<p class="text"> 
						<span class="title">远在天边，爱在身边</span>
						<span class="con">为父母、为家人，做力所能及的事情</span>
						<span class="how bridge_how">了解全方位解决方案<img src="../../../../static/img/watchPage/home/bridge.png" class="bridge"/></span>
					</p>
				</div>
				<div class="layered">
					<img src="../../../../static/img/watchPage/home/section15-1.png" class="section15-1"/>
					<img src="../../../../static/img/watchPage/home/section15-2.png" class="section15-2 section-bg"/>
				</div>				
			</div>
			 <div class="page page17">
				<div class="layered">
					<p class="text"> 
						<span class="title">Jin OS 1.0 操作系统</span>
						<span class="con">速度与力量同在</span>
						<span class="next"><router-link to = "operatingSystem" tag = "p">进一步了解</router-link></span>
					</p>
				</div>
				<img src="../../../../static/img/watchPage/home/section16-bg.png" class="section16-bg"/>
			</div>
			<div class="page page18">
				<div class="layered">
					<p class="text"> 
						<span class="title">配件</span>
						<span class="next"><router-link to = "watchParts" tag = "p">进一步了解</router-link></span>							
					</p>
				</div>
				<div class="layered">
					<span class="tabTitle">随心选，享新颜</span>
					<div class="imgBox">
						<img src="../../../../static/img/watchPage/home/section17-1.png" class="section17-1"/>
						<img src="../../../../static/img/watchPage/home/section17-2.png" class="section17-1"/>
						<img src="../../../../static/img/watchPage/home/section17-3.png" class="section17-1"/>
						<img src="../../../../static/img/watchPage/home/section17-4.png" class="section17-1"/>
					</div>
				</div>		
				<div class="layered">
					<span class="tabTitle cdp">旋转充电盘，魅力无限</span>
					<div class="imgBox">
						<img src="../../../../static/img/watchPage/home/section17-5.png" class="section17-5"/>						
					</div>
				</div>		
			</div>
		</div>
		<foot-view></foot-view>
	</div>
</template>

<script>
	import "../../../../static/js/watch/public.js";
	import vHead from '../../common/header.vue';
	import vWatchHead from './watchHeader.vue';
	export default{		
		components:{
			vHead,
			vWatchHead
		},
		mounted:function(e){
			let _this = this;
//			console.log("after");
//			console.log(window)
//			console.log(document.getElementById("watchBody"))
//			console.log(this.$refs.watchBody)
//			let domObj = this.$refs.watchBody
//			window.addEventListener('scroll', function(){
//				console.log(domObj)
//				handleScroll(domObj)
//			},true)
			console.log("mounted")
//			console.log($(".watchPage").offset())
//			$(".watchPage").offset({top:0,left:0})
		}
	}
</script>

<style scoped="">
@import "../../../../static/css/watch/public.css";
@import "../../../../static/css/watch/watchPage.css";
/* @import "../../../../static/css/watch/watch.scss"; */

</style>
<style type="text/css">
</style>