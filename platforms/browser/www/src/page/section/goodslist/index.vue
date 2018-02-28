<template>
  <div>
    <mi-search :search="GoodsFilter.Search" title="商品列表"></mi-search>
    <mi-gotop></mi-gotop>
    <div class="sortwp">
      <div :class="{active:Sort=='综合'}" @click="sortEvent('综合')">综合</div>
      <div :class="{active:Sort=='销量'}" @click="sortEvent('销量')">销量</div>
      <div :class="{active:Sort=='新品'}" @click="sortEvent('新品')">新品</div>
    </div>
    <div style="height:2rem;"></div>
    <div class="nogoodses" v-if="!Goodses.length">
      <svg>
        <use xlink:href="#emptyline"></use>
      </svg>
      <p>未找到商品，试试其他关键字</p>
    </div>
    <div class="goodslist" v-if="Goodses.length">
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
              <span class="price">{{ Goods.Price |currency('￥',2) }}
                <span class="sellout">{{Goods.SellOut}}人付款</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="nextpage" @click="NextPage" v-if="!NotAnyMore">
        <span>加载更多</span>
      </div>
      <div class="nextpage" @click="NextPage" v-if="NotAnyMore">
        <span>没有更多了</span>
      </div>
    </div>
  </div>
</template>

<script>
import search from './search.vue'
import gotop from '../../../components/gotop.vue'
import * as api from '../../../api/goods'
import * as checkJs from '../../../utils/pubfunc'

export default {
  components: {
    'mi-search': search,
    'mi-gotop': gotop
  },
  data() {
    return {
      GoodsFilter: {
        Type: 'Search',
        CategoryId: '',
        Search: ''
      },
      Sort: '综合',
      CurrentPage: 1,
      Goodses: [],
      NotAnyMore: false
    }
  },
  mounted() {
    if (!checkJs.isNullOrEmpty(sessionStorage.GoodsFilter)) {
      this.GoodsFilter = JSON.parse(sessionStorage.GoodsFilter)
    }
    this.fatchData();
  },
  methods: {
    sortEvent(sort) {
      this.Sort = sort;
      this.Goodses.splice(0, this.Goodses.length)
      this.fatchData();
    },
    fatchData() {
      let params = {
        CategoryId: this.GoodsFilter.CategoryId,
        Type: this.GoodsFilter.Type,
        Search: this.GoodsFilter.Search,
        Sort: this.Sort,
        Page: this.CurrentPage
      };
      api.GoodsListApi(params).then(
        res => {
          if (res.data.Code == 200) {
            if (res.data.Goodses.length) {
              this.Goodses = this.Goodses.concat(res.data.Goodses);
            }
            else {
              this.NotAnyMore = true;
            }
          } else {
            console.log(res.data.Message);
          }
        },
        err => {
          console.log('网络错误');
        }
      )
    },
    NextPage() {
      this.CurrentPage++;
      this.fatchData();
    },
    goGoodsPage(goods) {
      this.$router.push({ name: 'goodsinfo',params:{id:goods.Id} });
    }
  }
}

</script>


<style lang="less" scoped>
.sortwp {
  display: flex;
  position: fixed;
  font-size: 1.1rem;
  width: 100%;
  background: #fff;
  z-index: 1;
  >div {
    width: 33.3%;
    padding: 0.8rem 0;
    text-align: center;
    &:first-child {
      border-left: 0;
    }
  }
  .active {
    color: #096;
  }
}

.nogoodses {
  text-align: center;
  padding-top: 6rem;
  color: #333;
  svg {
    width: 6rem;
    height: 6rem;
    fill: #333;
  }
  p {
    font-size: 1.3rem;
    margin-top: 1rem;
  }
}

.goodslist {
  padding-top: 1rem;
}

.goodsboxwp {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #eee;
  .item {
    width: 49.5%;
    margin-top: 5px;
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

.nextpage {
  border-top:4px solid #eee;
  text-align: center;
  clear: both;
  padding: 1rem;
  background: #fff;
}
</style>


