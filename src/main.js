import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes.js'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

// Custom directives
Vue.directive('rainbow', {
  bind (el, binding, vnode) {
    el.style.color = '#' + Math.random().toString().slice(2, 6)
  }
})

Vue.directive('theme', {
  bind (el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = '1200px'
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = '560px'
    }
    if (binding.arg == 'column') { // argument v-theme:column
      el.style.background = '#f7f7f7'
      el.style.padding = '40px'
    }
  }
})

// filter
Vue.filter('to-uppercase', function (value) {
  return value.toUpperCase()
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
