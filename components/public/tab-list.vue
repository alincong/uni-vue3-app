<template>
	<tab :index="current" :animation="true" tabPadding="40" @changeIndex="changeIndex">
		<tab-pane v-for="item in tabTitle" :label="item.title">
			<view class="tab-list">
			  <view v-for="item in tabData" class="tab-item">
					<view>
						<image :src="item.http_url + item.image_url" mode="widthFix" />
						<view class="info">
							<view class="title fz14" >{{ item.name }}</view>
							<view class="score">
								<text class="value">{{ item.score }}</text>
								<text class="describe">积分</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</tab-pane>
	</tab>
</template>

<script>
	import tab from '/components/third-party/lipan-tabs/lipan-tabs.vue'
	import tabPane from '/components/third-party/lipan-tabs/lipan-tab-pane.vue'
	import { defineComponent, reactive, ref, toRefs, onMounted,computed } from 'vue';
	export default defineComponent({
		props:{
			current: {
				type: Number,
				default: 0
			},
			tabTitle: {
				type: Array,
				default:() => [
					{title: '选项1'},
					{title: '选项2'},
				],
				// default: () => ({}) 对象
				// default: () => {} 函数
			},
			tabGoData: {
				type: Array,
			},
			tabStarData: {
				type: Array,
			}
		},
		components:{
			tab,
			tabPane
		},
		setup(props,{emit}){
			const changeIndex = (index) => {
			  emit('tabItemClick', index)
			}
			const tabData = computed(() => {
				return props.current ? props.tabStarData : props.tabGoData
			})
			return {
				changeIndex,
				tabData
			}
		}
	})
</script>


<style lang="scss" scoped>
	.tab-list{
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		.tab-item{
			width: 50%;
			height: 400rpx;
			image{
				width: 374rpx;
			  height: 300rpx
			}
			.info{
				padding: 0 20rpx;
				box-sizing: border-box;
				.score{
					margin-top: 10rpx;
					.value{
						color: #DBA871;
					}
				}
			}
		}
	}

</style>
