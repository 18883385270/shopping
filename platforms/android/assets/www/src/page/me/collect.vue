<template>
    <div class="tltcntbox">
        <div class="head">
            <div class="title" @click="goPage('/me/collect')">我的收藏</div>
            <div class="more"></div>
        </div>
        <div class="body">
            <div>
                <b class="number">0 </b>商品</div>
            <div>
                <b class="number">0 </b>店铺</div>
            <div>
                <b class="number">0 </b>受助人</div>
            <div>
                <b class="number"> </b>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        goPage(page){
            this.$router.push({path:page});
        }
    }
}
</script>

<style lang="less" src="../../img/common.less">

</style>

<style lang="less" scoped>

</style>


