/*
申请开店
用户必须是传递使者才能开店
 */
<template>
  <div>
    <mi-header title="申请开店"></mi-header>
    <div class="pd1">店铺基本信息</div>
    <div class="tablerow">
      <div class="tlt">店铺名称</div>
      <div class="cnt">
        <input type="text" placeholder="请输入店铺名称" v-model="name" />
      </div>
    </div>
    <div class="tablerow">
      <div class="tlt">地区</div>
      <div class="cnt" @click="selectRegion">
        {{region}}
      </div>
    </div>
    <div class="tablerow">
      <div class="tlt">详细地址</div>
      <div class="cnt">
        <input type="text" placeholder="详细地址精确到门牌号" v-model="address" />
      </div>
    </div>
    
    <div class="pd1">主体信息（有营业执照请填写执照信息，否则填写店主身份证信息）</div>
    <div class="tablerow">
      <div class="tlt">主体名称</div>
      <div class="cnt">
        <input type="text" placeholder="主体名称 / 身份证姓名" v-model="subjectname" />
      </div>
    </div>
    <div class="tablerow">
      <div class="tlt">主体号码</div>
      <div class="cnt">
        <input type="text" placeholder="统一社会编码 / 身份证号" v-model="subjectnumber" />
      </div>
    </div>
    <div class="tablerow">
      <div class="tlt">证件照片</div>
      <div class="cnt">
        
      </div>
    </div>
    <div class="btnwarp">
      <p>
        <label>
          <input type="checkbox" v-model="isaccept"> 我已阅读并同意</label>
        <span @click="goPage('/bindex/storeowner/open/protocol')">《店铺入驻协议》</span>
      </p>
      <button class="button success" v-bind="{disabled:!isaccept}" @click="applystore">提交申请</button>
    </div>
    <mi-regionpicker ref="regionpicker" @regionPickerEvent="regionPickerHandle"></mi-regionpicker>
    <mi-toast ref="toast"></mi-toast>
  </div>
</template>

<script>
import header from '../../../../components/header.vue';
import regionpicker from '../../../../components/regionpicker.vue'
import toast from '../../../../components/toast.vue'
import * as api from '../../../../api/store'
import * as checkJs from '../../../../utils/pubfunc'

export default {
  components: {
    'mi-header': header,
    'mi-regionpicker': regionpicker,
    'mi-toast': toast
  },
  data() {
    return {
      isaccept: true,
      name:'',
      region: '',
      address:'',
      accesscode:'',
      subjectname:'',
      subjectnumber:'',
      subjectpic:''
    }
  },
  mounted(){
    //检查用户身份，如果不是传递使者进入到开通传递大使页面
    if(this.$store.state.global.userinfo.Role!='传递大使'){
      this.$router.replace({path:'/bindex/ambassador'});
    }
  },
  methods: {
    selectRegion() {
      this.$refs.regionpicker.show();
    },
    regionPickerHandle(String) {
      this.region = String;
    },
    goPage(page) {
      this.$router.push({ path: page });
    },
    applystore(){
      //提交申请
      let alertFuc = (msg) => {
        const toast = this.$refs.toast;
        toast.show(msg);
        return false
      }
      let self=this;
      if (checkJs.isNullOrEmpty(this.name)) {
        alertFuc('请输入店铺名称')
        return;
      }
      if (checkJs.isNullOrEmpty(this.region)) {
        alertFuc('请选择地区')
        return;
      }
      if (checkJs.isNullOrEmpty(this.address)) {
        alertFuc('请输入详细地址')
        return;
      }
      if (checkJs.isNullOrEmpty(this.subjectname)) {
        alertFuc('请完善主体信息')
        return;
      }
      if (checkJs.isNullOrEmpty(this.subjectnumber)) {
        alertFuc('请完善主体信息')
        return;
      }
      			
      let params = {
        Name:this.name,
        Description:'',
        Region:this.region,
        Address:this.address,
        AccessCode:this.accesscode,
        Subject:{
          Name:this.subjectname,
          Number:this.subjectnumber,
          Pic:''
        }
      };
      api.ApplyStoreApi(params).then(
        res => {
          if (res.data.Code == 200) {
            console.log('申请成功');
            //转到成功页面
            this.$router.replace({
                name:'success',
                params:{
                    type:'tip',
                    message:'申请成功，等待审核'}})
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


.mg-top20 {
  margin-top: 1rem;
}

.btnwarp {
  padding: 1rem;
  background: #fff;
  p {
    font-size: 1.3rem;
    padding: 0.5rem 0 1rem 0;
    span {
      color: blue;
    }
  }
}

.xieyiWarp {
  height: 100%;
  overflow-y: scroll;
  font-size: 1.3rem;
  padding: 1rem;
}
</style>


