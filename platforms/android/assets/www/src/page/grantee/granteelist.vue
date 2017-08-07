<template>
    <div class="granteelistwarp">
        <ul class="listwarp">
            <li v-for="grantee in grantees" @click="goPage(grantee.id)">
                <div class="name">
                    <span v-if="grantee.isauthed" class="authlable">真实认证</span> {{grantee.name}}
                </div>
                <div class="why">致贫原因：{{grantee.why}}</div>
                <div class="desc">{{grantee.desc}}</div>
                <div class="pics">
                    <img v-for="img in grantee.pics" :src="img" />
                </div>
                <div class="statisticsinfo">
                    <span>已受助：<span class="price">{{grantee.statisticsInfo.total}}</span> 元</span>
                    <span>受助物资：<span class="price">{{grantee.statisticsInfo.goods}}</span> 元</span>
                    <span><span class="price">{{grantee.statisticsInfo.count}}</span> 次支持</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            grantees: [
                {
                    "id":1,
                    "name": "柳无眉",
                    "why": "孤寡老人",
                    "isauthed": true,
                    "desc": "这里说明凯盛家纺龙岗街道快递费,这里说明凯盛家纺龙岗街道快递费，到付即可的开发的",
                    "pics": ["https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360", "https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360", "https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360"],
                    "statisticsInfo": {
                        "total": 234,
                        "goods": 123,
                        "count": 23
                    }
                },
                {
                    "id":2,
                    "name": "柳无眉",
                    "why": "孤寡老人",
                    "isauthed": false,
                    "desc": "这里说明凯盛家纺龙岗街道快递费，到付即可的开发的",
                    "pics": ["https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360", "https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360", "https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360"],
                    "statisticsInfo": {
                        "total": 234,
                        "goods": 123,
                        "count": 23
                    }
                },
                {
                    "id":3,
                    "name": "柳无眉",
                    "why": "孤寡老人",
                    "isauthed": true,
                    "desc": "这里说明凯盛家纺龙岗街道快递费，到付即可的开发的",
                    "pics": ["https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360", "https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360", "https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360"],
                    "statisticsInfo": {
                        "total": 234,
                        "goods": 123,
                        "count": 23
                    }
                },
                {
                    "id":4,
                    "name": "柳无眉",
                    "why": "孤寡老人",
                    "isauthed": true,
                    "desc": "这里说明凯盛家纺龙岗街道快递费，到付即可的开发的",
                    "pics": ["https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360", "https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360", "https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360"],
                    "statisticsInfo": {
                        "total": 234,
                        "goods": 123,
                        "count": 23
                    }
                }
            ]
        }
    },
    methods:{
        goPage(id){
            console.log(id);
            this.$router.push({path:"/grantee/info"});
        }
    }
}
</script>

<style lang="less" scoped>
.granteelistwarp {
    .listwarp {
        li {
            list-style: none;
            background: #fff;
            margin-top: 1rem;
            padding: 1.5rem;
            .name {
                font-size: 1.3rem;
                .authlable{
                    font-size:1rem;
                    float:right;display:inline-block;padding:0.3rem 0.5rem;color:#fff;background:green;
                }
            }
            .why{
                font-size:1rem;color:#999;
            }
            .desc{
                color:#666;padding:1rem 0;font-size:1rem;
            }
            .pics {
                img {
                    width: 30%;
                    margin-right: 5%;
                    &:last-child{
                        margin-right: 0;
                    }
                }
            }
            .statisticsinfo{
                padding:0.5rem 0;
                >span{
                    display:inline-block;font-size:1.2rem;margin-right:1rem;text-align: center;
                    font-weight: 400;
                    .price{
                        color:red;
                    }
                }
            }
        }
    }
}
</style>


