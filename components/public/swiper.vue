<template>
	<view>
		<swiper class="swiper-box" :autoplay='true' :interval='3000' indicator-dots circular>
			<swiper-item v-for="(item,index) in swiperData" :key="index">
					<image :src="item" mode="widthFix" class="swiper-item"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import { defineComponent, reactive, ref } from 'vue';
	export default defineComponent({
		props:{
			swiperData:{
				type: Array
			}
		},
	});
</script>

<style lang="scss" scoped>
	.swiper-box{
		width: 100%;
		height: 600rpx;
		.swiper-item{
			width: 100%;
			height: 100%;
		}
	}
</style>
