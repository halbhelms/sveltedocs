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

<PageTitle title="use:enhance" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
If you haven't already, check out the Explainer on <SeeMoreLink linkedText="Form Intro" />, where we speak about the relationship between forms and <SeeMoreLink linkedText="Form Actions" />.
</p>

<p class="my-2">
We sneakily neglected to mention that, as presented, a full page reload would occur. This is why this pattern of form &#8594; form action works even with JavaScript disabled. There's nothing wrong with a full page reload, but when all the kids are talking about their "SPAs", we're going to feel like geezers. Can't have that.
</p>

<p class="my-2">Sometimes, salvation comes in small packages. In this case, it comes in the form of a little piece of code: <code>use:enhance</code>. That code, when placed inside a form tag, will cause Svelte to use JavaScript if available &mdash; avoiding a full page reload and thereby saving us from the scorn of our fellow developers. 
</p>

<p class="my-2">When they try to mock us for supporting full page reloads, calling it "mid", we can "clap back" saying that their ignorance of "progressive enhancement" is "sus". We're really the ones who are "gas". Don't mess with us, Gen-Xers...</p>


<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<form method='POST' use:enhance>
  <!-- some inputs -->
  <button>Submit</button>
</form>"/>

<p class="my-2">But as the late-night pitchmen for dubious products like to say: <i>But wait &mdash; there's more!</i></p>

<p class="my-2">
<code>use:enhance</code> has uses beyond progressive enhancement. Look at this code from the Svelte documentation:
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="use:enhance=&#123;(&#123; formElement, formData, action, cancel, submitter }) => &#123;
		// `formElement` is this `<form>` element
		// `formData` is its `formData` object that's about to be submitted
		// `action` is the URL to which the form is posted
		// calling `cancel()` will prevent the submission
		// `submitter` is the `HTMLElement` that caused the form to be submitted

		return async (&#123; result, update }) => &#123;
			// `result` 
			// `update` is a function which triggers the default logic that would be triggered if this callback wasn't set
		};
	}}" />

<p class="my-2">
Let's see what we can do when we go beyond the simple <code>use:enhance</code> syntax.
</p>

<p class="my-2">On line 1, we begin by destructuring four variables: <code>formElement</code>, <code>formData</code>, <code>action</code>, and <code>submitter</code>. We'll concentrate on two of those: <code>formData</code> and <code>submitter</code>.
</p>

<PageSubTitle subtitle="formData" />

<p class="my-2">
In the explainer on <SeeMoreLink linkedText="Form Actions" />, we saw how we could easily retrieve the values input into a form using <code>formData</code>.
</p>

<CodeSnippetHeader text="+page.server.js" />
<CodeSnippet code="const data = await request.formData()" />

<p class="my-2">The <code>formData</code> referred to in this snippet is the same as <code>formData</code> referred to in <code>use:enhance</code>. This means that you can add or change variables in this object if you wish to. Can we think of a use case in which this might be valuable?
</p>

<p class="my-2">
What about this? We might create a "marketing URL" that links to a normal route. But we would like to know if the person came to our page "normally" or through our marketing URL.
</p>

<p class="my-2">Let's say this page has a form that asks for basic information: name, dateOfBirth, city, and state. Once completed, our <code>formData</code> might look like this:
</p>

<CodeSnippet code="&#123;
  name: 'Alyssa Cordero',
  dateOfBirth: '12Sep1998',
  city: 'Las Vegas',
  state: 'NV'
}" />

<p class="my-2">Her friend came to the same page from a Web ad for our <i>March Madness</i> campaign. Since we know this (due to the marketing URL she clicked on), we could put this into our formData to use later. So, in our <code>use:enhance</code> (which fires immediately before the form is submitted), we write this code:
</p>

<CodeSnippet code="use:enhance=&#123;(&#123; formElement, formData, action, cancel, submitter }) => &#123;
  formData.set('referrer', 'March Madness campaign')
  // etc.
  return async (&#123; update }) => &#123;
		await update();
	};
}}" />

<p class="my-2">
Now, in our <code>+page.server.js</code> file, we can retrieve all the inputs the user entered <i>plus</i> our <code>referrer</code>:
</p>

<CodeSnippetHeader text="+page.server.js" />
<CodeSnippet code="const data = await request.formData()
const name =  data.get('name')
const dateOfBirth = data.get('dateOfBirth')
const city =  data.get('city')
const state = data.get('state')
const referrer = data.get('referrer') || 'normal'" />

<PageSubTitle subtitle="submitter" />

<p class="my-2">
<code>submitter</code> might seem an odd one. After all, isn't the submitter the submit button? Not always. Take a look at this code:
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  export let data
  const composers = &#123; data }
</script>

&#123;#each composers as composer (composer.id)}
<form method='post'>
  <input name='composerId' value=&#123;composer.id}/>
  <ul>
    <li><button>Delete</button> &#123;composer.name} :: &#123;composer.genre}</li>
  </ul>
  </form>
&#123;/each}" />

<p class="my-2">
The idea is that if you click the Delete button, the form will be submitted to <code>+page.server.js</code> where Svelte, given that the form lacks an <code>action</code> attribute, will use the <code>default</code> form action to read the value of <code>composerId</code> (which, we presume, is hidden in the form) and will know which composer to remove.
</p>

<p class="my-2">
And that works. But, whew &mdash; it's ugly. We could have dozens of forms on that one page. Let's see how we can improve the code using both <code>submitter</code> and <code>formData</code>. 
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  import &#123; enhance } from '$app/forms'
  export let data
  const composers = &#123; data }
</script>

<form method='POST' class='border mx-auto w-[900px]' use:enhance=&#123;(&#123; formData, submitter }) => &#123;
  formData.set('composerId', submitter.name)
  return async (&#123; update }) => &#123;
	await update();
  };
  }}>
  
  <ul>
  &#123;#each composers as composer (composer.id)}
    <li><button name=&#123;composer.id}>Delete</button> &#123;composer.name} :: &#123;composer.genre}</li>
  &#123;/each}
  </ul>
</form>"/>

<p class="my-2">
What's going on? Gone are the <code>form</code> tags that wrapped the <code>button</code>. In its place, the <code>button</code> tag has been given a <code>name</code> property, whose value is the <code>composer.id</code>. Why did we do that?
</p>

<p class="my-2">
Look at line 8. Remember that this code is going to execute immediately <i>before</i> the form is submitted. And what causes the form to be submitted? A click on one of the buttons. When a button is clicked, we add a property, <code>composerId</code>, to <code>formData</code> giving it a value of the <code>submitter.name</code>. In our case the <code>submitter.name</code> is the <code>composer.id</code> attached to the clicked button. Thanks to <code>use:enhance</code>, we are able to remove those potential dozens of <code>form</code> elements.
</p>

<p class="my-2">
There's more we could do with <code>use:enhance</code>. For example, we could do some client-side form validation and, if validation fails, call the <code>cancel</code> function to prevent form submission. And there's much more we might do.
</p>

<p class="my-2">
One final note: <code>use:enhance</code> is not a unique, somewhat-strange-looking syntax. <code>enhance</code> is a Svelte <i>action</i>. Actions (these are not <i>form</i> actions) are functions that are called when an HTML element is created. In addition to the built-in ones like <code>enhance</code>, you can create your own. Hopefully, this Explainer has piqued your interest in them. <SeeMoreLink linkedText="Svelte actions" />
</p>

</main>