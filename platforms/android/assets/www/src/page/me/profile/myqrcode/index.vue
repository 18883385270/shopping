<template>
    <div>
        <mi-header title="我的二维码"></mi-header>
        <div class="qrcodewarp">
            <vueqr :text="MyLink" colorDark="black" colorLight="#fff" :autoColor='true' margin="0"></vueqr>
            <p>扫描二维码，推荐朋友加入商城</p>
        </div>
    </div>
</template>

<script>
import header from '../../../../components/header.vue'
import vueqr from 'vue-qr'

export default {
    components: {
        'mi-header': header,
        'vueqr': vueqr
    },
    data() {
        return {
            MyLink: 'http://www.wftx666.com/user/' + this.$store.state.global.token,
            MyPortrait: this.$store.state.global.userinfo.Portrait
        }
    }
}
</script>

<style lang="less" scoped>
.qrcodewarp {
    margin: 3rem 4rem;
    padding: 4rem 2rem;
    text-align: center;
    background: #fff;
    img {
        width: 100%;
    }
    p {
        font-size: 1.3rem;
        margin-top: 1rem;
    }
}
</style>


