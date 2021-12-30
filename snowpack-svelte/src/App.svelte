<script lang="ts">
  import { Router, Route } from "svelte-routing"
  import About from "@/routes/About.svelte"
  import Counter from "@/routes/Counter.svelte"
  import Footer from "@/lib/Footer.svelte"
  import Header from "@/lib/Header.svelte"
  import Home from "@/routes/Home.svelte"
  import Navbar from "@/lib/Navbar.svelte"
  import NotFound from "@/routes/404.svelte"
</script>

<div id="app">
  <Router>
    <div>
      <Header />
      <Navbar />
    </div>
    <main>
      <Route path="/"><Home /></Route>
      <Route path="about" component={About} />
      <Route path="counter" component={Counter} />
      <Route component={NotFound} />
    </main>
    <Footer />
  </Router>
</div>

<style lang="scss">
  #app {
    display: grid;
    grid-template-rows: auto 1fr auto;
    place-items: center;
    height: 100vh;
    background-color: var(--background);
  }
</style>
