<template>
    <div class="pwdwarp" :class="{small:issmall}">
        <input type="number" id="passwordinput" class="realinput" v-model="PayPassword" maxlength="6" >
        <div class="fackinputs">
            <input type="password" class="fackinput">
            <input type="password" class="fackinput" >
            <input type="password" class="fackinput" >
            <input type="password" class="fackinput" >
            <input type="password" class="fackinput" >
            <input type="password" class="fackinput" >
        </div>
    </div>
</template>

<script>
export default {
  props: {
    issmall:{
      type:Boolean,
      default:false
    },
    value:{
      type:String,
      default:''
    }
  },
  data(){
    return {
      PayPassword:''
    }
  },
  watch:{
    value(val) {
        this.PayPassword = val;
    },
    PayPassword(curVal){
      this.handleInputPwd(curVal);
      this.$emit("input", curVal);
    }
  },
  methods: {
    handleInputPwd(inputval) {
      var fackinputs = document.querySelectorAll(".fackinput");
      for(var j=0;j<fackinputs.length;j++){
        fackinputs[j].value='';
      }
      if (inputval.length) {
        for (var i = 0; i < inputval.length; i++) {
          fackinputs[i].value = inputval.slice(i, i + 1);
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.pwdwarp {
  width: 100%;
  height: 4rem;
  position: relative;
  .realinput {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 5;
    border: 0;
    font-size: 1.3rem;
    &:focus {
      outline: none;
    }
  }
  .fackinputs {
    height: 100%;
    display: flex;
    input {
      display: inline-block;
      width: 16.6%;
      height: 100%;
      text-align: center;
      font-size: 1.5rem;
      background: #fffbf0;
      border: 1px solid #eee;
      border-right: 0;
      &:last-child {
        border-right: 1px solid #eee;
      }
    }
  }
}
.small {
  height: 3rem;
}
</style>

