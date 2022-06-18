<script lang="ts">
import { Vue, Options } from "vue-property-decorator"

@Options({
  name: "Footer"
})
export default class Footer extends Vue {
  year = new Date().getFullYear()
}
</script>

<template>
  <footer>
    <p>&copy; {{ year }}</p>
  </footer>
</template>

<!-- prettier-ignore -->
<style lang="scss">
footer {
  width: 100vw;
  padding: 2rem 0;
  color: var(--dark-green);
  text-align: center;
  border-top: 1px solid var(--dark-green);
}
</style>
