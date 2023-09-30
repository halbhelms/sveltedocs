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

  $: seeMoreActive: false
</script>

<PageTitle title="DOM Events ¦ Directives ¦ Directive Modifiers" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
If you have done web development without Svelte, you're probably used to capturing DOM events with code something like this:
</p>

<CodeSnippet code="document.querySelector('#some-id').addEventListener('click', handleClick)" />

<p class="my-2">
While you can still do this in Svelte, the preferred solution is to use the <i>on directive</i> syntax, as in:
</p>

<CodeSnippet code="<p id='some-id' on:click=&#123;handleClick} />" />

<p class="my-2">
Why is the on directive solution preferred? Using this method allows us to provide <i>directive modifiers</i> to alter the default behavior. For example...
</p>

<CodeSnippet code="<p id='some-id' on:click|once=&#123;handleClick} />" />

<p class="my-2">Other directive modifiers include:</p>

<div class="grid grid-cols-[380px_3fr]">
  <p class="ml-4 text-right pr-4"><code>preventDefault</code></p>
  <p>calls <code>event.preventDefault()</code> before running the handler</p>
</div>
<div class="grid grid-cols-[380px_3fr]">
  <p class="ml-4 text-right pr-4"><code>stopPropogation</code></p>
  <p>calls <code>event.stopPropagation()</code>, preventing the event reaching the next element</p>
</div>
<div class="grid grid-cols-[380px_3fr]">
  <p class="ml-4 text-right pr-4"><code>stopImmediatePropagation</code></p>
  <p>calls <code>event.stopImmediatePropagation()</code>, preventing other listeners of the same event from being fired.</p>
</div>
<div class="grid grid-cols-[380px_3fr]">
  <p class="ml-4 text-right pr-4"><code>passive</code></p>
  <p>improves scrolling performance on touch/wheel events (Svelte will add it automatically where it's safe to do so)</p>
</div>
<div class="grid grid-cols-[380px_3fr]">
  <p class="ml-4 text-right pr-4"><code>capture</code></p>
  <p>fires the handler during the capture phase instead of the bubbling phase</p>
</div>
<div class="grid grid-cols-[380px_3fr]">
  <p class="ml-4 text-right pr-4"><code>self</code></p>
  <p>only trigger handler if <code>event.target</code> is the element itself</p>
</div>
<div class="grid grid-cols-[380px_3fr]">
  <p class="ml-4 text-right pr-4"><code>trusted</code></p>
  <p>only trigger handler if <code>event.isTrusted</code> is true &mdash; <span class="italic">i.e.</span> if the event is triggered by a user action</p>
</div>

<p class="my-2">Directive modifiers can be combined, as in <code>&lt;p on:click|once|trusted=&#123;handleClick}&lt;/p></code></p>

<p class="my-2">Are there any performance penalties for using on directives? None.</p>

<p class="my-2">If you prefer, you can use inline event handlers:</p>

<CodeSnippet code="<p id='some-id' on:click|once=&#123;(event) => &#123;
  // function body
}}>Click on me</p>" />
</main>