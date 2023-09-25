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

<PageTitle title="Form Intro" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
There's so much to love about Svelte/Sveltekit but one of our favorite things is the way that Svelte makes working with forms enjoyable. There are two aspects of dealing with forms: <i>the HTML form element</i> (and its including input tags) located in a <code>+page.svelte</code> file  and <i>form actions</i> located in the corresponding <code>+page.server.js</code> file.
</p>

<img src="../simple_form_explanation.png" width="500" alt="Simple form explanation" />

<p class="my-2">
  When a form is submitted, Svelte looks in the <code>+page.server.js</code> file for an <i>action</i> with a name corresponding with the <code>action</code> property of the form. (If you have only one form on your page, you can omit the <code>action</code> property altogether, as you'll see shortly.)
</p>

<p class="my-2">
Once Svelte determines the correct action to use, it executes the code you wrote for that action.</p>

<p class="my-2">
Let's see how that works with a very simple form.</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="form method='POST'>
  <input name='your-name' placeholder='Your name'/>
  <button>Add your name</button>
</form>" />

<p class="my-2">Add in some epic styling and you should see something like this:</p>

<img src="../simple_form_ss.png" width="400" alt="Simple form screenshot">

<p class="my-2">So, if Svelte matches the <code>action</code> property of the form with an <code>action</code> from <code>+page.server.js</code>, what happens &mdash; as in this case &mdash; when there is no <code>action</code> property on the form? <SeeMoreLink linkedText="use:enhance" /></p>

<p class="my-2">Let's find out.</p>
<Next nextText="Form Actions" nextLink="form-actions" />
</main>