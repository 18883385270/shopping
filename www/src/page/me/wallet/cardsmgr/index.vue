<template>
  <div class="cardspage">
    <mi-header title="银行卡管理"></mi-header>
    <div class="emptybox" v-if="!BankCards.length">
            <svg>
                <use xlink:href="#empty"></use>
            </svg>
            <p> 未添加任何银行卡</p>
        </div>
    <div class="cardsls">
      <div class="cardwp" v-for="(BankCard,index) in BankCards">
        <p>
         <svg @click="del(index)"><use xlink:href="#delline"></use></svg>{{BankCard.BankName}}</p>
        <p>{{BankCard.OwnerName}}</p>
        <p class="cardnum">{{BankCard.Number}}</p>
      </div>
      <div class="addcard" @click="goPage('/wallet/cardsmgr/add')">
        + 添加银行卡
      </div>
    </div>
  </div>
</template>

<script>
import header from '../../../../components/header.vue';
import * as api from '../../../../api/wallet'

export default {
  components: {
    'mi-header': header
  },
  data(){
    return {
      BankCards:[]
    }
  },
  mounted(){
    //请求用户收件地址数据
    let params={};
    api.BankCardsApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        this.BankCards=res.data.BankCards;
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
    del(index){
      let params={
        bankCardId:this.BankCards[index].Id
      }
      api.DeleteBankCardApi(params).then(
        res=>{
          if(res.data.Code==200){
            //删除本地数据
            this.BankCards.splice(index,1);
          }else{
            console.log("返回错误码："+res.data.Code);
          }
        },
        err=>{
          console.log('网络错误')
        }
      );
    },
    goPage(page){
      this.$router.push({path:page});
    }
  }
}
</script>

<style lang="less" scoped>
.cardspage {
  width: 100%;
  .cardsls {
    padding: 1rem;
    .cardwp {
      padding: 1rem;
      background: #c33;
      margin-bottom: 1rem;
      color: #fff;
      font-size: 1.3rem;
      border-radius:3px;
      svg{
        float: right;
        display: block;
        width: 1.3rem;
        height: 1.3rem;
        fill:#fff;
      }
      .cardnum {
        padding: 1rem 0 0 0;
        font-size: 1.5rem;
      }
    }
    .addcard {
      border: 1px dashed #eee;background:#fff;
      text-align: center;
      padding: 1.3rem;
      font-size: 1.3rem;
    }
  }
}
</style>

