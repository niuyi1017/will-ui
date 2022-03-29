import Demo from './main.vue'

Demo.install = function(Vue) {
  Vue.component(Demo.name, Demo)
}

export default Demo