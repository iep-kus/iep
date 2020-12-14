import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue} from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSocialSharing from 'vue-social-sharing'
import JsonExcel from "vue-json-excel";
import AOS from "aos";
import "aos/dist/aos.css"
import {BIconQuestionCircleFill} from 'bootstrap-vue'
 
Vue.component("downloadExcel", JsonExcel);

 
Vue.use(VueSocialSharing);
 


import './styles/custom.scss';
import router from './router';
import store from "./store";


Vue.use(BootstrapVue)
Vue.component('BIconQuestionCircleFill', BIconQuestionCircleFill)

Vue.config.productionTip = false

new Vue({
  created(){
    AOS.init();
  },
  router,
  store,
  render: h => h(App),
}).$mount('#app')
