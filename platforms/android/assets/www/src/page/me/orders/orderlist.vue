<template>
    <div>
        <div class="emptybox" v-if="!StoreOrders.length">
            <svg>
                <use xlink:href="#empty"></use>
            </svg>
            <p> 没有订单，去逛逛吧</p>
        </div>

        <div class="orderlswarp">
            <div class="orderwarp" v-for="StoreOrder in StoreOrders" @click="goInfoPage(StoreOrder)">
                <div class="divider"></div>
                <div class="header" @click="goInfoPage(StoreOrder)">
                    <div class="ordernumber">订单号：{{StoreOrder.Number}}</div>
                    <div class="orderstatus">{{StoreOrder.Status}}</div>
                </div>
                <div class="ordgoods">
                    <div class="storetlt">{{StoreOrder.StoreName}}</div>
                    <div class="goods" v-for="Goods in StoreOrder.StoreOrderGoodses">
                        <div class="goodspic">
                            <img :src="Goods.GoodsPic" />
                        </div>
                        <div class="goodstlt">
                            <p class="goodsname">{{Goods.GoodsName}}</p>
                            <p>{{Goods.SpecificationName}} {{Goods.Quantity}}件</p>
                        </div>
                    </div>
                </div>
                <div class="ordertools">
                    <div class="price">总计：
                        <span>{{StoreOrder.Total|currency('￥',2)}}</span>
                    </div>
                    <div class="btns">
                        <!-- <button>再次购买</button><button class="del">删除</button> -->
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>


export default {
    props: ['StoreOrders'],
    data() {
        return {
        }
    },
    methods: {
        goInfoPage(order) {
            //要传递的订单信息存到sessionStorage
            sessionStorage.UserStoreOrder = JSON.stringify(order)
            this.$router.push({ name: 'orderinfo' })
        }
    }
}
</script>

<style lang="less" scoped>
.orderwarp {
    margin-bottom: 1rem;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    .header {
        display: flex;
        border-bottom: 1px solid #eee;
        .ordernumber {
            width: 50%;
            padding: 1rem 0;
            text-indent: 1rem;
        }
        .orderstatus {
            width: 50%;
            text-align: right;
            margin-right: 1rem;
            padding: 1rem 0;
        }
    }
    .ordgoods {
        padding: 0 1rem;
        border-bottom: 1px solid #eee;
        .storetlt {
            font-size: 1.3rem;
            font-weight: 400;
            padding: 1rem 0;
        }
        .goods {
            display: flex;
            margin-bottom: 0.5rem;
            .goodspic {
                width: 20%;
                img {
                    width: 100%;
                }
            }
            .goodstlt {
                width: 80%;
                margin-left: 1rem;
                .goodsname {
                    margin-bottom: 0.7rem;
                }
            }
        }
    }
    .ordertools {
        display: flex;
        >div {
            width: 50%;
            &.price {
                font-size: 1.2rem;
                margin-left: 1rem;
                padding: 1rem 0;
                span {
                    color: #c33;
                    font-weight: 400;
                }
            }
            &.btns {
                padding: 0.8rem 0;
                text-align: right;
                margin-right: 1rem;
                button {
                    border: 0;
                    padding: 0.3rem 1rem;
                    margin-left: 0.5rem;
                    border-radius: 2px;
                    &.del {
                        background: #c33;
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>


