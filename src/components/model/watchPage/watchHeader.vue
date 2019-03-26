<template>
	<div id="watchHeader">
		<div :class="{active:isActive}" class="watch" @click="toggleChild"><span>智能腕表</span><img src="../../../../static/img/to_bottom.png" class="toBottom" :class="{active:isActive}"/>
		<img src="../../../../static/img/to_right.png" class="toRight" :class="{active1:isActive}"/></div>		
		<ul class="child" v-show='isActive'>
	    	<li>概述</li>
	    	<li><router-link to="designIdea" tag="li">设计</router-link></li>
	    	<li>参数</li>
	    	<li><router-link to="operatingSystem" tag="li">操作系统</router-link></li>			    	
	    	<li><router-link to="watchParts" tag="li">配件</router-link></li>			    	
	    	<li>产品与服务</li>	
	    </ul>
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
//	    	activeNames:[1],
	      isActive: false,
	      toBottom:'toBottom',
	    };
	  },
	  methods: {
	  	toggleChild(){
	  		let _this = this;
	  		if(_this.isActive){
	  			_this.isActive = false;
	  		}else{
	  			_this.isActive = true;
	  		}	  		
	  	}
	  }
	}
</script>

<style scoped="scoped">
	#watchHeader{
		background: rgba(37,38,43,0.9);
		height: 40px;
		position: relative;
		z-index: 999;
	}
	.watch{
		height: 40px;
		line-height: 40px;
		color: #fff;
		/*background: rgba(37,38,43,0.9);*/
		padding: 0 0.4rem;
		display: block;	
		text-align: left;

		font-size: 14px;
	}
	.child{
		width: 10rem;
		padding-bottom: 10px;
		position: absolute;
		top: 40px;
		z-index: 100;
		background: rgba(37,38,43,0.9);
	}
	.child>li{
		height: 33px;
		line-height: 33px;
		padding: 0 0.53rem;
		display: block;	
		text-align: left;
		color: rgba(255,255,255,0.6);
		font-size: 14px;
		border: none;

	}
	.child>li:hover{
		background: rgba(255,255,255,0.2);
		color: #fefefe;
	}
	.watch>span{
		display: inline-block;
		width: auto;
		float: left;
	}
	.watch>img{
		float: left;
		display: inline-block;
		margin-left: 20px;
	}
	.watch.active{
		color: #fff;
	}
	.child>li.btn1{
		display: block;
		margin: 0 0.53rem;
		height: 1px;
		/*background: rgba(153,153,153,0.5);*/
	}
	.watch.active{
		color: #fff;
	}
	.watch>img.toBottom.active{
		display: block;
		width: 12px;
		height: 6.5px;
		margin-top: 16.5px;
	}
	.watch>img.toBottom{
		display: none;
	}
	.watch>img.toRight{		
		display: block;
		width: 7px;
		height: 14px;
		margin-top: 13px;
	}
	.watch>img.toRight.active1{
		display: none;
	}
</style>