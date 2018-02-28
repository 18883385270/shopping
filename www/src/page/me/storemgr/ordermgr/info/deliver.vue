<template>
    <div class="page">
        <mi-header title="订单发货"></mi-header>
        <div class="tablerow">
            <div class="tlt">快递公司</div>
            <div class="cnt">
                <select class="selexpressorg" v-model="ExpressInfo.ExpressCode" placeholder="选择快递公司" @change="selectChanged(ExpressInfo.ExpressCode)">
                    <option v-for="ExpressOrg in ExpressOrgs" :value="ExpressOrg.value">{{ExpressOrg.label}}-{{ExpressOrg.value}}</option>
                </select>
            </div>
        </div>
        
        <div class="tablerow">
            <div class="tlt">运单号</div>
            <div class="cnt">
                <input type="text" placeholder="运单号" v-model="ExpressInfo.ExpressNumber" />
            </div>
        </div>
        <div class="btnwp">
            <button class="button success" @click="DeliverEvent">确认发货</button>
        </div>
        <mi-toast ref="toast"></mi-toast>
    </div>
</template>

<script>
import header from '../../../../../components/header.vue';
import toast from '../../../../../components/toast.vue';
import * as api from '../../../../../api/storeorder'
import * as checkJs from '../../../../../utils/pubfunc'

export default {
    components: {
        'mi-header': header,
        'mi-toast':toast,
    },
    data() {
        return {
            StoreOrder: {},
            ExpressOrgs: [
                {
                    label: "EMS",
                    value: "EMS"
                },
                {
                    label: "顺丰速运",
                    value: "shunfeng"
                },
                {
                    label: "京东快递",
                    value: "jingdong"
                },
                {
                    label: "申通快递",
                    value: "shentong"
                },
                {
                    label: "韵达快运",
                    value: "yunda"
                },
                {
                    label: "中通快递",
                    value: "zhongtong"
                },
                {
                    label: "达速物流",
                    value: "dasu"
                },
                {
                    label: "天天快递",
                    value: "tiantian"
                },
                {
                    label: "宅急送",
                    value: "zhaijisong"
                },
                {
                    label: "德邦物流",
                    value: "debang"
                },
                {
                    label: "安能物流",
                    value: "anneng"
                },
                {
                    label: "平邮包裹",
                    value: "pingyou"
                },
                {
                    label: "万家物流",
                    value: "wanjia"
                },
                {
                    label: "UPS(英文)",
                    value: "upsen"
                },
                {
                    label: "运通快递",
                    value: "yuntong"
                },
                {
                    label: "飞快达物流",
                    value: "feikuaida"
                },
                {
                    label: "海盟速递",
                    value: "haimeng"
                },
                {
                    label: "中速快件",
                    value: "zhongsukuaidi"
                },
                {
                    label: "越丰快递",
                    value: "yuefeng"
                },
                {
                    label: "顺丰(英文)",
                    value: "shunfengen"
                },
                {
                    label: "Fedex(英文-美国件)",
                    value: "fedexus"
                },
                {
                    label: "盛辉物流",
                    value: "shenghui"
                },
                {
                    label: "澳大利亚邮政(英文)",
                    value: "auspost"
                },
                {
                    label: "大田物流",
                    value: "datian"
                },
                {
                    label: "全际通快递",
                    value: "quanjitong"
                },
                {
                    label: "隆浪快递",
                    value: "longlangkuaidi"
                },
                {
                    label: "新蛋奥硕物流",
                    value: "neweggozzo"
                },
                {
                    label: "联邦快递(英文)",
                    value: "lianbangkuaidien"
                },

                {
                    label: "海外环球",
                    value: "haiwaihuanqiu"
                },
                {
                    label: "源安达快递",
                    value: "yad"
                },
                {
                    label: "金大物流",
                    value: "jindawuliu"
                },
                {
                    label: "七天连锁",
                    value: "sevendays"
                },
                {
                    label: "TNT快递",
                    value: "tnt"
                },
                {
                    label: "天地华宇物流",
                    value: "huayu"
                },
                {
                    label: "联昊通快递",
                    value: "lianhaotong"
                },
                {
                    label: "港中能达快递",
                    value: "nengda"
                },
                {
                    label: "瑞典邮政(英文)",
                    value: "ruidianyouzheng"
                },
                {
                    label: "京广速递(KKE快递)",
                    value: "jingguang"
                },
                {
                    label: "邮政(国际)",
                    value: "youzhengguoji"
                },
                {
                    label: "联邦物流",
                    value: "LBWL"
                },
                {
                    label: "onTrac",
                    value: "ontrac"
                },
                {
                    label: "原飞航快递",
                    value: "feihang"
                },
                {
                    label: "邦送物流",
                    value: "bangsongwuliu"
                },
                {
                    label: "DHL(德文)",
                    value: "dhlde"
                },
                {
                    label: "华夏龙物流",
                    value: "huaxialong"
                },
                {
                    label: "EMS(中文-国际件)",
                    value: "emsguoji"
                },
                {
                    label: "中天万运快递",
                    value: "ztwy"
                },
                {
                    label: "飞康达物流",
                    value: "fkd"
                },
                {
                    label: "加拿大邮政(德文)",
                    value: "canpostfr"
                },
                {
                    label: "安信达快递",
                    value: "anxinda"
                },
                {
                    label: "全峰快递",
                    value: "quanfeng"
                },
                {
                    label: "加拿大邮政(英文)",
                    value: "canpost"
                },
                {
                    label: "圣安物流",
                    value: "shengan"
                },
                {
                    label: "佳吉物流",
                    value: "jiaji"
                },

                {
                    label: "EMS(英文-国际件)",
                    value: "emsinten"
                },
                {
                    label: "UPS快递",
                    value: "ups"
                },

                {
                    label: "亚风速递",
                    value: "yafeng"
                },
                {
                    label: "快捷速递",
                    value: "kuaijie"
                },
                {
                    label: "百世快递",
                    value: "huitong"
                },
                {
                    label: "中国邮政快递",
                    value: "pingyou"
                },
                {
                    label: "AOL澳通速递",
                    value: "aolau"
                },

                {
                    label: "澳邮中国快运",
                    value: "auexpress"
                },
                {
                    label: "安鲜达",
                    value: "exfresh"
                },
                {
                    label: "BCWELT",
                    value: "bcwelt"
                },
                {
                    label: "北青小红帽",
                    value: "xiaohongmao"
                },
                {
                    label: "宝凯物流",
                    value: "lbbk"
                },
                {
                    label: "博源恒通",
                    value: "byht"
                },
                {
                    label: "百成大达物流",
                    value: "idada"
                },
                {
                    label: "百腾物流",
                    value: "baitengwuliu"
                },
                {
                    label: "笨鸟海淘",
                    value: "birdex"
                },
                {
                    label: "百事亨通",
                    value: "bsht"
                },
                {
                    label: "大洋物流快递",
                    value: "dayang"
                },
                {
                    label: "德创物流",
                    value: "dechuangwuliu"
                },
                {
                    label: "东瀚物流",
                    value: "donghanwl"
                },
                {
                    label: "达方物流",
                    value: "dfpost"
                },
                {
                    label: "东骏快捷物流",
                    value: "dongjun"
                },
                {
                    label: "叮咚澳洲转运",
                    value: "dindon"
                },
                {
                    label: "大众佐川急便",
                    value: "dazhong"
                },
                {
                    label: "德中快递",
                    value: "decnlh"
                },
                {
                    label: "德坤供应链",
                    value: "dekuncn"
                },
                {
                    label: "俄顺达",
                    value: "eshunda"
                },
                {
                    label: "EWE全球快递",
                    value: "ewe"
                },
                {
                    label: "FedEx英国",
                    value: "fedexuk"
                },
                {
                    label: "FOX国际速递",
                    value: "fox"
                },
                {
                    label: "凡客如风达",
                    value: "rufengda"
                },
                {
                    label: "颿达国际快递",
                    value: "fandaguoji"
                },
                {
                    label: "飞鹰物流",
                    value: "hnfy"
                },
                {
                    label: "飞力士物流",
                    value: "flysman"
                },
                {
                    label: "丰程物流",
                    value: "sccod"
                },
                {
                    label: "泛远国际物流",
                    value: "farlogistis"
                },
                {
                    label: "GSM",
                    value: "gsm"
                },
                {
                    label: "GATI快递",
                    value: "gaticn"
                },
                {
                    label: "GTS快递",
                    value: "gts"
                },
                {
                    label: "港快速递",
                    value: "gangkuai"
                },
                {
                    label: "广通速递（山东）",
                    value: "gtongsudi"
                },
                {
                    label: "高铁速递",
                    value: "gtsd"
                },
                {
                    label: "华宇物流",
                    value: "tiandihuayu"
                },
                {
                    label: "黄马甲快递",
                    value: "huangmajia"
                },
                {
                    label: "合众速递",
                    value: "ucs"
                },
                {
                    label: "伙伴物流",
                    value: "huoban"
                },
                {
                    label: "红马速递",
                    value: "nedahm"
                },
                {
                    label: "汇文配送",
                    value: "huiwen"
                },
                {
                    label: "华赫物流",
                    value: "nmhuahe"
                },
                {
                    label: "航宇快递",
                    value: "hangyu"
                },
                {
                    label: "闽盛物流",
                    value: "minsheng"
                },
                {
                    label: "日昱物流",
                    value: "riyu"
                },
                {
                    label: "山西红马甲",
                    value: "sxhongmajia"
                },
                {
                    label: "沈阳佳惠尔",
                    value: "syjiahuier"
                },
                {
                    label: "上海林道货运",
                    value: "shlindao"
                },
                {
                    label: "顺捷丰达",
                    value: "shunjiefengda"
                },
                {
                    label: "速必达物流",
                    value: "subida"
                },
                {
                    label: "速方国际物流",
                    value: "bphchina"
                },
                {
                    label: "速递中国",
                    value: "sendtochina"
                },
                {
                    label: "苏宁快递",
                    value: "suning"
                },
                {
                    label: "四海快递",
                    value: "sihaiet"
                },
                {
                    label: "天纵物流",
                    value: "tianzong"
                },
                {
                    label: "同舟行物流",
                    value: "chinatzx"
                },
                {
                    label: "腾达速递",
                    value: "nntengda"
                },
                {
                    label: "泰国138",
                    value: "sd138"
                },
                {
                    label: "通达兴物流",
                    value: "tongdaxing"
                },
                {
                    label: "天联快运",
                    value: "tlky"
                },
                {
                    label: "UC优速快递",
                    value: "youshuwuliu"
                },
                {
                    label: "UEQ快递",
                    value: "ueq"
                },
                {
                    label: "微特派快递",
                    value: "weitepai"
                },
                {
                    label: "威时沛运",
                    value: "wtdchina"
                },
                {
                    label: "微转运",
                    value: "wzhaunyun"
                },
                {
                    label: "万通快递",
                    value: "gswtkd"
                },
                {
                    label: "渥途国际速运",
                    value: "wotu"
                },
                {
                    label: "希优特快递",
                    value: "xiyoute"
                },
                {
                    label: "喜来快递",
                    value: "xilaikd"
                },
                {
                    label: "鑫世锐达",
                    value: "xsrd"
                },
                {
                    label: "鑫通宝物流",
                    value: "xtb"
                },
                {
                    label: "信天捷快递",
                    value: "xintianjie"
                },
                {
                    label: "西安胜峰",
                    value: "xaetc"
                },
                {
                    label: "新顺丰（NSF）",
                    value: "nsf"
                },
                {
                    label: "先锋快递",
                    value: "xianfeng"
                },
                {
                    label: "新速航",
                    value: "sunspeedy"
                },
                {
                    label: "西邮寄",
                    value: "xipost"
                },
                {
                    label: "信联通",
                    value: "sinatone"
                },
                {
                    label: "新杰物流",
                    value: "sunjex"
                },
                {
                    label: "韵达美国件",
                    value: "yundaexus"
                },
                {
                    label: "宇鑫物流",
                    value: "yxwl"
                },
                {
                    label: "易通达",
                    value: "yitongda"
                },
                {
                    label: "一柒物流",
                    value: "yiqiguojiwuliu"
                },
                {
                    label: "亿领速运",
                    value: "yilingsuyun"
                },
                {
                    label: "煜嘉物流",
                    value: "yujiawuliu"
                },
                {
                    label: "英脉物流",
                    value: "gml"
                },
                {
                    label: "云豹国际货运",
                    value: "leopard"
                },
                {
                    label: "云南中诚",
                    value: "czwlyn"
                },
                {
                    label: "优配速运",
                    value: "sdyoupei"
                },
                {
                    label: "永昌物流",
                    value: "yongchang"
                },
                {
                    label: "御风速运",
                    value: "yufeng"
                },
                {
                    label: "亚马逊物流",
                    value: "yamaxunwuliu"
                },
                {
                    label: "优速通达",
                    value: "yousutongda"
                },
                {
                    label: "亿顺航",
                    value: "yishunhang"
                },
                {
                    label: "永旺达快递",
                    value: "yongwangda"
                },
                {
                    label: "易满客",
                    value: "ecmscn"
                },
                {
                    label: "英超物流",
                    value: "yingchao"
                },
                {
                    label: "益递物流",
                    value: "edlogistics"
                },
                {
                    label: "远洋国际",
                    value: "yyexpress"
                },
                {
                    label: "一号仓",
                    value: "onehcang"
                },
                {
                    label: "远成快运",
                    value: "ycgky"
                },
                {
                    label: "一号线",
                    value: "lineone"
                },
                {
                    label: "壹品速递",
                    value: "ypsd"
                },
                {
                    label: "鹰运国际速递",
                    value: "vipexpress"
                },
                {
                    label: "易联通达物流",
                    value: "el56"
                },
                {
                    label: "一运全成物流",
                    value: "yyqc56"
                },
                {
                    label: "中铁快运",
                    value: "zhongtie"
                },
                {
                    label: "中铁物流",
                    value: "ZTKY"
                },
                {
                    label: "郑州建华快递",
                    value: "zzjh"
                },
                {
                    label: "中睿速递",
                    value: "zhongruisudi"
                },
                {
                    label: "中外运速递",
                    value: "zhongwaiyun"
                },
                {
                    label: "增益速递",
                    value: "zengyisudi"
                },
                {
                    label: "郑州速捷",
                    value: "sujievip"
                },
                {
                    label: "至诚通达快递",
                    value: "zhichengtongda"
                },
                {
                    label: "众辉达物流",
                    value: "zhdwl"
                },
                {
                    label: "直邮易",
                    value: "kuachangwuliu"
                },
                {
                    label: "中运全速",
                    value: "topspeedex"
                },
                {
                    label: "中欧快运",
                    value: "otobv"
                },
                {
                    label: "准实快运",
                    value: "zsky123"
                },
                {
                    label: "东红物流",
                    value: "donghong"
                },
                {
                    label: "快优达速递",
                    value: "kuaiyouda"
                },
                {
                    label: "巴伦支快递",
                    value: "balunzhi"
                },
                {
                    label: "户通物流",
                    value: "hutongwuliu"
                },
                {
                    label: "西安城联速递",
                    value: "xianchenglian"
                },
                {
                    label: "邮必佳",
                    value: "youbijia"
                },
                {
                    label: "飞远物流",
                    value: "feiyuan"
                },
                {
                    label: "城际速递",
                    value: "chengji"
                },
                {
                    label: "华企快运",
                    value: "huaqi"
                },
                {
                    label: "一邦快递",
                    value: "yibang"
                },
                {
                    label: "CityLink快递",
                    value: "citylink"
                },
                {
                    label: "美西快递",
                    value: "meixi"
                },
                {
                    label: "ACS",
                    value: "acs"
                },
                {
                    label: "英国DPD",
                    value: "dpd"
                },
                {
                    label: "56快运",
                    value: "wuliu"
                },
                {
                    label: "新西兰平安快递",
                    value: "efs"
                },
                {
                    label: "海米派供应链",
                    value: "haiMiPai"
                },
                {
                    label: "城市应急",
                    value: "cityYj"
                },
                {
                    label: "迈速快递",
                    value: "maxeed"
                },
                {
                    label: "捷安达国际速递",
                    value: "giant"
                },
                {
                    label: "邮亚物流",
                    value: "youYa"
                },
                {
                    label: "合众兴物流",
                    value: "hzx"
                },
                {
                    label: "CNAIR",
                    value: "cnair"
                },
                {
                    label: "小包",
                    value: "pingyou"
                },
                {
                    label: "誉美捷快递",
                    value: "yumeijie"
                },
                {
                    label: "美龙快递",
                    value: "meilong"
                },
                {
                    label: "广通速递",
                    value: "guangtong"
                },
                {
                    label: "星晨急便",
                    value: "STARS"
                },
                {
                    label: "中国南方航空股份有限公司",
                    value: "NANHANG"
                },
                {
                    label: "蓝镖快递",
                    value: "lanbiao"
                },
                {
                    label: "包裹/挂号信/小包",
                    value: "pingyou"
                },
                {
                    label: "宝通达物流",
                    value: "baotongda"
                },
                {
                    label: "大顺物流",
                    value: "dashun"
                },
                {
                    label: "大达物流",
                    value: "dada"
                },
                {
                    label: "方方达物流",
                    value: "fangfangda"
                },
                {
                    label: "河北建华物流",
                    value: "hebeijianhua"
                },
                {
                    label: "好来运快递",
                    value: "haolaiyun"
                },
                {
                    label: "快淘快递",
                    value: "kuaitao"
                },
                {
                    label: "陪行物流",
                    value: "peixing"
                },
                {
                    label: "香港邮政",
                    value: "hkpost"
                },
                {
                    label: "一统飞鸿快递",
                    value: "ytfh"
                },
                {
                    label: "中信达快递",
                    value: "zhongxinda"
                },
                {
                    label: "中天快运",
                    value: "zhongtian"
                },
                {
                    label: "佐川急便",
                    value: "zuochuan"
                },
                {
                    label: "程光快递",
                    value: "chengguang"
                },
                {
                    label: "城市之星",
                    value: "cszx"
                },
                {
                    label: "传志快递",
                    value: "chuanzhi"
                },
                {
                    label: "飞豹快递",
                    value: "feibao"
                },
                {
                    label: "汇强快递",
                    value: "huiqiang"
                },
                {
                    label: "乐捷递",
                    value: "lejiedi"
                },
                {
                    label: "成都立即送快递",
                    value: "lijisong"
                },
                {
                    label: "民邦速递",
                    value: "minbang"
                },
                {
                    label: "OCS国际快递",
                    value: "ocs"
                },
                {
                    label: "三态速递",
                    value: "santai"
                },
                {
                    label: "赛澳递",
                    value: "saiaodi"
                },

                {
                    label: "增益快递",
                    value: "zengyi"
                },
                {
                    label: "凡宇速递",
                    value: "fanyu"
                },
                {
                    label: "丰达快递",
                    value: "fengda"
                },
                {
                    label: "东方快递",
                    value: "coe"
                },
                {
                    label: "百福东方快递",
                    value: "ees"
                },
                {
                    label: "递四方速递",
                    value: "disifang"
                },
                {
                    label: "如风达快递",
                    value: "rufeng"
                },
                {
                    label: "长通物流",
                    value: "changtong"
                },
                {
                    label: "城市100快递",
                    value: "chengshi100"
                },
                {
                    label: "传喜物流(传喜快递)",
                    value: "chuanxi"
                },
                {
                    label: "飞邦物流",
                    value: "feibang"
                },
                {
                    label: "昊盛物流",
                    value: "haosheng"
                },
                {
                    label: "音速速运",
                    value: "yinsu"
                },
                {
                    label: "宽容物流",
                    value: "kuanrong"
                },
                {
                    label: "尼尔物流(尼尔快递)",
                    value: "nell"
                },
                {
                    label: "通成物流",
                    value: "tongcheng"
                },
                {
                    label: "通和天下物流",
                    value: "tonghe"
                },
                {
                    label: "伟邦快递(SCS快递)",
                    value: "scs"
                },
                {
                    label: "芝麻开门",
                    value: "zhima"
                },
                {
                    label: "日日顺物流",
                    value: "ririshun"
                },
                {
                    label: "安迅物流",
                    value: "anxun"
                },
                {
                    label: "百千诚国际物流",
                    value: "baiqian"
                },
                {
                    label: "出口易",
                    value: "chukouyi"
                },
                {
                    label: "店通快递",
                    value: "diantong"
                },
                {
                    label: "大金物流",
                    value: "dajin"
                },
                {
                    label: "飞特物流",
                    value: "feite"
                },
                {
                    label: "挂号信",
                    value: "pingyou"
                },
                {
                    label: "国内小包",
                    value: "gnxb"
                },
                {
                    label: "华诚物流",
                    value: "huacheng"
                },
                {
                    label: "华翰物流",
                    value: "huahan"
                },
                {
                    label: "恒宇运通",
                    value: "hengyu"
                },
                {
                    label: "华航快递",
                    value: "huahang"
                },
                {
                    label: "久易快递",
                    value: "jiuyi"
                },
                {
                    label: "捷特快递",
                    value: "jiete"
                },
                {
                    label: "京世物流",
                    value: "jingshi"
                },
                {
                    label: "跨越快递",
                    value: "kuayue"
                },
                {
                    label: "蒙速快递",
                    value: "mengsu"
                },
                {
                    label: "南北快递",
                    value: "nanbei"
                },

                {
                    label: "平安达快递",
                    value: "pinganda"
                },
                {
                    label: "瑞丰速递",
                    value: "ruifeng"
                },
                {
                    label: "荣庆物流",
                    value: "rongqing"
                },
                {
                    label: "穗佳物流",
                    value: "suijia"
                },
                {
                    label: "思迈快递",
                    value: "simai"
                },
                {
                    label: "速腾快递",
                    value: "suteng"
                },
                {
                    label: "晟邦物流",
                    value: "shengbang"
                },
                {
                    label: "速呈宅配",
                    value: "suchengzhaipei"
                },
                {
                    label: "五环速递",
                    value: "wuhuan"
                },
                {
                    label: "星程宅配",
                    value: "xingchengzhaipei"
                },
                {
                    label: "顺捷丰达",
                    value: "yinjie"
                },
                {
                    label: "邮政小包",
                    value: "gnxb"
                },
                {
                    label: "燕文物流",
                    value: "yanwen"
                },
                {
                    label: "纵行物流",
                    value: "zongxing"
                },
                {
                    label: "AAE快递",
                    value: "aae"
                },
                {
                    label: "DHL快递",
                    value: "dhl"
                },
                {
                    label: "Fedex联邦快递(国际)",
                    value: "fedex"
                },
                {
                    label: "飞狐快递",
                    value: "feihu"
                },

                {
                    label: "春风物流",
                    value: "spring"
                },
                {
                    label: "易达通快递",
                    value: "yidatong"
                },
                {
                    label: "彪记快递",
                    value: "PEWKEE"
                },
                {
                    label: "凤凰快递",
                    value: "PHOENIXEXP"
                },
                {
                    label: "GLS快递",
                    value: "CNGLS"
                },
                {
                    label: "华慧快递",
                    value: "BHTEXP"
                },
                {
                    label: "卡行天下",
                    value: "B2B-1669519933"
                },
                {
                    label: "配思货运",
                    value: "PEISI"
                },
                {
                    label: "上大物流",
                    value: "SUNDAPOST"
                },
                {
                    label: "苏粤货运",
                    value: "SUYUE"
                },
                {
                    label: "伍圆速递",
                    value: "F5XM"
                },
                {
                    label: "文捷航空速递",
                    value: "GZWENJIE"
                },
                {
                    label: "远成物流",
                    value: "yuancheng"
                },
                {
                    label: "DPEX快递",
                    value: "dpex"
                },
                {
                    label: "安捷快递",
                    value: "anjie"
                },
                {
                    label: "嘉里大通",
                    value: "jldt"
                },
                {
                    label: "优速快递",
                    value: "yousu"
                },
                {
                    label: "万博快递",
                    value: "wanbo"
                },
                {
                    label: "速尔物流",
                    value: "sure"
                },
                {
                    label: "速通物流",
                    value: "sutong"
                },
                {
                    label: "骏川物流",
                    value: "JUNCHUANWL"
                },
                {
                    label: "冠达快递",
                    value: "guada"
                },
                {
                    label: "D速快递",
                    value: "dsu"
                },
                {
                    label: "龙胜物流",
                    value: "LONGSHENWL"
                },
                {
                    label: "爱彼西快递",
                    value: "abc"
                },
                {
                    label: "E邮宝",
                    value: "eyoubao"
                },
                {
                    label: "AOL快递",
                    value: "aol"
                },
                {
                    label: "急先达物流",
                    value: "jixianda"
                },
                {
                    label: "山东海红快递",
                    value: "haihong"
                },
                {
                    label: "飞洋快递",
                    value: "feiyang"
                },
                {
                    label: "RPX保时达",
                    value: "rpx"
                },


                {
                    label: "云物流",
                    value: "yunwuliu"
                },
                {
                    label: "九曳供应链",
                    value: "jiuye"
                },
                {
                    label: "百世快运",
                    value: "bsky"
                },
                {
                    label: "黑狗物流",
                    value: "higo"
                },
                {
                    label: "方舟速递",
                    value: "arke"
                },
                {
                    label: "中外速运",
                    value: "zwsy"
                },
                {
                    label: "吉祥邮",
                    value: "jxy"
                },
                {
                    label: "Aramex",
                    value: "aramex"
                },
                {
                    label: "国通快递",
                    value: "guotong"
                },
                {
                    label: "佳怡物流",
                    value: "jiayi"
                },
                {
                    label: "龙邦快运",
                    value: "longbang"
                },
                {
                    label: "民航快递",
                    value: "minhang"
                },
                {
                    label: "全一快递",
                    value: "quanyi"
                },
                {
                    label: "全晨快递",
                    value: "quanchen"
                },
                {
                    label: "USPS快递",
                    value: "usps"
                },
                {
                    label: "新邦物流",
                    value: "xinbang"
                },
                {
                    label: "元智捷诚快递",
                    value: "yuanzhi"
                },
                {
                    label: "中邮物流",
                    value: "zhongyou"
                },
                {
                    label: "宇鑫物流",
                    value: "yuxin"
                },
                {
                    label: "中环快递",
                    value: "cnpex"
                },
                {
                    label: "盛丰物流",
                    value: "shengfeng"
                },
                {
                    label: "圆通速递",
                    value: "yuantong"
                },
                {
                    label: "加运美物流",
                    value: "jiayunmei"
                },
                {
                    label: "源伟丰快递",
                    value: "ywfex"
                },
                {
                    label: "信丰物流",
                    value: "xinfeng"
                },
                {
                    label: "万象物流",
                    value: "wanxiang"
                },
                {
                    label: "门对门",
                    value: "menduimen"
                },
                {
                    label: "明亮物流",
                    value: "mingliang"
                },
                {
                    label: "风行天下",
                    value: "fengxingtianxia"
                },
                {
                    label: "DHL(英文)",
                    value: "dhlen"
                },
                {
                    label: "共速达物流",
                    value: "gongsuda"
                },

                {
                    label: "全日通快递",
                    value: "quanritong"
                },
                {
                    label: "EMS(英文)",
                    value: "emsen"
                },
                {
                    label: "利民物流",
                    value: "LIMINWL"
                },
                {
                    label: "鑫天顺物流",
                    value: "XINTIAN"
                },
                {
                    label: "中国东方（COE）",
                    value: "COE"
                },
                {
                    label: "恒路物流",
                    value: "henglu"
                },
                {
                    label: "康力物流",
                    value: "klwl"
                },
                {
                    label: "美国快递",
                    value: "meiguo"
                },
                {
                    label: "TNT(英文)",
                    value: "tnten"
                },
                {
                    label: "A2U速递",
                    value: "a2u"
                },
                {
                    label: "奔腾物流",
                    value: "benteng"
                },
                {
                    label: "德方物流",
                    value: "ahdf"
                },
                {
                    label: "万家通",
                    value: "timedg"
                },
                {
                    label: "智通物流",
                    value: "ztong"
                },
                {
                    label: "新蛋物流",
                    value: "xindan"
                },
                {
                    label: "包裹、平邮、挂号信",
                    value: "bgpyghx"
                },
                {
                    label: "鑫飞鸿物流快递",
                    value: "XFHONG"
                },
                {
                    label: "阿里物流",
                    value: "ALP"
                },
                {
                    label: "滨发物流",
                    value: "BFWL"
                },
                {
                    label: "宋军物流",
                    value: "SJWL"
                },
                {
                    label: "顺发物流",
                    value: "SHUNFAWL"
                },
                {
                    label: "天河物流",
                    value: "TIANHEWL"
                },
                {
                    label: "邮联物流",
                    value: "YBWL"
                },
                {
                    label: "盛旺货运",
                    value: "SWHY"
                },
                {
                    label: "汤氏物流",
                    value: "TSWL"
                },
                {
                    label: "圆圆物流",
                    value: "YUANYUANWL"
                },
                {
                    label: "八梁物流",
                    value: "BALIANGWL"
                },
                {
                    label: "振刚物流",
                    value: "ZGWL"
                },
                {
                    label: "佳宇物流",
                    value: "JIAYU"
                },
                {
                    label: "昊昕物流",
                    value: "SHHX"
                },
                {
                    label: "安得物流",
                    value: "ande"
                },
                {
                    label: "贝邮宝",
                    value: "ppbyb"
                },
                {
                    label: "递达快递",
                    value: "dida"
                },
                {
                    label: "日本邮政",
                    value: "jppost"
                },
                {
                    label: "中国邮政国际包裹",
                    value: "intmail"
                },
                {
                    label: "恒诚物流",
                    value: "HENGCHENGWL"
                },
                {
                    label: "恒丰物流",
                    value: "HENGFENGWL"
                },
                {
                    label: "广东ems快递",
                    value: "gdems"
                },
                {
                    label: "祥龙运通",
                    value: "xlyt"
                },
                {
                    label: "国际包裹",
                    value: "gjbg"
                },
                {
                    label: "UEX",
                    value: "uex"
                },
                {
                    label: "新加坡邮政",
                    value: "singpost"
                },
                {
                    label: "广东邮政",
                    value: "guangdongyouzhengwuliu"
                },
                {
                    label: "BHT",
                    value: "bht"
                },
                {
                    label: "CCES快递",
                    value: "cces"
                },
                {
                    label: "CE易欧通国际速递",
                    value: "cloudexpress"
                },

                {
                    label: "皇家物流",
                    value: "pfcexpress"
                },
                {
                    label: "猴急送",
                    value: "hjs"
                },
                {
                    label: "辉联物流",
                    value: "huilian"
                },
                {
                    label: "环球速运",
                    value: "huanqiu"
                },
                {
                    label: "华达快运",
                    value: "huada"
                },
                {
                    label: "华通务达物流",
                    value: "htwd"
                },
                {
                    label: "海派通",
                    value: "hipito"
                },
                {
                    label: "环球通达",
                    value: "hqtd"
                },
                {
                    label: "航空快递",
                    value: "airgtc"
                },
                {
                    label: "好又快物流",
                    value: "haoyoukuai"
                },
                {
                    label: "韩润物流",
                    value: "hanrun"
                },
                {
                    label: "河南次晨达",
                    value: "ccd"
                },
                {
                    label: "和丰同城",
                    value: "hfwuxi"
                },
                {
                    label: "荷兰",
                    value: "Sky"
                },
                {
                    label: "鸿讯物流",
                    value: "hongxun"
                },
                {
                    label: "宏捷国际物流",
                    value: "hongjie"
                },
                {
                    label: "汇通天下物流",
                    value: "httx56"
                },
                {
                    label: "恒通快递",
                    value: "lqht"
                },
                {
                    label: "京广速递快件",
                    value: "jinguangsudikuaijian"
                },
                {
                    label: "骏丰国际速递",
                    value: "junfengguoji"
                },
                {
                    label: "佳家通",
                    value: "jiajiatong56"
                },
                {
                    label: "吉日优派",
                    value: "jrypex"
                },
                {
                    label: "锦程国际物流",
                    value: "jinchengwuliu"
                },
                {
                    label: "景光物流",
                    value: "jgwl"
                },
                {
                    label: "急顺通",
                    value: "pzhjst"
                },
                {
                    label: "捷网俄全通",
                    value: "ruexp"
                },
                {
                    label: "金马甲",
                    value: "jmjss"
                },
                {
                    label: "蓝弧快递",
                    value: "lanhu"
                },
                {
                    label: "乐天速递",
                    value: "ltexp"
                },
                {
                    label: "鲁通快运",
                    value: "lutong"
                },
                {
                    label: "乐递供应链",
                    value: "ledii"
                },
                {
                    label: "论道国际物流",
                    value: "lundao"
                },
                {
                    label: "麦力快递",
                    value: "mailikuaidi"
                },
                {
                    label: "木春货运",
                    value: "mchy"
                },
                {
                    label: "美快国际物流",
                    value: "meiquick"
                },
                {
                    label: "美通快递",
                    value: "valueway"
                },
                {
                    label: "偌亚奥国际",
                    value: "nuoyaao"
                },
                {
                    label: "欧亚专线",
                    value: "euasia"
                },
                {
                    label: "澳大利亚PCA快递",
                    value: "pca"
                },
                {
                    label: "平安达腾飞",
                    value: "pingandatengfei"
                },
                {
                    label: "品骏快递",
                    value: "pjbest"
                },
                {
                    label: "秦邦快运",
                    value: "qbexpress"
                },
                {
                    label: "全信通快递",
                    value: "quanxintong"
                },
                {
                    label: "全速通国际快递",
                    value: "quansutong"
                },
                {
                    label: "秦远物流",
                    value: "qinyuan"
                },
                {
                    label: "启辰国际物流",
                    value: "qichen"
                },
                {
                    label: "全速快运",
                    value: "quansu"
                },
                {
                    label: "全之鑫物流",
                    value: "qzx56"
                },
                {
                    label: "千顺快递",
                    value: "qskdyxgs"
                },
                {
                    label: "全时速运",
                    value: "runhengfeng"
                },
                {
                    label: "日益通速递",
                    value: "rytsd"
                },
                {
                    label: "瑞达国际速递",
                    value: "ruidaex"
                },
                {
                    label: "世运快递",
                    value: "shiyun"
                },
                {
                    label: "十方通物流",
                    value: "sfift"
                },
                {
                    label: "顺通快递",
                    value: "stkd"
                },
                {
                    label: "布谷鸟快递",
                    value: "bgn"
                },
                {
                    label: "佳惠尔快递",
                    value: "jiahuier"
                }
            ],
            ExpressInfo:{
                ExpressName:'顺丰速运',
                ExpressCode:'shunfeng',
                ExpressNumber:''
            }
        }
    },
    mounted() {
        if(!checkJs.isNullOrEmpty(sessionStorage.StoreStoreOrder)){
            this.StoreOrder = JSON.parse(sessionStorage.StoreStoreOrder)
        }
    },
    methods: {
        selectChanged(expressCode){
            let self=this;
            this.ExpressOrgs.forEach(function(expressOrg){
                if(expressOrg.value==expressCode){
                    self.ExpressInfo.ExpressName=expressOrg.label
                }
            })
        },
        DeliverEvent(){
            //发货
            let alertFuc = (msg) => {
                const toast = this.$refs.toast;
                toast.show(msg);
                return false
            }
            let self = this;
            
            if (checkJs.isNullOrEmpty(this.ExpressInfo.ExpressName)||checkJs.isNullOrEmpty(this.ExpressInfo.ExpressCode)) {
                alertFuc('请选择快递公司')
                return;
            }
            if (checkJs.isNullOrEmpty(this.ExpressInfo.ExpressNumber)) {
                alertFuc('请输入货运单号')
                return;
            }
            
            let params = {
                Id:this.StoreOrder.Id,
                ExpressName:this.ExpressInfo.ExpressName,
                ExpressCode:this.ExpressInfo.ExpressCode,
                ExpressNumber:this.ExpressInfo.ExpressNumber
            };
            console.log(params);
            api.DeliverApi(params).then(
                res => {
                    if (res.data.Code == 200) {
                        this.goSuccessPage('/storemgr','操作成功')
                    } else {
                        console.log(res.data.Message);
                    }
                },
                err => {
                    console.log('网络错误');
                }
            )
        },
        goSuccessPage(returnPage,message)
        {
          //转到成功页面
          var tipInfo={
              Type:'Tip',
              NextPage:returnPage,
              Message:message
          }
          sessionStorage.TipInfo = JSON.stringify(tipInfo)
          this.$router.replace({name:'success'})
        }
    }
}
</script>

<style lang="less">
.btnwp{
    padding:0 1rem 1rem 1rem;
    background:#fff;
}
.selexpressorg{
    padding:0.9rem 0;
    border:1px solid #eee;
    outline:none;
}
</style>


