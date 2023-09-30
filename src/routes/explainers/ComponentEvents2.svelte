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

<PageTitle title="Component Events 2: The Listening Parent" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
It turns out that creating and dispatching an event from a component is surprisingly easy (like so much in Svelte). The child has spoken.
</p>

<p class="my-2">
But is the parent listening? We're about to make sure they do.
</p>

<p class="my-2">Again, we'll start with the code, followed by a line number walk through. (We'll skip the <code>RichTextEditor</code> as it follows exactly the same pattern as the <code>CustomerChooser</code>)</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  import CustomerChooser from './CustomerChooser.svelte'
  import &#123; enhance } from '$app/forms'
  
  let chosenSelection
  function selectionChosen(event) &#123;
    chosenSelection = event.detail.restrictTo
  }
</script>

<form method='POST' use:enhance=&#123;(&#123; formData }) => &#123;
  formData.set('selectedCustomer', chosenSelection)
  return async (&#123; update }) => &#123;
	await update();
  };
}}>

  <label>
    Creator name:
    <input name='creatorName' />
  </label>
  <CustomerChooser on:selectionChosen=&#123;selectionChosen}/>
  <button>Save</button>
</form>" />

<p class="ml-4 text-extrabold font-bold  text-indigo-700">Line Number Walk-Thru</p>
<div class="my-2 ml-3">
  <div class="grid grid-cols-[50px_auto]">
    <WalkThru lineNumber=2 />
    <p>Import the component, <code>CustomerChooser.svelte</code></p>
  </div>
  <div class="grid grid-cols-[50px_auto]">
    <WalkThru lineNumber=3 />
    <p>Import <code>enhance</code> &mdash; this will be used when we add <code>use:enhance</code> to our form</p>
  </div>
  <div class="grid grid-cols-[50px_auto]">
    <WalkThru lineNumber=5 />
    <p>Set up a reactive variable, <code>chosenSelection</code>. We're about to see how this interacts with the custom event dispatched by <code>CustomerChooser</code>.</p>
  </div>
  <div class="grid grid-cols-[50px_auto]">
    <WalkThru lineNumber=22 />
    <p>Huh? Actually, it's not that bad. <code>CustomerChooser</code> dispatched a custom event called <code>selectionChosen</code>. On line 22, we are <i>listening</i> for an event with the name of <code>selectionChosen</code>. When it hears it, it calls the event listener function, <code>selectionChosen</code>. (The event listener function name does not need to match the name of the event being listened for.)</p>
  </div>
  <div class="grid grid-cols-[50px_auto]">
    <WalkThru lineNumber=6 />
    <p>As just described, this event listener function is called when the custom event, <code>selectionChosen</code>, is dispatched. All event listeners are automatically passed the event (in this case the <i>custom</i> event).</p>
  </div>
  <div class="grid grid-cols-[50px_auto]">
    <WalkThru lineNumber=7 />
    <p>The reactive variable, <code>chosenSelection</code>, previously without a value, now receives a value &mdash; the value of <code>restrictTo</code> that was the payload accompanying the <code>selectionChosen</code> custom event.</p>
  </div>
  <div class="grid grid-cols-[50px_auto]">
    <WalkThru lineNumber=20/>
    <p>Just a standard form input field, in which we get the name of the person creating the document</p>
  </div>
  <div class="grid grid-cols-[50px_auto]">
    <WalkThru lineNumber=11 />
    <p>When the form is submitted, it first runs the arrow function associated with <code>use:enhance</code>. We've destructured <code>formData</code> from the argument automatically passed into the function. We then add to <code>formData</code> the value of <code>chosenSelection</code>. (That was the reactive variable we set in the event handler function on line 6.)</p>
  </div>
  <div class="grid grid-cols-[50px_auto]">
    <WalkThru lineNumber=13 />
    <p>Finally, this bit of code tells Svelte to continue processing the form, connecting it to a form action found on <code>+page.server.js</code></p>
  </div>


<Prev prevText="Component Events Intro" prevLink="component-events" />
<Next nextText="Does This Really Work?" nextLink="component-events-3" />

</main>