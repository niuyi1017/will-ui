import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import "../components/css/Demo/demo.scss"
import Demo from "../components/lib/demo/index"
Vue.use(Demo)

new Vue({
  render: h => h(App),
}).$mount('#app')
