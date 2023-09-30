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

<PageTitle title="Component Children 2" />
<main class="md:mx-4 sm:mx-2">


<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  import CustomerChooser from './CustomerChooser.svelte'
  export let data
  const &#123; customerType } = data
  const customers = &#123;
    residential: '<option value='100'>Hatem</option><option value='200'>Hal</option>',
    commercial: '<option value='1000'>Svelters, Inc.</option><option value='2000'>GO Wizards</option>'
  }
</script>

<form method='POST'>
  <input name='representative-name' placeholder='Representative name' />
  <CustomerChooser>
    &#123;@html customers[customerType]}
  </CustomerChooser>
  <button>Submit</button>
</form>" />

<p class="ml-4 text-extrabold font-bold  text-indigo-700">Line Number Walk-Thru</p>
<div class="my-2 ml-3">
  <div class="grid grid-cols-[50px_auto]">
    <WalkThru lineNumber=2 />
    <p>Data sent from <code>+page.server.js</code> must be declared as <code>data</code>. <SeeMoreLink linkedText="Form Actions" /></p>
  </div>
  <div class="grid grid-cols-[50px_auto]">
    <WalkThru lineNumber=5 />
    <p>We've created option values for both residential and commercial customers. Note that in a real application, this would likely be sent to <code>+page.svelte</code> from <code>+page.server.js</code>.</p>
  </div>
  <div class="grid grid-cols-[50px_auto]">
    <WalkThru lineNumber=14 />
    <p>Anything between the opening <code>&lt;CustomerChooser></code> and closing <code>&lt;/CustomerChooser></code> tags is called <i>component children</i>. Normally, Svelte would strip out the HTML in the component children as a safety measure. Since we want this HTML to be interpreted, we use the Svelte directive, <code>@html</code> as a preface.</p>
  </div>
</div>

<div class="mt-10">
  <CodeSnippetHeader text="CustomerChooser.svelte" />
<CodeSnippet code="<select name='customer-number'>
  <slot />
</select>" />

<p class="ml-4 text-extrabold font-bold  text-indigo-700">Line Number Walk-Thru</p>
<div class="my-2 ml-3">
  <div class="grid grid-cols-[50px_auto]">
    <WalkThru lineNumber=5 />
    <p>The <code>slot</code> tag will be replaced by the component children.</p>
  </div>
</div>
</div>

<p class="my-2">We feel compelled to say that what we've presented here is definitely contrived in order to illustrate how component children work &mdash; and might be useful. It's not meant as a model for solving any particular problem. Hopefully, this disclaimer will dispense with nasty emails asking us "<i>Have you ever actually programmed before?</i>"</p>

<p class="my-2">We're about to wrap up our discussion of component children, but first, let's look at the case where we need separate component children.</p>


<Prev prevText="Component Children" prevLink="component-children" />
<Next nextText="Named Slots" nextLink="component-named-slots" />
</main>
