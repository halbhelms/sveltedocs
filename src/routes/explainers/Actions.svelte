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

<PageTitle title="Actions" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
Actions (not to be confused with <SeeMoreLink linkedText="Form actions" /> ) are functions that can add extra behavior to your HTML elements. Think of them as reusable mini-scripts that you can slap onto any element. You invoke them using the <code>use:</code> directive, like <code>use:myAction</code>. (For a wonderful example of a built-in action, see <SeeMoreLink linkedText="use:enhance"./> )
</p>

<p class="my-2">
Actions are very useful when you want to keep your components clean and don't want to clutter them with repetitive code. Let's create a sample "Scroll to Top" action on a paragraph. We'll create the action in a separate file:
</p>

<CodeSnippetHeader text="scrollToTop.js" />
<CodeSnippet code="export function scrollToTop(node) &#123;
  node.addEventListener('click', () => &#123;
    window.scrollTo(&#123;top: 0, behavior: 'smooth'})
  })

  return &#123;
    // cleanup function (optional)
    destroy() &#123;
      node.removeEventListener('click', () => &#123;
        window.scrollTo(&#123;top: 0, behavior: 'smooth'})
      })
    }
  }
}" />

<WalkThruHeader />
<WalkThru lineNumber="1">
The <code>node</code> parameter is the HTML element that uses the action.
</WalkThru>
<WalkThru lineNumber="7">
An optional cleanup function is available (and needed for this example).
</WalkThru>

<p class="my-2">
Now, to use our new action in a Svelte page:
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  import &#123; scrollToTop } from './scrollToTop.js'
</script>

<!-- (long page here...) -->

<p use:scrollToTop>Scroll to Top</p>" />

<p class="my-2">
Svelte actions are a godsend in writing modern web applications. The more you use them, the more uses you'll find for them.
</p>

</main>