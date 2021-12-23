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
      path: "/about",
      name: "about",
      component: () => import("@/views/About.vue"),
      props: { title: "about" }
    },
    {
      path: "/counter",
      name: "counter",
      component: () => import("@/views/Counter.vue"),
      props: { title: "counter" }
    }
  ]
})

export default router
