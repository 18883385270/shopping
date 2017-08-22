<template>
  <div style="background:#fff" :style="{height:bodyHeight}">
    <mi-header title="修改密码" rightext="确定" @rightNavBarClicked="save"></mi-header>
    <div style="height:1rem;"></div>
    <div class="namewp">
      <input type="password" placeholder="请输入原密码" v-model="OldPassword">
    </div>
    <div class="namewp">
      <input type="password" placeholder="请输入新密码" v-model="NewPassword">
    </div>
    <div class="namewp">
      <input type="password" placeholder="确认新密码" v-model="ConfirmPassword">
    </div>
    <mi-toast ref="toast" max-lenght="20"></mi-toast>
  </div>
</template>

<script>
import header from '../../../../components/header.vue'
import toast from '../../../../components/toast.vue'
import * as checkJs from '../../../../utils/pubfunc'
import * as api from '../../../../api/account'
import * as util from '../../../../utils/util.js';

export default {
  components: {
    'mi-header': header,
    'mi-toast': toast
  },
  data() {
    return {
      OldPassword: '',
      NewPassword:'',
      ConfirmPassword:'',
      bodyHeight: '100%'
    }
  },
  mounted() {
      this.bodyHeight = util.screenSize().height + 'px';
  },
  methods: {
    save() {
      let self = this;
      let alertFuc = (msg) => {
        const toast = this.$refs.toast;
        toast.show(msg);
        return false
      }

      if (checkJs.isNullOrEmpty(this.OldPassword)) {
        alertFuc('请输入原密码')
        return;
      }
      if (checkJs.isNullOrEmpty(this.NewPassword || this.NewPassword.length<6)) {
        alertFuc('密码不得低于6位')
        return;
      }
      if(this.NewPassword!=this.ConfirmPassword)
      {
        alertFuc('确认密码不一致')
        return;
      }
      let params = {
        OldPassword: this.OldPassword,
        NewPassword:this.NewPassword
      }
      api.ChangePasswordApi(params).then(
        res => {
          if (res.data.Code == 200) {
            this.$router.go(-1);
          } else {
            alertFuc(res.data.Message)
          }
        },
        err => {
          console.log('网络错误');
        }
      );
    }
  }
}
</script>

<style lang="less" scoped>
.namewp {
  padding: 1rem;
  input {
    border: 0;
    border-bottom: 1px solid #eee;
    font-size: 1.3rem;
    width: 100%;
    background: transparent;
    padding: 0.7rem 0;
    &:focus {
      outline: none;
    }
  }
  p {
    padding: 1rem 0;
  }
}
</style>


