<template>
    <div>
        <mi-header title="福豆排行榜"></mi-header>
        <div class="topthreebg">
            <div class="text-white pd-btn-sm">福豆排名随时更新</div>
            <div class="topthreewp">
                <div class="item" v-for="WalletAlis in TopThree" :key="WalletAlis.Id">
                    <p class="touxiang">
                        <img :src="WalletAlis.Portrait" alt="">
                    </p>
                    <p class="text-md pd-top-sm">{{WalletAlis.NickName}}</p>
                    <p class="text-md text-bold">{{WalletAlis.Benevolence |currency('',0)}}</p>
                </div>
            </div>
        </div>
        <div>
            <div class="listwp" v-for="(WalletAlis,index) in Last" :key="WalletAlis.Id">
                <div class="index">{{index+4}}</div>
                <div class="port">
                    <img :src="WalletAlis.Portrait" alt="">
                </div>
                <div class="name">
                    {{WalletAlis.NickName}}
                </div>
                <div class="amount">
                    {{WalletAlis.Benevolence |currency('',0)}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import header from '../../../components/header.vue'
import * as api from '../../../api/benevolenceindex'

export default {
    components:{
        'mi-header':header
    },
    data(){
        return{
            WalletAlies:[],
            TopThree:[],
            Last:[]
        }
    },
    mounted(){
        this.fatchData()
    },
    methods: {
        fatchData(){
            let params = {};
            api.BenevolenceRankApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        this.WalletAlies=res.data.WalletAlises;
                        this.TopThree=this.WalletAlies.slice(0,3)
                        this.Last=this.WalletAlies.slice(3,this.WalletAlies.length)
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
   .topthreebg{
        background:#f66;
        padding:1rem;
    } 
    .topthreewp{
        display:flex;
        .item{
            width:33.3%;
            padding:1rem;
            text-align:center;
            color:#fff;
            .touxiang{
                img{
                    width:3.5rem;
                    height:3.5rem;
                    border-radius:5px;
                    border:2px solid #fff;
                }
            }
        }
    }
    .listwp{
        display:flex;
        text-align:center;
        border-bottom:1px dashed #eee;
        .index{
            width:15%;
            text-align:center;
            line-height:5rem;
            font-size:1.6rem;
            font-weight:600;
            color:#999;
            font-style:italic;
        }
        .port{
            width:15%;
            padding:1rem 1rem 1rem 0;
            img{
                width:3.5rem;
                height:3.5rem;
                border-radius:5px;
            }
        }
        .name{
            width:40%;
            font-size:1.3rem;
            line-height:5rem;
            text-align:left;
        }
        .amount{
            width:30%;
            font-size:1.5rem;
            line-height:5rem;
            padding-right:1rem;
            text-align:right;
            font-weight:bold;
            color:#999;
        }
    }
</style>
