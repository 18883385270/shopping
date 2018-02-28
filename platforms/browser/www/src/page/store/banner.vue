<template>
<div class="banner">
            <div class="storeinfo">
                <div class="logo">
                    <img src="../../../dist/logo.png" alt="">
                </div>
                <div class="storename">
                    <div>
                        <p>{{StoreInfo.Name}}</p>
                        <span class="label">{{StoreInfo.Type}}</span>
                    </div>
                </div>
                <div class="tools">
                    <!-- <button>收藏</button> -->
                </div>
            </div>
        </div>
</template>


<script>

export default {
    props:['StoreInfo']
}
</script>

<style lang="less" scoped>
.banner {
    background: #333 url('../../../dist/storebanner.jpg') no-repeat center center;
    background-size:100% 100%;
    padding: 4rem 1rem 1rem 1rem;
    .storeinfo {
        display: flex;
        .logo {
            width: 20%;
            img {
                width: 100%;
                border-radius:3px;
            }
        }
        .storename {
            width: 65%;
            font-size: 1.3rem;
            padding: 1rem 1rem 0rem 1rem;
            color:#fff;
            .label {
                display: inline-block;
                background: #ffc64b;
                color: #fff;
                font-size: 1rem;
                border-radius: 3px;
                padding: 0.1rem 0.8rem;
                margin-top:0.5rem;
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