<template>
	<view class="sidebar">
		<!-- 侧边栏 -->
		<view class="aside" ref='aside'>
			<tabs-aside :asideHeight='asideHeight' :asideData ='asideData' :GoodsListOffsetTop='GoodsListOffsetTop' @asideItemClick='asideItemClick'/>
		</view>
		<!-- 商品视图 -->
		<view class="main" ref='main'>
			<main-view ref='mainIitem' :mainHeight='mainHeight' :goodsData='goodsData' :scrollTop='scrollTop' />
		</view>
	</view>
</template>

<script>
	import { defineComponent, reactive, ref, onMounted, nextTick } from 'vue';
	import { getScreen } from '/utils/fn/equipment.js';
	import { asideData, goodsData } from '../api/index.js';
	import tabsAside from '../sun-module/tabs-aside.vue'
	import mainView from '../sun-module/main-view.vue'
	export default defineComponent({
		components: {tabsAside,mainView},
		setup(){
			// 生命周期
			onMounted(() => {
				asideHeight.value = (getScreen().height - aside.value.$el.offsetTop)
				mainHeight.value = (getScreen().height - main.value.$el.offsetTop)
				GoodsListOffsetTop.value = mainIitem.value.goodsTitleOffsetTop
			})
			
			// --------------------------------滚动区域高度--------------------------------
			const aside = ref(null)
			const main = ref(null)
			const asideHeight = ref(0)
			const mainHeight = ref(0)
			
			// --------------------------------楼层效果--------------------------------
			const mainIitem = ref(null)
			// 保存main-view每个商品列表的高度
			let GoodsListOffsetTop = ref([]) //使用const定义，报错 Assignment to constant variable, 使用reactive赋值不进去
			const scrollTop = ref(0)

		  const asideItemClick = (index) => {
				scrollTop.value = GoodsListOffsetTop.value[index] + 1
			}
			
			return {
				aside,
				main,
				asideHeight,
				mainHeight,
				mainIitem,
				GoodsListOffsetTop,
				scrollTop,
				
				//方法
				asideItemClick,
				
				// api数据
				asideData,
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
			box-sizing: border-box;
		}
	}
</style>
