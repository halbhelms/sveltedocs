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

<PageTitle title="Derived Stores" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
What &mdash; <em>more</em> stores? Yes, but this one is particularly sweet. <em>Derived</em> stores are stores that <em>derive</em> their value from <em>other store/s</em>. When the value of (one of) the derived store/s changes, the value of the derived store changes &mdash; and components subscribed to the derived store are notified. Let's take a look.
</p>

<p class="my-2">
For our example, let's say we have an app that monitors how many customer a CSR (customer service representative) processes. We can display the top three CSRs in our app:
</p>

<figure>
  <img src="../derived-store.png" alt="Results of a derived store" width=300 />
  <figcaption class="italic text-xs ml-8">Top three CSRs</figcaption>
</figure>

<p class="my-2">
But CSRs are constantly processing new customers and those standings change over time. The top three in one moment may be different in the next. 
</p>

<p class="my-2">
Derived stores are a good solution. Let's look at the file in which we create the stores.
</p>

<CodeSnippetHeader text="src/stores/index.js" />
<CodeSnippet code="import &#123; writable, derived } from 'svelte/store';

export const csrs = writable([  
  &#123;id: 1, name: 'Jim Jenson', processed: 42},
  &#123;id: 2, name: 'John Johnson', processed: 12},
  &#123;id: 3, name: 'Jane Jenson', processed: 32},
  &#123;id: 4, name: 'Jill Johnson', processed: 22},
  &#123;id: 5, name: 'Jack Jenson', processed: 52},
  &#123;id: 6, name: 'Jenny Johnson', processed: 62}
])

export const topProducers = derived(csrs,  ($csrs) => &#123;
  return $csrs.sort((a, b) => &#123;
    if (a.processed > b.processed) return -1;
    if (a.processed < b.processed) return 1;
    return 0;
  }).slice(0,3)
})" />

<WalkThruHeader />
<WalkThru lineNumber="1">
We begin by importing <code>writable</code> and <code>derived</code>.
</WalkThru>

<WalkThru lineNumber="3">
We'll create a writable store named <code>csrs</code> that holds data on the CSRs. We want it to be writable because as a CSR processes another client, we need to update it. (See the caveat about the global nature of stores in <SeeMoreLink linkedText="Stores" /> )
</WalkThru>

<WalkThru lineNumber="12">
To create a <em>derived</em> store, we pass it the store/s it derives its value from. In our example, we only depend on the writable store, <code>csrs.</code>. After declaring that stores depended on, we provide a function that will produce the value. We pass into it <code>$csrs</code> &mdash; the <code>$</code> prefix because (a) we wish to subscribe to the store and (b) we want to pass the actual value of the <code>csrs</code> store, not the store object itself.
</WalkThru>

<WalkThru lineNumber="13">
We <em>sort</em> the CSRs by their <code>processed</code> property in descending order.
</WalkThru>

<WalkThru lineNumber="17">
With the CSRs sorted, we use <code>slice</code> to get the top three.
</WalkThru>

<p class="my-2">
Now, let's look at the <code>+page.svelte</code> file that uses the derived store, <code>topProducers</code>.
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>import &#123; topProducers } from '../../stores/'</script>

<p>Top Producers</p>
<ul>
  &#123;#each $topProducers as csr (csr.id)}
    <li>&#123;csr.name}</li>
  &#123;/each}
</ul>" />

<p class="my-2">
When the <code>csrs</code> store changes, the derived store, <code>topProducers</code>, changes and the page will update to reflect the change.
</p>


<Prev prevLink="readable-stores" prevText="Readable Stores" />
</main>