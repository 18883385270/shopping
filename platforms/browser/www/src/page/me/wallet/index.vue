<template>
    <div class="pagewp" :style="{height:pageHeight}">
        <mi-header title="我的钱包"></mi-header>
        <div class="bg-darkgray flexwarp pd-topbtn-xlg text-center text-white">
            <div class="wd-33p" @click="goPage('shopcash')">
                <svg class="icon icon-white icon-lg"><use xlink:href="#cashticket"></use></svg>
                <p class="text-md pd-topbtn-sm">购物券</p>
                <p class="text-lightgray">{{this.$store.state.global.walletinfo.ShopCash|currency('',2)}}</p>
            </div>
            <div class="wd-33p" @click="goPage('cash')">
                <svg class="icon icon-white icon-lg"><use xlink:href="#cash"></use></svg>
                <p class="text-md pd-topbtn-sm">余额</p>
                <p class="text-lightgray">{{this.$store.state.global.walletinfo.Cash|currency('￥',2)}}</p>
            </div>
            <div class="wd-33p" @click="goPage('benevolence')">
                <svg class="icon icon-white icon-lg"><use xlink:href="#integral"></use></svg>
                <p class="text-md pd-topbtn-sm">福豆</p>
                <p class="text-lightgray">{{this.$store.state.global.walletinfo.Benevolence |currency('',4)}}</p>
            </div>
        </div>
        <div class="divider"></div>
        <div class="flexwarp bg-white pd-topbtn" @click="goPage('setpaypassword')">
            <div class="wd-50p"><p class="text-md marg-lf">支付密码</p></div>
            <div class="wd-50p text-right">
                <span class="warning" v-if="!this.$store.state.global.walletinfo.AccessCode">您还未设置支付密码</span>
                <svg class="icon icon-sm marg-rt">
                    <use xlink:href="#rightarrowsline"></use>
                </svg>
            </div>
        </div>
        <div class="divider"></div>
        <div class="flexwarp bg-white pd-topbtn bd-btn" @click="goPage('myqrcode')">
            <div class="wd-50p"><p class="text-md marg-lf">收款码</p></div>
            <div class="wd-50p text-right">
                <svg class="icon icon-sm marg-rt">
                    <use xlink:href="#qrcodeline"></use>
                </svg>
            </div>
        </div>
        <div class="flexwarp bg-white pd-topbtn" @click="goPage('cardsmgr')">
            <div class="wd-50p"><p class="text-md marg-lf">银行卡管理</p></div>
            <div class="wd-50p text-right">
                <svg class="icon icon-sm marg-rt">
                    <use xlink:href="#rightarrowsline"></use>
                </svg>
            </div>
        </div>
        <div class="divider"></div>
    </div>
</template>

<script>
import header from '../../../components/header.vue';
import * as api from '../../../api/wallet'
import * as util from '../../../utils/util'

export default {
    components: {
        'mi-header': header
    },
    data(){
        return{
            pageHeight:"100%"
        }
    },
    mounted(){
        this.pageHeight=util.screenSize().height+'px'
        this.fatchData();
    },
    methods:{
        goPage(page){
            this.$router.push({name:page});
        },
        fatchData(){
            //请求数据
            let self=this;
            let params={};
            api.InfoApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        //更新本地钱包信息
                        self.$store.dispatch('update_walletinfo',{
                            walletinfo:{
                                Id:res.data.WalletInfo.Id,
                                AccessCode:res.data.WalletInfo.AccessCode,
                                Cash:res.data.WalletInfo.Cash,
                                ShopCash:res.data.WalletInfo.ShopCash,
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
.pagewp{
    background:#eee;
}

</style>


