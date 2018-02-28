<template>
  <div>
    <mi-search :search="Filter.Name" @doSearchEvent="handleSearch"></mi-search>
    <div class="pd-topbtn-xlg text-center" v-if="!OfflineStores.length">
            <svg class="icon-xxxlg">
                <use xlink:href="#offlineshop"></use>
            </svg>
            <p class="pd-top-lg text-md text-gray"> 您没有开通线下店铺</p>
        </div>
    <ul v-if="OfflineStores.length">
        <li class="storewarp" v-for="OfflineStore in OfflineStores" :key="OfflineStore.Id">
            <div class="divider"></div>
                <div class="storecont">
                    <div class="pic pd-md">
                        <img :src="OfflineStore.Thumb" alt="">
                    </div>
                    <div class="name">
                        <p>{{OfflineStore.Name}}</p>
                        <span class="distance">
                            <svg>
                                <use xlink:href="#gps"></use>
                            </svg>
                            {{OfflineStore.Distance}}
                        </span>
                        <p class="text-gray text-s marg-top-sm">{{OfflineStore.Region}}{{OfflineStore.Address}}</p>
                        <p class="marg-top-sm">
                            <span class="label label-success" v-for="label in OfflineStore.Labels">{{label}}</span>
                        </p>
                    </div>
                </div>
                <div class="btns">
                    <div class="callphone">
                      <svg>
                        <use xlink:href="#mobile"></use>
                      </svg>
                      <a :href="'tel:'+OfflineStore.Phone"> {{OfflineStore.Phone}}</a>
                    </div>
                    <div class="text-green" @click="toSpendPage(OfflineStore)">线下消费</div>
                </div>
        </li>
    </ul>
    <div class="nextpage" @click="NextPage" v-if="!NotAnyMore">
      <span>加载更多</span>
    </div>
    <div class="nextpage" @click="NextPage" v-if="NotAnyMore">
      <span>没有更多了</span>
    </div>
    <div class="backhome" @click="goPage('home')">
      <svg>
        <use xlink:href="#home"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import search from './search.vue'
import * as api from '../../api/offlinestore'
import * as checkJs from '../../utils/pubfunc'

export default {
  components: {
    'mi-search': search
  },
  data(){
    return{
      OfflineStores:[],
      CurrentPage: 1,
      Filter:{
        Name:''
      },
      NotAnyMore: false
    }
  },
  mounted(){
    if(!checkJs.isNullOrEmpty(sessionStorage.OfflineStoreKey)){
      this.Filter.Name=sessionStorage.OfflineStoreKey
    }
    this.fatchData()
  },
  methods:{
    goPage(page){
      this.$router.push({name:page});
    },
    toSpendPage(store) {
      sessionStorage.OfflineStore = JSON.stringify(store);
      this.$router.push({ name: "spend" });
    },
    NextPage() {
      this.CurrentPage++;
      this.fatchData();
    },
    handleSearch(key){
      sessionStorage.OfflineStoreKey=key;
      this.Filter.Name=key;
      this.OfflineStores.splice(0,this.OfflineStores.length);
      this.fatchData();
    },
    fatchData(){
      let params={
        Name:this.Filter.Name,
        Page: this.CurrentPage
      };
      api.OfflineStoresApi(params).then(
        res => {
          if (res.data.Code == 200) {
            if (res.data.OfflineStores.length) {
              this.OfflineStores = this.OfflineStores.concat(res.data.OfflineStores);
            }
            else {
              this.NotAnyMore = true;
            }
          } else {
            console.log(res.data.Message);
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
.backhome {
  background: #999;
  border-radius: 50%;
  position: absolute;
  width: 3rem;
  height: 3rem;
  right: 2rem;
  bottom: 2rem;
  text-align: center;
  svg {
    width: 2rem;
    height: 2rem;
    fill: #fff;
    margin:0.4rem auto 0 auto;
  }
}
.storewarp {
  list-style: none;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  .storecont {
    display: flex;
    .pic {
      width: 30%;
      img {
        width: 100%;
      }
    }
    .name {
      width: 70%;
      padding: 1rem 1rem 1rem 0;
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
    }
    

    .distance {
      float: right;
      font-size: 1.2rem;
      font-weight: 400;
      color: #999;
      svg {
        width: 1.2rem;
        height: 1.2rem;
        fill: #999;
      }
    }
  }

  .btns {
    display: flex;
    border-top: 1px solid #eee;
    .callphone{
        a{
          color:#666;
          text-decoration:none;
        }
    }
    > div {
      width: 50%;
      text-align: center;
      padding: 1rem 0;
      border-left: 1px solid #eee;
      font-size: 1.3rem;
      line-height:1.5rem;
      svg{
        width:1.3rem;
        height:1.3rem;
        fill:#666;
      }
      &:first-child {
        border-left: 0;
      }
    }
  }
}
.nextpage {
  border-top:4px solid #eee;
  text-align: center;
  clear: both;
  padding: 1rem;
  background: #fff;
}
</style>

