import { createApp } from "vue"
import App from "@/App.vue"
import router from "./router/index"
import "sanitize.css/sanitize.css"
import "sanitize.css/assets.css"
import "sanitize.css/reduce-motion.css"
import "sanitize.css/typography.css"
import "@/styles/globals.scss"

createApp(App)
  .use(router)
  .mount("#app")
