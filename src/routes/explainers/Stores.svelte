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

<PageTitle title="Svelte Stores" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
There are a number of ways a <code>+page.svelte</code> component can get the data it needs. 
</p>

<div class="ml-8">
  <url class="list-disc list-inside">
    <li class="ml-8"><code>+layout.js</code></li>
    <li class="ml-8"><code>+page.server.js</code></li>
    <li class="ml-8"><code>+page.js</code></li>
    <li class="ml-8">props sent by the calling component</li>
    <li class="ml-8">Within the <code>script</code> section of the page itself</li>
  </url>
</div>

<p class="my-2">
These are all good strategies, but there are situations where each falls short, such as when multiple, unrelated apps all need the same information. In such a case, what we need is <em>global</em> access to data. Svelte offers the concept of <em>stores</em> to provide a solution. (One important thing to note: while stores do hold global data, that data is specific to the individual user. If the data needs to be global for all users of the app, you would need to do something like connect the store to external data storage such as a database.)
</p>

<p class="my-2">
A store is simply a value that can be used by any component, anywhere in the app. There's no constraint on the data type of the value; you choose the one that's most appropriate. Once that decision has been made, you need to determine whether components accessing the store data should have both read and write access (they can make changes to the value) or read-only (no change can be made by the downstream components). (A third type of store, <em>derived</em>, is, by default, read-only as it relies on other stores to derive its value.)
</p>

<p class="my-2">
Next up, we'll look at an example of a <em>writable</em> store &mdash; a shopping cart.
</p>

<Next nextLink="writable-stores" nextText="Writable Stores" />

</main>