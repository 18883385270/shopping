<template>
  <div class="helppage">
    <mi-header title="支持"></mi-header>
    <div class="getpoint">帮助成功后，您的善心值将增加
      <span>{{helpcount/100}}</span> 分</div>
    <div class="formgroup">
      <label>支持金额：
        <input type="number" v-model="helpcount" placeholder="输入支持金额" />
      </label>
    </div>
  
    <div class="paytype">
      <ul>
        <li>微信支付</li>
        <li>支付宝支付</li>
      </ul>
    </div>
    <div class="formgroup">
      <textarea placeholder="跟小伙伴们说点什么吧（默认：支持）"></textarea>
    </div>
    <div style="width:100%;height:26rem;"></div>
    <div class="bottombar">
      <div class="paycount">需支付：<span class="red">￥{{helpcount}}</span></div>
      <div class="btnwarp">
        <button>下一步</button>
      </div>
    </div>
  </div>
</template>

<script>
import header from '../../../../components/header.vue';

export default {
  components: {
    'mi-header': header
  },
  data(){
    return {
      helpcount:10
    }
  }
}
</script>


<style lang="less" scoped>
.helppage {
  .getpoint {
    padding: 1rem;
    background: #fff;
    font-size: 1.3rem;
    border-bottom: 1px solid #eee;
    span {
      color: #962126;
    }
  }
  .formgroup {
    padding: 1rem;
    background: #fff;
    border-bottom: 1px solid #eee;
    label {
      font-size: 1.4rem;
    }
    input {
      border: 0;
      padding: 1rem;
      font-size: 1.3rem;
      &:focus {
        outline: none;
      }
    }
    textarea {
      font-size: 1.3rem;
      border: 0;
      width: 100%;
      height: 10rem;
      color: #666;
      &:focus {
        outline: none;
      }
    }
  }
  .paytype {
    background: #fff;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;
    li {
      font-size: 1.3rem;
      list-style: none;
    }
  }
  .bottombar {
    position: fixed;
    left: 0;
    bottom: 0;
    height:4rem;
    background: #fff;
    border-top: 1px solid #eee;
    display: flex;
    width: 100%;


    .paycount {
      font-size: 1.3rem;
      width: 50%;
      padding: 1rem 0 1rem 0;
      text-indent: 1rem;
      .red{
        color: #962126;
      }
    }
    .btnwarp {
      width:50%;
      button {
        float: right;
        border: 0;
        background: #962126;
        font-size: 1.3rem;
        text-align: center;
        height:4rem;padding:0 2rem;
        color: #fff;
      }
    }
  }
}
</style>

