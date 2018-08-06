import Vue from 'vue'
import Vuex from 'vuex'

import menu from './module/menu.js'
import users from './module/users.js'
import status from './module/status.js'

Vue.use(Vuex)
export const store = new Vuex.Store({
	//通过 store.state 来获取状态对象
	modules:{
		menu,
		users,
		status,
	}
})