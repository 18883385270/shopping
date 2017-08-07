/*
* 首页
*/
<template>
  <div class="app">
    <div :style="indexStyle" ref="index">
      <mi-search @searchEvent="searchHandle" :opac="headerOpacity"></mi-search>
         <mi-banner :banner="banner" id="bannerImg"></mi-banner> 
        <mi-category></mi-category>
        <mi-announcement></mi-announcement>
         <!-- <mi-advertisement :advertisement="advertisement"></mi-advertisement>  -->
        <mi-body :body="body"></mi-body>
        <div style="width: 100%;height: 6rem;background: #eee;"></div>
        <mi-tabbar :selected="0"></mi-tabbar>
    </div>
  </div>
</template>

<script>
  import util from '../../utils/util.js';
  import search from '../../components/search.vue';
  import banner from './banner.vue';
  import category from './category.vue';
  import announcement from './announcement.vue';
  import advertisement from './advertisement.vue';
  import body from './body.vue';
  import tabbar from '../../components/tabbar.vue';
  import data from '../../../../data.json';

  export default {
    components: {
      'mi-search': search,
      'mi-banner': banner,
      'mi-category':category,
      'mi-announcement':announcement,
      'mi-advertisement': advertisement,
      'mi-body': body,
      'mi-tabbar': tabbar
    },
    created () {
      var me = this;
      // setTimeout(function () {//2秒后显示内容
      //   me.a = true;
      // }, 2000);
      me.banner = data.banner;
      me.advertisement = data.advertisement;
      me.body = data;
      me.bannerList = data.banner.bannerTop;
    },
    mounted () {
      var me = this;
      console.log(util.screenSize());
      this.c_height = 0.711 * util.screenSize().width;
      var height = util.screenSize().width * 256 / 360;
      this.$refs.index.onscroll = function () {
        me.headerOpacity = this.scrollTop / height;
      };
    },
    data () {
      return {
        banner: {},
        advertisement: {},
        body: {},
        bannerList: [],
        scrollX: 0,
        scrollY: 0,
        searchState: false,
        headOpac: '',
        load: false,
        c_height: 0,
        indexStyle: {
          height: util.screenSize().height/10 + 'rem',
          'overflow-y': 'scroll',
          width: '100%'
        },
        headerOpacity: 0
      };
    },
    methods: {
      searchHandle (Boolean) {
        if (Boolean) {
          this.searchState = true;
        } else {
          this.searchState = false;
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  .app {
    overflow-y: scroll;
    width: 100%;
    height: 100%;
  }

  .banner-img {
    width: 100%;
    img {
      width: 100%;
    }
  }
</style>
