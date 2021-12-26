<script lang="ts">import { Vue, Options } from "vue-class-component"
import Footer from "./components/Footer.vue"
import Header from "./components/Header.vue"
import Navbar from "./components/Navbar.vue"

@Options({
  name: "App",
  components: {
    Footer,
    Header,
    // Layout,
    Navbar
  }
})
export default class App extends Vue {

}
</script>

<template>
  <div id="app">
    <div>
      <Header />
      <Navbar />
    </div>
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<!-- prettier-ignore -->
<style lang="scss">
#app {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  place-items: center;
}
</style>
