<template>
    <div>
        <mi-header title="激励信息"></mi-header>
        <div class="norecord" v-if="!IncentiveLogs.length">
            <img src="../../../../../dist/empty.png" alt="">
            <p>您还没有激励记录</p> 
        </div>
        <div class="card" v-for="Incentive in IncentiveLogs">
            <div class="tltwp">
                <div class="time">
                    <svg>
                        <use xlink:href="#clockline"></use>
                    </svg>
                    激励日期：{{Incentive.CreatedOn}}</div>
            </div>
            <div class="fenge">
                <span class="cutter left"></span>
                <span class="cutter right"></span>
            </div>
            <div class="cntwp">
                <div class="item">
                    <p>
                        <svg>
                            <use xlink:href="#integral"></use>
                        </svg>
                    </p>
                    <p class="benamount">-{{Incentive.BenevolenceAmount |currency('',4)}}</p>
                    <p>善心</p>
                </div>
                <div class="fenge">
                    <p>
                        <svg>
                            <use xlink:href="#rightarrowsline"></use>
                        </svg>
                    </p>
                    <p class="action">
                        善心激励
                    </p>
                </div>
                <div class="item">
                    <p>
                        <svg>
                            <use xlink:href="#cash"></use>
                        </svg>
                    </p>
                    <p class="benamount">+{{Incentive.Amount |currency('',2)}}</p>
                    <p>人民币</p>
                </div>
            </div>
            <div class="remark">
                <p class="fee">{{Incentive.Remark}}</p>
                <p class="fee">手续费：{{Incentive.Fee |currency('￥',2)}}</p>
            </div>
        </div>
        <div class="bottomline">
            我会偷懒，仅显示最近5次激励~
        </div>
    </div>
</template>

<script>
import header from '../../../../components/header.vue';
import * as api from '../../../../api/wallet';

export default {
    components: {
        'mi-header': header
    },
    data(){
        return{
            IncentiveLogs:[]
        }
    },
    mounted(){
        this.fatchData()
    },
    methods: {
        fatchData(){
            let params = {};
            api.IncentiveLogsApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        this.IncentiveLogs=res.data.IncentiveLogs
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
.norecord{
    padding:3rem 0 1rem 0;
    text-align:center;
    font-size:1.3rem;
    img{
        width:20rem;
    }
}
.card {
    background-image:linear-gradient(to top,#33C9BE,#33C9BE);
    margin: 2rem 1rem 1rem 1rem;
    color: #fff;
    border-top-left-radius:3px;
    border-top-right-radius:3px;
    .tltwp {
        .time {
            padding: 1rem;
            text-align: center;
            font-size:1.3rem;
            svg{
                width:1.3rem;
                height:1.3rem;
                fill:#fff;
            }
        }
    }
    .fenge {
        position:relative;
        .cutter {
            display: inline-block;
            width: 1.2rem;
            height: 1.2rem;
            position:absolute;
            border-radius: 50%;
            background: #fff;
        }
        .left{
            top:-0.65rem;
            left:-0.7rem;
        }
        .right {
            right: -0.7rem;
            top:-0.65rem;
        }
    }
    .cntwp {
        display: flex;
        padding: 2rem 0;
        border-top: 1px dashed #2DB0A6;
        .item {
            width: 40%;
            text-align: center;
            svg {
                width: 2rem;
                height: 2rem;
                fill: #fff;
            }
            .benamount {
                font-size: 2rem;
                font-weight:300;
                padding: 0.5rem 0;
            }
        }
        .fenge{
            width:20%;
            text-align:center;
            svg{
                width:2rem;
                height:2rem;
                fill:#fff;
                margin-top:0.5rem;
            }
            .action{
                padding-top:0.5rem;
            }
            
        }
    }
    .remark{
        display:flex;
        .fee{
            width:50%;
            text-align:center;
            padding:0.8rem 1rem;
            background:#2DAEA5;
        }
    }
}
.bottomline{
    text-align:center;
    border-top:1px solid #eee;
    padding:0.5rem;
}
</style>


