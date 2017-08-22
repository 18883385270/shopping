<template>
  <div>
    <mi-header title="添加商品"></mi-header>
    <div class="pd1">基本信息</div>
    <div class="tablerow">
      <div class="tlt">商品标题</div>
      <div class="cnt">
        <input type="text" placeholder="输入商品标题" v-model="Name" />
      </div>
    </div>
    <div class="tablerow">
      <div class="tlt">介绍</div>
      <div class="cnt">
         <input type="text" placeholder="商品买点、优势" v-model="Description" /> 
      </div>
    </div>
    <div class="tablerow2">
      <div class="tlt">图片</div>
      <div class="cnt">
      </div>
    </div>
    <div class="tablerow">
      <div class="tlt">售价</div>
      <div class="cnt">
        <input type="number" placeholder="售价" v-model="Price" />
      </div>
    </div>
    <div class="tablerow">
      <div class="tlt">原价</div>
      <div class="cnt">
        <input type="number" placeholder="原价" v-model="OriginalPrice" />
      </div>
    </div>
    <div class="tablerow">
      <div class="tlt">库存</div>
      <div class="cnt">
        <input type="number" placeholder="库存量" v-model="Stock" />
      </div>
    </div>
    <div class="tablerow">
      <div class="tlt">让利比例</div>
      <div class="cnt">
        <select v-model="SurrenderPersent">
          <option value="0.05">5%</option>
          <option value="0.1">10%</option>
          <option value="0.15">15%</option>
          <option value="0.2">20%</option>
          <option value="0.3">30%</option>
        </select>
      </div>
    </div>
    <div class="tablerow">
      <div class="tlt">服务</div>
      <div class="cnt" style="text-align:left;">
        <label>
          <input type="checkbox" v-model="Is7SalesReturn"> 7天无理由
        </label>
  
        <label>
          <input type="checkbox" v-model="IsInvoice"> 提供发票
        </label>
  
        <label>
          <input type="checkbox" v-model="IsPayOnDelivery"> 可货到付款
        </label>
  
      </div>
    </div>
    <div class="pd1">
      <button class="button success" @click="add">添加</button>
    </div>
    <mi-toast ref="toast"></mi-toast>
  </div>
</template>

<script>
import header from '../../../../components/header.vue'
import toast from '../../../../components/toast.vue'
import * as api from '../../../../api/store'
import * as checkJs from '../../../../utils/pubfunc'

export default {
  components: {
    'mi-header': header,
    'mi-toast':toast
  },
  data() {
    return {
      Name: '',
      Description: '',
      Pics:['default.jpg','default2.jpg'],
      Price: 0,
      OriginalPrice: 0,
      Stock: 0,
      SurrenderPersent:0.3,
      Is7SalesReturn: true,
      IsInvoice: true,
      IsPayOnDelivery: true
    }
  },
  methods:{
    add(){
      
      let alertFuc = (msg) => {
        const toast = this.$refs.toast;
        toast.show(msg);
        return false
      }

      if (checkJs.isNullOrEmpty(this.Name)) {
        alertFuc('请输入商品标题！')
        return;
      }
      let self=this;
      let params = {
        Name:this.Name,
        Description:this.Description,
        Price:this.Price,
        Pics:this.Pics,
        OriginalPrice:this.OriginalPrice,
        Stock:this.Stock,
        SurrenderPersent:this.SurrenderPersent,
        Is7SalesReturn:this.Is7SalesReturn,
        IsInvoice:this.IsInvoice,
        IsPayOnDelivery:this.IsPayOnDelivery
      };
      api.AddGoodsApi(params).then(
        res => {
          if (res.data.Code == 200) {
            this.$router.replace({path:'/me/storemgr/goodsmgr'})
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

</style>

