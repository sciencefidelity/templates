<script lang="ts">
  import {onMount} from "svelte"
  import { Router, Route } from "svelte-routing"

  import Home from "./routes/Home.svelte"
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

  #app {
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
<!--     <Route path="/home" component="{Home}" /> -->
    <Home />
  </main>
<!--   <Footer /> -->
  </Router>
</div>
