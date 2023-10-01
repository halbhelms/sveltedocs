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

<PageTitle title="Slot Props: A Better Way" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
In the previous Explainer, we showed the component sending back individual name/value pairs. There's nothing wrong with that, but if we have a complex value &mdash; an Object, an Array, a Map &mdash; sending the entire value back will make out code tighter and possibly give the caller more flexibility in what they wish to send to us.
</p>

<p class="my-2">
We'll use exactly the same example, but make that one change.
</p>

<CodeSnippetHeader text="AuthorList.svelte" />
<CodeSnippet code="<script>
  const authors = [
    &#123;firstName: 'John', lastName: 'Irving', genre: 'Literature'},
    &#123;firstName: 'Stephen', lastName: 'King', genre: 'Horror'},
    &#123;firstName: 'J.K.', lastName: 'Rowling', genre: 'Young Adult'},
    &#123;firstName: 'Tom',  lastName: 'Clancy', genre: 'Espionage'},
    &#123;firstName: 'Jirō', lastName: 'Akagawa', genre: 'Mystery'},
    &#123;firstName: 'James', lastName: 'Patterson', genre: 'Thriller'}
  ]
</script>

<div>
  &#123;#each authors as author (`$&#123;author.firstName_author.lastName}`)}
    <h3> <slot name='author' author=&#123;author}/> </h3>
  &#123;/each}
</div>" />

<WalkThruHeader />
<WalkThru lineNumber="14">
If you're into shortcuts (we're kind of ambivalent about them) you can replace <code>author=&#123;author}</code> with <code>&#123;author}</code>. This works because the name and the variable name holding the value are the same.
</WalkThru>

<p class="my-2">Next up: <code>+page.svelte</code></p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  import AuthorList from './AuthorList.svelte'
</script>

<main>
  <AuthorList>
    <h3 slot='author' let:author >
      &#123;author.lastName}, &#123;author.firstName}
    </h3>
  </AuthorList>
</main>" />

<WalkThruHeader />
<WalkThru lineNumber = 7>
No need to specify the individual properties of the object; our simpler code specifies the entire object, <code>author</code>.
</WalkThru>
<WalkThru lineNumber = 8>
Now, the entirety of <code>author</code> is available to us.
</WalkThru>

<p class="my-2"><span class="text-2xl">😄</span> Better, don't you think?</p>

<Prev prevText="Slot props & slot fallbacks" prevLink="slot-props" />
<Next nextText="$$slots" nextLink="$$slots" />

</main>
