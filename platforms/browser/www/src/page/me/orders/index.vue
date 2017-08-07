/*
我的订单
*/
<template>
  <div class="ordspage">
      <mi-header title="我的订单"></mi-header>
      <mi-category :categorys="categorys"></mi-category>
      <mi-orderlist></mi-orderlist>
  </div>
</template>

<script>
import header from '../../../components/header.vue';
import category from '../../../components/category.vue';
import orderlist from './orderlist.vue';

export default {
  components:{
      'mi-header':header,
      'mi-category':category,
      'mi-orderlist':orderlist
  },
  data(){
    return {
      categorys:['全部订单','待付款','待收货','待评价','售后']
    }
  }
}
</script>

<style lang="less" scoped>
  .ordspage{
  }
</style>

