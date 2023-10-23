<script>
  import PageTitle from '$lib/components/page-elements/PageTitle.svelte'
  import Credit from '$lib/components/page-elements/Credit.svelte'
  import ExternalResource from '$lib/components/page-elements/ExternalResource.svelte'
  import Next from '$lib/components/page-elements/Next.svelte'
  import Prev from '$lib/components/page-elements/Prev.svelte'
  import CodeSnippet from '$lib/components/CodeSnippet.svelte'
  import CodeSnippetHeader from '$lib/components/CodeSnippetHeader.svelte'
  import SeeMoreLink from './SeeMoreLink.svelte' 
  import RelatedLinks from '$lib/components/page-elements/RelatedLinks.svelte'
  import PageSubTitle from '$lib/components/page-elements/PageSubTitle.svelte';
  import WalkThru from '$lib/components/page-elements/WalkThru.svelte'
  import WalkThruHeader from '$lib/components/page-elements/WalkThruHeader.svelte'

  $: seeMoreActive: false
</script>

<PageTitle title="Writable Stores" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
A <em>writable</em> store is simply a store that can be read and written to from any component that uses it. We can't take one more example of a <code>count</code> as an example of a store. We're going, instead, to use a <em>cart</em> as an example. So, feast your eyes on this wondrous example of the stylist's art.
</p>

<figure>
  <img src="../writable-store.png" alt="A writable store" width="600" class="shadow-md mt-4">
  <figcaption class="italic text-xs ml-8 mt-1">A <code>page.svelte</code> file using 3 components</figcaption>
</figure>

<p class="my-2">
As the <code>figcaption</code> indicates, this is an example of a <code>page.svelte</code> file that uses three different components:
</p>

<ul class="list-disc list-inside">
  <li><code>CartSummary.svelte</code> to tell the user how many items are in their cart</li>
  <li><code>Inventory.svelte</code> to show the items in inventory and allow the item/s to be placed in the cart</li>
  <li><code>Cart.svelte</code> to display the items in the cart and allow the user to clear the cart</li>
</ul>

<p class="my-2">
All three of these components need access to the cart. As we discussed in <SeeMoreLink linkedText="Stores" /> , a <em>store</em> provides a way of managing global state &mdash; the very thing we need here. Let's create a store in <code>/src/stores/index.js</code>.
</p>

<CodeSnippetHeader text="/src/stores/index.js" />
<CodeSnippet code="import &#123; writable } from 'svelte/store';

export const cart = writable([])" />

<WalkThruHeader />
<WalkThru lineNumber="1">
We begin by importing a <code>writable</code> function.
</WalkThru>
<WalkThru lineNumber="3">
We create a store, initializing it to an empty array. That's it: that's our store.
</WalkThru>

<p class="my-2">
Now to make use of it. We'll start with the simplest component: <code>CartSummary.svelte</code>
</p>

<CodeSnippetHeader text="CartSummary.svelte" />
<CodeSnippet code="<script>
  import &#123; cart } from '../../stores'
</script>

<p>You have &#123;$cart.length} &#123;$cart.length == 1 ? 'item' : 'items'} in your cart.</p>" />

<WalkThruHeader />
<WalkThru lineNumber="2">
We import the <code>cart</code> previously created in <code>index.js</code>
</WalkThru>
<WalkThru lineNumber="5">
We display the number of items in the cart &mdash; that is, the <code>$cart.length</code> (The part after that just determines whether to display "item" or "items"). Why the <code>$</code> prefix? A store is not the value added to it, but an object that, among other things, stores that value. Adding the <code>$</code> prefix does two things: it <em>subscribes</em> us to the store so that all components using the store will see any changes to that data, and it provides us with access to the value held by the store. A little bit of Svelte magic.
</WalkThru>

<p class="my-2">
Next, let's delve into <code>Inventory.svelte</code>.
</p>

<CodeSnippetHeader text="Inventory.svelte" />
<CodeSnippet code="<script>
  import &#123; cart } from '../../stores'
  
  const items = [
    &#123;id: 1, name: 'Geraniums', price: 14.55},
    &#123;id: 2, name: 'Begonias (tubrous)', price: 13.76},
    &#123;id: 3, name: 'Begonias (fibrous)', price: 12.81},
  ]

  function addFlowerToCart(id) &#123;
    const flower = items.find( item => item.id == id )
    $cart = [...$cart, flower]
  }
</script>

<div>
  <h2>Inventory</h2>
  &#123;#each items as flower (flower.id)}
    <p on:click=&#123;() => addFlowerToCart(flower.id)}>&#123;flower.name} (&#123;flower.price})</p>
  &#123;/each}
</div>" />

<WalkThruHeader />
<WalkThru lineNumber="2">
To make use of the <code>cart</code> store, we start by importing it.
</WalkThru>

<WalkThru lineNumber="4">
Some simple, sample inventory
</WalkThru>

<WalkThru lineNumber="10">
When a user clicks a flower, we want to add that flower object into the <code>cart</code> store. 
</WalkThru>

<WalkThru lineNumber="11">
When the user clicks a flower, we pass only the flower's id. Then we <code>find</code> the flower object corresponding with the id.
</WalkThru>

<WalkThru lineNumber="12">
You might think we could just use <code>$cart.push(flower)</code>. But the Svelte High Council has decreed a different way: we <em>spread</em> the original array and then merge into it the found flower. You don't need to do this with simple variables (like the much-despised <code>count</code>) but complex variables like <code>Array</code> and <code>Object</code> require special handling.
</WalkThru>

<p class="my-2">
The last component needing our attention is <code>Cart.svelte</code>.
</p>

<CodeSnippetHeader text="Cart.svelte" />
<CodeSnippet code="<script>
  import &#123; cart } from '../../stores'

  function clearCart() &#123;
    $cart = []
  }
</script>

 <div>
  <h2>Cart</h2>
  &#123;#each $cart as flower (flower.id)}
    <p>&#123;flower.name}</p>
  &#123;/each}
  <button on:click=&#123;clearCart}>Clear cart</button>
</div>" />

<WalkThruHeader />
<WalkThru lineNumber="2">
Again, since we need access to the <code>cart</code> store, 
</WalkThru>
<WalkThru lineNumber="4">
We need a function to clear the cart. Here it is. We'll be tying our code into that shortly.
</WalkThru>
<WalkThru lineNumber="11">
We'll loop through every item in the cart in order to display it. <SeeMoreLink linkedText="Svelte looping" />
</WalkThru>
<WalkThru lineNumber="14">
And here's where we tie in the <code>clearCart</code> function that we wrote on line 4
</WalkThru>

<p class="my-2">
With all components set up to use the <code>cart</code> store, it's time to integrate them all into our <code>+page.svelte</code> file.
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  import Inventory from './Inventory.svelte'
  import Cart from './Cart.svelte'
  import CartSummary from './CartSummary.svelte'
</script>

<CartSummary />
<div>
  <Inventory />
  <Cart />
</div>" />

<WalkThruHeader />
<WalkThru lineNumber="2">
We import the three components created earlier. We don't need to import the <code>cart</code> store, as each component has already handled this.
</WalkThru>
<WalkThru lineNumber="7">
Now, our <code>+page.svelte</code> file is a model of simplicity. It first imports the components and, here, utilizes them.
</WalkThru>

<Prev prevLink="stores" prevText="Stores" />
<Next nextLink="readable-stores" nextText="Readable Stores" />
</main>