import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import i18n from './locales'
import VueStorage from 'vue-ls'
import { storageOptions } from '@/config/defaultSetting'

// mock
import './mock'

// use
import './use'

import '@/styles/index.scss' // global css
import initializer from '@/utils/initializer' // setting init

// 注册主题
import '@/styles/theme/index.scss'

// permission
import './router/permission' // permission control
import PerssionPlugin from '@/plugins/permission' // page button permission plugin

// base lib
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// request plugin
import { AxiosPlugin } from '@/utils/request'
document.body.className = 'theme-dark'

Vue.config.productionTip = false

Vue.use(PerssionPlugin)
Vue.use(ElementUI)
Vue.use(VueStorage, storageOptions)
Vue.use(AxiosPlugin)

new Vue({
  router,
  store,
  i18n,
  created: initializer,
  render: h => h(App)
}).$mount('#app')
