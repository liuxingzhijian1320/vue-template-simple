import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'

import { sync } from 'vuex-router-sync'

import * as filters from './filters'

import axios from 'assets/scripts/http'

import {rem} from 'assets/scripts/rem'
rem()


sync(store, router);

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

import mixins from './mixins';

Vue.mixin(mixins);

// 将axios挂载到vue对象的原型下边以实现全局通用
Vue.prototype.axios = axios


//mint-ui
import MessageBox from 'mint-ui/lib/message-box'
import 'mint-ui/lib/message-box/style.css'
import Indicator from 'mint-ui/lib/indicator'
import 'mint-ui/lib/indicator/style.css'
window.MessageBox  = MessageBox ;//挂在window的对象中，就不用每个文件需要引入，方便又省事，axios的使用方法和此类似
window.Indicator  = Indicator ;//挂在window的对象中，就不用每个文件需要引入，方便又省事，axios的使用方法和此类似


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
