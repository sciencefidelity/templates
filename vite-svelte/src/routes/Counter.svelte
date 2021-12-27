<script lang="ts">
  let count = 0
  const decrement = () => {
    count -= 1
  }
  const increment = () => {
    count += 1
  }
</script>

<div class="counter">
  <h1>Counter</h1>
  <button on:click={decrement}>–</button>
  <span class="count">{count}</span>
  <button on:click={increment}>+</button>
  <p>
    The button has been pushed <code>{count}</code> times.
  </p>
</div>

<style lang="scss">
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
    margin: 3rem 2rem;
    font-size: 3rem;
    font-weight: bold;
    color: var(--dark-green);
  }
</style>
