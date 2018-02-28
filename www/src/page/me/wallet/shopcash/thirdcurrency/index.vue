<template>
  <div>
        <mi-header :title="ThirdCurrency.Name" rightext="导入记录" @rightNavBarClicked="rightNavBarClickedHandle"></mi-header>
        <div class="currencyinfo">
            <h1>{{ThirdCurrency.Name}}</h1>
            来源公司：{{ThirdCurrency.CompanyName}}
        </div>
        <div class="transconversion">
            <div class="traninfo">
                <div class="currency">
                    <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2567729257,3790379398&fm=58" alt="">
                    <p class="text-lg">1 {{ThirdCurrency.Name}}</p>
                </div>
                <div class="trans">
                    <p>=</p>
                </div>
                <div class="shopcash">
                    <svg>
                        <use xlink:href="#cashticket"></use>
                    </svg>
                    <p class="text-lg">{{ThirdCurrency.Conversion}} 购物券</p>
                </div>
            </div>
            <div class="desc">
                兑换方式：{{ThirdCurrency.Name}}对购物券的兑换比例为1比{{ThirdCurrency.Conversion}}，比如1{{ThirdCurrency.Name}}可兑换{{ThirdCurrency.Conversion}}购物券，
                兑换为商城购物券后，购物券除不能提现外，可在商城随意消费购物。
            </div>            

        </div>
        <div class="pd">
            <button class="button success" @click="goPage('thirdcurrencyimport')">导入{{ThirdCurrency.Name}}</button>
        </div>
  </div>
</template>

<script>
import header from '../../../../../components/header.vue';
import * as api from '../../../../../api/thirdcurrency'

export default {
    components: {
        'mi-header': header
    },
    data(){
        return {
            ThirdCurrency:{}
        }
    },
    mounted(){
        this.ThirdCurrency = JSON.parse(sessionStorage.ThirdCurrency)
    },
    methods: {
        rightNavBarClickedHandle() {
            this.$router.push({name:'thirdcurrencyimportlogs'});
        },
        goPage(page) {
            this.$router.push({ name: page });
        }
    }
}
</script>

<style lang="less" scoped>
.transconversion{
    padding:1rem;
}
.desc{
    line-height:1.5rem;
    color:#666;
}
.traninfo{
    display: flex;
    text-align:center;
    padding:2rem 1rem;
    .currency{
        width:40%;
        img{
            width:3rem;
            height:3rem;
        }
    }
    .trans{
        width:20%;
        font-size:3rem;
    }
    .shopcash{
        width:40%;
        svg{
            width:3rem;
            height:3rem;
            fill:#666;
        }
    }
}
.currencyinfo{
    background:#ddd;
    padding:2rem 1rem;
    text-align:center;
    h1{
        padding:1rem 0;
    }
}
</style>


