<template>
    <div>
        <div class="goodsblockwp" v-for="goodsBlockWarp in GoodsBlockWarps" :key="goodsBlockWarp.Id">
            <div v-if="goodsBlockWarp.Name.length">
                <div class="divider"></div>
                <div class="goodsblockwptlt" >
                    {{goodsBlockWarp.Name}}
                </div>
            </div>
            <div class="SingleColThumb" v-if="goodsBlockWarp.Style=='SingleColThumb'">
                <div class="item" v-for="goodsBlock in goodsBlockWarp.GoodsBlocks" :key="goodsBlock.Id">
                     <img @click="goGoodsBlockInfoPage(goodsBlock)" :src="goodsBlock.Thumb" alt="">
                </div>
            </div>
            <div class="SingleColThumWithGoods" v-if="goodsBlockWarp.Style=='SingleColThumWithGoods'">
                <div class="item" v-for="goodsBlock in goodsBlockWarp.GoodsBlocks" :key="goodsBlock.Id">
                    <p>
                        <img @click="goGoodsBlockInfoPage(goodsBlock)" :src="goodsBlock.Thumb" alt="">
                        <svg>
                            <use xlink:href="#uparrows"></use>
                        </svg>
                    </p>
                    <div class="goodslinewarp">
                        <table>
                            <tr>
                                <td v-for="(Goods,vgoodskey) in goodsBlock.Goodses" :key="vgoodskey">
                                    <div @click="goGoodsPage(Goods)">
                                        <p>
                                            <img :src="Goods.Pics[0]" alt="">
                                        </p>
                                        {{Goods.Name|truncate(6)}}
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="SingleLineGoods" v-if="goodsBlockWarp.Style=='SingleLineGoods'">
                <div v-for="goodsBlock in goodsBlockWarp.GoodsBlocks" :key="goodsBlock.Id">
                    <p class="tlt" @click="goGoodsBlockInfoPage(goodsBlock)">
                        -- {{goodsBlock.Name}} --
                    </p>
                    <div class="goodslinewarp">
                        <table>
                            <tr>
                                <td v-for="(Goods,goodsindex) in goodsBlock.Goodses" :key="goodsindex">
                                    <div @click="goGoodsPage(Goods)">
                                        <p>
                                            <img :src="Goods.Pics[0]" alt="">
                                        </p>
                                        {{Goods.Name|truncate(6)}}
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="ColGoods" v-if="goodsBlockWarp.Style=='ColGoods'">
                <div v-for="goodsBlock in goodsBlockWarp.GoodsBlocks" :key="goodsBlock.Id">
                    <p class="tlt" @click="goGoodsBlockInfoPage(goodsBlock)">
                        -- {{goodsBlock.Name}} --
                    </p>
                    <div class="goodsboxwp">
                        <div class="item" v-for="(Goods,gkey) in goodsBlock.Goodses" :key="gkey" @click="goGoodsPage(Goods)">
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
            </div>
            <div class="TwoColThumb" v-if="goodsBlockWarp.Style=='TwoColThumb'">
                <div v-for="goodsBlock in goodsBlockWarp.GoodsBlocks" class="item" :key="goodsBlock.Id">
                    <img @click="goGoodsBlockInfoPage(goodsBlock)" :src="goodsBlock.Thumb" alt="">
                </div>
            </div>
            <div class="FourColThumb" v-if="goodsBlockWarp.Style=='FourColThumb'">
                <div class="item" v-for="goodsBlock in goodsBlockWarp.GoodsBlocks" :key="goodsBlock.Id">
                    <img @click="goGoodsBlockInfoPage(goodsBlock)" :src="goodsBlock.Thumb" alt="">
                </div>
            </div>
        </div>
        <div style="height:1rem;"></div>
    </div>
</template>

<script>
import * as api from '../../api/goodsblock'
import * as checkJs from '../../utils/pubfunc'

export default {
    components: {

    },
    data() {
        return {
            GoodsBlockWarps: []
        }
    },
    mounted() {
        if (!checkJs.isNullOrEmpty(localStorage.GoodsBlockWarps)) {
            this.GoodsBlockWarps = JSON.parse(localStorage.GoodsBlockWarps)
        }
        this.fatchData();
    },
    methods: {
        fatchData() {
            //从服务获取产品
            api.HomeGoodsBlockWarpsApi({}).then(
                res => {
                    if (res.data.Code == 200) {
                        this.GoodsBlockWarps = res.data.GoodsBlockWarps;
                        //缓存到本地
                        localStorage.GoodsBlockWarps = JSON.stringify(this.GoodsBlockWarps)
                    } else {
                        console.log(res.data.Message);
                    }
                },
                err => {
                    console.log('网络错误');
                }
            );
        },
        goGoodsBlockInfoPage(goodsBlock) {
            this.$router.push({ name: 'goodsblockinfo',params:{id:goodsBlock.Id} });
        },
        goGoodsPage(goods) {
            this.$router.push({ name: 'goodsinfo' ,params:{id:goods.Id}});
        }
    }
}
</script>

<style lang="less" scoped>
.goodsblockwp{
    background:#fff;
    padding-bottom:0.5rem;
    .goodsblockwptlt{
        font-size:1.3rem;
        padding:1.5rem 1rem;
    }
}
.SingleColThumb {
    padding: 0 1rem;
    padding-bottom: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    .item {
        img {
            width: 100%;
        }
    }
}

.SingleColThumWithGoods {
    padding: 0 1rem;
    padding-bottom: 0;
    display: flex;
    flex-wrap: wrap;
    .item {
        width: 100%;
        p{
            position:relative;
            img {
                width: 100%;
                margin-bottom: 1rem;
            }
            svg{
                width:2rem;
                height:2rem;
                position:absolute;
                bottom:0.7rem;
                left:48%;
                fill:#fff;
            }
        }
        
        .goodslinewarp{
            overflow-x: auto;
            background: #fff;
            padding-bottom:1rem;
            &::-webkit-scrollbar {
                display: none;
            }
            table {
                border: 0;
                border-spacing: 0;
                tr {
                    td {
                        text-align: center;
                        div {
                            width:7rem;
                            padding: 0 1rem 0.4rem 0;
                            img{
                                width:100%;
                                border:1px solid #efefef;
                            }
                            
                        }
                    }
                }
            }
        }
    }
}
.SingleLineGoods {
    padding: 0 1rem;
    padding-bottom: 0;
    .tlt{
        text-align:center;
        padding-bottom:1.4rem;
        font-size:1.2rem;
    }
    .goodslinewarp{
        overflow-x: auto;
        background: #fff;
        padding-bottom:1.5rem;
        &::-webkit-scrollbar {
            display: none;
        }
        table {
            border: 0;
            border-spacing: 0;
            tr {
                td {
                    text-align: center;
                    div {
                        width:9rem;
                        padding: 0.4rem 1rem 0.4rem 0;
                        img{
                            width:100%;
                            border:1px solid #efefef;
                        }
                        
                    }
                }
            }
        }
    }
}

.ColGoods {
    padding-bottom: 0;
    .tlt{
        text-align:center;
        padding:1rem 0;
        font-size:1.2rem;
    }
    .goodsboxwp {
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    background:#eee;
    .item {
        width: 49.9%;
        margin:1px 0;
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

.TwoColThumb {
    padding: 0 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    .item {
        width:49%;
        img {
            width: 100%;
        }
    }
}

.FourColThumb {
    padding: 0 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    .item {
        width: 23.6%;
        img {
            width: 100%;
        }
    }
}
</style>


