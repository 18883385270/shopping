<template>
  <div>
      <mi-header title="线上店铺"></mi-header>
      <div class="pd-top-xlg text-center bgblue text-white">
      <p class="text-xxlg pd-topbtn-lg text-light">开通线上店铺</p>
      <p class="text-md text-light pd-top">成为VIP会员即可免费申请福气小店</p>
      <!--wareStart-->
            <div class="waveAnimation">
            <div class="waveWrapperInner">
                <div class="wave waveTop"></div>
            </div>
            <div class="waveWrapperInner">
                <div class="wave waveMiddle"></div>
            </div>
            <div class="waveWrapperInner">
                <div class="wave waveBottom"></div>
            </div>
        </div>
        <!--wareEnd-->
    </div>
    <div class="marg-lg pd ">
        <div class="text-center text-md text-warning">线上店铺</div>
        <p class="text-gray pd-top">申请成为五福商城线上店铺商家，您可以享受商城的免费流量售卖产品，
            我们只收押金1500元，开店完全免费，加入五福天下商城都是您一个好的选择。</p>
    </div>

    <div class="marg-lg pd ">
        <div class="text-center text-md text-warning">商家要求</div>
        <p class="text-gray pd-top">提供产品或服务的真实公司、个体工商户、个人</p>
        <p class="text-gray pd-top-sm">可提供国家法律允许经营的合法商品或服务</p>
    </div>

    <div class="text-center text-md text-warning">申请条件</div>
    <div class="flexwarp pd text-center">
        <div class="wd-50p bg-xlightgray pd">
            <svg class="icon-lg icon-warning">
                <use xlink:href="#v"></use>
            </svg>
            <p class="pd-top-sm">成为VIP会员</p>
        </div>
        <div class="wd-50p bg-xlightgray pd marg-lf">
            <svg class="icon-lg icon-warning">
                <use xlink:href="#cash"></use>
            </svg>
            <p class="pd-top-sm">账号余额大于1500元</p>
        </div>
    </div>
    <div class="pd" v-if="isOpen">
        <button class="button warning" @click="goPage('openstore')">开通店铺</button>
    </div>
  </div>
</template>

<script>
import header from "../../../components/header.vue";

export default {
  components: {
    "mi-header": header
  },
  data(){
      return{
          isOpen:false
      }
  },
  mounted(){
      if(this.$store.state.global.userinfo.Role=="VIP会员" 
      && this.$store.state.global.wallet.Cash>1000 
      && !this.$store.state.global.userinfo.StoreId){
        this.isOpen=true;
    }
  },
  methods:{
      goPage(name){
          this.$router.push({name:name})
      }
  }
};
</script>

<style lang="less" scoped>


@keyframes move_wave {
            0% {
                transform: translateX(0) translateZ(0) scaleY(1)
            }
            50% {
                transform: translateX(-25%) translateZ(0) scaleY(0.55)
            }
            100% {
                transform: translateX(-50%) translateZ(0) scaleY(1)
            }
        }
      .waveAnimation{
        position:relative;
        height:100px;
      }
        .waveWrapperInner {
            position: absolute;
            width: 100%;
            overflow: hidden;
            height: 100%;
        }


        .wave {
            position: absolute;
            left: 0;
            width: 200%;
            height: 100%;
            background-repeat: repeat no-repeat;
            background-position: 0 bottom;
            transform-origin: center bottom;
        }
        .waveTop {
          z-index: 15;
            opacity: 0.5;
            background-image: url('../../../../dist/blueware/wave-top.png');
          background-size: 50% 50px;
            animation: move_wave 10s linear infinite;
        }
        .waveMiddle {
            background-image: url('../../../../dist/blueware/wave-mid.png');
          z-index: 10;
          opacity: 0.55;
          background-size: 50% 30px;
          animation: move_wave 20s linear infinite;
        }
        .waveBottom {
            background-image: url('../../../../dist/blueware/wave-bot.png');
          background-size: 50% 40px;
            animation: move_wave 7s linear infinite;
            z-index: 5;
        }
        .bgblue{
          background-image: linear-gradient(-45deg, #FE971C 30%, #FB621F 70%);
        }
</style>


