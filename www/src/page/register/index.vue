<template>
  <div class="loginpage">
    <mi-header title="注册"></mi-header>
    
    <div class="formgrp" v-if="Parent.Id">
      <div class="recommander">
        <img :src="Parent.Portrait" />
        <p>{{Parent.NickName}} 推荐</p>
      </div>
    </div>
    <h1>注册账号</h1>
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
    <div class="formgrp">
      <div class="inpt">
        <input type="password" placeholder="输入密码(最少6位，字母+数字)" v-model="Password">
      </div>
    </div>
  
    <div class="loginbtn">
      <button type="button" class="button success" @click="register">注册</button>
    </div>
    <div class="marg-top-lg">
      <input type="number" v-model="ParentMobile" class="recmdtxt" placeholder="如果有推荐人，在此输入推荐人手机号">
    </div>
    <div class="loginlink">
      <router-link to="/login">已有账户？现在登录</router-link>
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
import * as util from '../../utils/util.js';

export default {
  components: {
    'mi-header': header,
    'mi-toast': toast,
    timerbtn
  },
  data() {
    return {
      ParentId: '',
      ParentMobile:'',
      Mobile: '',
      MsgCode: '',
      Password: '',
      Token: '',
      Parent:{
        Id:'',
        NickName:'',
        Portrait:''
      }
    }
  },
  careted: {

  },
  mounted() {
    if(!checkJs.isNullOrEmpty(sessionStorage.RecommandUserId)){
      this.Parent.Id=sessionStorage.RecommandUserId;
      this.GetParentInfo();
    }
  },
  methods: {
    GetParentInfo(){
      if(!checkJs.isNullOrEmpty(this.Parent.Id)){
      let params = {
        Id: this.Parent.Id
      };
      api.InfoApi(params).then(
          res => {
            if (res.data.Code == 200) {
              this.Parent = res.data.UserInfo;
            }
            else {
              alertFun(res.data.Message);
            }
          }, err => {
            alertFuc('服务访问错误~');
        })
      }
    },
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
            this.Token = res.data.Token;
          }
          else {
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
      if (!checkJs.isPhone(this.Mobile)) {
        alertFuc('请输入正确的手机号码！')
        return;
      }
      if (!checkJs.isNullOrEmpty(this.ParentMobile)) {
        if(!checkJs.isPhone(this.Mobile))
        {
          alertFuc('请输入正确的推荐人手机号码！')
          return;
        }
      }
      if (this.Mobile==this.ParentMobile) {
        alertFuc('推荐人不能是自己')
        return;
      }
      if (checkJs.isNullOrEmpty(this.MsgCode)) {
        alertFuc('请填写验证码！')
        return;
      }
      if (checkJs.isNullOrEmpty(this.Password)) {
        alertFuc('请填写密码！')
        return;
      }
      if (this.Password.length < 6) {
        alertFuc('密码不得低于6位')
        return;
      }

      let params = {
        Region: '+86',
        ParentId: this.Parent.Id,
        Mobile: this.Mobile,
        ParentMobile: this.ParentMobile,
        MsgCode: this.MsgCode,
        Password: this.Password,
        Token: this.Token
      }

      api.RegisterApi(params).then(
        res => {
          if (res.data.Code == 200) {
            alertFuc('注册成功，即将进入登录页面')
            setTimeout(()=>{
              self.$router.replace({name:'login'})
            },3000)
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
  background:#fff;
  .recommander {
    text-align: center;
    font-size:1.3rem;
    img {
      width: 4rem;
      height: 4rem;
      border-radius: 2rem;
    }
  }
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

.recmdtxt{
  border:0;
  background:#eee;
  font-size:1.3rem;
  padding:1.2rem 0;
  width:100%;
  text-indent:1.3rem;
  outline:none;
  border-radius:3px;
}
.protocol {
  margin-top: 2rem;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  color: #999;
  a {
    color: #09c;
    text-decoration: none;
  }
}
.loginlink{
  text-align:center;
  padding:1.5rem 0;
  a{
    color:#999;
    text-decoration:none;
    font-size:1.2rem;
  }
}
</style>

