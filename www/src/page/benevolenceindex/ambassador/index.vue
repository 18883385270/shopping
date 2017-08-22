<template>
    <div class="pagewp">
        <mi-header title="店主"></mi-header>
        <div class="rolebanner">
            <svg><use xlink:href="#consumer"></use></svg>
            <h1>店主</h1>
            <h2>开通爱心商城，引爆销量</h2>
        </div>
        <div class="timop">
            <div>有效期：一年</div>
            <div>已开通：2454644人</div>
        </div>
        <div class="shuoming">
            <div class="tlt">为什么要做店主?</div>
            <div class="cont">
                <p>成为店主可以开通爱心店铺，销售产品</p>
            </div>
        </div>
        <div class="shuoming">
            <div class="tlt">开通方式</div>
            <div class="cont">
                <p class="nianfei">缴纳 ￥10000元/年</p>
                <p>注意：一经开通，平台服务费概不退还</p>
            </div>
        </div>
        <div class="shuoming">
            <div class="tlt">物料</div>
            <div class="cont">
                <p>免费提供五福填写善商公益工作服一件</p>
                <p>公司免费邮递</p>
            </div>
            <router-link to="/bindex/ambassador/open" class="button block success">立即开通</router-link>
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


