<template>
  <div>
    <mi-header title="我的团队"></mi-header>
    <div class="pd-topbtn-xlg text-center" v-if="!MyInvotes.length">
            <svg class="icon-xxxlg">
                <use xlink:href="#invite"></use>
            </svg>
            <p class="pd-top-lg text-md text-gray"> 亲，您还未邀请好友，赶快行动吧~</p>
        </div>
    
    <div class="myinvotes">
      <div class="pd bg-xlightgray">注意这里仅仅显示两层的邀请信息，不代表您团队的全部信息</div>
      <ul>
        <li v-for="MyInvote in MyInvotes" :key="MyInvote.Id">
          <div @click="goUserInfoPage(MyInvote)">
            <img :src="MyInvote.Portrait" alt="头像">
            <p class="role">{{MyInvote.Role}}</p>
            <p class="username">{{MyInvote.NickName}} <span>{{MyInvote.Mobile}}</span></p>
            <p class="invotetime"> 邀请于：{{MyInvote.CreatedOn}}</p>
          </div>
          <ul class="childinvotes">
            <li v-for="Invote in MyInvote.Invotes" :key="Invote.Id">
              <div @click="goUserInfoPage(Invote)">
                <img :src="Invote.Portrait" alt="头像">
                <p class="role">{{Invote.Role}}</p>
                <p class="username">{{Invote.NickName}} <span>{{Invote.Mobile}} </span></p>
                <p class="invotetime">邀请于：{{Invote.CreatedOn}}</p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import header from '../../../components/header.vue'
import * as api from '../../../api/account'
import * as util from '../../../utils/util'

export default {
  components: {
    'mi-header': header
  },
  data() {
    return {
      MyInvotes: []
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    replacePage(page) {
      this.$router.replace({ name: page })
    },
    goUserInfoPage(user){
      sessionStorage.UserInfo=JSON.stringify(user)
      this.$router.push({name:'userinfo'});
    },
    fetchData() {
      let params = {};
      api.MyInvotesApi(params).then(
        res => {
          if (res.data.Code == 200) {
            this.MyInvotes = res.data.MyInvotes
          } else {
            console.log(res.data.Message);
          }
        },
        err => {
          console.log('网络错误');
        }
      )
    }
  }
}
</script>

<style lang="less" scoped>
.bg-white {
  background: #fff;
}

.tabindicator {
  margin: 0 20%;
  display: flex;
  div {
    padding: 1rem 0;
    text-align: center;
    border-bottom: 1px solid #ddd;
    width: 50%;
    font-size: 1.3rem;
    &.active {
      color: #096;
      border-bottom-color: #096;
    }
  }
}

.myinvotes {
  padding: 1rem;
  li {
    list-style:none;
    padding:1rem 0 1rem 0;
    border-bottom:1px dashed #eee;
    .username {
      padding-bottom: 0.3rem;
      font-size: 1.3rem;
      span{
        font-size:1rem;
      }
    }
    .invotetime{
      color:#999;
    }
    .role{
      float:right;
      background:#eee;
      padding:0.2rem 0.6rem;
      border-radius:1rem;
    }
    img {
      border-radius: 0.5rem;
      width: 4rem;
      height: 4rem;
      float: left;
      margin-right: 1rem;
    }
    .childinvotes{
      padding-top:0.5rem;
      li{
        padding-left:3rem;
        padding-top:1rem;
        border-bottom:0;
      }
    }
  }
}
</style>


