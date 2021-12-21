<script lang="ts">
import { Vue, Options } from "vue-class-component"
@Options({})
export default class App extends Vue {}
</script>

<template>
  <Layout>
    <main class="main">
    </main>
  </Layout>
</template>

<style lang="scss">
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
