<script lang="ts">
import { ref } from "vue"
import { Vue, Options, Prop } from "vue-property-decorator"

@Options({
  name: "Counter"
})
export default class Counter extends Vue {
  @Prop(String) readonly title: string | undefined
  count = ref(0)
}
</script>

<template>
  <div :class="title">
    <h1>{{ title[0].toUpperCase() + title.slice(1, title.length) }}</h1>
    <button @click="count--">–</button>
    <div class="count">{{ count }}</div>
    <button @click="count++">+</button>
    <p>
      The button has been pushed <code>{{ count }}</code> times.
    </p>
  </div>
</template>

<!-- prettier-ignore -->
<style lang="scss" scoped>
.counter {
  margin: 5rem 0;
  text-align: center;
  p {
    margin: 0.4rem;
  }
}

button {
  width: 6rem;
  height: 6rem;
  margin: 3rem 0.2rem;
  font-size: 3rem;
  color: var(--dark-green);
  border: 0;
}

.count {
  display: inline-block;
  width: 10rem;
  font-size: 3rem;
  font-weight: bold;
  color: var(--dark-green);
}
</style>
