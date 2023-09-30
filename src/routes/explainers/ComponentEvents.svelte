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
  import PageSubTitle from '../../lib/components/page-elements/PageSubTitle.svelte';
  import WalkThru from '$lib/components/page-elements/WalkThru.svelte'

  $: seeMoreActive: false
</script>

<PageTitle title="Component Events: From Child to Parent " />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
Most of the time, data flows "downward" &mdash; from parent to child (to anthropomorphize a bit) in the sense that the user of a component (the parent) sends data (via props) to the imported component (the child).
</p>

<p class="my-2">Most of the time, that's exactly how we should handle things. Sometimes, though, it's advantageous for the child to communicate to the parent. That's where <i>component events</i> come into play.</p>

<p class="my-2">
Here's a scenario: we are building a "document creator" that will let administrators write documents for users to view. As it so happens, we already have a component that provides a rich text editor. But we also need to gather other form data: Who wrote the document? Should it be accessible to all customers? Who can edit or delete the document?
</p>

<p class="my-2">And we have another component that we want to use &mdash; one that provides a "look-ahead" select box populated with customers. All of that information will be sent to a form action and, to do that, we need to submit that form data from a <code>+page.svelte</code> file (since there is no such mechanism available for components). This is an ideal scenario for component events.</p>

<img src="../component-events.png" alt="component events" />

<p class="my-2">
We'll simplify the code in order to concentrate on the key elements of component events. The plan is to have both components dispatch a custom event for which the <code>+page.svelte</code> file will listen. Having received information from the children, the parent will submit <code>formData</code> to a form action.
</p>

<p class="my-2">
To spawn a component event, we need to import a <code>createEventDispatcher</code> function, then use that function to create an actual event dispatcher, then...but for now look at the code. Then, we'll walk through it.
</p>

<CodeSnippetHeader text="CustomerChooser.svelte" />

<CodeSnippet code="<script>
  import &#123; createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  
  let restrictTo

  function dispatchEvent() &#123;
    dispatch('selectionChosen', &#123;restrictTo})
  }
</script>

<select name='restrictTo' bind:value=&#123;restrictTo} on:change=&#123;dispatchEvent}>
  <option value='none'>Select Customer</option>
  <option value='ABC'>ABC</option>
  <option value='Beta Ent.'>Beta Ent.</option>
  <option value='Carlson'>Carlson</option>
  <option value='Davis'>Davis</option>
  <option value='Innertainment'>Innertainment</option>
</select>" />

<p class="ml-4 text-extrabold font-bold  text-indigo-700">Line Number Walk-Thru</p>
<div class="my-2 ml-3">
  <div class="grid grid-cols-[50px_auto]">
    <WalkThru lineNumber=2 />
    <p>Import <code>createEventDispatcher</code></p>
  </div>
  <div class="grid grid-cols-[50px_auto]">
    <WalkThru lineNumber=3 />
    <p>Create an actual dispatch function</p>
  </div>
  <div class="grid grid-cols-[50px_auto]">
    <WalkThru lineNumber=5 />
    <p>Set up a reactive variable, <code>restrictTo</code>, that will be bound to the value of the select box</p>
  </div>
  <div class="grid grid-cols-[50px_auto]">
    <WalkThru lineNumber=7 />
    <p>Create a function, <code>dispatchEvent</code>, that will be called when the OK button is clicked. There's nothing special about the name of this function and you can see that if you had more than one event being dispatched, you wouldn't want such a generic function name.</p>
  </div>
  <div class="grid grid-cols-[50px_auto]">
    <WalkThru lineNumber=8 />
    <p>Call the <code>dispatch</code> function, passing an object with a key of <i>restrictTo</i> with a value of the reactive variable, <code>restrictTo</code></p>
  </div>
  <div class="grid grid-cols-[50px_auto]">
    <WalkThru lineNumber=12 />
    <p>Bind the value of the selected option to the reactive variable, <code>restrictTo</code> and fire the custom event whenever a change is made to the customer selection</p>
  </div>
</div>

<Next nextLink="component-events-2" nextText="The Listening Parent" />
</main>