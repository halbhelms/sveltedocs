<script>
  let obj = {
    name: undefined,
    address: {
      city: undefined,
      state: undefined
    }
  }
</script>

<button on:click={handleClick}>Increment count</button><br />

Count: {count}

<style>
  button {
    border: 1px solid gray;
    margin: 4px;
    margin-left: 20px;
  }
  
  div {
    margin-left: 20px;
  }
</style>

<script>
  let count = 0
  let obj = {
    name: undefined,
    address: {
      city: undefined,
      state: undefined
    }
  }
  let arr = [0,1,2]
  let lastNum = arr[arr.length-1]
  let myCity = obj.address.city

  function handleClick() { count++ }
</script>

<button on:click={handleClick}>Increment count</button><br />
<!-- <button on:click={addToArray}>Add to array</button><br />
<button on:click={() => setName('Joe')}>Set name to Joe</button><br />
<button on:click={() => setCity('Las Vegas')}>Set city to Las Vegas</button><br />
<button on:click={() => setState('Nevada')}>Set state to Nevada</button><br /> -->
<br />
Count: {count}