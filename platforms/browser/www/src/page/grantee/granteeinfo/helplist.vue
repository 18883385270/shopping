/*
帮助人列表
*/
<template>
    <div class="helplist">
        <div class="head">
            <div class="title">已有52人帮帮助过Ta</div>
            <div class="platformdesc"></div>
        </div>
        <div class="helpls">
            <ul>
                <li v-for="help in helplists">
                    <div class="port">
                        <img :src="help.portrait" />
                    </div>
                    <div class="cont">
                        <p>{{help.name}} 支持了 {{help.count}}元</p>
                        <p class="time">{{help.createdtime}}</p>
                        <p class="says">{{help.says}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            helplists: [
                {
                    "name":"大海",
                    "portrait":"https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360",
                    "createdtime":"7分钟前",
                    "count":20,
                    "says":"加油，会好起来的"
                },
                {
                    "name":"大海",
                    "portrait":"https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360",
                    "createdtime":"7分钟前",
                    "count":20,
                    "says":"加油，会好起来的,祝早日康复，加油，year"
                },
                {
                    "name":"大海",
                    "portrait":"https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360",
                    "createdtime":"7分钟前",
                    "count":20,
                    "says":"加油，会好起来的"
                },
                {
                    "name":"大海",
                    "portrait":"https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360",
                    "createtime":"7分钟前",
                    "count":20,
                    "says":"加油，会好起来的"
                },
                {
                    "name":"大海",
                    "portrait":"https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360",
                    "createdtime":"7分钟前",
                    "count":20,
                    "says":"加油，会好起来的"
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.helplist {
    background:#fff;border-top:1px solid #ddd;margin-top:1rem;
    .head {
        border-bottom: 1px solid #ddd;
        width: 100%;
        display: flex;
        .title {
            font-size: 1.3rem;
            line-height: 2rem;
            padding: 1rem;
            width: 50%;
        }
        .platformdesc {
            width: 50%;
            color: green;
            line-height: 2rem;
            padding: 1rem;
            text-align: right;
            font-weight: 500;
        }
    }
    .helpls{
        padding:0 1rem;font-size:1.3rem;
        li{
            display:flex;list-style:none;border-bottom:1px solid #eee;padding:1rem 0;
            .port{
                width:4rem;padding-right:1rem;
                text-align: center;
                img{
                    width:100%;border-radius: 50%;
                }
            }
            .cont{
                font-size:1rem;
                .time{
                    color:#999;padding:0.2rem 0;
                }
                .says{
                    background:#eee;padding:0.2rem 1rem;border-radius: 2px;
                }
            }

        }
    }
}
</style>


