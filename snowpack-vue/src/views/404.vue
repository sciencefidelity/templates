<script lang="ts">
import { Vue, Options } from "vue-property-decorator"

@Options({
  name: "NotFound"
})
export default class NotFound extends Vue {}
</script>

<template>
  <div class="four-oh-four">
    <h1>404 Not Found</h1>
    <p>
      You've hit a path that does not exist,
      <br />
      oh the sadness!
    </p>
    <router-link :to="{ name: 'home' }">Home</router-link>
  </div>
</template>

<style lang="scss" scoped>
.four-oh-four {
  margin: 5rem 2rem;
}
</style>
