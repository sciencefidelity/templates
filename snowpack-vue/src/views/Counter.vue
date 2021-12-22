<script lang="ts">
import { ref } from "vue"
import { Vue, Options } from "vue-class-component"
@Options({
  name: "Counter"
})
export default class Counter extends Vue {
  count = ref(0)
}
</script>

<template>
  <div class="counter">
    <h1>Counter</h1>
    <button @click="count--">–</button>
    <span class="count">{{ count }}</span>
    <button @click="count++">+</button>
    <p>
      The button has been pushed <code>{{ count }}</code> times.
    </p>
  </div>
</template>

<style lang="scss">
@use '../styles/foundation/colors';

.counter {
  margin: 5rem 0;
  text-align: center;
  p {
    margin: 0.4rem;
  }
}

button {
  border: 0;
  color: var(--dark-green);
  font-size: 3rem;
  height: 6rem;
  margin: 3rem 0.2rem;
  width: 6rem;
}

.count {
  color: var(--dark-green);
  font-size: 3rem;
  font-weight: bold;
  margin: 3rem 2rem;
}
</style>
