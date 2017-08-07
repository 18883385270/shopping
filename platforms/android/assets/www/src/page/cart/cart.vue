<template>
    <div class="cartwarper">
        <div class="storewarp" v-for="(store,storeindex) in mycart">
            <div class="storetitle">
                <div class="checkbar">
                    <input type="checkbox" @click="storeCheckAll(store.storeId,$event)">
                </div>
                <div class="title">{{store.storeName}}</div>
            </div>
            <div class="cuxiao">{{store.youhui}}</div>
            <div class="storecontent">
                <div class="goodswarp" v-for="(goods,goodsindex) in store.goodses" v-bind:class="{selected:goods.checked}">
                    <div class="checkbar">
                        <input type="checkbox" v-model="goods.checked">
                    </div>
                    <div class="goodsimg">
                        <img src="https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360" />
                    </div>
                    <div class="goodsinfo">
                        <p class="goodsname">{{goods.name}}</p>
                        <p class="goodsspecification">规格：{{goods.specificationName}}</p>
                        <p class="goodsprice">￥{{goods.price}}
                            <span>库存{{goods.stock}}件</span>
                        </p>
                        <p class="buycount">
                            <span class="del" @click="delGoods(goods)">
                                <svg>
                                    <use xlink:href="#delline"></use>
                                </svg>
                            </span>
                            <mi-buycount v-model="goods.buycount" :stock="goods.stock"></mi-buycount>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="buttombar">
            <div class="checkbar">
                <input type="checkbox" @click="checkAll($event)">
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
        <div style="height: 5rem;"></div>
    </div>
</template>

<script>
import buycount from '../../components/buycount.vue';
import modal from '../../components/modal.vue';
import data from '../../../../data.json';

export default {
    components: {
        'mi-buycount': buycount,
        'mi-modal': modal
    },
    data() {
        return {
            mycart: [],
            todelgoods: {}
        }
    },
    created() {
        this.mycart = data.mycart;
    },
    methods: {
        storeCheckAll(storeid, evnt) {
            //店铺级别全选
            var checkbox = evnt.target;
            this.mycart.forEach(function (store, index) {
                if (storeid == store.storeId) {
                    store.goodses.forEach(function (goods) {
                        goods.checked = checkbox.checked;
                    });
                }
            });
        },
        checkAll(evnt){
            //全选
            var checkbox = evnt.target;
            this.mycart.forEach(function (store, index) {
                store.goodses.forEach(function (goods) {
                    goods.checked = checkbox.checked;
                });
            });
        },
        delGoods(goods) {
            this.todelgoods = goods;
            console.log(this.todelgoods);
            this.$refs.confirm.modalOpen();
        },
        confirmDelGoods(num) {
            console.log(num);
            console.log(this.todelgoods);
            if (num == 1) {
                //删除商品
                this.mycart.forEach(function (store, index) {
                    store.goodses.forEach(function (item) {
                        if (item.id == this.todelgoods.id) {
                            store.goodses.splice(store.goodses.indexOf(this.todelgoods), 1);
                            return;
                        }
                    });
                });
            }

        },
        getCheckCount() {
            var count=0;
            this.mycart.forEach(function (store, index) {
                store.goodses.forEach(function (goods) {
                    if (goods.checked) {
                        count += goods.buycount;
                    }
                });
            });
            return count;
        },
        getCheckAmount() {
            var amount=0;
            this.mycart.forEach(function (store, index) {
                store.goodses.forEach(function (goods) {
                    if (goods.checked) {
                        amount += goods.price * goods.buycount;
                    }
                });
            });
            return amount;
        },
        postOrder(){
            this.$router.push({path:'/cart/postorder'});
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
        margin-top: 1rem;
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
                &.selected{
                    background:lightyellow;
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
                    .goodsname {
                    }
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
                            svg{
                                width:1rem;height:1rem;fill:#666;
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
            padding-top: 1rem;
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
            button {
                display: block;
                width: 100%;
                height: 100%;
                text-align: center;
                font-size: 1.3rem;
                background: #C1272D;
                border: 0;
                color: #fff;
                span {
                    font-size: 1rem;
                }
                &:disabled {
                    background: #ddd;color:#666;
                }
            }
        }
    }
    .confirm{
        text-align: center;
        p{
        }
    }
}
</style>

