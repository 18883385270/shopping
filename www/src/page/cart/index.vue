<template>
    <div class="pagewarper">
        <div class="pageheader">购物车</div>
        <mi-cart></mi-cart>
        <div style="height:6rem;"></div>
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
    }
}
</script>

<style lang="less" scoped>
    
    .pagewarper{
        padding:0;
    }
</style>

