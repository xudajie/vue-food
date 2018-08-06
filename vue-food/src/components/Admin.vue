<template>
  <div class="admin">
    <div class="row">
      <div class="col-sm-12 col-md-8">
        <app-new-pizza></app-new-pizza>
      </div>
      <div class="col-sm-12 col-md-4">
        <h3 class="text-muted my-5">菜单</h3>
        <table class="table table-default">
          <thead>
            <tr>
              <td>类型</td>
              <td>删除</td>
            </tr>
          </thead>
          <tbody v-for="item in getMenuItems" :key="item.name">
            <tr>
              <td>{{ item.name }}</td>
              <td>
                <button @click="deleteItem(item)" class="btn btn-outline-danger">&times;</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import NewPizza from './NewPizza.vue'

export default {
  name: 'Admin',
  data () {
    return {
    }
  },
  components:{
    "app-new-pizza":NewPizza
  },
  computed:{
    getMenuItems(){
      //在vuex中通过getters获取数据
      return this.$store.getters.getMenuItems;
    }
  },
  created(){
    fetch("https://wd3325482313fptybg.wilddogio.com/menu.json").then(res=>res.json()).then(data=>{
      let arrItems = [];
      for(let key in data){
        data[key].id = key;
        arrItems.push(data[key]);
      }
      //数据同步
      this.$store.commit("setMenuItems",arrItems)
    }).catch(err=>console.log(err));
  },
  methods:{
    deleteItem(item){
      fetch("https://wd3325482313fptybg.wilddogio.com/menu/"+item.id+"/.json",{
        method:"delete",
        headers:{
          "Content-type":"application/json"
        }
      }).then(res=>res.json).then(data=>{
        this.$store.commit("removeMenuItem",item)
      }).catch(err=>console.log(err))
    }
  }

}
</script>


<style scoped>

</style>
