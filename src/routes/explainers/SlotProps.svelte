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

<PageTitle title="Slot Props & Slot Fallbacks" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
One important, if confusing, feature of slots is so-called <i>slot props.</i> This is an area where a demonstration &mdash; even a highly contrived one &mdash; is essential to understanding.
</p>

<p class="my-2">
Let's first look at a component called <code>AuthorList</code>.

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
    <h3> 
      <slot 
        name='author' 
        firstName=&#123;author.firstName} 
        lastName=&#123;author.lastName} 
        genre=&#123;author.genre}
      /> 
    </h3>
  &#123;/each}
</div>" />
</p>

<WalkThruHeader />
<WalkThru lineNumber="2">
We start off with the component...having an array of authors? Is that really a component's job to have this kind of data hard-coded? Well, since you put it that way...No. But! we did indicate this was a highly contrived example. Just go with it.
</WalkThru>
<WalkThru lineNumber="13">
Here's where things start to get confusing. We loop over the (misplaced) <code>authors</code> array. The weird concatenation of first and last names is there to provide a key for the loop. Normally, we'd use something like an id, but here, we just need some value that's unique for each row.
</WalkThru>
<WalkThru lineNumber="15">
Inside the loop, we have a &mdash; what do you call it? That's right. Thank you. It's a <i>named slot</i>.
</WalkThru>
<WalkThru lineNumber="17">
What is going on? Inside a slot, we just display the component children. What's going on with <code>firstName=&#123;author.firstName}</code>. It does look odd and it is a litle odd. It might look like we're going to display this with the loop? No. We're passing <i>back</i> to the calling code a name/value pair. We'll have to see how this is used inside the calling code in <code>+page.svelte</code>.
</WalkThru>
<WalkThru lineNumber="18">
Ditto
</WalkThru>
<WalkThru lineNumber="19">
Ditto
</WalkThru>

<p class="my-2">Next up: <code>+page.svelte</code></p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  import AuthorList from './AuthorList.svelte'
</script>

<main>
  <AuthorList>
    <h3 slot='author' let:firstName let:lastName>
      &#123;lastName}, &#123;firstName}
    </h3>
  </AuthorList>
</main>" />

<WalkThruHeader />
<WalkThru lineNumber="2">
Import the <code>AuthorList</code> component.
</WalkThru>
<WalkThru lineNumber="6">
Begin calling <code>AuthorList</code>...
</WalkThru>
<WalkThru lineNumber="7">
OK, this is where we specify the component children within a named slot. But we've never seen anything like <code>let:firstName</code> or <code>let:lastName</code> before. That's because this syntax is only used in prop slots. This is a declaration that states that the calling code expects to be passed two variables: <code>firstName</code> and <code>lastName</code>. And where are these variables being passed from? Cast your eyes up to lines 17 and 18 of our <code>AuthorList</code> code. <code>AuthorList</code> is <i>passing</i> <code>firstName</code> and <code>lastName</code>. And <code>+page.svelte</code> is <i>receiving</i> <code>firstName</code> and <code>lastName</code>. "But wait!", you interject. "<code>AuthorList</code> actually passed <i>three</i> name/value pairs. What happened to <code>genre</code>?" In this case, <code>+page.svelte</code> chose not to use it.
</WalkThru>


</main>
