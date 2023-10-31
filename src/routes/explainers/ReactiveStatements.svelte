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

<PageTitle title="Reactive Statements" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
What is 'reactivity' in Svelte? Here's a whimsical explanation. Imagine you've got a magical piece of paper. Whenever you write a number on it, there's another section of the paper that automatically updates to show the square of that number. You write "3", and another part of the paper instantly shows "9". Magic, right? That's sort of how reactivity works in Svelte, but instead of a piece of paper, it's your web app.
</p>

<p class="my-2">
Too whimsical? How about this? When you build a website, you often want parts of it to change based on user actions or other events. For example, maybe you want a counter to increase every time a button is clicked. In traditional JavaScript, you'd have to manually update the counter and then update the display. That's a bit tedious.
</p>

<p class="my-2">
Svelte makes this super easy with its reactivity. You just declare that a piece of data should be reactive. Then, anytime that data (like our counter) changes, Svelte will automagically update the relevant part of the website for you. No extra steps required! So, there you have it: Svelte reactivity is easy. 
</p>

<p class="my-2">
Until it isn't...
</p>

<p class="my-2">
But let's not start off by borrowing trouble: for now, let's stay in magic land. The following discussion revolves around some <em>reactive assignments</em> that we've placed in a <code>+page.svelte</code> file:
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  let count = 0
  let obj = &#123;
    name: undefined,
    address: &#123;
      city: undefined,
      state: undefined
    }
  }
  let arr = [0,1,2]
  let lastNum = arr[arr.length-1]
  let myCity = obj.address.city

  function handleClick() &#123; count++ }
  function addToArray() &#123; arr = [...arr, arr[arr.length-1] + 1] }
  function setCity(city) &#123; obj.address.city = city }
  function setState(state) &#123; obj.address.state = state }
  function setName(name) &#123; obj.name = name }
</script>

<button on:click=&#123;handleClick}>Increment count</button><br />
<button on:click=&#123;addToArray}>Add to array</button><br />
<button on:click=&#123;() => setName('Joe')}>Set name to Joe</button><br />
<button on:click=&#123;() => setCity('Las Vegas')}>Set city to Las Vegas</button><br />
<button on:click=&#123;() => setState('Nevada')}>Set state to Nevada</button><br />
<br />
<div>
Count: &#123;count}<br />
Array: &#123;arr}<br />
Obj.name:&#123;obj.name}<br />
Obj.address.city: &#123;obj.address.city}<br />
Obj.address.state: &#123;obj.address.state}<br />
Last num: &#123;lastNum}<br />
My city: &#123;obj.address.city}
</div>" />

<p class="my-2">
Let's take this nice and slow so that we fully understand how Svelte reactivity works.
</p>

<WalkThruHeader />
<WalkThru lineNumber="">

</WalkThru>





</main>