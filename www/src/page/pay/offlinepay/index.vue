<template>
    <div>
        <mi-header title="线下转账" rightext="转账记录"@rightNavBarClicked="goPage('/pay/offlinepay/log')"></mi-header>
        <div class="tltcntbox2">
            <div class="head">
                <div class="title">使用场景</div>
                <div class="more"></div>
            </div>
            <div class="body">
                <div class="shuoming">
                    <ul>
                        <li>当使用在线支付不成功时</li>
                        <li>转账金额直接 充值到电子钱包余额</li>
                    </ul>
                </div>
    
            </div>
        </div>
        <div class="tltcntbox2">
            <div class="head">
                <div class="title">操作指引</div>
                <div class="more"></div>
            </div>
            <div class="body">
                <div class="shuoming">
                    <ul>
                        <li>1、将要充值的金额转账至收款账户</li>
                        <li>2、填写相关转账信息，并提交转账凭证</li>
                        <li>3、财务核实后进行您账户钱包充值</li>
                        <li>4、查看您钱包账户余额，和记录</li>
                    </ul>
                </div>
    
            </div>
        </div>

        <div class="tltcntbox2">
            <div class="head">
                <div class="title">公司收款账号</div>
                <div class="more"></div>
            </div>
            <div class="body">
                <div class="shuoming">
                    <ul>
                        <li>【收款单位】：江苏悟行电子商务有限公司</li>
                        <li>【开户银行】：中国建设银行股份有限公司宿迁宿豫支行</li>
                        <li>【收款账号】：<span class="text-lg text-red"> 3205 0177 4800 0000 0252</span></li>
                    </ul>
                </div>
    
            </div>
        </div>
        <div class="pd1">
            <button class="button err" @click="goPage('/pay/offlinepay/addpayinfo')">提交转账凭证</button>
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
            this.$router.push({path:page});
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


