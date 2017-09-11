<template>
  <div>
    <mi-header title="我的店铺"></mi-header>
    <div class="divider"></div>
    <div class="storetitle">
      <h1>{{StoreInfo.Name}}</h1>
      <p>{{StoreInfo.Description}}</p>
    </div>
    <div class="divider"></div>
    <div class="tablerow" @click="toSubjectPage">
      <div class="tlt">主体信息</div>
      <div class="cnt">
        {{SubjectInfo.SubjectName}}
        <svg>
          <use xlink:href="#rightarrowsline"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import header from '../../../components/header.vue'

export default {
  components: {
    'mi-header': header,
  },
  data(){
    return{
      StoreInfo:{},
      SubjectInfo:{}
    }
  },
  mounted(){
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

