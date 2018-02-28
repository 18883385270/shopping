<template>
  <div>
    <mi-header title="更改名字" rightext="保存" @rightNavBarClicked="save"></mi-header>
    <div class="namewp">
      <input type="text" v-model="NickName">
      <p class="pd-top">好的名字可以让你的朋友更容易记住你</p>
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
      NickName: ''
    }
  },
  mounted() {
    this.NickName = this.$store.state.global.userinfo.NickName;
  },
  methods: {
    save() {
      let self = this;
      let alertFuc = (msg) => {
        const toast = this.$refs.toast;
        toast.show(msg);
        return false
      }

      if (checkJs.isNullOrEmpty(this.NickName)) {
        alertFuc('请填写昵称')
        return;
      }
      let params = {
        NickName: this.NickName
      }
      api.SetNickNameApi(params).then(
        res => {
          if (res.data.Code == 200) {
            //更新本地存储
            self.$store.dispatch('update_userinfo', {
              userinfo: {
                NickName: self.NickName,
                Portrait: self.$store.state.global.userinfo.Portrait,
                Gender: self.$store.state.global.userinfo.Gender,
                Region: self.$store.state.global.userinfo.Region,
                Mobile: self.$store.state.global.userinfo.Mobile
              }
            }).then(() => {
              self.$router.go(-1);
            });
            
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
    border-bottom: 1px solid green;
    font-size: 1.3rem;
    width: 100%;
    background: transparent;
    padding: 0.7rem 0;
    &:focus {
      outline: none;
    }
  }
  
}
</style>


