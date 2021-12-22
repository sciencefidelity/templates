<script lang="ts">
import { Vue, Options } from "vue-class-component"

@Options({
  name: "Header"
})
export default class Header extends Vue {}
</script>

<template>
  <header class="header">
    <p>
      <strong>Create-Vue-Vite-App</strong>
    </p>
  </header>
</template>
