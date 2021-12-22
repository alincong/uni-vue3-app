<template>
	<view class="sidebar">
		<!-- 侧边栏 -->
		<view class="aside" ref='aside'>
			<tabs-aside :asideHeight='asideHeight' :GoodsListOffsetTop='GoodsListOffsetTop' :asideItem ='asideItem'/>
		</view>
		<!-- 商品视图 -->
		<view class="main" ref='main'>
			<main-view :mainHeight='mainHeight' :goodsData='goodsData' ref='mainIitem'/>
		</view>
	</view>
</template>

<script>
	import { defineComponent, reactive, ref, onMounted, nextTick } from 'vue';
	import { getScreen } from '/utils/fn/equipment.js';
	import { asideItem, goodsData } from '../api/index.js';
	import tabsAside from '/components/public/tabs-aside.vue'
	import mainView from '/components/private/main-view.vue'
	export default defineComponent({
		components: {tabsAside,mainView},
		setup(){
			// 生命周期
			const flay = ref(false)
			onMounted(() => {
				asideHeight.value = (getScreen().height - aside.value.$el.offsetTop)
				mainHeight.value = (getScreen().height - main.value.$el.offsetTop)
				GoodsListOffsetTop.value = mainIitem.value.goodsTitleOffsetTop 
			})
			
			// 滚动区域高度
			const aside = ref(null)
			const main = ref(null)
			const mainIitem = ref(null)
			const asideHeight = ref(0)
			const mainHeight = ref(0)
			
			// 保存main-view每个商品列表的高度
			let GoodsListOffsetTop = ref([]) //使用const定义，报错 Assignment to constant variable, 使用reactive赋值不进去
			
			return {
				flay,
				aside,
				main,
				mainIitem,
				asideHeight,
				mainHeight,
				GoodsListOffsetTop,
				
				// api数据
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
			padding: 0 20rpx 130rpx;
			box-sizing: border-box;
		}
	}
</style>
