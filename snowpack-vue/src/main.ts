import { createApp } from "vue"
import App from "./App.vue"
import router from "./router/index"
import "sanitize.css/sanitize.css"
import "sanitize.css/assets.css"
import "sanitize.css/reduce-motion.css"
import "sanitize.css/typography.css"
import "./styles/globals.scss"
// import Layout from "@/layouts/Layout.vue"

createApp(App)
  .use(router)
  // .component("Layout", Layout)
  .mount("#app")
