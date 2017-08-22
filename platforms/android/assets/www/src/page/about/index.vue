<template>
  <div>
      <mi-header title="关于我们"></mi-header>
      <div class="about">
        <img class="logo" src="../../img/logo.png" alt="logo">
        <h1>五福天下慈善商城</h1>
        <p>For Mobile App V1.0.0 build 5210</p>
        <img class="qrcode" src="../../img/androidapk.png" alt="apk">
        <p class="shuoming">扫描二维码，您的朋友可以下载五福天下App</p>
      </div>
  </div>
</template>

<script>
import header from '../../components/header.vue';

export default {
  components:{
    'mi-header':header
  }
}
</script>


<style lang="less" scoped>
  .about{
    text-align: center;
    padding-top:4rem;
    h1{
      font-weight: 300;
      font-size:1.5rem;

    }
    .logo{
      width:6rem;
    }
    .qrcode{
      width:12rem;
      margin-top:3rem;
    }
    .shuoming{
      margin-top:3rem;
      font-size:1.2rem;
    }
  }
</style>

