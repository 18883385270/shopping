<template>
    <div class="warp">
        <div class="head">
            <div class="title">五福天下</div>
            <div class="more"></div>
        </div>
        <div class="body">
            <div @click="goPage('/me/storemgr')">
                <svg><use xlink:href="#store"></use></svg>店铺管理</div>
            <div @class="goPage('/me/partnermgr')">
                <svg><use xlink:href="#bankcardline"></use></svg>善心联盟管理</div>
            <div @click="goPage('/me/classroom')">
                <svg><use xlink:href="#classroom"></use></svg>五福课堂</div>
            <div @click="goPage('/me/about')">
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


