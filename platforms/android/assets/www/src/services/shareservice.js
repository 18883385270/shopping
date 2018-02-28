
function wechartShare(param){

    if (typeof Wechat !== "undefined") {
        Wechat.isInstalled(function(installed) {
            if (installed) {
                Wechat.share(param, function() {
                }, function(reason) {
                    alert("分享失败: " + reason);
                });
            }
            else {
                alert("亲，您似乎没有安装微信");
            }
            }, function(reason) {
                console("检查微信安装状态失败，原因: " + reason);
        });
    }
}

export const shareGoods=(goodsInfo)=> {
    //分享到朋友圈
    var param= {
        message: {
            title: goodsInfo.Name,
            description: "这个商城竟然购买东西还能赚钱，以后我就在这里买东西了，你呢？",
            thumb: goodsInfo.Thumb,
            mediaTagName: "TEST-TAG-001",
            messageExt: "这个商城竟然购买东西还能赚钱，以后我就在这里买东西了，你呢？",
            messageAction: "<action>dotalist</action>",
            media:{
            type: Wechat.Type.LINK,
            webpageUrl:"http://m.wftx666.com/#/section/goodslist/info/" + goodsInfo.Id
            }
        },
        scene: Wechat.Scene.TIMELINE 
    }
    wechartShare(param)
}

export const shareToQuan=(userId)=> {
    //分享到朋友圈
    var param= {
        message: {
            title: "聪明的消费者都在这里，我用过所以我推荐",
            description: "这个商城竟然购买东西还能赚钱，以后我就在这里买东西了，你呢？",
            thumb: "http://wftx-goods-img-details.oss-cn-shanghai.aliyuncs.com/logo.png",
            mediaTagName: "TEST-TAG-001",
            messageExt: "这个商城竟然购买东西还能赚钱，以后我就在这里买东西了，你呢？",
            messageAction: "<action>dotalist</action>",
            media:{
            type: Wechat.Type.LINK,
            webpageUrl:"http://m.wftx666.com/#/reg/" + userId
            }
        },
        scene: Wechat.Scene.TIMELINE 
    }
    wechartShare(param)
}

export const shareToFriend=(userId)=>{
    //分享给好友
    var param= {
        message: {
            title: "聪明的消费者都在这里，我用过所以我推荐",
            description: "这个商城竟然购买东西还能赚钱，以后我就在这里买东西了，你呢？",
            thumb: "http://wftx-goods-img-details.oss-cn-shanghai.aliyuncs.com/logo.png",
            mediaTagName: "TEST-TAG-001",
            messageExt: "这个商城竟然购买东西还能赚钱，以后我就在这里买东西了，你呢？",
            messageAction: "<action>dotalist</action>",
            media:{
                type: Wechat.Type.LINK,
                webpageUrl:"http://m.wftx666.com/#/reg/" + userId
            }
        },
        scene: Wechat.Scene.SESSION 
    }
    wechartShare(param)
}
