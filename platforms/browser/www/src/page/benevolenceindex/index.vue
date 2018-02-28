<template>
  <div>
      
      <div class="topbg pd text-center">
          
          <div class="text-center">
              <img class="wd-100p" :src="roleheadsrc" alt="logo">
          </div>
          <div class="flexwarp text-yello">
              <div class="wd-50p" @click="goPage('incentive')">
                  <h2>{{this.$store.state.global.walletinfo.YesterdayEarnings | currency('￥',2)}}</h2> <p class="pd-top-sm">昨日收益</p>
                </div>
              <div class="wd-50p" @click="goPage('incentive')">
                  <h2>{{this.$store.state.global.walletinfo.Earnings | currency('￥',2)}}</h2> <p class="pd-top-sm">累计收益</p>
                </div>
          </div>
      </div>
        <div class="flexwarp pd-sm">
            <div class="wd-33p text-center" @click="goPage('myrights')">
                <svg class="icon icon-lg icon-gray">
                    <use xlink:href="#interests"></use>
                </svg>
                <p class="pd-top-sm">我的权益</p>
            </div>
            <div class="wd-33p text-center bd-lf" @click="goPage('bindex')">
                <svg class="icon icon-lg icon-gray">
                    <use xlink:href="#integralline"></use>
                </svg>
                <p class="pd-top-sm">福豆指数</p>
            </div>
            <div class="wd-33p text-center bd-lf" @click="goPage('myinvote')">
                <svg class="icon icon-lg icon-gray">
                    <use xlink:href="#teammembers"></use>
                </svg>
                <p class="pd-top-sm">我的团队</p>
            </div>
        </div>
        <div v-if="!isVip">
            <div class="divider"></div>
            <div class="pd text-center">
                <div class="pd">
                    <button class="button danger" @click="goVipGoodsBlock">您还不是VIP会员，点击升级 </button>
                </div>
                <div class="pd-top">
                    <button class="mdbtn round danger" @click="popupShare">推荐给朋友</button>
                </div>
            </div>
        </div>

        <div v-if="isVip">
            <div class="divider"></div>
            <div class="pd text-center" v-if="isVip">
                <div class="text-danger pd-topbtn">
                    <p v-if="isVip && !isJingli">直推VIP会员 {{DirectPasserCount}} 人，团队VIP会员 {{TotalPasserCount}}人</p>
                    <p v-if="isJingli">直推经理 {{DirectVipPasserCount}} 人，团队经理 {{TotalVipPasserCount}}人</p>
                </div>
                <div class="pd flexwarp" v-if="isVip && !isJingli">
                    <div class="wd-10p">VIP</div>
                    <div class="wd-80p pd-top-sm"> <mi-progress :persent="calPersent()"></mi-progress></div>
                    <div class="wd-10p">经理</div>
                </div>
                <div class="pd flexwarp" v-if="isJingli">
                    <div class="wd-10p">经理</div>
                    <div class="wd-80p pd-top-sm"> <mi-progress :persent="calVipPersent()"></mi-progress></div>
                    <div class="wd-10p">总监</div>
                </div>
                <div class="pd text-lightgray"><span :class="{'text-danger':isVip}">VIP会员</span> 》<span :class="{'text-danger':isJingli}">五福经理</span>  》<span :class="{'text-danger':isZongjian}">五福总监</span></div>
                <div class="pd-top-xlg">
                    <button class="mdbtn round danger" @click="popupShare">推荐给朋友</button>
                </div>
            </div>
        </div>

      <div class="divider"></div>
      <div class="pd text-center">
          <div class="text-md">-- WOF商学院 --</div>
          <div class="flexwarp pd-top-lg">
              <div class="wd-50p text-gray">
                  <svg class="icon icon-lg icon-gray">
                      <use xlink:href="#videoline"></use>
                  </svg>
                  <p class="pd-top-sm">往期回看</p>
              </div>
              <div class="wd-50p text-gray">
                  <svg class="icon icon-lg icon-gray">
                      <use xlink:href="#eduline"></use>
                  </svg>
                  <p class="pd-top-sm">大咖主场</p>
              </div>
          </div>
          <div class="pd-top-lg">
              <button class="mdbtn round">即将开放</button>
          </div>
      </div>
      <div class="divider"></div>
      <div>
          <div class="text-md text-center pd bd-btn">最新公告</div>
          <div class="pd" style="padding-top:0">
              <div class="pd-topbtn bd-btn text-gray" v-for="(Announcement,index) in Announcements" :key="index" @click="goAnnounceInfoPage(Announcement)">
                  <span class="text-lightgray pull-right">{{Announcement.CreatedOn}}</span>
                  <span class="text-danger">【news】</span> {{Announcement.Title|truncate(16)}}
              </div>
          </div>
          <div class="pd-btn text-center">
              <button class="mdbtn round danger" @click="goPage('announcements')">更多公告</button>
          </div>
      </div>
      
      <mi-popup ref="popup" title="邀请好友">
            <div slot="modalbody">
                <div class="flexwarp text-center pd-topbtn-xlg">
                    <div class="wd-33p" @click="shareToQuan">
                        <svg class="icon">
                        <use xlink:href="#pengyouquan"></use>
                        </svg>
                        <p>朋友圈</p>
                    </div>
                    <div class="wd-33p" @click="shareToFriend">
                        <svg class="icon">
                        <use xlink:href="#weixin"></use>
                        </svg>
                        <p>微信好友</p>
                    </div>
                    <div class="wd-33p" @click="goPage('faceinvote')">
                        <svg class="icon">
                        <use xlink:href="#qrcode"></use>
                        </svg>
                        <p>面对面</p>
                    </div>
                </div>
            </div>
        </mi-popup>
      <div style="width: 100%;height:4.5rem"></div>
      <mi-tabbar :selected="2"></mi-tabbar>
  </div>
</template>

<script>
import tabbar from '../../components/tabbar.vue'
import progress from '../../components/progress.vue'
import popup from '../../components/popup.vue'
import * as shareService from '../../services/shareservice'
import * as announcementApi from '../../api/announcement'
import * as accountApi from '../../api/account'

export default {
    components: {
        'mi-tabbar': tabbar,
        'mi-popup': popup,
        'mi-progress':progress
    },
    data(){
        return{
            isCustomer:true,
            isVip:false,
            isJingli:false,
            isZongjian:false,
            roleheadsrc:'dist/putong.png',
            Announcements:[],
            TotalVipPasserCount:0,
            TotalPasserCount:0,
            TotalUserCount:0,
            DirectPasserCount:0,
            DirectVipPasserCount:0,
        }
    },
    created(){
        if(this.$store.state.global.userinfo.Role=="VIP会员"){
        this.isVip=true;
        this.roleheadsrc='dist/vip.png'
        }
        else if(this.$store.state.global.userinfo.Role=="五福经理"){
        this.isVip=true;
        this.isJingli=true;
        this.roleheadsrc='dist/jingli.png'
        }
        else if(this.$store.state.global.userinfo.Role=="五福总监"){
        this.isVip=true;
        this.isJingli=true;
        this.isZongjian=true;
        this.roleheadsrc='dist/zongjian.png'
        }
        this.fatchData();
        this.fatchAnnouncementData();
    },
    methods:{
        calPersent(){
            var directPersent=Math.min(1*this.DirectPasserCount,10);
            var persent=Math.min((90/60)*this.TotalPasserCount,90);
            return directPersent+persent;
        },
        calVipPersent(){
            var directPersent=Math.min(1*this.DirectVipPasserCount,10);
            var persent=Math.min((90/60)*this.TotalVipPasserCount,90);
            return directPersent+persent;
        },
        goPage(name){
            this.$router.push({name:name})
        },
        popupShare() {
            this.$refs.popup.modalOpen();
        },
        shareToQuan() {
            //分享到朋友圈
            var userId=this.$store.state.global.token;
            shareService.shareToQuan(userId);
        },
        shareToFriend(){
            //分享给好友
            var userId=this.$store.state.global.token;
            shareService.shareToFriend(userId);
        },
        fatchData(){
            if(this.isVip){
                //如果是vip获取我的团队信息
                let params={};
                accountApi.MyTeamInfoApi(params).then(
                    res => {
                    if (res.data.Code == 200) {
                        this.TotalVipPasserCount = res.data.TotalVipPasserCount;
                        this.TotalPasserCount = res.data.TotalPasserCount;
                        this.TotalUserCount = res.data.TotalUserCount;
                        this.DirectPasserCount = res.data.DirectPasserCount;
                        this.DirectVipPasserCount = res.data.DirectVipPasserCount;
                    } else {
                        console.log(res.data.Message);
                    }
                    },
                    err => {
                        console.log('网络错误');
                    }
                );
            }
        },
        fatchAnnouncementData(){
            let params={
                Page: 1
            };
            announcementApi.ListApi(params).then(
                res => {
                if (res.data.Code == 200) {
                    this.Announcements = res.data.Announcements.slice(0,3);
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
        },
        goVipGoodsBlock() {
            this.$router.push({ name: 'goodsblockinfo',params:{id:'8a978108-53a5-478b-ad44-016138e2406b'} });
        },
    }
};
</script>

<style lang="less" scoped>
.topbg{
    background-color:#4B270F;
}
</style>


