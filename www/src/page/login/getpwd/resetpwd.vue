<template>
  <div class="loginpage" >
    <mi-header title="找回密码"></mi-header>
    {{Mobile}}
    <div class="formgrp">
      <div class="inpt">
        <input type="password" placeholder="新密码" v-model="Password">
      </div>
    </div>
    <div class="formgrp">
      <div class="inpt">
        <input type="password" placeholder="重复新密码" v-model="ConfirmPassword">
      </div>
    </div>
    <div class="loginbtn">
      <button type="button" class="button success" @click="resetPwd">确定</button>
    </div>
    
    <mi-toast ref='toast'></mi-toast>
  </div>
</template>

<script>
import header from '../../../components/header.vue'
import toast from '../../../components/toast.vue'

import * as api from '../../../api/account'
import * as checkJs from '../../../utils/pubfunc'
import * as util from '../../../utils/util.js'

export default {
  components: {
    'mi-header': header,
    'mi-toast': toast
  },
  data() {
    return {
        Mobile:'',
        Password: '',
        ConfirmPassword: '',
    }
  },
  mounted(){
    this.Mobile=this.$route.params.Mobile
  },
  methods: {
    resetPwd() {
      let alertFuc = (msg) => {
        const toast = this.$refs.toast;
        toast.show(msg);
        return false
      }
      let self = this;
      if (checkJs.isNullOrEmpty(this.Password || this.Password.length<6)) {
        alertFuc('密码不得低于6位')
        return;
      }
      if(this.Password!=this.ConfirmPassword)
      {
        alertFuc('确认密码不一致')
        return;
      }

      let params = {
        Password: this.Password,
        Mobile: this.Mobile
      }
      api.ResetPasswordApi(params).then(
        res => {
          if (res.data.Code == 200) {
              alertFuc('密码已经重设，即将进入登录页面')
              setTimeout(()=>{
                self.$router.replace({name:'login'})
              },3000)
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


