<template>
  <div>
    <mi-header title="区域代理"></mi-header>
    <div class="pd-top-xlg text-center bgblue text-white">
      <p class="text-xxlg pd-topbtn-lg text-light">为何要成为区域代理</p>
      <p class="text-md text-light pd-top">成为区域代理可享受区域内所有订单的分红</p>
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
    
    <div class="pd-top-xxxlg">
      <div class="text-primary text-xlg text-center">升级条件</div>
      <div class="wd-50p pd-top-xlg text-lightgray text-md" style="transform: translate(55%, 0);">
        <p class="pd-btn-sm">➀ 直接培养3个经理</p>
        <p>➁ 累计获取福豆超过1000个</p>
      </div>
    </div>
    <div class="pd-top-xxxlg">
      <div class="text-primary text-xlg text-center">代理福利</div>
      <div class="wd-80p pd-top-xlg text-lightgray text-md" style="transform: translate(25%, 0);">
        <p class="pd-btn-sm">区级： 获得全区县订单销售额的1.5%</p>
        <p class="pd-btn-sm">市级： 获得全市订单销售额的1%</p>
        <p>省级： 累计全省订单销售额的0.5%</p>
      </div>
    </div>
    <div class="pd-top-xxlg pd-btn-lg text-center">
      <button class="mdbtn round primary" @click="goPage('mypartner')">我的代理</button>
    </div>
  </div>
</template>

<script>
import header from '../../../components/header.vue'

export default {
  components: {
    'mi-header': header
  },
  methods:{
    goPage(name){
      this.$router.push({name:name})
    }
  }
}
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
          background-image: url('../../../../dist/blueware/wave-top.png');
          z-index: 15;
            opacity: 0.5;
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
          background-image: linear-gradient(-45deg, #30C0DF 30%, #5d7dea 70%);
        }
</style>

