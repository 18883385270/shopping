<template>
    <div>
        <mi-header title="在线支付"></mi-header>
        <div class="topayamount">
            <p class="paytlt">待支付金额</p>
            {{ToPayInfo.Amount |currency('￥',2)}}
            <p>{{ToPayInfo.OrderNumber}}</p>
        </div>

        <div class="youhuiwarp">
            <div class="tablerow" v-if="this.$store.state.global.walletinfo.Cash>0">
                <div class="tlt">余额付款</div>
                <div class="cnt">
                    <span class="swch">
                        <mi-switch @switchEvent="switchEventHandle"></mi-switch>
                    </span>
                    <span class="txt"> 可用余额{{this.$store.state.global.walletinfo.Cash|currency('￥',2)}}</span>
                </div>
            </div>
            <div v-if="IsCashPay">
                <div class="paypd">
                    <div class="tlt">支付密码</div>
                    <div>
                        <div class="paypassword">
                            <input type="password" maxlength="6" pattern="[0-9]*" v-model="PayPassword">
                        </div>
                    </div>
                </div>
                <div style="padding:0 1rem 1rem 1rem;color:#999">
                    使用部分虚拟资产（包含积分，购物券，余额）时，为保障资产安全，请输入支付密码
                    <router-link to="/wallet">重置支付密码</router-link>
                </div>
            </div>
        </div>
        <div class="divider"></div>
        <div class="paytype">
            <div class="total">
                剩余待支付：
                <span>{{LeftAmount|currency('￥',2)}}</span>
                <p>{{ToPayInfo.Remark}}</p>
            </div>
            <div v-if="LeftAmount==0">
                <button class="button warning" @click="walletPay">确认支付</button>
                <p>剩余支付金额为0，无需支付，确认支付即可</p>
            </div>
            <div v-if="LeftAmount>0">
                <p>余额不足请，充值</p>
                <button class="button success" @click="weixinPay">微信支付</button>
                <!-- <button class="button primary">支付宝支付</button> -->
            </div>
    
        </div>
        <div class="divider"></div>
        <div class="offlinepay">
            <div class="tltwp">
                <div class="tlt">线下转账</div>
                <div class="desc">什么时候使用线下转账？</div>
            </div>
    
            <button class="button err" @click="goPage('/pay/offlinepay')">线下转账</button>
        </div>
        <mi-toast ref="toast"></mi-toast>
    </div>
</template>

<script>
import header from '../../components/header.vue'
import vswitch from '../../components/switch.vue';
import toast from '../../components/toast.vue';
import * as api from '../../api/wallet'
import * as weixinpayapi from '../../api/weixinpay'
import * as userapi from '../../api/account'
import * as paymentapi from '../../api/payment'
import * as checkJs from '../../utils/pubfunc'

export default {
    components: {
        'mi-header': header,
        'mi-switch': vswitch,
        'mi-toast': toast
    },
    data(){
        return{
            ToPayInfo:{
                OrderId:'',
                PaymentId:'',
                OrderNumber:'',
                Type:'',
                Amount:0,
                Remark:''
            },
            LeftAmount: 0,
            PayPassword:'',
            IsCashPay: false
        }
    },
    mounted(){
        //获取待付款信息
        this.ToPayInfo=JSON.parse(sessionStorage.ToPayInfo)
        this.LeftAmount=this.ToPayInfo.Amount;
    },
    methods:{
        switchEventHandle(isOn) {
            this.IsCashPay = isOn;
            if (isOn) {
                if (this.$store.state.global.walletinfo.Cash > this.ToPayInfo.Amount) {//如果余额大于待支付金额
                    this.LeftAmount = 0;
                } else {
                    this.LeftAmount = this.ToPayInfo.Amount - this.$store.state.global.walletinfo.Cash;
                }
            }
            else {
                this.LeftAmount = this.ToPayInfo.Amount;
            }
        },
        walletPay() {
            //钱包支付
            let alertFuc = (msg) => {
                const toast = this.$refs.toast;
                toast.show(msg);
                return false
            }

            let self=this;
            if(this.IsCashPay)
            {
                if(!checkJs.isPayPassword(this.PayPassword))
                {
                    alertFuc('请输入支付密码');
                    return;
                }
                let params = {
                    OrderNumber:this.ToPayInfo.OrderNumber,
                    Amount:this.ToPayInfo.Amount,
                    AccessCode:this.PayPassword
                };
                api.CashPayApi(params).then(
                    res => {
                        if (res.data.Code == 200) {
                            console.log('余额支付成功')
                            this.paySuccess();
                        } else {
                            alertFuc(res.data.Message);
                        }
                    },
                    err => {
                        console.log('网络错误');
                    }
                )
            }
        },
        paySuccess(){
            //支付成功回调处理函数
            let alertFuc = (msg) => {
                const toast = this.$refs.toast;
                toast.show(msg);
                return false
            }

            if(this.ToPayInfo.Type=="account")
            {//如果是大使缴费
                let params = {
                    UserGiftId:this.ToPayInfo.OrderId
                }
                userapi.SetUserGiftPayedApi(params).then(
                    res => {
                        if (res.data.Code == 200) {
                            //转到成功页面
                            var tipInfo={
                                Type:'PaySuccess',
                                NextPage:'/me',
                                Message:'支付成功'
                            }
                            sessionStorage.TipInfo = JSON.stringify(tipInfo)
                            this.$router.replace({name:'success'})
                        } else {
                            alertFuc(res.data.Message);
                        }
                    },
                    err => {
                        console.log('网络错误');
                    }
                )
            }else{
                //订单付款
                //设置付款项目成功
                let params = {
                    PaymentId:this.ToPayInfo.PaymentId,
                }
                paymentapi.PaymentAcceptedApi(params).then(
                    res => {
                        if (res.data.Code == 200) {
                            //转到成功页面
                            var tipInfo={
                                Type:'PaySuccess',
                                NextPage:'/me',
                                Message:'支付成功'
                            }
                            sessionStorage.TipInfo = JSON.stringify(tipInfo)
                            this.$router.replace({name:'success'})
                        } else {
                            alertFuc(res.data.Message);
                        }
                    },
                    err => {
                        console.log('网络错误');
                    }
                )
            }
            //清除待付款信息
            sessionStorage.removeItem("ToPayInfo")

        },
        goPage(page){
            this.$router.push({path:page});
        },
        replacePage(page){
            this.$router.replace({path:page});
        },
        jsApiCall(param){
            var _this = this;
            console.log(JSON.stringify(param));
            WeixinJSBridge.invoke(
                    'getBrandWCPayRequest',
                    param,
                    function(res){
                        console.log(res.err_code+res.err_desc+res.err_msg);
                        //付款回掉
                        // _this.$http.post(storeData.store.state.baseUrl+'WechatPay/orderNotify',{"openid":openid2,"order_id":_this.order_header.info.order_id,"address_id":_this.order_header.address.address_id,"out_trade_no":param.out_trade_no},{"emulateJSON":true,"emulateHTTP":true}).then(function(str) {
                        //     var str = JSON.parse(str.data);
                        //     if(str.resp_code == 100){
                        //         _this.$route.router.go({'name':'toBeShipped'})
                        //     }else{
                        //         _this.$route.router.go({'name':'payfail',params:{
                        //             "orderN":str.order.order_id,
                        //             "time":str.order.time,
                        //             "allPrice":str.order.all_price
                        //         }})
                        //     }
                        // },function(err){
                        //     alert('出错了'+err)
                        //     console.log(err)
                        // })
                    }
            );
        },
        callpay(param){
            if (typeof WeixinJSBridge == "undefined"){
                if( document.addEventListener ){
                    document.addEventListener('WeixinJSBridgeReady', this.jsApiCall, false);
                }else if (document.attachEvent){
                    document.attachEvent('WeixinJSBridgeReady', this.jsApiCall);
                    document.attachEvent('onWeixinJSBridgeReady', this.jsApiCall);
                }
            }else{
                this.jsApiCall(param);
            }
        },
        weixin_pay(){
            //获取支付参数
            let params = {
                total_fee:this.LeftAmount
            };
            weixinpayapi.GetPayParamsApi(params).then(
                res => {
                    var resjson = JSON.parse( res.data );
                    if(resjson.resp_code ){
                        alert('出错了，请稍后再试');
                        return false;
                    }
                    this.callpay(resjson);
                },
                err => {
                    console.log('网络错误');
                }
            )
        },
        weixinPay(){
            //请求后台统一下单
            let params = {
                Amount:1,
                OrderNumber:'dfdfd'
            };
            paymentapi.WeChatPayApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        //调取微信支付
                        Wechat.sendPaymentRequest(params, function () {
                            alert("Success");
                        }, function (reason) {
                            alert("Failed: " + reason);
                        });
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
.topayamount {
    background: #fff;
    font-size: 2rem;
    padding: 1.5rem 1rem;
    text-align: center;
    border-bottom:1px solid #eee;
    color:#c03;
    .paytlt{
        padding:1rem;font-size:1.5rem;
    }
    p{
        font-size:1.3rem;color:#666;text-indent: 0.5rem;
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
            font-size: 1rem;
        }
    }
    p {
        padding-top: 0.5rem;
        font-size: 1rem;
    }
}


.offlinepay {
    background: #fff;
    border-top: 1px solid #eee;
    padding: 1rem;
    .tltwp {
        display: flex;
        .tlt {
            width: 50%;
            font-size: 1.3rem;
        }
        .desc {
            width: 50%;
            text-align: right;
        }
    }
}

.youhuiwarp {
    background: #fff;
    
    .paypd {
        padding: 1rem;
        display: flex;
        .tlt {
            font-size: 1.3rem;
            line-height: 3.3rem;
            padding-right: 2rem;
        }
    }
}
</style>


