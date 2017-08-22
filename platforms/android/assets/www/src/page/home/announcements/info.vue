<template>
  <div style="background:#fff" :style="{height:bodyHeight}">
      <mi-header title="公告详情"></mi-header>
      <div class="announceinfo">
          <div class="title">{{Announcement.Title}}</div>
          <div class="body">{{Announcement.Body}}</div>
          <div class="xun">【五福天下团队】</div>
      </div>
  </div>
</template>

<script>
import header from '../../../components/header.vue'
import * as util from '../../../utils/util.js';

export default {
    components:{
        'mi-header':header
    },
    data(){
        return{
            Announcement:{},
            bodyHeight: '100%'
        }
    },
    mounted(){
        this.bodyHeight = util.screenSize().height + 'px';
        this.Announcement=this.$route.params.Announcemnet;
    }
  
}
</script>

<style lang="less" scoped>
    .announceinfo{
        padding:1rem;
        .title{
            padding:1rem 0;
            font-size:1.3rem;
        }
        .body{
            text-indent: 2rem;
        }
        .xun{
            text-align:right;
            font-size:1.3rem;
            padding:2rem 0;
        }
    }
</style>


