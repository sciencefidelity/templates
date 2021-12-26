<script lang="ts">
import { Vue, Options } from "vue-property-decorator"

@Options({
  name: "Header"
})
export default class Footer extends Vue {}
</script>

<!-- prettier-ignore -->
<style lang="scss">
header {
  color: var(--dark-green);
  padding: 2rem 0;
  text-align: center;
  width: 100vw;
}
</style>

<template>
  <header class="header">
    <p>
      <strong>Create-Vue-Vite-App</strong>
    </p>
  </header>
</template>
