import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
      props: { title: "home" }
    },
    {
      path: "/counter",
      name: "counter",
      component: () => import("@/views/Counter.vue"),
      props: { title: "counter" }
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About.vue"),
      props: { title: "about" }
    },
    {
      path: "/404",
      component: () => import("@/views/404.vue")
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/404"
    }
  ]
})

export default router
