<script>
import Credit from '$lib/components/page-elements/Credit.svelte'
import Resource from '$lib/components/page-elements/ExternalResource.svelte'

  const products = [
    {id: 'p100', name: 'Product 1', price: 100, qtyInStock: 1000, exportable: true},
    {id: 'p200', name: 'Product 2', price: 200, qtyInStock: 2000, exportable: false},
    {id: 'p300', name: 'Product 3', price: 300, qtyInStock: 3000, exportable: true},
  ]
</script>

{#each Array(10) as num, i}
  {i}
{/each}

{#each products as {name, price, id}, index(id)}
  <p>{name} :: ${price}</p>
{/each}

{#each products as product, index(product.id)}
  <p>${product.price} &mdash; {product.name}</p>
{/each}

{#each "SvelteInfo" as letter}
  <p>{letter}</p>
{/each}


<Credit credit="https://www.eternaldev.com/blog/5-ways-to-perform-for-loop-in-svelte-each-block/" link="true"/>
<Resource resource="https://javascript.info/iterable" intro="For more on iterables:"/>