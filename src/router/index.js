import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue';
import routeComponent from '../views/route.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: index,
    redirect: '/index',
    children: [
      {
        path: 'index',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'support',
        component: routeComponent,
        children: [
          {
            path: 'iview',
            component: () => import('../views/supportIE/view-design.vue'),
          },
          {
            path: 'ele',
            component: () => import('../views/supportIE/element.vue'),
          },
        ],
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
