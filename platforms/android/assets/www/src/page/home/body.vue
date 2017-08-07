<template>
  <div class="body-box">
    <mi-starGoods :goodslist="body.newHomeGoods.newHomeGoodsList" title="明星单品"></mi-starGoods>
    <mi-starGoods :goodslist="body.newHomeGoods.newHomeGoodsList" title="热卖单品"></mi-starGoods>
    <mi-starGoods :goodslist="body.newHomeGoods.newHomeGoodsList" title="智能家居"></mi-starGoods>
  </div>
</template>
<script>
  import starGoods from './starGoods.vue';

  
  export default{
    props: ['body'],
    components: {
      'mi-starGoods': starGoods
    },
    data () {
      return {};
    }
  };
</script>

<style lang="less" scoped>
  .body-box {
    background: #f5f5f5;
  }
</style>
