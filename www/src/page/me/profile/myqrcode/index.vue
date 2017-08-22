<template>
  <div>
        <mi-header title="我的二维码"></mi-header>
        <div class="qrcodewarp">
            <vueqart :config="qrcodeconfig" :downloadButton="false"></vueqart>
        <p>扫描二维码，推荐朋友加入商城</p>
        </div>
        
  </div>
</template>

<script>
import header from '../../../../components/header.vue'
import vueqart from 'vue-qart'

export default {
  components:{
      'mi-header':header,
      'vueqart':vueqart
  },
  data() {
        return {
            qrcodeconfig: {
                value: 'http://www.wftx666.com/user/'+this.$store.state.global.token,
                imagePath: './src/img/logo.png',
                filter: 'color'
            }
        }
    },
  methods:{

  }
}
</script>

<style lang="less" scoped>
.qrcodewarp {
    margin:3rem;
    padding:4rem 3rem;
    text-align: center;
    background:#fff;
    img {
        width: 100%;
    }
    p {
        font-size: 1.3rem;
        margin-top: 1rem;
    }
}
</style>


