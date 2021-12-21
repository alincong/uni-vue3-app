<template>
	<view id="my">
		<view v-show="state ? true : false" class="fixed">position: fixed</view>
		<scroll-view scroll-y @scroll="scrollView" style="height: 100%;">
			<view>
				<view>1</view>
				<view>1</view>
				<view>1</view>
				<view>1</view>
				<view>1</view>
				<view>1</view>
				<view>1</view>
				<view>1</view>
				<view>1</view>
				<view>1</view>
				<view>1</view>
				<view>1</view>
				<view>1</view>
				<view>1</view>
				<view>1</view>
				<view>1</view>
				<view>1</view>
				<view>1</view>
				<view>1</view>
				<view>1</view>
				<view>1</view>
				<view>1</view>
				<view>1</view>
				<view>1</view>
			</view>
			<view class="ceiling" ref='ceiling'></view>
			<view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
				<view>2</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import { defineComponent, reactive, ref, onMounted, nextTick } from 'vue';
	export default defineComponent({
		setup() {
			const ceiling = ref(null)
			const state = ref(false)
			onMounted(() => {
				console.log(ceiling.value.$el.offsetTop)
			})
			const scrollView = (e) => {
				console.log(e.detail.scrollTop)
				state.value = e.detail.scrollTop > ceiling.value.$el.offsetTop ? true : false
			}
			
			
			return {
				ceiling,
				state,
				
				// 方法
				scrollView
			}
		}
	})
</script>

<style lang="scss" scoped>
	page{
		height: 100%;
		overflow: hidden;
	}
	#my{
		height: 100%;
		.ceiling{
			width: 100%;
			height: 200rpx;
			background-color: skyblue;
		}
		.fixed{
			position: fixed;
			top: 0;
			left: 0;
			z-index: 9;
			width: 100%;
			height: 200rpx;
			background-color: skyblue;
		}
	}
</style>