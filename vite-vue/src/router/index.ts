import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue")
    },
    {
      path: "/counter",
      name: "counter",
      component: () => import("../views/Counter.vue")
    }
  ]
})

export default router
