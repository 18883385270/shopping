<template>
    <div>
        <mi-header title="开通传递大使"></mi-header>
    
        <div v-if="UnpayGift">
            <div class="shuoming">
                <span class="reselect" @click="reselect">
                    重新选择
                </span>
                您已选择赠品型号尺寸和收件地址，可直接支付
            </div>
            <div class="divider"></div>
            <div class="tltcntbox2">
                <div class="head">
                    <div class="title">收货信息</div>
                    <div class="more"></div>
                </div>
                <div class="body pd1">
                    <div>{{UnpayGift.Region}} {{UnpayGift.Address}}</div>
                    <div>{{UnpayGift.Name}} {{UnpayGift.Mobile}}【收】</div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="tltcntbox2">
                <div class="head">
                    <div class="title">型号</div>
                    <div class="more"></div>
                </div>
                <div class="body pd1">
                    <div>{{UnpayGift.GiftSize}}</div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="btnwp">
                <button class="button success" @click="GoPayPage">去支付</button>
            </div>
        </div>

        <div v-if="!UnpayGift">
            <div class="shuoming">
                开通传递大使，将获赠{{GiftInfo.Name}}一件
            </div>
    
            <div class="exadd" @click="showpicker">
                <div class="tlt">收货地址</div>
                <div class="cnt">
                    <div v-if="ExpressAddress">
                        <p> {{ExpressAddress.Region}} {{ExpressAddress.Address}}</p>
                        <p>{{ExpressAddress.Name}} {{ExpressAddress.Mobile|mobilehide}}</p>
                    </div>
                    <div class="noaddress" v-if="!ExpressAddress">选择收货地址</div>
                </div>
                <div class="change">
                    <svg>
                        <use xlink:href="#rightarrowsline"></use>
                    </svg>
                </div>
            </div>
            <div class="divider"></div>
            <div class="sizepicker">
                <div class="tltwp">
                    <div class="tlt">尺码</div>
                    <div class="info">查看尺码参照</div>
                </div>
                <div class="sizelist">
                    <ul>
                        <li>
                            <input type="radio" name="size" id="radio_s" value="S" class="regular-radio" v-model="GiftInfo.Size">
                            <label for="radio_s"></label>
                            <p>S</p>
                        </li>
                        <li>
                            <input type="radio" name="size" id="radio_m" value="M" class="regular-radio" v-model="GiftInfo.Size" checked>
                            <label for="radio_m"></label>
                            <p>M</p>
                        </li>
                        <li>
                            <input type="radio" name="size" id="radio_l" value="L" class="regular-radio" v-model="GiftInfo.Size">
                            <label for="radio_l"></label>
                            <p>L</p>
                        </li>
                        <li>
                            <input type="radio" name="size" id="radio_xl" value="XL" class="regular-radio" v-model="GiftInfo.Size">
                            <label for="radio_xl"></label>
                            <p>XL</p>
                        </li>
                        <li>
                            <input type="radio" name="size" id="radio_xxl" value="XXL" class="regular-radio" v-model="GiftInfo.Size">
                            <label for="radio_xxl"></label>
                            <p>XXL</p>
                        </li>
                        <li>
                            <input type="radio" name="size" value="XXXL" id="radio_xxxl" class="regular-radio" v-model="GiftInfo.Size">
                            <label for="radio_xxxl"></label>
                            <p>XXXL</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="shuoming">
                <svg>
                    <use xlink:href="#ok"></use>
                </svg>
                获赠服装公司包邮，徽章统一配送
            </div>
    
            <div class="btnwp">
                <button type="button" class="button success" @click="addusergift">去支付</button>
            </div>
    
        </div>
    
        <expressaddresspicker ref="expressaddresspicker" @expressaddressPickerEvent="expressaddressPickerHandle"></expressaddresspicker>
        <mi-toast ref="toast"></mi-toast>
    </div>
</template>

<script>
import header from '../../../../components/header.vue'
import toast from '../../../../components/toast.vue'
import expressaddresspicker from '../../../pickers/expressaddresspicker.vue'
import * as api from '../../../../api/account'
import * as checkJs from '../../../../utils/pubfunc'

export default {
    components: {
        'mi-header': header,
        'mi-toast': toast,
        'expressaddresspicker':expressaddresspicker
    },
    data() {
        return {
            GiftInfo: {
                Name: '公益T恤',
                Size: 'M'
            },
            ExpressAddress: null,
            UnpayGift:false,
            Amount:10000
        }
    },
    mounted() {
        //获取未支付的提交
        let params = {};
        api.GetUserUnPayGiftApi(params).then(
            res => {
                if (res.data.Code == 200) {
                    this.UnpayGift=res.data.UserGift;
                } else {
                    this.UnpayGift=false;
                    console.log("返回错误码：" + res.data.Code);
                }
            },
            err => {
                console.log('网络错误');
            }
        )
    },
    methods: {
        goPage(page) {
            this.$router.push({ path: page });
        },
        toPage(page,params){
            this.$router.replace({name:page,params:params});
        },
        GoPayPage(){
            let toPayInfo={
                Type:'account',
                OrderId:this.UnpayGift.Id,
                OrderNumber:'',
                Amount:this.Amount,
                Remark:'开通店主付款',
                CreatedOn:(new Date()).valueOf()
            }
            sessionStorage.ToPayInfo = JSON.stringify(toPayInfo)
            this.$router.push({name:'pay'});
        },
        reselect(){
            this.UnpayGift=false;
        },
        showpicker() {
            this.$refs.expressaddresspicker.show();
        },
        expressaddressPickerHandle(expressaddress) {
            this.ExpressAddress = expressaddress;
        },
        addusergift() {
            let alertFuc = (msg) => {
                const toast = this.$refs.toast;
                toast.show(msg);
                return false
            }

            if(checkJs.isNullOrEmpty(this.ExpressAddress))
            {
                alertFuc('请选择收货地址')
	            return;
            }

            let params = {
                GiftInfo: this.GiftInfo,
                ExpressAddressInfo: this.ExpressAddress
            };
            api.AddUserGiftApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        //提交成功进入付款页面
                        var userGiftId=res.data.UserGiftId;
                        //创建待付款信息
                        let toPayInfo={
                            Type:'account',
                            OrderId:userGiftId,
                            OrderNumber:'',
                            Amount:this.Amount,
                            Remark:'开通店主付款',
                            CreatedOn:(new Date()).valueOf()
                        }
                        sessionStorage.ToPayInfo = JSON.stringify(toPayInfo)
                        this.$router.push({name:'pay'});
                        //到支付页面
                    } else {
                        console.log("返回错误码：" + res.data.Code);
                    }
                },
                err => {
                    console.log('网络错误');
                }
            )
        }
    }
}
</script>

<style lang="less" scoped>
.shuoming {
    padding: 1rem;
    background: #fff;
    border-bottom: 1px solid #eee;
    svg {
        width: 1rem;
        height: 1rem;
        fill: #096;
    }
}

.sizepicker {
    background: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    .tltwp {
        display: flex;
        border-bottom: 1px solid #eee;
        .tlt {
            width: 50%;
            padding: 1rem;
            font-size: 1.3rem;
        }
        .info {
            width: 50%;
            text-align: right;
            padding: 1rem;
        }
    }
}

.sizelist {
    padding: 1rem;
    li {
        list-style: none;
        display: inline-block;
        padding: 0.5rem 1rem;

        text-align: center;
    }
}

.btnwp {
    padding: 1rem;
}

.reselect {
    color: #096;
    float: right;
}
</style>


