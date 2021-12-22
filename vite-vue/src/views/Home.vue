<script lang="ts">
import { Vue, Options } from "vue-class-component"

@Options({
  name: "Home"
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
  <div class="home">
    <h1>Home</h1>
    <img src="/logo.svg" class="app-logo" alt="logo" />
    <p>
      Page has been open for <code>{{ count }}</code> seconds.
    </p>
  </div>
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

.home {
  margin: 5rem 0;
  text-align: center;
  p {
    margin: 0.4rem;
  }
}

.app-logo {
  height: 36vmin;
  pointer-events: none;
  margin-bottom: 3rem;
  @media (prefers-reduced-motion: no-preference) {
    animation: logo-pulse infinite 1.6s ease-in-out alternate;
  }
}
</style>
