<template>
  <div>
    <mi-header title="商品管理" ></mi-header>
    <div class="emptybox" v-if="!Goodses.length">
      <svg>
        <use xlink:href="#emptyline"></use>
      </svg>
      <p> 您还未添加任何商品</p>
    </div>
    <div class="goodslist">
        <div class="goodswp" v-for="Goods in Goodses">
          <div class="pic">
            <img src="https://i8.mifile.cn/v1/a1/9f7e141c-87a7-82c6-7170-599504ce2630.webp?width=360&height=360" alt="">
          </div>
          <div class="info">
              <p>{{Goods.Name|truncate(20)}}</p>
              <p class="text-gray">{{Goods.Description|truncate(40)}}</p>
              <p>{{Goods.Price|currency('￥',2)}}</p>
          </div>
          <div class="ops">
            <p>
              <svg>
                <use xlink:href="#home"></use>
              </svg>
            </p>
            <p>
              <svg>
                <use xlink:href="#delline"></use>
              </svg>
            </p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import header from '../../../components/header.vue'
import * as api from '../../../api/goods'

export default {
  components:{
    'mi-header':header
  },
  data(){
    return{
      Goodses:[]
    }
  },
  mounted(){
    //加载商品
    			
    let params = {};
    api.MgrAllGoodsesApi(params).then(
      res => {
        if (res.data.Code == 200) {
          this.Goodses=res.data.Goodses;
        } else {
          console.log(res.data.Message);
        }
      },
      err => {
        console.log('网络错误');
      }
    )
  },
  methods:{
    rightNavBarHandle(){
      this.$router.push({path:'/me/storemgr/goodsmgr/add'});
    }
  }
}
</script>


<style lang="less" scoped>
  .goodslist{
      margin-top:1rem;
      background:#fff;
      .goodswp{
        background:#fff;
        display:flex;
        border-bottom:1px dashed #eee;
        padding:1rem;
        .pic{
          width:25%;
          img{
            width:100%;
          }
        }
        .info{
          width:70%;
          padding: 0 1rem;
        }
        .ops{
          width:10%;
          text-align:center;
          svg{
            width:1.5rem;
            height:1.5rem;
            fill:#333;
            margin-top:1rem;
          }
        }
      }
  }
</style>

