<template>
    <div>
        <mi-header title="在线支付"></mi-header>
        <div class="topayamount">
            {{amount |currency('￥',2)}}
            <p>{{ordernumber}}</p>
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
            <div v-if="isCashPay">
                <div class="paypd">
                    <div class="tlt">支付密码</div>
                    <div>
                        <div class="paypassword">
                            <input type="password" maxlength="6" pattern="[0-9]*" v-model="paypassword">
                        </div>
                    </div>
                </div>
                <div style="padding:0 1rem 1rem 1rem;color:#999">
                    使用部分虚拟资产（包含积分，购物券，余额）时，为保障资产安全，请输入支付密码
                    <router-link to="">重置支付密码</router-link>
                </div>
            </div>
        </div>
    
        <div class="paytype">
            <div class="total">
                剩余待支付：
                <span>{{leftamount|currency('￥',2)}}</span>
                <p>{{remark}}</p>
            </div>
            <div v-if="leftamount==0">
                <button class="button warning" @click="walletPay">确认支付</button>
                <p>剩余支付金额为0，无需支付，确认支付即可</p>
            </div>
            <div v-if="leftamount>0">
                <button class="button success">微信支付</button>
                <button class="button primary">支付宝支付</button>
            </div>
    
        </div>
    
        <div class="offlinepay">
            <div class="tltwp">
                <div class="tlt">线下转账</div>
                <div class="desc">什么时候使用线下转账？</div>
            </div>
    
            <button class="button err" @click="replacePage('/pay/offlinepay')">线下转账</button>
        </div>

        <mi-toast ref="toast"></mi-toast>
    </div>
</template>

<script>
import header from '../../components/header.vue'
import vswitch from '../../components/switch.vue';
import toast from '../../components/toast.vue';
import * as api from '../../api/wallet'
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
            orderid:'',
            paymentid:'',
            ordernumber:'',
            type:'',
            amount:0,
            remark:'',
            leftamount: 0,
            paypassword:'',
            isCashPay: false
        }
    },
    mounted(){
        this.orderid=this.$route.params.orderid || '';
        this.paymentid=this.$route.params.paymentid||'';
        this.type=this.$route.params.type || '';
        this.amount=this.$route.params.amount || 0;
        this.ordernumber=this.$route.params.ordernumber || '';
        this.remark=this.$route.params.remark || '';
        this.leftamount=this.amount;
    },
    methods:{
        switchEventHandle(isOn) {
            this.isCashPay = isOn;
            if (isOn) {
                if (this.$store.state.global.walletinfo.Cash > this.amount) {//如果余额大于待支付金额
                    this.leftamount = 0;

                } else {
                    this.leftamount = this.amount - this.$store.state.global.walletinfo.Cash;
                }
            }
            else {
                this.leftamount = this.amount;
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
            if(this.isCashPay)
            {
                if(!checkJs.isPayPassword(this.paypassword))
                {
                    alertFuc('请输入支付密码');
                }
                let params = {
                    OrderNumber:this.ordernumber,
                    Amount:this.amount,
                    AccessCode:this.paypassword
                };
                api.CashPayApi(params).then(
                    res => {
                        if (res.data.Code == 200) {
                            console.log('支付成功')
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
        weichatPay() {
            //微信支付
        },
        alipayPay() {
            //支付宝支付
        },
        paySuccess(){
            //支付成功回调处理函数
            let alertFuc = (msg) => {
                const toast = this.$refs.toast;
                toast.show(msg);
                return false
            }

            if(this.type=="account")
            {//如果是大使缴费
                let params = {
                    UserGiftId:this.orderid
                }
                userapi.SetUserGiftPayedApi(params).then(
                    res => {
                        if (res.data.Code == 200) {
                            //转到成功页面
                            this.$router.replace({
                                name:'success',
                                params:{
                                    type:'tip',
                                    message:'支付成功'}})
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
                    PaymentId:this.paymentid,
                }
                paymentapi.PaymentAcceptedApi(params).then(
                    res => {
                        if (res.data.Code == 200) {
                            //转到成功页面
                            this.$router.replace({
                                name:'success',
                                params:{
                                    type:'pay',
                                    payinfo:{
                                        amount:this.amount,
                                        orderid:this.orderid
                                    },
                                    message:'支付成功'}})
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
        goPage(page){
            this.$router.push({path:page});
        },
        replacePage(page){
            this.$router.replace({path:page});
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
    margin-top: 1rem;
    background: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
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


