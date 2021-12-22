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

<style lang="scss">
@use './styles/foundation/colors';

header,
footer {
  color: var(--dark-green);
  padding: 2rem 0;
  text-align: center;
  width: 100vw;
}

footer {
  border-top: 1px solid var(--dark-green);
}

nav {
  background-color: var(--dark-green);
  color: var(--background);
  display: grid;
  font-weight: 600;
  padding: 1rem 2rem;
  place-items: center;
  text-align: center;
  width: 100%;
  a {
    color: var(--background);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      padding: 0 2rem;
    }
  }
}

.parent {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  place-items: center;
}
</style>
