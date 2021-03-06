import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Index from '../views/Index.vue';
import AddComponent from '../components/AddComponent.vue';
import GymBagComponent from '../components/GymBagComponents/GymBagComponent.vue'
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
    component: Index,
    beforeEnter: authGuard
  },
  {
    // Casting Error?
    path: '/add',
    name: 'routineAdd',
    component: AddComponent,
    beforeEnter: authGuard
  },
  {
    path: '/gymbag',
    name: 'gym-bag', 
    component: GymBagComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
