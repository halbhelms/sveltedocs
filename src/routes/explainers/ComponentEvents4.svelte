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

  $: seeMoreActive: false
</script>

<PageTitle title="Component Events 4: From Child to Grandparent" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
Sending an event from child to parent was, admittedly, somewhat involved. But what of the case where the child needs to communicate with its <i>grandparent</i>?
</p>

<img src="../child-grandparent.png" alt="child to grandparent">


<p class="my-2">
Mercifully, this is <i>very</i> simple. In this illustration, the child is our <code>CustomerChooser</code> file. It remains the same.
</p>

<p class="my-2">
The <code>+page.svelte</code> file remains the same.
</p>

<p class="my-2">
In fact, the only thing we need to do to make child-to-granparent communication work is to call <code>CustomerChooser</code> from the <i>parent</i> like this:
</p>

<code class="my-2">&lt;CustomerChooser on:selectionChosen /></code>
<p class="my-2">We specify that we are listening for a custom event with the name of <code>selectionChosen</code> but we provide no code for dealing with that listened-for event. Svelte reads this as "Just pass the event along to whoever called the parent" &mdash; in our case, <code>+page.svelte</code></p>

<Prev prevText="The +page.server.js file" prevLink="component-events-3" />

</main>