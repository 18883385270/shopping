<template>
  <div class="cardspage">
    <mi-header title="银行卡管理"></mi-header>
    <div class="cardsls">
      <div class="cardwp">
        <p>
         <svg><use xlink:href="#delline"></use></svg>工商银行</p>
        <p class="cardnum">**** **** **** **** 7974</p>
      </div>
      <div class="addcard">
        + 添加银行卡
      </div>
    </div>
  </div>
</template>

<script>
import header from '../../../../components/header.vue';

export default {
  components: {
    'mi-header': header
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
        padding: 1rem 0;
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

