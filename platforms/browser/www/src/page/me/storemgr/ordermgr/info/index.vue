<template>
    <div class="page">
        <mi-header title="订单详情"></mi-header>
        <div class="divider"></div>
        <div class="expressaddress">
            <p>
                <span>收货地址：</span>{{StoreOrder.ExpressRegion}}{{StoreOrder.ExpressAddress}}</p>
            <p>
                <span>收货人：</span>{{StoreOrder.ExpressName}}【收】 {{StoreOrder.ExpressMobile}}</p>
        </div>
        <div class="divider"></div>
        <div class="ordergoodses">
            <div class="goods" v-for="Goods in StoreOrder.StoreOrderGoodses" :key="Goods.Id">
                <div class="pic">
                    <img :src="Goods.GoodsPic" alt="">
                </div>
                <div class="cnt">
                    <p>{{Goods.GoodsName}}</p>
                    <p>{{Goods.SpecificationName}}</p>
                    <p>数量：x{{Goods.Quantity}}</p>
                </div>
            </div>
        </div>
        <div class="divider"></div>
        <div class="totalinfo">
            <p>
                <span>商品总额：</span>{{StoreOrder.Total|currency('￥',2)}}</p>
            <p>
                <span>购物券付款：</span>{{StoreOrder.ShopCash|currency('￥',2)}}</p>
            <p>
                <span>运费：</span>￥0.00</p>
            <p>
                <span>实付金额：</span>
                <i class="big">{{StoreOrder.Total|currency('￥',2)}}</i>
            </p>
        </div>
        <div class="divider"></div>
        <div class="expressinfo">
            <div class="orderstatus">
                <p>
                    <span>订单状态：</span>
                    <i class="blu">{{StoreOrder.Status}}</i>
                </p>
                <p>
                    <span>订单号：</span>{{StoreOrder.Number}}</p>
                <p>
                    <span>下单时间：</span>{{StoreOrder.CreatedOn}}</p>
            </div>
            <div class="btntools">
                <!-- <p v-if="StoreOrder.Status=='待发货'" class="zhuanyitip">为提高效率，发货操作已移植到电脑端，请登录 store.wftx666.com 进行发货操作，如对您造成不便还请谅解~</p> -->
                <button v-if="StoreOrder.Status=='待发货'" class="button success" @click="goPage('deliver')">发货</button>
                <button v-if="StoreOrder.Status=='仅退款'" class="button err" @click="agreeRefund">同意退款</button>
            </div>
        </div>

        <!--弹出框-->
        <mi-modal ref="confirm" type="confirm" @confirmEvent="ConfirmAgreeRefund">
            <div slot="confirm" class="confirm">
                <p class="tlt">您确认同意退款？</p>
                <p>同意退款后，系统会将货款退还给买家，并关闭订单</p>
            </div>
        </mi-modal>
    </div>
</template>

<script>
import header from '../../../../../components/header.vue'
import modal from '../../../../../components/modal.vue'

import * as api from '../../../../../api/storeorder'
import * as checkJs from '../../../../../utils/pubfunc'

export default {
    components: {
        'mi-header': header,
        'mi-modal': modal
    },
    data() {
        return {
            StoreOrder: {}
        }
    },
    mounted() {
        if (!checkJs.isNullOrEmpty(sessionStorage.StoreStoreOrder)) {
            this.StoreOrder = JSON.parse(sessionStorage.StoreStoreOrder)
        }
    },
    methods: {
        goPage(page) {
            this.$router.push({ name: page });
        },
        agreeRefund() {
            this.$refs.confirm.modalOpen();
        },
        ConfirmAgreeRefund(num) {
            //确认收货
            if (num == 0) {
                return false;
            }
            let params = {
                Id: this.StoreOrder.Id
            };
            api.AgreeRefundApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        this.$router.replace({ name: 'ordermgr' })
                    } else {
                        console.log(res.data.Message);
                    }
                },
                err => {
                    console.log('网络错误');
                }
            )
        }
    }
}
</script>

<style lang="less">
.expressinfo {
    padding: 1rem;
    background: #fff;
    .exinfo {
        padding: 1rem 0;
        border-top: 1px dashed #eee;
        border-bottom: 1px dashed #eee;
    }


    .orderstatus {
        margin-top: 1rem;
        p {
            padding: 0.2rem 0;
            span {
                color: #999;
                display: inline-block;
                width: 7rem;
            }
            .blu {
                color: #06c;
                font-style: normal;
            }
        }
    }
    .btntools {
        margin-top: 1rem;
        .zhuanyitip{
            background:#eee;
            padding:0.5rem;
        }
    }
}

.expressaddress {
    padding: 1rem;
    background: #fff;
    p {
        padding: 0.2rem 0;
        span {
            color: #999;
            display: inline-block;
            width: 7rem;
        }
    }
}

.ordergoodses {
    padding-top: 1rem;
    margin-top: 1rem;
    background: #fff;
    .goods {
        display: flex;
        border-bottom: 1px dashed #eee;
        .pic {
            width: 30%;
            padding: 0 1rem 0.6rem 1rem;
            img {
                width: 100%;
            }
        }
        .cnt {
            width: 70%;
        }
    }
}

.totalinfo {
    padding:1rem;
    background: #fff;
    color: #c03;
    p {
        padding: 0.2rem 0;
        text-align: right;
        span {
            color: #999;
            float: left;
            color: #666;
        }
        .big {
            font-size: 1.4rem;
            font-weight: 400;
            font-style: normal;
        }
    }
}
</style>


