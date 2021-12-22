<template>
	<scroll-view scroll-y :style="{height: mainHeight + 'px'}">
		<!-- 轮播图区域 -->
		<view class="swiper-box">
			<view v-for="item in goodsSwiper">
				<Swiper :swiperData="item" class="swiper-item"/>
			</view>
		</view>
		<!-- 商品列表区域 -->
		<view class="goods-box" v-for="(whole,index) in goodsData">
			<view class="goods-type">
				<view class="goods-title" :ref='el => {goodsTitle[index] = el}'>{{whole.name}}</view>
				<view class="goods-item" v-for="(item,i) in whole.products">
					<view class="goods-image">
						<view v-for="(jpg,n) in item.images">
							<image v-if="!n" :src="jpg.url" mode="widthFix"></image>
						</view>
					</view>
					<view class="goods-info">
						<view class="name">{{item.name}}</view>
						<view class="label">
							<text v-for="(lab,l) in item.labels" class="label-name">{{lab.name}}</text>
						</view>
						<view class="description">{{item.description}}</view>
						<view class="price">￥{{item.price}}</view>
					</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import { defineComponent, reactive, ref, onMounted, nextTick } from 'vue';
	import Swiper from '/components/public/swiper.vue'
	export  default  defineComponent({
		components:{Swiper},
		props: {
			mainHeight: {
				type: Number
			},
			goodsData: {
				type: Array,
				default: () => []
			}
		},
		setup(){
			onMounted(() => {
				goodsTitle.value.forEach((item) => {
					goodsTitleOffsetTop.push(item.$el.offsetTop)
				})
			})
			// 轮播提数据
			const goodsSwiper = reactive([
				[
					'https://go.cdn.heytea.com/storage/ad/2020/05/28/752a5519e89541bd8417614c599cf8c3.jpg',
					'https://go.cdn.heytea.com/storage/ad/2020/05/24/38b7f686cf10449c85b0f5489d5d958e.jpg',
					'https://go.cdn.heytea.com/storage/ad/2020/05/21/2315beb5105944e8b795c5c0084ec99f.jpg',
					'https://go.cdn.heytea.com/storage/ad/2020/05/21/b88c6780a73249b0b0166784917a5046.jpg'
				],
				[
					'https://go.cdn.heytea.com/storage/ad/2020/05/21/acfc6504f3074cf6b730f516adc558f6.jpg',
					'https://go.cdn.heytea.com/storage/ad/2020/04/26/2373600789c64752b2415293877ead40.jpg',
					'https://go.cdn.heytea.com/storage/ad/2020/04/22/515df8c726e740089ae4c55582b4ce09.jpg',
					'https://go.cdn.heytea.com/storage/ad/2020/04/14/d0e51cb22c0a437293c0e6a879b59c7d.jpg'
				]
			])
			
			const goodsTitle = ref([])
			const goodsTitleOffsetTop = reactive([])
			
			return {
				goodsSwiper,
				goodsTitle,
				goodsTitleOffsetTop
			}
		}
	})
</script>

<style lang="scss" scoped>
	.swiper-item{
		margin-bottom: 20rpx;
	}
	// 商品列表区域
	.goods-type{
		width: 100%;
		.goods-title{
			width: 100%;
			height: 92rpx;
			color: #999;
			font-size: 13px;
			padding: 30rpx 0;
			box-sizing: border-box;
		}
		.goods-item{
			width: 100%;
			height: 242rpx;
			margin:  0 0 40rpx;
			box-sizing: border-box;
			display: flex;
			.goods-image{
				width: 180rpx;
				height: 100%;
				text-align: center;
				image{
					width: 180rpx;
					height: 136rpx;
					margin-top: 53rpx;
				}
			}
			.goods-info{
				flex: 1;
				height: 100%;
				.name{
					width: 100%;
					height: 40rpx;
					color: #343434;
					font-size: 14px;
					margin: 0 0 8rpx;
				}
				.label{
					width: 100%;
					// display: flex;
					// justify-content: space-between;
					.label-name{
						display: inline-block;
						width: 120rpx;
						height: 44rpx;
						font-size: 12px;
						color: rgb(90, 165, 65);
						background: rgba(90, 165, 65, 0.2);
						padding: 6rpx 10rpx;
						box-sizing: border-box;
						text-overflow:ellipsis; 
						overflow:hidden; 
						white-space:nowrap;
						margin-right: 10rpx;
						&:last-child{
							display: inline-block;
							width: 170rpx;
							color: #bababa;
							background-color: #bababa33;
						}
					}
				}
				.description{
					width: 360rpx;
					height: 64rpx;
					color: #999;
					font-size: 12px;
					margin: 0 0 20rpx;
					display: -webkit-box; 
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical; 
					overflow: hidden;
				}
				.price{
					font-size: 18px;
					color: #343434;
					font-weight: bold;
				}
			}
		}
	}
</style>
