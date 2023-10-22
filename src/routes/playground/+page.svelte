<script>
  import Inventory from './Inventory.svelte'
  import Cart from './Cart.svelte'
  import CartSummary from './CartSummary.svelte'
</script>

<CartSummary />
<div class="grid border-2 w-[700px] grid-cols-[300px_300px] gap-4 ml-8 mt-8">
  <Inventory />
  <Cart />
</div>