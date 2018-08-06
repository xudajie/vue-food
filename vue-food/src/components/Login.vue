<template>
  <div class="row mt-3">
  	<div class="col-md-12 col-lg-12">
  		<div class="card">
  			<div class="card-body">
  				<img class="mx-auto d-block" src="../../src/assets/icon.png">
  				<form @submit.prevent="onSubmit">
  					<div class="form-group">
  						<label for="email">邮箱</label>
  						<input class="form-control" type="email" v-model="email">
  					</div>
  					<div class="form-group">
  						<label for="password">密码</label>
  						<input class="form-control" type="password" v-model="password">
  					</div>
  					<button class="btn btn-success btn-block">登录</button>
  				</form>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      email:'',
      password:'',
    }
  },
  //组建内守卫，只要点击退出跳转到login页面，让当前用户清空
  beforeRouteEnter(to,from,next){
    next(vm=>vm.$store.dispatch("setUser",null))
  },
  methods:{
  	onSubmit(){
  		axios.get('/users.json').then((response)=>{
  			const data = response.data;
  			const users = [];
  			// 遍历对象
  			for(let key in data){
  				const user = data[key];
  				users.push(user);
  			}
  			let result = users.filter((user)=>{
  				return user.email === this.email && user.password === this.password
  			})
  			if(result != null && result.length > 0){
          this.$store.dispatch("setUser",result[0].email)
  				this.$router.push({name:'homeLink'})
  			}else{
  				alert('账号或密码不正确');
          this.$store.dispatch("setUser",null)
  			}
  		})
  	}
  }
}
</script>


<style scoped>

</style>
