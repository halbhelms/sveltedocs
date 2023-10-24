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

<PageTitle title="Logic Blocks" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
Svelte has its own way of introducing logic and processes into the web page. In this Explainer, we explore each one.
</p>

<PageSubTitle subtitle="If statements" />
<p class="my-2">
Used to determine display based on the truth of a condition.
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  const user = &#123;
    name: 'Noah Sweat',
    advantagePlus: true,
    advantage: false
  }
</script>

<h2>Your Benefits</h2>
<ul>
&#123;#if user.advantagePlus}
  <li>dedicated customer advocate</li>
  <li>Advantage+ exclusive deals</li>
  <li>discount pricing</li>
  <li>priority access</li>
  <li>same-day shipment</li>
  <li>30-day refund</li>
  <li>extended warranty</li>
&#123;:else if user.advantage}
  <li>discount pricing</li>
  <li>priority access</li>
  <li>same-day shipment</li>
  <li>30-day refund</li>
  <li>extended warranty</li>
&#123;:else}
  <li>30-day refund</li>
  <li>extended warranty</li>
&#123;/if}
</ul> "/>

<PageSubTitle subtitle="Each loops" />


</main>