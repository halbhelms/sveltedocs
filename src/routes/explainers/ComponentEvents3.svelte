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

  $: seeMoreActive: false
</script>

<PageTitle title="Component Events 3: The +page.server.js File" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
At this point, Svelte has turned over processing of the form to a form action found on <code>+page.server.js</code>
</p>

<p class="my-2">

</p>

<p class="my-2">Again, we'll start with the code, followed by a line number walk through.</p>

<CodeSnippetHeader text="+page.server.js" />
<CodeSnippet code="export const actions = &#123;
  default: async (&#123; request }) => &#123;
    const data = await request.formData();
    const selectedCustomer = data.get('selectedCustomer');
    const creatorName = data.get('creatorName');
    console.log('selectedCustomer', selectedCustomer, 'creatorName', creatorName)
  }
}" />

<p class="ml-4 text-extrabold font-bold  text-indigo-700">Line Number Walk-Thru</p>
<div class="my-2 ml-3">
  <div class="grid grid-cols-[50px_auto]">
    <WalkThru lineNumber=1 />
    <p>We're back to the familiar world of form actions</p>
  </div>
  <div class="grid grid-cols-[50px_auto]">
    <WalkThru lineNumber=6 />
    <p>While we've done nothing more than log our <code>formData</code> values, in a real app, this is where we would insert the document into a database.</p>
  </div>

  <p class="my-2">There is one more thing to consider when thinking about children communicating with their parent. If the child component uses an on directive &mdash; but provides no event handler, that event will be passed to the parent, even without explicitly dispatching an event.</p>

  <CodeSnippetHeader text="Child component" />
  <CodeSnippet code="<button on:click>I won't react but my parent might</button>" />

  <p class="my-2">And now the parent can handle that event with something like this:</p>

  <CodeSnippetHeader text="Parent component" />
  <CodeSnippet code="<ChildComponent on:click=&#123;handleChildComponentClick} />" />
  
  <p class="my-2">And with that, we're done working through the scenario in which a child needs to communicate with its parent. If you're a glutton for punishment, we'll continue on with the case where a child needs to communicate with its <i>grandparent</i>.</p>


<Prev prevText="The Parent Listens" prevLink="component-events-2" />
<Next nextText="From Child to Grandparent" nextLink="component-events-4" />

</main>