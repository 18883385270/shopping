<template>
    <div class="pagewp">
        <mi-header title="善心联盟"></mi-header>
        <div class="rolebanner">
            <svg><use xlink:href="#consumer"></use></svg>
            <h1>平台商家</h1>
            <h2>加盟慈善事业，引爆产品销售</h2>
        </div>
        
        <div class="shuoming">
            <div class="tlt">为什么要入驻商家?</div>
            <div class="cont">
                <p>【1】提升企业美誉度</p>
                <p>【2】线上+线下多渠道推广</p>
                <p>【3】锁定人们，跨界收益</p>
                <p>【4】享有促销让利，善心激励</p>
            </div>
        </div>
        <div class="shuoming">
            <div class="tlt">开店流程</div>
            <div class="cont">
                <p class="step">注册会员</p>
                <p class="step_deliver">↓</p>
                <p class="step">填写店铺资料，等待审核</p>
                <p class="step_deliver">↓</p>
                <p class="step">审核通过，开通线下线上店铺</p>
            </div>
            
        </div>
        <div class="shuoming">
            <div class="tlt">申请条件</div>
            <div class="cont">
                <p>【1】提供产品或服务的真实公司或个体工商户</p>
                <p>【2】可提供国家法律允许经营的合法商品或服务</p>
            </div>
            <button class="sharebtn" @click="goPage('/bindex/storeowner/open')">知道了，去开店</button>
        </div>
        

        
    
    </div>
</template>

<script>
import header from '../../../components/header.vue';

export default {
    components: {
        'mi-header': header
    },
    methods:{
        goPage(page){
            this.$router.push({path:page})
        }
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


