<template>
    <div>
        <mi-header title="善心解读"></mi-header>
        <div class="whatbentop">
            <h2>善心</h2>
            得善心，赚收益
        </div>
        <div class="shuoming">
            <div class="tlt">什么是善心?</div>
            <div class="cont">
                <p>善心值是五福天下打造的用户资金收益服务。</p>
                <p>
                    在五福天下购买商品，可获得相对应的善心值，善心值可转化为用户 实际资金收益。
                </p>
                <p>
                    实际资金的收益可以随时用于网购支付，灵活提现转取。</p>
            </div>
        </div>
        <div class="divider"></div>
        <div class="shuoming">
            <div class="tlt">如何获取善心?</div>
            <div class="cont">
                <p>1、购买商品，得善心</p>
                <p>
                    2、成为传递使者，享受被推荐人的善心抽成，一度5%，二度2.5%</p>
                <p>
                3、推荐商家入驻商城，获取推荐商家销售额的1% 善心奖励</p>
            </div>
        </div>
        <div class="divider"></div>
        <div class="shuoming">
            <div class="tlt">善心指数/收益计算方法</div>
            <div class="cont">
                <p>善心面值=1善心=100元人民币</p>
                <p>
                    善心指数=（商城所有商家交易额*15%）/（待分配善心量*善心面值）</p>
                <p class="gongshi">
                    今日收益=今日善心指数 * 您钱包善心量</p>
                <p class="text-gray">
                    例：当日商城善心指数为0.28，您的善心值为100，那么您 的当日收益就为：0.28*100=28元；
                    <br/> 剩余善心值在当日相应减少，那么您的剩余善心值就为：100- （28/100）=99.72个
                </p>
            </div>
        </div>
        
    </div>
</template>

<script>
import header from '../../../../components/header.vue'

export default {
    components: {
        'mi-header': header
    }
}
</script>

<style lang="less" scoped>
.whatbentop{
    background:#c03;
    padding:3rem;
    text-align:center;
    color:#fff;
    font-size:1.3rem;
    h2{
        font-size:2.2rem;
        font-weight:400;
        color:#fff;
        margin-bottom:0.5rem;
    }
}
.shuoming {
    border-top: 1px solid #eee;
    background: #fff;
    padding: 1rem;
    .tlt {
        font-size: 1.3rem;
        font-weight: 400;
        padding-bottom: 1rem;
    }
    .cont {
        font-size: 1rem;
        p {
            margin-top: 1rem;
        }
        .gongshi {
            margin: 1rem 3rem;
            background: #c03;
            color: #fff;
            font-size: 1.3rem;
            text-align: center;
            padding: 0.6rem 1rem;
            border-radius: 5px;
        }
    }
}
</style>


