<script>
  import Details from '$lib/components/page-elements/LongWindedExplanation.svelte'
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

<PageTitle title="Reactive Statements 3 ( aka Double Trouble &mdash; <em>Solved!</em> )" />
<main class="md:mx-4 sm:mx-2">
  <p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
  In the last Explainer in this series, we saw that the variable, <code>double</code>, was not reactive. Let's explore (a) why that is and (b) what we can do to make it reactive.
</p>

<p class="my-2">
As a reminder, here's the code that gave us trouble.
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  let count = 5
  let double = count * 2

  function incrementCount() &#123;
    count++
  }
</script>

<button on:click=&#123;incrementCount}>Increment count</button><br />

Count: &#123;count} <br />
Double: &#123;double}" />

<p class="my-2">
Clicking the button did, indeed, increment <code>count</code>, which was reflected in the display, but <code>double</code> did not change. Why?
</p>

<p class="my-2">
Imagine <code>count</code> is like the number shown on a digital alarm clock. And let's say <count>double</count> is like a calculator where you manually typed in the number from the alarm clock and then hit the multiply button to get the result.
</p>

<p class="my-2">
When you first set up <code>double</code> as <code>count * 2</code>, it's like you looked at the current number on the alarm clock, typed it into the calculator, and got the result. So if the alarm clock says "5", the calculator (aka <code>double</code>) would show "10".
</p>

<p class="my-2">
But here's the thing: if later on the number on the alarm clock changes (maybe it's a fancy alarm clock that counts up), the calculator doesn't magically update itself. Why? Because the calculator (or <code>double</code>) doesn't keep a constant eye on the alarm clock (or <code>count</code>). It only took a snapshot of <code>count</code> at the moment you set it.
</p>

<p class="my-2">
In technical terms, this means <code>double</code> isn't reactive. Even if <code>count</code> changes, <code>double</code> won't automatically recalculate itself. To make it reactive in Svelte, we use the special <code>$:</code> syntax, like:
</p>

<p class="my-2">
<code>$: double = count * 2</code>
</p>

<p class="my-2">
Now, with this change, it's like having a super calculator that always watches the alarm clock and immediately updates its result whenever the number changes. Magic! ✨
</p>

<p class="my-2">
So in short, without <code>$:</code>, <code>double</code> just takes a one-time snapshot of <code>count</code>. With <code>$:</code>, it constantly <code>watches</code> count and updates accordingly.
</p>

<p class="my-2">
Now you might think, "Why not just use <code>$:</code> for everything? That way I don't have to remember when to use <code>let</code> and when to use <code>$:</code>?" 
</p>

<p class="my-2">
To answer that, I'm afraid we need another long-winded explanation...
</p>

<Details>
<p class="my-2">
When you write <code>let arr = [0,1,2]</code>, you're declaring a regular variable called <code>arr</code> and initializing it with an array. Everything's peachy.
</p>

<p class="my-2">
However, when you do <code>$: arr = [0,1,2]</code>, you're introducing Svelte's reactivity syntax. This syntax indicates to Svelte that whenever some reactive data changes, the statement should re-evaluate.
</p>

<p class="my-2">
Here's the catch: <code>$: arr = [0,1,2]</code> by itself doesn't depend on any reactive data. It's just a constant array. This syntax basically tells Svelte, "Hey, re-evaluate this statement whenever... umm... well, there's nothing to watch for changes, so I guess, never?" It's confusing for Svelte because there's no reactive dependency to track.
</p>

<p class="my-2">
However, if you had something like this:<br />
<code>
let someVar = 3<br />
$: arr = [0,1,2,someVar]<br />
</code>
</p>

<p class="my-2">
Now it makes sense &mdash; because <code>arr</code> will reevaluate whenever <code>someVar</code> changes.
</p>

<p class="my-2">
In short, <code>$:</code> is used to make things reactive based on dependencies. If there's no dependency to react to, then it doesn't really have a purpose and can lead to unexpected errors or behavior. Always ensure that your reactive statements are actually, well, reactive to some other variable or expression!
</p>
</Details>


<Prev prevLink="reactive-statements-2" prevText="Reactivity Plot Twist" />
</main>