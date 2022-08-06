<script lang="ts">
  import Footer from "$lib/Footer.svelte";
  import Header from "$lib/Header.svelte";
  import Navbar from "$lib/Navbar.svelte";
  import "modern-normalize";
  import "../styles/app.scss";
</script>

<div>
  <Header />
  <Navbar />
</div>
<main>
  <slot />
</main>
<Footer />
