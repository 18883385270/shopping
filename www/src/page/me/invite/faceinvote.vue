<template>
    <div class="pagewp" :style="{height:pageHeight}">
        <mi-header title="面对面邀请"></mi-header>
        <div class="mylink">
            您的邀请链接
            <p> {{MyLink}}</p>
        </div>
        <div class="qrcodebg">
            <div class="qrcodewarp">
                <vueqr :text="MyLink" colorDark="black" colorLight="#fff" :autoColor='true' margin="10"></vueqr>
            </div>
            <div class="facttip">
                打开微信，点击右上角的“+” 使用扫一扫，扫描上面二维码
            </div>
        </div>
    </div>
</template>

<script>
import header from '../../../components/header.vue'
import * as util from '../../../utils/util'
import vueqr from 'vue-qr'

export default {
    components: {
        'mi-header': header,
        'vueqr': vueqr
    },
    data() {
        return {
            MyLink: 'http://m.wftx666.com/#/reg?parentid=' + this.$store.state.global.token,
            MyPortrait: this.$store.state.global.userinfo.Portrait,
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

.mylink {
    padding: 2rem;
    font-size: 2rem;
    text-align: center;
    background: #fff;
    p {
        margin-top: 1rem;
        font-size: 1rem;
    }
}

.qrcodebg {
    padding-top: 6rem;
    text-align: center;
    .facttip {
        padding: 2rem 4rem;
        font-size: 1.3rem;
        text-align: center;
        color: #fff;
    }
}
</style>


