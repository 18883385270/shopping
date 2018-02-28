<template>
    <div>
        <mi-header title="福豆指数"></mi-header>
        <mi-benevolencetop :BenevolenceIndex="BenevolenceIndex"></mi-benevolencetop>
        <div class="divider"></div>
        <mi-mybenevolence></mi-mybenevolence>
        <div class="divider"></div>
        <mi-getbenevolence></mi-getbenevolence>
        <div class="divider"></div>
    </div>
</template>

<script>
import header from '../../../components/header.vue'
import benevolencetop from './benevolencetop.vue'
import mybenevolence from './mybenevolence.vue'
import getbenevolence from './getbenevolence.vue'
import * as api from '../../../api/benevolenceindex'

export default {
  components: {
        'mi-header':header,
        'mi-benevolencetop': benevolencetop,
        'mi-mybenevolence': mybenevolence,
        'mi-getbenevolence': getbenevolence,
    },
    data(){
        return{
            BenevolenceIndex:{
                CurrentBenevolenceIndex:0,
                StoreCount:0,
                ConsumerCount:0,
                PasserCount:0,
            }
        }
    },
    mounted(){
        this.GetInfo();
    },
    methods:{
       GetInfo(){
            let params = {};
            api.InfoApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        this.BenevolenceIndex.CurrentBenevolenceIndex=res.data.CurrentBenevolenceIndex;
                        this.BenevolenceIndex.StoreCount=res.data.StoreCount;
                        this.BenevolenceIndex.ConsumerCount=res.data.ConsumerCount;
                        this.BenevolenceIndex.PasserCount=res.data.PasserCount;
                        this.BenevolenceIndex.AmbassadorCount=res.data.AmbassadorCount;
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
    
</style>


