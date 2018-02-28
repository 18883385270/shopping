<template>
  <div class="cardspage">
    <mi-header title="银行卡管理"></mi-header>
    <div class="pd-topbtn-xlg text-center" v-if="!BankCards.length">
            <svg class="icon-xxxlg">
                <use xlink:href="#address"></use>
            </svg>
            <p class="pd-top-lg text-md text-gray"> 未添加银行卡</p>
        </div>
    <div class="">
      <div class="pd marg img-round bg-danger text-white" v-for="(BankCard,index) in BankCards" :key="BankCard.Id">
        <p>
         <svg class="pull-right icon-sm icon-white" @click="del(index)"><use xlink:href="#delline"></use></svg>
         {{BankCard.BankName}}</p>
        <p class="text-s pd-topbtn-sm">{{BankCard.OwnerName}}</p>
        <p class="text-xxlg">{{BankCard.Number |formatbankcardnumber}}</p>
      </div>
      <div class="bd marg pd text-center text-gray" @click="goPage('addbankcard')">
        + 添加银行卡
      </div>
    </div>
  </div>
</template>

<script>
import header from "../../../../components/header.vue";
import * as api from "../../../../api/wallet";

export default {
  components: {
    "mi-header": header
  },
  data() {
    return {
      BankCards: []
    };
  },
  mounted() {
    //请求用户收件地址数据
    let params = {};
    api.BankCardsApi(params).then(
      res => {
        if (res.data.Code == 200) {
          this.BankCards = res.data.BankCards;
        } else {
          console.log("返回错误码：" + res.data.Code);
        }
      },
      err => {
        console.log("网络错误");
      }
    );
  },
  methods: {
    del(index) {
      let params = {
        Id: this.BankCards[index].Id
      };
      api.DeleteBankCardApi(params).then(
        res => {
          if (res.data.Code == 200) {
            //删除本地数据
            this.BankCards.splice(index, 1);
          } else {
            console.log("返回错误码：" + res.data.Code);
          }
        },
        err => {
          console.log("网络错误");
        }
      );
    },
    goPage(page) {
      this.$router.push({ name: page });
    }
  }
};
</script>

<style lang="less" scoped>

</style>

