<template>
  <div>
      <mi-header title="关于我们"></mi-header>
      <div class="about">
        <img class="logo" src="../../../dist/logo.png" alt="logo">
        <h1>五福天下慈善商城</h1>
        <p>For Mobile App V{{Version}} build {{Build}}</p>
        <img class="qrcode" src="../../../dist/androidapk.png" alt="apk">
        <p class="shuoming">扫描二维码，下载五福天下App</p>
      </div>
  </div>
</template>

<script>
import header from '../../components/header.vue';

export default {
  components:{
    'mi-header':header
  },
  data(){
    return{
      Version:'',
      Build:''
    }
  },
  mounted(){
    this.getVersion()
  },
  methods:{
    getVersion(){
      this.Version=AppVersion.version
      this.Build=AppVersion.build
    }
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
      width:4rem;
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

