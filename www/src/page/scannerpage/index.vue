<template>
  <div class="scannerpage">
      <mi-header title="扫一扫"></mi-header>
      <div class="scannerbox"></div>
      <p class="scantip">将二维码放入扫描框，即可自动扫描</p>
      <p class="myqrcode" @click="toPage('myqrcode')">我的二维码</p>
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
                // an error occurred, or the scan was canceled (error code `6`)
            } else {
                // The scan completed, display the contents of the QR code:
                self.processQResult(text);
            }
        });
        QRScanner.show();
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
        //判断是否是用户的二维码
        var userId = checkJs.GetUserId(result);
        if (!checkJs.isNullOrEmpty(userId)) {
            if (checkJs.isNullOrEmpty(self.$store.state.global.token)) {
                //未登录 进入注册页面
                sessionStorage.RecommandUserId = userId
                self.$router.push({ name: 'register' });
            } else {
                //登录进入转账页面
                self.placeTransfer(userId)
            }
        }
        else {
            //非用户二维码是否是网址？
            if(checkJs.isUrl(result)){
                //浏览器打开网址
                cordova.InAppBrowser.open(result, '_blank', 'location=yes');
            }
            else{
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
    toPage(page){
        this.$router.replace({name:page})
    },
    placeTransfer(userId){
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
        margin-top:3rem;
        text-align:center;
    }
    .tools{
        text-align:center;
        width:100%;
        position:absolute;
        bottom:5rem;
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

