<template>
    <div class="tltcntbox">
        <div class="head">
            <div class="title">我的订单</div>
            <div class="more" @click="toMyOrderPage(0)">全部订单</div>
        </div>
        <div class="body">
            <div @click="toMyOrderPage(1)">
                <svg><use xlink:href="#bankcardline"></use></svg>待发货</div>
            <div @click="toMyOrderPage(2)">
                <svg><use xlink:href="#getgoodsline"></use></svg>待收货</div>
            <div @click="toMyOrderPage(3)">
                <svg><use xlink:href="#commentline"></use></svg>待评价</div>
            <div @click="toMyOrderPage(4)">
                <svg><use xlink:href="#serviceline"></use></svg>退换/售后</div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toMyOrderPage(index){
            sessionStorage.MyOrderStatusIndex=index
            this.$router.push({path:'/orders'});
        },
        toPage(page) {
            this.$router.push({ path: page });
        }
    }
}
</script>

<style lang="less" scoped>

</style>


