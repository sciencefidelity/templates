<style lang="scss" scoped>
  nav {
    background-color: var(--red);
    color: var(--grey-000);
    display: grid;
    font-weight: 600;
    padding: 1rem 2rem;
    place-items: center;
    text-align: center;
    width: 100%;
  }

  nav a {
    color: var(--grey-000);
    text-decoration: none;
  }

  nav a:hover {
    text-decoration: underline;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul li {
    padding: 0 2rem;
  }
</style>

<nav class="nav">
  <ul>
    <a href="/"><li>Home</li></a>
    <a href="/counter"><li>Counter</li></a>
    <a href="/about"><li>About</li></a>
  </ul>
</nav>
