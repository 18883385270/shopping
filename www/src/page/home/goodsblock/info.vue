<template>
    <div>
        <mi-header :title="GoodsBlock.Name"></mi-header>
        <div class="banner" v-if="GoodsBlock.Banner">
            <img :src="GoodsBlock.Banner" alt="">
        </div>
        <div v-if="!GoodsBlock.Banner">
            <div class="sortwp">
                <div :class="{active:Sort=='综合'}" @click="sortEvent('综合')">综合</div>
                <div :class="{active:Sort=='销量'}" @click="sortEvent('销量')">销量</div>
                <div :class="{active:Sort=='福豆'}" @click="sortEvent('福豆')">福豆</div>
            </div>
            <div style="height:3rem;"></div>
        </div>
        
        
        <div class="goodsboxwp" v-if="GoodsBlock.Layout=='Cols'">
            <div class="item" v-for="Goods in GoodsBlock.Goodses" :key="Goods.Id" @click="goGoodsPage(Goods)">
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
        <div class="goodsboxwp2" v-if="GoodsBlock.Layout=='SingleLine'">
            <div class="item" v-for="(Goods, index) in GoodsBlock.Goodses" :key="index" @click="goGoodsPage(Goods)" :class="{'item2': index % 2 !== 0}">
                <div class="top">
                    <img v-lazy="Goods.Pics[0]" />
                </div>
                <div class="bottom">
                    <p class="title">{{ Goods.Name |truncate(30)}}</p>
                    <p class="pricewp">
                        <span class="price">{{ Goods.Price |currency('￥',2) }}
                            <span class="sellout">{{Goods.SellOut}}人付款</span>
                        </span>
                    </p>
                    <span class="benevolence">
                        {{Goods.Benevolence |currency('',2)}} 福豆</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import header from '../../../components/header.vue'
import * as checkJs from '../../../utils/pubfunc'
import * as api from '../../../api/goodsblock'

export default {
    props:{
        id:{
            type:String,
            default:''
        }
    },
    components: {
        'mi-header': header
    },
    data() {
        return {
            GoodsBlock: {
                Id:''
            },
            Sort:'综合',
        }
    },
    mounted() {
        this.GoodsBlock.Id = this.id || sessionStorage.GoodsBlockId;
        this.fatchData();
    },
    methods: {
        fatchData() {
            let param = {
                Id: this.GoodsBlock.Id
            }
            api.InfoApi(param).then(
                res => {
                    if (res.data.Code == 200) {
                        this.GoodsBlock = res.data.GoodsBlock;
                    } else {
                        console.log(res.data.Message);
                    }
                },
                err => {
                    console.log('网络错误');
                }
            );
        },
        sortEvent(sortby){
            this.Sort=sortby;
            switch(sortby)
            {
                case '综合':
                    this.GoodsBlock.Goodses.sort(function(a,b){
                        return b.Rate-a.Rate;
                    });
                    break;
                case '销量':
                    this.GoodsBlock.Goodses.sort(function(a,b){
                        return b.SellOut-a.SellOut;
                    });
                    break;
                case '福豆':
                    this.GoodsBlock.Goodses.sort(function(a,b){
                        return b.Benevolence-a.Benevolence;
                    });
                    break;
            }
        },
        goGoodsPage(goods) {
            this.$router.push({ name: 'goodsinfo',params:{id:goods.Id} });
        }
    }
}
</script>

<style lang="less" scoped>
.banner{
    img{
        width:100%;
    }
}
.sortwp {
  display: flex;
  position:fixed;
  font-size: 1.1rem;
  width:100%;
  background:#fff;
  z-index:2;
  >div {
    width: 33.3%;
    padding: 0.8rem 0;
    text-align: center;
    //border-left: 0.05rem solid #eee;
    //border-bottom:0.05rem solid #eee;
    &:first-child {
      border-left: 0;
    }
  }
  .active {
    color: #096;
    //border-bottom: 0.05rem solid #096;
  }
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
.goodsboxwp2{
    padding-bottom:1rem;
    .item{
        display:flex;
        padding:1rem 1rem 1rem 1rem;
        .top{
            width:35%;
            img{
                width:100%;
            }
        }
        .bottom{
            width:65%;
            margin-left:2rem;
            border-bottom:1px solid #eee;
            padding-bottom:1.5rem;
            .title{
                font-size:1.2rem;
                color:#333;
            }
            .pricewp{
                padding:1rem 0;
                font-size:1.5rem;
                .sellout{
                    float:right;
                    font-size:1rem;
                    color:#666;
                }
            }
            .benevolence{
                display:inline-block;
                background:#c03;
                padding:0.2rem 0.6rem;
                color:#fff;
                border-radius:2px;
            }
        }
    }
}
</style>


