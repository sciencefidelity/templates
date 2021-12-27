<script lang="ts">
import { Vue, Options } from "vue-property-decorator"

@Options({
  name: "Navbar"
})
export default class Navbar extends Vue {}
</script>

<template>
  <nav class="nav">
    <ul>
      <router-link :to="{ name: 'home' }"
        ><li>Home</li></router-link
      >
      <router-link :to="{ name: 'counter' }"
        ><li>Counter</li></router-link
      >
      <router-link :to="{ name: 'about' }"
        ><li>About</li></router-link
      >
    </ul>
  </nav>
</template>

<!-- prettier-ignore -->
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
