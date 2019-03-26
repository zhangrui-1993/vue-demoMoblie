<template>
	<div class="homeNav">
		<v-head></v-head>
		<!--<van-collapse v-model="activeNames" class="navList">
		  <van-collapse-item title="有赞微商城" name="1">
		    提供多样店铺模板，快速搭建网上商城
		  </van-collapse-item>
		  <van-collapse-item title="有赞零售" name="2">
		    网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
		  </van-collapse-item>
		  <van-collapse-item title="有赞美业" name="3" disabled>
		    线上拓客，随时预约，贴心顺手的开单收银
		  </van-collapse-item>
		</van-collapse>-->
		<router-link to="watchPage" tag="div">
			<!--<div class="watch_page">腕表首页</div>-->	
			
		</router-link>	
		<router-view></router-view>
		<!--  <div class="content">
            <router-view></router-view>
          <router-view></router-view>
        </div> -->
		<v-foot></v-foot>
	</div>
</template>

<script>
	import vHead from './header.vue';
	import vFoot from './footer.vue';
	export default{
		data (){
			return{
//				activeNames : ['1']
			}
		},
		components:{
			vHead,
			vFoot
		}
	}
</script>

<style>
	.watch_page{
		height: 50px;
		line-height: 50px;
		font-size: 20px;
		margin-left: 30px;
	}
</style>