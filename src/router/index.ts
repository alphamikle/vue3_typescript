import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import UsersView from '@/views/users/users.view.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/users',
    name: 'UsersView',
    component: UsersView
  },
  {
    path: '/',
    redirect: { name: 'UsersView' }
  }
  // {
  //   path: '/search',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
