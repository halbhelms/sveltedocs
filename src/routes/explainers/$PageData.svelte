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

<PageTitle title="$page.data" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
We've seen how data declared in <code>+layout.server.js</code> or <code>+layout.js</code> is accessible by <i>descendant</i> components. But Svelte has another trick up its sleeve: <i>ancestors</i> getting data from their descendants. Let's see how that works.
</p>

<p class="my-2">
To illustrate, we'll slightly adapt the code we used when exploring layouts. We'll have a route for <code>parent</code>, <code>child</code>, and <code>grandchild</code>. For each of these routes, we'll have a <code>+layout.server.js</code> with a <code>load</code> function that returns an object with the names of each relative: Paul and Patty for the parent, Carlito and Cathy for the child, and George and Grace for the grandchild.
</p>

<p class="my-2">
We'll also change the code in the parent's <code>+layout.svelte</code> to be this:
</p>

<CodeSnippetHeader text="/parent/+layout.svelte" />
<CodeSnippet code="<script>
  import &#123; page } from '$app/stores'
  export let data
</script>

<p>We are &#123;$page.data.name}</p>

<slot />" />

<p class="my-2">
The idea is this: Each of the relatives overwrites the value of the <code>name</code> variable via the <code>load</code> function of their respective <code>+layout.server.js</code> files. If <code>$page.data</code> works as described, the <code>+layout.svelte</code> component will be able to read the current value of their descendant's <code>name</code>. Here is an example from the <code>grandchild</code> route.
</p>

<CodeSnippetHeader text="/parent/child/grandchild/+layout.server.js" />
<CodeSnippet code="export async function load(event) &#123;
  return &#123;
    name: 'George and Grace',
    residence: 'New York'
  }
}" />

<p class="my-2">
Each of the <code>+page.svelte</code> components will do nothing more than identify the current route. For example, the <code>grandchild</code> route's <code>+page.svelte</code> file has a single line: <code><p>You're on the <code>grandchild</code> route.</p></code>
</p>

<p class="my-2">
We'll start at <code>http://svelteinfo.com/parent</code>. That route's <code>+layout.server.js</code> set the <code>name</code> variable to <i>Paul and Patty</i>. Since we're not dealing with descendants at the moment, we expect to see: <i>We are Paul and Patty.</i> Fingers crossed, eyes closed &mdash; let's try it. 
</p>

<figure class="my-2">
  <img src="../$page-data-parent.png" alt="parent layout" width=200>
  <figcaption class="italic text-xs">http://svelteinfo.com/parent</figcaption>
</figure>

<p class="my-2">
Now, the child...
</p>

<figure class="my-2">
  <img src="../$page-data-child.png" alt="parent layout" width=200>
  <figcaption class="italic text-xs">http://svelteinfo.com/parent/child</figcaption>
</figure>

<p class="my-2">
And the grandchild...
</p>

<figure class="my-2">
  <img src="../$page-data-grandchild.png" alt="grandchild layout" width=200>
  <figcaption class="italic text-xs">http://svelteinfo.com/parent/child/grandchild</figcaption>
</figure>

<p class="my-2">
We seldom use this feature, but there are times when it provides the perfect solution to a thorny problem.
</p>

<Prev prevLink="page-data-layouts" prevText="Page Data: Layouts" />

</main>