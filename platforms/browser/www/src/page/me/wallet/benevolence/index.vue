<template>
    <div>
        <mi-header title="我的善心" isWhiteText="true" notPlaceHolder="true"></mi-header>
        <div class="bwarp">
            <svg class="topicon">
                <use xlink:href="#integral"></use>
            </svg>
            <h2>您的当前善心值为</h2>
            <h1>{{this.$store.state.global.walletinfo.Benevolence}}</h1>
            <p> 善心值实时更新</p>
            <div class="utils">
                <div @click="toPage('whatbenevolence')">
                    <svg><use xlink:href="#bookline"></use></svg>
                    <p>善心解读</p>
                </div>
                <div @click="toPage('whatbenevolence')">
                    <svg><use xlink:href="#increaseline"></use></svg>
                    <p>分值提升</p>
                </div>
                <div @click="goPage('/wallet/benevolence/transfers')">
                    <svg><use xlink:href="#recordline"></use></svg>
                    <p>记录明细</p>
                </div>
            </div>
        </div>
        <div class="descinfo">
            <p>善心值达到1个 即可参与善心激励</p>
            <p class="what" @click="toPage('whatbenevolence')">什么是善心？</p>
        </div>
    </div>
</template>

<script>
import header from '../../../../components/header.vue'

export default {
    components: {
        'mi-header': header
    },
    methods:{
        goPage(page){
            this.$router.push({path:page});
        },
        toPage(page){
            this.$router.push({name:page})
        }
    }
}
</script>

<style lang="less">
.bwarp {
    text-align: center;
    padding: 6rem 0 2rem 0;background:#f90;color:#fff;
    .topicon {
        width: 5rem;
        height: 5rem;
        margin: 0 auto 1rem auto;
        fill: #fff;
    }
    h2 {
        font-weight: 400;font-size:1.3rem;
    }
    h1 {
        font-weight: 400;
        font-size: 2rem;
        margin-top: 0.3rem;padding:1rem 0;
    }
    p{
        font-size:1.2rem;
    }
    .utils{
        display: flex;width:100%;padding-top:3rem;
        >div{
            width:33.3%;text-align:center;
            p{
                font-size:1rem;
            }
            svg{
                width:2.5rem;height:2.5rem;fill:#fff;margin:auto;
            }
        }
    }
}
.descinfo{
    font-size:1.2rem;text-align: center;padding:2rem 0;font-weight:400;
    .what{
        margin-top:1rem;color:#06c;font-size:1rem;
    }
}
</style>
