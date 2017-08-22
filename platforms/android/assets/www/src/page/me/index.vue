/*
* 必须已经登录才能查看，未登录直接引导登录
*/
<template>
    <div class="page_warp">
        <mi-profile @openmyqrcode="openMyQrCodeHandle"></mi-profile>
        <div class="tip error" v-if="!this.$store.state.global.walletinfo.AccessCode" @click="goPage('/wallet')">
            <svg>
                <use xlink:href="#ok" />
            </svg>
            您还未设置钱包的支付密码，现在设置？
        </div>
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
                <p>扫描二维码，推荐朋友加入商城</p>
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
                value: 'http://www.wftx666.com/user/'+this.$store.state.global.token,
                imagePath: './src/img/logo.png',
                filter: 'color'
            }
        }
    },
    mounted(){
        this.getMeInfo();
    },
    methods: {
        openMyQrCodeHandle() {
            this.$refs.alert.modalOpen();
        },
        goPage(page){
            this.$router.push({path:page})
        },
        getMeInfo(){
            //请求用户数据
        let self=this;
        let params={};
        api.MeInfoApi(params).then(
                    res => {
                        if (res.data.Code == 200) {
                            //更新本地信息
                            self.$store.dispatch('update_userinfo',{
                                userinfo:{
                                    Id:res.data.UserInfo.Id,
                                    NickName:res.data.UserInfo.NickName,
                                    Portrait:res.data.UserInfo.Portrait,
                                    Gender:res.data.UserInfo.Gender,
                                    Region:res.data.UserInfo.Region,
                                    Mobile:res.data.UserInfo.Mobile,
                                    Role:res.data.UserInfo.Role,
                                    StoreId:res.data.UserInfo.StoreId
                                }
                            });
                            //钱包信息
                            self.$store.dispatch('update_walletinfo',{
                                walletinfo:{
                                    Id:res.data.WalletInfo.Id,
                                    AccessCode:res.data.WalletInfo.AccessCode,
                                    Cash:res.data.WalletInfo.Cash,
                                    Benevolence:res.data.WalletInfo.Benevolence,
                                    Earnings:res.data.WalletInfo.Earnings,
                                    YesterdayEarnings:res.data.WalletInfo.YesterdayEarnings
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


