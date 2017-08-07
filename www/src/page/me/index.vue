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
        <mi-modal ref="alert" type="pop" :isHeadShow="true" title="我的二维码">
            <div slot="modalbody" class="qrCodeWarp">
                <vue-q-art :config="qrcodeconfig" :downloadButton="false"></vue-q-art>
                <p>扫描二维码，进入商城</p>
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
import VueQArt from 'vue-qart'
import * as api from '../../api/account'

export default {
    components: {
        'mi-profile': profile,
        'mi-orders': orders,
        'mi-wallet': wallet,
        'mi-collect': collect,
        'mi-sundry': sundry,
        'mi-modal': modal,
        'mi-tabbar': tabbar,
        VueQArt
    },
    data() {
        return {
            qrcodeconfig: {
                value: 'https://www.lq319.com',
                imagePath: './src/img/logo.png',
                filter: 'color'
            }
        }
    },
    mounted(){
        //请求用户数据
        let self=this;
        let params={};
        api.MeInfoApi(params).then(
                    res => {
                        if (res.data.Code == 200) {
                            //更新本地信息
                            self.$store.dispatch('update_userinfo',{
                                userinfo:{
                                    nickname:res.data.UserInfo.NickName,
                                    portrait:res.data.UserInfo.Portrait,
                                    gender:res.data.UserInfo.Gender,
                                    region:res.data.UserInfo.Region,
                                    mobile:res.data.UserInfo.Mobile,
                                    role:res.data.UserInfo.Role,
                                    storeid:res.data.UserInfo.StoreId
                                }
                            });
                            //钱包信息
                            self.$store.dispatch('update_walletinfo',{
                                walletinfo:{
                                    id:res.data.WalletInfo.Id,
                                    accesscode:res.data.WalletInfo.AccessCode,
                                    cash:res.data.WalletInfo.Cash,
                                    benevolence:res.data.WalletInfo.Benevolence,
                                    earnings:res.data.WalletInfo.Earnings,
                                    yesterdayEarnings:res.data.WalletInfo.YesterdayEarnings
                                }
                            });
                        } else {
                            console.log("返回错误码："+res.data.Code);
                        }
                    },
                    err => {
                        console.log('网络错误');
                    }
                )
    },
    methods: {
        openMyQrCodeHandle() {
            this.$refs.alert.modalOpen();
        }
    }
}
</script>

<style lang="less" scoped>
.page_warp {
    height: 100%;
}

.qrCodeWarp {
    padding: 3rem;
    text-align: center;
    img {
        width: 100%;
    }
    p {
        font-size: 1.3rem;
        margin-top: 1rem;
    }
}
</style>


