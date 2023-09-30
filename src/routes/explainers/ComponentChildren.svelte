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

  $: seeMoreActive: false
</script>

<PageTitle title="Component Children" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
The most common way for parents to communicate with imported components is through <i>props</i>. There's another way that this Explainer will explore: <i>component children</i>.
</p>

<p class="my-2">
First, let's set up a scenario: we have a <code>+page.svelte</code> file with a very simple form &mdash; one that asks for <code>representative-name</code> and <code>customer-number</code>. Of course, the <code>+page.svelte</code> file could just have two inputs, but we've made things a little more interesting/complicated: we have a separate <code>CustomerChooser</code> component that is a <code>select</code> input, and we have two lists of customers to present to the user: a residential list of customers and a commercial list of customers. Which one we show the user depends on a <i>query string</i>.
</p>

<p class="my-2">
A query string is an optional portion of a URL that provides more information in the form of <code>name=value</code>. In this URL...
</p>

<code>http://some-domain.com/customer-form?<b>type=commercial</b></code>

<p class="my-2">...the part of the URL that follows the question mark is the query string. The name is <code>type</code>, the value is <code>commercial</code>. Additional name/value pairs are delineated with an ampersand, as in: </p>
  
<code>http://some-domain.com/customer-form?type=commercial&scope=domestic&restricted=true</code>

<p class="my-2">For our example, our query string will have a name of <code>type</code> with possible values of either <code>residential</code> or <code>commercial</code>. Depending on which value for <code>type</code>, we will pass our <code>CustomerChooser</code> the correct set of customers for users to choose from.</p>

<p class="my-2">Let's look at the code followed by a line number walk through. The files involved are:</p>

<ul class="list-disc list-inside">
  <li><code>+page.server.js</code></li>
  <li><code>+page.svelte</code></li>
  <li><code>CustomerChoose.svelte</code></li>
</ul>

<CodeSnippetHeader text="+page.server.js" />
<CodeSnippet code="export const actions = &#123;
  default: async (&#123; request }) => &#123;
    const data = await request.formData();
    const representativeName = data.get('representative-name');
    const customerNumber = data.get('customer-number');
    console.log('representativeName', representativeName, 'customerNumber', customerNumber)
  }
}

export const load = async ( request ) => &#123;
  return &#123;
    customerType: request.url.searchParams.get('type')
  }
}" />

<p class="ml-4 text-extrabold font-bold  text-indigo-700">Line Number Walk-Thru</p>
<div class="my-2 ml-3">
  <div class="grid grid-cols-[50px_auto]">
    <WalkThru lineNumber=1 />
    <p>We're back to the familiar world of form actions. <SeeMoreLink linkedText="Form Actions" /></p>
  </div>
  <div class="grid grid-cols-[50px_auto]">
    <WalkThru lineNumber=10 />
    <p>The <code>load</code> function will read the query string to determine which <code>customerType</code> (residential or commercial) to provide the related <code>+page.svelte</code> file</p>
  </div>
  <div class="grid grid-cols-[50px_auto]">
    <WalkThru lineNumber=12 />
    <p>The <code>request</code> parameter contains a <code>url</code> object with a <code>searchParams</code> function, letting us retrieve the value of any query string value.</p>
  </div>
</div>

<Next nextText="Component Children 2" nextLink="component-children-2" />
</main>
