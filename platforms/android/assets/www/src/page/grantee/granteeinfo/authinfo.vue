<template>
    <div class="authwarp">
        <div class="head">
            <div class="title">资料证明</div>
            <div class="platformdesc">先行赔付</div>
        </div>
        <div class="authcontent">
            <ul>
                <li>
                    <p class="authtlt">患者：宋佳好</p>
                    <p class="authinfo">
                        <svg>
                            <use xlink:href="#ok"></use>
                        </svg>
                        身份证已审核</p>
                </li>
                <li>
                    <p class="authtlt">所患疾病：脑干恶性肿瘤</p>
                    <p class="authinfo">
                        <svg>
                            <use xlink:href="#ok"></use>
                        </svg> 诊断证明已审核</p>
                    <p class="authinfo">
                        <svg>
                            <use xlink:href="#ok"></use>
                        </svg> 诊断医院：上海复旦大学附属医院儿科医院</p>
                </li>
                <li>
                    <p class="authtlt">收款人：王智慧(直系亲属)</p>
                    <p class="authinfo">
                        <svg>
                            <use xlink:href="#ok"></use>
                        </svg> 身份证已审核</p>
                    <p class="authinfo">
                        <svg>
                            <use xlink:href="#ok"></use>
                        </svg> 关系证明已审核</p>
                </li>
            </ul>
            <div class="publisercn">
                <span>查看</span>
                发起人承诺书
            </div>
            <div class="platform">
                该项目信息不属于慈善公开募捐信息，真实性有信息发布人负责。平台提现您了解项目后再帮助Ta
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>


<style lang="less" scoped>
.authwarp {
    background: #fff;
    margin-top: 1rem;
    .head {
        border-bottom: 1px solid #ddd;
        width: 100%;
        display: flex;
        .title {
            font-size: 1.3rem;
            line-height: 2rem;
            padding: 1rem;
            width: 50%;
        }
        .platformdesc {
            width: 50%;
            color: green;
            font-size: 1.3rem;
            line-height: 2rem;
            padding: 1rem;
            text-align: right;
            font-weight: 500;
        }
    }
    .authcontent {
        padding: 1rem;
        li {
            margin-bottom: 1.5rem;
            font-size: 1.3rem;
            list-style: none;
            .authtlt {
                margin-bottom: 0.5rem;
            }
            .authinfo {
                color: green;
                font-size: 1rem;
                svg {
                    width: 1rem;
                    height: 1rem;
                    fill: green;
                }
            }
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
    .publisercn {
        margin: 2rem 0;
        padding: 1rem 0;
        font-size:1.3rem;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        span {
            color: green;
            float: right;
        }
    }
    .platform {
        padding: 1rem;
        background: #eee;
        font-size: 1.3rem;
        border-radius: 3px;
    }
}
</style>

