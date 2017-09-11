<template>
  <div class="loginpage" >
    <mi-header title="找回密码"></mi-header>
    
    <div class="formgrp">
      <div class="inpt">
        <input type="number" placeholder="请输入手机号" v-model="Mobile">
        <timerbtn style="float:right;" :mobile="Mobile" :second="60" @sendmsg="sendmsgHandler"></timerbtn>
      </div>
    </div>
    <div class="formgrp">
      <div class="inpt">
        <input type="number" placeholder="请输入短信验证码" v-model="MsgCode">
      </div>
    </div>
    <div class="loginbtn">
      <button type="button" class="button success" @click="verifyMsgCode">下一步</button>
    </div>
    
    <mi-toast ref='toast'></mi-toast>
  </div>
</template>

<script>
import header from '../../../components/header.vue'
import toast from '../../../components/toast.vue'
import timerbtn from '../../../components/timerbtn.vue'

import * as api from '../../../api/account'
import * as checkJs from '../../../utils/pubfunc'
import * as util from '../../../utils/util.js'

export default {
  components: {
    'mi-header': header,
    'mi-toast': toast,
    timerbtn
  },
  data() {
    return {
      Mobile: '',
      MsgCode: '',
      Token: ''
    }
  },
  methods: {
    sendmsgHandler() {
      let alertFuc = (msg) => {
        const toast = this.$refs.toast;
        toast.show(msg);
        return false
      }
      let params = {
        Mobile: this.Mobile
      };
      api.SendMsgCodeApi(params).then(
        res => {
          if (res.data.Code == 200) {
            console.log(res.data);
            this.Token = res.data.Token;
            console.log(this.token);
          }
          else {
            alertFun(res.data.Message);
          }
        }, err => {
          alertFuc(err.response.data.error.details);
        })

    },
    verifyMsgCode() {
      let alertFuc = (msg) => {
        const toast = this.$refs.toast;
        toast.show(msg);
        return false
      }
      let self = this;
      if (!checkJs.isPhone(this.Mobile)) {
        alertFuc('请输入正确的手机号码！')
        return;
      }
      if (checkJs.isNullOrEmpty(this.MsgCode)) {
        alertFuc('请填写验证码！')
        return;
      }

      let params = {
        MsgCode: this.MsgCode,
        Token: this.Token
      }

      api.VerifyMsgCodeApi(params).then(
        res => {
          if (res.data.Code == 200) {
            self.$router.replace({name:'resetpwd',params:{Mobile:this.Mobile}})
          } else {
            alertFuc(res.data.Message)
          }
        },
        err => {
          alertFuc(err.response.data.error.details);
        }
      )
    }
  }
}
</script>

<style lang="less" scoped>
.loginpage {
  padding: 0 2rem;
  background: #fff;
}


.formgrp {
  margin-top: 2rem;

  .inpt {
    border-bottom: 1px solid #eee;
    padding: 1rem 0;
    input {
      width: 60%;
      background: transparent;
      font-size: 1.3rem;
      border: none;
      &:focus {
        outline: none;
      }
    }
  }
}

.loginbtn {
  margin-top: 3rem;
}
</style>


