<template>
    <div>
        <mi-header title="店铺首页"></mi-header>
        <mi-storesearch></mi-storesearch>
        <div class="banner">    
            <div class="storeinfo">
                <div class="logo">
                    <img src="https://i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp?width=360&height=360" alt="">
                </div>
                <div class="storename">
                    <div>
                        <p>耐克专营店宿迁店</p>
                        <span class="self">公司自营</span> </div>
                </div>
                <div class="collect">
                    <svg><use xlink:href="#star"></use></svg>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import header from '../../components/header.vue';
import storesearch from './search.vue';

export default {
    components: {
        'mi-header': header,
        'mi-storesearch': storesearch
    }
}
</script>

<style lang="less" scoped>
.banner {
    background: #096;
    padding:2rem 1rem 0.5rem 1rem;
    .storeinfo {
        .logo {
            width: 7rem;
            background: #fff;
            border: 1px solid #ddd;
            margin: auto;
            img {
                width:100%;
            }
        }
        .storename {
            color:#fff;text-align:center;
            font-size: 1.4rem;
            font-weight: 400;
            padding: 0.5rem 1rem;
            .self {
                display: inline-block;
                background: #c03;
                color: #fff;
                font-size: 1.1rem;
                border-radius: 2px;
                padding: 0.2rem 0.8rem;
                margin-right: 1rem;
            }
            
        }
        .collect{
            text-align: right;
            svg{
                width:2rem;height:2rem;fill:#fff;
            }
        }
    }
}
</style>


