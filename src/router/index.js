import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WriteView from '../views/WriteView.vue'
import AppUser from '../views/AppUser.vue'
import UserRegist from '../components/user/UserRegist'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/write',
    name: 'write',
    component: WriteView
  },
  {
    path: '/user',
    name: 'user',
    componenet: AppUser,
    children: [
      {
        path: '/regist',
        name: 'regist',
        componenet: UserRegist,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
