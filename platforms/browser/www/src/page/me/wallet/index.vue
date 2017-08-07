<template>
    <div>
        <mi-header title="我的钱包"></mi-header>
        <div class="wallettop">
            <div @click="goPage('/wallet/benevolence')">
                <svg><use xlink:href="#integralline"></use></svg>善心
                <p>34</p>
            </div>
            <div @click="goPage('/wallet/cash')">
                <svg><use xlink:href="#cash"></use></svg>余额
                <p>￥134.3</p>
            </div>
            <div @click="goPage('/wallet/cardsmgr')">
                <svg><use xlink:href="#bankcard"></use></svg>银行卡</div>
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
            this.$router.push({path:page});
        }
    }
}
</script>

<style lang="less" scoped>
.wallettop {
    background:#555;
    display: flex;padding:1rem 0;
    >div {
        width: 30%;
        text-align: center;
        margin: 1rem;color:#fff;font-size:1.3rem;
        svg {
            display: block;
            margin: 0.3rem auto 0.3rem auto;
            width: 3.5rem;
            height: 3.5rem;
            fill: #fff;
        }
        p{
            padding-top:0.2rem;
        }
    }
}
</style>


