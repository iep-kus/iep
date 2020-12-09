import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Kalkulacka from '../views/Kalkulacka.vue';
import Kalkulacka_grafy from '../views/Kalkulacka_grafy.vue';
import Metodologia from '../views/Metodologia.vue';
import Kontakt from '../views/Kontakt.vue';

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/Domov',
    name: 'Home',
    component: Home,
  },

  {
    path: '/Kalkulacka',
    name: 'Kalkulacka',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Kalkulacka.vue'),
  },
  {
    path: '/kalkulacka/vysledky/:user_key',
    name: 'Kalkulacka_graf',
    component: () => import('../views/Kalkulacka_grafy.vue'),
  },
  {
    path: '/Metodologia',
    name: 'Metodologia',
    component: () => import('../views/Metodologia.vue'),
  },
  {
    path: '/Kontakt',
    name: 'Kontakt',
    component: () => import('../views/Kontakt.vue'),
  },
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
        offset: { x: 0, y: 50 }
      };
    }
    else {
      return { x: 0, y: 0 , behavior: 'smooth', };
    }
  }
});
export default router;