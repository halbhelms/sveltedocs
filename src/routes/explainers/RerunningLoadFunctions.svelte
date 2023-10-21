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

<PageTitle title="Rerunning Load Functions" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
Imagine that you have a <code>load</code> function in a <code>+page.server.js</code> file. To do its job and return the data needed by <code>+page.svelte</code>, the <code>load</code> function must perform a series of operations that are computationally "expensive".
</p>

<p class="my-2">
Let's say that <code>+page.server.js</code> is associated with the URL ending in <code>/products/best-selling?month=12</code>. It's January and, as part of your work, you visit this page, go somewhere else, then return to the original page. If possible, we'd like SvelteKit to be smart enough to know <i>not</i> to rerun the <code>load</code> function. After all, it's now January and nothing can happen that will change the data from the first time it was run (given that the best-selling products for December won't change).
</p>

<p class="my-2">
Well, SvelteKit <i>is</i> smart enough to know not to rerun the load function. But <i>how</i> does it kow that? As the official documentation tells us, <span class="italic">"SvelteKit tracks the dependencies of each load function to avoid rerunning it unnecessarily during navigation."</span> It's well worth reading their entire explanation of how this works: <a href="https://kit.svelte.dev/docs/load#rerunning-load-functions" target="newwin">Rerunning load functions</a>.
</p>

<p class="my-2">
That is some serious engineering. There are times, though, when we want to override SvelteKit's decision to not rerun the <code>load</code> function. Here are some cases that might be true:
</p>

<ol class="list-outside list-disc ml-3">
  <li><strong>User Interactions Leading to Data Changes:</strong> Suppose a user makes an update to their profile or posts a new comment. Even if the previous data was cached, you'd want to rerun the load function to fetch the latest data and reflect the changes to the user immediately.</li>

  <li><strong>Real-time or Frequently Updated Content:</strong> For applications that display real-time data, such as stock prices, sports scores, or news feeds, you might want to periodically invalidate the cache to ensure users always see the most recent information.</li>

  <li><strong>User Role or Permission Changes:</strong> If a user's role or permissions are updated while they're using the application (e.g., they're granted admin privileges), you'd want to invalidate the cache. This way, the load function can rerun to fetch data or render views that align with their new permissions.</li>

  <li><strong>Session or Authentication State Changes:</strong> If a user logs out and another user logs in on the same device, you'll want to invalidate cached data to prevent the new user from seeing the previous user's data.</li>

  <li><strong>Error Recovery:</strong> In some cases, there might be errors in data fetching or processing. By allowing manual invalidation, you can give users an option to "retry" or "refresh" the operation, causing the load function to run again.</li>

  <li><strong>Dynamic Content Based on External Factors:</strong> Suppose you have content that changes based on external factors, like the weather or time of day (e.g., a theme that changes based on sunrise and sunset). Invalidating the cache would allow the app to adjust dynamically to these factors.</li>

  <li><strong>Debugging and Development:</strong> During development, you might be tweaking how data is fetched or processed. Manually invalidating the cache can be handy to see the effects of your changes without having to do full page reloads or clear browser caches.</li>

  <li><strong>Promotional or Time-sensitive Content:</strong> If you're running limited-time promotions or events, you might want the flexibility to invalidate caches to ensure users see banners, offers, or countdown timers that are current and accurate.</li>
</ol>

<p class="my-2">
SvelteKit provides a mechanism to let us force a rerunning of the <code>load</code> function: <em>manual validation</em>. Again, we can do no better than to refer you to the SvelteKit documentation: <a href="https://kit.svelte.dev/docs/load#rerunning-load-functions-manual-invalidation" target="newwin">Manual invalidation</a>
</p>

<Prev prevLink="load-function" prevText="The Load Function" />
</main>