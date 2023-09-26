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

<PageTitle title="If Statement" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
You may already have seen that Svelte has a few places in which it does things...unconventionally (<code>export let</code> for declaring props for example). An if statement also differs from what you're probably used to.
</p>

<p class="my-2">
In JavaScript you'd write an if statement like this:
</p>
<CodeSnippet code="if (userRole === 'ADMIN') &#123;
  // do something
}" />

<p class="my-2">Here's a scenario: If the <code>userRole</code> prop is 'ADMIN', we want to provide <code>userNotes</code> (or, if they don't exist, show nothing rather than <code>undefined</code>). And here's the code for accomplishing this with Svelte.</p>

<CodeSnippet code="<script>
  export let userRole
  export let userNotes
</script>

&#123;#if userRole === 'ADMIN'}
  &#123;userNotes ?? ''}
&#123;/if}" />

<p class="my-2">
Here's Svelte's version of an <code>else</code> block:
<CodeSnippet code="&#123;#if userRole === 'ADMIN'}
  &#123;userNotes ?? ''}
&#123;:else}
  If you need more information about your account, contact your Account Manager.
&#123;/if}" /></p>

<p class="my-2">
Note that you must still close the if statement.
</p>

<p class="my-2">
And the <code>else if</code> condition:
</p>

<CodeSnippet code="&#123;#if userRole === 'ADMIN'}
  &#123;userNotes ?? ''}
&#123;:else if userRole === 'SUPER_ADMIN'}
  &#123;userNotes ?? ''}
  &#123;adminNotes ?? ''}
&#123;:else}
  If you need more information about your account, contact your Account Manager.
&#123;/if}" />

<p class="my-2">
You can't use the JavaScript ternary operator outside of the <code>script</code> section of Svelte &mdash; with the exception of the <code>bind:this=&#123;}</code> as in: <code>&lt;img src="/image.png" bind:this=&#123;...isVisible ? null : &#123; hidden: true }}></code>
</p>

<p class="my-2">
In the old days (they weren't so good...), we would use the logical <b>or</b> operator to indicate that if some value was <i>falsy</i>, another value should be used &mdash; as in <code>&#123;userNotes || ''}</code> (and we confess we still use that at times...). The better way is to use the <i>nullish coallescing</i> operator: <code>&#123;userNotes ?? ''}</code>
</p>
</main>

<style>
  div {
    font-family: 'Neucha'
  }
</style>