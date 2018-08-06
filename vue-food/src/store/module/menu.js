const state = {
	//设置属性的状态
	menuItems:{},
}
const getters = {
	//获取属性的状态
	getMenuItems:state=>state.menuItems
}
const mutations = {
	//改变属性的状态
	//通过 store.commit 方法触发状态变更
	setMenuItems(state,data){
		state.menuItems = data
	},

	//将匹配到的对象，在menuItems数组中删除
	removeMenuItem(state,data){
		state.menuItems.forEach((item,index)=>{
			if(item == data){
				state.menuItems.splice(index,1);
			}
		})
	},

	// 将新添加的push到menuItems
	pushToMenuItem(state,data){
		state.menuItems.push(data);
	},
}
const actions = {

}
export default {
	state,
	getters,
	mutations,
	actions,
}