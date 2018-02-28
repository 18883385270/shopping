<template>
  <div>
      <mi-header title="通知中心"></mi-header>
      <div class="pd-topbtn-xlg text-center" v-if="!Notifications.length">
            <svg class="icon-xxxlg">
                <use xlink:href="#norecord"></use>
            </svg>
            <p class="pd-top-lg text-md text-gray"> 没有通知</p>
        </div>
      <div>
            <div class="pd bd-btn" v-for="Notifi in Notifications" :key="Notifi.Id">
                <div class="text-md pd-btn">
                    <span class="text-sm pull-right text-gray">{{Notifi.CreatedOn}}</span>
                    <p>{{Notifi.Title}}</p>
                </div>
                <div class="text-gray">
                    {{Notifi.Body}}
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import header from '../../../components/header.vue'
import * as api from '../../../api/notification'

export default {
    components:{
        'mi-header':header
    },
    data(){
        return{
            Notifications:null
        }
    },
    mounted(){
        this.fatchData();
    },
    methods:{
        fatchData(){
            let params = {};
            api.MyNotificationsApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        this.Notifications=res.data.Notifications;
                    } else {
                        console.log(res.data.Message);
                    }
                },
                err => {
                    console.log('网络错误');
                }
            )
        }
    }
}
</script>

<style lang="less" scoped>

    
    .tlt{
        font-size:1.3rem;
        padding-bottom:1rem;
        .time{
            color:#999;font-size:1rem;
            float:right;
        }
    }
    

</style>


