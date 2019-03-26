import Vue from 'vue'
import Router from 'vue-router'
import HomeNav from '@/components/common/HomeNav.vue'
Vue.use(Router)

export default new Router({
	// mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeNav
    },{
      path:'/watchPage',
      name:'watchPage',
      component:function(resolve){ require(['../components/model/watchPage/watchPage.vue'],resolve)}   
    },{
	  path:'/sosPage',
      name:'sosPage',
      component:function(resolve){ require(['../components/model/watchPage/sosPage.vue'],resolve)}
    },{
	  path:'/privacyPage',
      name:'privacyPage',
      component:function(resolve){ require(['../components/model/watchPage/privacyPage.vue'],resolve)}
    },{
	  path:'/quickOperation',
      name:'quickOperation',
      component:function(resolve){ require(['../components/model/watchPage/quickOperation.vue'],resolve)}
    },{
	  path:'/designIdea',
      name:'designIdea',
      component:function(resolve){ require(['../components/model/watchPage/designIdea.vue'],resolve)}
    },{
	  path:'/dataSubPage',
      name:'dataSubPage',
      component:function(resolve){ require(['../components/model/watchPage/dataSubPage.vue'],resolve)}
    },{
	  path:'/operatingSystem',
      name:'operatingSystem',
      component:function(resolve){ require(['../components/model/watchPage/operatingSystem.vue'],resolve)}
    },{
      path:'/batteryLevel',
      name:'batteryLevel',
      component:function(resolve){ require(['../components/model/watchPage/batteryLevel.vue'],resolve)}
    },{
      path:'/voiceAssistant',
      name:'voiceAssistant',
      component:function(resolve){ require(['../components/model/watchPage/voiceAssistant.vue'],resolve)}
    },{
	  path:'/watchParts',
      name:'watchParts',
      component:function(resolve){ require(['../components/model/watchPage/watchParts.vue'],resolve)}
    },{
	  path:'/watchBand',
      name:'watchBand',
      component:function(resolve){ require(['../components/model/watchPage/watchParts/watchBand.vue'],resolve)}
    },{
	  path:'/rechargeStand',
      name:'rechargeStand',
      component:function(resolve){ require(['../components/model/watchPage/watchParts/rechargeStand.vue'],resolve)}
    },{
	  path:'/healthy',
      name:'healthy',
      component: HomeNav,
      children:[
      	{
	      path:'/',
	      name:'healthypage',
	      component: function(resolve){ require(['../components/model/healthyPage/healthyPage.vue'],resolve)}
	    }
      ]
   },{
      path:'/healthyData',
      name:'healthyData',
      component: function(resolve){ require(['../components/model/healthyPage/healthyData.vue'],resolve)}
    },{
      path:'/earlyWarningReport',
      name:'earlyWarningReport',
      component: function(resolve){ require(['../components/model/healthyPage/earlyWarningReport.vue'],resolve)}
    },{    	
	  path:'/healthySos',
      name:'healthySos',
      component: function(resolve){ require(['../components/model/healthyPage/healthySos.vue'],resolve)}
    },{
	  path:'/careReminder',
      name:'careReminder',
      component: function(resolve){ require(['../components/model/healthyPage/careReminder.vue'],resolve)}
    },{
	  path:'/healthyRecord',
      name:'healthyRecord',
      component: function(resolve){ require(['../components/model/healthyPage/healthyRecord.vue'],resolve)}
    },{
	  path:'/healthyQuick',
      name:'healthyQuick',
      component: function(resolve){ require(['../components/model/healthyPage/healthyQuick.vue'],resolve)}
    },{
	  path:'/healthyCustomSetup',
      name:'healthyCustomSetup',
      component: function(resolve){ require(['../components/model/healthyPage/healthyCustomSetup.vue'],resolve)}
    },{
	  path:'/healthyPrivacy',
      name:'healthyPrivacy',
      component: function(resolve){ require(['../components/model/healthyPage/healthyPrivacy.vue'],resolve)}
    },{	
	  path:'/solutionHome',
      name:'solutionHome',
      component: HomeNav,
      children:[
      	{
	      path:'/',
	      name:'solutionHome',
	      component: function(resolve){ require(['../components/model/solutionPage/solutionHome.vue'],resolve)}
	    },{
	      path:'/solutionHealthy',
	      name:'solutionHealthy',
	      component: function(resolve){ require(['../components/model/solutionPage/solutionHealthy.vue'],resolve)}
	    },{
	      path:'/solutionCommunity',
	      name:'solutionCommunity',
	      component: function(resolve){ require(['../components/model/solutionPage/solutionCommunity.vue'],resolve)}
	    }
      ]
   }
  ],
  scrollBehavior (to, from, savedPosition) {
	  return { x: 0, y: 0 }
	}
})
