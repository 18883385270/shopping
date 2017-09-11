<template>
  <div class="scannerpage">
      <mi-header title="扫一扫"></mi-header>
      <div class="scannerbox"></div>
      <p class="scantip">将二维码放入扫描框，即可自动扫描</p>
      <p class="myqrcode" @click="toPage('myqrcode')">我的二维码</p>
  </div>
</template>

<script>
import header from '../../components/header.vue';
import * as checkJs from '../../utils/pubfunc'

export default {
    components:{
        'mi-header':header
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
        let self = this;
        //判断是否是用户的二维码
        var userId = checkJs.GetUserId(result);
        if (!checkJs.isNullOrEmpty(userId)) {
            if (checkJs.isNullOrEmpty(self.$store.state.global.token)) {
                //未登录 进入注册页面
                sessionStorage.RecommandUserId = userId
                self.$router.push({ name: 'register' });
            } else {
                //登录进入扫描结果页面
                sessionStorage.ScannerResult =userId
                self.$router.replace({ name: 'scannerresult' });
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
    toPage(page){
        this.$router.replace({name:page})
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
        width:15rem;
        height:15rem;
        border:1px solid #ccc;
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
}
</style>

