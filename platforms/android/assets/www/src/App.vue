<template>
	<div>
		<router-view class="child-view"></router-view>
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
	beforeRouteUpdate(to, from, next) {
		let isBack = this.$router.isBack
		if (isBack) {
			this.transitionName = 'slide-right'
		} else {
			this.transitionName = 'slide-left'
		}
		this.$router.isBack = false
		next()
	}
}
</script>


<style lang="less" src="../dist/css/common.less"></style>
<style lang="less" scoped>

</style>
