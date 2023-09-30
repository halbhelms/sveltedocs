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

<PageTitle title="Two Way Data Binding" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
In the dark days of web development before frameworks, if you wanted to set the value of a JavaScript based on a user input, you had to create an event listener and place it on the input, then read its value and set it to the JavaScript variable's value. We shudder to remember those barbarous times. 
</p>

<p class="my-2">
But now, we have <i>data binding</i> &mdash; and with Svelte, <i>two-way data binding</i>. That means that we can connect our input with a JavaScript variable such that if we make a change to the variable, the value of the input will change. And (this is the two-way part), if we make a change to the value of the input, the value of the JavaScript variable will change.
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  let framework = 'React'
</script>

<input name='preferredFramework' bind:value=&#123;framework} placeholder='Your preferred framework'/>

<p>&#123;framework}</p>" />

<p class="my-2">
Hmmm, it seems that some trickster hardcoded the value of <code>framework</code> to <i>that-which-cannot-be-mentioned</i>, apparently forgetting that we have the <b>power</b> to change that value with two-way data binding.
</p>

<p class="my-2">
The secret lies in this code on line 5: <code>bind:value=&#123;framework}</code>. With that, changes to one causes changes to the other. (You can see this reflected on line 7.)
</p>

<p class="my-2">One last thing to note: normally, when you receive input from a web form, the data type of any input is <code>string</code> &mdash; even if you specify the input type as <code>number</code>, like this:</p>

<p class="my-2">
  <code><input type="number" name="dependents" placeholder="dependents" /></code>
</p>

<p class="my-2">You specified the input to be <code>number</code>, but, for whatever reason, it shows up as a <code>string</code>. (The same is true where the input type is <code>range</code>, btw.) Normally, you would have to coerce the value into a number. Those thoughtful programmers in Svelteland (don't laugh: it really exists) take care of this for you. Inputs marked as either <code>number</code> or <code>range</code> come in as numbers.</p>

</main>