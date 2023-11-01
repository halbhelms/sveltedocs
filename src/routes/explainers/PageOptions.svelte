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

<PageTitle title="Page Options" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
The docs for SvelteKit tell us this: <span class="italic">By default, SvelteKit will render (or prerender) any component first on the server and send it to the client as HTML. It will then render the component again in the browser to make it interactive in a process called hydration.</span> But what does that mean &mdash; "renders the component first on the server...then renders the component again in the browser"? Is the HTML displayed on the page and then re-displayed? No.
</p>

<h2 class="font-bold text-xl">Background</h2>
<p class="my-2">
SvelteKit follows the principles of Server-Side Rendering (SSR) and Client-Side Rendering (CSR). Both approaches have their strengths, and SvelteKit tries to get the best of both worlds.
</p>

<h2 class="font-bold text-xl">Step-by-step Explanation</h2>
  <h2><h2 class="font-bold text-xl">Server-Side Rendering (SSR)</h2>
  <ul class="list-disc list-inside">
    <li>When a user first visits a SvelteKit site, the request goes to the server.</li>
    <li>The server runs the SvelteKit app, generating the page's HTML content based on the current state and data it needs.</li>
    <li>This generated HTML is immediately sent back to the browser. So, the user sees the page pretty fast, even before any JavaScript runs.</li>
    <li>This is great for performance, SEO (search engine optimization), and users who might have JavaScript disabled.</li>
  </ul>

  <h2 class="font-bold text-xl">Hydration</h2>
  <ul class="list-disc list-inside inline">
    <li>Along with the HTML, the server also sends the necessary JavaScript for the SvelteKit app.</li>
    <li>When this JavaScript loads and runs in the browser, it "wakes up" the already rendered HTML, making it dynamic. This process is called "hydration".</li>
    <li>After hydration, the page is no longer just static HTML. It becomes a fully interactive Svelte app.</li>
  </ul>

   <h2 class="font-bold text-xl">Client-Side Rendering (CSR)</h2>
  <ul class="list-disc list-inside">
    <li>Now, when the user navigates to another page on the site, instead of making a new request to the server for HTML (like traditional websites), SvelteKit uses JavaScript to fetch the data and render the new page right in the browser.</li>
    <li>This CSR approach is swift because there's no full page reload. Only the parts of the page that change get updated.</li>
    <li>It provides a smooth, app-like experience.</li>
  </ul>

  <h2 class="font-bold text-xl">Analogy</h2>
<p class="my-2">
Imagine ordering a pre-made sandwich (SSR) from a cafe. It's handed to you quickly because it's already made. But then, you customize it by adding some toppings and condiments (hydration). Now, every time you want a bite with a different flavor (navigating to another page), you just adjust the toppings a bit (CSR) instead of ordering a new sandwich.
</p>

<p class="my-2">
In essence, SvelteKit first serves you a fast, ready-to-view page (SSR). Once you're on the site, it smoothly transitions between pages without full reloads, giving a snappy, app-like feel (CSR). Best of both sandwiches... I mean, worlds! 😉🥪
</p>

<p class="my-2">
You can control SvelteKit's approach to rendering on a page-by-page basis by exporting options from either:</p>
<ul class="list-disc list-inside">
  <li><code>+page.server.js</code></li>
  <li><code>+page.js</code></li>
  <li><code>+page.svelte</code></li>
</ul>

Or if you prefer to work on a group of pages, you can export options from either:
<ul class="list-disc list-inside">
  <li><code>+layout.server.js</code></li>
  <li><code>+layout.js</code></li>
</ul>

<PageSubTitle subtitle="prerender" />
<p class="my-2">
If you have no JavaScript that needs to run on a page, you can tell SvelteKit to <em>prerender</em> your page by exporting:
</p>
<code>export const prerender = true</code>

<p class="my-2">
Local directives override more global ones, so if you have a large number of pages that can be prerendered, you can export <code>prerender</code> on layout pages and override them at the local level by marking <code>prerender</code> as <code>false.</code>
</p>

<p class="my-2">
There's a lot more information available about your options at the <a href="https://kit.svelte.dev/docs/page-options#prerender"> official SvelteKit docs </a> on this topic.
</p>

<PageSubTitle subtitle="ssr" />
<p class="my-2">
In the unlikely event that you <em>don't</em> want your page to be rendered first on the server, you can do so with this directive:
</p>

<code>export const ssr = false</code>

<PageSubTitle subtitle="csr" />
<p class="my-2">
If your page requires no JavaScript at all, in addition to setting <code>prerender</code> to <code>true</code>, you can also disable client-side rendering: 
</p>
<code>export const csr = false</code>

<PageSubTitle subtitle="trailingSlash" />
<p class="my-2">
By default, SvelteKit removes trailing slashes on URLs, so that if you were to type <code>/about/</code>, SvelteKit will turn that into <code>/about</code>. You can change this behavior if needed. Again, the <a href="https://kit.svelte.dev/docs/page-options#trailingslash">offical docs on this topic</a> are well worth reading.
</p>

<PageSubTitle subtitle="config" />
<p class="my-2">
Finally, <code>config</code> is a page option, primarily useful based on your choice of deployment platforms. The <a href="https://kit.svelte.dev/docs/page-options#config">official SvelteKit docs</a> go into this in some detail.
</p>

</main>