<template>
  <div id="app">
  	<div class="container">
  		<appHeader></appHeader>
  	</div>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="container">
      <div class="row">
        <!-- router-view赋值name进行复用 ，显示对应的内容-->
        <div class="col-sm-12 col-md-4">
          <router-view name="orderingGuide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
  	appHeader:Header
  },
}
</script>

<style>

</style>
