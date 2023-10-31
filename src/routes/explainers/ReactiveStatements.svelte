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
But let's not start off by borrowing trouble: for now, let's stay in magic land. Why, we've even got some magic code!

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  let count = 0
  function handleClick() &#123; count++ }
</script>

<button on:click=&#123;handleClick}>Increment count</button><br />

Count: &#123;count}" />


<p class="my-2">
Let's take this nice and slow so that we fully understand how Svelte reactivity works.
</p>

<WalkThruHeader />
<WalkThru lineNumber="2">
A variable, <code>count</code>, is set to <code>0</code>. Because of the <code>let</code> keyword, it is reactive &mdash; that is, anything that relies on <code>count</code> or displays <code>count</code> will change if <code>count</code> changes. That's all you have to do to make an assignment reactive.
</WalkThru>

<WalkThru lineNumber="6">
Click a button, call the function, <code>handleClick</code> that increments the reactive variable, <code>count</code>. But is it reactive <em>really</em>? Sure, of course it is.
</WalkThru>

<WalkThru lineNumber="8">
Click the button and you'll see the count change before your very eyes. "Ah!," you'll say. "That's probably working only because 'count' is a number!" No, the magic trick works whether it's a number, a string, a boolean, an object, an array &mdash; you get the point.
</WalkThru>

<p class="my-2">
I can tell by the look in your eyes, you don't believe me. Fine, I'll prove it to you.
</p>

<CodeSnippetHeader text="+svelte.page" />
<CodeSnippet code="<script>
  let obj = &#123;
    name: undefined,
    address: &#123;
      city: undefined,
      state: undefined
    }
  }

  function setCity(city) &#123; obj.address.city = city }
  function setState(state) &#123; obj.address.state = state }
</script>

<button on:click=&#123;() => setCity('Las Vegas')}>Set city to Las Vegas</button><br />
<button on:click=&#123;() => setState('Nevada')}>Set state to Nevada</button><br /><br />

Obj.address.city: &#123;obj.address.city}<br />
Obj.address.state: &#123;obj.address.state}<br />" />

<WalkThruHeader />
<WalkThru lineNumber="2">
Not a simple number this time, but a slightly complex object.
</WalkThru>

<WalkThru lineNumber="10">
Changes the value of <code>city</code> based on what's passed to this function
</WalkThru>

<WalkThru lineNumber="11">
Changes the value of <code>state</code> based on what's passed to this function
</WalkThru>

<WalkThru lineNumber="14" end="15">
Click either button and the value of <code>obj.address.city</code> or <code>obj.address.state</code> will change.
</WalkThru>

<WalkThru lineNumber="17" end="18">
Since <code>obj</code> is reactive, the display that relies on the value of <code>obj</code> will change to match <code>obj</code>'s new value.'
</WalkThru>

<p class="my-2">
Time for a plot twist...Click for next.
</p>

<Next nextLink="reactive-statements-2" nextText="Reactivity Plot Twist" />

</main>