import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueFriendlyIframe from 'vue-friendly-iframe';
import vueSmoothScroll from 'vue2-smooth-scroll'
import VueResizeText from 'vue-resize-text';




Vue.use(vueSmoothScroll)
Vue.use(VueResizeText)


import router from './router';


Vue.use(VueFriendlyIframe);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
