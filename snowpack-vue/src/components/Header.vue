<script lang="ts">
import { Vue, Options } from "vue-property-decorator"

@Options({
  name: "Header"
})
export default class Header extends Vue {}
</script>

<template>
  <header class="header">
    <p>
      <strong>Create-Vue-Snowpack-App</strong>
    </p>
  </header>
</template>

<!-- prettier-ignore -->
<style lang="scss">
header {
  width: 100vw;
  padding: 2rem 0;
  color: var(--dark-green);
  text-align: center;
}
</style>
