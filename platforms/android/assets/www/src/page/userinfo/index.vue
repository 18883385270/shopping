<template>
  <div>
      <mi-header title="用户资料"></mi-header>
      <div class="divider"></div>
      <div class="userinfotablerow">
        <div class="portrait">
            <img :src="UserInfo.Portrait" alt="">
        </div>
        <div class="userinfowp">
            <p class="niname">{{UserInfo.NickName}}</p>
            <p>手机号：{{UserInfo.Mobile}}</p>
        </div>
      </div>
      <div class="divider"></div>
      <div class="tablerow">
            <div class="tlt">角色</div>
            <div class="cnt">
                {{UserInfo.Role}}
            </div>
      </div>
      <div class="divider"></div>
      <div class="pd1">
          <button class="button success" @click="goTransferPage">转账</button>
      </div>
  </div>
</template>

<script>
import header from '../../components/header.vue'
import * as checkJs from '../../utils/pubfunc'

export default {
  components: {
    'mi-header': header
  },
  data(){
    return{
      UserInfo:{}
    }
  },
  mounted(){
    this.UserInfo=JSON.parse(sessionStorage.UserInfo)
  },
  methods:{
    goTransferPage(){
      this.$router.push({name:'cashtransfer'})
    }
  }
}
</script>

<style lang="less" scoped>
.userinfotablerow{
  display:flex;
  .portrait{
    width:20%;
    padding:1rem;
    img{
      width:100%;
    }
  }
  .userinfowp{
    width:80%;
    padding:1rem;
    color:#666;
    .niname{
      font-size:1.5rem;
      color:#333;
      padding-bottom:0.5rem;
    }
  }
}
</style>


