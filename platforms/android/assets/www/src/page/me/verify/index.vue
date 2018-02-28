<template>
    <div class="pagewp" :style="{height:pageHeight}">
        <mi-header title="验证身份"></mi-header>
        <div class="pd bg-white">
            您正在进行重要操作，需要验证您的身份,请用以下方式完成身份验证
        </div>
        <div class="divider"></div>
        <div class="flexwarp bg-white pd-topbtn" @click="replacePage('mobileverify')">
            <div class="wd-50p"><p class="text-lg marg-lf">手机号验证</p></div>
            <div class="wd-50p text-right">
                <svg class="icon icon-sm marg-rt">
                    <use xlink:href="#rightarrowsline"></use>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import header from '../../../components/header.vue'
import * as util from '../../../utils/util'

export default {
    data(){
        return{
            pageHeight:"100%"
        }
    },
    components: {
        'mi-header': header
    },
    mounted(){
        this.pageHeight=util.screenSize().height+'px'
    },
    methods:{
        replacePage(page){
            this.$router.replace({name:page});
        }
    }
}
</script>

<style lang="less" scoped>
.pagewp{
    background:#eee;
}
</style>


