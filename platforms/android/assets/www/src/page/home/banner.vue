<template>
  <div class="banner-box">
    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in bannerTop">
          <img :src="item" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import data from '../../../../data.json';
import Swiper from '../../utils/swiper-3.4.2.min.js';

export default {
  props: ['banner'],
  data() {
    return {
      bannerTop: []
    };
  },
  created() {
    this.bannerTop = data.banner.bannerTop;
  },
  mounted() {
    var mySwiper = new Swiper(this.$refs.swiper, {
      loop: true,
      autoplay: 3000,
      pagination: '.swiper-pagination',
      autoplayDisableOnInteraction: false
    });
  }
};
</script>

<style lang="less" scoped>
@import "../../utils/swiper-3.4.2.min.css";

.banner-box {
  width: 100%;
  .swiper-container {
    width: 100%;
    height: 26rem;
    .swiper-slide {
      position: relative;
      height: 0;
      padding-top: 115%;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 26rem;
      }
    }
  }
}
</style>
