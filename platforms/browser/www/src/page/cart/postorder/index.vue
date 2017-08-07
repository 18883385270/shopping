<template>
    <div>
        <mi-header title="确认订单"></mi-header>
        <mi-selectexpressaddress></mi-selectexpressaddress>
        <mi-ordergoods></mi-ordergoods>
        <div class="youhuiwarp">
            <div class="tablerow">
                <div class="tlt">发票信息</div>
                <div class="cnt">个人</div>
            </div>
            <div class="tablerow">
                <div class="tlt">优惠券</div>
                <div class="cnt">已使用一张 已抵用￥30</div>
            </div>
            <div class="tablerow">
                <div class="tlt">余额付款</div>
                <div class="cnt">
                    <span class="swch">
                        <mi-switch @switchEvent="switchEventHandle"></mi-switch>
                    </span>
                    <span class="txt"> 可用余额6.00</span>
                </div>
            </div>
            <div class="paypassword" v-if="isCashPay">
                <div class="tlt">支付密码</div>
                <div>
                    <mi-paypassword></mi-paypassword>
                </div>
            </div>
        </div>
        <div class="remark">
            <div class="tablerow">
                <input type="text" placeholder="订单备注(限45字，请勿填写发票、配送方面的信息)">
            </div>
        </div>
        <div class="paytype">
            <div class="total">
                总价：
                <span>￥50.5</span>
                <p>包含运费:4.5元</p>
            </div>
            <button class="warning">提交订单</button>
            <button class="success">微信支付</button>
            <button class="primary">支付宝支付</button>
            <p>支付金额为0，无需支付</p>
        </div>
    </div>
</template>

<script>
import header from '../../../components/header.vue';
import vswitch from '../../../components/switch.vue';
import paypassword from '../../../components/paypassword.vue';
import selectexpressaddress from './selectexpressaddress.vue';
import ordergoods from './ordergoods.vue';


export default {
    components: {
        'mi-header': header,
        'mi-switch': vswitch,
        'mi-paypassword': paypassword,
        'mi-selectexpressaddress': selectexpressaddress,
        'mi-ordergoods': ordergoods
    },
    data() {
        return {
            isCashPay: false
        }
    },
    methods: {
        switchEventHandle(isOn) {
            this.isCashPay = isOn;
        }
    }
}
</script>


<style lang="less" scoped>
.youhuiwarp {
    background: #fff;
    margin-top: 1rem;
    .tablerow {
        display: flex;
        font-size: 1.3rem;
        border-bottom: 1px solid #eee;
        .tlt {
            width: 40%;
            padding: 1rem;
        }
        .cnt {
            width: 60%;
            font-size: 1rem;
            text-align: right;
            padding: 1rem;
            .txt {
                display: inline-block;
                margin-top: 0.6rem;
                margin-right:1rem;
            }
            .swch {
                float: right;
            }
        }
    }
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
    .tablerow {
        padding: 1rem;
        input {
            font-size: 1.3rem;
            color: #999;
            width: 100%;
            padding: 0.5rem 0;
            border: none;
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
    button {
        width: 100%;
        padding: 1rem 0;
        text-align: center;
        margin-top: 1rem;
        color: #fff;
        font-size: 1.3rem;
        border: 0;
        border-radius: 3px;
        &.success {
            background: #096;
        }
        &.primary {
            background: #36c;
        }
        &.warning {
            background: #f90;
        }
    }
}
</style>

