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
        </div>
        <div class="remark">
            <div class="info">
                <input type="text" placeholder="订单备注(限45字，请勿填写发票、配送方面的信息)">
            </div>
        </div>
        <div class="paytype">
            <div class="total">
                总价：
                <span>￥50.5</span>
                <p>包含运费:4.5元</p>
            </div>
            <button class="button warning">提交订单</button>
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

