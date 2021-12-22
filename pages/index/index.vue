<template>
	<view id="index">
		<index-top/>
		<goods-list />
	</view>
</template>

<script>
	import indexTop from './child-module/index-top.vue'
	import goodsList from './child-module/goods-list.vue'
	import { defineComponent, reactive, ref } from 'vue';
	export default defineComponent({
		components:{
			indexTop,
			goodsList
		}
	})
</script>

<style lang="scss" scoped>
	page{
		max-height: 100%;
		overflow: hidden;
	}
</style>
