<template>
    <div class="qrcodepage" :style="{height:pageHeight}">
        <mi-header title="我的二维码" isWhiteText="true"></mi-header>
        <div class="qrcodewarp">
            <p class="tlt">二维码收款</p>
            <vueqr :text="MyLink" colorDark="black" colorLight="#fff" :autoColor='true' margin="0"></vueqr>
            <p>扫描以上二维码，向我转账</p>
        </div>
    </div>
</template>

<script>
import header from '../../../../components/header.vue'
import * as util from '../../../../utils/util'
import vueqr from 'vue-qr'

export default {
    components: {
        'mi-header': header,
        'vueqr': vueqr
    },
    data() {
        return {
            MyLink: 'http://www.wftx666.com/user/' + this.$store.state.global.token,
            MyPortrait: this.$store.state.global.userinfo.Portrait,
            pageHeight:'100%'
        }
    },
    mounted(){
        this.pageHeight=util.screenSize().height+'px'
    }
}
</script>

<style lang="less" scoped>
.qrcodepage{
    background:#ffa631;
}
.qrcodewarp {
    margin:  3rem 1rem;
    padding: 3rem 2rem 4rem 2rem;
    text-align: center;
    background: #fff;
    border-radius:5px;
    .tlt{
        padding:1rem 0 2rem 0;
        font-size:1.5rem;
        color:#ffa631;
    }
    img {
        width: 100%;
    }
    p {
        font-size: 1.3rem;
        margin-top: 1rem;
    }
}
</style>


