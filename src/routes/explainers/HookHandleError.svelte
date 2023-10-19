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

<PageTitle title="The <code class='text-2xl'>handleError</code> Hook" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
The handleError function in SvelteKit's hooks provides a way to customize the behavior when an error occurs during the request-response lifecycle. This can be particularly useful for logging errors, sending alerts, or customizing the error response shown to the user. The <code>handleError</code> function can be placed either in <code>hooks.server.js</code> or its client-side version, <code>hooks.js</code>.
</p>

<p class="my-2">
Here's a basic example:
</p>

<CodeSnippetHeader text="src/hooks.js" />
<CodeSnippet code="export async function handleError(&#123; error, request }) &#123;
  // Maybe log the error to a third-party logging service or to the console
  console.error('An error occurred:', error.message)

  // Perhaps send an alert or notification about the error to the dev team
  // sendAlertToTeam(error, request)

  // Customize the response the user receives
  return &#123;
    status: error.status || 500,
    body: 'Oops! Something went wrong on our end. Our team has been notified!'
  }
}" />

</main>