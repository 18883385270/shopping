<template>
    <div>
        <mi-header title="店铺信息"></mi-header>
        <mi-banner :StoreInfo="StoreInfo"></mi-banner>
        <div class="navbar">
            <div class="item" @click="goStoreHomePage">
                <svg>
                    <use xlink:href="#storeline"></use>
                </svg>
                <p>
                    首页
                </p>
            </div>
            <div class="item active">
                <svg>
                    <use xlink:href="#identitycardline"></use>
                </svg>
                <p>
                    资料
                </p>
            </div>
        </div>

    <div class="pd bd-btn">
      <p class="text-md">简介</p>
      <p class="pd-topbtn-sm text-gray">
        {{StoreInfo.Description}}
      </p>
    </div>
    <div class="pd bd-btn">
      <p class="text-md">主体名称</p>
      <p class="pd-topbtn-sm text-gray">
        {{SubjectInfo.SubjectName}}
      </p>
      <p class="text-md">主体号码</p>
      <p class="pd-topbtn-sm text-gray">
        {{SubjectInfo.SubjectNumber}}
      </p>
      <p class="text-md">地址</p>
      <p class="pd-topbtn-sm text-gray">
        {{StoreInfo.Region}} {{StoreInfo.Address}}
      </p>
    </div>
    <div class="pd">
      <p class="text-md">纠纷解决指引</p>
      <p class="pd-topbtn-sm text-gray">
        版权、商标权（如被抄袭、假冒商标）或人身权（如被侮辱、毁谤）、其他合法权益可以根据详细信息进行协商，或报案、诉讼、仲裁等方式解决
      </p>
    </div>
    </div>
</template>

<script>
import header from "../../components/header.vue";
import banner from "./banner.vue";
import * as api from "../../api/store";

export default {
  props:{
    id:{
      type:String,
      default:''
    }
  },
  components: {
    "mi-header": header,
    "mi-banner": banner
  },
  data() {
    return {
      StoreInfo: {},
      SubjectInfo: {
        SubjectName: "",
        SubjectNumber: ""
      }
    };
  },
  mounted() {
    this.StoreId = this.id;
    this.fatchData();
  },
  methods: {
    goStoreHomePage() {
      this.$router.replace({ name: 'store',params:{id:this.StoreId} });
    },
    fatchData() {
      let params = {
        Id: this.StoreId
      };
      api.HomeInfoApi(params).then(
        res => {
          if (res.data.Code == 200) {
            this.StoreInfo = res.data.StoreInfo;
            this.SubjectInfo = res.data.SubjectInfo;
          } else {
            console.log(res.data.Message);
          }
        },
        err => {
          console.log("网络错误");
        }
      );
    }
  }
};
</script>

<style lang="less" scoped>
.navbar {
  display: flex;
  border-bottom: 1px solid #eee;
  background: #fff;
  .item {
    padding: 0.5rem;
    width: 50%;
    text-align: center;
    border-bottom: 1px solid #fff;
    svg {
      width: 2rem;
      height: 2rem;
      margin-bottom: 0.2rem;
    }
  }
  .active {
    color: #096;
    border-color: #096;
    svg {
      fill: #096;
    }
  }
}

</style>


