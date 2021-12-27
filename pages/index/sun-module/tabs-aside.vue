<template>
	<scroll-view scroll-y :style="{height: asideHeight + 'px'}">
		<view v-for="(item,index) in asideData" :class="index === current ? 'active-aside-item' : 'aside-item'" @click='asideClick(index)'>
			<image :src="item.img" mode="widthFix" />
			<view class="name">{{item.name}}</view>
		</view>
		<view style="height: 180rpx;"></view>
	</scroll-view>
</template>

<script>
	import { defineComponent, reactive, ref, onMounted, nextTick, watch } from 'vue';
	import emitter from '/utils/mitt/index.js'
	export default defineComponent({
		props: {
			// 滚动高度
			asideHeight: {
				type: Number,
			},
			asideData: {
				type: Array,
				default: () => []
			},
		},
		setup(props,{attrs,emit}) {
			// ----------------------改变current----------------------
			const current = ref(0)
			const asideClick = (index) => {
				current.value = index
				emit('asideItemClick',index)
			}
			
			// ----------------------监听mainScroll滚动事件，改变current----------------------
			emitter.on("mainScroll", (scrollHeight) => {
				let goodsListOffsetTop = ref([...attrs.GoodsListOffsetTop])
				for(let i = 0; i < goodsListOffsetTop.value.length - 1; i++){
					if(current.value != i && scrollHeight >= goodsListOffsetTop.value[i] && scrollHeight < goodsListOffsetTop.value[i + 1]) current.value = i
				}
			});
			
			// watchEffect(() => {
			// 	if(current.value){
			// 		emit('asideItemClick',current.value)
			// 	}
			// })
			// watch(current, () => {
			// 	console.log(current.value)
			// 	emit('asideItemClick',current.value)
			// })
							
			return {
				current,
				
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
