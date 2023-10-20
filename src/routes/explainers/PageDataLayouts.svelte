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

<PageTitle title="Page Data: Layouts" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
When understanding <i>page data</i>, another thing to consider: you can also use <code>+layout.server.js</code> and <code>+layout.js</code> <code>load</code> functions to send data. That data is available to any descendant <code>+layout.svelte</code> and  <code>+page.svelte</code> components. 
</p>


<p class="my-2">
Let's see how using layouts works in this regard.
</p>

<CodeSnippetHeader text="/parent/+layout.server.js" />
<CodeSnippet code="export async function load(event) &#123;
  return &#123;
    residence: 'Las Vegas',
    name: 'Paul and Patty'
  }
}" />

<CodeSnippetHeader text="/parent/+layout.svelte" />
<CodeSnippet code="<script>
  export let data
</script>

<h1>Parents</h1>
<p>We are &#123;data.name}</p>

<slot />" />

<CodeSnippetHeader text="/parent/+page.svelte" />
<CodeSnippet code="<script>
  export let data
</script>

<p>We live in &#123;data.residence}</p>" />

<p class="my-2">
This URL: <code>http:svelteinfo.com/parent/</code> produces this:
</p>

<figure class="my-2">
  <img src="../layout-parent.png" alt="parent layout" width=200>
  <figcaption class="italic text-xs">http://svelteinfo.com/parent</figcaption>
</figure>

And it's available at the <i>child</i> level.

<CodeSnippetHeader text="/parent/child/+layout.server.js" />
<CodeSnippet code="export async function load(event) &#123;
  return &#123;
    name: 'Carlito and Cathy'
  }
}" />

<CodeSnippetHeader text="/parent/child/+layout.svelte" />
<CodeSnippet code="<script>
  export let data
</script>

<h1>Grandchildren</h1>
<p>We are &#123;data.name}</p>
<slot />" />

<CodeSnippetHeader text="/parent/child/+page.svelte" />
<CodeSnippet code="<script>
  export let data
</script>

<p>Our parents live in &#123;data.residence}</p>" />

<p class="my-2">
And the results...
</p>

<figure class="my-2">
  <img src="../layout-parent-child.png" alt="parent-child layout" width=260>
  <figcaption class="italic text-xs">http://svelteinfo.com/parent/child</figcaption>
</figure>

<p class="my-2">
Data set in a <code>+layout.server.js</code> (or <code>+layout.js</code> file) is available to all descendants. But what if a descendant has their own <code>+layout.server.js</code>? If the variables set are named differently from their ancestor/s, both ancestor and current values are merged together. If there is a conflict &mdash; if, for example, a grandchild were to set the value of <code>residence</code> in its own <code>+layout.server.js</code> file &mdash;  that version of <code>residence</code> would overwrite the value set at any ancestor level.
</p>

<Prev prevLink="page-data" prevText="Page Data" />
<Next nextLink="$page-data" nextText="$page.data" />
</main>