<template>
  <div>
    <mi-header title="我的店铺"></mi-header>
    <div class="storetitle">
      <h1>夏天的店</h1>
      <p>驴肉汤，驴肉火烧，正宗河间老师傅传授</p>
    </div>
    <div class="tablerow mg-top20" @click="toPage('storesubjectinfo')">
      <div class="tlt">主体信息</div>
      <div class="cnt">
        夏兆伟
        <svg>
          <use xlink:href="#rightarrowsline"></use>
        </svg>
      </div>
    </div>
    <div class="tablerow mg-top20">
      <div class="tlt">暂停营业</div>
      <div class="cnt">
        <span class="swch">
          <mi-switch @switchEvent="switchEventHandle"></mi-switch>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import header from '../../../components/header.vue'
import vswitch from '../../../components/switch.vue';

export default {
  components: {
    'mi-header': header,
    'mi-switch': vswitch
  },
  methods: {
    switchEventHandle(isOn) {
      
    },
    toPage(page){
      this.$router.push({name:page})
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

