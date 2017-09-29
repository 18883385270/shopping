<template>
    <span>
        <button class="verifcode" type="button" @click="runs"  :disabled="disabled || time > 0">
            {{ text }}
        </button>
        <mi-toast ref="toast"></mi-toast>
    </span>
</template>

<script>
import toast from './toast.vue';

export default {

    props: {
        second: {
            type: Number,
            default: 60
        },
        mobile: {
            type:String,
            default:''
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    components: {
        'mi-toast': toast
    },
    data: function () {
        return {
            time: 0,
            timeFlag: false
        }
    },
    methods: {
         runs() {
            if (!this.mobile) {
                this.$refs.toast.show('请输入手机号码');
            } else if (!(/^1[34578]\d{9}$/.test(this.mobile))) {
                this.$refs.toast.show('手机号格式不正确');
            } else {
                let data = { mobile: this.mobile}
                try {
                    //const resp = await getMeCodeApi(data)
                    this.time = this.second;
                    this.timeFlag = true;
                    this.timer();
                    this.$emit('sendmsg')
                } catch (e) {
                    //当用户获取了三次短信验证码之后
                    // 再次点击了获取短信验证码，返回{{status_code:201}}我们会要求用户先填写图片验证码
                    //这里我们要emit一个事件，触发父组件图片验证码启动
                    this.$refs.toastup.show(e.msg)
                    this.$emit('senderr', e)
                }
            }
        },
        timer() {
            if (this.time > 0) {
                this.time--;
                setTimeout(this.timer, 1000);
            }
        }
    },
    computed: {
        text: function () {
            if (this.timeFlag === false) {
                return '获取验证码'
            } else {
                return this.time > 0 ? this.time + 's' : '重新获取';
            }

        },
        style: function () {
            if (this.time > 0) {
                return this.style = 'phone-verifcode-out'
            } else {
                return this.style = 'phone-verifcode'
            }
        }
    },
    mounted() {

    }
}
</script>

<style lang="less" scoped>
.verifcode {
    line-height: 2rem;
    font-size: 1.3rem;
    background:#fff;
    border:0;
    &:active{
        outline: none;
    }
}

</style>


