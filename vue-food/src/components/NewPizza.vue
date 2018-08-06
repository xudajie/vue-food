<template>
	<form>
		<h3 class="text-muted my-5">添加新的Pizza</h3>
		<div class="form-group row">
			<label class="col-sm-1">类型</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.name">
			</div>
		</div>
		<div class="form-group row">
			<label class="col-sm-1">描述</label>
			<div class="col-sm-11">
				<textarea rows="5" class="form-control" v-model="newPizza.description"></textarea>
			</div>
		</div>
		<p><strong>选项1</strong></p>
		<div class="form-group row">
			<label class="col-sm-1">尺寸</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.size1">
			</div>
		</div>
		<div class="form-group row">
			<label class="col-sm-1">价格</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.price1">
			</div>
		</div>
		<p><strong>选项2</strong></p>
		<div class="form-group row">
			<label class="col-sm-1">尺寸</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.size2">
			</div>
		</div>
		<div class="form-group row">
			<label class="col-sm-1">价格</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.price2">
			</div>
		</div>
		<div class="form-group row">
			<button @click="addMenuItem()" type="button" class="btn btn-success btn-block">提交</button>
		</div>
	</form>
</template>

<script>
	export default{
		data(){
			return {
				newPizza:{}
			}
		},
		methods:{
			addMenuItem(){
				let nPizza = {
					name:this.newPizza.name,
					description:this.newPizza.description,
					options:[
						{
							size:this.newPizza.size1,
							price:this.newPizza.price1,
						},
						{
							size:this.newPizza.size2,
							price:this.newPizza.price2,
						}
					],
				};
				fetch("https://wd3325482313fptybg.wilddogio.com/menu.json",{
					method:"post",
					headers:{
						"Content-type":"application/json"
					},
					/*
						body:要发送到后台的参数，可以为ArrayBuffer，String，FormData等类型;
						JSON.stringify() 方法是将一个JavaScript值(对象或者数组)转换为一个 JSON字符
					*/
					body:JSON.stringify(nPizza),
					////通过状态转换，转换为指定的格式，如果是文本信息，直接text()方法就可以；若为json格式，则json()就可以转换为json格式信息，其实也就是自己请求数据格式时所设置的格式；
				}).then(res=>res.json()).then(data=>{
					this.$store.commit("pushToMenuItem",nPizza)
				}).catch((err)=>{
					console.log(err);
				})
				// this.http.post("https://wd3325482313fptybg.wilddogio.com/menu.json",data).then(res=>{
				// 	this.$router.push({name:"menuLink"})
				// })
			}
		}
	}
</script>

<style scoped>
</style>