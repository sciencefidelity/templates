<script lang="ts">
import { Vue, Options } from "vue-property-decorator"

@Options({
  name: "Header"
})
export default class Footer extends Vue {}
</script>

<template>
  <header class="header">
    <p>
      <strong>Create-Vue-Vite-App</strong>
    </p>
  </header>
</template>
