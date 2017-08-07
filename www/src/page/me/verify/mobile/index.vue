<template>
    <div class="mobilevfwp" :style="{height:bodyHeight}">
        <mi-header title="手机验证"></mi-header>
        <div class="desc">验证码将发送到尾号为 {{mobile}} 的手机上，请获取验证码
            <p>
               <timerbtn :mobile="mobile" :second="60" @sendmsg="sendmsgHandler"></timerbtn>
            </p>
        </div>
        <div class="codeinput">
            <input type="number" placeholder="短信验证码" v-model="code">
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
import util from '../../../../utils/util.js';

export default {
    components: {
        'mi-header': header,
        'mi-toast':toast,
        timerbtn
    },
    data() {
        return {
            mobile: '',
            code:'',
            token:'',
            bodyHeight: '100%'
        }
    },
    mounted() {
        this.bodyHeight = util.screenSize().height + 'px';
        this.mobile=this.$store.state.global.userinfo.mobile;
    },
    methods:{
        sendmsgHandler() {
            console.log(this.mobile);
            let params = {
                Mobile: this.mobile
            };
            api.SendMsgCodeApi(params).then(
                res => {
                    if (res.data.Code == 200){
                        console.log(res.data);
                        this.token=res.data.Token;
                        console.log(this.token);
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
            if (checkJs.isNullOrEmpty(this.code)) {
                alertFuc('请填写验证码！')
                return;
            }

            let params = {
                MsgCode:this.code,
                Token:this.token
            }

            api.VerifyMsgCodeApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        console.log('验证成功');
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


<style lang="less" src="../../../../img/common.less"></style>
<style lang="less" scoped>
.desc {
    margin-top: 3rem;
    text-align: center;
}

.mobilevfwp {
    width: 100%;
    background:#fff;
    .codeinput {
        text-align: center;
        padding: 3rem;
        input {
            width: 100%;
            border: 1px solid #ccc;
            font-size: 1.3rem;
            padding:1.3rem 0;
            text-indent: 1rem;
        }
    }
}
</style>

