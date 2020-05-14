import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import IndexComponent from '../views/Index.vue';
import Add from '../views/Add.vue';
import { authGuard } from '../auth/authGuard';



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/routines',
    name: 'routines',
    component: IndexComponent,
    beforeEnter: authGuard
  },
  {
    path: '/routines/:id',
    name: 'routineSingle',
    component: () => import('../views/Show.vue'),
    beforeEnter: authGuard
  },
  {
    path: '/add',
    name: 'routineAdd',
    component: Add,
    beforeEnter: authGuard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
