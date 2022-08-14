<script lang="ts">
  import svelteLogo from './assets/svelte.svg?url'
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em hsla(237, 100%, 70%, 0.667));
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em hsla(15, 100%, 50%, 0.667));
  }
  .read-the-docs {
    color: hsl(0, 0%, 53%);
  }
</style>
