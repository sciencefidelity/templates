<script lang="ts">
import { Vue, Options } from "vue-property-decorator"

@Options({
  name: "Footer"
})
export default class Footer extends Vue {
  year = new Date().getFullYear()
}
</script>

<!-- prettier-ignore -->
<style lang="scss">
header {
  border-top: 1px solid var(--dark-green);
  color: var(--dark-green);
  padding: 2rem 0;
  text-align: center;
  width: 100vw;
}
</style>

<template>
  <footer>
    <p>&copy; {{ year }}</p>
  </footer>
</template>
