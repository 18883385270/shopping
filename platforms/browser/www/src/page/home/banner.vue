<template>
  <div class="banner-box">
    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="banner in banners">
          <img :src="banner.Img" @click="parseCommand(banner)"/>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from '../../utils/swiper-3.4.2.min.js'
import * as checkJs from '../../utils/pubfunc'

export default {
  props: ['banners'],
  watch:{
    banners(curVal){
      this.initSwiper();
    }
  },
  methods:{
    initSwiper(){
      setTimeout(()=>{
        var mySwiper = new Swiper(this.$refs.swiper, {
          loop: true,
          autoplay: 3000,
          pagination: '.swiper-pagination',
          autoplayDisableOnInteraction: false
        });
      },2000)
    },
    parseCommand(banner){
      let self=this;
      if(checkJs.isCommand(banner.Link)){
        var commandAndId=banner.Link.split(':');
        var command=commandAndId[0];
        var id=commandAndId[1];
        if(command=='GoodsBlock'){
            self.processGoodsBlockCommand(id)
        }
        else if(command=='GoodsPreview'){
            self.processGoodsPreviewCommand(id)
        }
      }
    },
    processGoodsBlockCommand(goodsBlockId){
        this.$router.push({ name: 'goodsblockinfo',params:{id:goodsBlockId} });
    },
    processGoodsPreviewCommand(goodsId){
        this.$router.replace({ name: 'goodsinfo',params:{id:goodsId} });
    },
  }
};
</script>

<style lang="less" scoped>
@import "../../utils/swiper-3.4.2.min.css";

.banner-box {
  width: 100%;
  .swiper-container {
    width: 100%;
    height: 18rem;
    .swiper-slide {
      position: relative;
      height: 0;
      padding-top: 115%;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 18rem;
      }
    }
  }
}
</style>
