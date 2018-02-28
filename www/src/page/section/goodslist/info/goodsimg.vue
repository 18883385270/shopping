<template>
  <div class="img">
    <div class="control">
      <div class="left hook" @click="goBackEvent"><svg><use xlink:href="#back"></use></svg></div>
      <div class="right hook" @click="goodShareEvent"><svg><use xlink:href="#share"></use></svg></div>
    </div>

    <div class="swiper-container" ref="swipercontainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in bannerList" :key="item">
          <img :src="item"/>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

  </div>
</template>
<script>
  import Swiper from '../../../../utils/swiper-3.4.2.min.js';
  export default {
    props:['bannerList'],
    watch:{
      bannerList(curVal){
        this.initSwiper();
      }
    },
    methods: {
      goBackEvent () {
        this.$router.go(-1);
      },
      goodShareEvent () {
        this.$emit("shareGoods");
      },
      initSwiper(){
        setTimeout(()=>{
          var mySwiper = new Swiper(this.$refs.swipercontainer, {
            loop: true,
            autoplay: 3000,
            pagination: '.swiper-pagination',
            autoplayDisableOnInteraction: false
          });
        },2000)
      }
    }
    

  };
</script>

<style lang="less" scoped>
  @import "../../../../utils/swiper-3.4.2.min.css";

  .img {
    width: 100%;
    .control {
      width: 100%;
      height: 3rem;
      position: fixed;
      top: 1rem;
      left: 0;
      z-index: 10;
      padding: 0 1rem;
      box-sizing: border-box;
      div.hook {
        width: 3rem;
        height: 3rem;
        display: block;
        border-radius: 50%;
        text-align: center;
        line-height: 3rem;
        color: #fff;
        svg{
            width:2.5rem;height:2.5rem;fill:#333;
        }
        &.left {
          float: left;
          
        }
        &.right {
          float: right;
        }
      }
    }
  }

  .swiper-container {
	z-index:-1;
    width: 100%;
    .swiper-slide {
      position: relative;
      height: 0;
      padding-top: 100%;
      img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }
    }
  }

  .swiper-pagination-bullet-active {
    background: #ff8b0f;
  }
</style>
