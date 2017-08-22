<template>
    <div class="profilepgwp">
        <mi-header title="个人资料"></mi-header>
        <div class="tablerow mg-top20">
            <div class="tlt">我的头像</div>
            <div class="cnt">
                <img class="portrait" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1733071988,3600838707&fm=117&gp=0.jpg" />
            </div>
        </div>
        <div class="tablerow" @click="goPage('/me/profile/setnickname')">
            <div class="tlt">昵称</div>
            <div class="cnt">
                {{this.$store.state.global.userinfo.NickName}}
                <svg>
                    <use xlink:href="#rightarrowsline"></use>
                </svg>
            </div>
        </div>
        <!-- <div class="tablerow" @click="openSetGender">
            <div class="tlt">性别</div>
            <div class="cnt">
                {{this.$store.state.global.userinfo.gender}}
            </div>
        </div> -->
        <div class="tablerow" @click="openMyQrCodeHandle">
            <div class="tlt">二维码名片</div>
            <div class="cnt">
                <svg>
                    <use xlink:href="#qrcodeline"></use>
                </svg>
            </div>
        </div>
        <div class="tablerow mg-top20">
            <div class="tlt">手机号</div>
            <div class="cnt">
                {{this.$store.state.global.userinfo.Mobile|mobilehide}}
            </div>
        </div>
        <div class="tablerow" @click="goPage('/me/profile/expressaddress')">
            <div class="tlt">收货地址管理</div>
            <div class="cnt">
                <svg>
                    <use xlink:href="#rightarrowsline"></use>
                </svg>
            </div>
        </div>
        <div class="tablerow mg-top20" @click="goPage('/me/profile/changepassword')">
            <div class="tlt">修改登录密码</div>
            <div class="cnt">
                <svg>
                    <use xlink:href="#rightarrowsline"></use>
                </svg>
            </div>
        </div>
        <div class="tablerow mg-top20" @click="logout">
            <div class="tlt">退出登录</div>
            <div class="cnt">
                
            </div>
        </div>
        
        <!--弹出框-->
        <mi-modal ref="confirm" type="confirm" @confirmEvent="confirmLogout">
            <div slot="confirm" class="confirm">
                <p>确定退出？</p>
            </div>
        </mi-modal>
        <mi-toast ref='toast'></mi-toast>
        <!--弹出框-->
        <mi-modal ref="alert" type="pop" :isHeadShow="true" title="我的二维码">
            <div slot="modalbody" class="qrCodeWarp">
                <vue-q-art :config="config" :downloadButton="downloadButton"></vue-q-art>
                <p>扫描二维码，推荐朋友加入商城</p>
            </div>
        </mi-modal>
        <mi-popup ref="popup" title="更改性别">
            <div slot="modalbody" class="genderls">
                <div class="genderitem">
                    <label>
                        男
                        <input type="radio" id="radioman" name="gender" class="regular-radio" checked />
                        <label for="radioman"></label>
                    </label>
                </div>
                <div class="genderitem">
                    <label>
                        女
                        <input type="radio" id="radiowoman" name="gender" class="regular-radio" />
                        <label for="radiowoman"></label>
                    </label>
                </div>
            </div>
        </mi-popup>
    </div>
</template>

<script>
import header from '../../../components/header.vue'
import modal from '../../../components/modal.vue'
import toast from '../../../components/toast.vue'
import popup from '../../../components/popup.vue'
import VueQArt from 'vue-qart'
import * as api from '../../../api/account'

export default {
    components: {
        'mi-header': header,
        'mi-modal': modal,
        'mi-toast': toast,
        'mi-popup': popup,
        VueQArt
    },
    data() {
        return {
            config: {
                value: 'https://www.lq319.com',
                imagePath: './src/img/logo.png',
                filter: 'color'
            },
            downloadButton: false
        }
    },
    methods: {
        goPage(page) {
            this.$router.push({ path: page });
        },
        openMyQrCodeHandle() {
            this.$refs.alert.modalOpen();
        },
        openSetGender() {
            this.$refs.popup.modalOpen();
        },
        logout() {
            //退出modal
            this.$refs.confirm.modalOpen();
        },
        confirmLogout(num) {
            if(num==0){
                return false;
            }
            let alertFuc = (msg) => {
                const toast = this.$refs.toast;
                toast.show(msg);
                return false
            }
            let params = {};
            let self = this;
			self.$store.dispatch('remove_token', { token: '' });
            self.$store.dispatch('remove_userinfo', { userinfo: ''  });
            self.$store.dispatch('remove_walletinfo', { walletinfo: '' });
            self.$router.replace('/');
			/*
            api.LogoutApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        self.$store.dispatch('remove_token', { token: '' });
                        self.$router.replace('/');
                    } else {
                        alertFuc(res.data.Message);
                    }
                },
                err => {
                    self.$store.dispatch('remove_token', { token: '' });
                    alertFuc("网络访问错误~");
                }
            )*/
        }
    }
}
</script>

<style lang="less" scoped>


.confirm {
    padding: 1rem;
    font-size: 1.3rem;
}

.qrCodeWarp {
    padding: 3rem;
    text-align: center;
    img {
        width: 100%;
    }
    p {
        font-size: 1.3rem;
        margin-top: 1rem;
    }
}

.genderls {
    background: #fff;
    padding: 1rem;
    .genderitem {
        >label {
                
                display:inline-block;width:20rem;
                font-size: 1.3rem;
                line-height: 2rem;
            
        }
    }
}
</style>

