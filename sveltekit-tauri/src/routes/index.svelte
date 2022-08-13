<script lang="ts">
  import "../app.css"
  import svelteLogo from '../assets/svelte.svg?url'
  import tauriLogo from '../assets/tauri.svg?url'
  import Counter from '$lib/Counter.svelte'
</script>

<main>
  <div>
    <a href="https://svelte.dev" target="_blank">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
    <a href="https://tauri.app" target="_blank">
      <img src={tauriLogo} class="logo" alt="Tauri Logo" />
    </a>
  </div>
  <h1>Svelte + Tauri</h1>

  <div class="card">
    <Counter />
  </div>

  <p class="read-the-docs">
    Click on the Svelte and Tauri logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em hsl(190, 79%, 67%, 0.667));
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em hsla(15, 100%, 50%, 0.667));
  }
  .read-the-docs {
    color: hsl(0, 0%, 53%);
  }
</style>
