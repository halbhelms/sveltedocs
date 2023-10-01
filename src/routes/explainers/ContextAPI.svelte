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

<PageTitle title="Context API" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
We're going to look at a diagram of connecting components. Brace for impact.
</p>

<img src="../context-complex.png" alt="Complex connecting components" width="700">

<p class="my-2">
How to read it... 
</p>
<ul class="ml-8 list-disc list-inline">
  <li>The <code>App Component</code> calls <code>A</code> and <code>C</code></li>
  <li><code>A</code> calls <code>E</code></li>
  <li><code>B</code> calls <code>D</code></li>
  <li><code>C</code> calls <code>G</code></li>
  <li><code>D</code> calls <code>F</code></li>
  <li><code>E</code> calls no one</li>
  <li><code>F</code> calls no one</li>
  <li><code>G</code> calls <code>H</code> and <code>J</code></li>
  <li><code>H</code> calls no one</li>
  <li><code>I</code> calls no one</li>
  <li><code>J</code> calls <code>I</code></li>
</ul>

<p class="my-2">
BTW, if you ever find yourself with such a confusing chain of components, 
</p>

</main>