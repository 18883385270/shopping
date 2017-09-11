<template>
    <div class="mobilevfwp">
        <mi-header title="设置支付密码"></mi-header>
        <div class="desc">设置6为数字支付密码
        </div>
        <div class="codeinput">
            <input type="number"  v-model="accesscode" maxlength="6" pattern="[0-9]*">
            <button class="button success" @click="setaccesscode">设置</button>
        </div>
        <div class="desc">
          为更好的体验，商城余额付款，转账，提现等将全部用支付密码验证
        </div>
        <mi-toast ref="toast"></mi-toast>
    </div>
</template>

<script>
import header from '../../../../components/header.vue'
import toast from '../../../../components/toast.vue'
import * as api from '../../../../api/wallet';
import * as checkJs from '../../../../utils/pubfunc'
import * as util from '../../../../utils/util.js';

export default {
    components: {
        'mi-header': header,
        'mi-toast':toast
    },
    data() {
        return {
            accesscode:'',
            token:''
        }
    },
    mounted() {
        
        //检查是否验证
        var verify= sessionStorage.getItem('verify') || JSON.stringify({verifypage:'setpaypassword',verifyed:false});
        if(verify)
        {
            verify=JSON.parse(verify)
            if(!verify.verifyed)
            {
                sessionStorage.setItem('verify',JSON.stringify(verify));
                this.$router.replace({path:'/me/verify'});
            }
            
        }
    },
    methods:{
        
        setaccesscode(){
            let alertFuc = (msg) => {
                const toast = this.$refs.toast;
                toast.show(msg);
                return false
            }

            let self = this;
            if (!checkJs.isPayPassword(this.accesscode)) {
                alertFuc('请填写6位数字')
                return;
            }

            let params = {
                AccessCode:this.accesscode
            };

            api.SetAccessCodeApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        console.log('验证成功');
                        this.$router.replace({path:'/wallet'});
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
.desc {
    margin-top: 3rem;
    text-align: center;
    font-size:1.3rem;
    padding:0 3rem;
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
            text-indent: 2rem;
            letter-spacing: 4rem;
            background: #efefef url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNi42NSA1Ij48dGl0bGU+cGF5cGFzc3dvcmRiZzwvdGl0bGU+PGcgaWQ9IuWbvuWxgl8yIiBkYXRhLW5hbWU9IuWbvuWxgiAyIj48ZyBpZD0i5Zu+5bGCXzEtMiIgZGF0YS1uYW1lPSLlm77lsYIgMSI+PGxpbmUgeDE9IjAuMDMiIHgyPSIwLjAzIiB5Mj0iNSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2RkZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MC4wNTAwMDAwMDA3NDUwNTgwNnB4Ii8+PGxpbmUgeDE9IjcuMzMiIHgyPSI3LjMzIiB5Mj0iNSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2RkZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MC4yNXB4Ii8+PGxpbmUgeDE9IjE0LjYzIiB4Mj0iMTQuNjMiIHkyPSI1IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZGRkO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDowLjI1cHgiLz48bGluZSB4MT0iMjEuOTMiIHgyPSIyMS45MyIgeTI9IjUiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNkZGQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjAuMjVweCIvPjxsaW5lIHgxPSIyOS4yMyIgeDI9IjI5LjIzIiB5Mj0iNSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2RkZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MC4yNXB4Ii8+PGxpbmUgeDE9IjM2LjUzIiB4Mj0iMzYuNTMiIHkyPSI1IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZGRkO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDowLjI1cHgiLz48L2c+PC9nPjwvc3ZnPg==") no-repeat left center;
            background-size: 23.3rem;
            overflow: hidden;
        }
    }
}
</style>

