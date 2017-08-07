/*
* 广告
*/
<template>
  <div class="advertisement-box">
    <div class="advertisement">
      <div class="left">
        <img :src="advertisement.img1"/>
      </div>
      <div class="right">
        <img :src="advertisement.img2"/>
        <img :src="advertisement.img3"/>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props: ['advertisement'],
    data () {
      return {};
    }
  };
</script>

<style lang="less" scoped>

  .img100 {
    img {
      width: 100%;
    }
  }

  .advertisement-box {
    width: 100%;
    font-size: 0;
    .advertisement {
      overflow: hidden;
      .left {
        width: 50%;
        float: left;
        .img100;
      }
      .right {
        width: 50%;
        float: right;
        .img100;
      }
    }
  }
</style>
