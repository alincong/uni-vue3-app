<template>
	<view class="home-content">
		<view class="content-box">
			<!-- 内容顶部区域 -->
			<view class="content-top">
				<view class="content-top-left">
					<navigator open-type="switchTab" url="/pages/index/index">
						<image src="/static/images/home/home_icon_ziqu1.png" mode="widthFix" />
						<view class="mode">门店自取</view>
						<view class="describe">下单免排队</view>
					</navigator>
				</view>
				<view class="content-top-right">
					<navigator open-type="navigate" url="/pages/other/address/address">
						<image src="/static/images/home/home_icon_waimai1.png" mode="widthFix" />
						<view class="mode">外卖</view>
						<view class="describe">无需接触 送喜到家</view>
					</navigator>
				</view>
			</view>
			<!-- 内容中间区域 -->
			<view class="content-center">
				<view class="department">
					<navigator open-type="switchTab" url="/pages/department/department">
						<image src="/static/images/home/home_icon_baihuo1.png" mode="widthFix" />
						<text class="title">喜茶百货</text>
						<view class="describe">灵感商品 立即选购</view>
						</navigator>
				</view>
				<view class="enterprise">
					<navigator open-type="navigate" url="/pages/other/enterprise-reunion/enterprise-reunion">
						<image src="/static/images/home/home_icon_qiye1.png" mode="widthFix" />
						<text class="title">企业团餐</text>
						<view class="describe">50份起送</view>
					</navigator>
				</view>
			</view>
			<!-- 内容底部区域 -->
			<view class="content-bottom">
				<view class="integral">
					<navigator open-type="navigate" url="/pages/other/integral-mall/integral-mall">
						<view class="title">
							我的积分
							<text class="number">63</text>
						</view>
						<view class="describe">可兑换喜茶卷和丰富灵感周边</view>
					</navigator>
				</view>
				<view class="member">
					<image src="/static/images/home/home_icon_erweima.png" mode="widthFix" />
					<view class="describe">会员码</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { defineComponent, reactive, ref } from 'vue';
	export default defineComponent({
		setup(){
			return{
				
			}
		}
	})
</script>

<style lang="scss" scoped>
	.home-content{
		width: 100%;
		padding: 0 30rpx;
		box-sizing: border-box;
		.content-box{
			width: 100%;
			height: 100%;
			position: relative;
			top: -60rpx;
			//内容顶部区域
			.content-top{
				width: 100%;
				height: 342rpx;
				display: flex;
				justify-content: space-between;
				border-radius: 15rpx;
				padding: 60rpx 0;
				background-color: #fff;
				box-sizing: border-box;
				box-shadow: 0 10rpx 10rpx #E5E5E5;
				.content-top-left{
					width: 50%;
					height: 100%;
					text-align: center;
					border-right: 1px solid #999;
					box-sizing: border-box;
					image{
						width: 100rpx;
						height: 100rpx;
					}
					.mode{
						font-size: 20px;
						font-weight: bolder;
						margin: 10rpx 0;
					}
				}
				.content-top-right{
					width: 50%;
					height: 100%;
					text-align: center;
					image{
						width: 100rpx;
						height: 100rpx;
					}
					.mode{
						font-size: 20px;
						font-weight: bolder;
						margin: 10rpx 0;
					}
				}
			}
			//内容中间区域
			.content-center{
				width: 100%;
				height: 152rpx;
				margin-top: 30rpx;
				display: flex;
				justify-content: space-between;
				.department{
					width: 48%;
					height: 100%;
					padding: 30rpx;
					text-align: center;
					border-radius: 15rpx;
					background-color: #EAEBEC;
					box-sizing: border-box;
					image{
						width: 60rpx;
						height: 60rpx;
					}
					.title{
						margin-left: 10rpx;
						vertical-align: super;
					}
				}
				.enterprise{
					width: 48%;
					height: 100%;
					padding: 30rpx;
					text-align: center;
					border-radius: 15rpx;
					background-color: #EAEBEC;
					box-sizing: border-box;
					image{
						width: 60rpx;
						height: 60rpx;
					}
					.title{
						margin-left: 10rpx;
						vertical-align: super;
					}
				}
			}
		  // 内容底部区域
			.content-bottom{
				width: 100%;
				height: 102rpx;
				margin: 30rpx 0;
				padding: 0 10rpx;
				box-sizing: border-box;
		    display: flex;
				justify-content: space-between;
				.integral{
					width: 80%;
					height: 100%;
					line-height: 50rpx;
					border-right: 1px solid #999;
					.number{
						font-size: 20px;
						font-weight: bolder;
					}
				}
				.member{
					width: 20%;
					height: 100%;
					text-align: center;
					image{
						width: 60rpx;
						height: 60rpx;
					}
				}
			}
		}
	}
</style>
