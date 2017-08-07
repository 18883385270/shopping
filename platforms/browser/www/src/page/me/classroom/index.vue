<template>
  <div>
    <mi-header title="五福课堂"></mi-header>
    <div class="comingson">
      <svg>
        <use xlink:href="#classroom"></use>
      </svg>
      <h1>即将上线，敬请期待</h1>
      <h2>在线课堂，讲座，PPT</h2>
    </div>
  
  </div>
</template>

<script>
import header from '../../../components/header.vue';

export default {
  components: {
    'mi-header': header
  }
}
</script>


<style lang="less" scoped>
.comingson {
  text-align:center;padding-top:3rem;
  h1,
  h2 {
    font-weight: 300;
    text-align: center;
  }
  svg{
    width:4rem;height:5rem;margin:auto;fill:#333;
  }
}
</style>

