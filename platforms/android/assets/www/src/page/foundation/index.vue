<template>
  <div>
    <mi-header title="五福基金"></mi-header>
    <div class="fdtion">
      <div>
        <p>基金账号当前余额</p>
        <h1>2445433
          <span>元</span>
        </h1>
      </div>
      <div class="apply">
        <button>申请使用基金</button>
        <p>其中100万为商城预先注入资金</p>
      </div>
    </div>
    <div class="descwp">
      <p class="tlt">基金的建立</p>
      <div class="desc">为进一步促进公益事业发展，本着“人人为我,我为人人”的社会责任，也便于向需要帮助的困难人们提供爱心援助，商城特设立“五福天下基金”。</div>
    </div>
    <div class="descwp">
      <p class="tlt">基金筹款办法</p>
      <div class="desc">
        本基金为非公募基金，原始基金数额为人民币100万元，由江苏悟性电子商务有限公司捐赠。每位在商城购物的朋友，您的每次购物都将为我们的公益事业做出一份贡献。您每购物1元，将由平台基金筹款0.01元，所筹款项将全部用于公益事业。
      </div>
    </div>
    <div class="descwp">
      <p class="tlt">基金宗旨及救助范围</p>
      <div class="desc">
        <ul>
          <li>灾害救助：对自然灾害包括地震、洪涝、干旱等灾害和突发重大灾害进行持续的人道主义赈灾行动；</li>
          <li>儿童关怀与发展：通过支持民间公益组织和鼓励儿童参与项目活动，重点关注贫困和灾害多发地区的儿童及其它特殊需要儿童，助学、助养帮助他们获得更有尊严的生活和更好的发展机会；</li>
          <li>支持生态环保：包括环境保护，植树造林、风沙治理、环境保护宣传，以及支持环保公益组织的发展，促进人与社会、人与自然的可持续发展；</li>
          <li>支持奖学金、科学基金和医学研究基金：促进人才培养和科技、医学等事业的发展；</li>
          <li>营造公益氛围，发展公益事业：支持国学公益正能量宣传，关爱青少年成长，关爱老人、倡导公民责任，推动社会和谐进步。</li>
        </ul>
  
      </div>
    </div>
    <div class="descwp">
      <p class="tlt">社会活动</p>
      <div class="desc"></div>
    </div>
  </div>
</template>

<script>
import header from '../../components/header.vue';

export default {
  components: {
    'mi-header': header
  }
}
</script>

<style lang="less">
.fdtion {
  background: #096;
  color: #fff;
  text-align: center;
  padding: 2rem;
  p {
    font-size: 1.3rem;
  }
  h1 {
    font-size: 3rem;
    font-weight: 400;
    padding: 1rem;
    span {
      font-size: 1.2rem;
    }
  }
  .apply {
    padding-top: 1rem;
    p{
      font-size:1rem;
    }
    
    button {
      margin-bottom: 1rem;
      border-radius:3px;
      padding: 0.8rem 2rem;
      font-size: 1.3rem;
      color: #fff;
      background: #063;
      border: 0;
    }
  }
}

.descwp {
  background: #fff;
  font-size: 1rem;
  padding: 1rem;
  margin-top: 1rem;
  .tlt {
    padding-bottom: 1rem;font-size:1.3rem;
  }
  .desc {
    color: #999;
    text-indent: 2rem;
    li{
      list-style: none;margin-bottom:1rem;
    }
  }
}
</style>


