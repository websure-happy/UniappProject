import Vue from 'vue'
import App from './App'
import module from './ajax/api/index.js'
import userMixin from './common/rulesMixin.js'
import store from './store'
import {router,RouterMount} from './router.js'  //路径换成自己的
Vue.use(router)
import commonMixin from './common/commonMixin.js'
Vue.use(commonMixin)
Vue.use(userMixin)
Vue.config.productionTip = false


App.mpType = 'app'
Vue.prototype.$http = module;

const app = new Vue({
  ...App,
  store
})
// #ifdef H5
	RouterMount(app,router,'#app')
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
