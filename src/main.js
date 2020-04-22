// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VCharts from 'v-charts'
// import VeLine from 'v-charts/lib/line.common'
import i18n from './assets/js/i18n'

Vue.config.productionTip = false
Vue.use(VCharts);
// Vue.component(VeLine.name, VeLine);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  i18n
})