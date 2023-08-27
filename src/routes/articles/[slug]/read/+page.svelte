<script>
  import CodeSnippet from '$lib/components/CodeSnippet.svelte'
  import CodeSnippetHeader from '$lib/components/CodeSnippetHeader.svelte'
</script>

<article class="mx-4">
  <h1 class="text-center text-3xl">Loading Data</h1>
  <main>
    <p>Before a +page.svelte component (and its containing +layout.svelte components) can be rendered, we often need to get some data. This is done by defining load functions.</p>

    <h2 class="text-xl mt-4">Page data</h2>
    <p>A +page.svelte file can have a sibling +page.js that exports a load function, the return value of which is available to the page via the data prop:</p>

    <CodeSnippetHeader text="src/routes/blog/[slug]/+page.svelte" />
    <CodeSnippet code="/** @type &lcub;import('./$types').PageLoad} */
<script>import x from 'y'</script>"/>
Thanks to the generated $types module, we get full type safety.

A load function in a +page.js file runs both on the server and in the browser (unless combined with export const ssr = false, in which case it will only run in the browser). If your load function should always run on the server (because it uses private environment variables, for example, or accesses a database) then it would go in a +page.server.js instead.

A more realistic version of your blog post's load function, that only runs on the server and pulls data from a database, might look like this:

Notice that the type changed from PageLoad to PageServerLoad, because server load functions can access additional arguments. To understand when to use +page.js and when to use +page.server.js, see Universal vs server.
  </main>
</article>