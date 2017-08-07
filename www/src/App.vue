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
	components: {
		loading
	}
}
</script>


<style lang="less" src="./img/common.less"></style>
<style lang="less">

</style>
