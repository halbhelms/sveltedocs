<script>
  import Inventory from './Inventory.svelte'
  import Cart from './Cart.svelte'
export let data
  import CartSummary from './CartSummary.svelte'
  import { company, topProducers } from '../../stores/'

const user = {
  name: 'Noah Sweat',
  advantagePlus: false,
  advantage: true,
}
</script>

<ul>
{#if user.advantagePlus}
  <li>dedicated customer advocate</li>
  <li>Advantage+ exclusive deals</li>
  <li>discount pricing</li>
  <li>priority access</li>
  <li>same-day shipment</li>
  <li>30-day refund</li>
  <li>extended warranty</li>
{:else if user.advantage}
  <li>discount pricing</li>
  <li>priority access</li>
  <li>same-day shipment</li>
  <li>30-day refund</li>
  <li>extended warranty</li>
{:else}
  <li>30-day refund</li>
  <li>extended warranty</li>
{/if}
</ul>

{#each data.people as person (person.id)}
  <p>{person.name}</p>
{/each}


<!-- {data.people.forEach( person => {
  document.write(person.name)
})} -->
<!-- <h1>Welcome, {$company}</h1>
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
</div> -->