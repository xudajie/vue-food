import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'


//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

//三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'

export const routes = [
		//路由名字实现路由跳转
		{path:'/',name:'homeLink',components:{
			//router-view复用
			default:Home,
			'orderingGuide':OrderingGuide,
			'delivery':Delivery,
			'history':History,
		}},
		{path:'/menu',name:'menuLink',component:Menu},
		{
			path:'/admin',
			name:'adminLink',
			component:Admin,
			// beforeEnter:(to,from,next)=>{
				//路由独享守卫
				// alert('非登录状态，不能访问此页面');
				// next(false);//无法跳转到该路由
				// router.beforeEach((to,from,next)=>{
				// if(to.path == '/login' || to.path == '/register'){
				// 	//只显示login/register的内容
				// 	next();
				// }else{
				// 	alert('您还没有登录，请先登录！');
				// 	//跳转到login页面
				// 	//next({path:'/login'});
				// 	next('/login');
				// }
			// },
		},
		{
			path:'/about',
			name:'aboutLink',
			component:About,
			// 让他默认显示当前路径的路由的内容
			redirect:'/about/contact',
			children:[
				{
					path:'/about/contact',
					name:'contactLink',
					component:Contact,
					children:[
						{path:'/about/contact/phone',name:'phoneNumber',component:Phone},
						{path:'/about/contact/personname',name:'personName',component:PersonName},
					],

				},
				{path:'/delivery',name:'deliveryLink',component:Delivery},
				{path:'/history',name:'historyLink',component:History},
				{path:'/orderingGuide',name:'orderingGuideLink',component:OrderingGuide},
			]
		},
		{path:'/login',name:'loginLink',component:Login},
		{path:'/register',name:'registerLink',component:Register},
		// 如果用户在浏览器地址输入不正确的地址一律跳转到主页
		// redirect：改变路线,找不到默认跳转到主页
		{path:'*',redirect:'/'},
	]