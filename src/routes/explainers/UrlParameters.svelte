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

<PageTitle title="URL Parameters" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
Now that we have the mechanism for dynamic routing ( <SeeMoreLink linkedText="Dynamic Routes" /> ) &mdash; now that we can have a url like <code>https://svelteinfo.com/products/91087</code>, we need to read the <code>id</code> &mdash; 91087 in this case.
</p>

<p class="my-2">
We will create two files for the <code>[id]</code> folder: <code>+page.server.js</code> and <code>+page.svelte.</code> <SeeMoreLink linkedText="Nested Routes" />. We know that Svelte will process first the <code>+page.server.js</code>. There we can pass information to the next file to be processed: <code>+page.svelte</code>. Let's look at <code>+page.server.js</code>.
</p>

<CodeSnippetHeader text="+page.server.js" />
<CodeSnippet code="export const load = async ( request ) => &#123;
  const id = request.params.id;
  // Here we would fetch the product information from the database
  // and return it to the page component.
  // For now, we'll just hard-code it.
  return &#123;
    product: &#123;
      id: id,
      name: 'Gaming Chair',
      price: 24990.29,
      image: 'gaming-chair.png'
    }
  }
}" />
<WalkThruHeader />
<WalkThru lineNumber="1">
This is how all our load files start &mdash; although, if you wish, you can destructure the parts of <code>request</code> you need as in:<br />
<code>export const load = async ( &#123; params } )</code>
</WalkThru>
<WalkThru lineNumber="2">
Since we opted out of destructuring <code>params</code>, this code will do the job. Why is it <code>.id</code>? Because we chose to use <code>id</code> for our dynamic route folder.
</WalkThru>
<WalkThru lineNumber="6">
Anything we wish to pass to <code>+page.svelte</code> must be <code>return</code>ed from the load function.
</WalkThru>
<WalkThru lineNumber="7">
What we want to pass along is a <code>product</code> object containg all the product information.
</WalkThru>

<p class="my-2">
And now on to <code>+page.svelte</code> where we can use that information.
</p>

<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  export let data
  const &#123; product } = data
</script>

<main>
  <h1> &#123;product.name}</h1>
  <p>
  Price: &#123;product.price}
  </p>

  <img src='../&#123;product.image}'>

  <button>
    Add to Cart
  </button>
</main>" />
<WalkThruHeader />
<WalkThru lineNumber="2">
The information passed from the <code>load</code> function of <code>+page.server.js</code> always presents itself as a prop named <code>data</code>
</WalkThru>
<WalkThru lineNumber="3">
Destructure <code>product</code> from <code>data</code>.
</WalkThru>

<p class="my-2">
The rest of the page uses <code>product</code> properties to produce this page:
</p>

<img src="../product-detail-page.png" width=375 alt="">

<p class="my-2">
BTW, seems like if you're charging almost $25K for a chair, it's somewhat <i>petty</i> to gouge for that extra 29 cents.
</p>

<Prev prevLink="dynamic-routes" prevText="Dynamic Routes" />
<Next nextLink="optional-dynamic-routes" nextText="Optional Dynamic Routes" />
</main>