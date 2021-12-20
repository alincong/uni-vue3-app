<template>
	<view class="order">
		<view class="contact">
			<view class="contact-box">
				<image src="/static/images/order/order_icon_talk2.0.png" mode="widthFix" />
				<text class="fz12">想对你说</text>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	page{
		background-color: #f8f8f8;
	}
	.order{
		.contact{
			width: 100%;
			height: 88rpx;
			padding:  0 20rpx;
			box-sizing: border-box;
			background-color: #fff;
			.contact-box{
				width: 190rpx;
				height: 60rpx;
				display: flex;
				align-items: center;
				margin-top: 14rpx;
				border: 1px solid #999;
				border-radius: 30rpx;
				// background-color: red;
				
				image{
					width: 40rpx;
					height: 40rpx;
					margin: 10rpx;
				}
			}
		}
	}
</style>
