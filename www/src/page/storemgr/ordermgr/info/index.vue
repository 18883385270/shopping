<template>
    <div class="page">
        <mi-header title="订单详情"></mi-header>
    
        <div class="expressaddress">
            <p>
                <span>收货地址：</span>{{StoreOrder.ExpressRegion}}{{StoreOrder.ExpressAddress}}</p>
            <p>
                <span>收货人：</span>{{StoreOrder.ExpressName}}【收】 {{StoreOrder.ExpressMobile}}</p>
        </div>
        <div class="ordergoodses">
            <div class="goods" v-for="Goods in StoreOrder.StoreOrderGoodses">
                <div class="pic">
                    <img src="https://i8.mifile.cn/v1/a1/1fbd6d1f-05bf-f22e-cba8-250dfade437d.webp?width=360&heihgt=256" alt="">
                </div>
                <div class="cnt">
                    <p>{{Goods.GoodsName}}</p>
                    <p>{{Goods.SpecificationName}}</p>
                    <p>数量：x{{Goods.Quantity}}</p>
                </div>
            </div>
        </div>
        <div class="totalinfo">
    
            <p>
                <span>商品总额：</span>{{StoreOrder.Total|currency('￥',2)}}</p>
            <p>
                <span>优惠：</span>￥0.00</p>
            <p>
                <span>运费：</span>￥0.00</p>
            <p>
                <span>实付金额：</span>
                <i class="big">{{StoreOrder.Total|currency('￥',2)}}</i>
            </p>
        </div>
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
                <button class="button success" @click="toDeliver">发货</button>
            </div>
        </div>
    </div>
</template>

<script>
import header from '../../../../components/header.vue';

export default {
    components: {
        'mi-header': header
    },
    data() {
        return {
            StoreOrder: {}
        }
    },
    mounted() {
        this.StoreOrder = this.$route.params.StoreOrder || {};
    },
    methods: {
        goPage(page) {
            this.$router.push({ path: page });
        },
        toDeliver(){
            this.$router.replace({ name: 'deliver',params:{StoreOrder:this.StoreOrder} });
        }
    }
}
</script>

<style lang="less">
.page {
    .expressinfo {
        margin-top:1rem;
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
        }
    }
    .expressaddress {
        padding: 1rem;
        background: #fff;
        margin-top: 1rem;
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
        margin-top:1rem;
        background: #fff;
        .goods {
            display: flex;
            border-bottom: 1px dashed #eee;
            .pic {
                width: 30%;
                padding: 0 1rem 0 1rem;
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
        padding: 1rem;
        background: #fff;
        margin-top: 1rem;
        color:#c03;
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
}
</style>


