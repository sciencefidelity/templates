<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { Vue, Options } from "vue-class-component"
// import Layout from "./layouts/Layout.vue"
import Footer from "./components/Footer.vue"
import Header from "./components/Header.vue"
import Navbar from "./components/Navbar.vue"

@Options({
  name: "App",
  components: {
    Footer,
    Header,
    Navbar
    // Layout
  }
})
export default class App extends Vue {}
</script>

<template>
  <div id="app">
    <Header />
    <Navbar />
<!--     <layout> -->
    <router-view />
<!--     </layout> -->
    <Footer />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  &::after,
  &::before {
    box-sizing: border-box;
    margin: 0;
  }
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
/*   color: #2c3e50; */
  background-color: #f9f6f6;
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
}
</style>
