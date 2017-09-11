<template>
    <div>
        <mi-header title="设置我的推荐人"></mi-header>
        <div class="setmyparentwp">
            <div>
                输入您的推荐人的手机号
            </div>
            <input type="number" placeholder="输入推荐人手机号" v-model="Mobile">
            <button class="button success" @click="submitData">确定</button>
        </div>
        <mi-toast ref="toast"></mi-toast>
    </div>
</template>

<script>
import header from '../../../components/header.vue'
import toast from '../../../components/toast.vue'
import * as checkJs from '../../../utils/pubfunc'
import * as api from '../../../api/account'

export default {
    components: {
        'mi-header': header,
        'mi-toast':toast
    },
    data(){
        return{
            Mobile:''
        }
    },
    methods:{
        submitData(){
            let alertFuc = (msg) => {
                const toast = this.$refs.toast;
                toast.show(msg);
                return false
            }

            let self = this;
            if (!checkJs.isPhone(this.Mobile)) {
                alertFuc('请输入正确的手机号码！')
                return;
            }
            let params = {
                Mobile:this.Mobile
            };
            api.SetMyParentApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        this.$router.go(-1);
                    } else {
                        alertFuc(res.data.Message);
                    }
                },
                err => {
                    alertFuc('网络错误,请稍后再试');
                }
            )
        }
    }
}
</script>

<style lang="less" scoped>
    .setmyparentwp{
        margin-top:1.5rem;
        padding:1rem;
        text-align:center;
        >div{
            padding-bottom:1rem;
        }
        input{
            display:block;
            padding:1.3rem 0;
            font-size:1.3rem;
            text-indent:1.3rem;
            width:100%;
            border:0;
            background:#fff;
            margin-bottom:1rem;
            border-bottom:1px solid #eee;
            &:focus{
                outline:none;
            }
        }
    }
</style>


