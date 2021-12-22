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
      <router-link :to="{ name: 'home', params: { title: 'home' } }"
        ><li>Home</li></router-link
      >
      <router-link :to="{ name: 'counter', params: { title: 'counter' } }"
        ><li>Counter</li></router-link
      >
      <router-link :to="{ name: 'about', params: { title: 'about' } }"
        ><li>About</li></router-link
      >
    </ul>
  </nav>
</template>
