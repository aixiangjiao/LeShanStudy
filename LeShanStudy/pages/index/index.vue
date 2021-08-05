<template>
	<view class="">
		<view class="u-demo">
			<u-swiper :list="bannerList" mode="dot" height="350"></u-swiper>
			<view class="searchClass">
				<u-search shape="round" :show-action="false"></u-search>
				<view style="width: 100%;height: 160rpx;margin-top: 25rpx;display:flex;justify-content: space-between;">
					<view style="" v-for="(item, index) in searchList">
						<image :src="item.image" style="height: 96rpx;width: 96rpx;margin-bottom: 8rpx;">
						</image></br>
						<text>{{item.title}}</text>
					</view>
				</view>
			</view>
		</view>
		<uTabbarExtend></uTabbarExtend>
	</view>
</template>

<script>
	import uTabbarExtend from '@/components/uTabbarExtend/uTabbarExtend.vue';
	export default {
		components: {
			uTabbarExtend
		},
		data() {
			return {
				bannerList: [],
				searchList: []
			}
		},
		onLoad() {
			this.loadData();
		},
		methods: {
			async loadData() {
				this.bannerList = await this.$api.json('bannerList') || [];
				this.searchList = await this.$api.json('searchList') || [];
			}
		}
	}
</script>

<style scoped lang="scss">
	.u-demo-area {
		margin: 0 -40rpx;
	}

	.searchClass {
		padding: 30rpx;
	}
</style>
