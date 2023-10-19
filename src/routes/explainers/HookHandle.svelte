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

<PageTitle title="The <code class='text-2xl'>handle</code> Hook" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
If you want to familiarize yourself with the idea behind hooks, check out our <SeeMoreLink linkedText="Hooks" /> Explainer. In this Explainer, we explore the most widely used hook function: <code>handle</code>.
</p>

<p class="my-2">
The <code>handle</code> function, should be placed in a <code>/src/hooks.server.js</code> file. There it will be called automatically on every server request (this includes <SeeMoreLink linkedText="Prerendering" /> ). 
</p>

<p class="my-2">
The <code>handle</code> function receives an <code>event</code> object. We can immediately destructure that into  <i>request</i> and  <code>resolve</code> function that renders the route and generates a <code>Response</code>. 
</p>

<p class="my-2">
The <code>handle</code> function <i>must</i> return a <code>Response</code> &mdash; either the one provided by the <code>resolve</code> function or one that you create yourself. Here's what the simplest implementation of <code>handle</code> might look like (although it doesn't actually do anything useful):
</p>

<CodeSnippetHeader text="src/hooks.server.js" />
<CodeSnippet code="export async function handle(&#123; request, resolve }) &#123;
  const response = await resolve(event)
  return response
}" />

<p class="my-2">
But how about something more useful? Here's a basic example where the <code>handle</code> function checks for an authentication token in the request header. If no such token is found, the user is redirected to a login page:
</p>

<CodeSnippetHeader text="src/hooks.server.js" />
<CodeSnippet code="export async function handle(&#123; request, resolve }) &#123;
  const &#123; headers } = request

  // Check if the request has an 'Authorization' header
  const auth = headers.authorization

  // If no auth token, redirect to login
  if (!auth) &#123;
    return &#123;
      status: 302, // HTTP status code for 'Found' (used for redirections)
      headers: &#123;
        location: '/login' // Redirect to the /login route
      }
    }
  }

  // If auth token exists, continue to process the request as usual
  const response = await resolve(request)
  return reponse
}" />

<p class="my-2">
The <code>handle</code> function is the main workhorse of hooks, giving you the power to interrupt the normal request-response cycle and provide some useful behavior.
</p>

</main>