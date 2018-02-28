<template>
  <div>
      <mi-header title="等级特权"></mi-header>
      <div class="topbg">
        <div class="text-center">
              <img class="wd-100p" :src="roleheadsrc" alt="logo">
        </div>
      </div>
      <div class="bg-xlightgray text-center pd-sm">
        黄色的部分标识您已经获得该特权
      </div>
      <table class="wd-100p table table-bordered" style="margin-top:1px">
        <tr>
          <td class="wd-50p pd-lg text-center">
              <svg class="icon-lg icon-warning">
                <use xlink:href="#integral"></use>
              </svg>
              <p class="text-md pd-topbtn-sm">购物得福豆</p>
              <p class="text-gray">在商城购物可得相应的福豆，参与每天的商城分红</p>
          </td>
          <td class="wd-50p pd-lg text-center" :class="{'viplockbg':!isVip}" @click="goOpenVip">
            <svg class="icon-lg" :class="{'icon-warning':isVip}">
                <use xlink:href="#store"></use>
              </svg>
              <p class="text-md pd-topbtn-sm">免费开通店铺</p>
              <p class="text-gray">可以免费申请开通线上店铺，在线销售商品</p>
          </td>
        </tr>
        <tr>
          <td class="wd-50p pd-lg text-center" :class="{'viplockbg':!isVip}" @click="goOpenVip">
              <svg class="icon-lg" :class="{'icon-warning':isVip}">
                <use xlink:href="#award100"></use>
              </svg>
              <p class="text-md pd-topbtn-sm">100元现金奖励</p>
              <p class="text-gray">每直推一个人成为VIP即可获得100元现金奖励</p>
          </td>
          <td class="wd-50p pd-lg text-center" :class="{'viplockbg':!isVip}" @click="goOpenVip">
            <svg class="icon-lg" :class="{'icon-warning':isVip}">
                <use xlink:href="#achieve"></use>
              </svg>
              <p class="text-md pd-topbtn-sm">20%福豆提升</p>
              <p class="text-gray">购物获得的福豆数量比普通会员增加20%</p>
          </td>
        </tr>
        <tr>
          <td class="wd-50p pd-lg text-center" :class="{'viplockbg':!isVip}" @click="goOpenVip">
              <svg class="icon-lg" :class="{'icon-warning':isVip}">
                <use xlink:href="#team"></use>
              </svg>
              <p class="text-md pd-topbtn-sm">团队赚收益</p>
              <p class="text-gray">获得团队下两层内消费者购物所得福豆的提成</p>
          </td>
          <td class="wd-50p pd-lg text-center" :class="{'viplockbg':!isVip}" @click="goOpenVip">
              <svg class="icon-lg" :class="{'icon-warning':isVip}">
                <use xlink:href="#training"></use>
              </svg>
              <p class="text-md pd-topbtn-sm">商学院培训</p>
              <p class="text-gray">商学院开启后，免费高端课程培训与晋升</p>
          </td>
        </tr>
        <tr>
          <td class="wd-50p pd-lg text-center" :class="{'jinglilockbg':!isJingli}">
            <svg class="icon-lg" :class="{'icon-warning':isJingli}">
                <use xlink:href="#plus50"></use>
              </svg>
              <p class="text-md pd-topbtn-sm">50元岗位补贴</p>
              <p class="text-gray">团队内消费者升级为VIP,您获得50元现金岗位补贴</p>
          </td>
          <td class="wd-50p pd-lg text-center" :class="{'zongjianlockbg':!isZongjian}">
              <svg class="icon-lg" :class="{'icon-warning':isZongjian}">
                <use xlink:href="#plus100"></use>
              </svg>
              <p class="text-md pd-topbtn-sm">100元岗位补贴</p>
              <p class="text-gray">团队内消费者升级为VIP,您获得100元现金岗位补贴</p>
          </td>
        </tr>
      </table>
      <div class="bg-warning pd-lg text-center text-white text-md" v-if="!isVip" @click="goVipGoodsBlock">
        升级为VIP会员
      </div>
  </div>
</template>

<script>
import header from '../../components/header.vue'

export default {
  components:{
    'mi-header':header,
  },
  data(){
    return {
      isVip:false,
      isJingli:false,
      isZongjian:false,
      roleheadsrc:'dist/putong.png'
    }
  },
  created(){
    if(this.$store.state.global.userinfo.Role=="VIP会员"){
      this.isVip=true;
      this.roleheadsrc='dist/vip.png'
    }
    else if(this.$store.state.global.userinfo.Role=="五福经理"){
      this.isVip=true;
      this.isJingli=true;
      this.roleheadsrc='dist/jingli.png'
    }
    else if(this.$store.state.global.userinfo.Role=="五福总监"){
      this.isVip=true;
      this.isJingli=true;
      this.isZongjian=true;
      this.roleheadsrc='dist/zongjian.png'
    }
  },
  methods:{
    goOpenVip(){
      if(!this.isVip){
        this.goVipGoodsBlock()
      }
    },
    goVipGoodsBlock() {
            this.$router.push({ name: 'goodsblockinfo',params:{id:'8a978108-53a5-478b-ad44-016138e2406b'} });
        },
  }
}
</script>

<style lang="less" scoped>
.topbg{
    background-color:#333;
}
.viplockbg{
  background:url('../../../dist/viplock.png') no-repeat top right;
  background-size:3rem 3rem;
}
.jinglilockbg{
  background:url('../../../dist/jinglilock.png') no-repeat top right;
  background-size:3rem 3rem;
}
.zongjianlockbg{
  background:url('../../../dist/zongjianlock.png') no-repeat top right;
  background-size:3rem 3rem;
}
</style>

