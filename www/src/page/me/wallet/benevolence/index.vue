<template>
    <div>
        <mi-header title="我的福豆" isWhiteText="true" notPlaceHolder="true"></mi-header>
        <div class="bg-warning text-center text-white" style="padding-top:6rem;">
            <svg class="icon icon-xlg icon-white">
                <use xlink:href="#integral"></use>
            </svg>
            <h1 class="pd-topbtn text-light">{{this.$store.state.global.walletinfo.Benevolence}}</h1>
            <p> 福豆值实时更新</p>
            <div class="flexwarp pd-topbtn-xlg">
                <div class="wd-33p text-center" @click="goPage('whatbenevolence')">
                    <svg class="icon-lg icon-white"><use xlink:href="#bookline"></use></svg>
                    <p class="pd-top-sm">福豆解读</p>
                </div>
                <div class="wd-33p text-center" @click="goPage('whatbenevolence')">
                    <svg class="icon-lg icon-white"><use xlink:href="#increaseline"></use></svg>
                    <p class="pd-top-sm">分值提升</p>
                </div>
                <div class="wd-33p text-center" @click="goPage('benevolencetransfers')">
                    <svg class="icon-lg icon-white"><use xlink:href="#recordline"></use></svg>
                    <p class="pd-top-sm">记录明细</p>
                </div>
            </div>
        </div>
        <div class="pd-top-xlg text-center">
            <p class="text-md text-gray">参与福豆激励，您钱包的福豆值需大于1个</p>
            <p class="text-primary pd-top" @click="goPage('whatbenevolence')">什么是福豆？</p>
        </div>
    </div>
</template>

<script>
import header from '../../../../components/header.vue'
export default {
    components: {
        'mi-header': header
    },
    methods:{
        goPage(page){
            this.$router.push({name:page})
        }
    }
}
</script>

<style lang="less">

</style>
