<script>
	import { invalidateAll } from '$app/navigation';
  import PageTitle from '$lib/components/page-elements/PageTitle.svelte'
  import Next from '$lib/components/page-elements/Next.svelte'
  import Prev from '$lib/components/page-elements/Prev.svelte'
  import CodeSnippet from '$lib/components/CodeSnippet.svelte'
  import CodeSnippetHeader from '$lib/components/CodeSnippetHeader.svelte'
  import SeeMoreLink from './SeeMoreLink.svelte' 
  import RelatedLinks from '$lib/components/page-elements/RelatedLinks.svelte'
  $: seeMoreActive: false
</script>

<PageTitle title="Component Structure" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">First things first: a component's filename must have a <code class="text-xs">.svelte</code> extension. That's all that is required to be a component. Components are typically placed in a <code>src/lib/components</code> folder <SeeMoreLink linkedText="Component File Locations" />. Of course an empty file with the right extension is useless. So how do we add content?</p>
  
  <p class="mb-2">Let's start with something very simple: a component that outputs "Hello, world". It can be as simple as this:</p>

  <CodeSnippetHeader text="SimpleComponent.svelte" />
  <CodeSnippet code="<p>Hello, world</p>" />

  <p class="my-2">Only slightly more useful than an empty file... </p> 
  
  <p class="my-2">Let's add some flair to the page with a <code>&lt;style>&lt;/style></code> section. (While many consider our CSS/design skills to be legendary, we sadly do not offer consulting for this. If, on the other hand, you would like help with actual <i>Svelte/SvelteKit</i> <SeeMoreLink linkedText="Consulting") /></p>

  <CodeSnippetHeader text="SimpleComponent.svelte" />
  <CodeSnippet code="<p>Hello, world</p>

<style>
  p &#123;
    color: green;
  }
&lt;/style>" />

<p class="my-2">
  The <code>&lt;style>&lt;/style></code> section is usually placed at the bottom of the file and can contain any valid CSS code.
</p>

<p class="my-2">Of course, the real power of components is the ability to customize the content and behavior of the page. What if, instead of a simple "Hello, world", we wanted to customize the greeting for visitors from different planets? For that, we need to declare that whoever is using the component must supply a property (abbreviated as <i>prop</i>) (<SeeMoreLink linkedText="Component Properties" />)and we then can interpret that prop in our code. And that brings us to the final (and by far the most interesting) section of a component: the <code>&lt;script></code> section. <SeeMoreLink linkedText="Script Section" /></p>

<p class="my-2">Within the <code>&lt;script>&lt;/script></code> tags (typically placed at the top of the file) here is a declaration that we expect a prop called <code>world</code> to be passed to us.</p>

<CodeSnippetHeader text="SimpleComponent.svelte" />
<CodeSnippet code="<script>
  export let world
</script>

<p>Hello, &#123;world}</p>

<style>
  p &#123;
    color: green;
  }
&lt;/style>" />

<p class="my-2"><code>Hello, &#123;world}</code>? Ok, but <code>export let world</code> &mdash; what madness is this? The best kind of madness: <i>Svelte madness</i>. Yes, it looks completely weird, but that's how you do it. Now, let's find out how we <i>use</i> our <code>SimpleComponent</code> component and make some sense of the madness...</p>

<RelatedLinks />

  <Prev prevLink="component-intro" prevText="Component Intro" />
  <Next nextLink="using-a-component" nextText="Using a Component" />
</main>
