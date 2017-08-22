<template>
    <div class="loginpage" :style="{height:bodyHeight}">
        <mi-header title="登录"></mi-header>
        <h1>账号密码登录</h1>
        <div class="formgrp">
            <div class="inpt">
                <input type="number" placeholder="请输入手机号" v-model="mobile">
            </div>
        </div>
        <div class="formgrp">
            <div class="inpt">
                <input type="password" placeholder="输入密码" v-model="password">
            </div>
        </div>
    
        <div class="loginbtn">
            <button class="button success" @click="login">登录</button>
        </div>
        <div class="bottomlink">
            <router-link to="" replace>免密登录</router-link>
            <router-link to="/login/getpwd">忘记密码</router-link>
            <router-link to="/register">注册账号</router-link>
        </div>
        <div class="protocol">注册/登录即代表同意
            <router-link to="/login/protocol">《五福天下商城用户使用协议》</router-link>
        </div>
        <mi-toast ref='toast'></mi-toast>
    </div>
</template>

<script>
import header from '../../components/header.vue';
import toast from '../../components/toast.vue';

import * as api from '../../api/account';
import * as checkJs from '../../utils/pubfunc';
import * as util from '../../utils/util.js';

export default {
    components: {
        'mi-header': header,
        'mi-toast': toast
    },
    data() {
        return {
            mobile: '',
            password: '',
            bodyHeight: '100%'
        }
    },
    mounted() {
        this.bodyHeight = util.screenSize().height + 'px';
    },
    methods: {
        login() {
            let alertFuc = (msg) => {
                const toast = this.$refs.toast;
                toast.show(msg);
                return false
            }


            let self = this;
            if (!checkJs.isPhone(this.mobile)) {
                alertFuc('请输入正确的手机号码！')
                return;
            }
            if (checkJs.isNullOrEmpty(this.password)) {
                alertFuc('请填写密码！')
                return;
            }

            let params = {
                Region: '+86',
                Mobile: this.mobile,
                Password: this.password
            }
            api.LoginApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        //保存登录凭证
                        self.$store.dispatch('update_token', {
                            token: res.data.UserInfo.Token
                        }).then(() => {
                            //存储用户信息
                            self.$store.dispatch('update_userinfo',{
                                userinfo:{
                                    Id:res.data.UserInfo.Id,
                                    NickName:res.data.UserInfo.NickName,
                                    Portrait:res.data.UserInfo.Portrait,
                                    Gender:res.data.UserInfo.Gender,
                                    Region:res.data.UserInfo.Region,
                                    Mobile:res.data.UserInfo.Mobile,
                                    Role:res.data.UserInfo.Role,
                                    StoreId:res.data.UserInfo.StoreId,
                                }
                            });
                            //存储钱包信息
                            self.$store.dispatch('update_walletinfo',{
                                walletinfo:{
                                    Id:res.data.WalletInfo.Id,
                                    AccessCode:res.data.WalletInfo.AccessCode,
                                    Cash:res.data.WalletInfo.Cash,
                                    Benevolence:res.data.WalletInfo.Benevolence,
                                    Earnings:res.data.WalletInfo.Earnings,
                                    YesterdayEarnings:res.data.WalletInfo.YesterdayEarnings
                                }
                            }).then(()=>{
                                self.$router.replace('/me');
                            });

                            
                        });
                    } else {
                        alertFuc(res.data.Message)
                    }
                },
                err => {
                    alertFuc('网络错误，请稍后再试');
                }
            )
        }
    }
}
</script>


<style lang="less" scoped>
.loginpage {
    padding: 0 2rem;
    background: #fff;
}

h1 {
    font-size: 2rem;
    font-weight: 300;
    margin-top: 3rem;
}

.formgrp {
    margin-top: 2rem;

    .inpt {
        border-bottom: 1px solid #eee;
        padding: 1rem 0;
        input {
            width: 90%;
            background: transparent;
            font-size: 1.3rem;
            border: none;
            &:focus {
                outline: none;
            }
        }
    }
}

.loginbtn {
    margin-top: 3rem;
    
}

.bottomlink {
    text-align: center;
    padding: 2rem 0;
    a {
        text-align: center;
        color: #999;
        text-decoration: none;
        font-size: 1.2rem;
        padding: 0 1rem;
    }
}

.protocol {
    margin-top:2rem;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: #999;
    a {
        color: #09c;
        text-decoration: none;
    }
}
</style>

