<template>
  <div>
    <mi-header title="邀请好友"></mi-header>
    <div class="tabindicator">
      <div @click="replacePage('invote')" class="active">邀请</div>
      <div @click="replacePage('myinvote')">我的邀请</div>
    </div>
    <div class="invotetype">
      <div class="tlt">通过一下方式邀请好友</div>
      <div>
        <div class="rowone">
          <div @click="shareToQuan">
            <svg>
              <use xlink:href="#pengyouquan"></use>
            </svg>
            <p>朋友圈邀请</p>
          </div>
          <div @click="shareToFriend">
            <svg>
              <use xlink:href="#weixin"></use>
            </svg>
            <p>微信好友</p>
          </div>
          <div @click="goPage('faceinvote')">
            <svg class="svgblue">
              <use xlink:href="#qrcode"></use>
            </svg>
            <p>面对面邀请</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="invotecode">
        <p>您的邀请码</p>
        <span id="myqrcode">{{this.$store.state.global.userinfo.Mobile}}</span>
      </div>
    </div>
    <div class="setmyinvote" v-if="this.$store.state.global.userinfo.ParentId=='00000000-0000-0000-0000-000000000000'">
      <router-link to="/bindex/setmyinvote">设置我的邀请人</router-link>
    </div>
    <mi-toast ref='toast'></mi-toast>
  </div>
</template>

<script>
import header from '../../../components/header.vue'
import toast from '../../../components/toast.vue'
import * as util from '../../../utils/util'
import * as shareService from '../../../services/shareservice'

export default {
  components: {
    'mi-header': header,
    'mi-toast':toast
  },
  methods: {
    replacePage(page) {
      this.$router.replace({ name: page })
    },
    goPage(page) {
      this.$router.push({ name: page })
    },
    shareToQuan() {
      var userId=this.$store.state.global.token;
      shareService.shareToQuan(userId);
    },
    shareToFriend(){
      var userId=this.$store.state.global.token;
      shareService.shareToFriend(userId);
    },
    
  }
}
</script>

<style lang="less" scoped>


.tabindicator {
  margin: 0 20%;
  display: flex;
  div {
    padding: 1rem 0;
    text-align: center;
    border-bottom: 1px solid #ddd;
    width: 50%;
    font-size: 1.3rem;
    &.active {
      color: #096;
      border-bottom-color: #096;
    }
  }
}

.invotetype {
  .tlt {
    text-align: center;
    padding: 4rem 2rem;
  }
}

.rowone {
  display: flex;
  margin: 0 3rem;
  div {
    width: 50%;
    text-align: center;
    svg {
      width: 2.5rem;
      height: 2.5rem;
      margin-bottom: 1rem;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 0.5rem;
      &.svgblue {
        fill: #06c;
      }
    }
  }
}

.invotecode {
  margin: 4rem 6rem 2rem 6rem;
  border: 1px solid #096;
  padding: 0.4rem;
  border-radius: 3rem;
  text-align: center;
  color: #096;
  p {
    margin-bottom: 0.2rem;
  }
}

.setmyinvote {
  text-align: center;
  a {
    text-decoration: none;
    color: #666;
  }
}
</style>


