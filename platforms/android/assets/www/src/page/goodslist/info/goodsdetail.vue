/*
* 商品详情和参数
*/
<template>
  <div class="detailwp">
    <div class="tab">
      <span :class="{'active': tabState}" @click="tabEvent1">商品详情</span>
      <span :class="{'active': !tabState}" @click="tabEvent2">参数</span>
    </div>
    <div class="detail" v-show="tabState">
      <img :src="item" v-for="item in detailList" />
    </div>
    <div class="attr" v-show="!tabState">
      <img :src="item" v-for="item in attrList" />
    </div>
  </div>
</template>
<script>
export default {
  props: ['detailData'],
  created() {
    this.detailList = this.detailData.detailList;
    this.attrList = this.detailData.attrList;
  },
  data() {
    return {
      tabState: true,
      detailList: [],
      attrList: []
    };
  },
  components: {},
  methods: {
    tabEvent1() {
      this.tabState = true;
    },
    tabEvent2() {
      this.tabState = false;
    }
  }
};
</script>

<style lang="less" scope>
.detailwp {
  margin-top:1rem;

  .tab {
    font-family: 'Microsoft YaHei';
    width: 100%;
    font-size: 0;
    height: 4.5rem;
    box-sizing: border-box;
    background: #fff;
    border-top: 0.1rem solid #d5d5d5;
    span {
      font-size: 1.3rem;
      color: #333;
      margin-top: 0.6rem;
      width: 50%;
      box-sizing: border-box;
      text-align: center;
      line-height: 3rem;
      display: inline-block;
      &:first-child {
        border-right: 0.1rem solid #d5d5d5;
      }
      &.active {
        color: #ff5722;
      }
    }
  }
  .detail,
  .attr {
    width: 100%;
    font-size: 0;
    img {
      width: 100%;
    }
  }
}
</style>
