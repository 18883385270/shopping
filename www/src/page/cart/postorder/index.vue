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
        <div class="divider"></div>
            <div class="flexwarp bg-white pd-topbtn bd-btn">
                <div class="wd-50p"><p class="text-lg marg-lf">发票信息</p></div>
                <div class="wd-50p text-right"><p class="marg-rt text-md text-lightgray">个人</p></div>
            </div>
            <div class="flexwarp bg-white pd-topbtn bd-btn">
                <div class="wd-50p"><p class="text-lg marg-lf">优惠券</p></div>
                <div class="wd-50p text-right"><p class="marg-rt text-md text-lightgray">未使用优惠券</p></div>
            </div>
        <div class="divider"></div>
        <div class="remark">
            <div class="info">
                <input type="text" placeholder="订单备注(限45字，请勿填写发票、配送方面的信息)">
            </div>
        </div>
        <div class="divider"></div>
        <div class="bg-white pd text-md">
            <div class="text-center">
                订单小计：
                <span class="text-danger">￥{{CalTotalAmount()}}</span>
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
        this.StoreCartGoods=JSON.parse(sessionStorage.StoreCartGoods);
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
            
            //判断是否购买自家商品
            var ishasmygoods=false;
            var myStoreId=this.$store.state.global.userinfo.StoreId;
            if(!checkJs.isNullOrEmpty(myStoreId)){
                cartGoodses.forEach(function(goods){
                    if(goods.StoreId==myStoreId){
                        ishasmygoods=true;
                    }
                })
            }
            
            if(ishasmygoods){
                alertFuc('订单中包含自家商品，请检查')
	            return;
            }

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
                        let toPayInfo={
                            Type:'order',
                            OrderId:orderId,
                            PaymentId:paymentId,
                            OrderNumber:'',
                            Amount:totalamount,
                            Remark:'订单付款',
                            CreatedOn:(new Date()).valueOf()
                        }
                        sessionStorage.ToPayInfo = JSON.stringify(toPayInfo)
                        this.$router.push({name:'pay'})
                    } else {
                        alertFuc(res.data.Message)
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

.remark {
    background: #fff;
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


    

</style>

