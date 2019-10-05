import VueRouter from "vue-router";
import Vue from 'vue';
Vue.use(VueRouter);

import {store} from '@/vuex/store'

import indexPage from '@/pages/index'
import authPage from '@/pages/auth'
import tablePage from '@/pages/table'
import profilePage from '@/pages/profile'

export const routes = [
  {
    path: '/',
    component: indexPage, 
    name: 'index',
    accessDescr: 'Доступная всем'
  },  
  {
    path: '/auth',
    component: authPage, 
    name: 'auth',
    accessDescr: 'Доступная всем'
  },  
  {
    path: '/profile', 
    component: profilePage, 
    name: 'profile',
    accessDescr: 'Доступная только авторизованым',
    beforeEnter: (to, from, next) => {  
      store.getters.isAuth ? next() : next('/')
    }
  },
  { 
    path: '/table', 
    component: tablePage, 
    name: 'table',
    accessDescr: 'Доступная только администрации',
    beforeEnter: (to, from, next) => {  
      store.getters.profile.access >= 2 ? next() : next('/')
    }
  },  
];

export const router = new VueRouter({
    routes,
    mode: "history"
});
