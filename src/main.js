// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Collapse, CollapseItem } from 'vant';
import headerTop from "@/components/common/header.vue"
import footerBottom from "@/components/common/footer.vue"
import headerErTop from "@/components/model/watchPage/watchHeader.vue"
//引用头部
Vue.component("head-view",headerTop);
Vue.component("foot-view",footerBottom);
Vue.component("head-er-view",headerErTop);
Vue.use(Collapse).use(CollapseItem);
Vue.config.productionTip = false

//通过beforeEach来判断用户是否登录，如果登录继续加载组件，没有进入login
//router.beforeEach((to, from, next) => {
//  if (to.path == '/login') {
//      sessionStorage.removeItem('user');
//  }
//  let user = JSON.parse(sessionStorage.getItem('user'));
//  console.log(user)
//  console.log(to.path)
//  if (!user && to.path != '/login') {
//      next({ path: '/login' })
//  } else{
//      next()
//  }
//})
router.afterEach((to,from,next) => {
	let _this=this;
	console.log("afterEach")
	console.log(document.querySelector("#watchBody"))
//	console.log(_this.$refs)
//	console.log(window)
// document.querySelector("#watchBody").scrollTo(0,0);
//	next(vm=>{
//		console.log(vm)
//	})
// var scrollT = document.body.scrollTop|| document.documentElement.scrollTop
//console.log($("#watchBody"))
//console.log($("#watchBody").scrollTop())
//	window.scrollTo(0,0);
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
