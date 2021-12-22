<script lang="ts">
import { Vue, Options } from "vue-class-component"

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
