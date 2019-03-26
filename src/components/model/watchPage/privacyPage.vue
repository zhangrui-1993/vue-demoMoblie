<template>
	<div class="privacyPage">
		<div class="watchBody" ref="watchBody" id="watchBody">
			<div class="page page1">
				<div class="layered">
					<p class="text"> 
						<span class="title">健康数据开放权限</span>
						<span class="con">生命体征数据属于老人绝对隐私<br /> 打开模式下，所有紧急联系人均可见 <br />关闭模式下，仅第一紧急联系人及发生意外时医生可见</span>
						<!--<span class="next">进一步了解</span>-->
					</p>
				</div>
				<div class="layered">
					<img src="../../../../static/img/watchPage/privacyPage/section1-1.png" class="section1-1"/>
				</div>	
			</div>
			<div class="page page2">
				<div class="layered">
					<p class="text"> 
						<span class="title">位置开放权限</span>
						<span class="con">位置信息数据直接影响老人及家庭安全<br /> 打开模式下，所有紧急联系人可见<br /> 关闭模式下，仅老人离开安全区域或发生意外时可见</span>
						<!--<span class="next">进一步了解</span>-->
					</p>
				</div>
				<div class="layered">
					<img src="../../../../static/img/watchPage/privacyPage/section2-1.png" class="section1-1"/>
				</div>	
			</div>
			<div class="page page3">
				<div class="layered">
					<p class="text"> 
						<span class="title">病历开放权限</span>
						<span class="con">病历数据便于老人发生意外时提供更好的诊断依据 <br />打开模式下，所有紧急联系人均可见<br /> 关闭模式下，仅第一紧急联系人及发生意外时医生可见</span>
						<!--<span class="next">进一步了解</span>-->
					</p>
				</div>
				<div class="layered">
					<img src="../../../../static/img/watchPage/privacyPage/section3-1.png" class="section1-1"/>
				</div>	
			</div>
		</div>
		<div id="close"><router-link to = "watchPage" tag = "p">关闭</router-link></div>
	</div>
</template>

<script>
	export default{		
		mounted:function(){
			console.log("after");
			console.log(this.$refs.watchBody)
			this.$refs.watchBody.scrollTop = 0
		}
	}
</script>

<style scoped="">
	@import "../../../../static/css/watch/public.css";
	@import "../../../../static/css/watch/privacyPage.css";
</style>