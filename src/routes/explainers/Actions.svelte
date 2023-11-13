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
This "action function" is called immediately after the HTML element utilizing the action is mounted on the DOM. Let's look at the structure of a very simple action &mdash; then we'll look at an actual, useful one.
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="&lt;script>
  function colorMeRed(node, params) &#123;
  node.style.color = 'red'
}
</script>

<h2 use:colorMeRed style='color:green'>I am not red...</h2>" />

<WalkThruHeader />
<WalkThru lineNumber="7">
The <code>h2</code> tag includes <code>use:colorMeRed</code> &mdash; meaning that the <code>colorMeRed</code> function, defined earlier, will be called as soon as the protestations of the <code>h2</code> tag is seen. In other words, you only <em>think</em> you're not red, Mr. H2.
</WalkThru>

<WalkThru lineNumber="2">
Any action function you create receives two parameters: <code>node</code>, the HTML element from which the action executes and another one, <code>params</code>. More on <code>params</code> shortly...
</WalkThru>

<WalkThru lineNumber="3">
Now, we turn the color of the text of the <code>h2</code> tag to red.
</WalkThru>

<p class="my-2">
Now, this is an admittedly <em>bad</em> example of an action, but we wanted to keep it so simple that the actual behavior of the action (which can be quite complex) wasn't a distraction. But let's get back to that second parameter, <code>params</code>.
</p>

<p class="my-2">
You can, at your discretion, pass to an action an argument to be received by the action function. We've labeled that parameter, <code>params</code>. The argument passed can be of any data type. Let's see it in use, passing an object. And we'll change our action slightly to accomodate the passed argument.
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  function colorMe(node, params) &#123;
    node.style.color = params.desiredColor
  }
</script>

<h2 use:colorMe=&#123;&#123;desiredColor: 'green'}}>I wish I was green</h2>" />

<WalkThruHeader />
<WalkThru lineNumber="2">
We've changed the name of our function to indicate that we're taking no stance on which color to change the node text to.
</WalkThru>

<WalkThru lineNumber="3">
Now, we'll set the text color of <code>node</code> based on the <code>desiredColor</code> passed in.
</WalkThru>

<WalkThru lineNumber="7">
This is how we pass in <code>params</code> &mdash; in this case, an object with a property of <code>desiredColor</code>. And while this is a silly example, there is one important thing to note: we have created an action that could be used on multiple HTML elements, each one declaring the color they wish to be. We could expand this idea and have a separate JavaScript file with multiple available actions that are exported. Then, in our various <code>+page.svelte</code> files, we can import the desired actions and use them.
</WalkThru>

<p class="my-2">
Actions are very useful when you want to keep your components clean and don't want to clutter them with repetitive code. Let's create a more useful "Scroll to Top" action. We'll attach it to an HTML element that, when clicked, will scroll the focus to the top of the page. We'll create that action in a separate file:
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

<WalkThru lineNumber="2">
The behavior we want &mdash; click to scroll to top &mdash; requires an event listener. Of course, we could make add an <code>on:click=&#123;scrollToTop}</code> to the HTML element, writing a separate <code>scrollToTop</code> function, but placing this code in an action lets us re-implement this functionality in a variety of pages in a simple way.
</WalkThru>

<WalkThru lineNumber="7">
An optional <code>destroy</code> function is available for doing cleanup when the element is removed from the DOM (and needed for this example).
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