<template>
  <div class="bg-white" :style="{height:bodyHeight}">
      <mi-header title="邀请好友"></mi-header>
      <div class="tabindicator">
        <div @click="toPage('/me/invote')">邀请</div>
        <div @click="toPage('/me/myinvote')" class="active">我的邀请</div>
      </div>
      
  </div>
</template>

<script>
import header from '../../../components/header.vue'
import * as util from '../../../utils/util'

export default {
  components:{
      'mi-header':header
  },
  data(){
    return {
      bodyHeight:'100%'
    }
  },
  mounted(){
    this.bodyHeight = util.screenSize().height + 'px';
  },
  methods:{
    toPage(page){
      this.$router.replace({path:page})
    },
    copyMyCodeToBord(){
      var supported = document.queryCommandSupported("copy");
      if (supported) {
        // 检测浏览器是否为比Firefox 41更低的版本
        try {
          var mycodespan=document.getElementById("myqrcode");
          mycodespan.select();
          document.execCommand("copy");
          alert("复制成功");
        } catch (e) {
          supported = false;
        }
      }
      if (!supported) {
        // 使用备用方法，比如ZeroClipboard，http://zeroclipboard.org/
        alert("复制失败");
      }
    }
  }
}
</script>

<style lang="less" scoped>
.bg-white{
  background:#fff;
}
.tabindicator{
  display: flex;
  div{
    padding:1rem 0;
    text-align:center;
    border-bottom:1px solid #ddd;
    width:50%;
    font-size:1.3rem;
    &.active{
      color:#096;
      border-bottom-color:#096;
    }
  }
}

</style>


