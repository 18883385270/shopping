
<template>
    <div class="pagewp" :style="{height:pageHeight}">
        <mi-profile></mi-profile>
        
        <div class="tip error" v-if="!this.$store.state.global.walletinfo.AccessCode" @click="goPage('wallet')">
            <svg>
                <use xlink:href="#x" />
            </svg>
            您还未设置钱包的支付密码，现在设置？
        </div>
        <div class="tip info" v-if="HasUnPayOrder" @click="goPage('pay')">
            <svg>
                <use xlink:href="#notice" />
            </svg>
            您有未支付的订单，现在支付吗？
        </div>
        <mi-wallet></mi-wallet>
        <div class="divider"></div>
        <mi-orders></mi-orders>
        <div class="divider"></div>
        <mi-collect></mi-collect>
        
        <div class="bg-white" v-if="isOpenStore">
            <div class="divider"></div>
            <div class="text-md pd-topbtn text-center bd-btn">
                <span class="text-gray">我的福气小店</span>
            </div>
            <div class="flexwarp pd-top" @click="goOnlineStorePage">
                <div class="wd-50p text-center">
                    <h1 class=" text-danger">{{StatisticsInfo.TodayOrder}}</h1>
                    <p class="text-gray pd-topbtn-sm">今日订单</p>
                </div>
                <div class="wd-50p text-center">
                    <h1 class=" text-danger">{{StatisticsInfo.TodaySale}}</h1>
                    <p class="text-gray pd-topbtn-sm">今日销售额</p>
                </div>
            </div>
            <div class="text-center pd-topbtn">
                <button class="mdbtn danger round" @click="goOnlineStorePage">
                    <svg class="icon-sm icon-danger marg-rt-sm">
                    <use xlink:href="#store"></use>
                </svg>管理小店
                    </button>
            </div>
        </div>
        <div class="bg-white" v-if="StatisticsInfo.PartnerId.length">
            <div class="divider"></div>
            <div class="text-md pd-topbtn text-center bd-btn">
                我代理的地区
            </div>
            <div class="flexwarp">
                <div class="wd-50p text-center pd-topbtn" @click="goPage('mypartner')">
                    <h1 class=" text-primary">{{StatisticsInfo.RegionTodayOrder}}</h1>
                    <p class=" pd-topbtn-sm">今日订单</p>
                </div>
                <div class="wd-50p text-center pd-topbtn" @click="goPage('mypartner')">
                    <h1 class=" text-primary">{{StatisticsInfo.RegionTodayOrder}}</h1>
                    <p class=" pd-topbtn-sm">今日成交额</p>
                </div>
            </div>
            <div class="text-center pd-btn">
                <button class="mdbtn primary round" @click="goPage('mypartner')">
                    <svg class="icon icon-primary icon-sm marg-rt-sm">
                    <use xlink:href="#mapline"></use>
                </svg>我的代理
                    </button>
            </div>
        </div>
        <div class="divider"></div>
        <mi-sundry></mi-sundry>
        <div class="divider"></div>
        <div style="width: 100%;height: 4.5rem;"></div>
        <mi-tabbar :selected="4"></mi-tabbar>
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
import * as api from '../../api/account'
import * as checkJs from '../../utils/pubfunc'
import * as util from '../../utils/util'


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
    data(){
        return{
            HasUnPayOrder:false,
            IsInApp: true,
            pageHeight:"100%",
            StatisticsInfo:null,
            isOpenStore:false
        }
    },
    mounted(){
        this.pageHeight=util.screenSize().height+'px';
        if (checkJs.isNullOrEmpty(localStorage.IsCordovaReady) || localStorage.IsCordovaReady == 'false') {
            this.IsInApp = false;
        }

        this.fatchData();
        if(this.$store.state.global.userinfo.StoreId){
            this.isOpenStore=true;
        }
        if(!checkJs.isNullOrEmpty(sessionStorage.ToPayInfo)){
            let toPayInfo = JSON.parse(sessionStorage.ToPayInfo)
            if(toPayInfo.Type=='account'){
                this.HasUnPayOrder=true;
            }
            else{
                if(parseInt(((new Date()).valueOf()-toPayInfo.CreatedOn) / (1000 * 60)) <= 30){
                    this.HasUnPayOrder=true;
                }
            }
        }
    },
    methods: {
        goPage(name){
            this.$router.push({name:name});
        },
        goOnlineStorePage(){
            if(this.isOpenStore){
                this.goPage('myonlinestore')
            }else{
                this.goPage('storemgr')
            }
        },
        fatchData(){
            let self=this;
            let params={};
            api.MeInfoApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        //更新本地信息
                        self.$store.dispatch('update_userinfo',{
                            userinfo:{
                                Id:res.data.UserInfo.Id,
                                ParentId:res.data.UserInfo.ParentId,
                                NickName:res.data.UserInfo.NickName,
                                Portrait:res.data.UserInfo.Portrait,
                                Gender:res.data.UserInfo.Gender,
                                Region:res.data.UserInfo.Region,
                                Mobile:res.data.UserInfo.Mobile,
                                Role:res.data.UserInfo.Role,
                                StoreId:res.data.UserInfo.StoreId,
                                CartGoodsCount:res.data.UserInfo.CartGoodsCount
                            }
                        });
                        //钱包信息
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
                        self.StatisticsInfo=res.data.StatisticsInfo;
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


