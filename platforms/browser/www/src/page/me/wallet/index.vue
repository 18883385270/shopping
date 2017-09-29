<template>
    <div>
        <mi-header title="我的钱包"></mi-header>
        <div class="wallettop">
            <div @click="goPage('/wallet/benevolence')">
                <svg><use xlink:href="#integral"></use></svg>善心
                <p>{{this.$store.state.global.walletinfo.Benevolence |currency('',4)}}</p>
            </div>
            <div @click="goPage('/wallet/cash')">
                <svg><use xlink:href="#cash"></use></svg>余额
                <p>{{this.$store.state.global.walletinfo.Cash|currency('￥',2)}}</p>
            </div>
        </div>
        <div class="divider"></div>
        <div class="tablerow" @click="goPage('/wallet/setpaypassword')">
            <div class="tlt">设置支付密码</div>
            <div class="cnt">
                <span class="warning" v-if="!this.$store.state.global.walletinfo.AccessCode">您还未设置支付密码</span>
                <svg>
                    <use xlink:href="#rightarrowsline"></use>
                </svg>
            </div>
        </div>
        <div class="divider"></div>
        <div class="tablerow" @click="goPage('/wallet/cardsmgr')">
            <div class="tlt">银行卡管理</div>
            <div class="cnt">
                <svg>
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

export default {
    components: {
        'mi-header': header
    },
    mounted(){
        //请求数据
        let self=this;
        let params={};
        api.InfoApi(params).then(
                    res => {
                        if (res.data.Code == 200) {
                            console.log('获取钱包信息成功');
                            //更新本地钱包信息
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
    },
    methods:{
        goPage(page){
            this.$router.push({path:page});
        }

    }
}
</script>

<style lang="less" scoped>
.wallettop {
    background:#555;
    display: flex;padding:1rem 0;
    >div {
        width: 50%;
        text-align: center;
        margin: 1rem;color:#fff;font-size:1.3rem;
        svg {
            display: block;
            margin: 0.3rem auto 0.3rem auto;
            width: 3.5rem;
            height: 3.5rem;
            fill: #fff;
        }
        p{
            padding-top:0.2rem;
        }
    }
}

</style>


