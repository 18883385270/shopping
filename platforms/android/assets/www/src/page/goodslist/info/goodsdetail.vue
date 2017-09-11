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
      <p v-html="GoodsDetails.Description"></p>
    </div>
    <div class="attr" v-show="!tabState">
      <ul>
        <li v-for="goodsParam in GoodsDetails.GoodsParams">
          <span class="paramtlt">{{goodsParam.Name}}</span>
          <span>{{goodsParam.Value}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ['GoodsDetails'],

  data() {
    return {
      tabState: true,
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
      padding: 0.6rem 0;
      width: 50%;
      box-sizing: border-box;
      text-align: center;
      line-height: 3rem;
      display: inline-block;
      border-bottom: 1px solid #eee;
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
    ul {
      padding: 1rem;
      li {
        list-style: none;
        padding: 0.5rem;
        .paramtlt {
          color: #666;
          display: inline-block;
          padding-right: 1rem;
          width: 4rem;
        }
      }
    }
  }
}
</style>
