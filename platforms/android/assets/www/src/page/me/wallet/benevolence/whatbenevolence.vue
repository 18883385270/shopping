<template>
    <div>
        <mi-header title="福豆解读"></mi-header>
        <div class="whatbentop">
            <h2>福豆</h2>
            得福豆，赚收益
        </div>
        <div class="shuoming">
            <div class="tlt">什么是福豆?</div>
            <div class="cont">
                <p>福豆是五福天下打造的用户享有商城分润的方式。</p>
                <p>
                    在五福天下购买商品，可获得相对应的福豆值，福豆值可转化为用户 实际资金收益。
                </p>
                <p>
                    实际资金的收益可以随时用于网购支付，灵活提现转取。</p>
            </div>
        </div>
        <div class="divider"></div>
        <div class="shuoming">
            <div class="tlt">如何获取福豆?</div>
            <div class="cont">
                <p>1、购买商品，得福豆</p>
                <p>
                    2、成为五福会员，享受被推荐人的福豆抽成，一度5%，二度2.5%</p>
                <p>
                3、推荐商家入驻商城，获取推荐商家销售额的1%现金奖励 </p>
            </div>
        </div>
        <div class="divider"></div>
        <div class="shuoming">
            <div class="tlt">福豆指数/收益计算方法</div>
            <div class="cont">
                <p>福豆面值=1福豆=100元人民币</p>
                <p>
                    福豆指数=（商城所有商家交易额*15%）/（待分配福豆量*福豆面值）</p>
                <p class="gongshi">
                    今日收益=今日福豆指数 * 您钱包福豆量</p>
                <p class="text-gray">
                    例：当日商城福豆指数为0.28，您的福豆值为100，那么您 的当日收益就为：0.28*100=28元；
                    <br/> 剩余福豆值在当日相应减少，那么您的剩余福豆值就为：100- （28/100）=99.72个
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


