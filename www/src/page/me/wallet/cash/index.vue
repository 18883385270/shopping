<template>
    <div class="cashpage">
        <mi-header title="余额" rightext="账单明细" @rightNavBarClicked="rightNavBarClickedHandle"></mi-header>
        <div class="cashwarp">
            <svg>
                <use xlink:href="#cash"></use>
            </svg>
            <h2>我的现金</h2>
            <h1>{{this.$store.state.global.walletinfo.Cash|currency('￥',2)}}</h1>
    
            <div class="btns">
                <button type="button" class="button success" @click="goPage('/wallet/cash/recharge')">充值</button>
                <button type="button" class="button gray" @click="goPage('/wallet/cash/withdraw')">提现</button>
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
            this.goPage('/wallet/cash/transfer');
        },
        goPage(page) {
            this.$router.push({ path: page });
        }
        
    }
}
</script>


<style lang="less" scoped>
.cashpage {
    width: 100%;
}

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
