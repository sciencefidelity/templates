<template>
  <div class="layout">
    <Header />
    <Nav />
    <slot />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component"
import Footer from "../components/Footer.vue"
import Header from "../components/Header.vue"
import Navbar from "../components/Navbar.vue"

@Options ({
  name: "Layout",
  components: {
    Footer,
    Header,
    Navbar
  }
})
export default class Layout extends Vue {}
</script>
