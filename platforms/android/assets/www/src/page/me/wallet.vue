<template>
    <div class="bg-white bd-top">
        <div class="flexwarp text-center pd-topbtn">
            <div class="wd-25p" @click="goPage('cash')">
                <p class="text-red text-md pd-btn-sm">{{this.$store.state.global.walletinfo.Cash|currency('',2)}}
                </p>余额</div>
            <div class="wd-25p" @click="goPage('benevolence')">
                <p class="text-red text-md pd-btn-sm">{{this.$store.state.global.walletinfo.Benevolence|currency('',4)}}
                </p>福豆</div>
            <div class="wd-25p" @click="goPage('shopcash')">
                <p class="text-red text-md pd-btn-sm">{{this.$store.state.global.walletinfo.ShopCash|currency('',2)}}
                </p>购物券</div>
            <div class="wd-25p" @click="goPage('wallet')">
                    <svg class="icon">
                        <use xlink:href="#fahuoline"></use>
                    </svg>
                <p>我的钱包</p></div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        goPage(page){
            this.$router.push({name:page});
        },
        toCashTransferPage(index){
            sessionStorage.MyCashTransferIndex=index
            this.$router.push({path:'/wallet/cash/transfers'});
        }
    }
}
</script>


<style lang="less" scoped>

</style>


