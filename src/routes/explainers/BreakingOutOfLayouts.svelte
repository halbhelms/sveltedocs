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

<PageTitle title="Breaking Out of Layouts" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
Layouts are a powerful feature of Sveltekit. But to that power, Sveltekit adds <i>flexibility</i>. What do we mean?
</p>

<p class="my-2">
The only problem with layouts, as we have presented them so far, is that they can be rigid. What if we do want the hierarchical nature of layouts trickling from parent to child &mdash; right up to the point at which we don't? For that eventuality, Sveltekit offers the ability to break out of the fixed hierachy and define a different layout than what would be expected in the normal course of layouts. Let's see how it works.
</p>

<p class="my-2">
We'll borrow the example from the Sveltekit docs, as it's an excellent one. Look at this route tree:
</p>

<img src="../breaking-layouts.png" width=400 alt="breaking out of layouts">

<p class="my-2">
Our <code>+page.svelte</code> file &mdash; where would it get its layouts from? From <code>resources > (app) > item > id</code>. But now, let's see which layouts are inherited if we use the <code>@</code> symbol &mdash; the mechanism Sveltekit offers for breaking out of layouts.
</p>

<p class="my-2">
We can target an individual <code>+page.svelte</code> for which we want to break the hierarcy. Here is the original (no <code>@</code> symbol employed ) and four variations of breaking out of the layout.
</p>

<div class="grid-cols-5 grid">
  <h2 class="border-2">File name</h2>
  <h2 class="border-2">Include layout from <code>routes</code></h2>
  <h2 class="border-2">Include layout from <code>(app)</code></h2>
  <h2 class="border-2">Include layout from <code>item</code></h2>
  <h2 class="border-2">Include layout from <code>[id]</code></h2>
</div>
<div class="grid-cols-5 grid">
  <h2 class="border-2"><code>+page.svelte</code></h2>
  <h2 class="border-2 text-center"> ✅</h2>
  <h2 class="border-2 text-center"> ✅</h2>
  <h2 class="border-2 text-center"> ✅</h2>
  <h2 class="border-2 text-center"> ✅</h2>
</div>
<div class="grid-cols-5 grid">
  <h2 class="border-2"><code>+page@[id].svelte</code></h2>
  <h2 class="border-2 text-center"> </h2>
  <h2 class="border-2 text-center"> </h2>
  <h2 class="border-2 text-center"> </h2>
  <h2 class="border-2 text-center"> ✅</h2>
</div>
<div class="grid-cols-5 grid">
  <h2 class="border-2"><code>+page@item.svelte</code></h2>
  <h2 class="border-2 text-center"> </h2>
  <h2 class="border-2 text-center"> </h2>
  <h2 class="border-2 text-center"> ✅</h2>
  <h2 class="border-2 text-center"> </h2>
</div>
<div class="grid-cols-5 grid">
  <h2 class="border-2"><code>+page@(app).svelte</code></h2>
  <h2 class="border-2 text-center"> </h2>
  <h2 class="border-2 text-center"> ✅</h2>
  <h2 class="border-2 text-center"> </h2>
  <h2 class="border-2 text-center"> </h2>
</div>
<div class="grid-cols-5 grid">
  <h2 class="border-2"><code>+page@.svelte</code></h2>
  <h2 class="border-2 text-center"> ✅</h2>
  <h2 class="border-2 text-center"> </h2>
  <h2 class="border-2 text-center"> </h2>
  <h2 class="border-2 text-center"> </h2>
</div>

<p class="my-2">
This solution is so flexible, you can target not only a <code>+page.svelte</code> file, but a <code>+layout.svelte</code> file as the point from where to break out of the normal layout behavior. (Targeting a <code>layout.svelte</code> file works identically to targeting a <code>+page.svelte</code> file.)
</p>


<p class="my-2">

</p>

<Prev prevLink="layout-groups" prevText="Layout Groups" />
</main>