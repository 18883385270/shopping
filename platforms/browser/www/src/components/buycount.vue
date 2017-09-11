/*
购买数量组件
*/
<template>
    <div class="buycountwarp">
        <div class="actionbtn" @click="reducecount()">-</div>
        <div class="buycount">
            <input v-model="value" type="number" readonly />
        </div>
        <div class="actionbtn" @click="addcount()">+</div>
    </div>
</template>

<script>
export default {
    props:['stock'],
    data() {
        return {
            value:1 ,
            goodstock:this.stock
        }
    },
    watch:{
        stock(val){
            this.goodstock=val
        }
    },
    methods:{
        addcount(){
            if(this.value<this.goodstock)
            {
                this.value++;
                // 通过 input 事件发出数值
                this.$emit('input', Number(this.value))
            }
        },
        reducecount(){
            if(this.value>1)
            {
                this.value--;
                // 通过 input 事件发出数值
                this.$emit('input', Number(this.value))
            }
        }
    }
}
</script>

<style lang="less" scoped>
.buycountwarp {
    width: 8.5rem;
    height: 2.4rem;
    display:flex;
    border:1px solid #eee;
    border-radius: 2px;
    background:#fff;
    .actionbtn {
        width: 2.5rem;
        text-align: center;
        font-size: 2.4rem;
        line-height: 2.2rem;font-weight:300;
    }
    .buycount{
        width:3.5rem;
        border-left:1px solid #eee;border-right: 1px solid #eee;font-size:1.5rem;line-height: 2.4rem;
        
        input{
            border:0;display:block;width:3.5rem;height:2.4rem;text-align: center;
        }
    }
}
</style>


