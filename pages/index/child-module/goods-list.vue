<template>
	<view class="sidebar">
		<view class="aside" ref='aside'>
			<tabs-aside :asideHeight='asideHeight' :asideItem ='asideItem'/>
		</view>
		<view class="main" ref='main'>
			<main-view :mainHeight='mainHeight' :goodsData='goodsData'/>
		</view>
	</view>
</template>

<script>
	import { defineComponent, reactive, ref, onMounted } from 'vue';
	import { getScreen } from '/utils/fn/equipment.js';
	import { asideItem, goodsData } from '../api/index.js';
	import tabsAside from '/components/public/tabs-aside.vue'
	import mainView from '/components/private/main-view.vue'
	export default defineComponent({
		components: {tabsAside,mainView},
		setup(){
			// 生命周期
			onMounted(() => {
				asideHeight.value = (getScreen().height - aside.value.$el.offsetTop)
				mainHeight.value = (getScreen().height - main.value.$el.offsetTop)
			})
			
			// 滚动区域高度
			const aside = ref(null)
			const main = ref(null)
			const asideHeight = ref(0)
			const mainHeight = ref(0)
			
			return {
				aside,
				main,
				asideHeight,
				mainHeight,
				asideItem,
				goodsData
			}
		}
	})
</script>

<style lang="scss" scoped>
  .sidebar{
		width: 100%;
		display: flex;
		.aside{
			width: 170rpx;
			background-color: #f3f3f3;
			text-align: center;
		}
		.main{
			flex: 1;
			padding: 0 30rpx 130rpx;
			box-sizing: border-box;
		}
	}
</style>
