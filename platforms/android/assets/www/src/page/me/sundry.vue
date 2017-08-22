<template>
    <div class="tltcntbox">
        <div class="head">
            <div class="title">五福天下</div>
            <div class="more"></div>
        </div>
        <div class="body">
            <div @click="goPage('/storemgr')">
                <svg><use xlink:href="#store"></use></svg>店铺管理</div>
            <div @class="goPage('/partnermgr')">
                <svg><use xlink:href="#bankcardline"></use></svg>善心联盟管理</div>
            <div @click="goPage('/classroom')">
                <svg><use xlink:href="#classroom"></use></svg>五福课堂</div>
            <div @click="goPage('/about')">
                <svg><use xlink:href="#bankcardline"></use></svg>关于我们</div>
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


