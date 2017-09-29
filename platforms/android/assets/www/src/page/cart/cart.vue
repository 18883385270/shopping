<template>
    <div class="cartwarper">
        <div class="emptybox" v-if="!StoreCartGoods.length">
            <svg>
                <use xlink:href="#cartline"></use>
            </svg>
            <p> 购物车中，没有任何商品，去逛逛吧</p>
        </div>
        <div class="storewarp" v-for="(store,storeindex) in StoreCartGoods">
            <div class="divider"></div>
            <div class="storetitle">
                <div class="checkbar">
                    <input type="checkbox" :id="'stcheck'+storeindex" class="regular-checkbox" @click="storeCheckAll(store.StoreId,$event)">
                    <label :for="'stcheck'+storeindex"></label>
                </div>
                <div class="title">{{store.StoreName}}</div>
            </div>
            <div class="cuxiao">店铺的优惠信息</div>
            <div class="storecontent">
                <div class="goodswarp" v-for="(goods,goodsindex) in store.CartGoodses" v-bind:class="{selected:goods.Checked}">
                    <div class="checkbar">
                        <span v-if="goods.Stock>0 && goods.IsGoodsPublished && goods.GoodsStatus=='Verifyed'">
                            <input type="checkbox" :id="'check'+storeindex+goodsindex" class="regular-checkbox" v-model="goods.Checked">
                            <label :for="'check'+storeindex+goodsindex"></label>
                        </span>
                        <p v-if="goods.Stock==0 || !goods.IsGoodsPublished || goods.GoodsStatus!='Verifyed'">失效</p>
                    </div>
                    <div class="goodsimg" @click="goGoodsInfoPage(goods)">
                        <img :src="goods.GoodsPic" />
                    </div>
                    <div class="goodsinfo">
                        <p class="goodsname" @click="goGoodsInfoPage(goods)">{{goods.GoodsName}}</p>
                        <p class="goodsspecification">规格：{{goods.SpecificationName}}</p>
                        <p class="goodsprice">{{goods.Price|currency('￥',2)}}
                            <span>库存{{goods.Stock}}件</span>
                        </p>
                        <p class="buycount">
                            <span class="del" @click="delGoods(goods)">
                                <svg>
                                    <use xlink:href="#delline"></use>
                                </svg>
                            </span>
                            <mi-buycount v-model="goods.Quantity" :stock="goods.Stock"></mi-buycount>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="buttombar">
            <div class="checkbar">
                <input type="checkbox" id="checkall_checkbox" class="regular-checkbox" @click="checkAll($event)">
                <label for="checkall_checkbox"></label>
                <p>全选</p>
            </div>
            <div class="total">
                <p>总计：
                    <span class="price">￥{{getCheckAmount()}}</span>
                </p>
                <p class="youhui">(不含运费，已优惠￥0.00元)</p>
            </div>
            <div class="jiesuanbtn">
                <button v-bind="{disabled:getCheckCount()==0}" @click="postOrder">去结算
                    <span>({{getCheckCount()}}件)</span>
                </button>
            </div>
        </div>
        <!--弹出框-->
        <mi-modal ref="confirm" type="confirm" @confirmEvent="confirmDelGoods">
            <div slot="confirm" class="confirm">
                <p>确定删除此商品？</p>
            </div>
        </mi-modal>
        <div style="height: 5.5rem;"></div>
    </div>
</template>

<script>
import buycount from '../../components/buycount.vue'
import modal from '../../components/modal.vue'
import * as api from '../../api/cart'
import * as checkJs from '../../utils/pubfunc'

export default {
    components: {
        'mi-buycount': buycount,
        'mi-modal': modal
    },
    data() {
        return {
            StoreCartGoods: [],
            todelgoods: {}
        }
    },
    created() {
        //this.mycart = data.mycart;
    },
    mounted() {
        this.getList();
    },
    methods: {
        goGoodsInfoPage(goods){
            sessionStorage.GoodsId = goods.GoodsId
            this.$router.push({ name: 'goodsinfo' });
        },
        getList() {
            //获取购物车数据
            let params = {};
            api.InfoApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        this.StoreCartGoods = res.data.StoreCartGoods;
                    } else {
                        console.log(res.data.Message);
                    }
                },
                err => {
                    console.log('网络错误');
                }
            )
        },
        storeCheckAll(storeid, evnt) {
            //店铺级别全选
            var checkbox = evnt.target;
            this.StoreCartGoods.forEach(function (store, index) {
                if (storeid == store.StoreId) {
                    store.CartGoodses.forEach(function (goods) {
                        if(goods.Stock>0 && goods.IsGoodsPublished && goods.GoodsStatus=='Verifyed'){
                            goods.Checked = checkbox.checked;
                        }
                    });
                }
            });
        },
        checkAll(evnt) {
            //全选
            var checkbox = evnt.target;
            this.StoreCartGoods.forEach(function (store, index) {
                store.CartGoodses.forEach(function (goods) {
                    if(goods.Stock>0 && goods.IsGoodsPublished && goods.GoodsStatus=='Verifyed')
                    {
                        goods.Checked = checkbox.checked;
                    }
                });
            });
        },
        delGoods(goods) {
            this.todelgoods = goods;
            this.$refs.confirm.modalOpen();
        },
        confirmDelGoods(num) {
            console.log(this.todelgoods);
            let self = this;
            //删除本地数据方法
            let delLocalGoods = () => {
                this.StoreCartGoods.forEach(function (store, index) {
                    store.CartGoodses.forEach(function (item, goodsindex) {
                        if (item.Id == self.todelgoods.Id) {
                            store.CartGoodses.splice(goodsindex, 1);
                            return;
                        }
                    });
                });
            }
            if (num == 1) {
                //提交到服务器
                let params = { Id: this.todelgoods.Id };
                api.RemoveCartGoodsApi(params).then(
                    res => {
                        if (res.data.Code == 200) {
                            delLocalGoods();
                            this.getList();
                        } else {
                            console.log(res.data.Message);
                        }
                    },
                    err => {
                        console.log('网络错误');
                    }
                )

            }

        },
        getCheckCount() {
            var count = 0;
            this.StoreCartGoods.forEach(function (store, index) {
                store.CartGoodses.forEach(function (goods) {
                    if (goods.Checked) {
                        count += goods.Quantity;
                    }
                });
            });
            return count;
        },
        getCheckAmount() {
            var amount = 0;
            this.StoreCartGoods.forEach(function (store, index) {
                store.CartGoodses.forEach(function (goods) {
                    if (goods.Checked) {
                        amount += goods.Price * goods.Quantity;
                    }
                });
            });
            return amount;
        },
        postOrder() {
            var storecartgoodses = [];
            //找到选中的商品提交到订单页面
            this.StoreCartGoods.forEach(function (store, index) {
                store.CartGoodses.forEach(function (goods, goodsindex) {
                    if (goods.Checked) {
                        if (checkJs.isNullOrEmpty(storecartgoodses[index])) {
                            storecartgoodses.push({
                                StoreId: store.StoreId,
                                StoreName: store.StoreName,
                                CartGoodses: []
                            });
                        }
                        storecartgoodses[index].CartGoodses.push(goods);
                    }
                });
            });
            //提交到确认订单页面
            sessionStorage.StoreCartGoods = JSON.stringify(storecartgoodses)
            this.$router.push({ name: 'postorder' });
        }
    }
}
</script>

<style lang="less" scoped>
.cartwarper {
    padding: 0;

    .storewarp {
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        background: #fff;
        .storetitle {
            font-size: 1.3rem;
            padding: 1rem 0;
            display: flex;
            .checkbar {
                width: 10%;
                text-align: center;
            }
            .title {
                width: 90%;
            }
        }
        .cuxiao {
            line-height: 1.4rem;
            border-top: 1px solid #eee;
            padding: 1rem;
        }
        .storecontent {
            .goodswarp {
                display: flex;
                padding-top: 1rem;
                padding-bottom: 1rem;
                border-top: 1px solid #eee;
                &.selected {
                    background: lightyellow;
                }
                .checkbar {
                    width: 10%;
                    text-align: center;
                    padding-top: 3rem;
                }
                .goodsimg {
                    width: 20%;
                    text-align: center;
                    img {
                        width: 100%;
                    }
                }
                .goodsinfo {
                    width: 70%;
                    padding-left: 1rem;
                    .goodsname {}
                    .goodsspecification {
                        margin-top: 0.5rem;
                        color: #666;
                    }
                    .goodsprice {
                        color: #C1272D;
                        font-size: 1.4rem;
                        margin-top: 0.5rem;
                        margin-bottom: 0.5rem;
                        span {
                            font-size: 1rem;
                            color: #666;
                        }
                    }
                    .buycount {
                        .del {
                            float: right;
                            display: inline-block;
                            padding: 0.5rem 2rem 0.5rem 0;
                            svg {
                                width: 1.5rem;
                                height: 1.5rem;
                                fill: #666;
                            }
                        }
                    }
                }
            }
        }
    }

    .buttombar {
        position: fixed;
        bottom: 4rem;
        left: 0;
        display: flex;
        height: 4rem;
        width: 100%;
        background: #fff;
        border-top: 1px solid #eee;
        .checkbar {
            width: 10%;
            padding-top: 0.3rem;
            text-align: center;
        }
        .total {
            width: 60%;
            text-align: right;
            font-size: 1.3rem;
            padding: 0.5rem 1rem 0.5rem 0;
            .price {
                color: #C1272D;
            }
            .youhui {
                font-size: 1rem;
                font-weight: 400;
            }
        }
        .jiesuanbtn {
            width: 30%;
            text-align: center;
            background: #ddd;
            button {
                display: block;
                width: 100%;
                height: 4rem;
                text-align: center;
                font-size: 1.3rem;
                background: #C1272D;
                border: 0;
                color: #fff;
                span {
                    font-size: 1rem;
                }
                &:disabled {
                    background: #ddd;
                    color: #666;
                }
            }
        }
    }
    .confirm {
        text-align: center;
        p {
            font-size:1.3rem;
        }
    }
}
</style>

