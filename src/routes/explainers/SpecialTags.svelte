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

<PageTitle title="Special Tags" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
In this Explainer, we look at three special tags: <code class="lowercase">@html</code>, <code>@debug</code> and <code>@const</code>.
</p>

<PageSubTitle subtitle="@html tag" />

<p class="my-2">
For reference, look at this code:
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  const data = `
  <div>
    <ul>
      <li>JavaScript</li>
      <li>Go</li>
      <li>Clojure</li>
    </ul>
  </div>
  `
</script>

<main>
  &#123;data}

  &#123;@html data}
</main>
" />

<p class="my-2">
Here's what this page, rendered, looks like:
</p>

<figure>
  <img class="shadow-lg" src="../_@html.png" alt="Showing the need for @html" width="650" />
  <figcaption class="italic text-xs ml-8">With and without the special @html tag</figcaption>
</figure>

<p class="my-2">
The moral of this story is that if you want your text rendered as HTML, use the special <code>@html</code> tag.
</p>

<PageSubTitle subtitle="@debug tag" />
<p class="my-2">
There's nothing for us to add to the official Svelte docs on <a href="https://svelte.dev/docs/special-tags#debug">  <code>@debug</code></a> but this: trying to enclose <code>@debug</code> in another HTML element (such as <code>div</code> or <code>p</code> will throw a Svelte internal error).
</p>

<PageSubTitle subtitle="@const tag" />
<p class="my-2">
The <code>@const</code> tag creates a local variable. Here is an example of one use for this:
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  const customers = [
    &#123;id: 1, name: 'ABC Investments', status: 'ACTIVE'},
    &#123;id: 2, name: 'Downey & Sons', status: 'INACTIVE'},
    &#123;id: 3, name: 'Maria & Evangeline', status: 'ACTIVE'},
    &#123;id: 4, name: 'Tomas & Associates', status: 'ACTIVE'},
    &#123;id: 5, name: 'Bardot, Inc.', status: 'ACTIVE'},
  ]
  
</script>

<main>
  &#123;#each customers as customer (customer.id)}
    &#123;@const klass = customer.status == 'ACTIVE' ? '' : 'greyout'}
    <p class=&#123;klass}>&#123;customer.name}</p>
  &#123;/each}
</main>" />

<WalkThruHeader />
<WalkThru lineNumber="14">
The local variable, <code>klass</code>, is set to either an empty string or the text, <code>greyout</code>, depending on whether the <code>customer.status</code> is equal to <code>ACTIVE</code> or not.
</WalkThru>

<p class="my-2">
One last thing: the <code>@const</code> tag is only allowed as direct child of <code>&#123;#if}</code>, <code>&#123;:else if}</code>, <code>&#123;:else}</code>, <code>&#123;#each}</code>, <code>&#123;:then}</code>, <code>&#123;:catch}</code>, <code>&lt;Component</code> or <code>&lt;svelte:fragment</code>.
</p>
</main>