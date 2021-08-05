/* 用户 */
const userInfo = {
	status: 1,
	data: {
		id: 1,
		mobile: 18888888888,
		nickname: 'Leo yo',
		portrait: 'http://img.61ef.cn/news/201409/28/2014092805595807.jpg'
	},
	msg: '提示'
};

/* 首页轮播图 */
const bannerList = [{
	image: "../../static/index/banner.jpg", //轮播图图片链接地址，这里仅是示例
	title: '昨夜星辰昨夜风，画楼西畔桂堂东'
}, {
	image: "../../static/index/news.jpg", //轮播图图片链接地址，这里仅是示例
	title: '昨夜星辰昨夜风，画楼西畔桂堂东'
}, {
	image: "../../static/index/product.jpg", //轮播图图片链接地址，这里仅是示例
	title: '昨夜星辰昨夜风，画楼西畔桂堂东'
}];

const searchList = [{
	image: "../../static/index/jidi.png", //轮播图图片链接地址，这里仅是示例
	title: '研学基地'
},{
	image: "../../static/index/yxkc.png", //轮播图图片链接地址，这里仅是示例
	title: '研学课程'
},{
	image: "../../static/index/yxlx.png", //轮播图图片链接地址，这里仅是示例
	title: '研学路线'
},{
	image: "../../static/index/gywm.png", //轮播图图片链接地址，这里仅是示例
	title: '关于我们'
}]

export default {
	bannerList,
	searchList
}
