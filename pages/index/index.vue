<template>
	<view id="index">
		<!-- 顶部区域 -->
		<index-top/>
		<sidebar />
	</view>
</template>

<script>
	import indexTop from './child-module/index-top.vue'
	import sidebar from './child-module/sidebar.vue'
	import { defineComponent, reactive, ref } from 'vue';
	export default defineComponent({
		components:{
			indexTop,
			sidebar
		}
	})
</script>

<style lang="scss" scoped>
	page{
		max-height: 100%;
		overflow: hidden;
	}
</style>
