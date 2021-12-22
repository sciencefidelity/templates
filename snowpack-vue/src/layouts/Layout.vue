<script lang="ts">
import { Vue, Options } from "vue-class-component"

@Options ({
  name: "Layout"
})
export default class Layout extends Vue {}
</script>

<template>
  <component :is="layout">
    <slot />
  </component>
</template>
