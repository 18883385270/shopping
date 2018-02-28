<template>
    <div>
        <div class="benevolenceindex">
            <h1>{{BenevolenceIndex.CurrentBenevolenceIndex*100 |currency('',3)}}</h1>
            <p class="myearnings">昨日收益 {{this.$store.state.global.walletinfo.YesterdayEarnings|currency('￥',2)}} 元</p>
            <p class="earningtip">注意，系统用当日23.00时的福豆指数激励福豆</p>
        </div>
        <div class="button_bar flexwarp text-center text-white pd-topbtn-sm">
            <div class="wd-50p">
                <p class="text-lg">{{BenevolenceIndex.StoreCount}}
                </p>
                合作商家
            </div>
            <div class="wd-50p">
                <p class="text-lg">{{BenevolenceIndex.ConsumerCount}}
                </p>
                VIP会员
            </div>
        </div>
    </div>
</template>

<script>
import * as checkJs from '../../../utils/pubfunc'

export default {
    props: ['BenevolenceIndex'],
    methods: {
        goPage(page) {
            this.$router.push({name:page})
        }
    }
}
</script>

<style lang="less" scoped>
    .benevolenceindex {
        background: #FE232B;
        padding: 4rem 1rem 1rem 1rem;
        text-align: center;
        color: white;
        
        h1 {
            font-weight: 200;
            margin-bottom: 1rem;
            font-size: 5rem;
        }
        p {
            font-size: 2rem;
            &.myearnings {
                font-size: 1.3rem;
                margin: 1rem 0 0.5rem 0;
            }
            &.earningtip {
                font-size: 1rem;
                margin-bottom: 1rem;
            }
        }
    }
    .button_bar {
        background: #E91D25;
        
    }
</style>


