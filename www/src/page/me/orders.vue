<template>
    <div class="bg-white">
        <div class="flexwarp bd-btn pd-topbtn" @click="toMyOrderPage(0)">
            <div class="wd-50p"><p class="text-md pd-lf">我的订单</p></div>
            <div class="wd-50p text-right"><p class="text-gray pd-rt">全部订单</p></div>
        </div>
        <div class="flexwarp pd-topbtn-lg">
            <div class="wd-25p text-center" @click="toMyOrderPage(1)">
                <svg class=" icon-lg icon-gray"><use xlink:href="#fahuoline"></use></svg> <p class="pd-top-sm">待发货</p></div>
            <div class="wd-25p text-center" @click="toMyOrderPage(2)">
                <svg class=" icon-lg icon-gray"><use xlink:href="#getgoodsline"></use></svg> <p class="pd-top-sm">待收货</p></div>
            <div class="wd-25p text-center" @click="toMyOrderPage(3)">
                <svg class=" icon-lg icon-gray"><use xlink:href="#commentline"></use></svg> <p class="pd-top-sm">待评价</p></div>
            <div class="wd-25p text-center" @click="toMyOrderPage(4)">
                <svg class=" icon-lg icon-gray"><use xlink:href="#serviceline"></use></svg> <p class="pd-top-sm">退换/售后</p></div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toMyOrderPage(index){
            sessionStorage.MyOrderStatusIndex=index
            this.$router.push({name:'orders'});
        },
    }
}
</script>

<style lang="less" scoped>
.body{
    display:flex;

}
</style>


