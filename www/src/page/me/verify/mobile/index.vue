<template>
    <div>
        <mi-header title="手机验证"></mi-header>
        <div class="text-gray text-center marg-top-xlg">验证码将发送到尾号为 {{Mobile |mobilehide}} 的手机上，请获取验证码
            <p class="marg-top-lg">
               <timerbtn :mobile="Mobile" :second="60" @sendmsg="sendmsgHandler"></timerbtn>
            </p>
        </div>
        <div class="codeinput">
            <input type="number" placeholder="短信验证码" v-model="MsgCode">
            <button class="button success" @click="verifymsgcode">验证</button>
        </div>
        <mi-toast ref="toast"></mi-toast>
    </div>
</template>

<script>
import header from '../../../../components/header.vue'
import timerbtn from '../../../../components/timerbtn.vue'
import toast from '../../../../components/toast.vue'
import * as api from '../../../../api/account';
import * as checkJs from '../../../../utils/pubfunc'
import * as util from '../../../../utils/util.js';

export default {
    components: {
        'mi-header': header,
        'mi-toast':toast,
        timerbtn
    },
    data() {
        return {
            Mobile: '',
            MsgCode:'',
            Token:''
        }
    },
    mounted() {
        this.Mobile=this.$store.state.global.userinfo.Mobile;
    },
    methods:{
        sendmsgHandler() {
            console.log(this.Mobile);
            let params = {
                Mobile: this.Mobile
            };
            api.SendMsgCodeApi(params).then(
                res => {
                    if (res.data.Code == 200){
                        this.Token=res.data.Token;
                    }
                    else{
                        alertFun(res.data.Message);
                    }
                }, err => {
                    console.log('服务访问错误~');
                }
            )
        },
        verifymsgcode(){
            let alertFuc = (msg) => {
                const toast = this.$refs.toast;
                toast.show(msg);
                return false
            }

            let self = this;
            if (checkJs.isNullOrEmpty(this.MsgCode)) {
                alertFuc('请填写验证码！')
                return;
            }

            let params = {
                MsgCode:this.MsgCode,
                Token:this.Token
            }

            api.VerifyMsgCodeApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        var verify= JSON.parse(sessionStorage.verify);
                        if(!checkJs.isNullOrEmpty(verify))
                        {
                            verify.verifyed=true;//已验证
                        }
                        sessionStorage.verify= JSON.stringify(verify);
                        //跳转到页面
                        this.$router.replace({name:verify.verifypage});
                    } else {
                        alertFuc(res.data.Message)
                    }
                },
                err => {
                alertFuc('服务访问错误~');
                }
            )
        }
    }
}
</script>


<style lang="less" scoped>

    .codeinput {
        text-align: center;
        padding: 1rem;
        input {
            width: 100%;
            border: 1px solid #ccc;
            font-size: 1.3rem;
            padding:1.3rem 0;
            text-indent: 1rem;
        }
    }
</style>

