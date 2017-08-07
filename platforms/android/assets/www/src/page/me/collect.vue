<template>
    <div class="warp">
        <div class="head">
            <div class="title" @click="goPage('/me/collect')">我的收藏</div>
            <div class="more"></div>
        </div>
        <div class="body">
            <div>
                <b class="walletnumber">12 </b>商品</div>
            <div>
                <b class="walletnumber">23 </b>店铺</div>
            <div>
                <b class="walletnumber">3 </b>受助人</div>
            <div>
                <b class="walletnumber"> </b>
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
            .walletnumber {
                display: block;
                width: 100%;
                font-size: 1.3rem;
                font-weight: 500;
                font-style: normal;
                margin: auto auto 0.5rem auto;
                i {
                    font-style: normal;
                    font-size: 1rem;
                }
            }
        }
    }
}
</style>


