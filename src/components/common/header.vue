<template>
	<div id="header">
		<div class="head">			
			<img src="../../../static/img/logo.png" class="logo"/>
			<span class="iconList" @click="toggleList">
				<img src="../../../static/img/exit_icon.png" class="list" :class="{no:isListA}"/>
				<img src="../../../static/img/list_icon.png" class="list" :class="{sel:isListB}"/>
			</span>			
		</div>
		<ul id="headerCon" v-show="isListA">
			<li class="">首页</li>
			<li :class="{active:isActive}" class="watch" @click="toggleChild">智能腕表<img src="../../../static/img/to_bottom.png" class="toBottom" :class="{active:isActive}"/>
			<img src="../../../static/img/to_right.png" class="toRight" :class="{active1:isActive}"/></li>		
				<ul class="child" v-show='isActive'>			    	
					<li @click="toggleList"><router-link to="watchPage" tag="li">概述</router-link></li>
			    	<li @click="toggleList"><router-link to="designIdea" tag="li">设计</router-link></li>
			    	<li>参数</li>
			    	<li><router-link to="operatingSystem" tag="li">操作系统</router-link></li>			    	
			    	<li><router-link to="watchParts" tag="li">配件</router-link></li>			    	
			    	<li>产品与服务</li>	
			    	<li class="btn1"></li>
			    </ul>
			<router-link to="healthy" tag="li">锦穗健康</router-link>
			<router-link to="solutionHome" tag="li">解决方案</router-link>
			<li class="">锦穗云</li>
			<li class="">服务与支持</li>
		</ul>
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
	      isActive: 'false',
	      toBottom:'toBottom',
	      isListA:false,
	      isListB:true,
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
	  	},	  
		 toggleList(){
		  	let _this = this;
		  	if(_this.isListA){
		  		_this.isListA = false,
		  		_this.isListB = true
		  	}else{
		  		_this.isListA = true,
		  		_this.isListB = false
		  	}
		}
	 }
	};
</script>

<style scoped="scoped">
	#header{
		width: 100%;
		background: #25262b;		
		height: 48px;
		position: relative;
		z-index: 9999;
	}	
	#header .head{
		width: 100%;
		display: block;
		height: 48px;		
		box-sizing: border-box;
		/* border-bottom: 1px solid rgba(153,153,153,0.5); */
	}
	.logo{
		float: left;
		width: 20px;
		height: 20px;
		margin: 14px 0;
		margin-left: 0.267rem;
	}
	.iconList{
		display: block;
		width: 20px;
		height: 48px;
		float: right;
		margin-right: 0.267rem;
	}
	.list{
		display: none;
	}
	.list.no{
		display: block;
		margin: 18px 0;
		width: 12px;
		height: 12px;
		float: right;
	}
	.list.sel{
		display: block;
		width: 20px;
		height: 16px;
		margin: 16px 0;
		float: right;
	}
	#headerCon{
		display: block;		
		width: 100%;
		background: #25262b;
		position: absolute;
		top: 48px;
		left: 0;
		border-top: 1px solid rgba(153,153,153,0.5);
	}
	#headerCon + .head{
		border-bottom: none;
		color: #f00;
		height: 300px;
	}
	.headerCon>.li{
		display: block;
		height: 54px;
		line-height: 54px;		
		border-bottom: 1px solid rgba(153,153,153,0.5);
		text-align: left;
		color: rgba(255,255,255,0.6);
		font-size: 14px;		
	}
	#headerCon>li{
		display: block;
		height: 54px;
		line-height: 54px;		
		border-bottom: 1px solid rgba(153,153,153,0.5);
		text-align: left;
		color: rgba(255,255,255,0.6);
		font-size: 14px;
		margin: 0 0.53rem;
	}
	#headerCon>li:last-of-type{
		border-bottom: none;
	}
	.child{
		width: 10rem;
		padding: 10px 0 0;
	}
	.child>li{
		height: 34px;
		line-height: 34px;
		background: #25262B;
		padding: 0 0.53rem;
		display: block;	
		text-align: left;
		color: rgba(255,255,255,0.6);
		font-size: 14px;
	}
	.child>li:link{
		background: rgba(255,255,255,0.2);
	}
	.child>li:visited{
		background: rgba(255,255,255,0.2);
	}	
	.child>li:hover{
		background: rgba(255,255,255,0.2);
		color: #fff;
	}
	#headerCon>li.watch.active{
		color: #fff;
	}
	.child>li:nth-last-of-type(2){
		margin-bottom: 10px;
	}
	.child>li.btn1{
		display: block;
		margin: 0 0.53rem;
		height: 1px;
		background: rgba(153,153,153,0.5);
	}
	.toBottom.active{
		float: right;
		display: block;
		width: 14px;
		height: 7px;
		margin-top: 23.5px;
	}
	.toBottom{
		display: none;
	}
	.toRight{
		display: block;
		float: right;
		width: 7px;
		height: 14px;
		margin-top: 20px;
	}
	.toRight.active1{
		display: none;
	}
</style>