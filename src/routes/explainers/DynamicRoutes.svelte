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

<PageTitle title="Dynamic Routes" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
In our last, exciting episode, we raised a particular problem with a file-based routing scheme: What do you do in the case where you may have hundreds or even thousands of possible "routes" What do we mean? Let's say we have a route that's intended to give us information about a product. Which product? It could be any one of dozens or hundreds or thousands &mdash; you get the point. Surely, we aren't going to create separate folders with separate <code>page.svelte</code> files for each product.
</p>

<p class="my-2">
No, indeed, we are not. Instead, we are going to use a mechanism whereby the product id (assuming we're using that to determine the right product) can be determined at run time (when the code actually executes). Let's call that mechanism <i>dynamic routing</i>.
</p>

<p class="my-2">
Let's say we have the following products:
</p>

<div class="grid grid-cols-[100px_2fr_1fr_2fr]">
  <h2>ID</h2>
  <h2>Name</h2>
  <h2>Price</h2>
  <div>Photo</div>
</div>
<div class="grid grid-cols-[100px_2fr_1fr_2fr]">
  <h2>21037</h2>
  <h2>Professional Card Shuffling Machiine</h2>
  <h2>18,365.10</h2>
  <div><img src="../card-shuffler.png" width="150" alt=""></div>
</div>
<div class="grid grid-cols-[100px_2fr_1fr_2fr]">
  <h2>91087</h2>
  <h2>Gaming Chair</h2>
  <h2>24,990.29</h2>
  <div><img src="../gaming-chair.png" width="150" alt=""></div>
</div>
<div class="grid grid-cols-[100px_2fr_1fr_2fr]">
  <h2>98223</h2>
  <h2>Pasta Machine</h2>
  <h2>4,690.93</h2>
  <div><img src="../pasta-maker.png" width="150" alt=""></div>
</div>

<p class="my-2">
Again, we don't want to create separate file folder and files for each one. Instead we want to end our routes in <code>products/21037</code>, <code>products/91087</code>, and <code>products/98223</code> respectively. Here's the file structure we'd create:
</p>

<img src="../dynamic-routes.png" width=350 alt="">

<p class="my-2">
Those square brackets around <code>id</code>? That's not a typo &mdash; that's how you specify a dynamic route. Now, all those URLs we wanted to use will work. The only thing we need to do now is to grab the actual <code>id</code> sent into that URL. That's next.
</p>

<Prev prevLink="nested-routes" prevText="Nested Routes" />
<Next nextLink="url-params" nextText="URL Parameters" />
</main>