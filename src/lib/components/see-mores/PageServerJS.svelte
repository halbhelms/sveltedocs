<!-- I provide a title for a SeeMore -->
<script>
  import SeeMoreTitle from '$lib/components/see-mores/SeeMoreTitle.svelte'
  import PageSubTitle from '$lib/components/page-elements/PageSubTitle.svelte'
</script>

<SeeMoreTitle title="See More: <code>+page.server.js</code>" on:change_see_more />

<main class="ml-8">
<PageSubTitle subTitle="Universal vs server" />
<p>As we've seen, there are two types of load function:</p>

<p>
  +page.js and +layout.js files export universal load functions that run both on the server and in the browser
  +page.server.js and +layout.server.js files export server load functions that only run server-side
  Conceptually, they're the same thing, but there are some important differences to be aware of.
</p>

<PageSubTitle subTitle="When does which load function run?" />
<p>By default, universal load functions run on the server during SSR when the user first visits your page. They will then run again during hydration, reusing any responses from fetch requests. All subsequent invocations of universal load functions happen in the browser. You can customize the behavior through page options. If you disable server side rendering, you'll get an SPA and universal load functions always run on the client.</p>

<p>A load function is invoked at runtime, unless you prerender the page — in that case, it's invoked at build time.</p>

<PageSubTitle subTitle="Input" />
<p>Both universal and server load functions have access to properties describing the request (params, route and url) and various functions (fetch, setHeaders, parent and depends). These are described in the following sections.</p>

<PageSubTitle subTitle="<code>ServerLoadEvent</code>" />
  <p>Server load functions are called with a <code>ServerLoadEvent</code> that inherits clientAddress, cookies, locals, platform and request from </p>
  
<PageSubTitle subTitle="<code>RequestEvent</code>" />
  
<p>Universal load functions are called with a </p>
  
<PageSubTitle subTitle="<code>LoadEvent</code>" />
  
  <p>, which has a data property. If you have load functions in both +page.js and +page.server.js (or +layout.js and +layout.server.js), the return value of the server load function is the data property of the universal load function's argument.</p>
  
<PageSubTitle subTitle="Output" />
<p>A universal load function can return an object containing any values, including things like custom classes and component constructors.</p>

<p>A server load function must return data that can be serialized with devalue — anything that can be represented as JSON plus things like BigInt, Date, Map, Set and RegExp, or repeated/cyclical references — so that it can be transported over the network. Your data can include promises, in which case it will be streamed to browsers.</p>

<PageSubTitle subTitle="When to use which" />

<p>Server load functions are convenient when you need to access data directly from a database or filesystem, or need to use private environment variables.</p>

<p>Universal load functions are useful when you need to fetch data from an external API and don't need private credentials, since SvelteKit can get the data directly from the API rather than going via your server. They are also useful when you need to return something that can't be serialized, such as a Svelte component constructor.</p>

<p>In rare cases, you might need to use both together — for example, you might need to return an instance of a custom class that was initialised with data from your server.</p>

</main>