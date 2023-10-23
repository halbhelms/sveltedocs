<script>
  import Inventory from './Inventory.svelte'
  import Cart from './Cart.svelte'
  import CartSummary from './CartSummary.svelte'
  import { company, topProducers } from '../../stores/'
</script>

<h1>Welcome, {$company}</h1>
<div class="ml-8 shadow-lg w-[250px] mt-4">
<p class="font-bold">Top Producers</p>
<ul class="list-disc list-inside">
  {#each $topProducers as csr}
    <li>{csr.name}</li>
  {/each}
</ul>
</div>

<CartSummary />
<div class="grid border-2 w-[700px] grid-cols-[300px_300px] gap-4 ml-8 mt-8">
  <Inventory />
  <Cart />
</div>