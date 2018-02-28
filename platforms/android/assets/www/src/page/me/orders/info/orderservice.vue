<template>
  <div class="pagewp" :style="{height:pageHeight}">
      <mi-header title="申请退款"></mi-header>
      <div class="servicetype" @click="goPage('applyrefund')">
         <svg>
           <use xlink:href="#refundcashline"></use>
         </svg>
         <h3>我要退款（无需退货）</h3>
         <p>仅退款，无需退货，商家未发货情况下适用</p>
      </div>
      <div class="servicetype huangse" @click="goPage('applyreturnandrefund')">
         <svg>
           <use xlink:href="#refundline"></use>
         </svg>
         <h3>我要退货退款</h3>
         <p>已收到货，需要退还已收到的货物</p>
      </div>
  </div>
</template>

<script>
import header from '../../../../components/header.vue'
import * as util from '../../../../utils/util'

export default {
  components:{
      'mi-header':header
  },
  data(){
      return{
          pageHeight:"100%"
      }
  },
  mounted(){
    this.pageHeight=util.screenSize().height+'px'
  },
  methods:{
      goPage(page) {
          this.$router.push({ name: page });
      },
  }
}
</script>

<style lang="less" scoped>
.pagewp{
    background:#eee;
}
.servicetype{
  text-align:center;
  margin:1rem;
  padding:2rem;
  background:#fff;
  border-radius:3px;
  svg{
    width:4rem;
    height:4rem;
    background:#09c;
    padding:1rem;
    border-radius:4px;
    fill:#fff;
  }
  h3{
    font-size:1.5rem;
    font-weight:200;
    margin:0.8rem 0;
  }
  p{
    color:#999;
  }
}
.huangse{
  svg{
    background:#f90;
  }
}

</style>


