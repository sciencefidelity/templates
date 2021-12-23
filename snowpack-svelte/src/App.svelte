<script lang="ts">
  import {onMount} from "svelte"
  let count = 0
  onMount(() => {
    const interval = setInterval(() => count++, 1000)
    return () => {
      clearInterval(interval)
    }
  })
</script>

<style lang="scss" scoped>
  @keyframes App-logo-pulse {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.06);
    }
  }

  .header {
    background-color: #f9f6f6;
    color: #333;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    a {
      color: rgb(255, 62, 0);
    }
  }

  .logo {
    height: 36vmin;
    pointer-events: none;
    margin: 2rem 0 3rem 0;
    animation: App-logo-pulse infinite 1.6s ease-in-out alternate;
  }
</style>

<div class="app">
  <header class="header">
    <h1>Home</h1>
    <img src="/logo.svg" class="logo" alt="logo" />
    <p>Page has been open for <code>{count}</code> seconds.</p>
    <a class="App-link" href="https://svelte.dev" target="_blank" rel="noopener noreferrer">
      Learn Svelte
    </a>
  </header>
</div>
