<template>
    <div class="warp">
        <div class="head">
            <div class="title">我的钱包</div>
            <div class="more" @click="goPage('/wallet')">全部资产</div>
        </div>
        <div class="body">
            <div @click="goPage('/wallet/cash')">
                <b class="walletnumber">12.3
                    <i>元</i>
                </b>余额</div>
            <div @click="goPage('/wallet/benevolence')">
                <b class="walletnumber">123.23
                    <i>个</i>
                </b>善心</div>
            <div>
                <b class="walletnumber">323
                    <i>元</i>
                </b>日可支付</div>
            <div>
                <b class="walletnumber">344
                    <i>元</i>
                </b>累计收益</div>
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
                color: red;
                font-size: 1.3rem;font-weight:300;
                font-style: normal;
                margin: auto auto 0.5rem auto;
                i {
                    font-style: normal;font-size:1rem;
                }
            }
        }
    }
}
</style>


