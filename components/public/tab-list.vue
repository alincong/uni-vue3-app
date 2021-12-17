<template>
	<tab :index="current" :animation="true" tabPadding="40" @changeIndex="changeIndex">
		<tab-pane v-for="item in tabTitle" :label="item.title"></tab-pane>
	</tab>
</template>

<script>
	import tab from '/components/third-party/lipan-tabs/lipan-tabs.vue'
	import tabPane from '/components/third-party/lipan-tabs/lipan-tab-pane.vue'
	import { defineComponent, reactive, ref, toRefs, onMounted } from 'vue';
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
			return {
				changeIndex
			}
		}
	})
</script>


<style lang="scss" scoped></style>
