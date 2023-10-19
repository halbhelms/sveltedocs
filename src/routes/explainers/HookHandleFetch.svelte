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

<PageTitle title="The <code class='text-2xl'>handleFetch</code> Hook" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
This is a very specialized function, intended on letting Sveltekit know if it should handle a request or not. For instance, consider you're integrating with a third-party service or a different server application running in tandem with your SvelteKit app. You'd like to handle certain requests with SvelteKit but let others pass through directly to this other service. <code>handleFetch</code> can be beneficial here.
</p>

<p class="my-2">
Example: Let's say you have a SvelteKit app, but you're also running a WordPress installation on the same domain for a legacy blog. You'd like requests to <code>/blog/*</code> to be handled by WordPress, but all other requests to be managed by SvelteKit.
</p>

<p class="my-2">
Here's how you might use the <code>handleFetch</code> function:
</p>

<CodeSnippetHeader text="src/hooks.server.js" />
<CodeSnippet code="export async function handleFetch(request, options) &#123;
  // Check if the request starts with /blog/
  if (request.url.startsWith('/blog/')) &#123;
    // Let the request bypass SvelteKit and go directly to WordPress or another server.
    return false;
  }

  // For all other routes, allow SvelteKit to handle them.
  return true;
}" />

</main>