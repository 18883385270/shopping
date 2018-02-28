<template>
    <div>
        <mi-header title="订单详情"></mi-header>
        <mi-stepindicator :steps="Steps" :currentstep="Step"></mi-stepindicator>
        <div class="divider"></div>
        <div class="expressinfo">
            <div class="pd bd-btn" v-if="StoreOrder.Status!='待发货'" @click="viewExpress">
                <svg class="icon icon-sm pull-right">
                    <use xlink:href="#rightarrowsline"></use>
                </svg>
                <p class="text-md">点击查看物流信息</p>
            </div>
            <div class="pd">
                <p class="pd-btn-sm">
                    <span class="lineblock pd-rt">订单状态：</span>
                    <span class="text-primary">{{StoreOrder.Status}}</span>
                </p>
                <p class="pd-btn-sm">
                    <span class="inlineblock pd-rt">订单编号：</span><span class="text-gray">{{StoreOrder.Number}}</span></p>
                <p>
                    <span class="inlineblock pd-rt">下单时间：</span><span class="text-gray">{{StoreOrder.CreatedOn}}</span></p>
            </div>
        </div>
        <div class="divider"></div>
        <div>
            <div class="flexwarp pd bd-btn" v-for="(Goods,goodsindex) in StoreOrder.StoreOrderGoodses" :key="goodsindex" >
                <div class="wd-20p" @click="goGoodsInfoPage(Goods)">
                    <img class="wd-100p img-round" :src="Goods.GoodsPic" alt="">
                </div>
                <div class="wd-80p marg-lf">
                    <p>{{Goods.GoodsName}}</p>
                    <p class="text-gray pd-topbtn-sm">规格：{{Goods.SpecificationName}}</p>
                    <p>数量：x{{Goods.Quantity}}</p>
                    <p v-if="CurrentStep==3">
                        <button class="pull-right smbtn success" @click="comment(Goods)">去评价</button>
                    </p>
                </div>
            </div>
        </div>
        <div class="divider"></div>
        <div class="pd">
            <p class="pd-btn-sm">
                <span>商品总额：</span><span class="pull-right text-danger">{{StoreOrder.Total|currency('￥',2)}}</span></p>
            <p class="pd-btn-sm">
                <span>购物券付款金额：</span><span class="pull-right text-danger">{{StoreOrder.ShopCash|currency('￥',2)}}</span></p>
            <p class="pd-btn-sm">
                <span>运费：</span><span class="pull-right text-danger">￥0.00</span></p>
            <p>
                <span>实付金额：</span>
                <span  class="pull-right text-lg text-danger">{{StoreOrder.Total|currency('￥',2)}}</span>
            </p>
        </div>
        <div class="divider"></div>
        <div class="pd">
            <p class="pd-btn-sm">
                <span class="inlineblock pd-rt">收货地址：</span><span class="text-gray">{{StoreOrder.ExpressRegion}}{{StoreOrder.ExpressAddress}}</span></p>
            <p class="pd-btn-sm">
                <span class="inlineblock pd-rt">收 货 人：</span><span class="text-gray">{{StoreOrder.ExpressName}} {{StoreOrder.ExpressMobile|mobilehide}}</span></p>
            <div v-if="CurrentStep>0">
                <p class="pd-btn-sm">
                    <span class="inlineblock pd-rt">配送方式：</span><span class="text-gray">{{StoreOrder.DeliverExpressName}}</span></p>
                <p>
                    <span class="inlineblock pd-rt">运 单 号：</span><span class="text-gray">{{StoreOrder.DeliverExpressNumber}}</span></p>
            </div>
        </div>
        <div class="pd">
            <button v-if="CurrentStep==1" class="button success" @click="ConfirmExpress">确认收货</button>
            <button v-if="CurrentStep==0 || CurrentStep==1" class="button err" @click="goPage('orderservice')">申请退款</button>
            <button v-if="CurrentStep==4 || CurrentStep==7" class="button err" @click="goPage('refundinfo')">退款详情</button>
            <button v-if="CurrentStep==5 || CurrentStep==6 || CurrentStep==8" class="button err" @click="goPage('returnandrefundinfo')">退款详情</button>
        </div>
        
        <!--弹出框-->
        <mi-modal ref="confirm" type="confirm" @confirmEvent="ConfirmConfirmExpress">
            <div slot="confirm">
                <p class="pd-topbtn text-md">您确认已经收到包裹？</p>
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
            Steps: ['提交订单', '配送中', '订单服务', '交易完成'],
            CurrentStep: 0,
            Step:0,
            StoreOrder: {}
        }
    },
    mounted() {
        this.StoreOrder = JSON.parse(sessionStorage.UserStoreOrder)
        switch (this.StoreOrder.Status) {
            case '待发货':
                this.CurrentStep = 0;
                this.Setp=0;
                break;
            case '待收货':
                this.CurrentStep = 1;
                this.Step=1;
                break;
            case '确认收货':
                this.CurrentStep = 3;
                this.Step=3;
                break;
            case '仅退款':
                this.CurrentStep = 4;
                this.Step=2;
                break;
            case '退货退款':
                this.CurrentStep = 5;
                this.Step=2;
                break;
            case '同意退货':
                this.CurrentStep = 6;
                this.Step=2;
                break;
            case '退货发货':
                this.CurrentStep = 8;
                this.Step=2;
                break;
            case '已关闭':
                this.CurrentStep = 7;
                this.Step=3;
                break;
            default:
                this.Step=2;
        }
    },
    methods: {
        goPage(page) {
            this.$router.push({ name: page });
        },
        viewExpress(){
            //sessionStorage.UserStoreOrder = JSON.stringify(order)
            this.$router.push({ name: 'expressinfo' })
        },
        goGoodsInfoPage(goods){
            this.$router.push({ name: 'goodsinfo',params:{id:goods.GoodsId} });
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

</style>


