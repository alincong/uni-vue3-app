<template>
	<view class="order">
		<!-- 联系区域 -->
		<view class="contact">
			<view class="contact-box">
				<image src="/static/images/order/order_icon_talk2.0.png" mode="widthFix" />
				<text class="fz12">想对你说</text>
			</view>
		</view>
		<!-- tabs区域 -->
		 <uni-segmented-control :current="current" :values="tabTitle" @clickItem="onClickItem" styleType="text" activeColor="#000" class="tabs"></uni-segmented-control>
		 <view class="content">
			 <view v-show="current === 0">
					<view class="tabs-one">
						<view class="left">
							<text class="store">门店订单</text>
							<text class="invoicing">百货订单</text>
						</view>
						<view class="right">
							<text>批量开票</text>
						</view>
					</view>
			 </view>
			 <view v-show="current === 1">
					选项卡2的内容
			 </view>
		 </view>
		 <!-- scroll-view开始 -->
		 <view class="scroll-box">
		 	  <scroll-view ref='tabs' :scroll-top="scrollTop" scroll-y='true' @scroll="scrollView" style="height: 1028rpx;">
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
				</scroll-view>
		 </view>
	</view>
</template>

<script>
		import { defineComponent, reactive, ref, onMounted } from 'vue';
		import { getScreen } from '/utils/fn/equipment.js'
		export default defineComponent({
			setup(){
				// 生命周期
				onMounted(() => {
					scrollHeight.value = (getScreen().height - tabs.value.$el.offsetTop) + 'px'
					console.log(scrollHeight.value)
				})
				
				
				const current = ref(0)
				const tabTitle = reactive(['当前订单','历史订单'])
				const onClickItem = ({currentIndex}) => {
					current.value = currentIndex 
				}
				
				// scroll-view
				const tabs = ref(null)
				const scrollTop = ref(0)
				const scrollHeight = ref(0)
				
				const scrollView = (e) => {
					console.log(e)
				}
				
				return {
					current,
					tabTitle,
					tabs,
					scrollTop,
					scrollHeight,
					
					// 方法
					onClickItem,
					scrollView
				}
			}
		})
</script>

<style lang="scss" scoped>
	page{
		height: 100%;
		overflow: hidden;
		background-color: #f8f8f8;
	}
	.order{
		/* 联系区域 */
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
				image{
					width: 40rpx;
					height: 40rpx;
					margin: 10rpx;
				}
			}
		}
		/* tabs区域 */
		.tabs{
			width: 100%;
			height: 100rpx;
			background-color: #fff;
		}
		.content{
			.tabs-one{
				width: 100%;
				height: 104rpx;
				padding: 18rpx 30rpx;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: #666;
				font-size: 14px;
				.left{
					width: 330rpx;
					height: 100%;
					.store{
						display: inline-block;
						width: 164rpx;
						height: 100%;
						text-align: center;
						line-height: 68rpx;
						color: #DBA871;
						background-color: #fff;
					}
					.invoicing{
						display: inline-block;
						width: 164rpx;
						height: 100%;
						text-align: center;
						line-height: 68rpx;
					}
				}
				.right{
					width: 214rpx;
					text-align: center;
				}
			}
		}
	  /* scroll-view开始 */
		.scroll-box{
			// height: 100%;
			// overflow: hidden;
			// white-space: nowrap;
			background-color: #fff;
		}
	}
</style>
