<script>
  import PageTitle from '$lib/components/page-elements/PageTitle.svelte'
  import Next from '$lib/components/page-elements/Next.svelte'
  import Prev from '$lib/components/page-elements/Prev.svelte'
  import CodeSnippet from '$lib/components/CodeSnippet.svelte'
  import CodeSnippetHeader from '$lib/components/CodeSnippetHeader.svelte'
  import SeeMoreLink from './SeeMoreLink.svelte' 
  import RelatedLinks from '$lib/components/page-elements/RelatedLinks.svelte'
  // import { github } from 'svelte-highlight/styles'

  let helpfulLinks = [
    {name: 'Tutorial: Simple Svelte Project'},
    {name: 'Sample App: ToDo List, Level 2'},
    {name: 'Explainer: Reactivity'}
  ]
  $: seeMoreActive: false
</script>

<PageTitle title="Using a Component" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">In order to benefit from your components, you must <i>import</i> and <i>use</i> them, typically from a <code class="text-xs">+page.svelte</code> file. Thankfully a <code class="text-xs">+page.svelte</code> file has the same three sections as a component <SeeMoreLink linkedText="Component Structure" />. </p>
  
  <p class="mb-2">In <SeeMoreLink linkedText="Component Structure" />, we created a component, <code>SimpleComponent.svelte</code>. In it,  our <code>&lt;script></code> section declared its expectation that a prop would be passed to it:</p>

  <CodeSnippetHeader text="SimpleComponent.svelte" />
  <CodeSnippet code="<script>
  export let world
</script>" />

  <p class="my-2">Here is a <code>+page.svelte</code> file that wishes to make use of our component. To do so, it must first <i>import</i> the component:</p> 

  <CodeSnippetHeader text="/greeting/+page.svelte" />
  <CodeSnippet code="<script>
  import SimpleComponent from '$lib/components/SimpleComponent.svelte'
</script />" />
  


  <p class="my-2">The <code>SimpleComponent</code> can be any name we choose. It signifies the way we will call the newly-imported component. We consider it a best practice to have the name match the file name of the component, as it does in this case. <SeeMoreLink linkedText="Dynamic Imports" /></p>

  <p class="my-2">Now, it's time to call it:</p>

   <CodeSnippetHeader text="/greeting/+page.svelte" />
  <CodeSnippet code="<script>
  import SimpleComponent from '$lib/components/SimpleComponent.svelte'
</script />

<SimpleComponent world='Mars' />" />

<p class="my-2">In our <code>SimpleComponent.svelte</code> file we indicated we expected a prop called <code>world</code> to be passed in. How? In the same way we add properties to an HTML element: <code>world='Mars'</code></p>

<p class="my-2">And the on-screen result: <img class="inline-block shadow-sm shadow-black" src="../hello_mars.png" width="150" alt="Hello Mars screenshot" /></p>

<RelatedLinks relatedComponents={helpfulLinks} />

  <Prev prevLink="component-structure" prevText="Component Structure" />
  <Next nextLink="component-2" nextText="???" />
</main>
