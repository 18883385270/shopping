<template>
    <div class="orderlswarp">
        <div class="orderwarp" v-for="order in orders">
            <div class="header">
                <div class="ordernumber">订单号：{{order.orderNumber}}</div>
                <div class="orderstatus">{{order.status}}</div>
            </div>
            <div class="ordgoods">
                <div class="storetlt">{{order.storeName}}</div>
                <div class="goods" v-for="goods in order.goodses" @click="goPage('/orders/info')">
                    <div class="goodspic">
                        <img :src="goods.pic" />
                    </div>
                    <div class="goodstlt">
                        <p class="goodsname">{{goods.name}}</p>
                        <p>{{goods.specificationName}} {{goods.quantity}}件</p>
                    </div>
                </div>
            </div>
            <div class="ordertools">
                <div class="price">总价：<span>￥{{order.total}}</span></div>
                <div class="btns">
                    <button>再次购买</button><button class="del">删除</button>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    components:{

    },
    data(){
        return{
            orders:[
                {
                    "orderNumber":353448254,
                    "total":34.54,
                    "status":'交易成功',
                    "storeName":'公司自营',
                    "goodses":[
                        {
                            "name":"京东超市上海特产 梅林午餐肉猪肉罐头",
                            "pic":"https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360",
                            "specificationName":"340g 装",
                            "quantity":1,
                            "price":34.5
                        },
                        {
                            "name":"小米（MI）便携鼠标 无线蓝牙4.0 男女家用/笔记本电脑/鼠标",
                            "pic":"https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360",
                            "specificationName":"银色",
                            "quantity":1,
                            "price":99
                        }
                    ]
                },
                {
                    "orderNumber":353448254,
                    "total":34.54,
                    "status":'交易成功',
                    "storeName":'公司自营',
                    "goodses":[
                        {
                            "name":"小米（MI）便携鼠标 无线蓝牙4.0 男女家用/笔记本电脑/鼠标",
                            "pic":"https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360",
                            "specificationName":"银色",
                            "quantity":1,
                            "price":99
                        }
                    ]
                },
                {
                    "orderNumber":353448254,
                    "total":34.54,
                    "status":'交易成功',
                    "storeName":'公司自营',
                    "goodses":[
                        {
                            "name":"京东超市上海特产 梅林午餐肉猪肉罐头",
                            "pic":"https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360",
                            "specificationName":"340g 装",
                            "quantity":1,
                            "price":34.5
                        },
                        {
                            "name":"小米（MI）便携鼠标 无线蓝牙4.0 男女家用/笔记本电脑/鼠标",
                            "pic":"https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360",
                            "specificationName":"银色",
                            "quantity":1,
                            "price":99
                        }
                    ]
                }
            ]
        }
    },
    methods:{
        goPage(page){
            this.$router.push({path:page});
        }
    }
}
</script>

<style lang="less" scoped>
.orderlswarp {
    background: #eee;

    .orderwarp {
        background:#fff;
        margin-bottom: 1rem;border-top:1px solid #eee;border-bottom:1px solid #eee;
        .header{
            display:flex;border-bottom:1px solid #eee;
            .ordernumber{
                width:50%;padding:1rem 0;
                text-indent: 1rem;
            }
            .orderstatus{
                width:50%;text-align:right;margin-right:1rem;padding:1rem 0;
            }
        }
        .ordgoods{
            padding:0 1rem;border-bottom:1px solid #eee;
            .storetlt{
                font-size:1.3rem;font-weight:400;padding:1rem 0;
            }
            .goods{
                display:flex;margin-bottom:0.5rem;
                .goodspic{
                    width:20%;
                    img{
                        width:100%;
                    }
                }
                .goodstlt{
                    width:80%;margin-left:1rem;
                    .goodsname{
                        margin-bottom:0.7rem;
                    }
                }
            }
        }
        .ordertools{
            display: flex;
            >div{
                width:50%;
                &.price{
                    font-size:1.2rem;margin-left:1rem;padding:1rem 0;
                    span{
                        color:#c33;font-weight:400;
                    }
                }
                &.btns{
                    padding:0.8rem 0;text-align:right;margin-right:1rem;
                    button{
                        border:0;padding:0.3rem 1rem;margin-left:0.5rem;border-radius:2px;
                        &.del{
                            background:#c33;color:#fff;
                        }
                    }
                }
            }
        }
    }
}
</style>


