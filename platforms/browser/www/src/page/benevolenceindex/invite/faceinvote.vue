<template>
    <div :style="{height:pageHeight}">
        <mi-header title="面对面邀请"></mi-header>
        <div class="bg-success marg-lg pd-xlg pd-topbtn-xxlg text-center img-round">
            <div class="pd-lg text-white">
                <p class="text-md pd-btn">您的邀请链接</p>
                <p> {{MyLink}}</p>
            </div>
            <div class="qrcodebg">
                <div class="qrcodewarp">
                    <span class="inlineblock bg-white pd">
                    <vueqr :text="MyLink" size="200"></vueqr></span>
                </div>
                <div class="pd-top text-white">
                    打开微信，点击右上角的“+” 使用扫一扫，扫描上面二维码
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import header from '../../../components/header.vue'
import * as util from '../../../utils/util'
import vueqr from 'vue-qrcode-component'

export default {
    components: {
        'mi-header': header,
        'vueqr': vueqr
    },
    data() {
        return {
            MyLink: 'http://m.wftx666.com/#/reg/' + this.$store.state.global.token,
            pageHeight: '100%'
        }
    },
    mounted() {
        this.pageHeight = util.screenSize().height + 'px'
    }
}
</script>

<style lang="less" scoped>
.pagewp {
    background: #096;
}


.qrcodewarp{
        text-align:center;
        >span div{
            display:inline-block;
        }
    }
</style>


