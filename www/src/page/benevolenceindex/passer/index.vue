<template>
    <div class="pagewp">
        <mi-header title="传递使者"></mi-header>
        <div class="rolebanner">
            <svg><use xlink:href="#consumer"></use></svg>
            <h1>传递使者</h1>
            <h2>分享爱，分享收益</h2>
        </div>
        <div class="timop">
            <div>有效期：永久有效</div>
            <div>已开通：2454644人</div>
        </div>
        <div class="shuoming">
            <div class="tlt">为什么要做传递使者?</div>
            <div class="cont">
                <p>【1】参与公益事业，提升个人荣誉</p>
                <p>【2】每购物满100元，即可获得1个善心</p>
                <p>【3】享有商家让利的5倍奖励</p>
                <p>【4】可推荐商家入驻商城，获得商家销售奖励</p>
                <p>【5】善心激励就是将您的善心转换为人民币</p>
            </div>
        </div>
        <div class="shuoming">
            <div class="tlt">开通方式</div>
            <div class="cont">
                <p>【1】单次消费满99元</p>
                <p>【2】或者推荐10个以上善心使者</p>
            </div>
            <button class="button warning">分享给好友</button>
        </div>
        
    
    </div>
</template>

<script>
import header from '../../../components/header.vue';

export default {
    components: {
        'mi-header': header
    }
}
</script>

<style lang="less" scoped>
.pagewp {
    .rolebanner {
        text-align: center;
        padding: 2rem 1rem 3rem 1rem;
        color: #fff;
        background: #333;
        svg {
            display: block;fill:#fff;
            width: 5rem;
            height: 5rem;
            margin: 0.8rem auto;
        }
        h1 {
            font-size: 2rem;
            font-weight: 400;
        }
        h2 {
            font-size: 1.3rem;margin-top:0.5rem;
            font-weight: 400;
        }
    }
    .timop {
        background: #fff;
        border-bottom: 1px solid #eee;
        display:flex;
        div {
            padding:1rem;text-align: center;
            width: 50%;
            &:last-child{
                border-left:1px solid #eee;
            }
        }
    }
    .shuoming {
        margin-top: 1rem;
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
                &.nianfei{
                    font-size:1.5rem;font-weight: 400;color:#C1272D;
                }
            }
        }
    }
    
}
</style>


