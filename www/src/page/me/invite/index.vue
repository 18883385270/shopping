<template>
  <div class="bg-white" :style="{height:bodyHeight}">
      <mi-header title="邀请好友"></mi-header>
      <div class="tabindicator">
        <div @click="toPage('/me/invote')" class="active">邀请</div>
        <div @click="toPage('/me/myinvote')">我的邀请</div>
      </div>
      <div class="invotetype">
        <div class="tlt">通过一下方式邀请好友</div>
        <div>
          <div class="rowone">
            <div>
              <svg>
                <use xlink:href="#ok"></use>
              </svg>
              <p>朋友圈邀请</p>
            </div>
            <div>
              <svg>
                <use xlink:href="#ok"></use>
              </svg>
              <p>微信好友</p>
            </div>
            <div>
              <svg>
                <use xlink:href="#ok"></use>
              </svg>
              <p>QQ邀请</p>
            </div>
          </div>
          <div class="rowtwo">
            <div>
              <svg>
                <use xlink:href="#ok"></use>
              </svg>
              <p>短信邀请</p>
            </div>
            <div>
              <svg>
                <use xlink:href="#ok"></use>
              </svg>
              <p>面对面邀请</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="invotecode" @click="copyMyCodeToBord">
          <p>您的邀请码,点击复制</p>
          <span id="myqrcode">{{this.$store.state.global.token}}</span>
        </div>
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
.invotetype{
  .tlt{
      text-align:center;
      padding:2rem;
  }
}
.rowone{
  display: flex;
  margin:0 3rem;
  div{
    width:33%;
    text-align:center;
    svg{
      width:3.5rem;
      height:3.5rem;
      margin-bottom:0.5rem;
    }
  }
}
.rowtwo{
  display: flex;
  margin:2rem 7rem;
  div{
    width:50%;
    text-align:center;
    svg{
      width:3.5rem;
      height:3.5rem;
      margin-bottom:0.5rem;
    }
  }
}
.invotecode{
  margin:2rem 2rem;
  border:1px solid #096;
  padding:0.8rem;
  border-radius:3rem;
  text-align:center;
  font-size:1.3rem;
  color:#096;
  p{
    margin-bottom:0.2rem;
  }
}
</style>


