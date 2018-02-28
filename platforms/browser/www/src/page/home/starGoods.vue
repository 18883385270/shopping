/*
*明显产品
*/
<template>
  <div class="goodsbox">
    <div class="boxbanner">
      {{title}}
    </div>
    <div class="goodsboxwp">
      <div class="item" v-for="Goods in Goodses" :key="Goods.Id" @click="goGoodsPage(Goods)">
        <div class="top">
          <span class="benevolence">
                {{Goods.Benevolence |currency('',2)}} 福豆</span>
          <img v-lazy="Goods.Pics[0]" />
        </div>
        <div class="bottom">
            <p class="title">{{ Goods.Name |truncate(20)}}</p>
            <p class="pricewp">
              <span class="price">{{ Goods.Price |currency('￥',2) }} <span class="sellout">{{Goods.SellOut}}人付款</span> </span>
            </p>
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
  width: 100%;
.boxbanner {
    padding: 1rem 0;
    width: 100%;
    font-size: 1rem;
    text-align: center;
    color: #999;
    clear: both;
  }
  .goodsboxwp {
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    background:#eee;
    .item {
        width: 49.5%;
        margin-top:5px;
        background: #fff;
        .top {
            padding: 0.8rem;
            position: relative;
            
            img {
                width: 100%;
            }
            .benevolence {
                position: absolute;
                right: 0.8rem;
                bottom: 1.1rem;
                font-size: 0.8rem;
                background: #ff601e;
                color: #fff;
                line-height: 1rem;
                padding: 0.2rem 0.6rem;
                border-radius: 2px;
            }
        }
        .bottom {
            width: 100%;
            display: block;
            padding: 0.5rem;
            box-sizing: border-box;
            font-size: 1.2rem;
            .title {
                width: 100%;
                display: block;
                color: #333;
                line-height: 2rem;
                padding: 0.6rem 0;
            }
            .desc {
                width: 100%;
                font-size: 1rem;
                color: #666;
            }
            .pricewp {
                width: 100%;

                .price {
                    font-size: 1.3rem;
                    color: #ff601e;
                    line-height: 2rem;
                    .sellout {
                        float: right;
                        font-size: 1rem;
                        color: #999;
                    }
                }
            }
        }
    }
  }
}
</style>
