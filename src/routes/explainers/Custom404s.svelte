<script>
  import PageTitle from "$lib/components/page-elements/PageTitle.svelte";
  import Credit from "$lib/components/page-elements/Credit.svelte";
  import ExternalResource from "$lib/components/page-elements/ExternalResource.svelte";
  import Next from "$lib/components/page-elements/Next.svelte";
  import Prev from "$lib/components/page-elements/Prev.svelte";
  import CodeSnippet from "$lib/components/CodeSnippet.svelte";
  import CodeSnippetHeader from "$lib/components/CodeSnippetHeader.svelte";
  import SeeMoreLink from "./SeeMoreLink.svelte";
  import RelatedLinks from "$lib/components/page-elements/RelatedLinks.svelte";
  import PageSubTitle from "$lib/components/page-elements/PageSubTitle.svelte";
  import WalkThru from "$lib/components/page-elements/WalkThru.svelte";
  import WalkThruHeader from "$lib/components/page-elements/WalkThruHeader.svelte";

  $: seeMoreActive: false;
</script>

e<PageTitle title="Custom 404 Pages" />
<main class="md:mx-4 sm:mx-2">
  <p
    class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]"
  >
    File-based routing, which Sveltekit uses, has many advantages, but sometimes
    it might not be obvious how to handle specific use cases. In this Explainer,
    we tackle the issue of custom 404 pages.
  </p>

<p class="my-2">
  To clarify this, let's take a look at the routes for an app that explains
  different genres in classical music.
</p>

<figure>
  <img src="../custom-404-naive.png" alt="" />
  <figcaption class="italic text-xs ml-8">A flawed implementation of routes to catch missing files</figcaption>
</figure>

<p class="my-2">
It might seem that a URL like <code>http://svelteinfo.com/genres/dodecaphonic</code>, lacking an explicit matching route, would be caught by the <code>+error.svelte</code> file. It will not. Instead, we need to make use of <i>rest parameters</i> in our routing. <SeeMoreLink linkedText="RestDynamicRoutes" /> Here's how to catch URLs that would otherwise generate a 404 error page.
</p>

<figure>
  <img src="../custom-404-correct.png" alt="" />
  <figcaption class="italic text-xs ml-8">A fixed implementation of routes to catch missing files</figcaption>
</figure>

<p class="my-2">
What's changed? We've added a new route: <code>[...not-found]</code> that has a <code>+page.js</code> file. We've also moved <code>+error.svelte</code> outside of the <code>genres</code> folder. Let's look at the code for each.
</p>

<CodeSnippetHeader text="[...not-found]/+page.js" />
<CodeSnippet code="  import &#123; error } from '@sveltejs/kit'

  export function load(event) &#123;
    throw error(404, 'Not found')
  }" />

<WalkThruHeader />
<WalkThru lineNumber="4">
Having a <code>[...not-found]</code> route means that any routes that aren't explicitly matched will encounter this route's <code>+page.js</code> file. Within that file, we throw a 404 error. This will be caught by the newly-moved <code>+error.svelte</code> file.
</WalkThru>

<CodeSnippetHeader text="+error.svelte" />
<CodeSnippet code="<script>
  import &#123; page } from '$app/stores'
</script>
<p>The URL you entered, <span>&#123;page.url.href}</span>, does not correspond with any known routes.</p>" />

<WalkThruHeader />
<WalkThru lineNumber="4">
Now, we can do whatever we wish when a 404 is encountered.
</WalkThru>



</main>
