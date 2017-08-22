<template>
  <div>
      <mi-header title="我的收藏"></mi-header>
      <mi-category :categorys="categorys"></mi-category>
      
  </div>
</template>

<script>
import header from '../../components/header.vue';
import category from '../../components/category.vue';

export default {
  components:{
    'mi-header':header,
    'mi-category':category
  },
  data(){
    return{
      categorys:['商品','店铺','受助人']
    }
  }
}
</script>


<style lang="less" scoped>

</style>

