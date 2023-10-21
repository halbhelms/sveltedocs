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

<PageTitle title="URL Data" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
The <code>load</code> function, exported in <code>+page.server.js</code> receives an <i>event</i> argument. In this brief Explainer, we'll look at one of the event properties, <code>url</code>. We'll use an example URL: <code>http://svelteinfo.com/parent/child?lang=en</code>
</p>

<div class="b-2 rounded-md mt-8">
  <div class=" grid grid-cols-[250px_1fr] border-2">
    <div class="border-1 pl-2 text-right pr-2">
      <p>Property</p>
    </div>
    <div class="pl-2 border-1">
      <p>Value</p>
    </div>
  </div>
  <div class=" grid grid-cols-[250px_1fr]">
    <div class="pl-2 text-right pr-2">
      <code>href</code>
    </div>
    <div class="pl-2 border-1">
      <code>http://svelteinfo.com/parent/child</code>
    </div>
  </div>
  <div class=" grid grid-cols-[250px_1fr]">
    <div class="border-1 pl-2 text-right pr-2">
      <code>origin</code>
    </div>
    <div class="pl-2 border-1">
      <code>http://svelteinfo.com</code>
    </div>
  </div>
  <div class=" grid grid-cols-[250px_1fr]">
    <div class="border-1 pl-2 text-right pr-2">
      <code>protocol</code>
    </div>
    <div class="pl-2 border-1">
      <code>http:</code>
    </div>
  </div>
  <div class=" grid grid-cols-[250px_1fr]">
    <div class="border-1 pl-2 text-right pr-2">
      <code>username</code>
    </div>
    <div class="pl-2 border-1">
    </div>
  </div>
  <div class=" grid grid-cols-[250px_1fr]">
    <div class="border-1 pl-2 text-right pr-2">
      <code>password</code>
    </div>
    <div class="pl-2 border-1">
    </div>
  </div>
  <div class=" grid grid-cols-[250px_1fr]">
    <div class="border-1 pl-2 text-right pr-2">
      <code>host</code>
    </div>
    <div class="pl-2 border-1">
      <code>svelteinfo.com</code>
    </div>
  </div>
  <div class=" grid grid-cols-[250px_1fr]">
    <div class="border-1 pl-2 text-right pr-2">
      <code>port</code>
    </div>
    <div class="pl-2 border-1">
      <code>8000</code>
    </div>
  </div>
  <div class=" grid grid-cols-[250px_1fr]">
    <div class="border-1 pl-2 text-right pr-2">
      <code>pathname</code>
    </div>
    <div class="pl-2 border-1">
      <code>/parent/child</code>
    </div>
  </div>
  <div class=" grid grid-cols-[250px_1fr]">
    <div class="border-1 pl-2 text-right pr-2">
      <code>search</code>
    </div>
    <div class="pl-2 border-1">
      <code>?lang=en</code>
    </div>
  </div>
  <div class=" grid grid-cols-[250px_1fr]">
    <div class="border-1 pl-2 text-right pr-2">
      <code>searchParams</code>
    </div>
    <div class="pl-2 border-1">
      <code>get</code> function. Here it would be <code>searchParams.get('lang')</code>, which would return <code>en</code>.
    </div>
  </div>
</div>

</main>