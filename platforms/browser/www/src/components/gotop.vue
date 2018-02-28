<template>
    <div class="gotop-box" v-show="toTop" @click="goToTop">
        <div class="gotop" >
            <svg>
                <use xlink:href="#uparrowsline"></use>
            </svg>
            <p>顶部</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            toTop:false
        }
    },
    mounted() {
        this.$nextTick(function () {  
            window.addEventListener('scroll', this.needToTop);  //滚动事件监听  
        });
    },
    methods: {
        goToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0
        },
        needToTop(){
            let curHeight = document.documentElement.scrollTop || document.body.scrollTop;  
            let viewHeight = document.documentElement.clientHeight;  
            if (curHeight > viewHeight + 100) {  
                this.toTop = true;  
            }  
            else  
            {  
                this.toTop = false;  
            } 
        }
    }
}
</script>

<style lang="less" scoped>
.gotop-box {
    position: fixed;
    width:3.5rem;
    height:3.5rem;
    right: 2rem;
    bottom: 5rem;
    text-align:center;
    border:1px solid #eee;
    background:#fff;
    border-radius:50%;
    cursor: pointer;
    z-index:2;
    .gotop {
        padding-top:0.2rem;
        svg{
            width:1.5rem;
            height:1.2rem;
        }
        
    }
}
</style>