<script lang="ts">
import { Vue, Options } from "vue-class-component"
import Footer from "./components/Footer.vue"
import Header from "./components/Header.vue"
import Navbar from "./components/Navbar.vue"

@Options ({
  ame: "App",
  components: {
    Footer,
    Header,
    Navbar
  }
})
export default class App extends Vue {}
</script>

<template>
  <div class="layout">
    <Header />
    <nav class="nav">
      <ul>
        <router-link to="/"><li>Home</li></router-link>
        <router-link to="/counter"><li>Counter</li></router-link>
        <router-link to="/about"><li>About</li></router-link>
      </ul>
    </nav>
    <router-view/>
    <Footer />
  </div>
</template>
