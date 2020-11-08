import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueFriendlyIframe from 'vue-friendly-iframe';
import vueSmoothScroll from 'vue2-smooth-scroll'
import VueResizeText from 'vue-resize-text';
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';
 
Vue.use(Donut);



Vue.use(vueSmoothScroll)
Vue.use(VueResizeText)

import './styles/custom.scss';
import router from './router';
import store from "./store";


Vue.use(VueFriendlyIframe);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
