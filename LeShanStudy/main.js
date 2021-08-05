import Vue from 'vue'
import store from './store'
import App from './App'
import Json from './Json' //测试用数据
import uView from "uview-ui";
Vue.use(uView);
const msg = (title, duration=1500, mask=false, icon='none')=>{
	//统一提示方便全局修改
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}

function clone(obj){
	let buf;
	if(obj instanceof Array){
		buf = [];
		let i = obj.length;
		while(i--){
			buf[i] = clone(obj[i]);
		}
		return buf;
	}
	
	if(obj instanceof Date){
		return obj;
	}
	
	if(obj instanceof Object){
		buf = {};
		for(let k in obj){
			buf[k] = clone(obj[k]);
		}
		return buf;
	}
	
	
	return obj;
}

const json = type=>{
	//模拟异步请求数据
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(clone(Json[type]));
		}, 500)
	})
}

const prePage = ()=>{
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}

Vue.config.productionTip = false
Vue.prototype.$fire = new Vue();
Vue.prototype.$store = store;
Vue.prototype.$api = {msg, json, prePage};
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
