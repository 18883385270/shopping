/*
我的订单
*/
<template>
  <div class="ordspage">
      <mi-header title="我的订单"></mi-header>
      <mi-category :CurrentIndex="CurrentIndex" :categorys="StoreOrderStatus" @categoryChanged="categoryChangedHandle"></mi-category>
      <mi-orderlist :StoreOrders="StoreOrders"></mi-orderlist>
  </div>
</template>

<script>
import header from '../../../components/header.vue';
import category from '../../../components/category.vue';
import orderlist from './orderlist.vue';
import * as api from '../../../api/storeorder'
import * as checkJs from '../../../utils/pubfunc'

export default {
  components:{
      'mi-header':header,
      'mi-category':category,
      'mi-orderlist':orderlist
  },
  data(){
    return {
      StoreOrderStatus:['全部','待发货','待收货','待评价','退款中','退货退款','完成'],
      StoreOrderStatusValue:['All','Placed', 'Expressing','Success','OnlyRefund','ReturnAndRefund','Closed'],
      StoreOrders:[],
      CurrentIndex:0,
      CurrentPage:0,
      NotAnyMore:false
    }
  },
  mounted(){
    if(!checkJs.isNullOrEmpty(sessionStorage.MyOrderStatusIndex)){
        this.CurrentIndex=sessionStorage.MyOrderStatusIndex
    }
    this.fetchData(this.CurrentIndex,this.CurrentPage);
  },
  methods:{
    categoryChangedHandle(index){
        this.CurrentIndex=index;
        this.CurrentPage=0;
        this.NotAnyMore=false;
        this.StoreOrders.splice(0,this.StoreOrders.length);//清空数据
        this.fetchData(this.CurrentIndex,this.CurrentPage);
    },
    fetchData(index,page){
      //加载用户订单
        let params = {
            Status:this.StoreOrderStatusValue[index],
            Page:page
        };
        api.UserOrdersApi(params).then(
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
    }
  }
}
</script>

<style lang="less" scoped>
  
</style>

