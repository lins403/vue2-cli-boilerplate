import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(Element)

import partialElement from './element-partial/demand'
import './element-partial/variables.scss'
Vue.use(partialElement)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
