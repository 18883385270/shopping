<template>
    <div class="pagewp">
        <mi-header title="善心使者"></mi-header>
        <div class="rolebanner">
            <svg><use xlink:href="#consumer"></use></svg>
            <h1>爱心使者</h1>
            <h2>消费公益人，购物就是做公益</h2>
        </div>
        <div class="timop">
            <div>有效期：永久有效</div>
            <div>已开通：2454644人</div>
        </div>
        <div class="divider"></div>
        <div class="shuoming">
            <div class="tlt">为什么要做善心使者?</div>
            <div class="cont">
                <p>【1】免费注册即可成为善心使者，在商城消费的同时就是在做公益，购物的同时还能获得善心激励</p>
                <p>【2】每购物满100元，即可获得1个善心</p>
                <p>【3】1个善心价值100元，满1个善心可参与每日的善心激励</p>
                <p>【4】善心激励就是将您的善心转换为人民币</p>
            </div>
            <button class="button info">分享给好友</button>
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


