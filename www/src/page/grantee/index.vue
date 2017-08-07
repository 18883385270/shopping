<template>
  <div class="granteepagewarp">
        <mi-header title="受助人"></mi-header>
        <mi-category :categorys="categorys"></mi-category>
        <mi-granteelist></mi-granteelist>
  </div>
</template>

<script>
import header from '../../components/header.vue';
import category from '../../components/category.vue';
import granteelist from './granteelist.vue';

export default {
  components:{
      'mi-header':header,
      'mi-category':category,
      'mi-granteelist':granteelist
  },
  data(){
      return{
          categorys:['大病救助','孤寡老人','儿童助学','灾难救助']
      }
  }
}
</script>

<style lang="less" scoped>
    .granteepagewarp{
        width:100%;font-size:1.5rem;
    }
</style>


