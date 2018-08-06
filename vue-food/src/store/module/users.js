const state = {
	currentUser:null,
}
const getters = {
	// getCurrentUser:state=>state.currentUser
	getCurrentUser(state){
		return state.currentUser
	}
}
const mutations = {
	//更改用户状态信息
	userStatus(state,user){
		if(user){
			state.currentUser = user
		}else{
			state.currentUser = null
		}
	}
}
const actions = {
	//应用mutations(变化，改变)
	setUser({commit},user){
		commit("userStatus",user)
	}
}
export default {
	state,
	getters,
	mutations,
	actions,
}