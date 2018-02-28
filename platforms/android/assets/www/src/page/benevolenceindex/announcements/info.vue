<template>
  <div>
      <mi-header title="公告详情"></mi-header>
      <div class="pd">
          <div class="text-md">{{Announcement.Title}}</div>
          <p class="pd-topbtn-sm text-lightgray">{{Announcement.CreatedOn}}</p>
          <div class="pd-top text-gray">{{Announcement.Body}}</div>
          <div class="pd-top text-md text-right">
              【五福天下团队】
            </div>
      </div>
  </div>
</template>

<script>
import header from '../../../components/header.vue'

export default {
    components:{
        'mi-header':header
    },
    data(){
        return{
            Announcement:{}
        }
    },
    mounted(){
        this.Announcement=this.$route.params.Announcemnet;
    }
  
}
</script>

<style lang="less" scoped>
    
</style>


