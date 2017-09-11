<template>
  <div>
    <mi-header title="主体信息"></mi-header>
    <div class="article">
      <p class="title">主体认证说明</p>
      <p>
        主体认证是江苏悟行电子商务有限公司对用户的店铺主体所提交的信息，资质文件的真实性和合法性进行甄别与核实的过程。
        认证有效期为一年。
      </p>
    </div>
    <div class="article">
      <p class="title">主体名称</p>
      <p>
        {{SubjectInfo.SubjectName}}
      </p>
      <p class="title">主体号码</p>
      <p>
        {{SubjectInfo.SubjectNumber}}
      </p>
    </div>
    <div class="article">
      <p class="title">纠纷解决指引</p>
      <p>
        版权、商标权（如被抄袭、假冒商标）或人身权（如被侮辱、毁谤）、其他合法权益可以根据详细信息进行协商，或报案、诉讼、仲裁等方式解决
      </p>
    </div>
  </div>
</template>



<script>
import header from '../../../../components/header.vue'
export default {
  components:{
    'mi-header':header
  },
  data(){
    return{
      SubjectInfo:{}
    }
  },
  mounted(){
    this.SubjectInfo = JSON.parse(sessionStorage.SubjectInfo)
  }
}
</script>


<style lang="less" scoped>
  .article{
    color:#666;
    padding:1rem;
    border-bottom:1px solid #ccc;
    .title{
        color:#333;
        padding:0.5rem 0;
        font-size:1.3rem;
    }
  }
</style>

