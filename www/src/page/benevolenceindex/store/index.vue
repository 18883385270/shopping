<template>
    <div class="pagewp">
        <mi-header title="五福店铺"></mi-header>
        <div class="rolebanner">
            <svg><use xlink:href="#consumer"></use></svg>
            <h1>五福店铺</h1>
            <h2>加盟电商事业，引爆产品销售</h2>
        </div>
        <div class="divider"></div>
        <div class="shuoming">
            <div class="tlt">为什么要入驻商家?</div>
            <div class="cont">
                <p>【1】线上+线下多渠道推广</p>
                <p>【2】锁定人们，跨界收益</p>
            </div>
        </div>
        <div class="divider"></div>
        <div class="shuoming">
            <div class="tlt">开通方式</div>
            <div class="cont">
                <p>年费 <span class="text-red text-lg">￥1865元/年</span></p>
                <p>注意：含365元平台服务费，1500开店保证金，平台服务费不退回</p>
            </div>
        </div>
        <div class="divider"></div>
        <div class="shuoming">
            <div class="tlt">开店流程</div>
            <div class="cont">
                <p class="step">填写店铺资料，等待审核</p>
                <p class="step_deliver">↓</p>
                <p class="step">审核通过，开通线下线上店铺</p>
            </div>
            
        </div>
        <div class="divider"></div>
        <div class="shuoming">
            <div class="tlt">申请条件</div>
            <div class="cont">
                <p>【1】提供产品或服务的真实公司、个体工商户、个人</p>
                <p>【2】可提供国家法律允许经营的合法商品或服务</p>
            </div>
            <button v-if="!this.$store.state.global.userinfo.StoreId" class="button success" @click="goPage('openstore')">知道了，去开店</button>
            <button v-if="this.$store.state.global.userinfo.StoreId" class="button info" @click="goPage('storemgr')">您已开店，管理我的店铺</button>
        </div>
    </div>
</template>

<script>
import header from '../../../components/header.vue';
import * as api from '../../../api/store'

export default {
    components: {
        'mi-header': header
    },
    data(){
        return{
            storeinfo:{}
        }
    },
    methods:{
        goPage(page){
            this.$router.push({name:page})
        },
        getStoreInfo(){
            //加载店铺信息
            let params = {};
            api.InfoApi(params).then(
            res => {
                if (res.data.Code == 200) {
                this.storeinfo = res.data.StoreInfo;
                } else {
                console.log(res.data.Message);
                }
            },
            err => {
                console.log('网络错误');
            }
            )
        }
    }
}
</script>

<style lang="less" scoped>
.pagewp {
    .rolebanner {
        text-align: center;
        padding: 2em 1rem;
        color: #fff;
        background: #333;
        background-size:100% 100%;
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


