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
			 </view>
		 </view>
		 <!-- scroll-view开始 -->
		 <view class="scroll-box">
		 	  <scroll-view ref='tabs' :scroll-top="scrollTop" scroll-y='true' @scroll="scrollView" @scrolltolower='pullUp' :style="{height: scrollHeight}">
					<view class="goods-list">
						<view class="goods-item" v-for="item in goodsList">
						  <view class="info">
								<view class="left">
									<view class="name fz14">{{item.goodsName}}</view>
									<image :src="item.img" mode="widthFix"></image>
									<view class="describe" style="margin-bottom: 20rpx;">订单编号：{{item.number}}</view>
									<view class="describe">下单时间：{{item.time}}</view>
								</view>
								<view class="right">
									<view class="describe" style="margin-bottom: 230rpx;">{{item.state}}</view>
									<view class="fz16">￥{{item.money}}</view>
								</view>
							</view>
							<view class="btn"></view>
						</view>
					</view>
					<!-- 占位 -->
					<view style="height: 98rpx;"></view>
				</scroll-view>
		 </view>
	</view>
</template>

<script>
		import { defineComponent, reactive, ref, onMounted, nextTick } from 'vue';
		import { getScreen } from '/utils/fn/equipment.js'
		export default defineComponent({
			setup(){
				// 生命周期
				onMounted(() => {
					scrollHeight.value = (getScreen().height - tabs.value.$el.offsetTop) + 'px'
				})
				
				// 聊天区域
				const current = ref(0)
				const tabTitle = reactive(['当前订单','历史订单'])
				const onClickItem = ({currentIndex}) => {
					current.value = currentIndex 
				}
				
				// scroll-view
				const tabs = ref(null)
				const scrollTop = ref(0)
				const scrollHeight = ref(0)
				nextTick(() => {
					console.log(scrollHeight.value)
				})
				const scrollView = (e) => {
					// console.log(e)
				}
				const pullUp = () => {
					console.log('触底了')
				}
 				
				// 商品列表
				const goodsList = reactive([
					{
						goodsName: '益田假日天地GO店',
						state: '已完成',
						img: 'https://go.cdn.heytea.com/product/2019/08/23/tmp/606742485b404725bcc5fe37330c4cde.jpg',
						number: '755067202001181805428750',
						time: '2020-01-18 18:05:43',
						money: '66.00'
					},
					{
						goodsName: '益田假日天地GO店',
						state: '已完成',
						img: 'https://go.cdn.heytea.com/storage/product/2019/11/12/5ad4996d0fdd4f3a85a25b8fe95a4db8.jpg',
						number: '755067202001181805428750',
						time: '2020-01-18 18:05:43',
						money: '66.00'
					},
					{
						goodsName: '益田假日天地GO店',
						state: '已完成',
						img: 'https://go.cdn.heytea.com/product/2019/08/23/tmp/606742485b404725bcc5fe37330c4cde.jpg',
						number: '755067202001181805428750',
						time: '2020-01-18 18:05:43',
						money: '66.00'
					},
					{
						goodsName: '益田假日天地GO店',
						state: '已完成',
						img: 'https://go.cdn.heytea.com/storage/product/2019/11/12/5ad4996d0fdd4f3a85a25b8fe95a4db8.jpg',
						number: '755067202001181805428750',
						time: '2020-01-18 18:05:43',
						money: '66.00'
					},
				])
				
				return {
					current,
					tabTitle,
					tabs,
					scrollTop,
					scrollHeight,
					goodsList,
					
					// 方法
					onClickItem,
					scrollView,
					pullUp
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
		.scroll-box {
			.goods-item {
				width: 100%;
				height: 400rpx;
				padding: 30rpx 40rpx;
				box-sizing: border-box;
				background-color: #fff;
				margin-bottom: 20rpx;
				.info{
					width: 100%;
					height: 100%;
					display: flex;
					justify-content: space-between;
					.left{
						flex: 1;
						image{
							width: 150rpx;
							height: 112rpx;
							margin: 30rpx 0;
						}
					}
					.right{
						width: 120rpx;
						text-align: right;
					}
				}
			}
		}
	}
</style>