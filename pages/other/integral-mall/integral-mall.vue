<template>
	<view id="integral-mall">
		<scroll-view scroll-y @scroll="scrollPage" style="height: 100%;">
			<view class="info">
				<view class="fz12">可用积分</view>
				<view class="fz32 fw-b color-666" style="margin-top: 10rpx; margin-left: 10rpx;">63</view>
				<view class="integral-details">
					<view open-type="navigate" class="fz12" style="width: 120rpx; border-right: 1px solid #999;">积分明细</view>
					<view open-type="navigate" class="fz12" style="width: 120rpx; margin-left: 20rpx;">兑换记录</view>
				</view>
			</view>
			<!-- tabs -->
			<tab :index="current" :animation="true" tabPadding="40" @changeIndex="changeIndex" ref="tab" :class="tab">
				<tab-pane v-for="item in tabTitle" :label="item.title"></tab-pane>
			</tab>
		</scroll-view>
	</view>
</template>


<script>
	import tab from '/components/third-party/lipan-tabs/lipan-tabs.vue'
	import tabPane from '/components/third-party/lipan-tabs/lipan-tab-pane.vue'
	import { getpagescroll } from '/utils/fn/equipment.js'
	import { defineComponent, reactive, ref, toRefs, onMounted } from 'vue';
	export default defineComponent({
		components:{
			tab,
			tabPane
		},
		setup(){
			const current = ref(0)
			const tabTitle = reactive([
				{title:'Go会员专区'},
				{title:'星球会员专区'},
			])
			const changeIndex = (index) => {
        console.log(index)
			}
			
			const tabFixed = ref(false)
			const tab = ref(null)
			const scrollPage = (e) => {
				const scrollTop = ref(e.detail.scrollTop)
				tabFixed.value = scrollTop.value > tab.value.$el.offsetTop ? true : false
			}
			
			return {
				current,
				tabTitle,
				changeIndex,
				tabFixed,
				tab,
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
		overflow: auto;
		height: 100%;
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
		.tab{
			margin-top: 20rpx;
			background-color: #fff;
		}
		// .fixed{
		// 	position: sticky;
  //     top: 0rpx;
		// 	z-index: 9;
		// 	margin-top: 20rpx;
		// 	background-color: #fff;
		// }
	}
</style>
