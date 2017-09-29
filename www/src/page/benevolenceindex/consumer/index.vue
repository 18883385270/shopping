<template>
    <div class="pagewp">
        <mi-header title="善心使者"></mi-header>
        <div class="rolebanner">
            <svg><use xlink:href="#consumer"></use></svg>
            <h1>爱心使者</h1>
            <h2>消费人，购物就是献爱心</h2>
        </div>
        <div class="timop">
            <div>有效期：永久有效</div>
            <div>已开通：2454644人</div>
        </div>
        <div class="divider"></div>
        <div class="shuoming">
            <div class="tlt">为什么要做善心使者?</div>
            <div class="cont">
                <p>【1】免费注册即可成为善心使者，</p>
                <p>【2】在商城消费并奉献爱心，购物的同时还能获得善心激励</p>
                <p>【3】1个善心价值100元，满1个善心可参与每日的善心激励</p>
                <p>【4】善心激励就是将您的善心转换为人民币</p>
            </div>
            <button class="button info" @click="shareToQuan">分享给好友</button>
        </div>
    </div>
</template>

<script>
import header from '../../../components/header.vue';
import toast from '../../../components/toast.vue'

export default {
    components: {
        'mi-header': header,
        'mi-toast':toast
    },
    methods:{
        shareToQuan() {
            //分享到朋友圈
            var param= {
                message: {
                    title: "用了这个APP，他们竟然都不在淘宝买东西了",
                    description: "这个商城竟然购买东西还能赚钱，以后我就在这里买东西了，你呢？",
                    thumb: "http://wftx-goods-img-details.oss-cn-shanghai.aliyuncs.com/logo.png",
                    mediaTagName: "TEST-TAG-001",
                    messageExt: "这个商城竟然购买东西还能赚钱，以后我就在这里买东西了，你呢？",
                    messageAction: "<action>dotalist</action>",
                    media:{
                    type: Wechat.Type.LINK,
                    webpageUrl:"http://m.wftx666.com/#/reg?parentid=" + this.$store.state.global.token
                    }
                },
                scene: Wechat.Scene.TIMELINE 
            }
            this.wechartShare(param)
        },
        wechartShare(param){
            let alertFuc = (msg) => {
                const toast = this.$refs.toast;
                toast.show(msg);
                return false
            }

            if (typeof Wechat !== "undefined") {
                Wechat.isInstalled(function(installed) {
                if (installed) {
                    Wechat.share(param, function() {
                        alertFuc("分享成功");
                    }, function(reason) {
                        alertFuc("分享失败: " + reason);
                    });
                }
                else {
                    alertFuc("亲，您似乎没有安装微信");
                }
                }, function(reason) {
                console("检查微信安装状态失败，原因: " + reason);
                });
            }
        }
    }
}
</script>

<style lang="less" scoped>
.pagewp {
    .rolebanner {
        text-align: center;
        padding: 2em 1rem;
        color: #fff;
        background: #333 url('../../../../dist/banner.png') no-repeat center center;
        background-size:100% 100%;
        svg {
            display: block;fill:#fff;
            width: 5rem;
            height: 5rem;
            margin: 0.8rem auto;
        }
        h1 {
            font-size: 2rem;
            font-weight: 400;
        }
        h2 {
            font-size: 1.3rem;margin-top:0.5rem;
            font-weight: 400;
        }
    }
    .timop {
        background: #fff;
        border-bottom: 1px solid #eee;
        display:flex;
        div {
            padding:1rem;text-align: center;
            width: 50%;
            &:last-child{
                border-left:1px solid #eee;
            }
        }
    }
    .shuoming {
        border-top: 1px solid #eee;
        background: #fff;
        padding: 1rem;
        .tlt {
            font-size: 1.3rem;
            font-weight: 400;
            padding-bottom: 1rem;
        }
        .cont {
            font-size: 1rem;
            p {
                margin-top: 1rem;
                &.nianfei{
                    font-size:1.5rem;font-weight: 400;color:#C1272D;
                }
            }
        }
    }
    
}
</style>


