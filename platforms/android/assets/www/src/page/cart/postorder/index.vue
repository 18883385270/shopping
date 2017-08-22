<template>
    <div>
        <mi-header title="确认订单"></mi-header>
        <div class="exadd" @click="showpicker">
            <div class="tlt">收货地址</div>
            <div class="cnt">
                <div v-if="ExpressAddress">
                    <p> {{ExpressAddress.Region}} {{ExpressAddress.Address}}</p>
                    <p>{{ExpressAddress.Name}} {{ExpressAddress.Mobile|mobilehide}}</p>
                </div>
                <div class="noaddress" v-if="!ExpressAddress">选择收货地址</div>
            </div>
            <div class="change">
                <svg>
                    <use xlink:href="#rightarrowsline"></use>
                </svg>
            </div>
        </div>
        <mi-ordergoods :StoreCartGoods="StoreCartGoods"></mi-ordergoods>
        <div class="youhuiwarp">
            <div class="tablerow">
                <div class="tlt">发票信息</div>
                <div class="cnt">个人</div>
            </div>
            <div class="tablerow">
                <div class="tlt">优惠券</div>
                <div class="cnt">已使用一张 已抵用￥30</div>
            </div>
        </div>
        <div class="remark">
            <div class="info">
                <input type="text" placeholder="订单备注(限45字，请勿填写发票、配送方面的信息)">
            </div>
        </div>
        <div class="paytype">
            <div class="total">
                总价：
                <span>￥{{CalTotalAmount()}}</span>
                <p>包含运费:4.5元</p>
                
            </div>
            <button class="button warning" @click="PostOrderEvent">提交订单</button>
        </div>
        <expressaddresspicker ref="expressaddresspicker" @expressaddressPickerEvent="expressaddressPickerHandle"></expressaddresspicker>
        <mi-toast ref="toast"></mi-toast>

    </div>
</template>

<script>
import header from '../../../components/header.vue';
import vswitch from '../../../components/switch.vue';
import expressaddresspicker from '../../pickers/expressaddresspicker.vue'
import toast from '../../../components/toast.vue'
import ordergoods from './ordergoods.vue';
import * as api from '../../../api/order'
import * as checkJs from '../../../utils/pubfunc'


export default {
    components: {
        'mi-header': header,
        'mi-switch': vswitch,
        'mi-ordergoods': ordergoods,
        'expressaddresspicker':expressaddresspicker,
        'mi-toast':toast
    },
    data() {
        return {
            ExpressAddress: {},
            StoreCartGoods:[]
        }
    },
    mounted(){
        this.StoreCartGoods=this.$route.params.StoreCartGoods;
    },
    methods: {
        showpicker() {
            this.$refs.expressaddresspicker.show();
        },
        expressaddressPickerHandle(expressaddress) {
            this.ExpressAddress = expressaddress;
        },
        CalTotalAmount(){
            var amount=0;
            this.StoreCartGoods.forEach(function (store, index) {
                store.CartGoodses.forEach(function (goods) {
                    amount+=(goods.Price*goods.Quantity)
                });
            });
            return amount;
        },
        toPage(page,params){
            this.$router.replace({name:page,params:params});
        },
        PostOrderEvent(){
            let alertFuc = (msg) => {
                const toast = this.$refs.toast;
                toast.show(msg);
                return false
            }
            
            if(checkJs.isNullOrEmpty(this.ExpressAddress)){
                alertFuc('请选择收货地址')
	            return;
            }
            var cartGoodses=[];
            this.StoreCartGoods.forEach(function (store, index) {
                store.CartGoodses.forEach(function (goods) {
                    cartGoodses.push(goods);
                });
            });
            let totalamount=this.CalTotalAmount();
            let params = {
                ExpressAddress:this.ExpressAddress,
                CartGoodses:cartGoodses
            };
            //提交订单
            api.AddApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        var orderId=res.data.OrderId;
                        var paymentId=res.data.PaymentId;
                        //提交订单成功并且创建好待付款项目 进入支付页面
                        this.toPage('pay',{amount:totalamount,orderid:orderId,paymentid:paymentId,type:'order',ordernumber:'',remark:''});
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


<style lang="less" scoped>
.youhuiwarp {
    background: #fff;
    margin-top: 1rem;
    
    .paypassword {
        padding: 1rem;
        display: flex;
        .tlt {
            font-size: 1.3rem;
            line-height: 3.3rem;
            padding-right: 2rem;
        }
    }
}

.remark {
    background: #fff;
    margin-top: 1rem;
    .info {
        padding: 1rem;
        input {
            font-size: 1.3rem;
            color: #999;
            padding: 0.5rem 0;
            border: none;
            width:100%;
            &:focus {
                outline: none;
            }
        }
    }
}

.paytype {
    background: #fff;
    margin-top: 1rem;
    padding: 1rem;
    font-size: 1.3rem;
    text-align: center;
    .total {
        color: #666;
        padding-top: 1rem;
        span {
            color: #c03;
        }
        p {
            font-size:1rem;
        }
    }
    p {
        padding-top: 0.5rem;
        font-size: 1rem;
    }
    
}
</style>

