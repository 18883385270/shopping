<template>
  <div>
    <mi-header title="订单管理" ></mi-header>
    <div class="emptybox" v-if="!StoreOrders.length">
      <svg>
        <use xlink:href="#emptyline"></use>
      </svg>
      <p> 您没有订单哟</p>
    </div>
    
  </div>
</template>

<script>
import header from '../../../components/header.vue'
import * as api from '../../../api/storeorder'

export default {
  components:{
    'mi-header':header
  },
  data(){
    return{
      StoreOrders:[]
    }
  },
  mounted(){
    //加载商品
    			
    let params = {};
    api.StoreOrdersApi(params).then(
      res => {
        if (res.data.Code == 200) {
          this.StoreOrders=res.data.StoreOrders;
        } else {
          console.log(res.data.Message);
        }
      },
      err => {
        console.log('网络错误');
      }
    )
  },
  methods:{
    
  }
}
</script>


<style lang="less" scoped>
  
</style>

