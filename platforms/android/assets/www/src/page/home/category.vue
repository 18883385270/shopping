<template>
  <div class="mainmenuwarp">
    <div class="menuwarp">
      <div @click="goPage('/ticket')">
        <svg>
          <use xlink:href="#cashticket"></use>
        </svg>领优惠券
      </div>
      <div>
        <svg class="purple">
          <use xlink:href="#sort"></use>
        </svg>都在买
      </div>
      <div>
        <svg class="pink">
          <use xlink:href="#sale"></use>
        </svg>找折扣
      </div>
      <div @click="goPage('/offlinestore')">
        <svg class="blue">
          <use xlink:href="#store"></use>
        </svg>线下商家
      </div>
      <div @click="goPage('/me')">
        <svg class="green">
          <use xlink:href="#vip"></use>
        </svg>会员中心
      </div>
    </div>
    <div class="menuwarp">
      <div @click="goPage('/foundation')">
        <svg class="green">
          <use xlink:href="#foundation"></use>
        </svg>五福基金
      </div>
      <div @click="goPage('/grantee')">
        <svg>
          <use xlink:href="#oldman"></use>
        </svg>受助人
      </div>
      <div @click="goPage('/bindex')">
        <svg class="yellow">
          <use xlink:href="#heart"></use>
        </svg>善心指数
      </div>
      <div @click="goPage('/classroom')">
        <svg class="green">
          <use xlink:href="#classroom"></use>
        </svg>莱乾讲堂
      </div>
      <div>
        <svg class="black">
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
      svg.green{
        fill:#096;
      }
      svg.black{
        fill:#333;
      }
      svg.yellow{
        fill:#f90;
      }
      svg.purple{
        fill:#969;
      }
      svg.blue{
        fill:#06c;
      }
      svg.pink{
        fill:#f66;
      }
    }
  }
}
</style>


