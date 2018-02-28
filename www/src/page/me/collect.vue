<template>
    <div class="bg-white">
        <div class="flexwarp bd-btn pd-topbtn">
            <div class="wd-50p"><p class="text-md pd-lf">我的收藏</p></div>
            <div class="wd-50p text-right"><p class="text-gray pd-rt">即将上线</p></div>
        </div>
        <div class="flexwarp pd-topbtn text-lightgray">
            <div class="wd-25p text-center">
                <p class="text-md">0 </p>商品</div>
            <div class="wd-25p text-center">
                <p class="text-md">0 </p>店铺</div>
            <div class="wd-25p text-center">
                <p> </p></div>
            <div class="wd-25p text-center">
                <p> </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        goPage(page){
            this.$router.push({name:page});
        }
    }
}
</script>



<style lang="less" scoped>

</style>


