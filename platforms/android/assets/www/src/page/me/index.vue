/*
* 必须已经登录才能查看，未登录直接引导登录
*/
<template>
    <div class="page_warp">
        <mi-profile @openmyqrcode="openMyQrCodeHandle"></mi-profile>
        <mi-orders></mi-orders>
        <mi-wallet></mi-wallet>
        <mi-collect></mi-collect>
        <mi-sundry></mi-sundry>
        <div style="width: 100%;height: 7rem;"></div>
        <mi-tabbar :selected="4"></mi-tabbar>
    
        <!--弹出框-->
        <mi-modal ref="alert" type="pop" :isHeadShow="true" title="我的二维码" >
            <div slot="modalbody" class="qrCodeWarp">
                <img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1062989499,1682648318&fm=58" />
                <p>扫描二维码，加我好友</p>
            </div>
        </mi-modal>
    </div>
</template>

<script>
import profile from './profile.vue';
import orders from './orders.vue';
import wallet from './wallet.vue';
import collect from './collect.vue';
import sundry from './sundry.vue';
import modal from '../../components/modal.vue';
import tabbar from '../../components/tabbar.vue';

export default {
    components: {
        'mi-profile': profile,
        'mi-orders': orders,
        'mi-wallet': wallet,
        'mi-collect': collect,
        'mi-sundry': sundry,
        'mi-modal': modal,
        'mi-tabbar': tabbar
    },
    methods:{
        openMyQrCodeHandle(){
            this.$refs.alert.modalOpen();
        }
    }
}
</script>

<style lang="less" scoped>
.page_warp {
    height: 100%;
}
.qrCodeWarp{
    padding:2rem;text-align:center;
    p{
        font-size: 1.4rem;margin-top: 1rem;
    }
}
</style>


