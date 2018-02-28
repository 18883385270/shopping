<template>
  <div class="shopcashpage">
        <mi-header title="购物券" rightext="账单" @rightNavBarClicked="rightNavBarClickedHandle"></mi-header>
        <div class="bg-primary text-white pd-lg">
            <p class="text-md">可用购物券</p>
            <h1 class="pd-topbtn text-light">{{this.$store.state.global.walletinfo.ShopCash|currency('',2)}}</h1>
            <p>购物券只允许消费购物，无法提现</p>
        </div>
        <div class="thirdcurrencywp" v-if="ThirdCurrencys.length">
            <div class="pd bg-xlightgray text-sm">外币导入</div>
            <div class="flexwarp pd bd-btn" v-for="ThirdCurrency in ThirdCurrencys" @click="goThirdCurrencyInfo(ThirdCurrency)" :key="ThirdCurrency.Id">
                <div class="wd-10p">
                    <img class="wd-100p img-circle" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2567729257,3790379398&fm=58" alt="比特币">
                </div>
                <div class="wd-80p marg-lf">
                    <p class="pd-btn text-md">{{ThirdCurrency.Name}}</p>
                    <p class="text-gray">{{ThirdCurrency.CompanyName}}</p>
                </div>
                <div class="wd-10p text-right">
                    <svg class="icon icon-sm">
                        <use xlink:href="#rightarrowsline"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import header from '../../../../components/header.vue';
import * as api from '../../../../api/thirdcurrency'

export default {
    components: {
        'mi-header': header
    },
    data(){
        return {
            ThirdCurrencys:[]
        }
    },
    mounted(){
        this.fatchData();
    },
    methods: {
        rightNavBarClickedHandle() {
            sessionStorage.MyCashTransferIndex=0
            this.$router.push({name:'shopcashtransfers'});
        },
        goThirdCurrencyInfo(thirdCurrency){
            sessionStorage.ThirdCurrency = JSON.stringify(thirdCurrency)
            this.$router.push({ name: 'thirdcurrencyinfo' })
        },
        fatchData(){
            let params = {};
            api.ThirdCurrencysApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        this.ThirdCurrencys = res.data.ThirdCurrencys;
                    } else {
                        console.log("返回错误码：" + res.data.Code);
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
</style>


