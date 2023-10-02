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

<PageTitle title="Nested Routes" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
<i>Routes</i> can be thought of as the path to a specific folder or file &mdash; roughly corresponding to a URL.
</p>

<p class="my-2">
Svelte is very particular about the file structure you create, as it uses the file structure to determine routes. Look at this illustration. The <img class="inline" width=32 src="../folder-icon.png" alt="Folder icon"> folder icon represents a <i>folder</i> in your file structure. (The <img class="inline" width=24 src="../file-icon.png" alt="File icon"> file icon represents a <i>file</i> within a folder.) As you observe, a route can be nested inside another route. 
</p>

<img src="../nested-routes.png" alt="Nested routes" width=550>

<p class="my-2">
If we pointed our browser to <code>https://svelteinfo.com/grandparent/parent/child/grandchild/great-grandchild</code>, we would be navigating to the <code>great-grandchild</code> folder.
</p>

<p class="my-2">
Each folder can have any/all/none of the listed files. So, what does each one do?
</p>

<PageSubTitle subtitle="Svelte File Types" />
<div class="grid grid-cols-[250px_1fr] border-2">
  <div class=""><code>+layout.server.js</code></div>
  <div class="">
    The <code>+layout.server.js</code> file in SvelteKit serves as a server-side counterpart to your <code>+layout.svelte</code> file. It's where you can define server-side logic that runs during the loading of a page, but for the layout, not just individual pages. This can be useful for fetching data or performing calculations that you want to be available to multiple pages that use the same layout.

    The <code>+layout.server.js</code> file can define a load function that returns an object that can then be used as props in the <code>+layout.svelte</code> file and passed down to individual pages.
  </div>
</div>
<div class="grid grid-cols-[250px_1fr] border-2">
  <div class=""><code>+layout.svelte</code></div>
  <div class="">
   In SvelteKit, a <code>+layout.svelte</code> file is used to define a layout that wraps around your page components within the same directory or in nested directories. Think of it like a template or a master layout where you can place common elements like headers, footers, and navigation that you want to appear across multiple pages.

  For example, if you put a <code>+layout.svelte</code> file in your <code>src/routes</code> folder, every Svelte file in that folder and its subfolders will be rendered inside that layout unless they specify a different layout.
  </div>
</div>
<div class="grid grid-cols-[250px_1fr] border-2">
  <div class=""><code>+page.server.js</code></div>
  <div class="">
    In SvelteKit, a +page.server.js file is used for server-side logic associated with a specific route. Think of it as the server-side counterpart to your Svelte component (+page.svelte) for that same route. The +page.server.js file typically exports a load function, which SvelteKit runs on the server when that route is hit. This is the place to do things like fetch data, interact with databases, check for authentication, and so on, before your page component even mounts.

    The load function gets an input object with request details and is expected to return an object containing data that your Svelte component (+page.svelte) can use. It's similar in purpose to the <code>+page.js</code> file, but runs <i>only</i> on the server, making it useful for keeping private information unavailable to the browser.
  </div>
</div>
<div class="grid grid-cols-[250px_1fr] border-2">
  <div class=""><code>+page.js</code></div>
  <div class="">
    A <code>+page.js</code> file has a similar function to <code>+page.server.js</code>: it exports a load function. The difference is that <code>+page.js</code> runs both on the server during the initial page load and on the client during navigation. If you navigate to a page, the load function in the corresponding <code>+page.js</code> file will execute on the client-side to fetch any necessary data or perform other tasks.

    So, it's really versatile. It allows you to write logic that can run on either the server or the client, depending on how the page is being accessed.
  </div>
</div>
<div class="grid grid-cols-[250px_1fr] border-2">
  <div class=""><code>+page.svelte</code></div>
  <div class="">
    The +page.svelte file in SvelteKit is essentially your actual page component. This is where the bulk of your page's HTML, script, and styling go. It's what gets displayed when you navigate to a specific route in your SvelteKit app.
  </div>
</div>
<div class="grid grid-cols-[250px_1fr] border-2">
  <div class=""><code>+error.svelte</code></div>
  <div class="">
    <code>+error.svelte</code> is your go-to file for displaying custom error messages in SvelteKit. It acts like a catch-all error page. If someone tries to navigate to a route that doesn't exist or encounters some other kind of error, SvelteKit will display the <code>+error.svelte</code> component. It's like the 404 page you'd see on other web frameworks, but it can be used for other error statuses too, not just 404. Errors "bubble up" until a <code>+error.svelte</code> file is found. If none is available, the raw error will be shown to the user &mdash; not usually what you'd want.
  </div>
</div>

<p class="my-2">
So, that's what the pages do, but in what order do they run? The same order we presented them above &mdash; from <code>+layout.server.js</code> to <code>+error.svelte</code>. Because there is a set order, a URL pointing to a route points only to the folder, not an actual file, as in: <code>https://svelteinfo.com/consulting</code>.
</p>

<p class="my-2">
But there are times when we want a more flexible routing mechanism. Note the URL of the page you're now on. It ends in <code>nested-routes</code>. But we have dozens of explainers; surely there has to be a better way of handling this other than creating folders for each explainer? There is &mdash; and that's what we'll explore next.
</p>

<Next nextLink="dynamic-routes" nextText="Dynamic Routes" />
</main>