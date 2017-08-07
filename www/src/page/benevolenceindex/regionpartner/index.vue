<template>
    <div class="pagewp">
        <mi-header title="善心联盟"></mi-header>
        <div class="rolebanner">
            <svg><use xlink:href="#consumer"></use></svg>
            <h1>善心联盟</h1>
            <h2>成为公司合伙人,从此财务自营</h2>
        </div>
        
        <div class="shuoming">
            <div class="tlt">为什么要做善心联盟?</div>
            <div class="cont">
                <p>【1】成为公司的合伙人，从此财务自由</p>
                <p>【2】每购物满100元，即可获得1个善心</p>
                <p>【3】享有商家让利的5倍奖励</p>
                <p>【4】享有分享直接客户消费5%的善心奖励，如消费1000元，可获得0.5个善心</p>
                <p>【5】享有分享间接客户消费2.5%的善心奖励，如消费1000元，可获得0.25个善心</p>
                <p>【6】享有推荐商家，其销售额3%善心奖励，如店销售10000元，可获得3个善心</p>
                <p>【7】享有区域或行业销售总额0.5%~1%的善心奖励</p>
            </div>
        </div>
        <div class="shuoming">
            <div class="tlt">申请流程</div>
            <div class="cont">
                <p class="step">选择区域运营中心或行业运营中心</p>
                <p class="step_deliver">↓</p>
                <p class="step">提交申请，等待平台审核</p>
                <p class="step_deliver">↓</p>
                <p class="step">审核通过，享受运营中心股东收益</p>
            </div>
            
        </div>
        <div class="shuoming">
            <div class="tlt">申请条件</div>
            <div class="cont">
                <p>【1】已是传递大使身份</p>
                <p>【2】拥有善心商家</p>
                <p>【3】董事级别（拥有一万个善心，省级）</p>
                <p>【4】运营股东或培训股东（拥有五千个善心，市级）</p>
                <p>【5】行业股东（拥有一千个善心，县级）</p>
            </div>
            <button class="button err">知道了，去申请</button>
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


