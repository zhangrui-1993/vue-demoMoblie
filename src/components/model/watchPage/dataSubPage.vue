<template>
	<div class="dataSubPage">
		<div class="watchBody">
			<div class="page page1">
				<div class="layered">
					<p class="text"> 
						<span class="title">三色标识</span>
						<span class="con">健康状况用色块显示，一目了然 </span>
					</p>
				</div>
				<div class="layered img_box">
					<div>
						<img src="../../../../static/img/watchPage/dataSubPage/section1-4.png" class="section1-1 section_w269"/>
						<span class="img_tips">绿色代表健康</span>
					</div>
					<div>
						<img src="../../../../static/img/watchPage/dataSubPage/section1-2.png" class="section1-1 section_w269"/>
						<span class="img_tips">黄色代表亚健康</span>
					</div>
					<div>
						<img src="../../../../static/img/watchPage/dataSubPage/section1-1.png" class="section1-1 section_w269"/>
						<span class="img_tips">红色代表不健康</span>
					</div>
				</div>
			</div>
			<div class="page page2">
				<div class="layered">
					<p class="text"> 
						<span class="title">所有数据</span>
						<span class="con">PPG传感器、生理脉搏心脏ECG监测传感器<br />等多种传感器通过大数据算法得出数据</span>
					</p>
				</div>
				<div class="layered">
					<img src="../../../../static/img/watchPage/dataSubPage/section2-1.png" class="section1-1 section_w303"/>
				</div>	
			</div>		
			<div class="page page3">
				<div class="layered">
					<div class="" v-for="(item,$index) in items" @click="selectStyle(item,$index)" :class="{'active':item.active,'unactive':!item.active}">
						<img :src="item.nor_url" class="section_icon section_w56" v-show="!item.active"/>
						<img :src="item.sel_url" class="section_icon section_w56" v-show="item.active"/>
						<span class="img_tips">{{item.val}}</span>
					</div>					
				</div>
			</div>
		</div>
		<div id="close"><router-link to = "watchPage" tag = "p">关闭</router-link></div>
	</div>
</template>

<script>
	import obj_src_sel_1 from '../../../../static/img/watchPage/dataSubPage/section2-icon-1-1.png'
	import obj_src_nor_1 from '../../../../static/img/watchPage/dataSubPage/section2-icon-1-2.png'
	import obj_src_sel_2 from '../../../../static/img/watchPage/dataSubPage/section2-icon-2-1.png'
	import obj_src_nor_2 from '../../../../static/img/watchPage/dataSubPage/section2-icon-2-2.png'
	import obj_src_sel_3 from '../../../../static/img/watchPage/dataSubPage/section2-icon-3-1.png'
	import obj_src_nor_3 from '../../../../static/img/watchPage/dataSubPage/section2-icon-3-2.png'
	import obj_src_sel_4 from '../../../../static/img/watchPage/dataSubPage/section2-icon-4-1.png'
	import obj_src_nor_4 from '../../../../static/img/watchPage/dataSubPage/section2-icon-4-2.png'
	import obj_src_sel_5 from '../../../../static/img/watchPage/dataSubPage/section2-icon-5-1.png'
	import obj_src_nor_5 from '../../../../static/img/watchPage/dataSubPage/section2-icon-5-2.png'
	import obj_src_sel_6 from '../../../../static/img/watchPage/dataSubPage/section2-icon-6-1.png'
	import obj_src_nor_6 from '../../../../static/img/watchPage/dataSubPage/section2-icon-6-2.png'
	import obj_src_sel_7 from '../../../../static/img/watchPage/dataSubPage/section2-icon-7-1.png'
	import obj_src_nor_7 from '../../../../static/img/watchPage/dataSubPage/section2-icon-7-2.png'
	import obj_src_sel_8 from '../../../../static/img/watchPage/dataSubPage/section2-icon-8-1.png'
	import obj_src_nor_8 from '../../../../static/img/watchPage/dataSubPage/section2-icon-8-2.png'
	export default {
	  data() {
	    return {
	      isActive: true,
	      active:false,
	      items:[
		      {sel_url:obj_src_sel_1,nor_url:obj_src_sel_1,val:'心率'},
		      {sel_url:obj_src_sel_2,nor_url:obj_src_nor_2,val:'心电图'},
		      {sel_url:obj_src_sel_3,nor_url:obj_src_nor_3,val:'血压'},
		      {sel_url:obj_src_sel_4,nor_url:obj_src_nor_4,val:'血氧饱和度'},
		      {sel_url:obj_src_sel_5,nor_url:obj_src_nor_5,val:'体温'},
		      {sel_url:obj_src_sel_6,nor_url:obj_src_nor_6,val:'疲劳度'},
		      {sel_url:obj_src_sel_7,nor_url:obj_src_nor_7,val:'睡眠'},
		      {sel_url:obj_src_sel_8,nor_url:obj_src_nor_8,val:'运动'},
	      ]
	    };
	  },
	  methods:{
	  	selectStyle(item,index){	  		
//	  		this.$nextTick(function () {
//	　　　　　　　　this.items.forEach(function (item) {
//	　　　　　　　　　　Vue.set(item,'active',false);
//	　　　　　　　　});
//	　　　　　　　　Vue.set(item,'active',true);
//	　　　　　　});
			console.log(index)
			   this.items.forEach(function (item) {
	　　　　　　　　　　Vue.set(item,'active',false);
	　　　　　　　　});
	　　　　　　　　Vue.set(item,'active',true);
	  	}
	  }
	}
</script>

<style scoped="">
	@import "../../../../static/css/watch/public.css";
	@import "../../../../static/css/watch/dataSubPage.css";
</style>