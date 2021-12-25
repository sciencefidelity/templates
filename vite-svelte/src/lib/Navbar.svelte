<script lang="ts">
  import { link } from "svelte-routing"
</script>

<style lang="scss">
  nav {
    background-color: var(--red);
    color: var(--grey-000);
    display: grid;
    font-weight: 600;
    padding: 1rem 2rem;
    place-items: center;
    text-align: center;
    width: 100%;
    a {
      color: var(--grey-000);
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
</style>

<nav class="nav">
  <ul>
    <a href="/" use:link><li>Home</li></a>
    <a href="/counter" use:link><li>Counter</li></a>
    <a href="/about" use:link><li>About</li></a>
  </ul>
</nav>
