<template>
  <div>
      <mi-header title="关于我们"></mi-header>
      <div class="text-center pd-top-xlg">
        <img class="logo" src="../../../../dist/logo.png" alt="logo">
        <h1 class="text-light">五福商城</h1>
        <p>For Mobile App V{{Version}} build {{Build}}</p>
        <img class="qrcode" src="../../../../dist/androidapk.png" alt="apk">
        <p class="text-lg text-gray pd-top">扫描二维码，下载五福商城App</p>
      </div>
  </div>
</template>

<script>
import header from '../../../components/header.vue';

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

    
    .logo{
      width:4rem;
    }
    .qrcode{
      width:12rem;
      margin-top:3rem;
    }
    
  
</style>

