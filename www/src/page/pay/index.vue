<template>
    <div>
        <mi-header title="在线支付" isWhiteText="true" notPlaceHolder="true"></mi-header>
        <div class="topayamount">
            <p class="payamount">{{ToPayInfo.Amount |currency('￥',2)}}</p>
            <p>{{ToPayInfo.OrderNumber}}</p>
            <p>{{ToPayInfo.Remark}}</p>
            
        </div>
        <div class="timerdown">
                付款剩余时间：<mi-countdown :endTime="endTime" :callback="timeOutHandle" endText="已经结束了"></mi-countdown>
        </div>
        <div class="youhuiwarp">
            <div class="tablerow" v-if="this.$store.state.global.walletinfo.ShopCash>0 && ToPayInfo.Type=='order'">
                <div class="tlt">购物券付款</div>
                <div class="cnt">
                    <span class="swch">
                        <mi-switch @switchEvent="shopcashSwitchEventHandle"></mi-switch>
                    </span>
                    <span class="txt"> 可用余额{{this.$store.state.global.walletinfo.ShopCash|currency('￥',2)}}</span>
                </div>
            </div>
            <div class="tablerow" v-if="this.$store.state.global.walletinfo.Cash>0 && ToPayInfo.Type!='recharge'">
                <div class="tlt">余额付款</div>
                <div class="cnt">
                    <span class="swch">
                        <mi-switch @switchEvent="cashSwitchEventHandle"></mi-switch>
                    </span>
                    <span class="txt"> 可用余额{{this.$store.state.global.walletinfo.Cash|currency('￥',2)}}</span>
                </div>
            </div>
            <div v-if="(IsCashPay || IsShopCashPay) && LeftAmount==0">
                <div class="paypd">
                    <div class="tlt">支付密码</div>
                    <div class="cnt">
                       <mi-paypassword :issmall="true" v-model="PayPassword"></mi-paypassword>
                    </div>
                </div>
                <div style="padding:0 1rem 1rem 1rem;color:#999">
                    使用部分虚拟资产（包含积分，购物券，余额）时，为保障资产安全，请输入支付密码
                    <router-link to="/me/wallet">重置支付密码</router-link>
                </div>
            </div>
        </div>
        <div class="divider"></div>
        <div class="paytype">
            <div class="total">
                <span v-if="ShopCashPayAmount>0">购物券付: <span class="text-warning"> {{ShopCashPayAmount |currency('￥',2)}}  </span></span> 
                <span v-if="CashPayAmount>0"> 现金付: <span class="text-warning">{{CashPayAmount |currency('￥',2)}}  </span> </span>
                <div class="pd-top-sm">剩余待支付：<span class="text-red text-xlg">{{LeftAmount|currency('￥',2)}}</span></div>
            </div>
            <div v-if="LeftAmount==0">
                <button class="button warning" @click="walletPayAll">确认支付</button>
                <p>剩余支付金额为0，无需支付，确认支付即可</p>
            </div>
            <div v-if="LeftAmount>0 && IsInApp">
                <!-- <button class="button success" @click="weixinPay">微信支付</button> -->
                <button class="button primary" @click="alipay">支付宝支付</button>
            </div>
        </div>
        <div class="divider"></div>
        <div class="offlinepay">
            <div class="tltwp">
                <div class="tlt">线下转账</div>
                <div class="desc">什么时候使用线下转账？</div>
            </div>
            <button class="button info" @click="goPage('offlinepay')">线下转账</button>
        </div>
        <mi-toast ref="toast"></mi-toast>
    </div>
</template>

<script>
import header from '../../components/header.vue'
import paypassword from '../../components/paypassword.vue'
import vswitch from '../../components/switch.vue';
import toast from '../../components/toast.vue';
import countdown from '../../components/countdown.vue';
import * as api from '../../api/wallet'
import * as offlinestoreapi from '../../api/offlinestore'
import * as weixinpayapi from '../../api/weixinpay'
import * as userapi from '../../api/account'
import * as paymentapi from '../../api/payment'
import * as checkJs from '../../utils/pubfunc'

export default {
    components: {
        'mi-header': header,
        'mi-switch': vswitch,
        'mi-paypassword': paypassword,
        'mi-toast': toast,
        'mi-countdown':countdown
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
            IsCashPay: false,
            CashPayAmount:0,
            IsShopCashPay: false,
            ShopCashPayAmount:0,
            endTime:0,
            IsInApp: true
        }
    },
    created(){
        if(checkJs.isNullOrEmpty(sessionStorage.ToPayInfo))
        {
            this.$router.replace({name:'home'})
        }
        this.ToPayInfo=JSON.parse(sessionStorage.ToPayInfo)
        this.LeftAmount=this.ToPayInfo.Amount
        this.endTime=this.ToPayInfo.CreatedOn+(1000*60*30)
        if (checkJs.isNullOrEmpty(localStorage.IsCordovaReady) || localStorage.IsCordovaReady == 'false') {
            this.IsInApp = false;
        }
        this.getWalletInfo()
    },
    methods:{
        timeOutHandle(){
            //清除付款信息
            sessionStorage.removeItem('ToPayInfo')
            //跳转到失败页面
            var tipInfo={
                Type:'PayTimeOut',
                NextPage:'/me',
                Message:'付款超时时间已到'
            }
            sessionStorage.TipInfo = JSON.stringify(tipInfo)
            this.$router.replace({name:'error'})
        },
        getWalletInfo(){
            //获取钱包信息
            let self=this;
            let params={};
            api.InfoApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        //钱包信息
                        self.$store.dispatch('update_walletinfo',{
                            walletinfo:{
                                Id:res.data.WalletInfo.Id,
                                AccessCode:res.data.WalletInfo.AccessCode,
                                Cash:res.data.WalletInfo.Cash,
                                ShopCash:res.data.WalletInfo.ShopCash,
                                Benevolence:res.data.WalletInfo.Benevolence,
                                Earnings:res.data.WalletInfo.Earnings,
                                YesterdayEarnings:res.data.WalletInfo.YesterdayEarnings
                            }
                        });
                    } else {
                        console.log("返回错误码："+res.data.Code);
                    }
                },
                err => {
                    console.log('网络错误');
                }
            )
        },
        cashSwitchEventHandle(isOn) {
            this.IsCashPay = isOn;
            this.calPayInfo()
        },
        shopcashSwitchEventHandle(isOn) {
            this.IsShopCashPay = isOn;
            this.calPayInfo();
        },
        calPayInfo(){
            this.LeftAmount=Number(this.ToPayInfo.Amount);
            this.CashPayAmount=0;
            this.ShopCashPayAmount=0;

            if (this.IsShopCashPay) {
                if (Number(this.$store.state.global.walletinfo.ShopCash) > Number(this.LeftAmount)) {//如果余额大于待支付金额
                    this.ShopCashPayAmount=Number(this.LeftAmount);
                    this.LeftAmount = 0;
                } else {
                    this.LeftAmount -= Number(this.$store.state.global.walletinfo.ShopCash);
                    this.ShopCashPayAmount=Number(this.$store.state.global.walletinfo.ShopCash);
                }
            }
            else {
                this.LeftAmount += Number(this.ShopCashPayAmount);
                this.ShopCashPayAmount=0;
            }

            if (this.IsCashPay) {
                if (Number(this.$store.state.global.walletinfo.Cash) > Number(this.LeftAmount)) {//如果余额大于待支付金额
                    this.CashPayAmount=Number(this.LeftAmount);
                    this.LeftAmount = 0;
                } else {
                    this.LeftAmount -= Number(this.$store.state.global.walletinfo.Cash);
                    this.CashPayAmount= Number(this.$store.state.global.walletinfo.Cash);
                }
            }
            else {
                this.LeftAmount += Number(this.CashPayAmount);
                this.CashPayAmount=0;
            }

            
        },
        walletPayAll() {
            //钱包支付钱包能全额付款的情况
            let alertFuc = (msg) => {
                const toast = this.$refs.toast;
                toast.show(msg);
                return false
            }

            let self=this;
            if(!checkJs.isPayPassword(this.PayPassword))
            {
                alertFuc('请输入支付密码');
                return;
            }
            this.walletpay(false);
        },
        paySuccess(){
            //支付成功回调处理函数
            let alertFuc = (msg) => {
                const toast = this.$refs.toast;
                toast.show(msg);
                return false
            }

            if(this.ToPayInfo.Type=='offlinespend'){
                //线下消费
                let params = {
                    OfflineStoreId:this.ToPayInfo.OfflineStoreId,
                    Amount:this.ToPayInfo.Amount,
                }
                offlinestoreapi.AcceptNewSaleApi(params).then(
                    res => {
                        if (res.data.Code == 200) {
                            //转到成功页面
                            var tipInfo={
                                Type:'PaySuccess',
                                Amount:this.ToPayInfo.Amount,
                                NextPage:'me',
                                Message:'付款成功'
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
            else if(this.ToPayInfo.Type=="transfer"){
                //转账
                let params = {
                    UserId:this.ToPayInfo.PayeeId,
                    Amount:this.ToPayInfo.Amount,
                    Remark:'转账-'+this.$store.state.global.userinfo.NickName
                }
                api.AcceptTransferApi(params).then(
                    res => {
                        if (res.data.Code == 200) {
                            //转到成功页面
                            var tipInfo={
                                Type:'PaySuccess',
                                Amount:this.ToPayInfo.Amount,
                                NextPage:'me',
                                Message:'转账成功'
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
            else if(this.ToPayInfo.Type=="recharge"){
                let params = {
                    Amount:this.ToPayInfo.Amount
                };
                api.RechargeApi(params).then(
                    res => {
                        if (res.data.Code == 200) {
                        //转到成功页面
                        var tipInfo={
                            Type:'PaySuccess',
                            Message:'充值成功',
                            Amount:this.ToPayInfo.Amount,
                            NextPage:'wallet'
                        }
                        sessionStorage.TipInfo = JSON.stringify(tipInfo)
                        this.$router.replace({name:'success'});
                        } else {
                            alertFuc(res.data.Message);
                        }
                    },
                    err => {
                        alertFuc('网络错误');
                    }
                )
            }
            else{
                //订单付款
                let params = {
                    PaymentId:this.ToPayInfo.PaymentId,
                    Total:this.ToPayInfo.Amount,
                    Cash:this.CashPayAmount,
                    ShopCash:this.ShopCashPayAmount
                }
                paymentapi.PaymentAcceptedApi(params).then(
                    res => {
                        if (res.data.Code == 200) {
                            //转到成功页面
                            var tipInfo={
                                Type:'PaySuccess',
                                NextPage:'me',
                                Amount:this.ToPayInfo.Amount,
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
            this.$router.push({name:page});
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
        },
        onlinePaySuccess(){
            if(this.IsCashPay || this.IsShopCashPay){
                //如果开启了余额支付请求服务器余额付款
                this.walletpay(true);
            }
            else{
                this.paySuccess();
            }
        },
        walletpay(isnotaccesscode){
            let alertFuc = (msg) => {
                const toast = this.$refs.toast;
                toast.show(msg);
                return false
            }
            
            let params = {
                Type:'Shopping',
                Amount:this.ToPayInfo.Amount,
                CashPayAmount:this.CashPayAmount,
                ShopCashPayAmount:this.ShopCashPayAmount,
                AccessCode:this.PayPassword,
                IsNotVerifyAccessCode:isnotaccesscode,
                Remark:'订单付款'+this.ToPayInfo.OrderNumber
            };
            if(this.ToPayInfo.Type=='offlinespend'){
                params.Remark='线下消费'
            }
            if(this.ToPayInfo.Type=='transfer'){
                params.Type='Transfer'
                params.Remark='转账给-'+this.ToPayInfo.PayeeName
            }
            if(this.ToPayInfo.Type=='recharge'){
                params.Type='Recharge'
                params.Remark='在线充值'
            }
            api.WalletPayApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        this.paySuccess();
                    } else if(res.data.Code==404) {
                        this.PayPassword='';
                        alertFuc(res.data.Message);
                    }
                    else{
                        alertFuc(res.data.Message);
                    }
                },
                err => {
                    console.log('网络错误');
                }
            )
        },
        alipay(){
            let alertFuc = (msg) => {
                const toast = this.$refs.toast;
                toast.show(msg);
                return false
            }
            //请求后台统一下单
            let params = {
                Amount:this.LeftAmount,
                OrderNumber:" "
            };
            let self=this
            paymentapi.AliPayApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        //获取调取支付
                        var payInfo=res.data.Message
                        cordova.plugins.alipay.payment(payInfo,function success(e){
                            if(e.resultStatus==9000){
                                self.onlinePaySuccess()
                            }else{
                                alertFuc('支付宝支付中断，可继续提交支付')
                            }
                            
                        },function error(e){
                            alertFuc('支付宝支付失败')
                        });
                    } else {
                        alertFuc(res.data.Message);
                    }
                },
                err => {
                    alertFuc('网络错误');
                }
            )
        }
    }

}
</script>

<style lang="less" scoped>

.topayamount {
    background: #c03;
    padding: 3rem 1rem 2rem;
    text-align: center;
    .paytlt{
        font-size:1.5rem;
    }
    .payamount{
        color:#fff;
        padding:1rem 0;
        font-size: 2.5rem;
    }
    p{
        font-size:1.2rem;color:#fff;
    }
    
}
.timerdown{
    text-align:center;
    font-size:1.2rem;
    background:#b03;
    color:#fff;
    padding:0.7rem;
}

.paytype {
    background: #fff;
    padding: 1rem;
    font-size: 1.3rem;
    text-align: center;
    .total {
        color: #666;
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
            width:20%;
        }
        .cnt{
            width:60%;
        }
    }
}
</style>


