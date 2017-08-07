<template>
  <div class="withdrawpage">
    <mi-header title="申请提现"></mi-header>
    <div class="tocard">
      <div class="cardinfo">
        <p class="tlt">工商银行（尾号7975）</p>
        <p>提现手续费率5%，工作日内24小时内到账</p>
      </div>
      <div class="changecard">
        <svg>
          <use xlink:href="#rightarrowsline"></use>
        </svg>
      </div>
    </div>
    <div class="withdrawamount">
      <p>提现金额￥</p>
      <input type="number" placeholder="输入提现金额" />
      <p class="desc">当前账户余额234.2元，
        <span>全部提现</span>
      </p>
      <div class="btnwarp">
        <button class="btn">提现</button>
      </div>
    </div>
  
  </div>
</template>

<script>
import header from '../../../../../components/header.vue';

export default {
  components: {
    'mi-header': header
  },
  methods: {

  }
}
</script>


<style lang="less" scoped>
.withdrawpage {
  width: 100%;
  .tocard {
    display: flex;
    padding: 1rem;
    background: #fff;
    margin-top: 1rem;
    margin-bottom: 1rem;
    .cardinfo {
      width: 80%;
      .tlt {
        font-size: 1.3rem;
        font-weight: 400;
        margin-bottom: 0.5rem;
      }
    }
    .changecard {
      width: 20%;
      text-align: right;
      svg {
        width: 1.5rem;
        margin-top: 0.9rem;
        height: 1.5rem;
        fill: #666;
      }
    }
  }
  .withdrawamount {
    margin: 1rem 0;
    background: #fff;
    padding: 1rem;
    font-size: 1.3rem;
    input {
      padding: 2rem 0;
      width: 100%;
      font-size: 1.5rem;
      border: 0;
    }
    .desc {
      color: #999;font-size:1rem;
      span {
        color: #06c;
      }
    }
  }
  .btnwarp {
    padding: 2rem 0 0 0;
    button {
      padding: 1.3rem 0;
      text-align: center;
      font-size: 1.3rem;
      color: #fff;
      width: 100%;
      border-radius: 3px;
      background: #09c;
      display: block;
      border: 0;
    }
  }
}
</style>

