<template>
	<view id="home">
		<Swiper :swiperData="homeSwiper" :swiperHeight="swiperHeight"/>
		<HomeContent />
	</view>
</template>

<script>
	import Swiper from '/components/public/swiper.vue'
	import HomeContent from './child-module/home-conent.vue'
	import { defineComponent, reactive, ref } from 'vue';
	export default defineComponent({
		components: {
			Swiper,
			HomeContent
		},
	  setup() {
			// 首页轮播图数据
			const swiperHeight = ref('600rpx')
			const homeSwiper = reactive([
				"https://go.cdn.heytea.com/storage/ad/2020/05/21/bfd57914d80d4671b19f5d0ccc176cd5.jpg",
				"https://go.cdn.heytea.com/storage/ad/2020/05/24/49f9b50738dd47878cf1ab54c2eee2e0.jpg",
				"https://go.cdn.heytea.com/storage/ad/2020/05/01/e1c6915022c849fd9492377021aef454.jpg",
				"https://go.cdn.heytea.com/storage/ad/2020/04/27/db60b797c1cd4afabe9666e7df958ffd.jpg",
				"https://go.cdn.heytea.com/storage/ad/2020/05/21/4ba53dda599345bdaf28a08420dd1b6f.jpg"
			])
	    return {
			  homeSwiper,
				swiperHeight
			}
	  }
	});
</script>

<style lang="scss" scoped>
	page{
		max-height: 100%;
	}
</style>
