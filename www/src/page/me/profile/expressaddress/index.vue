<template>
  <div>
    <mi-header title="我的地址" rightext="添加" @rightNavBarClicked="addAddress"></mi-header>
    <div class="addressls" v-if="expressAddresses.length">
      <div class="addwarp" v-for="(expressAddress,index) in expressAddresses" :key="expressAddress.Id">
        <div class="cnt">
          <p>{{expressAddress.Region}} {{expressAddress.Address}}</p>
          <p>{{expressAddress.Name}} {{expressAddress.Mobile|mobilehide}}</p>
        </div>
        <div class="ops" @click="del(index)">
          <svg>
            <use xlink:href="#delline"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="pd-topbtn-xlg text-center" v-if="!expressAddresses.length">
            <svg class="icon-xxxlg">
                <use xlink:href="#address"></use>
            </svg>
            <p class="pd-top-lg text-md text-gray"> 您未添加收货地址</p>
        </div>
   
  </div>
</template>

<script>
import header from '../../../../components/header.vue';
import * as api from '../../../../api/account';

export default {
  components: {
    'mi-header': header
  },
  data(){
    return {
      expressAddresses:[]
    }
  },
  mounted(){
    //请求用户收件地址数据
    let params={};
    api.GetUserExpressAddressesApi(params).then(
        res => {
            if (res.data.Code == 200) {
                this.expressAddresses=res.data.ExpressAddresses;
                console.log(this.expressAddresses);
            } else {
                console.log("返回错误码："+res.data.Code);
            }
        },
        err => {
            console.log('网络错误');
        }
    )
  },
  methods:{
    addAddress(){
      this.$router.push({name:'addexpressaddress'});
    },
    del(index){
      let params={
        Id:this.expressAddresses[index].Id
      }
      api.DeleteExpressAddressApi(params).then(
        res=>{
          if(res.data.Code==200){
            //删除本地数据
            this.expressAddresses.splice(index,1);
          }else{
            console.log("返回错误码："+res.data.Code);
          }
        },
        err=>{
          console.log('网络错误')
        }
      );
    }
  }
}
</script>

<style lang="less" scoped>

.addressls {
  padding: 1rem;
  .addwarp {
    display: flex;
    font-size: 1.2rem;
    border-bottom: 1px solid #eee;
    .cnt {
      width: 80%;
      padding: 1rem 0;
    }
    .ops {
      width: 20%;
      padding: 0.5rem;
      text-align: right;
      svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: #666;margin-top:0.5rem;
      }
    }
  }
}


</style>

