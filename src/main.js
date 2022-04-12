import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from "axios";
import VueAxios from "vue-axios";
import{formatTime} from "./utils/time";
import store from './store'
import { postRequest } from "./utils/api";
import { putRequest } from "./utils/api";
import { getRequest } from "./utils/api";
import { deleteRequest } from "./utils/api";


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueAxios,axios)


//自定义指令
Vue.directive('title', function(el,binding){
  document.title = el.dataset.title
})
//格式化时间
Vue.filter('format',formatTime)




//请求
//插件形式使用请求
Vue.prototype.postRequest = postRequest;
Vue.prototype.getRequest = getRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.deleteRequest = deleteRequest;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
