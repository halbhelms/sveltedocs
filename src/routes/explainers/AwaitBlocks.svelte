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
  import PageSubTitle from '../../lib/components/page-elements/PageSubTitle.svelte';

  $: seeMoreActive: false
</script>

<PageTitle title="Await Blocks" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
Modern web development often calls on third-party APIs for information. Those APIs are, of course, beyond our control. We don't know how long the server will take to respond &mdash; or even if it's available when we call it.
</p>

<p class="my-2">
This is the problem <i>promises</i> were created to address. Instead of processing halting while the external server does its job (we hope), the server returns a <i>promise</i> to send us the information when it's available.
</p>

<p class="my-2">
JavaScript has the <i>async/await</i> mechanism for handling this &mdash; when we're working with JavaScript. But what if your page output depends on a promise? Svelte offers <i>await blocks</i> for this.
</p>

<p class="my-2">
In the following code, assume an external API returns a promise to provide a discount code. A promise exists in one of three states: <i>pending</i>, <i>fulfilled</i>, or <i>rejected.</i> Svelte has different versions of the <code>await</code> block for each of these.
</p>

<CodeSnippet code="&#123;#await promise}
  <!-- Pending  -->
  <p>We'll be right with you.</p>
&#123;:then number}
  <!-- Resolved  -->
  <p>Here's your discount code: &#123;number}</p>
&#123;:catch error}
  <!-- Rejected  -->
  <p>We can't give you a discount code at this time: &#123;error.message}</p>
&#123;/await}" />

<ExternalResource resource="https://javascript.info/promise-basics" intro="For more on promises:" />
</main>
