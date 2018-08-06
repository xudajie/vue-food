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
  					<div class="form-group">
  						<label for="confirmPassword">确认密码</label>
  						<input class="form-control" type="password" v-model="confirmPassword">
  					</div>
  					<button class="btn btn-success btn-block">注册</button>
  				</form>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',
  data () {
    return {
      email:'',
      password:'',
      confirmPassword:''
    }
  },
  methods:{
  	onSubmit(){
  		if(this.password === this.confirmPassword){
  			const data = {
  				email:this.email,
  				password:this.password,
  				confirmPassword:this.confirmPassword,
  			}
  			axios.post('/users.json',data).then((response)=>{
  				this.$router.push({name:'loginLink'})
  			})
  		}else{
  			alert('密码不一致');
  		}
  	}
  }
}
</script>


<style scoped>

</style>
