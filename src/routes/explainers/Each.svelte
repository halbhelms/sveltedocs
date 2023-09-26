<script>
	import ExternalResource from '$lib/components/page-elements/ExternalResource.svelte'
	import Credit from '$lib/components/page-elements/Credit.svelte'
  import PageTitle from '$lib/components/page-elements/PageTitle.svelte'
  import Next from '$lib/components/page-elements/Next.svelte'
  import Prev from '$lib/components/page-elements/Prev.svelte'
  import CodeSnippet from '$lib/components/CodeSnippet.svelte'
  import CodeSnippetHeader from '$lib/components/CodeSnippetHeader.svelte'
  import SeeMoreLink from './SeeMoreLink.svelte' 
  import RelatedLinks from '$lib/components/page-elements/RelatedLinks.svelte'
  import PageSubTitle from '../../lib/components/page-elements/PageSubTitle.svelte';

  $: seeMoreActive: false
</script>

<PageTitle title="Each Blocks" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
The &#123;#each} block is used to loop over <i>iterables</i>. While Svelte doesn't offer the richness of iterable-looping that JavaScript has, it's sufficient for the purpose once you know a few details of its use.
</p>

<p class="my-2">
First, in order to illustrate various ways of using the <code>#each</code> block, let's establish some iterable data.
</p>

<CodeSnippet code="<script>
  const products = [
    &#123;id: 'p100', name: 'Product 1', price: 100, qtyInStock: 1000, exportable: true},
    &#123;id: 'p200', name: 'Product 2', price: 200, qtyInStock: 2000, exportable: false},
    &#123;id: 'p300', name: 'Product 3', price: 300, qtyInStock: 3000, exportable: true},
  ]
</script>" />

<p class="my-2">
  The simplest loop looks like this:
</p>

<CodeSnippet code="&#123;#each products as product}
  <p>$&#123;product.price} &mdash; &#123;product.name}</p>
&#123;/each}" />

<p class="my-2">But you can improve performance and prevent some annoying bugs if you add a <i>key</i>. The one requirement for a key is that it must be unique to each item in the iterable. And while keys <i>can</i> be complex values such as an Object or a Map, the best keys are simple values such as a number or string. Since we have an <code>id</code> property for each item in the array, we'll use that.</p>

<CodeSnippet code="&#123;#each products as product, index(product.id)}
  <p>$&#123;product.price} &mdash; &#123;product.name}</p>
&#123;/each}" />

<p class="my-2">
We can also pick properties out of the product items, if we wish, using <i>destructuring</i>:
</p>

<CodeSnippet code="&#123;#each products as &#123; name, price, id}, index(id) }
  <p>&#123;name} :: $&#123;price}</p>
&#123;/each}" />

<p class="my-2">There's no such thing as a <code>for</code> loop with Svelte, but a clever hack may suffice:</p>

<CodeSnippet code="&#123;#each Array(10) as num, i}
  &#123;i}
&#123;/each}" />



<ExternalResource resource="https://javascript.info/iterable" intro="For more on iterables:" />
<ExternalResource resource="https://javascript.info/destructuring-assignment" intro="For more on desturcturing:" />

<Credit credit="https://www.eternaldev.com/blog/5-ways-to-perform-for-loop-in-svelte-each-block/" />
</main>