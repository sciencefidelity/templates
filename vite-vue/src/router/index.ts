import { createRouter, createWebHistory } from "vue-router"

export default function () {
  return createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'index',
        component: () => import('../views/Index.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/About.vue')
      },
      {
        path: '/market',
        name: 'market',
        component: () => import('../views/Counter.vue')
      }
    ]
  });
}
