<script>
  import PageTitle from '$lib/components/page-elements/PageTitle.svelte'
  import Details from '$lib/components/page-elements/LongWindedExplanation.svelte'
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

<PageTitle title="Reactivity Plot Twist" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
Ready to dive deeper into Svelte's reactivity? Let's look at a different formulation &mdash; this time with an array.
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  let arr = [0,1,2]

  function addToArray() &#123; arr.push(arr[arr.length-1] +1) }
</script>

<button on:click=&#123;addToArray}>Increment an array</button><br />

Array: &#123;arr}" />

<WalkThruHeader />
<WalkThru lineNumber="2">
Things start off fine.
</WalkThru>

<WalkThru lineNumber="9">
This display shows [0,1,2] &mdash; just what we want to see.
</WalkThru>

<WalkThru lineNumber="4">
But when the button is clicked, the display does <em>not</em> change. Why? Svelte's magical reactivity relies on <em>assignment</em>. But this code directly mutates the <code>arr</code> array. This means the memory reference to the array stays the same. In the eyes of Svelte, <code>arr</code> still points to the same old array, even though its content has changed.

<p class="my-2">
What we need is a <em>reassignment</em>, which we can get with this: <br />
<code>
function addToArray() &#123; arr = [...arr, arr[arr.length-1] +1] }
</code>
</p>
</WalkThru>

<p class="my-2">
As the late night TV pitch person used to say, "But wait &mdash; there's more!" 
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

<WalkThruHeader />
<WalkThru lineNumber="2">
We set <code>count</code> to 5
</WalkThru>

<WalkThru lineNumber="3">
We set <code>double</code> to whatever <code>count</code> is times 2.
</WalkThru>

<WalkThru lineNumber="12" end="13">
Everything starts off fine. We see Count as 5 and Double as 10.
</WalkThru>

<WalkThru lineNumber="5" end="7">
But then trouble arises. When we change <code>count</code>, the display of Count does indeed change. But Double? Does not change. Why?
</WalkThru>
<Details>
  <p>Imagine <code>count</code> is like the number shown on a digital alarm clock. And let's say <code>double</code> is like a calculator where you manually typed in the number from the alarm clock and then hit the multiply button to get the result.</p>

  <p>When you first set up <code>double</code> as <code>count</code> * 2, it's like you looked at the current number on the alarm clock, typed it into the calculator, and got the result. So if the alarm clock says "5", the calculator (aka <code>double</code>) would show "10".</p>

  <p>But here's the thing: if later on the number on the alarm clock changes (maybe it's a fancy alarm clock that counts up), the calculator doesn't magically update itself. Why? Because the calculator (or <code>double</code>) doesn't keep a constant eye on the alarm clock (or <code>count</code>). It only took a snapshot of count at the moment you set it.</p>

  <p>In technical terms, this means <code>double</code> isn't reactive. Even if <code>count</code> changes, <code>double</code> won't automatically recalculate itself.</p>
</Details>

<p class="my-2">
In the next Explainer, we'll see how to make <code>double</code> work as we want it to, but first, I imagine someone saying, "Hey, you said in the previous Explainer that reactivity works by assignment &mdash; and that's why we can't mutate <code>arr</code>. But here you're directly manipulating <code>count</code>. Why does <em>that</em> work? Why don't we have to reassign <code>count</code>?"
</p>

<p class="my-2">
And to explain that, I'm afraid I have to go into ALWE (Another Long-Winded Explanation)...
</p>

<Details>
<p>Imagine two scenarios:</p>

<ol class="list-decimal">
  <li>You have a chalkboard with a number written on it.</li>
  <li>You have a box filled with toys.</li>
</ol>

<h2 class="font-bold text-xl">Chalkboard (Simple Values like numbers, strings, <em>etc.</em>)</h2>
<p>When you're dealing with simple values, like numbers or strings (e.g., <code>count</code>), it's like you have a number written on a chalkboard. If you decide to add one to the number (using <code>count++</code>), it's like erasing the old number and writing a new one. Everyone in the room immediately notices the change because it's right there in plain view.</p>

In Svelte, when you change these simple values directly, the framework notices this "erasing and writing" action and updates any dependent values in the template.

<h2 class="font-bold text-xl">Box of Toys (Arrays or Objects)</h2>
<p>Now, consider the array situation as having a box filled with toys (or numbers, in the case of the <code>arr</code> example we gave). If you decide to add a toy to the box, the box itself remains the same box; you've only changed its contents.</p>

<p>n programming terms, by using methods like <code>push</code>, you're modifying the content inside the array but not the array reference itself. So, Svelte, like people observing the box, doesn't notice that change right away because the box (the array reference) remains the same.</p>

<p>To get Svelte's attention, you'd have to replace the box with a new one or in programming terms, create a new array. For instance, you'd spread out the old array into a new one and add a value: <code>arr = [...arr, newValue]</code>.</p>

<h2 class="font-bold text-xl">Connecting the Dots</h2>
<p>So, if you were wondering why the <code>++</code> worked for <code>count</code> but <code>push</code> didn't for an array:</p>
<ul class="list-disc list-inside">
  <li>Directly changing simple values (like numbers) in Svelte is like erasing and writing a new number on the chalkboard. It's obvious and noticeable.</li>
  <li>Modifying the content of an array or object without changing its reference is like adding a toy to the box without changing the box itself. Svelte needs more explicit signals (like giving a new box) to recognize such changes.</li>
</ul>

<p>It's about how Svelte observes changes, and while it can see direct assignments or modifications to simple values, it requires more explicit changes for arrays or objects.</p>
</Details>

<Prev prevLink="reactive-statements" prevText="Reactive Assignments" />
<Next nextLink="reactive-statements-3" nextText="Reactive Statements" />

</main>