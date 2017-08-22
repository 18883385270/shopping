/*
* 底部导航栏
*/
<template>
  <div class="tabbar">
    <div class="tabbar_item" :class="{active: tabbarIndex == 0}" @click="tabbarEvent(0)">
      <svg>
        <use xlink:href="#home"></use>
      </svg>
      <p>首页</p>
    </div>
    <div class="tabbar_item" :class="{active: tabbarIndex == 1}" @click="tabbarEvent(1)">
      <svg>
        <use xlink:href="#category"></use>
      </svg>
      <p>分类</p>
    </div>
    <div class="tabbar_item" :class="{active: tabbarIndex == 2}" @click="tabbarEvent(2)">
      <svg>
        <use xlink:href="#benevolenceindex"></use>
      </svg>
      <p>善心指数</p>
    </div>
    <div class="tabbar_item" :class="{active: tabbarIndex == 3}" @click="tabbarEvent(3)">
      <i class="bedge" v-if="this.$store.state.global.userinfo.CartGoodsCount">{{this.$store.state.global.userinfo.CartGoodsCount}}</i>
      <svg>
        <use xlink:href="#cart"></use>
      </svg>
      <p>购物车</p>
    </div>
    <div class="tabbar_item" :class="{active: tabbarIndex == 4}" @click="tabbarEvent(4)">
      <svg>
        <use xlink:href="#user"></use>
      </svg>
      <p>我</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['selected','cartgoodscount'],
  data() {
    return {
      tabbarIndex: this.selected
    };
  },
  methods: {
    tabbarEvent(num) {
      this.tabbarIndex = num;

      if (num == 0) {
        this.$router.push({ path: '/' });
      }

      if (num == 1) {
        this.$router.push({ path: '/section' });
      }
      if (num == 2) {
        this.$router.push({ path: '/bindex' });
      }
      if (num == 3) {
        this.$router.push({ path: '/cart' });
      }
      if (num == 4) {
        this.$router.push({ path: '/me' });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.tabbar {
  display: flex;
  height: 4rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #ddd;
  background: #fff;
  .tabbar_item {
    width: 100%;
    height: 100%;
    color: #888;
    font-size: 0.9rem;
    text-align: center;
    .bedge{
      display:inline-block;
      position:absolute;
      color:#c03;
      border:1px solid #c03;
      padding:0 0.3rem;
      border-radius: 1rem;
      font-style:normal;
      background:#fff;
      margin-top:0.2rem;
      line-height:1.1rem;
    }
    svg {
      width: 1.7rem;display:block;
      height: 1.7rem;
      margin: 0.6rem auto 0.3rem auto;
      fill: #999;
    }
    
  }
  .active {
    color: #c33;
    svg {
      fill: #c33;
    }
  }
}
</style>
