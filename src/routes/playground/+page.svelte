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

  function Hatem(payload) {

  }


  import SeeMoreClose from '$lib/components/page-elements/SeeMoreClose.svelte'

  function handleClick() { count++ }
  function addToArray() { arr = [...arr, arr[arr.length-1] + 1] }
  function setCity(city) { obj.address.city = city }
  function setState(state) { obj.address.state = state }
  function setName(name) { obj.name = name }

  function sendCustomEvent() {
    const ev = dispatchEvent('')
  }
</script>

<button on:click={handleClick}>Increment count</button><br />
<button on:click={addToArray}>Add to array</button><br />
<button on:click={() => setName('Joe')}>Set name to Joe</button><br />
<button on:click={() => setCity('Las Vegas')}>Set city to Las Vegas</button><br />
<button on:click={() => setState('Nevada')}>Set state to Nevada</button><br />
<br />
<div class="ml-8">
Count: {count}<br />
Array: {arr}<br />
Obj.name:{obj.name}<br />
Obj.address.city: {obj.address.city}<br />
Obj.address.state: {obj.address.state}<br />
Last num: {lastNum}<br />
My city: {obj.address.city}
</div>

<SeeMoreClose on:Hatem={someFunction} />

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

