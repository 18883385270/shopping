/*
*明显产品
*/
<template>
  <div class="goodsbox">
    <div class="boxbanner">
      {{title}}
    </div>
    <div class="goodsboxwp">
      <div class="item" v-for="(Goods, index) in Goodses" @click="goGoodsPage(Goods)" :class="{'item2': index % 2 !== 0}">
        <div class="top">
          <img v-lazy="Goods.Pics[0]" />
        </div>
        <div class="bottom">
          <span class="title">{{ Goods.Name |truncate(20)}}</span>
          <span class="price">
            <span>
              {{Goods.Benevolence |currency('',2)}} 善心</span> {{ Goods.Price |currency('￥',2) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['Goodses', 'title'],
  methods: {
    goGoodsPage(goods) {
      sessionStorage.GoodsId = goods.Id
      this.$router.push({ name: 'goodsinfo' });
    }
  }
};
</script>

<style lang="less" scoped>
.goodsbox {
  margin-top: 0.2rem;
  width: 100%;
  .boxbanner {
    padding: 0.7rem 0;
    width: 100%;
    font-size: 0;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    color: #999;
  }
  .goodsboxwp {
    .item {
      width: 50%;
      margin-bottom: 1rem;
      background: #fff;
      float: left;
      box-sizing: border-box;
      border-right: 0.1rem solid #fff;
      height: 25rem;
      font-size: 0;
      .top {
        padding: 1rem;
        img {
          width: 100%;
        }
      }
      .bottom {
        width: 100%;
        display: block;
        padding: 0.5rem 1rem;
        box-sizing: border-box;
        font-size: 1.3rem;
        .title {
          width: 100%;
          display: block;
          color: #333;
          line-height: 2.5rem;
        }
        .desc {
          width: 100%;
          font-size: 1rem;
          display: block;
          color: #666;
        }
        .price {
          width: 100%;
          display: block;
          font-size: 1.3rem;
          color: #ff601e;
          line-height: 2rem;
          span {
            float: right;
            font-size: 0.8rem;
           background:#ff601e;
            color:#fff;
            line-height:1rem;
            padding:0.2rem 0.6rem;
            border-radius:2px;
          }
        }
      }
    }
    .item2 {
      float:right;
      margin-right: 0;
      border-left: 0.1px solid #eee;
    }
  }
}
</style>
