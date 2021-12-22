import { createApp } from "vue"
import App from "./App.vue"
import router from "./router/index"
import Layout from "./layouts/Layout.vue"

createApp(App)
  .use(router)
  .component("Layout", Layout)
  .mount("#app")
