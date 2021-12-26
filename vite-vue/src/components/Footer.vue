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
