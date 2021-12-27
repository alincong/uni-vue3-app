<template>
	<view>
		<uni-popup ref="popup" background-color="#fff">弹出 Popup</uni-popup>
	</view>
</template>

<script>
	import { defineComponent, reactive, ref } from 'vue';
	export default defineComponent({
		setup() {
			const popup = ref(null)
			const showModal = () => {
				popup.value.open('center')
			}
			
			return {
				popup,
				showModal,
			}
		}
		
	})
</script>

<style>
	/deep/ .uni-popup__wrapper{
		width: 90%;
		height: 80%;
	}
</style>
