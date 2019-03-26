<template>
	<div id="footer">
		<ul class="tabs space_between">
			<li class="subs"><img src="../../../static/img/watchPage/footer/onlineService.png" class="onlineService"/><span>在线客服</span></li>
			<li class="subs"><img src="../../../static/img/watchPage/footer/retailCenter.png" class="retailCenter"/><span>零售店中心</span></li>
			<li class="subs"><img src="../../../static/img/watchPage/footer/serviceCentre.png" class="serviceCentre"/><span>服务中心查询</span></li>
		</ul>		
		<ul class="crumbs">
			<li><img src="../../../static/img/watchPage/footer/logo.png" class="logo"/></li>
			<li>智养腕表</li>
		</ul>
		<div class="service">
			<span class="icon-zuoji">服务热线010-5335 8647</span>
			<span class="icon-zuoji">服务时间10：00 ~ 19：30（周一 ~ 周六）</span>
		</div>
		<van-collapse v-model="activeNames" class="navList">
		  <van-collapse-item title="常见问题" name="1">
		    <ul class="child">			    	
				<router-link to="watchPage" tag="li">智养腕表</router-link>
		    	<router-link to="designIdea" tag="li">锦穗健康</router-link>
		    </ul>
		  </van-collapse-item>
		  <van-collapse-item title="了解产品" name="2">

		    <ul class="child">			    	
				<!--<router-link to="watchPage" tag="li">锦穗S1</router-link>
		    	<router-link to="designIdea" tag="li">锦穗S2</router-link>-->
		    	<router-link to="watchPage" tag="li">锦穗智养腕表</router-link>
		    	<router-link to="watchPage" tag="li">锦穗健康</router-link>
		    	<router-link to="designIdea" tag="li">锦穗云</router-link>
		    </ul>
		  </van-collapse-item>
		  <van-collapse-item title="解决方案" name="3">

		    <ul class="child">			    	
				<router-link to="watchPage" tag="li">智能医疗</router-link>
		    	<router-link to="designIdea" tag="li">智能健康</router-link>
		    	<router-link to="watchPage" tag="li">智能生活</router-link>
		    	<router-link to="designIdea" tag="li">智能社区</router-link>
		    	<li class="disabled">智能家居（相继开放中）</li>
		    </ul>
		  </van-collapse-item>
		   <van-collapse-item title="价值观" name="4">

		    <ul class="child">			    	
				<router-link to="watchPage" tag="li">社会责任</router-link>
		    	<router-link to="designIdea" tag="li">公益活动</router-link>
		    	<router-link to="watchPage" tag="li">团队价值观</router-link>
		    	<router-link to="designIdea" tag="li">隐私</router-link>
		    </ul>
		  </van-collapse-item>
		   <van-collapse-item title="关于锦穗" name="5">

		    <ul class="child">			    	
				<router-link to="watchPage" tag="li">公司简介</router-link>
		    	<router-link to="designIdea" tag="li">公司动态</router-link>
		    	<router-link to="watchPage" tag="li">公司氛围</router-link>
		    	<router-link to="designIdea" tag="li">公司历程</router-link>
		    	<router-link to="designIdea" tag="li">热招信息</router-link>
		    	<router-link to="designIdea" tag="li">企业培训</router-link>
		    </ul>
		  </van-collapse-item>
			<div class="title_val van-cell__title" title="隐私政策" name="6">隐私政策</div>
			<div class="title_val van-cell__title"  title="销售政策" name="6">销售政策</div>
			<div class="title_val van-cell__title"  title="法律声明" name="6">法律声明</div>
			<div class="title_val van-cell__title"  title="网站地图" name="6">网站地图</div>
		</van-collapse>
		<div class="footerTl">
			<span>© 2017-2018 鲲腾科技(北京)有限公司 版权所有 京ICP备18005745号-2</span>
			<span>京公安备案 11010502035149 号</span>
		</div>
	</div>
</template>

<script>
	export default{
		data (){
			return{
				activeNames : ['1','2']
			}
		}
	}
</script>

<style>
	@import "../../../static/css/footer.css";

	.adfasf{
		width: 100%;
		height: 20px;
	}
</style>