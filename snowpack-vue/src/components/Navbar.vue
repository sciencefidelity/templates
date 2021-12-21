<script lang="ts">
import { Vue, Options } from "vue-class-component"

@Options({
  name: "Navbar"
})
export default class Navbar extends Vue {}
</script>

<template>
  <nav class="nav">
    <ul>
      <router-link to="/"><li>Home</li></router-link>
      <router-link to="/counter"><li>Counter</li></router-link>
      <router-link to="/about"><li>About</li></router-link>
    </ul>
  </nav>
</template>
