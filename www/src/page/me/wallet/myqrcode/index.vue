<template>
    <div class="qrcodepage" :style="{height:pageHeight}">
        <mi-header title="收款二维码" isWhiteText="true"></mi-header>
        <div class="bg-white marg-lg pd-topbtn-xxlg text-center img-round">
            <p class="pd-lg text-lg text-warning">个人二维码收款</p>
            <p class="qrimg">
                <vueqr :text="MyLink" size="200"></vueqr>
            </p>
            <p class="pd-topbtn-lg text-gray">扫描以上二维码，向我转账</p>
        </div>
    </div>
</template>

<script>
import header from '../../../../components/header.vue'
import * as util from '../../../../utils/util'
import vueqr from 'vue-qrcode-component'

export default {
    components: {
        'mi-header': header,
        'vueqr': vueqr
    },
    data() {
        return {
            MyLink: 'User:' + this.$store.state.global.token,
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

.qrimg{
        text-align:center;
        >div{
            display:inline-block;
        }
    }
</style>


