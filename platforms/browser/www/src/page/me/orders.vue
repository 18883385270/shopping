<template>
    <div class="warp">
        <div class="head">
            <div class="title">我的订单</div>
            <div class="more" @click="toPage('/orders')">查看全部订单</div>
        </div>
        <div class="body">
            <div>
                <svg><use xlink:href="#bankcardline"></use></svg>待付款</div>
            <div>
                <svg><use xlink:href="#getgoodsline"></use></svg>待收货</div>
            <div>
                <svg><use xlink:href="#commentline"></use></svg>待评价</div>
            <div>
                <svg><use xlink:href="#serviceline"></use></svg>退换/售后</div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toPage(page) {
            this.$router.push({ path: page });
        }
    }
}
</script>

<style lang="less" scoped>
.warp {
    padding: 0;
    background: white;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    margin-top: 1.2rem;
    .head {
        border-bottom: 1px solid #ddd;
        display: flex;
        width: 100%;
        .title {
            font-size: 1.3rem;
            line-height: 2rem;
            width: 50%;
            padding: 1rem;
        }
        .more {
            line-height: 2rem;
            text-align: right;
            width: 50%;
            padding: 1rem;
        }
    }
    .body {
        display: flex;
        align-items: center;
        div {
            width: 25%;
            text-align: center;
            padding: 1.5rem 0.5rem;
            svg {
                display: block;
                width: 2.5rem;
                height: 2.5rem;
                margin: auto auto 0.5rem auto;
                fill:#333;
            }
        }
    }
}
</style>


