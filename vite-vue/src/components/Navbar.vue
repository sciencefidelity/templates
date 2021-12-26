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
