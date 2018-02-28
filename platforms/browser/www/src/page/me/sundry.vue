<template>
    <div class="tltcntbox">
        <div class="flexwarp bd-btn pd-topbtn">
            <div class="wd-50p"><p class="text-md pd-lf">我的WOF</p></div>
        </div>
        <div class="flexwarp text-center pd-topbtn">
            <div class="wd-25p" @click="goOnlineStorePage">
                <svg class="icon-gray icon-lg"><use xlink:href="#onlinestoreline"></use></svg> <p class="pd-top-sm">线上店铺</p></div>
            <div class="wd-25p" @click="goPage('offlinestoremgr')">
                <svg class="icon-gray icon-lg"><use xlink:href="#storeline"></use></svg> <p class="pd-top-sm">线下店铺</p></div>
            <div class="wd-25p" @click="goPage('partnermgr')">
                <svg class="icon-gray icon-lg"><use xlink:href="#partnerline"></use></svg> <p class="pd-top-sm">区域代理</p></div>
            <div class="wd-25p" @click="goPage('kefu')">
                <svg class="icon-gray icon-lg"><use xlink:href="#kefuline"></use></svg> <p class="pd-top-sm">客服中心</p></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isOpenStore:false
        }
    },
    mounted(){
        if(this.$store.state.global.userinfo.StoreId){
            this.isOpenStore=true;
        }
    },
    methods:{
        goPage(page){
            this.$router.push({name:page});
        },
        goOnlineStorePage(){
            if(this.isOpenStore){
                this.goPage('myonlinestore')
            }else{
                this.goPage('storemgr')
            }
        },
    }
}
</script>



<style lang="less" scoped>

</style>


