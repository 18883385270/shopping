<template>
    <div class="pagewarper">
        <mi-header title="购物车"></mi-header>
        <mi-cart></mi-cart>
        <div style="height:6rem;"></div>
        <mi-tabbar :selected="3"></mi-tabbar>
    </div>
</template>

<script>
import header from '../../components/header.vue';
import tabbar from '../../components/tabbar.vue';
import cart from './cart.vue';


export default {
    components:{
        'mi-header':header,
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

