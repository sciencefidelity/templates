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
</style>
