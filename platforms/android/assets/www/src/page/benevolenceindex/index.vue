<template>
    <div class="page_warp">
        <mi-benevolencetop></mi-benevolencetop>
        <mi-mybenevolence></mi-mybenevolence>
        <mi-getbenevolence></mi-getbenevolence>

        <div style="width: 100%;height: 6rem;"></div>
        <mi-tabbar :selected="2"></mi-tabbar>
    </div>
</template>

<script>
import benevolencetop from './benevolencetop.vue';
import mybenevolence from './mybenevolence.vue';
import getbenevolence from './getbenevolence.vue';

import tabbar from '../../components/tabbar.vue';

export default {
  components: {
        'mi-benevolencetop': benevolencetop,
        'mi-mybenevolence': mybenevolence,
        'mi-getbenevolence': getbenevolence,
        'mi-tabbar': tabbar
    },
    methods:{
       
    }
}
</script>

<style lang="less" scoped>
    .page_warp{
        width: 100%;height:100%;
    }
</style>


