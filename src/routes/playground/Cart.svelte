<script>
    import { cart } from '../../stores'

  function clearCart() {
    $cart = []
  }
</script>

 <div>
  <h2 class="bg-green-500 text-white text-center">Cart</h2>
  {#each $cart as flower (flower.id)}
    <p>{flower.name}</p>
  {/each}
  <button class="block border-2 py-1 px-2 bg-slate-600 text-white" on:click={clearCart}>Clear cart</button>
</div>