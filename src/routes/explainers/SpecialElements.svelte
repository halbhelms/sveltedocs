<script>
  import Screenshot from '$lib/components/page-elements/Screenshot.svelte'
  import BrowserWindow from '$lib/components/page-elements/BrowserWindow.svelte'
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

<PageTitle title="Special Elements" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
This Explainer tackles a number of <em>special elements</em> available in Svelte.
</p>

<PageSubTitle subtitle="svelte:self" />
<p class="my-2">
Useful when you wish to call a component recursively &mdash; that is, have the component call itself. To prevent an endless loop, it must appear either within an <code>#each</code> tag or an <code>#if</code> statement. This is particularly useful for recursive components. One of the most classic examples of this is a nested comments system or a tree view.

Let's look at a simple tree structure using svelte:self.
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  import TreeView from './TreeView.svelte';

  let tree = &#123;
    label: 'Root',
    children: [
      &#123;
        label: 'Child 1',
        children: [
          &#123; label: 'Grandchild 1' },
          &#123; label: 'Grandchild 2' }
        ]
      },
      &#123;
        label: 'Child 2',
        children: [
          &#123;
            label: 'Grandchild 3',
            children: [
              &#123; label: 'Great-Grandchild 1' }
            ]
          }
        ]
      }
    ]
  };
</script>

<TreeView node=&#123;tree} />" />

<WalkThruHeader />
<WalkThru lineNumber="1">
Creates a family tree of objects.
</WalkThru>
<WalkThru lineNumber="29">
Calls the child component, <code>TreeView</code>, passing the entire family tree.
</WalkThru>


<CodeSnippetHeader text="TreeView.svelte" />
<CodeSnippet code="<script>
  export let node;

  let isOpen = false;

  function toggle() &#123;
    isOpen = !isOpen;
  }
</script>

<!-- Display node label -->
<button on:click=&#123;toggle}>&#123;node.label}</button>

<!-- If node has children and is open, display them recursively -->
&#123;#if node.children && isOpen}
  <ul>
    &#123;#each node.children as child}
      <li>
        <svelte:self node=&#123;child} />
      </li>
    &#123;/each}
  </ul>
&#123;/if}" />

<WalkThruHeader />
<WalkThru lineNumber="15" end="23">
Recursively loops until all nodes and children have been displayed
</WalkThru>

<WalkThru lineNumber="19">
The component calls itself recursively using <code>svelte:self</code>
</WalkThru>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  import TreeView from './TreeView.svelte';

  let tree = &#123;
    label: 'Root',
    children: [
      &#123;
        label: 'Child 1',
        children: [
          &#123; label: 'Grandchild 1' },
          &#123; label: 'Grandchild 2' }
        ]
      },
      &#123;
        label: 'Child 2',
        children: [
          &#123;
            label: 'Grandchild 3',
            children: [
              &#123; label: 'Great-Grandchild 1' }
            ]
          }
        ]
      }
    ]
  }
</script>

<TreeView node=&#123;tree} />" />

<WalkThruHeader />
<WalkThru lineNumber="29">
Calls the child component passing the entire family tree object
</WalkThru>

<p class="my-2">
With all nodes opened, this is the display:
</p>

<Screenshot src="../svelte-self.png" width="380rem" />

<PageSubTitle subtitle="svelte:component" />

<p class="my-2">
<em>This</em> special element is one we're particularly grateful for, as it's responsible for making it much easier to create SvelteInfo. Here was our problem: we had dozens of Explainers to write. The idea of having dozens of routes, dozens of <code>+page.server.js</code> and <code>+page.svelte</code> files seemed a very bad idea. We wanted to have <em>one</em> <code>+page.server.js</code> and <em>one</em> <code>+page.svelte</code> file to write. From there, we wanted to swap in and out various Explainers, one at a time, as needed.
</p>

<p class="my-2">
We created one dynamic route, <code>[slug]</code>, in an <code>explainers</code> route folder. Now, from a URL like <code>svelteinfo.com/explainers/special-elements</code>, we could pick off the last bit, <code>special-elements</code>. That would be accessible as <code>params.slug</code>. Let's look at the code for <code>+page.server.js</code>:
</p>

<CodeSnippetHeader text="+page.server.js" />
<CodeSnippet code="import &#123; models } from '$lib/server/db/index.js'
const &#123; Link } = models

export async function load(&#123; params }) &#123;
    const explainer = await Link.getLinkBySlug(params.slug)
    return &#123;explainer}
}" />

<WalkThruHeader />
<WalkThru lineNumber="1" end="2">
The <code>Link</code> object gets us access to a database in which slugs are matched to Explainer file names. For example, the slug, <code>special-elements</code> matches to an Explainer named <code>SpecialElements.svelte</code>.
</WalkThru>

<WalkThru lineNumber="4" end="7">
From the <code>load</code> function, we made a call to the <code>Link</code> object to get the Explainer file matching <code>params.slug</code>. We then pass that to our corresponding <code>+page.svelte</code> file.
</WalkThru>

<p class="my-2">
Now, let's look at the <code>+page.svelte</code> file.
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  import &#123; onMount } from 'svelte'
  export let data;
  const &#123; explainer } = data
  let DynamicComponent

  onMount( async () => &#123;
    if (typeof window !== 'undefined') &#123;
     DynamicComponent = (await import(`../$&#123;data.explainer.main_component}`)).default
    }
  })
</script>

<svelte:component this=&#123;DynamicComponent} />" />

<WalkThruHeader />
<WalkThru lineNumber="9">
It's not enough to know which Explainer to <em>use</em>; we had to know which Explainer to <em>import</em>. 
</WalkThru>

<WalkThru lineNumber="14">
Once that file was imported, we could call the component dynamically, using our new friend, <code>svelte:component</code>.
</WalkThru>

<PageSubTitle subtitle="svelte:element" />
<p class="my-2">
As the official docs point out, this element allows us to dynamically use a DOM element. <code>svelte:element</code> does for elements what <code>svelte:component</code> does for components. Let's look at an example, although admittedly contrived.
</p>

<p class="my-2">
Let's take an example of a generic button vs. link scenario: imagine you have a component <code>ButtonOrLink.svelte</code> which, based on a prop, will render either a <code>&lt;button></code> or an <code>&lt;a></code> (link).
</p>

<CodeSnippetHeader text="ButtonOrLink.svelte" />
<CodeSnippet code="<script>
  export let useLink = false
  export let href = '#'
  export let text = 'Click'
</script>

<svelte:element 
  this= &#123;useLink ? 'a' : 'button'} 
  href=&#123;useLink ? href : undefined} 
  on:click=&#123;() => alert('Clicked!')} 
  class:border-black=&#123;!useLink} 
  &#123;text}
</svelte:element>" />

<WalkThruHeader />
<WalkThru lineNumber="7" end="8">
These are the important lines: these determine whether to display a <code>button</code> or an <code>a</code> element depending on whether the prop, <code>useLink</code> is passed in. (If <code>useLink</code> <em>was</em> passed in, we would want the <code>a</code> element. If not, we would want the <code>button</code> element. )
</WalkThru>

<WalkThru lineNumber="9" end="11">
These provide correct properties based on the tab selection.
</WalkThru>

<WalkThru lineNumber="12">
The <code>text</code> prop will be placed either on the button or between the link tags.
</WalkThru>

<p class="my-2">
In the calling page, you can call it as a button with: <code>&lt;ButtonOrLink text="Click moi" /></code> or as a link with <code>&lt;ButtonOrLink useLink={true} href="/some-page" text="Visit Page" /></code>
</p>

</main>