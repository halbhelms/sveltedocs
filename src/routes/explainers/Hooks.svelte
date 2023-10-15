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

<PageTitle title="Hooks  " />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
To understand the purpose and implementation of hooks, let's first consider the normal request > response cycle.
</p>

<figure class="w-[500px] text-center">
  <img src="../request-response.png" alt="Description of image" width=500 />
  <figcaption class="text-gray-600 italic text-sm mt-0">Normal request-response cycle</figcaption>
</figure>

<p class="my-2">
Hook functions intercept the request, allowing you to do a variety of interesting things such as:
</p>

<ul class="">
  <li class="list-inside list-disc">authentication</li>
  <li class="list-inside list-disc">data preloading</li>
  <li class="list-inside list-disc">dynamic route handling</li>
  <li class="list-inside list-disc">SEO and metadata</li>
  <li class="list-inside list-disc">redirection</li>
  <li class="list-inside list-disc">context and state</li>
  <li class="list-inside list-disc">permission checks</li>
  <li class="list-inside list-disc">error handling</li>
  <li class="list-inside list-disc">third-party integrations</li>
</ul>

<figure class="w-[500px] text-center">
  <img src="../request-hooks-response.png" alt="Description of image" width=500 />
  <figcaption class="text-gray-600 italic text-sm mt-0">request-hooks-response cycle</figcaption>
</figure>

<p class="my-2">
Sveltekit allows for two files to contain functions that act as interrupters: <code>hooks.server.js</code> and <code>hooks.client.js</code>. Both of them are placed in the <code>svc</code> folder and, of the two, <code>hooks.server.js</code> is by far the most used. We'll concentrate on functions in this file.
</p>

<p class="my-2">
   
</p>




</main>