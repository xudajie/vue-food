const state = {
	isLogin:false,
}
const getters = {
	getIsLogin:state=>state.isLogin
}
const mutations = {
	//更改用户状态信息
	userStatus(state,user){
		if(user){
			state.isLogin = true
		}else{
			state.isLogin = false
		}
	}
}
const actions = {

}
export default {
	state,
	getters,
	mutations,
	actions,
}