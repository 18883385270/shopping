<template>
    <div>
        <mi-header title="线下转账" rightext="记录" @rightNavBarClicked="goPage('offlinerechargelog')"></mi-header>
        <div class="divider"></div>
        <div class="pd">
            <div class="bd-btn pd-btn">
                <div class="text-md">使用场景</div>
            </div>
            <div class="pd-top">
                <div class="text-gray">
                    <p>当使用在线支付不成功时</p>
                    <p>转账金额直接 充值到电子钱包余额</p>
                </div>
            </div>
        </div>
        <div class="divider"></div>
        <div class="pd">
            <div class="bd-btn pd-btn">
                <div class="text-md">操作指引</div>
            </div>
            <div class="pd-top">
                <div class="text-gray">
                    <p>1、将要充值的金额转账至收款账户</p>
                        <p>2、填写相关转账信息，并提交转账凭证</p>
                        <p>3、财务核实后进行您账户钱包充值</p>
                        <p>4、查看您钱包账户余额，和记录</p>
                </div>
            </div>
        </div>
        
        <div class="divider"></div>
        <div class="pd">
            <div class="bd-btn pd-btn">
                <div class="text-md">公司收款账户</div>
            </div>
            <div class="pd-top">
                <div class="text-gray">
                    <p>【收款单位】：江苏悟行电子商务有限公司</p>
                        <p>【开户银行】：中国建设银行股份有限公司宿迁宿豫支行</p>
                        <p>【收款账号】：<span class="text-lg text-red"> 3205 0177 4800 0000 0252</span></p>
                        <p>【支付宝账号】：930488189@qq.com</p>
                </div>
            </div>
            
        </div>
        <div class="pd">
            <button class="button err" @click="goPage('addpayinfo')">提交转账凭证</button>
        </div>
    </div>
</template>

<script>
import header from '../../../components/header.vue'

export default {
    components: {
        'mi-header': header
    },
    methods:{
        goPage(page){
            this.$router.push({name:page});
        }
    }
}
</script>

<style lang="less" scoped>

.shuoming {
    padding: 1rem;
    li{
        list-style: none;
    }
}
</style>


