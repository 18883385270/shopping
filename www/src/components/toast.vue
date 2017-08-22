/*
this.$refs.toast.show('请输入正确得手机号码!')
 */
<template>
    <div class="toast placemiddle" transition="pop-fade" v-show="isShow">
        <span class="toasttext">{{ message }}</span>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isShow:false,
            message:'提示框'
        }
    },
    methods:{
        show(msg){
            //解决vue的变量在settimeout内部效果失效方法
            //定义一个self暂存this
            //再改变变量的值，则生效啦
            var self=this; 
            this.message=msg
            this.isShow=true;
            setTimeout(function() {
                self.isShow=false;
            }, 3000);
        }
    }
}
</script>

<style lang="less" scoped>
.toast {
    position: fixed;
    max-width: 90%;
    border-radius: 3rem;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    box-sizing: border-box;
    padding: 0.5rem 2rem;
    text-align: center;
    z-index: 1000;

    &.placemiddle {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    
    .toasttext {
        display: block;
        color: #fff;
        text-align: center;font-size:1.3rem;
    }
}

.pop-fade-transition {
    transition: opacity .3s linear;
}

.pop-fade-enter,
.pop-fade-leave {
    opacity: 0;
}
</style>


