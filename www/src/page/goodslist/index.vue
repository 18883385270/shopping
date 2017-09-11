<template>
  <div>
    <mi-search :search="Search" title="商品列表"></mi-search>
    <div class="sortwp">
      <div :class="{active:Sort=='综合'}" @click="sortEvent('综合')">综合</div>
      <div :class="{active:Sort=='销量'}" @click="sortEvent('销量')">销量</div>
      <div :class="{active:Sort=='新品'}" @click="sortEvent('新品')">新品</div>
    </div>
    <div class="nogoodses" v-if="!Goodses.length">
      <svg>
        <use xlink:href="#emptyline"></use>
      </svg>
      <p>未找到商品，试试其他关键字</p>
    </div>
    <div class="goodsls">
      <div class="item" v-for="(Goods, index) in Goodses" @click="goGoodsPage(Goods)" :class="{'item2': index % 2 !== 0}">
        <div class="top">
          <img v-lazy="Goods.Pics[0]" />
        </div>
        <div class="bottom">
          <span class="title">{{ Goods.Name| truncate(20)}}</span>
          <span class="desc"></span>
          <span class="price">
            <span>
              {{Goods.Benevolence |currency('',2)}} 善心</span> {{ Goods.Price |currency('￥',2) }}</span>
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
import search from './search.vue';
import * as api from '../../api/goods'

export default {
  components: {
    'mi-search': search
  },
  data() {
    return {
      Type:'Search',
      CategoryId:'',
      Search:'',
      Sort:'综合',
      CurrentPage:0,
      Goodses: [],
      NotAnyMore:false
    }
  },
  mounted(){
    this.Type=this.$route.params.type || 'Search';
    this.Search=this.$route.params.search || '';
    this.CategoryId=this.$route.params.categoryid || '';

    this.fatchData();
  },
  methods: {
    sortEvent(sort){
      this.Sort=sort;
      this.fatchData();
    },
    fatchData(){
      let params = {
        CategoryId:this.CategoryId,
        Type:this.Type,
        Search:this.Search,
        Sort:this.Sort,
        Page:this.CurrentPage
      };
      api.GoodsListApi(params).then(
        res => {
          if (res.data.Code == 200) {
            if(res.data.Goodses.length){
                this.Goodses=this.Goodses.concat(res.data.Goodses);
            }
            else{
                this.NotAnyMore=true;
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
    NextPage(){
        this.CurrentPage++;
        this.fatchData();
    },
    goGoodsPage(goods) {
      sessionStorage.GoodsId=goods.Id
      this.$router.push({name:'goodsinfo'});
    }
  }
}

</script>


<style lang="less" scoped>
.sortwp {
  display: flex;
  background: #fff;
  font-size: 1.3rem;
  >div {
    width: 33.3%;
    padding: 1rem 0;
    text-align: center;
    border-left: 1px solid #eee;
    border-bottom:1px solid #eee;
    &:first-child {
      border-left: 0;
    }
  }
  .active {
    color: #096;
    border-bottom: 1px solid #096;
  }
}

.nogoodses{
  text-align:center;
  padding-top:6rem;
  color:#333;
  svg{
    width:6rem;
    height:6rem;
    fill:#333;
  }
  p{
    font-size:1.3rem;
    margin-top:1rem;
  }
}

.goodsls {
  margin-top: 2rem;
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
        line-height: 2.5rem;
      }
      .desc {
        width: 100%;
        display: block;
        color: #666;
        font-size:1rem;
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
.nextpage{
    text-align:center;
    clear:both;
    padding:1rem;
    background:#fff;
}
</style>


