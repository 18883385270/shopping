<template>
  <div class="scannerpage">
      <mi-header title="扫一扫"></mi-header>
      <div class="scannerbox"></div>
      <p class="scantip">将二维码放入扫描框，即可自动扫描</p>
      <p class="myqrcode" @click="replacePage('myqrcode')">我的二维码</p>
      <div class="tools">
          <span :class="{open:isLight}" @click="switchLight">
              <svg>
                <use xlink:href="#light"></use>
            </svg>
          </span>
          <span @click="switchCamera">
              <svg>
                <use xlink:href="#cameratrans"></use>
            </svg>
          </span>
      </div>
  </div>
</template>

<script>
import header from '../../components/header.vue';
import * as api from '../../api/account';
import * as offlinestoreapi from '../../api/offlinestore';
import * as checkJs from '../../utils/pubfunc'

export default {
    components:{
        'mi-header':header
    },
    data(){
        return{
            isLight:false,
            isFront:false
        }
    },
    mounted(){
        this.showScanner();
    },
    beforeDestroy(){
        this.hideScanner();
    },
    methods:{
      showScanner(){
        let self=this;
        QRScanner.scan((err,text) => {
            if (err) {
                if (err.name === "SCAN_CANCELED") {
                    console.error("扫描退出");
                } else {
                    console.error(err._message);
                }
            } else {
                var src="scansuccess.wav";
                //self.playAudio(src);
                self.processQResult(text);
            }
        });
        QRScanner.show();
    },
    playAudio(url) {
        // Play the audio file at url
        var my_media = new Media(url,
            function () { console.log("playAudio():Audio Success"); },
            function (err) { console.log("playAudio():Audio Error: " + err); }
        );
        my_media.play();
        setTimeout(function () {
            my_media.pause();
        }, 10000);
    },
    hideScanner(){
        QRScanner.hide(function(status){
            console.log(status);
        });
    },
    processQResult(result) {
        //关闭闪光灯
        this.isLight=true;
        this.switchLight()

        let self = this;
        if(checkJs.isUrl(result)){
            //浏览器打开网址
            var browserUrl={
                Title:'扫描到网址',
                Url:result
            }
            sessionStorage.BrowserUrl=JSON.stringify(browserUrl);
            self.$router.replace({name:'browser'})
        }else{
            //解析命令
            if(checkJs.isCommand(result)){
                var commandAndId=result.split(':');
                var command=commandAndId[0];
                var id=commandAndId[1];
                if(command=='User'){
                    self.processUserCommand(id)
                }
                else if(command=='GoodsPreview'){
                    self.processGoodsPreviewCommand(id)
                }
                else if(command=='OfflineStorePayeeCode'){
                    self.processSpendCommand(id)
                }
            }
            else{
                //不是命令
                sessionStorage.ScannerResult =result
                self.$router.replace({ name: 'scannerresult' });
            }
            
        }
            
    },
    switchLight(){
        this.isLight=!this.isLight;
        if(this.isLight){
            QRScanner.enableLight(function(err, status){
                err && console.error(err);
                console.log(status);
            });
        }
        else{
            QRScanner.disableLight(function(err, status){
                err && console.error(err);
                console.log(status);
            });
        }
    },
    switchCamera(){
        this.isFront=!this.isFront;
        if(this.isFront){
            QRScanner.useFrontCamera(function(err, status){
                err && console.error(err);
                console.log(status);
            });
        }
        else{
            QRScanner.useBackCamera(function(err, status){
                err && console.error(err);
                console.log(status);
            });
        }
    },
    replacePage(page){
        this.$router.replace({name:page})
    },
    processUserCommand(userId){
        if (checkJs.isNullOrEmpty(this.$store.state.global.token)) {
            //未登录 进入注册页面
            sessionStorage.RecommandUserId = userId
            this.$router.replace({ name: 'register' });
        } else {
            //登录进入转账页面
            this.placeTransfer(userId)
        }
    },
    placeTransfer(userId){
        //alert('会员直接转账功能，暂停~');
        //发起转账页面
        let params = {
            Id:userId
        };
        api.InfoApi(params).then(
            res => {
                if (res.data.Code == 200) {
                    sessionStorage.UserInfo=JSON.stringify(res.data.UserInfo)
                    this.$router.replace({ name: 'cashtransfer' });
                } else {
                    console.log(res.data.Message);
                }
            },
            err => {
                console.log('网络错误');
            }
        )
    },
    processGoodsPreviewCommand(goodsId){
        this.$router.replace({ name: 'goodsinfo',params:{id:goodsId} });
    },
    processSpendCommand(offlineStoreId){
        if (checkJs.isNullOrEmpty(this.$store.state.global.token)) {
            this.$router.replace({ name: 'login' });
        } else {
            //登录进入转账页面
            this.placeSpend(offlineStoreId)
        }
    },
    placeSpend(offlineStoreId){
        //发起线下付款
        let params = {
            Id:offlineStoreId
        };
        offlinestoreapi.InfoApi(params).then(
            res => {
                if (res.data.Code == 200) {
                    sessionStorage.OfflineStore=JSON.stringify(res.data.OfflineStore)
                    this.$router.replace({ name: 'spend' });
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
.scannerpage{
    height:20rem;
    background:none transparent !important;
    .scantip{
        width:100%;
        text-align:center;
        font-size:1.3rem;
        color:#eee;
    }
    .scannerbox{
        width:18rem;
        height:18rem;
        border:1px solid #096;
        margin:10rem auto 2rem auto;
        background: url('../../../dist/scannerbg.gif') no-repeat center center;
        background-size: cover;
    }
    .myqrcode{
        font-size:1.3rem;
        color:#096;
        margin-top:1rem;
        text-align:center;
    }
    .tools{
        text-align:center;
        width:100%;
        position:absolute;
        bottom:2rem;
        span{
            display:inline-block;
            width:2.6rem;
            height:2.6rem;
            padding:1rem;
            background:#666;
            border-radius:50%;
            text-align:center;
            &.open{
                background:#096;
            }
            &:last-child{
                margin-left:2rem;
            }
            svg{
                width:2rem;
                height:2rem;
                fill:#999;
                margin-top:0.2rem;
                fill:#fff;
            }
        }
        
    }
}
</style>

