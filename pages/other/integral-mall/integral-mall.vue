<template>
	<view id="integral-mall">
		<!-- <tab-list v-show='tabFixed' :tabTitle='tabTitle' @tabItemClick='tabItemClick' ref='tabCopy' class='tabFixed'/> -->
		<scroll-view scroll-y @scroll="scrollPage" style="height: 100%;">
			<view class="info">
				<view class="fz12">可用积分</view>
				<view class="fz32 fw-b color-666" style="margin-top: 10rpx; margin-left: 10rpx;">63</view>
				<view class="integral-details">
					<view open-type="navigate" class="fz12" style="width: 120rpx; border-right: 1px solid #999;">积分明细</view>
					<view open-type="navigate" class="fz12" style="width: 120rpx; margin-left: 20rpx;">兑换记录</view>
				</view>
			</view>
			<tab-list :current='current' :tabTitle='tabTitle' :tabGoData='tabGoData' :tabStarData='tabStarData' @tabItemClick='tabItemClick' ref='tab' class='tabs'/>
		</scroll-view>
	</view>
</template>


<script>
  import tabList from '/components/public/tab-list.vue'
	import * as api from '../api/index.js'
	import { defineComponent, reactive, ref, toRefs } from 'vue';
	export default defineComponent({
		components:{
			tabList
		},
		setup(props){
			const tabTitle = reactive([
				{title:'Go会员专区'},
				{title:'星球会员专区'},
			])
			
			const tabGoData = api.integralMall.filter(item => item.state === 'Go')
			const tabStarData = api.integralMall.filter(item => item.state !== 'Go')
			console.log(tabGoData,tabStarData)
			
			
			const current = ref(0)
			const tabItemClick = (index) => {
				current.value = index
			}
			
			
			
			const tab = ref(null)
			const tabFixed = ref(false)
			const scrollPage = (e) => {
				const scrollTop = ref(e.detail.scrollTop)
				console.log(scrollTop.value)
				tabFixed.value = scrollTop.value > tab.value.$el.offsetTop ? true : false
			}
			
			return {
				current,
				tab,
				tabFixed,
				
				// 数组、对象数据
				tabTitle,
				tabGoData,
				tabStarData,
				
				// 方法
				tabItemClick,
				scrollPage,
			}
		}
	})
	
</script>

<style lang="scss" scoped>
	page{
		height: 100%;
	}
	#integral-mall{
		height: 100vh;
		position: relative;
		.info{
			width: 100%;
			height: 360rpx;
			padding: 40rpx;
			box-sizing: border-box;
			// background: url是background-image: url的缩写
			background: url('../../../static/images/mall/me_img_banner_mall.png') no-repeat;
			// 必须background-size图片才能显示出来
			background-size: 100% 100%;
			position: relative;
			.integral-details{
				position: absolute;
				bottom: 40rpx;
				display: flex;
			}
		}
    // tabs区域
		.tabs{
			margin-top: 20rpx;
			background-color: #fff;
		}
	}
</style>
