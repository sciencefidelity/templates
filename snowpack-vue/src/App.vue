<script>
export default {
  name: "Index",
  data: function () {
    return {
      count: 0
    }
  },
  mounted() {
    const interval = setInterval(() => this.count++, 1000)
    return () => {
      clearInterval(interval)
    }
  }
}
</script>

<template>
  <header class="App-header">
    <img src="/logo.svg" class="App-logo" alt="logo" />
    <p>Page has been open for <code>{{ count }}</code> seconds.</p>
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

<style>
.App-header {
  background-color: #f9f6f6;
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
}
.App-logo {
  height: 36vmin;
  pointer-events: none;
  margin-bottom: 3rem;
  animation: App-logo-pulse infinite 1.6s ease-in-out alternate;
}
@keyframes App-logo-pulse {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.06);
  }
}
</style>
