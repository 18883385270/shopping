<template>
    <div>
        <mi-header title="添加地址"></mi-header>
        <div class="tablerow">
            <div class="tlt">收货人</div>
            <div class="cnt">
                <input type="text" placeholder="姓名" v-model="Name" />
            </div>
        </div>
        <div class="tablerow">
            <div class="tlt">手机号码</div>
            <div class="cnt">
                <input type="number" placeholder="11位手机号" v-model="Mobile" />
            </div>
        </div>
        <div class="tablerow">
            <div class="tlt">地区</div>
            <div class="cnt" @click="selectRegion">
                {{Region}}
            </div>
        </div>
        <div class="tablerow">
            <div class="tlt">详细地址</div>
            <div class="cnt">
                <input type="text" placeholder="街道门牌信息" v-model="Address"/>
            </div>
        </div>
        <div class="tablerow">
            <div class="tlt">邮政编码</div>
            <div class="cnt">
                <input type="number" placeholder="邮政编码" v-model="Zip"/>
            </div>
        </div>
        <div class="btnwarp">
            <button type="button" class="button success" @click="save">保存</button>
        </div>
        <mi-regionpicker ref="regionpicker" @regionPickerEvent="regionPickerHandle"></mi-regionpicker>
        <mi-toast ref="toast"></mi-toast>
    </div>
</template>


<script>
import header from '../../../../../components/header.vue'
import regionpicker from '../../../../../components/regionpicker.vue'
import toast from '../../../../../components/toast.vue'
import * as api from '../../../../../api/account'
import * as checkJs from '../../../../../utils/pubfunc'

export default {
    components: {
        'mi-header': header,
        'mi-regionpicker':regionpicker,
        'mi-toast':toast
    },
    data(){
        return{
            Name:'',
            Mobile:'',
            Region:'',
            Address:'',
            Zip:''
        }
    },
    methods: {
        selectRegion() {
            this.$refs.regionpicker.show();
        },
        regionPickerHandle(String){
            console.log(String);
            this.Region=String;
        },
        save(){
            let alertFuc = (msg) => {
                const toast = this.$refs.toast;
                toast.show(msg);
                return false
            }
            //字段验证
            let self=this;
            
            if (checkJs.isNullOrEmpty(this.Name)) {
                alertFuc('请填写收货人姓名')
                return;
            }
            if (!checkJs.isPhone(this.Mobile)) {
                alertFuc('请输入正确的手机号码！')
                return;
            }
            if (checkJs.isNullOrEmpty(this.Region)) {
                alertFuc('请选择地区')
                return;
            }
            if (checkJs.isNullOrEmpty(this.Address)) {
                alertFuc('请填写详细地址')
                return;
            }
            

            let params = {
                Name: this.Name,
                Mobile: this.Mobile,
                Region: this.Region,
                Address:this.Address,
                Zip:this.Zip
            }
            api.AddExpressAddressApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        self.$router.go(-1);
                    } else {
                        alertFuc(res.data.Message)
                    }
                },
                err => {
                    alertFuc('网络错误，请稍后再试');
                }
            );

        }
    }
}
</script>


<style lang="less" scoped>
.tablerow {
    width: 100%;
    display: flex;
    background: #fff;
    border-bottom: 1px solid #eee;
    align-items: center;
    .tlt {
        width: 25%;
        font-size: 1.4rem;
        font-weight: 400;
        padding: 1.2rem 0;
        text-indent: 1rem;
        vertical-align: center;
    }
    .cnt {
        width: 75%;
        text-align: right;
        padding: 1.2rem 0;
        margin-right: 1rem;
        font-size: 1.3rem;
        input {
            width: 100%;
            border: 0;
            font-size: 1.4rem;
            padding: 0.6rem 0;
            &:focus {
                outline: none;
            }
        }
    }
}


.btnwarp {
    padding: 1rem;
    background: #fff;

}
</style>

