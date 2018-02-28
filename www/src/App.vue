<template>
	<div>
		<!-- <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
			<router-view  class="child-view"></router-view>
		</transition> -->
		
		<keep-alive>
				<router-view v-if="$route.meta.keepAlive" class="child-view"></router-view>
		</keep-alive>

		<router-view v-if="!$route.meta.keepAlive" class="child-view"></router-view>


		<loading v-show="this.$store.state.global.ajax_loading"></loading>
	</div>
</template>

<script>
import loading from './components/spinner.vue';

export default {
	name: 'app',
	data() {
		return {
			transitionName: 'slide-left'
		}
	},
	components: {
		loading
	},
	watch: {
		'$route' (to, from) {
			const toDepth = to.path.split('/').length
			const fromDepth = from.path.split('/').length
			this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
			if(toDepth==fromDepth){
				this.transitionName='fade'
			}
		}
	},
	// beforeRouteUpdate(to, from, next) {
	// 	let isBack = this.$router.isBack
	// 	if (isBack) {
	// 		this.transitionName = 'slide-right'
	// 	} else {
	// 		this.transitionName = 'slide-left'
	// 	}
	// 	this.$router.isBack = false
	// 	next()
	// }
}
</script>


<style lang="less" src="../dist/css/common.less"></style>
<style lang="less" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.child-view {
  //position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
