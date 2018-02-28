<template>
    <div class="pagewp">
        <mi-header title="区域代理"></mi-header>
        <div class="rolebanner">
            <svg><use xlink:href="#consumer"></use></svg>
            <h1>区域代理</h1>
            <h2>成为公司合伙人,从此财务自营</h2>
        </div>
        <div class="divider"></div>
        <div class="shuoming">
            <div class="tlt">为什么要做区域代理?</div>
            <div class="cont">
                <p>【1】成为公司的合伙人，从此财务自由</p>
                <p>【2】享有区域或行业销售总额0.5%~1%的现金和福豆奖励</p>
            </div>
        </div>
        <div class="divider"></div>
        <div class="shuoming">
            <div class="tlt">申请流程</div>
            <div class="cont">
                <p class="step">选择区域运营中心</p>
                <p class="step_deliver">↓</p>
                <p class="step">完成公司资质审查和合同签署</p>
                <p class="step_deliver">↓</p>
                <p class="step">审核通过，享受运营中心股东收益</p>
            </div>
            
        </div>
        <div class="divider"></div>
        <div class="shuoming">
            <div class="tlt">条件及分红</div>
            <div class="cont">
                <p>【1】省级代理（拥有32000个福豆）享受区域销售额的0.5%的分红</p>
                <p>【2】市级运营股东或培训股东（拥有11000个福豆）享受区域销售额的1%的分红</p>
                <p>【3】县级代理（拥有2500个福豆）享受区域销售额的1.5%的分红</p>
            </div>
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
            p {
                margin-top: 1rem;
                &.step{
                    background:#DCF9DF;color:#000;text-align: center;padding:1rem;
                    border:1px solid #39B54A;margin-top:0;
                }
                &.step_deliver{
                    text-align: center;font-size:1.6rem;margin-top:0;
                }
            }
        }
    }
    
    
}
</style>


