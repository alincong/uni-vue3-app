<template>
	<view class="address">
		<view class="address-list">
			<view class="info">
				<view style="margin-bottom: 10rpx;">城市码农(先生) 666666</view>
				<view>
					<text class="default">默认地址</text>
					<text class="describe">上海世博大</text>
				</view>
			</view>
			<view class="edit">
				<image src="/static/images/common/edit.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.address{
		margin-top: 20rpx;
		.address-list{
			width: 100%;
			height: 150rpx;
			padding: 30rpx;
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			background-color: #fff;
			.info{
				flex: 1;
				.default{
					font-size: 12px;
					color: #DBA871;
					margin-right: 10rpx;
				}
			}
			.edit{
				width: 10%;
				image{
					width: 44rpx;
					height: 44rpx;
				}
			}
		}
	}
	
</style>
