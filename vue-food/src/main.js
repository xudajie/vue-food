// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import {routes} from './routes'
import axios from 'axios'
import {store} from './store/store'

Vue.config.productionTip = false
Vue.use(VueRouter)


//配置默认根路径，以后需要用到axios直接添加文件名即可
axios.defaults.baseURL = 'https://wd3325482313fptybg.wilddogio.com/'

//配置Vue原型(在任何组建都可以正常使用axios,不需要import,直接使用this.http.get/post)
Vue.prototype.http = axios

const router = new VueRouter({
	mode:'history',
	routes,
	// 路由控制滚动行为
	scrollBehavior(to,from,savedPosition){
		//当浏览器出发前进后退时，才触发
		// return {selector:'.btn'}
		if(savedPosition){
			return savedPosition;
		}else{
			return {x:0,y:0}
		}
	}
})

//全局守卫
// router.beforeEach((to,from,next)=>{
// 	if(to.path == '/login' || to.path == '/register'){
// 		//只显示login/register的内容
// 		next();
// 	}else{
// 		alert('您还没有登录，请先登录！');
// 		//并跳转到login页面
// 		//next({path:'/login'});
// 		next('/login');
// 	}
// })

//后置钩子函数,不管你跳转到哪个路由，都会显示该路由的内容
// router.afterEach((to,from)=>{
// 	alert('after each');
// })

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
