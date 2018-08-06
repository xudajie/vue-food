<template>
  <div class="contact">
    <div class="card text-dark bg-light mb-3">
    	<div class="card-header">联系我们</div>
    	<div class="card-body">
    		<h4 class="card-title">联系我们</h4>
    		<p class="card-text">1083611303@qq.com</p>
    		<router-link :to="{name:'personName'}">联系人</router-link>
    		<router-link :to="{name:'phoneNumber'}">联系方式</router-link>
    		<router-view></router-view>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
    }
  }
}
</script>


<style scoped>

</style>
