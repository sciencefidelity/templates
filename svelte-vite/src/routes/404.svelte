<script lang="ts">
  import { link } from "svelte-routing"
</script>

<div class="four-oh-four">
  <h1>404 Not Found</h1>
  <p>
    You've hit a path that does not exist,
    <br />
    oh the sadness!
  </p>
  <a href="/" use:link>Home</a>
</div>

<!-- prettier-ignore -->
<style lang="scss">
  .four-oh-four {
    margin: 5rem 2rem;
  }
</style>
