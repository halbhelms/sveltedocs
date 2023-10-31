<script>
  let count = 5
  let double = count * 2

  function incrementCount() {
    count++
  }
</script>

<button on:click={incrementCount}>Increment count</button><br />

Count: {count} <br />
Double: {double}
