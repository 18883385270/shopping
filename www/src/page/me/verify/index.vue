<template>
    <div>
        <mi-header title="验证身份"></mi-header>
        <div class="pd1">
            您正在进行重要操作，需要验证您的身份,请用以下方式完成身份验证
        </div>
        <div class="tablerow mg-top20" @click="goPage('/me/verify/mobile')">
            <div class="tlt">手机号码验证</div>
            <div class="cnt">
                <svg>
                    <use xlink:href="#rightarrowsline"></use>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import header from '../../../components/header.vue'

export default {
    components: {
        'mi-header': header
    },
    methods:{
        goPage(page){
            this.$router.push({path:page});
        }
    }
}
</script>

<style lang="less" src="../../../img/common.less"></style>
<style lang="less" scoped>

</style>


