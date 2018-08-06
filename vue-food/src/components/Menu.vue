<template>
  <div class="menu">
    <div class="row">
    	<div class="col-sm-12 col-md-8">
    		<table class="table">
    			<thead class="thead-default">
    				<tr>
    					<th><strong>尺寸</strong></th>
    					<th><strong>价格</strong></th>
    					<th><strong>加入</strong></th>
    				</tr>
    			</thead>
    			<tbody v-for="item in getMenuItems" :key="item.name">
    				<tr>
    					<td><strong>{{item.name}}</strong></td>
    				</tr>
    				<tr v-for="option in item.options" :key="option.size">
    					<td>{{option.size}}</td>
    					<td>{{option.price}}</td>
    					<td>
    						<button @click="addToBasket(item,option)" class="btn btn-sm btn-outline-success">+</button>
    					</td>
    				</tr>
    			</tbody>
    		</table>
    	</div>
    	<div v-if="basket.length>0" class="col-sm-12 col-md-4">
    		<table class="table">
    			<thead class="thead-default">
    				<tr>
    					<td><strong>数量</strong></td>
    					<td><strong>品种</strong></td>
    					<td><strong>价格</strong></td>
    				</tr>
    			</thead>
    			<tbody v-for="item in basket">
    				<tr>
    					<td>
    						<button @click="decreaseItem(item)" class="btn btn-sm">-</button>
    						<span>{{item.quantity}}</span>
    						<button @click="increaseItem(item)" class="btn btn-sm">+</button>
    					</td>
    					<td>{{item.name}}{{item.size}}</td>
    					<td>{{item.price * item.quantity}}</td>
    				</tr>
    			</tbody>
    		</table>
    		<p>总价:{{total+'RMB'}}</p>
    		<button class="btn btn-success btn-block">提交</button>
    	</div>
    	<div v-else class="col-sm-12 col-md-4">
    		<p>购物车里还没有添加商品！</p>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      	basket:[],
	    }
  },
  computed:{
    getMenuItems(){
      //在vuex中通过getters获取数据
      return this.$store.getters.getMenuItems;
    },
  	total(){
  		let totalCost = 0;
  		for(let index in this.basket){
  			totalCost += this.basket[index].quantity * this.basket[index].price;
  		}
  		return totalCost;
  	}
  },
  created(){
    this.fetchData();
  },
  methods:{
    fetchData(){
      // fetch("https://wd3325482313fptybg.wilddogio.com/menu.json").then(res=>res.json()).then(data=>{
      //   this.getMenuItems = data;
      //   console.log(this.getMenuItems)
      // })
      // 将请求下来的数据存储到vuex中
      this.http.get('menu.json').then(res=>this.$store.commit("setMenuItems",res.data))
    },
  	addToBasket(item,option){
  		let newItem = {
  			name:item.name,
  			size:option.size,
  			price:option.price,
  			quantity:1,
  		};
  		if(this.basket.length>0){
  			//过滤
  			let result = this.basket.filter((bskt)=>{
  				return (bskt.name === item.name && bskt.price === option.price);
  			});
  			console.log(result);
  			if(result != null && result.length>0){
  				result[0].quantity ++;
  			}else{
  				this.basket.push(newItem);
  			}
  		}else{
  			this.basket.push(newItem);
  		}
  	},
  	decreaseItem(item){
  		item.quantity--;
  		if(item.quantity<=0){
  			this.removeItem(item);
  		}
  	},
  	increaseItem(item){
  		item.quantity++;
  	},
  	removeItem(item){
  		//如果购物车没有商品就直接删除
  		this.basket.splice(this.basket.indexOf(item),1);
  	}
  }
}
</script>


<style scoped>

</style>
