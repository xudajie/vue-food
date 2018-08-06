<template>
    <div class="row">
      <div id="home" class="col-sm-12 text-center">
        <div class="background">
          <h1>欢迎品尝我们的Pizza!</h1>
          <h2>这里有各种各样的Pizza!欢迎尝试！</h2>
          <button @click="goToLink" class="btn btn-success">跳转</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
  	return {
  	}
  },
  methods:{
  	goToLink(){
  		//跳转到上一次浏览页面
  		// this.$router.go(-1);
  		
  		//跳转到指定路由的地址
  		// this.$router.replace('/menu');
  		
  		//跳转到指定路由的名字
  		// this.$router.replace({name:'menuLink'});
  		
  		//一般使用push进行路由的跳转
  		// this.$router.push('/admin');
  		this.$router.push({name:'adminLink'});
  	}
  }
}
</script>


<style scoped>
#home{
  background: url(../../src/assets/pizza.jpg);
  height: 85vh;
  padding: 10%;
}
h1,h2{
  margin: 6%;
}
.background{
  background: #eee;
  opacity: .8;
  max-width: 70vw;
  padding: 20px 0;
}
</style>
