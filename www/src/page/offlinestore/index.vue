<template>
  <div>
    <mi-search></mi-search>
    <mi-storelist></mi-storelist>
    <div class="backhome" @click="goPage('/')">
      <svg>
        <use xlink:href="#home"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import search from './search.vue';
import storelist from './storelist.vue';

export default {
  components: {
    'mi-search': search,
    'mi-storelist': storelist
  },
  methods:{
    goPage(page){
      this.$router.push({path:page});
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
</style>

