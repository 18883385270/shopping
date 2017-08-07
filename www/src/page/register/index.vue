<template>
  <div class="loginpage" :style="{height:bodyHeight}">
    <mi-header title="注册"></mi-header>
    <h1>注册账号</h1>
    <div class="formgrp">
      <div class="inpt">
        <input type="number" placeholder="请输入手机号" v-model="mobile">
        <timerbtn style="float:right;" :mobile="mobile" :second="60" @sendmsg="sendmsgHandler"></timerbtn>
      </div>
    </div>
    <div class="formgrp">
      <div class="inpt">
        <input type="number" placeholder="请输入短信验证码" v-model="code">
      </div>
    </div>
    <div class="formgrp">
      <div class="inpt">
        <input type="password" placeholder="输入密码(最少6位，字母+数字)" v-model="password">
      </div>
    </div>
  
    <div class="loginbtn">
      <button type="button" class="button success" @click="register">提交</button>
    </div>
    <div class="protocol">注册/登录即代表同意
      <router-link to="/login/protocol">《五福天下商城用户使用协议》</router-link>
    </div>
    <mi-toast ref='toast'></mi-toast>
  </div>
</template>

<script>
import header from '../../components/header.vue';
import toast from '../../components/toast.vue';
import timerbtn from '../../components/timerbtn.vue';

import * as api from '../../api/account';
import * as checkJs from '../../utils/pubfunc';
import util from '../../utils/util.js';

export default {
  components: {
    'mi-header': header,
    'mi-toast': toast,
    timerbtn
  },
  data() {
    return {
      mobile: '',
      code: '',
      password: '',
      token:'',
      bodyHeight: '100%'
    }
  },
  watch: {

  },
  mounted() {
    this.bodyHeight = util.screenSize().height + 'px';
  },
  methods: {
    sendmsgHandler() {
      console.log(this.mobile);

      let alertFuc = (msg) => {
        const toast = this.$refs.toast;
        toast.show(msg);
        return false
      }


      let params = {
        Mobile: this.mobile
      };
      api.SendMsgCodeApi(params).then(
        res => {
          if (res.data.Code == 200){
            console.log(res.data);
            this.token=res.data.Token;
            console.log(this.token);
          }
          else{
            alertFun(res.data.Message);
          }
        }, err => {
          alertFuc('服务访问错误~');
        })

    },
    register() {
      let alertFuc = (msg) => {
        const toast = this.$refs.toast;
        toast.show(msg);
        return false
      }


      let self = this;
      if (!checkJs.isPhone(this.mobile)) {
        alertFuc('请输入正确的手机号码！')
        return;
      }
      if (checkJs.isNullOrEmpty(this.code)) {
        alertFuc('请填写验证码！')
        return;
      }
      if (checkJs.isNullOrEmpty(this.password)) {
        alertFuc('请填写密码！')
        return;
      }
      if (this.password.length<6) {
        alertFuc('密码不得低于6位')
        return;
      }

      let params = {
        Region: '+86',
        Mobile: this.mobile,
        MsgCode:this.code,
        Password:this.password,
        Token:this.token
      }

      api.RegisterApi(params).then(
        res => {
          if (res.data.Code == 200) {
              self.$router.push({ path: '/login' });
          } else {
            alertFuc(res.data.Message)
          }
        },
        err => {
          alertFuc('服务访问错误~');
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

h1 {
  font-size: 2rem;
  font-weight: 300;
  margin-top: 3rem;
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


.protocol {
    margin-top:2rem;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: #999;
    a {
        color: #09c;
        text-decoration: none;
    }
}
</style>

