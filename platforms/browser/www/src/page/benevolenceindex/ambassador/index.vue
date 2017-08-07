<template>
    <div class="pagewp">
        <mi-header title="传递大使"></mi-header>
        <div class="rolebanner">
            <svg><use xlink:href="#consumer"></use></svg>
            <h1>传递大使</h1>
            <h2>大爱社会的传播者</h2>
        </div>
        <div class="timop">
            <div>有效期：一年</div>
            <div>已开通：2454644人</div>
        </div>
        <div class="shuoming">
            <div class="tlt">为什么要做传递大使?</div>
            <div class="cont">
                <p>【1】可以成为大爱社会公益传播者</p>
                <p>【2】每购物满100元，即可获得1个善心</p>
                <p>【3】享有商家让利的5倍奖励</p>
                <p>【4】享有分享直接客户消费5%的善心奖励，如消费1000元，可获得0.5个善心</p>
                <p>【5】享有分享间接客户消费2.5%的善心奖励，如消费1000元，可获得0.25个善心</p>
                <p>【6】享有推荐商家，其销售额3%善心奖励，如店销售10000元，可获得3个善心</p>
            </div>
        </div>
        <div class="shuoming">
            <div class="tlt">开通方式</div>
            <div class="cont">
                <p class="nianfei">缴纳 365元 年费</p>
            </div>
        </div>
        <div class="shuoming">
            <div class="tlt">物料</div>
            <div class="cont">
                <p>免费提供莱乾善商公益工作服一件</p>
                <p>请在开通后与平台客服联系</p>
            </div>
            <button class="sharebtn">立即开通</button>
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
    .sharebtn {
        text-align: center;
        width:100%;
        display: block;
        margin-top: 2rem;
        font-size: 1.3rem;
        background: #C1272D;
        color:#fff;
        border: 0;
        padding: 1rem 0;
    }
}
</style>


