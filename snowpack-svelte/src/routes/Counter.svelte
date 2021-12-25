<script lang="ts">
  let count = 0
  const decrement = () => {
    count -= 1
  }
  const increment = () => {
    count += 1
  }
</script>

<style lang="scss">
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

<div class="counter">
  <h1>Counter</h1>
  <button on:click={decrement}>–</button>
  <span class="count">{count}</span>
  <button on:click={increment}>+</button>
  <p>
    The button has been pushed <code>{count}</code> times.
  </p>
</div>
