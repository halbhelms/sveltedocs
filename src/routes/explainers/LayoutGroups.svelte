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

<PageTitle title="Layout Groups" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
After our unhappy foray into <SeeMoreLink linkedText="Dynamic Rest Routes" />, we are glad to take up a more fortunate topic: <i>layout groups</i>.
</p>

<p class="my-2">
We recently completed a very large application for one of our clients that broke neatly into an <i>admin</i> section and a <i>client</i> section. All of the admin routes needed an identical layout and all client routes needed another, different layout. Layout groups are the perfect solution for this.
</p>

<img src="../layout-groups.png" width=350 alt="layout groups">

<p class="my-2">
The <code>+layout.svelte</code> file's layout will be applied to all folders under each of their respective groups.
</p>

<Prev prevLink="rest-routes-dynamic" prevText="Dynamic Rest Routes" />

</main>