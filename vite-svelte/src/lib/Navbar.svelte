<script lang="ts">
  import { link } from "svelte-routing"
</script>

<style lang="scss">
  nav {
    display: grid;
    place-items: center;
    width: 100%;
    padding: 1rem 2rem;
    font-weight: 600;
    color: var(--background);
    text-align: center;
    background-color: var(--dark-green);
    a {
      color: var(--background);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    ul {
      display: flex;
      padding: 0;
      margin: 0;
      list-style: none;
      li {
        padding: 0 2rem;
      }
    }
  }
</style>

<nav class="nav">
  <ul>
    <a href="/" use:link><li>Home</li></a>
    <a href="/counter" use:link><li>Counter</li></a>
    <a href="/about" use:link><li>About</li></a>
  </ul>
</nav>
