/*
主菜单
*/


<template>
  <div class="mainmenuwarp">
    <div class="menuwarp">
      <div @click="goPage('/ticket')">
        <svg>
          <use xlink:href="#cashticket"></use>
        </svg>领优惠券
      </div>
      <div>
        <svg>
          <use xlink:href="#sort"></use>
        </svg>都在买
      </div>
      <div>
        <svg>
          <use xlink:href="#sale"></use>
        </svg>找折扣
      </div>
      <div @click="goPage('/offlinestore')">
        <svg>
          <use xlink:href="#store"></use>
        </svg>线下商家
      </div>
      <div @click="goPage('/me')">
        <svg>
          <use xlink:href="#vip"></use>
        </svg>会员中心
      </div>
    </div>
    <div class="menuwarp">
      <div @click="goPage('/foundation')">
        <svg>
          <use xlink:href="#foundation"></use>
        </svg>五福基金
      </div>
      <div @click="goPage('/grantee')">
        <svg>
          <use xlink:href="#oldman"></use>
        </svg>受助人
      </div>
      <div>
        <svg>
          <use xlink:href="#heart"></use>
        </svg>善心
      </div>
      <div @click="goPage('/me/classroom')">
        <svg>
          <use xlink:href="#classroom"></use>
        </svg>莱乾讲堂
      </div>
      <div>
        <svg>
          <use xlink:href="#all"></use>
        </svg>全部频道
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goPage(pageName) {
      this.$router.push({ path: pageName });
    }
  }
}
</script>

<style lang="less" scoped>
.mainmenuwarp {
  width: 100%;
  background: #fff;
  padding-top: 1rem;
  padding-bottom: 1rem;
  .menuwarp {
    display: flex;
    >div {
      width: 20%;
      text-align: center;
      margin: 0.8rem 0 0.8rem 0;
      svg {
        width: 2rem;
        height: 2rem;
        display: block;
        margin: 0 auto 0.7rem auto;
        fill: #c66;
      }
    }
  }
}
</style>


