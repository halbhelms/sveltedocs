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

<PageTitle title="Named Slots" />
<main class="md:mx-4 sm:mx-2">

<p class="first-line:uppercase first-line:tracking-wide first-line:text-xs
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-[2px] first-letter:float-left mb-1 first-letter:mt-[-6px]">
In the previous Explainer, we saw how <i>component children</i> can be accessed within a called component through the use of the <code>slot</code> tag. And we can still also send props to that component. Sometimes, though, we want to send more than one component child to the called component. In that case we use <i>named slots</i>. Let's see how they work.
</p>

<p class="my-2">
We have developed a <i>stunning</i> card template as part of our "Great X" series (where "X" is one of many different areas: composers, ballet dancers, convenience store operators &mdash; and many more). Here's one of them:
</p>

<img src="../card-beethoven.png" alt="Beethoven card" width="500" />

<CodeSnippetHeader text="StunningCard.svelte" />
<CodeSnippet code="<script>
  export let footer
</script>
<div>
  <h5><slot name='composer-name' /></h5>
  
  <p><slot name='summary'/></p>
  
  <p>&#123;footer}</p>
</div>" />

<WalkThruHeader />
<WalkThru lineNumber="5">
  This slot tag will be replaced by the contents of a  <i>named slot</i> called <code>composer-name</code>
</WalkThru>

<WalkThru lineNumber="7">
  This slot tag will be replaced by the contents of a  <i>named slot</i> called <code>summary</code>
</WalkThru>

<WalkThru lineNumber="9">
  This displays a prop passed into the component.
</WalkThru>

<p class="my-2">OK, we're set up to use component children. Who's going to use our <code>StunningCard</code> first?</p>


<CodeSnippetHeader text="+page.svelte" />
<CodeSnippet code="<script>
  import StunningCard from './StunningCard.svelte'
</script>

<StunningCard footer='Part of the Great Composers series'>
  <h1 slot='composer-name'>Ludwig van Beethoven</h1>
  
  <div slot='summary'>
    <p>Born: 1770</p>
    <p>Died: 1827</p>
    <p>Symphonies: 9</p>
  </div>
</StunningCard>" />

<WalkThruHeader />
<WalkThru lineNumber="5">
We provided an opening tag the imported component, <code>StunningCard.svelte</code>, passing it a prop of <code>footer</code>.
</WalkThru>

<WalkThru lineNumber="6">
We write an <code>H1</code> tag with a named slot of <code>composer-name</code>.
</WalkThru>

<WalkThru lineNumber="8">
We write a <code>div</code> tag with a named slot of <code>summary</code>.
</WalkThru>

<p class="my-2">
And that's all there is to named slots. Except for <i>slot props</i> and <i>slot fallbacks...</i>
</p>

<Prev prevText="Component Children 2" prevLink="component-children-2" />
<Next nextText="Slot Props & Slot Fallbacks" nextLink="slot-props" />

</main>