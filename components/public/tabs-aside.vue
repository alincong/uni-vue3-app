<template>
	<scroll-view scroll-y :style="{height: asideHeight + 'px'}">
		<view v-for="(item,index) in asideItem" :class="index === current ? 'active-aside-item' : 'aside-item'" @click='asideClick(index)'>
			<image :src="item.img" mode="widthFix" />
			<view class="name">{{item.name}}</view>
		</view>
		<view style="height: 180rpx;"></view>
	</scroll-view>
</template>

<script>
	import { defineComponent, reactive, ref, onMounted,nextTick } from 'vue';
	export default defineComponent({
		props: {
			asideHeight: {
				type: Number,
			},
			asideItem: {
				type: Array,
				default: () => []
			},
		},
		setup(props,{attrs}) {
			const current = ref(0)
			const asideClick = (index) => {
				current.value = index
				// console.log(attrs.GoodsListOffsetTop[index])
			}
			
			// nextTick(() => {
			// 	console.log(attrs.GoodsListOffsetTop)
			// })
			
			return {
				current,
				scrollTop,
				
				// 方法
				asideClick,
			}
		}
	})
</script>

<style lang="scss" scoped>
	.aside-item,.active-aside-item{
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
	.active-aside-item{
		background-color: #fff;
		border-left: 3px solid #DBA871;
	}
</style>
