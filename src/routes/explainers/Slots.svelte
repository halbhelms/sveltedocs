<script>
  import PageTitle from '$lib/components/page-elements/PageTitle.svelte'
  import Screenshot from '$lib/components/page-elements/Screenshot.svelte'
  import BrowserWindow from '$lib/components/page-elements/BrowserWindow.svelte'
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

<PageTitle title="Slots" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
One way to think about <em>slots</em> is in contrast to <em>props</em>. While props typically passes <em>data</em> to a component, slots tend to pass richer information in HTML format.
</p>

<p class="my-2">
Let's look at a parent component, <code>+page.svelte</code>, and a child component, <code>MyComponent.svelte</code> in order to see the nuances involved in slots.
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  import MyComponent from './MyComponent.svelte'
</script>

<!-- sending data via a prop -->
<MyComponent name='Rich Harris' />

<hr/>

<!-- sending HTML that will be picked up with MyComponent's slot tag -->
<MyComponent name='Rich Harris'>
<p>Rich Harris is the creator of Svelte. A few facts about the man:</p>
<ul>
  <li>He has a background in journalism, even serving a stint at <em>The Guardian</em></li>
  <li>He's been involved in creating other tools and libraries, like Rollup.js</li>
  <li>Rich has a contrarian view, citing the dangers of complexity in frameworks like React and Angular</li>
</ul>
</MyComponent>

<hr/>

<MyComponent name='Rich Harris'>
  <p>Svelte is an amazing framework.</p>
  <div slot='contributors'>
    <p>Major contributors include:</p>
    <ul>
      <li>Alan Faubert</li>
      <li>Tan Li Hau</li>
      <li>Ben McCann</li>
      <li>Simon Holthausen</li>
    </ul>
  </div>
</MyComponent>" />

<p class="my-2">
Before we do a code walk-through, let's look at the child component.
</p>

<CodeSnippetHeader text="MyComponent.svelte" />
<CodeSnippet code="<script>
  // props typically send data
  export let name
  const sadly = `No doubt ${name} either has or had an illustrious career.`
</script>

<div>
  <!-- slots display HTML from -->
  <slot>
  <!-- If nothing was passed to be used by slots, the following 'fallback', if it exists, will be shown. -->
  Sadly, we don't have any more information about {name}. &#123;sadly}
  </slot>

  <slot name='contributors' />
</div>" />

<p class="my-2">
So how does this whole <em>slot</em> thing work? Parents (<code>+page.svelte</code> in our example) place HTML they want the child (<code>MyComponent</code>) to receive <em>between</em> the opening and closing component tags &mdash; like this:
</p>

<code>
&lt;MyComponent><br />
  &lt;h2>I'm headed off to MyComponent!&lt;/h2><br />
  &lt;ul><br />
  &nbsp; &lt;li>Me too!&lt;/li><br />
  &nbsp; &lt;li>Count me in!&lt;/li><br />
  &nbsp; &lt;li>I'm right behind!&lt;/li><br />
  &lt;/ul><br />
&lt;/MyComponent>
</code>

<p class="my-2">
So, that's how the <em>parent</em> sends information to the child. How does the child handle it? In its simplest form, the child determines where they want to display that information and places this tag in that location:
</p><code>&lt;slot /></code>. But slots have more tricks up their sleeve. To see that, let's do a walk-through of the parent and child code.

<WalkThruHeader fileName="<code>+page.svelte</code>"/>
<WalkThru lineNumber="6">
Here, a demonstration of sending a value via a <em>prop</em>. No slot info  involved. The display:
</WalkThru>
<Screenshot src="../slot-fallback.png" width="1000rem" />
<p class="my-2">
Hmmm...if we didn't send any slot information to the child, why is the child displaying something? For that, let's switch to looking at the child component code.
</p>

<WalkThruHeader fileName="<code>MyComponent.svelte</code>" />
<WalkThru lineNumber="9">
Here's how the child places the <code>slot</code> information. But notice...
</WalkThru>
<WalkThru lineNumber="11">
...this line of text. That's known as a <em>fallback</em>. If there is nothing passed as a slot, this default text will appear. (Fallbacks are optional. If you leave it out, nothing will be displayed when no slot info is passed.) And if you're wondering where the 'No doubt...' line comes from...
</WalkThru>
<WalkThru lineNumber="4">
... that's just a variable, <code>sadly</code>, that we created here. It's worth noting that, inside our <code>slot</code>,  we can refer to any props sent into the component.
</WalkThru>

<p class="my-2">
Let's go back to the parent to see the next iteration of a slot.
</p>
<WalkThruHeader fileName="<code>+page.svelte</code>"/>
  <WalkThru lineNumber="11">
    Again, we're calling <code>MyComponent</code>, still sending it a prop of <code>name</code> &mdash; but this time we <em>have</em> included slot info. The display for this looks like:
  </WalkThru>
  
  <Screenshot src="../slot-regular.png" width="1000rem" />
  
  <WalkThru lineNumber="22">
    The final iteration of slots is more complex. Again, we send the prop, <code>name</code>...
  </WalkThru>

  <WalkThru lineNumber="23">
    ...where we send the line, 'Svelte is an amazing framework.' Switching back to the child component, that will appear...
  </WalkThru>

  <WalkThruHeader fileName="<code>MyComponent.svelte</code>"/>
  <WalkThru lineNumber="9">
    ...here, just as you might expect. But what are we to make of (switching back to parent code)...
  </WalkThru>

  <WalkThruHeader fileName="<code>+page.svelte</code>"/>
  <WalkThru lineNumber="24">
    ...this line where we specify <code>slot='contributors'</code>? This is called a <em>named slot</em>. Did you notice this did not appear in the simple <code>&lt;slot /></code> location? Instead it appears (switching to child code)...
  </WalkThru>

  <WalkThruHeader fileName="<code>MyComponent.svelte</code>"/>
  <WalkThru lineNumber="14">
    ...here. Why here? Because we specified that this slot is only for that info marked as belonging to <code>contributors</code>. The display for this:
  </WalkThru>

<Screenshot src="../slot-named.png" width="400rem" />

<p class="my-2">
And with that, we conclude our tour of slots. (Can't get enough of slots? You should check out <SeeMoreLink linkedText="Slot Props" /> and <SeeMoreLink linkedText="Slots$$" /> )
</p>

</main>