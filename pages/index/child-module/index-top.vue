<template>
	<view class="index-top">
		<!-- 搜索区域 -->
		<view class="search">
			<view class="search-input">
				<icon type="search" size="15" class="search-icon"/>
				<text class="fz14">搜索</text>
			</view>
		</view>
		
		<!-- 定位 -->
		<view class="positioning">
			<view class="positioning-left">
				<view class="location">
					<image src="/static/images/common/star_normal.png" style="width: 30rpx; height: 30rpx;" mode="widthFix" />
					<text class="title">中心城店</text>
					<image src="../../../static/images/common/black_arrow_right.png" style="width: 40rpx; height: 40rpx;" mode="widthFix"></image>
				</view>
				<view class="describe">距离您520m</view>
			</view>
			<view class="positioning-right">
				<text class="invite">自取</text>
				<text class="take-out">外卖</text>
			</view>
		</view>
		
		<!-- swiper区域 -->
		<view class="swiper-box">
			<swiper class="swiper" autoplay vertical :interval="3000" :duration="1000" circular>
				<swiper-item v-for="item in swiperList" :key='item.id'>
					<view class="swiper-item">
						<image :src="item.image"></image>
						<text class="content">{{ item.content }}</text>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import { defineComponent, reactive, ref } from 'vue';
	import * as api from '/api/index.js'
	export default defineComponent({
		setup() {
			const swiperList = api.notices
			
			return{
				swiperList
			}
		}
	})
</script>

<style lang="scss" scoped>
	.index-top{
		padding: 0 40rpx;
		box-sizing: border-box;
		// 搜索区域
		.search {
			height: 100rpx;
			padding: 20rpx 0;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: center;
		
			.search-input {
				width: 100%;
				height: 100%;
				background-color: #f7f7f7;
				border-radius: 50rem !important;
				display: flex;
				justify-content: center;
				align-items: center;
		
				.search-icon {
					margin-right: 10rpx;
				}
			}
		}
		// 定位区域
		.positioning{
			width: 100%;
			height: 130rpx;
			margin-top: 10rpx;
			display: flex;
			justify-content: space-between;
			.location{
				display: flex;
				align-items: center;
				justify-content: center;
				margin-bottom: 10rpx;
				.title{
					color: #000;
					font-weight: bold;
					margin-left: 10rpx;
				}
			}
			.positioning-right{
				width: 220rpx;
				height: 70rpx;
				line-height: 70rpx;
				background-color: #f6f6f6;
				border-radius: 40rpx;
				box-sizing: border-box;
				padding: 0 10rpx;
				.invite{
					display: inline-block;
					width: 50%;
					text-align: center;
					border-radius: 40rpx;
					background-color: #000;
					color: #fff;
					font-size: 14px;
				}
				.take-out{
					display: inline-block;
					width: 50%;
					text-align: center;
				}
			}
		}
		// swiper区域
		
		.swiper-box{
			width: 100%;
			height: 60rpx;
			overflow: hidden;
			.swiper{
				width: 100%;
				height: 60rpx;
				.swiper-item{
					width: 100%;
					height: 60rpx;
					display: flex;
					line-height: 60rpx;
					// 通过align-items设置图片居中
					align-items: center;
					overflow: hidden;
					image{
						width: 30rpx;
						height: 30rpx;
					}
					.content{
						display: inline-block;
						width: 100%;
						height: 60rpx;
						margin-left: 10rpx;
						text-overflow: ellipsis;
						white-space: nowrap;
						overflow: hidden;
						font-size: 12px;
					}
				}
			}
		}
	}
</style>
