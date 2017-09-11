<template>
  <div>
    <mi-header title="邀请好友"></mi-header>
    <div class="tabindicator">
      <div @click="toPage('/me/invote')">邀请</div>
      <div @click="toPage('/me/myinvote')" class="active">我的邀请</div>
    </div>
    <div class="emptybox" v-if="!MyInvotes.length">
        <svg>
            <use xlink:href="#emptyline"></use>
        </svg>
        <p> 亲，您还未邀请好友，赶快行动吧~</p>
    </div>
    <div class="myinvotes">
      <ul>
        <li v-for="MyInvote in MyInvotes">
          <img :src="MyInvote.Portrait" alt="头像">
          <p class="role">{{MyInvote.Role}}</p>
          <p class="username">{{MyInvote.NickName}}</p>
          <p>邀请日期：{{MyInvote.CreatedOn}}</p>
          <ul class="childinvotes">
            <li v-for="Invote in MyInvote.Invotes">
              <img :src="Invote.Portrait" alt="头像">
              <p class="role">{{Invote.Role}}</p>
              <p class="username">{{Invote.NickName}}</p>
              <p>邀请日期：{{Invote.CreatedOn}}</p>
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
    toPage(page) {
      this.$router.replace({ path: page })
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
  padding: 3rem 1rem;
  li {
    list-style:none;
    padding:1rem 0 1rem 0;
    border-bottom:1px dashed #eee;
    .username {
      padding: 0.3rem 0;
      font-size: 1.3rem;
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
      li{
        padding-left:3rem;
        padding-top:1rem;
        border-bottom:0;
      }
    }
  }
}
</style>


