<template>
  <div>
    <mi-header title="邀请好友"></mi-header>
    <div class="tabindicator">
      <div @click="toPage('/me/invote')" class="active">邀请</div>
      <div @click="toPage('/me/myinvote')">我的邀请</div>
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
      <router-link to="/me/setmyinvote">设置我的邀请人</router-link>
    </div>
    <mi-toast ref='toast'></mi-toast>
  </div>
</template>

<script>
import header from '../../../components/header.vue'
import toast from '../../../components/toast.vue'
import * as util from '../../../utils/util'

export default {
  components: {
    'mi-header': header,
    'mi-toast':toast
  },
  methods: {
    toPage(page) {
      this.$router.replace({ path: page })
    },
    goPage(page) {
      this.$router.push({ name: page })
    },
    shareToQuan() {
      //分享到朋友圈
      var param= {
        message: {
            title: "用了这个APP，他们竟然都不在淘宝买东西了",
            description: "这个商城竟然购买东西还能赚钱，以后我就在这里买东西了，你呢？",
            thumb: "http://wftx-goods-img-details.oss-cn-shanghai.aliyuncs.com/logo.png",
            mediaTagName: "TEST-TAG-001",
            messageExt: "这个商城竟然购买东西还能赚钱，以后我就在这里买东西了，你呢？",
            messageAction: "<action>dotalist</action>",
            media:{
              type: Wechat.Type.LINK,
              webpageUrl:"http://m.wftx666.com/#/reg?parentid=" + this.$store.state.global.token
            }
        },
        scene: Wechat.Scene.TIMELINE 
      }
      this.wechartShare(param)
    },
    shareToFriend(){
      //分享给好友
      var param= {
        message: {
            title: "用了这个APP，他们竟然都不在淘宝买东西了",
            description: "这个商城竟然购买东西还能赚钱，以后我就在这里买东西了，你呢？",
            thumb: "http://wftx-goods-img-details.oss-cn-shanghai.aliyuncs.com/logo.png",
            mediaTagName: "TEST-TAG-001",
            messageExt: "这个商城竟然购买东西还能赚钱，以后我就在这里买东西了，你呢？",
            messageAction: "<action>dotalist</action>",
            media:{
              type: Wechat.Type.LINK,
              webpageUrl:"http://m.wftx666.com/#/reg?parentid=" + this.$store.state.global.token
            }
        },
        scene: Wechat.Scene.SESSION 
      }
      this.wechartShare(param)
    },
    wechartShare(param){
      let alertFuc = (msg) => {
          const toast = this.$refs.toast;
          toast.show(msg);
          return false
      }

      if (typeof Wechat !== "undefined") {
        Wechat.isInstalled(function(installed) {
          if (installed) {
            Wechat.share(param, function() {
              alertFuc("分享成功");
            }, function(reason) {
              alertFuc("分享失败: " + reason);
            });
          }
          else {
            alertFuc("亲，您似乎没有安装微信");
          }
        }, function(reason) {
          console("检查微信安装状态失败，原因: " + reason);
        });
      }
    }

  }
}
</script>

<style lang="less" scoped>
.bg-white {
  background: #fff;
}

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


