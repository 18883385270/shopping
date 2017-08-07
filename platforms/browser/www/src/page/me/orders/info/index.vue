<template>
    <div class="page">
        <mi-header title="订单详情"></mi-header>
        <mi-stepindicator></mi-stepindicator>
        <div class="expressinfo">
            <div class="exinfo" @click="goPage('/orders/info/expressinfo')">
                【宿迁市】您的订单已签收，本人签收，感谢您使用顺丰快递，欢迎您再次光临
            </div>
            <div class="orderstatus">
                <p>
                    <span>订单状态：</span><i class="blu">已签收</i></p>
                <p>
                    <span>订单号：</span>467545662764</p>
                <p>
                    <span>下单时间：</span>2017-3-23</p>
            </div>
            <div class="btntools">
                <button>去评价</button>
                <button>再次购买</button>
                <button>赢免单</button>
            </div>
        </div>
        <div class="expressaddress">
            <p>
                <span>收货地址：</span>江苏省宿迁市洪泽湖东路汇成大厦5楼</p>
            <p>
                <span>收货人：</span>夏天 135****2764</p>
            <p>
                <span>配送方式：</span>顺丰快递</p>
        </div>
        <div class="totalinfo">
            <p>
                <span>商品总额：</span>￥40.5</p>
            <p>
                <span>优惠：</span>￥0.00</p>
            <p>
                <span>运费：</span>￥6.00</p>
            <p>
                <span>实付金额：</span>
                <i class="big">￥46.5</i>
            </p>
        </div>
    </div>
</template>

<script>
import header from '../../../../components/header.vue';
import stepindicator from '../../../../components/stepindicator.vue';

export default {
    components: {
        'mi-header': header,
        'mi-stepindicator': stepindicator
    },
    methods: {
        goPage(page){
            this.$router.push({path:page});
        }
    }
}
</script>

<style lang="less">
.page {
    .expressinfo {
        padding: 0 1rem 1rem 1rem;
        background: #fff;
        .exinfo {
            padding:1rem 0;
            border-top: 1px dashed #eee;
            border-bottom: 1px dashed #eee;
        }


        .orderstatus {

            margin-top: 1rem;
            p {
                padding: 0.2rem 0;
                span {
                    color: #999;
                    display: inline-block;
                    width: 7rem;
                }
                .blu{
                    color:#06c;font-style: normal;
                }
            }
        }
        .btntools {
            margin-top: 1rem;
            button {
                border: 0;
                padding: 1rem 0;
                color: #fff;
                background: #c66;
                width: 30%;
                margin-right: 5%;
                border-radius: 3px;
                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
    .expressaddress {
        padding: 1rem;
        background: #fff;
        margin-top: 1rem;
        p {
            padding: 0.2rem 0;
            span {
                color: #999;
                display: inline-block;
                width: 7rem;
            }
        }
    }
    .totalinfo {
        padding: 1rem;
        background: #fff;
        margin-top: 1rem;
        p {
            padding: 0.2rem 0;
            text-align: right;
            color: #c66;
            span {
                color: #999;
                float: left;
                color: #666;
            }
            .big {
                font-size: 1.4rem;
                font-weight: 400;
                font-style: normal;
            }
        }
    }
}
</style>


