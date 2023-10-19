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

<PageTitle title="Page Data" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
All <code>+page.svelte</code> files can declare a <code>script</code> section. Within that section, you <i>could</i> do things like fetching data from a database (or, really, anything that gets data needed by a <code>+page.svelte</code> file).
</p>

<p class="my-2">
But there's a better way. You can create a special JavaScript file linked to an individual <code>+page.svelte</code> file. This file is placed in the same directory as its corresponding <code>+page.svelte</code> file. It's this special file's responsibility to provide data needed by <code>+page.svelte</code>. Svelte will automatically call this file before processing <code>+page.svelte</code>. (You can also load data from <i>layout</i> files that will be available to all server files.)
</p>

<p class="my-2">
There's a server version of this file (<code>+page.server.js</code>) and a client version (<code>+page.js</code>). Let's explore both options.
</p>

<p class="my-2">
In both versions, you <code>export</code> a <code>load</code> function. This function returns an object that should contain any data you want <code>+page.svelte</code> to be aware of. Let's start with a very simple example that returns the winner of a contest.
</p>

<CodeSnippetHeader text="+page.server.js" />
<CodeSnippet code="export async function load(event) &#123;
  return &#123;
    winner: 'Rich Harris'
  }
}" />

<p class="my-2">
For this simple example, we've omitted the logic behind choosing the winner. In reality, we'd have some mechanism for determining who the winner should be.
</p>

<p class="my-2">
Now, how do we use this data within <code>+page.svelte</code>? We declare a special variable, <code>data</code>, as a prop that represents the object sent by the <code>load</code> function.
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  export let data
</script>

<p>The winner of our contest, Best Framework Creator, goes to &#123;data.winner}</p>" />

<p class="my-2">
So, when would you use <code>+page.server.js</code> and when <code>+page.js</code>? We primarily use <code>+page.server.js</code>. If part of your data creation for <code>+page.svelte</code> involves passwords, API keys, variables from <code>.env</code> files, <i>etc.</i>, using the server version is much preferred as these data will not be exposed to the client.
</p>

<p class="my-2">
On the other hand, there are restrictions and nuances to the use of <code>+page.server.js</code> such as:
</p>

<div class="border-2">
  <div class="border-1 border-b-2 grid grid-cols-[200px_auto]">
    <p class="border-r-2 pl-1 font-bold">Function limitation</p>
    <p class="pl-2">You can't include a JavaScript function in the <code>load</code> return object. The reason is that the data returned from <code>load</code> gets serialized to be sent to the client. Functions aren't serializable, so they must be handled in <code>+page.js</code>.</p>
  </div>
  <div class="border-1 border-b-2 grid grid-cols-[200px_auto]">
    <p class="border-r-2 pl-1 font-bold">Asynchronous operations</p>
    <p class="pl-2">While you can perform asynchronous operations in the <code>load</code> function (like database queries or API calls) using async/await, remember that the longer these operations take, the longer your user waits for the page to render. This can impact the perceived performance of your application.</p>
  </div>
  <div class="border-1 border-b-2 grid grid-cols-[200px_auto]">
    <p class="border-r-2 pl-1 font-bold">Environmental awareness</p>
    <p class="pl-2">The code in <code>+page.server.js</code>, including the <code>load</code> function, runs in a Node.js environment. So, any client-specific APIs or functionalities (like the <code>window</code> or <code>document</code> objects) aren't available here.</p>
  </div>
  <div class="border-1 border-b-2 grid grid-cols-[200px_auto]">
    <p class="border-r-2 pl-1 font-bold">Import restrictions</p>
    <p class="pl-2">Since <code>+page.server.js</code> runs on the server, you must be cautious when importing modules. For instance, if a module relies on browser-specific APIs, it will cause errors when imported in <code>+page.server.js</code>.</p>
  </div>
</div>
</main>