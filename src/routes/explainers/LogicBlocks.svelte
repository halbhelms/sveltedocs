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

<PageTitle title="Logic Blocks" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
Svelte has its own way of introducing logic and processes into the web page. In this Explainer, we explore each one.
</p>

<PageSubTitle subtitle="If statements" />
<p class="my-2">
Used to determine display based on the truth of a condition.
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  const user = &#123;
    name: 'Noah Sweat',
    advantagePlus: true,
    advantage: false
  }
</script>

<h2>Your Benefits</h2>
<ul>
&#123;#if user.advantagePlus}
  <li>dedicated customer advocate</li>
  <li>Advantage+ exclusive deals</li>
  <li>discount pricing</li>
  <li>priority access</li>
  <li>same-day shipment</li>
  <li>30-day refund</li>
  <li>extended warranty</li>
&#123;:else if user.advantage}
  <li>discount pricing</li>
  <li>priority access</li>
  <li>same-day shipment</li>
  <li>30-day refund</li>
  <li>extended warranty</li>
&#123;:else}
  <li>30-day refund</li>
  <li>extended warranty</li>
&#123;/if}
</ul> "/>

<PageSubTitle subtitle="Each loops" />
<p class="my-2">
Used to loop over an iterable data structure.
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  const people = [
    &#123;id: 1, firstName: 'Darlene', lastName: 'Edwards'},
    &#123;id: 2, firstName: 'James', lastName: 'Delmonico'},
    &#123;id: 3, firstName: 'Hudson', lastName: 'Harper'},
  ]  
</script>

&#123;#each people as person (person.id)}
  <p>&#123;person.name}</p>
&#123;/each}" />

<WalkThruHeader />
<WalkThru lineNumber="9">
The only thing interesting to note is this snippet: <code>(person.id)</code>. This snippet is known as a <em>key</em>. It helps Svelte do certain operations and prevents some esoteric bugs. It's not mandatory &mdash; your each loop will run without it &mdash; but it's highly recommended. The key doesn't have to be an <code>id</code>; it just needs to be unique to each item in the collection.
</WalkThru>

<p class="my-2">
We can also get how many times we've looped through the collection &mdash; the so-called <em>index</em> (although you can name it anything you choose). Remember that in JavaScript (and, by extension, Svelte) collections start with an index of <code>0</code>. (The best way we've found to explain zero-based indexing is that the index represents the position <em>away from the start of the collection</em> the current selection is.)
</p>

<CodeSnippet code="&#123;#each people as person, index (person.id)}
  <p>&#123;index} &#123;person.name}</p>
&#123;/each}" />

<p class="my-2">
You can provide an <code>:else</code> statement in case the collection is missing or empty.
</p>

<CodeSnippet code="&#123;#each people as person, index (person.id)}
  <p>&#123;index} &#123;person.name}</p>
&#123;:else}
  <p>No collection (or empty collection) found</p>
&#123;/each}" />

<p class="my-2">
You can also destructure portions of your collection.
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  const people = [
    &#123;id: 1, firstName: 'Darlene', lastName: 'Edwards'},
    &#123;id: 2, firstName: 'James', lastName: 'Delmonico'},
    &#123;id: 3, firstName: 'Hudson', lastName: 'Hawkins'},
  ]
</script>

&#123;#each people as &#123; id, firstName, lastName } (id)}
  <p>&#123;lastName}, &#123;firstName}</p>
&#123;:else}
  <p>No collection (or empty collection) found</p>
&#123;/each}" />

<PageSubTitle subtitle="await blocks" />
<p class="my-2">
Normally, you wouldn't request API data from a <code>+page.svelte</code> file. Instead, you'd use something like <code>+page.server.js</code>. But...in case you need to, Svelte provides <code>await</code> blocks. Let's see one in action.
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  async function fetchData() &#123;
    const response = await fetch('https://api.thecatapi.com/v1/images/search?api_key=<your_api_key>')
    return response.json()
  }
</script>

<main>
  &#123;#await fetchData()}
    <p>Loading data...</p>
  &#123;:then data}
    &#123;#if data}
      <h1>Here is your daily friendly cat picture</h1>
      <img src'&#123;data[0].url}' alt='A friendly cat pic'>
    &#123;:else}
      <p>No cat pic for you</p>
    &#123;/if}
  &#123;:catch error}
    <p>Error: &#123;error.message}</p>
  &#123;/await}
</main>" />



</main>