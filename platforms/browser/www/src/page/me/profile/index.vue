<template>
    <div class="profilepgwp" :style="{height:bodyHeight}">
        <mi-header title="个人资料"></mi-header>
        <div class="divider"></div>
        <div class="flexwarp bg-white pd-topbtn bd-btn">
            <div class="wd-80p"><p class="text-md marg-lf">我的头像</p></div>
            <div class="wd-20p marg-rt">
                <img class="wd-100p img-round" @click="openSelectImg($event)" :src="this.$store.state.global.userinfo.Portrait" />
                <input type="file" id="fileElem" multiple accept="image/*" style="width:5rem;height:5rem;background:#000;position:absolute;right:1rem;opacity:0" @change="handleFiles($event)">
            </div>
        </div>
        <div class="flexwarp bg-white pd-topbtn bd-btn" @click="goPage('setnickname')">
            <div class="wd-50p"><p class="text-md marg-lf">昵称</p></div>
            <div class="wd-50p text-right">
                <span class="text-lightgray text-md marg-rt">{{this.$store.state.global.userinfo.NickName}}</span>
                <svg class="icon icon-sm marg-rt">
                    <use xlink:href="#rightarrowsline"></use>
                </svg>
            </div>
        </div>
        <div class="flexwarp bg-white pd-topbtn bd-btn">
            <div class="wd-50p"><p class="text-md marg-lf">手机号</p></div>
            <div class="wd-50p text-right">
                <span class="marg-rt text-md text-lightgray">{{this.$store.state.global.userinfo.Mobile|mobilehide}}</span>
            </div>
        </div>
        <div class="flexwarp bg-white pd-topbtn bd-btn" @click="goPage('expressaddress')">
            <div class="wd-50p"><p class="text-md marg-lf">收货地址</p></div>
            <div class="wd-50p text-right">
                <svg class="icon icon-sm marg-rt">
                    <use xlink:href="#rightarrowsline"></use>
                </svg>
            </div>
        </div>
        <div class="divider"></div>
        <div class="flexwarp bg-white pd-topbtn bd-btn" v-if="this.$store.state.global.userinfo.ParentId=='00000000-0000-0000-0000-000000000000'" @click="goPage('setmyinvote')">
            <div class="wd-50p"><p class="text-md marg-lf">设置推荐人</p></div>
            <div class="wd-50p text-right">
                <svg class="icon icon-sm marg-rt">
                    <use xlink:href="#rightarrowsline"></use>
                </svg>
            </div>
        </div>
        <div class="flexwarp bg-white pd-topbtn bd-btn" @click="goPage('changepassword')">
            <div class="wd-50p"><p class="text-md marg-lf">登录密码</p></div>
            <div class="wd-50p text-right">
                <svg class="icon icon-sm marg-rt">
                    <use xlink:href="#rightarrowsline"></use>
                </svg>
            </div>
        </div>
        <div class="divider"></div>
        <div class="flexwarp bg-white pd-topbtn bd-btn" @click="logout">
            <div class="wd-50p"><p class="text-md marg-lf">退出登录</p></div>
            <div class="wd-50p text-right">
                
            </div>
        </div>
        
        <!--弹出框-->
        <mi-modal ref="confirm" type="confirm" @confirmEvent="confirmLogout">
            <div slot="confirm" class="confirm">
                <p>确定退出？</p>
            </div>
        </mi-modal>
        <mi-toast ref='toast'></mi-toast>
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
import * as api from '../../../api/account'
import * as util from '../../../utils/util'

export default {
    components: {
        'mi-header': header,
        'mi-toast': toast,
        'mi-modal':modal,
        'mi-popup': popup,
    },
    data(){
        return{
            bodyHeight: '100%'
        }
    },
    mounted(){
        this.bodyHeight = util.screenSize().height + 'px';
    },
    methods: {
        handleFiles(event){
            console.log('选择了文件')
            let file = event.target.files[0];
            var ossfilename=util.uploadToOss(file,'pingzheng');
            this.SetPortrait(ossfilename);
        },
        SetPortrait(ossfilename){
            let self = this
            let params = {
                Portrait: ossfilename
            }
            api.SetPortraitApi(params).then(
                res => {
                if (res.data.Code == 200) {
                    //更新本地存储
                    self.$store.dispatch('update_userinfo', {
                    userinfo: {
                        NickName: self.$store.state.global.userinfo.NickName,
                        Portrait: ossfilename,
                        Gender: self.$store.state.global.userinfo.Gender,
                        Region: self.$store.state.global.userinfo.Region,
                        Mobile: self.$store.state.global.userinfo.Mobile
                    }
                    }).then(() => {
                    });
                    
                } else {
                    alertFuc(res.data.Message)
                }
                },
                err => {
                console.log('网络错误');
                }
            );
        },
        goPage(page) {
            this.$router.push({ name: page });
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
            sessionStorage.clear();
            self.$router.replace('/');
        }
    }
}
</script>

<style lang="less" scoped>
.profilepgwp{
    background:#eee;
}

.confirm {
    padding: 1rem;
    font-size: 1.3rem;
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

