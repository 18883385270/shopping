<template>
    <div>
        <mi-header title="余额" rightext="账单" @rightNavBarClicked="rightNavBarClickedHandle"></mi-header>
        <div class="pd-lg text-center ">
            <svg class="pd-topbtn icon icon-xlg icon-warning">
                <use xlink:href="#cash"></use>
            </svg>
            <p class="pd-topbtn text-lg">我的余额</p>
            <h1 class="text-light">{{this.$store.state.global.walletinfo.Cash|currency('￥',2)}}</h1>
            <div class="marg-top-lg">
                <button type="button" class="button success" @click="goPage('rechareg')">充值</button>
                <button type="button" class="button gray" @click="goPage('withdraw')">提现</button>
            </div>
        </div>
    </div>
</template>

<script>
import header from '../../../../components/header.vue';

export default {
    components: {
        'mi-header': header
    },
    
    methods: {
        rightNavBarClickedHandle() {
            sessionStorage.MyCashTransferIndex=0
            this.$router.push({name:'cashtransfers'});
        },
        goPage(page) {
            this.$router.push({ name: page });
        }
        
    }
}
</script>


<style lang="less" scoped>


.cashwarp {
    text-align: center;
    padding: 1rem;
    svg {
        width: 6rem;
        height: 6rem;
        margin: 2rem auto 1rem auto;
        fill: #f93;
        display: block;
    }
    h2 {
        font-weight: 400;font-size:1.3rem;
    }
    h1 {
        font-size: 2rem;font-weight: 400;
        margin-top: 0.6rem;
    }
    .btns {
        padding: 3rem 0;
        width: 100%;
    }
}
</style>
