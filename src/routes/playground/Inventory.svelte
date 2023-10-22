<script>
  import { cart } from '../../stores'
  
  const items = [
    {id: 1, name: 'Geraniums', price: 14.55},
    {id: 2, name: 'Begonias (tubrous)', price: 13.76},
    {id: 3, name: 'Begonias (fibrous)', price: 12.81},
  ]

  function addFlowerToCart(id) {
    const flower = items.find( item => item.id == id )
    $cart = [...$cart, flower]
  }
</script>

  <div>
    <h2 class="bg-orange-500 text-white text-center">Inventory</h2>
    {#each items as flower (flower.id)}
      <p on:click={() => addFlowerToCart(flower.id)}>{flower.name} ({flower.price})</p>
    {/each}
  </div>