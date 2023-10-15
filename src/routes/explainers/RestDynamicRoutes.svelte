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

<PageTitle title="Dynamic Rest Routes" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
If we are not overly fond of <SeeMoreLink linkedText="Route Matchers" />, we positively <i>dislike</i> Dynamic Rest Routes &mdash; but you may find them useful. Rest routes were concocted to deal with a situation in which you may have many URL params, but don't wish to create individual folders for them. If you find yourself in that situation, rest routes will give you a solution.
</p>

<p class="my-2">
Take a URL like this: <code>svelteinfo.com/producs/residential/kitchen/gadgets/new/on-sale</code>. (Pesonally, we think if you devise URLs like this, there should be...consequences.)
</p>



<img src="../bad-dog.png" alt="bad dog" width=300>

<p class="my-2">
But let's say, against our advice, you decide to implement rest routes. How do you do it? Like this:
</p>

<img src="../rest-route-tree.png" width=400  alt="rest route tree">

<p class="my-2">
Now back to our url: <code>svelte.com/products/residential/kitchen/gadgets/new/on-sale</code>. Let's write a <code>+page.server.js</code> file to gain access to our rest URL params.
</p>

<CodeSnippetHeader text="+page.server.js" />
<CodeSnippet code="export const load = async (request) => &#123;
  const &#123; rest } = request.params;
  // rest is now a slash-delimited list of all URL params: 
  // residential/kitchen/gadgets/new/on-sale
  // what do we do with this string?
  // we leave this as an exercise for the bad dog
  return &#123;
    restParams: rest
  }
}" />




<Prev prevLink="route-matchers" prevText="Route Matchers" />
<Next nextLink="layout-groups" nextText="Layout Groups" />
</main>