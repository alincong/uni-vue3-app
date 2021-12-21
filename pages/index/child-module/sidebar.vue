<template>
	<view class="sidebar">
		<view class="aside" ref='aside'>
			<scroll-view scroll-y :style="{height: asideHeight}">
				<view class="aside-item" v-for="item in asideItem">
					<image :src="item.img" mode="widthFix"></image>
					<view class="name">{{item.name}}</view>
				</view>
				<view style="height: 180rpx;"></view>
			</scroll-view>
		</view>
		<view class="main" ref='main'>
			<scroll-view scroll-y :style="{height: mainHeight}"></scroll-view>
		</view>
	</view>
</template>

<script>
	import { defineComponent, reactive, ref, onMounted } from 'vue';
	import { getScreen } from '/utils/fn/equipment.js';
	import { asideitem } from '../api/index.js'
	export default defineComponent({
		setup(){
			// 生命周期
			onMounted(() => {
				asideHeight.value = (getScreen().height - aside.value.$el.offsetTop) + 'px'
				mainHeight.value = (getScreen().height - main.value.$el.offsetTop) + 'px'
			})
			
			// 滚动区域高度
			const aside = ref(null)
			const main = ref(null)
			const asideHeight = ref(0)
			const mainHeight = ref(0)
			
			// aside - tabs项
			const asideItem = asideitem
			
			return {
				aside,
				main,
				asideHeight,
				mainHeight,
				asideItem
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
			background-color: #f8f8f8;
			text-align: center;
			.aside-item{
				width: 100%;
				height: 144rpx;
				padding: 30rpx 20rpx;
				box-sizing: border-box;
				image{
					width: 52rpx;
					height: 50rpx;
				}
				.name{
					font-size: 12px;
					color: #999;
				}
			}
		}
		.main{
			flex: 1;
			padding: 0 30rpx 130rpx;
			box-sizing: border-box;
			background-color: yellow;
		}
	}
</style>
