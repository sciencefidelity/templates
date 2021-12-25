<script lang="ts">
const year = new Date().getFullYear()
</script>

<style lang="scss" scoped>
  footer {
    border-top: 1px solid var(--red);
    color: var(--red);
    padding: 2rem 0;
    text-align: center;
    width: 100vw;
  }
</style>

<footer>
  <p>&copy; { year }</p>
</footer>
