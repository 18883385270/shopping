<template>
    <div>
        <mi-header title="订单详情"></mi-header>
        <mi-stepindicator :steps="Steps" :currentstep="CurrentStep"></mi-stepindicator>
        <div class="divider"></div>
        <div class="expressinfo">
            <div class="exinfo" v-if="StoreOrder.Status!='待发货'" @click="goPage('/orders/info/expressinfo')">
                点击查看物流信息
                <svg>
                    <use xlink:href="#rightarrowsline"></use>
                </svg>
            </div>
            <div class="orderstatus">
                <p>
                    <span>订单状态：</span>
                    <i class="blu">{{StoreOrder.Status}}</i>
                </p>
                <p>
                    <span>订单编号：</span>{{StoreOrder.Number}}</p>
                <p>
                    <span>下单时间：</span>{{StoreOrder.CreatedOn}}</p>
            </div>
        </div>
        <div class="divider"></div>
        <div class="ordergoodses">
            <div class="goods" v-for="Goods in StoreOrder.StoreOrderGoodses" >
                <div class="pic" @click="goGoodsInfoPage(Goods)">
                    <img :src="Goods.GoodsPic" alt="">
                </div>
                <div class="cnt">
                    <p>{{Goods.GoodsName}}</p>
                    <p>{{Goods.SpecificationName}}</p>
                    <p>数量：x{{Goods.Quantity}}</p>
                    <p class="goodsbtns" v-if="CurrentStep==3">
                        <button @click="comment(Goods)">去评价</button>
                    </p>
                </div>
            </div>
        </div>
        <div class="divider"></div>
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
        <div class="divider"></div>
        <div class="expressaddress">
            <p>
                <span>收货地址：</span>{{StoreOrder.ExpressRegion}}{{StoreOrder.ExpressAddress}}</p>
            <p>
                <span>收货人：</span>{{StoreOrder.ExpressName}} {{StoreOrder.ExpressMobile|mobilehide}}</p>
            <div v-if="CurrentStep>0">
                <p>
                    <span>配送方式：</span>{{StoreOrder.DeliverExpressName}}</p>
                <p>
                    <span>运单号：</span>{{StoreOrder.DeliverExpressNumber}}</p>
            </div>
        </div>
        <div class="btntools" v-if="CurrentStep==3">
            <!-- <button>去评价</button>
                    <button class="success">再次购买</button> -->
            <!-- <button>赢免单</button> -->
        </div>
        <div class="btntools" v-if="CurrentStep==1">
            <button class="button success" @click="ConfirmExpress">确认收货</button>
            <!-- <button class="success">退货退款</button>
                    <button>赢免单</button> -->
        </div>
        <div class="btntools" v-if="CurrentStep==0">
            <button class="button err" @click="toPage('applyrefund')">申请退款</button>
            <!-- <button class="success">提醒发货</button>
                    <button>赢免单</button> -->
        </div>
        <div class="divider"></div>
        <!--弹出框-->
        <mi-modal ref="confirm" type="confirm" @confirmEvent="ConfirmConfirmExpress">
            <div slot="confirm" class="confirm">
                <p class="tlt">您确认已经收到包裹？</p>
                <p>请确认，否是可能会导致您财货两空</p>
            </div>
        </mi-modal>
    </div>
</template>

<script>
import header from '../../../../components/header.vue';
import modal from '../../../../components/modal.vue'
import stepindicator from '../../../../components/stepindicator.vue';
import * as api from '../../../../api/storeorder'

export default {
    components: {
        'mi-header': header,
        'mi-stepindicator': stepindicator,
        'mi-modal': modal
    },
    data() {
        return {
            Steps: ['提交订单', '配送中', '包裹服务', '交易完成'],
            CurrentStep: 0,
            StoreOrder: {}
        }
    },
    mounted() {
        this.StoreOrder = JSON.parse(sessionStorage.UserStoreOrder)
        switch (this.StoreOrder.Status) {
            case '待发货':
                this.CurrentStep = 0;
                break;
            case '待收货':
                this.CurrentStep = 1;
                break;
            case '确认收货':
                this.CurrentStep = 3;
                break;
            default:
                this.CurrentStep = 2;
        }
    },
    methods: {
        toPage(page) {
            this.$router.push({ name: page });
        },
        goGoodsInfoPage(goods){
            sessionStorage.GoodsId = goods.GoodsId
            this.$router.push({ name: 'goodsinfo' });
        },
        comment(goods){
            sessionStorage.ToCommentGoods = JSON.stringify(goods)
            this.$router.push({name:'comment'})
        },
        ConfirmExpress() {
            this.$refs.confirm.modalOpen();
        },
        ConfirmConfirmExpress(num) {
            //确认收货
            if (num == 0) {
                return false;
            }
            let params = {
                Id: this.StoreOrder.Id
            };
            api.ConfirmDeliverApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        this.$router.replace({ name: 'orders' })
                    } else {
                        console.log(res.data.Message);
                    }
                },
                err => {
                    console.log('网络错误');
                }
            )

        },
        goPage(page) {
            this.$router.push({ path: page });
        }
        
    }
}
</script>

<style lang="less" scoped>
.expressinfo {
    padding: 1rem;
    padding-top: 0;
    background: #fff;
    .exinfo {
        padding: 1rem 0;
        border-bottom: 1px dashed #eee;
        font-size:1.2rem;
        svg{
            width:1.2rem;
            height:1.2rem;
            float:right;
        }
    }
    .orderstatus {
        padding-top:1rem;
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

.btntools {
        padding:1rem;
    }

.ordergoodses {
    background: #fff;
    .goods {
        display: flex;
        padding:1rem 0;
        border-bottom: 1px dashed #eee;
        .pic {
            width: 30%;
            padding: 0 1rem;
            img {
                width: 100%;
            }
        }
        .cnt {
            width: 70%;
            .goodsbtns{
                padding-top:1rem;
                button{
                    padding:0.3rem 1.5rem;
                    background:#096;
                    color:#fff;
                    border:0;
                    outline:none;
                    border-radius:2px;
                }
            }
        }
    }
}
.totalinfo {
    padding: 1rem;
    background: #fff;
    margin-top: 1rem;
    p {
        padding: 0.2rem 0;
        text-align: right;
        color: #c66;
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

.confirm {
    .tlt {
        font-size: 1.3rem;
        padding: 1rem 0;
    }
}
</style>


