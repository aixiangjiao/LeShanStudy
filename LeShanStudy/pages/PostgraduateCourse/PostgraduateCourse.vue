<template>
	<view class="">
		<view class="u-demo">

		</view>
		<u-tabbar
		    v-model="current"
		    :show="show"
		    :bg-color="bgColor"
		    :border-top="borderTop"
		    :list="list"
			:mid-button="midButton"
			:inactive-color="inactiveColor"
			:activeColor="activeColor"
			icon-size="45rpx"
		></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				show: true,
				bgColor: '#ffffff',
				borderTop: true,
				list: [{
						iconPath: "../../static/tabBar/index1.png",
						selectedIconPath: "../../static/tabBar/index2.png",
						text: '首页',
						customIcon: false,
						pagePath: '/pages/index/index',
					},
					{
						iconPath: "../../static/tabBar/ResearchBaseIndex1.png",
						selectedIconPath: "../../static/tabBar/ResearchBaseIndex2.png",
						text: '研学基地',
						customIcon: false,
						pagePath: '/pages/ResearchBaseIndex/ResearchBaseIndex',
					},
					{
						iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
						selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
						text: '立即报名',
						midButton: true,
						customIcon: false,
						pagePath: '/pages/SignUpNow/SignUpNow',
					},
					{
						iconPath: "../../static/tabBar/PostgraduateCourse1.png",
						selectedIconPath: "../../static/tabBar/PostgraduateCourse2.png",
						text: '研学课程',
						customIcon: false,
						pagePath: '/pages/PostgraduateCourse/PostgraduateCourse',
					},
					{
						iconPath: "../../static/tabBar/UserPage1.png",
						selectedIconPath: "../../static/tabBar/UserPage2.png",
						text: '我的',
						customIcon: false,
						pagePath: '/pages/UserPage/UserPage',
					},
				],
				midButton: true,
				inactiveColor: '#909399',
				activeColor: '#5098FF'
			}
		},
		methods: {
			beforeSwitch(index) {
				return true;
			},
			showChange(index) {
				this.show = !index;
			},
			bgColorChange(index) {
				if(index == 0) {
					this.activeColor = '#5098FF';
					this.inactiveColor = '#909399';
				}
				if(index == 1) {
					this.activeColor = '#D0D0D0';
					this.inactiveColor = '#5A5A5A';
				}
				this.bgColor = ['#ffffff', '#1f1f1d'][index];
			},
			borderTopChange(index) {
				this.borderTop = !index;
			},
			badgeChange(index) {
				if (index == 1) {
					this.list[0].count = 0;
					this.list[4].count = 0;
				} else {
					this.list[0].count = 2;
					this.list[4].count = 23;
				}
			},
			minButtonChange(index) {
				this.midButton = !index;
			}
		}
	}
</script>

<style scoped lang="scss">
	.u-demo-area {
		margin: 0 -40rpx;
	}
</style>
