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

<PageTitle title="Hooks  " />
<main class="md:mx-4 sm:mx-2">
  <p
    class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]"
  >
    To understand the purpose and implementation of hooks, let's first consider
    the normal request > response cycle.
  </p>

  <figure class="w-[500px] text-center">
    <img src="../request-response.png" alt="Description of image" width="500" />
    <figcaption class="text-gray-600 italic text-sm mt-0">
      Normal request-response cycle
    </figcaption>
  </figure>

  <p class="my-2">
    Hook functions intercept the request, allowing you to do a variety of
    interesting things such as:
  </p>

  <ul class="">
    <li class="list-inside list-disc">authentication</li>
    <li class="list-inside list-disc">data preloading</li>
    <li class="list-inside list-disc">dynamic route handling</li>
    <li class="list-inside list-disc">SEO and metadata</li>
    <li class="list-inside list-disc">redirection</li>
    <li class="list-inside list-disc">context and state</li>
    <li class="list-inside list-disc">permission checks</li>
    <li class="list-inside list-disc">error handling</li>
    <li class="list-inside list-disc">third-party integrations</li>
  </ul>

  <figure class="w-[500px] text-center">
    <img
      src="../request-hooks-response.png"
      alt="Description of image"
      width="500"
    />
    <figcaption class="text-gray-600 italic text-sm mt-0">
      request-hooks-response cycle
    </figcaption>
  </figure>

  <p class="my-2">
    Sveltekit allows for two files to contain functions that act as
    interrupters: <code>hooks.server.js</code> and <code>hooks.client.js</code>.
    Both of them are placed in the <code>svc</code> folder and, of the two,
    <code>hooks.server.js</code> is by far the most used. We'll concentrate on the
    server version in this explainer.
  </p>

  <p class="my-2">
    Unlike,<SeeMoreLink linkedText="Actions" />, where we can either use preset
    functions like <code>enhance</code> or write our own, we can only use the hook
    functions provided by Sveltekit. These functions are:
  </p>

  <div class="border-2 rounded-md">
    <div class="grid-cols-[175px_200px_auto] grid border-b-2 p-2">
      <div><code>handle</code></div>
      <p>Server hook</p>
      <div>This function is the heart of the hooks mechanism. It is called automatically on every request to the server. Determines the response that will be sent to the client. The function receives an <code>event</code> object and a <code>resolve</code> function, responsible for generating a <code>Response</code>. <SeeMoreLink linkedText="Hook function: handle" /></div>
    </div>
    <div class="grid-cols-[175px_200px_auto] grid border-b-2 p-2">
      <div><code>handleFetch</code></div>
      <p>Server hook</p>
      <div>Perhaps unfortunately named &mdash; this has nothing to do with either the JavaScript <code>fetch</code> function (or its Svelte version of the same). Rather, it is used to determine if a request should be processed by Sveltekit or not.  <SeeMoreLink linkedText="Hook function: handleFetch" /></div>
    </div>
  
    <div class="grid-cols-[175px_200px_auto] grid border-b-2 p-2">
      <div><code>handleError</code></div>
      <p>Server hook<br />Client hook</p>
      <div>Runs on both server and client requests. Called if an unexpected error occurs. (Errors that are deliberately thrown will not be caught by <code>handleError</code>.) The <code>handleError</code> hook allows you to:
        <ul class="list-disc list-inside">
          <li class="">log the error</li>
          <li class="">customize the error message shown to the user. <SeeMoreLink linkedText="Hook function: handleError" /></li>
        </ul>
        </div>
    </div>
  </div>
<p class="my-2">
  There's one other thing that we commonly use hooks for: putting information into a <code>locals</code> object. This information is available to the hook functions as well as any server-only <code>load</code> functions and <code>+server.js</code> files. <SeeMoreLink linkedText="The locals object" />
</p>

</main>
