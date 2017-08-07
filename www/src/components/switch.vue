<template>
  <div class="switchwp" :class="{on:isOn,off:!isOn}" @click="switchOnOff">
      <div class="switch"></div>
  </div>
</template>

<script>
export default {
  props:['switch'],
  data(){
      return{
          isOn:this.switch
      }
  },
  methods:{
    switchOnOff(){
        this.isOn=!this.isOn;
        this.$emit('switchEvent', this.isOn);
    }
  }
}
</script>

<style lang="less" scoped>
    .switchwp{
        width:5rem;height:2.2rem;border-radius: 2.5rem;display:inline-block;
        .switch{
            width:2rem;height:2rem;border-radius: 50%;background:#fff;border:0.1rem solid #fff;
        }
    }
    .off{
        border:1px solid #eee;background:#fff;
        .switch{
            float:left;border-color:#eee;
        }
    }
    .on{
        background: #096;border:1px solid #096;
        .switch{
            float:right;border-color:#096;
        }
    }
</style>


