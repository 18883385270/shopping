<template>
    <div>
        <ul>
            <li class="storewarp" v-for="store in storelist">
                <p class="name">{{store.name}}</p>
                <p class="distance">
                    <svg>
                        <use xlink:href="#gps"></use>
                    </svg>
                    {{store.distance}}
                </p>
                <p class="address">{{store.address}}</p>
                <div class="btns">
                    <div>位置</div>
                    <div @click="goPage('/store')">线上店铺</div>
                    <div class="pay">线下消费</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            storelist:[
                {
                    "name":'文学问面包行',
                    "address":'宿豫区洪泽湖东路15号沿街',
                    "distance":'1.23Km'
                },
                {
                    "name":'漂亮的你美发店宿豫区店',
                    "address":'宿豫区洪泽湖东路15号沿街',
                    "distance":'1.23Km'
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
.storewarp {
    list-style: none;
    padding: 1rem 1rem 0 1rem;
    background: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-top: 1rem;
    .name {
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
    }
    .address {
        font-size: 1.2rem;
        color: #999;
    }
    .distance {
        float: right;
        font-size: 1.2rem;font-weight:400;color:#999;
        svg {
            width: 1.2rem;
            height: 1.2rem;
            fill: #999;
        }
    }
    .btns {
        display: flex;
        margin-top: 1.6rem;
        border-top: 1px solid #eee;
        >div {
            width: 33.3%;
            text-align: center;
            padding: 1.3rem 0;
            border-left: 1px solid #eee;
            font-size:1.3rem;
            font-weight: 400;
            &:first-child {
                border-left: 0;
            }
        }
        .pay{
            color:#096;
        }
    }
}
</style>


