<script lang="ts">
import { Vue, Options } from "vue-class-component"
// import Layout from "../layouts/Layout.vue"
@Options({
  name: "Home"
  // components: {
  //   Layout
  // }
})
export default class Home extends Vue {
  count = 0
  mounted() {
    const interval = setInterval(() => this.count++, 1000)
    return () => {
      clearInterval(interval)
    }
  }
}
</script>

<template>
  <main class="main">
    <img src="/logo.svg" class="logo" alt="logo" />
    <p>
      Page has been open for <code>{{ count }}</code> seconds.
    </p>
  </main>
</template>

<style lang="scss">
@keyframes logo-pulse {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.06);
  }
}

.logo {
  height: 36vmin;
  pointer-events: none;
  margin-bottom: 3rem;
  animation: logo-pulse infinite 1.6s ease-in-out alternate;
}
</style>
