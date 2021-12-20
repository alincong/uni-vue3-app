<template>
	<view class="tab-s-column">
		<scroll-view scroll-y :scroll-top="scrollTop" @scroll="scroll" style="height: {{ scrollViewHeight }};"></scroll-view>
	</view>
</template>

<script>
	import { defineComponent, reactive, ref } from 'vue';
	export default defineComponent({
		props:{
			scrollTop: {
				type: Number,
				default: 0
			},
			scrollViewHeight:{
				type: String,
				default: '100vh'
			}
		},
		setup(props,{emit}) {
			const scroll = () => {
				emit('viewScroll')
			}
		}
	})
</script>

<style>
</style>
