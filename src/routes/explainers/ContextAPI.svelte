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

<PageTitle title="Context API" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
We're going to look at a diagram of connecting components. Brace for impact.
</p>

<img src="../context-complex.png" alt="Complex connecting components" width="700">

<p class="my-2">
How to read it... 
</p>
<ul class="ml-8 list-disc list-inside">
  <li>The <code>App Component</code> calls <code>A</code> and <code>C</code></li>
  <li><code>A</code> calls <code>E</code></li>
  <li><code>B</code> calls <code>D</code></li>
  <li><code>C</code> calls <code>G</code></li>
  <li><code>D</code> calls <code>F</code></li>
  <li><code>E</code> calls no one</li>
  <li><code>F</code> calls no one</li>
  <li><code>G</code> calls <code>H</code> and <code>J</code></li>
  <li><code>H</code> calls no one</li>
  <li><code>I</code> calls no one</li>
  <li><code>J</code> calls <code>I</code></li>
</ul>

<p class="my-2">
BTW, if you ever find yourself with such a confusing chain of components, consider a career in the Arts. But, wait: it gets worse.
</p>

<p class="my-2">
The <code>App Component</code> has information about a customer that includes:
</p>

<ul class="ml-8 list-disc list-inside">
  <li>customer name</li>
  <li>city customer is located in</li>
  <li>state customer is located in</li>
  <li>country customer is located in</li>
  <li>how long have they been a customer</li>
  <li>what status the account is in</li>
  <li>who the Account Rep is</li>
  <li>what industry is the customer in</li>
</ul>

<p class="my-2">
And some, not all, components need some, not all, of this information.
</p>

<p class="my-2">
What's a poor developer to do? Well, a poor developer will have props whizzing about from component to component until even the components get confused.  But you didn't come all this way to be a poor developer, did you?
</p>

<p class="my-2">
Let me see if I can put this in context. Literally. Context. Svelte's Context API provides a mechanism where an ancestor can send information to any of their descendants without knowing which descendant needs what information. 
</p>

<p class="my-2">
And it's wonderfully, Sveltishly easy. It all starts at whatever level component has the information. If we start with the diagram above, let's say that the <code>App Component</code> has all the information. How did they get it? Probably from old, reliable <code>+page.server.js</code>. But however they got it, they've got it.
</p>

<p class="my-2">
If <code>+page.server.js</code> is sending all this information via its <code>load</code> function, then the <code>App Component</code> is probably a <code>+page.svelte</code> file. Let's see what that might look like.
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  import &#123; setContext } from 'svelte'
  import A from './A.svelte'
  import C from './C.svelte'
  export let data
  const &#123; customer } = data

  setContext('customer', customer)
</script>

<A />
<C />" />

<WalkThruHeader />
<WalkThru lineNumber="2">
We need to import <code>setContext</code> so that we can use it on line 8
</WalkThru>
<WalkThru lineNumber="5">
Getting the payload sent from <code>+page.server.js</code> <SeeMoreLink linkedText="The <code>load</code> function" />
</WalkThru>
<WalkThru lineNumber="6">
Deconstruct the <code>customer</code> object that has all the information needed by any descendant.
</WalkThru>
<WalkThru lineNumber="8">
That's it: that's the magic code that will make <code>customer</code> available to all descendants in the component chain.
</WalkThru>

<p class="my-2">
And how does <code>A.svelte</code> tap into the <code>customer</code> information?
</p>

<CodeSnippetHeader text="A.svelte" />
<CodeSnippet code="<script>
  import &#123; getContext } from 'svelte'
  const customer = getContext('customer')
</script>

Hello, &#123;customer.name}.
&#123;#if customer.status == 200}
  Feel free to use all our services
&#123;:else}
  There appears to be a problem with your account. <br />
  Please contact your Account Manager, &#123;customer.accountManager}.
&#123;/if}" />

<p class="my-2">
Every component that needs some property of <code>customer</code> does the same thing: import <code>getContext</code> and use the parts of <code>customer</code> it needs.
</p>

<p class="my-2">So in Svelte, "context" is like a bag of goodies that a parent component can offer to its children. But this isn't a free-for-all; it only works in a straight line from parent to child to grandchild, etc. This is what we mean by a "single component chain."</p>

<p class="my-2">So to sum it up: context is a way to share data, but it's confined to a straight line of related components. Each line (or chain) can have its own separate context, and individual components can add more to it for their kiddos.</p>


</main>