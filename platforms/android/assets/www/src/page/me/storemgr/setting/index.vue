<template>
  <div class="pagewp" :style="{height:pageHeight}">
    <mi-header title="我的店铺"></mi-header>
    <div class="divider"></div>
    <div class="pd bg-white">
      <p class="text-lg pd-btn">{{StoreInfo.Name}}</p>
      <p>{{StoreInfo.Description}}</p>
    </div>
    <div class="divider"></div>
    <div class="bg-white pd flexwarp" @click="toSubjectPage">
      <div class="wd-50p"><p class="text-md">主体信息</p></div>
      <div class="wd-50p text-right">
        <span class="text-md text-lightgray">{{SubjectInfo.SubjectName}}</span>
        <svg class="icon icon-sm marg-lf">
          <use xlink:href="#rightarrowsline"></use>
        </svg>
      </div>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
import header from '../../../../components/header.vue'
import * as util from '../../../../utils/util'
export default {
  components: {
    'mi-header': header,
  },
  data(){
    return{
      StoreInfo:{},
      SubjectInfo:{},
      pageHeight:"100%"
    }
  },
  mounted(){
    this.pageHeight=util.screenSize().height+'px'
    this.StoreInfo = JSON.parse(sessionStorage.StoreInfo)
    this.SubjectInfo = JSON.parse(sessionStorage.SubjectInfo)
  },
  methods: {
    toSubjectPage(){
      this.$router.push({name:'storesubjectinfo'})
    }
  }

}
</script>


<style lang="less" scoped>
.pagewp{
    background:#eee;
}
.storetitle {
  padding: 1rem;
  background:#fff;
  h1 {
    font-size: 1.5rem;
    font-weight: 400;
    padding-bottom:1rem;
  }
}
</style>

