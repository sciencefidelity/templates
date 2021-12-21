<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { Vue, Options } from "vue-class-component"
import Timer from "./components/Timer.vue"

@Options({
  name: "App",
  components: {
    Timer
  }
})
export default class App extends Vue {}
</script>

<template>
  <Timer />
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
