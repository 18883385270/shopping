<template>
  <div>
      <mi-header title="系统公告"></mi-header>
      <div>
          <div class="flexwarp pd bd-btn" v-for="(Announcement,index) in Announcements" :key="index" @click="goAnnounceInfoPage(Announcement)">
              <div class="wd-80p">
                  <p class="text-md">{{Announcement.Title}}</p>
                  <p class="pd-topbtn text-gray marg-rt">{{Announcement.Body|truncate(40)}}</p>
                  <p class="text-lightgray">{{Announcement.CreatedOn}}</p>
              </div>
              <div class="wd-20p">
                  <img class="wd-100p img-round" src="../../../../dist/gonggaoicon.jpg" alt="">
              </div>
          </div>
      </div>
      <div class="bg-xlightgray text-gray text-center pd">这里仅显示最近20条公告</div>
  </div>
</template>

<script>
import header from '../../../components/header.vue'
import * as announcementApi from '../../../api/announcement'

export default {
  components:{
      'mi-header':header,
  },
  data(){
      return{
          Announcements:[],
      }
  },
  mounted(){
      this.fatchData();
  },
  methods:{
      fatchData(){
            let params={
                Page: 1
            };
            announcementApi.ListApi(params).then(
                res => {
                if (res.data.Code == 200) {
                    this.Announcements = res.data.Announcements;
                } else {
                    console.log(res.data.Message);
                }
                },
                err => {
                    console.log('网络错误');
                }
            );
        },
        goAnnounceInfoPage(announce)
        {
            this.$router.push({name:'announcementinfo',params:{Announcemnet:announce}})
        }
  }
}
</script>

<style lang="less" scoped>

</style>


