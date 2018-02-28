<template>
    <div>
        <div class="pd-topbtn-xlg text-center" v-if="!StoreCartGoods.length">
            <svg class="icon-xxxlg">
                <use xlink:href="#shoppingcart"></use>
            </svg>
            <p class="pd-top-lg text-md text-gray"> 购物车中，没有任何商品，去逛逛吧</p>
        </div>
        <div v-for="(store,storeindex) in StoreCartGoods" :key="storeindex">
            <div class="divider"></div>
            <div class="flexwarp pd-topbtn bd-btn text-lg">
                <div class="wd-10p text-center">
                    <input type="checkbox" :id="'stcheck'+storeindex" class="regular-checkbox" @click="storeCheckAll(store.StoreId,$event)">
                    <label :for="'stcheck'+storeindex"></label>
                </div>
                <div class="wd-90p">{{store.StoreName}}</div>
            </div>
            <div>
                <div class="goodswarp bd-btn flexwarp pd-topbtn" v-for="(goods,goodsindex) in store.CartGoodses" :key="goodsindex" v-bind:class="{selected:goods.Checked}">
                    <div class="wd-10p text-center pd-top-xlg">
                        <span v-if="goods.Stock>0 && goods.IsGoodsPublished && goods.GoodsStatus=='Verifyed'">
                            <input type="checkbox" :id="'check'+storeindex+goodsindex" class="regular-checkbox" v-model="goods.Checked">
                            <label :for="'check'+storeindex+goodsindex"></label>
                        </span>
                        <p v-if="goods.Stock==0 || !goods.IsGoodsPublished || goods.GoodsStatus!='Verifyed'">失效</p>
                    </div>
                    <div class="wd-20p text-center" @click="goGoodsInfoPage(goods)">
                        <img class="wd-100p img-round" :src="goods.GoodsPic" />
                    </div>
                    <div class="wd-70p pd-lf">
                        <p @click="goGoodsInfoPage(goods)">{{goods.GoodsName}}</p>
                        <p class="text-gray pd-top">规格：{{goods.SpecificationName}}</p>
                        <p class="text-danger text-lg pd-topbtn">{{goods.Price|currency('￥',2)}}
                            <span class="text-gray text-sm">库存{{goods.Stock}}件</span>
                        </p>
                        <p>
                            <svg class="pull-right icon icon-sm marg-rt icon-lightgray" @click="delGoods(goods)">
                                <use xlink:href="#delline"></use>
                            </svg>
                            <mi-buycount v-model="goods.Quantity" :max="goods.Stock"></mi-buycount>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="buttombar">
            <div class="checkbar">
                <input type="checkbox" id="checkall_checkbox" class="regular-checkbox" @click="checkAll($event)">
                <label for="checkall_checkbox"></label>
                <p>全选</p>
            </div>
            <div class="total">
                <p>总计：
                    <span class="price">￥{{getCheckAmount()}}</span>
                </p>
                <p class="youhui">(不含运费，已优惠￥0.00元)</p>
            </div>
            <div class="jiesuanbtn">
                <button v-bind="{disabled:getCheckCount()==0}" @click="postOrder">去结算
                    <span>({{getCheckCount()}}件)</span>
                </button>
            </div>
        </div>
        <!--弹出框-->
        <mi-modal ref="confirm" type="confirm" @confirmEvent="confirmDelGoods">
            <div slot="confirm" class="confirm">
                <p>确定删除此商品？</p>
            </div>
        </mi-modal>
        <div style="height: 5.5rem;"></div>
    </div>
</template>

<script>
import buycount from '../../components/buycount.vue'
import modal from '../../components/modal.vue'
import * as api from '../../api/cart'
import * as checkJs from '../../utils/pubfunc'

export default {
    components: {
        'mi-buycount': buycount,
        'mi-modal': modal
    },
    data() {
        return {
            StoreCartGoods: [],
            todelgoods: {}
        }
    },
    
    mounted() {
        this.fatchData();
    },
    methods: {
        goGoodsInfoPage(goods){
            this.$router.push({ name: 'goodsinfo',params:{id:goods.GoodsId} });
        },
        fatchData() {
            //获取购物车数据
            let self=this;
            let params = {};
            api.InfoApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        this.StoreCartGoods = res.data.StoreCartGoods;
                        //delLocalGoods();
                        self.$store.dispatch('update_userinfo',{
                            userinfo:{
                                Id:self.$store.state.global.userinfo.Id,
                                ParentId:self.$store.state.global.userinfo.ParentId,
                                NickName:self.$store.state.global.userinfo.NickName,
                                Portrait:self.$store.state.global.userinfo.Portrait,
                                Gender:self.$store.state.global.userinfo.Gender,
                                Region:self.$store.state.global.userinfo.Region,
                                Mobile:self.$store.state.global.userinfo.Mobile,
                                Role:self.$store.state.global.userinfo.Role,
                                StoreId:self.$store.state.global.userinfo.StoreId,
                                CartGoodsCount:res.data.GoodsCount
                            }
                        });
                    } else {
                        console.log(res.data.Message);
                    }
                },
                err => {
                    console.log('网络错误');
                }
            )
        },
        storeCheckAll(storeid, evnt) {
            //店铺级别全选
            var checkbox = evnt.target;
            this.StoreCartGoods.forEach(function (store, index) {
                if (storeid == store.StoreId) {
                    store.CartGoodses.forEach(function (goods) {
                        if(goods.Stock>0 && goods.IsGoodsPublished && goods.GoodsStatus=='Verifyed'){
                            goods.Checked = checkbox.checked;
                        }
                    });
                }
            });
        },
        checkAll(evnt) {
            //全选
            var checkbox = evnt.target;
            this.StoreCartGoods.forEach(function (store, index) {
                store.CartGoodses.forEach(function (goods) {
                    if(goods.Stock>0 && goods.IsGoodsPublished && goods.GoodsStatus=='Verifyed')
                    {
                        goods.Checked = checkbox.checked;
                    }
                });
            });
        },
        delGoods(goods) {
            this.todelgoods = goods;
            this.$refs.confirm.modalOpen();
        },
        confirmDelGoods(num) {
            let self = this;
            //删除本地数据方法
            let delLocalGoods = () => {
                this.StoreCartGoods.forEach(function (store, index) {
                    store.CartGoodses.forEach(function (item, goodsindex) {
                        if (item.Id == self.todelgoods.Id) {
                            store.CartGoodses.splice(goodsindex, 1);
                            return;
                        }
                    });
                });
            }
            if (num == 1) {
                //提交到服务器
                let params = { Id: this.todelgoods.Id };
                api.RemoveCartGoodsApi(params).then(
                    res => {
                        if (res.data.Code == 200) {
                            this.fatchData();
                        } else {
                            console.log(res.data.Message);
                        }
                    },
                    err => {
                        console.log('网络错误');
                    }
                )

            }

        },
        getCheckCount() {
            var count = 0;
            this.StoreCartGoods.forEach(function (store, index) {
                store.CartGoodses.forEach(function (goods) {
                    if (goods.Checked) {
                        count += goods.Quantity;
                    }
                });
            });
            return count;
        },
        getCheckAmount() {
            var amount = 0;
            this.StoreCartGoods.forEach(function (store, index) {
                store.CartGoodses.forEach(function (goods) {
                    if (goods.Checked) {
                        amount += goods.Price * goods.Quantity;
                    }
                });
            });
            return amount;
        },
        postOrder() {
            let storecartgoodses = [];
            //找到选中的商品提交到订单页面
                    this.StoreCartGoods.forEach(function (store, index) {
                storecartgoodses.push({
                    StoreId: store.StoreId,
                    StoreName: store.StoreName,
                    CartGoodses: []
                });
                store.CartGoodses.forEach(function (goods, goodsindex) {
                        if (goods.Checked) {
                            storecartgoodses[index].CartGoodses.push(goods)
                        }
                    });
               });
            storecartgoodses.forEach(function(item,index){
                if(item.CartGoodses.length==0){
                    storecartgoodses.splice(index,1);
                }
            })
            //提交到确认订单页面
            sessionStorage.StoreCartGoods = JSON.stringify(storecartgoodses)
            this.$router.push({ name: 'postorder' });
        }
    }
}
</script>

<style lang="less" scoped>
.goodswarp {
    width:100%;
    &.selected {
        background: lightyellow;
    }   
}

.buttombar {
    position: fixed;
    bottom: 4rem;
    left: 0;
    display: flex;
    height: 4.3rem;
    width: 100%;
    background: #fff;
    border-top: 1px solid #eee;
    .checkbar {
        width: 10%;
        padding-top: 0.3rem;
        text-align: center;
    }
    .total {
        width: 60%;
        text-align: right;
        font-size: 1.3rem;
        padding: 0.5rem 1rem 0.5rem 0;
        .price {
            color: #C1272D;
        }
        .youhui {
            font-size: 1rem;
            font-weight: 400;
        }
    }
    .jiesuanbtn {
        width: 30%;
        text-align: center;
        background: #ddd;
        button {
            display: block;
            width: 100%;
            height: 4rem;
            text-align: center;
            font-size: 1.3rem;
            background: #C1272D;
            border: 0;
            color: #fff;
            span {
                font-size: 1rem;
            }
            &:disabled {
                background: #ddd;
                color: #666;
            }
        }
    }
}
.confirm {
    text-align: center;
    p {
        font-size:1.3rem;
    }
}

</style>

