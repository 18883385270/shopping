<template>
    <div>
        <mi-header title="店铺首页"></mi-header>
        <!-- <mi-storesearch></mi-storesearch> -->
        <div class="banner">
            <div class="storeinfo">
                <div class="logo">
                    <img src="https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360" alt="">
                </div>
                <div class="storename">
                    <div>
                        <p>耐克专营店宿迁店</p>
                        <span class="label">公司自营</span>
                    </div>
                </div>
                <div class="tools">
                    <button>收藏</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import header from '../../components/header.vue'
import storesearch from './search.vue'
import * as api from '../../api/store'

export default {
    components: {
        'mi-header': header,
        'mi-storesearch': storesearch
    },
    data(){
        return{
            StoreId:'',
            StoreInfo:{},
            Goodses:[]
        }
    },
    mounted(){
        this.StoreId=sessionStorage.StoreId
        this.fatchData()
    },
    methods:{
        fatchData(){
            let params = {
                Id:this.StoreId
            };
            api.HomeInfoApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        this.StoreInfo=res.data.StoreInfo
                        this.Goodses=res.data.Goodses
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
.banner {
    background: #fff;
    padding: 1rem;
    .storeinfo {
        display: flex;
        .logo {
            width: 12%;
            img {
                width: 100%;
            }
        }
        .storename {
            width: 75%;
            font-size: 1.3rem;
            padding-left: 1rem;
            .label {
                display: inline-block;
                background: #c03;
                color: #fff;
                font-size: 1rem;
                border-radius: 1rem;
                padding: 0.1rem 0.8rem;
            }
        }
        .tools {
            width: 15%;
            text-align:right;
            button{
                border:1px solid #eee;
                padding:0.2rem 1rem;
                font-size:1rem;
                background:#fff;
            }
        }
    }
}
</style>


