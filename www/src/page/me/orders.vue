<template>
    <div class="tltcntbox">
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

</style>


