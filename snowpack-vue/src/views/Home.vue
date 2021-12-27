<script lang="ts">
import { Vue, Options, Prop } from "vue-property-decorator"

@Options({
  name: "Home"
})
export default class Home extends Vue {
  count = 0
  @Prop(String) readonly title: string | undefined
  mounted() {
    const interval = setInterval(() => this.count++, 1000)
    return () => {
      clearInterval(interval)
    }
  }
}
</script>

<template>
  <div :class="title">
    <h1>{{ title[0].toUpperCase() + title.slice(1, title.length) }}</h1>
    <img src="/logo.svg" class="logo" alt="logo" />
    <p>
      Page has been open for <code>{{ count }}</code> seconds.
    </p>
  </div>
</template>

<!-- prettier-ignore -->
<style lang="scss" scoped>
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

.logo {
  height: 36vmin;
  margin: 3rem;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: logo-pulse infinite 1.6s ease-in-out alternate;
  }
}
</style>
