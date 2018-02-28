<template>
  <div class="page_warp">
        <mi-searchbar @searchEvent="searchHandle"
         @searchLeftBtnEvent="searchLeftBtnEventHandle"
          @searchRightBtnEvent="searchRightBtnEventHandle"
           hasbg="true"
           hasborder="true"></mi-searchbar>
        <div style="height: 4rem;"></div>
        <mi-section></mi-section>
        <div style="width: 100%;height: 4.5rem;"></div>
        <mi-tabbar :selected="1"></mi-tabbar>
  </div>
</template>

<script>
import searchbar from '../../components/searchbar.vue';
import section from './section.vue';
import tabbar from '../../components/tabbar.vue';
import * as checkJs from '../../utils/pubfunc'

export default {
    components: {
        'mi-searchbar':searchbar,
        'mi-section':section,
        'mi-tabbar': tabbar
    },
    data(){
        return {
            searchState: false
        }
    },
    methods:{
       searchHandle (Boolean) {
        if (Boolean) {
          this.searchState = true;
        } else {
          this.searchState = false;
        }
      },
      searchLeftBtnEventHandle(){
        this.$router.push({name:'offlinestore'})
      },
      searchRightBtnEventHandle(){
        this.$router.push({name:'scannerpage'});
      }
    }
}
</script>

<style lang="less" scoped>
    .page_warp{
        width: 100%;
    }
</style>


