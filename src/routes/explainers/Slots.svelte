<script>
	import UrlData from './UrlData.svelte';
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

<MyComponent name='Rich Harris'/>

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

<MyComponent name='Rich Harris'/>

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
<img src="../slot-fallback.png" width="1200rem" alt="" class="shadow-xl">
</main>