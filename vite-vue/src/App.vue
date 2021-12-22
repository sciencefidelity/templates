<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { Vue, Options } from "vue-class-component"
import Layout from "./layouts/Layout.vue"

@Options({
  name: "App",
  components: {
    Layout
  }
})
export default class App extends Vue {}
</script>

<template>
  <div id="app">
    <nav class="nav">
      <ul>
        <router-link to="/"><li>Home</li></router-link>
        <router-link to="/counter"><li>Counter</li></router-link>
        <router-link to="/about"><li>About</li></router-link>
      </ul>
    </nav>
    <Layout>
      <router-view />
    </Layout>
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
  color: #2c3e50;
}
</style>
