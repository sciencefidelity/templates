<script lang="ts">
import { Vue, Options } from "vue-class-component"
import Layout from "../layouts/Layout.vue"
@Options({
  components: {
    Layout
  }
})
export default class App extends Vue {
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
  <Layout>
    <main class="main">
      <img src="/logo.svg" class="main__logo" alt="logo" />
      <p>
        Page has been open for <code>{{ count }}</code> seconds.
      </p>
    </main>
  </Layout>
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

.main {
  background-color: #f9f6f6;
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  &__logo {
    height: 36vmin;
    pointer-events: none;
    margin-bottom: 3rem;
    animation: logo-pulse infinite 1.6s ease-in-out alternate;
  }
}
</style>
