<script>
  import PageTitle from '$lib/components/page-elements/PageTitle.svelte'
  import Next from '$lib/components/page-elements/Next.svelte'
  import Prev from '$lib/components/page-elements/Prev.svelte'
  import CodeSnippet from '$lib/components/CodeSnippet.svelte'
  import CodeSnippetHeader from '$lib/components/CodeSnippetHeader.svelte'
  import SeeMoreLink from './SeeMoreLink.svelte' 
  import RelatedLinks from '$lib/components/page-elements/RelatedLinks.svelte'

  $: seeMoreActive: false
</script>

<PageTitle title="Component Props" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
Component <i>props</i> (short for <i>properties</i>) are values that are passed into a component. There are two sources from which props may be passed:
</p>

<ol class="list-decimal list-inside">
  <li>from the <i>caller</i> of the component</li>
  <li>from a related <code>.server</code> file</li>
</ol>

<p class="my-2">We'll explore both of these.</p>

<p class="my-2">When we say <i>caller</i>, we're referring to either a <code>+page.svelte</code> file or another component, either of which may import and use our component. Here is a very simple component that declares that it needs a single prop to do its job. It then uses that prop in creating its output: </p>

<CodeSnippetHeader text="GreetingComponent.svelte" />
<CodeSnippet code="<script>
  export let name
</script>

Hello, &#123;name}" />

<p class="my-2">Of course, our component doesn't do anything yet. For that, it must be imported and called. Here's a <code>+page.svelte</code> file that does just that:</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  import GreetingComponent from '$lib/components/GreetingComponent.svelte'
</script>

<GreetingComponent name='Mickey' />" />

<p class="my-2">
  This assumes that <code>GreetingComponent</code> is located in the <code>src/lib/components</code> directory. (<code>$lib</code> is a built-in shortcut provided by Svelte to the <code>src/lib</code> folder.)
</p>

<p class="my-2">
The other source from which a prop may be passed is a <code>.server</code> file, such as:
</p>

<ul class="list-disc list-inside">
  <li><code>+page.server.js</code></li>
  <li><code>+page.js</code></li>
  <li><code>+layout.server.js</code></li>
  <li><code>+layout.js</code></li>
</ul>

<p class="my-2">
  (Also included in this list would be any of the TypeScript variants for these files.)
</p>

<p class="my-2">
In our exploration of forms, we saw how a form action could return a prop to the <code>+page.svelte</code> holding the form. Now, let's see how a prop might be passed from <code>+page.server.js</code> in its <code>load</code> function. In fact, this one comes from this site, where it pulls the name of the component to display from a database, based on the URL slug (so that a URL like <code>explainers/component-props</code> will use the component, <code>ComponentProps.svelte</code>.)
</p>

<CodeSnippetHeader text="+page.server.js" />
<CodeSnippet code="import &#123; models } from '$lib/server/db/index.js'
const &#123; Link } = models

export async function load(&#123; params }) &#123;
  const explainer = await Link.getLinkBySlug(params.slug)
  return &#123;explainer}
}" />

<p class="my-2">
As we saw when looking at forms ( <SeeMoreLink linkedText="Form Actions" /> ), when a prop is sent by a <code>*.server.js</code> file, the actual prop we want to send to the component ( <code>explainer</code> in this case) is wrapped in an object. Unlike the case with forms, where the declared prop must be <code>form</code>, here the declared prop must be <code>data</code>.
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="  export let data;
  const &#123; explainer } = data" />

<p class="my-2">
We have only one last item to cover: what if a required prop is <i>not</i> passed in? We can use this syntax to declare a <i>default</i> value for that prop. Going back to our <code>GreetingComponent</code>, it would look like this:
</p>

<CodeSnippetHeader text="GreetComponent.svelte" />
<CodeSnippet code="<script>
  export let name = 'friend'
</script>" />

</main>