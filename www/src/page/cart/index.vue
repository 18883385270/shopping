<template>
    <div>
        <div class="pageheader">
            <div class="left">
                购物车
            </div>
            <div class="center"></div>
            <div class="right">
                <svg @click="goPage('scannerpage')">
                    <use xlink:href="#qrscanline"></use>
                </svg>
            </div>
        </div>
        <mi-cart></mi-cart>
        <div style="height:4rem;"></div>
        <mi-tabbar :selected="3"></mi-tabbar>
    </div>
</template>

<script>
import tabbar from '../../components/tabbar.vue';
import cart from './cart.vue';


export default {
    components:{
        'mi-cart':cart,
        'mi-tabbar':tabbar
    },
    methods:{
        goPage(name){
            this.$router.push({name:name});
        },
    }
}
</script>

<style lang="less" scoped>
   
</style>

