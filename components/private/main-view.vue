<template>
	<scroll-view scroll-y :style="{height: mainHeight + 'px'}">
		<view class="goods-box" v-for="(whole,index) in goodsData">
			<view class="goods-type">
				<view class="goods-title">{{whole.name}}</view>
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
	export  default  defineComponent({
		props: {
			mainHeight: {
				type: Number
			},
			goodsData: {
				type: Array,
				default: () => []
			}
		},
	})
</script>

<style lang="scss" scoped>
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
					margin: 0 0 8rpx;
				}
				.label{
					width: 100%;
					display: flex;
					justify-content: space-between;
					.label-name{
						display: inline-block;
						height: 44rpx;
						color: orange;
						padding: 6rpx 10rpx;
						box-sizing: border-box;
						font-size: 12px;
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
