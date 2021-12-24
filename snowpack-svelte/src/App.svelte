<script lang="ts">
  import {onMount} from "svelte"
  import { Router, Route } from "svelte-routing";

  import Home from "./pages/Home.svelte"
  // import Footer from "./components/Footer.svelte"
  // import Header from "./components/Header.svelte"
  // import Navbar from "./components/Navbar.svelte"
  let count = 0
  onMount(() => {
    const interval = setInterval(() => count++, 1000)
    return () => {
      clearInterval(interval)
    }
  })
</script>

<style lang="scss">
  .app {
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
    place-items: center;
  }
</style>


<div class="app">
  <Router>
  <div>
<!--     <Header /> -->
<!--     <Navbar /> -->
  </div>
  <main>
    <Route path="/home" component="{Home}" />
    <Home />
  </main>
<!--   <Footer /> -->
  </Router>
</div>
