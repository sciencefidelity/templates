import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("../views/Index.vue")
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/About.vue")
    },
    {
      path: "/counter",
      name: "Counter",
      component: () => import("../views/Counter.vue")
    }
  ]
})

export default router
