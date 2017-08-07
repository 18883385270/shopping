<template>
    <div class="tltcntbox">
        <div class="head">
            <div class="title">我的钱包</div>
            <div class="more" @click="goPage('/wallet')">全部资产</div>
        </div>
        <div class="body">
            <div @click="goPage('/wallet/cash')">
                <b class="number text-red">{{this.$store.state.global.walletinfo.cash|currency('',2)}}
                    <i>元</i>
                </b>余额</div>
            <div @click="goPage('/wallet/benevolence')">
                <b class="number text-red">{{this.$store.state.global.walletinfo.benevolence|currency('',4)}}
                    <i>个</i>
                </b>善心</div>
            <div>
                <b class="number text-red">{{this.$store.state.global.walletinfo.yesterdayEarnings|currency('',2)}}
                    <i>元</i>
                </b>昨日收益</div>
            <div>
                <b class="number text-red">{{this.$store.state.global.walletinfo.earnings|currency('',2)}}
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

<style lang="less" src="../../img/common.less">

</style>

<style lang="less" scoped>

</style>


