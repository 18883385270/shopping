<template>
  <div :style="{height:pageHeight}" >
      <mi-header :title="BrowserUrl.Title"></mi-header>
      <iframe width="100%" height="100%" frameborder="0" :src="BrowserUrl.Url"></iframe>
  </div>
</template>

<script>
import header from '../../components/header.vue'
import * as util from '../../utils/util'

export default {
  components:{
      'mi-header':header
  },
  data(){
      return{
          pageHeight:'100%',
          BrowserUrl:{
              Title:'浏览器',
              Url:'http://www.baidu.com'
          }
      }
  },
  mounted(){
      this.pageHeight = util.screenSize().height + 'px'
      this.BrowserUrl=JSON.parse(sessionStorage.BrowserUrl)
  },
  methods:{

  }
}
</script>

<style lang="less" scoped>
.iframewp{
    width:100%;
}
</style>




