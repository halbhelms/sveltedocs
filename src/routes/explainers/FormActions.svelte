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

<PageTitle title="Form Actions" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
Form actions are the means by which Svelte processes forms. Are there other possible ways? Sure, but we think once you understand form actions, they'll be your option of choice. (And, if it's important to you, they don't require the client to have JavaScript enabled on their device.)
</p>

<p class="my-2">
We said that form actions are declared inside the <code>+page.server.js</code> file. Let's see what that might look like for our little form.
</p>

<CodeSnippetHeader text="+page.server.js" />
<CodeSnippet code="export const actions = &#123;
  default: async (&#123; request }) => &#123;
    const data = await request.formData()
    const yourName = data.get('your-name')
  }
}" />

<p class="my-2">
Since our form has no <code>action</code> property, Svelte will use the <code>default</code> action. In fact, if you have only one form on your page, you can use this pattern: no <code>action</code> property on the form and a <code>default</code> action in our form actions.
</p>

<p class="my-2">
But what does our <code>default</code> form action <i>do</i>? It retrieves the value of the form's input field (named <code>your-name</code>) and then...does nothing. In a real app, you would obviously do something with the value &mdash; possibly inserting into a database. <SeeMoreLink linkedText="Database Intro" />
</p>

<p class="my-2">
Still, we can do <i>something</i>. Let's send a message back to the form, indicating that we received the value of <code>yourName</code>. To do that, we need to set up <code>+page.svelte</code> to receive that message.
</p>
<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  export let form
</script>" />

<p class="my-2">
We declare a prop called <code>form</code> <SeeMoreLink linkedText="Component Props" /> It must be called <code>form</code> for this to work, by the way.
</p>

<p class="my-2">
Now, in our default form action, we can return a message:
</p>

<CodeSnippetHeader text="+page.server.js" />
<CodeSnippet code="export const actions = &#123;
  default: async (&#123; request }) => &#123;
    const data = await request.formData();
    const yourName = data.get('your-name');
    return &#123;
      message: `Thanks for adding your name, &#123;yourName}`
    }
  }
}" />

<p class="my-2">
But wait! In <code>+page.svelte</code>, we declared a prop called <code>form</code>. But now, in our form action, we're returning an object with a property called <code>message</code>? Yes, the <i>object</i> sent by the form action corresponds with the <code>form</code> prop expected. To get to the message, you must <i>drill down</i> into the object. Here's the final version of <code>+page.svelte</code>:
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  export let form
</script>

<h2>&#123;form?.message || ''}</h2>

form method='POST'>
  <input name='your-name' placeholder='Your name'/>
  <button>Add your name</button>
</form>" />

<p class="my-2">
In other words, if <code>form.message</code> exists, show it. Otherwise display nothing. (Before the form is submitted and processed by the form action, there will be no <code>form</code> prop. )
</p>

<Prev prevText="Form Intro" prevLink="form-intro" />
<!-- <Next nextText="Form Actions" nextLink="form-actions" /> -->
</main>