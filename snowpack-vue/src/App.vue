<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

// Define the component in class-style
@Component
export default class Counter extends Vue {
  // Class properties will be component data
  count = 0

  // Methods will be component methods
  increment() {
    this.count++
  }

  decrement() {
    this.count--
  }
}
</script>

<template>
  <header class="header">
    <img src="/logo.svg" class="header__logo" alt="logo" />
    <p>
      Page has been open for <code>{{ count }}</code> seconds.
    </p>
    <a
      class="App-link"
      href="https://vuejs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn Vue
    </a>
  </header>
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

.header {
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
