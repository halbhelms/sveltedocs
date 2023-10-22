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

<PageTitle title="Named Form Actions" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
In the previous Explainer, <SeeMoreLink linkedText="Form Actions" /> , we used <code>default</code> form actions. That's the best way to handle pages with a single form. But what if you have more than one form on a page? They probably don't all want to have the <code>default</code> form action applied to them. For those cases, we have <em>named form actions</em>.
</p>

<p class="my-2">
Here's a situation where we have two forms on a single <code>+page.svelte</code> file:
</p>

<figure>
  <img src="../two-forms-form-actions.png" width="1000" alt="Two forms on a page">
</figure>

<p class="my-2">
Since we can't use a single <code>default</code> form action, we need to use named forms. The form tag for the Login form would look like this:
</p>

<p class="my-2">
<code>&lt;form action="?/login" method="post"></code>
</p>

<p class="my-2">
And the Register form like this:
</p>

<p class="my-2">
<code>&lt;form action="?/register" method="post"></code>
</p>

<p class="my-2">
Now, within <code>+page.server.js</code>...
</p>

<CodeSnippetHeader text="+page.server.js" />
<CodeSnippet code="export const actions = &#123;
  login: async (event) => &#123;
    // Log in user
  },
  register: async (event) => &#123;
    // register user
  }
}" />



<Prev prevLink="form-actions" prevText="Form Actions" />
</main>